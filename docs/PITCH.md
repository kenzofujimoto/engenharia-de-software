# Pitch e demo

## Pitch 60–90s
“Em um hospital, detectar que um ar-condicionado está ligado é fácil. O difícil é saber se aquilo virou uma ocorrência operacional de verdade ou só mais um alerta sem contexto.

Nosso Quarto Inteligente usa os casos sintéticos oficiais do desafio e cruza presença, tempo de vazio, saúde do sensor e cargas monitoradas. A regra principal só abre alerta quando o quarto está vazio há pelo menos 120 minutos e o ar continua ligado. Se o quarto está ocupado, não há ação. Se a presença não pode ser lida, o sistema não inventa uma conclusão: encaminha para revisão humana.

Cada decisão mostra a regra e o motivo. A pessoa confirma se o alerta foi útil, rejeita como falso positivo ou conclui uma revisão. A partir disso calculamos as métricas pedidas pelo desafio: alertas úteis, falsos alertas e tempo até confirmação.

A PoC não controla equipamento e usa somente dados sintéticos. Tudo que independe da Oracle já está implementado; o próximo passo de infraestrutura é trocar a persistência temporária da demo por banco e Logging na OCI.”

## Demo
1. Clique em **Executar demo oficial**.
2. `DEMO-201`: vazio 120 min + ar ligado → `ALERTA`, regra `ENERGY-AC-120`. Confirme como útil ou rejeite para mostrar falso positivo.
3. `DEMO-202`: ocupado + ar ligado → `NORMAL`, sem fila operacional.
4. `DEMO-203`: presença sem leitura → `REVISÃO`, regra `SENSOR-001`; conclua a revisão.
5. Mostre métricas e linha do tempo com a confirmação humana.
6. Clique em **Dado ausente** para mostrar `DATA-EMPTY-001`.
7. Clique em **API indisponível** para mostrar o fail-safe `SERVICE-001`.
8. Clique em **Exportar evidência** e mostre que a sessão pode ser auditada em JSON.

## Fechamento
“Nosso diferencial não é o sensor. É a camada de contexto temporal, explicabilidade e responsabilidade humana entre telemetria e operação.”
