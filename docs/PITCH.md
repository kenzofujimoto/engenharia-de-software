# Pitch e demo

## Pitch 60–90s
“Em um hospital, o problema não é simplesmente descobrir que um ar-condicionado está ligado. O problema é saber se aquilo faz sentido naquele contexto e transformar o sinal em uma ação segura.

Nosso Quarto Inteligente recebe eventos sintéticos de presença, saúde do sensor, iluminação, climatização e consumo. Em vez de gerar alarmes por qualquer leitura, o motor cruza os sinais e produz três estados: normal, alerta acionável ou revisão manual.

A decisão nunca atua no equipamento. Ela mostra a regra aplicada, explica o motivo e pede confirmação da operação. Com isso medimos aquilo que importa para validar a ideia: quantos alertas foram realmente úteis, quantos foram falsos e quanto tempo levou para alguém confirmar.

A PoC prova a microjornada. O próximo passo seria integrar a mesma API a BMS, sensores ou infraestrutura OCI, persistir eventos e calibrar regras com dados reais do hospital.”

## Demo
1. Clique em **Executar roteiro da demo**.
2. Q-204: vazio + ar ligado → `ALERTA`, regra `ENERGY-AC-001`; confirme como útil.
3. Q-205: ocupado + ar/luz ligados → `NORMAL`, sem fila operacional.
4. Q-206: sensor offline → `REVISÃO`; conclua a revisão.
5. Mostre métricas e linha do tempo.
6. Use o gerador para criar vazio + luz ligada.

## Fechamento
“Nosso diferencial não é o sensor. É a camada de contexto, exceção e responsabilidade humana entre telemetria e operação.”
