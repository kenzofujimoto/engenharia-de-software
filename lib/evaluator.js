const ONLINE_STATUSES = new Set(['online', 'ok', 'available']);
const WASTE_THRESHOLD_MINUTES = 120;

function boolOrNull(value) {
  if (value === true || value === false) return value;
  return null;
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeEvent(raw = {}) {
  const presence = Object.prototype.hasOwnProperty.call(raw, 'presence')
    ? boolOrNull(raw.presence)
    : boolOrNull(raw.occupied);
  const acOn = Object.prototype.hasOwnProperty.call(raw, 'ac_on')
    ? boolOrNull(raw.ac_on)
    : boolOrNull(raw.hvac_on);
  const timestamp = raw.timestamp || raw.occurred_at || null;
  const inferredSensorStatus = presence === null ? 'unavailable' : 'online';

  return {
    room_id: String(raw.room_id || '').trim(),
    timestamp,
    presence,
    sensor_status: String(raw.sensor_status || inferredSensorStatus).trim().toLowerCase(),
    ac_on: acOn,
    light_on: boolOrNull(raw.light_on),
    empty_minutes: numberOrNull(raw.empty_minutes),
    power_w: numberOrNull(raw.power_w),
    synthetic: raw.synthetic === true,
  };
}

function evaluateEvent(raw = {}) {
  const event = normalizeEvent(raw);

  if (!event.room_id) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', operational_state: 'HUMAN_REVIEW', rule_id: 'DATA-001',
      title: 'Evento sem identificação do quarto',
      rationale: 'Sem room_id não é possível correlacionar a leitura com um ambiente.',
      recommended_action: 'Revisar a origem do evento e o mapeamento do sensor.',
      evidence: ['room_id ausente'],
    });
  }

  if (!event.synthetic) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', operational_state: 'HUMAN_REVIEW', rule_id: 'SCOPE-001',
      title: 'Evento fora do escopo da PoC',
      rationale: 'A demonstração processa somente dados sintéticos.',
      recommended_action: 'Encaminhar para revisão humana e não executar automação.',
      evidence: ['synthetic != true'],
    });
  }

  if (!event.timestamp || Number.isNaN(Date.parse(event.timestamp))) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', operational_state: 'HUMAN_REVIEW', rule_id: 'DATA-TIME-001',
      title: 'Leitura sem timestamp confiável',
      rationale: 'A duração de vazio e a rastreabilidade dependem de uma referência temporal válida.',
      recommended_action: 'Revisar a leitura antes de classificar desperdício.',
      evidence: ['timestamp ausente ou inválido'],
    });
  }

  if (!ONLINE_STATUSES.has(event.sensor_status) || event.presence === null) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', operational_state: 'HUMAN_REVIEW', rule_id: 'SENSOR-001',
      title: 'Presença indisponível ou inconclusiva',
      rationale: 'Sem um sinal de presença confiável, consumo não deve virar alerta de desperdício automaticamente.',
      recommended_action: 'Solicitar verificação manual do quarto e do sensor.',
      evidence: [`sensor_status=${event.sensor_status || 'ausente'}`, 'presence=desconhecida'],
    });
  }

  if (event.presence === false && event.empty_minutes === null) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', operational_state: 'HUMAN_REVIEW', rule_id: 'DATA-EMPTY-001',
      title: 'Tempo de vazio não informado',
      rationale: `A regra de desperdício exige comprovar uma janela de ${WASTE_THRESHOLD_MINUTES} minutos sem presença.`,
      recommended_action: 'Revisar a leitura ou aguardar histórico suficiente.',
      evidence: ['presence=false', 'empty_minutes ausente'],
    });
  }

  if (event.presence === false && event.ac_on === true && event.empty_minutes >= WASTE_THRESHOLD_MINUTES) {
    return decision(event, {
      classification: 'ALERT', severity: 'high', operational_state: 'HUMAN_REVIEW', rule_id: 'ENERGY-AC-120',
      title: 'Possível desperdício de climatização',
      rationale: `O quarto está vazio há ${event.empty_minutes} minutos e o ar-condicionado permanece ligado.`,
      recommended_action: 'Confirmar o contexto e, se aplicável, encaminhar à operação predial. A PoC não controla o equipamento.',
      evidence: ['presence=false', `empty_minutes=${event.empty_minutes}`, 'ac_on=true'],
    });
  }

  if (event.presence === false && event.light_on === true && event.empty_minutes >= WASTE_THRESHOLD_MINUTES) {
    return decision(event, {
      classification: 'ALERT', severity: 'medium', operational_state: 'HUMAN_REVIEW', rule_id: 'ENERGY-LIGHT-120',
      title: 'Possível desperdício de iluminação',
      rationale: `O quarto está vazio há ${event.empty_minutes} minutos e a iluminação permanece ligada.`,
      recommended_action: 'Confirmar o contexto e encaminhar à operação predial, sem controle automático pela PoC.',
      evidence: ['presence=false', `empty_minutes=${event.empty_minutes}`, 'light_on=true'],
    });
  }

  if (event.presence === false && (event.ac_on === true || event.light_on === true)) {
    return decision(event, {
      classification: 'OK', severity: 'low', operational_state: 'MONITOR', rule_id: 'CTX-WAIT-120',
      title: 'Janela de observação em andamento',
      rationale: `Há carga ligada, mas o quarto está vazio há ${event.empty_minutes} minutos; o limiar de ${WASTE_THRESHOLD_MINUTES} minutos ainda não foi atingido.`,
      recommended_action: 'Continuar monitoramento. Nenhuma ação automática.',
      evidence: ['presence=false', `empty_minutes=${event.empty_minutes}`, `threshold=${WASTE_THRESHOLD_MINUTES}`],
    });
  }

  return decision(event, {
    classification: 'OK', severity: 'low', operational_state: 'NO_ACTION', rule_id: 'CTX-OK-001',
    title: 'Sem ação operacional',
    rationale: event.presence
      ? 'Há presença no quarto; o consumo observado possui contexto de ocupação.'
      : 'Quarto vazio sem cargas monitoradas ligadas.',
    recommended_action: 'Nenhuma ação. Continuar monitoramento.',
    evidence: [`presence=${event.presence}`, `ac_on=${event.ac_on}`, `light_on=${event.light_on}`],
  });
}

function decision(event, fields) {
  return {
    ...fields,
    room_id: event.room_id || null,
    occurred_at: event.timestamp,
    evaluated_at: new Date().toISOString(),
    human_confirmation_required: fields.classification !== 'OK',
    scope: 'synthetic-poc',
    event_snapshot: event,
    policy: { waste_threshold_minutes: WASTE_THRESHOLD_MINUTES },
  };
}

module.exports = { evaluateEvent, normalizeEvent, WASTE_THRESHOLD_MINUTES };
