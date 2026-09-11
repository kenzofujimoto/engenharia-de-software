const STORAGE_KEY='quarto-inteligente-demo-v2';
const emptyState=()=>({rooms:{},decisions:[],confirmations:[],metrics:null,dataset:null});
let state=loadState();
let officialEvents=[];
const $=id=>document.getElementById(id);
const fmtTime=iso=>iso?new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date(iso)):'—';

function loadState(){
  try{
    const parsed=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(parsed&&Array.isArray(parsed.decisions)&&Array.isArray(parsed.confirmations))return {...emptyState(),...parsed,rooms:parsed.rooms||{}};
  }catch{}
  return emptyState();
}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function uid(prefix='DEC'){return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}

async function loadDataset(){
  try{
    const res=await fetch('/data/eventos_sensor_mock.json',{cache:'no-store'});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    const data=await res.json();
    officialEvents=Array.isArray(data.events)?data.events:[];
    state.dataset={source:data.source||'Health AI starter oficial',loaded_at:new Date().toISOString(),event_count:officialEvents.length};
    persist();
    renderScenarioButtons();
  }catch(error){
    officialEvents=[];
    $('datasetStatus').textContent='dataset oficial indisponível';
  }
}

function normalizeForApi(event){
  return {
    room_id:String(event.room_id||'').trim(),
    timestamp:event.timestamp||new Date().toISOString(),
    presence:event.presence===null?null:event.presence===true,
    sensor_status:event.sensor_status||(event.presence===null?'unavailable':'online'),
    ac_on:event.ac_on===true,
    light_on:event.light_on===true,
    empty_minutes:event.empty_minutes===null||event.empty_minutes===undefined||event.empty_minutes===''?null:Number(event.empty_minutes),
    power_w:event.power_w===null||event.power_w===undefined||event.power_w===''?null:Number(event.power_w),
    synthetic:true,
  };
}

async function evaluate(event,options={}){
  const expected=event.expected||null;
  const payload=normalizeForApi(event);
  let decision;
  try{
    if(options.forceServiceFailure)throw new Error('simulated_service_unavailable');
    const res=await fetch('/api/evaluate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    decision=await res.json();
  }catch(error){
    decision=serviceUnavailableDecision(payload,error.message);
  }
  decision.id=uid('DEC');
  decision.created_at=new Date().toISOString();
  decision.fixture_expected=expected;
  decision.origin=options.origin||'manual';
  state.decisions.unshift(decision);
  state.rooms[payload.room_id]={event:payload,decision_id:decision.id};
  persist();
  render();
  await refreshMetrics();
  return decision;
}

function serviceUnavailableDecision(event,note){
  return {
    room_id:event.room_id,
    occurred_at:event.timestamp,
    evaluated_at:new Date().toISOString(),
    classification:'REVIEW',severity:'medium',operational_state:'HUMAN_REVIEW',rule_id:'SERVICE-001',
    title:'Serviço de decisão indisponível',
    rationale:'A API de avaliação não respondeu. O sistema não cria uma decisão energética local como se nada tivesse acontecido.',
    recommended_action:'Manter o caso em revisão manual e tentar novamente quando o serviço estiver disponível.',
    human_confirmation_required:true,
    event_snapshot:event,
    evidence:[`service_error=${note}`],
    scope:'synthetic-poc',
    policy:{waste_threshold_minutes:120},
  };
}

function localMetrics(){
  const resolved=new Set(state.confirmations.map(c=>c.decision_id));
  const actionable=state.decisions.filter(d=>d.human_confirmation_required);
  const times=state.confirmations.map(c=>Number(c.response_seconds)).filter(Number.isFinite);
  return {
    open_occurrences:actionable.filter(d=>!resolved.has(d.id)).length,
    useful_alerts:state.confirmations.filter(c=>c.outcome==='useful'||c.outcome==='review_completed').length,
    false_alerts:state.confirmations.filter(c=>c.outcome==='false_positive').length,
    avg_confirmation_seconds:times.length?Math.round(times.reduce((a,b)=>a+b,0)/times.length):null,
    confirmation_rate:actionable.length?Number(((actionable.length-actionable.filter(d=>!resolved.has(d.id)).length)/actionable.length).toFixed(2)):0,
  };
}

async function refreshMetrics(){
  const fallback=localMetrics();
  state.metrics=fallback;
  renderMetrics();
  try{
    const res=await fetch('/api/metrics',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({decisions:state.decisions,confirmations:state.confirmations})});
    if(!res.ok)throw new Error();
    state.metrics=await res.json();
    persist();
    renderMetrics();
  }catch{}
}

