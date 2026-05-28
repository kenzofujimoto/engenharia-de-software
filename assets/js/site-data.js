window.ENG_SOFT_DATA = {
  shallowNotes: [
    {
      title: "Ágil e métodos praticos",
      body: "A aula 2 apresenta desenvolvimento ágil de forma introdutoria. Para prova pratica, vale complementar com Scrum, Kanban, XP, backlog, sprint e critérios de aceite.",
      lessonId: "aula-2"
    },
    {
      title: "UML alem de caso de uso",
      body: "As aulas 4 e 5 focam casos de uso. Se a prova pedir UML de forma ampla, faltam classe, sequencia, atividade e estados.",
      lessonId: "aula-5"
    },
    {
      title: "Arquitetura de software",
      body: "A aula 6 e conceitual. Foram adicionados exemplos de camadas, MVC, cliente-servidor e riscos de projeto arquitetural.",
      lessonId: "aula-6"
    },
    {
      title: "Tecnicas de teste",
      body: "A aula 7 explica qualidade e processo de teste, mas não aprofunda caixa-preta, caixa-branca, particoes de equivalencia e valor limite.",
      lessonId: "aula-7"
    },
    {
      title: "Manutencao moderna",
      body: "A aula 8 cobre evolução e legado. Complementos adicionam divida tecnica, refatoracao, versionamento e DevOps.",
      lessonId: "aula-8"
    }
  ],
  lessons: [
    {
      id: "aula-1",
      number: 1,
      title: "Fundamentos de Engenharia de Software",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 1.pdf",
      summary: "A aula define software, Engenharia de Software, processo, modelo de processo, artefatos, ferramentas CASE, atributos de bom software e responsabilidades eticas.",
      examFocus: [
        "Diferenciar software, Engenharia de Software e processo de software.",
        "Explicar por que desenvolver software e uma atividade complexa.",
        "Reconhecer atributos de bom software: manutenibilidade, confiabilidade, eficiencia e aceitabilidade.",
        "Relacionar Engenharia de Software com qualidade, custo, prazo e manutencao."
      ],
      sections: [
        {
          source: "base",
          heading: "O que e software",
          body: "Software não e apenas o codigo executavel. O material trata software como programas, configuracoes e documentação associada. Em prova, cuidado com respostas que reduzem software a linguagem de programacao ou arquivo instalado."
        },
        {
          source: "base",
          heading: "O que e Engenharia de Software",
          body: "E a disciplina relacionada a todos os aspectos da produção de software, da especificação inicial até a manutencao. O objetivo e aplicar métodos, técnicas, processos e ferramentas para aumentar organizacao, produtividade e qualidade."
        },
        {
          source: "base",
          heading: "Processo de software",
          body: "Processo e um conjunto estruturado de atividades, restrições e recursos. Em software, ele organiza atividades como especificação, desenvolvimento, validação e evolução. A ideia central e transformar necessidades em um produto confiavel e mantivel."
        },
        {
          source: "base",
          heading: "Modelo de processo",
          body: "Modelo de processo e uma representacao simplificada de um processo real. Ele ajuda a entender uma forma de organizar o desenvolvimento, mas não e uma receita universal. Modelos diferentes fazem escolhas diferentes sobre sequencia, iteracao e tratamento de mudanças."
        },
        {
          source: "base",
          heading: "Artefatos de software",
          body: "Artefatos são produtos criados durante o processo: documentos de requisitos, modelos, diagramas, codigo, planos de teste, manuais e registros de manutencao. Em atividades, artefato e aquilo que voce entrega para provar que executou uma etapa."
        },
        {
          source: "base",
          heading: "Ferramentas CASE",
          body: "CASE significa Computer-Aided Software Engineering. São ferramentas que apoiam atividades de Engenharia de Software, como modelagem, geracao de documentação, controle de versão, testes ou gerenciamento de requisitos."
        },
        {
          source: "base",
          heading: "Atributos de bom software",
          body: "Um bom software precisa atender ao que foi solicitado e tambem possuir atributos de qualidade. O material destaca características como manutenibilidade, confiabilidade, eficiencia e aceitabilidade."
        },
        {
          source: "base",
          heading: "Etica profissional",
          body: "Engenheiros de software lidam com informacoes, sistemas criticos e decisoes que afetam usuários. Por isso, confidencialidade, competencia, respeito a propriedade intelectual e responsabilidade social são temas centrais."
        }
      ],
      pitfalls: [
        "Confundir processo com modelo de processo.",
        "Dizer que qualidade so aparece na fase de teste.",
        "Ignorar documentação como parte do software."
      ]
    },
    {
      id: "aula-2",
      number: 2,
      title: "Paradigmas, processos e desenvolvimento ágil",
      sourcePdf: "INT ENG SOFT_TEXTO_DE_APOIO_Aula 2.pdf",
      summary: "A aula apresenta atividades fundamentais do processo, modelos genéricos, tratamento de mudanças, ferramentas de desenvolvimento e uma introdução a desenvolvimento ágil.",
      examFocus: [
        "Listar as quatro atividades fundamentais: especificação, desenvolvimento, validação e evolução.",
        "Comparar modelos de processo e suas vantagens/desvantagens.",
        "Entender por que mudanças são inevitaveis em software.",
        "Distinguir desenvolvimento tradicional e ágil em alto nivel."
      ],
      sections: [
        {
          source: "base",
          heading: "Paradigma",
          body: "Paradigma e uma abordagem ou filosofia de construção de software. Ele influencia como a equipe pensa, organiza o codigo, modela problemas e conduz o desenvolvimento."
        },
        {
          source: "base",
          heading: "Atividades fundamentais",
          body: "Os processos de software variam, mas normalmente incluem especificação, desenvolvimento, validação e evolução. A especificação define o que o sistema deve fazer; o desenvolvimento constrói; a validação verifica se aténde ao esperado; a evolução adapta o sistema depois da entrega."
        },
        {
          source: "base",
          heading: "Modelos genéricos",
          body: "Modelos genéricos descrevem maneiras de organizar as atividades. O cascata separa fases em sequencia; o incremental entrega partes em ciclos; a engenharia orientada a reuso aproveita componentes existentes."
        },
        {
          source: "base",
          heading: "Mudancas",
          body: "Software precisa mudar porque o ambiente, o negocio, os usuários e as tecnologias mudam. Um processo realista precisa prever mudanças em vez de tratar toda mudanca como excecao."
        },
        {
          source: "base",
          heading: "Ferramentas de desenvolvimento",
          body: "Ferramentas ajudam a construir, documentar, testar, versionar e gerenciar software. Elas não substituem o processo, mas podem tornar o processo mais controlado e produtivo."
        },
        {
          source: "base",
          heading: "Desenvolvimento ágil",
          body: "O material introduz a ideia de agilidade como resposta a mudanças e entregas mais frequentes. A enfase esta em feedback continuo, colaboracao e adaptacao."
        },
        {
          source: "extra",
          heading: "Complemento: Scrum, Kanban e XP",
          body: "Scrum organiza o trabalho em sprints, backlog, planejamento, revisão e retrospectiva. Kanban visualiza fluxo e limita trabalho em progresso. XP enfatiza praticas técnicas como programacao em par, testes automatizados e integração continua. Estes detalhes não aparecem com profundidade no material base."
        }
      ],
      pitfalls: [
        "Achar que cascata e sempre errado. Ele pode servir quando requisitos são estaveis.",
        "Achar que ágil significa ausencia de documentação.",
        "Confundir desenvolvimento incremental com simples divisão de tarefas."
      ]
    },
    {
      id: "aula-3",
      number: 3,
      title: "Engenharia de Requisitos",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 3 atualizado.pdf",
      summary: "A aula explica a importancia dos requisitos, tipos de requisitos, niveis de descricao, processo de Engenharia de Requisitos, elicitacao e gerenciamento de mudanças.",
      examFocus: [
        "Diferenciar requisitos funcionais e não funcionais.",
        "Entender requisitos de usuário e requisitos de sistema.",
        "Descrever etapas da Engenharia de Requisitos.",
        "Explicar por que erros em requisitos custam caro."
      ],
      sections: [
        {
          source: "base",
          heading: "Por que requisitos importam",
          body: "A aula enfatiza que muitos problemas de software nascem de requisitos mal compreendidos. Como erros nessa fase se espalham para projeto, codigo e teste, corrigi-los tardiamente custa muito mais."
        },
        {
          source: "base",
          heading: "Requisitos funcionais",
          body: "Requisitos funcionais descrevem servicos, funcoes e comportamentos que o sistema deve fornecer. Exemplo: o sistema deve permitir cadastrar cliente, gerar relatorio ou autenticar usuário."
        },
        {
          source: "base",
          heading: "Requisitos não funcionais",
          body: "Requisitos não funcionais descrevem restrições e qualidades do sistema, como desempenho, segurança, usabilidade, disponibilidade, padrões e restrições legais."
        },
        {
          source: "base",
          heading: "Requisitos de usuário e de sistema",
          body: "Requisitos de usuário são mais gerais e compreensiveis para clientes. Requisitos de sistema são mais detalhados e tecnicos, servindo de base para projeto e implementação."
        },
        {
          source: "base",
          heading: "Processo de Engenharia de Requisitos",
          body: "O processo envolve descobrir, analisar, documentar, verificar e gerenciar requisitos. E uma atividade continua, porque requisitos mudam conforme o entendimento do problema evolui."
        },
        {
          source: "base",
          heading: "Tecnicas de elicitacao",
          body: "Elicitacao busca descobrir necessidades dos stakeholders. Podem ser usadas entrevistas, observacao, questionarios, análise de documentos, workshops e prototipos."
        },
        {
          source: "extra",
          heading: "Complemento: critério de boa escrita",
          body: "Um bom requisito deve ser claro, verificavel, necessario, sem ambiguidade e rastreavel. Exemplo ruim: 'o sistema deve ser rapido'. Exemplo melhor: 'a busca deve retornar resultados em até 2 segundos para 95% das consultas'."
        }
      ],
      pitfalls: [
        "Chamar desempenho de requisito funcional.",
        "Escrever requisito sem critério de verificacao.",
        "Ignorar stakeholders secundarios."
      ]
    },
    {
      id: "aula-4",
      number: 4,
      title: "Especificacao, SRS, casos de uso e historias",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 4.pdf",
      summary: "A aula apresenta especificação de requisitos, documento SRS, modelos de sistema, modelagem de casos de uso e relação entre historias de usuário e casos de uso.",
      examFocus: [
        "Explicar a funcao do documento de requisitos.",
        "Identificar atores, casos de uso e fronteira do sistema.",
        "Diferenciar fluxo principal, alternativo e excecao.",
        "Comparar historias de usuário e casos de uso."
      ],
      sections: [
        {
          source: "base",
          heading: "Especificacao de requisitos",
          body: "Depois da elicitacao, os requisitos precisam ser registrados. A especificação organiza requisitos de usuário e de sistema em um documento que serve de comunicação entre clientes, analistas, desenvolvedores e testadores."
        },
        {
          source: "base",
          heading: "SRS",
          body: "SRS significa Software Requirements Specification. E o documento de especificação de requisitos de software. Ele deve declarar requisitos funcionais, não funcionais e restrições de forma clara."
        },
        {
          source: "base",
          heading: "Modelos do sistema",
          body: "Modelos representam o sistema de forma abstrata para facilitar entendimento, análise e comunicação. Nenhum modelo unico representa tudo, por isso diferentes visoes podem ser necessarias."
        },
        {
          source: "base",
          heading: "UML e casos de uso",
          body: "A UML reune diferentes tipos de diagramas. Nesta disciplina, o foco e o diagrama de casos de uso, que mostra funcionalidades do sistema do ponto de vista de atores externos."
        },
        {
          source: "base",
          heading: "Fluxos de um caso de uso",
          body: "O fluxo principal descreve o caminho normal de sucesso. Fluxos alternativos descrevem variacoes validas. Fluxos de excecao descrevem problemas, erros ou situacoes que impedem o caminho normal."
        },
        {
          source: "base",
          heading: "Historias de usuário",
          body: "Historias de usuário descrevem necessidade em linguagem simples, normalmente no formato: como um tipo de usuário, quero uma funcionalidade, para obter um beneficio."
        },
        {
          source: "extra",
          heading: "Complemento: critério de aceite",
          body: "Criterios de aceite deixam claro quando uma historia pode ser considerada pronta. Exemplo: dado que o usuário esta logado, quando informa dados validos, entao o cadastro e salvo e uma mensagem de sucesso aparece. Esse formato ajuda a transformar requisito em teste."
        }
      ],
      pitfalls: [
        "Desenhar ator como parte interna do sistema.",
        "Nomear caso de uso com substantivo em vez de verbo no infinitivo.",
        "Confundir fluxo alternativo com excecao."
      ]
    },
    {
      id: "aula-5",
      number: 5,
      title: "Modelagem com diagrama de casos de uso",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 5.pdf",
      summary: "A aula aprofunda modelagem de sistemas com diagrama de casos de uso, simbologia basica, atores, relacionamentos e utilidade da modelagem antes da implementação.",
      examFocus: [
        "Reconhecer ator, caso de uso, associacao e fronteira do sistema.",
        "Explicar por que modelar antes de implementar.",
        "Interpretar include, extend e generalizacao quando aparecerem.",
        "Descrever caso de uso com objetivo, pre-condicao, fluxo e pos-condicao."
      ],
      sections: [
        {
          source: "base",
          heading: "Modelagem de sistemas",
          body: "Modelar e criar representacoes abstratas do sistema. A modelagem ajuda a compreender requisitos, discutir soluções e reduzir ambiguidades antes de construir o software."
        },
        {
          source: "base",
          heading: "Diagrama de casos de uso",
          body: "O diagrama mostra como atores externos interagem com funcionalidades do sistema. Ele ajuda a representar o escopo funcional e a conversa entre cliente e equipe."
        },
        {
          source: "base",
          heading: "Ator",
          body: "Ator e um papel externo que interage com o sistema. Pode ser uma pessoa, outro sistema, organizacao ou dispositivo. O ator não e uma tela nem uma classe interna."
        },
        {
          source: "base",
          heading: "Caso de uso",
          body: "Caso de uso representa uma funcionalidade observavel pelo ator. O nome deve expressar acao, como 'Cadastrar reserva', 'Emitir relatorio' ou 'Consultar pedido'."
        },
        {
          source: "base",
          heading: "Fronteira do sistema",
          body: "A fronteira separa o que esta dentro do sistema do que esta fora. Atores ficam fora; casos de uso ficam dentro. Essa separacao e essencial para não confundir escopo."
        },
        {
          source: "extra",
          heading: "Complemento: include, extend e generalizacao",
          body: "Include representa comportamento obrigatorio reutilizado por outro caso de uso. Extend representa comportamento opcional ou condicional. Generalizacao representa especializacao de ator ou caso de uso. O material base foca a simbologia, mas estes relacionamentos costumam aparecer em exercicios."
        },
        {
          source: "extra",
          heading: "Complemento: descricao textual",
          body: "Um diagrama sozinho pode ser insuficiente. Em entregas praticas, acompanhe cada caso de uso importante com objetivo, ator principal, pre-condicoes, fluxo principal, fluxos alternativos, excecoes e pos-condicoes."
        }
      ],
      pitfalls: [
        "Colocar banco de dados como ator sem ele iniciar ou receber interacao externa relevante.",
        "Usar include para comportamento opcional.",
        "Fazer diagrama bonito, mas sem descricao textual dos fluxos."
      ]
    },
    {
      id: "aula-6",
      number: 6,
      title: "Projeto, arquitetura, implementação e implantação",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 6.pdf",
      summary: "A aula situa projeto e implementação no processo de desenvolvimento, explicando projeto de software, importancia do projeto, etapas do processo, implementação e implantação.",
      examFocus: [
        "Diferenciar requisito, projeto e implementação.",
        "Explicar por que projeto define como o sistema sera construido.",
        "Reconhecer etapas de projeto: arquitetura, interfaces, componentes e dados.",
        "Distinguir implementação de implantação."
      ],
      sections: [
        {
          source: "base",
          heading: "O que e projeto de software",
          body: "Projeto e a atividade que transforma o que deve ser feito em uma estratégia de como fazer. Ele cria modelos do software envolvendo arquitetura, dados, interfaces e componentes."
        },
        {
          source: "base",
          heading: "Importancia do projeto",
          body: "Projetar antes de codar permite avaliar alternativas, reduzir riscos e melhorar entendimento. O material compara com construir uma casa: antes dos detalhes, e preciso uma planta geral."
        },
        {
          source: "base",
          heading: "Projeto de arquitetura",
          body: "Na arquitetura, identifica-se a estrutura global do sistema, componentes principais e relacoes entre eles. Ela orienta decisoes técnicas importantes antes da implementação."
        },
        {
          source: "base",
          heading: "Implementação",
          body: "Implementação e a construção do software a partir do projeto. Envolve codificação, integração e criação dos componentes planejados."
        },
        {
          source: "base",
          heading: "Implantação",
          body: "Implantação e a colocacao do software em ambiente de uso. Pode envolver instalacao, configuração, migracao de dados, treinamento e disponibilizacao aos usuários."
        },
        {
          source: "extra",
          heading: "Complemento: arquitetura em camadas",
          body: "Em uma arquitetura em camadas, a interface conversa com uma camada de aplicacao, que conversa com dominio/servicos e persistencia. A vantagem e separar responsabilidades; o risco e criar acoplamento se as camadas forem ignoradas."
        },
        {
          source: "extra",
          heading: "Complemento: exemplos de estilos",
          body: "Cliente-servidor separa consumidores e servidor central. MVC separa modelo, visão e controlador. Microservicos dividem o sistema em servicos independentes, mas aumentam complexidade operacional. Estes estilos não são aprofundados no PDF."
        }
      ],
      pitfalls: [
        "Dizer que projeto e a mesma coisa que codigo.",
        "Confundir implantação com implementação.",
        "Escolher arquitetura sem justificar requisitos de qualidade."
      ]
    },
    {
      id: "aula-7",
      number: 7,
      title: "Qualidade e teste de software",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 7.pdf",
      summary: "A aula apresenta qualidade de software, garantia de qualidade, defeito, erro, falha, processo de teste, verificacao e validação.",
      examFocus: [
        "Diferenciar defeito, erro e falha.",
        "Diferenciar verificacao e validação.",
        "Entender teste como parte da garantia de qualidade.",
        "Explicar por que testes são criticos em sistemas de risco."
      ],
      sections: [
        {
          source: "base",
          heading: "Qualidade de software",
          body: "Qualidade esta relacionada a conformidade com requisitos funcionais e não funcionais, mas tambem envolve expectativa do usuário e adequacao ao uso. A aula reforca que qualidade não nasce apenas no teste."
        },
        {
          source: "base",
          heading: "Garantia de qualidade",
          body: "SQA e aplicada durante todo o processo de Engenharia de Software. Ela envolve métodos, padrões, revisoes, auditorias e testes para aumentar a confiança no produto."
        },
        {
          source: "base",
          heading: "Defeito, erro e falha",
          body: "Defeito e uma imperfeicao no artefato ou codigo. Erro pode ser a acao humana ou estado incorreto que introduz problema. Falha e a manifestacao observavel quando o software não se comporta como esperado."
        },
        {
          source: "base",
          heading: "Processo de teste",
          body: "Teste e uma atividade planejada para encontrar problemas e aumentar a confiança. Envolve planejamento, definicao de casos, execucao, registro de resultados e correcao."
        },
        {
          source: "base",
          heading: "Verificacao e validação",
          body: "Verificacao pergunta se o produto esta sendo construido corretamente conforme especificação. Validação pergunta se o produto correto esta sendo construido para atender as necessidades reais do usuário."
        },
        {
          source: "extra",
          heading: "Complemento: caixa-preta e caixa-branca",
          body: "Caixa-preta testa entradas e saidas sem olhar o codigo. Caixa-branca considera estrutura interna do codigo, caminhos e condicoes. O PDF não aprofunda essas técnicas, mas elas são comuns em provas."
        },
        {
          source: "extra",
          heading: "Complemento: valor limite e equivalencia",
          body: "Particionamento de equivalencia divide entradas em grupos que devem se comportar de forma semelhante. Analise de valor limite testa bordas, como minimo, maximo e valores imediatamente proximos."
        }
      ],
      pitfalls: [
        "Dizer que teste prova ausencia de defeitos.",
        "Confundir verificacao com validação.",
        "Tratar qualidade como responsabilidade apenas do testador."
      ]
    },
    {
      id: "aula-8",
      number: 8,
      title: "Evolução, sistemas legados e manutencao",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 8.pdf",
      summary: "A aula trata mudanças depois da implantação, processo de evolução, sistemas legados, manutencao e motivos para alterar sistemas em operacao.",
      examFocus: [
        "Explicar por que software precisa evoluir depois da entrega.",
        "Caracterizar sistemas legados.",
        "Diferenciar tipos de manutencao.",
        "Entender degradacao estrutural ao longo de mudanças."
      ],
      sections: [
        {
          source: "base",
          heading: "Evolução de software",
          body: "Depois de implantado, o software continua mudando para permanecer util. Mudancas podem vir de novas regras de negocio, erros encontrados, plataformas novas, desempenho, segurança ou vantagem competitiva."
        },
        {
          source: "base",
          heading: "Processo de evolução",
          body: "A evolução conecta requisitos, projeto, implementação e validação em ciclos. A cada mudanca, o sistema passa por análise, modificacao e nova disponibilizacao."
        },
        {
          source: "base",
          heading: "Sistemas legados",
          body: "Sistemas legados são antigos, mas ainda importantes para a organizacao. Eles podem usar tecnologias obsoletas, ter pouca documentação e ser difíceis de alterar sem risco."
        },
        {
          source: "base",
          heading: "Manutencao",
          body: "Manutencao envolve modificar software apos a entrega. Pode corrigir falhas, adaptar a novas plataformas, melhorar desempenho ou adicionar funcionalidades."
        },
        {
          source: "base",
          heading: "Degradacao estrutural",
          body: "A medida que mudanças se acumulam, a estrutura do software pode se degradar. Isso torna manutencao mais cara e aumenta o risco de novas falhas."
        },
        {
          source: "extra",
          heading: "Complemento: tipos de manutencao",
          body: "Corretiva corrige defeitos. Adaptativa ajusta o software a mudanças externas. Perfectiva melhora desempenho, usabilidade ou adiciona recursos. Preventiva reduz risco futuro por refatoracao, limpeza e melhoria interna."
        },
        {
          source: "extra",
          heading: "Complemento: divida tecnica",
          body: "Divida tecnica e o custo futuro criado por decisoes rapidas ou ruins no presente. Ela não e necessariamente erro imediato, mas torna evolução mais lenta e arriscada se não for controlada."
        }
      ],
      pitfalls: [
        "Achar que manutencao significa apenas corrigir erro.",
        "Dizer que sistema legado e inutil por ser antigo.",
        "Ignorar que mudanças podem degradar a arquitetura."
      ]
    }
  ],
  comparisons: [
    {
      title: "Verificacao vs Validação",
      leftLabel: "Verificacao",
      left: "Confere se o produto esta sendo construido corretamente, conforme especificação, padrões e artefatos planejados.",
      rightLabel: "Validação",
      right: "Confere se o produto correto esta sendo construido para resolver a necessidade real do usuário.",
      source: "base"
    },
    {
      title: "Requisito funcional vs não funcional",
      leftLabel: "Funcional",
      left: "Descreve servico, funcao ou comportamento que o sistema deve executar.",
      rightLabel: "Não funcional",
      right: "Descreve qualidade, restricao ou condicao de operacao, como segurança, desempenho e usabilidade.",
      source: "base"
    },
    {
      title: "Caso de uso vs Historia de usuário",
      leftLabel: "Caso de uso",
      left: "Mais estruturado, descreve ator, objetivo, fluxo principal, alternativas e excecoes.",
      rightLabel: "Historia de usuário",
      right: "Mais leve, escrita do ponto de vista do usuário: como papel, quero acao, para beneficio.",
      source: "base"
    },
    {
      title: "Defeito vs erro vs falha",
      leftLabel: "Defeito/erro",
      left: "Defeito e problema no artefato; erro pode ser acao humana ou estado incorreto que cria o problema.",
      rightLabel: "Falha",
      right: "Manifestacao observavel quando o sistema se comporta de forma diferente do esperado.",
      source: "base"
    },
    {
      title: "Implementação vs Implantação",
      leftLabel: "Implementação",
      left: "Construir o software: codigo, componentes, integração e ajustes tecnicos.",
      rightLabel: "Implantação",
      right: "Colocar o software em uso: instalar, configurar, migrar, treinar e disponibilizar.",
      source: "base"
    },
    {
      title: "Cascata vs Incremental",
      leftLabel: "Cascata",
      left: "Fases mais sequenciais; funciona melhor com requisitos estaveis e baixo grau de mudanca.",
      rightLabel: "Incremental",
      right: "Entregas em partes; permite feedback e adaptacao ao longo do desenvolvimento.",
      source: "base"
    }
  ],
  questions: [
    {
      id: "q01",
      lessonId: "aula-1",
      source: "base",
      prompt: "Qual alternativa melhor define Engenharia de Software?",
      options: [
        "Apenas a atividade de programar em uma linguagem.",
        "Disciplina que aplica métodos, processos e ferramentas para produzir e manter software com qualidade.",
        "Conjunto de computadores usados por uma empresa.",
        "Documento final entregue ao usuário depois da implantação."
      ],
      answerIndex: 1,
      explanation: "Engenharia de Software envolve todo o ciclo de produção e manutencao, não apenas codigo."
    },
    {
      id: "q02",
      lessonId: "aula-1",
      source: "base",
      prompt: "Qual item e exemplo de artefato de software?",
      options: [
        "Documento de requisitos.",
        "Apenas o computador do desenvolvedor.",
        "Somente a memoria RAM usada pelo sistema.",
        "O horario da aula."
      ],
      answerIndex: 0,
      explanation: "Artefatos incluem documentos, modelos, codigo, planos de teste e outros produtos do processo."
    },
    {
      id: "q03",
      lessonId: "aula-1",
      source: "base",
      prompt: "Um atributo de bom software destacado no material e:",
      options: [
        "Ser impossivel de modificar.",
        "Ter somente interface bonita.",
        "Manutenibilidade.",
        "Dispensar documentação."
      ],
      answerIndex: 2,
      explanation: "Manutenibilidade e uma qualidade importante porque softwares mudam ao longo do tempo."
    },
    {
      id: "q04",
      lessonId: "aula-2",
      source: "base",
      prompt: "Quais são atividades fundamentais presentes nos processos de software?",
      options: [
        "Marketing, venda, propaganda e suporte.",
        "Especificacao, desenvolvimento, validação e evolução.",
        "Compra, instalacao, digitacao e impressão.",
        "Design grafico, hospedagem, redes sociais e aténdimento."
      ],
      answerIndex: 1,
      explanation: "A aula 2 apresenta essas quatro atividades como base dos processos de software."
    },
    {
      id: "q05",
      lessonId: "aula-2",
      source: "base",
      prompt: "O modelo cascata tende a organizar o desenvolvimento como:",
      options: [
        "Fases sequenciais com transicao entre etapas.",
        "Nenhuma documentação e nenhuma fase definida.",
        "Apenas manutencao depois da entrega.",
        "Somente prototipos descartaveis."
      ],
      answerIndex: 0,
      explanation: "No cascata, as atividades aparecem de forma mais sequencial do que iterativa."
    },
    {
      id: "q06",
      lessonId: "aula-2",
      source: "extra",
      prompt: "Em Scrum, uma sprint e melhor descrita como:",
      options: [
        "Um ciclo curto de trabalho com objetivo definido.",
        "Um documento de requisitos imutavel.",
        "Um diagrama de banco de dados.",
        "Uma falha observada pelo usuário."
      ],
      answerIndex: 0,
      explanation: "Scrum não e aprofundado no PDF; este e complemento para estudo de agilidade."
    },
    {
      id: "q07",
      lessonId: "aula-3",
      source: "base",
      prompt: "Qual alternativa e requisito funcional?",
      options: [
        "O sistema deve responder em até 2 segundos.",
        "O sistema deve permitir cadastrar pacientes.",
        "O sistema deve estar disponivel 99,5% do tempo.",
        "A interface deve seguir o padrao visual da empresa."
      ],
      answerIndex: 1,
      explanation: "Cadastrar pacientes e uma funcao do sistema. As demais alternativas indicam qualidade ou restricao."
    },
    {
      id: "q08",
      lessonId: "aula-3",
      source: "base",
      prompt: "Qual alternativa e requisito não funcional?",
      options: [
        "Emitir nota fiscal.",
        "Cancelar reserva.",
        "Registrar usuário.",
        "Criptografar dados sensiveis em repouso."
      ],
      answerIndex: 3,
      explanation: "Criptografia e uma restricao/qualidade de segurança, portanto e requisito não funcional."
    },
    {
      id: "q09",
      lessonId: "aula-3",
      source: "base",
      prompt: "Por que erros em requisitos são especialmente caros?",
      options: [
        "Porque requisitos nunca mudam.",
        "Porque eles se propagam para projeto, implementação e teste.",
        "Porque não afetam clientes.",
        "Porque são corrigidos automaticamente por ferramentas CASE."
      ],
      answerIndex: 1,
      explanation: "Um erro inicial pode contaminar todo o desenvolvimento e ser caro de corrigir tardiamente."
    },
    {
      id: "q10",
      lessonId: "aula-4",
      source: "base",
      prompt: "SRS e a sigla associada a:",
      options: [
        "Software Requirements Specification.",
        "System Runtime Storage.",
        "Simple Review Sprint.",
        "Security Release System."
      ],
      answerIndex: 0,
      explanation: "SRS e o documento de especificação de requisitos de software."
    },
    {
      id: "q11",
      lessonId: "aula-4",
      source: "base",
      prompt: "No formato de historia de usuário, qual estrutura e mais comum?",
      options: [
        "Dado, quando, entao.",
        "Como um papel, quero uma funcionalidade, para obter um beneficio.",
        "Entrada, processamento e saida.",
        "Classe, atributo e metodo."
      ],
      answerIndex: 1,
      explanation: "O formato evidencia papel do usuário, necessidade e valor esperado."
    },
    {
      id: "q12",
      lessonId: "aula-4",
      source: "base",
      prompt: "Em um caso de uso, fluxo de excecao descreve:",
      options: [
        "O caminho normal de sucesso.",
        "Uma variacao valida sem problema.",
        "Uma situacao de erro ou impedimento.",
        "A cor usada no diagrama."
      ],
      answerIndex: 2,
      explanation: "Fluxos de excecao tratam situacoes anormais, erros ou impedimentos."
    },
    {
      id: "q13",
      lessonId: "aula-5",
      source: "base",
      prompt: "Em diagrama de casos de uso, o ator deve representar:",
      options: [
        "Uma classe interna do sistema.",
        "Um papel externo que interage com o sistema.",
        "Um atributo do banco de dados.",
        "Uma tela especifica da aplicacao."
      ],
      answerIndex: 1,
      explanation: "Ator e externo ao sistema e representa um papel, não uma implementação interna."
    },
    {
      id: "q14",
      lessonId: "aula-5",
      source: "base",
      prompt: "A fronteira do sistema em caso de uso serve para:",
      options: [
        "Separar atores externos das funcionalidades internas do sistema.",
        "Colorir o diagrama sem significado.",
        "Indicar a linguagem de programacao.",
        "Mostrar tabelas do banco de dados."
      ],
      answerIndex: 0,
      explanation: "A fronteira ajuda a explicitar o escopo do sistema."
    },
    {
      id: "q15",
      lessonId: "aula-5",
      source: "extra",
      prompt: "O relacionamento include em caso de uso normalmente indica:",
      options: [
        "Comportamento obrigatorio reutilizado por outro caso de uso.",
        "Comportamento opcional e condicional.",
        "Heranca entre bancos de dados.",
        "Falha durante teste de sistema."
      ],
      answerIndex: 0,
      explanation: "Este ponto e complemento: include e usado para comportamento comum obrigatorio."
    },
    {
      id: "q16",
      lessonId: "aula-6",
      source: "base",
      prompt: "A diferenca central entre requisitos e projeto e:",
      options: [
        "Requisitos dizem o que deve ser feito; projeto indica como construir.",
        "Requisitos são sempre codigo; projeto e sempre teste.",
        "Requisitos so existem depois da implantação.",
        "Projeto não influencia implementação."
      ],
      answerIndex: 0,
      explanation: "Essa separacao e uma das ideias centrais das aulas de requisitos e projeto."
    },
    {
      id: "q17",
      lessonId: "aula-6",
      source: "base",
      prompt: "Implantação significa:",
      options: [
        "Escrever o codigo-fonte.",
        "Colocar o software em ambiente de uso.",
        "Criar apenas o diagrama de caso de uso.",
        "Apagar requisitos antigos."
      ],
      answerIndex: 1,
      explanation: "Implantação envolve disponibilizar, configurar e preparar o software para uso real."
    },
    {
      id: "q18",
      lessonId: "aula-6",
      source: "extra",
      prompt: "Em arquitetura em camadas, a principal vantagem esperada e:",
      options: [
        "Misturar todas as responsabilidades.",
        "Separar responsabilidades e reduzir acoplamento.",
        "Eliminar a necessidade de testes.",
        "Transformar requisitos não funcionais em funcionais."
      ],
      answerIndex: 1,
      explanation: "Este e complemento: camadas ajudam organizacao, manutencao e separacao de responsabilidades."
    },
    {
      id: "q19",
      lessonId: "aula-7",
      source: "base",
      prompt: "Falha de software e melhor definida como:",
      options: [
        "Manifestacao observavel de comportamento incorreto.",
        "Qualquer reuniao com cliente.",
        "A documentação de requisitos.",
        "O ambiente de desenvolvimento."
      ],
      answerIndex: 0,
      explanation: "Falha e o problema percebido na execucao ou uso do sistema."
    },
    {
      id: "q20",
      lessonId: "aula-7",
      source: "base",
      prompt: "Verificacao pergunta principalmente:",
      options: [
        "Estamos construindo o produto certo para o usuário?",
        "Estamos construindo corretamente conforme especificação?",
        "Qual e o preco final do software?",
        "Qual linguagem tem mais bibliotecas?"
      ],
      answerIndex: 1,
      explanation: "Validação se aproxima da primeira pergunta; verificacao compara com especificação e padrões."
    },
    {
      id: "q21",
      lessonId: "aula-7",
      source: "extra",
      prompt: "Teste de caixa-preta foca principalmente em:",
      options: [
        "Estrutura interna do codigo.",
        "Entradas, saidas e comportamento observavel.",
        "Estilo visual do editor.",
        "Hardware usado pelo programador."
      ],
      answerIndex: 1,
      explanation: "Este e complemento fora do PDF: caixa-preta testa comportamento externo."
    },
    {
      id: "q22",
      lessonId: "aula-8",
      source: "base",
      prompt: "Um motivo comum para evoluir software apos implantação e:",
      options: [
        "Mudanca nas regras de negocio.",
        "Proibir manutencao.",
        "Evitar qualquer contato com usuário.",
        "Eliminar a necessidade de requisitos."
      ],
      answerIndex: 0,
      explanation: "Empresas, tecnologias e expectativas mudam, exigindo evolução do sistema."
    },
    {
      id: "q23",
      lessonId: "aula-8",
      source: "base",
      prompt: "Sistema legado e:",
      options: [
        "Sistema antigo, ainda importante, geralmente difícil de modificar.",
        "Sistema que nunca foi usado.",
        "Somente um prototipo descartavel.",
        "Qualquer aplicativo novo em desenvolvimento."
      ],
      answerIndex: 0,
      explanation: "Legado não significa inutil; muitas vezes e critico para a organizacao."
    },
    {
      id: "q24",
      lessonId: "aula-8",
      source: "extra",
      prompt: "Manutencao preventiva busca:",
      options: [
        "Melhorar a estrutura interna para reduzir riscos futuros.",
        "Corrigir exclusivamente uma falha ja observada.",
        "Trocar o nome do sistema.",
        "Impedir toda evolução."
      ],
      answerIndex: 0,
      explanation: "Este e complemento: manutencao preventiva reduz risco e custo futuro."
    }
  ],
  flashcards: [
    {
      prompt: "O que e Engenharia de Software?",
      answer: "Disciplina que aplica processos, métodos, técnicas e ferramentas para especificar, desenvolver, validar, evoluir e manter software com qualidade."
    },
    {
      prompt: "Quais são as quatro atividades fundamentais do processo de software?",
      answer: "Especificacao, desenvolvimento, validação e evolução."
    },
    {
      prompt: "Diferenca entre requisito funcional e não funcional?",
      answer: "Funcional descreve o que o sistema faz. Não funcional descreve qualidade, restricao ou condicao de funcionamento."
    },
    {
      prompt: "O que e SRS?",
      answer: "Software Requirements Specification, o documento de especificação de requisitos de software."
    },
    {
      prompt: "O que e ator em caso de uso?",
      answer: "Um papel externo que interage com o sistema, como usuário, outro sistema ou dispositivo."
    },
    {
      prompt: "Diferenca entre implementação e implantação?",
      answer: "Implementação e construir o software. Implantação e colocar o software em uso."
    },
    {
      prompt: "Validação responde qual pergunta?",
      answer: "Estamos construindo o produto certo para atender a necessidade real do usuário?"
    },
    {
      prompt: "Por que software evolui?",
      answer: "Porque negocio, usuários, tecnologia, segurança, desempenho e regras mudam depois da entrega."
    }
  ],
  activities: [
    {
      id: "a1-praticando",
      title: "A1: Praticando: tipos de sistemas de software",
      lessonIds: ["aula-1"],
      source: "course",
      basedOn: "Questionario real do curso. As perguntas originais não foram enviadas; os exemplos abaixo são reconstrução para treino individual.",
      prompt: "Identificar, para diferentes sistemas indicados, que tipo de sistema de software eles são.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia a descricao de um sistema.",
        "Classifique o sistema pelo tipo mais adequado.",
        "Justifique a classificacao com uma caracteristica do sistema.",
        "Compare com outros tipos para evitar classificacao por palavra solta."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era um questionario com duas tentativas e melhor desempenho registrado.",
        "Neste site, use como treino: responda mentalmente ou em um arquivo local se quiser.",
        "Não entregue nada no site; quando a atividade for oficial, a submissão acontece no ambiente da disciplina."
      ],
      evaluationTitle: "Criterio de acerto",
      evaluation: [
        "Sistema embarcado/controlado: software integrado a equipamento fisico, com controle de dispositivo.",
        "Sistema interativo baseado em transacoes: usuários consultam, registram ou alteram dados via operacoes.",
        "Sistema de processamento em lote: processa grandes volumes sem interacao constante.",
        "Sistema de modelagem/simulacao: representa fenomenos para prever comportamento.",
        "Sistema de entretenimento: foco em experiencia, jogo, midia ou lazer."
      ],
      exampleTitle: "Exemplos de resposta correta",
      example: [
        "Caixa eletronico: sistema interativo baseado em transacoes, pois o usuário realiza saques, consultas e operacoes bancarias.",
        "Controle de freios ABS: sistema embarcado de controle, pois fica integrado ao veiculo e reage a sensores.",
        "Folha de pagamento mensal: sistema de processamento em lote, pois processa dados de muitos funcionarios em ciclos.",
        "Simulador de voo: sistema de modelagem/simulacao, pois reproduz comportamento de uma aeronave para treino.",
        "Spotify: sistema de entretenimento e distribuicao de midia, com forte componente de recomendacao e transacoes de usuário."
      ]
    },
    {
      id: "a1-aplicando",
      title: "A1: Aplicando Conhecimento: associar conceito e significado",
      lessonIds: ["aula-1"],
      source: "course",
      basedOn: "Questionario real do curso, valendo 1,0 ponto. As associacoes abaixo são treino com base nos conceitos da aula.",
      prompt: "Associar conceitos fundamentais da Engenharia de Software ao respectivo significado.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia o conceito.",
        "Escreva o significado sem consultar.",
        "Depois confira com o modelo abaixo.",
        "Repita até conseguir diferenciar conceitos parecidos, como processo e modelo de processo."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionario com duas tentativas e melhor desempenho registrado.",
        "Neste site, use como revisão guiada.",
        "Se quiser treinar fora do site, crie uma tabela conceito/significado no seu PC."
      ],
      evaluation: [
        "Consegue definir software alem de codigo.",
        "Diferencia Engenharia de Software de programacao.",
        "Diferencia processo, modelo de processo e artefato.",
        "Reconhece atributos de bom software."
      ],
      exampleTitle: "Associacoes corretas para memorizar",
      example: [
        "Software: programas, configuracoes e documentação associada.",
        "Engenharia de Software: disciplina que aplica métodos, processos e ferramentas para produzir e manter software com qualidade.",
        "Processo de software: conjunto estruturado de atividades para especificar, desenvolver, validar e evoluir software.",
        "Modelo de processo: representacao simplificada de um processo de software.",
        "Artefato: produto gerado durante o desenvolvimento, como documento de requisitos, diagrama, codigo ou plano de teste.",
        "CASE: ferramenta de apoio a atividades de Engenharia de Software."
      ]
    },
    {
      id: "a2-praticando",
      title: "A2: Praticando: modelos de processo",
      lessonIds: ["aula-2"],
      source: "course",
      basedOn: "Questionario real do curso. As questões exatas não foram enviadas; os itens abaixo simulam o tipo de classificacao cobrada.",
      prompt: "Fixar características dos modelos de processos de desenvolvimento de software.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia uma caracteristica de processo.",
        "Associe ao modelo mais provavel.",
        "Explique a vantagem e a limitacao do modelo.",
        "Compare modelos tradicionais, incrementais, orientados a reuso e ageis."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionario com duas tentativas.",
        "Neste site, a atividade vira treino de associacao e revisão.",
        "Não ha arquivo para gerar, a menos que voce queira anotar no seu PC."
      ],
      evaluation: [
        "Cascata: fases sequenciais e melhor aderencia quando requisitos são estaveis.",
        "Incremental: entrega partes do sistema e permite feedback.",
        "Orientado a reuso: aproveita componentes existentes para reduzir tempo e custo.",
        "Ágil: ciclos curtos, adaptacao e colaboracao com cliente.",
        "Prototipacao: ajuda a entender requisitos e validar ideias cedo."
      ],
      exampleTitle: "Exemplos de classificacao correta",
      example: [
        "Descricao: projeto com requisitos bem definidos, contrato fechado e pouca mudanca esperada. Modelo provavel: cascata.",
        "Descricao: equipe entrega funcionalidades pequenas a cada ciclo e coleta feedback. Modelo provavel: incremental/ágil.",
        "Descricao: sistema montado a partir de bibliotecas e componentes prontos. Modelo provavel: orientado a reuso.",
        "Descricao: cliente ainda não sabe exatamente o que quer e precisa visualizar telas. Abordagem util: prototipacao.",
        "Pegadinha: ágil não significa ausencia de planejamento; significa planejamento adaptativo."
      ]
    },
    {
      id: "a2-aplicando",
      title: "A2: Aplicando Conhecimento: pesquisa sobre projeto de software",
      lessonIds: ["aula-2"],
      source: "course",
      basedOn: "Atividade real do curso: pesquisar um projeto de uma grande empresa e entregar Word ou PDF de até 3 paginas no AVA.",
      prompt: "Pesquisar um projeto de software desenvolvido por grande empresa ou projeto open source, descrevendo problema, metodologia e reflexao critica.",
      tasksTitle: "Enunciado real adaptado para estudo",
      tasks: [
        "Escolha um projeto: Spotify, Netflix, iFood, Nubank, Mozilla Firefox ou outro projeto relevante.",
        "Descreva o que foi desenvolvido e qual problema resolve.",
        "Explique qual metodologia ou abordagem foi adotada e por que ela faz sentido.",
        "Reflita se a abordagem ágil foi adequada.",
        "Compare com um modelo tradicional e justifique se ele seria melhor ou pior."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Crie um Word ou PDF no seu PC se quiser treinar a entrega.",
        "Limite sugerido da atividade oficial: até 3 paginas.",
        "Estrutura: titulo, descricao do projeto, metodologia, reflexao critica e referencias usadas.",
        "O site não recebe upload; a entrega oficial seria no recurso Aplicando Conhecimento do AVA."
      ],
      evaluation: [
        "Descricao do projeto e do problema e objetiva.",
        "Metodologia não e citada de forma generica; ha relação com o contexto do projeto.",
        "A reflexao compara agilidade com modelos tradicionais usando argumentos.",
        "Não transforma a resposta em propaganda da empresa.",
        "Cita fontes quando usar informacao externa."
      ],
      exampleTitle: "Exemplo de resposta correta: Spotify (modelo didatico)",
      example: [
        "Projeto: evolução da plataforma Spotify para entrega continua de recursos de streaming e recomendacao musical.",
        "Problema resolvido: permitir que usuários acessem musicas sob demanda, recebam recomendacoes personalizadas e usem o servico em diferentes dispositivos.",
        "Metodologia/abordagem: abordagem ágil e incremental, com equipes pequenas, ciclos curtos, experimentacao e uso intensivo de feedback dos usuários.",
        "Por que faz sentido: produto digital com mercado competitivo, requisitos mutaveis e necessidade de aprender com comportamento real de uso.",
        "Reflexao critica: a abordagem ágil parece adequada porque permite testar hipoteses e adaptar funcionalidades. Um modelo cascata tenderia a ser pior para recomendacao e experiencia de usuário, pois congelaria requisitos cedo demais.",
        "Ressalva: para partes de infraestrutura critica, praticas mais formais de controle, revisão e validação tambem seriam importantes."
      ]
    },
    {
      id: "a3-praticando",
      title: "A3: Praticando: OBJ, RF e RNF",
      lessonIds: ["aula-3"],
      source: "course",
      basedOn: "Questionario real do curso sobre objetivos, requisitos funcionais e requisitos não funcionais.",
      prompt: "Ler situacoes-problema e selecionar se cada item e OBJ, RF ou RNF.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia uma frase sobre o sistema.",
        "Classifique como objetivo do sistema, requisito funcional ou requisito não funcional.",
        "Procure o verbo da frase: se descreve acao do sistema, tende a ser RF.",
        "Procure qualidade/restricao: se fala de desempenho, segurança, plataforma ou usabilidade, tende a ser RNF.",
        "Se explica o motivo da existencia do sistema, tende a ser OBJ."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionario com duas tentativas.",
        "Neste site, use como treino de classificacao.",
        "Não ha envio de arquivo nesta versão de estudo."
      ],
      evaluation: [
        "OBJ responde por que o sistema existe.",
        "RF detalha o que o sistema deve fazer.",
        "RNF especifica características, capacidades ou restrições.",
        "A classificacao deve considerar o sentido da frase, não apenas uma palavra isolada."
      ],
      exampleTitle: "Exemplos de classificacao correta",
      example: [
        "OBJ: Reduzir filas no aténdimento da clinica por meio de agendamento online.",
        "RF: O sistema deve permitir que o paciente agende uma consulta.",
        "RF: O sistema deve enviar comprovante de agendamento por e-mail.",
        "RNF: O sistema deve responder consultas de agenda em até 2 segundos.",
        "RNF: O sistema deve exigir autenticacao para acesso aos dados do paciente.",
        "Pegadinha: 'ser seguro' e RNF, mas precisa de critério verificavel para ficar bem escrito."
      ]
    },
    {
      id: "a3-aplicando",
      title: "A3: Aplicando Conhecimento: técnicas de levantamento de requisitos",
      lessonIds: ["aula-3"],
      source: "course",
      basedOn: "Atividade real do curso: preencher a tabela do arquivo Aplicando Conhecimento: Tecnicas de Levantamento de Requisitos.docx e postar no AVA.",
      prompt: "Preencher uma tabela relacionando técnicas de levantamento de requisitos, quando usar, vantagens, limitacoes e exemplo.",
      tasksTitle: "Enunciado real adaptado para estudo",
      tasks: [
        "Liste técnicas de levantamento de requisitos.",
        "Explique quando cada tecnica e indicada.",
        "Aponte vantagens e limitacoes.",
        "Inclua um exemplo de aplicacao em um sistema.",
        "Revise se as técnicas realmente ajudam a descobrir necessidades de stakeholders."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Crie uma tabela no Word se quiser simular a entrega.",
        "Colunas sugeridas: tecnica, descricao, quando usar, vantagem, limitacao e exemplo.",
        "O arquivo oficial era um .docx anexado no AVA.",
        "O site não recebe upload; use apenas como guia de preenchimento."
      ],
      evaluation: [
        "Tecnicas não são confundidas com requisitos.",
        "Cada vantagem e limitacao esta conectada ao contexto de uso.",
        "Exemplos são concretos.",
        "Ha pelo menos entrevista, questionario, observacao, análise de documentos, workshop e prototipacao."
      ],
      exampleTitle: "Exemplo de tabela preenchida corretamente",
      example: [
        "Entrevista | Conversa estruturada com stakeholder | Usar quando ha acesso a usuários-chave | Vantagem: aprofunda necessidades | Limitacao: pode trazer vies individual | Exemplo: entrevistar recepcionistas sobre agendamento.",
        "Questionario | Perguntas padronizadas para muitas pessoas | Usar quando ha muitos usuários | Vantagem: escala | Limitacao: pouco aprofundamento | Exemplo: coletar preferencias de pacientes sobre notificacoes.",
        "Observacao | Acompanhar o trabalho real do usuário | Usar quando o processo e pratico e cheio de excecoes | Vantagem: revela o que o usuário não verbaliza | Limitacao: demanda tempo | Exemplo: observar aténdimento na recepcao.",
        "Analise de documentos | Estudar formularios, normas e relatórios existentes | Usar quando ha processo documentado | Vantagem: encontra regras formais | Limitacao: documentos podem estar desatualizados.",
        "Prototipacao | Criar versão inicial de tela ou fluxo | Usar quando requisitos são incertos | Vantagem: facilita feedback | Limitacao: usuário pode confundir prototipo com produto pronto."
      ]
    },
    {
      id: "a4-aplicando",
      title: "A4: Aplicando Conhecimento: introdução a Engenharia de Requisitos",
      lessonIds: ["aula-4"],
      source: "course",
      basedOn: "Atividade real do curso: resolver o PDF Aplicando Conhecimento: Introdução a Engenharia de Requisitos e postar no AVA. O PDF exato não foi enviado aqui.",
      prompt: "Resolver exercicios de especificação de requisitos, casos de uso ou historias de usuário conforme o anexo da atividade.",
      tasksTitle: "Como estudar enquanto o anexo não esta no site",
      tasks: [
        "Revise SRS, requisitos de usuário, requisitos de sistema e casos de uso.",
        "Treine transformar frases vagas em requisitos claros.",
        "Treine separar RF, RNF e restrições.",
        "Treine escrever uma historia de usuário com critério de aceite.",
        "Quando voce enviar o PDF anexado, esta atividade pode ficar fiel ao enunciado real."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Se for simular, responda em um documento local com numero da questao e resposta.",
        "Inclua justificativas curtas quando classificar requisitos.",
        "Se houver diagrama no PDF oficial, mantenha o desenho fora do site e use o AVA para postagem.",
        "Não entregue nada aqui; o site e somente apoio de estudo."
      ],
      evaluation: [
        "Respostas usam vocabulario da aula: SRS, RF, RNF, ator, caso de uso, fluxo.",
        "Requisitos são verificaveis.",
        "Historias de usuário deixam claro papel, acao e beneficio.",
        "Não ha mistura entre necessidade do usuário e solucao tecnica desnecessaria."
      ],
      exampleTitle: "Exemplo de resposta correta para treino",
      example: [
        "Frase vaga: o sistema deve ser rapido.",
        "Reescrita como RNF: o sistema deve carregar a tela de consulta em até 2 segundos para 95% das requisicoes com até 100 usuários simultaneos.",
        "Frase funcional: o sistema deve permitir que o usuário recupere a senha por e-mail.",
        "Historia: como cliente, quero recuperar minha senha para voltar a acessar minha conta sem depender do suporte.",
        "Criterio de aceite: dado um e-mail cadastrado, quando o usuário solicitar recuperacao, entao o sistema envia um link valido por 30 minutos."
      ]
    },
    {
      id: "a5-aplicando",
      title: "A5: Aplicando Conhecimento: diagrama de caso de uso do estacionamento",
      lessonIds: ["aula-5"],
      source: "course",
      basedOn: "Atividade real do curso: implementar um diagrama de caso de uso para o estacionamento do Shopping Vista Bela e postar o arquivo no AVA.",
      prompt: "Modelar o sistema de estacionamento com 200 vagas, ticket, pagamento, cancelas, operadores e administrador.",
      tasksTitle: "Enunciado real adaptado para estudo",
      tasks: [
        "Identifique atores externos.",
        "Identifique casos de uso com verbos de acao.",
        "Defina a fronteira do sistema de estacionamento.",
        "Relacione atores aos casos de uso.",
        "Use include/extend apenas quando fizer sentido.",
        "Monte o diagrama em ferramenta externa se quiser treinar a entrega."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Crie o diagrama em draw.io, StarUML, Lucidchart, PlantUML ou ferramenta similar.",
        "Exporte como imagem, PDF ou arquivo aceito pelo professor.",
        "Inclua nome do sistema e atores.",
        "O site não recebe o arquivo; a postagem oficial seria no AVA."
      ],
      evaluation: [
        "Atores principais: Cliente, Operador do Estacionamento e Administrador.",
        "Casos de uso representam objetivos do ator, não telas soltas.",
        "Administrador consulta relatorios e configura tarifas/tolerancias.",
        "Operador auxilia clientes, abre cancelas manualmente e resolve perda de ticket.",
        "Cliente retira ticket, paga estacionamento e sai com ticket pago.",
        "Fluxos obrigatorios podem ser modelados com include, mas sem exagero."
      ],
      exampleTitle: "Exemplo correto: estrutura do diagrama",
      example: [
        "Sistema: Sistema de Gerenciamento de Estacionamento: Shopping Vista Bela.",
        "Ator Cliente: Retirar ticket, Pagar estacionamento, Inserir ticket pago na saida.",
        "Ator Operador: Auxiliar cliente, Abrir cancela manualmente, Resolver perda de ticket.",
        "Ator Administrador: Consultar relatorio diario, Configurar tarifa, Configurar tempo de tolerancia.",
        "Casos internos importantes: Registrar horario de entrada, Calcular valor a pagar, Registrar pagamento, Validar ticket pago, Liberar saida.",
        "Relacionamentos sugeridos: Pagar estacionamento inclui Calcular valor a pagar e Registrar pagamento; Inserir ticket pago na saida inclui Validar ticket pago e Liberar saida.",
        "Observacao: se voce considerar a operadora de cartao como sistema externo, ela pode aparecer como ator secundario em Realizar pagamento com cartao.",
        "PlantUML de apoio:",
        "@startuml",
        "left to right direction",
        "actor Cliente",
        "actor Operador",
        "actor Administrador",
        "rectangle \"Sistema de Estacionamento\" {",
        "  usecase \"Retirar ticket\" as UC1",
        "  usecase \"Registrar horario de entrada\" as UC2",
        "  usecase \"Pagar estacionamento\" as UC3",
        "  usecase \"Calcular valor a pagar\" as UC4",
        "  usecase \"Registrar pagamento\" as UC5",
        "  usecase \"Inserir ticket pago na saida\" as UC6",
        "  usecase \"Validar ticket pago\" as UC7",
        "  usecase \"Liberar saida\" as UC8",
        "  usecase \"Auxiliar cliente\" as UC9",
        "  usecase \"Abrir cancela manualmente\" as UC10",
        "  usecase \"Resolver perda de ticket\" as UC11",
        "  usecase \"Consultar relatorio diario\" as UC12",
        "  usecase \"Configurar tarifa\" as UC13",
        "  usecase \"Configurar tolerancia\" as UC14",
        "}",
        "Cliente --> UC1",
        "Cliente --> UC3",
        "Cliente --> UC6",
        "Operador --> UC9",
        "Operador --> UC10",
        "Operador --> UC11",
        "Administrador --> UC12",
        "Administrador --> UC13",
        "Administrador --> UC14",
        "UC1 ..> UC2 : <<include>>",
        "UC3 ..> UC4 : <<include>>",
        "UC3 ..> UC5 : <<include>>",
        "UC6 ..> UC7 : <<include>>",
        "UC6 ..> UC8 : <<include>>",
        "@enduml"
      ]
    },
    {
      id: "a6-aplicando",
      title: "A6: Aplicando Conhecimento: questões sobre projeto e implementação",
      lessonIds: ["aula-6"],
      source: "course",
      basedOn: "Atividade real do curso: responder quatro questões e postar o arquivo no AVA.",
      prompt: "Responder perguntas sobre modelo de requisitos, modelo de projeto, atividades de projeto, padrões de projeto e implementação.",
      tasksTitle: "Questões reais",
      tasks: [
        "Qual e a principal diferenca entre o modelo de requisitos e o modelo de projeto?",
        "O processo de projeto de software e composto por quatro atividades principais. Quais são essas quatro atividades?",
        "O que e um Padrao de Projeto (Design Pattern) e qual sua principal finalidade?",
        "Quais são os três aspectos importantes considerados durante a fase de implementação mencionados no material/slides?"
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Crie um documento local com as quatro perguntas e respostas.",
        "Responda com frases completas, não apenas palavras soltas.",
        "Se usar complemento de slides, indique que veio dos slides.",
        "Não entregue no site; a postagem oficial seria no AVA."
      ],
      evaluation: [
        "Diferenca entre 'o que fazer' e 'como fazer' aparece claramente.",
        "Atividades de projeto são listadas com termos tecnicos corretos.",
        "Design Pattern e explicado como solucao reutilizavel para problema recorrente.",
        "Aspectos de implementação não são confundidos com fases de teste."
      ],
      exampleTitle: "Exemplo de resposta correta",
      example: [
        "1. O modelo de requisitos descreve o que o sistema deve fazer: funcoes, restrições e necessidades dos stakeholders. O modelo de projeto descreve como o sistema sera construido, detalhando arquitetura, dados, interfaces e componentes.",
        "2. As quatro atividades principais do projeto são: projeto de arquitetura, projeto de interface, projeto de componentes e projeto de banco de dados/estruturas de dados.",
        "3. Padrao de Projeto e uma solucao geral e reutilizavel para um problema recorrente de projeto de software. Sua finalidade e reaproveitar conhecimento, padronizar soluções e reduzir risco em decisoes de design.",
        "4. Tres aspectos importantes na implementação: reuso de software, gerenciamento de configuração e desenvolvimento host-target.",
        "Observacao: se o slide da sua turma nomear as atividades com pequenas variacoes, preserve a nomenclatura usada pela professora."
      ]
    },
    {
      id: "a7-aplicando",
      title: "A7: Aplicando Conhecimento: defeito, erro e falha",
      lessonIds: ["aula-7"],
      source: "course",
      basedOn: "Questionario real do curso para fixar DEFEITO, ERRO e FALHA.",
      prompt: "Classificar situacoes como defeito, erro ou falha.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia a situacao.",
        "Identifique se ela descreve a causa no artefato, a acao/engano humano ou o comportamento observado.",
        "Classifique como defeito, erro ou falha.",
        "Justifique em uma frase."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionario com duas tentativas.",
        "Neste site, use como treino de classificacao.",
        "Não ha arquivo para postar nesta versão de estudo."
      ],
      evaluation: [
        "Defeito: problema presente no artefato, codigo, requisito ou projeto.",
        "Erro: acao humana equivocada ou estado incorreto que introduz o problema.",
        "Falha: manifestacao observavel quando o software executa comportamento incorreto.",
        "A resposta deve separar causa interna, acao humana e efeito percebido."
      ],
      exampleTitle: "Exemplos de classificacao correta",
      example: [
        "Situacao: programador usou sinal > quando deveria usar >=. Classificacao: erro humano que introduziu defeito.",
        "Situacao: a regra no codigo permite desconto maior que o permitido. Classificacao: defeito no codigo/regra implementada.",
        "Situacao: o cliente finaliza compra com valor errado na tela. Classificacao: falha observada pelo usuário.",
        "Situacao: documento de requisitos dizia que a tolerancia era 10 minutos, mas o correto era 15. Classificacao: defeito no requisito, causado por erro de levantamento.",
        "Pegadinha: uma mesma historia pode conter erro, defeito e falha; a classificacao depende do trecho perguntado."
      ]
    },
    {
      id: "a8-aplicando",
      title: "A8: Aplicando Conhecimento: evolução e manutencao",
      lessonIds: ["aula-8"],
      source: "course",
      basedOn: "Questionario real do curso, valendo 10 pontos. As perguntas exatas não foram enviadas; os itens abaixo são treino baseado na aula 8.",
      prompt: "Fixar conhecimentos sobre evolução de software, sistemas legados e manutencao.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Revise motivos para mudanca apos a implantação.",
        "Classifique tipos de manutencao.",
        "Identifique características de sistemas legados.",
        "Explique por que mudanças sucessivas podem degradar a estrutura.",
        "Relacione evolução com valor de negocio."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionario com duas tentativas e melhor desempenho registrado.",
        "Neste site, use como simulado antes de responder atividades oficiais.",
        "Como valia 10 pontos, traté esta aula como prioridade alta de revisão."
      ],
      evaluation: [
        "Consegue explicar evolução como parte normal da vida do software.",
        "Não define manutencao apenas como correcao de bugs.",
        "Reconhece que legado pode ser antigo e ainda critico.",
        "Diferencia manutencao corretiva, adaptativa, perfectiva e preventiva.",
        "Entende que mudanças sem controle aumentam complexidade e custo."
      ],
      exampleTitle: "Exemplos de resposta correta",
      example: [
        "Pergunta: por que software evolui? Resposta: porque regras de negocio, expectativas dos usuários, plataformas, segurança, desempenho e concorrencia mudam depois da entrega.",
        "Pergunta: um sistema legado deve sempre ser descartado? Resposta: não. Ele pode ser antigo, mas ainda essencial para a organizacao; a decisão depende de valor, risco e custo.",
        "Manutencao corretiva: corrigir erro no calculo de cobranca.",
        "Manutencao adaptativa: ajustar sistema para nova versão de sistema operacional ou nova regra fiscal.",
        "Manutencao perfectiva: melhorar desempenho ou usabilidade.",
        "Manutencao preventiva: refatorar, criar testes ou reorganizar codigo para reduzir risco futuro.",
        "Pegadinha: adicionar nova funcionalidade pode ser manutencao perfectiva/evolutiva, não apenas desenvolvimento novo."
      ]
    }
  ]
};
