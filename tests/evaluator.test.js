const test = require('node:test');
const assert = require('node:assert/strict');
const { evaluateEvent, WASTE_THRESHOLD_MINUTES } = require('../lib/evaluator');
const { createConfirmation } = require('../lib/confirmation');
const { computeMetrics } = require('../lib/metrics');

const base = { synthetic: true, timestamp: '2026-09-12T11:00:00-03:00', sensor_status: 'online' };

test('starter DEMO-201: vazio 120 minutos com ar ligado gera alerta', () => {
  const result = evaluateEvent({ ...base, room_id: 'DEMO-201', presence: false, ac_on: true, empty_minutes: 120 });
  assert.equal(result.classification, 'ALERT');
  assert.equal(result.rule_id, 'ENERGY-AC-120');
  assert.equal(result.policy.waste_threshold_minutes, 120);
});

test('starter DEMO-202: ocupado com ar ligado não gera ação', () => {
  const result = evaluateEvent({ ...base, room_id: 'DEMO-202', presence: true, ac_on: true, empty_minutes: 0 });
  assert.equal(result.classification, 'OK');
  assert.equal(result.operational_state, 'NO_ACTION');
});

test('starter DEMO-203: presença sem leitura gera revisão de sensor', () => {
  const result = evaluateEvent({ ...base, room_id: 'DEMO-203', presence: null, ac_on: true, empty_minutes: null });
  assert.equal(result.classification, 'REVIEW');
  assert.equal(result.rule_id, 'SENSOR-001');
});

test('119 minutos ainda fica em monitoramento sem alerta', () => {
  const result = evaluateEvent({ ...base, room_id: 'DEMO-204', presence: false, ac_on: true, empty_minutes: WASTE_THRESHOLD_MINUTES - 1 });
  assert.equal(result.classification, 'OK');
  assert.equal(result.operational_state, 'MONITOR');
});

test('quarto vazio sem empty_minutes vai para revisão por dado ausente', () => {
  const result = evaluateEvent({ ...base, room_id: 'DEMO-205', presence: false, ac_on: true });
  assert.equal(result.classification, 'REVIEW');
  assert.equal(result.rule_id, 'DATA-EMPTY-001');
});

test('evento não sintético é bloqueado pelo escopo', () => {
  const result = evaluateEvent({ ...base, synthetic: false, room_id: 'REAL-001', presence: false, ac_on: true, empty_minutes: 200 });
  assert.equal(result.classification, 'REVIEW');
  assert.equal(result.rule_id, 'SCOPE-001');
});

test('humano pode rejeitar alerta sem efeito sobre equipamento', () => {
  const confirmation = createConfirmation({
    decision_id: 'DEC-1', room_id: 'DEMO-201', outcome: 'false_positive',
    decision_created_at: '2026-09-12T12:00:00.000Z', confirmed_at: '2026-09-12T12:00:07.000Z',
  });
  assert.equal(confirmation.outcome, 'false_positive');
  assert.equal(confirmation.response_seconds, 7);
  assert.equal(confirmation.effect, 'record_only_no_equipment_control');
});

test('métricas contam úteis, falsos e tempo de confirmação', () => {
  const decisions = [
    { id: '1', human_confirmation_required: true },
    { id: '2', human_confirmation_required: true },
    { id: '3', human_confirmation_required: false },
  ];
  const confirmations = [
    { decision_id: '1', outcome: 'false_positive', response_seconds: 4 },
  ];
  const metrics = computeMetrics(decisions, confirmations);
  assert.equal(metrics.open_occurrences, 1);
  assert.equal(metrics.false_alerts, 1);
  assert.equal(metrics.avg_confirmation_seconds, 4);
  assert.equal(metrics.sample_size.actionable, 2);
});
