# Quarto Inteligente — Hack Inova Health AI 2026

PoC do **Desafio 7 — Quarto Inteligente**, focada em gestão e operação hospitalar.

## Problema
Quartos vazios podem manter iluminação e climatização ligadas; ao mesmo tempo, sensores sem contexto podem criar ruído operacional. A PoC demonstra uma camada simples de decisão que cruza presença, estado do sensor e cargas monitoradas antes de abrir uma ocorrência.

## Microjornada
**Entrada → decisão → ação → saída → exceção**
1. Entrada: evento sintético de um quarto.
2. Decisão: API avalia presença, saúde do sensor, HVAC, iluminação e consumo observado.
3. Ação: retorna `OK`, `ALERT` ou `REVIEW` com regra e explicação.
4. Saída: operador confirma utilidade/revisão ou marca falso alerta.
5. Exceção: sensor indisponível ou contexto insuficiente sempre vai para revisão humana.

## Cena obrigatória da demonstração
| Cena | Resultado esperado |
|---|---|
| Quarto vazio + ar ligado | `ALERT` |
| Quarto ocupado | `OK` |
| Sensor indisponível | `REVIEW` |

O botão **Executar roteiro da demo** gera as três cenas na sequência.

## Contrato de evento
```json
{"room_id":"Q-204","occurred_at":"2026-09-12T12:00:00.000Z","sensor_status":"online","occupied":false,"hvac_on":true,"light_on":false,"power_w":1260,"synthetic":true}
```
`POST /api/evaluate` retorna classificação, severidade, `rule_id`, justificativa, ação recomendada, evidências e se exige confirmação humana.

## Regras da PoC
- `sensor_status != online` ou presença desconhecida → `REVIEW`.
- quarto vazio + HVAC ligado → `ALERT`.
- quarto vazio + iluminação ligada → `ALERT`.
- quarto ocupado → `OK` para estas regras de desperdício.
- `synthetic != true` → `REVIEW`, pois dados reais estão fora do escopo da PoC.

## Métricas
O dashboard mede apenas a sessão de demonstração: alertas úteis confirmados, falsos alertas, tempo médio até confirmação e ocorrências abertas. Não há alegação de economia financeira, validação com pacientes ou aprovação institucional.

## Limites de segurança
- Não controla equipamentos reais.
- Não envia comando para HVAC, iluminação, BMS ou dispositivo clínico.
- Não coleta nome, prontuário ou dado clínico.
- Dados são sintéticos.
- Exceções e incerteza são encaminhadas para uma pessoa.
- Em ambiente real, regras devem respeitar requisitos de ventilação, pressão, temperatura, umidade, infecção e políticas locais.

## Arquitetura
```text
Gerador de eventos (browser)
          |
          v
POST /api/evaluate  ---> motor de regras explicável
          |                  |
          v                  v
     decisão JSON       rule_id + evidências
          |
          v
Dashboard ---> fila humana ---> confirmação ---> métricas da sessão
```

### Mapeamento futuro para OCI
A PoC não depende de OCI. Uma evolução natural seria Compute/Functions/API Gateway para ingestão, Autonomous Database para eventos e confirmações, APEX ou o dashboard atual para operação, Logging/Monitoring para observabilidade e fila/stream para desacoplar sensores. Isso é desenho de evolução, não integração pronta.

## Testes
`npm test` cobre as três cenas do desafio e a trava de dados sintéticos.

## Pesquisa, crítica e pitch
- `docs/PESQUISA-E-HIPOTESES.md`
- `docs/CRITICA-ADVERSARIAL.md`
- `docs/PITCH.md`

## Trabalho em equipe
Pessoa 1: demo/dashboard e narrativa. Pessoa 2: regras/API e testes. Pessoa 3: pesquisa/evidências e pitch. Uma pessoa integra a branch de demo; use branches/worktrees separadas para trabalho paralelo.
