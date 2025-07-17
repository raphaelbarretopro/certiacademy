// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando maneiras de implementar o AI Builder. Para quais dois cenários você pode usar o AI Construtor (Builder)? Cada resposta correta representa uma solução completa. Cada seleção correta vale um ponto.",
    "opcoes": [
      "Enviar e-mails para todos os usuários que assinam um serviço",
      "Sincronizar dados de um banco de dados externo",
      "Coletar dados de várias fontes de dados e exibir um painel que mostra dados de tendências",
      "Interpretar imagens e executar uma ação com base na imagem",
      "Detectar padrões nos dados e prever resultados"
    ],
    "respostas": [
      3,
      4
    ],
    "explicacao": "O AI Builder permite interpretar imagens e realizar ações automáticas com base em seu conteúdo, usando reconhecimento de imagem. Além disso, ele é capaz de detectar padrões em grandes volumes de dados e prever resultados, fornecendo insights preditivos para os negócios.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa planeja usar o AI Cosntrutor (Builder) para ajudar a melhorar o desempenho dos negócios. Você precisa determinar quais modelos de IA estão disponíveis para uso. Quais são os três tipos de modelos você pode usar?",
    "opcoes": [
      "Regressão linear",
      "Previsão",
      "Detecção de objeto",
      "Detecção de anomalias",
      "Classificação de texto"
    ],
    "respostas": [
      1,
      2,
      4
    ],
    "explicacao": "Modelos de previsão, detecção de objeto e classificação de texto estão disponíveis no AI Builder. A regressão linear não é um modelo oferecido no AI Builder, e a detecção de anomalias não está listada como um modelo pronto para uso.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/model-types",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Um banco utiliza aplicativos e fluxos do Power Platform para apoiar processos de negócios. A empresa gostaria de usar dados históricos de clientes para prever se a solicitação de empréstimo de um cliente será aprovada ou rejeitada. Você precisa usar o Construtor de IA (AI Builder) para implementar a solução. Quais quatro ações você deve realizar em sequência?",
    "itens": [
      { "label": "Treinar o modelo." },
      { "label": "Usar o modelo no Power Apps ou no Power Automate." },
      { "label": "Exportar dados para o AI Builder." },
      { "label": "Publicar o modelo." },
      { "label": "Importar dados no Microsoft Dataverse." }
    ],
    "grupos": [
      "Ação 01.",
      "Ação 02.",
      "Ação 03.",
      "Ação 04."
    ],
    "respostas": {
      "Ação 01.": ["Importar dados no Microsoft Dataverse."],
      "Ação 02.": ["Treinar o modelo."],
      "Ação 03.": ["Publicar o modelo."],
      "Ação 04.": ["Usar o modelo no Power Apps ou no Power Automate."]
    },
    "explicacao": "A sequência correta para implementação da solução com AI Builder é: importar dados no Microsoft Dataverse, treinar o modelo com esses dados, publicar o modelo treinado e, por fim, utilizar o modelo no Power Apps ou no Power Automate para a previsão de resultados.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/build-model",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa de manufatura está avaliando o Construtor de IA (AI Builder). Você precisa selecionar os modelos do AI Builder para atender a requisitos especificados. Quais tipos de modelos você deve usar?",
    "itens": [
      { "label": "Previsão" },
      { "label": "Processamento de formulários" },
      { "label": "Detecção de objetos" }
    ],
    "grupos": [
      "Identifica produtos sem etiquetas ou números de série.",
      "Identifica clientes que podem não pagar suas faturas em dia."
    ],
    "respostas": {
      "Identifica produtos sem etiquetas ou números de série.": ["Detecção de objetos"],
      "Identifica clientes que podem não pagar suas faturas em dia.": ["Previsão"]
    },
    "explicacao": "O modelo de Detecção de objetos permite identificar produtos físicos que não possuem etiquetas ou números de série, analisando imagens e objetos visuais. O modelo de Previsão é utilizado para prever comportamentos e tendências, como identificar clientes que podem atrasar pagamentos de faturas.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prediction-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está avaliando o Construtor IA (AI Builder). Quais ações podem ser realizadas? Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira ou Não se for falsa.",
    "afirmacoes": [
      "Você pode usar um modelo de classificação de texto no AI Builder para recuperar texto e realizar análise de sentimento para incidentes do Serviço Agora (ServiceNow).",
      "Você pode marcar postagens do Instagram que mencionem seu novo produto.",
      "Você pode enviar resultados sobre o número de menções do seu novo produto no Instagram para o Power BI para inclusão em um painel."
    ],
    "respostas": [
      true,
      true,
      true
    ],
    "explicacao": "Afirmação 01 - Sim. Utilizar um modelo de classificação de texto no AI Builder para realizar análise de sentimento é uma funcionalidade principal do AI Builder. Afirmação 02 - Sim. É possível marcar postagens do Instagram utilizando ações do AI Builder em fluxos do Power Automate. Afirmação 03 - Sim. Também é possível enviar resultados de menções do Instagram para o Power BI utilizando ações do AI Builder.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/create-text-classification-model",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Você está planejando usar os modelos de IA pré-construídos Leitor de Cartão de Visitas (Business Card Reader) e Análise de Sentimentos (Sentiment Analysis) para construir soluções. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "O modelo Leitor de Cartão de Visitas pode ser usado tanto no Power Automate quanto no Power Apps.",
      "O modelo Análise de Sentimentos pode ser usado apenas no Power Automate."
    ],
    "respostas": [
      true,
      false
    ],
    "explicacao": "Afirmação 01 - Sim. O modelo Leitor de Cartão de Visitas pode ser utilizado tanto no Power Automate quanto no Power Apps para capturar e processar informações de cartões de visita de forma automatizada. Afirmação 02 - Não. O modelo Análise de Sentimentos também pode ser utilizado no Power Apps, além do Power Automate, para interpretar sentimentos em entradas de texto de usuários.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prebuilt-business-card",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa de brinquedos cria um modelo de classificação de texto no AI Builder para monitorar o feedback de clientes em busca de palavras-chave específicas. Quando um feedback negativo é recebido sobre um brinquedo, a empresa deseja realizar revisões de engenharia para o brinquedo e agendar sessões de treinamento adicionais para os trabalhadores que o produzem. Quais são duas maneiras possíveis de atingir esse objetivo? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "Criar um aplicativo Telas (canvas)",
      "Implementar o Agente Virtual (Virtual Agent)",
      "Criar um fluxo de Automatização de energia (Power Automate)",
      "Usar o Modelo de Dados Comum"
    ],
    "respostas": [
      0,
      2
    ],
    "explicacao": "O AI Builder permite utilizar modelos prontos de processamento, como leitores de cartões de visita, tanto em aplicativos canvas quanto em aplicativos orientados por modelos. Além disso, os resultados dos modelos de IA podem ser usados em fluxos do Power Automate para criar soluções automatizadas, como o processamento de documentos ou o acionamento de ações baseadas no feedback recebido.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/use-in-powerapps-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está avaliando o AI Builder. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Modelos pré-construídos do AI Builder são pré-treinados e estão prontos para interpretar dados de negócios imediatamente.",
      "Modelos pré-construídos do AI Builder existem tanto para o Power Automate quanto para o Power Apps."
    ],
    "respostas": [
      true,
      true
    ],
    "explicacao": "Afirmação 01 - Sim: Os modelos pré-construídos do AI Builder são treinados previamente e prontos para serem usados em interpretações de dados empresariais sem necessidade de configuração adicional.\nAfirmação 02 - Sim: Existem modelos pré-construídos do AI Builder disponíveis para integração tanto com o Power Automate quanto com o Power Apps, facilitando a automação e a criação de aplicativos inteligentes.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prebuilt-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa possui um aplicativo do Power Apps que é utilizado pela maioria dos funcionários. A empresa está se expandindo para outros países e regiões. Você precisa recomendar uma solução para traduzir, em tempo quase real, o texto gerado dentro do aplicativo Power Apps. O que você deve recomendar?",
    "opcoes": [
      "Microsoft Azure Synapse Analytics",
      "Serviços Cognitivos do Microsoft Azure",
      "Conector do Serviço de Dados Comuns",
      "Power BI"
    ],
    "resposta": 1,
    "explicacao": "Os Serviços Cognitivos do Microsoft Azure fornecem recursos de tradução automática quase em tempo real que podem ser integrados ao Power Apps. Essa solução permite que usuários visualizem o conteúdo traduzido dinamicamente, o que é ideal para empresas que operam em múltiplas regiões com diferentes idiomas.",
    "link": "https://learn.microsoft.com/pt-br/azure/ai-services/translator/overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja desenvolver novos aplicativos para permitir que os funcionários trabalhem com mais eficiência. Você precisa recomendar os tipos apropriados de aplicativos do Power Apps para atender aos requisitos da empresa. Qual você deve recomendar? Para responder, arraste os tipos de aplicativo para os requisitos corretos.",
    "itens": [
      { "label": "Aplicativo orientado por modelo" },
      { "label": "Portais" },
      { "label": "Canvas" },
      { "label": "Construtor de IA" }
    ],
    "grupos": [
      "Criar aplicativos móveis que usem câmera e dados de localização",
      "Criar um recurso que detecte objetos em imagens"
    ],
    "respostas": {
      "Criar aplicativos móveis que usem câmera e dados de localização": ["Canvas"],
      "Criar um recurso que detecte objetos em imagens": ["Construtor de IA"]
    },
    "explicacao": "Aplicativos canvas permitem acesso a funcionalidades nativas do dispositivo, como câmera e localização. O AI Builder possibilita a detecção de objetos em imagens com o uso de inteligência artificial, facilitando a implementação de soluções visuais.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/canvas-apps/getting-started",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um fluxo do Power Automate para gerenciar vendas. A equipe de vendas salva cotações como arquivos PDF em uma pasta do Microsoft OneDrive. Você cria uma lista do Microsoft SharePoint para ajudar a equipe a gerenciar o acompanhamento dessas cotações. É necessário copiar o nome do cliente, telefone e valor da venda potencial a partir do conteúdo da cotação de vendas e inserir os dados na lista do SharePoint. Qual modelo do AI Builder você deve utilizar?",
    "opcoes": [
      "Extração de frases-chave",
      "Análise de sentimento",
      "Reconhecimento de texto",
      "Detecção de idioma"
    ],
    "resposta": 2,
    "explicacao": "O modelo de Reconhecimento de Texto do AI Builder permite extrair automaticamente informações estruturadas de documentos, como nome, telefone e valores de vendas, a partir de arquivos PDF. Esse modelo é ideal para cenários em que é necessário identificar e capturar dados textuais de documentos para inserção em outros sistemas, como listas do SharePoint.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prebuilt-text-recognition",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre ações que podem ser realizadas com o AI Builder.",
    "afirmacoes": [
      "Você pode usar um modelo de classificação de texto no AI Builder para recuperar texto e analisar seu significado.",
      "Você pode marcar postagens no Instagram que mencionem seu novo produto.",
      "Você pode enviar os resultados sobre o número de menções do seu novo produto no Instagram para o Power BI para inclusão em um painel."
    ],
    "respostas": [true, true, true],
    "explicacao": "O AI Builder permite usar modelos de classificação de texto para interpretar e categorizar dados textuais. É possível monitorar e marcar postagens em redes sociais como o Instagram com o uso de conectores e fluxos do Power Automate. Além disso, os dados resultantes dessas análises podem ser integrados ao Power BI para visualização em dashboards.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/text-classification-model-in-flow",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um chatbot com o Power Virtual Agents para uma empresa. A diretoria deseja entender a efetividade do chatbot. Você precisa identificar o percentual de clientes que param de responder às interações do chatbot. Qual relatório você deve consultar?",
    "opcoes": [
      "Satisfação do cliente",
      "Engajamento ao longo do tempo",
      "Fatores que influenciam a escalonamento",
      "Resultados das sessões ao longo do tempo"
    ],
    "resposta": 3,
    "explicacao": "O relatório 'Resultados das sessões ao longo do tempo' mostra métricas como taxa de resolução diária, taxa de escalonamento e taxa de abandono. A taxa de abandono revela a porcentagem de sessões em que os clientes param de interagir com o chatbot sem que a conversa seja resolvida ou escalonada.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/teams/analytics-summary-teams#engagement-over-time-chart",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "comboboxs",
    "texto": "Quais tipos de componentes você deve usar para cada cenário dentro do Power Virtual Agents? Associe cada necessidade ao componente mais adequado.",
    "pares": [
      {
        "requisito": "O chatbot precisa capturar o ID do usuário para autenticação.",
        "opcoes": [
          "Tópico",
          "Entidade",
          "Ação"
        ],
        "resposta": 1
      },
      {
        "requisito": "Um cliente faz uma pergunta que precisa ser transferida para um representante de suporte ao cliente.",
        "opcoes": [
          "Tópico",
          "Entidade",
          "Ação"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Entidades são usadas para capturar informações estruturadas como IDs, datas e números fornecidos pelo usuário. Já os tópicos definem fluxos de conversa específicos e são ideais para acionar ações como encaminhar o usuário para um agente humano em caso de necessidade de suporte adicional.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/fundamentals-what-is-power-virtual-agents",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um chatbot com o Power Virtual Agents para uma empresa. Avalie as afirmações a seguir sobre as funcionalidades disponíveis.",
    "afirmacoes": [
      "Você deve criar uma ação personalizada para exibir um artigo da base de conhecimento que responda a uma pergunta comum de suporte.",
      "Você pode usar o Power Automate para recuperar o número de contato de um cliente, a fim de verificar se ele é um usuário autorizado e se está dentro do SLA de suporte."
    ],
    "respostas": [false, true],
    "explicacao": "Não é necessário criar uma ação personalizada apenas para exibir um artigo da base de conhecimento — isso pode ser feito com funcionalidades nativas. No entanto, o Power Automate pode sim ser utilizado para buscar dados de contato e validar informações do cliente com base em regras de negócio e SLA.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/advanced-flow",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "multipla",
    "texto": "Você desenvolveu um chatbot do Power Virtual Agents em um canal do Microsoft Teams chamado Despesas. Você precisa identificar as operações que o chatbot pode executar. Quais duas ações o chatbot pode realizar? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Acionar uma solicitação de aprovação de um gerente sênior para despesas de alto valor.",
      "Fazer upload e processar um arquivo PDF.",
      "Permitir que funcionários que não fazem parte da equipe de Despesas usem o chatbot.",
      "Transferir um chat para uma pessoa real se o chatbot não conseguir responder à pergunta."
    ],
    "respostas": [0, 3],
    "explicacao": "O Power Virtual Agents pode acionar fluxos do Power Automate, como enviar uma solicitação de aprovação para despesas elevadas, e também pode transferir conversas para um atendente humano caso não consiga resolver a solicitação do usuário. Upload e processamento direto de PDFs não são ações nativas do chatbot, e o acesso ao bot depende da configuração de permissões no Teams.",
    "link": "https://support.microsoft.com/pt-br/office/criar-um-chatbot-para-o-teams-com-agentes-virtuais-do-power-no-microsoft-teams-3f49014f-5322-46c1-9819-be4eafb03385",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está utilizando o Power Virtual Agents com o Dynamics 365 Customer Service. Você cria um novo tópico, que funciona conforme o esperado durante os testes. No entanto, os clientes informam que o novo tópico não está visível na seção de perguntas frequentes do site da empresa. Você precisa garantir que os clientes consigam visualizar o novo tópico. O que você deve fazer?",
    "opcoes": [
      "Excluir e recriar o tópico.",
      "Criar uma nova variável.",
      "Colar o link no site.",
      "Analisar o chatbot.",
      "Publicar o tópico."
    ],
    "resposta": 4,
    "explicacao": "Depois de criar ou editar um tópico no Power Virtual Agents, é necessário publicá-lo para que ele fique disponível nos canais de publicação, como web, aplicativos móveis ou canais do Microsoft Bot Framework. Sem a publicação, o conteúdo permanece em modo de edição e não é visível ao público.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-create-edit-topics",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está desenvolvendo um chatbot interativo para responder perguntas sobre produtos e garantias de produtos. Você precisa criar caminhos de conversação para perguntas sobre garantias. Qual ferramenta você deve usar?",
    "opcoes": [
      "Tela de autoria (Authoring canvas)",
      "Framework de Bot do Azure (Azure Bot Framework)",
      "Centro de administração da Power Platform",
      "Portal do Power Virtual Agents",
      "Nó de conversa (Conversation node)"
    ],
    "resposta": 0,
    "explicacao": "A tela de autoria (Authoring canvas) é o local onde você define visualmente o caminho da conversa entre o cliente e o chatbot, configurando perguntas, respostas e ações que serão executadas durante a interação.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/release-plan/2023wave1/power-virtual-agents/use-bot-framework-composer-functionality-power-virtual-agents-chatbots-unified-authoring-canvas",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Você está desenvolvendo um chatbot com o Power Virtual Agents para uma empresa. Avalie as afirmações a seguir sobre como o chatbot é configurado e responde ao usuário.",
    "afirmacoes": [
      "Você deve criar um tópico para definir como o chatbot responde a um usuário.",
      "Você pode usar entidades pré-criadas ou entidades personalizadas definidas pelo usuário."
    ],
    "respostas": [true, true],
    "explicacao": "Tópicos são essenciais para definir como um chatbot responde às interações dos usuários, orientando o fluxo de conversas. O Power Virtual Agents permite utilizar tanto entidades pré-criadas quanto entidades personalizadas para capturar e processar informações fornecidas pelos usuários.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-fundamentals",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um chatbot com o Power Virtual Agents para uma empresa. Está trabalhando em um tópico existente e deseja acionar uma ação. Qual tecnologia está disponível para realizar essa ação?",
    "opcoes": [
      "Entidade do Power Virtual Agents",
      "Power BI",
      "Power Apps",
      "Power Automate"
    ],
    "resposta": 3,
    "explicacao": "O Power Automate permite criar fluxos automatizados que podem ser acionados diretamente a partir de tópicos dentro do Power Virtual Agents. Isso permite integrar o chatbot com outras fontes de dados, executar lógica de negócios e realizar ações automatizadas em diferentes sistemas.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/advanced-flow",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está criando um chatbot para substituir um site de perguntas frequentes (FAQ). Você deve realizar testes passo a passo para todos os cenários que fazem parte de uma interação complexa com o usuário, incluindo múltiplos tópicos. Os testadores devem ser capazes de visualizar o fluxo de trabalho enquanto interagem com o chatbot. Você precisa testar o chatbot. O que deve fazer?",
    "opcoes": [
      "Visualizar análises de uma conversa com o chatbot.",
      "Publicar o chatbot e testá-lo em qualquer canal.",
      "Publicar o chatbot e testá-lo no site de demonstração.",
      "Usar o designer de chatbot para testar o chatbot."
    ],
    "resposta": 3,
    "explicacao": "O designer de chatbot do Power Virtual Agents permite testar tópicos em tempo real e visualizar o fluxo de conversa com base nas decisões e ações executadas. Isso é essencial quando é necessário acompanhar o fluxo de lógica e comportamento do chatbot em interações complexas.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-test-bot#test-a-topic-in-the-test-bot-pane",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Você está desenvolvendo um bot com o Power Virtual Agents para uma empresa que vende flores e arbustos. Avalie as afirmações a seguir e selecione Sim se forem verdadeiras ou Não caso contrário.",
    "afirmacoes": [
      "Você pode usar a entidade pré-criada Código Postal para recomendar plantas que funcionem bem na zona de cultivo do cliente.",
      "Você pode criar uma entidade personalizada para oferecer combinações de cores e opções de plantas para paisagismo que possam ser disponibilizadas para pedidos de clientes."
    ],
    "respostas": [true, true],
    "explicacao": "Bots criados com o Power Virtual Agents podem utilizar entidades pré-criadas, como o Código Postal, para personalizar recomendações com base em localizações. Além disso, é possível criar entidades personalizadas para representar categorias específicas de produtos ou preferências do cliente, como combinações de plantas e cores para paisagismo.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/advanced-entities-slot-filling",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está criando um chatbot com o Power Virtual Agents para uma empresa. Quais componentes devem ser usados? Para responder, associe corretamente os componentes aos requisitos apresentados.",
    "itens": [
      { "label": "Entidade" },
      { "label": "Variável" },
      { "label": "Expressão de gatilho (Trigger Phrase)" }
    ],
    "grupos": [
      "Identifica palavras-chave ou perguntas e relacioná-las a tópicos.",
      "Armazena uma resposta que o usuário forneceu para uso posterior.",
      "Identifica um tipo específico de informação a partir da resposta do usuário."
    ],
    "respostas": {
      "Identifica palavras-chave ou perguntas e relacioná-las a tópicos.": ["Expressão de gatilho (Trigger Phrase)"],
      "Armazena uma resposta que o usuário forneceu para uso posterior.": ["Variável"],
      "Identifica um tipo específico de informação a partir da resposta do usuário.": ["Entidade"]
    },
    "explicacao": "Expressões de gatilho são frases que iniciam uma conversa com o chatbot, correspondendo a palavras-chave ou perguntas. Variáveis armazenam informações inseridas pelos usuários em uma conversa. Entidades são usadas para identificar tipos específicos de dados, como datas, números ou locais, a partir das entradas do usuário.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-create-edit-topics",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um chatbot com o Power Virtual Agents para uma empresa. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Ao escalar para uma pessoa real a partir de um chatbot, o cliente deve repetir o problema e outras informações coletadas.",
      "Você pode personalizar o tópico de saudação para cada chatbot que você criar."
    ],
    "respostas": [false, true],
    "explicacao": "Ao escalar para um atendente humano, o Power Virtual Agents transfere automaticamente o contexto da conversa e as variáveis do usuário, sem exigir que o cliente repita as informações. Além disso, é possível personalizar o tópico de saudação (greeting topic) para cada chatbot, configurando como a conversa será iniciada.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/configure-bot-greeting",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você criou um chatbot no Power Virtual Agents para uso com o Microsoft Teams. Os testadores relataram problemas, como alterações não visíveis e falha ao solicitar informações sobre reembolso. Associe cada problema à ação correta necessária para resolvê-lo.",
    "pares": [
      {
        "requisito": "As alterações feitas no chatbot não estão visíveis para os testadores.",
        "opcoes": [
          "Criar um novo chatbot",
          "Publicar o chatbot",
          "Salvar o tópico",
          "Compartilhar o chatbot"
        ],
        "resposta": 1
      },
      {
        "requisito": "As respostas de reembolso não estão funcionando como esperado.",
        "opcoes": [
          "Alterar a segurança",
          "Criar um novo tópico de reembolso",
          "Criar um novo chatbot de reembolso"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Para que as alterações feitas no chatbot estejam visíveis aos usuários, é necessário publicá-las. Além disso, para que o chatbot consiga lidar com perguntas sobre reembolsos, deve existir um tópico configurado especificamente para esse tipo de solicitação.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-create-edit-topics",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está criando um chatbot no Power Virtual Agents para ajudar usuários a pesquisar salas de reunião disponíveis em um edifício. O chatbot deve atender aos seguintes requisitos: iniciar com uma frase, apresentar opções de capacidade de sala e encerrar se o número de pessoas for maior que 10. Associe cada requisito à ação correta.",
    "pares": [
      {
        "requisito": "Permitir que os usuários iniciem o chatbot digitando a frase \"Ajude-me, Guru de Reuniões\".",
        "opcoes": [
          "Chamar um tópico de fallback",
          "Chamar uma ação",
          "Criar um nó de pergunta",
          "Criar uma frase de gatilho"
        ],
        "resposta": 3
      },
      {
        "requisito": "Fornecer opções de capacidade de sala de reunião entre 1–4 pessoas e 5–10 pessoas.",
        "opcoes": [
          "Chamar uma ação",
          "Chamar um tópico de fallback",
          "Criar uma condição",
          "Criar um nó de pergunta"
        ],
        "resposta": 3
      },
      {
        "requisito": "Encerrar a sessão do chatbot quando o usuário tentar agendar uma sala para mais de 10 pessoas.",
        "opcoes": [
          "Adicionar uma condição",
          "Chamar uma ação",
          "Configurar um tópico de fallback",
          "Criar uma frase de gatilho"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Para iniciar o chatbot com uma frase específica, deve-se criar uma frase de gatilho. Para coletar informações como capacidade de sala, utiliza-se um nó de pergunta. Para controlar o fluxo com base em limites, como número de participantes, é necessário adicionar uma condição que encerre a sessão quando ultrapassado.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-create-edit-topics",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "multipla",
    "texto": "Você está criando um chatbot com o Power Virtual Agents para uma empresa. O chatbot usará canais e serviços comuns com os quais a empresa se comunica com os clientes.\n\nVocê precisa determinar com quais serviços o chatbot pode ser usado ou integrado.\n\nQuais dois serviços o chatbot pode usar?\nCada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Facebook",
      "Power BI",
      "Microsoft Azure Event Grid",
      "Microsoft Azure Service Bus",
      "Microsoft Azure Bot Framework"
    ],
    "respostas": [0, 4],
    "explicacao": "O Power Virtual Agents pode ser publicado em vários canais como Facebook, Microsoft Teams, sites personalizados e pelo Microsoft Azure Bot Framework. O Power BI, Event Grid e Service Bus não são canais de publicação de chatbots.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/publication-fundamentals-publish-channels",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja implementar chatbots com o Power Virtual Agents.\n\nPara cada uma das seguintes afirmações, selecione Sim se for verdadeira. Caso contrário, selecione Não.\n\nNOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Um tópico em um chatbot pode ter várias frases de gatilho.",
      "Um chatbot pode chamar um fluxo do Power Automate localizado em um ambiente diferente do Microsoft Power Platform.",
      "Você deve publicar um chatbot após fazer modificações para que as alterações sejam visíveis para os usuários."
    ],
    "respostas": [true, false, true],
    "explicacao": "Frases de gatilho permitem iniciar tópicos com diferentes termos relacionados. Um fluxo só pode ser chamado de um tópico no mesmo ambiente do Dataverse que o chatbot. E para que as alterações fiquem visíveis aos usuários, é necessário publicar o chatbot.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/authoring-create-edit-topics",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },

  {
    "tipo": "unica",
    "texto": "Uma empresa possui uma loja online para vender brinquedos. O volume de solicitações de rastreamento de pedidos aumentou.\n\nVocê precisa permitir que os clientes usem uma interface interativa no site para solicitar informações de rastreamento de pedidos.\n\nQual tecnologia você deve usar?",
    "opcoes": [
      "Fluxos do Power Automate",
      "Customer Service Insights",
      "Chatbots do Power Virtual Agents",
      "Power BI"
    ],
    "resposta": 2,
    "explicacao": "Os chatbots do Power Virtual Agents podem ser usados para criar uma interface interativa no site para lidar com solicitações de clientes, como rastreamento de pedidos.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/fundamentals-what-is-power-virtual-agents",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo de tela que usa uma planilha do Microsoft Excel como fonte de dados. A planilha contém uma lista de animais de estimação. Cada coluna na planilha representa um atributo diferente sobre um animal. Você precisa criar uma interface para permitir que os usuários salvem um novo registro de animal na planilha. Qual é o número mínimo de controles que você precisa implementar para criar essa interface?",
    "opcoes": [
      "Um controle: um controle de formulário de edição",
      "Dois controles: um controle de formulário de edição e um controle de botão",
      "Três controles: um controle de entrada de texto, um controle de seleção de data e um controle de caixa de combinação",
      "Quatro controles: um controle de entrada de texto, um controle de seleção de data, um controle de caixa de combinação e um controle de botão"
    ],
    "resposta": 1,
    "explicacao": "Dois controles: um controle de formulário de edição e um controle de botão. As opções C e D sugerem o uso de controles adicionais como entrada de texto, seleção de data e caixas de combinação, que não são necessários para criar a interface para adicionar um novo registro à planilha.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/controls/control-form-detail",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa cria aplicativos de tela para sua equipe de vendas. Um usuário cria um aplicativo de tela a partir de uma fonte de dados. Você precisa determinar quais telas são criadas. Quais três telas você deve identificar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Boas-vindas",
      "Editar/Criar",
      "Explorar",
      "Detalhes",
      "Excluir"
    ],
    "respostas": [1, 2, 3],
    "explicacao": "A tela Editar/Criar permite aos usuários adicionar novos registros ou editar registros existentes na fonte de dados. A tela Explorar exibe uma lista de registros da fonte de dados e permite que os usuários filtrem e ordenem os registros. A tela Detalhes exibe os detalhes de um registro específico na fonte de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/app-from-sharepoint",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa cria aplicativos orientados por modelo não gerenciados. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Administradores podem modificar formulários.",
      "Um Criador de Aplicativos pode criar exibições pessoais e exibições de sistema.",
      "Um Criador de Aplicativos não precisa publicar alterações de formulário para que novas colunas apareçam."
    ],
    "respostas": [true, true, false],
    "explicacao": "Administradores têm permissão para modificar formulários nos aplicativos orientados por modelo. Criadores de aplicativos (App Makers) também podem criar exibições pessoais e de sistema. No entanto, após adicionar novas colunas, é necessário publicar o formulário para que as alterações estejam visíveis para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-and-edit-forms",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },


  {
    "tipo": "unica",
    "texto": "A recepção de um hotel usa um aplicativo orientado por modelos para registrar hóspedes.\n\nO hotel deseja criar um aplicativo de tela para que a equipe de limpeza gerencie os suprimentos de limpeza. O aplicativo de tela se conectará a uma nova instância do Microsoft Dataverse.\n\nVocê precisa criar um novo ambiente para a equipe de limpeza.\n\nO que você deve usar?",
    "opcoes": [
      "Centro de administração do Microsoft 365",
      "Centro de administração do Microsoft Power Platform",
      "Portal do criador do Power Apps",
      "Portal do Microsoft Azure"
    ],
    "resposta": 1,
    "explicacao": "Você pode visualizar e gerenciar seus ambientes na página de Ambientes no Centro de Administração do Power Platform. É lá que novos ambientes são criados e gerenciados para diferentes equipes e finalidades.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa de manufatura está desenvolvendo um aplicativo orientado por modelos para gerenciar seu estoque. O aplicativo possui duas tabelas personalizadas: Pedido e Lote.\n\nVocê precisa identificar o componente apropriado para cada função necessária do aplicativo.\n\nQual componente você deve escolher para cada função?",
    "itens": [
      { "label": "Fluxo de processo de negócios" },
      { "label": "Painel" },
      { "label": "Regra de negócios" },
      { "label": "Exibição" }
    ],
    "grupos": [
      "Exibir um conjunto de gráficos visualizando os dados de pedido e lote ao mesmo tempo.",
      "Guiar os usuários pelo processo padrão de separação e envio de um pedido.",
      "Mostrar uma lista de todos os pedidos e permitir que os usuários reordenem as colunas.",
      "Tornar obrigatório o número da prateleira em um formulário quando o usuário registrar a localização do corredor de um lote."
    ],
    "respostas": {
      "Exibir um conjunto de gráficos visualizando os dados de pedido e lote ao mesmo tempo.": ["Painel"],
      "Guiar os usuários pelo processo padrão de separação e envio de um pedido.": ["Fluxo de processo de negócios"],
      "Mostrar uma lista de todos os pedidos e permitir que os usuários reordenem as colunas.": ["Exibição"],
      "Tornar obrigatório o número da prateleira em um formulário quando o usuário registrar a localização do corredor de um lote.": ["Regra de negócios"]
    },
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9",
    "explicacao": "Painéis são utilizados para visualização de dados agregados. Fluxos de processo de negócios guiam os usuários por etapas padrão. Exibições permitem manipular listas e colunas. Regras de negócios controlam validações de campo nos formulários.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview"
  },


  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Gestão da Cadeia de Suprimentos. Quando um pedido de venda é criado para um dos clientes que um usuário específico gerencia, uma tarefa do Microsoft Outlook deve ser criada para lembrar o usuário de executar quaisquer atividades de acompanhamento que sejam necessárias.\n\nVocê precisa implementar a funcionalidade para criar tarefas no Outlook.\n\nQual recurso você deve usar?",
    "opcoes": [
      "Eventos de Negócio",
      "Power Automate",
      "Construtor de IA",
      "Microsoft Dataverse",
      "Power BI"
    ],
    "resposta": 1,
    "explicacao": "O Power Automate é a ferramenta apropriada para criar fluxos automatizados entre aplicativos e serviços, como gerar tarefas do Outlook com base em eventos ocorridos no Dynamics 365.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está gerenciando um modelo personalizado ao longo do seu ciclo de vida no Criador de IA. Você precisa determinar o status mais precoce em que o modelo deve estar para executar cada ação. Qual é o status mais precoce necessário para cada ação?",
    "itens": [
      { "label": "Rascunho" },
      { "label": "Publicado" },
      { "label": "Treinado" }
    ],
    "grupos": [
      "Etapa 01",
      "Etapa 02",
      "Etapa 03"
    ],
    "respostas": {
      "Etapa 01": ["Treinado"],
      "Etapa 02": ["Publicado"],
      "Etapa 03": ["Rascunho"]
    },
    "explicacao": "Para testar o desempenho do modelo, ele precisa estar treinado. Para usar o modelo nos aplicativos Power Apps e Power Automate, é necessário que ele esteja publicado. Para construir o modelo e adicionar dados, o status pode ser rascunho.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/train-model",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa está criando um chatbot no Power Virtual Agents para auxiliar funcionários no pedido de folga. Para cada etapa, selecione o recurso que o bot deve usar.",
    "pares": [
      {
        "requisito": "O funcionário inicia a conversa dizendo “Preciso solicitar folga.”",
        "opcoes": [
          "Frase de gatilho",
          "Exibir nó de mensagem",
          "Entidade",
          "Ação"
        ],
        "resposta": 0
      },
      {
        "requisito": "O chatbot solicita a localização do funcionário.",
        "opcoes": [
          "Frase de gatilho",
          "Exibir nó de mensagem",
          "Entidade",
          "Ação"
        ],
        "resposta": 1
      },
      {
        "requisito": "O chatbot reconhece o nome da cidade fornecido pelo funcionário.",
        "opcoes": [
          "Frase de gatilho",
          "Exibir nó de mensagem",
          "Entidade",
          "Ação"
        ],
        "resposta": 2
      },
      {
        "requisito": "O chatbot cria o registro do pedido de folga no sistema de recursos humanos.",
        "opcoes": [
          "Frase de gatilho",
          "Exibir nó de mensagem",
          "Entidade",
          "Ação"
        ],
        "resposta": 3
      }
    ],
    "explicacao": "Frase de gatilho define a expressão que inicia o diálogo; Exibir nó de mensagem apresenta informações ao usuário; Entidade extrai dados fornecidos pelo usuário; e Ação executa operações externas, como criar registros no sistema de recursos humanos.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/work-power-virtual-agents/",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Sua empresa criou um chatbot do Power Virtual Agents para auxiliar funcionários em perguntas comuns, como verificar saldos de férias, horário de expediente e políticas de despesas de viagem. Para cada afirmação abaixo, selecione Sim se for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "Para recuperar o saldo de férias do usuário, o bot pode usar uma ação.",
      "Tópicos são componentes que o bot pode reconhecer no diálogo do usuário, como o nome de um determinado escritório.",
      "O usuário precisa inserir exatamente uma frase de gatilho para que o bot responda com as informações apropriadas."
    ],
    "respostas": [true, true, false],
    "explicacao": "O bot pode usar ações para executar operações externas, como consultar saldo de férias; tópicos permitem ao bot reconhecer entidades ou palavras-chave no diálogo do usuário; e não é necessário que o usuário insira exatamente a frase de gatilho, pois o bot usa reconhecimento de intenção e sinônimos.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/work-power-virtual-agents/",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Para automatizar a entrada de dados de um usuário em um aplicativo Windows mais antigo no computador local, execute manualmente as ações na sequência correta.",
    "itens": [
      { "label": "Gravar tarefas" },
      { "label": "Adicionar variáveis de entrada" },
      { "label": "Criar um novo fluxo de desktop" },
      { "label": "Adicionar variáveis de fluxo" },
      { "label": "Criar um novo fluxo de nuvem" }
    ],
    "grupos": [
      "Etapa 01",
      "Etapa 02",
      "Etapa 03"
    ],
    "respostas": {
      "Etapa 01": ["Criar um novo fluxo de desktop"],
      "Etapa 02": ["Gravar tarefas"],
      "Etapa 03": ["Adicionar variáveis de entrada"]
    },
    "explicacao": "Primeiro, crie um novo fluxo de desktop para capturar ações locais. Em seguida, grave as tarefas do usuário e finalmente adicione variáveis de entrada para parametrizar os valores quando o fluxo for executado.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/desktop-flows/introduction",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações sobre a exibição criada no designer de exibições, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "Quando você criar uma nova conta na cidade de Boston, ela será exibida como a segunda linha.",
      "Todos os usuários verão o mesmo número de linhas nesta exibição.",
      "Para alternar para esta exibição, os usuários devem selecionar Contas com endereços dos EUA na lista suspensa."
    ],
    "respostas": [true, false, false],
    "explicacao": "A exibição está ordenada por País/Região e Boston fica nos EUA, portanto, novas contas em Boston aparecem como segunda linha; cada usuário pode ter configurações de exibição diferentes, então nem sempre verão o mesmo número de linhas; e o título da exibição já é “Minhas Contas dos EUA”, não sendo necessário escolher outra opção.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/model-driven-apps/create-edit-views",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9",
    "imagemUrl": "img/4.png"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa deseja usar um aplicativo dirigido por modelo para sua equipe de vendas. O gerente de vendas quer garantir que cada membro da equipe possa modificar suas próprias exibições sem afetar as exibições dos demais. O gerente de TI quer garantir que a exibição seja atualizada para todos os usuários. Você precisa identificar o tipo de exibição adequado para cada requisito.",
    "itens": [
      { "label": "Pessoal" },
      { "label": "Pública" },
      { "label": "De sistema" }
    ],
    "grupos": [
      "Cada membro da equipe pode modificar suas próprias exibições sem afetar as exibições dos demais",
      "A exibição é atualizada para todos os usuários"
    ],
    "respostas": {
      "Cada membro da equipe pode modificar suas próprias exibições sem afetar as exibições dos demais": ["Pessoal"],
      "A exibição é atualizada para todos os usuários": ["Pública"]
    },
    "explicacao": "A exibição Pessoal permite que cada usuário personalize sua própria visão sem impactar outros; a exibição Pública aplica-se a todos os usuários e quaisquer alterações são refletidas globalmente.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/model-driven-apps/create-edit-views",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "combobox",
    "texto": "Uma versão digital da planilha de defeitos, com regras para garantir o preenchimento antes do envio, pode ser criada usando um <combobox>",
    "opcoes": [
      "Selecione a opção desejada",
      "Modelo do Criador de IA",
      "Aplicativo do Power Apps",
      "Fluxo de nuvem do Power Automate",
      "Relatório do Power BI"
    ],
    "resposta": 2,
    "explicacao": "Um aplicativo do Power Apps permite criar formulários digitais personalizados com lógica de validação e regras de preenchimento pré-envio, garantindo que os usuários completem todos os campos necessários antes de submeter a planilha de defeitos.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você planeja implementar um aplicativo dirigido por modelo para gerenciar compromissos com clientes. O aplicativo deve atender aos seguintes requisitos:",
    "itens": [
      { "label": "Regra de negócio" },
      { "label": "Painel" },
      { "label": "Formulário" },
      { "label": "Exibição" }
    ],
    "grupos": [
      "Criar listas de compromissos",
      "Exibir os gráficos",
      "Permitir acesso a notas, e-mails e outras atividades",
      "Ocultar automaticamente colunas de endereço do compromisso quando estiver marcado como online"
    ],
    "respostas": {
      "Criar listas de compromissos": ["Exibição"],
      "Exibir os gráficos": ["Painel"],
      "Permitir acesso a notas, e-mails e outras atividades": ["Formulário"],
      "Ocultar automaticamente colunas de endereço do compromisso quando estiver marcado como online": ["Regra de negócio"]
    },
    "explicacao": "Exibições listam registros de compromisso; Painéis exibem gráficos e visualizações; Formulários dão acesso a detalhes como notas e e-mails; e Regras de negócio aplicam lógica para ocultar campos de endereço quando o compromisso é online.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está avaliando maneiras de conectar aplicativos da Power Platform a serviços externos para executar atividades complexas. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Você pode criar um aplicativo em tela (Canvas app) que escaneia e interpreta documentos usando o Azure Cognitive Services e, em seguida, adiciona as informações apropriadas ao Dynamics 365 Sales.",
      "Você pode criar um aplicativo em tela (Canvas app) que utiliza o Azure Cognitive Services para ler registros de incidentes e identificar tíquetes que precisam ser escalados com base na pontuação de sentimento."
    ],
    "respostas": [
      true,
      true
    ],
    "explicacao": "Afirmação 01 - Sim. O Azure Cognitive Services pode ser integrado a aplicativos em tela (Canvas apps) para escanear, interpretar documentos e adicionar as informações apropriadas no Dynamics 365 Sales. Afirmação 02 - Sim. É possível utilizar o Azure Cognitive Services para análise de sentimentos em registros de incidentes, identificando tíquetes que necessitam ser escalados com base na pontuação de sentimento.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/cognitive-services-and-machine-learning",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-9"
  }

];