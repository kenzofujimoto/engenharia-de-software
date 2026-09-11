function computeMetrics(decisions = [], confirmations = []) {
  const resolvedIds = new Set(confirmations.map(c => c.decision_id));
  const actionable = decisions.filter(d => d.human_confirmation_required);
  const open = actionable.filter(d => !resolvedIds.has(d.id)).length;
  const useful = confirmations.filter(c => c.outcome === 'useful' || c.outcome === 'review_completed').length;
  const falseAlerts = confirmations.filter(c => c.outcome === 'false_positive').length;
  const responseTimes = confirmations.map(c => Number(c.response_seconds)).filter(Number.isFinite);
  const avgResponseSeconds = responseTimes.length
    ? Math.round(responseTimes.reduce((sum, value) => sum + value, 0) / responseTimes.length)
    : null;

  return {
    open_occurrences: open,
    useful_alerts: useful,
    false_alerts: falseAlerts,
    avg_confirmation_seconds: avgResponseSeconds,
    confirmation_rate: actionable.length ? Number(((actionable.length - open) / actionable.length).toFixed(2)) : 0,
    sample_size: { decisions: decisions.length, actionable: actionable.length, confirmations: confirmations.length },
    scope: 'demo_session_only',
  };
}

module.exports = { computeMetrics };
