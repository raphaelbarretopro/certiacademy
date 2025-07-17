// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [
  //RAPHAEL
  {
    "tipo": "unica",
    "texto": "Uma empresa emprega uma equipe de agentes de atendimento ao cliente para fornecer suporte por telefone e e-mail aos clientes. A empresa desenvolve um chatbot para fornecer respostas automatizadas a perguntas comuns de clientes. Qual benefício comercial a empresa deve esperar como resultado da criação da solução de chatbot?",
    "opcoes": [
      "Aumento nas vendas",
      "Redução da carga de trabalho para os agentes de atendimento ao cliente",
      "Maior confiabilidade do produto"
    ],
    "resposta": 1,
    "explicacao": "Um chatbot é projetado para automatizar respostas a perguntas comuns dos clientes, o que normalmente representa uma parte significativa das interações de atendimento. Ao lidar com essas consultas simples, o bot reduz o número de casos que exigem intervenção manual de agentes humanos, resultando em menor carga de trabalho para a equipe de atendimento. Isso permite que os agentes se concentrem em questões mais complexas ou críticas.",
    "link": "https://learn.microsoft.com/pt-br/certifications/exams/ai-900/",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Para o progresso do aprendizado de máquina, como você deve dividir os dados para treinamento e avaliação?",
    "opcoes": [
      "Usar os recursos para o treinamento e os rótulos para avaliação",
      "Dividir aleatoriamente os dados em linhas para treinamento e linhas para avaliação",
      "Usar os rótulos para o treinamento e os recursos para avaliação",
      "Dividir aleatoriamente os dados em colunas para treinamento e colunas para avaliação"
    ],
    "resposta": 1,
    "explicacao": "Ao separar dados para treinamento e teste em aprendizado de máquina, a divisão deve ser feita por linhas, não por colunas. O módulo Split Data do Azure Machine Learning permite dividir os dados em duas partes, normalmente de forma aleatória, mantendo a integridade das amostras. Por padrão, a divisão é 50-50, mas é possível configurar a proporção desejada e aplicar amostragem estratificada se necessário.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/studio-module-reference/split-data",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre detecção de anomalias.",
    "afirmacoes": [
      "Prever preços de imóveis com base em dados históricos é um exemplo de detecção de anomalias.",
      "Identificar logins suspeitos observando desvios em relação aos padrões usuais é um exemplo de detecção de anomalias.",
      "Prever se um paciente desenvolverá diabetes com base em seu histórico médico é um exemplo de detecção de anomalias."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "Prever preços de imóveis com base em dados históricos é um exemplo de regressão, pois envolve a previsão de valores contínuos. Identificar logins suspeitos observando padrões incomuns é uma aplicação típica de detecção de anomalias. Prever se um paciente desenvolverá diabetes com base em dados médicos é um problema de classificação, não de detecção de anomalias.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "O tratamento de valores incomuns ou ausentes fornecidos a um sistema de IA é uma consideração para o princípio <combobox> da Microsoft para IA responsável.",
    "opcoes": [
      "Selecione uma opção",
      "Inclusividade",
      "Privacidade e segurança",
      "Confiabilidade e segurança",
      "Transparência"
    ],
    "resposta": 3,
    "explicacao": "O princípio de confiabilidade e segurança da Microsoft para IA responsável garante que os sistemas de IA funcionem conforme o esperado, mesmo diante de dados incomuns ou ausentes. Isso envolve testes rigorosos, validação contínua e mecanismos para garantir resiliência e robustez, protegendo contra falhas ou comportamentos indesejados.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Relacione os tipos de cargas de trabalho de IA aos cenários apropriados.",
    "itens": [
      {
        "label": "IA conversacional"
      },
      {
        "label": "Visão computacional"
      },
      {
        "label": "Processamento de linguagem natural"
      }
    ],
    "grupos": [
      "Um chat automatizado para responder perguntas sobre reembolsos e trocas",
      "Determinar se uma foto contém uma pessoa",
      "Determinar se uma avaliação é positiva ou negativa"
    ],
    "respostas": {
      "Um chat automatizado para responder perguntas sobre reembolsos e trocas": [
        "IA conversacional"
      ],
      "Determinar se uma foto contém uma pessoa": [
        "Visão computacional"
      ],
      "Determinar se uma avaliação é positiva ou negativa": [
        "Processamento de linguagem natural"
      ]
    },
    "explicacao": "IA conversacional é usada em assistentes virtuais e bots de atendimento automatizado. Visão computacional é utilizada para reconhecimento de imagens e objetos em fotos. Processamento de linguagem natural é aplicado para análise de sentimentos e compreensão de conteúdo textual, como identificar se uma avaliação é positiva ou negativa.",
    "link": "https://learn.microsoft.com/pt-br/training/courses/ai-900t00",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  }
  ,
  {
    "tipo": "unica",
    "texto": "Você está projetando um sistema de IA que capacita todos, incluindo pessoas com deficiências auditivas, visuais e outras. Isso é um exemplo de qual princípio orientador da Microsoft para IA responsável?",
    "opcoes": [
      "Justiça",
      "Inclusividade",
      "Confiabilidade e segurança",
      "Responsabilidade"
    ],
    "resposta": 1,
    "explicacao": "A inclusão é um dos princípios orientadores da Microsoft para IA responsável. Ela afirma que todos devem se beneficiar da tecnologia inteligente, abrangendo uma ampla variedade de necessidades e experiências humanas. Isso é especialmente relevante para pessoas com deficiência, que podem se beneficiar imensamente de soluções de IA acessíveis.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/4-guiding-principles",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os princípios orientadores da Microsoft para IA responsável às suas respectivas descrições.",
    "itens": [
      {
        "label": "Responsabilidade"
      },
      {
        "label": "Privacidade e segurança"
      },
      {
        "label": "Confiabilidade e segurança"
      }
    ],
    "grupos": [
      "Implementar processos para garantir que decisões tomadas por sistemas de IA possam ser substituídas por humanos.",
      "Fornecer aos consumidores informações e controles sobre a coleta, uso e armazenamento de seus dados.",
      "Garantir que os sistemas de IA operem como originalmente projetados, respondam a condições inesperadas e resistam à manipulação intencional."
    ],
    "respostas": {
      "Implementar processos para garantir que decisões tomadas por sistemas de IA possam ser substituídas por humanos.": [
        "Responsabilidade"
      ],
      "Fornecer aos consumidores informações e controles sobre a coleta, uso e armazenamento de seus dados.": [
        "Privacidade e segurança"
      ],
      "Garantir que os sistemas de IA operem como originalmente projetados, respondam a condições inesperadas e resistam à manipulação intencional.": [
        "Confiabilidade e segurança"
      ]
    },
    "explicacao": "Responsabilidade está relacionada à capacidade de supervisão humana sobre as decisões de IA. Privacidade e segurança garantem que os dados dos usuários sejam protegidos e usados de forma transparente. Confiabilidade e segurança asseguram que os sistemas de IA funcionem corretamente mesmo diante de falhas ou situações inesperadas.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/4-guiding-principles",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "Ao desenvolver um sistema de IA para carros autônomos, o princípio da Microsoft para IA responsável que deve ser aplicado para garantir uma operação consistente do sistema em circunstâncias inesperadas é <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Inclusividade",
      "Responsabilidade",
      "Confiabilidade e segurança",
      "Justiça"
    ],
    "resposta": 3,
    "explicacao": "O princípio de 'Confiabilidade e segurança' garante que os sistemas de IA funcionem de forma segura, consistente e conforme projetado, mesmo em condições inesperadas. Isso é especialmente importante em aplicações críticas como carros autônomos, onde falhas podem comprometer vidas humanas.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/4-guiding-principles",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um sistema de IA. Qual tarefa você deve incluir para garantir que o serviço atenda ao princípio de transparência da Microsoft para IA responsável?",
    "opcoes": [
      "Garantir que todos os elementos visuais tenham texto associado que possa ser lido por leitores de tela.",
      "Habilitar escalonamento automático para garantir que o serviço seja dimensionado sob demanda.",
      "Fornecer documentação para ajudar os desenvolvedores a depurar o código.",
      "Garantir que um conjunto de dados de treinamento seja representativo da população."
    ],
    "resposta": 2,
    "explicacao": "O princípio da transparência da Microsoft enfatiza que os sistemas de IA devem ser compreensíveis e explicáveis para usuários e desenvolvedores. Isso envolve fornecer documentação clara sobre como o sistema funciona, suas capacidades e limitações. Ao ajudar os desenvolvedores a entender e depurar o código, a transparência é garantida durante o desenvolvimento e manutenção do sistema.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/4-guiding-principles",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "multipla",
    "texto": "Você está desenvolvendo um aplicativo baseado em IA. É necessário garantir que o app utilize os princípios de IA responsável. Quais dois princípios você deve seguir? Cada alternativa correta representa parte da solução.",
    "opcoes": [
      "Implementar uma metodologia ágil de desenvolvimento de software",
      "Implementar um processo de validação de modelo de IA como parte do processo de revisão de software",
      "Estabelecer um comitê de governança de riscos que inclua membros do time jurídico, membros da equipe de gerenciamento de riscos e um responsável pela privacidade",
      "Evitar a divulgação do uso de algoritmos de IA para tomada de decisão automatizada"
    ],
    "respostas": [
      1,
      2
    ],
    "explicacao": "A validação do modelo de IA durante o processo de revisão garante confiabilidade e segurança, enquanto a criação de um comitê de governança com representantes legais e de privacidade assegura conformidade com os princípios de privacidade e segurança da IA.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/3-implications-responsible-ai-practical",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "De acordo com o princípio de IA responsável da Microsoft <combobox>, os sistemas de IA NÃO devem refletir vieses dos conjuntos de dados utilizados para treiná-los.",
    "opcoes": [
      "Selecione uma resposta",
      "Responsabilidade",
      "Justiça",
      "Inclusividade",
      "Transparência"
    ],
    "resposta": 2,
    "explicacao": "O princípio da justiça estabelece que os sistemas de IA devem evitar vieses nos dados de treinamento, garantindo que o sistema trate diferentes grupos de maneira equitativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho de IA aos cenários apropriados.",
    "itens": [
      {
        "label": "Detecção de anomalias"
      },
      {
        "label": "Visão computacional"
      },
      {
        "label": "Mineração de conhecimento"
      },
      {
        "label": "Processamento de linguagem natural"
      }
    ],
    "grupos": [
      "Um chatbot automatizado para responder perguntas sobre reembolsos e trocas",
      "Determinar se uma foto contém uma pessoa",
      "Determinar se uma avaliação é positiva ou negativa"
    ],
    "respostas": {
      "Um chatbot automatizado para responder perguntas sobre reembolsos e trocas": [
        "Mineração de conhecimento"
      ],
      "Determinar se uma foto contém uma pessoa": [
        "Visão computacional"
      ],
      "Determinar se uma avaliação é positiva ou negativa": [
        "Processamento de linguagem natural"
      ]
    },
    "explicacao": "Mineração de conhecimento pode ser usada para extrair informações de documentos e alimentar a base de conhecimento de um chatbot. Visão computacional é usada para identificar objetos ou pessoas em imagens. Processamento de linguagem natural é utilizado para tarefas como análise de sentimentos em avaliações.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as tarefas de aprendizado de máquina aos cenários apropriados.",
    "itens": [
      {
        "label": "Engenharia de atributos"
      },
      {
        "label": "Seleção de atributos"
      },
      {
        "label": "Implantação de modelo"
      },
      {
        "label": "Avaliação de modelo"
      },
      {
        "label": "Treinamento de modelo"
      }
    ],
    "grupos": [
      "Analisar os valores de uma matriz de confusão",
      "Dividir uma data em campos de mês, dia e ano",
      "Selecionar temperatura e pressão para treinar um modelo climático"
    ],
    "respostas": {
      "Analisar os valores de uma matriz de confusão": [
        "Avaliação de modelo"
      ],
      "Dividir uma data em campos de mês, dia e ano": [
        "Engenharia de atributos"
      ],
      "Selecionar temperatura e pressão para treinar um modelo climático": [
        "Seleção de atributos"
      ]
    },
    "explicacao": "Avaliação de modelo envolve o uso de métricas como matriz de confusão, curvas ROC e precisão/recall para medir o desempenho. Engenharia de atributos transforma dados brutos em formatos úteis, como separar datas em componentes. Seleção de atributos identifica quais variáveis são mais relevantes para o modelo, como temperatura e pressão em modelos climáticos.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "Os valores de dados que influenciam a previsão de um modelo são chamados de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Variáveis dependentes",
      "Atributos",
      "Identificadores",
      "Rótulos"
    ],
    "resposta": 2,
    "explicacao": "Atributos (ou features) são os dados de entrada usados por um modelo de aprendizado de máquina para fazer previsões. Eles representam as características observáveis que influenciam o resultado previsto.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Você tem o gráfico Previsto vs Real mostrado no quadro abaixo. Qual tipo de modelo é o gráfico usado para avaliar?",
    "imagemUrl": "img/2.png",
    "opcoes": [
      "Classificação",
      "Regressão",
      "Agrupamento"
    ],
    "resposta": 1,
    "explicacao": "O gráfico Predito vs Real mostra a relação entre os valores previstos e os valores reais em um problema de regressão. Quanto mais próximos os pontos estiverem da linha y = x, maior a precisão do modelo preditivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/how-to-understand-automated-m",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de aprendizado de máquina você deve usar para prever o número de cartões-presente que serão vendidos no próximo mês?",
    "opcoes": [
      "Classificação",
      "Regressão",
      "Agrupamento"
    ],
    "resposta": 1,
    "explicacao": "Regressão é usada para prever valores numéricos. A regressão linear, por exemplo, estabelece uma relação entre variáveis independentes e um resultado numérico, permitindo prever quantidades como vendas futuras.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/studio-module-reference/linear-regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um conjunto de dados que contém informações sobre corridas de táxi ocorridas durante um determinado período. Você precisa treinar um modelo para prever a tarifa de uma corrida de táxi. O que você deve usar como atributo?",
    "opcoes": [
      "O número de corridas de táxi no conjunto de dados",
      "A distância da viagem de corridas individuais de táxi",
      "A tarifa de corridas individuais de táxi",
      "O ID da viagem de corridas individuais de táxi"
    ],
    "resposta": 1,
    "explicacao": "Atributos são os dados de entrada usados para prever o valor de saída (rótulo). A distância da viagem é uma variável conhecida antes da conclusão da corrida e influencia diretamente o valor da tarifa, sendo, portanto, um atributo adequado.",
    "link": "https://learn.microsoft.com/pt-br/dotnet/machine-learning/tutorials/predict-prices",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa prever o nível do mar em metros para os próximos 10 anos. Qual tipo de aprendizado de máquina você deve usar?",
    "opcoes": [
      "Classificação",
      "Regressão",
      "Agrupamento"
    ],
    "resposta": 1,
    "explicacao": "Regressão é usada para prever valores numéricos contínuos. A regressão linear, por exemplo, estabelece uma relação entre variáveis independentes e um resultado numérico, como o nível do mar ao longo do tempo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/studio-module-reference/linear-regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre aprendizado de máquina automatizado (AutoML).",
    "afirmacoes": [
      "O aprendizado de máquina automatizado é o processo de automatizar tarefas iterativas e demoradas do desenvolvimento de modelos de aprendizado de máquina.",
      "O aprendizado de máquina automatizado pode inferir automaticamente os dados de treinamento a partir do caso de uso fornecido.",
      "O aprendizado de máquina automatizado funciona executando várias iterações de treinamento que são avaliadas e classificadas com base nas métricas especificadas.",
      "O aprendizado de máquina automatizado permite que você especifique um conjunto de dados e automaticamente entende qual rótulo deve ser previsto."
    ],
    "respostas": [
      true,
      false,
      true,
      false
    ],
    "explicacao": "A primeira afirmação é verdadeira, pois o AutoML automatiza tarefas repetitivas no desenvolvimento de modelos. A segunda é falsa, pois o AutoML não infere os dados de treinamento a partir do caso de uso. A terceira é verdadeira, pois o AutoML executa várias iterações e avalia os modelos com base em métricas definidas. A quarta é falsa, pois o usuário precisa especificar explicitamente o rótulo a ser previsto.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "Um sistema bancário que prevê se um empréstimo será pago é um exemplo do tipo de aprendizado de máquina <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificação",
      "Regressão",
      "Agrupamento"
    ],
    "resposta": 1,
    "explicacao": "A previsão sobre o pagamento de um empréstimo envolve uma decisão binária (sim ou não), o que caracteriza um problema de classificação. Esse tipo de aprendizado de máquina é usado quando o resultado esperado pertence a categorias distintas.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-azure-machine-learning-v2?view=azureml-api-2&tabs=sdk",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Rotulagem é o processo de marcar os dados de treinamento com valores conhecidos.",
      "Você deve avaliar um modelo usando os mesmos dados utilizados para treiná-lo.",
      "A acurácia é sempre a principal métrica usada para medir o desempenho de um modelo."
    ],
    "respostas": [
      true,
      false,
      false
    ],
    "explicacao": "A primeira afirmação está correta, pois rotulagem envolve a anotação dos dados com os valores que o modelo deve aprender a prever. A segunda está incorreta, pois avaliar um modelo com os mesmos dados de treinamento pode levar ao overfitting e não refletir o desempenho real. A terceira também está incorreta, pois embora a acurácia seja uma métrica comum, ela não é sempre a mais adequada, especialmente em conjuntos de dados desbalanceados.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-model-evaluation-metrics",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço você deve usar para extrair automaticamente texto, pares chave/valor e dados de tabela de documentos digitalizados?",
    "opcoes": [
      "Reconhecedor de Formulários",
      "Análise de Texto",
      "Compreensão de Linguagem",
      "Visão Personalizada"
    ],
    "resposta": 0,
    "explicacao": "O Reconhecedor de Formulários aplica aprendizado de máquina avançado para extrair com precisão texto, pares chave/valor e tabelas de documentos. Ele pode ser personalizado com poucos exemplos e funciona tanto localmente quanto na nuvem, otimizando o tempo e custo de processamento de formulários.",
    "link": "https://learn.microsoft.com/pt-br/azure/applied-ai-services/form-recognizer/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "A capacidade de extrair subtotais e totais de um recibo é uma funcionalidade do serviço <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Visão Personalizada",
      "Reconhecedor de Formulários",
      "Reconhecedor de Escrita Manual",
      "Análise de Texto"
    ],
    "resposta": 2,
    "explicacao": "O Reconhecedor de Formulários é um serviço de IA do Azure que aplica aprendizado de máquina avançado para extrair com precisão texto, pares chave/valor e tabelas de documentos como recibos. Ele permite automatizar a extração de informações, otimizando tempo e custo.",
    "link": "https://learn.microsoft.com/pt-br/azure/applied-ai-services/form-recognizer/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "multipla",
    "texto": "Você utiliza o Azure Machine Learning Designer para publicar um pipeline de inferência. Quais dois parâmetros devem ser usados para acessar o serviço web? Cada seleção correta apresenta parte da solução.",
    "opcoes": [
      "O nome do modelo",
      "O endpoint de treinamento",
      "A chave de autenticação",
      "O endpoint REST"
    ],
    "respostas": [
      2,
      3
    ],
    "explicacao": "Para consumir um pipeline publicado no Azure Machine Learning Designer, é necessário utilizar o endpoint REST do serviço e a chave primária de autenticação. Esses parâmetros permitem que aplicações externas façam chamadas ao serviço de inferência.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-endpoints",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "No Azure Machine Learning Designer, para implantar um pipeline de inferência em tempo real como um serviço para consumo por outros, você deve implantar o modelo em <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "um serviço web local",
      "Instâncias de Contêiner do Azure",
      "Serviço de Kubernetes do Azure (AKS)",
      "Computação do Azure Machine Learning"
    ],
    "resposta": 3,
    "explicacao": "Para realizar inferência em tempo real com o Azure Machine Learning Designer, é necessário implantar o pipeline como um endpoint em tempo real. Esses endpoints devem ser implantados em um cluster do Serviço de Kubernetes do Azure (AKS), que é recomendado para ambientes de produção.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer#deploy",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "Prever quantas horas extras um entregador irá trabalhar com base no número de pedidos recebidos é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "classificação",
      "agrupamento",
      "regressão"
    ],
    "resposta": 3,
    "explicacao": "Regressão é um método de aprendizado de máquina utilizado para prever valores numéricos com base em variáveis independentes. Neste caso, o número de horas extras é uma variável contínua prevista com base na quantidade de pedidos, o que caracteriza um problema de regressão.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/algorithm-module-reference/linear-regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Machine Learning Designer fornece uma interface visual de arrastar e soltar para criar, testar e implantar modelos de aprendizado de máquina.",
      "O Azure Machine Learning Designer permite salvar seu progresso como um rascunho de pipeline.",
      "O Azure Machine Learning Designer permite incluir funções personalizadas em JavaScript."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "O Azure Machine Learning Designer oferece uma interface visual para construção de modelos de aprendizado de máquina por meio de módulos conectáveis. Ele permite salvar o progresso como rascunho de pipeline. No entanto, não é possível incluir funções personalizadas em JavaScript.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você tem o seguinte conjunto de dados e planeja usá-lo para treinar um modelo que prevê as categorias de preço de casas. O que são Renda Familiar e Categoria de Preço da Casa?",
    "imagemUrl": "img/3.png",
    "pares": [
      {
        "requisito": "Renda Familiar:",
        "opcoes": [
          "Uma característica",
          "Um rótulo"
        ],
        "resposta": 0
      },
      {
        "requisito": "Categoria de Preço da Casa:",
        "opcoes": [
          "Uma característica",
          "Um rótulo"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Em aprendizado de máquina, uma característica (feature) é uma variável de entrada usada para prever um resultado, enquanto um rótulo (label) é a variável de saída que o modelo tenta prever. Neste caso, 'Renda Familiar' é uma característica e 'Categoria de Preço da Casa' é o rótulo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/studio/interpret-model-results",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está desenvolvendo um modelo para prever eventos usando classificação. A matriz de confusão a seguir mostra os resultados do modelo com os dados de teste.",
    "imagemUrl": "img/1.png",
    "pares": [
      {
        "requisito": "Há quantos positivos previstos corretamente?",
        "opcoes": [
          "5",
          "11",
          "1.033",
          "13.951"
        ],
        "resposta": 1
      },
      {
        "requisito": "Há quantos falsos negativos?",
        "opcoes": [
          "5",
          "11",
          "1.033",
          "13.951"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Na matriz de confusão, os verdadeiros positivos (TP) são os casos em que o modelo previu '1' e o valor real também era '1' — representado por 11. Os falsos negativos (FN) são os casos em que o valor real era '1', mas o modelo previu '0' — representado por 1.033. <style>table { border-collapse: collapse; width: 100%; text-align: center; } th, td { border: 1px solid #000; padding: 10px; font-weight: bold; } th { background-color: #f2f2f2; } .header-empty { background-color: transparent; border: none; }</style><table><tr><td class='header-empty'></td><th colspan='2'>Previsto</th></tr><tr><td class='header-empty'></td><th>Positivo</th><th>Negativo</th></tr><tr><th>Real Positivo</th><td>VP</td><td>FN</td></tr><tr><th>Real Negativo</th><td>FP</td><td>VN</td></tr></table><p><strong>VP = Verdadeiro Positivo</strong><br>As classes no conjunto de treinamento podem assumir apenas dois valores possíveis, geralmente chamados de positivo ou negativo. As instâncias positivas e negativas que o classificador acerta são chamadas de verdadeiros positivos (VP) e verdadeiros negativos (VN), respectivamente. Da mesma forma, as classificações incorretas são chamadas de falsos positivos (FP) e falsos negativos (FN).</p>",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/studio/evaluate-model-performance",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um modelo de machine learning usando a interface de usuário do aprendizado de máquina automatizado (AutoML). É necessário garantir que o modelo atenda ao princípio de transparência da Microsoft para IA responsável. O que você deve fazer?",
    "opcoes": [
      "Definir o tipo de validação como Automático.",
      "Habilitar a opção 'Explicar melhor modelo'.",
      "Definir a métrica principal como acurácia.",
      "Definir o número máximo de iterações simultâneas como 0."
    ],
    "resposta": 1,
    "explicacao": "Habilitar o recurso 'Explicar melhor modelo' (Enable Explain best model) ativa a capacidade de explicabilidade do modelo, o que permite compreender melhor a influência das variáveis de entrada (importância das características) nos resultados do modelo. Isso é fundamental para cumprir o princípio de transparência da Microsoft para uma IA responsável.",
    "link": "https://azure.microsoft.com/en-us/blog/new-automated-machine-learning-capabilities-in-azure-machine-learning-service/",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho de IA aos cenários apropriados. Cada tipo de carga de trabalho pode ser usado uma ou mais vezes, ou não ser usado.",
    "itens": [
      {
        "label": "Visão computacional"
      },
      {
        "label": "Processamento de linguagem natural"
      },
      {
        "label": "Detecção de anomalias"
      },
      {
        "label": "Aprendizado de máquina (Regressão)"
      }
    ],
    "grupos": [
      "Identificar letras manuscritas",
      "Prever o sentimento de uma postagem em rede social",
      "Identificar um pagamento de cartão de crédito fraudulento",
      "Prever as vendas de brinquedos do próximo mês"
    ],
    "respostas": {
      "Identificar letras manuscritas": [
        "Visão computacional"
      ],
      "Prever o sentimento de uma postagem em rede social": [
        "Processamento de linguagem natural"
      ],
      "Identificar um pagamento de cartão de crédito fraudulento": [
        "Detecção de anomalias"
      ],
      "Prever as vendas de brinquedos do próximo mês": [
        "Aprendizado de máquina (Regressão)"
      ]
    },
    "explicacao": "• **Visão computacional** é utilizada para reconhecer objetos e texto em imagens, como letras manuscritas.\n• **Processamento de linguagem natural (PLN)** permite analisar sentimentos e significados em textos, como postagens em redes sociais.\n• **Detecção de anomalias** identifica comportamentos fora do padrão, como transações fraudulentas.\n• **Aprendizado de máquina (Regressão)** realiza previsões baseadas em dados históricos, como previsão de vendas.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/get-started-with-artificial-intelligence-on-azure/",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está explorando o uso de tecnologias de reconhecimento de voz em dispositivos de casa inteligente. A empresa deseja identificar quaisquer barreiras que possam, sem intenção, excluir determinados grupos de usuários. Isso é um exemplo de qual princípio orientador da Microsoft para IA responsável?",
    "opcoes": [
      "Responsabilidade",
      "Justiça",
      "Inclusividade",
      "Privacidade e segurança"
    ],
    "resposta": 2,
    "explicacao": "O princípio da Inclusividade garante que ninguém seja deixado de fora — incluindo pessoas com deficiência, diferentes gêneros, etnias e identidades LGBTQIA+. A Microsoft promove a criação de tecnologias que abordem uma ampla gama de necessidades humanas e experiências, favorecendo o acesso e a equidade para todos os usuários.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/4-guiding-principles",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são três princípios orientadores da Microsoft para IA responsável? Cada alternativa correta representa uma solução completa.",
    "opcoes": [
      "Conhecimento",
      "Decisão",
      "Inclusividade",
      "Justiça",
      "Opinião",
      "Confiabilidade e segurança"
    ],
    "respostas": [
      2,
      3,
      5
    ],
    "explicacao": "Os princípios orientadores da Microsoft para IA responsável incluem Justiça (Fairness), Inclusividade (Inclusiveness) e Confiabilidade e segurança (Reliability and Safety), conforme definido na documentação oficial. Esses princípios ajudam a garantir que os sistemas de IA sejam desenvolvidos e operem de maneira ética, acessível e segura. As demais opções — como 'Conhecimento', 'Decisão' e 'Opinião' — não fazem parte dos princípios reconhecidos pela Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/responsible-ai-principles/4-guiding-principles",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "combobox",
    "texto": "Retornar uma caixa delimitadora que indica a localização de um veículo em uma imagem é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "Classificação de imagem",
      "Reconhecimento óptico de caracteres (OCR)",
      "Segmentação semântica",
      "Detecção de objeto"
    ],
    "resposta": 4,
    "explicacao": "A detecção de objeto (object detection) é a abordagem correta, pois ela envolve localizar e identificar objetos em imagens por meio de caixas delimitadoras (bounding boxes). Ao contrário da classificação de imagem, que identifica o conteúdo geral de uma imagem, ou da segmentação semântica, que classifica pixel a pixel, a detecção de objeto localiza especificamente cada instância de um objeto.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/computer-vision/concept-object-detection",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",

    "simulado": "ai-1"

  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é usado para gerar atributos (features) adicionais.",
    "opcoes": [
      "Selecione uma opção",
      "Engenharia de atributos (Feature engineering)",
      "Seleção de atributos (Feature selection)",
      "Avaliação do modelo (Model evaluation)",
      "Treinamento do modelo (Model training)"
    ],
    "resposta": 1,
    "explicacao": "A engenharia de atributos (feature engineering) é o processo de criar novos atributos a partir dos dados existentes, com o objetivo de melhorar o desempenho dos modelos de machine learning. Isso é feito antes da seleção de atributos, que elimina os atributos irrelevantes ou redundantes.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/team-data-science-process/create-features",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Você está organizando um evento beneficente que envolve postar fotos de pessoas usando óculos escuros no Twitter. É necessário garantir que você retuíte apenas fotos que atendam aos seguintes critérios:\n- Incluir uma ou mais faces;\n- Conter pelo menos uma pessoa usando óculos escuros.\n\nQual operação você deve usar para analisar as imagens?",
    "opcoes": [

      "A operação Verificar no serviço Face",
      "A operação Detectar no serviço Face",
      "A operação Descrever Imagem no serviço Visão Computacional",
      "A operação Analisar Imagem no serviço Visão Computacional"

    ],
    "resposta": 1,
    "explicacao": "A operação Detect do serviço Face pode ser usada para detectar rostos e atributos faciais, incluindo a presença de óculos. Ela fornece dados detalhados sobre cada rosto detectado, como idade estimada, emoção e se a pessoa está usando óculos ou óculos escuros.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/face/overview",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "unica",
    "texto": "Quando você projeta um sistema de IA para avaliar se empréstimos devem ser aprovados, os fatores usados para tomar a decisão devem ser explicáveis. Isso é um exemplo de qual princípio orientador da Microsoft para uma IA responsável?",
    "opcoes": [
      "Transparência",
      "Inclusividade",
      "Justiça",
      "Privacidade e segurança"
    ],
    "resposta": 0,
    "explicacao": "A transparência permite que a equipe entenda os dados e algoritmos usados para treinar o modelo, quais transformações foram aplicadas aos dados, o modelo final gerado e seus ativos associados. Essas informações fornecem insights sobre como o modelo foi criado, o que permite que ele seja reproduzido de maneira transparente.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/responsible-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os princípios de IA responsável da Microsoft.",
    "afirmacoes": [
      "Fornecer uma explicação sobre o resultado de uma solicitação de empréstimo é um exemplo do princípio de transparência da Microsoft para IA responsável.",
      "Um bot de triagem que prioriza pedidos de seguro com base em lesões é um exemplo do princípio de confiabilidade e segurança da Microsoft para IA responsável.",
      "Uma solução de IA oferecida a preços diferentes para diferentes territórios de vendas é um exemplo do princípio de inclusividade da Microsoft para IA responsável."
    ],
    "respostas": [
      true,
      false,
      false
    ],
    "explicacao": "1. Verdadeiro – A transparência permite entender como o modelo de IA foi criado e como ele toma decisões, incluindo os fatores que influenciaram o resultado de uma solicitação de empréstimo.\n\n2. Falso – O exemplo não está relacionado diretamente com o princípio de confiabilidade e segurança, e sim com lógica de negócios ou priorização, o que não caracteriza esse princípio de forma clara.\n\n3. Falso – Diferenciar preços por território de vendas é uma prática comum de mercado, mas não está relacionada ao princípio de inclusividade, que se refere à não exclusão de pessoas com base em raça, gênero, deficiência, etc.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/responsible-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os princípios da IA responsável da Microsoft aos requisitos correspondentes.",
    "itens": [
      {
        "label": "Justiça"
      },
      {
        "label": "Privacidade e segurança"
      },
      {
        "label": "Transparência"
      },
      {
        "label": "Confiabilidade e segurança"
      }
    ],
    "grupos": [
      "O sistema não deve discriminar com base em gênero, raça",
      "Os dados pessoais devem ser visíveis apenas para aprovação",
      "Os processos de tomada de decisão automatizada devem ser registrados para que os usuários aprovados possam identificar por que uma decisão foi tomada"
    ],
    "respostas": {
      "O sistema não deve discriminar com base em gênero, raça": [
        "Justiça"
      ],
      "Os dados pessoais devem ser visíveis apenas para aprovação": [
        "Privacidade e segurança"
      ],
      "Os processos de tomada de decisão automatizada devem ser registrados para que os usuários aprovados possam identificar por que uma decisão foi tomada": [
        "Transparência"
      ]
    },
    "explicacao": "Justiça (Fairness) garante que os sistemas de IA não discriminem indivíduos com base em características como gênero ou raça. Privacidade e segurança asseguram que os dados pessoais sejam protegidos e acessados apenas quando necessário. Transparência permite que os processos de decisão automatizados sejam compreensíveis e rastreáveis, permitindo saber como e por que uma decisão foi tomada.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/responsible-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-1"
  }
];
