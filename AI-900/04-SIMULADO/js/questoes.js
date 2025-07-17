// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================
//FABRICIO E RAPHAEL
export const questoes = [
  {
    "tipo": "dragdrop",
    "texto": "Você está projetando um sistema que gerará automaticamente cotações de seguro.\n\nAssocie os princípios de IA responsável da Microsoft aos requisitos apropriados.",
    "itens": [
      { "label": "Responsabilidade" },
      { "label": "Justiça" },
      { "label": "Inclusão" },
      { "label": "Privacidade e segurança" },
      { "label": "Confiabilidade e segurança" },
      { "label": "Transparência" }
    ],
    "grupos": [
      "As informações pessoais de um cliente devem estar visíveis apenas para a equipe envolvida no processo de tomada de decisão.",
      "O processo de tomada de decisão deve ser registrado para que a equipe possa identificar o raciocínio por trás de uma cotação específica.",
      "O sistema deve ser acessível a clientes que usam leitores de tela ou outras tecnologias assistivas."
    ],
    "respostas": {
      "As informações pessoais de um cliente devem estar visíveis apenas para a equipe envolvida no processo de tomada de decisão.": ["Privacidade e segurança"],
      "O processo de tomada de decisão deve ser registrado para que a equipe possa identificar o raciocínio por trás de uma cotação específica.": ["Transparência"],
      "O sistema deve ser acessível a clientes que usam leitores de tela ou outras tecnologias assistivas.": ["Inclusão"]
    },
    "explicacao": "A privacidade e segurança garantem que os dados dos clientes sejam acessados apenas por pessoas autorizadas. A transparência exige que o raciocínio por trás das decisões da IA seja rastreável. A inclusão assegura que todos os usuários, incluindo aqueles com deficiências, possam interagir com o sistema.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/inform/ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-4"
  },
  //209
  {
    "tipo": "unica",
    "texto": "Qual tipo de entidade de processamento de linguagem natural (PLN) é usado para identificar um número de telefone?",
    "opcoes": [
      "Expressão regular",
      "Aprendizado de máquina",
      "Lista",
      "Padrão.any"
    ],
    "resposta": 0,
    "explicacao": "Entidades do tipo 'expressão regular' são utilizadas para identificar padrões bem definidos, como números de telefone, que seguem um formato fixo. Isso permite extrair dados estruturados de textos de forma precisa.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/conversational-language-understanding/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  //210
  {
    "tipo": "combobox",
    "texto": "Retornar uma caixa delimitadora que indica a localização de um veículo em uma imagem é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificação de imagem",
      "Detecção de objeto",
      "Reconhecimento óptico de caracteres (OCR)",
      "Detecção facial"
    ],
    "resposta": 2,
    "explicacao": "A detecção de objeto é usada para localizar e identificar objetos dentro de uma imagem, retornando caixas delimitadoras (bounding boxes) ao redor dos itens detectados. Isso difere da classificação de imagem, que apenas rotula a imagem como um todo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-object-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //211
  {
    "tipo": "unica",
    "texto": "Sua empresa está explorando o uso de tecnologias de reconhecimento de voz em seus dispositivos domésticos inteligentes. A empresa deseja identificar quaisquer barreiras que possam, inadvertidamente, excluir grupos específicos de usuários.\n\nEste é um exemplo de qual princípio orientador da Microsoft para IA responsável?",
    "opcoes": [
      "Responsabilidade",
      "Justiça",
      "Privacidade e segurança",
      "Inclusão"
    ],
    "resposta": 3,
    "explicacao": "A inclusão é um princípio da IA responsável que visa garantir que soluções de IA sejam acessíveis e úteis para todos os grupos de usuários, incluindo aqueles com diferentes capacidades, idiomas ou contextos culturais.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/inform/ai#responsible-and-trusted-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-4"
  },
  //212
  {
    "tipo": "dragdrop",
    "texto": "Você possui um grande conjunto de dados que contém informações de vendas de veículos.\n\nVocê precisa treinar um modelo de machine learning automatizado (automated ML) para prever os valores de venda de veículos com base no tipo de veículo.\n\nQual tarefa você deve selecionar? Para responder, associe corretamente a tarefa apropriada na área de resposta.",
    "itens": [
      { "label": "Classificação" },
      { "label": "Regressão" },
      { "label": "Previsão de séries temporais" },
      { "label": "Processamento de Linguagem Natural (visualização)" },
      { "label": "Visão Computacional (visualização)" }
    ],
    "grupos": [
      "Treinar um modelo para prever valores de venda de veículos com base no tipo de veículo."
    ],
    "respostas": {
      "Treinar um modelo para prever valores de venda de veículos com base no tipo de veículo.": ["Regressão"]
    },
    "explicacao": "A tarefa de regressão é usada para prever valores contínuos, como preços ou valores de venda. Como o objetivo é prever valores de venda com base em dados históricos, essa é a escolha apropriada no contexto de aprendizado de máquina automatizado.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  //213
  {
    "tipo": "combobox",
    "texto": "Ao avaliar o desempenho de um modelo, a <combobox> exibe os positivos e negativos previstos e reais usando uma grade de valores 0 e 1.",
    "opcoes": [
      "Selecione uma resposta",
      "Métrica AUC",
      "Matriz de confusão",
      "Curva ROC",
      "Limite"
    ],
    "resposta": 2,
    "explicacao": "A matriz de confusão é uma ferramenta usada para avaliar a performance de modelos de classificação, apresentando os valores reais e previstos em uma estrutura de tabela com base em categorias como verdadeiro positivo, falso positivo, verdadeiro negativo e falso negativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#classification-metrics",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  //214
  {
    "tipo": "unica",
    "texto": "Você precisa converter recibos em transações em uma planilha. A planilha deve incluir a data da transação, o comerciante, o valor total gasto e quaisquer impostos pagos.\n\nQual serviço de IA do Azure você deve usar?",
    "opcoes": [
      "Visão Personalizada (Custom Vision)",
      "Reconhecimento de Formulários (Form Recognizer)",
      "Reconhecimento Facial (Face)",
      "Serviço de Linguagem (Language)"
    ],
    "resposta": 1,
    "explicacao": "O serviço Azure Form Recognizer é ideal para extrair informações estruturadas de documentos como recibos, faturas e formulários. Ele pode identificar automaticamente campos como data, comerciante e valores, facilitando a conversão em planilhas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //215
  {
    "tipo": "combobox",
    "texto": "Prever quantos veículos irão atravessar uma ponte em um determinado dia é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificação",
      "Agrupamento (clustering)",
      "Regressão"
    ],
    "resposta": 3,
    "explicacao": "Regressão é usada para prever valores numéricos contínuos. Neste caso, como o objetivo é estimar a quantidade de veículos — um valor numérico — em um dia específico, trata-se de um problema de regressão.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#regression",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  //216
  {
    "tipo": "combobox",
    "texto": "Em um modelo de aprendizado de máquina, os dados usados como entradas são chamados de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Atributos (features)",
      "Funções",
      "Rótulos (labels)",
      "Instâncias"
    ],
    "resposta": 1,
    "explicacao": "No aprendizado de máquina, 'features' (atributos) são as variáveis de entrada utilizadas pelo modelo para fazer previsões. Elas representam as características observadas nos dados que ajudam a estimar a saída desejada.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml#feature-selection",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  //217
  {
    "tipo": "unica",
    "texto": "Você tem um sistema de segurança que analisa imagens de câmeras de segurança (CCTV) para permitir a entrada de funcionários autorizados em áreas restritas.\n\nQual tipo de visão computacional o sistema utiliza?",
    "opcoes": [
      "Reconhecimento óptico de caracteres (OCR)",
      "Segmentação semântica",
      "Detecção facial e reconhecimento facial",
      "Análise de imagem"
    ],
    "resposta": 2,
    "explicacao": "A detecção e o reconhecimento facial são técnicas de visão computacional usadas para identificar e autenticar indivíduos com base em características faciais. Esse é o método adequado para permitir acesso a pessoas autorizadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-face-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //218
  {
    "tipo": "unica",
    "texto": "Você tem um sistema de segurança que analisa imagens de câmeras de segurança (CCTV) para permitir a entrada de funcionários autorizados em áreas restritas.\n\nQual tipo de visão computacional o sistema utiliza?",
    "opcoes": [
      "Reconhecimento óptico de caracteres (OCR)",
      "Segmentação semântica",
      "Detecção facial e reconhecimento facial",
      "Análise de imagem"
    ],
    "resposta": 2,
    "explicacao": "A detecção e o reconhecimento facial são técnicas de visão computacional usadas para identificar e autenticar indivíduos com base em características faciais. Esse é o método adequado para permitir acesso a pessoas autorizadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-face-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //219
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo que identifica as coordenadas de um produto em uma imagem de uma prateleira de supermercado. Qual serviço o aplicativo usa?",
    "opcoes": [
      "Classificação do Custom Vision",
      "Detecção de objetos do Custom Vision",
      "Leitura do Computer Vision",
      "Reconhecimento óptico de caracteres (OCR) do Computer Vision"
    ],
    "resposta": 1,
    "explicacao": "A detecção de objetos do Custom Vision é o serviço apropriado para identificar e localizar objetos específicos (como produtos) dentro de uma imagem, retornando suas coordenadas. A classificação apenas categoriza a imagem, e o OCR do Computer Vision foca na extração de texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/get-started-build-detector",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //220
  {
    "tipo": "combobox",
    "texto": "Um sistema de monitoramento de tráfego que coleta números de matrícula de veículos de filmagens de CFTV é um exemplo de <combobox> no serviço de Visão Computacional.",
    "opcoes": [
      "Selecione uma resposta",
      "classificação de imagem",
      "detecção de objetos",
      "análise espacial",
      "extração de texto"
    ],
    "resposta": 4,
    "explicacao": "A extração de texto, ou OCR (Optical Character Recognition), é o recurso do serviço de Visão Computacional que permite identificar e extrair texto de imagens, como números de matrícula de veículos em filmagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //221
  {
    "tipo": "unica",
    "texto": "Você precisa construir uma solução de marcação de imagens para mídias sociais que marca automaticamente as imagens de seus amigos. Qual serviço do Azure Cognitive Services você deve usar?",
    "opcoes": [
      "Face",
      "Form Recognizer",
      "Language",
      "Computer Vision"
    ],
    "resposta": 0,
    "explicacao": "O serviço Azure AI Face (anteriormente Face API) é ideal para identificar e verificar faces humanas em imagens, o que é fundamental para marcar amigos automaticamente em fotos de mídias sociais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/whats-new",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //222
  {
    "tipo": "combobox",
    "texto": "Um historiador pode usar <combobox> para digitalizar artigos de jornal.",
    "opcoes": [
      "Selecione uma resposta",
      "análise facial",
      "classificação de imagem",
      "detecção de objetos",
      "reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 4,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é a tecnologia usada para converter diferentes tipos de documentos, como artigos de jornal, em dados editáveis e pesquisáveis. É essencial para digitalizar textos.",
    "link": "https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //223
  {
    "tipo": "comboboxs",
    "texto": "Você tem um aplicativo que identifica pássaros em imagens. O aplicativo executa as seguintes tarefas: identifica a localização dos pássaros na imagem; identifica as espécies dos pássaros na imagem. Que tipo de visão computacional cada tarefa usa? Para responder, selecione as opções apropriadas na área de resposta. Cada seleção correta vale um ponto.",

    "pares": [
      {
        "requisito": "Localizar os pássaros:",
        "opcoes": [
          "Legendas automatizadas",
          "Classificação de imagem",
          "Detecção de objetos",
          "Reconhecimento óptico de caracteres (OCR)"
        ],
        "resposta": 2
      },
      {
        "requisito": "Identificar as espécies dos pássaros:",
        "opcoes": [
          "Legendas automatizadas",
          "Classificação de imagem",
          "Detecção de objetos",
          "Reconhecimento óptico de caracteres (OCR)"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Localizar os pássaros na imagem envolve a detecção de objetos, que identifica a presença e o local de múltiplos objetos em uma imagem. Identificar as espécies dos pássaros é uma tarefa de classificação de imagem, onde a imagem ou partes dela são categorizadas com base em seu conteúdo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-object-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  //224
  {
    "tipo": "unica",
    "texto": "Você tem uma solução que lê manuscritos em diferentes idiomas e categoriza os manuscritos com base no tópico. Que tipos de cargas de trabalho de processamento de linguagem natural (PLN) a solução usa?",
    "opcoes": [
      "reconhecimento de fala e reconhecimento de entidade",
      "reconhecimento de fala e modelagem de linguagem",
      "tradução e extração de frases-chave",
      "tradução e análise de sentimento"
    ],
    "resposta": 2,
    "explicacao": "Para ler manuscritos em diferentes idiomas, a solução precisa de tradução. Para categorizar os manuscritos com base no tópico, a extração de frases-chave é utilizada para identificar os temas principais do texto, permitindo a categorização. Reconhecimento de fala não se aplica a manuscritos (texto escrito).",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/translator/translator-overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  //225
  {
    "tipo": "combobox",
    "texto": "A resposta interativa a perguntas inseridas por um usuário como parte de um aplicativo é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "detecção de anomalias",
      "visão computacional",
      "processamento de linguagem natural",
      "previsão"
    ],
    "resposta": 3,
    "explicacao": "O processamento de linguagem natural (PLN) é a área da inteligência artificial que permite que computadores entendam, interpretem e gerem linguagem humana. A interação através de perguntas e respostas é uma aplicação direta do PLN, comum em chatbots e assistentes virtuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  //226
  {
    "tipo": "unica",
    "texto": "Você tem 100 vídeos instrucionais que NÃO contêm áudio. Cada vídeo instrucional tem um roteiro. Você precisa gerar um arquivo de áudio de narração para cada vídeo com base no roteiro. Que tipo de carga de trabalho você deve usar?",
    "opcoes": [
      "modelagem de linguagem",
      "reconhecimento de fala",
      "síntese de fala",
      "tradução"
    ],
    "resposta": 2,
    "explicacao": "A síntese de fala é o processo de converter texto em fala humana. É o serviço ideal para gerar narrações de áudio a partir de roteiros, pois permite transformar o conteúdo textual em áudio para os vídeos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/speech-service/text-to-speech",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  //227
  {
    "tipo": "combobox",
    "texto": "O processamento de linguagem natural pode ser usado para <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "classificar mensagens de e-mail como relacionadas ao trabalho ou pessoais",
      "prever o número de aluguéis futuros de carros",
      "prever quais visitantes do site farão uma transação",
      "parar um processo em uma fábrica quando temperaturas extremamente altas forem registradas"
    ],
    "resposta": 1,
    "explicacao": "O processamento de linguagem natural (PLN) é uma área da IA que lida com a interação entre computadores e linguagem humana. Classificar mensagens de e-mail com base em seu conteúdo (como trabalho ou pessoal) é uma aplicação direta do PLN, que envolve a análise e compreensão do texto para atribuir categorias.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  //228
  {
    "tipo": "unica",
    "texto": "Qual serviço de IA você pode usar para extrair a intenção de uma entrada de usuário como “Ligue-me de volta mais tarde”?",
    "opcoes": [
      "Azure Cognitive Search",
      "Translator",
      "Language",
      "Speech"
    ],
    "resposta": 2,
    "explicacao": "O serviço Azure AI Language (anteriormente Azure Cognitive Services para Linguagem) fornece recursos de compreensão de linguagem natural, incluindo extração de intenção. Isso permite que um aplicativo entenda o propósito por trás de uma declaração do usuário, como 'Ligue-me de volta mais tarde'.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você está construindo um modelo de compreensão de linguagem para um negócio de comércio eletrônico. É necessário garantir que o modelo detecte quando declarações estão fora do escopo pretendido do modelo. O que você deve fazer?",
    "opcoes": [
      "Exportar o modelo",
      "Adicionar declarações à intenção None",
      "Criar uma entidade de tarefa predefinida",
      "Criar um novo modelo"
    ],
    "resposta": 1,
    "explicacao": "A intenção None é usada para classificar declarações que não pertencem a nenhuma das outras intenções personalizadas. Isso ajuda o modelo a identificar quando uma entrada está fora do escopo previsto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/conversational-language-understanding/concepts/none-intent",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> pode ser usado para criar aplicativos sem código que utilizam modelos integrados de processamento de linguagem natural.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure Health Bot",
      "Microsoft Bot Framework",
      "Power Virtual Agents"
    ],
    "resposta": 3,
    "explicacao": "O Power Virtual Agents é uma plataforma sem código que permite a criação de chatbots inteligentes utilizando modelos integrados de PLN, sem necessidade de conhecimento em programação.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um dispositivo inteligente em casa que responde a perguntas como 'Qual é o meu próximo compromisso?' é um exemplo de IA conversacional.",
      "Um recurso de chat interativo em um site corporativo pode ser implementado usando o Azure Bot Service.",
      "Gerar automaticamente legendas para vídeos pré-gravados é um exemplo de IA conversacional."
    ],
    "respostas": [true, true, false],
    "explicacao": "Dispositivos que interagem por meio de linguagem natural, como assistentes virtuais, são exemplos de IA conversacional. O Azure Bot Service permite criar experiências de chat interativas. A geração automática de legendas é uma tarefa de visão computacional, não de IA conversacional.",
    "link": "https://azure.microsoft.com/pt-br/products/ai-services/ai-bot-service?msockid=345c085ff06f67123f701e59f125667c",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual é um exemplo do princípio de IA responsável da Microsoft relacionado à transparência?",
    "opcoes": [
      "Garantir que as oportunidades sejam distribuídas igualmente entre todos os candidatos",
      "Ajudar os usuários a entender as decisões tomadas por um sistema de IA",
      "Garantir que os desenvolvedores sejam responsáveis pelas soluções que criam",
      "Garantir que os dados privilegiados dos usuários sejam armazenados de forma segura"
    ],
    "resposta": 1,
    "explicacao": "Transparência é um princípio da IA responsável da Microsoft que visa garantir que os sistemas de IA forneçam informações claras e compreensíveis sobre como funcionam e tomam decisões, permitindo que os usuários confiem e utilizem esses sistemas de forma eficaz.",
    "link": "https://learn.microsoft.com/pt-br/azure/well-architected/ai/responsible-ai",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa fornecer aos clientes a capacidade de consultar o status de pedidos usando telefones, redes sociais ou assistentes digitais. O que você deve usar?",
    "opcoes": [
      "Um modelo do Azure Machine Learning",
      "O serviço Translator",
      "Um modelo do Form Recognizer",
      "Azure Bot Service"
    ],
    "resposta": 3,
    "explicacao": "O Azure Bot Service oferece um ambiente integrado para o desenvolvimento de bots, permitindo criar, conectar, testar, implantar e gerenciar bots inteligentes. Ele permite interações naturais com os usuários por meio de diversos canais, como redes sociais e assistentes digitais.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você planeja construir uma solução de IA conversacional que possa ser disponibilizada no Microsoft Teams, Microsoft Cortana e Amazon Alexa. Qual serviço você deve usar?",
    "opcoes": [
      "Azure Bot Service",
      "Azure Cognitive Search",
      "Serviço de Fala",
      "Serviço de Linguagem"
    ],
    "resposta": 0,
    "explicacao": "O Azure Bot Service permite criar bots que podem ser integrados a soluções baseadas em voz, como Cortana, Alexa e Google Assistant. Ele fornece os canais e interfaces necessários para conectar bots a essas plataformas, permitindo interações por comandos de voz.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um recurso de chat interativo em um site corporativo pode ser implementado usando o Azure Bot Service.",
      "Gerar automaticamente legendas para vídeos pré-gravados é um exemplo de IA conversacional.",
      "Um dispositivo inteligente em casa que responde a perguntas como 'Qual é o meu próximo compromisso?' é um exemplo de IA conversacional."
    ],
    "respostas": [true, false, true],
    "explicacao": "O Azure Bot Service permite criar experiências de IA conversacional, como chatbots em sites. A geração automática de legendas é uma tarefa de conversão de fala em texto, não de IA conversacional. Dispositivos inteligentes que interagem por linguagem natural são exemplos de IA conversacional.",
    "link": "https://azure.microsoft.com/pt-br/products/ai-services/ai-bot-service?msockid=345c085ff06f67123f701e59f125667c",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure Cognitive Services pode ser usado para identificar documentos que contêm informações sensíveis?",
    "opcoes": [
      "Visão Personalizada",
      "Compreensão de Linguagem Conversacional",
      "Reconhecedor de Formulários"
    ],
    "resposta": 2,
    "explicacao": "O Azure Form Recognizer é projetado para analisar e extrair informações de documentos, incluindo dados estruturados e não estruturados. Ele pode identificar e processar informações sensíveis ao analisar o conteúdo dos documentos e categorizar os dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/applied-ai-services/form-recognizer/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "combobox",
    "texto": "Detectar flutuações incomuns de temperatura em uma máquina de grande porte é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "uma carga de trabalho de visão computacional",
      "uma carga de trabalho de mineração de conhecimento",
      "uma carga de trabalho de processamento de linguagem natural (PLN)",
      "uma carga de trabalho de detecção de anomalias"
    ],
    "resposta": 4,
    "explicacao": "A detecção de anomalias é usada para identificar padrões ou dados que não seguem o comportamento esperado. Isso é comum em sistemas de monitoramento, como máquinas industriais, onde desvios como variações de temperatura podem indicar falhas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Um dispositivo inteligente que responde à pergunta 'Qual é o preço das ações da Contoso Ltd.?' é um exemplo de qual carga de trabalho de IA?",
    "opcoes": [
      "Mineração de conhecimento",
      "Processamento de linguagem natural",
      "Visão computacional",
      "Detecção de anomalias"
    ],
    "resposta": 1,
    "explicacao": "O processamento de linguagem natural (PLN) permite que dispositivos inteligentes compreendam, interpretem e respondam a perguntas feitas em linguagem humana. Neste caso, o dispositivo interpreta a pergunta e fornece uma resposta relevante, caracterizando uma carga de trabalho de PLN.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/natural-language-processing",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada modelo de aprendizado de máquina à sua descrição correspondente.",
    "itens": [
      { "label": "Classificação" },
      { "label": "Agrupamento (Clustering)" },
      { "label": "Regressão" }
    ],
    "grupos": [
      "Um modelo de aprendizado supervisionado usado para prever valores numéricos.",
      "Um modelo de aprendizado supervisionado usado para prever categorias.",
      "Um modelo de aprendizado não supervisionado usado para agrupar entidades semelhantes com base em características."
    ],
    "respostas": {
      "Um modelo de aprendizado supervisionado usado para prever valores numéricos.": ["Regressão"],
      "Um modelo de aprendizado supervisionado usado para prever categorias.": ["Classificação"],
      "Um modelo de aprendizado não supervisionado usado para agrupar entidades semelhantes com base em características.": ["Agrupamento (Clustering)"]
    },
    "explicacao": "Modelos de regressão são usados para prever valores contínuos, como preços. Modelos de classificação são usados para prever categorias, como tipos de e-mails. Modelos de agrupamento são usados para identificar padrões e agrupar dados semelhantes sem rótulos prévios.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-automated-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma ferramenta que processará imagens de lojas de varejo e identificará os produtos de concorrentes. A solução deve ser treinada com imagens fornecidas pela sua empresa. Qual serviço de IA do Azure você deve usar?",
    "opcoes": [
      "Reconhecedor de Formulários",
      "Visão Personalizada",
      "Reconhecimento Facial",
      "Visão Computacional"
    ],
    "resposta": 1,
    "explicacao": "O Custom Vision permite treinar modelos personalizados com imagens fornecidas pela empresa, sendo ideal para tarefas de classificação e detecção de objetos, como identificar produtos de concorrentes em imagens de lojas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma ferramenta que processará imagens de lojas de varejo e identificará os produtos de concorrentes. A solução deve ser treinada com imagens fornecidas pela sua empresa. Qual serviço de IA do Azure você deve usar?",
    "opcoes": [
      "Reconhecedor de Formulários",
      "Visão Personalizada",
      "Reconhecimento Facial",
      "Visão Computacional"
    ],
    "resposta": 1,
    "explicacao": "O Custom Vision permite treinar modelos personalizados com imagens fornecidas pela empresa, sendo ideal para tarefas de classificação e detecção de objetos, como identificar produtos de concorrentes em imagens de lojas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "combobox",
    "texto": "Prever quantas horas extras um entregador trabalhará com base no número de pedidos recebidos é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificação",
      "Agrupamento",
      "Regressão"
    ],
    "resposta": 3,
    "explicacao": "A previsão de valores numéricos, como o número de horas extras, com base em dados de entrada, como o número de pedidos, caracteriza um modelo de regressão. A regressão é usada para prever variáveis contínuas.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-to-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Prever rendimentos agrícolas com base em condições climáticas e medições da qualidade do solo é um exemplo de qual tipo de modelo de aprendizado de máquina?",
    "opcoes": [
      "Classificação",
      "Regressão",
      "Agrupamento"
    ],
    "resposta": 1,
    "explicacao": "Modelos de regressão são utilizados para prever valores numéricos contínuos, como rendimentos agrícolas, com base em variáveis de entrada como clima e qualidade do solo. Eles são ideais para problemas em que a saída é uma quantidade numérica.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-to-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa identificar nomes de ruas com base em placas de rua em fotografias. Qual tipo de visão computacional deve ser utilizado?",
    "opcoes": [
      "Detecção de objetos",
      "Reconhecimento óptico de caracteres (OCR)",
      "Classificação de imagem",
      "Reconhecimento facial"
    ],
    "resposta": 1,
    "explicacao": "O reconhecimento óptico de caracteres (OCR) é utilizado para extrair e reconhecer texto em imagens, como nomes de ruas em placas. Ele identifica caracteres, letras e palavras a partir de dados visuais, sendo ideal para esse tipo de tarefa.",
    "link": "https://learn.microsoft.com/pt-br/azure/app-service/overview-ai-integration",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho de visão computacional aos cenários apropriados.",
    "itens": [
      { "label": "Classificação de imagem" },
      { "label": "Detecção de objetos" },
      { "label": "Reconhecimento óptico de caracteres (OCR)" }
    ],
    "grupos": [
      "Gerar legendas para imagens",
      "Extrair nomes de títulos de filmes de imagens de pôsteres",
      "Localizar veículos em imagens"
    ],
    "respostas": {
      "Gerar legendas para imagens": ["Classificação de imagem"],
      "Extrair nomes de títulos de filmes de imagens de pôsteres": ["Reconhecimento óptico de caracteres (OCR)"],
      "Localizar veículos em imagens": ["Detecção de objetos"]
    },
    "explicacao": "A classificação de imagem pode ser usada para gerar legendas ao identificar o conteúdo visual. O OCR é ideal para extrair texto de imagens, como títulos de filmes em pôsteres. A detecção de objetos é usada para localizar itens específicos, como veículos, dentro de imagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um bot que identifica os nomes de marcas de produtos em imagens de prateleiras de supermercado. Qual serviço esse bot utiliza?",
    "opcoes": [
      "Enriquecimento de IA para recursos do Azure Search",
      "Análise de imagem do Computer Vision",
      "Classificação de imagem do Custom Vision",
      "Recursos de compreensão de linguagem"
    ],
    "resposta": 1,
    "explicacao": "A análise de imagem do serviço Computer Vision permite a detecção de marcas comerciais em imagens, utilizando um banco de dados com milhares de logotipos globais. Essa funcionalidade é ideal para identificar marcas em fotos de prateleiras de supermercado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-brand-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-4"
  }




















];
