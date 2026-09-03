// ==========================================
// Arquivo: questoes_bloco01.js
// Descrição: Simulado AI-901 (Microsoft Azure AI Fundamentals) — tradução PT-BR
// BLOCO 01 de 04 — Fundamentos de IA, Serviços de IA do Azure e IA Responsável
// 32 questões — distribuição balanceada conforme guia oficial de estudos
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL: Questões de 1 a 32.
// ==========================================

export const questoes = [
  // Questão Original: 1
  {
    "tipo": "unica",
    "texto": "Você está usando o Azure Speech SDK para desenvolver um aplicativo em Python que suporta conversas faladas em tempo real. Qual classe do Azure Speech você deve usar para configurar a conexão com o serviço Azure Speech?",
    "opcoes": [
      "AudioOutputConfig",
      "SpeechSynthesizer",
      "AudioConfig",
      "SpeechConfig"
    ],
    "resposta": 3,
    "explicacao": "A classe `SpeechConfig` é a responsável por configurar a assinatura, a região ou o token de autorização, estabelecendo a conexão inicial e os parâmetros base com o serviço de Fala do Azure antes de qualquer operação.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-sdk",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 2
  {
    "tipo": "combobox",
    "texto": "Ao usar a API de Responses da OpenAI e um modelo habilitado para visão, você pode incluir uma imagem em uma solicitação fornecendo-a como <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "dados de imagem codificados em base64",
      "um anexo de arquivo CSV",
      "um fluxo de vídeo MP4",
      "um token de assinatura de acesso compartilhado (SAS)"
    ],
    "resposta": 1,
    "explicacao": "Modelos de visão nas APIs da OpenAI aceitam imagens diretamente no payload se elas forem enviadas no formato de string codificada em base64 (Data URL) ou através de uma URL pública acessível via HTTP.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 3
  {
    "tipo": "unica",
    "texto": "Você precisa criar um agente de IA no Microsoft Foundry que siga um papel (role) e comportamento específicos ao responder aos usuários. O que você deve configurar?",
    "opcoes": [
      "instruções do sistema (system instructions)",
      "temperatura (temperature)",
      "tokens por minuto (TPM)",
      "limite máximo de tokens (max completion tokens)"
    ],
    "resposta": 0,
    "explicacao": "As instruções do sistema (também chamadas de mensagem de sistema ou system prompt) definem a persona, os limites, o tom e as diretrizes comportamentais que o agente de IA usará durante a interação com o usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/system-message",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 4
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre prompts de sistema (system prompts).",
    "afirmacoes": [
      "Prompts de sistema podem ser usados para autorizar usuários.",
      "Um prompt de sistema é usado para reduzir os tokens por minuto (TPM).",
      "Um prompt de sistema guia o comportamento de um modelo de IA generativa."
    ],
    "respostas": [false, false, true],
    "explicacao": "O prompt do sistema serve puramente para moldar o comportamento e as restrições do modelo (afirmação 3). Ele não tem capacidade para gerenciar segurança/autenticação (afirmação 1) nem pode alterar configurações de infraestrutura como TPM (afirmação 2).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/system-message",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 5
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo web que processa faturas para calcular despesas. Você precisa extrair campos estruturados, incluindo valores aninhados, das faturas usando um esquema definido. O que você deve usar?",
    "opcoes": [
      "um pipeline de processamento de documentos apenas com Reconhecimento Óptico de Caracteres (OCR)",
      "um fluxo de transcrição no Azure Speech (Foundry Tools)",
      "um analisador (analyzer) no Azure Content Understanding (Inteligência de Documentos)",
      "um serviço Azure AI Search"
    ],
    "resposta": 2,
    "explicacao": "O Azure Content Understanding (também conhecido em contextos de serviços cognitivos como Document Intelligence) permite configurar analisadores baseados em um esquema definido para mapear e extrair dados complexos, pares chave-valor e itens aninhados de documentos, como faturas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 6
  {
    "tipo": "simnao",
    "texto": "Avalie as seguintes afirmações sobre os recursos de Voice Live.",
    "afirmacoes": [
      "O Voice Live retorna apenas texto transcrito.",
      "O Voice Live exige que você implemente separadamente serviços de conversão de fala em texto e de texto em fala.",
      "O Voice Live combina conversão de fala em texto, raciocínio e conversão de texto em fala em uma única experiência de conversação."
    ],
    "respostas": [false, false, true],
    "explicacao": "As APIs de voz ponta-a-ponta (como o Voice Live em ferramentas unificadas de conversação) eliminam a necessidade de encadear serviços separados. Elas abstraem o fluxo de ouvir, raciocinar (LLM) e responder com voz sintetizada, retornando áudio e não apenas texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 7
  {
    "tipo": "combobox",
    "texto": "Você está desenvolvendo um aplicativo de voz que escuta comandos falados e os converte em texto usando o Azure Speech. No código Python a seguir, qual instrução inicia a captura de um trecho curto de áudio para transcrição única? <combobox>",
    "opcoes": [
      "Selecione uma opção",
      "recognizer.recognize_once()",
      "recognizer.speak_text_async(\"Ready\")",
      "recognizer.start_continuous_recognition()",
      "recognizer.start_keyword_recognition()"
    ],
    "resposta": 1,
    "explicacao": "O método `recognize_once()` (ou `recognize_once_async()` dependendo da implementação) escuta uma única declaração por até 15 segundos ou até detectar um período de silêncio, ideal para comandos curtos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/get-started-speech-to-text",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 8
  {
    "tipo": "multipla",
    "texto": "Quais são os dois propósitos das instruções ao fazer um prompt para um modelo de IA generativa? (Escolha duas)",
    "opcoes": [
      "Define o papel e o comportamento do agente.",
      "Seleciona qual modelo usar.",
      "Define a região do Azure onde a inferência ocorre.",
      "Define a alocação de tokens por minuto (TPM) para o modelo.",
      "Define restrições para as respostas do modelo."
    ],
    "respostas": [0, 4],
    "explicacao": "As instruções (prompts) servem para comunicar ao modelo de IA o seu papel/comportamento desejado e para estabelecer restrições de formatação ou conteúdo. Região, TPM e tipo de modelo são configurações de infraestrutura.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/prompt-engineering",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 9
  {
    "tipo": "combobox",
    "texto": "Para configurar a saída de síntese de voz (Text-to-Speech) para que o áudio seja salvo diretamente em um arquivo, você deve instanciar a classe de configuração de áudio como <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "AudioOutputConfig(filename=\"output.wav\")",
      "AudioOutputConfig(stream)",
      "AudioStreamFormat(wave_stream_format=AudioStreamWaveFormat.PCM)"
    ],
    "resposta": 1,
    "explicacao": "Para rotear o áudio sintetizado para um arquivo local, utiliza-se a classe `AudioOutputConfig` (frequentemente implementada como `speechsdk.audio.AudioOutputConfig(filename=...)`) passando o caminho do arquivo desejado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/get-started-text-to-speech",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 10
  {
    "tipo": "combobox",
    "texto": "Para definir a função (role) e os comportamentos de um agente de IA, você deve configurar um <combobox> para o agente.",
    "opcoes": [
      "Selecione uma opção",
      "slot de implantação",
      "índice de embeddings",
      "trabalho de ajuste fino (fine-tuning)",
      "prompt de sistema (system prompt)"
    ],
    "resposta": 4,
    "explicacao": "O prompt de sistema (ou mensagem do sistema) é a diretriz fundamental fornecida ao modelo generativo para ditar sua persona, tom e restrições antes de começar a interagir com os usuários.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/system-message",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 11
  {
    "tipo": "combobox",
    "texto": "No SDK de Python, ao chamar operações assíncronas de longa duração (como a extração de dados de faturas), você usa o objeto poller. Para recuperar o resultado final quando a operação é concluída, você chama <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "get_results()",
      "result()",
      "status()",
      "wait()"
    ],
    "resposta": 2,
    "explicacao": "O padrão da biblioteca do Azure SDK para operações de longa duração (LRO) é usar o método `result()` no objeto do poller. Isso pausa a execução até que o processamento em nuvem seja finalizado e retorna o payload com os dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/developer/python/sdk/azure-sdk-library-usage-patterns#long-running-operations",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 12
  {
    "tipo": "dragdrop",
    "texto": "Você tem um projeto com um recurso do Azure OpenAI chamado 'resource1'. Você implantou um modelo 'gpt-4.1-mini' com o nome de implantação 'my-mini-gpt'. Associe as propriedades de conexão com os valores corretos.",
    "itens": [
      { "label": "gpt-4.1-mini" },
      { "label": "my-mini-gpt" },
      { "label": "project1" },
      { "label": "resource1" }
    ],
    "grupos": [
      "Subdomínio na URL (https://___.openai.azure.com...)",
      "Parâmetro 'model' na chamada da API"
    ],
    "respostas": {
      "Subdomínio na URL (https://___.openai.azure.com...)": ["resource1"],
      "Parâmetro 'model' na chamada da API": ["my-mini-gpt"]
    },
    "explicacao": "O subdomínio da URL é sempre o nome do seu Recurso do Azure OpenAI (`resource1`). Ao fazer a chamada à API no Azure, o campo 'model' exige o Nome da Implantação (Deployment Name), que neste caso é `my-mini-gpt`.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 13
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre Agentes e Modelos de IA Generativa.",
    "afirmacoes": [
      "Um modelo generativo de IA é retreinado antes de executar cada solicitação do usuário.",
      "Um agente de IA responde copiando e colando respostas armazenadas em um banco de dados.",
      "Um agente de IA usa um modelo de IA generativa para estabelecer ações com base na entrada do usuário."
    ],
    "respostas": [false, false, true],
    "explicacao": "Modelos generativos não são retreinados para cada prompt (a inferência usa parâmetros estáticos) e não copiam textos de bancos de dados; eles geram palavras (tokens) com base em probabilidades matemáticas. Um Agente, por sua vez, usa o modelo para decidir quais ações tomar (como chamar funções).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 14
  {
    "tipo": "dragdrop",
    "texto": "Associe cada tarefa ao seu respectivo Princípio de IA Responsável da Microsoft.",
    "itens": [
      { "label": "Justiça (Fairness)" },
      { "label": "Privacidade e Segurança" },
      { "label": "Transparência" },
      { "label": "Confiabilidade e Segurança (Reliability and safety)" }
    ],
    "grupos": [
      "Garantir que as decisões NÃO sejam tendenciosas contra grupos demográficos",
      "Criptografar dados sensíveis de clientes e restringir o acesso",
      "Informar aos usuários quando estão interagindo com IA e explicar suas limitações",
      "Testar sistemas de IA sob diferentes condições para reduzir falhas inesperadas"
    ],
    "respostas": {
      "Garantir que as decisões NÃO sejam tendenciosas contra grupos demográficos": ["Justiça (Fairness)"],
      "Criptografar dados sensíveis de clientes e restringir o acesso": ["Privacidade e Segurança"],
      "Informar aos usuários quando estão interagindo com IA e explicar suas limitações": ["Transparência"],
      "Testar sistemas de IA sob diferentes condições para reduzir falhas inesperadas": ["Confiabilidade e Segurança (Reliability and safety)"]
    },
    "explicacao": "A Microsoft possui 6 princípios. Justiça evita o viés demográfico. Privacidade foca em criptografia/RBAC. Transparência foca em explicabilidade. Confiabilidade foca em testes rigorosos para cenários de falha.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 15
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o funcionamento de Modelos de IA Generativa.",
    "afirmacoes": [
      "Gerar uma resposta a um prompt de usuário ocorre durante a fase de inferência (inference).",
      "Um modelo de IA generativa gera respostas copiando documentos armazenados diretamente dos seus dados de treinamento.",
      "Um modelo de IA generativa produz saída prevendo o próximo token com base em padrões aprendidos em seus dados de treinamento."
    ],
    "respostas": [true, false, true],
    "explicacao": "O processo de execução ao vivo de um modelo é chamado de inferência. Modelos generativos (LLMs) não copiam dados; eles são motores autorregressivos que calculam probabilidades e geram o próximo token um a um.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 16
  {
    "tipo": "unica",
    "texto": "Você precisa criar uma solução de IA que produza novas imagens de produtos com base em descrições escritas fornecidas pelos usuários. Qual carga de trabalho (workload) de IA você deve usar?",
    "opcoes": [
      "análise de imagem (image analysis)",
      "geração de imagem (image generation)",
      "detecção de objetos (object detection)",
      "reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 1,
    "explicacao": "A criação de ativos visuais totalmente novos a partir de prompts de texto (Text-to-Image) utilizando modelos como DALL-E se classifica como Geração de Imagem (Image Generation), parte das cargas de trabalho de IA Generativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models#dall-e",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 17
  {
    "tipo": "combobox",
    "texto": "As soluções de extração de informações que detectam e leem texto em documentos e imagens digitalizados dependem da carga de trabalho de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "visão computacional (computer vision)",
      "geração de imagem (image generation)",
      "análise de sentimentos (sentiment analysis)",
      "síntese de fala (speech synthesis)"
    ],
    "resposta": 1,
    "explicacao": "A leitura de texto através do reconhecimento óptico de caracteres (OCR) a partir de pixels de imagens digitalizadas é uma tarefa fundamental da disciplina de Visão Computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 18
  {
    "tipo": "unica",
    "texto": "Você tem um projeto com um modelo de IA generativa implantado. Você precisa garantir que as respostas geradas minimizem os custos e permaneçam dentro de um tamanho (comprimento) definido. Qual parâmetro você deve configurar?",
    "opcoes": [
      "Top P",
      "Temperatura (Temperature)",
      "Tokens Máximos de Conclusão (Max Completion Tokens)",
      "Configurações da versão do modelo"
    ],
    "resposta": 2,
    "explicacao": "O parâmetro `Max Completion Tokens` limita de forma rígida a quantidade máxima de unidades de texto que o modelo gerará na resposta. Como os serviços costumam ser faturados por token, limitar isso controla ativamente o gasto e o tamanho da resposta.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/reference",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 19
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre práticas operacionais em IA Responsável.",
    "afirmacoes": [
      "Práticas 'human-in-the-loop' (humano no controle) fornecem prestação de contas (accountability) para decisões geradas por IA.",
      "A implantação de um sistema de IA em um ambiente de produção elimina a necessidade de monitoramento contínuo.",
      "Revelar os nomes da equipe que projetou o sistema fornece prestação de contas pelas saídas da IA."
    ],
    "respostas": [true, false, false],
    "explicacao": "Ter um ser humano revisando a decisão da IA (human-in-the-loop) garante o princípio de Responsabilização (Accountability). O monitoramento contínuo é sempre obrigatório (data drift) e simplesmente divulgar os nomes dos criadores não exime as organizações das responsabilidades operacionais ao vivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 20
  {
    "tipo": "unica",
    "texto": "Sua empresa processa e-mails de suporte ao cliente. Você precisa implementar uma solução de IA que identifique automaticamente menções a pessoas, organizações e locais nos e-mails. Qual técnica de análise de texto você deve usar?",
    "opcoes": [
      "Reconhecimento de Entidades Nomeadas (NER)",
      "Extração de frases-chave",
      "Análise de sentimentos",
      "Resumo (Summarization)"
    ],
    "resposta": 0,
    "explicacao": "A extração e categorização de pessoas, lugares, organizações e datas a partir de um bloco de texto é a definição de Reconhecimento de Entidades Nomeadas (Named Entity Recognition - NER).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 21
  {
    "tipo": "combobox",
    "texto": "Garantir que revisores humanos supervisionem as decisões geradas pela IA e permaneçam responsáveis pelo resultado final é um exemplo do princípio de IA responsável da Microsoft focado em <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "prestação de contas (accountability)",
      "justiça (fairness)",
      "privacidade e segurança (privacy and security)",
      "transparência (transparency)"
    ],
    "resposta": 1,
    "explicacao": "Sempre que sistemas delegam decisões importantes, o princípio de Accountability (Prestação de Contas/Responsabilização) exige que humanos mantenham controle total e sejam os tomadores de decisão finais (human-in-the-loop).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 22
  {
    "tipo": "unica",
    "texto": "Você precisa criar uma solução de IA que gere rascunhos de e-mails de marketing com base em uma breve descrição de um produto e seu público-alvo. Qual carga de trabalho de IA você deve usar?",
    "opcoes": [
      "reconhecimento de fala",
      "classificação de texto",
      "IA generativa",
      "visão computacional"
    ],
    "resposta": 2,
    "explicacao": "A IA Generativa tem o propósito central de criar conteúdo textual inédito (como gerar rascunhos, poemas, códigos, redações) a partir de diretrizes/prompts, ao contrário de modelos clássicos que apenas classificam os dados existentes.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 23
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre a implantação e utilização de modelos generativos.",
    "afirmacoes": [
      "O parâmetro de Temperatura (Temperature) deve ser definido antes da implantação do modelo.",
      "Durante a inferência, o nome do modelo base é usado para rotear as solicitações.",
      "Após a implantação do modelo, tanto o código quanto ferramentas de teste podem ser usados para interagir com o modelo."
    ],
    "respostas": [false, false, true],
    "explicacao": "A temperatura é ajustada na hora da chamada/inferência, não na implantação. A solicitação é enviada usando o Nome da Implantação (Deployment Name) e não o nome base do modelo. O modelo pode ser acessado via código (SDK) ou no playground (ferramenta de teste).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 24
  {
    "tipo": "combobox",
    "texto": "Avaliar os resultados de um modelo em grupos demográficos diferentes para reduzir o viés é um exemplo do princípio de IA responsável da Microsoft focado em <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "prestação de contas (accountability)",
      "justiça (fairness)",
      "privacidade e segurança (privacy and security)",
      "transparência (transparency)"
    ],
    "resposta": 2,
    "explicacao": "O princípio de Justiça (Fairness) lida com a mitigação de vieses nos modelos e garante que todos os grupos demográficos recebam um tratamento e uma precisão equitativa pelas decisões do algoritmo.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 25
  {
    "tipo": "combobox",
    "texto": "O princípio de IA responsável da Microsoft de transparência exige que os sistemas de IA <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "sejam explicáveis aos usuários (be explainable to users)",
      "protejam dados sensíveis dos usuários",
      "reduzam o viés nas decisões",
      "exijam supervisão humana"
    ],
    "resposta": 1,
    "explicacao": "Transparência significa clareza na comunicação. Usuários têm o direito de saber que estão interagindo com um robô e devem ter acesso a explicações claras e compreensíveis sobre como e por que o sistema toma certas decisões.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 26
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo de suporte ao cliente alimentado por IA. Qual tarefa é um exemplo prático do princípio de Inclusão (Inclusiveness) da IA responsável?",
    "opcoes": [
      "Criptografar dados armazenados de clientes usando RBAC.",
      "Avaliar saídas em grupos demográficos para reduzir o viés.",
      "Projetar a interface para suportar múltiplos idiomas e leitores de tela.",
      "Fornecer explicações sobre como as previsões são geradas."
    ],
    "resposta": 2,
    "explicacao": "O princípio da Inclusão orienta os desenvolvedores a quebrar barreiras para comunidades com deficiência física e a considerar contextos multiculturais, de modo que pessoas com limitações visuais (leitores de tela) ou de idioma possam usar o sistema adequadamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 27
  {
    "tipo": "combobox",
    "texto": "Uma carga de trabalho de IA que produz novo conteúdo com base na entrada do usuário é um exemplo prático de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "compreensão de conteúdo (content understanding)",
      "IA generativa (generative AI)",
      "extração de informação (information extraction)",
      "análise de texto (text analysis)"
    ],
    "resposta": 2,
    "explicacao": "Modelos que não apenas categorizam ou buscam informações, mas criam artigos novos, imagens, códigos e fluxos do zero com base em instruções (prompts) são classificados como cargas de IA Generativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 28
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o princípio de Justiça (Fairness) em IA.",
    "afirmacoes": [
      "A justiça pode ser alcançada focando puramente em melhorar a precisão geral (overall accuracy) do modelo.",
      "Avaliar as saídas do sistema de IA para identificar e reduzir viés em grupos demográficos apoia a justiça.",
      "Garantir justiça significa que todos os usuários sempre receberão exatamente a mesma saída de texto do sistema."
    ],
    "respostas": [false, true, false],
    "explicacao": "Melhorar a métrica global de precisão não ajuda minorias que podem estar sendo prejudicadas (afirmação 1 é falsa). A justiça busca remover tratamentos dispares indesejados, não emitir a mesma resposta literal para solicitações distintas de indivíduos diferentes (afirmação 3 é falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 29
  {
    "tipo": "combobox",
    "texto": "Quando o conteúdo é enviado para análise no Azure Content Understanding (Inteligência de Documentos), a extração por padrão é uma chamada de rede <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "síncrona",
      "assíncrona",
      "retornada apenas em texto simples não estruturado",
      "limitada apenas ao processamento de reconhecimento óptico (OCR)"
    ],
    "resposta": 2,
    "explicacao": "Dado o peso das operações de leitura de documentos complexos, a API opera de forma assíncrona. Ela fornece um ID de Job (poller) que o sistema monitora até a extração (estruturada) estar pronta.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/concept-document-intelligence",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 30
  {
    "tipo": "unica",
    "texto": "Você tem um projeto com um modelo de IA generativa implantado. Você testou o modelo no playground e agora precisa desenvolver um aplicativo externo para enviar solicitações a ele. Quais informações o aplicativo deve incluir na chamada para autenticar e encontrar o modelo?",
    "opcoes": [
      "O histórico exportado do playground.",
      "O dataset de treinamento do modelo.",
      "O nome de exibição do projeto Foundry.",
      "O endpoint de implantação e as credenciais de autenticação."
    ],
    "resposta": 3,
    "explicacao": "A comunicação com qualquer modelo exposto via rede exige a chave de segurança de acesso (bearer token ou subscription key) e a URL do endpoint que foi atribuído ao modelo durante a implantação para que a rede do Azure saiba o destino da chamada REST.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 31
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre os recursos do Azure Content Understanding (Inteligência de Documentos).",
    "afirmacoes": [
      "O Azure Content Understanding pode analisar apenas documentos no formato PDF.",
      "Os resultados da análise do Azure Content Understanding são retornados no formato estruturado JSON.",
      "O Azure Content Understanding extrai campos estruturados usando OCR para digitalizar o texto inicialmente."
    ],
    "respostas": [false, true, true],
    "explicacao": "A plataforma é multimodal e suporta formatos como JPEG, PNG, TIFF, Excel, além de PDFs (a afirmação 1 é falsa). Ela lê o visual e transforma em textos mapeados por chave-valor dentro de um objeto JSON programático.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco01"
  },
  
  // Questão Original: 32
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o parâmetro `tool_choice` para agentes que usam LLMs.",
    "afirmacoes": [
      "Definir `tool_choice` como 'auto' permite que o agente decida de forma autônoma se deve ou não chamar uma ferramenta.",
      "Definir `tool_choice` como 'none' significa que o modelo pode decidir aleatoriamente se chama uma ferramenta.",
      "Definir `tool_choice` como 'required' garante que o agente chame obrigatóriamente uma ou mais ferramentas antes de responder."
    ],
    "respostas": [true, false, true],
    "explicacao": "A configuração 'none' desativa o acesso às ferramentas (a afirmação 2 é falsa, pois ele perde a capacidade de decisão e de chamada de ferramentas). As configurações 'auto' e 'required' delegam liberdade e impõem obrigatoriedade, respectivamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/function-calling",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco01"
  }
];