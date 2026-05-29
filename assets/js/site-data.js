window.ENG_SOFT_DATA = {
  shallowNotes: [
    {
      title: "Ágil e métodos práticos",
      body: "A aula 2 apresenta desenvolvimento ágil de forma introdutória. Para prova prática, vale complementar com Scrum, Kanban, XP, backlog, sprint e critérios de aceite.",
      lessonId: "aula-2"
    },
    {
      title: "UML além de caso de uso",
      body: "As aulas 4 e 5 focam casos de uso. Se a prova pedir UML de forma ampla, faltam classe, sequência, atividade e estados.",
      lessonId: "aula-5"
    },
    {
      title: "Arquitetura de software",
      body: "A aula 6 é conceitual. Foram adicionados exemplos de camadas, MVC, cliente-servidor e riscos de projeto arquitetural.",
      lessonId: "aula-6"
    },
    {
      title: "Técnicas de teste",
      body: "A aula 7 explica qualidade e processo de teste, mas não aprofunda caixa-preta, caixa-branca, partições de equivalência e valor limite.",
      lessonId: "aula-7"
    },
    {
      title: "Manutenção moderna",
      body: "A aula 8 cobre evolução e legado. Complementos adicionam dívida técnica, refatoração, versionamento e DevOps.",
      lessonId: "aula-8"
    }
  ],
  lessons: [
    {
      id: "aula-1",
      number: 1,
      title: "Fundamentos de Engenharia de Software",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 1.pdf",
      summary: "A aula define software, Engenharia de Software, processo, modelo de processo, artefatos, ferramentas CASE, atributos de bom software e responsabilidades éticas.",
      examFocus: [
        "Diferenciar software, Engenharia de Software e processo de software.",
        "Explicar por que desenvolver software é uma atividade complexa.",
        "Reconhecer atributos de bom software: manutenibilidade, confiabilidade, eficiência e aceitabilidade.",
        "Relacionar Engenharia de Software com qualidade, custo, prazo e manutenção."
      ],
      sections: [
        {
          source: "base",
          heading: "O que é software",
          body: "Software não é apenas o código executável. O material trata software como programas, configurações e documentação associada. Em prova, cuidado com respostas que reduzem software a linguagem de programação ou arquivo instalado."
        },
        {
          source: "base",
          heading: "O que é Engenharia de Software",
          body: "É a disciplina relacionada a todos os aspectos da produção de software, da especificação inicial até a manutenção. O objetivo é aplicar métodos, técnicas, processos e ferramentas para aumentar organização, produtividade e qualidade."
        },
        {
          source: "base",
          heading: "Processo de software",
          body: "Processo é um conjunto estruturado de atividades, restrições e recursos. Em software, ele organiza atividades como especificação, desenvolvimento, validação e evolução. A ideia central é transformar necessidades em um produto confiável e mantível."
        },
        {
          source: "base",
          heading: "Modelo de processo",
          body: "Modelo de processo é uma representação simplificada de um processo real. Ele ajuda a entender uma forma de organizar o desenvolvimento, mas não é uma receita universal. Modelos diferentes fazem escolhas diferentes sobre sequência, iteração e tratamento de mudanças."
        },
        {
          source: "base",
          heading: "Artefatos de software",
          body: "Artefatos são produtos criados durante o processo: documentos de requisitos, modelos, diagramas, código, planos de teste, manuais e registros de manutenção. Em atividades, artefato é aquilo que você entrega para provar que executou uma etapa."
        },
        {
          source: "base",
          heading: "Ferramentas CASE",
          body: "CASE significa Computer-Aided Software Engineering. São ferramentas que apoiam atividades de Engenharia de Software, como modelagem, geração de documentação, controle de versão, testes ou gerenciamento de requisitos."
        },
        {
          source: "base",
          heading: "Atributos de bom software",
          body: "Um bom software precisa atender ao que foi solicitado e também possuir atributos de qualidade. O material destaca características como manutenibilidade, confiabilidade, eficiência e aceitabilidade."
        },
        {
          source: "base",
          heading: "Ética profissional",
          body: "Engenheiros de software lidam com informações, sistemas críticos e decisões que afetam usuários. Por isso, confidencialidade, competência, respeito à propriedade intelectual e responsabilidade social são temas centrais."
        }
      ],
      pitfalls: [
        "Confundir processo com modelo de processo.",
        "Dizer que qualidade só aparece na fase de teste.",
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
        "Entender por que mudanças são inevitáveis em software.",
        "Distinguir desenvolvimento tradicional e ágil em alto nível."
      ],
      sections: [
        {
          source: "base",
          heading: "Paradigma",
          body: "Paradigma é uma abordagem ou filosofia de construção de software. Ele influencia como a equipe pensa, organiza o código, modela problemas e conduz o desenvolvimento."
        },
        {
          source: "base",
          heading: "Atividades fundamentais",
          body: "Os processos de software variam, mas normalmente incluem especificação, desenvolvimento, validação e evolução. A especificação define o que o sistema deve fazer; o desenvolvimento constrói; a validação verifica se atende ao esperado; a evolução adapta o sistema depois da entrega."
        },
        {
          source: "base",
          heading: "Modelos genéricos",
          body: "Modelos genéricos descrevem maneiras de organizar as atividades. O cascata separa fases em sequência; o incremental entrega partes em ciclos; a engenharia orientada a reuso aproveita componentes existentes."
        },
        {
          source: "base",
          heading: "Mudanças",
          body: "Software precisa mudar porque o ambiente, o negócio, os usuários e as tecnologias mudam. Um processo realista precisa prever mudanças em vez de tratar toda mudança como exceção."
        },
        {
          source: "base",
          heading: "Ferramentas de desenvolvimento",
          body: "Ferramentas ajudam a construir, documentar, testar, versionar e gerenciar software. Elas não substituem o processo, mas podem tornar o processo mais controlado e produtivo."
        },
        {
          source: "base",
          heading: "Desenvolvimento ágil",
          body: "O material introduz a ideia de agilidade como resposta a mudanças e entregas mais frequentes. A ênfase está em feedback contínuo, colaboração e adaptação."
        },
        {
          source: "support",
          heading: "Processo Unificado",
          body: "O material de apoio sobre modelos de processo apresenta o Processo Unificado como metodologia iterativa e incremental, baseada em UML, guiada por casos de uso, centrada na arquitetura e focada no gerenciamento contínuo de riscos. Suas fases incluem concepção, elaboração, construção, transição e produção."
        },
        {
          source: "support",
          heading: "Modelos evolucionários",
          body: "Modelos evolucionários são iterativos e permitem construir versões cada vez mais completas do software quando requisitos ainda estão mudando ou partes do sistema precisam ser descobertas ao longo do tempo."
        },
        {
          source: "support",
          heading: "Prototipação",
          body: "A prototipação ajuda quando o cliente tem objetivos gerais, mas não detalha todos os requisitos. O protótipo permite visualizar telas, validar ideias e refinar requisitos. A pegadinha é deixar claro se ele será descartável ou evolucionário."
        },
        {
          source: "support",
          heading: "Modelo espiral",
          body: "O modelo espiral combina a natureza iterativa da prototipação com aspectos controlados do cascata. Ele é dirigido por riscos e trabalha com ciclos que aumentam a definição e a implementação enquanto reduzem incertezas."
        },
        {
          source: "support",
          heading: "Modelo concorrente",
          body: "No modelo concorrente, atividades como comunicação, modelagem, construção e validação podem existir simultaneamente em estados diferentes. Eventos, como mudança de requisitos, disparam transições entre estados."
        },
        {
          source: "extra",
          heading: "Complemento: Scrum, Kanban e XP",
          body: "Scrum organiza o trabalho em sprints, backlog, planejamento, revisão e retrospectiva. Kanban visualiza fluxo e limita trabalho em progresso. XP enfatiza práticas técnicas como programação em par, testes automatizados e integração contínua. Estes detalhes não aparecem com profundidade no material base."
        }
      ],
      pitfalls: [
        "Achar que cascata é sempre errado. Ele pode servir quando requisitos são estáveis.",
        "Achar que ágil significa ausência de documentação.",
        "Confundir desenvolvimento incremental com simples divisão de tarefas."
      ]
    },
    {
      id: "aula-3",
      number: 3,
      title: "Engenharia de Requisitos",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 3 atualizado.pdf",
      summary: "A aula explica a importância dos requisitos, tipos de requisitos, níveis de descrição, processo de Engenharia de Requisitos, elicitação e gerenciamento de mudanças.",
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
          body: "A aula enfatiza que muitos problemas de software nascem de requisitos mal compreendidos. Como erros nessa fase se espalham para projeto, código e teste, corrigi-los tardiamente custa muito mais."
        },
        {
          source: "base",
          heading: "Requisitos funcionais",
          body: "Requisitos funcionais descrevem serviços, funções e comportamentos que o sistema deve fornecer. Exemplo: o sistema deve permitir cadastrar cliente, gerar relatório ou autenticar usuário."
        },
        {
          source: "base",
          heading: "Requisitos não funcionais",
          body: "Requisitos não funcionais descrevem restrições e qualidades do sistema, como desempenho, segurança, usabilidade, disponibilidade, padrões e restrições legais."
        },
        {
          source: "base",
          heading: "Requisitos de usuário e de sistema",
          body: "Requisitos de usuário são mais gerais e compreensíveis para clientes. Requisitos de sistema são mais detalhados e técnicos, servindo de base para projeto e implementação."
        },
        {
          source: "base",
          heading: "Processo de Engenharia de Requisitos",
          body: "O processo envolve descobrir, analisar, documentar, verificar e gerenciar requisitos. É uma atividade contínua, porque requisitos mudam conforme o entendimento do problema evolui."
        },
        {
          source: "base",
          heading: "Técnicas de elicitação",
          body: "Elicitação busca descobrir necessidades dos stakeholders. Podem ser usadas entrevistas, observação, questionários, análise de documentos, workshops e protótipos."
        },
        {
          source: "extra",
          heading: "Complemento: critério de boa escrita",
          body: "Um bom requisito deve ser claro, verificável, necessário, sem ambiguidade e rastreável. Exemplo ruim: 'o sistema deve ser rápido'. Exemplo melhor: 'a busca deve retornar resultados em até 2 segundos para 95% das consultas'."
        }
      ],
      pitfalls: [
        "Chamar desempenho de requisito funcional.",
        "Escrever requisito sem critério de verificação.",
        "Ignorar stakeholders secundários."
      ]
    },
    {
      id: "aula-4",
      number: 4,
      title: "Especificação, SRS, casos de uso e histórias",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 4.pdf",
      summary: "A aula apresenta especificação de requisitos, documento SRS, modelos de sistema, modelagem de casos de uso e relação entre histórias de usuário e casos de uso.",
      examFocus: [
        "Explicar a função do documento de requisitos.",
        "Identificar atores, casos de uso e fronteira do sistema.",
        "Diferenciar fluxo principal, alternativo e exceção.",
        "Comparar histórias de usuário e casos de uso."
      ],
      sections: [
        {
          source: "base",
          heading: "Especificação de requisitos",
          body: "Depois da elicitação, os requisitos precisam ser registrados. A especificação organiza requisitos de usuário e de sistema em um documento que serve de comunicação entre clientes, analistas, desenvolvedores e testadores."
        },
        {
          source: "base",
          heading: "SRS",
          body: "SRS significa Software Requirements Specification. É o documento de especificação de requisitos de software. Ele deve declarar requisitos funcionais, não funcionais e restrições de forma clara."
        },
        {
          source: "base",
          heading: "Modelos do sistema",
          body: "Modelos representam o sistema de forma abstrata para facilitar entendimento, análise e comunicação. Nenhum modelo único representa tudo, por isso diferentes visões podem ser necessárias."
        },
        {
          source: "base",
          heading: "UML e casos de uso",
          body: "A UML reúne diferentes tipos de diagramas. Nesta disciplina, o foco é o diagrama de casos de uso, que mostra funcionalidades do sistema do ponto de vista de atores externos."
        },
        {
          source: "base",
          heading: "Fluxos de um caso de uso",
          body: "O fluxo principal descreve o caminho normal de sucesso. Fluxos alternativos descrevem variações válidas. Fluxos de exceção descrevem problemas, erros ou situações que impedem o caminho normal."
        },
        {
          source: "base",
          heading: "Histórias de usuário",
          body: "Histórias de usuário descrevem necessidade em linguagem simples, normalmente no formato: como um tipo de usuário, quero uma funcionalidade, para obter um benefício."
        },
        {
          source: "extra",
          heading: "Complemento: critério de aceite",
          body: "Critérios de aceite deixam claro quando uma história pode ser considerada pronta. Exemplo: dado que o usuário está logado, quando informa dados válidos, então o cadastro é salvo e uma mensagem de sucesso aparece. Esse formato ajuda a transformar requisito em teste."
        }
      ],
      pitfalls: [
        "Desenhar ator como parte interna do sistema.",
        "Nomear caso de uso com substantivo em vez de verbo no infinitivo.",
        "Confundir fluxo alternativo com exceção."
      ]
    },
    {
      id: "aula-5",
      number: 5,
      title: "Modelagem com diagrama de casos de uso",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 5.pdf",
      summary: "A aula aprofunda modelagem de sistemas com diagrama de casos de uso, simbologia básica, atores, relacionamentos e utilidade da modelagem antes da implementação.",
      examFocus: [
        "Reconhecer ator, caso de uso, associação e fronteira do sistema.",
        "Explicar por que modelar antes de implementar.",
        "Interpretar include, extend e generalização quando aparecerem.",
        "Descrever caso de uso com objetivo, pré-condição, fluxo e pós-condição."
      ],
      sections: [
        {
          source: "base",
          heading: "Modelagem de sistemas",
          body: "Modelar e criar representações abstratas do sistema. A modelagem ajuda a compreender requisitos, discutir soluções e reduzir ambiguidades antes de construir o software."
        },
        {
          source: "base",
          heading: "Diagrama de casos de uso",
          body: "O diagrama mostra como atores externos interagem com funcionalidades do sistema. Ele ajuda a representar o escopo funcional e a conversa entre cliente e equipe."
        },
        {
          source: "base",
          heading: "Ator",
          body: "Ator é um papel externo que interage com o sistema. Pode ser uma pessoa, outro sistema, organização ou dispositivo. O ator não é uma tela nem uma classe interna."
        },
        {
          source: "base",
          heading: "Caso de uso",
          body: "Caso de uso representa uma funcionalidade observável pelo ator. O nome deve expressar ação, como 'Cadastrar reserva', 'Emitir relatório' ou 'Consultar pedido'."
        },
        {
          source: "base",
          heading: "Fronteira do sistema",
          body: "A fronteira separa o que está dentro do sistema do que está fora. Atores ficam fora; casos de uso ficam dentro. Essa separação é essencial para não confundir escopo."
        },
        {
          source: "extra",
          heading: "Complemento: include, extend e generalização",
          body: "Include representa comportamento obrigatório reutilizado por outro caso de uso. Extend representa comportamento opcional ou condicional. Generalização representa especialização de ator ou caso de uso. O material base foca a simbologia, mas estes relacionamentos costumam aparecer em exercícios."
        },
        {
          source: "extra",
          heading: "Complemento: descrição textual",
          body: "Um diagrama sozinho pode ser insuficiente. Em entregas práticas, acompanhe cada caso de uso importante com objetivo, ator principal, pré-condições, fluxo principal, fluxos alternativos, exceções e pós-condições."
        }
      ],
      pitfalls: [
        "Colocar banco de dados como ator sem ele iniciar ou receber interação externa relevante.",
        "Usar include para comportamento opcional.",
        "Fazer diagrama bonito, mas sem descrição textual dos fluxos."
      ]
    },
    {
      id: "aula-6",
      number: 6,
      title: "Projeto, arquitetura, implementação e implantação",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 6.pdf",
      summary: "A aula situa projeto e implementação no processo de desenvolvimento, explicando projeto de software, importância do projeto, etapas do processo, implementação e implantação.",
      examFocus: [
        "Diferenciar requisito, projeto e implementação.",
        "Explicar por que projeto define como o sistema será construído.",
        "Reconhecer etapas de projeto: arquitetura, interfaces, componentes e dados.",
        "Distinguir implementação de implantação."
      ],
      sections: [
        {
          source: "base",
          heading: "O que é projeto de software",
          body: "Projeto é a atividade que transforma o que deve ser feito em uma estratégia de como fazer. Ele cria modelos do software envolvendo arquitetura, dados, interfaces e componentes."
        },
        {
          source: "base",
          heading: "Importância do projeto",
          body: "Projetar antes de codar permite avaliar alternativas, reduzir riscos e melhorar entendimento. O material compara com construir uma casa: antes dos detalhes, é preciso uma planta geral."
        },
        {
          source: "base",
          heading: "Projeto de arquitetura",
          body: "Na arquitetura, identifica-se a estrutura global do sistema, componentes principais e relações entre eles. Ela orienta decisões técnicas importantes antes da implementação."
        },
        {
          source: "base",
          heading: "Implementação",
          body: "Implementação é a construção do software a partir do projeto. Envolve codificação, integração e criação dos componentes planejados."
        },
        {
          source: "base",
          heading: "Implantação",
          body: "Implantação é a colocação do software em ambiente de uso. Pode envolver instalação, configuração, migração de dados, treinamento e disponibilização aos usuários."
        },
        {
          source: "extra",
          heading: "Complemento: arquitetura em camadas",
          body: "Em uma arquitetura em camadas, a interface conversa com uma camada de aplicação, que conversa com domínio/serviços e persistência. A vantagem é separar responsabilidades; o risco é criar acoplamento se as camadas forem ignoradas."
        },
        {
          source: "extra",
          heading: "Complemento: exemplos de estilos",
          body: "Cliente-servidor separa consumidores e servidor central. MVC separa modelo, visão e controlador. Microserviços dividem o sistema em serviços independentes, mas aumentam complexidade operacional. Estes estilos não são aprofundados no PDF."
        }
      ],
      pitfalls: [
        "Dizer que projeto é a mesma coisa que código.",
        "Confundir implantação com implementação.",
        "Escolher arquitetura sem justificar requisitos de qualidade."
      ]
    },
    {
      id: "aula-7",
      number: 7,
      title: "Qualidade e teste de software",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 7.pdf",
      summary: "A aula apresenta qualidade de software, garantia de qualidade, defeito, erro, falha, processo de teste, verificação e validação.",
      examFocus: [
        "Diferenciar defeito, erro e falha.",
        "Diferenciar verificação e validação.",
        "Entender teste como parte da garantia de qualidade.",
        "Explicar por que testes são críticos em sistemas de risco."
      ],
      sections: [
        {
          source: "base",
          heading: "Qualidade de software",
          body: "Qualidade está relacionada à conformidade com requisitos funcionais e não funcionais, mas também envolve expectativa do usuário e adequação ao uso. A aula reforça que qualidade não nasce apenas no teste."
        },
        {
          source: "base",
          heading: "Garantia de qualidade",
          body: "SQA é aplicada durante todo o processo de Engenharia de Software. Ela envolve métodos, padrões, revisões, auditorias e testes para aumentar a confiança no produto."
        },
        {
          source: "base",
          heading: "Defeito, erro e falha",
          body: "Defeito é uma imperfeição no artefato ou código. Erro pode ser a ação humana ou estado incorreto que introduz problema. Falha é a manifestação observável quando o software não se comporta como esperado."
        },
        {
          source: "base",
          heading: "Processo de teste",
          body: "Teste é uma atividade planejada para encontrar problemas e aumentar a confiança. Envolve planejamento, definição de casos, execução, registro de resultados e correção."
        },
        {
          source: "base",
          heading: "Verificação e validação",
          body: "Verificação pergunta se o produto está sendo construído corretamente conforme especificação. Validação pergunta se o produto correto está sendo construído para atender as necessidades reais do usuário."
        },
        {
          source: "extra",
          heading: "Complemento: caixa-preta e caixa-branca",
          body: "Caixa-preta testa entradas e saídas sem olhar o código. Caixa-branca considera estrutura interna do código, caminhos e condições. O PDF não aprofunda essas técnicas, mas elas são comuns em provas."
        },
        {
          source: "extra",
          heading: "Complemento: valor limite e equivalência",
          body: "Particionamento de equivalência divide entradas em grupos que devem se comportar de forma semelhante. Análise de valor limite testa bordas, como mínimo, máximo e valores imediatamente próximos."
        }
      ],
      pitfalls: [
        "Dizer que teste prova ausência de defeitos.",
        "Confundir verificação com validação.",
        "Tratar qualidade como responsabilidade apenas do testador."
      ]
    },
    {
      id: "aula-8",
      number: 8,
      title: "Evolução, sistemas legados e manutenção",
      sourcePdf: "INT_ENG_SOFT_TEXTO DE APOIO_AULA 8.pdf",
      summary: "A aula trata mudanças depois da implantação, processo de evolução, sistemas legados, manutenção e motivos para alterar sistemas em operação.",
      examFocus: [
        "Explicar por que software precisa evoluir depois da entrega.",
        "Caracterizar sistemas legados.",
        "Diferenciar tipos de manutenção.",
        "Entender degradação estrutural ao longo de mudanças."
      ],
      sections: [
        {
          source: "base",
          heading: "Evolução de software",
          body: "Depois de implantado, o software continua mudando para permanecer útil. Mudanças podem vir de novas regras de negócio, erros encontrados, plataformas novas, desempenho, segurança ou vantagem competitiva."
        },
        {
          source: "base",
          heading: "Processo de evolução",
          body: "A evolução conecta requisitos, projeto, implementação e validação em ciclos. A cada mudança, o sistema passa por análise, modificação e nova disponibilização."
        },
        {
          source: "base",
          heading: "Sistemas legados",
          body: "Sistemas legados são antigos, mas ainda importantes para a organização. Eles podem usar tecnologias obsoletas, ter pouca documentação e ser difíceis de alterar sem risco."
        },
        {
          source: "base",
          heading: "Manutenção",
          body: "Manutenção envolve modificar software após a entrega. Pode corrigir falhas, adaptar a novas plataformas, melhorar desempenho ou adicionar funcionalidades."
        },
        {
          source: "base",
          heading: "Degradação estrutural",
          body: "À medida que mudanças se acumulam, a estrutura do software pode se degradar. Isso torna manutenção mais cara e aumenta o risco de novas falhas."
        },
        {
          source: "extra",
          heading: "Complemento: tipos de manutenção",
          body: "Corretiva corrige defeitos. Adaptativa ajusta o software a mudanças externas. Perfectiva melhora desempenho, usabilidade ou adiciona recursos. Preventiva reduz risco futuro por refatoração, limpeza e melhoria interna."
        },
        {
          source: "extra",
          heading: "Complemento: dívida técnica",
          body: "Dívida técnica é o custo futuro criado por decisões rápidas ou ruins no presente. Ela não é necessariamente erro imediato, mas torna evolução mais lenta e arriscada se não for controlada."
        }
      ],
      pitfalls: [
        "Achar que manutenção significa apenas corrigir erro.",
        "Dizer que sistema legado é inútil por ser antigo.",
        "Ignorar que mudanças podem degradar a arquitetura."
      ]
    }
  ],
  comparisons: [
    {
      title: "Verificação vs Validação",
      leftLabel: "Verificação",
      left: "Confere se o produto está sendo construído corretamente, conforme especificação, padrões e artefatos planejados.",
      rightLabel: "Validação",
      right: "Confere se o produto correto está sendo construído para resolver a necessidade real do usuário.",
      source: "base"
    },
    {
      title: "Requisito funcional vs não funcional",
      leftLabel: "Funcional",
      left: "Descreve serviço, função ou comportamento que o sistema deve executar.",
      rightLabel: "Não funcional",
      right: "Descreve qualidade, restrição ou condição de operação, como segurança, desempenho e usabilidade.",
      source: "base"
    },
    {
      title: "Caso de uso vs História de usuário",
      leftLabel: "Caso de uso",
      left: "Mais estruturado, descreve ator, objetivo, fluxo principal, alternativas e exceções.",
      rightLabel: "História de usuário",
      right: "Mais leve, escrita do ponto de vista do usuário: como papel, quero ação, para benefício.",
      source: "base"
    },
    {
      title: "Defeito vs erro vs falha",
      leftLabel: "Defeito/erro",
      left: "Defeito é problema no artefato; erro pode ser ação humana ou estado incorreto que cria o problema.",
      rightLabel: "Falha",
      right: "Manifestação observável quando o sistema se comporta de forma diferente do esperado.",
      source: "base"
    },
    {
      title: "Implementação vs Implantação",
      leftLabel: "Implementação",
      left: "Construir o software: código, componentes, integração e ajustes técnicos.",
      rightLabel: "Implantação",
      right: "Colocar o software em uso: instalar, configurar, migrar, treinar e disponibilizar.",
      source: "base"
    },
    {
      title: "Cascata vs Incremental",
      leftLabel: "Cascata",
      left: "Fases mais sequenciais; funciona melhor com requisitos estáveis e baixo grau de mudança.",
      rightLabel: "Incremental",
      right: "Entregas em partes; permite feedback e adaptação ao longo do desenvolvimento.",
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
      explanation: "Engenharia de Software envolve todo o ciclo de produção e manutenção, não apenas código."
    },
    {
      id: "q02",
      lessonId: "aula-1",
      source: "base",
      prompt: "Qual item é exemplo de artefato de software?",
      options: [
        "Documento de requisitos.",
        "Apenas o computador do desenvolvedor.",
        "Somente a memória RAM usada pelo sistema.",
        "O horário da aula."
      ],
      answerIndex: 0,
      explanation: "Artefatos incluem documentos, modelos, código, planos de teste e outros produtos do processo."
    },
    {
      id: "q03",
      lessonId: "aula-1",
      source: "base",
      prompt: "Um atributo de bom software destacado no material é:",
      options: [
        "Ser impossível de modificar.",
        "Ter somente interface bonita.",
        "Manutenibilidade.",
        "Dispensar documentação."
      ],
      answerIndex: 2,
      explanation: "Manutenibilidade é uma qualidade importante porque softwares mudam ao longo do tempo."
    },
    {
      id: "q04",
      lessonId: "aula-2",
      source: "base",
      prompt: "Quais são atividades fundamentais presentes nos processos de software?",
      options: [
        "Marketing, venda, propaganda e suporte.",
        "Especificação, desenvolvimento, validação e evolução.",
        "Compra, instalação, digitação e impressão.",
        "Design gráfico, hospedagem, redes sociais e atendimento."
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
        "Fases sequenciais com transição entre etapas.",
        "Nenhuma documentação e nenhuma fase definida.",
        "Apenas manutenção depois da entrega.",
        "Somente protótipos descartáveis."
      ],
      answerIndex: 0,
      explanation: "No cascata, as atividades aparecem de forma mais sequêncial do que iterativa."
    },
    {
      id: "q06",
      lessonId: "aula-2",
      source: "extra",
      prompt: "Em Scrum, uma sprint é melhor descrita como:",
      options: [
        "Um ciclo curto de trabalho com objetivo definido.",
        "Um documento de requisitos imutavel.",
        "Um diagrama de banco de dados.",
        "Uma falha observada pelo usuário."
      ],
      answerIndex: 0,
      explanation: "Scrum não é aprofundado no PDF; este é complemento para estudo de agilidade."
    },
    {
      id: "q07",
      lessonId: "aula-3",
      source: "base",
      prompt: "Qual alternativa é requisito funcional?",
      options: [
        "O sistema deve responder em até 2 segundos.",
        "O sistema deve permitir cadastrar pacientes.",
        "O sistema deve estar disponível 99,5% do tempo.",
        "A interface deve seguir o padrao visual da empresa."
      ],
      answerIndex: 1,
      explanation: "Cadastrar pacientes é uma função do sistema. As demais alternativas indicam qualidade ou restrição."
    },
    {
      id: "q08",
      lessonId: "aula-3",
      source: "base",
      prompt: "Qual alternativa é requisito não funcional?",
      options: [
        "Emitir nota fiscal.",
        "Cancelar reserva.",
        "Registrar usuário.",
        "Criptografar dados sensiveis em repouso."
      ],
      answerIndex: 3,
      explanation: "Criptografia é uma restrição/qualidade de segurança, portanto é requisito não funcional."
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
        "Porque são corrigidos automáticamente por ferramentas CASE."
      ],
      answerIndex: 1,
      explanation: "Um erro inicial pode contaminar todo o desenvolvimento e ser caro de corrigir tardiamente."
    },
    {
      id: "q10",
      lessonId: "aula-4",
      source: "base",
      prompt: "SRS é a sigla associada a:",
      options: [
        "Software Requirements Specification.",
        "System Runtime Storage.",
        "Simple Review Sprint.",
        "Security Release System."
      ],
      answerIndex: 0,
      explanation: "SRS é o documento de especificação de requisitos de software."
    },
    {
      id: "q11",
      lessonId: "aula-4",
      source: "base",
      prompt: "No formato de história de usuário, qual estrutura é mais comum?",
      options: [
        "Dado, quando, entao.",
        "Como um papel, quero uma funcionalidade, para obter um benefício.",
        "Entrada, processamento e saída.",
        "Classe, atributo e método."
      ],
      answerIndex: 1,
      explanation: "O formato evidencia papel do usuário, necessidade e valor esperado."
    },
    {
      id: "q12",
      lessonId: "aula-4",
      source: "base",
      prompt: "Em um caso de uso, fluxo de exceção descreve:",
      options: [
        "O caminho normal de sucesso.",
        "Uma variação valida sem problema.",
        "Uma situação de erro ou impedimento.",
        "A cor usada no diagrama."
      ],
      answerIndex: 2,
      explanation: "Fluxos de exceção tratam situações anormais, erros ou impedimentos."
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
        "Uma tela especifica da aplicação."
      ],
      answerIndex: 1,
      explanation: "Ator é externo ao sistema e representa um papel, não uma implementação interna."
    },
    {
      id: "q14",
      lessonId: "aula-5",
      source: "base",
      prompt: "A fronteira do sistema em caso de uso serve para:",
      options: [
        "Separar atores externos das funcionalidades internas do sistema.",
        "Colorir o diagrama sem significado.",
        "Indicar a linguagem de programação.",
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
        "Comportamento obrigatório reutilizado por outro caso de uso.",
        "Comportamento opcional e condicional.",
        "Heranca entre bancos de dados.",
        "Falha durante teste de sistema."
      ],
      answerIndex: 0,
      explanation: "Este ponto é complemento: include é usado para comportamento comum obrigatório."
    },
    {
      id: "q16",
      lessonId: "aula-6",
      source: "base",
      prompt: "A diferença central entre requisitos e projeto é:",
      options: [
        "Requisitos dizem o que deve ser feito; projeto indica como construir.",
        "Requisitos são sempre código; projeto é sempre teste.",
        "Requisitos só existem depois da implantação.",
        "Projeto não influencia implementação."
      ],
      answerIndex: 0,
      explanation: "Essa separação é uma das ideias centrais das aulas de requisitos e projeto."
    },
    {
      id: "q17",
      lessonId: "aula-6",
      source: "base",
      prompt: "Implantação significa:",
      options: [
        "Escrever o código-fonte.",
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
      prompt: "Em arquitetura em camadas, a principal vantagem esperada é:",
      options: [
        "Misturar todas as responsabilidades.",
        "Separar responsabilidades e reduzir acoplamento.",
        "Eliminar a necessidade de testes.",
        "Transformar requisitos não funcionais em funcionais."
      ],
      answerIndex: 1,
      explanation: "Este é complemento: camadas ajudam organização, manutenção e separação de responsabilidades."
    },
    {
      id: "q19",
      lessonId: "aula-7",
      source: "base",
      prompt: "Falha de software é melhor definida como:",
      options: [
        "Manifestação observável de comportamento incorreto.",
        "Qualquer reuniao com cliente.",
        "A documentação de requisitos.",
        "O ambiente de desenvolvimento."
      ],
      answerIndex: 0,
      explanation: "Falha é o problema percebido na execução ou uso do sistema."
    },
    {
      id: "q20",
      lessonId: "aula-7",
      source: "base",
      prompt: "Verificação pergunta principalmente:",
      options: [
        "Estamos construindo o produto certo para o usuário?",
        "Estamos construindo corretamente conforme especificação?",
        "Qual é o preco final do software?",
        "Qual linguagem tem mais bibliotecas?"
      ],
      answerIndex: 1,
      explanation: "Validação se aproxima da primeira pergunta; verificação compara com especificação e padrões."
    },
    {
      id: "q21",
      lessonId: "aula-7",
      source: "extra",
      prompt: "Teste de caixa-preta foca principalmente em:",
      options: [
        "Estrutura interna do código.",
        "Entradas, saídas e comportamento observável.",
        "Estilo visual do editor.",
        "Hardware usado pelo programador."
      ],
      answerIndex: 1,
      explanation: "Este é complemento fora do PDF: caixa-preta testa comportamento externo."
    },
    {
      id: "q22",
      lessonId: "aula-8",
      source: "base",
      prompt: "Um motivo comum para evoluir software após implantação é:",
      options: [
        "Mudança nas regras de negócio.",
        "Proibir manutenção.",
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
      prompt: "Sistema legado é:",
      options: [
        "Sistema antigo, ainda importante, geralmente difícil de modificar.",
        "Sistema que nunca foi usado.",
        "Somente um protótipo descartável.",
        "Qualquer aplicativo novo em desenvolvimento."
      ],
      answerIndex: 0,
      explanation: "Legado não significa inútil; muitas vezes é crítico para a organização."
    },
    {
      id: "q24",
      lessonId: "aula-8",
      source: "extra",
      prompt: "Manutenção preventiva busca:",
      options: [
        "Melhorar a estrutura interna para reduzir riscos futuros.",
        "Corrigir exclusivamente uma falha já observada.",
        "Trocar o nome do sistema.",
        "Impedir toda evolução."
      ],
      answerIndex: 0,
      explanation: "Este é complemento: manutenção preventiva reduz risco e custo futuro."
    }
  ],
  flashcards: [
    {
      prompt: "O que é Engenharia de Software?",
      answer: "Disciplina que aplica processos, métodos, técnicas e ferramentas para especificar, desenvolver, validar, evoluir e manter software com qualidade."
    },
    {
      prompt: "Quais são as quatro atividades fundamentais do processo de software?",
      answer: "Especificação, desenvolvimento, validação e evolução."
    },
    {
      prompt: "Diferença entre requisito funcional e não funcional?",
      answer: "Funcional descreve o que o sistema faz. Não funcional descreve qualidade, restrição ou condição de funcionamento."
    },
    {
      prompt: "O que é SRS?",
      answer: "Software Requirements Specification, o documento de especificação de requisitos de software."
    },
    {
      prompt: "O que é ator em caso de uso?",
      answer: "Um papel externo que interage com o sistema, como usuário, outro sistema ou dispositivo."
    },
    {
      prompt: "Diferença entre implementação e implantação?",
      answer: "Implementação é construir o software. Implantação é colocar o software em uso."
    },
    {
      prompt: "Validação responde qual pergunta?",
      answer: "Estamos construindo o produto certo para atender a necessidade real do usuário?"
    },
    {
      prompt: "Por que software evolui?",
      answer: "Porque negócio, usuários, tecnologia, segurança, desempenho e regras mudam depois da entrega."
    }
  ],
  activities: [
    {
      id: "a1-praticando",
      title: "A1: Praticando: tipos de sistemas de software",
      lessonIds: ["aula-1"],
      source: "course",
      basedOn: "Questionário real do curso. As perguntas originais não foram enviadas; os exemplos abaixo são reconstrução para treino individual.",
      prompt: "Identificar, para diferentes sistemas indicados, que tipo de sistema de software eles são.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia a descrição de um sistema.",
        "Classifique o sistema pelo tipo mais adequado.",
        "Justifique a classificação com uma caracteristica do sistema.",
        "Compare com outros tipos para evitar classificação por palavra solta."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era um questionário com duas tentativas e melhor desempenho registrado.",
        "Neste site, use como treino: responda mentalmente ou em um arquivo local se quiser.",
        "Não entregue nada no site; quando a atividade for oficial, a submissão acontece no ambiente da disciplina."
      ],
      evaluationTitle: "Critério de acerto",
      evaluation: [
        "Sistema embarcado/controlado: software integrado a equipamento fisico, com controle de dispositivo.",
        "Sistema interativo baseado em transações: usuários consultam, registram ou alteram dados via operações.",
        "Sistema de processamento em lote: processa grandes volumes sem interação constante.",
        "Sistema de modelagem/simulação: representa fenomenos para prever comportamento.",
        "Sistema de entretenimento: foco em experiência, jogo, mídia ou lazer."
      ],
      exampleTitle: "Exemplos de resposta correta",
      example: [
        "Caixa eletrônico: sistema interativo baseado em transações, pois o usuário realiza saques, consultas e operações bancárias.",
        "Controle de freios ABS: sistema embarcado de controle, pois fica integrado ao veículo e reage a sensores.",
        "Folhá de pagamento mensal: sistema de processamento em lote, pois processa dados de muitos funcionarios em ciclos.",
        "Simulador de voo: sistema de modelagem/simulação, pois reproduz comportamento de uma aeronave para treino.",
        "Spotify: sistema de entretenimento e distribuição de mídia, com forte componente de recomendação e transações de usuário."
      ]
    },
    {
      id: "a1-aplicando",
      title: "A1: Aplicando Conhecimento: associar conceito e significado",
      lessonIds: ["aula-1"],
      source: "course",
      basedOn: "Questionário real do curso, valendo 1,0 ponto. As associações abaixo são treino com base nos conceitos da aula.",
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
        "No AVA, era questionário com duas tentativas e melhor desempenho registrado.",
        "Neste site, use como revisão guiada.",
        "Se quiser treinar fora do site, crie uma tabela conceito/significado no seu PC."
      ],
      evaluation: [
        "Consegue definir software além de código.",
        "Diferencia Engenharia de Software de programação.",
        "Diferencia processo, modelo de processo e artefato.",
        "Reconhece atributos de bom software."
      ],
      exampleTitle: "Associações corretas para memorizar",
      example: [
        "Software: programas, configurações e documentação associada.",
        "Engenharia de Software: disciplina que aplica métodos, processos e ferramentas para produzir e manter software com qualidade.",
        "Processo de software: conjunto estruturado de atividades para especificar, desenvolver, validar e evoluir software.",
        "Modelo de processo: representação simplificada de um processo de software.",
        "Artefato: produto gerado durante o desenvolvimento, como documento de requisitos, diagrama, código ou plano de teste.",
        "CASE: ferramenta de apoio a atividades de Engenharia de Software."
      ]
    },
    {
      id: "a2-praticando",
      title: "A2: Praticando: modelos de processo",
      lessonIds: ["aula-2"],
      source: "course",
      basedOn: "Questionário real do curso. As questões exatas não foram enviadas; os itens abaixo simulam o tipo de classificação cobrada.",
      prompt: "Fixar características dos modelos de processos de desenvolvimento de software.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia uma caracteristica de processo.",
        "Associe ao modelo mais provável.",
        "Explique a vantagem é a limitação do modelo.",
        "Compare modelos tradicionais, incrementais, orientados a reuso e ágeis."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionário com duas tentativas.",
        "Neste site, a atividade vira treino de associação e revisão.",
        "Não há arquivo para gerar, a menos que você queira anotar no seu PC."
      ],
      evaluation: [
        "Cascata: fases sequenciais e melhor aderência quando requisitos são estáveis.",
        "Incremental: entrega partes do sistema e permite feedback.",
        "Orientado a reuso: aproveita componentes existentes para reduzir tempo e custo.",
        "Ágil: ciclos curtos, adaptação e colaboração com cliente.",
        "Prototipação: ajuda a entender requisitos e validar ideias cedo."
      ],
      exampleTitle: "Exemplos de classificação correta",
      example: [
        "Descrição: projeto com requisitos bem definidos, contrato fechado e pouca mudança esperada. Modelo provável: cascata.",
        "Descrição: equipe entrega funcionalidades pequenas a cada ciclo e coleta feedback. Modelo provável: incremental/ágil.",
        "Descrição: sistema montado a partir de bibliotecas e componentes prontos. Modelo provável: orientado a reuso.",
        "Descrição: cliente ainda não sabe exatamente o que quer e precisa visualizar telas. Abordagem útil: prototipação.",
        "Pegadinha: ágil não significa ausência de planejamento; significa planejamento adaptativo."
      ]
    },
    {
      id: "a2-aplicando",
      title: "A2: Aplicando Conhecimento: pesquisa sobre projeto de software",
      lessonIds: ["aula-2"],
      source: "course",
      basedOn: "Atividade real do curso: pesquisar um projeto de uma grande empresa e entregar Word ou PDF de até 3 páginas no AVA.",
      prompt: "Pesquisar um projeto de software desenvolvido por grande empresa ou projeto open source, descrevendo problema, metodologia e reflexão crítica.",
      tasksTitle: "Enunciado real adaptado para estudo",
      tasks: [
        "Escolhá um projeto: Spotify, Netflix, iFood, Nubank, Mozilla Firefox ou outro projeto relevante.",
        "Descreva o que foi desenvolvido e qual problema resolve.",
        "Explique qual metodologia ou abordagem foi adotada e por que ela faz sentido.",
        "Reflita se a abordagem ágil foi adequada.",
        "Compare com um modelo tradicional e justifique se ele seria melhor ou pior."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Crie um Word ou PDF no seu PC se quiser treinar a entrega.",
        "Limite sugerido da atividade oficial: até 3 páginas.",
        "Estrutura: título, descrição do projeto, metodologia, reflexão crítica e referências usadas.",
        "O site não recebe upload; a entrega oficial seria no recurso Aplicando Conhecimento do AVA."
      ],
      evaluation: [
        "Descrição do projeto e do problema é objetiva.",
        "Metodologia não é citada de forma generica; há relação com o contexto do projeto.",
        "A reflexão compara agilidade com modelos tradicionais usando argumentos.",
        "Não transforma a resposta em propaganda da empresa.",
        "Cita fontes quando usar informação externa."
      ],
      exampleTitle: "Exemplo de resposta correta: Spotify (modelo didatico)",
      example: [
        "Projeto: evolução da plataforma Spotify para entrega contínua de recursos de streaming e recomendação musical.",
        "Problema resolvido: permitir que usuários acessem músicas sob demanda, recebam recomendações personalizadas e usem o serviço em diferentes dispositivos.",
        "Metodologia/abordagem: abordagem ágil e incremental, com equipes pequenas, ciclos curtos, experimentação e uso intensivo de feedback dos usuários.",
        "Por que faz sentido: produto digital com mercado competitivo, requisitos mutáveis e necessidade de aprender com comportamento real de uso.",
        "Reflexão crítica: a abordagem ágil parece adequada porque permite testar hipóteses e adaptar funcionalidades. Um modelo cascata tenderia a ser pior para recomendação e experiência de usuário, pois congelaria requisitos cedo demais.",
        "Ressalva: para partes de infraestrutura crítica, práticas mais formais de controle, revisão e validação também seriam importantes."
      ]
    },
    {
      id: "a3-praticando",
      title: "A3: Praticando: OBJ, RF e RNF",
      lessonIds: ["aula-3"],
      source: "course",
      basedOn: "Questionário real do curso sobre objetivos, requisitos funcionais e requisitos não funcionais.",
      prompt: "Ler situações-problema e selecionar se cada item é OBJ, RF ou RNF.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia uma frase sobre o sistema.",
        "Classifique como objetivo do sistema, requisito funcional ou requisito não funcional.",
        "Procure o verbo da frase: se descreve ação do sistema, tende a ser RF.",
        "Procure qualidade/restrição: se fala de desempenho, segurança, plataforma ou usabilidade, tende a ser RNF.",
        "Se explica o motivo da existencia do sistema, tende a ser OBJ."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionário com duas tentativas.",
        "Neste site, use como treino de classificação.",
        "Não há envio de arquivo nestá versão de estudo."
      ],
      evaluation: [
        "OBJ responde por que o sistema existe.",
        "RF detalha o que o sistema deve fazer.",
        "RNF especifica características, capacidades ou restrições.",
        "A classificação deve considerar o sentido da frase, não apenas uma palavra isolada."
      ],
      exampleTitle: "Exemplos de classificação correta",
      example: [
        "OBJ: Reduzir filas no atendimento da clínica por meio de agendamento online.",
        "RF: O sistema deve permitir que o paciente agende uma consulta.",
        "RF: O sistema deve enviar comprovante de agendamento por e-mail.",
        "RNF: O sistema deve responder consultas de agenda em até 2 segundos.",
        "RNF: O sistema deve exigir autenticação para acesso aos dados do paciente.",
        "Pegadinha: 'ser seguro' e RNF, mas precisa de critério verificável para ficar bem escrito."
      ]
    },
    {
      id: "a3-aplicando",
      title: "A3: Aplicando Conhecimento: técnicas de levantamento de requisitos",
      lessonIds: ["aula-3"],
      source: "course",
      basedOn: "Atividade real do curso: preencher a tabela do arquivo Aplicando Conhecimento - Técnicas de Levantamento de Requisitos.docx e postar no AVA. O documento tem técnicas além do que foi solicitado no Moodle.",
      prompt: "Preencher uma tabela com as técnicas Entrevista, Questionário, Brainstorming, Workshop, Etnografia/Observação, Pesquisa/Análise de Documentação, Reunião JAD, Prototipação e Histórias/Cenários.",
      tasksTitle: "Enunciado real adaptado para estudo",
      tasks: [
        "Para cada técnica, preencha o objetivo.",
        "Explique quando usar a técnica.",
        "Liste vantagens e desvantagens.",
        "Mantenha as respostas curtas, comparáveis e alinhadas com levantamento de requisitos.",
        "Use exemplos mentais de sistemas reais para não escrever definições genéricas demais."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "O arquivo oficial é uma tabela do Word com as colunas: Técnica, Objetivo, Quando Usar, Vantagens e Desvantagens.",
        "Se quiser treinar, preencha uma cópia local do DOCX.",
        "O arquivo oficial era um .docx anexado no AVA.",
        "O site não recebe upload; use apenas como guia de preenchimento."
      ],
      evaluation: [
        "Técnicas não são confundidas com requisitos.",
        "Cada vantagem e limitação está conectada ao contexto de uso.",
        "A tabela diferencia técnicas individuais, técnicas em grupo, observação de contexto e validação por protótipo.",
        "O preenchimento cobre as 9 técnicas do documento."
      ],
      exampleTitle: "Exemplo de tabela preenchida corretamente",
      example: [
        "Entrevista | Objetivo: obter informações detalhadas de stakeholders | Quando usar: quando há usuários-chave disponíveis | Vantagens: aprofunda necessidades e permite perguntas de seguimento | Desvantagens: pode ter viés individual e demanda tempo.",
        "Questionário | Objetivo: coletar respostas padronizadas de muitas pessoas | Quando usar: quando há grande número de usuários | Vantagens: escala e facilita comparação | Desvantagens: pouco aprofundamento e depende de perguntas bem escritas.",
        "Brainstorming | Objetivo: gerar ideias e possibilidades rapidamente | Quando usar: início da descoberta ou busca de soluções | Vantagens: estimula criatividade | Desvantagens: pode gerar ideias vagas sem priorização.",
        "Workshop | Objetivo: reunir stakeholders para discutir e alinhar requisitos | Quando usar: quando há conflitos ou necessidade de consenso | Vantagens: acelera alinhamento | Desvantagens: exige agenda, preparação e facilitação.",
        "Etnografia ou Observação | Objetivo: observar o trabalho real no ambiente do usuário | Quando usar: processos práticos, informais ou cheios de exceções | Vantagens: revela necessidades não verbalizadas | Desvantagens: consome tempo e pode alterar o comportamento observado.",
        "Pesquisa ou Análise de Documentação | Objetivo: extrair regras e dados de documentos existentes | Quando usar: quando há normas, formulários, manuais ou sistemas legados | Vantagens: encontra regras formais | Desvantagens: documentos podem estar incompletos ou desatualizados.",
        "Reunião JAD | Objetivo: levantar e validar requisitos em sessão estruturada com usuários e equipe técnica | Quando usar: projetos que exigem decisão conjunta rápida | Vantagens: reduz ambiguidades | Desvantagens: depende de participação ativa e boa mediação.",
        "Prototipação | Objetivo: validar ideias por meio de telas ou versões iniciais | Quando usar: requisitos incertos ou interface importante | Vantagens: facilita feedback | Desvantagens: usuário pode achar que o protótipo já é o produto final.",
        "Histórias ou Cenários | Objetivo: descrever interações e situações de uso | Quando usar: para entender jornadas e necessidades do usuário | Vantagens: aproxima requisito do contexto real | Desvantagens: pode omitir regras técnicas se não for complementado."
      ]
    },
    {
      id: "a4-aplicando",
      title: "A4: Aplicando Conhecimento: introdução à Engenharia de Requisitos",
      lessonIds: ["aula-4"],
      source: "course",
      basedOn: "Atividade real do curso: resolver o PDF Aplicando Conhecimento - Introdução à Engenharia de Requisitos e postar no AVA.",
      prompt: "Ler o case do Sistema de Matrícula Online para Cursos e responder questões sobre requisitos funcionais, diagrama de caso de uso e fluxos da jornada Realizar Matrícula em Curso.",
      tasksTitle: "Questões reais do anexo",
      tasks: [
        "Identifique 5 requisitos funcionais presentes no texto.",
        "Desenhe o diagrama de caso de uso da jornada Realizar Matrícula em Curso.",
        "Certifique-se de que o diagrama mostra os atores e suas interações com o sistema.",
        "Explique o que é fluxo principal.",
        "Explique o que é fluxo alternativo e dê um exemplo no case.",
        "Explique o que é fluxo de exceção e dê um exemplo no case."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Monte um documento local com os 5 RFs, o diagrama e as respostas discursivas.",
        "O diagrama pode ser feito em draw.io, StarUML, Lucidchart ou ferramenta visual similar.",
        "Se fizer no papel, exporte/fotografe com boa legibilidade antes de postar oficialmente.",
        "Não entregue nada aqui; o site é somente apoio de estudo."
      ],
      evaluation: [
        "Os RFs descrevem ações do sistema, não qualidades vagas.",
        "O ator principal Aluno aparece fora da fronteira do sistema.",
        "Casos de uso usam verbos, como Fazer login, Consultar catálogo e Confirmar matrícula.",
        "Fluxo principal representa o caminho de sucesso.",
        "Fluxo alternativo e fluxo de exceção são diferenciados corretamente."
      ],
      diagram: {
        id: "matricula",
        title: "Diagrama desenhado: jornada Realizar Matrícula em Curso",
        system: "Sistema de Matrícula Online",
        note: "Modelo visual de estudo. A atividade oficial pede que o estudante desenhe algo equivalente em uma ferramenta ou no documento de entrega.",
        caption: "A validação de vagas e pré-requisitos foi modelada como comportamento obrigatório da confirmação de matrícula.",
        actors: [
          {id:"aluno", name:"Aluno", x:90, y:290}
        ],
        useCases: [
          {id:"login", label:"Fazer login", x:360, y:120},
          {id:"catalogo", label:"Consultar catálogo de cursos", x:590, y:120, rx:105},
          {id:"adicionar", label:"Adicionar curso ao carrinho", x:360, y:230, rx:112},
          {id:"remover", label:"Remover curso do carrinho", x:590, y:230, rx:112},
          {id:"confirmar", label:"Confirmar matrícula", x:475, y:340, rx:108},
          {id:"vagas", label:"Validar vagas disponíveis", x:340, y:470, rx:110},
          {id:"requisitos", label:"Validar pré-requisitos", x:590, y:470, rx:110},
          {id:"email", label:"Enviar comprovante por e-mail", x:710, y:340, rx:118}
        ],
        links: [
          {from:"aluno", to:"login"},
          {from:"aluno", to:"catalogo"},
          {from:"aluno", to:"adicionar"},
          {from:"aluno", to:"remover"},
          {from:"aluno", to:"confirmar"},
          {from:"confirmar", to:"vagas", type:"include"},
          {from:"confirmar", to:"requisitos", type:"include"},
          {from:"confirmar", to:"email", type:"include"}
        ]
      },
      exampleTitle: "Exemplo de resposta correta para treino",
      example: [
        "Case resumido: aluno faz login com CPF e senha, consulta catálogo de cursos, adiciona cursos ao carrinho, revisa/remove itens, confirma matrícula, sistema valida vagas e pré-requisitos, envia comprovante por e-mail ou informa erro/lista de espera.",
        "RF01: O sistema deve permitir que o aluno faça login com CPF e senha.",
        "RF02: O sistema deve permitir consultar o catálogo de cursos disponíveis com nome, carga horária, horários, professor, vagas e pré-requisitos.",
        "RF03: O sistema deve permitir adicionar um ou mais cursos ao carrinho de matrícula.",
        "RF04: O sistema deve permitir remover cursos do carrinho antes da confirmação.",
        "RF05: O sistema deve validar vagas disponíveis e pré-requisitos antes de confirmar a matrícula.",
        "RF06 opcional: O sistema deve enviar comprovante por e-mail quando a matrícula for confirmada.",
        "Ator principal: Aluno.",
        "Casos de uso sugeridos: Fazer login, Consultar catálogo de cursos, Adicionar curso ao carrinho, Remover curso do carrinho, Confirmar matrícula, Validar vagas, Validar pré-requisitos, Enviar comprovante por e-mail, Entrar em lista de espera.",
        "Fluxo principal: sequência normal de sucesso em que o aluno faz login, consulta cursos, escolhe cursos, confirma matrícula, passa nas validações e recebe comprovante.",
        "Fluxo alternativo: caminho válido diferente do principal; exemplo: aluno remove um curso do carrinho antes de finalizar.",
        "Fluxo de exceção: caminho de erro ou impedimento; exemplo: sistema bloqueia Programação Avançada porque o aluno não concluiu Programação Básica, ou informa que não há vagas."
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
        "Identifique casos de uso com verbos de ação.",
        "Defina a fronteira do sistema de estacionamento.",
        "Relacione atores aos casos de uso.",
        "Use include/extend apenas quando fizer sentido.",
        "Monte o diagrama em ferramenta externa se quiser treinar a entrega."
      ],
      deliverableTitle: "Roteiro para arquivo externo",
      deliverables: [
        "Crie o diagrama em draw.io, StarUML, Lucidchart ou ferramenta visual similar.",
        "Exporte como imagem, PDF ou arquivo aceito pelo professor.",
        "Inclua nome do sistema e atores.",
        "O site não recebe o arquivo; a postagem oficial seria no AVA."
      ],
      evaluation: [
        "Atores principais: Cliente, Operador do Estacionamento e Administrador.",
        "Casos de uso representam objetivos do ator, não telas soltas.",
        "Administrador consulta relatórios e configura tarifas/tolerâncias.",
        "Operador auxilia clientes, abre cancelas manualmente e resolve perda de ticket.",
        "Cliente retira ticket, paga estacionamento e sai com ticket pago.",
        "Fluxos obrigatórios podem ser modelados com include, mas sem exagero."
      ],
      diagram: {
        id: "estacionamento",
        title: "Diagrama desenhado: Sistema de Estacionamento",
        system: "Sistema de Estacionamento",
        note: "Modelo visual de estudo baseado no enunciado do Shopping Vista Bela. Use como referência para desenhar a entrega em uma ferramenta visual.",
        caption: "Os includes mostram passos obrigatórios que fazem parte de casos de uso maiores, como pagamento e saída.",
        actors: [
          {id:"cliente", name:"Cliente", x:90, y:210},
          {id:"operador", name:"Operador do Estacionamento", x:90, y:430},
          {id:"admin", name:"Administrador", x:900, y:330}
        ],
        useCases: [
          {id:"retirar", label:"Retirar ticket", x:350, y:100},
          {id:"registrarEntrada", label:"Registrar horário de entrada", x:590, y:100, rx:118},
          {id:"pagar", label:"Pagar estacionamento", x:350, y:220, rx:108},
          {id:"calcular", label:"Calcular valor a pagar", x:590, y:210, rx:110},
          {id:"registrarPagamento", label:"Registrar pagamento", x:590, y:290, rx:108},
          {id:"sair", label:"Inserir ticket pago na saída", x:350, y:360, rx:118},
          {id:"validarTicket", label:"Validar ticket pago", x:590, y:370, rx:104},
          {id:"liberar", label:"Liberar saída", x:590, y:450},
          {id:"auxiliar", label:"Auxiliar cliente", x:350, y:500},
          {id:"abrir", label:"Abrir cancela manualmente", x:550, y:525, rx:114},
          {id:"perda", label:"Resolver perda de ticket", x:720, y:500, rx:110},
          {id:"relatorio", label:"Consultar relatório diário", x:720, y:160, rx:114},
          {id:"tarifa", label:"Configurar tarifa", x:720, y:250},
          {id:"tolerancia", label:"Configurar tolerância", x:720, y:340, rx:104}
        ],
        links: [
          {from:"cliente", to:"retirar"},
          {from:"cliente", to:"pagar"},
          {from:"cliente", to:"sair"},
          {from:"operador", to:"auxiliar"},
          {from:"operador", to:"abrir"},
          {from:"operador", to:"perda"},
          {from:"admin", to:"relatorio"},
          {from:"admin", to:"tarifa"},
          {from:"admin", to:"tolerancia"},
          {from:"retirar", to:"registrarEntrada", type:"include"},
          {from:"pagar", to:"calcular", type:"include"},
          {from:"pagar", to:"registrarPagamento", type:"include"},
          {from:"sair", to:"validarTicket", type:"include"},
          {from:"sair", to:"liberar", type:"include"}
        ]
      },
      exampleTitle: "Exemplo correto: estrutura do diagrama",
      example: [
        "Sistema: Sistema de Gerenciamento de Estacionamento: Shopping Vista Bela.",
        "Ator Cliente: Retirar ticket, Pagar estacionamento, Inserir ticket pago na saída.",
        "Ator Operador: Auxiliar cliente, Abrir cancela manualmente, Resolver perda de ticket.",
        "Ator Administrador: Consultar relatório diário, Configurar tarifa, Configurar tempo de tolerância.",
        "Casos internos importantes: Registrar horário de entrada, Calcular valor a pagar, Registrar pagamento, Validar ticket pago, Liberar saída.",
        "Relacionamentos sugeridos: Pagar estacionamento inclui Calcular valor a pagar e Registrar pagamento; Inserir ticket pago na saída inclui Validar ticket pago e Liberar saída.",
        "Observação: se você considerar a operadora de cartão como sistema externo, ela pode aparecer como ator secundário em Realizar pagamento com cartão."
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
        "Qual é a principal diferença entre o modelo de requisitos e o modelo de projeto?",
        "O processo de projeto de software é composto por quatro atividades principais. Quais são essas quatro atividades?",
        "O que é um Padrão de Projeto (Design Pattern) e qual sua principal finalidade?",
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
        "Diferença entre 'o que fazer' e 'como fazer' aparece claramente.",
        "Atividades de projeto são listadas com termos técnicos corretos.",
        "Design Pattern é explicado como solução reutilizável para problema recorrente.",
        "Aspectos de implementação não são confundidos com fases de teste."
      ],
      exampleTitle: "Exemplo de resposta correta",
      example: [
        "1. O modelo de requisitos descreve o que o sistema deve fazer: funções, restrições e necessidades dos stakeholders. O modelo de projeto descreve como o sistema será construído, detalhando arquitetura, dados, interfaces e componentes.",
        "2. As quatro atividades principais do projeto são: projeto de arquitetura, projeto de interface, projeto de componentes e projeto de banco de dados/estruturas de dados.",
        "3. Padrão de Projeto é uma solução geral e reutilizável para um problema recorrente de projeto de software. Sua finalidade é reaproveitar conhecimento, padronizar soluções e reduzir risco em decisões de design.",
        "4. Três aspectos importantes na implementação: reuso de software, gerenciamento de configuração e desenvolvimento host-target.",
        "Observação: se o slide da sua turma nomear as atividades com pequenas variações, preserve a nomenclatura usada pela professora."
      ]
    },
    {
      id: "a7-aplicando",
      title: "A7: Aplicando Conhecimento: defeito, erro e falha",
      lessonIds: ["aula-7"],
      source: "course",
      basedOn: "Questionário real do curso para fixar DEFEITO, ERRO e FALHA.",
      prompt: "Classificar situações como defeito, erro ou falha.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Leia a situação.",
        "Identifique se ela descreve a causa no artefato, a ação/engano humano ou o comportamento observado.",
        "Classifique como defeito, erro ou falha.",
        "Justifique em uma frase."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionário com duas tentativas.",
        "Neste site, use como treino de classificação.",
        "Não há arquivo para postar nestá versão de estudo."
      ],
      evaluation: [
        "Defeito: problema presente no artefato, código, requisito ou projeto.",
        "Erro: ação humana equivocada ou estado incorreto que introduz o problema.",
        "Falha: manifestação observável quando o software executa comportamento incorreto.",
        "A resposta deve separar causa interna, ação humana e efeito percebido."
      ],
      exampleTitle: "Exemplos de classificação correta",
      example: [
        "Situação: programador usou sinal > quando deveria usar >=. Classificação: erro humano que introduziu defeito.",
        "Situação: a regra no código permite desconto maior que o permitido. Classificação: defeito no código/regra implementada.",
        "Situação: o cliente finaliza compra com valor errado na tela. Classificação: falha observada pelo usuário.",
        "Situação: documento de requisitos dizia que a tolerância era 10 minutos, mas o correto era 15. Classificação: defeito no requisito, causado por erro de levantamento.",
        "Pegadinha: uma mesma história pode conter erro, defeito e falha; a classificação depende do trecho perguntado."
      ]
    },
    {
      id: "a8-aplicando",
      title: "A8: Aplicando Conhecimento: evolução e manutenção",
      lessonIds: ["aula-8"],
      source: "course",
      basedOn: "Questionário real do curso, valendo 10 pontos. As perguntas exatas não foram enviadas; os itens abaixo são treino baseado na aula 8.",
      prompt: "Fixar conhecimentos sobre evolução de software, sistemas legados e manutenção.",
      tasksTitle: "Como praticar no site",
      tasks: [
        "Revise motivos para mudança após a implantação.",
        "Classifique tipos de manutenção.",
        "Identifique características de sistemas legados.",
        "Explique por que mudanças sucessivas podem degradar a estrutura.",
        "Relacione evolução com valor de negócio."
      ],
      deliverableTitle: "Sem entrega aqui",
      deliverables: [
        "No AVA, era questionário com duas tentativas e melhor desempenho registrado.",
        "Neste site, use como simulado antes de responder atividades oficiais.",
        "Como valia 10 pontos, trate esta aula como prioridade alta de revisão."
      ],
      evaluation: [
        "Consegue explicar evolução como parte normal da vida do software.",
        "Não define manutenção apenas como correção de bugs.",
        "Reconhece que legado pode ser antigo e ainda crítico.",
        "Diferencia manutenção corretiva, adaptativa, perfectiva e preventiva.",
        "Entende que mudanças sem controle aumentam complexidade e custo."
      ],
      exampleTitle: "Exemplos de resposta correta",
      example: [
        "Pergunta: por que software evolui? Resposta: porque regras de negócio, expectativas dos usuários, plataformas, segurança, desempenho e concorrência mudam depois da entrega.",
        "Pergunta: um sistema legado deve sempre ser descartado? Resposta: não. Ele pode ser antigo, mas ainda essencial para a organização; a decisão depende de valor, risco e custo.",
        "Manutenção corretiva: corrigir erro no cálculo de cobrança.",
        "Manutenção adaptativa: ajustar sistema para nova versão de sistema operacional ou nova regra fiscal.",
        "Manutenção perfectiva: melhorar desempenho ou usabilidade.",
        "Manutenção preventiva: refatorar, criar testes ou reorganizar código para reduzir risco futuro.",
        "Pegadinha: adicionar nova funcionalidade pode ser manutenção perfectiva/evolutiva, não apenas desenvolvimento novo."
      ]
    }
  ]
};

