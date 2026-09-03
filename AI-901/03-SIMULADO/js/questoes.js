// ==========================================
// Arquivo: questoes_bloco03.js
// Descrição: Simulado AI-901 (Microsoft Azure AI Fundamentals) — tradução PT-BR (Contexto Oficial Microsoft)
// BLOCO 03 de 04 — Visão Computacional, PNL, IA Generativa e IA Responsável
// 32 questões — distribuição balanceada conforme guia oficial de estudos
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL: Questões de 65 a 96.
// ==========================================

export const questoes = [
  // Questão Original: 65
  {
    "tipo": "unica",
    "texto": "Você tem um projeto do Microsoft Foundry (Azure AI Studio) que contém uma implantação (deployment) de modelo GPT habilitado para visão. Você precisa desenvolver um aplicativo que envie uma imagem e uma pergunta em texto para o modelo em uma única solicitação (request). O que você deve usar?",
    "opcoes": [
      "Apenas o ponto de extremidade da API de Imagens do Azure OpenAI",
      "A API REST de Fala para Texto (Speech-to-text)",
      "A API REST de Análise de Imagem (Image Analysis)",
      "A API de Respostas do Azure OpenAI (Responses API / Chat Completions)"
    ],
    "resposta": 3,
    "explicacao": "Para enviar mensagens multimodais (texto + imagem) em uma única requisição para modelos como o GPT-4o, você deve usar a API de Respostas (Chat Completions API), que suporta nativamente o encapsulamento de arrays de conteúdo misto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 66
  {
    "tipo": "combobox",
    "texto": "Para habilitar que um agente no Microsoft Foundry (Azure AI Studio) chame o recurso de análise de texto do Azure Language como uma ferramenta, você deve configurar <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "um índice do Azure AI Search",
      "uma implantação de modelo base",
      "o servidor MCP (Model Context Protocol) do Azure Language",
      "um ponto de extremidade do Azure Speech"
    ],
    "resposta": 2,
    "explicacao": "O Azure utiliza servidores MCP (Model Context Protocol) gerenciados para expor capacidades cognitivas (como análise de sentimentos e PNL do Azure Language) de forma padronizada para que agentes autônomos possam invocá-las como ferramentas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/agents/overview",
    "dominio": "Construção de Agentes e Ferramentas",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 67
  {
    "tipo": "combobox",
    "texto": "Para processar prompts que contêm imagens, você deve implantar um modelo <combobox> no Microsoft Foundry (Azure AI Studio).",
    "opcoes": [
      "Selecione uma opção",
      "apenas de texto (text-only)",
      "de conversão de fala em texto (speech-to-text)",
      "multimodal",
      "de embeddings"
    ],
    "resposta": 2,
    "explicacao": "Modelos multimodais (como a família GPT-4o ou Claude 3 Vision) são treinados com arquiteturas capazes de interpretar simultaneamente tokens de texto e embeddings de imagem/visuais na mesma camada de atenção.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 68
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo chamado App1 que analisa o feedback de clientes. O App1 chamará as ferramentas do Azure Language a partir de um agente de IA generativa. Você precisa garantir que o agente possa acessar a análise de texto do Azure Language. O que você deve configurar?",
    "opcoes": [
      "uma implantação de modelo no Foundry",
      "o servidor MCP do Azure Language",
      "um ponto de extremidade de serviço do Azure Speech",
      "um índice do Azure AI Search"
    ],
    "resposta": 1,
    "explicacao": "O servidor MCP (Model Context Protocol) gerenciado fornece o ambiente de computação seguro e a interface padronizada que permite que agentes LLM invoquem diretamente os serviços de análise do Azure Language como se fossem funções.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/agents/overview",
    "dominio": "Construção de Agentes e Ferramentas",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 69
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo em Python que extrai campos de faturas usando o Azure Content Understanding (Inteligência de Documentos). Você envia um PDF para análise. O que o aplicativo deve fazer para recuperar os resultados?",
    "opcoes": [
      "Chamar repetidamente `begin_analyze()` com as mesmas entradas para forçar uma resposta síncrona.",
      "Enviar uma solicitação GET ao ponto de extremidade para baixar o esquema (schema) do analisador.",
      "Sondar (poll) os resultados da operação até que o trabalho de análise assíncrona seja concluído com êxito.",
      "Usar OCR (Reconhecimento Óptico de Caracteres) para analisar o texto do PDF e mapear os campos diretamente no código Python."
    ],
    "resposta": 2,
    "explicacao": "A análise de documentos é uma operação de longa duração (LRO). O método `begin_analyze()` inicia o trabalho e retorna um objeto `poller`. A aplicação deve consultar (poll) esse objeto (usando `.result()`) até que a extração seja finalizada na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/quickstarts/get-started-sdks-rest-api",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 70
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre os recursos do Azure Content Understanding (Inteligência de Documentos).",
    "afirmacoes": [
      "Um analisador do Azure Content Understanding retorna os resultados da extração no formato HTML.",
      "A API REST do Content Understanding analisa o conteúdo de forma síncrona e sempre retorna os resultados na mesma resposta inicial.",
      "O Azure Content Understanding pode extrair informações estruturadas de arquivos de documentos, imagens, áudio e vídeo."
    ],
    "respostas": [false, false, true],
    "explicacao": "A afirmação 1 é falsa: a API retorna um esquema altamente estruturado em JSON, não HTML. A afirmação 2 é falsa: a API opera de forma assíncrona baseada em polling devido à alta demanda computacional. A afirmação 3 é verdadeira no contexto das ferramentas de Content Understanding de próxima geração (Foundry) que oferecem suporte multimodal unificado (incluindo áudio e vídeo).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/overview",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 71
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre a interação com modelos visuais no Azure AI.",
    "afirmacoes": [
      "Para processar prompts que contêm imagens, você deve obrigatoriamente implantar um modelo de IA generativa multimodal.",
      "No playground do Azure AI Studio (Foundry), você pode fornecer uma imagem fazendo o upload de um arquivo local ou especificando uma URL publicamente acessível.",
      "Um modelo multimodal pode interpretar e analisar múltiplas imagens incluídas de uma só vez em um único prompt de usuário."
    ],
    "respostas": [true, true, true],
    "explicacao": "Modelos restritos a texto falharão ao receber payloads de imagem (afirmação 1 verdadeira). O Playground oficial suporta tanto anexo de arquivos locais quanto URLs (afirmação 2 verdadeira). Modelos como o GPT-4o e Claude 3 suportam arrays com dezenas de imagens simultâneas no mesmo prompt para tarefas comparativas (afirmação 3 verdadeira).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 72
  {
    "tipo": "combobox",
    "texto": "Ao usar a API do Azure Content Understanding para processar faturas usando seu analisador personalizado, você deve passar o parâmetro <combobox> na função `begin_analyze`.",
    "opcoes": [
      "Selecione uma opção",
      "analyzer_id",
      "extraction_type",
      "model_name",
      "schema_id"
    ],
    "resposta": 1,
    "explicacao": "Ao chamar a API ou o SDK (Python), você deve identificar qual modelo de extração usar informando o parâmetro `analyzer_id` (anteriormente conhecido como `model_id` no Form Recognizer). Ex: `analyzer_id=\"invoiceAnalyzer\"`.",
    "link": "https://learn.microsoft.com/pt-br/python/api/azure-ai-documentintelligence/",
    "dominio": "Mineração de Conhecimento e Inteligência de Documentos",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 73
  {
    "tipo": "combobox",
    "texto": "Para desenvolver um aplicativo Python que use a biblioteca cliente do Azure OpenAI para enviar prompts de texto e obter conclusões de um modelo GPT-4o, você deve usar o módulo `client.<combobox>.create`.",
    "opcoes": [
      "Selecione uma opção",
      "chat.completions",
      "embeddings",
      "images",
      "responses"
    ],
    "resposta": 1,
    "explicacao": "A classe `chat.completions` é o padrão da API REST/SDK para interagir com a família GPT (Chat Completions API), encapsulando papéis (system, user, assistant) em uma estrutura de diálogo interativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/chatgpt",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 74
  {
    "tipo": "unica",
    "texto": "No portal do Microsoft Foundry (Azure AI Studio), você cria um agente chamado Agent1 e, em seguida, o implanta (deploy). Você abre o Playground para testar o Agent1. O que o Playground usa para garantir que os testes reflitam o comportamento exato de produção?",
    "opcoes": [
      "Uma configuração padrão genérica gerada pelo playground.",
      "O comportamento base do modelo de IA, desconsiderando as instruções ou ferramentas do agente.",
      "A configuração atualizada do Agent1.",
      "O último rascunho de configuração (draft) salvo que NÃO foi implantado."
    ],
    "resposta": 2,
    "explicacao": "Para que os testes sejam fidedignos, o Playground se conecta e utiliza a configuração efetiva e implantada do agente selecionado (Agent1), honrando suas restrições de ferramentas e prompts do sistema em vigor na produção.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-studio/how-to/prompt-flow-playground",
    "dominio": "Construção de Agentes e Ferramentas",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 75
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo que resume comentários de clientes usando as ferramentas do Azure Language. Qual pacote Python você deve instalar para usar o SDK oficial?",
    "opcoes": [
      "azure-ai-translation-text",
      "azure-ai-textanalytics",
      "azure-search-documents",
      "langchain"
    ],
    "resposta": 1,
    "explicacao": "Os recursos clássicos e avançados de Processamento de Linguagem Natural (PNL) do Azure, incluindo resumo de texto, extração de frases-chave e análise de sentimentos, são consumidos programaticamente via pacote `azure-ai-textanalytics`.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/summarization/overview",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 76
  {
    "tipo": "combobox",
    "texto": "Um modelo fundacional de IA multimodal tem a capacidade primária de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "analisar prompts de imagem, extrair contexto e interagir sobre esses elementos visuais",
      "criar novos conteúdos visuais a partir de diretrizes exclusivas de texto",
      "organizar dados numéricos estruturados em categorias preditivas clássicas",
      "usar correspondência de pixels estáticos para buscar imagens em um banco de dados SQL"
    ],
    "resposta": 1,
    "explicacao": "Modelos multimodais (como GPT-4o) transcendem o texto puro; eles analisam nativamente dados de imagem, conseguindo identificar objetos, transcrever textos da imagem e raciocinar sobre o contexto visual fornecido no prompt.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 77
  {
    "tipo": "combobox",
    "texto": "Um assistente virtual ou bot de chamadas que converte solicitações faladas de clientes (áudio) em texto escrito depende de uma carga de trabalho de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "extração de frases-chave",
      "compreensão de linguagem natural (NLU)",
      "reconhecimento de fala (speech recognition)",
      "análise de texto"
    ],
    "resposta": 3,
    "explicacao": "O ato mecânico acústico de escutar ondas sonoras faladas por um usuário e transcrevê-las em caracteres de texto digitais é a definição exata de Reconhecimento de Fala (Speech-to-Text).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-to-text",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 78
  {
    "tipo": "simnao",
    "texto": "Avalie as capacidades dos diferentes tipos de modelos de IA.",
    "afirmacoes": [
      "Um modelo de resumo (summarization model) tem como função principal transcrever áudio falado em texto escrito.",
      "Um modelo de conclusão de chat (chat completion model) é a arquitetura recomendada e principal para gerar embeddings vetoriais puros.",
      "Um modelo de embeddings (embedding model) gera representações numéricas vetoriais do texto fornecido na entrada."
    ],
    "respostas": [false, false, true],
    "explicacao": "Modelos de resumo processam texto longo para criar versões curtas, não transcrevem áudio (afirmação 1 falsa). Modelos de chat geram tokens legíveis, não vetores matemáticos puros (afirmação 2 falsa). Modelos de embedding (`text-embedding-ada-002`, `text-embedding-3-small`) são feitos exclusivamente para converter strings em vetores matemáticos para buscas semânticas RAG (afirmação 3 verdadeira).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models#embeddings-models",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 79
  {
    "tipo": "simnao",
    "texto": "Avalie as seguintes práticas em relação ao princípio de Inclusão (Inclusiveness) em IA Responsável.",
    "afirmacoes": [
      "Limitar um sistema de IA a um único método de entrada de usuário (apenas teclado, por exemplo) garante uma experiência inclusiva consistente.",
      "Aumentar pura e simplesmente o número total de usuários que utilizam o sistema valida que o sistema alcançou a inclusão.",
      "Projetar um sistema de IA que acomode usuários com diferentes preferências e capacidades de idioma apoia ativamente a inclusão."
    ],
    "respostas": [false, false, true],
    "explicacao": "A inclusão significa não deixar ninguém para trás. Forçar apenas um método de entrada prejudica pessoas com deficiências motoras (afirmação 1 falsa). Quantidade de tráfego não significa que há diversidade de usuários (afirmação 2 falsa). Suportar múltiplos idiomas e acessibilidade é o pilar da inclusão (afirmação 3 verdadeira).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 80
  {
    "tipo": "simnao",
    "texto": "Avalie os cenários à luz do princípio de Privacidade e Segurança (Privacy and Security) em IA Responsável.",
    "afirmacoes": [
      "Limitar o acesso a sistemas de IA e dados utilizando controles baseados em função (RBAC) reduz o risco de exposição não autorizada de dados.",
      "Compartilhar dados pessoais não mascarados dos usuários entre equipes melhora a colaboração e apoia as práticas de IA responsável.",
      "Proteger dados pessoais criptografando bancos de dados e cumprir as regulamentações governamentais de dados são considerações essenciais da IA responsável."
    ],
    "respostas": [true, false, true],
    "explicacao": "O princípio de Privacidade e Segurança exige rigor máximo. RBAC e Criptografia são ferramentas essenciais (afirmações 1 e 3 verdadeiras). Compartilhar dados confidenciais descriptografados é uma grave violação de privacidade (afirmação 2 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 81
  {
    "tipo": "unica",
    "texto": "Você precisa implantar (deploy) um modelo de IA generativa em um projeto do Microsoft Foundry (Azure AI Studio). Qual fator é o delimitador primário que você deve consultar para identificar se um determinado modelo pode ser implantado no seu projeto?",
    "opcoes": [
      "O tamanho da janela de contexto de tokens.",
      "A disponibilidade regional do modelo nos datacenters do Azure.",
      "O método de autenticação exigido pela nuvem corporativa.",
      "O suporte interno a APIs REST."
    ],
    "resposta": 1,
    "explicacao": "A infraestrutura de IA requer hardware altamente especializado (clusters de GPUs dedicadas). Portanto, a disponibilidade de modelos fundacionais varia pesadamente de acordo com a Região do Azure em que seu recurso/projeto foi provisionado. Checar a disponibilidade regional é a primeira etapa arquitetural.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 82
  {
    "tipo": "simnao",
    "texto": "Avalie as capacidades da Análise de Imagem (Image Analysis) no Azure Vision.",
    "afirmacoes": [
      "As capacidades de análise de imagem no Azure Vision podem realizar reconhecimento óptico de caracteres (OCR).",
      "As capacidades de análise de imagem no Azure Vision podem gerar legendas curtas e tags descritivas detalhando os objetos da imagem.",
      "As capacidades de análise de imagem são projetadas nativamente para criar novas imagens a partir de descrições de texto (Text-to-Image)."
    ],
    "respostas": [true, true, false],
    "explicacao": "O serviço Azure AI Vision extrai texto nativamente com o recurso Read/OCR (afirmação 1 verdadeira) e analisa características de imagens preexistentes para inferir legendas descritivas (afirmação 2 verdadeira). Porém, a geração de imagens inéditas (DALL-E) é competência exclusiva da IA Generativa, não da API de Análise de Imagem (afirmação 3 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-image-analysis",
    "dominio": "Visão Computacional",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 83
  {
    "tipo": "combobox",
    "texto": "O princípio da Microsoft de Confiabilidade e Segurança (Reliability and Safety) exige estritamente que os sistemas de IA <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "habilitem e exijam supervisão humana em todas as instâncias (human-in-the-loop)",
      "garantam resultados matematicamente equitativos para minorias",
      "operem consistentemente e de forma previsível sob condições normais e inesperadas",
      "forneçam explicações claras sobre como a rede neural processou a decisão"
    ],
    "resposta": 3,
    "explicacao": "A Confiabilidade e Segurança exige que testes de intrusão, cenários adversariais e tratamentos de erro sejam feitos exaustivamente para garantir que a IA não cause danos físicos, não alucine perigosamente e seja resiliente contra ataques de prompt injection ou falhas no sistema.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 84
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre os serviços e capacidades do Azure Speech (Fala).",
    "afirmacoes": [
      "A transcrição em lote (batch transcription) do Azure Speech exige que o áudio seja fornecido ao vivo por meio de um microfone conectado à rede.",
      "A API do Azure Speech tem a capacidade de analisar frames de vídeo visualmente para detectar e rotular objetos enquanto transcreve o áudio.",
      "A tradução de fala (Speech Translation) do Azure suporta exclusivamente a tradução de fala para saídas faladas em outro idioma (Speech-to-Speech), sem gerar logs textuais."
    ],
    "respostas": [false, false, false],
    "explicacao": "Batch Transcription é projetado especificamente para arquivos estáticos pré-gravados, não áudio ao vivo (afirmação 1 falsa). O serviço Speech processa exclusivamente espectros acústicos, não faz inferência de pixels/vídeo (afirmação 2 falsa). O serviço de tradução suporta tradução gerando log de texto E/OU gerando áudio traduzido (afirmação 3 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/speech-service/speech-translation",
    "dominio": "Processamento de Linguagem Natural e Voz",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 85
  {
    "tipo": "combobox",
    "texto": "Após um modelo de IA generativa ser implantado, as aplicações externas enviam solicitações de inferência para o modelo chamando o <combobox> do modelo na nuvem.",
    "opcoes": [
      "Selecione uma opção",
      "ponto de extremidade da API (API endpoint)",
      "vetor de embedding (embedding vector)",
      "conjunto de dados de treinamento (training dataset)",
      "parâmetro de URL de hiperparâmetros"
    ],
    "resposta": 1,
    "explicacao": "O Ponto de Extremidade (Endpoint) atua como o endereço web e a 'porta da frente' de comunicação segura para serviços hospedados no Azure interagirem com o modelo que foi escalado e provisionado nos datacenters da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/create-resource",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 86
  {
    "tipo": "simnao",
    "texto": "Avalie as regras de operação dos Modelos de Linguagem e Prompts.",
    "afirmacoes": [
      "Modelos de IA generativa geram o resultado ao prever estatisticamente o próximo token de uma sequência com base nos padrões linguísticos absorvidos durante o treinamento.",
      "Um prompt de sistema (system prompt) pode ser usado de forma eficaz para influenciar os limites éticos, o comportamento e o tom das respostas do modelo.",
      "Aumentar o valor do parâmetro de Temperatura (Temperature) torna as respostas geradas pelos modelos mais conservadoras, determinísticas e consistentes."
    ],
    "respostas": [true, true, false],
    "explicacao": "LLMs operam sob probabilidade estocástica (afirmação 1 verdadeira) e são amplamente domados pelas instruções do sistema (afirmação 2 verdadeira). Porém, diminuir a Temperatura (para 0.0) é o que torna as respostas determinísticas; aumentar o valor introduz maior variação e criatividade imprevisível (afirmação 3 falsa).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/reference",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 87
  {
    "tipo": "unica",
    "texto": "Você está implantando um modelo de IA generativa no Azure AI Studio. Durante a configuração, você atribui uma alocação significativamente maior de Tokens Por Minuto (TPM) para o modelo. Qual é o resultado direto dessa alteração de configuração?",
    "opcoes": [
      "A disponibilidade regional do modelo sofre alterações restritivas.",
      "O modelo passará automaticamente a gerar respostas com contagens de palavras mais longas.",
      "O modelo passará a gerar respostas mais curtas, compensando com citações adicionais de fontes RAG.",
      "A velocidade de vazão (throughput) e a escala com a qual a implantação pode processar as chamadas são alteradas."
    ],
    "resposta": 3,
    "explicacao": "A cota de Tokens Por Minuto (TPM) dita estritamente a capacidade de infraestrutura. Um limite TPM mais alto permite que mais requisições simultâneas e blocos de texto maiores sejam roteados em um espaço menor de tempo antes de disparar o erro HTTP 429 (Rate Limit).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/quota",
    "dominio": "Fundamentos de IA do Azure",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 88
  {
    "tipo": "unica",
    "texto": "Sua empresa documenta ativamente e fornece aos usuários informações claras e acessíveis sobre o propósito, o funcionamento, as fontes de dados e as limitações lógicas do sistema de IA. Esse cenário é um exemplo prático de qual princípio de IA responsável?",
    "opcoes": [
      "Transparência (Transparency)",
      "Prestação de contas (Accountability)",
      "Justiça (Fairness)",
      "Confiabilidade e segurança (Reliability and safety)"
    ],
    "resposta": 0,
    "explicacao": "A Transparência significa mitigar o efeito 'caixa-preta' da IA, garantindo que o usuário final entenda o que a máquina pode e não pode fazer, minimizando falsas expectativas e divulgando claramente os casos de uso previstos para a solução.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 89
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações sobre a implementação da Transparência em Sistemas de IA.",
    "afirmacoes": [
      "A transparência tem como objetivo central focar no aumento do desempenho arquitetural e taxa de transferência (throughput) da IA.",
      "O princípio da Transparência é ativamente apoiado quando os usuários são formalmente informados sobre os limites operacionais de um sistema de IA.",
      "Fornecer explicações algorítmicas significativas de como um sistema de IA gerou seus resultados apoia fortemente o princípio da transparência."
    ],
    "respostas": [false, true, true],
    "explicacao": "Desempenho e throughput (TPM) são métricas de engenharia e DevOps, sem correlação ética com a transparência (afirmação 1 falsa). Explicar ao usuário as fraquezas da IA e como ela decide as métricas são os pilares morais da transparência e inteligibilidade (afirmações 2 e 3 verdadeiras).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 90
  {
    "tipo": "unica",
    "texto": "Você está construindo uma solução de IA baseada em Azure que processa informações confidenciais de clientes. Qual tarefa do projeto é uma implementação direta do princípio de IA Responsável de Privacidade e Segurança?",
    "opcoes": [
      "Criptografar dados armazenados de clientes e restringir rigorosamente o acesso ao sistema usando RBAC.",
      "Fornecer explicações detalhadas em UI sobre como o sistema gerou as previsões financeiras.",
      "Fazer simulações de estresse no sistema sob condições inesperadas para prevenir falhas arquiteturais prejudiciais.",
      "Avaliar sistematicamente os resultados do modelo em grupos demográficos variados para neutralizar vieses embutidos."
    ],
    "resposta": 0,
    "explicacao": "Criptografia at-rest e in-transit, associadas ao Controle de Acesso Baseado em Funções (RBAC), constituem a camada técnica mandatória para proteger os dados pessoais contra uso não autorizado, validando as leis globais de Privacidade e Segurança (como LGPD e GDPR).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 91
  {
    "tipo": "unica",
    "texto": "Sua empresa implanta um sistema corporativo de IA para auxiliar nas decisões de contratação de RH. As diretrizes corporativas exigem que revisores humanos leiam as recomendações geradas pela IA e permaneçam os únicos responsáveis pela decisão final de contratação. Esse cenário é um exemplo prático de qual princípio de IA responsável?",
    "opcoes": [
      "Confiabilidade e segurança (reliability and safety)",
      "Justiça (fairness)",
      "Transparência (transparency)",
      "Prestação de contas (accountability)"
    ],
    "resposta": 3,
    "explicacao": "A Prestação de Contas (Accountability) decreta que a inteligência artificial não deve ser a dona de decisões com impactos significativos na vida real; a responsabilidade sobre a deliberação algorítmica deve sempre recair sobre a gestão de um profissional humano (Human-in-the-loop).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-responsible-ai",
    "dominio": "IA Responsável",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 92
  {
    "tipo": "simnao",
    "texto": "Avalie o escopo das capacidades de Modelos Multimodais e Computação de Visão.",
    "afirmacoes": [
      "Todos os modelos de IA, em sua concepção básica, podem ler matrizes visuais e gerar novas imagens.",
      "Um modelo de IA generativa habilitado para visão moderna tem a capacidade de atuar como OCR e extrair texto impresso dentro de imagens.",
      "Um modelo multimodal pode receber e analisar um prompt que carrega simultaneamente um bloco de texto instrucional e blocos de imagens nativas."
    ],
    "respostas": [false, true, true],
    "explicacao": "Modelos tradicionais ou exclusivos de texto (como o antigo GPT-3.5 turbo) falharão catastroficamente ao processar pixels visuais (afirmação 1 falsa). Contudo, LLMs Vision modernos (GPT-4o) possuem capacidade robusta de transcrever textos visuais nas imagens submetidas (afirmação 2 verdadeira) e trabalhar com formatos mistos simultâneos (afirmação 3 verdadeira).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/how-to/gpt-with-vision",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 93
  {
    "tipo": "unica",
    "texto": "Sua equipe precisa construir uma solução de IA de suporte de TI. Essa solução deve ler perguntas dos usuários e criar, do zero, respostas longas, coerentes e escritas com explicações técnicas detalhadas e formatadas. Qual tipo de modelo de IA atende a esse cenário?",
    "opcoes": [
      "um modelo de geração de imagem (image generation model)",
      "um modelo de reconhecimento fonético de fala (speech recognition model)",
      "um modelo de geração de texto (text generation model)",
      "um modelo estático de criação de vetores de embedding (embedding model)"
    ],
    "resposta": 2,
    "explicacao": "Modelos de geração de texto (Large Language Models, como os modelos da família GPT ou Phi) são especializados em decodificar intenções complexas em linguagem natural e redigir novos parágrafos articulados, explicações e formatações contextuais do zero.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/concepts/models",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 94
  {
    "tipo": "multipla",
    "texto": "Em arquiteturas de nuvem, quais são DUAS tecnologias ou famílias clássicas que representam instâncias de 'Modelos de IA Generativa'? (Escolha duas)",
    "opcoes": [
      "Algoritmos clássicos de Visão Computacional (Classificação)",
      "A família de modelos fundacionais GPT",
      "A família de modelos fundacionais DALL-E",
      "A estrutura teórica arquitetural Transformer",
      "O campo abrangente de Processamento de Linguagem Natural (PNL)"
    ],
    "respostas": [1, 2],
    "explicacao": "GPT (Generative Pre-trained Transformer) cria textos inéditos e DALL-E (Digital Art...) cria artes visuais inéditas. Ambos são os principais produtos/modelos de IA Generativa. Visão Computacional e PNL clássicos são disciplinas de classificação e extração; Transformer é apenas o conceito arquitetônico acadêmico base.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/overview",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 95
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um aplicativo de chatbot inteligente. Ele usará processamento de linguagem natural (PNL) para executar as seguintes ações com base nas instruções digitadas pelos clientes: [Aceitar solicitações de devolução de produtos], [Localizar documentos de suporte corporativo], e [Consultar atualizações de status de pedidos no banco de dados]. Qual aspecto específico da PNL é necessário para que a máquina descubra qual dessas 3 ações o cliente deseja tomar?",
    "opcoes": [
      "análise de sentimentos (sentiment analysis)",
      "reconhecimento de entidades nomeadas (NER)",
      "tradução de texto ponta a ponta (translation)",
      "compreensão de linguagem coloquial / detecção de intenções (Language Understanding - CLU/LUIS)"
    ],
    "resposta": 3,
    "explicacao": "O módulo de Compreensão de Linguagem (Language Understanding ou CLU) é treinado para ler o que o usuário digita de forma livre e mapear essa frase para uma 'Intenção' (Intent) previamente cadastrada. É a espinha dorsal de chatbots que precisam executar ações baseadas na vontade do usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/conversational-language-understanding/overview",
    "dominio": "Processamento de Linguagem Natural",
    "simulado": "ai901-bloco03"
  },
  
  // Questão Original: 96
  {
    "tipo": "unica",
    "texto": "Analise o payload (corpo JSON) de uma solicitação de API REST em nuvem: \n`{ \"prompt\": \"Um urso polar na praia segurando um sorvete\", \"size\": \"1024x1024\", \"n\": 1, \"style\": \"vivid\" }`.\nQual modelo hospedado no Azure OpenAI deve ser chamado especificamente para processar e inferir este payload?",
    "opcoes": [
      "DALL-E",
      "Codex",
      "GPT-4o / GPT-4.1",
      "Whisper"
    ],
    "resposta": 0,
    "explicacao": "Parâmetros como descrição lúdica atrelados ao dimensionamento de pixels (`size: 1024x1024`), quantidade de quadros (`n: 1`) e estilização artística (`style: vivid`) são a sintaxe exata da API do DALL-E (versões 2 ou 3) hospedado pela Azure OpenAI.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/openai/reference#image-generation",
    "dominio": "IA Generativa",
    "simulado": "ai901-bloco03"
  }
];