# Quarto Inteligente — Hack Inova Health AI 2026

PoC do **Desafio 7 — Quarto Inteligente**, para gestão e operação hospitalar. Esta versão usa como fonte de verdade os casos sintéticos do pacote oficial `health-ai-starter` e implementa toda a microjornada que independe da Oracle.

## O que está implementado

- Dataset oficial `data/eventos_sensor_mock.json` com `DEMO-201`, `DEMO-202` e `DEMO-203`.
- API `POST /api/evaluate` com motor de decisão explicável.
- Regra temporal de desperdício: **quarto vazio por 120 minutos + ar ligado → ALERT**.
- Quarto ocupado + ar ligado → `OK`, sem ação automática.
- Presença sem leitura/sensor indisponível → `REVIEW`.
- Dado temporal ausente → `REVIEW`, evitando inferência insegura.
- Serviço da API indisponível → estado seguro de revisão; não há decisão energética silenciosa no cliente.
- Confirmação humana validada por `POST /api/confirm`.
- Métricas calculadas por `POST /api/metrics`: alertas úteis, falsos alertas, pendências e tempo médio até confirmação.
- Estado da demonstração persistido no `localStorage`, para sobreviver a refresh durante a apresentação.
- Exportação da evidência da sessão em JSON.
- Linha do tempo com evento, decisão e confirmação humana.
- Gerador manual compatível com o contrato do starter.
- Testes automatizados para sucesso, limiar temporal, dado ausente, falha de sensor, escopo sintético, rejeição humana e métricas.

## Fonte oficial do desafio

O starter define para o Desafio 7:

- **Dor:** quartos vazios com luz/ar ligados geram desperdício; sensores sem contexto geram alertas inúteis.
- **Construir:** painel com eventos simulados, presença + consumo, alertas acionáveis e confirmação humana.
- **Demo:** vazio + ar ligado → alerta; ocupado → sem ação; sensor indisponível → revisão manual.
- **Métricas:** alertas úteis, falsos alertas e tempo até confirmação.
- **Limite:** não controlar equipamentos reais nem alterar ambiente de paciente.

O cenário oficial adiciona o detalhe temporal: **vazio por 120 minutos com ar ligado**.

## Contrato v2

Entrada principal, compatível com o starter:

```json
{
  "room_id": "DEMO-201",
  "timestamp": "2026-09-12T11:00:00-03:00",
  "presence": false,
  "sensor_status": "online",
  "ac_on": true,
  "light_on": false,
  "empty_minutes": 120,
  "power_w": null,
  "synthetic": true
}
```

`light_on`, `sensor_status` e `power_w` são extensões da PoC. O motor ainda aceita os aliases antigos `occupied`, `hvac_on` e `occurred_at` para compatibilidade.

## Regras

| Regra | Condição | Resultado |
|---|---|---|
| `ENERGY-AC-120` | vazio ≥120 min + AC ligado | `ALERT` |
| `ENERGY-LIGHT-120` | vazio ≥120 min + luz ligada | `ALERT` |
| `CTX-WAIT-120` | vazio <120 min + carga ligada | `OK / MONITOR` |
| `SENSOR-001` | presença sem leitura ou sensor não online | `REVIEW` |
| `DATA-EMPTY-001` | vazio sem duração conhecida | `REVIEW` |
| `DATA-TIME-001` | timestamp ausente/inválido | `REVIEW` |
| `SERVICE-001` | API de decisão indisponível na demo | `REVIEW` no cliente |
| `SCOPE-001` | dado não sintético | `REVIEW` |

## Persistência sem Oracle

Não há banco central nesta etapa. Para a demo, decisões e confirmações ficam no `localStorage` do navegador e podem ser exportadas em JSON. Isso é **persistência de demonstração**, não arquitetura de produção.

A fronteira para banco está deliberadamente isolada: quando a OCI for configurada, eventos, decisões e confirmações devem ser persistidos no banco Oracle e os mesmos contratos de API podem ser mantidos. Nenhuma alegação de persistência hospitalar é feita hoje.

## APIs

- `GET /api/health` — estado da PoC e modo de persistência.
- `POST /api/evaluate` — recebe evento e retorna decisão + regra + evidências.
- `POST /api/confirm` — valida e retorna o registro de confirmação humana.
- `POST /api/metrics` — calcula métricas a partir da sessão.

## Demo recomendada

1. Clique **Executar demo oficial**.
2. Mostre `DEMO-201`: vazio 120 min + AC → `ENERGY-AC-120` → alerta.
3. Confirme como útil **ou rejeite** e mostre a métrica/timeline.
4. Mostre `DEMO-202`: ocupado + AC → sem ação.
5. Mostre `DEMO-203`: presença sem leitura → revisão manual.
6. Rode **Dado ausente** para provar comportamento seguro com contexto incompleto.
7. Rode **API indisponível** para provar fail-safe.
8. Exporte a sessão JSON como evidência de rastreabilidade.

## Limites

- Somente dados sintéticos.
- Sem nome, prontuário ou dado clínico.
- Não controla HVAC, iluminação, BMS ou equipamento clínico.
- Métricas valem apenas para a sessão simulada.
- Não há validação com pacientes nem aprovação institucional.
- Banco/OCI ainda não configurados.

## Testes

```bash
npm test
```

Os testes cobrem os três casos oficiais, limiar de 119/120 minutos, dados ausentes, trava de escopo, rejeição humana e cálculo de métricas.

## Documentação

- `docs/ARQUITETURA-SEM-ORACLE.md`
- `docs/PESQUISA-E-HIPOTESES.md`
- `docs/CRITICA-ADVERSARIAL.md`
- `docs/PITCH.md`
