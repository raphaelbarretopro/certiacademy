// ==========================================
// Arquivo: questoes_bloco02.js
// Descrição: Simulado AI-901 — Domínios Oficiais Atualizados
// BLOCO 02 de 04
// ==========================================

export const questoes = [
  // Questão Original: 33
  {
    "tipo": "unica",
    "texto": "Você tem um projeto no Azure AI Foundry que contém um agente chamado Agent1. Você precisa garantir que o Agent1 sempre chame uma Azure Function quando responder à entrada do usuário. Como você deve definir o parâmetro `tool_choice` para o Agent1?",
    "opcoes": ["required", "auto", "none"],
    "resposta": 0,
    "explicacao": "Definir tool_choice como 'required' força o modelo a selecionar e usar pelo menos uma ferramenta antes de retornar uma resposta ao usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/function-calling",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 34
  {
    "tipo": "combobox",
    "texto": "<combobox> define quais campos extrair ao analisar conteúdo usando o Azure Content Understanding (Inteligência de Documentos).",
    "opcoes": ["Selecione uma opção", "Uma lista de palavras-chave (keyword list)", "Um processamento exclusivo de reconhecimento óptico de caracteres (OCR)", "Um esquema (schema)", "Uma chamada de API síncrona"],
    "resposta": 3,
    "explicacao": "Ao configurar um analisador personalizado, você define um esquema (schema). O esquema atua como o esqueleto estrutural que dita ao modelo de IA quais campos específicos, rótulos e tipos de dados ele deve procurar e extrair do documento.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/concept-custom",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 35
  {
    "tipo": "unica",
    "texto": "Você tem um projeto no Microsoft Foundry que contém uma implantação (deployment) de modelo habilitado para visão. Você precisa desenvolver um aplicativo que envie uma mensagem contendo texto e uma URL de imagem. A solução deve garantir o menor tempo de resposta (menor latência) possível. Qual estrutura de mensagem você deve incluir na solicitação?",
    "opcoes": ["Uma mensagem do sistema (system message) que inclua tanto o item de texto quanto o item de imagem no array de conteúdo.", "Uma mensagem do sistema que inclua apenas um item de texto e envie o item de imagem em uma solicitação separada.", "Uma mensagem de usuário (user message) que inclua apenas o texto e envie o item de imagem em uma solicitação separada.", "Uma mensagem de usuário (user message) que inclua tanto o item de texto quanto o item de imagem no array de conteúdo."],
    "resposta": 3,
    "explicacao": "Para minimizar a latência e o número de viagens de ida e volta (round trips) na rede, você deve enviar uma única mensagem de usuário (role: user) contendo um array de conteúdo (content array) que carregue o bloco de texto e o bloco de imagem na mesma solicitação HTTP.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 36
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o uso de imagens em modelos multimodais.",
    "afirmacoes": ["No playground do Foundry, você pode fazer upload de uma imagem local e incluir texto na mesma mensagem ao fornecer prompts para um modelo multimodal.", "Ao usar a API de Respostas da OpenAI e um modelo habilitado para visão, as imagens podem ser fornecidas apenas como dados de imagem codificados em base64.", "Prompts que incluem imagens exigem a implantação de um modelo apenas de texto, porque as capacidades multimodais são tratadas na camada de aplicativo."],
    "respostas": [true, false, false],
    "explicacao": "A afirmação 2 é falsa porque as imagens também podem ser fornecidas via URLs HTTP públicas, não apenas base64. A afirmação 3 é falsa porque o próprio modelo fundacional precisa ser inerentemente multimodal (ex.: GPT-4o) para processar os tokens visuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 37
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo que processa gravações de correio de voz usando o Azure Content Understanding no Foundry Tools. Qual recurso o serviço usa para converter áudio em texto?",
    "opcoes": ["Extração de frases-chave (key phrase extraction)", "Transcrição (transcription)", "Voice Live", "Reconhecimento Óptico de Caracteres (OCR)"],
    "resposta": 1,
    "explicacao": "A transcrição (conversão de fala em texto ou Speech-to-Text) é o processo dedicado a escutar arquivos de áudio, como correios de voz, e transformá-los em uma transcrição textual digitalizada.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 38
  {
    "tipo": "dragdrop",
    "texto": "Você está desenvolvendo um aplicativo em Python usando a API da OpenAI. Você precisa enviar tanto o texto quanto o conteúdo da imagem na mesma solicitação (request). Arraste os valores apropriados para completar a estrutura JSON do array `content`.",
    "itens": [{ "label": "input_text" }, { "label": "input_image" }, { "label": "input_url" }, { "label": "output_image" }],
    "grupos": ["{\"type\": \"___\", \"text\": \"O que há nesta imagem?\"}", "{\"type\": \"___\", \"image_url\": image_url}"],
    "respostas": {
      "{\"type\": \"___\", \"text\": \"O que há nesta imagem?\"}": ["input_text"],
      "{\"type\": \"___\", \"image_url\": image_url}": ["input_image"]
    },
    "explicacao": "Você diferencia a entrada de texto da entrada de imagem declarando explicitamente o tipo do bloco no payload, associando o tipo de entrada (input_text e input_image) aos campos respectivos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 39
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo que analisa gravações de correio de voz. Você precisa extrair uma transcrição e informações estruturadas das gravações. Qual tipo de analisador (analyzer) você deve usar?",
    "opcoes": ["analisador de documentos (document analyzer)", "analisador de vídeo (video analyzer)", "analisador de áudio (audio analyzer)", "analisador de imagem (image analyzer)"],
    "resposta": 2,
    "explicacao": "O audio analyzer é o componente encarregado de processar cargas de trabalho acústicas. Ele transcreve o áudio e, na sequência, permite usar esquemas de IA para extrair informações estruturadas do conteúdo falado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/batch-transcription",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 40
  {
    "tipo": "multipla",
    "texto": "Você possui uma implantação de modelo habilitado para visão. Você precisa garantir que o modelo consiga analisar as imagens enviadas por sua aplicação. Em quais DOIS formatos válidos você pode fornecer as imagens? (Escolha duas)",
    "opcoes": ["Uma string de dados de imagem codificada em base64.", "Um documento JSON que descreve o conteúdo da imagem.", "Uma descrição em texto codificada em UTF-8 da imagem.", "Uma URL publicamente acessível da imagem."],
    "respostas": [0, 3],
    "explicacao": "A API de visão suporta a ingestão de imagens de duas maneiras nativas: via URLs absolutas acessíveis publicamente, ou via injeção direta de strings base64 no corpo da requisição (payload).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 41
  {
    "tipo": "combobox",
    "texto": "Após implantar um modelo GPT habilitado para visão no Azure AI Foundry, você deve configurar seu aplicativo para enviar solicitações (requests) para o(a) <combobox>.",
    "opcoes": ["Selecione uma opção", "ponto de extremidade (endpoint) do modelo", "pipeline de avaliação do modelo", "playground do Foundry", "dataset de treinamento do modelo"],
    "resposta": 1,
    "explicacao": "Ao concluir uma implantação (deployment), o Azure gera um ponto de extremidade (endpoint) de API seguro. Aplicações de terceiros se conectam diretamente a esta URL de endpoint para enviar os prompts e realizar a inferência.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 42
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo que extrai campos de PDFs usando o Azure Content Understanding (Inteligência de Documentos). Você precisa usar o SDK de Python para enviar o PDF para análise e recuperar os resultados. O que você deve fazer?",
    "opcoes": ["Chamar `analyze()` para retornar os campos extraídos de forma síncrona na mesma solicitação.", "Enviar o PDF para um analisador e ler os resultados nos cabeçalhos (headers) da solicitação.", "Chamar `begin_analyze()` e, em seguida, chamar `poller.result()` para recuperar os resultados.", "Usar OCR para extrair texto do PDF e mapear os campos manualmente no código."],
    "resposta": 2,
    "explicacao": "Como a análise de documentos complexos é uma operação de longa duração, a implementação correta no Azure SDK envolve iniciar o trabalho assíncrono chamando begin_analyze() e usar o método result() do poller gerado para aguardar e obter o JSON final estruturado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/quickstarts/get-started-sdks-rest-api",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 43
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o Catálogo de Modelos (Model Catalog) no portal do Microsoft Foundry.",
    "afirmacoes": ["No novo portal do Microsoft Foundry, você deve fazer o ajuste fino (fine-tune) de um modelo obrigatoriamente antes de poder implantá-lo.", "Você pode testar um modelo do catálogo de modelos somente após implantá-lo (deploy).", "Você pode implantar um modelo do catálogo de modelos somente após retreinar o modelo."],
    "respostas": [false, true, false],
    "explicacao": "O ajuste fino (fine-tuning) e o retreinamento são completamente opcionais. Você pode implantar modelos base diretamente do catálogo sem modificá-los. No entanto, para usar o ambiente de testes (Playground), a plataforma exige que exista um ponto de extremidade ativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/model-catalog-overview",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 44
  {
    "tipo": "unica",
    "texto": "Você possui uma implantação de modelo habilitado para visão. Usando a API de Respostas do Azure OpenAI, você precisa fornecer uma imagem para análise no prompt. Qual item de conteúdo estrutural deve encapsular a imagem na solicitação HTTP?",
    "opcoes": ["image_generation", "output_image", "input_image", "image_base64"],
    "resposta": 2,
    "explicacao": "Na arquitetura do payload, o conteúdo visual enviado pelo usuário para o modelo atua como um dado de entrada de imagem (input_image), em oposição a uma imagem que foi gerada como saída (output_image).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/reference",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 45
  {
    "tipo": "dragdrop",
    "texto": "Você precisa extrair informações estruturadas de faturas digitalizadas no formato PDF e de gravações de correio de voz no formato WAV. Arraste o tipo correto de analisador para cada tipo de conteúdo.",
    "itens": [{ "label": "analisador de áudio (audio analyzer)" }, { "label": "analisador de documentos (document analyzer)" }, { "label": "analisador de imagem (image analyzer)" }, { "label": "analisador de vídeo (video analyzer)" }],
    "grupos": ["Faturas digitalizadas em formato PDF", "Gravações de correio de voz em formato WAV"],
    "respostas": {
      "Faturas digitalizadas em formato PDF": ["analisador de documentos (document analyzer)"],
      "Gravações de correio de voz em formato WAV": ["analisador de áudio (audio analyzer)"]
    },
    "explicacao": "Arquivos PDF (Faturas) exigem um document analyzer que mescla layout, OCR e linguagem natural para capturar tabelas e campos de texto. Arquivos WAV são formatos acústicos e requerem um audio analyzer para transcrição fonética.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 46
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure. Você precisa usar os recursos de Inteligência de Documentos (Content Understanding) para extrair dados estruturados de faturas. O que você deve provisionar?",
    "opcoes": ["Um projeto do Microsoft Foundry", "Um recurso do Azure OpenAI", "Um recurso do Microsoft Foundry (Azure AI Foundry)", "Um serviço Azure AI Search"],
    "resposta": 2,
    "explicacao": "Para hospedar projetos integrados e utilizar recursos multimodais como Content Understanding dentro de uma arquitetura centralizada unificada, você deve criar primeiramente um Recurso (Resource) do Azure AI Foundry (anteriormente AI Studio), que funciona como o hub de provisionamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/create-azure-ai-resource",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 47
  {
    "tipo": "unica",
    "texto": "Você desenvolveu um aplicativo em Python que envia um arquivo JPEG de uma foto local para um modelo habilitado para visão. Para enviar os dados localmente (sem fazer upload público da foto), como você deve configurar o campo da imagem na chamada da API?",
    "opcoes": ["data:image/jpeg;base64,<dados_binários_da_imagem>", "file:///C:/images/photo.jpg", "C:\\images\\photo.jpg", "https://<sua-conta-de-storage>.blob.core.windows.net/<container>/<arquivo>.jpg"],
    "resposta": 0,
    "explicacao": "Para injetar uma imagem local diretamente em uma chamada REST, é obrigatório converter seus bits binários para texto utilizando codificação Base64 e anexar o cabeçalho de Mime-Type correto (data:image/jpeg;base64,...).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision#call-the-chat-completion-apis",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 48
  {
    "tipo": "unica",
    "texto": "Você precisa converter notificações de clientes, que estão em formato de texto, em um áudio falado natural (voz artificial) que possa ser reproduzido em um sistema telefônico. Qual recurso de Serviço de Fala do Azure você deve usar?",
    "opcoes": ["reconhecimento de fala (speech recognition)", "síntese de fala (speech synthesis)", "reconhecimento de locutor (speaker recognition)", "tradução de fala (speech translation)"],
    "resposta": 1,
    "explicacao": "A síntese de fala (Text-to-Speech ou TTS) é o processo exato de converter cadeias de texto digital em áudios de voz que soam com timbre humano para sistemas interativos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/text-to-speech",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 49
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre os Avaliadores (Evaluators) no Microsoft Foundry.",
    "afirmacoes": ["Avaliadores no Microsoft Foundry substituem a necessidade de configurar limites de tokens.", "Avaliadores no Microsoft Foundry podem avaliar a qualidade e a segurança das respostas geradas por um modelo de IA generativa.", "Avaliadores podem retreinar automaticamente um modelo implantado quando problemas de qualidade são detectados."],
    "respostas": [false, true, false],
    "explicacao": "Os avaliadores fornecem métricas de diagnóstico (como relevância ou uso de linguagem de ódio). Eles são pontuadores estáticos e não alteram a configuração de hardware nem geram jobs autônomos de retreinamento do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/concepts/evaluation-approach-gen-ai",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 50
  {
    "tipo": "combobox",
    "texto": "<combobox> é usado para comparar e implantar uma ampla gama de modelos de fornecedores diversos para o desenvolvimento de IA generativa no Microsoft Foundry.",
    "opcoes": ["Selecione uma opção", "O Catálogo de Modelos (Model catalog)", "A página de Monitoramento (Monitor page)", "A página de Pontos de extremidade de serviço (Service endpoints)", "A página de Modelos de solução (Solution templates)"],
    "resposta": 1,
    "explicacao": "O Catálogo de Modelos (Model Catalog) é a vitrine central da Microsoft onde desenvolvedores podem descobrir, testar benchmarks, comparar custos e implantar milhares de modelos fundacionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/model-catalog-overview",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 51
  {
    "tipo": "unica",
    "texto": "Sua empresa possui milhares de chamadas de suporte ao cliente gravadas em vários idiomas e armazenadas como arquivos de áudio no Armazenamento do Azure (Azure Storage). Você precisa gerar transcrições em texto de todas as gravações. Qual capacidade do Azure Speech você deve usar?",
    "opcoes": ["transcrição em lote de fala para texto (batch transcription)", "transcrição em tempo real de fala para texto (real-time transcription)", "texto para fala (text-to-speech)", "tradução de fala (speech translation)"],
    "resposta": 0,
    "explicacao": "Para grandes volumes de áudios históricos estáticos (arquivados em um storage), a API de Transcrição em Lote (Batch Transcription) é o método assíncrono projetado para máxima eficiência e otimização de custos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/batch-transcription",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 52
  {
    "tipo": "unica",
    "texto": "Você precisa comparar os custos operacionais, tokens e benchmarks de Desempenho de grandes modelos de linguagem (LLMs) antes de implantar uma solução. Qual recurso do portal Azure AI Foundry você deve usar?",
    "opcoes": ["A página de Conformidade (Compliance)", "O Catálogo de Avaliadores (Evaluator catalog)", "O menu de Ferramentas (Tools)", "O Leaderboard de Modelos (Model leaderboard)"],
    "resposta": 3,
    "explicacao": "O Model Leaderboard (Tabela de Classificação de Modelos) dentro do catálogo permite posicionar LLMs lado a lado para comparar diretamente suas métricas de pontuação, custos, latência e desempenho médio antes de escolher qual provisionar.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/model-benchmarks",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 53
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre a publicação de Agentes de IA.",
    "afirmacoes": ["Um agente deve ser publicado antes de poder ser usado por aplicativos para enviar solicitações (requests).", "No portal Microsoft Foundry, você deve fazer o ajuste fino (fine-tune) do modelo antes de poder publicar um agente.", "Um agente é publicado automaticamente sempre que você salva sua configuração (draft)."],
    "respostas": [true, false, false],
    "explicacao": "Para que um agente responda a requisições externas, o seu endpoint deve ser publicado. Modelos base não exigem fine-tuning. Salvar uma configuração cria apenas um rascunho (draft) e não publica o agente no endpoint de produção.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/publish-fundamentals",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 54
  {
    "tipo": "combobox",
    "texto": "Você implantou um modelo de geração de imagem. Para garantir que um aplicativo em Python possa gerar uma imagem a partir de um prompt do usuário usando a API, você deve chamar o método <combobox> no SDK do cliente.",
    "opcoes": ["Selecione uma opção", "chat.completions.create()", "images.create()", "images.generate()", "responses.create()"],
    "resposta": 3,
    "explicacao": "Para acessar modelos baseados no DALL-E e gerar ativos de imagem a partir de prompts através do SDK da OpenAI, o método de chamada correto estruturado na biblioteca é o client.images.generate().",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/dall-e-quickstart?tabs=dalle3%2Ccommand-line%2Cpython-new&pivots=programming-language-python",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 55
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo leve que chamará um agente programaticamente usando o SDK. Para autenticar a chamada, você precisa identificar o 'ID do agente'. O que você deve fazer para encontrar esse dado da forma mais rápida?",
    "opcoes": ["No catálogo de modelos, abra o cartão do modelo e copie o nome da família do modelo.", "No portal do Foundry, copie o nome geral do projeto.", "No catálogo de ferramentas do Foundry, copie o nome da ferramenta usada pelo agente.", "No playground do Foundry, selecione 'Code' (Código) e visualize as variáveis de ambiente (.env)."],
    "resposta": 3,
    "explicacao": "A seção 'Visualizar Código' (View Code) no Playground expõe trechos prontos para uso em Python ou C# já pré-preenchidos com as configurações e variáveis de ambiente (como endpoint URLs e IDs de agentes) baseados na sua sessão ativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/prompt-flow-playground",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 56
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o uso de SDKs no Azure AI Foundry.",
    "afirmacoes": ["Para usar o SDK, você deve obrigatoriamente construir manualmente as solicitações HTTP brutas para o endpoint do modelo.", "Ao usar o SDK em um aplicativo, você deve criar um web service separado para interagir com o modelo implantado.", "No SDK, a classe `AIProjectClient` fornece acesso programático a um projeto implantado e aos seus recursos conectados."],
    "respostas": [false, false, true],
    "explicacao": "O propósito fundamental de um SDK é abstrair a manipulação manual de cabeçalhos e roteamento HTTP. Você não precisa hospedar middlewares complexos; seu aplicativo cliente fala com o modelo diretamente via SDK. O AIProjectClient serve de ponte central de autenticação.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/sdk-overview",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 57
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo que analisa arquivos de vídeo carregados para extrair informações estruturadas (como objetos, cenários e marcações temporais) dos vídeos. Qual API o aplicativo deve chamar?",
    "opcoes": ["A API de Análise de Sentimentos no Serviço de Linguagem", "A API `Analyze` (Analisar) no Content Understanding (Inteligência de Documentos)", "A API de Análise de Imagem (Image Analysis) nos serviços Vision", "A API do Azure OpenAI"],
    "resposta": 1,
    "explicacao": "O Azure Content Understanding atua como uma solução unificada e multimodal. Para arquivos contínuos no tempo (como vídeos), ele coordena automaticamente a extração usando o método Analyze API de vídeo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 58
  {
    "tipo": "combobox",
    "texto": "Os serviços de Inteligência de Conteúdo do Azure utilizam tarefas de <combobox> para capturar a fala e convertê-la em texto a partir de faixas de áudio e vídeo.",
    "opcoes": ["Selecione uma opção", "diarização (diarization)", "extração de frases-chave (key phrase extraction)", "síntese (synthesis)", "transcrição (transcription)"],
    "resposta": 4,
    "explicacao": "A transcrição é a função central (Speech-to-Text) que processa as frequências fonéticas e mapeia a entrada oral em caracteres de texto digitais no script.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 59
  {
    "tipo": "unica",
    "texto": "Você desenvolveu um aplicativo usando o SDK de Linguagem do Azure (Language SDK). O objetivo é retornar uma lista com os tópicos centrais de um bloco grande de texto não estruturado. Qual método de Python atende a essa exigência?",
    "opcoes": ["client.begin_extract_summary()", "client.extract_key_phrases()", "client.recognize_linked_entities()", "client.recognize_entities()"],
    "resposta": 1,
    "explicacao": "A Extração de Frases-Chave (Key Phrase Extraction) analisa as propriedades semânticas do texto longo e extrai os termos vitais (talking points) que mais representam os tópicos discutidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/key-phrase-extraction/overview",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 60
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo que grava a voz de um usuário pelo microfone e envia esse áudio gravado diretamente para um modelo multimodal avançado. Para que o modelo receba e processe o áudio bruto, o que o payload da solicitação deve encapsular?",
    "opcoes": ["Uma imagem (espectrograma) dos frames de áudio.", "Apenas a transcrição de texto da voz pré-processada por outro serviço.", "Um prompt de entrada de áudio (audio input prompt).", "Um vetor de embedding de texto (text embedding vector)."],
    "resposta": 2,
    "explicacao": "Novos modelos multimodais fundacionais (como o GPT-4o) recebem dados fonéticos nativamente. Você passa o buffer acústico em um prompt de entrada de áudio direto, sem precisar de uma fase legada de Speech-to-Text intermediária.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 61
  {
    "tipo": "combobox",
    "texto": "Ao usar o SDK do Microsoft Foundry (Azure AI Project) em aplicativos, a classe <combobox> é o ponto de entrada oficial do cliente para acessar implantações, agentes, avaliadores e índices.",
    "opcoes": ["Selecione uma opção", "AIProjectClient", "ChatCompletionsClient", "FoundryLocalManager", "ModelCatalogClient"],
    "resposta": 1,
    "explicacao": "O AIProjectClient atua como o painel de controle mestre no nível do código. Com um único cliente autenticado vinculado à string de conexão do seu projeto, você descobre e envia trabalhos para os serviços da nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/sdk-overview",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 62
  {
    "tipo": "unica",
    "texto": "Sua aplicação Python precisa escutar continuamente o microfone padrão do dispositivo e gerar transcrições em tempo real usando o Speech SDK do Azure. Qual classe fundamental você deve instanciar para realizar essa tarefa de escuta?",
    "opcoes": ["SpeechRecognizer", "SpeechSynthesizer", "SpeechConfig", "AudioOutputConfig"],
    "resposta": 0,
    "explicacao": "A classe SpeechRecognizer é o motor executivo no SDK responsável pela conversão de Fala em Texto (Speech-to-Text). Você invoca métodos dessa classe para ativar o rastreamento fonético contínuo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/get-started-speech-to-text",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 63
  {
    "tipo": "multipla",
    "texto": "Você está construindo um script simples que usará uma biblioteca de cliente ou SDK para enviar prompts de chat e se conectar a um modelo implantado de forma segura na nuvem da Microsoft. Quais TRÊS elementos obrigatórios você deve fornecer no código? (Escolha três)",
    "opcoes": ["O Nome da Implantação (Deployment name) do modelo", "O tipo de tarefa algorítmica (task type)", "O nome de exibição do projeto Foundry (display name)", "Credenciais de identidade / Microsoft Entra ID (ou chaves de API)", "A URL do Ponto de extremidade (Endpoint URL)"],
    "respostas": [0, 3, 4],
    "explicacao": "Qualquer acesso a recursos seguros requer o mapeamento de rota e permissão: a URL do Endpoint, o Nome da Implantação e a Credencial.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  },
  // Questão Original: 64
  {
    "tipo": "unica",
    "texto": "Sua solicitação enviará uma imagem a um modelo de visão para análise. Para que o modelo produza uma resposta direcionada, contextual e útil, qual é a principal diretriz que você deve formatar juntamente na mensagem do prompt de texto?",
    "opcoes": ["o número da versão explícita do modelo de software", "uma descrição clara da tarefa a ser executada", "o nome da implantação do modelo", "o Dataset ID de onde a imagem foi proveniente"],
    "resposta": 1,
    "explicacao": "Imagens desacompanhadas de contexto causam confusão. Fornecer uma instrução explícita sobre a tarefa ancora as camadas de atenção da IA generativa e melhora a qualidade da inferência.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/prompt-engineering",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco02"
  }
];