async function resolveDecision(id,outcome){
  const d=state.decisions.find(x=>x.id===id);
  if(!d||state.confirmations.some(c=>c.decision_id===id))return;
  const payload={decision_id:id,room_id:d.room_id,outcome,decision_created_at:d.created_at,confirmed_at:new Date().toISOString()};
  let confirmation;
  try{
    const res=await fetch('/api/confirm',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!res.ok)throw new Error();
    confirmation=await res.json();
  }catch{
    confirmation={id:uid('CONF'),...payload,response_seconds:Math.max(0,Math.round((new Date(payload.confirmed_at)-new Date(payload.decision_created_at))/1000)),actor:'demo-operator',effect:'record_only_no_equipment_control'};
  }
  state.confirmations.unshift(confirmation);
  persist();
  render();
  await refreshMetrics();
  toast(outcome==='false_positive'?'Alerta rejeitado e decisão humana registrada.':'Confirmação humana registrada.');
}
window.resolveDecision=resolveDecision;

function render(){renderRooms();renderQueue();renderTimeline();renderMetrics();renderSessionMeta()}
function decisionFor(id){return state.decisions.find(d=>d.id===id)}
function confirmationFor(id){return state.confirmations.find(c=>c.decision_id===id)}

function renderRooms(){
  const rooms=Object.values(state.rooms);
  $('roomGrid').innerHTML=rooms.length?rooms.map(({event,decision_id})=>{
    const d=decisionFor(decision_id);if(!d)return'';
    const statusText=d.operational_state==='MONITOR'?'MONITORANDO':label(d.classification);
    const statusClass=d.operational_state==='MONITOR'?'MONITOR':d.classification;
    return `<article class="room ${d.classification}">
      <div class="room-head"><div><span class="room-source">${d.origin==='starter'?'starter oficial':'simulação'}</span><h3>${esc(event.room_id)}</h3></div><span class="status ${statusClass}">${statusText}</span></div>
      <div class="room-signals">
        <div class="signal"><span>Presença</span><strong>${event.presence===null?'Sem leitura':event.presence?'Ocupado':'Vazio'}</strong></div>
        <div class="signal"><span>Tempo vazio</span><strong>${event.empty_minutes===null?'—':`${event.empty_minutes} min`}</strong></div>
        <div class="signal"><span>Sensor</span><strong>${sensorLabel(event.sensor_status)}</strong></div>
        <div class="signal"><span>Climatização</span><strong>${event.ac_on?'Ligada':'Desligada'}</strong></div>
        <div class="signal"><span>Iluminação</span><strong>${event.light_on?'Ligada':'Desligada'}</strong></div>
        <div class="signal"><span>Consumo</span><strong>${event.power_w===null?'não informado':`${event.power_w} W`}</strong></div>
      </div>
      <div class="room-foot"><span>${esc(d.rule_id)}</span><span>${fmtTime(event.timestamp)}</span></div>
    </article>`;
  }).join(''):'<div class="empty panel">Execute os casos oficiais ou envie um evento sintético.</div>';
}

