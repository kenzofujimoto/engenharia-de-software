# Contrato de dados e estados de interface

## Evento de sensor

Campos do starter usados como contrato principal:

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `room_id` | string | sim | identifica o quarto sintético |
| `timestamp` | ISO-8601 | sim | necessário para rastreabilidade |
| `presence` | boolean/null | sim | `null` significa sem leitura |
| `ac_on` | boolean/null | sim para regra AC | estado da climatização |
| `empty_minutes` | number/null | sim quando `presence=false` | limiar oficial da demo = 120 min |
| `synthetic` | boolean | sim | precisa ser `true` |

Extensões da PoC: `sensor_status`, `light_on`, `power_w`.

## Decisão

```json
{
  "classification": "ALERT | REVIEW | OK",
  "operational_state": "HUMAN_REVIEW | MONITOR | NO_ACTION",
  "rule_id": "ENERGY-AC-120",
  "title": "Possível desperdício de climatização",
  "rationale": "...",
  "recommended_action": "...",
  "evidence": ["presence=false", "empty_minutes=120", "ac_on=true"],
  "human_confirmation_required": true
}
```

## Confirmação humana

Resultados aceitos:

- `useful`: alerta confirmado como útil;
- `false_positive`: alerta rejeitado;
- `review_completed`: revisão de exceção concluída.

O registro inclui `decision_id`, `room_id`, `confirmed_at`, `response_seconds`, `actor=demo-operator` e `effect=record_only_no_equipment_control`.

## Estados de interface

### NORMAL
Contexto suficiente e nenhuma ocorrência. Ex.: quarto ocupado com AC ligado.

### MONITORANDO
Quarto vazio com carga ligada, porém abaixo do limiar de 120 minutos. Nenhuma ação.

### ALERTA
Condição de possível desperdício satisfeita. Entra na fila humana.

### REVISÃO
Dado ausente, sensor sem leitura, API indisponível ou evento fora do escopo. Entra na fila humana.

### REGISTRADO
Confirmação humana anexada à linha do tempo. Não representa comando de equipamento.

## Exceções demonstráveis

- `SENSOR-001`: presença indisponível/inconclusiva.
- `DATA-EMPTY-001`: vazio sem tempo conhecido.
- `DATA-TIME-001`: timestamp inválido/ausente.
- `SERVICE-001`: API indisponível.
- `SCOPE-001`: evento não sintético.
