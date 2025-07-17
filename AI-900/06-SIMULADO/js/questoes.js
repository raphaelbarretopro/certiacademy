// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [

  {
    "tipo": "unica",
    "texto": "Você precisa disponibilizar os comunicados de imprensa da sua empresa em vários idiomas. Qual serviço deve ser utilizado?",
    "opcoes": [
      "Fala",
      "Linguagem",
      "Tradutor",
      "Personalizador"
    ],
    "resposta": 2,
    "explicacao": "O serviço Tradutor permite a tradução de textos em tempo real ou em lotes para mais de 100 idiomas, sendo ideal para cenários como comunicados multilíngues, agentes conversacionais e comunicação em aplicativos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem relatórios de sinistros de seguros armazenados como texto. Você precisa extrair termos-chave dos relatórios para gerar resumos. Qual tipo de carga de trabalho de IA você deve usar?",
    "opcoes": [
      "Detecção de anomalias",
      "Processamento de linguagem natural",
      "Visão computacional",
      "Mineração de conhecimento"
    ],
    "resposta": 1,
    "explicacao": "A extração de frases-chave é uma das funcionalidades oferecidas pelo Azure Cognitive Service for Language, uma coleção de algoritmos de aprendizado de máquina e IA na nuvem para desenvolver aplicativos inteligentes que envolvem linguagem escrita. Use a extração de frases-chave para identificar rapidamente os principais conceitos em um texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/language-service/key-phrase-extraction/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver um aplicativo que leia instruções de receitas em voz alta para dar suporte a usuários com visão reduzida. Qual serviço deve ser utilizado?",
    "opcoes": [
      "Serviço de linguagem",
      "Tradutor",
      "Fala",
      "Personalizador"
    ],
    "resposta": 2,
    "explicacao": "O serviço de Fala é uma solução gerenciada que oferece funcionalidades avançadas como conversão de fala em texto, texto em fala, tradução de fala e reconhecimento de locutor, sendo ideal para acessibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um bot de chat na web que fornece respostas a partir de uma base de conhecimento do QnA Maker. Você precisa garantir que o bot utilize o feedback dos usuários para melhorar a relevância das respostas ao longo do tempo. O que você deve usar?",
    "opcoes": [
      "Extração de frases-chave",
      "Análise de sentimento",
      "Lógica de negócios",
      "Aprendizado ativo"
    ],
    "resposta": 3,
    "explicacao": "O aprendizado ativo permite que o bot envie o feedback explícito do usuário para a base de conhecimento usando a API Train, melhorando assim a relevância das respostas ao longo do tempo com base nas interações reais.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/how-to/improve-knowledge-base",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma solução de IA conversacional que se comunicará com usuários por meio de vários canais, incluindo e-mail, Microsoft Teams e chat na web. Qual serviço você deve usar?",
    "opcoes": [
      "Análise de Texto",
      "Azure Bot Service",
      "Tradutor",
      "Form Recognizer"
    ],
    "resposta": 1,
    "explicacao": "O Azure Bot Service é projetado para criar soluções de IA conversacional que podem ser integradas a diversos canais de comunicação, como e-mail, Microsoft Teams e chat na web. Ele fornece ferramentas para criar, gerenciar e implantar bots de forma eficiente.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre cargas de trabalho de IA conversacional.",
    "afirmacoes": [
      "Um bot que responde a consultas de usuários internos é um exemplo de carga de trabalho de IA conversacional.",
      "Um aplicativo que exibe imagens relacionadas a um termo de pesquisa inserido é um exemplo de carga de trabalho de IA conversacional.",
      "Um formulário da web usado para enviar uma solicitação de redefinição de senha é um exemplo de carga de trabalho de IA conversacional."
    ],
    "respostas": [true, false, false],
    "explicacao": "1. Bots que interagem com usuários por texto ou voz são exemplos clássicos de IA conversacional.\n2. Exibir imagens com base em termos de pesquisa é uma funcionalidade de recuperação de dados, não envolve diálogo.\n3. Formulários web são elementos de interface do usuário e não representam interações conversacionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/ai-ml/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "multipla",
    "texto": "Você precisa fornecer conteúdo para um chatbot empresarial que ajudará a responder consultas simples de usuários. Quais são três maneiras de criar texto de perguntas e respostas usando o QnA Maker?",
    "opcoes": [
      "Gerar as perguntas e respostas a partir de uma página da web existente.",
      "Usar aprendizado de máquina automatizado para treinar um modelo com base em um arquivo que contém as perguntas.",
      "Inserir manualmente as perguntas e respostas.",
      "Conectar o bot ao canal Cortana e fazer perguntas usando a Cortana.",
      "Importar conteúdo de conversa informal a partir de uma fonte de dados predefinida."
    ],
    "respostas": [0, 2, 4],
    "explicacao": "O QnA Maker permite gerar pares de perguntas e respostas automaticamente a partir de conteúdo semiestruturado como páginas de FAQ, inserir manualmente perguntas e respostas, e importar conteúdo de conversa informal (chit-chat) de fontes predefinidas. O uso de aprendizado de máquina automatizado ou integração com Cortana não são métodos suportados para criação de conteúdo no QnA Maker.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/concepts/content-types",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um arquivo PDF de perguntas frequentes (FAQ). Você precisa criar um sistema de suporte conversacional com base nesse FAQ. Qual serviço deve ser utilizado?",
    "opcoes": [
      "QnA Maker",
      "Análise de Texto",
      "Visão Computacional",
      "Language Understanding (LUIS)"
    ],
    "resposta": 0,
    "explicacao": "O QnA Maker é um serviço baseado em nuvem que permite criar uma camada de perguntas e respostas conversacional sobre dados existentes. Ele pode extrair perguntas e respostas de conteúdo semiestruturado, como FAQs, manuais e documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "multipla",
    "texto": "Você precisa reduzir a carga sobre os operadores telefônicos implementando um chatbot para responder perguntas simples com respostas predefinidas. Quais dois serviços de IA devem ser utilizados para atingir esse objetivo?",
    "opcoes": [
      "Análise de Texto",
      "QnA Maker",
      "Azure Bot Service",
      "Tradutor"
    ],
    "respostas": [1, 2],
    "explicacao": "O QnA Maker permite criar uma base de conhecimento com perguntas e respostas predefinidas, enquanto o Azure Bot Service possibilita a criação e implantação de bots que interagem com os usuários por meio de diversos canais de comunicação.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/build-faq-chatbot-qna-maker-azure-bot-service/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois cenários são exemplos de uma carga de trabalho de IA conversacional?",
    "opcoes": [
      "Um dispositivo inteligente em casa que responde a perguntas como 'Como estará o tempo hoje?'",
      "Um site que usa uma base de conhecimento para responder interativamente às perguntas dos usuários",
      "Máquinas de linha de montagem que inserem faróis em carros de forma autônoma",
      "Monitoramento da temperatura de máquinas para ativar um ventilador quando a temperatura atinge um limite específico"
    ],
    "respostas": [0, 1],
    "explicacao": "Dispositivos inteligentes que respondem a comandos de voz e sites que utilizam bases de conhecimento para interagir com usuários são exemplos de cargas de trabalho de IA conversacional, pois envolvem processamento e resposta em linguagem natural. Já os exemplos de automação industrial e monitoramento ambiental não envolvem interação em linguagem natural.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/ai-ml/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de solução de IA é mostrado no diagrama?",
    "imagemUrl": "img/135.png",
    "opcoes": [
      "Uma solução de análise de sentimento",
      "Um chatbot",
      "Um modelo de aprendizado de máquina",
      "Uma aplicação de visão computacional"
    ],
    "resposta": 1,
    "explicacao": "O diagrama mostra a interação entre um usuário e um bot que responde a perguntas com base em uma base de conhecimento. Esse comportamento é típico de um chatbot, que utiliza dados estruturados para fornecer respostas informativas. Não há análise de sentimentos, processamento de imagens ou uso de modelos preditivos envolvidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/ai-ml/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver uma solução de IA baseada na web para um sistema de suporte ao cliente. Os usuários devem ser capazes de interagir com um aplicativo web que os guiará até o melhor recurso ou resposta. Qual serviço deve ser utilizado?",
    "opcoes": [
      "Custom Vision",
      "QnA Maker",
      "Tradutor de Texto",
      "Face"
    ],
    "resposta": 1,
    "explicacao": "O QnA Maker é um serviço de API baseado em nuvem que permite criar uma camada de perguntas e respostas conversacional sobre dados existentes. Ele extrai perguntas e respostas de conteúdo semiestruturado, como FAQs e manuais, e responde automaticamente às perguntas dos usuários com base na base de conhecimento.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço de IA deve ser utilizado para criar um bot a partir de um documento de perguntas frequentes (FAQ)?",
    "opcoes": [
      "QnA Maker",
      "Language Understanding (LUIS)",
      "Análise de Texto",
      "Fala"
    ],
    "resposta": 0,
    "explicacao": "O QnA Maker é um serviço de IA projetado especificamente para criar bots que respondem a perguntas com base em documentos de perguntas frequentes (FAQ). Ele permite transformar documentos em uma base de conhecimento que pode ser utilizada por um bot para fornecer respostas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "combobox",
    "texto": "A resposta interativa a perguntas inseridas por um usuário como parte de um aplicativo é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Detecção de anomalias",
      "Visão computacional",
      "IA conversacional",
      "Previsão"
    ],
    "resposta": 3,
    "explicacao": "A IA conversacional permite que aplicativos interajam com os usuários por meio de linguagem natural, respondendo perguntas e conduzindo diálogos. Ferramentas da Microsoft como o Azure Bot Service e o QnA Maker são exemplos de soluções para esse tipo de carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/example-scenario/ai/conversational-ai",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual cenário é um exemplo de um bot de chat na web?",
    "opcoes": [
      "Determinar se as avaliações inseridas em um site para um show são positivas ou negativas e adicionar um emoji de positivo ou negativo às avaliações.",
      "Traduzir para o inglês perguntas inseridas por clientes em um quiosque para que a pessoa apropriada possa retornar a ligação.",
      "Aceitar perguntas por e-mail e encaminhar as mensagens para a pessoa correta com base no conteúdo.",
      "A partir de uma interface de site, responder a perguntas comuns sobre eventos programados e compra de ingressos para um festival de música."
    ],
    "resposta": 3,
    "explicacao": "Um bot de chat na web é um chatbot integrado a um site, permitindo que os usuários interajam em tempo real por meio de uma interface de chat. O cenário descrito na alternativa correta representa exatamente esse tipo de interação.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/ai-ml/",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o serviço QnA Maker.",
    "afirmacoes": [
      "Você pode usar o QnA Maker para consultar um banco de dados Azure SQL.",
      "Você deve usar o QnA Maker quando quiser que uma base de conhecimento forneça a mesma resposta para diferentes usuários que enviam perguntas semelhantes.",
      "O serviço QnA Maker pode determinar a intenção de uma expressão do usuário."
    ],
    "respostas": [false, true, false],
    "explicacao": "1. O QnA Maker não é projetado para consultar diretamente bancos de dados como o Azure SQL; ele trabalha com conteúdo semiestruturado como FAQs e documentos.\n2. O QnA Maker é ideal para fornecer respostas consistentes a perguntas semelhantes, utilizando uma base de conhecimento.\n3. A determinação de intenção é uma funcionalidade do LUIS, não do QnA Maker, que se concentra em fornecer respostas baseadas em perguntas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os canais de comunicação com bots no Azure.",
    "afirmacoes": [
      "Você pode se comunicar com um bot usando o Cortana.",
      "Você pode se comunicar com um bot usando o Microsoft Teams.",
      "Você pode se comunicar com um bot usando uma interface de chat na web."
    ],
    "respostas": [true, true, true],
    "explicacao": "Bots no Azure podem ser integrados a diversos canais de comunicação, incluindo Cortana, Microsoft Teams e interfaces de chat na web. Esses canais permitem que os usuários interajam com bots de forma natural e acessível em diferentes plataformas.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-manage-channels?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso de chatbots por restaurantes.",
    "afirmacoes": [
      "Um restaurante pode usar um chatbot para permitir que os clientes façam reservas por meio de um site ou aplicativo.",
      "Um restaurante pode usar um chatbot para responder a perguntas sobre o horário de funcionamento a partir de uma página da web.",
      "Um restaurante pode usar um chatbot para automatizar respostas a avaliações de clientes em um site externo."
    ],
    "respostas": [true, true, true],
    "explicacao": "Chatbots podem ser integrados a sites e aplicativos para facilitar reservas, responder perguntas frequentes como horários de funcionamento e, em alguns casos, automatizar respostas a avaliações em plataformas externas, desde que essas plataformas permitam integração via API.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois cenários são exemplos de uma carga de trabalho de IA conversacional?",
    "opcoes": [
      "Um serviço de atendimento telefônico que possui uma mensagem pré-gravada.",
      "Um chatbot que fornece aos usuários a capacidade de encontrar respostas em um site por conta própria.",
      "Menus de voz telefônicos para reduzir a carga sobre os recursos humanos.",
      "Um serviço que cria documentos de perguntas frequentes (FAQ) rastreando sites públicos."
    ],
    "respostas": [1, 2],
    "explicacao": "Chatbots e menus de voz interativos são exemplos de cargas de trabalho de IA conversacional, pois envolvem interação direta com os usuários por meio de linguagem natural. Já mensagens pré-gravadas e geração automática de documentos não envolvem interação em tempo real com o usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/solution-ideas/articles/interactive-voice-response-bot",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o Azure Bot Service.",
    "afirmacoes": [
      "O Azure Bot Service e os Serviços Cognitivos do Azure podem ser integrados.",
      "O Azure Bot Service interage com os clientes de forma conversacional.",
      "O Azure Bot Service pode importar perguntas frequentes (FAQ) para conjuntos de perguntas e respostas."
    ],
    "respostas": [true, true, false],
    "explicacao": "O Azure Bot Service pode ser integrado aos Serviços Cognitivos do Azure para adicionar capacidades de IA como reconhecimento de fala e linguagem natural. Ele permite interações conversacionais com os usuários. No entanto, a importação de FAQs para conjuntos de perguntas e respostas é feita por meio do serviço QnA Maker, que cria uma base de conhecimento separada.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-builder-tutorial-add-qna?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre cargas de trabalho de IA conversacional.",
    "afirmacoes": [
      "Um bot de chat na web pode interagir com usuários que visitam um site.",
      "Gerar automaticamente legendas para vídeos pré-gravados é um exemplo de IA conversacional.",
      "Um dispositivo inteligente em casa que responde a perguntas como 'Como estará o tempo hoje?' é um exemplo de IA conversacional."
    ],
    "respostas": [true, false, true],
    "explicacao": "Bots de chat na web são projetados para interagir com visitantes de sites, oferecendo suporte e informações. A geração automática de legendas é uma tarefa de processamento de fala, não envolvendo interação, portanto não é IA conversacional. Dispositivos inteligentes como assistentes virtuais utilizam IA conversacional para responder a perguntas em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/reference-architectures/ai/conversational-bot",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma base de conhecimento com perguntas frequentes (FAQ). Você cria um bot que usa essa base para responder a solicitações de clientes. O que o bot pode realizar sem adicionar habilidades adicionais?",
    "opcoes": [
      "Registrar compras de clientes.",
      "Registrar reclamações de clientes.",
      "Responder a perguntas de vários usuários simultaneamente.",
      "Fornecer números de autorização de devolução de materiais (RMA) aos clientes."
    ],
    "resposta": 2,
    "explicacao": "Um bot baseado em FAQ é projetado para responder a perguntas predefinidas e pode atender vários usuários simultaneamente sem necessidade de habilidades adicionais ou integrações com sistemas externos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/qnamaker/overview/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso de chatbots por restaurantes.",
    "afirmacoes": [
      "Um restaurante pode usar um chatbot para responder a perguntas por meio do Cortana.",
      "Um restaurante pode usar um chatbot para responder a perguntas sobre o horário de funcionamento a partir de uma página da web.",
      "Um restaurante pode usar um chatbot para automatizar respostas a avaliações de clientes em um site externo."
    ],
    "respostas": [true, true, true],
    "explicacao": "É possível integrar bots ao Cortana usando o Microsoft Bot Framework. Chatbots também podem ser usados para responder perguntas frequentes, como horários de funcionamento, por meio de páginas da web utilizando serviços como o QnA Maker. Além disso, dependendo das permissões da plataforma, é possível automatizar respostas a avaliações de clientes em sites externos por meio de APIs.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o Azure Bot Service.",
    "afirmacoes": [
      "Chatbots só podem ser criados usando código personalizado.",
      "O Azure Bot Service fornece serviços que podem ser usados para hospedar bots conversacionais.",
      "Bots criados com o Azure Bot Service podem se comunicar com usuários do Microsoft Teams."
    ],
    "respostas": [false, true, true],
    "explicacao": "Chatbots podem ser criados sem código usando ferramentas como o Power Virtual Agents, integradas ao Azure Bot Service. O Azure Bot Service permite hospedar bots conversacionais e configurá-los para se comunicar com usuários do Microsoft Teams por meio de canais integrados.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/channel-connect-teams?view=azure-bot-service-4.0",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "combobox",
    "texto": "As capacidades de visão computacional podem ser implantadas para <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Desenvolver um chatbot baseado em texto para um site.",
      "Identificar comportamentos anômalos de clientes em uma loja online.",
      "Integrar um recurso de reconhecimento facial em um aplicativo.",
      "Sugerir respostas automatizadas para e-mails recebidos."
    ],
    "resposta": 3,
    "explicacao": "As capacidades de visão computacional, como as oferecidas pelo serviço Azure Computer Vision, são utilizadas para processar e analisar imagens. Isso inclui funcionalidades como reconhecimento facial, análise de objetos e extração de texto de imagens. Integrar reconhecimento facial em um aplicativo é um exemplo direto de aplicação dessas capacidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um pipeline do Azure Machine Learning que contém um módulo Split Data. O módulo Split Data envia saídas para os módulos Train Model e Score Model. Qual é a função do módulo Split Data?",
    "opcoes": [
      "Escalonar variáveis numéricas para que estejam dentro de um intervalo numérico consistente.",
      "Criar conjuntos de dados de treinamento e validação.",
      "Desviar registros que possuem dados ausentes.",
      "Selecionar colunas que devem ser incluídas no modelo."
    ],
    "resposta": 1,
    "explicacao": "O módulo Split Data é utilizado para dividir um conjunto de dados em dois subconjuntos distintos, geralmente para fins de treinamento e validação. Ele permite configurar a proporção da divisão e pode aplicar randomização para garantir uma distribuição equilibrada.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/component-reference/split-data?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual das afirmações a seguir é um exemplo de um princípio de IA responsável da Microsoft?",
    "opcoes": [
      "Sistemas de IA devem usar apenas dados disponíveis publicamente.",
      "Sistemas de IA devem ser transparentes e inclusivos.",
      "Sistemas de IA devem manter detalhes pessoais públicos.",
      "Sistemas de IA devem proteger os interesses da empresa."
    ],
    "resposta": 1,
    "explicacao": "A Microsoft adota princípios de IA responsável que incluem transparência e inclusão. Esses princípios garantem que os sistemas de IA sejam compreensíveis, acessíveis e projetados para atender a uma ampla diversidade de usuários, promovendo equidade e acessibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#inclusiveness",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho de processamento de linguagem natural aos cenários apropriados.",
    "itens": [
      { "label": "Reconhecimento de entidades" },
      { "label": "Extração de frases-chave" },
      { "label": "Modelagem de linguagem" },
      { "label": "Análise de sentimento" },
      { "label": "Reconhecimento e síntese de fala" },
      { "label": "Tradução" }
    ],
    "grupos": [
      "Extrai pessoas, locais e organizações do texto.",
      "Avalia o texto em uma escala positiva-negativa.",
      "Converte texto para um idioma diferente."
    ],
    "respostas": {
      "Extrai pessoas, locais e organizações do texto.": ["Reconhecimento de entidades"],
      "Avalia o texto em uma escala positiva-negativa.": ["Análise de sentimento"],
      "Converte texto para um idioma diferente.": ["Tradução"]
    },
    "explicacao": "O reconhecimento de entidades identifica e classifica entidades como pessoas, locais e organizações em textos não estruturados. A análise de sentimento avalia o conteúdo textual para determinar a polaridade emocional. A tradução converte o conteúdo textual de um idioma para outro.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/language-service/named-entity-recognition/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "multipla",
    "texto": "Você precisa reduzir a carga sobre os operadores telefônicos implementando um chatbot para responder a perguntas simples com respostas predefinidas. Quais dois serviços de IA você deve usar para atingir esse objetivo?",
    "opcoes": [
      "Azure Machine Learning",
      "Azure Bot Service",
      "Serviço de Linguagem",
      "Tradutor"
    ],
    "respostas": [1, 2],
    "explicacao": "O Azure Bot Service é uma plataforma para criação e gerenciamento de chatbots, ideal para responder a perguntas simples. O Serviço de Linguagem oferece capacidades de processamento de linguagem natural, essenciais para interpretar perguntas e fornecer respostas relevantes. Azure Machine Learning e Tradutor não são os serviços mais indicados para esse cenário específico.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/question-answering/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os princípios de IA responsável às descrições apropriadas.",
    "itens": [
      { "label": "Justiça" },
      { "label": "Inclusividade" },
      { "label": "Privacidade e segurança" },
      { "label": "Confiabilidade e segurança" }
    ],
    "grupos": [
      "Os sistemas de IA devem operar consistentemente conforme o esperado, mesmo em condições inesperadas.",
      "Os sistemas de IA devem proteger e garantir a segurança das informações pessoais e comerciais."
    ],
    "respostas": {
      "Os sistemas de IA devem operar consistentemente conforme o esperado, mesmo em condições inesperadas.": ["Confiabilidade e segurança"],
      "Os sistemas de IA devem proteger e garantir a segurança das informações pessoais e comerciais.": ["Privacidade e segurança"]
    },
    "explicacao": "Confiabilidade e segurança garantem que os sistemas de IA funcionem conforme o esperado, mesmo em situações imprevistas. Privacidade e segurança asseguram que dados pessoais e comerciais sejam protegidos contra acessos não autorizados.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#reliability-and-safety",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Durante o processo de aprendizado de máquina, quando você deve revisar as métricas de avaliação?",
    "opcoes": [
      "Antes de treinar um modelo.",
      "Depois de limpar os dados.",
      "Antes de escolher o tipo de modelo.",
      "Depois de testar um modelo nos dados de validação."
    ],
    "resposta": 3,
    "explicacao": "As métricas de avaliação devem ser revisadas após testar o modelo nos dados de validação, pois é nesse momento que se verifica o desempenho do modelo em dados que não foram usados durante o treinamento.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/use-automated-machine-learning/5-machine-learning-steps",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um modelo de processamento de linguagem natural (PLN) que foi criado usando dados obtidos sem permissão. Qual princípio da Microsoft para IA responsável está sendo violado?",
    "opcoes": [
      "Confiabilidade e segurança",
      "Privacidade e segurança",
      "Inclusividade",
      "Transparência"
    ],
    "resposta": 1,
    "explicacao": "O uso de dados obtidos sem permissão viola o princípio de privacidade e segurança, que enfatiza a importância de respeitar a privacidade dos indivíduos e proteger seus dados. A coleta e o uso de dados devem ser realizados de forma legal e ética.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#privacy-and-security",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-6"
  },
  {
    "tipo": "combobox",
    "texto": "Garantir que um sistema de IA não forneça uma previsão quando campos importantes contêm valores incomuns ou ausentes é <combobox> princípio para IA responsável.",
    "opcoes": [
      "Selecione uma resposta",
      "um princípio de inclusividade",
      "um princípio de privacidade e segurança",
      "um princípio de confiabilidade e segurança",
      "um princípio de transparência"
    ],
    "resposta": 3,
    "explicacao": "Confiabilidade e segurança garantem que os sistemas de IA operem conforme o esperado, mesmo em situações inesperadas. Isso inclui a capacidade de lidar adequadamente com dados incompletos ou anômalos, evitando previsões incorretas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/innovate/best-practices/trusted-ai#reliability-and-safety",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços às descrições apropriadas.",
    "itens": [
      { "label": "Armazenamento do Azure" },
      { "label": "Serviço de Bot do Azure" },
      { "label": "Serviço de Linguagem" },
      { "label": "Fala" }
    ],
    "grupos": [
      "Permite o uso de linguagem natural para consultar uma base de conhecimento.",
      "Permite a transcrição em tempo real de fala para texto."
    ],
    "respostas": {
      "Permite o uso de linguagem natural para consultar uma base de conhecimento.": ["Serviço de Linguagem"],
      "Permite a transcrição em tempo real de fala para texto.": ["Fala"]
    },
    "explicacao": "O Serviço de Linguagem permite criar uma base de conhecimento com perguntas e respostas que pode ser consultada por meio de linguagem natural. O serviço de Fala oferece funcionalidades de transcrição de fala para texto em tempo real, além de conversão de texto em fala.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/speech-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual técnica de aprendizado de máquina pode ser usada para detecção de anomalias?",
    "opcoes": [
      "Uma técnica de aprendizado de máquina que classifica objetos com base em imagens fornecidas pelo usuário.",
      "Uma técnica de aprendizado de máquina que compreende linguagem escrita e falada.",
      "Uma técnica de aprendizado de máquina que classifica imagens com base em seu conteúdo.",
      "Uma técnica de aprendizado de máquina que analisa dados ao longo do tempo e identifica mudanças incomuns."
    ],
    "resposta": 3,
    "explicacao": "A detecção de anomalias utiliza técnicas de aprendizado de máquina que analisam séries temporais para identificar padrões incomuns ou desvios significativos, sendo útil para monitoramento e alertas em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/anomaly-detector/overview",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um sistema de aprovação de empréstimos baseado em IA. Durante os testes, você descobre que o sistema apresenta viés de gênero. Qual princípio de IA responsável está sendo violado?",
    "opcoes": [
      "Responsabilidade",
      "Confiabilidade e segurança",
      "Transparência",
      "Justiça"
    ],
    "resposta": 3,
    "explicacao": "A justiça é um princípio fundamental da IA responsável que exige que os sistemas tratem todos de forma equitativa, sem discriminar grupos com características semelhantes. Um viés de gênero indica que o sistema está tratando pessoas de forma desigual com base em seu gênero, o que viola esse princípio.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai?view=azureml-api-2#fairness-and-inclusiveness",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um sistema para prever os preços de seguros para motoristas no Reino Unido. Você precisa minimizar o viés no sistema. O que você deve fazer?",
    "opcoes": [
      "Remover informações sobre características protegidas dos dados antes da amostragem.",
      "Selecionar uma amostra de treinamento que seja representativa da população do Reino Unido.",
      "Criar um conjunto de dados de treinamento com dados de seguradoras globais.",
      "Selecionar uma amostra de treinamento completamente aleatória."
    ],
    "resposta": 1,
    "explicacao": "Para minimizar o viés no sistema, é importante que os dados de treinamento sejam representativos da população que está sendo modelada. Isso garante que as previsões do modelo sejam válidas para toda a gama de motoristas no Reino Unido.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-fairness-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "combobox",
    "texto": "Azure Machine Learning designer permite criar modelos de aprendizado de máquina por meio de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "adicionar e conectar módulos em uma tela visual.",
      "executar automaticamente tarefas comuns de preparação de dados.",
      "selecionar automaticamente um algoritmo para construir o modelo mais preciso.",
      "usar uma experiência de notebook orientada por código."
    ],
    "resposta": 1,
    "explicacao": "O Azure Machine Learning designer é uma interface visual baseada em arrastar e soltar que permite criar pipelines de aprendizado de máquina conectando módulos em uma tela visual.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um conjunto de dados. Você precisa construir um modelo de classificação no Azure Machine Learning que identifique produtos defeituosos. O que você deve fazer primeiro?",
    "opcoes": [
      "Carregar o conjunto de dados.",
      "Criar um modelo de clusterização.",
      "Dividir os dados em conjuntos de treinamento e teste.",
      "Criar um modelo de classificação."
    ],
    "resposta": 0,
    "explicacao": "Ao construir um modelo de aprendizado de máquina, o primeiro passo é carregar o conjunto de dados. Isso permite realizar tarefas subsequentes como pré-processamento, divisão e treinamento do modelo. Sem carregar os dados, não é possível prosseguir com as etapas seguintes.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-ml-pipelines?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "unica",
    "texto": "Você está utilizando o Azure Machine Learning designer para construir um pipeline de modelo. O que você deve criar antes de executar o pipeline?",
    "opcoes": [
      "Um modelo registrado.",
      "Um recurso de computação.",
      "Um notebook Jupyter."
    ],
    "resposta": 1,
    "explicacao": "No Azure Machine Learning Designer, é necessário um recurso de computação para executar o pipeline. Esse recurso fornece o poder de processamento necessário para realizar etapas como treinamento de modelos, processamento de dados e avaliação de resultados.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe a ferramenta à tarefa correspondente no Azure Machine Learning.",
    "itens": [
      { "label": "Automação de aprendizado de máquina (automated ML)" },
      { "label": "O portal do Azure" },
      { "label": "Machine Learning designer" }
    ],
    "grupos": [
      "Criar um workspace de Machine Learning",
      "Usar uma interface de arrastar e soltar para treinar e implantar modelos",
      "Usar um assistente para selecionar configurações para uma execução de aprendizado de máquina"
    ],
    "respostas": {
      "Criar um workspace de Machine Learning": ["O portal do Azure"],
      "Usar uma interface de arrastar e soltar para treinar e implantar modelos": ["Machine Learning designer"],
      "Usar um assistente para selecionar configurações para uma execução de aprendizado de máquina": ["Automação de aprendizado de máquina (automated ML)"]
    },
    "explicacao": "O portal do Azure é utilizado para criar workspaces de Machine Learning. O Machine Learning designer oferece uma interface visual de arrastar e soltar para construir e implantar modelos. O Automated ML fornece um assistente que ajuda a configurar execuções de aprendizado de máquina automaticamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/overview-what-is-azure-ml",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-6"
  }

























];
