module.exports = function handler(_req, res) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ status: 'ok', service: 'quarto-inteligente-api', mode: 'synthetic-poc', controls_real_equipment: false, timestamp: new Date().toISOString() });
};
