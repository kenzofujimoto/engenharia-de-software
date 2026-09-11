# Crítica adversarial

1. **“Quarto vazio não significa que posso desligar HVAC.”** Correto. Pressão, renovação de ar, umidade, limpeza, isolamento e protocolos locais podem exigir operação contínua. A PoC nunca envia comando de desligamento; só cria ocorrência para revisão.
2. **“Um minuto vazio não prova desperdício.”** Correto. O starter oficial traz o caso de vazio por 120 minutos; por isso o motor usa um limiar temporal explícito e mantém eventos abaixo desse limiar em monitoramento, sem alerta.
3. **“O sensor de presença pode errar ou parar.”** Por isso sensor não online ou presença sem leitura produz `REVIEW`, nunca alerta energético automático.
4. **“E se faltar o tempo de vazio?”** A regra não tenta adivinhar. `empty_minutes` ausente em quarto vazio produz `DATA-EMPTY-001` e revisão humana.
5. **“Um pico de watts sozinho não prova desperdício.”** O motor não usa consumo isolado; exige contexto de presença, duração e estado das cargas.
6. **“Vocês estão medindo economia?”** Não. Medimos qualidade da fila: útil/falso e tempo de confirmação. Economia é hipótese futura.
7. **“E se a API cair?”** O cliente entra em `SERVICE-001` e encaminha para revisão humana. Não existe mais fallback local que finja uma decisão energética válida.
8. **“Onde os dados ficam sem Oracle?”** Somente a sessão da demo é mantida no `localStorage` e pode ser exportada em JSON. Isso é explicitamente temporário e não é apresentado como persistência hospitalar.

## Decisões após a crítica

- Sem controle automático.
- Dataset oficial do starter como fonte da demo.
- Limiar temporal de 120 minutos.
- `REVIEW` explícito para incerteza, ausência de dado e falha de serviço.
- `rule_id` e evidências visíveis.
- Confirmação humana registrada separadamente.
- Métricas somente da sessão sintética.
- Banco/OCI assumidos como próxima etapa de infraestrutura, não como integração já pronta.
