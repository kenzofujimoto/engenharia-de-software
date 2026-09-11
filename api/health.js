module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    ok: true,
    service: 'quarto-inteligente-api',
    version: '0.2.0',
    mode: 'synthetic-poc',
    persistence: 'browser-session-localstorage',
    database: 'not-configured-oracle-pending',
    controls_real_equipment: false,
    now: new Date().toISOString(),
  });
};
