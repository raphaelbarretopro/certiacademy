// ==========================================
// Arquivo: questoes_bloco04.js
// Descrição: Simulado AI-901 (Microsoft Azure AI Fundamentals) — tradução PT-BR (Contexto Oficial Microsoft)
// BLOCO 04 de 04 — Visão, Fala, IA Responsável e Administração de Modelos
// 32 questões — distribuição balanceada conforme guia oficial de estudos
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL: Questões de 97 a 128.
// ==========================================

export const questoes = [
  // Questão Original: 97
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre a implantação (deployment) de modelos no Catálogo de Modelos do Azure.",
    "afirmacoes": [
      "Você pode implantar um modelo base suportado diretamente do catálogo de modelos sem modificações.",
      "O playground é usado obrigatoriamente para criar a implantação do modelo antes que ele possa ser testado.",
      "Após implantar um modelo, você pode usar o playground no portal do Microsoft Foundry para enviar prompts e revisar as respostas."
    ],
    "respostas": [true, false, true],
    "explicacao": "Você implanta modelos baseados no catálogo diretamente (afirmação 1 verdadeira). O Playground é uma ferramenta de teste, não a ferramenta de criação da implantação; a implantação é feita no catálogo ou hub (afirmação 2 falsa). O Playground usa a implantação ativa para testar os prompts (afirmação 3 verdadeira).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/model-catalog-overview",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 98
  {
    "tipo": "unica",
    "texto": "Você tem um projeto do Microsoft Foundry que contém uma implantação de modelo de chat habilitado para visão. Seu aplicativo em Python usa a API de respostas para enviar uma solicitação com um prompt e uma imagem JPEG local. Qual valor você deve usar para incluir a imagem local na requisição HTTP?",
    "opcoes": [
      "data:image/jpeg;base64,...",
      "C:\\images\\photo.jpg",
      "file:///C:/images/photo.jpg",
      "https://<storage>.blob.core.windows.net/<container>/<file>.jpg"
    ],
    "resposta": 0,
    "explicacao": "Para enviar imagens locais sem hospedá-las publicamente na internet, a API REST do Azure OpenAI exige que os binários da imagem sejam convertidos em uma string codificada em Base64, precedida pelo cabeçalho do tipo MIME correspondente.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 99
  {
    "tipo": "combobox",
    "texto": "O serviço de <combobox> é usado para extrair datas, quantidades, nomes de organizações e locais a partir de blocos de texto longo.",
    "opcoes": [
      "Selecione uma opção",
      "Extração de frases-chave (Key phrase extraction)",
      "Detecção de idioma (Language detection)",
      "Reconhecimento de Entidades Nomeadas (NER)",
      "Análise de Sentimentos (Sentiment Analysis)"
    ],
    "resposta": 3,
    "explicacao": "Nota de Correção: O banco original marcava equivocadamente 'Detecção de idioma'. A extração categórica de nomes, locais, quantidades e datas de um texto não estruturado é, por definição arquitetural, a tarefa de Reconhecimento de Entidades Nomeadas (NER).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 100
  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver um aplicativo usando o SDK do Microsoft Foundry para enviar prompts de chat para um modelo de IA generativa implantado. Quais informações o código do aplicativo deve incluir obrigatoriamente para estabelecer a comunicação?",
    "opcoes": [
      "O dataset de treinamento, o histórico do playground e o nome do projeto.",
      "O histórico do playground, a URL do ponto de extremidade e o tipo de tarefa.",
      "As credenciais de autenticação, a URL do ponto de extremidade (endpoint URL) e o nome da implantação do modelo.",
      "O nome de exibição do projeto, o dataset de treinamento e o tipo de tarefa."
    ],
    "resposta": 2,
    "explicacao": "A tríade de conexão via SDK requer: Credenciais (para autorização Entra ID / Chaves), a URL do Endpoint (para o roteamento da rede) e o Nome da Implantação (para selecionar o modelo específico no servidor).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 101
  {
    "tipo": "unica",
    "texto": "Qual das ações abaixo pode ser executada nativamente usando o serviço Azure Vision (Visão Computacional)?",
    "opcoes": [
      "Criar miniaturas temporais para vídeos de treinamento.",
      "Extrair frases-chave de documentos puramente textuais.",
      "Identificar raças específicas de animais em fluxos de vídeo ao vivo.",
      "Extrair dados textuais legíveis de cartas manuscritas."
    ],
    "resposta": 3,
    "explicacao": "A leitura de letras cursivas manuscritas em imagens e a sua transformação em strings digitais é a funcionalidade de Reconhecimento Óptico de Caracteres (OCR / Read API), que faz parte do núcleo do serviço Azure Vision.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 102
  {
    "tipo": "unica",
    "texto": "Qual recurso de processamento de linguagem natural (PNL) pode ser usado para identificar rapidamente os principais pontos de discussão (talking points) em milhares de pesquisas de feedback de clientes?",
    "opcoes": [
      "Tradução (Translation)",
      "Detecção de idioma (Language detection)",
      "Reconhecimento de entidades (Entity recognition)",
      "Extração de frases-chave (Key phrase extraction)"
    ],
    "resposta": 3,
    "explicacao": "A extração de frases-chave isola os termos e jargões mais relevantes e repetidos dentro de um texto, permitindo mapear rapidamente as métricas e os tópicos principais de discussão (talking points) sem ler o texto completo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/key-phrase-extraction/overview",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 103
  {
    "tipo": "unica",
    "texto": "Declarar publicamente e documentar as fontes dos dados que foram utilizados para treinar um modelo de Machine Learning é uma prática que atende primariamente a qual princípio de IA Responsável?",
    "opcoes": [
      "Privacidade e segurança",
      "Confiabilidade e segurança",
      "Justiça",
      "Transparência"
    ],
    "resposta": 3,
    "explicacao": "A Transparência exige clareza sobre o ciclo de vida da IA. Explicar como a IA funciona e declarar abertamente a origem dos dados de treinamento permite que as partes interessadas auditem o modelo e entendam suas limitações.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 104
  {
    "tipo": "unica",
    "texto": "Você planeja criar um aplicativo de IA que usará o Azure OpenAI. A solução exige que uma quantidade de taxa de transferência (throughput) fixa e dedicada seja alocada para o modelo. Qual tipo de implantação você deve usar?",
    "opcoes": [
      "Provisionada (Provisioned Throughput)",
      "Padrão (Standard)",
      "Lote Global (Global Batch)",
      "Padrão de Zona de Dados (Data Zone Standard)"
    ],
    "resposta": 0,
    "explicacao": "A implantação Padrão (Standard) é tarifada conforme o uso e sujeita a limites flutuantes de rede. Para garantir latência consistente e um processamento de tokens por minuto (TPM) isolado e reservado, deve-se comprar e usar a implantação de Taxa de Transferência Provisionada (Provisioned Throughput).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/provisioned-throughput",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 105
  {
    "tipo": "unica",
    "texto": "Você está construindo um aplicativo de aprovação de empréstimos baseado em IA. Você precisa garantir que o aplicativo documente formalmente os motivos pelos quais um empréstimo foi aprovado ou rejeitado, tornando esse relatório explicativo disponível ao solicitante. Este é um exemplo de qual princípio de IA responsável?",
    "opcoes": [
      "Transparência",
      "Prestação de contas",
      "Justiça",
      "Inclusão"
    ],
    "resposta": 0,
    "explicacao": "Fornecer um relatório explicativo aos usuários finais sobre como e por que o algoritmo tomou uma decisão de alto impacto (como negar um empréstimo) atende ao princípio de Transparência (explicabilidade).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 106
  {
    "tipo": "unica",
    "texto": "Testar e verificar se os modelos de aprendizado de máquina NÃO exibem viés racial, viés de gênero ou preferências discriminatórias é um exemplo de qual princípio de IA responsável da Microsoft?",
    "opcoes": [
      "Segurança (Safety)",
      "Confiabilidade (Reliability)",
      "Justiça (Fairness)",
      "Privacidade e segurança (Privacy and security)"
    ],
    "resposta": 2,
    "explicacao": "O princípio de Justiça (Fairness) dita que os sistemas de IA devem tratar todas as pessoas de forma equitativa e as avaliações devem garantir que o algoritmo não desenvolva discriminações demográficas (gênero, raça, idade).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 107
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre os modelos disponíveis no serviço Azure OpenAI.",
    "afirmacoes": [
      "Os modelos Whisper no Azure OpenAI são usados exclusivamente para gerar vetores semânticos.",
      "Os modelos de Embedding no Azure OpenAI são usados para converter texto em matrizes de vetores numéricos.",
      "Os modelos GPT-4.1 no Azure OpenAI são usados ativamente para gerar imagens originais baseadas em prompts de linguagem natural."
    ],
    "respostas": [false, true, false],
    "explicacao": "O Whisper é o modelo da OpenAI para reconhecimento de fala e transcrição (afirmação 1 falsa). Modelos de embedding criam vetores para buscas semânticas RAG (afirmação 2 verdadeira). Os modelos para gerar imagens são da família DALL-E, não GPT-4.1 (afirmação 3 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 108
  {
    "tipo": "combobox",
    "texto": "Contar o número de animais em uma área de preservação com base na análise de um feed de vídeo capturado por drones é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "visão computacional (computer vision)",
      "extração de informações (information extraction)",
      "processamento de linguagem natural (NLP)",
      "mineração de conhecimento (knowledge mining)"
    ],
    "resposta": 1,
    "explicacao": "Analisar pixels e frames espaciais para detectar e contar objetos do mundo físico (Spatial Analysis / Object Detection) pertence estritamente ao escopo das cargas de trabalho de Visão Computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 109
  {
    "tipo": "dragdrop",
    "texto": "Associe os requisitos de compliance com os princípios apropriados de IA Responsável da Microsoft.",
    "itens": [
      { "label": "Justiça (Fairness)" },
      { "label": "Privacidade e Segurança (Privacy and Security)" },
      { "label": "Transparência (Transparency)" }
    ],
    "grupos": [
      "O sistema não deve discriminar decisões com base em gênero, raça ou idade.",
      "Dados pessoais rastreáveis devem ser visíveis apenas para usuários aprovados na rede.",
      "Processos de tomada de decisão automatizados devem ser registrados para que usuários aprovem e identifiquem por que uma decisão foi tomada."
    ],
    "respostas": {
      "O sistema não deve discriminar decisões com base em gênero, raça ou idade.": ["Justiça (Fairness)"],
      "Dados pessoais rastreáveis devem ser visíveis apenas para usuários aprovados na rede.": ["Privacidade e Segurança (Privacy and Security)"],
      "Processos de tomada de decisão automatizados devem ser registrados para que usuários aprovem e identifiquem por que uma decisão foi tomada.": ["Transparência (Transparency)"]
    },
    "explicacao": "Não discriminar e evitar vieses demográficos = Justiça. Limitar visibilidade a usuários aprovados (RBAC/Encryption) = Privacidade. Registrar as decisões para rastreabilidade lógica e explicação de motivos = Transparência.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 110
  {
    "tipo": "combobox",
    "texto": "Um modelo de IA treinado para atuar no campo da visão computacional tem como uma de suas capacidades clássicas <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "analisar imagens para classificar e detectar objetos",
      "criar conteúdo visual e artes novas baseadas em prompts de texto",
      "organizar dados numéricos estruturados em categorias preditivas clássicas",
      "usar correspondência de padrões e expressões regulares para estruturar JSON"
    ],
    "resposta": 1,
    "explicacao": "A detecção de objetos (Object Detection) e a classificação de imagens (Image Classification) são as tarefas fundamentais na fundação da arquitetura clássica de Visão Computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 111
  {
    "tipo": "unica",
    "texto": "Qual tipo de carga de trabalho (workload) de IA do Azure você deve usar para criar novas ilustrações criativas a partir do texto longo de um artigo?",
    "opcoes": [
      "IA generativa (Generative AI)",
      "Inteligência de Documentos (Document Intelligence)",
      "Visão computacional (Computer vision)",
      "Processamento de linguagem natural (Natural language processing)"
    ],
    "resposta": 0,
    "explicacao": "A criação (síntese) de conteúdo original inédito — seja texto, código ou ilustrações de imagem a partir de prompts (como o modelo DALL-E) — define a carga de trabalho de Inteligência Artificial Generativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models#dall-e",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 112
  {
    "tipo": "unica",
    "texto": "Capturar e digitalizar texto legível a partir de matrizes de pixels em imagens é um exemplo prático de qual recurso de IA?",
    "opcoes": [
      "Detecção de objetos (Object detection)",
      "Análise de texto (Text analysis)",
      "Reconhecimento óptico de caracteres (OCR)",
      "Descrição de imagens (Image description)"
    ],
    "resposta": 2,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é a tecnologia específica dentro da Visão Computacional dedicada a isolar, reconhecer e extrair caracteres textuais de formatos de imagem ou papel digitalizado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 113
  {
    "tipo": "multipla",
    "texto": "Quais dos itens abaixo compõem os princípios norteadores oficiais da Microsoft para a Inteligência Artificial Responsável? (Escolha três)",
    "opcoes": [
      "Opinionatedness (Opinatividade)",
      "Decisiveness (Capacidade de decisão)",
      "Fairness (Justiça)",
      "Reliability and safety (Confiabilidade e segurança)",
      "Inclusiveness (Inclusão)",
      "Knowledgeability (Nível de conhecimento)"
    ],
    "respostas": [2, 3, 4],
    "explicacao": "Os 6 princípios oficiais da Microsoft são: Justiça (Fairness), Confiabilidade e Segurança (Reliability and safety), Privacidade e Segurança (Privacy and security), Inclusão (Inclusiveness), Transparência (Transparency) e Prestação de Contas (Accountability).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 114
  {
    "tipo": "combobox",
    "texto": "Ao desenvolver um sistema crítico de IA autônomo, como veículos autônomos ou sistemas médicos, o princípio da IA responsável de <combobox> deve ser rigidamente aplicado para garantir a operação consistente e sem causar danos físicos ao longo da vida útil do sistema.",
    "opcoes": [
      "Selecione uma opção",
      "justiça (fairness)",
      "confiabilidade e segurança (reliability and safety)",
      "prestação de contas (accountability)",
      "inclusão (inclusiveness)"
    ],
    "resposta": 2,
    "explicacao": "Em cenários onde a falha do algoritmo pode resultar em danos físicos à saúde ou ao patrimônio do usuário (como dirigir um carro ou dosar medicação), o princípio de Confiabilidade e Segurança exige testes rígidos para mitigar comportamentos inesperados do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 115
  {
    "tipo": "unica",
    "texto": "Sua aplicação possui uma interface de chat onde o usuário digita 'Como eu atualizo minha Base de Conhecimento programaticamente?'. O aplicativo orquestra a chamada e devolve a resposta 'Você pode usar nossas APIs REST...', acompanhada da citação da fonte documental. Qual tipo de solução de IA orquestra esse fluxo?",
    "opcoes": [
      "uma solução isolada de análise de sentimentos",
      "um aplicativo de visão computacional",
      "um agente conversacional (agent / copilot)",
      "um modelo estático de aprendizado de máquina tabular"
    ],
    "resposta": 2,
    "explicacao": "Sistemas de perguntas e respostas que retêm histórico, invocam ferramentas externas (como bases de conhecimento corporativas RAG) e interagem ativamente com os usuários via diálogos são orquestrados por Agentes Conversacionais (Agents/Copilots).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/agents/overview",
    "dominio": "Construção de Agentes e Ferramentas",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 116
  {
    "tipo": "combobox",
    "texto": "O atendimento interativo, interpretativo e semântico de perguntas inseridas de forma natural por um usuário como parte de um aplicativo corporativo é um exemplo clássico de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "visão computacional",
      "processamento de linguagem natural (PNL)",
      "previsão estatística (forecasting)",
      "extração de metadados de imagem"
    ],
    "resposta": 2,
    "explicacao": "Sempre que o núcleo computacional de uma solução requer o entendimento e a geração da semântica da linguagem humana (seja falada ou escrita), a disciplina fundamental sendo empregada é o Processamento de Linguagem Natural.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 117
  {
    "tipo": "simnao",
    "texto": "Avalie o escopo das capacidades de processamento Multimodal.",
    "afirmacoes": [
      "Todos os modelos de IA, sem exceção, podem analisar e gerar saídas de imagens contextuais.",
      "Um modelo de IA generativa multimodal pode interpretar nativamente uma entrada de imagem dentro do prompt fornecido pelo usuário.",
      "Um modelo multimodal permite projetar esquemas que combinem tokens de blocos de texto e matrizes de imagens na mesma requisição simultânea."
    ],
    "respostas": [false, true, true],
    "explicacao": "A grande maioria dos modelos preditivos e LLMs tradicionais lida exclusivamente com matrizes tabulares ou vetores textuais (afirmação 1 falsa). O termo 'Multimodal' refere-se especificamente à capacidade arquitetônica do modelo de absorver e combinar diferentes naturezas de mídia (texto e imagem) de forma nativa e simultânea (afirmações 2 e 3 verdadeiras).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 118
  {
    "tipo": "multipla",
    "texto": "Em quais DOIS cenários práticos você utilizaria especificamente as tecnologias de reconhecimento de fala (Speech Recognition)? (Escolha duas)",
    "opcoes": [
      "Criar uma transcrição em texto de uma reunião corporativa ou chamada telefônica gravada.",
      "Um sistema de entretenimento de carro que lê em voz alta as mensagens de texto recebidas pelo motorista.",
      "Criar um sistema automatizado de anúncios de plataforma e atrasos para uma estação de trem.",
      "Fornecer legendas ocultas (closed captions) automatizadas para vídeos gravados ou transmissões ao vivo."
    ],
    "respostas": [0, 3],
    "explicacao": "O reconhecimento de fala atua 'escutando' ondas sonoras para transformá-las em texto (Speech-to-Text). Gerar atas de reunião e legendar vídeos são as aplicações diretas disso. Os sistemas de carros e estações de trem descritos nas opções usam o processo inverso: a Síntese de Fala (Text-to-Speech).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 119
  {
    "tipo": "unica",
    "texto": "Você tem 100 vídeos instrucionais corporativos que NÃO contêm nenhum áudio. Cada vídeo possui um roteiro escrito correspondente. Você precisa gerar e adicionar um arquivo de áudio de narração realista para cada vídeo com base neste roteiro. Qual tipo de carga de trabalho você deve usar?",
    "opcoes": [
      "Tradução (Translation)",
      "Reconhecimento de fala (Speech recognition)",
      "Modelagem de linguagem (Language modeling)",
      "Síntese de fala (Speech synthesis / Text-to-speech)"
    ],
    "resposta": 3,
    "explicacao": "A ação mecânica de ler um roteiro de texto estático e gerar uma narração acústica simulando uma voz humana sintética utiliza o motor de Síntese de Fala (Text-to-Speech).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/text-to-speech",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 120
  {
    "tipo": "unica",
    "texto": "Qual das seguintes ações operacionais é o melhor exemplo da implementação do princípio de IA Responsável de Transparência (Transparency)?",
    "opcoes": [
      "Garantir juridicamente que os desenvolvedores sejam os únicos responsabilizados pelas soluções autônomas que criam.",
      "Garantir matematicamente que as oportunidades, como empréstimos, sejam alocadas de forma igualitária a todos os solicitantes.",
      "Ajudar os usuários corporativos e finais a entender os limites da inteligência e como as decisões são processadas pelo sistema de IA.",
      "Garantir através de chaves que os dados privilegiados dos usuários sejam armazenados de forma criptografada."
    ],
    "resposta": 2,
    "explicacao": "Ajudar o usuário a entender 'como' e 'por que' a IA chegou a um determinado resultado elimina o fator de 'caixa preta', que é a exigência principal do princípio de Transparência.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 121
  {
    "tipo": "combobox",
    "texto": "O serviço de <combobox> atua abstraindo a complexidade de redes neurais acústicas para ouvir e converter áudio falado capturado de clientes diretamente em texto formatado na aplicação.",
    "opcoes": [
      "Selecione uma opção",
      "Azure Language (Linguagem)",
      "Azure Speech (Fala)",
      "Azure Vision (Visão Computacional)",
      "Azure OpenAI (Modelos Fundacionais)"
    ],
    "resposta": 2,
    "explicacao": "O Azure Speech Service é o conjunto dedicado de APIs da Microsoft especializado no processamento de sinais de áudio, executando tanto Speech-to-Text quanto Text-to-Speech e tradução de voz em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/overview",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 122
  {
    "tipo": "unica",
    "texto": "Você tem um sistema de aprovação de empréstimos financeiro baseado em IA. Durante os rigorosos testes em ambiente de homologação, os engenheiros descobrem que o sistema tem um alto viés histórico de gênero, reprovando desproporcionalmente mulheres. Qual princípio central de IA responsável o modelo está violando diretamente?",
    "opcoes": [
      "Confiabilidade e segurança (Reliability and safety)",
      "Transparência (Transparency)",
      "Prestação de contas (Accountability)",
      "Justiça (Fairness)"
    ],
    "resposta": 3,
    "explicacao": "O viés algorítmico, o preconceito racial e a discriminação de gênero resultam em tratamentos não equitativos. A obrigação ética de mitigar e resolver essas disparidades é governada pelo princípio de Justiça (Fairness).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 123
  {
    "tipo": "dragdrop",
    "texto": "Associe a descrição correta à ferramenta correspondente do ecossistema de Machine Learning clássico da Microsoft.",
    "itens": [
      { "label": "Azure Machine Learning designer" },
      { "label": "Automated Machine Learning (AutoML)" },
      { "label": "Azure Machine Learning workspace" },
      { "label": "Notebooks" }
    ],
    "grupos": [
      "Fornece um ambiente para profissionais escreverem e executarem código Python diretamente no navegador (browser-based).",
      "Permite construir rotinas visuais de treinamento usando uma interface gráfica de arrastar e soltar (drag-and-drop).",
      "Itera automaticamente por diversos algoritmos e hiperparâmetros na nuvem para encontrar o melhor modelo possível.",
      "Atua como o espaço unificado e centralizado na nuvem para agrupar e gerenciar todos os recursos e artefatos de IA do projeto."
    ],
    "respostas": {
      "Fornece um ambiente para profissionais escreverem e executarem código Python diretamente no navegador (browser-based).": ["Notebooks"],
      "Permite construir rotinas visuais de treinamento usando uma interface gráfica de arrastar e soltar (drag-and-drop).": ["Azure Machine Learning designer"],
      "Itera automaticamente por diversos algoritmos e hiperparâmetros na nuvem para encontrar o melhor modelo possível.": ["Automated Machine Learning (AutoML)"],
      "Atua como o espaço unificado e centralizado na nuvem para agrupar e gerenciar todos os recursos e artefatos de IA do projeto.": ["Azure Machine Learning workspace"]
    },
    "explicacao": "O ecossistema clássico de ML do Azure se baseia no Workspace. Ele contém o Designer para Low-Code/No-Code, Notebooks para desenvolvedores Code-First, e o AutoML para descobrir automaticamente o melhor modelo matemático para datasets limpos.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/overview-what-is-azure-machine-learning",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 124
  {
    "tipo": "unica",
    "texto": "Você planeja projetar e implantar (deploy) um modelo de IA generativa massivo (como Llama 3) em um novo projeto do Microsoft Foundry restrito à região de nuvem 'Leste dos EUA' (East US). Em nível de arquitetura, o que você deve verificar primeiro?",
    "opcoes": [
      "A disponibilidade regional e cota de processamento do modelo.",
      "O limite individual de token da janela de contexto da rede neural.",
      "O suporte a chamadas REST API padrão do serviço.",
      "O método técnico de autenticação exigido pela aplicação frontend."
    ],
    "resposta": 0,
    "explicacao": "Diferentes datacenters globais têm hardwares de GPU distintos. A implantação falhará imediatamente se o modelo fundacional escolhido não estiver disponível (Availability) ou não tiver capacidade provisionada na região do Azure na qual o projeto está hospedado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 125
  {
    "tipo": "combobox",
    "texto": "Um modelo matemático de visão computacional (Computer Vision model) tem o objetivo primário de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "analisar as matrizes de pixels em imagens para classificar cenas e detectar objetos",
      "criar conteúdo visual do zero (geração) baseado estritamente em descrições de texto",
      "organizar colunas de dados numéricos estruturados em categorias preditivas matemáticas",
      "usar correspondência rígida de padrões para recuperar imagens idênticas a partir de um banco de dados relacional"
    ],
    "resposta": 1,
    "explicacao": "A Visão Computacional analisa imagens existentes do mundo real para inferir significado por meio da extração espacial de características, como reconhecimento facial, detecção de objetos de segurança e classificação de cenários (Computer Vision / Image Analysis).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 126
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre as ferramentas de orquestração fonética.",
    "afirmacoes": [
      "O serviço de síntese de fala (Speech Synthesis) converte fluxos de áudio falados por usuários em formatos de texto digital escrito.",
      "O serviço de reconhecimento de fala (Speech Recognition) tem a capacidade contínua de detectar e transcrever a entrada fonética falada via microfone.",
      "O recurso nativo de conversão de texto em fala (Text-to-Speech) isolado tem o objetivo arquitetural de ler um texto em inglês e emitir um áudio falado traduzido em espanhol em tempo real."
    ],
    "respostas": [false, true, false],
    "explicacao": "A síntese faz texto-para-áudio (afirmação 1 falsa). O reconhecimento faz áudio-para-texto (afirmação 2 verdadeira). A conversão de texto em fala é focada puramente na leitura acústica; o fluxo lógico de tradução exige o encadeamento prévio do Azure Translator ou o uso da API consolidada de Speech Translation (afirmação 3 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 127
  {
    "tipo": "unica",
    "texto": "Você está gerenciando o design de um novo sistema de IA corporativo garantindo ativamente que o layout e os métodos de entrada de dados empoderem todas as pessoas, especificamente capacitando o uso pleno por indivíduos que possuem deficiências auditivas, deficiências visuais severas ou limitações motoras. Este é um exemplo de qual princípio orientador da Microsoft para IA responsável?",
    "opcoes": [
      "Prestação de contas (Accountability)",
      "Confiabilidade e segurança (Reliability and safety)",
      "Justiça (Fairness)",
      "Inclusão (Inclusiveness)"
    ],
    "resposta": 3,
    "explicacao": "Embora a Justiça trate do algoritmo não apresentar viés para grupos demográficos, a acessibilidade física (como acomodar leitores de tela ou comandos de acessibilidade alternativos para limitações cognitivas/motoras) pertence estritamente ao princípio da Inclusão (Inclusiveness).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco04"
  },
  
  // Questão Original: 128
  {
    "tipo": "combobox",
    "texto": "Ao desenvolver um agente integrado, a ação de fornecer respostas dinâmicas, contextuais e interativas para perguntas formuladas por um usuário via teclado no aplicativo é o caso de uso definitivo da área de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "visão computacional",
      "processamento de linguagem natural (PNL)",
      "previsão e mineração de dados em lote",
      "síntese fonética direcional"
    ],
    "resposta": 2,
    "explicacao": "O processamento, decodificação da intenção sintática e a formulação gramatical de respostas em linguagem de máquina pertencem ao ramo das redes neurais de Processamento de Linguagem Natural (PNL).",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco04"
  }
];