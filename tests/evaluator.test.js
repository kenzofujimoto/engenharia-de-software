const test = require('node:test');
const assert = require('node:assert/strict');
const { evaluateEvent } = require('../lib/evaluator');

const base = { room_id:'Q-204', occurred_at:'2026-09-12T12:00:00.000Z', sensor_status:'online', occupied:false, hvac_on:false, light_on:false, power_w:40, synthetic:true };

test('quarto vazio com ar ligado gera alerta', () => { const r=evaluateEvent({...base,hvac_on:true,power_w:1250}); assert.equal(r.classification,'ALERT'); assert.equal(r.rule_id,'ENERGY-AC-001'); assert.equal(r.human_confirmation_required,true); });
test('quarto ocupado não gera ação', () => { const r=evaluateEvent({...base,occupied:true,hvac_on:true,light_on:true}); assert.equal(r.classification,'OK'); assert.equal(r.human_confirmation_required,false); });
test('sensor indisponível encaminha para revisão humana', () => { const r=evaluateEvent({...base,sensor_status:'offline',occupied:null,hvac_on:true}); assert.equal(r.classification,'REVIEW'); assert.equal(r.rule_id,'SENSOR-001'); });
test('evento não sintético nunca vira automação', () => { const r=evaluateEvent({...base,synthetic:false,hvac_on:true}); assert.equal(r.classification,'REVIEW'); assert.equal(r.rule_id,'SCOPE-001'); });
