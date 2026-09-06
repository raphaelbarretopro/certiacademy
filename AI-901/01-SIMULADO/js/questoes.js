// ==========================================
// Arquivo: questoes_bloco01.js
// Descrição: Simulado AI-901 — Domínios Oficiais Atualizados
// BLOCO 01 de 04
// ==========================================

export const questoes = [
  // Questão Original: 1
  {
    "tipo": "unica",
    "texto": "Você está usando o SDK de Fala do Azure (Azure Speech SDK) para desenvolver um aplicativo em Python que suporta conversas faladas em tempo real. Qual classe do serviço de Fala você deve usar para configurar a conexão com o serviço?",
    "opcoes": ["AudioOutputConfig", "SpeechSynthesizer", "AudioConfig", "SpeechConfig"],
    "resposta": 3,
    "explicacao": "A classe SpeechConfig é a responsável por configurar a assinatura, a região ou o token de autorização, estabelecendo a conexão inicial e os parâmetros base com o serviço de Fala do Azure antes de qualquer operação.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-sdk",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 2
  {
    "tipo": "combobox",
    "texto": "Ao usar a API de Respostas do OpenAI e um modelo habilitado para visão, você pode incluir uma imagem em uma solicitação (request) fornecendo-a como <combobox>.",
    "opcoes": ["Selecione uma opção", "dados de imagem codificados em base64", "um anexo de arquivo CSV", "um fluxo de vídeo MP4", "um token de assinatura de acesso compartilhado (SAS)"],
    "resposta": 1,
    "explicacao": "Modelos de visão nas APIs do OpenAI aceitam imagens diretamente no payload se elas forem enviadas no formato de string codificada em base64 (Data URL) ou através de uma URL pública acessível via HTTP.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 3
  {
    "tipo": "unica",
    "texto": "Você precisa criar um agente de IA no Microsoft Foundry (Azure AI Studio) que siga uma função (role) e um comportamento específicos ao responder aos usuários. O que você deve configurar?",
    "opcoes": ["instruções do sistema (system instructions)", "temperatura (temperature)", "tokens por minuto (TPM)", "limite máximo de tokens (max completion tokens)"],
    "resposta": 0,
    "explicacao": "As instruções do sistema (também chamadas de mensagem do sistema ou system prompt) definem a persona, as regras, o tom e as diretrizes comportamentais que a função (role) do agente de IA usará durante a interação.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/system-message",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
    // Questão Original: 4
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre prompts do sistema (system prompts).",
    "afirmacoes": ["Prompts do sistema podem ser usados para autorizar usuários.", "Um prompt do sistema é usado para reduzir os tokens por minuto (TPM).", "Um prompt do sistema guia o comportamento de um modelo de IA generativa."],
    "respostas": [false, false, true],
    "explicacao": "O prompt do sistema serve puramente para moldar o comportamento e as restrições lógicas do modelo. Ele não tem capacidade para gerenciar controle de acesso/autorização nem pode alterar configurações de infraestrutura como TPM.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/system-message",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 5
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo web que processa faturas para calcular despesas. Você precisa extrair campos estruturados, incluindo valores aninhados, das faturas usando um esquema definido. O que você deve usar?",
    "opcoes": ["um pipeline de processamento de documentos apenas com Reconhecimento Óptico de Caracteres (OCR)", "um fluxo de transcrição no Azure Speech (Foundry Tools)", "um analisador (analyzer) no Azure Content Understanding (Inteligência de Documentos)", "um serviço Azure AI Search"],
    "resposta": 2,
    "explicacao": "O Azure Content Understanding (Inteligência de Documentos) permite configurar analisadores baseados em um esquema definido para mapear e extrair dados complexos, pares chave-valor e itens aninhados de documentos corporativos estruturados, como faturas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 6
  {
    "tipo": "simnao",
    "texto": "Avalie as seguintes afirmações sobre os recursos de Voice Live.",
    "afirmacoes": ["O Voice Live retorna apenas texto transcrito.", "O Voice Live exige que você implante separadamente serviços de conversão de fala em texto e de texto em fala.", "O Voice Live combina conversão de fala em texto, raciocínio e conversão de texto em fala em uma única experiência de conversação."],
    "respostas": [false, false, true],
    "explicacao": "As APIs de voz ponta a ponta (como o Voice Live) eliminam a necessidade de encadear serviços separados. Elas abstraem o fluxo de ouvir, raciocinar no modelo fundacional e responder com voz sintetizada, retornando áudio diretamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 7
  {
    "tipo": "combobox",
    "texto": "Você está desenvolvendo um aplicativo de voz que escuta comandos falados e os converte em texto usando o serviço de Fala (Azure Speech). No código Python a seguir, qual instrução inicia a captura de um trecho curto de áudio para transcrição única? <combobox>",
    "opcoes": ["Selecione uma opção", "recognizer.recognize_once()", "recognizer.speak_text_async(\"Ready\")", "recognizer.start_continuous_recognition()", "recognizer.start_keyword_recognition()"],
    "resposta": 1,
    "explicacao": "O método recognize_once() escuta uma única declaração por até 15 segundos ou até detectar um período de silêncio, sendo a abordagem padrão para capturar e transcrever comandos curtos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/get-started-speech-to-text",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 8
  {
    "tipo": "multipla",
    "texto": "Quais são os DOIS propósitos do uso de instruções ao formular um prompt para um modelo de IA generativa? (Escolha duas)",
    "opcoes": ["Define a função (role) e o comportamento do agente.", "Seleciona qual modelo de implantação usar.", "Define a região do Azure onde a inferência ocorre.", "Define a alocação de tokens por minuto (TPM) para a implantação do modelo.", "Define restrições para as respostas do modelo."],
    "respostas": [0, 4],
    "explicacao": "As instruções em um prompt (prompt engineering) servem para comunicar a função/persona do agente e para estabelecer restrições claras de formato ou conteúdo. Configurações como região, modelo e TPM são feitas na implantação (infraestrutura).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/prompt-engineering",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 9
  {
    "tipo": "combobox",
    "texto": "Para configurar a saída de conversão de texto em fala (Speech Synthesis) para que o áudio seja salvo diretamente em um arquivo local, você deve instanciar a classe de configuração de áudio como <combobox>.",
    "opcoes": ["Selecione uma opção", "AudioOutputConfig(filename=\"output.wav\")", "AudioOutputConfig(stream)", "AudioStreamFormat(wave_stream_format=AudioStreamWaveFormat.PCM)"],
    "resposta": 1,
    "explicacao": "Para rotear o áudio sintetizado para um arquivo, utiliza-se a classe AudioOutputConfig passando explicitamente o caminho de destino no parâmetro filename.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/get-started-text-to-speech",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 10
  {
    "tipo": "combobox",
    "texto": "Para definir a função (role) e os comportamentos de um agente de IA, você deve configurar um(a) <combobox> para o agente.",
    "opcoes": ["Selecione uma opção", "slot de implantação", "índice de embeddings", "trabalho de ajuste fino (fine-tuning)", "prompt do sistema (system prompt)"],
    "resposta": 4,
    "explicacao": "O prompt do sistema (mensagem do sistema) é a diretriz inicial e fundamental fornecida ao modelo generativo para estruturar sua função (role) e moldar o comportamento operacional antes de iniciar o loop de chat.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/system-message",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 11
  {
    "tipo": "combobox",
    "texto": "No SDK, ao iniciar tarefas assíncronas de longa duração usando o Inteligência de Documentos (Content Understanding), a API retorna um rastreador `poller`. Para recuperar o resultado estruturado quando o processamento for concluído na nuvem, você deve invocar <combobox>.",
    "opcoes": ["Selecione uma opção", "get_results()", "result()", "status()", "wait()"],
    "resposta": 2,
    "explicacao": "O padrão LRO (Long-Running Operations) do Azure SDK exige que você chame o método .result() no objeto poller. Isso pausa o encadeamento até que a nuvem retorne o status de sucesso e entrega o payload final.",
    "link": "https://learn.microsoft.com/pt-br/azure/developer/python/sdk/azure-sdk-library-usage-patterns#long-running-operations",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 12
  {
    "tipo": "dragdrop",
    "texto": "Você tem um projeto com um recurso do Azure OpenAI chamado 'resource1'. Você configurou uma implantação (deployment) de um modelo 'gpt-4.1-mini' nomeando-a como 'my-mini-gpt'. Associe as propriedades de conexão da API com os valores corretos.",
    "itens": [{ "label": "gpt-4.1-mini" }, { "label": "my-mini-gpt" }, { "label": "project1" }, { "label": "resource1" }],
    "grupos": ["Subdomínio no ponto de extremidade (https://___.openai.azure.com...)", "Parâmetro 'model' na chamada de inferência da API"],
    "respostas": {
      "Subdomínio no ponto de extremidade (https://___.openai.azure.com...)": ["resource1"],
      "Parâmetro 'model' na chamada de inferência da API": ["my-mini-gpt"]
    },
    "explicacao": "O subdomínio da URL do ponto de extremidade herda o nome do Recurso do Azure (resource1). Na requisição para inferência, a API exige o Nome da Implantação (my-mini-gpt), não o nome base do modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 13
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre o funcionamento de Agentes e Modelos de IA Generativa.",
    "afirmacoes": ["Um modelo generativo de IA é retreinado ativamente antes de realizar a inferência de cada solicitação do usuário.", "Um agente de IA responde copiando e colando respostas engessadas de um banco de dados relacional.", "Um agente de IA usa um modelo de IA generativa para estabelecer etapas de ação com base na intenção do usuário."],
    "respostas": [false, false, true],
    "explicacao": "Modelos operam inferência com parâmetros estáticos, não são retreinados para cada prompt. Eles também não copiam texto de bancos de dados. Um agente utiliza a capacidade de raciocínio do modelo fundacional para interpretar a entrada e orquestrar ações.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 14
  {
    "tipo": "dragdrop",
    "texto": "Associe as diretrizes de governança ao seu respectivo princípio oficial de IA Responsável da Microsoft.",
    "itens": [{ "label": "Imparcialidade (Fairness)" }, { "label": "Privacidade e Segurança" }, { "label": "Transparência" }, { "label": "Confiabilidade e segurança (Reliability and safety)" }],
    "grupos": ["Garantir que as inferências do modelo NÃO prejudiquem nem favoreçam grupos demográficos específicos.", "Aplicar criptografia em dados de clientes e utilizar RBAC para restringir o acesso.", "Comunicar claramente aos usuários que o sistema é automatizado e descrever suas capacidades e limitações.", "Submeter o sistema de IA a testes adversários para mitigar o risco de falhas não previstas."],
    "respostas": {
      "Garantir que as inferências do modelo NÃO prejudiquem nem favoreçam grupos demográficos específicos.": ["Imparcialidade (Fairness)"],
      "Aplicar criptografia em dados de clientes e utilizar RBAC para restringir o acesso.": ["Privacidade e Segurança"],
      "Comunicar claramente aos usuários que o sistema é automatizado e descrever suas capacidades e limitações.": ["Transparência"],
      "Submeter o sistema de IA a testes adversários para mitigar o risco de falhas não previstas.": ["Confiabilidade e segurança (Reliability and safety)"]
    },
    "explicacao": "No glossário de exames da Microsoft, 'Fairness' é traduzido como Imparcialidade (lidando com vieses demográficos). Criptografia é Privacidade e Segurança. Explicabilidade da máquina é Transparência. Prevenção e resiliência a falhas é Confiabilidade e Segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 15
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações conceituais sobre IA Generativa.",
    "afirmacoes": ["O ato de processar um prompt e gerar uma resposta para um usuário é chamado de inferência.", "Um modelo de IA generativa cria respostas colando diretamente trechos de documentos exatos de seus dados de treinamento originais.", "Um modelo de IA generativa constrói a saída prevendo estatisticamente o próximo token com base nos padrões linguísticos absorvidos."],
    "respostas": [true, false, true],
    "explicacao": "A etapa operacional onde o modelo gera resultados é a inferência. Modelos generativos (LLMs) funcionam via predição autorregressiva de tokens, eles não copiam e colam fragmentos literais de um repositório.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 16
  {
    "tipo": "unica",
    "texto": "Sua equipe precisa desenvolver uma solução que leia instruções em texto e sintetize imagens totalmente novas e originais para um catálogo de produtos. Qual carga de trabalho (workload) de IA fornece essa capacidade?",
    "opcoes": ["análise de imagem (image analysis)", "geração de imagem (image generation)", "detecção de objetos (object detection)", "reconhecimento óptico de caracteres (OCR)"],
    "resposta": 1,
    "explicacao": "Modelos fundacionais voltados à criação (como o DALL-E) realizam a tarefa de Geração de Imagem (Image Generation), materializando os conceitos textuais do prompt em ativos visuais inéditos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models#dall-e",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 17
  {
    "tipo": "combobox",
    "texto": "Soluções projetadas para detectar caracteres físicos, ler formulários e mapear texto em imagens digitalizadas dependem inerentemente do campo de estudo da <combobox>.",
    "opcoes": ["Selecione uma opção", "visão computacional (computer vision)", "geração de imagem (image generation)", "análise de sentimentos (sentiment analysis)", "síntese de fala (speech synthesis)"],
    "resposta": 1,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) necessário para extrair textos legíveis a partir da estrutura de pixels de imagens é um subdomínio fundamental da Visão Computacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 18
  {
    "tipo": "unica",
    "texto": "Em um projeto com uma implantação de modelo generativo, você recebe a tarefa de controlar os custos de API garantindo que as respostas do modelo nunca excedam um limite de comprimento (tamanho) pré-definido. Qual configuração você deve ajustar na requisição?",
    "opcoes": ["Top P", "Temperatura (Temperature)", "Tokens Máximos de Conclusão (Max Completion Tokens)", "Configurações da versão de implantação"],
    "resposta": 2,
    "explicacao": "A limitação física da resposta é controlada pelo parâmetro Max Completion Tokens. Ao definir esse limite, o serviço interrompe a geração assim que a cota é atingida, permitindo prever e minimizar o custo da inferência por chamada.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/reference",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 19
  {
    "tipo": "simnao",
    "texto": "Avalie as práticas organizacionais abaixo frente aos Princípios de IA Responsável.",
    "afirmacoes": ["Adotar diretrizes 'humano no controle' (human-in-the-loop) reforça o princípio de Responsabilidade (Accountability) para as decisões finais da IA.", "Após a implantação de um modelo estabilizado em produção, a necessidade de avaliações e monitoramentos contínuos é eliminada.", "Divulgar em relatórios internos os nomes dos engenheiros que projetaram o sistema transfere e conclui a meta de Responsabilidade (Accountability)."],
    "respostas": [true, false, false],
    "explicacao": "O princípio de Responsabilidade garante que os algoritmos estejam sujeitos à revisão de um moderador humano final. Modelos em produção sempre sofrem desgaste e exigem monitoramento de deriva (drift). A responsabilidade é uma governança corporativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 20
  {
    "tipo": "unica",
    "texto": "Um sistema de inteligência extrai insights de solicitações de suporte ao cliente. Você precisa que a solução varra o corpo de texto não estruturado para isolar ativamente menções a pessoas, nomes de empresas e cidades. Qual recurso de PNL atende a essa exigência?",
    "opcoes": ["Reconhecimento de Entidades Nomeadas (NER)", "Extração de frases-chave", "Análise de sentimentos", "Geração de resumo"],
    "resposta": 0,
    "explicacao": "O Reconhecimento de Entidades Nomeadas (NER) varre o texto, identifica categorias predefinidas (como Pessoas, Locais e Organizações) e extrai esses nós isoladamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 21
  {
    "tipo": "combobox",
    "texto": "Garantir processos de governança onde agentes humanos inspecionam as recomendações da IA e assumem os resultados da aprovação final é o alicerce do princípio de <combobox> da Microsoft.",
    "opcoes": ["Selecione uma opção", "Responsabilidade (Accountability)", "Imparcialidade (Fairness)", "Privacidade e segurança", "Transparência"],
    "resposta": 1,
    "explicacao": "A IA Responsável não delega culpa para os algoritmos. O princípio de Responsabilidade (Accountability) afirma que os humanos mantêm a propriedade sobre as decisões apoiadas pelo modelo de inteligência.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 22
  {
    "tipo": "unica",
    "texto": "Você recebeu a tarefa de criar uma aplicação que toma breves descrições do catálogo de produtos como entrada e compõe, a partir do zero, campanhas e e-mails de marketing coerentes para os clientes. Qual área da IA atende a isso?",
    "opcoes": ["reconhecimento de fala", "classificação de texto", "IA generativa", "visão computacional"],
    "resposta": 2,
    "explicacao": "Criar blocos criativos estendidos e originais de texto com base em orientações enxutas no prompt é o caso de uso definitivo da Inteligência Artificial Generativa (LLMs).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 23
  {
    "tipo": "simnao",
    "texto": "Avalie o fluxo de chamadas a modelos generativos no Azure.",
    "afirmacoes": ["Os desenvolvedores devem fixar o parâmetro de Temperatura (Temperature) durante o provisionamento e implantação do modelo na nuvem.", "Para solicitar uma inferência, o aplicativo cliente roteia a requisição HTTP usando o nome base da arquitetura do modelo.", "Uma vez ativo no Azure, o modelo responderá de forma equivalente a chamadas REST oriundas de aplicativos ou sessões no Playground web."],
    "respostas": [false, false, true],
    "explicacao": "A Temperatura é injetada livremente a cada requisição de inferência e não é fixada na implantação. O roteamento exige que o cliente informe o Nome da Implantação (Deployment Name) que a empresa escolheu.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 24
  {
    "tipo": "combobox",
    "texto": "Realizar testes e equalizações em matrizes de desempenho para garantir que grupos demográficos distintos obtenham um nível de precisão semelhante atende primariamente ao princípio de <combobox>.",
    "opcoes": ["Selecione uma opção", "Responsabilidade (Accountability)", "Imparcialidade (Fairness)", "Privacidade e segurança", "Transparência"],
    "resposta": 2,
    "explicacao": "O princípio da Imparcialidade (Fairness) dita ativamente a erradicação de viés algorítmico, mitigando disparidades de desempenho ou recusas indesejadas em sistemas de IA que afetem comunidades baseadas em gênero, raça ou idade.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 25
  {
    "tipo": "combobox",
    "texto": "Como parte da declaração de Transparência, a Microsoft exige que os modelos e sistemas de IA <combobox>.",
    "opcoes": ["Selecione uma opção", "sejam explicáveis e claros para os usuários finais sobre suas interações e decisões", "empreguem rígidos controles de acesso e de chave do cliente", "adotem paridade algorítmica para erradicar decisões tendenciosas", "passem por rigoroso escrutínio e aprovação de agentes humanos"],
    "resposta": 1,
    "explicacao": "O princípio da Transparência determina que não haja engano: os indivíduos devem estar cientes de que estão utilizando IA e devem ser capazes de acessar uma explicação sobre a natureza da tomada de decisão ou do conteúdo gerado.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 26
  {
    "tipo": "unica",
    "texto": "Você lidera o comitê de ética na arquitetura de um novo assistente virtual para uma seguradora. Qual diretriz abaixo representa especificamente a aderência ao princípio de Inclusão (Inclusiveness)?",
    "opcoes": ["Assegurar que os dados trafegados entre o backend e a nuvem sejam anonimizados e encriptados.", "Estabelecer comitês de auditoria que documentem as divergências de desempenho entre gêneros.", "Garantir a integração do aplicativo com tecnologias assistivas, comandos de voz para limitação motora e acessibilidade em múltiplos idiomas.", "Apresentar aos operadores um dashboard mostrando o peso de cada variável matemática do modelo na deliberação."],
    "resposta": 2,
    "explicacao": "A Inclusão busca capacitar todos de maneira universal, engajando intencionalmente interfaces e experiências (leitores de tela, acessibilidade linguística e auditiva) que habilitem pessoas portadoras de deficiências a extrair o mesmo valor do sistema.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 27
  {
    "tipo": "combobox",
    "texto": "Um fluxo arquitetural fundamentado em receber variáveis soltas do usuário na entrada e combiná-las para gerar do zero conteúdos inéditos contextuais ilustra a modalidade de <combobox>.",
    "opcoes": ["Selecione uma opção", "compreensão e estruturação de documentos", "IA generativa (generative AI)", "extração de pares de informações nomeadas", "análise semântica e de viés"],
    "resposta": 2,
    "explicacao": "A inteligência artificial clássica é amplamente analítica (classificação ou reconhecimento). A IA Generativa distingue-se ao assumir o papel criador (síntese) desenvolvendo respostas novas, mídia digital e código de software a partir de diretivas estruturadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 28
  {
    "tipo": "simnao",
    "texto": "Avalie a implementação e as ramificações de Imparcialidade (Fairness).",
    "afirmacoes": ["Alcançar uma alta precisão média global no modelo de IA é evidência matemática suficiente de que o modelo atende aos requisitos de Imparcialidade.", "Auditar o desempenho do algoritmo segmentando as amostras de validação com base em grupos demográficos é um pilar da Imparcialidade.", "A Imparcialidade estipula que a arquitetura retorne o mesmo texto padrão engessado para todos os usuários sem diferenciação contextual."],
    "respostas": [false, true, false],
    "explicacao": "A precisão média pode mascarar falhas grotescas contra minorias no dataset (afirmação 1 falsa). O objetivo da Imparcialidade é evitar a discriminação estrutural avaliando coortes, mas não significa perder a capacidade de entregar respostas customizadas (afirmação 3 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 29
  {
    "tipo": "combobox",
    "texto": "Ao disparar cargas de documentos complexos visando extração para a nuvem da Inteligência de Documentos, a interface REST se comporta por design de forma <combobox>.",
    "opcoes": ["Selecione uma opção", "completamente síncrona aguardando finalização", "assíncrona baseada em polling de operação longa", "que resulta unicamente na entrega de um PDF vetorizado", "restrita à formatação de matriz de pixels (OCR legada)"],
    "resposta": 2,
    "explicacao": "Tarefas avançadas baseadas em esquema no Content Understanding/Inteligência de Documentos são disparadas de forma assíncrona; o cliente HTTP inicia a tarefa, recebe um token de rastreio (poller) e consulta ativamente o serviço posteriormente para consumir a matriz JSON da extração.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/concept-document-intelligence",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 30
  {
    "tipo": "unica",
    "texto": "No ambiente Azure, uma aplicação precisa ser codificada para disparar solicitações contra um modelo que você configurou no hub. Além do payload JSON e das chaves atreladas à segurança (credenciais de autenticação), o que informa à rede a localização do serviço?",
    "opcoes": ["A exportação serializada do ambiente do Playground.", "O manifesto integral dos dados de Fine-Tuning do recurso.", "O identificador de nomenclatura comercial do projeto Foundry.", "A URI do ponto de extremidade (endpoint) provisionado do modelo."],
    "resposta": 3,
    "explicacao": "Sempre que uma implantação de modelo é concluída, o portal aloca e provisiona uma URL pública (Ponto de extremidade / Endpoint) criptografada que seu código cliente deve consumir.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 31
  {
    "tipo": "simnao",
    "texto": "Avalie a estrutura operacional do serviço Inteligência de Documentos (Content Understanding).",
    "afirmacoes": ["As bibliotecas e análises da Inteligência de Documentos processam exclusivamente layouts em extensão PDF.", "O produto final consolidado das extrações no Azure é devolvido via estrutura de esquema no formato JSON.", "A captura inicial de texto visível ou manuscrito no pipeline de Inteligência de Documentos utiliza instâncias subjacentes de OCR."],
    "respostas": [false, true, true],
    "explicacao": "O escopo de suporte abrange imagens estáticas em PNG, TIFF e JPEG a planilhas Office complexas e vídeos (afirmação 1 falsa). Ele atua integrando o reconhecimento óptico de base (OCR) a camadas de compreensão de linguagem e envia os campos via JSON estruturado.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Identificar os conceitos e os recursos de IA",
    "simulado": "ai901-bloco01"
  },
  // Questão Original: 32
  {
    "tipo": "simnao",
    "texto": "O comportamento orquestrador de um agente que interage com APIs externas pode ser modificado controlando o atributo `tool_choice` da comunicação. Avalie as afirmações.",
    "afirmacoes": ["Quando o parâmetro é ajustado para 'auto', o modelo tem permissão total para avaliar se usar ou não a ferramenta trará valor ao prompt.", "Quando o parâmetro é ajustado para 'none', a autonomia algorítmica escolhe uma ferramenta de forma arbitrária.", "Quando o parâmetro é ajustado para 'required', a engine subjacente é estritamente obrigada a acionar as chamadas de função registradas antes de consolidar a resposta."],
    "respostas": [true, false, true],
    "explicacao": "A opção 'auto' permite autonomia inteligente, enquanto 'required' força o acionamento. No entanto, o comando 'none' não permite autonomia arbitrária; ele restringe totalmente as chamadas, forçando o LLM a operar restrito ao processamento puro sem acionar a ferramenta.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/function-calling",
    "dominio": "Implementar soluções de IA usando Microsoft Foundry",
    "simulado": "ai901-bloco01"
  }
  
];