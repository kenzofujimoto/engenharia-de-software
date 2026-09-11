# Crítica adversarial

1. **“Quarto vazio não significa que posso desligar HVAC.”** Correto. Pressão, renovação de ar, umidade, limpeza, isolamento e protocolos locais podem exigir operação contínua. A PoC nunca envia comando de desligamento; só cria ocorrência para revisão.
2. **“O sensor de presença pode errar.”** Por isso `sensor_status != online` ou presença inconclusiva produz `REVIEW`.
3. **“Um pico de watts sozinho não prova desperdício.”** O motor não usa consumo isolado; exige contexto de presença e estado das cargas.
4. **“Vocês estão medindo economia?”** Não. Medimos qualidade da fila: útil/falso e tempo de confirmação. Economia é hipótese futura.
5. **“Por que não usar BMS/SCADA?”** São alternativas e futuras fontes de dados. A PoC é uma camada de contexto/triagem, não substitui controles prediais.
6. **“E se a API cair?”** O front sinaliza indisponibilidade e usa fallback local só para preservar a demo. Produção exigiria persistência, fila resiliente e observabilidade.

## Decisões após a crítica
Sem controle automático; sem dado de paciente; `REVIEW` explícito; `rule_id` visível; métricas somente da sessão.