(() => {
  const deepTheory = {
    "aula-1|O que é software": {
      body: [
        "Software deve ser entendido como um produto lógico completo, não apenas como linhas de código. Ele inclui programas executáveis, arquivos de configuração, dados de apoio, documentação técnica, documentação de usuário, scripts de instalação e regras que orientam sua operação.",
        "Essa definição é importante porque muitos problemas de software não estão no algoritmo em si, mas em requisitos mal documentados, configuração errada, falta de manual, integração frágil ou ausência de manutenção."
      ],
      details: [
        "Programa é parte do software; software é o conjunto que permite entregar valor e operar o sistema.",
        "Documentação também é artefato de software porque permite instalar, usar, testar, evoluir e auditar o produto.",
        "Em prova, uma alternativa que reduz software a 'código-fonte' ou 'aplicativo instalado' está incompleta."
      ]
    },
    "aula-1|O que é Engenharia de Software": {
      body: [
        "Engenharia de Software é a aplicação sistemática de processos, métodos, técnicas e ferramentas para especificar, desenvolver, validar, implantar, operar e manter software com qualidade. A palavra 'engenharia' indica que não basta improvisar: é preciso controlar custo, prazo, risco, qualidade e comunicação.",
        "O foco da disciplina não é somente programar melhor, mas organizar a produção de software para que equipes consigam entregar sistemas úteis, confiáveis e evolutivos mesmo quando o problema é complexo."
      ],
      details: [
        "Métodos dizem como executar atividades; ferramentas apoiam a execução; processos organizam a ordem e o controle das atividades.",
        "Qualidade começa antes do código, principalmente em requisitos e projeto.",
        "A disciplina tenta equilibrar necessidades do cliente, limitações técnicas e restrições de negócio."
      ]
    },
    "aula-1|Processo de software": {
      body: [
        "Processo de software é um conjunto organizado de atividades, papéis, artefatos, decisões e critérios usados para transformar uma necessidade em um sistema funcionando. Ele dá previsibilidade ao trabalho e reduz a chance de decisões importantes ficarem implícitas.",
        "Mesmo processos diferentes costumam conter quatro atividades fundamentais: especificação, desenvolvimento, validação e evolução. O que muda entre modelos é a ordem, a intensidade, a documentação e a forma de lidar com mudanças."
      ],
      details: [
        "Especificação define o problema e os requisitos.",
        "Desenvolvimento transforma requisitos e projeto em software executável.",
        "Validação verifica se o produto atende ao esperado.",
        "Evolução trata mudanças após entrega ou durante ciclos posteriores."
      ]
    },
    "aula-1|Modelo de processo": {
      body: [
        "Modelo de processo é uma representação simplificada de como um processo pode ser organizado. Ele não descreve cada detalhe real do projeto; funciona como um mapa conceitual para entender fases, entregas, ciclos, controles e pontos de decisão.",
        "A diferença central é: processo é a forma concreta de trabalhar em um projeto; modelo de processo é a abstração usada para explicar ou orientar essa forma de trabalho."
      ],
      details: [
        "Cascata enfatiza sequência e documentação entre fases.",
        "Incremental enfatiza entrega em partes e feedback progressivo.",
        "Reuso enfatiza construção a partir de componentes, serviços ou bibliotecas existentes.",
        "Um mesmo projeto real pode combinar características de vários modelos."
      ]
    },
    "aula-1|Artefatos de software": {
      body: [
        "Artefatos são produtos gerados ou mantidos durante o ciclo de vida do software. Eles registram decisões e servem como base para comunicação, implementação, teste, manutenção e avaliação.",
        "Em Engenharia de Software, artefato não significa apenas documento formal. Um diagrama, uma história de usuário, um protótipo, um caso de teste, um commit, um manual ou um relatório de defeito também pode ser artefato."
      ],
      details: [
        "Artefatos de requisitos explicam o que deve ser feito.",
        "Artefatos de projeto explicam como a solução será estruturada.",
        "Artefatos de teste evidenciam como a qualidade será verificada.",
        "Artefatos de manutenção ajudam a entender mudanças futuras."
      ]
    },
    "aula-1|Ferramentas CASE": {
      body: [
        "Ferramentas CASE apoiam atividades de Engenharia de Software por meio de automação, organização ou padronização. Elas podem ajudar na modelagem, rastreabilidade, documentação, geração de código, controle de versão, testes e gerenciamento de requisitos.",
        "A ferramenta, porém, não substitui o método. Usar uma ferramenta de diagramação não garante bom modelo; usar controle de versão não garante bom processo de revisão."
      ],
      details: [
        "CASE superior costuma apoiar análise, requisitos e projeto.",
        "CASE inferior costuma apoiar implementação, teste e manutenção.",
        "Ferramentas integradas podem reduzir retrabalho e melhorar rastreabilidade entre requisito, código e teste."
      ]
    },
    "aula-1|Atributos de bom software": {
      body: [
        "Um software bom não é apenas aquele que 'funciona uma vez'. Ele precisa atender às necessidades funcionais e também apresentar qualidades que sustentem uso real, manutenção e evolução.",
        "Os atributos destacados no material devem ser lidos como critérios de avaliação: manutenibilidade indica facilidade de alterar; confiabilidade indica comportamento correto e seguro; eficiência indica bom uso de recursos; aceitabilidade indica adequação ao usuário e ao contexto."
      ],
      details: [
        "Manutenibilidade pesa muito porque software quase sempre muda depois da primeira entrega.",
        "Confiabilidade envolve reduzir falhas e lidar bem com condições inesperadas.",
        "Eficiência não é só velocidade; também envolve memória, rede, armazenamento e custo operacional.",
        "Aceitabilidade depende de usabilidade, compatibilidade com o trabalho real e confiança do usuário."
      ]
    },
    "aula-1|Ética profissional": {
      heading: "Ética profissional",
      body: [
        "A ética profissional aparece porque engenheiros de software tomam decisões que podem afetar privacidade, segurança, acesso a serviços, dinheiro, saúde e reputação de pessoas ou organizações.",
        "A responsabilidade não termina quando o código compila. O profissional deve considerar confidencialidade, competência técnica, respeito à propriedade intelectual, comunicação honesta sobre riscos e impacto social do sistema."
      ],
      details: [
        "Confidencialidade significa proteger informações obtidas no trabalho.",
        "Competência significa aceitar e executar tarefas dentro de capacidade técnica real ou buscar supervisão adequada.",
        "Responsabilidade social significa considerar danos possíveis, não apenas lucro ou prazo."
      ]
    },
    "aula-2|Paradigma": {
      body: [
        "Paradigma é uma forma geral de pensar e organizar a construção de software. Ele influencia como o problema é dividido, como os dados são representados, como responsabilidades são distribuídas e como a equipe raciocina sobre solução.",
        "Na disciplina, o termo aparece em sentido amplo: paradigmas e modelos ajudam a comparar abordagens, mas não devem ser tratados como receitas absolutas."
      ],
      details: [
        "Paradigma de programação trata estilo de código, como procedural, orientado a objetos ou funcional.",
        "Paradigma/processo de desenvolvimento trata organização do trabalho, como cascata, incremental ou ágil.",
        "A prova pode misturar os termos; observe se a pergunta fala de código ou de processo."
      ]
    },
    "aula-2|Atividades fundamentais": {
      body: [
        "As quatro atividades fundamentais aparecem em praticamente qualquer processo, mesmo quando recebem nomes diferentes. Especificação entende o problema; desenvolvimento constrói a solução; validação avalia se a solução atende ao objetivo; evolução modifica o software para continuar útil.",
        "Essas atividades não precisam ocorrer uma única vez. Em processos iterativos, elas se repetem em ciclos menores; em processos mais tradicionais, tendem a aparecer como fases mais separadas."
      ],
      details: [
        "Especificação ruim contamina projeto, implementação e teste.",
        "Validação não é só teste técnico; envolve confirmar necessidade real do usuário.",
        "Evolução não é exceção: é parte normal do ciclo de vida do software."
      ]
    },
    "aula-2|Modelos genéricos": {
      body: [
        "Modelos genéricos são formas recorrentes de organizar o desenvolvimento. O cascata trabalha com fases sequenciais e controle documental; o incremental entrega partes do sistema em versões; o desenvolvimento orientado a reuso monta soluções aproveitando componentes existentes.",
        "A escolha do modelo depende de estabilidade dos requisitos, risco, criticidade, disponibilidade do cliente, prazo, orçamento, tecnologia e necessidade de feedback."
      ],
      details: [
        "Cascata pode funcionar melhor quando requisitos são estáveis e bem conhecidos.",
        "Incremental reduz risco de construir tudo antes de receber feedback.",
        "Reuso pode acelerar entrega, mas cria dependência de componentes externos e exige adaptação."
      ]
    },
    "aula-2|Mudanças": {
      body: [
        "Mudanças são inevitáveis porque software vive dentro de um ambiente social, técnico e econômico. Usuários mudam a forma de trabalhar, leis mudam, concorrentes lançam recursos, tecnologias envelhecem e falhas aparecem em produção.",
        "Um processo maduro não tenta fingir que mudanças não existirão; ele define como mudanças serão analisadas, priorizadas, implementadas, testadas e comunicadas."
      ],
      details: [
        "Mudança sem controle gera retrabalho e degradação da arquitetura.",
        "Controle excessivo pode atrasar resposta ao negócio.",
        "Processos ágeis reduzem o custo de mudança por feedback frequente, mas ainda precisam de disciplina."
      ]
    },
    "aula-2|Ferramentas de desenvolvimento": {
      body: [
        "Ferramentas de desenvolvimento apoiam tanto atividades técnicas quanto coordenação do trabalho. Editores, IDEs, depuradores, controle de versão, integração contínua, rastreadores de tarefa, ferramentas de teste e documentação ajudam a reduzir erro humano e aumentar visibilidade.",
        "O ponto de prova é entender que ferramentas são apoio ao processo: elas aumentam produtividade e controle, mas não resolvem requisitos mal definidos ou decisões de projeto ruins."
      ],
      details: [
        "Controle de versão preserva histórico e permite colaboração.",
        "Ferramentas de teste automatizado ajudam regressão e validação contínua.",
        "Ferramentas de gestão tornam trabalho visível, mas dependem de critérios claros."
      ]
    },
    "aula-2|Desenvolvimento ágil": {
      body: [
        "Desenvolvimento ágil surge como resposta a contextos em que requisitos mudam e feedback rápido é mais valioso do que planejamento detalhado de longo prazo. A ideia central é entregar software funcional em ciclos curtos, aprender com o uso e ajustar o próximo passo.",
        "Ágil não significa ausência de processo, ausência de documentação ou improviso. Significa priorizar colaboração, adaptação, entrega incremental e validação frequente do valor."
      ],
      details: [
        "O cliente ou representante do negócio precisa participar para priorizar e validar.",
        "A documentação tende a ser suficiente e útil, não necessariamente extensa.",
        "Sem práticas técnicas, agilidade pode virar apenas pressa; por isso testes, integração e revisão continuam importantes."
      ]
    },
    "aula-2|Processo Unificado": {
      body: [
        "O Processo Unificado é iterativo e incremental: o sistema é desenvolvido em ciclos, e cada ciclo reduz incertezas, amplia funcionalidades e refina arquitetura. Ele é guiado por casos de uso porque os requisitos funcionais orientam o que deve ser construído.",
        "Também é centrado na arquitetura e dirigido por riscos. Isso significa que decisões estruturais importantes e riscos críticos devem ser tratados cedo, antes de o projeto acumular dependências difíceis de mudar."
      ],
      details: [
        "Concepção define escopo inicial, viabilidade e visão do produto.",
        "Elaboração refina requisitos, arquitetura e riscos principais.",
        "Construção implementa a maior parte do sistema.",
        "Transição prepara entrega, implantação, ajustes e aceite."
      ]
    },
    "aula-2|Modelos evolucionários": {
      body: [
        "Modelos evolucionários tratam o software como algo que cresce por versões sucessivas. Eles são úteis quando o cliente conhece o objetivo geral, mas ainda não consegue especificar todos os detalhes de forma confiável.",
        "A vantagem é aprender cedo; o risco é perder controle arquitetural se cada versão for construída sem visão de longo prazo."
      ],
      details: [
        "Cada versão deve aumentar compreensão do problema ou entregar valor real.",
        "O modelo combina bem com prototipação e desenvolvimento incremental.",
        "Requer gestão cuidadosa para evitar soluções improvisadas acumuladas."
      ]
    },
    "aula-2|Prototipação": {
      body: [
        "Prototipação cria uma versão simplificada do sistema ou de parte dele para explorar requisitos, interface, fluxo e entendimento do cliente. O protótipo reduz ambiguidade porque torna ideias abstratas visíveis.",
        "A distinção essencial é entre protótipo descartável e protótipo evolucionário. O descartável serve para aprender e depois é abandonado; o evolucionário é refinado até se tornar parte do produto."
      ],
      details: [
        "É útil quando requisitos de interface ou experiência são incertos.",
        "Pode gerar falsa impressão de que o sistema está quase pronto.",
        "Se o protótipo for virar produto, precisa respeitar qualidade interna desde cedo."
      ]
    },
    "aula-2|Modelo espiral": {
      body: [
        "O modelo espiral organiza o desenvolvimento em ciclos orientados por risco. A cada volta, a equipe define objetivos, identifica e analisa riscos, desenvolve ou prototipa uma solução e planeja a próxima iteração.",
        "Ele é mais adequado para projetos grandes, caros, críticos ou incertos, em que falhar tarde custa muito. Sua força é colocar análise de risco no centro do processo."
      ],
      details: [
        "Risco pode ser técnico, financeiro, de prazo, de requisitos, de segurança ou de aceitação do usuário.",
        "Não é apenas 'cascata repetido'; o diferencial é a avaliação explícita de risco.",
        "Pode ser pesado demais para projetos pequenos e simples."
      ]
    },
    "aula-2|Modelo concorrente": {
      body: [
        "No modelo concorrente, várias atividades do processo podem ocorrer ao mesmo tempo, cada uma em um estado diferente. Por exemplo, uma parte do sistema pode estar em modelagem enquanto outra está em implementação e outra em validação.",
        "Esse modelo tenta representar melhor a realidade de projetos complexos, em que comunicação, análise, construção e teste não seguem sempre uma fila linear."
      ],
      details: [
        "Eventos como mudança de requisito podem mover uma atividade de volta para análise.",
        "Exige coordenação forte para evitar inconsistência entre equipes.",
        "Ajuda a entender que desenvolvimento real raramente é perfeitamente sequencial."
      ]
    },
    "aula-2|Complemento: Scrum, Kanban e XP": {
      body: [
        "Scrum, Kanban e XP são práticas e métodos ágeis complementares, mas com focos diferentes. Scrum organiza papéis, eventos e ciclos; Kanban controla fluxo contínuo de trabalho; XP enfatiza práticas técnicas para manter qualidade em mudanças frequentes.",
        "Este conteúdo é complemento fora do material base, útil porque provas e atividades costumam cobrar exemplos concretos de abordagem ágil."
      ],
      details: [
        "Scrum: backlog, sprint, planejamento, daily, review e retrospectiva.",
        "Kanban: quadro visual, limite de trabalho em progresso e melhoria contínua do fluxo.",
        "XP: programação em par, TDD, refatoração, integração contínua e feedback rápido."
      ]
    },
    "aula-3|Por que requisitos importam": {
      body: [
        "Requisitos importam porque definem o problema que o software deve resolver. Se a equipe entende errado a necessidade, pode construir algo tecnicamente correto, mas inútil para o usuário.",
        "Erros em requisitos são caros porque se propagam: uma regra mal especificada vira projeto errado, código errado, teste errado, documentação errada e retrabalho depois."
      ],
      details: [
        "Quanto mais tarde um erro é descoberto, maior tende a ser o custo de correção.",
        "Requisitos também alinham expectativas entre cliente, usuário, equipe técnica e gestão.",
        "Um requisito bom reduz ambiguidade e permite verificar se foi atendido."
      ]
    },
    "aula-3|Requisitos funcionais": {
      body: [
        "Requisitos funcionais descrevem comportamentos, serviços ou funções que o sistema deve executar. Eles respondem à pergunta: o que o sistema faz?",
        "Devem ser escritos como ações observáveis do sistema, preferencialmente com verbo claro, objeto da ação e condição quando necessário."
      ],
      details: [
        "Exemplo: 'O sistema deve permitir que o aluno confirme matrícula em cursos com vagas disponíveis'.",
        "Não confunda função com qualidade: 'ser rápido' não é funcional.",
        "RFs podem incluir cadastros, consultas, cálculos, emissões, autenticação e validações."
      ]
    },
    "aula-3|Requisitos não funcionais": {
      body: [
        "Requisitos não funcionais descrevem qualidades, restrições e condições sob as quais as funções devem operar. Eles respondem à pergunta: como o sistema deve se comportar ou quais limites deve respeitar?",
        "Esses requisitos afetam arquitetura, tecnologia, testes e custos. Um RNF de disponibilidade, segurança ou desempenho pode mudar completamente a solução."
      ],
      details: [
        "Exemplos: tempo de resposta, disponibilidade, segurança, usabilidade, compatibilidade e conformidade legal.",
        "RNF bom precisa ser mensurável: 'rápido' é vago; 'responder em até 2 segundos em 95% das consultas' é verificável.",
        "RNFs costumam ser esquecidos, mas são decisivos para qualidade percebida."
      ]
    },
    "aula-3|Requisitos de usuário e de sistema": {
      body: [
        "Requisitos de usuário descrevem necessidades em linguagem mais próxima do cliente e do usuário final. Requisitos de sistema detalham essas necessidades com precisão técnica suficiente para orientar projeto, implementação e teste.",
        "A diferença é principalmente de nível de detalhe e público-alvo. Um mesmo requisito pode começar como requisito de usuário e depois ser refinado em vários requisitos de sistema."
      ],
      details: [
        "Requisito de usuário deve ser compreensível para quem conhece o negócio.",
        "Requisito de sistema deve reduzir ambiguidade para quem vai construir e testar.",
        "Misturar os níveis pode gerar documento confuso: ou técnico demais para o cliente, ou vago demais para a equipe."
      ]
    },
    "aula-3|Processo de Engenharia de Requisitos": {
      body: [
        "Engenharia de Requisitos não é apenas coletar pedidos. Ela envolve descobrir, analisar, negociar, documentar, validar e gerenciar requisitos ao longo do projeto.",
        "A atividade é contínua porque o entendimento do problema amadurece. Requisitos podem entrar em conflito, mudar de prioridade ou precisar de refinamento quando novas restrições aparecem."
      ],
      details: [
        "Elicitação busca informações com stakeholders e fontes de domínio.",
        "Análise organiza, prioriza, resolve conflitos e verifica viabilidade.",
        "Especificação registra requisitos de forma clara.",
        "Validação confirma se os requisitos representam a necessidade real."
      ]
    },
    "aula-3|Técnicas de elicitação": {
      body: [
        "Elicitação é a descoberta ativa de requisitos. Ela usa técnicas diferentes porque stakeholders nem sempre sabem explicar tudo, documentos podem estar desatualizados e o trabalho real pode ser diferente do processo formal.",
        "A escolha da técnica depende do contexto: número de usuários, maturidade do domínio, disponibilidade dos stakeholders, grau de conflito e necessidade de observar trabalho real."
      ],
      details: [
        "Entrevistas aprofundam entendimento, mas podem refletir visão individual.",
        "Questionários escalam para muitas pessoas, mas têm pouca profundidade.",
        "Observação revela práticas reais, inclusive exceções não documentadas.",
        "Protótipos ajudam a validar telas, fluxos e expectativas antes da implementação."
      ]
    },
    "aula-3|Complemento: critério de boa escrita": {
      body: [
        "Um requisito bem escrito deve ser necessário, claro, verificável, rastreável, consistente e viável. Esses critérios evitam que o requisito vire opinião solta ou frase bonita sem utilidade prática.",
        "A pergunta mais importante é: como eu provaria que este requisito foi atendido? Se não houver resposta objetiva, ele precisa ser reescrito."
      ],
      details: [
        "Evite termos vagos como rápido, fácil, moderno, intuitivo e seguro sem métrica.",
        "Inclua condições quando elas mudarem o comportamento esperado.",
        "Separe requisitos diferentes em frases diferentes para facilitar teste e rastreabilidade."
      ]
    },
    "aula-4|Especificação de requisitos": {
      body: [
        "Especificar requisitos é transformar entendimento em registro organizado. Esse registro reduz dependência de memória, diminui ambiguidade e cria base comum para cliente, analista, desenvolvedor e testador.",
        "Uma boa especificação não é apenas uma lista de desejos. Ela deve apresentar escopo, requisitos, restrições, modelos, prioridades e critérios que permitam avaliar se o sistema final está correto."
      ],
      details: [
        "Especificação conecta elicitação com projeto e teste.",
        "Requisitos devem ser rastreáveis para mudanças e validações futuras.",
        "Documentação excessiva sem clareza não ajuda; documentação curta demais pode deixar decisões críticas implícitas."
      ]
    },
    "aula-4|SRS": {
      body: [
        "SRS é o documento de especificação de requisitos de software. Ele descreve o que o sistema deve fazer, quais qualidades deve ter, quais restrições precisa respeitar e quais interfaces ou condições externas influenciam a solução.",
        "O valor do SRS é funcionar como contrato técnico de entendimento: ele orienta projeto, implementação, teste, aceite e manutenção."
      ],
      details: [
        "Pode conter requisitos funcionais, não funcionais, regras de negócio, restrições, interfaces e modelos.",
        "Deve evitar ambiguidade, contradição e requisitos impossíveis de verificar.",
        "Em projetos ágeis, pode ser substituído ou complementado por backlog, histórias e critérios de aceite, mas a necessidade de clareza permanece."
      ]
    },
    "aula-4|Modelos do sistema": {
      body: [
        "Modelos do sistema são representações abstratas usadas para entender e comunicar aspectos específicos do software. Um modelo destaca alguns elementos e esconde outros para facilitar análise.",
        "Nenhum modelo mostra tudo. Por isso, diagramas de caso de uso, modelos de dados, fluxos, protótipos e histórias podem se complementar."
      ],
      details: [
        "Modelo funcional destaca serviços oferecidos pelo sistema.",
        "Modelo estrutural destaca componentes, classes ou dados.",
        "Modelo comportamental destaca estados, eventos, fluxos ou interações.",
        "Em prova, escolha o modelo conforme a pergunta: escopo funcional normalmente pede caso de uso."
      ]
    },
    "aula-4|UML e casos de uso": {
      body: [
        "UML reúne uma família de diagramas para modelar sistemas. Nesta disciplina, o foco está em casos de uso, que mostram funcionalidades percebidas por atores externos e ajudam a definir escopo.",
        "O diagrama de casos de uso não descreve algoritmo, tela, banco de dados ou sequência detalhada. Ele responde: quem interage com o sistema e com quais objetivos?"
      ],
      details: [
        "Atores ficam fora da fronteira; casos de uso ficam dentro.",
        "Caso de uso deve representar objetivo do ator, não botão ou campo de tela.",
        "Associações indicam comunicação entre ator e caso de uso.",
        "Detalhes de fluxo devem aparecer em descrição textual complementar."
      ]
    },
    "aula-4|Fluxos de um caso de uso": {
      body: [
        "Fluxos descrevem a narrativa do caso de uso. O fluxo principal é o caminho de sucesso mais comum; fluxos alternativos são variações válidas; fluxos de exceção tratam erro, bloqueio ou impossibilidade de concluir o objetivo.",
        "Essa distinção é essencial porque evita misturar uma escolha legítima do usuário com uma falha ou impedimento."
      ],
      details: [
        "Principal: aluno escolhe curso, confirma matrícula e recebe comprovante.",
        "Alternativo: aluno remove um curso do carrinho antes de confirmar.",
        "Exceção: sistema bloqueia matrícula por falta de pré-requisito ou falta de vaga.",
        "Fluxo de exceção normalmente exige mensagem, correção, retorno ou encerramento do caso."
      ]
    },
    "aula-4|Histórias de usuário": {
      body: [
        "Histórias de usuário registram necessidades de forma simples e orientada a valor. O formato comum é: como [papel], quero [objetivo], para [benefício].",
        "A história não substitui toda especificação quando o domínio é complexo, mas ajuda a manter o foco em quem precisa de algo e por quê."
      ],
      details: [
        "O papel identifica o tipo de usuário ou stakeholder.",
        "O objetivo descreve a capacidade desejada.",
        "O benefício explica valor de negócio ou de uso.",
        "Histórias precisam de critérios de aceite para ficarem testáveis."
      ]
    },
    "aula-4|Complemento: critério de aceite": {
      body: [
        "Critérios de aceite definem as condições mínimas para considerar uma história ou requisito concluído. Eles transformam uma necessidade em verificações concretas.",
        "Este ponto é complemento fora do material base, mas ajuda muito em provas práticas porque mostra como ligar requisito a teste."
      ],
      details: [
        "Use linguagem observável: dado um contexto, quando ocorre uma ação, então o resultado esperado acontece.",
        "Critérios devem cobrir sucesso, variações importantes e erros relevantes.",
        "Critério vago gera discussão no aceite; critério objetivo reduz retrabalho."
      ]
    },
    "aula-5|Modelagem de sistemas": {
      body: [
        "Modelagem de sistemas é a criação de representações simplificadas para entender, discutir e validar uma solução antes de implementá-la. Ela ajuda a tornar visível aquilo que, se ficasse só em conversa, poderia ser interpretado de formas diferentes.",
        "Modelar não é burocracia quando o modelo responde a uma dúvida real: escopo, atores, responsabilidades, fluxo, dados ou interação."
      ],
      details: [
        "Modelo bom simplifica sem distorcer o problema principal.",
        "Modelos ajudam comunicação entre técnico e não técnico.",
        "O objetivo não é desenhar bonito; é reduzir ambiguidade e apoiar decisão."
      ]
    },
    "aula-5|Diagrama de casos de uso": {
      body: [
        "O diagrama de casos de uso mostra o sistema visto de fora. Ele representa atores externos, funcionalidades oferecidas e a fronteira que separa o sistema do ambiente.",
        "Ele é especialmente útil no início do projeto, quando a equipe precisa discutir escopo funcional sem entrar ainda em detalhes de classe, banco ou arquitetura."
      ],
      details: [
        "Use verbos no infinitivo: Cadastrar cliente, Emitir relatório, Confirmar matrícula.",
        "Evite representar telas como casos de uso, como 'Tela de login'. Prefira 'Fazer login'.",
        "Se uma funcionalidade não atende objetivo de ator externo, talvez não seja caso de uso principal."
      ]
    },
    "aula-5|Ator": {
      body: [
        "Ator é um papel externo que interage com o sistema para atingir um objetivo ou fornecer/receber informação. Uma mesma pessoa física pode exercer vários atores; e um ator pode representar vários usuários reais.",
        "O ator fica fora da fronteira porque não pertence ao sistema modelado. Ele inicia interações ou participa delas."
      ],
      details: [
        "Cliente, Aluno, Operador e Administrador são exemplos de papéis.",
        "Outro sistema também pode ser ator se trocar informação com o sistema modelado.",
        "Banco de dados geralmente não é ator quando é componente interno de persistência."
      ]
    },
    "aula-5|Caso de uso": {
      body: [
        "Caso de uso representa um serviço ou objetivo que o sistema oferece a um ator. Ele deve ter valor percebido pelo ator e nome que indique ação.",
        "Um caso de uso não deve ser pequeno demais, como 'clicar botão', nem amplo demais, como 'gerenciar sistema inteiro'. O nível correto descreve uma meta funcional coerente."
      ],
      details: [
        "Bom: 'Pagar estacionamento', porque representa objetivo completo.",
        "Fraco: 'Digitar cartão', porque é passo interno de um fluxo.",
        "Fraco: 'Relatórios', porque está como substantivo e não mostra ação."
      ]
    },
    "aula-5|Fronteira do sistema": {
      body: [
        "A fronteira do sistema delimita o que está sendo modelado. Tudo dentro dela é responsabilidade do software; tudo fora é ator, sistema externo, pessoa, organização ou dispositivo externo.",
        "A fronteira evita confusão de escopo. Se algo está fora, o sistema interage com aquilo, mas não controla sua implementação interna."
      ],
      details: [
        "Casos de uso ficam dentro da fronteira.",
        "Atores ficam fora da fronteira.",
        "Nomeie a fronteira com o nome do sistema, como 'Sistema de Estacionamento'.",
        "Se incluir a operadora de cartão, ela aparece fora como sistema externo."
      ]
    },
    "aula-5|Complemento: include, extend e generalização": {
      body: [
        "Include, extend e generalização refinam relacionamentos entre casos de uso ou atores. Eles devem ser usados para esclarecer, não para enfeitar o diagrama.",
        "Include indica comportamento obrigatório reaproveitado. Extend indica comportamento opcional ou condicional. Generalização indica especialização, como Administrador sendo um tipo de Usuário."
      ],
      details: [
        "Use include quando todo pagamento precisa calcular valor.",
        "Use extend quando uma situação só acontece em condição específica, como recuperar senha.",
        "Não use include para qualquer sequência de passos; isso polui o diagrama.",
        "A seta e o rótulo precisam comunicar dependência corretamente."
      ]
    },
    "aula-5|Complemento: descrição textual": {
      body: [
        "O diagrama mostra visão geral, mas não explica todos os detalhes. A descrição textual do caso de uso complementa o desenho com objetivo, ator principal, pré-condições, fluxo principal, fluxos alternativos, exceções e pós-condições.",
        "Em entrega prática, essa descrição prova que você entendeu o comportamento, não apenas desenhou elipses e atores."
      ],
      details: [
        "Pré-condição: algo que deve ser verdadeiro antes do caso iniciar.",
        "Pós-condição: estado esperado depois do caso terminar.",
        "Fluxo principal: sequência normal de sucesso.",
        "Exceções: erros ou impedimentos relevantes."
      ]
    },
    "aula-6|O que é projeto de software": {
      body: [
        "Projeto de software é a ponte entre requisitos e implementação. Requisitos dizem o que o sistema deve fazer; projeto define como a solução será organizada para realizar isso.",
        "O projeto transforma necessidades em decisões sobre arquitetura, componentes, interfaces, dados, responsabilidades, tecnologias e integração."
      ],
      details: [
        "Modelo de requisitos descreve problema e comportamento esperado.",
        "Modelo de projeto descreve solução técnica proposta.",
        "Um bom projeto reduz acoplamento, melhora coesão e facilita manutenção."
      ]
    },
    "aula-6|Importância do projeto": {
      body: [
        "Projetar antes de implementar permite comparar alternativas e antecipar consequências. Decisões tomadas sem projeto podem funcionar no curto prazo, mas tornar o sistema difícil de testar, manter ou expandir.",
        "O material usa a analogia da casa: construir sem planta pode até começar rápido, mas aumenta risco de retrabalho, inconsistência e custo."
      ],
      details: [
        "Projeto ajuda a distribuir responsabilidades entre partes do sistema.",
        "Ajuda a identificar riscos técnicos antes que virem código espalhado.",
        "Facilita comunicação entre membros da equipe."
      ]
    },
    "aula-6|Projeto de arquitetura": {
      body: [
        "Projeto de arquitetura define a estrutura global do sistema: componentes principais, relações, comunicação, distribuição, dados e tecnologias relevantes. Ele cria a visão de alto nível que orienta decisões locais.",
        "Arquitetura está diretamente ligada a requisitos não funcionais. Segurança, desempenho, disponibilidade e manutenibilidade dependem muito de decisões arquiteturais."
      ],
      details: [
        "Arquitetura em camadas favorece separação de responsabilidades.",
        "Cliente-servidor separa consumidores e provedor de serviço.",
        "Microserviços favorecem independência, mas aumentam complexidade operacional.",
        "Decisão arquitetural ruim é cara de corrigir tarde."
      ]
    },
    "aula-6|Implementação": {
      body: [
        "Implementação é a construção concreta do software a partir do projeto. Inclui escrever código, configurar ambiente, integrar componentes, aplicar padrões, reutilizar bibliotecas e verificar funcionamento técnico.",
        "A implementação não deveria reinventar decisões já tomadas no projeto sem motivo. Quando o código contradiz o projeto, a equipe perde rastreabilidade e controle."
      ],
      details: [
        "Codificação é parte da implementação, mas implementação também envolve integração.",
        "Reuso pode acelerar, mas exige avaliar compatibilidade e licenças.",
        "Gerenciamento de configuração controla versões, mudanças e artefatos."
      ]
    },
    "aula-6|Implantação": {
      body: [
        "Implantação é colocar o software em ambiente real de uso. Ela pode envolver instalação, configuração, migração de dados, treinamento, publicação, monitoramento inicial e suporte.",
        "A diferença para implementação é direta: implementação constrói; implantação disponibiliza para uso."
      ],
      details: [
        "Implantar mal pode causar falhas mesmo com código correto.",
        "Migração de dados é ponto crítico em sistemas reais.",
        "Treinamento e comunicação com usuários fazem parte da transição para operação."
      ]
    },
    "aula-6|Complemento: arquitetura em camadas": {
      body: [
        "Arquitetura em camadas separa responsabilidades para reduzir dependências diretas. Uma divisão comum é apresentação, aplicação, domínio/serviços e persistência.",
        "Este é complemento fora do material base, mas ajuda a entender o que significa transformar requisitos em projeto arquitetural."
      ],
      details: [
        "Apresentação cuida da interação com usuário.",
        "Aplicação coordena casos de uso.",
        "Domínio concentra regras de negócio.",
        "Persistência lida com armazenamento e recuperação de dados."
      ]
    },
    "aula-6|Complemento: exemplos de estilos": {
      body: [
        "Estilos arquiteturais são soluções recorrentes para organizar sistemas. Cliente-servidor, MVC e microserviços resolvem problemas diferentes e trazem custos diferentes.",
        "Não existe estilo universalmente melhor. A escolha precisa ser justificada por requisitos, equipe, escala, risco e operação."
      ],
      details: [
        "MVC separa dados, interface e controle de interação.",
        "Cliente-servidor centraliza serviços para múltiplos clientes.",
        "Microserviços favorecem deploy independente, mas exigem observabilidade, rede e governança.",
        "Para prova, associe estilo arquitetural ao problema que ele resolve."
      ]
    },
    "aula-7|Qualidade de software": {
      body: [
        "Qualidade de software é o grau em que o produto atende requisitos explícitos, necessidades implícitas e expectativas de uso. Ela envolve correção funcional e atributos como confiabilidade, segurança, usabilidade, desempenho e manutenibilidade.",
        "Qualidade não é uma etapa final. Ela é construída durante requisitos, projeto, implementação, teste e manutenção."
      ],
      details: [
        "Um sistema pode cumprir funções e ainda ser ruim se for inseguro, lento ou difícil de usar.",
        "Qualidade deve ser planejada e medida, não apenas desejada.",
        "Teste detecta problemas, mas não substitui boas práticas de construção."
      ]
    },
    "aula-7|Garantia de qualidade": {
      body: [
        "Garantia de qualidade de software, ou SQA, é o conjunto de atividades que aumenta a confiança de que processo e produto atendem padrões e requisitos. Inclui revisões, auditorias, padrões, inspeções, testes e melhoria de processo.",
        "A diferença importante é que SQA não é sinônimo de teste. Teste é uma atividade dentro de uma estratégia maior de qualidade."
      ],
      details: [
        "Revisões encontram defeitos antes da execução do código.",
        "Padrões reduzem variação e facilitam manutenção.",
        "Auditorias verificam aderência ao processo definido.",
        "Métricas ajudam a acompanhar qualidade e risco."
      ]
    },
    "aula-7|Defeito, erro e falha": {
      body: [
        "Defeito, erro e falha são conceitos próximos, mas não iguais. Defeito é a imperfeição introduzida no artefato; erro pode ser a ação humana equivocada ou estado incorreto; falha é o comportamento observável incorreto durante execução.",
        "A sequência típica é: uma pessoa comete um erro, esse erro introduz um defeito no software, e o defeito pode causar uma falha quando executado em determinada condição."
      ],
      details: [
        "Erro: desenvolvedor implementa fórmula errada.",
        "Defeito: a fórmula errada fica no código.",
        "Falha: usuário vê valor de cobrança incorreto na tela.",
        "Nem todo defeito vira falha em toda execução; depende do caminho executado."
      ]
    },
    "aula-7|Processo de teste": {
      body: [
        "Teste de software é uma atividade planejada para revelar defeitos e aumentar confiança no produto. Um processo de teste envolve planejamento, desenho de casos, preparação de dados, execução, comparação de resultados e registro de evidências.",
        "Teste não prova ausência de defeitos. Ele reduz incerteza e mostra que, nos cenários avaliados, o comportamento observado correspondeu ao esperado."
      ],
      details: [
        "Caso de teste precisa de entrada, procedimento e resultado esperado.",
        "Teste de regressão verifica se mudanças quebraram algo que funcionava.",
        "Quanto maior o risco, maior deve ser o cuidado com cobertura e evidência."
      ]
    },
    "aula-7|Verificação e validação": {
      body: [
        "Verificação pergunta: estamos construindo o produto corretamente? Ela compara artefatos e produto com especificações, padrões e decisões planejadas.",
        "Validação pergunta: estamos construindo o produto correto? Ela compara o produto com necessidades reais do usuário e objetivos do negócio."
      ],
      details: [
        "Verificação tende a olhar conformidade com o que foi especificado.",
        "Validação tende a olhar adequação ao uso real.",
        "Um sistema pode passar na verificação e falhar na validação se a especificação estiver errada.",
        "Em prova, associe verificação a 'corretamente' e validação a 'produto correto'."
      ]
    },
    "aula-7|Complemento: caixa-preta e caixa-branca": {
      body: [
        "Teste caixa-preta avalia comportamento externo sem considerar a estrutura interna do código. O foco está em entradas, saídas, regras de negócio e respostas visíveis.",
        "Teste caixa-branca usa conhecimento da estrutura interna, como comandos, condições, caminhos, laços e cobertura de código."
      ],
      details: [
        "Caixa-preta é forte para validar requisitos funcionais.",
        "Caixa-branca é útil para exercitar caminhos internos e lógica complexa.",
        "As duas abordagens se complementam; uma não elimina a outra."
      ]
    },
    "aula-7|Complemento: valor limite e equivalência": {
      body: [
        "Particionamento de equivalência divide entradas em classes que deveriam produzir comportamento semelhante. Em vez de testar todos os valores possíveis, testa-se representantes de cada classe.",
        "Análise de valor limite foca bordas, porque muitos defeitos surgem em limites de intervalo, como menor valor permitido, maior valor permitido e valores imediatamente fora."
      ],
      details: [
        "Para idade permitida de 18 a 60, classes incluem menor que 18, entre 18 e 60, maior que 60.",
        "Valores limite seriam 17, 18, 19, 59, 60 e 61.",
        "Essas técnicas ajudam a criar testes mais inteligentes com menos casos."
      ]
    },
    "aula-8|Evolução de software": {
      body: [
        "Evolução de software é a mudança contínua do sistema após sua criação para preservar utilidade, corrigir problemas, adaptar-se ao ambiente e atender novas demandas.",
        "Software não se desgasta fisicamente como máquina, mas se torna inadequado quando o mundo ao redor muda ou quando sua estrutura interna acumula decisões difíceis de manter."
      ],
      details: [
        "Mudanças podem vir de lei, mercado, tecnologia, usuário, segurança ou desempenho.",
        "Evolução bem controlada mantém valor do sistema ao longo do tempo.",
        "Evolução sem controle aumenta complexidade e risco."
      ]
    },
    "aula-8|Processo de evolução": {
      body: [
        "O processo de evolução transforma solicitações de mudança em alterações analisadas, implementadas, testadas e disponibilizadas. Ele deve avaliar impacto antes de modificar código.",
        "A mudança precisa ser entendida em relação a requisitos, arquitetura, dados, integrações, testes e operação."
      ],
      details: [
        "Análise de impacto identifica partes afetadas pela mudança.",
        "Priorização decide o que será feito primeiro conforme valor e risco.",
        "Validação pós-mudança confirma que a alteração resolveu o problema sem quebrar funcionalidades existentes."
      ]
    },
    "aula-8|Sistemas legados": {
      body: [
        "Sistema legado é um sistema antigo ou herdado que continua importante para a organização. Ele pode ser tecnicamente ultrapassado, mas ainda sustentar processos críticos.",
        "O erro comum é assumir que legado deve ser descartado. A decisão depende de valor de negócio, risco de substituição, custo de manutenção, conhecimento disponível e integração com outros sistemas."
      ],
      details: [
        "Legados podem ter documentação fraca e dependência de tecnologia antiga.",
        "Substituir legado pode ser mais arriscado do que modernizar gradualmente.",
        "Enquanto gera valor e é usado, precisa ser compreendido e gerenciado."
      ]
    },
    "aula-8|Manutenção": {
      body: [
        "Manutenção é modificação do software após entrega. Ela não significa apenas consertar erro; também inclui adaptação, melhoria e prevenção de problemas futuros.",
        "Como a maior parte do custo de muitos sistemas ocorre depois da primeira entrega, manutenção é tema central em Engenharia de Software."
      ],
      details: [
        "Manutenção corretiva corrige defeitos.",
        "Adaptativa responde a mudanças externas.",
        "Perfectiva melhora funcionalidade, desempenho ou usabilidade.",
        "Preventiva reduz risco futuro e facilita evolução."
      ]
    },
    "aula-8|Degradação estrutural": {
      body: [
        "Degradação estrutural ocorre quando mudanças sucessivas pioram a organização interna do software. Mesmo que cada mudança isolada pareça pequena, o acúmulo pode gerar acoplamento, duplicação, regras espalhadas e dificuldade de teste.",
        "Esse fenômeno explica por que sistemas antigos podem ficar caros de alterar: não é apenas idade, é a perda gradual de clareza estrutural."
      ],
      details: [
        "Mudanças urgentes sem refatoração aumentam dívida técnica.",
        "Baixa cobertura de testes torna alterações mais arriscadas.",
        "Arquitetura ignorada tende a se degradar com o tempo."
      ]
    },
    "aula-8|Complemento: tipos de manutenção": {
      body: [
        "Os tipos de manutenção ajudam a classificar por que uma mudança está sendo feita. Essa classificação é útil para prova e para gestão do ciclo de vida.",
        "A mesma alteração pode parecer simples, mas ter natureza diferente conforme o motivo: corrigir erro, adaptar ao ambiente, melhorar algo existente ou prevenir problemas."
      ],
      details: [
        "Corretiva: corrigir cálculo de cobrança errado.",
        "Adaptativa: ajustar sistema a nova lei ou API externa.",
        "Perfectiva: melhorar relatório ou adicionar filtro solicitado.",
        "Preventiva: refatorar módulo para reduzir risco de falhas futuras."
      ]
    },
    "aula-8|Complemento: dívida técnica": {
      body: [
        "Dívida técnica é o custo futuro causado por decisões técnicas que facilitam o curto prazo, mas tornam mudanças futuras mais caras. Ela pode ser consciente, quando aceita por prazo, ou inconsciente, quando nasce de falta de conhecimento.",
        "Nem toda dívida técnica é erro imediato. O problema surge quando ela não é registrada, priorizada ou paga, acumulando risco."
      ],
      details: [
        "Exemplos: duplicação de código, ausência de testes, acoplamento excessivo, nomes ruins e atalhos arquiteturais.",
        "Refatoração é uma forma de pagar dívida técnica sem necessariamente mudar comportamento externo.",
        "Dívida técnica afeta velocidade, qualidade e previsibilidade de manutenção."
      ]
    }
  };

  const conceptPractice = {
    "aula-1|O que é software": {
      example: "Um aplicativo de matrícula inclui app/telas, API, banco, arquivos de configuração, manual de uso e scripts de implantação.",
      application: "Use essa visão para não esquecer documentação, configuração e dados quando uma questão pedir o que compõe um software."
    },
    "aula-1|O que é Engenharia de Software": {
      example: "Planejar requisitos, projetar arquitetura, implementar, testar e manter um sistema de estacionamento seguindo critérios de qualidade e prazo.",
      application: "Serve para organizar o trabalho de equipes e evitar que desenvolvimento vire apenas programação improvisada."
    },
    "aula-1|Processo de software": {
      example: "Um processo pode definir que toda mudança passa por análise de requisito, implementação, revisão e validação antes da entrega.",
      application: "Use processo para dar previsibilidade, distribuir responsabilidades e controlar qualidade durante o ciclo de vida."
    },
    "aula-1|Modelo de processo": {
      example: "Cascata, incremental e orientado a reuso são modelos que organizam as mesmas atividades de maneiras diferentes.",
      application: "Ajuda a escolher uma abordagem coerente com estabilidade dos requisitos, risco e necessidade de feedback."
    },
    "aula-1|Artefatos de software": {
      example: "Documento SRS, diagrama de caso de uso, protótipo de tela, caso de teste e código-fonte são artefatos.",
      application: "Use artefatos para registrar decisões e permitir que outra pessoa entenda, teste ou altere o sistema depois."
    },
    "aula-1|Ferramentas CASE": {
      example: "Uma ferramenta de modelagem que gera diagramas UML e mantém rastreabilidade entre requisitos e casos de uso.",
      application: "Apoia padronização e produtividade, principalmente quando o projeto tem muitos requisitos, versões e documentos."
    },
    "aula-1|Atributos de bom software": {
      example: "Um sistema bancário precisa ser confiável, eficiente, seguro, aceitável para usuários e fácil de manter.",
      application: "Use os atributos para avaliar qualidade além da pergunta 'funciona ou não funciona'."
    },
    "aula-1|Ética profissional": {
      example: "Não expor dados de alunos em logs ou prints ao investigar erro em sistema acadêmico.",
      application: "Orienta decisões quando há privacidade, segurança, propriedade intelectual ou risco social envolvido."
    },
    "aula-2|Paradigma": {
      example: "Orientação a objetos organiza a solução em classes e objetos; desenvolvimento ágil organiza o trabalho em ciclos de feedback.",
      application: "Ajuda a reconhecer a lógica por trás da forma como código, equipe e processo são estruturados."
    },
    "aula-2|Atividades fundamentais": {
      example: "No sistema de matrícula: especificar regras de pré-requisito, implementar matrícula, validar com testes e evoluir quando surgir nova regra.",
      application: "Use as quatro atividades como mapa mental para qualquer questão sobre ciclo de desenvolvimento."
    },
    "aula-2|Modelos genéricos": {
      example: "Um contrato público com requisitos estáveis pode usar cascata; um app de delivery tende a se beneficiar de incrementos e feedback.",
      application: "Serve para justificar qual modelo combina melhor com o cenário descrito em uma atividade ou prova."
    },
    "aula-2|Mudanças": {
      example: "Uma nova lei exige alterar cálculo de imposto em um sistema de vendas já implantado.",
      application: "Mostra por que processos precisam prever análise de impacto, priorização, testes e comunicação de mudanças."
    },
    "aula-2|Ferramentas de desenvolvimento": {
      example: "Git, GitHub, IDE, ferramenta de issue, pipeline de CI e framework de teste trabalhando juntos.",
      application: "Ajudam a coordenar equipe, reduzir erro manual e manter histórico confiável do produto."
    },
    "aula-2|Desenvolvimento ágil": {
      example: "Entregar primeiro cadastro e login, depois pagamento, depois relatórios, ajustando prioridades a cada sprint.",
      application: "Útil quando requisitos mudam e o produto precisa aprender com feedback real do usuário."
    },
    "aula-2|Processo Unificado": {
      example: "Na elaboração, a equipe valida arquitetura e riscos; na construção, implementa funcionalidades guiadas por casos de uso.",
      application: "Adequado quando o projeto precisa de iterações, controle arquitetural e gestão explícita de riscos."
    },
    "aula-2|Modelos evolucionários": {
      example: "Um protótipo inicial de agenda vira uma versão com notificações, depois integração com calendário e depois relatórios.",
      application: "Use quando o entendimento do produto amadurece por versões sucessivas."
    },
    "aula-2|Prototipação": {
      example: "Criar telas navegáveis de matrícula antes de implementar regras reais de vagas e pré-requisitos.",
      application: "Ajuda a validar interface, fluxo e requisitos com usuários antes de gastar com implementação completa."
    },
    "aula-2|Modelo espiral": {
      example: "Em um sistema hospitalar, cada ciclo avalia riscos de segurança, privacidade, integração e disponibilidade antes de avançar.",
      application: "Indicado para projetos críticos ou incertos, em que risco precisa orientar o planejamento."
    },
    "aula-2|Modelo concorrente": {
      example: "Uma equipe valida requisitos de relatórios enquanto outra implementa login e outra testa pagamento.",
      application: "Representa projetos em que atividades avançam em paralelo e voltam de estado conforme eventos acontecem."
    },
    "aula-2|Complemento: Scrum, Kanban e XP": {
      example: "Scrum usa sprint e backlog; Kanban usa quadro e limite de WIP; XP usa integração contínua e refatoração.",
      application: "Ajuda a conectar teoria de agilidade com práticas concretas usadas por equipes."
    },
    "aula-3|Por que requisitos importam": {
      example: "Se o requisito de matrícula não mencionar pré-requisito, o sistema pode aceitar aluno em curso indevido.",
      application: "Use requisitos para alinhar expectativa antes que erro vire projeto, código e teste errados."
    },
    "aula-3|Requisitos funcionais": {
      example: "O sistema deve permitir que o aluno remova um curso do carrinho antes de confirmar a matrícula.",
      application: "Use RF para descrever ações, serviços e comportamentos que o sistema deve executar."
    },
    "aula-3|Requisitos não funcionais": {
      example: "A busca de cursos deve responder em até 2 segundos para 95% das consultas.",
      application: "Use RNF para definir qualidade, restrição ou capacidade que afeta a solução técnica."
    },
    "aula-3|Requisitos de usuário e de sistema": {
      example: "Usuário: 'aluno consulta cursos disponíveis'; sistema: 'listar cursos com nome, carga horária, horário, professor, vagas e pré-requisitos'.",
      application: "Ajuda a passar de linguagem de negócio para especificação detalhada o suficiente para construir e testar."
    },
    "aula-3|Processo de Engenharia de Requisitos": {
      example: "Entrevistar alunos, analisar conflitos, documentar requisitos, validar com professor e controlar mudanças.",
      application: "Organiza a descoberta e manutenção dos requisitos durante todo o projeto."
    },
    "aula-3|Técnicas de elicitação": {
      example: "Usar entrevista com coordenador, questionário com alunos e observação do processo atual de matrícula.",
      application: "Escolha a técnica conforme acesso aos stakeholders, profundidade necessária e tipo de informação buscada."
    },
    "aula-3|Complemento: critério de boa escrita": {
      example: "Trocar 'o sistema deve ser rápido' por 'a consulta deve retornar em até 2 segundos em 95% dos casos'.",
      application: "Transforma requisito vago em algo verificável por teste ou medição."
    },
    "aula-4|Especificação de requisitos": {
      example: "Um documento que reúne RFs, RNFs, regras de matrícula, atores, fluxos e restrições do sistema.",
      application: "Serve como referência comum para projeto, implementação, teste e aceite."
    },
    "aula-4|SRS": {
      example: "SRS do sistema de estacionamento descreve emissão de ticket, cálculo de tarifa, pagamento e tolerância de saída.",
      application: "Formaliza o escopo e reduz discussões futuras sobre o que deveria ou não ter sido entregue."
    },
    "aula-4|Modelos do sistema": {
      example: "Caso de uso mostra atores e objetivos; modelo de dados mostra entidades; protótipo mostra telas.",
      application: "Use modelos diferentes para responder perguntas diferentes sobre o mesmo sistema."
    },
    "aula-4|UML e casos de uso": {
      example: "Aluno se associa aos casos Fazer login, Consultar catálogo e Confirmar matrícula.",
      application: "Ajuda a delimitar escopo funcional sem entrar em detalhes de banco, classe ou algoritmo."
    },
    "aula-4|Fluxos de um caso de uso": {
      example: "Principal: matrícula confirmada; alternativo: remover curso; exceção: falta de vaga ou pré-requisito.",
      application: "Use fluxos para detalhar comportamento que o diagrama sozinho não mostra."
    },
    "aula-4|Histórias de usuário": {
      example: "Como aluno, quero consultar cursos disponíveis para escolher em quais disciplinas me matricular.",
      application: "Ajuda a priorizar funcionalidades pelo valor entregue a um papel de usuário."
    },
    "aula-4|Complemento: critério de aceite": {
      example: "Dado que há vaga e o aluno tem pré-requisito, quando confirma matrícula, então recebe comprovante por e-mail.",
      application: "Transforma história de usuário em condição objetiva de aceite e teste."
    },
    "aula-5|Modelagem de sistemas": {
      example: "Desenhar atores e casos de uso do estacionamento antes de decidir tabelas ou classes.",
      application: "Ajuda equipe e cliente a validar entendimento antes da implementação."
    },
    "aula-5|Diagrama de casos de uso": {
      example: "Cliente participa de Retirar ticket, Pagar estacionamento e Inserir ticket pago na saída.",
      application: "Use para representar objetivos externos e fronteira funcional do sistema."
    },
    "aula-5|Ator": {
      example: "No estacionamento, Cliente, Operador e Administrador são atores com objetivos diferentes.",
      application: "Identifique atores para descobrir quem interage com o sistema e quais serviços precisa."
    },
    "aula-5|Caso de uso": {
      example: "Pagar estacionamento é caso de uso porque entrega um objetivo completo ao Cliente.",
      application: "Use casos de uso para nomear funcionalidades observáveis por atores externos."
    },
    "aula-5|Fronteira do sistema": {
      example: "A cancela física pode ser externa; liberar saída fica dentro do Sistema de Estacionamento se o software controla a autorização.",
      application: "Define o que é responsabilidade do software e o que é apenas ambiente externo."
    },
    "aula-5|Complemento: include, extend e generalização": {
      example: "Pagar estacionamento inclui Calcular valor a pagar; Recuperar senha pode estender Fazer login.",
      application: "Use relacionamentos para mostrar obrigatoriedade, opcionalidade ou especialização sem poluir o diagrama."
    },
    "aula-5|Complemento: descrição textual": {
      example: "Para Confirmar matrícula, descreva ator, pré-condição, fluxo principal, exceção por falta de vaga e pós-condição.",
      application: "Complementa o desenho com regras e sequências que a notação visual não detalha."
    },
    "aula-6|O que é projeto de software": {
      example: "Decidir que o sistema terá camadas de interface, aplicação, domínio e persistência.",
      application: "Transforma requisitos em estrutura técnica antes da implementação."
    },
    "aula-6|Importância do projeto": {
      example: "Projetar pagamento separado de relatório evita que uma mudança de tarifa quebre consulta administrativa.",
      application: "Reduz retrabalho e melhora manutenção ao antecipar dependências e responsabilidades."
    },
    "aula-6|Projeto de arquitetura": {
      example: "Escolher arquitetura cliente-servidor para app móvel consumir uma API central.",
      application: "Define decisões de alto impacto sobre desempenho, segurança, escalabilidade e manutenção."
    },
    "aula-6|Implementação": {
      example: "Codificar o cálculo de tarifa, integrar pagamento e salvar ticket pago no banco.",
      application: "Converte modelos e decisões de projeto em software executável."
    },
    "aula-6|Implantação": {
      example: "Publicar o sistema na nuvem, configurar variáveis, migrar dados e treinar operadores.",
      application: "Coloca o software em uso real com configuração, dados e suporte adequados."
    },
    "aula-6|Complemento: arquitetura em camadas": {
      example: "Controller recebe requisição, serviço aplica regra de negócio e repositório acessa o banco.",
      application: "Separa responsabilidades para facilitar teste, manutenção e troca de tecnologia."
    },
    "aula-6|Complemento: exemplos de estilos": {
      example: "MVC em aplicação web; cliente-servidor em sistema acadêmico; microserviços em plataforma grande.",
      application: "Escolha estilo arquitetural conforme requisitos de escala, equipe, operação e complexidade."
    },
    "aula-7|Qualidade de software": {
      example: "Um app de banco precisa funcionar corretamente, proteger dados, responder rápido e ser compreensível.",
      application: "Use qualidade como critério transversal desde requisitos até manutenção."
    },
    "aula-7|Garantia de qualidade": {
      example: "Revisão de requisitos, inspeção de código, padrões de desenvolvimento e execução de testes automatizados.",
      application: "Cria confiança no processo e no produto antes e depois da execução do software."
    },
    "aula-7|Defeito, erro e falha": {
      example: "Erro: programador usa fórmula errada; defeito: fórmula errada no código; falha: cobrança aparece incorreta.",
      application: "Ajuda a classificar causa, artefato problemático e efeito observado pelo usuário."
    },
    "aula-7|Processo de teste": {
      example: "Planejar caso de teste para matrícula sem vaga, executar, comparar resultado e registrar evidência.",
      application: "Organiza verificação sistemática do comportamento esperado e do risco de regressão."
    },
    "aula-7|Verificação e validação": {
      example: "Verificação confere se o requisito foi implementado como escrito; validação confirma se atende a necessidade do aluno.",
      application: "Use para separar conformidade com especificação de adequação ao problema real."
    },
    "aula-7|Complemento: caixa-preta e caixa-branca": {
      example: "Caixa-preta testa login válido/inválido; caixa-branca testa caminhos internos da função de autenticação.",
      application: "Combina visão externa de requisitos com cobertura da lógica interna."
    },
    "aula-7|Complemento: valor limite e equivalência": {
      example: "Para limite de 5 cursos, testar 4, 5 e 6 matrículas revela bordas importantes.",
      application: "Ajuda a escolher poucos testes com alta chance de encontrar defeitos."
    },
    "aula-8|Evolução de software": {
      example: "Adicionar Pix como forma de pagamento em um sistema que antes aceitava apenas cartão.",
      application: "Mantém o software útil quando negócio, usuários e tecnologia mudam."
    },
    "aula-8|Processo de evolução": {
      example: "Solicitar mudança, analisar impacto, alterar código, testar regressão e publicar nova versão.",
      application: "Controla mudanças para reduzir risco de quebrar partes existentes."
    },
    "aula-8|Sistemas legados": {
      example: "Sistema antigo de folha de pagamento em tecnologia obsoleta, mas essencial para a empresa.",
      application: "Exige decisão cuidadosa entre manter, modernizar, integrar ou substituir."
    },
    "aula-8|Manutenção": {
      example: "Corrigir bug de cálculo, adaptar a nova lei, melhorar relatório ou refatorar módulo crítico.",
      application: "Sustenta valor do sistema após entrega inicial."
    },
    "aula-8|Degradação estrutural": {
      example: "Várias correções urgentes espalham regra de tarifa em cinco arquivos diferentes.",
      application: "Explica por que sistemas ficam mais caros de alterar quando mudanças não preservam arquitetura."
    },
    "aula-8|Complemento: tipos de manutenção": {
      example: "Corretiva corrige bug; adaptativa atende nova API; perfectiva melhora uso; preventiva reduz risco futuro.",
      application: "Classifica o motivo da mudança e ajuda a priorizar esforço de manutenção."
    },
    "aula-8|Complemento: dívida técnica": {
      example: "Duplicar lógica de matrícula para entregar rápido cria custo futuro quando a regra mudar.",
      application: "Ajuda a decidir quando refatorar e quando aceitar conscientemente um atalho temporário."
    }
  };

  const theoryDiagrams = {
    "aula-4|UML e casos de uso": {
      id: "theory-uml-matricula",
      title: "Exemplo UML desenhado: casos de uso de matrícula",
      system: "Sistema de Matrícula Online",
      note: "Este é um exemplo visual de UML de caso de uso: ator fora da fronteira, funcionalidades dentro do sistema e associações mostrando interação.",
      caption: "O diagrama não mostra banco de dados, tela ou algoritmo; ele mostra objetivos funcionais vistos pelo ator externo.",
      actors: [
        {id:"aluno", name:"Aluno", x:95, y:285},
        {id:"emailService", name:"Serviço de E-mail", x:900, y:285}
      ],
      useCases: [
        {id:"login", label:"Fazer login", x:360, y:130},
        {id:"catalogo", label:"Consultar catálogo", x:610, y:130},
        {id:"carrinho", label:"Montar carrinho de matrícula", x:475, y:255, rx:122},
        {id:"confirmar", label:"Confirmar matrícula", x:475, y:385, rx:108},
        {id:"validar", label:"Validar vagas e pré-requisitos", x:670, y:455, rx:125},
        {id:"comprovante", label:"Enviar comprovante", x:700, y:300, rx:100}
      ],
      links: [
        {from:"aluno", to:"login"},
        {from:"aluno", to:"catalogo"},
        {from:"aluno", to:"carrinho"},
        {from:"aluno", to:"confirmar"},
        {from:"confirmar", to:"validar", type:"include"},
        {from:"confirmar", to:"comprovante", type:"include"},
        {from:"emailService", to:"comprovante"}
      ]
    },
    "aula-5|Diagrama de casos de uso": {
      id: "theory-usecase-estacionamento",
      title: "Exemplo UML desenhado: casos de uso de estacionamento",
      system: "Sistema de Estacionamento",
      note: "Exemplo visual do conceito da Aula 5 aplicado ao estacionamento: atores externos, fronteira do sistema e objetivos principais.",
      caption: "Casos de uso foram nomeados com verbos porque representam objetivos do ator, não telas isoladas.",
      actors: [
        {id:"cliente", name:"Cliente", x:95, y:250},
        {id:"operador", name:"Operador", x:95, y:445},
        {id:"admin", name:"Administrador", x:900, y:330}
      ],
      useCases: [
        {id:"ticket", label:"Retirar ticket", x:355, y:130},
        {id:"pagar", label:"Pagar estacionamento", x:355, y:275, rx:110},
        {id:"sair", label:"Liberar saída do veículo", x:355, y:420, rx:115},
        {id:"auxiliar", label:"Auxiliar cliente", x:610, y:455},
        {id:"relatorio", label:"Consultar relatório diário", x:690, y:190, rx:118},
        {id:"configurar", label:"Configurar tarifa e tolerância", x:700, y:315, rx:122}
      ],
      links: [
        {from:"cliente", to:"ticket"},
        {from:"cliente", to:"pagar"},
        {from:"cliente", to:"sair"},
        {from:"operador", to:"auxiliar"},
        {from:"admin", to:"relatorio"},
        {from:"admin", to:"configurar"}
      ]
    },
    "aula-5|Fronteira do sistema": {
      id: "theory-boundary",
      title: "Exemplo UML desenhado: fronteira do sistema",
      system: "Sistema de Estacionamento",
      note: "A fronteira deixa claro o que pertence ao software modelado. Atores ficam fora; casos de uso ficam dentro.",
      caption: "Se a operadora de cartão for externa ao software, ela deve aparecer como ator externo, não dentro da fronteira.",
      actors: [
        {id:"cliente", name:"Cliente", x:90, y:300},
        {id:"cartao", name:"Operadora de Cartão", x:900, y:300}
      ],
      useCases: [
        {id:"pagar", label:"Pagar estacionamento", x:410, y:260, rx:112},
        {id:"autorizar", label:"Autorizar pagamento com cartão", x:650, y:260, rx:132},
        {id:"recibo", label:"Registrar pagamento", x:530, y:390, rx:105}
      ],
      links: [
        {from:"cliente", to:"pagar"},
        {from:"pagar", to:"autorizar", type:"include"},
        {from:"pagar", to:"recibo", type:"include"},
        {from:"cartao", to:"autorizar"}
      ]
    }
  };

  window.ENG_SOFT_DATA.lessons.forEach(lesson => {
    lesson.sections.forEach(section => {
      const details = deepTheory[`${lesson.id}|${section.heading}`];
      if(details) Object.assign(section, details);
      const practice = conceptPractice[`${lesson.id}|${section.heading}`];
      if(practice) Object.assign(section, practice);
      const diagram = theoryDiagrams[`${lesson.id}|${section.heading}`];
      if(diagram) section.diagram = diagram;
    });
  });
})();
