# Checklist de entrega — Desafio 7

## Produto
- [x] Dashboard operacional.
- [x] Gerador de eventos sintéticos.
- [x] Dataset oficial do starter incorporado.
- [x] API de avaliação.
- [x] Regra temporal de 120 minutos.
- [x] Estado sem ação para quarto ocupado.
- [x] Revisão para sensor sem leitura.
- [x] Revisão para dado ausente.
- [x] Fail-safe para serviço indisponível.
- [x] Confirmação humana.
- [x] Registro de falso positivo.
- [x] Métricas do desafio.
- [x] Linha do tempo de decisão/confirmação.
- [x] Persistência de sessão para demo.
- [x] Exportação JSON de evidência.
- [x] Sem controle de equipamentos reais.

## Qualidade
- [x] 8 testes automatizados passando.
- [x] CI GitHub Actions.
- [x] Preview Vercel READY.
- [x] Teste funcional em navegador: 6/6 checks.
- [x] Interface responsiva e estados acessíveis.

## Documentação
- [x] README de execução/arquitetura/limites.
- [x] Pesquisa e hipóteses separadas de evidência.
- [x] Crítica adversarial registrada.
- [x] Enquadramento da dor preenchido sem inventar validação.
- [x] Contrato de dados e estados de interface.
- [x] Arquitetura sem Oracle e fronteira de migração.
- [x] Roteiro de pitch e demo.

## Pendente deliberadamente
- [ ] Configurar Oracle Cloud/OCI.
- [ ] Substituir `localStorage` por persistência central em Oracle Database.
- [ ] Adicionar OCI Logging/Monitoring.
- [ ] Se fizer sentido no evento, migrar backend para Compute/Functions/API Gateway.
- [ ] Validar hipóteses com mentor/hospital e registrar feedback real.

## Divisão sugerida no dia

Como os nomes da equipe ainda não estão definidos no repositório, atribuir no início do evento:

- **Pessoa A — demo/interface:** conduz apresentação, estados e exportação de evidência.
- **Pessoa B — backend/OCI:** conecta banco/logging sem alterar contrato v2.
- **Pessoa C — evidência/pitch:** conversa com mentor, registra respostas e atualiza hipóteses.
- **Integrador:** uma dessas pessoas valida `main`/branch de entrega e executa o checklist final.
