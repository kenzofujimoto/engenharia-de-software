const ONLINE = 'online';

function normalizeBool(value) {
  if (value === true || value === false) return value;
  return null;
}

function evaluateEvent(raw = {}) {
  const event = {
    room_id: String(raw.room_id || '').trim(),
    occurred_at: raw.occurred_at || new Date().toISOString(),
    sensor_status: String(raw.sensor_status || '').toLowerCase(),
    occupied: normalizeBool(raw.occupied),
    hvac_on: normalizeBool(raw.hvac_on),
    light_on: normalizeBool(raw.light_on),
    power_w: Number.isFinite(Number(raw.power_w)) ? Number(raw.power_w) : null,
    synthetic: raw.synthetic === true,
  };

  if (!event.room_id) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', rule_id: 'DATA-001',
      title: 'Evento sem identificação do quarto',
      rationale: 'Sem room_id não é possível relacionar presença e consumo com segurança.',
      recommended_action: 'Revisar origem do evento e corrigir o mapeamento do sensor.',
      evidence: ['room_id ausente'],
    });
  }

  if (!event.synthetic) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', rule_id: 'SCOPE-001',
      title: 'Evento fora do escopo da PoC',
      rationale: 'A demonstração aceita somente dados sintéticos e não atua sobre ambiente real.',
      recommended_action: 'Encaminhar para revisão humana; não executar automação.',
      evidence: ['synthetic != true'],
    });
  }

  if (event.sensor_status !== ONLINE || event.occupied === null) {
    return decision(event, {
      classification: 'REVIEW', severity: 'medium', rule_id: 'SENSOR-001',
      title: 'Presença indisponível ou inconclusiva',
      rationale: 'Sem um sinal de presença confiável, consumo não deve virar ação automática.',
      recommended_action: 'Solicitar verificação manual do quarto e do sensor.',
      evidence: [`sensor_status=${event.sensor_status || 'ausente'}`, `occupied=${event.occupied === null ? 'desconhecido' : event.occupied}`],
    });
  }

  if (event.occupied === false) {
    const wasteSignals = [];
    if (event.hvac_on === true) wasteSignals.push('ar-condicionado ligado');
    if (event.light_on === true) wasteSignals.push('iluminação ligada');
    if (wasteSignals.length) {
      return decision(event, {
        classification: 'ALERT', severity: event.hvac_on === true ? 'high' : 'medium',
        rule_id: event.hvac_on === true ? 'ENERGY-AC-001' : 'ENERGY-LIGHT-001',
        title: 'Consumo incompatível com quarto vazio',
        rationale: `O quarto está vazio e há ${wasteSignals.join(' e ')}.`,
        recommended_action: 'Confirmar o contexto e, se aplicável, acionar a operação predial para verificação.',
        evidence: ['occupied=false', ...wasteSignals, event.power_w !== null ? `power_w=${event.power_w}` : 'power_w=não informado'],
      });
    }
  }

  return decision(event, {
    classification: 'OK', severity: 'low', rule_id: 'CTX-OK-001',
    title: 'Sem ação operacional',
    rationale: event.occupied ? 'Há presença no quarto; o consumo observado possui contexto de ocupação.' : 'Quarto vazio sem cargas monitoradas ligadas.',
    recommended_action: 'Nenhuma ação. Continuar monitoramento.',
    evidence: [`occupied=${event.occupied}`, `hvac_on=${event.hvac_on}`, `light_on=${event.light_on}`],
  });
}

function decision(event, fields) {
  return { ...fields, room_id: event.room_id || null, occurred_at: event.occurred_at, evaluated_at: new Date().toISOString(), human_confirmation_required: fields.classification !== 'OK', scope: 'synthetic-poc', event_snapshot: event };
}

module.exports = { evaluateEvent };
