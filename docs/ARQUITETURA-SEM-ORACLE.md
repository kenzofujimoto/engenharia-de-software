# Arquitetura atual — tudo concluído exceto Oracle

## Fluxo executável

```text
Health AI starter / gerador manual
              |
              v
       POST /api/evaluate
              |
              v
      Motor de regras v2
  presença + tempo + carga + sensor
              |
     +--------+--------+
     |        |        |
    OK      ALERT    REVIEW
              |        |
              +---+----+
                  v
          fila operacional
                  |
                  v
          POST /api/confirm
                  |
                  v
          confirmação humana
                  |
                  v
          POST /api/metrics
                  |
                  v
         dashboard + timeline
                  |
                  v
        localStorage + export JSON
```

## Por que existe localStorage

Sem Oracle ou outro banco autorizado, a PoC precisa sobreviver a um refresh durante a demo. `localStorage` resolve **somente essa necessidade de demonstração**. O navegador é a fonte de estado temporária; a API continua responsável pela avaliação, validação da confirmação e cálculo das métricas.

## Fronteira de substituição por Oracle

Quando a OCI for disponibilizada, substituir somente a camada de persistência:

```text
localStorage
    ↓ substituir por
Oracle Database
  ├─ sensor_events
  ├─ decisions
  └─ human_confirmations
```

Os contratos `/api/evaluate`, `/api/confirm` e `/api/metrics` podem permanecer. Uma etapa posterior pode mover o backend da Vercel para Compute/Functions/API Gateway e adicionar OCI Logging, sem reescrever a regra de negócio.

## Estados seguros

- Sensor indisponível → revisão humana.
- Presença vazia sem `empty_minutes` → revisão humana.
- Timestamp inválido → revisão humana.
- API indisponível → revisão humana.
- Dado não sintético → revisão humana.

Em nenhum desses casos o frontend inventa um comando ou tenta controlar equipamento.