function renderQueue(){
  const pending=state.decisions.filter(d=>d.human_confirmation_required&&!confirmationFor(d.id));
  $('queueCount').textContent=pending.length;
  $('alertQueue').innerHTML=pending.length?pending.map(d=>`<article class="queue-item ${d.classification}">
    <div class="queue-top"><strong>${esc(d.room_id)} · ${esc(d.title)}</strong><span class="status ${d.classification}">${label(d.classification)}</span></div>
    <p>${esc(d.rationale)}</p>
    <div class="trace"><b>${esc(d.rule_id)}</b><br>${esc(d.recommended_action)}</div>
    <div class="queue-actions">
      <button class="btn ${d.classification==='REVIEW'?'amber-soft':'primary'}" onclick="resolveDecision('${d.id}','${d.classification==='REVIEW'?'review_completed':'useful'}')">${d.classification==='REVIEW'?'Concluir revisão':'Confirmar útil'}</button>
      ${d.classification==='ALERT'?`<button class="btn danger-soft" onclick="resolveDecision('${d.id}','false_positive')">Rejeitar alerta</button>`:''}
    </div>
  </article>`).join(''):'<div class="empty">Sem pendências.</div>';
}

function renderTimeline(){
  const items=[];
  state.decisions.forEach(d=>items.push({at:d.created_at,type:'decision',d}));
  state.confirmations.forEach(c=>items.push({at:c.confirmed_at,type:'confirmation',c,d:decisionFor(c.decision_id)}));
  items.sort((a,b)=>new Date(b.at)-new Date(a.at));
  $('timeline').innerHTML=items.length?items.map(item=>{
    if(item.type==='confirmation'){
      const title=item.c.outcome==='false_positive'?'Alerta rejeitado':item.c.outcome==='review_completed'?'Revisão concluída':'Alerta confirmado';
      return `<div class="timeline-item timeline-item--confirmation"><div class="timeline-time">${fmtTime(item.at)}</div><div class="timeline-main"><strong>${esc(item.c.room_id||'—')} · ${title}</strong><p>confirmação humana · ${item.c.response_seconds}s · sem controle de equipamento</p></div><span class="status CONFIRMED">REGISTRADO</span></div>`;
    }
    return `<div class="timeline-item"><div class="timeline-time">${fmtTime(item.at)}</div><div class="timeline-main"><strong>${esc(item.d.room_id)} · ${esc(item.d.title)}</strong><p>${esc(item.d.rule_id)} · ${item.d.origin==='starter'?'dataset oficial':'evento manual'}${item.d.fixture_expected?` · esperado: ${esc(item.d.fixture_expected)}`:''}</p></div><span class="status ${item.d.classification}">${label(item.d.classification)}</span></div>`;
  }).join(''):'<div class="empty">Nenhum evento nesta sessão.</div>';
}

function renderMetrics(){
  const m=state.metrics||localMetrics();
  $('mOpen').textContent=m.open_occurrences??0;
  $('mUseful').textContent=m.useful_alerts??0;
  $('mFalse').textContent=m.false_alerts??0;
  $('mTime').textContent=m.avg_confirmation_seconds===null||m.avg_confirmation_seconds===undefined?'—':`${m.avg_confirmation_seconds}s`;
}
function renderSessionMeta(){
  const stored=state.decisions.length;
  $('sessionMeta').textContent=stored?`${stored} decisão(ões) persistidas nesta demo`:'sessão pronta para demonstração';
}

function renderScenarioButtons(){
  const host=$('officialScenarios');
  if(!officialEvents.length){host.innerHTML='<div class="scenario-empty">Casos oficiais não carregados.</div>';return}
  host.innerHTML=officialEvents.map((event,index)=>`<button class="scenario-card" data-scenario="${index}">
    <span class="scenario-card__id">${esc(event.room_id)}</span>
    <strong>${index===0?'Vazio 120 min + ar ligado':index===1?'Ocupado + ar ligado':'Presença sem leitura'}</strong>
    <small>esperado · ${esc(event.expected)}</small>
  </button>`).join('');
  host.querySelectorAll('[data-scenario]').forEach(btn=>btn.addEventListener('click',async()=>{
    const event=officialEvents[Number(btn.dataset.scenario)];
    await evaluate(event,{origin:'starter'});
    toast(`${event.room_id} processado a partir do starter oficial.`);
  }));
  $('datasetStatus').textContent=`${officialEvents.length} casos oficiais carregados`;
}

