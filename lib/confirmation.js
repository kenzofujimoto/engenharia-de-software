const ALLOWED_OUTCOMES = new Set(['useful', 'false_positive', 'review_completed']);

function createConfirmation(raw = {}) {
  if (!raw.decision_id) throw new Error('decision_id_required');
  if (!ALLOWED_OUTCOMES.has(raw.outcome)) throw new Error('invalid_outcome');

  const createdAt = new Date(raw.decision_created_at || Date.now());
  const confirmedAt = new Date(raw.confirmed_at || Date.now());
  if (Number.isNaN(createdAt.getTime()) || Number.isNaN(confirmedAt.getTime())) throw new Error('invalid_timestamp');

  return {
    id: raw.id || `CONF-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    decision_id: String(raw.decision_id),
    room_id: raw.room_id ? String(raw.room_id) : null,
    outcome: raw.outcome,
    confirmed_at: confirmedAt.toISOString(),
    response_seconds: Math.max(0, Math.round((confirmedAt - createdAt) / 1000)),
    note: raw.note ? String(raw.note).slice(0, 500) : null,
    actor: 'demo-operator',
    effect: 'record_only_no_equipment_control',
  };
}

module.exports = { createConfirmation, ALLOWED_OUTCOMES };
