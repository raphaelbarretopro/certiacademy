// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [

  // QUESTÃO 1
  {
    "tipo": "multipla",
    "texto": "Quais são os três princípios da Microsoft que orientam o uso da IA responsável? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Confiabilidade e segurança",
      "Determinação",
      "Imparcialidade",
      "Ternura",
      "Conhecimento",
      "Inclusão"
    ],
    "respostas": [0, 2, 5],
    "explicacao": "A Microsoft define seis princípios fundamentais para o uso responsável da IA: imparcialidade, confiabilidade e segurança, privacidade e segurança, inclusão, transparência e responsabilidade. Portanto, as opções selecionadas estão corretas com base nos princípios documentados pela Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/inform/ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 2
  {
    "tipo": "unica",
    "texto": "Você está criando um sistema de IA. Qual tarefa você deve incluir para ajudar o serviço a atender ao princípio de transparência da Microsoft para IA responsável?",
    "opcoes": [
      "Garantir que todos os elementos visuais tenham um texto associado que possa ser lido por um leitor de tela.",
      "Fornecer documentação para ajudar os desenvolvedores a depurar o código.",
      "Habilitar o dimensionamento automático para garantir que um serviço seja dimensionado com base na demanda.",
      "Garantir que um conjunto de dados de treinamento represente a população."
    ],
    "resposta": 1,
    "explicacao": "Para atender ao princípio de transparência, é fundamental fornecer documentação clara e compreensível que explique como o sistema de IA funciona, suas limitações, e como ele toma decisões. Isso capacita desenvolvedores e usuários a entenderem melhor o comportamento do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/inform/ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 3
  {
    "tipo": "multipla",
    "texto": "Quais são os dois cenários que são exemplos de uma carga de trabalho de processamento de linguagem natural? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Um dispositivo inteligente para residências que responde a perguntas como 'Como está o tempo hoje?'",
      "Um site que usa uma base de conhecimentos para responder interativamente a perguntas de usuários",
      "Mapeamento de linha de montagem que move de forma autônoma fácies em carros",
      "Monitoramento de temperatura da maquinaria para ligar um ventilador quando a temperatura atingir um limite específico"
    ],
    "respostas": [0, 1],
    "explicacao": "Dispositivos inteligentes e sistemas de resposta interativa utilizam processamento de linguagem natural para interpretar e responder a comandos de voz ou texto em linguagem humana. Esses sistemas envolvem análise semântica, extração de intenção e geração de respostas. Os exemplos relacionados a automação física ou controle de temperatura não envolvem linguagem natural.",
    "link": "https://learn.microsoft.com/pt-br/certifications/resources/study-guides/ai-900",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 4
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A contagem de número de pessoas em uma área com base em um feed de vídeo é exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "percepção visual computacional",
      "manutenção de containers",
      "geração de conteúdo",
      "previsão"
    ],
    "resposta": 1,
    "explicacao": "A contagem de pessoas em vídeos é uma tarefa clássica de visão computacional, que utiliza modelos de detecção e rastreamento de objetos em tempo real para identificar e quantificar elementos visuais, como pessoas em uma cena.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-computer-vision/",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 5
  {
    "tipo": "multipla",
    "texto": "Quais são as duas tarefas que podem ser executadas usando-se a pesquisa visual computacional? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Prever preços de ações.",
      "Extrair frases-chave.",
      "Traduzir texto entre idiomas.",
      "Detectar o esquema de cores em uma imagem.",
      "Detectar marcas em uma imagem."
    ],
    "respostas": [3, 4],
    "explicacao": "A visão computacional envolve o processamento e a análise de imagens e vídeos para extrair informações. Detectar o esquema de cores em uma imagem e detectar marcas em uma imagem são tarefas típicas de visão computacional. Prever preços de ações está relacionado a análise de dados e aprendizado de máquina preditivo. Extrair frases-chave e traduzir texto entre idiomas são tarefas de Processamento de Linguagem Natural (PLN).",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/ai-ml/guide/machine-learning-operations-v2",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 6
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: De acordo com o princípio <combobox> de IA responsável da Microsoft, os sistemas de IA NÃO devem refletir compensações dos conjuntos de dados usados para treinar os sistemas.",
    "opcoes": [
      "Selecione uma opção",
      "responsabilidade",
      "imparcialidade",
      "inclusão",
      "transparência"

    ],
    "resposta": 2,
    "explicacao": "O princípio da equidade na IA responsável da Microsoft estabelece que os sistemas de IA devem tratar todas as pessoas de forma justa, sem preconceitos ou discriminação. Isso significa que os conjuntos de dados utilizados para treinar os sistemas não devem conter ou refletir 'compensações' (vieses) que levem a resultados injustos ou discriminatórios.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai?view=azureml-api-2",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 7
  {
    "tipo": "dragdrop",
    "texto": "Faça a correspondência dos tipos de carga de trabalho de IA com os cenários adequados. Para responder, arraste o tipo de carga de trabalho adequado da coluna à esquerda para seu cenário à direita. Cada tipo de carga de trabalho pode ser usado uma vez, mais de uma vez ou pode não ser usado.",
    "itens": [
      { "label": "Informação de documentos" },
      { "label": "Pesquisa visual computacional" },
      { "label": "Mineração de conhecimento" },
      { "label": "Processamento de linguagem natural" }
    ],
    "grupos": [
      "Um chatbot automatizado para responder a perguntas sobre reembolsos e trocas",
      "Determinar se uma foto contém uma pessoa",
      "Determinar se uma avaliação é positiva ou negativa"
    ],
    "respostas": {
      "Um chatbot automatizado para responder a perguntas sobre reembolsos e trocas": ["Processamento de linguagem natural"],
      "Determinar se uma foto contém uma pessoa": ["Pesquisa visual computacional"],
      "Determinar se uma avaliação é positiva ou negativa": ["Processamento de linguagem natural"]
    },
    "explicacao": "Chatbots e a análise de sentimento (determinar se uma avaliação é positiva ou negativa) são aplicações diretas de Processamento de Linguagem Natural (PLN), que lida com a compreensão e geração de linguagem humana. A Pesquisa Visual Computacional é usada para interpretar e compreender o mundo visual, como identificar objetos ou pessoas em imagens. 'Informação de documentos' e 'Mineração de conhecimento' são conceitos mais amplos que podem envolver PLN ou outras técnicas de IA, mas não são as melhores correspondências para os cenários específicos apresentados em comparação com PLN e visão computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/ai-overview#cognitive-services",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 8
  {
    "tipo": "unica",
    "texto": "Você tem um site que inclui avaliações de clientes. Você precisa armazenar as avaliações em inglês e apresentá-las aos usuários no idioma deles reconhecendo a localização geográfica de cada usuário. Que tipo de carga de trabalho de processamento de linguagem natural você deve usar?",
    "opcoes": [
      "tradução",
      "modelagem de idioma",
      "extração de frases-chave",
      "reconhecimento de fala"
    ],
    "resposta": 0,
    "explicacao": "Para apresentar avaliações em inglês no idioma nativo do usuário com base em sua localização geográfica, a carga de trabalho de processamento de linguagem natural mais adequada é a tradução. A modelagem de idioma está relacionada à previsão da próxima palavra ou sequência. A extração de frases-chave identifica os termos mais importantes em um texto. O reconhecimento de fala converte áudio em texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/text-translation/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 9
  {
    "tipo": "multipla",
    "texto": "Você precisa fornecer conteúdo para um chatbot de negócios que ajudará a responder a consultas de usuário simples. Quais são as três formas de criar texto de perguntas e respostas usando as respostas às perguntas do Serviço Linguagem de IA do Azure? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Gerar as perguntas e as respostas de uma página da Web existente.",
      "Inserir manualmente as perguntas e as respostas.",
      "Conectar o bot ao canal da Cortana e fazer perguntas usando a Cortana.",
      "Importar conteúdo de bate-papo de uma fonte de dados predefinida.",
      "Usar o ML Automatizado do Azure Machine Learning para treinar um modelo com base em um arquivo que contenha pares de perguntas e respostas."
    ],
    "respostas": [0, 1, 3],
    "explicacao": "O Serviço Linguagem de IA do Azure (anteriormente QnA Maker) permite criar uma base de conhecimento para chatbots de várias maneiras. Você pode gerar pares de perguntas e respostas a partir de uma página da Web existente (rastreamento de URL), inserir as perguntas e respostas manualmente, ou importar conteúdo de bate-papo de uma fonte de dados predefinida (como um documento PDF ou Word). Conectar o bot à Cortana é uma integração de canal, não uma forma de criar conteúdo. O ML Automatizado do Azure Machine Learning é para treinar modelos de aprendizado de máquina, não especificamente para criar bases de conhecimento de perguntas e respostas para o Serviço Linguagem de IA.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/question-answering/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 10 
  {
    "tipo": "unica",
    "texto": "Você tem o processo mostrado na exibição a seguir. Que tipo de solução de IA é mostrada no diagrama?",
    "imagemUrl": "img/q10.jpg",
    "opcoes": [
      "uma solução de análise de sentimento",
      "um chatbot",
      "um aplicativo de pesquisa visual computacional",
      "um modelo de machine learning"
    ],
    "resposta": 1,
    "explicacao": "O diagrama mostra uma interação entre um usuário que faz uma 'Solicitação' (\"Como posso atualizar meu Banco de Dados de Conhecimento de forma programática?\") e um sistema que fornece uma 'Resposta' baseada em APIs REST para gerenciar um Banco de Dados de Conhecimento. Essa troca de perguntas e respostas é uma característica fundamental de um chatbot, que é projetado para simular conversas humanas e fornecer informações ou realizar tarefas.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 11
  {
    "tipo": "unica",
    "texto": "Você precisa criar uma solução de suporte ao cliente para ajudar os clientes a acessarem informações. A solução deve dar suporte a canais de email, telefone e chat ao vivo. Qual tipo de solução de IA você deve usar?",
    "opcoes": [
      "PNL (processamento de linguagem natural)",
      "aprendizado de máquina",
      "chatbot",
      "pesquisa visual computacional"
    ],
    "resposta": 2,
    "explicacao": "Para uma solução de suporte ao cliente que interage através de email, telefone e chat ao vivo, um chatbot é a solução de IA mais apropriada. Chatbots são projetados para simular conversas humanas e podem ser integrados a vários canais para fornecer respostas automáticas e assistência. Embora PNL seja uma tecnologia subjacente aos chatbots, 'chatbot' descreve a solução completa. Aprendizado de máquina e pesquisa visual computacional são tipos de IA com aplicações mais amplas, mas não se encaixam tão diretamente no cenário de suporte multicanal como um chatbot.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/?view=azure-bot-service-4.0",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 12
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Monitorar avaliações de serviço online em busca de xingamentos ou conteúdo ofensivo é um exemplo de processamento de linguagem natural.",
      "Identificar logotipos de marca em uma imagem é um exemplo de processamento de linguagem natural.",
      "Monitorar sites públicos de notícias em busca de menções negativas sobre um produto é um exemplo de processamento de linguagem natural."
    ],
    "respostas": [true, false, true],
    "explicacao": "1. Monitorar avaliações de serviço online em busca de xingamentos ou conteúdo ofensivo envolve a análise de texto para identificar linguagem inadequada, o que é uma aplicação direta do Processamento de Linguagem Natural (PLN), especificamente análise de sentimento ou detecção de conteúdo tóxico.\n2. Identificar logotipos de marca em uma imagem é uma tarefa de Pesquisa Visual Computacional, pois envolve a análise e reconhecimento de elementos visuais dentro de uma imagem, e não o processamento de texto ou fala.\n3. Monitorar sites públicos de notícias em busca de menções negativas sobre um produto envolve a leitura e interpretação de grandes volumes de texto para extrair informações sobre o sentimento ou a polaridade das menções, o que é uma aplicação de PLN, como a análise de sentimento ou mineração de texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 13
  {
    "tipo": "unica",
    "imagemUrl": "img/q13.jpg",
    "texto": "Você usa o processamento de linguagem natural para processar texto de uma notícia da Microsoft. Você recebe a saída mostrada na exibição a seguir. Que tipo de processamento de linguagem natural foi realizado?",
    "opcoes": [
      "análise de sentimento",
      "extração de frases-chave",
      "tradução",
      "reconhecimento de entidade"
    ],
    "resposta": 3,
    "explicacao": "A saída exibida mostra o texto da notícia com tags como 'PersonType', 'Skill', 'Location', 'Organization' e 'Quantity-Number' associadas a termos específicos no texto. Isso é uma clara indicação de que o processamento de linguagem natural realizado foi o reconhecimento de entidade (também conhecido como Extração de Entidade Nomeada - NER). A análise de sentimento avaliaria a polaridade do texto (positivo/negativo). A extração de frases-chave identificaria os termos ou frases mais importantes. A tradução converteria o texto para outro idioma.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 14
  {
    "tipo": "unica",
    "texto": "Fornecer informações contextuais para melhorar a qualidade das respostas de uma solução de IA generativa é um exemplo de qual técnica de engenharia imediata?",
    "opcoes": [
      "dados de embasamento",
      "fornecimento de exemplos",
      "ajuste fino",
      "mensagem do sistema"
    ],
    "resposta": 0,
    "explicacao": "Na engenharia de prompt para IA generativa, 'dados de embasamento' (ou 'grounding data') refere-se a fornecer ao modelo informações contextuais adicionais para que ele possa gerar respostas mais precisas e relevantes, ancoradas em fatos ou dados específicos. Isso ajuda a evitar alucinações e melhora a qualidade da saída. O fornecimento de exemplos é uma técnica de poucos-disparos (few-shot learning). Ajuste fino (fine-tuning) é um processo de treinamento do modelo em um conjunto de dados específico. Mensagem do sistema é uma parte da estrutura do prompt que define o comportamento geral do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/prompt-engineering",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 15
  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo de Compreensão da Linguagem Coloquial para dar suporte a um festival de música. Você quer que os usuários consigam fazer perguntas sobre os shows agendados, como: 'Quem está se apresentando no palco principal?' A pergunta 'Quem está se apresentando no palco principal?' é um exemplo de que tipo de elemento?",
    "opcoes": [
      "uma intenção",
      "um enunciado",
      "um domínio",
      "uma entidade"
    ],
    "resposta": 1,
    "explicacao": "Em sistemas de Compreensão da Linguagem Natural (NLU), um 'enunciado' (ou 'utterance') é a entrada de texto real fornecida pelo usuário, como uma pergunta ou comando. Uma 'intenção' é o objetivo ou a ação que o usuário deseja realizar com base no enunciado (por exemplo, 'ObterInformacoesDoShow'). Uma 'entidade' é uma informação específica dentro do enunciado que ajuda a cumprir a intenção (ex: 'palco principal'). Um 'domínio' agrupa intenções e entidades relacionadas a um tópico.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/luis/luis-concept-utterance",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 16
  {
    "tipo": "unica",
    "texto": "Que ação pode ser realizada ao usar-se o serviço Visão de IA do Azure?",
    "opcoes": [
      "extrair dados de cartas manuscritas",
      "criar miniaturas para vídeos de treinamento",
      "identificar raças de animais em streamings de vídeos ao vivo",
      "extrair frases-chave de documentos"
    ],
    "resposta": 2,
    "explicacao": "O serviço Visão de IA do Azure (Azure AI Vision) é projetado para processar e analisar imagens e vídeos. Identificar raças de animais em streamings de vídeos ao vivo é uma funcionalidade de detecção e reconhecimento de objetos em tempo real, que se enquadra nas capacidades da Visão de IA. Extrair dados de cartas manuscritas é uma função de Reconhecimento Óptico de Caracteres (OCR) geralmente associada a serviços de Processamento de Documentos ou Form Recognizer. Criar miniaturas para vídeos é uma tarefa de processamento de mídia, não diretamente uma função de IA de visão. Extrair frases-chave de documentos é uma funcionalidade de Processamento de Linguagem Natural (PLN).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 17
  {
    "tipo": "dragdrop",
    "texto": "Relacione a solução de IA às tarefas apropriadas. Para responder, arraste a solução de IA apropriada da coluna à esquerda até a tarefa à direita. Cada solução pode ser usada uma vez, mais de uma vez ou pode não ser usada.",
    "itens": [
      { "label": "Pesquisa visual computacional" },
      { "label": "IA generativa" },
      { "label": "Mineração de conhecimento" },
      { "label": "Processamento de linguagem natural" }
    ],
    "grupos": [
      "Criar postagens de mídia social com base em palavras-chave",
      "Extrair palavras-chave de postagens de mídia social",
      "Extrair texto de documentos digitalizados"
    ],
    "respostas": {
      "Criar postagens de mídia social com base em palavras-chave": ["IA generativa"],
      "Extrair palavras-chave de postagens de mídia social": ["Processamento de linguagem natural"],
      "Extrair texto de documentos digitalizados": ["Mineração de conhecimento"]
    },
    "explicacao": "1. 'Criar postagens de mídia social com base em palavras-chave' é uma tarefa de geração de conteúdo, que é uma funcionalidade principal da IA generativa, como modelos de linguagem grandes que podem criar texto criativo e coerente a partir de prompts ou palavras-chave.\n2. 'Extrair palavras-chave de postagens de mídia social' é uma aplicação típica de Processamento de Linguagem Natural (PLN), onde algoritmos analisam o texto para identificar os termos mais relevantes.\n3. 'Extrair texto de documentos digitalizados' é uma função de mineração de conhecimento, que frequentemente envolve o Reconhecimento Óptico de Caracteres (OCR) para converter imagens de texto em texto editável, e depois processamento para extrair informações. Embora OCR seja uma técnica de visão computacional, a extração de texto estruturado e o reconhecimento de entidades para 'minerar' conhecimento de documentos se encaixam melhor na categoria mais ampla de mineração de conhecimento.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/what-are-ai-services",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 18
  {
    "tipo": "unica",
    "texto": "Você tem um modelo do Azure Machine Learning que gera uma grande quantidade de falsos negativos. Você precisa reduzir o número de falsos negativos sem treinar novamente o modelo. O que você deve fazer?",
    "opcoes": [
      "Aumentar o número de iterações de treinamento.",
      "Aumentar o volume de dados de treinamento.",
      "Ajustar o valor limite.",
      "Usar outro modelo de Machine Learning."
    ],
    "resposta": 2,
    "explicacao": "Falsos negativos ocorrem quando o modelo erra ao prever uma classe positiva como negativa. Sem retreinar o modelo, a forma mais eficaz de reduzir falsos negativos é ajustar o valor limite (threshold) de classificação. Ao diminuir o valor limite, o modelo se torna mais sensível às previsões positivas, aumentando a taxa de verdadeiros positivos e, consequentemente, diminuindo os falsos negativos, embora isso possa, em contrapartida, aumentar os falsos positivos. As outras opções (aumentar iterações ou volume de dados, ou usar outro modelo) exigiriam um retreinamento ou a troca do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai-dashboard?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 19
  {
    "tipo": "multipla",
    "texto": "Quais são os três estágios em um modelo de transformador? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "previsão do próximo token",
      "cálculo de incorporação",
      "anonimização",
      "detecção de objetos",
      "geração de tokens"
    ],
    "respostas": [0, 1, 4],
    "explicacao": "Em um modelo de transformador, o processo geralmente envolve a 'geração de tokens' (tokenização) da entrada, o 'cálculo de incorporação' (embeddings) para representar esses tokens em um espaço vetorial, e a 'previsão do próximo token' como parte da sua capacidade generativa para tarefas como tradução ou geração de texto. Anonimização e detecção de objetos não são estágios diretos de um modelo de transformador.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/ai-overview#deep-learning-and-neural-networks",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 20
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> para o Microsoft Visual Studio Code usa o modelo OpenAI Codex.",
    "opcoes": [
      "Selecione uma opção",
      "A extensão do GitHub Copilot",
      "A extensão do controle do código-fonte do GitHub",
      "A extensão do IntelliSense",
      "A extensão do Microsoft 365 Copilot"
    ],
    "resposta": 1,
    "explicacao": "O GitHub Copilot é uma ferramenta de programação assistida por IA que se integra ao Visual Studio Code e utiliza o modelo OpenAI Codex para gerar sugestões de código. As outras opções são extensões do VS Code com diferentes propósitos (controle de código-fonte, preenchimento inteligente de código) ou um produto Copilot diferente (Microsoft 365 Copilot) que não se aplica ao contexto de assistente de codificação diretamente no VS Code com o modelo Codex.",
    "link": "https://learn.microsoft.com/pt-br/azure/developer/github-copilot-azure/get-started",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 21
  {
    "tipo": "unica",
    "texto": "O que pode ser usado para completar um parágrafo baseado em uma frase fornecida por um usuário?",
    "opcoes": [
      "Linguagem de IA do Azure",
      "OpenAI do Azure",
      "Azure Machine Learning",
      "Visão de IA do Azure"
    ],
    "resposta": 1,
    "explicacao": "Para completar um parágrafo baseado em uma frase fornecida por um usuário, o serviço mais adequado é o OpenAI do Azure. Ele oferece acesso a modelos de linguagem avançados (como GPT-3, GPT-4) capazes de gerar texto coerente e contextualizado, o que é ideal para completar frases ou parágrafos. A Linguagem de IA do Azure foca em tarefas como tradução, análise de sentimento e reconhecimento de entidades. O Azure Machine Learning é uma plataforma para construir, treinar e implantar modelos de ML. A Visão de IA do Azure é para análise de imagens e vídeos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 22
  {
    "tipo": "unica",
    "texto": "Você precisa gerar desenhos animados para uso em um folheto publicitário. Cada desenho animado será baseado em uma descrição de texto. Qual modelo do OpenAI do Azure você deve usar?",
    "opcoes": [
      "GPT-4",
      "DALL-E",
      "Whisper",
      "GPT-3.5"
    ],
    "resposta": 1,
    "explicacao": "Para gerar desenhos animados (imagens) a partir de descrições de texto, o modelo adequado é o DALL-E. O DALL-E é um modelo de IA generativa especializado na criação de imagens a partir de prompts textuais. GPT-4 e GPT-3.5 são modelos de linguagem para geração de texto. Whisper é um modelo para reconhecimento de fala.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 23
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir.",
    "afirmacoes": [
      "Você pode ajustar alguns modelos do OpenAI do Azure usando seus próprios dados.",
      "Os modelos de IA generativa pré-treinados são um componente do OpenAI do Azure.",
      "Para criar uma solução que cumpra os princípios de IA responsável da Microsoft, você deve criar e treinar seu próprio modelo."
    ],
    "respostas": [true, true, false],
    "explicacao": "1. Você pode ajustar modelos do OpenAI do Azure (fine-tuning) com seus próprios dados para adaptá-los a casos de uso específicos ou para melhorar o desempenho em tarefas particulares.\n2. O OpenAI do Azure oferece acesso a modelos de IA generativa pré-treinados, como GPT-3, GPT-4 e DALL-E, que são a base para construir soluções de IA generativa.\n3. Para criar uma solução que cumpra os princípios de IA responsável da Microsoft, você não necessariamente precisa criar e treinar seu próprio modelo do zero. Os princípios de IA responsável devem ser aplicados em todo o ciclo de vida do desenvolvimento da IA, independentemente de você usar modelos pré-existentes, serviços de IA ou construir seus próprios modelos. O foco está na aplicação das diretrizes (equidade, confiabilidade e segurança, privacidade e segurança, inclusão, transparência e responsabilidade), e não na origem do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/tutorials/fine-tune?tabs=command-line",
    "dominio": "Descrever os recursos de cargas de trabalho de IA generativas no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 24
  {
    "tipo": "dragdrop",
    "texto": "Faça a correspondência das tarefas com os modelos de aprendizagem de máquina apropriados. Para responder, arraste o modelo apropriado da coluna à esquerda até seu cenário à direita. Cada modelo pode ser usado uma vez, mais de uma vez ou nenhum.",
    "itens": [
      { "label": "Classificação" },
      { "label": "Clustering" },
      { "label": "Regressão" }
    ],
    "grupos": [
      "Atribuir categorias aos passageiros com base nos dados demográficos.",
      "Prever a quantidade de combustível consumida com base na distância do voo.",
      "Prever se um passageiro perderá seu voo com base nos dados demográficos."
    ],
    "respostas": {
      "Atribuir categorias aos passageiros com base nos dados demográficos.": ["Classificação"],
      "Prever a quantidade de combustível consumida com base na distância do voo.": ["Regressão"],
      "Prever se um passageiro perderá seu voo com base nos dados demográficos.": ["Classificação"]
    },
    "explicacao": "1. 'Atribuir categorias aos passageiros com base nos dados demográficos' é uma tarefa de Classificação, pois envolve a atribuição de rótulos discretos (categorias) a entradas.\n2. 'Prever a quantidade de combustível consumida com base na distância do voo' é uma tarefa de Regressão, pois o objetivo é prever um valor numérico contínuo (quantidade de combustível).\n3. 'Prever se um passageiro perderá seu voo com base nos dados demográficos' é uma tarefa de Classificação, pois o resultado é uma categoria binária (sim/não ou perderá/não perderá).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/overview-what-is-azure-machine-learning?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 25
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Uma solução de <combobox> pode ser usada para extrair dados de faturas digitalizadas.",
    "opcoes": [
      "Selecione uma opção",
      "informação de documentos",
      "IA generativa",
      "mineração de conhecimento",
      "processamento de linguagem natural"
    ],
    "resposta": 1,
    "explicacao": "Para extrair dados de faturas digitalizadas (que são documentos), a 'informação de documentos' é o tipo de solução mais direto e abrangente. Isso geralmente envolve o uso de serviços como o Azure AI Document Intelligence (anteriormente Form Recognizer), que usa modelos de aprendizado de máquina para extrair dados de documentos estruturados e semiestruturados. Embora possa envolver técnicas de PLN e, em um sentido mais amplo, faça parte da mineração de conhecimento, 'informação de documentos' é o termo mais específico para essa tarefa de extração de dados de documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-b1"
  },
  // QUESTÃO 26
  {
    "tipo": "multipla",
    "texto": "Em quais dois cenários você pode usar o serviço de IA do Azure para Informação de Documentos (antigo Reconhecimento de Formulários)? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Encontrar imagens de produtos em um catálogo.",
      "Traduzir um formulário do francês para o inglês.",
      "Identificar o varejista em um recibo.",
      "Extrair o número da fatura de uma fatura."
    ],
    "respostas": [2, 3],
    "explicacao": "O serviço de IA do Azure para Informação de Documentos é projetado para extrair dados estruturados de documentos, como recibos e faturas. Ele pode identificar campos como o nome do varejista (alternativa C) e o número da fatura (alternativa D). Já a tradução (B) está relacionada ao Azure Translator, e a busca por imagens (A) não está relacionada ao reconhecimento de documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 27
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A detecção de objetos pode identificar o local de um objeto danificado em uma imagem.",
      "A detecção de objetos pode identificar várias instâncias de um objeto danificado em uma imagem.",
      "A detecção de objetos pode identificar vários tipos de produtos danificados em uma imagem."
    ],
    "respostas": [true, true, true],
    "explicacao": "A detecção de objetos com IA pode identificar o local (bounding box) de objetos, mesmo que estejam danificados. Além disso, ela é capaz de detectar múltiplas instâncias de objetos semelhantes e pode ser treinada para reconhecer diferentes categorias de objetos, inclusive produtos danificados.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 28
  {
    "tipo": "combobox",
    "texto": "<combobox> é usado(a) para identificar e localizar vários tipos de item em uma imagem.",
    "opcoes": [
      "Escolha uma opção",
      "Classificação de imagens",
      "Descrição da imagem",
      "Detecção de objetos",
      "OCR (reconhecimento óptico de caracteres)"
    ],
    "resposta": 3,
    "explicacao": "A detecção de objetos é utilizada para identificar e localizar visualmente múltiplos itens dentro de uma imagem, atribuindo rótulos e delimitando cada objeto com coordenadas. Esse tipo de tarefa é diferente da classificação de imagens, que apenas rotula a imagem inteira. A detecção de objetos é um dos principais recursos oferecidos por serviços como o Azure Custom Vision.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 29
  {
    "tipo": "combobox",
    "texto": "Você pode usar o serviço <combobox> para treinar um modelo de detecção de objetos usando suas próprias imagens.",
    "opcoes": [
      "Escolha uma opção",
      "Visão de IA do Azure",
      "Visão Personalizada de IA do Azure",
      "IA do Azure para Informação de Documentos"
    ],
    "resposta": 2,
    "explicacao": "O serviço Visão Personalizada de IA do Azure (Custom Vision) permite que você treine seus próprios modelos de classificação e detecção de objetos com imagens personalizadas. Diferentemente dos modelos pré-treinados, o Custom Vision oferece controle completo sobre o conteúdo do treinamento, permitindo adaptar o modelo a cenários específicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 30
  {
    "tipo": "unica",
    "texto": "Você está criando uma ferramenta que processará imagens de lojas de varejo e identificará os produtos de concorrentes. A solução deve ser treinada em imagens fornecidas pela sua empresa. Qual serviço da IA do Azure você deve usar?",
    "opcoes": [
      "Visão de IA do Azure",
      "IA do Azure para Informação de Documentos",
      "Visão Personalizada de IA do Azure",
      "Detecção Facial"
    ],
    "resposta": 2,
    "explicacao": "A Visão Personalizada de IA do Azure (Custom Vision) é a escolha correta porque permite treinar modelos personalizados com imagens fornecidas pela empresa. Isso é ideal para identificar produtos específicos em um ambiente de varejo, adaptando o modelo a objetos e características únicas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 31
  {
    "tipo": "unica",
    "texto": "Qual recurso da Visão de IA do Azure você pode usar para gerar legendas automáticas para fotografias digitais?",
    "opcoes": [
      "Descrever as imagens",
      "Identificar as áreas de interesse",
      "Reconhecer texto",
      "Detectar objetos"
    ],
    "resposta": 0,
    "explicacao": "O recurso 'Descrever as imagens' da Visão de IA do Azure utiliza técnicas de análise de imagem para gerar automaticamente descrições em linguagem natural do conteúdo visual. Essa funcionalidade é especialmente útil para gerar legendas automáticas e melhorar a acessibilidade de imagens digitais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-image-analysis?tabs=4-0",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 32
  {
    "tipo": "unica",
    "texto": "Você precisa determinar a localização de carros em uma imagem para que possa estimar a distância entre eles. Que tipo de pesquisa visual computacional você deve usar?",
    "opcoes": [
      "Detecção de objetos",
      "Classificação de imagens",
      "Detecção facial",
      "OCR (reconhecimento óptico de caracteres)"
    ],
    "resposta": 0,
    "explicacao": "A detecção de objetos é usada para localizar a posição de itens específicos dentro de uma imagem, como os carros neste caso. Essa técnica permite delimitar cada carro com uma caixa delimitadora (bounding box), o que é essencial para estimar distâncias entre objetos visuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 33
  {
    "tipo": "combobox",
    "texto": "Uma solução de IA que ajuda os fotógrafos a tirarem fotos de rosto melhores ao fornecer comentários sobre exposição, ruído e oclusão é exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Análise do rosto",
      "Detecção do rosto",
      "Reconhecimento do rosto"
    ],
    "resposta": 1,
    "explicacao": "A análise do rosto (face analysis) refere-se à avaliação de atributos como qualidade da imagem, exposição, ruído, oclusão, idade estimada, entre outros. Ela não envolve identificar quem é a pessoa (reconhecimento) nem apenas localizar o rosto (detecção), mas sim fornecer feedback útil sobre a imagem facial.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-identity",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 34
  {
    "tipo": "simnao",
    "texto": "Você tem um modelo do Azure Machine Learning que prevê a qualidade do produto. O modelo tem um conjunto de dados de treinamento com 50.000 registros. Uma amostra dos dados é mostrada na tabela a seguir.\n\nPara cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "imagemUrl": "img/imgq11.png",
    "afirmacoes": [
      "Massa (kg) é um recurso.",
      "Teste de Qualidade é um rótulo.",
      "Temperatura (C) é um rótulo."
    ],
    "respostas": [true, true, false],
    "explicacao": "Em aprendizado supervisionado, os 'recursos' (features) são os dados de entrada usados para treinar o modelo, e o 'rótulo' (label) é o valor a ser previsto. No exemplo apresentado, 'Massa (kg)' e 'Temperatura (C)' são recursos, enquanto 'Teste de Qualidade' é o rótulo, pois é o que o modelo está sendo treinado para prever.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 35
  {
    "tipo": "unica",
    "texto": "Você precisa prever o tamanho da população de uma espécie específica de animal de uma área. Que tipo de Azure Machine Learning você deve usar?",
    "opcoes": [
      "Regressão",
      "Classificação",
      "Clustering"
    ],
    "resposta": 0,
    "explicacao": "A tarefa de prever um valor numérico contínuo, como o tamanho de uma população, é resolvida com algoritmos de regressão. Esse tipo de modelo aprende padrões em dados históricos para estimar quantidades futuras.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#algoritmos-suportados",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 36
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O designer do Azure Machine Learning fornece uma tela visual de arrastar e soltar para criar, testar e implantar modelos de machine learning.",
      "O designer do Azure Machine Learning permite que você salve seu progresso como um rascunho de pipeline.",
      "O designer do Azure Machine Learning permite que você inclua funções JavaScript personalizadas."
    ],
    "respostas": [true, true, false],
    "explicacao": "O Azure Machine Learning Designer é uma ferramenta de interface visual baseada em drag-and-drop para criar pipelines de machine learning. Ele permite salvar o progresso como rascunhos e facilita o teste e a implantação de modelos. No entanto, ele não suporta o uso de funções JavaScript personalizadas – os scripts personalizados são geralmente escritos em Python.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 37
  {
    "tipo": "combobox",
    "texto": "Um sistema bancário que prevê se um empréstimo será pago é exemplo de tipo de <combobox> de machine learning.",
    "opcoes": [
      "Escolha uma opção",
      "Classificação",
      "Clustering",
      "Regressão"
    ],
    "resposta": 1,
    "explicacao": "O problema de prever se um empréstimo será pago envolve uma decisão binária (por exemplo, 'sim' ou 'não'), o que caracteriza um problema de classificação. Modelos de classificação são usados quando as saídas são categorias discretas.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#algoritmos-suportados",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 38
  {
    "tipo": "multipla",
    "texto": "Você usa o designer do Azure Machine Learning para publicar um pipeline de inferência.\nQuais são os dois parâmetros que você deve usar para acessar o serviço Web? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "O ponto de extremidade de treinamento",
      "A chave de autenticação",
      "O nome do modelo",
      "O ponto de extremidade REST"
    ],
    "respostas": [1, 3],
    "explicacao": "Para acessar um pipeline de inferência publicado como um serviço Web no Azure Machine Learning, você precisa do ponto de extremidade REST (endpoint) e da chave de autenticação (key). O nome do modelo e o ponto de treinamento não são utilizados diretamente na chamada do serviço Web.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/how-to-deploy-and-where",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 39
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você treina um modelo de regressão usando dados não rotulados.",
      "A técnica de classificação é usada para prever valores numéricos sequenciais ao longo do tempo.",
      "Agrupar itens por suas características comuns é um exemplo de clustering."
    ],
    "respostas": [false, false, true],
    "explicacao": "Modelos de regressão são treinados com dados rotulados para prever valores contínuos. Classificação também exige dados rotulados, mas prevê categorias, e não valores numéricos contínuos ou séries temporais. Já o clustering é uma técnica de aprendizado não supervisionado usada para agrupar dados com base em similaridades.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#algoritmos-suportados",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 40
  {
    "tipo": "multipla",
    "texto": "Você precisa prever a faixa de renda de um determinado cliente usando o conjunto de dados a seguir.\n\nQuais são os dois campos que você deve usar como recursos? Cada resposta correta apresenta uma solução completa.",
    "imagemUrl": "img/imgq47.png",
    "opcoes": [
      "Último Nome",
      "Idade",
      "Faixa de Renda",
      "Nível Educacional",
      "Nome"
    ],
    "respostas": [1, 3],
    "explicacao": "Em problemas de aprendizado supervisionado, os 'recursos' (features) são os dados de entrada usados para prever um valor. Neste caso, queremos prever o 'Intervalo de Renda' (rótulo), portanto ele não é um recurso. 'Idade' e 'Nível de Escolaridade' são atributos relevantes que influenciam na renda e, por isso, devem ser usados como recursos. Nome e sobrenome não têm valor preditivo útil.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 41
  {
    "tipo": "combobox",
    "texto": "Em um modelo de Machine Learning, os conjuntos de valores de dados usados como entrada são chamados de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Recursos",
      "Funções",
      "Rótulos",
      "Instâncias"
    ],
    "resposta": 1,
    "explicacao": "Em Machine Learning, os dados de entrada utilizados para treinar um modelo são chamados de 'recursos' (features). Eles representam as características observáveis que o modelo utilizará para aprender padrões e realizar previsões.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#terminologia-importante",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 42
  {
    "tipo": "unica",
    "texto": "Que tipo de machine learning você deve usar para identificar grupos de pessoas com hábitos de compra semelhantes?",
    "opcoes": [
      "Classificação",
      "Clustering",
      "Regressão"
    ],
    "resposta": 1,
    "explicacao": "O clustering é uma técnica de aprendizado não supervisionado usada para agrupar dados com características semelhantes. Neste caso, identificar grupos de consumidores com hábitos de compra parecidos é um exemplo clássico de aplicação de clustering.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#algoritmos-suportados",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 43
  {
    "tipo": "dragdrop",
    "texto": "Você planeja aplicar recursos da API do serviço Linguagem de IA do Azure a um sistema de emissão de tíquetes de suporte técnico. Faça a correspondência dos recursos da API com os cenários adequados de processamento de linguagem natural.",
    "itens": [
      { "label": "Reconhecimento de entidade" },
      { "label": "Extração de frases-chave" },
      { "label": "Análise de sentimento" }
    ],
    "grupos": [
      "Extrair datas principais do tíquete de suporte.",
      "Resumir informações importantes do tíquete de suporte.",
      "Compreender o quanto um cliente está chateado com base no texto contido no tíquete de suporte."
    ],
    "respostas": {
      "Extrair datas principais do tíquete de suporte.": ["Reconhecimento de entidade"],
      "Resumir informações importantes do tíquete de suporte.": ["Extração de frases-chave"],
      "Compreender o quanto um cliente está chateado com base no texto contido no tíquete de suporte.": ["Análise de sentimento"]
    },
    "explicacao": "O Reconhecimento de entidade identifica dados estruturados como datas em textos. A Extração de frases-chave resume automaticamente os conceitos principais de um documento. A Análise de sentimento detecta a emoção expressa, permitindo medir o nível de frustração do cliente com base no conteúdo textual.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-b1"
  },
  // QUESTÃO 44
  {
    "tipo": "multipla",
    "texto": "Quais são as duas ações que você pode executar usando o modelo DALL·E OpenAI do Azure? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Criar imagens.",
      "Modificar imagens.",
      "Gerar legendas para imagens.",
      "Detectar objetos em imagens.",
      "Usar OCR (reconhecimento óptico de caracteres)."
    ],
    "respostas": [0, 1],
    "explicacao": "O modelo DALL·E da OpenAI, disponível no Azure OpenAI Service, permite gerar imagens a partir de descrições textuais (text-to-image) e modificar imagens existentes por meio de edições guiadas por texto (inpainting). Ele não realiza OCR, detecção de objetos ou geração de legendas, que são funcionalidades oferecidas por outros serviços como o Azure Computer Vision.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/dall-e-quickstart?tabs=command-line%2Ckeyless%2Ctypescript-keyless&pivots=programming-language-studio",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-b1"
  }



];
