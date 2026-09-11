const { evaluateEvent } = require('../lib/evaluator');

module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed', allowed: ['POST'] });
  }
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    return res.status(200).json(evaluateEvent(body));
  } catch (error) {
    return res.status(400).json({ error: 'invalid_event', message: 'O evento precisa ser JSON válido.' });
  }
};
