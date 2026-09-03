// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [

  //FALTA A METADE DO SERGIO
  {
    "tipo": "unica",
    "texto": "Você precisa criar uma solução de suporte ao cliente para ajudar os clientes a acessarem informações. A solução deve dar suporte a canais de email, telefone e chat ao vivo. Qual tipo de solução de IA você deve usar?",
    "opcoes": [
      "aprendizado de máquina",
      "pesquisa visual computacional",
      "chatbot",
      "processamento de linguagem natural (PLN)"
    ],
    "resposta": 2,
    "explicacao": "Para uma solução de suporte ao cliente que interage através de email, telefone e chat ao vivo, um chatbot é a opção mais adequada. Chatbots são projetados para simular conversas humanas, responder a perguntas e fornecer suporte automatizado em diversos canais. Embora o Processamento de Linguagem Natural (PLN) seja uma tecnologia subjacente aos chatbots, e o aprendizado de máquina possa ser usado para treinar o chatbot, o 'chatbot' em si é o tipo de solução de IA que engloba essa funcionalidade de atendimento multicanal. Pesquisa visual computacional é para análise de imagens e não se aplica a este cenário.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview?view=azure-bot-service-4.0",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-3"
  },
  //167
  {
    "tipo": "dragdrop",
    "texto": "Faça a correspondência dos tipos de cargas de trabalho de IA com os cenários apropriados. Para responder, arraste o tipo de carga de trabalho apropriado da coluna à esquerda para seu cenário à direita. Cada tipo de carga de trabalho pode ser usado uma vez, mais de uma vez ou pode não ser usado.",
    "itens": [
      { "label": "Detecção de anomalias" },
      { "label": "Pesquisa visual computacional" },
      { "label": "Aprendizado de máquina (Clustering)" },
      { "label": "Processamento de linguagem natural" }
    ],
    "grupos": [
      "Identificar letras manuscritas.",
      "Prever o sentimento de uma postagem de mídia social.",
      "Identificar um pagamento incomum de cartão de crédito.",
      "Agrupar animais com base em múltiplas medições."
    ],
    "respostas": {
      "Identificar letras manuscritas.": ["Pesquisa visual computacional"],
      "Prever o sentimento de uma postagem de mídia social.": ["Processamento de linguagem natural"],
      "Identificar um pagamento incomum de cartão de crédito.": ["Detecção de anomalias"],
      "Agrupar animais com base em múltiplas medições.": ["Aprendizado de máquina (Clustering)"]
    },
    "explicacao": "1. 'Identificar letras manuscritas' é uma tarefa de Reconhecimento Óptico de Caracteres (OCR), que é uma funcionalidade da Pesquisa Visual Computacional, convertendo imagens de texto em texto legível por máquina.\n2. 'Prever o sentimento de uma postagem de mídia social' é uma aplicação fundamental do Processamento de Linguagem Natural, que envolve a análise de texto para determinar a polaridade emocional (positivo, negativo, neutro).\n3. 'Identificar um pagamento incomum de cartão de crédito' é um exemplo clássico de Detecção de Anomalias, onde o sistema busca padrões ou eventos que se desviam do comportamento normal ou esperado.\n4. 'Agrupar animais com base em múltiplas medições' é uma tarefa de Aprendizado Não Supervisionado e uma aplicação direta de Clustering, que agrupa pontos de dados semelhantes sem rótulos pré-definidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/what-are-ai-services",
    "dominio": "Descrever as cargas de trabalho e considerações sobre Inteligência Artificial",
    "simulado": "ai-3"
  },
  //168
  {
    "tipo": "unica",
    "texto": "Prever quantos veículos viajarão por uma ponte em um determinado dia é um exemplo de: Selecione a resposta que completa corretamente a frase.",
    "opcoes": [
      "regressão",
      "tradução",
      "classificação",
      "agrupamento"
    ],
    "resposta": 0,
    "explicacao": "Prever uma quantidade numérica contínua, como o número de veículos, é uma tarefa de regressão no aprendizado de máquina. A tradução se refere à conversão de texto entre idiomas. A classificação envolve a previsão de uma categoria discreta. O agrupamento (clustering) é uma técnica de aprendizado não supervisionado que encontra padrões e grupos em dados sem rótulos pré-definidos.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //169
  {
    "tipo": "unica",
    "texto": "Em um modelo de aprendizado de máquina, os dados usados como entradas são chamados de: Selecione a resposta que completa corretamente a frase.",
    "opcoes": [
      "conjunto de dados",
      "rótulos",
      "variáveis"
    ],
    "resposta": 2,
    "explicacao": "Em um modelo de aprendizado de máquina, os dados usados como entradas para o modelo são comumente chamados de variáveis ou recursos (features). O conjunto de dados é a coleção completa de todas as entradas e saídas. Rótulos são as saídas ou valores alvo que o modelo tenta prever, não as entradas.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-data",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //170
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase: Usar valores de Recência, Frequência e Monetário (RFM) para identificar segmentos de uma base de clientes é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "agrupamento",
      "regressão",
      "classificação",
      "regularização"
    ],
    "resposta": 1,
    "explicacao": "Identificar segmentos de uma base de clientes com base em características como RFM é uma tarefa de agrupamento (clustering). O agrupamento é uma técnica de aprendizado de máquina não supervisionado que organiza dados em grupos ou clusters, onde os dados dentro de um grupo são mais semelhantes entre si do que com os de outros grupos. Regressão prevê valores contínuos, classificação prevê categorias discretas e regularização é uma técnica para evitar overfitting em modelos.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/algorithm-cheat-sheet?view=azureml-api-1",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //171
  {
    "tipo": "dragdrop",
    "texto": "Você planeja implantar um modelo do Azure Machine Learning usando o designer do Machine Learning. Quais quatro ações você deve realizar em sequência? Para responder, mova as ações apropriadas da lista de ações para a área de resposta e organize-as na ordem correta.",
    "itens": [
      { "label": "Treinar o modelo." },
      { "label": "Dividir os dados aleatoriamente em dados de treinamento e dados de validação." },
      { "label": "Avaliar o modelo em relação ao conjunto de dados original." },
      { "label": "Avaliar o modelo em relação ao conjunto de dados de validação." },
      { "label": "Ingerir e preparar um conjunto de dados." }
    ],
    "grupos": [
      "Etapa 1",
      "Etapa 2",
      "Etapa 3",
      "Etapa 4"
    ],
    "respostas": {
      "Etapa 1": ["Ingerir e preparar um conjunto de dados."],
      "Etapa 2": ["Dividir os dados aleatoriamente em dados de treinamento e dados de validação."],
      "Etapa 3": ["Treinar o modelo."],
      "Etapa 4": ["Avaliar o modelo em relação ao conjunto de dados de validação."]
    },
    "explicacao": "O fluxo de trabalho padrão para implantar um modelo de Machine Learning geralmente segue uma sequência lógica. Primeiro, os dados precisam ser ingeridos e preparados. Em seguida, esses dados são divididos em conjuntos de treinamento e validação para garantir que o modelo possa ser avaliado em dados que não viu durante o treinamento. Depois disso, o modelo é treinado usando o conjunto de treinamento. Finalmente, o modelo é avaliado usando o conjunto de validação para determinar seu desempenho e generalização. Avaliar o modelo contra o conjunto de dados original não é a etapa primária para verificar a capacidade de generalização.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-ml-pipelines",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //172
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Organizar documentos em grupos com base em diferentes estatísticas de uso é um exemplo de agrupamento.",
      "Agrupar pacientes semelhantes com base em sintomas e resultados de testes de diagnóstico é um exemplo de agrupamento.",
      "Prever se uma pessoa desenvolverá sintomas de alergia leves, moderados ou graves com base na contagem de pólen é um exemplo de agrupamento."
    ],
    "respostas": [true, true, false],
    "explicacao": "O agrupamento (clustering) é uma técnica de aprendizado não supervisionado que organiza dados em grupos com base em sua similaridade. Organizar documentos por estatísticas de uso é uma aplicação direta de agrupamento. Agrupar pacientes com base em características clínicas semelhantes (sintomas e resultados de testes) para identificar subpopulações é uma aplicação comum de agrupamento em medicina. Prever uma categoria discreta (leves, moderados ou graves) é uma tarefa de classificação, não de agrupamento. O agrupamento seria usado para identificar grupos de pessoas com padrões semelhantes de sintomas de alergia, sem prever o resultado específico da gravidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/overview-what-is-azure-machine-learning?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //173
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase: Ao construir um modelo de regressão, os rótulos devem ter um tipo de dados <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "booleano",
      "data/hora",
      "numérico",
      "texto"
    ],
    "resposta": 3,
    "explicacao": "Em um modelo de regressão, o objetivo é prever um valor numérico contínuo. Portanto, os rótulos (as saídas ou valores alvo que o modelo tenta prever) devem ser do tipo de dados numérico. Tipos como booleano, data/hora ou texto não são apropriados para os rótulos de um problema de regressão.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-data?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //174
  {
    "tipo": "unica",
    "texto": "Você precisa criar um modelo de agrupamento e avaliar o modelo usando o designer do Azure Machine Learning. O que você deve fazer?",
    "opcoes": [
      "Dividir o conjunto de dados original em um conjunto de dados para treinamento e um conjunto de dados para teste. Use o conjunto de dados de teste para avaliação.",
      "Usar o conjunto de dados original para treinamento e avaliação.",
      "Dividir o conjunto de dados original em um conjunto de dados para recursos e um conjunto de dados para rótulos. Use o conjunto de dados de recursos para avaliação.",
      "Dividir o conjunto de dados original em um conjunto de dados para treinamento e um conjunto de dados para teste Use o conjunto de dados de treinamento para avaliação."
    ],
    "resposta": 0,
    "explicacao": "Para avaliar um modelo de aprendizado de máquina de forma robusta, incluindo modelos de agrupamento, é uma prática recomendada dividir o conjunto de dados em porções para treinamento e teste. Isso garante que o modelo seja avaliado em dados que não foram usados durante o treinamento, fornecendo uma estimativa mais realista de seu desempenho e capacidade de generalização. Embora o agrupamento seja uma técnica não supervisionada (sem rótulos de verdade), a divisão de dados ainda é importante para técnicas de validação cruzada ou para avaliar a estabilidade dos clusters. As outras opções levariam a avaliações superestimadas ou incorretas (usar todo o conjunto para treino e teste, ou avaliar com dados de treino, ou confundir recursos com rótulos).",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-designer?view=azureml-api-1",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //175  

  {
    "tipo": "unica",
    "imagemUrl": "img/175.png",
    "texto": "Você possui um conjunto de dados que contém as colunas mostradas na tabela. Você tem um modelo de aprendizado de máquina que prevê o valor da ColunaE com base nas outras colunas numéricas. Qual é o tipo desse modelo?",
    "opcoes": [
      "Análise",
      "Agrupamento",
      "Regressão"
    ],
    "resposta": 2,
    "explicacao": "O modelo está prevendo um valor numérico contínuo (ColunaE) com base em outras variáveis numéricas, o que caracteriza uma tarefa de regressão supervisionada.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/create-machine-learn-models/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //176
  {
    "tipo": "unica",
    "texto": "Você precisa rastrear múltiplas versões de um modelo que foi treinado usando o Azure Machine Learning. O que você deve fazer?",
    "opcoes": [
      "Explicar o modelo.",
      "Registrar o modelo.",
      "Registrar os dados de treinamento.",
      "Provisionar um cluster de inferência."
    ],
    "resposta": 1,
    "explicacao": "Para rastrear múltiplas versões de um modelo no Azure Machine Learning, a ação apropriada é registrar o modelo. O registro de modelos no Azure Machine Learning permite que você versionar, gerenciar e implantar diferentes iterações do seu modelo. Explicar o modelo refere-se a entender seu comportamento. Registrar os dados de treinamento é importante para reprodutibilidade, mas não gerencia as versões do modelo em si. Provisionar um cluster de inferência é para implantação e não para rastreamento de versões.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/concept-model-management-and-deployment?view=azureml-api-2",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //177
  {
    "tipo": "unica",
    "texto": "Você precisa identificar grupos de linhas com valores numéricos semelhantes em um conjunto de dados. Qual tipo de aprendizado de máquina você deve usar?",
    "opcoes": [
      "agrupamento",
      "regressão",
      "classificação"
    ],
    "resposta": 0,
    "explicacao": "O agrupamento (clustering) é uma técnica de aprendizado de máquina não supervisionado usada para identificar e agrupar linhas ou pontos de dados que compartilham características semelhantes, formando segmentos ou grupos distintos dentro do conjunto de dados. A regressão é usada para prever valores numéricos contínuos, enquanto a classificação é usada para prever categorias discretas.",
    "link": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //178
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase. Um sistema bancário que prevê se um empréstimo será pago é um exemplo do tipo de aprendizado de máquina <combobox>.",
    "opcoes": [
      "Selecione uma opção",
      "agrupamento",
      "regressão",
      "classificação"
    ],
    "resposta": 3,
    "explicacao": "Quando um modelo de aprendizado de máquina prevê uma categoria ou resultado discreto (como se um empréstimo será pago ou não), ele é um modelo de classificação. O agrupamento é usado para identificar grupos em dados, e a regressão é usada para prever valores numéricos contínuos.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamentals-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //179
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase. Modelos de <combobox> podem ser usados para prever o preço de venda de itens leiloados.",
    "opcoes": [
      "Selecione uma opção",
      "Classificação",
      "Agrupamento",
      "Regressão"
    ],
    "resposta": 3,
    "explicacao": "Para prever um valor numérico contínuo, como o preço de venda de itens, deve-se usar um modelo de regressão. A classificação é usada para prever categorias discretas, enquanto o agrupamento é usado para identificar grupos em dados sem rótulos predefinidos.",
    "link": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/",
    "dominio": "Descrever os princípios fundamentais do aprendizado de máquina no Azure",
    "simulado": "ai-3"
  },
  //180
  {
    "tipo": "combobox",
    "texto": "Um historiador pode usar <combobox> para digitalizar artigos de jornal.",
    "opcoes": [
      "Selecione a resposta",
      "Detecção de objetos",
      "Reconhecimento facial",
      "Classificação de imagem",
      "Reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 4,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é uma tecnologia que permite converter diferentes tipos de documentos, como documentos digitalizados ou artigos de jornal, em dados editáveis e pesquisáveis. É ideal para digitalizar textos impressos ou manuscritos e torná-los legíveis por máquina, o que é fundamental para historiadores que trabalham com arquivos de texto antigos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/document-intelligence/prebuilt/read?view=doc-intel-4.0.0&tabs=sample-code",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  //181
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Detecção de objetos pode identificar a localização de um produto danificado em uma imagem.",
      "Detecção de objetos pode identificar múltiplas instâncias de um produto danificado em uma imagem.",
      "Detecção de objetos pode identificar múltiplos tipos de produtos danificados em uma imagem."
    ],
    "respostas": [true, true, true],
    "explicacao": "A detecção de objetos é uma capacidade da visão computacional que não apenas identifica a presença de um objeto em uma imagem, mas também sua localização precisa (delimitando-o com uma caixa). Essa tecnologia pode identificar diversas ocorrências do mesmo objeto e, se treinada adequadamente, reconhecer diferentes categorias ou tipos de objetos dentro da mesma imagem, como diferentes tipos de danos em produtos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-object-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  //182
  {
    "tipo": "unica",
    "texto": "Você precisa criar um modelo que rotula uma coleção de suas fotografias digitais pessoais.\n\nQual serviço do Azure Cognitive Services você deve usar?",
    "opcoes": [
      "Form Recognizer",
      "Custom Vision",
      "Language",
      "Computer Vision"
    ],
    "resposta": 1,
    "explicacao": "O Azure Custom Vision permite que você crie e treine modelos de classificação de imagem personalizados para rotular e organizar suas coleções de fotos digitais. Ele é ideal para cenários onde as categorias ou objetos a serem reconhecidos são específicos e não abrangidos pelos modelos de visão computacional pré-treinados, como identificar pessoas, eventos ou objetos em suas fotos pessoais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  //183
  {
    "tipo": "combobox",
    "texto": "<combobox> é usado para identificar múltiplos tipos de itens em uma imagem.",
    "opcoes": [
      "Selecione uma resposta",
      "Detecção de objetos",
      "Descrição de imagem",
      "Classificação de imagem",
      "Reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 1,
    "explicacao": "A Detecção de Objetos é uma técnica de visão computacional que não apenas identifica a presença de objetos em uma imagem, mas também sua localização e o tipo de cada objeto, mesmo quando há múltiplos objetos e diferentes tipos de objetos na mesma imagem.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-object-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  //184
  {
    "tipo": "combobox",
    "texto": "Identificar se um usuário de quiosque está irritado monitorando um feed de vídeo do quiosque é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "detecção de rosto.",
      "análise facial.",
      "reconhecimento facial.",
      "reconhecimento óptico de caracteres (OCR)."
    ],
    "resposta": 2,
    "explicacao": "A análise facial é uma categoria de visão computacional que vai além da simples detecção ou reconhecimento de rostos para analisar atributos faciais como emoções (irritação, felicidade, etc.), idade, gênero e pose da cabeça. Monitorar um feed de vídeo para identificar a irritação de um usuário é um exemplo direto de análise facial, que avalia as expressões e características do rosto para inferir o estado emocional.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-identity",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  //185
  {
    "tipo": "dragdrop",
    "texto": "Faça a correspondência dos Serviços Cognitivos do Azure com as ações apropriadas.",
    "itens": [
      { "label": "Custom Vision" },
      { "label": "Face" },
      { "label": "Form Recognizer" }
    ],
    "grupos": [
      "Identificar objetos em uma imagem.",
      "Importar dados automaticamente de uma fatura para um banco de dados.",
      "Identificar pessoas em uma imagem."
    ],
    "respostas": {
      "Identificar objetos em uma imagem.": ["Custom Vision"],
      "Importar dados automaticamente de uma fatura para um banco de dados.": ["Form Recognizer"],
      "Identificar pessoas em uma imagem.": ["Face"]
    },
    "explicacao": "O Custom Vision permite criar e treinar modelos personalizados para identificar objetos em imagens. O Form Recognizer (agora parte do Azure AI Document Intelligence) é usado para extrair dados de formulários e documentos, como faturas. O serviço Face é especializado em detecção e reconhecimento de rostos, sendo capaz de identificar pessoas em imagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  //186
  {
    "tipo": "combobox",
    "texto": "Uma solução de IA que ajuda fotógrafos a tirar melhores retratos fornecendo feedback sobre exposição, ruído e oclusão é um exemplo de <combobox> facial.",
    "opcoes": [
      "Selecione uma resposta",
      "análise.",
      "detecção.",
      "reconhecimento."
    ],
    "resposta": 1,
    "explicacao": "A análise facial é uma categoria de visão computacional que se concentra na interpretação de atributos faciais, como emoções, pose da cabeça, idade, gênero, e também na identificação de problemas técnicos em fotografias de retrato, como exposição inadequada, ruído ou oclusão (partes do rosto bloqueadas). Isso vai além da simples detecção (localizar o rosto) ou reconhecimento (identificar a pessoa).",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-identity",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa fabrica dispositivos. Você possui 1.000 fotos digitais dos dispositivos e precisa identificar a localização dos dispositivos nas fotos. O que você deve usar?",
    "opcoes": [
      "Análise espacial do Computer Vision",
      "Detecção de objetos do Custom Vision",
      "Análise de imagem do Computer Vision",
      "Classificação do Custom Vision"
    ],
    "resposta": 1,
    "explicacao": "A Detecção de Objetos do Custom Vision é a melhor escolha porque pode localizar e identificar objetos específicos (como dispositivos) dentro das imagens, desenhando caixas delimitadoras ao redor deles. Isso ajuda a identificar precisamente sua localização nas fotos. A Análise Espacial do Computer Vision é usada para detectar movimento e presença em espaços físicos. A Análise de Imagem fornece apenas uma descrição geral da imagem, e a Classificação atribui rótulos à imagem inteira sem indicar a localização dos objetos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/quickstarts/object-detection?tabs=windows%2Cvisual-studio&pivots=programming-language-csharp",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa converter anotações manuscritas em texto digital. Qual tipo de visão computacional você deve usar?",
    "opcoes": [
      "Detecção facial",
      "Reconhecimento óptico de caracteres (OCR)",
      "Classificação de imagem",
      "Detecção de objetos"
    ],
    "resposta": 1,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é a escolha correta porque é projetado para converter texto manuscrito ou impresso em texto digital legível por máquina. É amplamente utilizado para digitalizar documentos, anotações e formulários.",
    "link": "https://learn.microsoft.com/pt-br/azure/app-service/overview-ai-integration",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é usado para identificar vários tipos de itens em uma única imagem.",
    "opcoes": [
      "Selecione uma resposta",
      "Classificação de imagem",
      "Descrição de imagem",
      "Detecção de objetos",
      "Reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 3,
    "explicacao": "A detecção de objetos é usada para identificar e localizar múltiplos objetos em uma imagem, retornando coordenadas de caixas delimitadoras para cada item detectado. Isso permite analisar relações entre objetos e identificar múltiplas instâncias de um mesmo objeto.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/concept-object-detection",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver um aplicativo móvel para que os funcionários escaneiem e armazenem seus comprovantes de despesas durante viagens. Qual tipo de visão computacional você deve usar?",
    "opcoes": [
      "Detecção facial",
      "Classificação de imagem",
      "Detecção de objetos",
      "Reconhecimento óptico de caracteres (OCR)"
    ],
    "resposta": 3,
    "explicacao": "O Reconhecimento Óptico de Caracteres (OCR) é ideal para escanear e extrair texto de recibos ou faturas, como valores, datas e descrições de itens, convertendo essas informações em texto digital legível por máquina para armazenamento no aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview-ocr",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode usar o serviço <combobox> para treinar um modelo de detecção de objetos usando suas próprias imagens.",
    "opcoes": [
      "Selecione uma resposta",
      "Visão Computacional",
      "Visão Personalizada",
      "Reconhecedor de Formulários",
      "Analisador de Vídeo do Azure para Mídia"
    ],
    "resposta": 2,
    "explicacao": "O serviço Visão Personalizada (Custom Vision) permite treinar modelos personalizados de detecção de objetos utilizando imagens fornecidas pelo usuário. Ele é ideal para cenários em que é necessário identificar objetos específicos em contextos personalizados.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os Serviços Cognitivos do Azure às cargas de trabalho de IA apropriadas.",
    "itens": [
      { "label": "Visão Personalizada (Custom Vision)" },
      { "label": "Face" },
      { "label": "Reconhecedor de Formulários (Form Recognizer)" }
    ],
    "grupos": [
      "Identificar objetos em uma imagem",
      "Importar automaticamente dados de uma fatura para um banco de dados",
      "Identificar pessoas em uma imagem"
    ],
    "respostas": {
      "Identificar objetos em uma imagem": ["Visão Personalizada (Custom Vision)"],
      "Importar automaticamente dados de uma fatura para um banco de dados": ["Reconhecedor de Formulários (Form Recognizer)"],
      "Identificar pessoas em uma imagem": ["Face"]
    },
    "explicacao": "O serviço Visão Personalizada permite treinar modelos personalizados para identificar objetos em imagens. O Reconhecedor de Formulários extrai dados estruturados de documentos como faturas. O serviço Face é usado para detectar e identificar rostos humanos em imagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/custom-vision-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa implementar uma solução pré-construída que identifique marcas conhecidas em fotografias digitais. Qual serviço do Azure Cognitive Services você deve usar?",
    "opcoes": [
      "Visão Personalizada",
      "Reconhecedor de Formulários",
      "Face",
      "Visão Computacional"
    ],
    "resposta": 3,
    "explicacao": "O serviço Visão Computacional fornece funcionalidades pré-construídas para analisar imagens e identificar marcas conhecidas, logotipos ou objetos em fotografias digitais. Ele inclui recursos como marcação de imagem, detecção de marcas e análise geral de conteúdo visual.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/computer-vision/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de pesquisa visual computacional no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "O Processamento de Linguagem Natural (PLN) pode ser usado para:",
    "opcoes": [
      "Analisar conteúdo de vídeo",
      "Gerar fala",
      "Classificar mensagens de e-mail como relacionadas ao trabalho ou pessoais",
      "Classificar imagens"
    ],
    "resposta": 2,
    "explicacao": "O Processamento de Linguagem Natural (PLN) permite que máquinas compreendam, interpretem e processem a linguagem humana. Ele pode ser usado para classificar mensagens de e-mail com base em seu conteúdo, como relacionadas ao trabalho ou pessoais.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você planeja desenvolver um bot que permita aos usuários consultar uma base de conhecimento usando processamento de linguagem natural. Quais dois serviços você deve incluir na solução?",
    "opcoes": [
      "Serviço de Linguagem",
      "Serviço de Bot do Azure",
      "Reconhecedor de Formulários",
      "Detector de Anomalias"
    ],
    "respostas": [0, 1],
    "explicacao": "O Serviço de Linguagem permite interpretar consultas em linguagem natural e acessar uma base de conhecimento. O Serviço de Bot do Azure fornece a estrutura para criar, implantar e gerenciar o bot, permitindo a interação com os usuários. Os outros serviços não são voltados para processamento de linguagem natural ou construção de bots.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A seguinte chamada de serviço aceitará texto em inglês como entrada e retornará texto em italiano e francês: /translate?text=Hello&to=it&to=fr",
      "A seguinte chamada de serviço aceitará texto em inglês como entrada e retornará texto em italiano e francês: /translate?text=Hello&from=en&to=it&to=fr",
      "O serviço Translator pode ser usado para traduzir documentos do inglês para o francês."
    ],
    "respostas": [false, true, true],
    "explicacao": "A primeira chamada não especifica o idioma de origem, o que pode causar ambiguidade. A segunda chamada especifica corretamente o idioma de origem como inglês e os destinos como italiano e francês. O serviço Translator também oferece suporte à tradução de documentos mantendo a estrutura e o formato dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/document-translation/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Um aplicativo que analisa postagens em redes sociais para identificar seu tom é um exemplo de qual tipo de carga de trabalho de Processamento de Linguagem Natural (PLN)?",
    "opcoes": [
      "Análise de sentimento",
      "Reconhecimento de fala",
      "Extração de frases-chave",
      "Reconhecimento de entidades"
    ],
    "resposta": 0,
    "explicacao": "A análise de sentimento determina o tom ou a intenção emocional de um texto, como se uma postagem expressa positividade, negatividade ou neutralidade. É amplamente utilizada para analisar opiniões e atitudes em redes sociais, avaliações e feedbacks.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/sentiment-opinion-mining/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um chatbot que usará Processamento de Linguagem Natural (PLN) para realizar as seguintes ações com base no texto inserido por um usuário: aceitar pedidos de clientes, recuperar documentos de suporte e obter atualizações de status de pedidos. Qual tipo de PLN você deve usar?",
    "opcoes": [
      "Análise de sentimento",
      "Reconhecimento de entidades nomeadas",
      "Tradução",
      "Modelagem de linguagem"
    ],
    "resposta": 1,
    "explicacao": "O Reconhecimento de Entidades Nomeadas (NER) é uma técnica de PLN usada para identificar e extrair entidades específicas em um texto, como nomes, datas, nomes de produtos ou IDs de pedidos. É adequado para reconhecer detalhes relevantes em pedidos, documentos e atualizações de status.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure Cognitive Services à ação apropriada.",
    "itens": [
      { "label": "Serviço de Linguagem" },
      { "label": "Fala (Speech)" },
      { "label": "Tradutor (Translator)" }
    ],
    "grupos": [
      "Converter solicitações faladas em texto",
      "Identificar a intenção das solicitações de um usuário",
      "Aplicar intenção a entidades e expressões"
    ],
    "respostas": {
      "Converter solicitações faladas em texto": ["Fala (Speech)"],
      "Identificar a intenção das solicitações de um usuário": ["Serviço de Linguagem"],
      "Aplicar intenção a entidades e expressões": ["Serviço de Linguagem"]
    },
    "explicacao": "O serviço de Fala é utilizado para converter fala em texto. O Serviço de Linguagem é responsável por identificar a intenção por trás das entradas do usuário e aplicar essa intenção a entidades e expressões, fornecendo contexto para a solicitação.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um bot de chat na web pode interagir com usuários que visitam um site.",
      "Gerar automaticamente legendas para vídeos pré-gravados é um exemplo de processamento de linguagem natural.",
      "Um dispositivo inteligente em casa que responde a perguntas como 'Como estará o tempo hoje?' é um exemplo de processamento de linguagem natural."
    ],
    "respostas": [true, true, true],
    "explicacao": "Bots de chat na web podem ser integrados a sites para interagir com usuários. A geração automática de legendas envolve a transcrição e compreensão de linguagem falada, o que é parte do PLN. Dispositivos inteligentes que respondem a comandos de voz utilizam PLN para interpretar e responder adequadamente às perguntas dos usuários.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um site que inclui avaliações de clientes. É necessário armazenar as avaliações em inglês e apresentá-las aos usuários em seu idioma respectivo, reconhecendo a localização geográfica de cada usuário. Qual tipo de carga de trabalho de Processamento de Linguagem Natural (PLN) você deve usar?",
    "opcoes": [
      "Extração de frases-chave",
      "Reconhecimento de fala",
      "Modelagem de linguagem",
      "Tradução"
    ],
    "resposta": 3,
    "explicacao": "A tradução é a carga de trabalho adequada para esse cenário, pois permite converter avaliações armazenadas em inglês para o idioma do usuário com base em sua localização. O serviço Azure Translator oferece tradução em tempo real e detecção automática de idioma.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Chatbots podem oferecer suporte a entrada por voz.",
      "É necessário um chatbot separado para cada canal de comunicação.",
      "Chatbots gerenciam fluxos de conversa usando uma combinação de linguagem natural e respostas com opções restritas."
    ],
    "respostas": [true, false, true],
    "explicacao": "O Bot Framework permite que os chatbots se conectem a múltiplos canais sem a necessidade de criar um bot separado para cada um. Além disso, os chatbots podem aceitar entrada por voz e gerenciar conversas com linguagem natural e opções guiadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/bot-service/bot-service-overview?view=azure-bot-service-4.0#connect",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um bot que responde a consultas de usuários internos é um exemplo de carga de trabalho de processamento de linguagem natural.",
      "Um aplicativo móvel que exibe imagens relacionadas a um termo de pesquisa inserido é um exemplo de carga de trabalho de processamento de linguagem natural.",
      "Um formulário da web usado para enviar uma solicitação de redefinição de senha é um exemplo de carga de trabalho de processamento de linguagem natural."
    ],
    "respostas": [true, false, false],
    "explicacao": "Bots que respondem a consultas utilizam processamento de linguagem natural para interpretar e gerar respostas em linguagem humana. Aplicativos que exibem imagens com base em termos de pesquisa geralmente utilizam pesquisa cognitiva, não PLN. Formulários de redefinição de senha não envolvem interpretação de linguagem natural.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/language-service/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma solução que analisa postagens em redes sociais para extrair menções de nomes de cidades e identificar os nomes de cidades mais frequentemente mencionados. Qual tipo de carga de trabalho de processamento de linguagem natural (PLN) essa solução utiliza?",
    "opcoes": [
      "Reconhecimento de fala",
      "Análise de sentimento",
      "Extração de frases-chave",
      "Reconhecimento de entidade"
    ],
    "resposta": 3,
    "explicacao": "O reconhecimento de entidade é utilizado para identificar e extrair entidades específicas, como nomes de cidades, a partir de um texto. Essa carga de trabalho permite detectar categorias predefinidas como localizações, datas ou pessoas mencionadas em postagens.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/named-entity-recognition/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode usar o recurso de perguntas e respostas do Language Service para consultar um banco de dados Azure SQL.",
      "Você deve usar o recurso de perguntas e respostas do Language Service quando quiser que uma base de conhecimento forneça a mesma resposta para diferentes usuários que enviam perguntas semelhantes.",
      "O recurso de perguntas e respostas do Language Service pode determinar a intenção de uma declaração do usuário."
    ],
    "respostas": [false, true, false],
    "explicacao": "O recurso de perguntas e respostas do Language Service é projetado para extrair respostas de bases de conhecimento ou documentos predefinidos, e não para consultar diretamente bancos de dados. Ele pode fornecer respostas consistentes para perguntas semelhantes, mas não é responsável por identificar a intenção do usuário, tarefa que é realizada por outros componentes de PLN.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/question-answering/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma solução que utiliza o Language Service. É necessário identificar os principais pontos abordados em uma coleção de documentos. Qual tipo de processamento de linguagem natural você deve utilizar?",
    "opcoes": [
      "Detecção de idioma",
      "Análise de sentimento",
      "Reconhecimento de entidade",
      "Extração de frases-chave"
    ],
    "resposta": 3,
    "explicacao": "A extração de frases-chave é usada para identificar os principais conceitos em um texto, como ideias centrais e tópicos discutidos. Essa técnica é ideal para resumir os pontos principais de documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/language-service/key-phrase-extraction/overview",
    "dominio": "Descrever os recursos das cargas de trabalho de PLN (Processamento de Linguagem Natural) no Azure",
    "simulado": "ai-3"
  }
























];
