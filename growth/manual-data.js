window.FENG = {
 "areas": [
  {
   "k": "pl",
   "name": "Planejamento / Planner",
   "short": "Planejamento",
   "group": "Planejamento + Inteligência",
   "owner": "Gestão · Larissa Menezes",
   "verb": "Direciona e mede",
   "does": [
    "Planejamento estratégico e plano de ação",
    "KPIs, pesquisas e análise de resultados",
    "Planejamento quinzenal e direcionamento das demandas"
   ],
   "handoffs": [
    {
     "to": "Para Comunicação e Canais",
     "what": "Contexto + objetivo + públicos + bases + datas"
    }
   ],
   "note": ""
  },
  {
   "k": "co",
   "name": "Comunicação / Redação",
   "short": "Comunicação",
   "group": "Comunicação Criativa",
   "owner": "Bárbara Guedes",
   "verb": "Desdobra e produz",
   "does": [
    "Calendário de peças e formatos",
    "Issues de Redação, Design, CRM e Mídia Paga",
    "Textos, conceitos, peças e motion",
    "Aprovação operacional com o clube",
    "Publicações e aprovação dos testes/prévias de CRM e Mídia Paga"
   ],
   "handoffs": [
    {
     "to": "Para Canais",
     "what": "Peças e textos aprovados + issues de CRM e Mídia Paga"
    }
   ],
   "note": ""
  },
  {
   "k": "de",
   "name": "Design / Motion",
   "short": "Design",
   "group": "Comunicação Criativa",
   "owner": "Bárbara Guedes",
   "verb": "Produz as peças",
   "does": [],
   "handoffs": [],
   "note": "Design / Motion está detalhado separadamente para facilitar a execução, dentro de Comunicação Criativa."
  },
  {
   "k": "ca",
   "name": "Canais · CRM + Mídia Paga",
   "short": "Canais",
   "group": "Canais",
   "owner": "Liderança em aberto",
   "verb": "Planeja os canais e executa",
   "does": [
    "CRM e mídia paga",
    "Especialista desenvolve a estratégia de Mídia Paga a partir da estratégia do projeto",
    "Funil de aquisição e desdobramento de peças para Comunicação",
    "Preparação de disparos e campanhas com os públicos indicados",
    "Testes de CRM e prévias de Mídia Paga para aprovação da Redação",
    "Disparos e ativação de campanhas após aprovação",
    "Alinhamento e ajuste de investimento"
   ],
   "handoffs": [
    {
     "to": "Para Comunicação",
     "what": "Plano de mídia + funil de aquisição + demandas de peças"
    },
    {
     "to": "Para execução",
     "what": "Teste/prévia aprovado antes do disparo ou ativação"
    }
   ],
   "note": ""
  }
 ],
 "phases": [
  {
   "k": "estrategia",
   "n": "01",
   "name": "Contexto e estratégia",
   "range": "Etapas 01–06",
   "desc": "Entender o cenário, alinhar o time e aprovar o planejamento.",
   "c": "#762273",
   "soft": "#f2e7f2",
   "dark": "#4c174b"
  },
  {
   "k": "producao",
   "n": "02",
   "name": "Organização e produção",
   "range": "Etapas 07–10",
   "desc": "Organizar as demandas, desenvolver textos e produzir as peças.",
   "c": "#23617d",
   "soft": "#e7f1f6",
   "dark": "#18465c"
  },
  {
   "k": "validacao",
   "n": "03",
   "name": "Revisão e aprovação",
   "range": "Etapas 11–14",
   "desc": "Validar estratégia, obter aprovação do clube e conferir testes.",
   "c": "#a74b15",
   "soft": "#fff0e4",
   "dark": "#79320b"
  },
  {
   "k": "execucao",
   "n": "04",
   "name": "Execução e aprendizado",
   "range": "Etapas 15–16",
   "desc": "Executar, confirmar a entrega e alimentar o próximo planejamento.",
   "c": "#28705a",
   "soft": "#e8f3ec",
   "dark": "#1b5140"
  }
 ],
 "stages": [
  {
   "n": "01",
   "ph": 0,
   "short": "Contexto e cenário",
   "title": "Entender o contexto e o cenário",
   "lead": "Planner",
   "L": [
    "pl"
   ],
   "gate": "",
   "inp": "Informações recebidas do clube, histórico do projeto, resultados anteriores, calendário e demandas em andamento.",
   "out": "Leitura de contexto que orientará a estratégia, com prioridades preliminares e informações faltantes identificadas.",
   "cond": "O Planner consegue explicar o cenário e o problema a resolver; incertezas relevantes estão explícitas para alinhamento com o gestor.",
   "reg": "Material de contexto do projeto e referências de dados que sustentam a leitura.",
   "r": {
    "pl": [
     "Analisa clube, negócio, finanças e histórico",
     "Consolida o cenário do clube, do negócio e da FENG. Entende o momento financeiro, compara o desempenho com anos anteriores e identifica objetivos, oportunidades, riscos e restrições. Separa fatos, hipóteses e informações ainda necessárias."
    ],
    "co": [
     "Traz histórico de comunicação e retorno do clube",
     "Contribui com histórico de comunicação, retorno do clube, campanhas anteriores e aprendizados sobre mensagens e formatos."
    ],
    "de": [
     "Sinaliza aprendizados e limitações de criação",
     "Contribui com aprendizados de peças e formatos, disponibilidade de materiais e limitações de produção relevantes para o cenário."
    ],
    "ca": [
     "Traz desempenho dos canais e públicos",
     "CRM e Mídia Paga trazem resultados dos canais, comportamento dos públicos, desempenho de jornadas/campanhas e restrições técnicas que afetam a estratégia."
    ]
   }
  },
  {
   "n": "02",
   "ph": 0,
   "short": "Gestor e time",
   "title": "Alinhar com o gestor e direcionar o time",
   "lead": "Planner + gestão de Planejamento",
   "L": [
    "pl"
   ],
   "gate": "",
   "inp": "Leitura de cenário e novas informações do cliente.",
   "out": "Time orientado sobre o cenário, os objetivos e as prioridades do projeto.",
   "cond": "Alinhamento realizado com o gestor antes do repasse; áreas compreendem o direcionamento e seus próximos passos.",
   "reg": "Direcionamento e decisões em registro acessível ao time; demandas decorrentes vinculadas no Jira.",
   "r": {
    "pl": [
     "Alinha com o gestor e direciona o time",
     "Conversa previamente com o gestor sobre as implicações das informações, as prioridades e a forma de repassá-las. Depois, direciona o time dedicado ao clube conforme esse alinhamento, preservando a visão estratégica do projeto."
    ],
    "co": [
     "Recebe contexto e sinaliza impactos no calendário",
     "Recebe o contexto e sinaliza dúvidas, impacto no calendário e necessidades para transformar o direcionamento em comunicação."
    ],
    "de": [
     "Sinaliza dependências de produção",
     "Recebe as informações que afetam a produção e sinaliza dependências de materiais, formatos ou prazo."
    ],
    "ca": [
     "Sinaliza oportunidades e necessidades dos canais",
     "Recebe o direcionamento e sinaliza oportunidades, limites e informações necessárias para planejar CRM e Mídia Paga."
    ]
   }
  },
  {
   "n": "03",
   "ph": 0,
   "short": "Estratégia quinzenal",
   "title": "Montar a estratégia da quinzena",
   "lead": "Planner, com as frentes envolvidas",
   "L": [
    "pl"
   ],
   "gate": "",
   "inp": "Cenário alinhado, prioridades do projeto, calendário e resultados esperados.",
   "out": "Estratégia quinzenal, com objetivos, públicos, canais, ações e datas previstas, base para o plano de comunicação.",
   "cond": "As frentes sabem quais resultados cada ação deve apoiar; necessidades de detalhamento de canal estão identificadas.",
   "reg": "Planejamento quinzenal com referências, responsáveis envolvidos e datas previstas.",
   "r": {
    "pl": [
     "Define objetivos, públicos, prioridades e papel dos canais",
     "Define objetivos, públicos, prioridades, ações e indicadores da quinzena. Estabelece o papel de cada canal para chegar aos resultados e envolve os especialistas na construção. Organiza a sequência de ações e as dependências."
    ],
    "co": [
     "Propõe mensagens, calendário e formatos",
     "Propõe calendário de comunicação, mensagens centrais, formatos e entregas que sustentam os objetivos. Sinaliza necessidades de produção e ajustes de escopo."
    ],
    "de": [
     "Contribui para a viabilidade da produção",
     "Contribui para a viabilidade dos formatos, necessidades de KV, adaptações e materiais de apoio, quando necessário."
    ],
    "ca": [
     "Participa da estratégia e recomenda atuação dos canais",
     "CRM e Mídia Paga contribuem com a visão dos canais. O especialista de Mídia participa da discussão do papel do canal; CRM considera oportunidades de relacionamento, públicos e jornadas."
    ]
   }
  },
  {
   "n": "04",
   "ph": 0,
   "short": "Plano de comunicação",
   "title": "Montar o plano de comunicação",
   "lead": "Comunicação",
   "L": [
    "co"
   ],
   "gate": "",
   "inp": "Estratégia quinzenal definida pelo Planner: objetivos, públicos, prioridades, papel dos canais e datas.",
   "out": "Plano de comunicação da quinzena: calendário, mensagens centrais, formatos e entregas.",
   "cond": "O plano de comunicação está coerente com a estratégia e pronto para ser apresentado ao clube junto com ela.",
   "reg": "Plano de comunicação vinculado ao planejamento quinzenal.",
   "r": {
    "pl": [
     "Verifica aderência à estratégia",
     "Esclarece objetivos, públicos e prioridades e verifica se o plano de comunicação sustenta a estratégia do projeto."
    ],
    "co": [
     "Monta o plano de comunicação a partir da estratégia",
     "Desdobra a estratégia em calendário de comunicação, mensagens centrais, formatos e entregas. Sinaliza necessidades de produção e ajustes de escopo."
    ],
    "de": [
     "Contribui para a viabilidade dos formatos",
     "Avalia a viabilidade dos formatos, necessidades de KV e adaptações previstas no plano."
    ],
    "ca": [
     "Alinha o plano aos planos de canal",
     "Alinha mensagens, peças e datas previstas com a jornada de CRM e o planejamento de Mídia Paga."
    ]
   }
  },
  {
   "n": "05",
   "ph": 0,
   "short": "Planos dos canais",
   "title": "Detalhar as soluções e os planos dos canais",
   "lead": "Especialistas de CRM e Mídia Paga",
   "L": [
    "ca"
   ],
   "gate": "",
   "inp": "Direcionamento estratégico, objetivo, público/base e necessidades de cada canal.",
   "out": "Fluxo de jornada ou plano de mídia, com demandas claras para Comunicação. Aplicar conforme os canais e o tipo de demanda.",
   "cond": "Solução de canal coerente com o objetivo e suficientemente detalhada para explicar a demanda ao clube e ao time. A jornada ainda não entra em produção sem aprovação do clube.",
   "reg": "Desenho da jornada, planejamento de mídia e desdobramento das peças vinculados ao planejamento do projeto.",
   "r": {
    "pl": [
     "Direciona e verifica aderência à estratégia",
     "Entrega o contexto e o objetivo, esclarece dúvidas e verifica a aderência das soluções propostas à estratégia do projeto. Mantém a responsabilidade pela estratégia geral."
    ],
    "co": [
     "Recebe o desdobramento de mensagens e peças",
     "Recebe os desdobramentos para entender mensagens, quantidade de peças e formatos necessários. Participa do alinhamento para preparar a produção."
    ],
    "de": [
     "Sinaliza requisitos dos formatos",
     "Avalia necessidades técnicas dos formatos e sinaliza insumos ou adaptações relevantes, quando acionado."
    ],
    "ca": [
     "CRM desenha a jornada; Mídia planeja funil e peças",
     "CRM desenha a jornada: etapas, função de cada etapa, sequência e lógica de funcionamento. Mídia Paga desenvolve o planejamento estratégico do canal, considerando o funil de aquisição e o desdobramento de peças para Comunicação."
    ]
   }
  },
  {
   "n": "06",
   "ph": 0,
   "short": "Aprovar o plano",
   "title": "Aprovar o planejamento com o clube",
   "lead": "Planejamento, com apoio das áreas",
   "L": [
    "pl"
   ],
   "gate": "Clube aprova estratégia, comunicação e jornada",
   "inp": "Estratégia quinzenal, plano de comunicação e desenhos de canal que precisam ser apresentados.",
   "out": "Planejamento aprovado e ajustes consolidados; jornada aprovada pelo clube quando aplicável.",
   "cond": "Existe uma versão de referência aprovada para orientar o desdobramento e a produção. Mudanças posteriores precisam ser comunicadas às áreas afetadas.",
   "reg": "Versão aprovada do plano e evidência da aprovação, com os ajustes incorporados.",
   "r": {
    "pl": [
     "Conduz aprovação do plano com o clube",
     "Conduz a aprovação do planejamento de estratégia + comunicação com o clube, quinzenalmente, até quinta-feira à tarde. Consolida os ajustes e comunica a versão aprovada ao time."
    ],
    "co": [
     "Apoia e incorpora ajustes de comunicação",
     "Apoia a apresentação do calendário e dos desdobramentos de comunicação. Incorpora ajustes que afetam mensagens, formatos e entregas."
    ],
    "de": [
     "Aguarda direcionamento aprovado",
     "Aguarda o direcionamento aprovado para iniciar as peças e sinaliza impactos de alterações no escopo de produção."
    ],
    "ca": [
     "Apoia e ajusta planos de canal",
     "Apoia os esclarecimentos técnicos do plano de mídia ou da jornada e ajusta seu desenho conforme os encaminhamentos. O fluxo da jornada de CRM precisa ser aprovado pelo clube antes da produção dos materiais."
    ]
   }
  },
  {
   "n": "07",
   "ph": 1,
   "short": "Épico e briefing",
   "title": "Abrir o épico e consolidar o briefing",
   "lead": "Planejamento",
   "L": [
    "pl"
   ],
   "gate": "",
   "inp": "Estratégia e plano de comunicação aprovados e direcionamentos consolidados.",
   "out": "Épico completo e disponível para o desdobramento das demandas.",
   "cond": "As informações necessárias estão acessíveis; dúvidas que impedem a produção são tratadas antes de encaminhar a demanda.",
   "reg": "Épico no Jira com o briefing estratégico e os materiais de referência.",
   "r": {
    "pl": [
     "Abre épico com objetivo, públicos, bases e datas",
     "Abre o épico da quinzena com briefing geral, objetivo, públicos e justificativa, bases de disparo e datas previstas. Vincula os planos de canal e referências necessários para as áreas trabalharem."
    ],
    "co": [
     "Confere informações e aponta lacunas",
     "Recebe o épico, confere se há informação suficiente para desdobrar a comunicação e devolve dúvidas ou lacunas ao Planner."
    ],
    "de": [
     "Consulta referências de criação",
     "Consulta as referências e dependências de criação quando necessário; recebe o briefing detalhado na issue de produção."
    ],
    "ca": [
     "Confere bases, públicos e dependências",
     "Confere se as bases, públicos e planos de canal estão referenciados. Sinaliza dependências de acesso, informação ou configuração."
    ]
   }
  },
  {
   "n": "08",
   "ph": 1,
   "short": "Issues e distribuição",
   "title": "Desdobrar as issues e organizar as passagens",
   "lead": "Comunicação",
   "L": [
    "co"
   ],
   "gate": "",
   "inp": "Épico da quinzena e necessidades de peças/canais detalhadas.",
   "out": "Demandas identificadas, vinculadas e distribuídas, com encaminhamento claro entre as áreas.",
   "cond": "Cada demanda possui responsável, prioridade e prazo. A data limite considera pelo menos 1 dia de antecedência ao disparo ou à publicação.",
   "reg": "Issues de produção e canais vinculadas ao épico; ajustes e impedimentos registrados no Jira.",
   "r": {
    "pl": [
     "Acompanha prioridades e esclarece dúvidas",
     "Acompanha se o desdobramento preserva objetivos e prioridades, esclarece dúvidas e acompanha o fluxo diariamente."
    ],
    "co": [
     "Cria e vincula issues de produção e canais",
     "Cria as issues a partir do épico, clona as demandas no board de Design e abre as issues de CRM e Mídia Paga. Registra responsável, prioridade, data limite, categoria e sprint; mantém o vínculo com o épico. Cada e-mail tem sua própria issue."
    ],
    "de": [
     "Coordenação distribui a produção",
     "A coordenação de Design recebe as demandas, distribui entre designers e sinaliza dúvidas de briefing, dependências e restrições de prazo."
    ],
    "ca": [
     "Recebe issues e sinaliza pendências",
     "CRM e Mídia recebem suas issues e conferem os insumos e datas para a execução posterior. Apontam pendências que precisam ser resolvidas na produção."
    ]
   }
  },
  {
   "n": "09",
   "ph": 1,
   "short": "Textos e briefing",
   "title": "Produzir textos e preparar o briefing de criação",
   "lead": "Comunicação / Redação",
   "L": [
    "co"
   ],
   "gate": "",
   "inp": "Direcionamento aprovado, plano de canal, demanda de peças e referências.",
   "out": "Textos e briefing completos para Design, coerentes com a finalidade de cada peça.",
   "cond": "Design tem texto final, referência, formato, prazo e contexto suficientes para produzir.",
   "reg": "Documento com texto final, briefing e referências anexado à issue de Design.",
   "r": {
    "pl": [
     "Esclarece objetivo e direcionamento",
     "Esclarece contexto, público e objetivo quando necessário; orienta decisões que alterem o direcionamento estratégico."
    ],
    "co": [
     "Produz textos e encaminha briefing para Design",
     "Produz textos, roteiros, conceitos e referências. Para cada peça, consolida texto final e briefing detalhado em documento na issue de Design. Indica formato e data de disparo/publicação e encaminha à coordenação de Design."
    ],
    "de": [
     "Confere texto, briefing, formato e prazo",
     "Recebe texto e briefing, confere os insumos de criação e pede os esclarecimentos necessários antes de produzir."
    ],
    "ca": [
     "Esclarece requisitos de CRM e Mídia",
     "Esclarece requisitos dos canais que impactam texto ou formato, como adaptações necessárias para a jornada ou o desdobramento de mídia."
    ]
   }
  },
  {
   "n": "10",
   "ph": 1,
   "short": "Peças e criação",
   "title": "Produzir as peças e validar a criação",
   "lead": "Design / Motion, com Comunicação",
   "L": [
    "de"
   ],
   "gate": "",
   "inp": "Textos finais, briefing, formatos, referências e prazos.",
   "out": "Peça e texto prontos, com validação interna de criação, para revisão estratégica.",
   "cond": "A criação está pronta para avaliação de Planejamento. Pendências de conteúdo ou formato estão resolvidas ou explicitadas.",
   "reg": "Arquivos e versões na issue de Design; ajustes registrados no mesmo fluxo.",
   "r": {
    "pl": [
     "Apoia dúvidas de estratégia",
     "Permanece disponível para dúvidas estratégicas; recebe peça e texto prontos para a revisão da próxima etapa."
    ],
    "co": [
     "Acompanha e supervisiona a criação",
     "Acompanha as entregas, supervisiona a criação e esclarece mensagens, referências e formatos. Encaminha ajustes de texto quando necessários."
    ],
    "de": [
     "Produz peças e faz validação interna",
     "Produz KVs, peças, adaptações e materiais audiovisuais conforme a demanda. Realiza a validação interna de criação e aplica os ajustes registrados na issue."
    ],
    "ca": [
     "Esclarece requisitos técnicos dos canais",
     "Esclarece requisitos técnicos dos formatos e sinaliza incompatibilidades de uso nos canais quando identificado."
    ]
   }
  },
  {
   "n": "11",
   "ph": 2,
   "short": "Revisão estratégica",
   "title": "Revisar a aderência estratégica",
   "lead": "Planner / Planejamento",
   "L": [
    "pl"
   ],
   "gate": "Validação estratégica",
   "inp": "Peça e texto prontos e planejamento aprovado.",
   "out": "Material alinhado à estratégia e liberado para aprovação com o clube.",
   "cond": "Planejamento validou a versão que será enviada ao clube.",
   "reg": "Aprovação estratégica e solicitações de ajuste registradas na issue de Design.",
   "r": {
    "pl": [
     "Valida tom, mensagem, imagens e objetivo",
     "Verifica tom, imagens, mensagem e aderência ao briefing estratégico, ao público e ao objetivo. Indica ajustes de forma clara e libera o material para envio ao clube quando estiver alinhado."
    ],
    "co": [
     "Organiza os ajustes de texto e criação",
     "Recebe a revisão, organiza ajustes com Redação e Design e acompanha a nova versão. Encaminha ao clube após a aprovação estratégica."
    ],
    "de": [
     "Ajusta as peças e devolve nova versão",
     "Aplica ajustes de criação; devolve a versão revisada para a validação correspondente."
    ],
    "ca": [
     "Apoia ajustes que afetam o canal",
     "Participa quando o ajuste afeta o desenho da jornada, o planejamento de mídia ou os requisitos de execução."
    ]
   }
  },
  {
   "n": "12",
   "ph": 2,
   "short": "Aprovação do clube",
   "title": "Aprovar peças e textos com o clube",
   "lead": "Comunicação",
   "L": [
    "co"
   ],
   "gate": "Clube aprova peças e textos",
   "inp": "Material com revisão estratégica concluída.",
   "out": "Peças e textos aprovados pelo clube para a preparação da execução.",
   "cond": "Aprovação da versão final registrada. Se o ajuste mudar a estratégia, a revisão retorna a Planejamento antes de prosseguir.",
   "reg": "Aprovação do clube, retornos e arquivos finais registrados no Jira.",
   "r": {
    "pl": [
     "Reavalia alterações estratégicas",
     "Apoia decisões que alterem objetivo, estratégia ou público. Reavalia o material quando um pedido do clube modifica o direcionamento aprovado."
    ],
    "co": [
     "Envia ao clube e conduz os ajustes",
     "Envia peça e texto ao clube, centraliza o retorno e conduz os ajustes. Garante que o time saiba qual é a versão final aprovada."
    ],
    "de": [
     "Ajusta e entrega os arquivos finais",
     "Executa os ajustes solicitados e devolve os arquivos finais; mantém o histórico na issue."
    ],
    "ca": [
     "Acompanha impacto nos canais e prazos",
     "Acompanha impactos de alterações em prazos, configuração ou peças dos canais. Utiliza a versão final aprovada para preparação."
    ]
   }
  },
  {
   "n": "13",
   "ph": 2,
   "short": "Configurar e testar",
   "title": "Configurar a entrega e enviar testes/prévias",
   "lead": "CRM e Mídia Paga",
   "L": [
    "ca"
   ],
   "gate": "",
   "inp": "Issues, materiais aprovados, públicos/bases, plano do canal e datas.",
   "out": "Entrega configurada e teste/prévia disponível para validação.",
   "cond": "O teste ou a prévia corresponde aos materiais e ao plano aprovados; pendências identificadas são corrigidas antes da execução.",
   "reg": "Configuração e pendências na issue; teste/prévia enviado pelo canal de aprovação combinado.",
   "r": {
    "pl": [
     "Esclarece público e objetivo",
     "Esclarece público, objetivo e eventuais dúvidas de direcionamento que afetem a configuração."
    ],
    "co": [
     "Recebe testes e prévias para revisão",
     "Acompanha a preparação, confere o encaminhamento de textos e peças e recebe os testes/prévias para validação pelos redatores."
    ],
    "de": [
     "Apoia correções técnicas dos arquivos",
     "Apoia correções de arquivo, formato ou adaptação necessárias para a configuração."
    ],
    "ca": [
     "Configura jornada/campanha e envia teste ou prévia",
     "Configura o disparo, a jornada ou a campanha conforme o plano aprovado. Confere materiais, público/base, links e programação; em jornadas, verifica a lógica das etapas. Envia teste de CRM ou prévia de Mídia Paga para aprovação."
    ]
   }
  },
  {
   "n": "14",
   "ph": 2,
   "short": "Validar teste/prévia",
   "title": "Validar testes/prévias e corrigir pendências",
   "lead": "Redação + Canais",
   "L": [
    "co",
    "ca"
   ],
   "gate": "Redação aprova teste/prévia",
   "inp": "Teste de CRM ou prévia da campanha de Mídia Paga.",
   "out": "Teste/prévia aprovado e pendências resolvidas.",
   "cond": "Aprovação recebida antes da execução. Correções relevantes passam por nova conferência.",
   "reg": "Aprovação dos redatores no grupo e registro do encaminhamento na issue para rastreabilidade.",
   "r": {
    "pl": [
     "Atua se houver divergência estratégica",
     "Atua quando a conferência revelar divergência estratégica ou necessidade de alterar público/objetivo."
    ],
    "co": [
     "Redatores conferem e aprovam",
     "Redatores aprovam os testes/prévias, conferindo a aplicação dos textos e peças aprovados. Indicam correções e validam a versão corrigida."
    ],
    "de": [
     "Corrige problemas visuais da peça",
     "Corrige problemas visuais que dependam da peça e entrega os arquivos ajustados."
    ],
    "ca": [
     "Corrige configuração e reenvia para aprovação",
     "Aplica correções na configuração e reenvia o teste/prévia quando necessário. Aguarda a aprovação antes de disparar ou ativar."
    ]
   }
  },
  {
   "n": "15",
   "ph": 3,
   "short": "Executar e confirmar",
   "title": "Executar e confirmar a entrega",
   "lead": "CRM / Mídia Paga + Comunicação",
   "L": [
    "ca"
   ],
   "gate": "",
   "inp": "Teste/prévia aprovado, materiais finais e programação definida.",
   "out": "Entrega executada ou impedimento registrado e encaminhado.",
   "cond": "A execução foi confirmada e o status reflete o que ocorreu. Falhas não são tratadas como entrega concluída.",
   "reg": "Status da issue atualizado, com confirmação de execução ou descrição do impedimento.",
   "r": {
    "pl": [
     "Acompanha aderência ao plano",
     "Acompanha se a entrega ocorreu conforme o planejamento e trata com as áreas os impactos de qualquer desvio."
    ],
    "co": [
     "Acompanha publicações e encaminhamentos",
     "Acompanha as publicações e os encaminhamentos; mantém o alinhamento com Canais sobre a execução."
    ],
    "de": [
     "Apoia correções de criação, se necessárias",
     "Apoia correções de criação se houver um problema identificado durante a execução."
    ],
    "ca": [
     "Dispara/ativa e confirma a execução",
     "CRM realiza o disparo ou ativa a jornada; Mídia Paga ativa a campanha. Confirma a execução, identifica falhas e comunica impedimentos ou desvios às áreas envolvidas."
    ]
   }
  },
  {
   "n": "16",
   "ph": 3,
   "short": "Resultados e ajustes",
   "title": "Acompanhar resultados e alimentar o próximo plano",
   "lead": "Planner + especialistas das áreas",
   "L": [
    "pl",
    "ca"
   ],
   "gate": "",
   "inp": "Resultados das entregas e registros da operação.",
   "out": "Aprendizados e próximos passos incorporados ao planejamento seguinte.",
   "cond": "Os resultados têm interpretação e encaminhamento; as mudanças necessárias estão claras para as áreas.",
   "reg": "Relatórios e encaminhamentos na Weekly e nos materiais dos ciclos; demandas de ajuste registradas no Jira.",
   "r": {
    "pl": [
     "Avalia resultados e direciona a próxima quinzena",
     "Avalia os resultados frente aos objetivos do projeto, compara com o histórico e identifica aprendizados. Consolida prioridades e ajustes para a próxima quinzena, com alinhamento ao gestor quando necessário."
    ],
    "co": [
     "Propõe melhorias de mensagem e formato",
     "Analisa aprendizados de mensagens e formatos, retorno do clube e retrabalho de produção; propõe melhorias na comunicação."
    ],
    "de": [
     "Contribui com aprendizados de produção",
     "Contribui com aprendizados dos formatos e da produção, incluindo ajustes que facilitem próximas entregas."
    ],
    "ca": [
     "Analisa desempenho e propõe ajustes de canal",
     "CRM e Mídia analisam desempenho dos canais e propõem ajustes em jornadas, campanhas, públicos e investimento, alinhados à estratégia do projeto."
    ]
   }
  }
 ],
 "questions": [
  {
   "q": "Recebi informação nova do cliente. O que faço?",
   "a": "Ao receber informações do cliente, o Planner alinha previamente com o gestor como transmiti-las e depois direciona o time dedicado ao clube.",
   "stage": "02"
  },
  {
   "q": "Até quando o plano da quinzena precisa ser aprovado?",
   "a": "O Planner conduz a aprovação do planejamento de estratégia + comunicação com o clube, quinzenalmente, até quinta-feira à tarde.",
   "stage": "06"
  },
  {
   "q": "Posso produzir a jornada de CRM antes da aprovação do clube?",
   "a": "Não. O fluxo da jornada de CRM precisa ser aprovado pelo clube antes da produção dos materiais.",
   "page": "canais"
  },
  {
   "q": "Quem abre as issues e o que cada uma precisa ter?",
   "a": "Comunicação cria as issues a partir do épico, com responsável, prioridade, data limite, categoria e sprint, vinculadas ao épico. Cada e-mail tem sua própria issue.",
   "stage": "08"
  },
  {
   "q": "Qual é a data limite de uma demanda?",
   "a": "Pelo menos 1 dia antes do disparo ou da publicação.",
   "stage": "08"
  },
  {
   "q": "O que o Design precisa receber para começar?",
   "a": "Texto final, referência, formato, prazo e contexto suficientes, em documento anexado à issue de Design.",
   "stage": "09"
  },
  {
   "q": "Quem revisa as peças antes de irem ao clube?",
   "a": "O Planner verifica tom, imagens, mensagem e aderência ao briefing estratégico antes do envio ao clube.",
   "stage": "11"
  },
  {
   "q": "O clube pediu um ajuste que muda a estratégia. E agora?",
   "a": "Se o ajuste mudar a estratégia, a revisão retorna a Planejamento antes de prosseguir.",
   "stage": "12"
  },
  {
   "q": "Quem aprova testes de CRM e prévias de Mídia Paga?",
   "a": "Os redatores aprovam os testes/prévias. CRM e Mídia Paga só disparam ou ativam após essa aprovação.",
   "stage": "14"
  },
  {
   "q": "O que significa cada status e prioridade no Jira?",
   "a": "Backlog, Pendente, Em progresso, Blocked, Em validação e Concluída; prioridades de Urgente (mesmo dia) a Baixa (mais de 3 dias).",
   "page": "consulta"
  },
  {
   "q": "Onde falo com o time e onde registro as coisas?",
   "a": "Discord para a comunicação diária; Jira para demandas, peças, ajustes e aprovações. Minimizar conversas paralelas em WhatsApp.",
   "page": "consulta"
  },
  {
   "q": "Quais reuniões tenho e quanto duram?",
   "a": "Daily interna e Daily Squad (diárias, 15–30 min) e Weekly por projeto (semanal, 30 min–1h).",
   "page": "rotina"
  },
  {
   "q": "Como funciona a preparação dos plantões de jogo?",
   "a": "Planilha de jogos cerca de 10 dias antes do fim do mês e até 5 dias para preencher a escala.",
   "page": "consulta"
  }
 ],
 "rules": [
  "O Planner entende o cenário antes de montar a estratégia e alinha com o gestor como direcionar o time.",
  "O desenho da jornada de CRM precisa de aprovação do clube antes da produção.",
  "O especialista de Mídia Paga desenvolve a estratégia do canal e o desdobramento de peças para Comunicação.",
  "Design / Motion está detalhado separadamente para facilitar a execução, dentro de Comunicação Criativa.",
  "Peças e textos passam pela revisão estratégica antes do envio ao clube.",
  "CRM e Mídia Paga executam após a aprovação dos testes/prévias.",
  "Ajustes, versões e aprovações permanecem registrados no Jira.",
  "Data limite: pelo menos 1 dia antes do disparo/publicação. Cada e-mail possui sua própria issue.",
  "Projeção de Comunicação: 20 entregas por clube como referência de planejamento. Período de referência a definir."
 ]
};
