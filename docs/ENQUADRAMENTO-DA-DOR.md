# Enquadramento da dor — Desafio 7

> Onde não há evidência do starter ou fonte pública, o item está marcado como **hipótese a verificar com mentor/hospital**.

## 1. Contexto e escala

Operação hospitalar de quartos, com foco em gestão predial/operacional. A dor é o desperdício potencial quando cargas como climatização e iluminação permanecem ligadas sem ocupação, somado ao ruído causado por sensores sem contexto. **Escala real por hospital é hipótese a verificar.**

## 2. Persona e tarefa

**Gestão e operação.** A tarefa é transformar telemetria de quartos em uma fila pequena e acionável: identificar quando há contexto suficiente para revisão de possível desperdício e quando o sistema deve simplesmente não agir.

## 3. Momento que dispara a dor

- quarto reporta ausência de presença;
- uma carga monitorada continua ligada;
- o tempo de vazio atinge o limiar operacional;
- ou o sensor fica sem leitura/inconclusivo.

No starter oficial, o caso de desperdício é **vazio por 120 minutos com ar ligado**.

## 4. Processo atual, passo a passo

**Hipótese a verificar com mentor/hospital:**
1. sensores/BMS geram telemetria ou alarmes;
2. uma pessoa precisa interpretar se o alerta faz sentido naquele quarto;
3. contexto insuficiente exige checagem manual;
4. a operação decide se deve encaminhar a ocorrência;
5. o desfecho nem sempre volta para a mesma camada de monitoramento como falso positivo/alerta útil.

A PoC ataca especificamente os passos 2, 3 e 5.

## 5. Custo em tempo, retrabalho ou dinheiro

Não há valor financeiro comprovado para esta PoC. Fontes públicas citadas em `PESQUISA-E-HIPOTESES.md` sustentam que HVAC, ventilação, iluminação e outras cargas são relevantes no consumo hospitalar e que sensores/analytics podem ser usados em eficiência operacional.

**Hipótese a verificar:** alertas sem contexto consomem tempo da operação e podem reduzir confiança no monitoramento. Não atribuir R$ ou percentual de economia sem dado real.

## 6. Frequência e período observado

O starter não fornece frequência real. **Hipótese a verificar com mentor/hospital:** quantos eventos de presença/carga existem por quarto por dia e quantas ocorrências permanecem acima do limiar de 120 minutos.

Na PoC, a frequência é sintética e controlada pelo gerador de eventos.

## 7. Quem paga, decide e sofre

- **Usuário direto:** operação/gestão.
- **Decisor/orçamento:** hipótese a verificar; pode envolver gestão hospitalar, facilities, engenharia clínica/predial ou sustentabilidade, conforme a instituição.
- **Quem sente o retrabalho:** equipe que recebe e valida ocorrências.
- **Paciente:** não é usuário da PoC e não deve sofrer alteração ambiental; por isso não existe controle automático de equipamento.

## 8. Alternativas e por que deixam a jornada incompleta

- **BMS/SCADA:** excelente para automação e telemetria predial, mas a PoC explora uma camada de contexto, triagem e feedback humano acima da leitura bruta.
- **Alarmes por threshold simples:** fáceis de implementar, mas podem ignorar presença, duração e saúde do sensor.
- **Dashboard de telemetria:** mostra dados, mas não necessariamente converte o sinal em ocorrência explicável com confirmação/falso positivo.
- **Inspeção manual:** preserva julgamento humano, porém depende de interpretação e registro manual.

## Hipóteses prioritárias para perguntar a um mentor

1. O limiar de 120 minutos faria sentido em quais tipos de quarto e em quais não faria?
2. Quem hoje recebe esse tipo de ocorrência e qual dado precisa ver para decidir rápido?
3. Como o desfecho de uma ocorrência é registrado hoje, se é registrado?
4. Quais estados do quarto impedem qualquer sugestão de economia mesmo quando não há presença?
5. Qual integração seria mais realista como fonte: BMS, sensores independentes, automação predial ou outro sistema?
