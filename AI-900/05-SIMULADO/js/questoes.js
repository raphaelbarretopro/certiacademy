// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [

  //--Rodrigo 83~124
  {
    "tipo": "combobox",
    "texto": "Você pode usar o serviço <combobox> para treinar um modelo de detecção de objetos usando suas próprias imagens.",
    "opcoes": [
      "Selecione uma resposta",
      "Computer Vision",
      "Custom Vision",
      "Form Recognizer",
      "Video Indexer"
    ],
    "resposta": 2,
    "explicacao": "O serviço Custom Vision permite que os usuários treinem modelos personalizados de classificação de imagens e detecção de objetos usando suas próprias imagens rotuladas. É ideal para cenários em que modelos pré-treinados do Azure não atendem às necessidades específicas de um caso de uso.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/home",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você envia uma imagem para a API de Visão Computacional e recebe de volta a imagem anotada mostrada na figura. Qual tipo de visão computacional foi utilizado?",
    "imagemUrl": "img/imgq84.png",
    "opcoes": [
      "Detecção de objetos",
      "Detecção facial",
      "Reconhecimento óptico de caracteres (OCR)",
      "Classificação de imagem"
    ],
    "resposta": 0,
    "explicacao": "A detecção de objetos é utilizada para identificar e localizar múltiplos objetos em uma imagem, como mostrado na imagem anotada, onde frutas específicas foram detectadas com caixas delimitadoras e percentuais de confiança.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/computer-vision/concept-object-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Quais são duas tarefas que podem ser realizadas usando o serviço Computer Vision? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Treinar um modelo de classificação de imagem personalizado.",
      "Detectar rostos em uma imagem.",
      "Reconhecer texto manuscrito.",
      "Traduzir o texto em uma imagem entre idiomas."
    ],
    "respostas": [1, 2],
    "explicacao": "O serviço Computer Vision permite detectar rostos e reconhecer texto manuscrito em imagens por meio de OCR (Reconhecimento Óptico de Caracteres). Treinar modelos personalizados é função do Custom Vision, e a tradução de texto pertence ao serviço Translator.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Qual é um caso de uso para classificação?",
    "opcoes": [
      "Prever quantas xícaras de café uma pessoa vai beber com base em quantas horas ela dormiu na noite anterior.",
      "Analisar o conteúdo de imagens e agrupar imagens com cores semelhantes.",
      "Prever se alguém usa uma bicicleta para ir ao trabalho com base na distância de casa até o trabalho.",
      "Prever quantos minutos alguém levará para correr uma corrida com base em tempos anteriores."
    ],
    "resposta": 2,
    "explicacao": "Classificação é usada para prever categorias ou classes discretas. Prever se uma pessoa utiliza bicicleta ou não é um exemplo de classificação binária, pois o resultado pertence a uma entre duas classes possíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#classification",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Quais são duas tarefas que podem ser realizadas usando visão computacional? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Prever preços de ações.",
      "Detectar marcas em uma imagem.",
      "Detectar o esquema de cores em uma imagem.",
      "Traduzir texto entre idiomas.",
      "Extrair frases-chave."
    ],
    "respostas": [1, 2],
    "explicacao": "A visão computacional permite detectar marcas e identificar esquemas de cores em imagens. Previsão de preços de ações e extração de frases-chave estão relacionadas a análise de dados e processamento de linguagem natural. Tradução de texto é feita pelo serviço Translator.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você precisa criar uma solução de marcação de imagem para redes sociais que marque automaticamente imagens dos seus amigos. Qual serviço do Azure Cognitive Services você deve usar?",
    "opcoes": [
      "Face",
      "Form Recognizer",
      "Text Analytics",
      "Computer Vision"
    ],
    "resposta": 0,
    "explicacao": "O serviço Face do Azure é usado especificamente para detecção, reconhecimento e identificação de rostos humanos em imagens, sendo ideal para marcar amigos automaticamente em redes sociais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-identity",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Em quais dois cenários você pode usar o serviço Form Recognizer? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Identificar o varejista em um recibo.",
      "Traduzir do francês para o inglês.",
      "Extrair o número da fatura de uma nota fiscal.",
      "Encontrar imagens de produtos em um catálogo."
    ],
    "respostas": [0, 2],
    "explicacao": "O Form Recognizer é utilizado para extrair informações estruturadas de documentos, como recibos e faturas. Identificar o nome do varejista e extrair números de fatura são exemplos de uso comuns desse serviço. Tradução de idiomas é responsabilidade do Translator e a identificação de imagens está relacionada à Visão Computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "dragdrop",
    "texto": "Associe as tarefas de reconhecimento facial às perguntas apropriadas.",
    "itens": [
      { "label": "agrupamento" },
      { "label": "identificação" },
      { "label": "semelhança" },
      { "label": "verificação" }
    ],
    "grupos": [
      "As duas imagens de um rosto pertencem à mesma pessoa?",
      "Essa pessoa se parece com outras pessoas?",
      "Quem é essa pessoa neste grupo de pessoas?"
    ],
    "respostas": {
      "As duas imagens de um rosto pertencem à mesma pessoa?": ["verificação"],
      "Essa pessoa se parece com outras pessoas?": ["semelhança"],
      "Quem é essa pessoa neste grupo de pessoas?": ["identificação"]
    },
    "explicacao": "Verificação é usada para confirmar se duas imagens pertencem à mesma pessoa. Semelhança analisa a aparência para determinar correspondência visual entre indivíduos. Identificação localiza e nomeia uma pessoa dentro de um grupo com base em características faciais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-face-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Qual recurso de Visão Computacional você pode usar para gerar legendas automáticas para fotografias digitais?",
    "opcoes": [
      "Reconhecer texto.",
      "Identificar as áreas de interesse.",
      "Detectar objetos.",
      "Descrever as imagens."
    ],
    "resposta": 3,
    "explicacao": "O recurso 'Descrever as imagens' da API de Visão Computacional do Azure analisa o conteúdo visual de uma imagem e gera automaticamente uma legenda com base na interpretação do conteúdo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Qual serviço você deve usar para extrair texto, pares chave/valor e dados de tabelas automaticamente a partir de documentos digitalizados?",
    "opcoes": [
      "Visão Personalizada (Custom Vision).",
      "Face.",
      "Reconhecedor de Formulários (Form Recognizer).",
      "Idioma (Language)."
    ],
    "resposta": 2,
    "explicacao": "O Azure Form Recognizer é um serviço projetado para extrair automaticamente informações estruturadas, como texto, pares chave/valor e dados tabulares, a partir de documentos digitalizados, facilitando a automação de processos baseados em documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview?view=doc-intel-4.0.0",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase: <combobox> extrai texto de documentos manuscritos.",
    "opcoes": [
      "Selecione uma resposta",
      "Detecção de objetos",
      "Reconhecimento facial",
      "Classificação de imagens",
      "Reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 4,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é usado para extrair texto de imagens, incluindo documentos manuscritos, digitalizados ou fotografados, sendo amplamente utilizado em soluções de digitalização automatizada.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma solução que usa o serviço Text Analytics. Você precisa identificar os principais pontos abordados em uma coleção de documentos. Qual tipo de processamento de linguagem natural (NLP) você deve usar?",
    "opcoes": [
      "Reconhecimento de entidades",
      "Extração de frases-chave",
      "Análise de sentimento",
      "Detecção de idioma"
    ],
    "resposta": 1,
    "explicacao": "A extração de frases-chave é uma técnica de NLP usada para identificar os pontos principais em um texto, facilitando a compreensão do conteúdo essencial de documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/key-phrase-extraction/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Em quais dois cenários você pode usar o reconhecimento de fala? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Um sistema automotivo que lê mensagens de texto em voz alta",
      "Fornecer legendas ocultas para vídeos gravados ou ao vivo",
      "Criar um sistema automatizado de endereços públicos para uma estação de trem",
      "Criar uma transcrição de uma chamada telefônica ou reunião"
    ],
    "respostas": [1, 3],
    "explicacao": "O reconhecimento de fala é usado para converter áudio em texto. Isso é útil para criar legendas automáticas (como em vídeos ao vivo ou gravados) e transcrições de chamadas ou reuniões. Já sistemas que apenas leem mensagens em voz alta utilizam síntese de fala, e sistemas de anúncio automático geralmente usam texto pré-definido convertido em áudio, não reconhecimento de fala.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "combobox",
    "texto": "Durante uma apresentação em uma conferência, sua sessão é transcrita em legendas para o público. Isso é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Análise de sentimento",
      "Reconhecimento de fala",
      "Síntese de fala",
      "Tradução"
    ],
    "resposta": 2,
    "explicacao": "A transcrição de fala em texto, como no caso de geração de legendas em tempo real, é uma aplicação de reconhecimento de fala, que converte áudio em texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você precisa criar um aplicativo que leia instruções de receitas em voz alta para dar suporte a usuários com visão reduzida. Qual serviço de voz você deve usar?",
    "opcoes": [
      "Análise de Texto",
      "Tradutor",
      "Fala",
      "Compreensão de Linguagem (LUIS)"
    ],
    "resposta": 2,
    "explicacao": "O serviço de Fala (Speech) do Azure permite converter texto em fala, o que é ideal para criar aplicativos que leem informações em voz alta para usuários com deficiência visual.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode usar o serviço de Fala (Speech) para transcrever uma chamada em texto.",
      "Você pode usar o serviço de Análise de Texto (Text Analytics) para extrair entidades-chave de uma transcrição de chamada.",
      "Você pode usar o serviço de Fala (Speech) para traduzir o áudio de uma chamada para outro idioma."
    ],
    "respostas": [true, true, true],
    "explicacao": "O serviço de Fala permite transcrever áudios em texto e realizar tradução de fala em tempo real. O serviço de Análise de Texto pode ser usado para extrair entidades-chave de textos, como transcrições de chamadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/search/search-indexer-overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Seu site possui um chatbot para ajudar os clientes. Você precisa detectar quando um cliente está irritado com base no que ele digita no chatbot. Qual tipo de carga de trabalho de IA você deve usar?",
    "opcoes": [
      "Detecção de anomalias",
      "Visão computacional",
      "Regressão",
      "Processamento de linguagem natural"
    ],
    "resposta": 3,
    "explicacao": "O Processamento de Linguagem Natural (PLN) permite que sistemas analisem e compreendam textos digitados por usuários, o que é essencial para identificar sentimentos como frustração ou insatisfação em mensagens de chat.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Você planeja desenvolver um bot que permitirá aos usuários consultar uma base de conhecimento usando processamento de linguagem natural. Quais dois serviços você deve incluir na solução? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "QnA Maker",
      "Azure Bot Service",
      "Form Recognizer",
      "Detecção de Anomalias"
    ],
    "respostas": [0, 1],
    "explicacao": "O QnA Maker é usado para criar uma base de conhecimento acessível por meio de perguntas em linguagem natural. O Azure Bot Service é a plataforma que hospeda e executa o bot, permitindo a interação com os usuários.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Em quais dois cenários você pode usar uma solução de síntese de fala? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Uma voz automatizada que repete um número de cartão de crédito inserido em um telefone usando um teclado numérico",
      "Gerar legendas ao vivo para uma transmissão de notícias",
      "Extrair frases-chave da gravação de áudio de uma reunião",
      "Um personagem de IA em um jogo de computador que fala audivelmente com um jogador"
    ],
    "respostas": [0, 3],
    "explicacao": "A síntese de fala converte texto em fala audível. Isso é utilizado em sistemas automatizados de resposta por voz, como ao ler números de cartão, e em personagens de IA que precisam se comunicar verbalmente com os usuários.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/text-to-speech",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "simnao",
    "texto": "Você pode usar o serviço Translator para realizar as seguintes ações:",
    "afirmacoes": [
      "Traduzir texto entre idiomas.",
      "Detectar o idioma de um determinado texto.",
      "Transcrever fala audível em texto."
    ],
    "respostas": [true, true, false],
    "explicacao": "O serviço Translator permite traduzir textos entre idiomas e detectar automaticamente o idioma de um texto de entrada. No entanto, a transcrição de fala audível em texto é uma funcionalidade fornecida pelo serviço Speech to Text, não pelo Translator.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "dragdrop",
    "texto": "Você precisa escanear notícias em busca de artigos sobre seus clientes e alertar os funcionários quando houver um artigo negativo. Artigos positivos devem ser adicionados a um clipping de imprensa. Quais tarefas de processamento de linguagem natural devem ser utilizadas para concluir esse processo?",
    "imagemUrl": "img/imgq103.png",
    "itens": [
      { "label": "Reconhecimento de entidade" },
      { "label": "Análise de sentimento" },
      { "label": "Síntese de fala" },
      { "label": "Tradução" }
    ],
    "grupos": ["Filtrar", "Avaliar"],
    "respostas": {
      "Filtrar": ["Reconhecimento de entidade"],
      "Avaliar": ["Análise de sentimento"]
    },
    "explicacao": "O Reconhecimento de entidade é usado para identificar menções a clientes em artigos. A Análise de sentimento é usada para classificar a cobertura como positiva ou negativa, permitindo alertas ou adição ao clipping conforme o caso.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está criando uma base de conhecimento utilizando o QnA Maker. Qual formato de arquivo você pode usar para preencher a base de conhecimento?",
    "opcoes": ["PPTX", "XML", "ZIP", "PDF"],
    "resposta": 3,
    "explicacao": "O QnA Maker permite importar conteúdo para a base de conhecimento a partir de arquivos PDF, além de outros formatos como URLs, arquivos DOCX e Excel. Arquivos PDF são suportados diretamente para extração de perguntas e respostas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Em qual cenário você deve usar a extração de frases-chave?",
    "opcoes": [
      "Identificar se as avaliações de um restaurante são positivas ou negativas",
      "Gerar legendas para um vídeo com base na faixa de áudio",
      "Identificar quais documentos fornecem informações sobre os mesmos tópicos",
      "Traduzir um conjunto de documentos do inglês para o alemão"
    ],
    "resposta": 2,
    "explicacao": "A extração de frases-chave é usada para identificar termos ou frases importantes dentro de um texto. Isso é útil para entender rapidamente os tópicos abordados em documentos, o que permite agrupá-los ou classificá-los com base em temas semelhantes.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/machine-learning/tutorial-text-analytics-use-mmlspark",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você possui relatórios de sinistros de seguro armazenados como texto. É necessário extrair termos-chave dos relatórios para gerar resumos. Que tipo de carga de trabalho de IA você deve usar?",
    "opcoes": [
      "Processamento de linguagem natural",
      "IA conversacional",
      "Detecção de anomalias",
      "Visão computacional"
    ],
    "resposta": 0,
    "explicacao": "A tarefa de extrair termos-chave e gerar resumos a partir de texto se enquadra em Processamento de Linguagem Natural (PLN), que lida com a análise e interpretação de dados em linguagem humana.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "combobox",
    "texto": "O processamento de linguagem natural pode ser usado para <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificar mensagens de e-mail como relacionadas ao trabalho ou pessoais.",
      "Prever o número de futuros aluguéis de carros.",
      "Prever quais visitantes de um site farão uma transação.",
      "Interromper um processo em uma fábrica quando temperaturas extremamente altas forem registradas."
    ],
    "resposta": 1,
    "explicacao": "O processamento de linguagem natural (PLN) é usado para analisar, compreender e gerar linguagem humana. Uma de suas aplicações comuns é a classificação de textos, como categorizar e-mails em profissionais ou pessoais com base em seu conteúdo textual.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-language/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Qual serviço de IA pode ser usado para interpretar o significado de uma entrada do usuário, como 'Ligue para mim mais tarde'?",
    "opcoes": [
      "Tradutor",
      "Análise de Texto",
      "Fala",
      "Compreensão de Linguagem (LUIS)"
    ],
    "resposta": 3,
    "explicacao": "O LUIS (Language Understanding Intelligent Service) permite que aplicativos, bots e dispositivos de IoT entendam comandos de linguagem natural, identificando intenções e entidades em frases como 'Ligue para mim mais tarde'.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/luis/what-is-luis",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma solução de chatbot no Azure. Qual serviço deve ser usado para determinar a intenção de um usuário?",
    "opcoes": [
      "Tradutor",
      "QnA Maker",
      "Fala",
      "Compreensão de Linguagem (LUIS)"
    ],
    "resposta": 3,
    "explicacao": "O serviço LUIS (Language Understanding Intelligent Service) é ideal para chatbots, pois identifica a intenção por trás de uma entrada em linguagem natural, permitindo que o bot responda de forma apropriada.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/luis/what-is-luis",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você precisa disponibilizar os comunicados de imprensa escritos da sua empresa em vários idiomas. Qual serviço deve ser utilizado?",
    "opcoes": [
      "Tradutor",
      "Análise de Texto",
      "Fala",
      "Compreensão de Linguagem (LUIS)"
    ],
    "resposta": 0,
    "explicacao": "O serviço Translator do Azure permite traduzir textos de forma automática para diversos idiomas, sendo ideal para tornar conteúdos como comunicados de imprensa acessíveis internacionalmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações sobre o serviço Text Analytics, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O serviço Text Analytics pode identificar em qual idioma o texto está escrito.",
      "O serviço Text Analytics pode detectar assinaturas manuscritas em um documento.",
      "O serviço Text Analytics pode identificar empresas e organizações mencionadas em um documento."
    ],
    "respostas": [true, false, true],
    "explicacao": "O serviço Text Analytics do Azure pode identificar o idioma de um texto e realizar extração de entidades nomeadas, incluindo empresas e organizações. No entanto, ele não possui capacidade de detectar assinaturas manuscritas, o que é uma funcionalidade relacionada ao Reconhecimento Óptico de Caracteres (OCR) ou Serviços Cognitivos de Visão Computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/machine-learning/tutorial-text-analytics-use-mmlspark",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho de processamento de linguagem natural aos cenários apropriados.",
    "itens": [
      { "label": "Reconhecimento de entidades" },
      { "label": "Análise de sentimento" },
      { "label": "Tradução" }
    ],
    "grupos": [
      "Extrai pessoas, locais e organizações a partir do texto",
      "Avalia o texto em uma escala positiva-negativa",
      "Converte texto para um idioma diferente"
    ],
    "respostas": {
      "Extrai pessoas, locais e organizações a partir do texto": ["Reconhecimento de entidades"],
      "Avalia o texto em uma escala positiva-negativa": ["Análise de sentimento"],
      "Converte texto para um idioma diferente": ["Tradução"]
    },
    "explicacao": "O reconhecimento de entidades é utilizado para extrair entidades nomeadas como pessoas, locais e organizações. A análise de sentimento avalia o conteúdo emocional do texto em uma escala positiva a negativa. A tradução converte o texto de um idioma para outro.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Monitorar avaliações de serviços online em busca de palavrões é um exemplo de processamento de linguagem natural.",
      "Identificar logotipos de marcas em uma imagem é um exemplo de processamento de linguagem natural.",
      "Monitorar sites de notícias públicas por menções negativas de um produto é um exemplo de processamento de linguagem natural."
    ],
    "respostas": [true, false, true],
    "explicacao": "O processamento de linguagem natural (PLN) é usado para analisar texto, como detectar palavrões ou avaliar menções negativas em textos online. A identificação de logotipos em imagens pertence à visão computacional, não ao PLN.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma solução de processamento de linguagem natural no Azure. A solução analisará avaliações de clientes e determinará quão positiva ou negativa cada avaliação é. Isso é um exemplo de qual tipo de carga de trabalho de processamento de linguagem natural?",
    "opcoes": [
      "Detecção de idioma",
      "Análise de sentimento",
      "Extração de frases-chave",
      "Reconhecimento de entidade"
    ],
    "resposta": 1,
    "explicacao": "A análise de sentimento é uma funcionalidade de processamento de linguagem natural que determina a opinião ou o sentimento expressos em um texto, como positivo, negativo ou neutro. No Azure, essa funcionalidade é usada para avaliar automaticamente as emoções em avaliações, comentários ou outros conteúdos baseados em texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/sentiment-opinion-mining/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está utilizando o processamento de linguagem natural para processar o texto de uma notícia da Microsoft. Você recebe uma saída que identifica entidades como datas, organizações, pessoas e locais. Qual tipo de processamento de linguagem natural foi realizado?",
    "imagemUrl": "img/imgq115.png",
    "opcoes": [
      "Reconhecimento de entidade",
      "Extração de frases-chave",
      "Análise de sentimento",
      "Tradução"
    ],
    "resposta": 0,
    "explicacao": "O reconhecimento de entidade é uma técnica de PLN que identifica e classifica entidades nomeadas como pessoas, datas, locais, quantidades e organizações dentro de um texto. O exemplo apresentado mostra a categorização de elementos como [PersonType], [DateTime], [Skill], entre outros, caracterizando esse tipo de carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "dragdrop",
    "texto": "Você planeja aplicar os recursos da API Text Analytics a um sistema de tickets de suporte técnico. Associe os recursos da API Text Analytics aos cenários apropriados de processamento de linguagem natural.",
    "texto": "Você planeja aplicar os recursos da API de Análise de Texto a um sistema de tickets de suporte técnico. Associe os recursos da API de Análise de Texto aos cenários de processamento de linguagem natural apropriados. Para responder, arraste o recurso apropriado da coluna à esquerda para o cenário correspondente à direita. Cada recurso pode ser usado uma vez, mais de uma vez ou nunca. OBSERVAÇÃO: Cada seleção correta vale um ponto. Selecionar e Colocar:",
    "itens": [
      { "label": "Reconhecimento de entidade" },
      { "label": "Extração de frases-chave" },
      { "label": "Detecção de idioma" },
      { "label": "Análise de sentimento" }
    ],
    "grupos": [
      "Compreender o quão chateado um cliente está com base no texto contido no ticket de suporte.",
      "Resumir informações importantes do ticket de suporte.",
      "Extrair datas importantes do ticket de suporte."
    ],
    "respostas": {
      "Compreender o quão chateado um cliente está com base no texto contido no ticket de suporte.": ["Análise de sentimento"],
      "Resumir informações importantes do ticket de suporte.": ["Extração de frases-chave"],
      "Extrair datas importantes do ticket de suporte.": ["Reconhecimento de entidade"]
    },
    "explicacao": "A análise de sentimento permite identificar emoções expressas em um texto. A extração de frases-chave ajuda a destacar informações relevantes. O reconhecimento de entidades identifica elementos específicos como datas, nomes e locais dentro de um texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/machine-learning/tutorial-text-analytics-use-mmlspark",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo do Language Understanding (LUIS) para dar suporte a um festival de música. Você deseja que os usuários possam fazer perguntas sobre os shows agendados, como: 'Qual atração está se apresentando no palco principal?'. A pergunta 'Qual atração está se apresentando no palco principal?' é um exemplo de qual tipo de elemento?",
    "opcoes": [
      "Uma intenção",
      "Uma expressão",
      "Um domínio",
      "Uma entidade"
    ],
    "resposta": 1,
    "explicacao": "Em um modelo do LUIS, uma 'expressão' representa uma frase ou pergunta que o usuário pode fazer. A expressão é usada para treinar o modelo a reconhecer intenções e extrair entidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/luis/concepts/intents",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está construindo um bot com o QnA Maker utilizando uma página de perguntas frequentes (FAQ). É necessário adicionar saudações profissionais e outras respostas para tornar o bot mais amigável ao usuário. O que você deve fazer?",
    "opcoes": [
      "Aumentar o limite de confiança das respostas",
      "Habilitar o aprendizado ativo",
      "Criar perguntas de múltiplas voltas",
      "Adicionar conversas casuais (chit-chat)"
    ],
    "resposta": 3,
    "explicacao": "O recurso 'chit-chat' no QnA Maker permite adicionar respostas pré-construídas para tornar os bots mais conversacionais e naturais, incluindo saudações, despedidas e outras interações sociais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/qnamaker/how-to/chit-chat-knowledge-base",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver um chatbot para um site. O chatbot deve responder às perguntas dos usuários com base nas informações contidas nos seguintes documentos: um guia de solução de problemas de produto em um documento Microsoft Word e uma lista de perguntas frequentes (FAQ) em uma página da web. Qual serviço você deve usar para processar os documentos?",
    "opcoes": [
      "Azure Bot Service",
      "Language Understanding",
      "Text Analytics",
      "QnA Maker"
    ],
    "resposta": 3,
    "explicacao": "O QnA Maker é um serviço da Azure que permite criar uma camada de perguntas e respostas sobre conteúdo existente, como documentos Word e páginas da web, sendo ideal para extrair e usar informações de FAQs e manuais de produto em chatbots.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "unica",
    "texto": "Você está construindo um modelo de Language Understanding para um negócio de e-commerce. É necessário garantir que o modelo detecte quando as expressões estão fora do escopo pretendido do modelo. O que você deve fazer?",
    "opcoes": [
      "Testar o modelo usando novas expressões",
      "Adicionar expressões à intenção None",
      "Criar uma entidade de tarefa predefinida",
      "Criar um novo modelo"
    ],
    "resposta": 1,
    "explicacao": "Adicionar expressões à intenção None permite ao modelo reconhecer quando uma entrada não corresponde a nenhuma das intenções definidas. Isso ajuda a melhorar a robustez do modelo e lidar adequadamente com entradas irrelevantes.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/conversational-language-understanding/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Quais dois cenários são exemplos de uma carga de trabalho de Processamento de Linguagem Natural? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Monitorar a temperatura de uma máquina para acionar um ventilador quando a temperatura atingir um limite específico",
      "Um dispositivo inteligente em casa que responde a perguntas como: 'Como estará o tempo hoje?'",
      "Um site que usa uma base de conhecimento para responder interativamente às perguntas dos usuários",
      "Máquinas de montagem que inserem faróis em carros de forma autônoma"
    ],
    "respostas": [1, 2],
    "explicacao": "Cargas de trabalho de Processamento de Linguagem Natural envolvem a interpretação e geração de linguagem humana. Dispositivos que respondem a perguntas em linguagem natural ou sistemas que usam bases de conhecimento para interagir com usuários são exemplos típicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "multipla",
    "texto": "Você tem uma solução de IA que permite aos usuários controlar dispositivos inteligentes usando comandos verbais. Quais dois tipos de cargas de trabalho de Processamento de Linguagem Natural (PLN) essa solução utiliza? Cada resposta correta representa parte da solução.",
    "opcoes": [
      "Texto para fala",
      "Extração de frases-chave",
      "Fala para texto",
      "Modelagem de linguagem",
      "Tradução"
    ],
    "respostas": [2, 3],
    "explicacao": "Para controlar dispositivos usando comandos verbais, a solução precisa converter fala em texto (fala para texto) e interpretar o conteúdo dos comandos, o que envolve modelagem de linguagem.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O serviço de linguagem pode identificar em qual idioma o texto está escrito.",
      "O serviço de linguagem pode detectar assinaturas manuscritas em um documento.",
      "O serviço de linguagem pode identificar empresas e organizações mencionadas em um documento."
    ],
    "respostas": [true, false, true],
    "explicacao": "O serviço de linguagem do Azure é capaz de identificar o idioma de um texto e também pode reconhecer entidades nomeadas, como empresas e organizações. No entanto, a detecção de assinaturas manuscritas é uma funcionalidade associada à Visão Computacional, não ao serviço de linguagem.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  },

  {
    "tipo": "dragdrop",
    "texto": "Você planeja usar os Serviços Cognitivos do Azure para desenvolver um aplicativo de assistente pessoal controlado por voz. Relacione os serviços do Azure aos respectivos encargos.",
    "itens": [
      { "label": "Speech" },
      { "label": "Language service" },
      { "label": "Translator Text" }
    ],
    "grupos": [
      "Converter a fala do usuário em texto",
      "Identificar a intenção do usuário",
      "Fornecer uma resposta falada ao usuário"
    ],
    "respostas": {
      "Converter a fala do usuário em texto": ["Speech"],
      "Identificar a intenção do usuário": ["Language service"],
      "Fornecer uma resposta falada ao usuário": ["Speech"]
    },
    "explicacao": "O serviço Speech converte fala em texto e também gera fala a partir de texto. O serviço de linguagem permite análise de intenção e compreensão do significado do texto do usuário. O serviço Translator Text não é necessário neste caso.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/what-are-ai-services",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-5"
  }





];