$('eventForm').addEventListener('submit',async ev=>{
  ev.preventDefault();const fd=new FormData(ev.currentTarget);
  await evaluate({
    room_id:fd.get('room_id')||'DEMO-204',timestamp:new Date().toISOString(),
    presence:fd.get('presence')==='null'?null:fd.get('presence')==='true',sensor_status:fd.get('sensor_status'),
    ac_on:fd.get('ac_on')==='on',light_on:fd.get('light_on')==='on',
    empty_minutes:fd.get('empty_minutes')===''?null:Number(fd.get('empty_minutes')),
    power_w:fd.get('power_w')===''?null:Number(fd.get('power_w')),synthetic:true,
  },{origin:'manual'});
  toast('Evento sintético avaliado.');
});

$('runDemo').addEventListener('click',async()=>{
  clearState();
  if(!officialEvents.length)await loadDataset();
  for(const event of officialEvents){await evaluate(event,{origin:'starter'});await wait(320)}
  toast('Roteiro oficial carregado: alerta, sem ação e revisão de sensor.');
});
$('runMissingData').addEventListener('click',async()=>{
  await evaluate({room_id:'DEMO-MISSING',timestamp:new Date().toISOString(),presence:false,sensor_status:'online',ac_on:true,empty_minutes:null,synthetic:true},{origin:'robustness'});
  toast('Caso de dado ausente encaminhado para revisão.');
});
$('runServiceFailure').addEventListener('click',async()=>{
  await evaluate({room_id:'DEMO-SERVICE',timestamp:new Date().toISOString(),presence:false,sensor_status:'online',ac_on:true,empty_minutes:120,synthetic:true},{origin:'robustness',forceServiceFailure:true});
  toast('Falha de serviço simulada: caso encaminhado para humano.');
});
$('resetDemo').addEventListener('click',()=>{clearState();render();toast('Sessão local limpa.')});
$('exportSession').addEventListener('click',exportSession);

function clearState(){
  const dataset=state.dataset;
  state=emptyState();state.dataset=dataset;
  persist();
}
function exportSession(){
  const evidence={schema:'quarto-inteligente-demo-evidence/v1',generated_at:new Date().toISOString(),dataset:state.dataset,metrics:state.metrics||localMetrics(),decisions:state.decisions,confirmations:state.confirmations,limitations:['synthetic data only','no equipment control','browser persistence only; Oracle/database pending']};
  const blob=new Blob([JSON.stringify(evidence,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`quarto-inteligente-evidencia-${Date.now()}.json`;a.click();URL.revokeObjectURL(url);toast('Evidência da sessão exportada em JSON.');
}
function wait(ms){return new Promise(r=>setTimeout(r,ms))}
function label(v){return v==='ALERT'?'ALERTA':v==='REVIEW'?'REVISÃO':'NORMAL'}
function sensorLabel(v){return ['online','ok','available'].includes(v)?'Online':v==='degraded'?'Degradado':'Indisponível'}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function toast(msg){const n=document.createElement('div');n.className='toast';n.textContent=msg;document.body.append(n);setTimeout(()=>n.remove(),2600)}

async function checkHealth(){
  try{
    const r=await fetch('/api/health',{cache:'no-store'});if(!r.ok)throw 0;const h=await r.json();
    $('systemPill').className='system-pill online';$('systemPill').innerHTML=`<span></span> API online · v${esc(h.version||'0.2')}`;
  }catch{
    $('systemPill').className='system-pill offline';$('systemPill').innerHTML='<span></span> API indisponível · revisão segura';
  }
}

checkHealth();loadDataset();render();refreshMetrics();
