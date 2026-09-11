# Pesquisa, evidências e hipóteses

## Evidência pública
1. O U.S. Department of Energy monitora usos finais de energia em hospitais, incluindo aquecimento/reaquecimento, resfriamento, ventiladores, bombas, iluminação e cargas elétricas. Fonte: https://www.energy.gov/cmei/buildings/researching-energy-use-hospitals
2. O Better Buildings Solution Center documenta iniciativa do NewYork-Presbyterian Hospital com sensores de ocupação para reduzir desperdício em períodos sem ocupação. É evidência de plausibilidade, não validação da nossa solução. Fonte: https://betterbuildingssolutioncenter.energy.gov/implementation-models/newyork-presbyterian-hospitals-gallery-walks
3. O Better Buildings registra uso de analytics e monitoring-based commissioning em hospitais, destacando o desafio de operar iluminação e HVAC 24/7 sob restrições de controle. Fonte: https://betterbuildingssolutioncenter.energy.gov/presentations/hospitals-use-data-analytics-monitoring-based-commissioning
4. O DOE descreve Demand Control Ventilation e Building Automation Systems como mecanismos ligados a ocupação e HVAC em edifícios. Em saúde, a PoC não atua no equipamento. Fonte: https://www.energy.gov/cmei/buildings/hvac-retrofit

## Hipóteses a validar com mentor/hospital
- H1: sinais fragmentados geram trabalho manual de interpretação.
- H2: presença + saúde do sensor + carga reduz alerta sem contexto em comparação com consumo isolado.
- H3: motivo, regra aplicada e confirmação humana tornam a fila mais acionável que telemetria pura.
- H4: limites e políticas precisam ser calibrados por hospital e tipo de quarto; a PoC não fixa meta de economia.

## Métricas instrumentadas
- Alertas úteis: confirmação humana de utilidade na sessão.
- Falsos alertas: falso positivo marcado pela pessoa.
- Tempo até confirmação: criação da ocorrência → confirmação humana.
- Pendências: ALERT ou REVIEW não tratados.

Nada disso representa validação com pacientes, economia financeira comprovada ou aprovação de uma organização.
