// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [

  {
    "tipo": "multipla",
    "texto": "Uma empresa usa o Microsoft Power Platform para monitorar a mídia social. Ela quer usar o fluxo do Power Automate para processar as mensagens de mídia social com emoções positivas e enviá-las a um canal de equipe. Quais dos seguintes conectores de IA podem analisar o texto recebido e avaliar o sentimento nas mensagens de mídia social?",
    "opcoes": [
      "Chat dos Serviços de Comunicação do Azure",
      "Imagem - Resposta às Perguntas",
      "Azure Application Insights",
      "Serviço Cognitivo do Azure para Linguagem",
      "Criador de IA"
    ],
    "respostas": [3, 4],
    "explicacao": "O Serviço Cognitivo do Azure para Linguagem permite a análise de sentimentos e o reconhecimento de entidades em mensagens de texto, sendo altamente indicado para processar mídias sociais. Já o Criador de IA (AI Builder), dentro da Power Platform, também pode ser treinado para interpretar sentimentos e extrair insights de texto, funcionando como um conector inteligente integrado ao Power Automate.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prebuilt-text-recognition",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa criar um copiloto do Microsoft Copilot Studio para uma empresa. Quais componentes você deve usar? Para responder, associe os componentes apropriados aos requisitos corretos.",
    "itens": [
      { "label": "Entidade" },
      { "label": "Variável" },
      { "label": "Frase de Gatilho" }
    ],
    "grupos": [
      "Identificar palavras-chave ou perguntas e relacioná-las aos problemas.",
      "Armazenar uma resposta que um usuário insere para uso posterior.",
      "Identificar um tipo específico de informação em uma resposta de usuário."
    ],
    "respostas": {
      "Identificar palavras-chave ou perguntas e relacioná-las aos problemas.": ["Frase de Gatilho"],
      "Armazenar uma resposta que um usuário insere para uso posterior.": ["Variável"],
      "Identificar um tipo específico de informação em uma resposta de usuário.": ["Entidade"]
    },
    "explicacao": "A 'Frase de Gatilho' é usada para iniciar um tópico com base em palavras-chave ou perguntas feitas pelo usuário. A 'Variável' permite armazenar informações fornecidas pelo usuário para uso posterior no fluxo. A 'Entidade' identifica e classifica informações específicas na resposta do usuário, como nomes, locais ou datas.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/authoring-first-bot?tabs=web",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa identificar os componentes para criar uma solução que atenda aos requisitos do gerente de atendimento ao cliente. Associe as soluções aos requisitos corretos.",
    "itens": [
      { "label": "Detector de objeto" },
      { "label": "Power Automate" },
      { "label": "Reconhecimento de texto" },
      { "label": "Análise de sentimento" }
    ],
    "grupos": [
      "Identificar linguagem negativa no texto de uma avaliação.",
      "Enviar uma notificação por email."
    ],
    "respostas": {
      "Identificar linguagem negativa no texto de uma avaliação.": ["Análise de sentimento"],
      "Enviar uma notificação por email.": ["Power Automate"]
    },
    "explicacao": "O componente 'Análise de sentimento' é utilizado para identificar automaticamente emoções negativas ou positivas em textos, sendo ideal para avaliar feedbacks. Já o 'Power Automate' permite criar fluxos automatizados, como o envio de notificações por email, conforme regras predefinidas.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prebuilt-sentiment-analysis",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você planeja implementar um aplicativo baseado em modelo para uma empresa. Os funcionários usarão o aplicativo para gerenciar compromissos com clientes. O aplicativo deve atender aos seguintes requisitos: Permitir que os funcionários criem listas de compromissos que irão ocorrer nas próximas duas semanas. Exibir um gráfico de pizza de tipos de cliente e um gráfico de barras de compromissos concluídos por funcionário no mapa do site. Permitir que os funcionários acessem anotações, emails e outras atividades de um cliente específico. Ocultar automaticamente as colunas de endereço do compromisso se um compromisso estiver marcado como online.",
    "itens": [
      { "label": "Regra de negócios" },
      { "label": "Painel" },
      { "label": "Formulário" },
      { "label": "Modo de Exibição" }
    ],
    "grupos": [
      "Criar listas de compromissos.",
      "Exibir os visuais.",
      "Permitir acesso a anotações, emails e outras atividades.",
      "Ocultar automaticamente as colunas de endereço do compromisso."
    ],
    "respostas": {
      "Criar listas de compromissos.": ["Modo de Exibição"],
      "Exibir os visuais.": ["Painel"],
      "Permitir acesso a anotações, emails e outras atividades.": ["Formulário"],
      "Ocultar automaticamente as colunas de endereço do compromisso.": ["Regra de negócios"]
    },
    "explicacao": "O 'Modo de Exibição' é usado para apresentar listas de registros com base em critérios definidos. O 'Painel' exibe visualizações gráficas como gráficos de pizza e barras. O 'Formulário' oferece acesso a detalhes completos de registros, incluindo anotações e emails. Já a 'Regra de negócios' define lógica condicional, como ocultar automaticamente campos com base em valores específicos.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-components",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa armazena as informações de garantia dos clientes no Microsoft Dataverse. Os clientes autenticados e autorizados devem ser capazes de acessar as próprias informações de garantia sem precisar de uma licença do Microsoft Power Platform atribuída pelo usuário. Você precisa compartilhar as informações de garantia com esses clientes. O que você deve usar?",
    "opcoes": [
      "Aplicativo baseado em modelo",
      "Relatório do Power BI",
      "Aplicativo de tela",
      "Site do Power Pages"
    ],
    "resposta": 3,
    "explicacao": "O Power Pages permite criar sites externos seguros com acesso controlado a dados armazenados no Microsoft Dataverse. Usuários externos autenticados podem acessar suas informações sem que seja necessário atribuir uma licença da Power Platform diretamente a eles, desde que haja a devida configuração de identidade e permissões.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "multipla",
    "texto": "Você planeja implantar um site do Power Pages para gerenciar solicitações comuns de clientes. Você planeja usar os recursos do Copilot para melhorar a produtividade do gerenciamento do site. Você precisa usar os recursos do Copilot que estão disponíveis no estúdio de design do Power Pages. Quais são os dois recursos que você deve usar? Cada resposta correta apresenta uma solução completa. Escolha duas opções.",
    "opcoes": [
      "Gerar texto de cópia",
      "Criar uma interface com base em uma breve descrição",
      "Criar imagens geradas por IA",
      "Criar uma automação que seja disparada quando um usuário enviar dados",
      "Criar uma interface de webchat para usuários do site"
    ],
    "respostas": [0, 1],
    "explicacao": "No estúdio de design do Power Pages, o Copilot permite gerar automaticamente texto de conteúdo (cópia) e também criar interfaces de formulário com base em descrições textuais simples. Esses dois recursos aumentam significativamente a produtividade no design do site. Os demais itens não fazem parte dos recursos disponíveis diretamente no estúdio de design do Power Pages com o Copilot.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/copilot-overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Um hotel desenvolve uma lista de verificação para as camareiras usarem quando terminarem a limpeza de um quarto. As camareiras deverão ser capazes de usar um dispositivo móvel para colocar uma marca de seleção em cada tarefa concluída e tirar uma foto da cama arrumada. Os resultados da lista de verificação de cada quarto deverão ser armazenados em uma lista do SharePoint. Você precisa selecionar o componente do Microsoft Power Platform que preenche o requisito. Qual componente você deve selecionar?",
    "opcoes": [
      "Site do Power Pages",
      "Aplicativo baseado em modelo",
      "Aplicativo de tela",
      "Relatório do Power BI",
      "Bot do Copilot Studio"
    ],
    "resposta": 2,
    "explicacao": "O Aplicativo de tela (Canvas App) permite personalizar a interface de usuário para cenários móveis, como marcar tarefas concluídas e tirar fotos. Além disso, pode ser facilmente conectado ao SharePoint para armazenar os dados coletados pelas camareiras.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Você está projetando uma solução do Power Apps que permite aos usuários carregar um relatório de status diretamente de seus dispositivos móveis no site de gerenciamento de projetos do Microsoft SharePoint da empresa. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você deve criar um aplicativo baseado em modelo no Power Apps.",
      "Você deve criar um aplicativo de tela no Power Apps."
    ],
    "respostas": [false, true],
    "explicacao": "Aplicativos baseados em modelo são ideais para cenários centrados em dados, geralmente dentro do Dataverse. Já os aplicativos de tela (Canvas Apps) oferecem maior controle de design e são mais apropriados para uso em dispositivos móveis com conectividade a fontes como SharePoint. Como o objetivo é permitir carregamento móvel com interação visual personalizada, o aplicativo de tela é a melhor opção.",
    "link": "power-apps/maker/canvas-apps/get-started",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Você cria um aplicativo baseado em modelo. Você precisa determinar quais personalizações podem ser feitas nos formulários de tabela. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um formulário pode ser visto apenas pelos usuários que foram atribuídos a um direito de acesso específico.",
      "O rótulo de uma coluna em um formulário pode ser diferente do nome de exibição da coluna.",
      "Você pode editar a exibição do sistema chamada Localização Rápida para alterar o título e o subtítulo exibidos para registros em uma coluna de pesquisa."
    ],
    "respostas": [true, true, true],
    "explicacao": "Todas as afirmações são verdadeiras: (1) Os formulários podem ser associados a funções de segurança específicas, controlando quem pode visualizá-los. (2) O rótulo exibido no formulário pode ser personalizado, independentemente do nome da coluna no Dataverse. (3) A Localização Rápida permite configurar como os dados são exibidos em campos de pesquisa, incluindo título e subtítulo.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/form-designer-overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Você cria um aplicativo de tela usando a opção rotulada Iniciar pelos dados. Você conecta uma planilha que contém registros do cliente. Os registros do cliente são exibidos em uma lista em uma tela chamada Procurar. Você precisa aplicar um filtro ao controle que exibe os registros do cliente. Qual controle você deve modificar?",
    "opcoes": [
      "Formulário de exibição",
      "Ícone",
      "Galeria",
      "Pesquisa"
    ],
    "resposta": 2,
    "explicacao": "O controle 'Galeria' é utilizado para exibir listas de registros em aplicativos de tela. Para aplicar filtros sobre os dados exibidos, é necessário modificar a propriedade 'Items' da galeria usando expressões como Filter() ou Search(). Os formulários exibem apenas um item por vez e não são usados para aplicar filtros em listas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/controls/control-gallery",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa um aplicativo baseado em modelo para sua equipe de vendas. Você deve personalizar um formulário para atender aos seguintes requisitos: Se uma caixa de seleção for marcada, um campo oculto deverá aparecer. O formulário deve exibir uma lista de clientes e campos sobre clientes. Você precisa identificar os componentes que um desenvolvedor deve configurar para atender aos requisitos. O que você deve identificar?",
    "itens": [
      { "label": "Modo de Exibição" },
      { "label": "Formulário" }
    ],
    "grupos": [
      "Um campo oculto aparece",
      "Atualizar a ordem dos campos do cliente na lista"
    ],
    "respostas": {
      "Um campo oculto aparece": ["Formulário"],
      "Atualizar a ordem dos campos do cliente na lista": ["Modo de Exibição"]
    },
    "explicacao": "O componente 'Formulário' é utilizado para capturar, exibir e controlar dados de entrada do usuário, incluindo lógica condicional como exibir ou ocultar campos. Já o 'Modo de Exibição' organiza como os dados são apresentados em listas, permitindo reordenar colunas e configurar a apresentação de registros relacionados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-design-forms",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo de tela. O aplicativo deve exibir uma lista de registros de uma planilha do Microsoft Excel armazenada no Microsoft OneDrive. Um usuário do aplicativo deve ser capaz de atualizar os detalhes do item e salvá-los de volta na planilha ou enviar os detalhes do item por email para si mesmo usando um botão. Você precisa identificar quantos conectores são necessários para concluir o aplicativo. Quantos conectores você deve usar?",
    "opcoes": [
      "Dois",
      "Três",
      "Quatro"
    ],
    "resposta": 1,
    "explicacao": "Para atender aos requisitos, são necessários três conectores: (1) o conector do OneDrive para acessar e salvar a planilha do Excel; (2) o conector do Excel para manipular os dados da planilha; e (3) o conector do Outlook (ou outro serviço de email) para enviar os detalhes por email. Assim, são necessários três conectores no total.",
    "link": "https://learn.microsoft.com/pt-br/connectors/connector-reference/",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Um varejista decidiu criar um aplicativo de tela para funcionários. O aplicativo pode ser executado em tablets. O aplicativo tem um sistema de autenticação personalizado. A empresa deseja garantir que, se um funcionário usar outro aplicativo no tablet, ele será automaticamente desconectado do aplicativo de tela após cinco minutos. Você precisa identificar o controle para disparar a ação. Qual controle você deve selecionar?",
    "opcoes": [
      "Temporizador",
      "Formulário de exibição",
      "Alternância",
      "Tela"
    ],
    "resposta": 0,
    "explicacao": "O controle 'Temporizador' do Power Apps permite executar ações após um determinado período de tempo. Neste cenário, ele pode ser configurado para contar cinco minutos e então disparar um evento, como o logout do usuário, caso não haja interação. Os demais controles não são adequados para esse tipo de lógica baseada em tempo.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/controls/control-timer",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode disparar um fluxo do Power Automate ao carregar um arquivo do Microsoft Excel ou Word em um site do SharePoint.",
      "Você pode usar um fluxo da área de trabalho do Power Automate para abrir um site e realizar uma ação que crie um arquivo.",
      "Você pode usar um conector em um fluxo da nuvem do Power Automate para recuperar dados de uma fonte de dados de terceiros."
    ],
    "respostas": [true, true, true],
    "explicacao": "Todas as afirmações são verdadeiras: (1) O Power Automate pode ser acionado por eventos de carregamento de arquivos em bibliotecas do SharePoint. (2) O Power Automate para área de trabalho (desktop) permite automações com ações na interface gráfica, como abrir sites e criar arquivos. (3) O Power Automate na nuvem permite usar conectores (como HTTP, SQL, Salesforce, etc.) para integrar dados de fontes externas.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Você vai criar um aplicativo para uma empresa. Você precisa examinar as diferenças entre os aplicativos de tela e baseados em modelo do Power Apps para determinar qual tipo de aplicativo criar. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os aplicativos de tela podem ser criados a partir de planilhas do Microsoft Excel e sites do SharePoint.",
      "Os aplicativos baseados em modelo usam o Dataverse como a fonte de dados subjacente.",
      "Os aplicativos de tela podem ser inseridos em aplicativos baseados em modelo."
    ],
    "respostas": [true, true, true],
    "explicacao": "Todas as afirmações são verdadeiras. (1) Os aplicativos de tela oferecem flexibilidade e podem se conectar a fontes como Excel e SharePoint. (2) Aplicativos baseados em modelo utilizam exclusivamente o Dataverse como fonte de dados. (3) É possível inserir aplicativos de tela dentro de formulários em aplicativos baseados em modelo, permitindo a extensão da interface com lógica personalizada.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/embed-canvas-app-in-form",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está gerenciando um modelo personalizado ao longo do respectivo ciclo de vida no AI Builder. Você precisa determinar o status mais antigo em que o modelo deve estar para executar ações. Qual é o status mais antigo necessário para cada ação? Para responder, arraste os status apropriados até as ações corretas.",
    "itens": [
      { "label": "Rascunho" },
      { "label": "Treinado" },
      { "label": "Publicado" }
    ],
    "grupos": [
      "Testar o desempenho do modelo.",
      "Usar o modelo no Power Apps e no Power Automate.",
      "Criar o modelo e adicionar dados."
    ],
    "respostas": {
      "Testar o desempenho do modelo.": ["Treinado"],
      "Usar o modelo no Power Apps e no Power Automate.": ["Publicado"],
      "Criar o modelo e adicionar dados.": ["Rascunho"]
    },
    "explicacao": "No ciclo de vida do AI Builder, o modelo começa como 'Rascunho', onde é possível criar e inserir dados. Após o treinamento, o modelo pode ser testado para verificar seu desempenho. Somente após ser 'Publicado' o modelo pode ser usado em soluções como Power Apps ou Power Automate.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/manage-models/1-lifecycle",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa implementa o Power Platform. A empresa planeja explorar como os vários aplicativos do Dynamics 365 podem se integrar ao Power Platform. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os aplicativos do Dynamics 365 são aplicativos de tela.",
      "Os copilotos podem escalar problemas dos clientes para agentes humanos no aplicativo Dynamics 365 Intelligent Order Management.",
      "O Dataverse é a plataforma de dados subjacente para os aplicativos de engajamento do cliente do Dynamics 365."
    ],
    "respostas": [false, true, true],
    "explicacao": "A primeira afirmação é incorreta: os aplicativos do Dynamics 365 são, na maioria, aplicativos baseados em modelo, e não aplicativos de tela. A segunda afirmação é correta: copilotos no Dynamics 365 Intelligent Order Management podem escalar problemas automaticamente. A terceira afirmação também é verdadeira: os aplicativos de engajamento do Dynamics 365 usam o Dataverse como plataforma de dados principal.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está avaliando as funcionalidades no Microsoft Power Platform. A empresa exige integração nativa a um modelo de Bootstrap existente para facilitar um design responsivo em todos os dispositivos. Você precisa recomendar o serviço que facilita a integração. Qual serviço você deve recomendar?",
    "opcoes": [
      "Power Automate",
      "Power Pages",
      "Power Apps",
      "Microsoft 365 Copilot"
    ],
    "resposta": 1,
    "explicacao": "O Power Pages oferece suporte nativo ao framework Bootstrap, permitindo o uso de temas, grades e componentes responsivos. Isso facilita a criação de sites acessíveis e adaptáveis a diferentes dispositivos, sendo a melhor opção para design responsivo com integração de modelos existentes.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/configure/bootstrap-version-5",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você é um gerente distrital de uma grande empresa varejista. Você deseja fornecer aos gerentes de vendas insights de vendas mais profundos a fim de garantir que eles possam tomar decisões mais acertadas para suas lojas. Os gerentes de loja devem poder ver os dados quase em tempo real. Você precisa criar e compartilhar um painel do Power BI que possa ser usado pelos gerentes de loja. Quais ferramentas podem ser usadas? Para responder, arraste os tipos apropriados de relatório para os requisitos corretos.",
    "itens": [
      { "label": "Somente Power BI Desktop" },
      { "label": "Somente serviço do Power BI" },
      { "label": "Power BI Desktop ou o serviço do Power BI" }
    ],
    "grupos": [
      "Criar painéis do Power BI que contenham informações de vendas de uma loja.",
      "Compartilhar o painel com seus gerentes de varejo."
    ],
    "respostas": {
      "Criar painéis do Power BI que contenham informações de vendas de uma loja.": ["Power BI Desktop ou o serviço do Power BI"],
      "Compartilhar o painel com seus gerentes de varejo.": ["Somente serviço do Power BI"]
    },
    "explicacao": "Painéis podem ser criados tanto no Power BI Desktop quanto diretamente no serviço do Power BI. No entanto, para compartilhamento com outros usuários, como os gerentes de loja, o painel precisa estar publicado no serviço do Power BI, onde é possível aplicar permissões e acesso controlado.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo relatórios para uma empresa. Você deve criar visualizações que incluam os seguintes dados: faturas vencidas de um sistema ERP (planejamento de recursos empresariais) de terceiros, número de chamadas feitas ao cliente do Microsoft Dataverse e dados de arquivo do Microsoft Excel. Os relatórios devem ser exibidos em uma única página. Você precisa criar as visualizações. O que você deve usar?",
    "opcoes": [
      "Colunas",
      "Tabelas",
      "Painéis",
      "Pipelines de implantação"
    ],
    "resposta": 2,
    "explicacao": "Painéis no Power BI permitem combinar diferentes visualizações de relatórios e fontes de dados em uma única página. Eles são ideais para acompanhar KPIs e exibir informações consolidadas em tempo real, vindas de múltiplas origens como Dataverse, Excel e ERPs.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/consumer/end-user-dashboards",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode se conectar a recursos externos com o Power BI Desktop, mas não ao serviço do Power BI.",
      "Você pode criar e editar relatórios do Power BI usando o Power BI Desktop ou o serviço do Power BI.",
      "A única maneira de distribuir um relatório do Power BI Desktop é enviando o arquivo PBIX a outras pessoas."
    ],
    "respostas": [false, true, false],
    "explicacao": "A primeira afirmação está incorreta, pois o Power BI Desktop pode se conectar ao serviço do Power BI e a recursos externos. A segunda está correta: é possível criar e editar relatórios tanto no Power BI Desktop quanto no serviço online. A terceira está incorreta porque o Power BI oferece várias opções de compartilhamento além do envio do arquivo PBIX, como publicação no serviço Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/power-bi-service-overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa deseja implementar um sistema de alerta simples, em que um consultor possa pressionar um botão no celular para enviar o local do usuário à empresa como uma notificação de texto. Você precisa criar um fluxo instantâneo que envie essa notificação. Em que ordem você deve executar as ações?",
    "itens": [
      { "label": "Salvar o fluxo." },
      { "label": "Definir as propriedades da ação." },
      { "label": "Escolher um gatilho." },
      { "label": "Adicionar uma nova etapa ao fluxo." },
      { "label": "Selecionar um conector e uma ação para enviar notificações de texto." }
    ],
    "grupos": [
      "Etapa 01",
      "Etapa 02",
      "Etapa 03",
      "Etapa 04",
      "Etapa 05"
    ],
    "respostas": {
      "Etapa 01": ["Escolher um gatilho."],
      "Etapa 02": ["Adicionar uma nova etapa ao fluxo."],
      "Etapa 03": ["Selecionar um conector e uma ação para enviar notificações de texto."],
      "Etapa 04": ["Definir as propriedades da ação."],
      "Etapa 05": ["Salvar o fluxo."]
    },
    "explicacao": "Para criar um fluxo instantâneo no Power Automate, você começa escolhendo um gatilho, como um botão. Em seguida, adiciona uma nova etapa, seleciona um conector e uma ação (como notificação por texto), define as propriedades dessa ação e, por fim, salva o fluxo.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-power-automate/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está planejando criar um fluxo da área de trabalho do Power Automate. O fluxo deve: 1) abrir um aplicativo e permitir que um usuário insira dados em campos; e 2) ser testado e validado antes da implantação em um ambiente de produção. Quais funções de fluxo da área de trabalho você deve usar para cada requisito?",
    "itens": [
      { "label": "Gravador" },
      { "label": "Execução" },
      { "label": "Subfluxos" }
    ],
    "grupos": [
      "Criar o fluxo",
      "Testar o fluxo"
    ],
    "respostas": {
      "Criar o fluxo": ["Gravador"],
      "Testar o fluxo": ["Execução"]
    },
    "explicacao": "A função Gravador permite criar fluxos capturando interações com a interface do usuário, sendo ideal para montar o fluxo inicial. A função Execução permite validar e testar o fluxo antes da implantação em produção. Subfluxos não são utilizados diretamente para criação ou teste, mas para modularização de etapas.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/desktop-flows/introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um fluxo de aprovação do Power Automate. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A adição de um relatório de despesas a uma pasta do Microsoft OneDrive pode iniciar um fluxo de aprovação.",
      "As aprovações devem seguir uma ordem sequencial de aprovação."
    ],
    "respostas": [true, false],
    "explicacao": "A primeira afirmação está correta, pois é possível usar a adição de arquivos no OneDrive como gatilho para iniciar um fluxo de aprovação. A segunda está incorreta, já que as aprovações no Power Automate podem ser configuradas como sequenciais ou paralelas, conforme necessário.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/modern-approvals",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Você pretende enviar uma notificação por email a um usuário quando um novo arquivo for colocado em uma pasta específica no OneDrive for Business. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar um fluxo sem escrever uma única linha de código e implantar o fluxo em um ambiente de produção.",
      "Você pode adicionar ações extras aos modelos internos do Power Automate.",
      "Você pode exibir o código que implementa ações e gatilhos do fluxo de trabalho sem instalar mais software."
    ],
    "respostas": [true, true, true],
    "explicacao": "Todas as afirmações estão corretas. É possível criar e implantar fluxos sem codificação, adicionar ações personalizadas aos modelos internos e exibir o código JSON dos fluxos usando ferramentas como o Visual Studio Code, sem necessidade de software adicional.",
    "link": "https://learn.microsoft.com/pt-br/azure/logic-apps/quickstart-create-logic-apps-visual-studio-code",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está usando o Power Automate para automatizar processos de negócios. Você precisa executar um fluxo quando um usuário pressiona um botão em um aplicativo. Qual tipo de gatilho você deve recomendar?",
    "opcoes": [
      "Power Apps",
      "Para uma linha selecionada",
      "Disparar um fluxo manualmente"
    ],
    "resposta": 2,
    "explicacao": "O gatilho 'Disparar um fluxo manualmente' é o mais adequado para executar fluxos instantâneos iniciados por botão, como descrito no enunciado. O gatilho 'Power Apps' seria específico para apps criados com essa ferramenta, e 'para uma linha selecionada' é usado no contexto do Microsoft Dataverse.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Uma grande empresa está avaliando o modelo de segurança do Microsoft Power Platform. Você precisa identificar o nível mais baixo possível em relação ao qual a autorização pode ser aplicada. Qual nível você deve identificar?",
    "opcoes": [
      "Linha",
      "Locatário",
      "Ambiente",
      "Coluna"
    ],
    "resposta": 0,
    "explicacao": "No modelo de segurança do Microsoft Power Platform, o nível mais granular de controle de acesso é o nível de linha. Ele permite aplicar autorizações específicas para registros individuais em uma tabela. Os demais níveis representam escopos mais amplos, como ambiente ou locatário.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/wp-security-cds",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "multipla",
    "texto": "Uma grande empresa de manufatura opera um único aplicativo ERP com uma interface desatualizada. A empresa deseja uma nova interface usando funcionalidades da Power Platform com os seguintes requisitos: 1) os clientes devem poder ler/gravar dados; 2) os dados devem permanecer dentro do ERP; 3) os custos devem ser minimizados. Quais são os dois recursos que você deve recomendar?",
    "opcoes": [
      "Power Apps",
      "Relatório do Power BI",
      "Conector",
      "Fluxo de dados",
      "Dataverse"
    ],
    "respostas": [0, 2],
    "explicacao": "Power Apps fornece a interface visual para os clientes interagirem com os dados, enquanto os conectores permitem integrar diretamente com o ERP via SQL Server, sem mover os dados. As demais opções não atendem ao requisito de manter os dados no ERP ou não permitem interação direta com os dados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/connections-list",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode inserir um aplicativo de tela em um formulário do Microsoft Forms para coletar comentários do usuário.",
      "Você pode inserir um aplicativo de tela em uma planilha do Microsoft Excel para permitir que os usuários interajam com dados de forma estruturada.",
      "Você pode inserir um aplicativo de tela em um aplicativo controlado por modelo do Power Platform."
    ],
    "respostas": [false, false, true],
    "explicacao": "A primeira e a segunda afirmações estão incorretas, pois não é possível embutir canvas apps diretamente em formulários do Microsoft Forms ou planilhas do Excel. A terceira está correta: é possível inserir um aplicativo de tela em um aplicativo baseado em modelo da Power Platform.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/embed-canvas-app-in-form",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa em rápido crescimento adquire licenças do Microsoft 365 para todos os funcionários. A empresa deseja capacitar os usuários para que eles criem aplicativos, automatizem processos de negócios e analisem dados sem exigir especialização em TI nem habilidades de desenvolvimento, e sem aumentar as despesas e as dependências da TI. Você precisa recomendar ferramentas para que os usuários possam realizar tarefas específicas.",
    "pares": [
      {
        "requisito": "- Criar fluxos de trabalho automáticos que acessam várias fontes de dados.",
        "opcoes": [
          "AI Builder",
          "Power Apps",
          "Power Automate",
          "Azure Functions",
          "Power BI"
        ],
        "resposta": 2
      },
      {
        "requisito": "- Criar aplicativos personalizados que atendam às necessidades de negócios específicas.",
        "opcoes": [
          "AI Builder",
          "Power Apps",
          "Power Automate",
          "Azure Functions",
          "Power BI"
        ],
        "resposta": 1
      },
      {
        "requisito": "- Projetar visualizações de dados ponderadas.",
        "opcoes": [
          "AI Builder",
          "Power Apps",
          "Power Automate",
          "Azure Functions",
          "Power BI"
        ],
        "resposta": 4
      }
    ],
    "explicacao": "Power Apps permite que os usuários criem aplicativos personalizados com pouco ou nenhum código, atendendo a necessidades específicas de negócios sem depender da equipe de TI.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/powerapps-overview",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um aplicativo Power Apps. Você deseja garantir que o aplicativo possa ser usado pelos indivíduos que tenham uma deficiência visual. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Power Apps pode usar um leitor de tela sem a necessidade de um conector.",
      "Você pode usar um verificador de acessibilidade para os aplicativos do Power Apps a fim de verificar as violações de acessibilidade e fornecer dicas de interface do usuário."
    ],
    "respostas": [false, true],
    "explicacao": "O Power Apps oferece suporte a leitores de tela, mas depende de configurações específicas de sistema operacional e software, por isso não é correto afirmar que funciona sem necessidade de conector de forma genérica. Já o verificador de acessibilidade está integrado ao Power Apps Studio e pode ser usado para identificar e corrigir problemas de usabilidade.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/accessibility-checker",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa usa o Microsoft 365, o SharePoint Online e o Dynamics 365 Sales. Você precisa recomendar ferramentas para criar uma solução que atenda aos seguintes requisitos:<br><br>- Sincronizar dados diariamente de uma instância externa do Microsoft SQL Server.<br>- Enviar um relatório automaticamente para executivos específicos da empresa.<br>- Garantir que as oportunidades em um valor especificado sejam aprovadas por um gerente de vendas.<br><br>Quais são os dois componentes ou ferramentas que você deve recomendar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Power BI",
      "Microsoft Word",
      "Microsoft Dataverse",
      "Power Automate",
      "Microsoft Excel"
    ],
    "respostas": [2, 3],
    "explicacao": "Power Automate permite automatizar tarefas como sincronização de dados, envio de relatórios e criação de fluxos de aprovação. Microsoft Dataverse armazena os dados de forma estruturada e segura, permitindo a aplicação de regras de negócio como aprovações baseadas em valor.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo de tela para permitir que os usuários registrem suas despesas. O aplicativo também dará suporte a leitores de tela para usuários com deficiência visual.<br><br>Você precisa atender aos seguintes requisitos:<br>- Usar uma ferramenta que identifique possíveis problemas.<br>- Usar uma ferramenta que forneça sugestões para modificar o aplicativo.<br><br>Você precisa de uma ferramenta que atenda aos requisitos. Qual ferramenta você deve usar?",
    "opcoes": [
      "Verificador de Acessibilidade",
      "Central de Confiabilidade da Microsoft",
      "Verificador de Fluxo",
      "Centro de administração do Microsoft Power Platform"
    ],
    "resposta": 0,
    "explicacao": "O Verificador de Acessibilidade no Power Apps identifica problemas como falta de contraste, ausência de rótulos e outros aspectos que dificultam o uso do aplicativo por pessoas com deficiência. Além disso, ele oferece sugestões para corrigir esses problemas diretamente no Power Apps Studio.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/accessibility-checker",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "combobox",
    "texto": "Você está aprendendo sobre o Power Apps e como usar gatilhos. Quando uma condição é atendida, o Power Apps pode disparar um(a)",
    "opcoes": [      
      "conector.",
      "fluxo da nuvem do Power Automate.",
      "gateway.",
      "solução."
    ],
    "resposta": 1,
    "explicacao": "O Power Apps pode disparar um fluxo da nuvem do Power Automate como resposta a uma condição atendida, permitindo a automação de processos.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/using-logic-flows",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa pretende usar o Power Apps para se conectar a uma série de serviços personalizados. Não há conectores disponíveis para os serviços personalizados. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os conectores personalizados exigem revisão e certificação da Microsoft.",
      "Você pode criar um conector personalizado uma vez e reutilizá-lo para o Power Apps e o Power Automate."
    ],
    "respostas": [false, true],
    "explicacao": "A certificação não é obrigatória para uso interno de conectores personalizados; ela só é necessária para publicação pública. Conectores personalizados podem ser usados tanto no Power Apps quanto no Power Automate, pois ambos compartilham a mesma plataforma de conectores.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar soluções que usam o Microsoft Dataverse.<br><br>Você precisa recomendar recursos que atendam às necessidades da empresa.<br><br>Quais recursos você deve recomendar? Para responder, arraste os recursos apropriados até os requisitos corretos. Cada recurso pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "regras de negócios" },
      { "label": "fluxos de processo empresarial" },
      { "label": "Common Data Model" }
    ],
    "grupos": [
      "Validar dados em várias colunas e tabelas, independentemente do aplicativo usado para criar dados.",
      "Criar guias visuais para garantir que os usuários insiram dados e executem tarefas de maneira consistente.",
      "Acelerar o desenvolvimento usando um conjunto padrão de tabelas para os cenários mais comuns."
    ],
    "respostas": {
      "Validar dados em várias colunas e tabelas, independentemente do aplicativo usado para criar dados.": ["regras de negócios"],
      "Criar guias visuais para garantir que os usuários insiram dados e executem tarefas de maneira consistente.": ["fluxos de processo empresarial"],
      "Acelerar o desenvolvimento usando um conjunto padrão de tabelas para os cenários mais comuns.": ["Common Data Model"]
    },
    "explicacao": "Regras de negócios ajudam a validar dados em diferentes contextos. Fluxos de processo empresarial guiam os usuários por etapas definidas, e o Common Data Model fornece tabelas e estruturas comuns para acelerar o desenvolvimento.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/data-platform-intro",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "combobox",
    "texto": "Você está implementando uma automação usando o Power Automate. Com base em um agendamento predefinido, a automação deve verificar se há problemas em um repositório GitHub. Se houver novos problemas, a automação deverá usar o Dataverse para resolvê-los. Você precisa identificar o mecanismo correto para conexão com o GitHub. Para estabelecer conexão com o GitHub, você deve usar <combobox>",
    "opcoes": [      
      "conectores",
      "fluxos de dados",
      "fluxos da área de trabalho"
    ],
    "resposta": 0,
    "explicacao": "Para conectar o Power Automate ao GitHub e automatizar ações como leitura de repositórios ou emissão de alertas, você deve usar conectores. Eles fornecem a integração com serviços externos por meio de APIs.",
    "link": "https://learn.microsoft.com/pt-br/connectors/github/",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um modelo de dados no Dataverse para uma empresa de planejamento de eventos.<br><br>Os indivíduos podem se registrar para vários eventos durante um ciclo. Quando os planejadores de eventos criarem um evento, o novo evento deve ser vinculado automaticamente aos registros dos indivíduos. As organizações devem ser impedidas de se registrarem.<br><br>Você precisa identificar qual componente do Dataverse usar para finalizar o modelo.<br><br>Qual componente você deve identificar?",
    "opcoes": [
      "Coluna de escolha",
      "Regra de negócios",
      "Coluna de cliente",
      "Relação"
    ],
    "resposta": 3,
    "explicacao": "Relações no Dataverse permitem conectar registros entre tabelas, como indivíduos e eventos. Isso viabiliza o uso de chaves estrangeiras e permite que, ao criar um evento, ele seja automaticamente associado aos registros relacionados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-edit-1n-relationships-portal",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está implementando o Microsoft Power Platform para seus usuários empresariais. Os usuários empresariais não são especializados em TI e não estão familiarizados com a configuração da Microsoft Power Platform. Os usuários precisam de assistência com o aplicativo do Microsoft Power Platform e a configuração de automações.Selecione a resposta que completa a frase corretamente: Para ajudar os usuários empresariais com a criação de aplicativos e automações usando linguagem natural no Microsoft Power Platform, eles podem usar o <combobox>",
    "opcoes": [      
      "Microsoft 365 Copilot.",
      "AI Builder.",
      "Microsoft 365.",
      "Power Automate."
    ],
    "resposta": 0,
    "explicacao": "O Copilot ajuda você a construir soluções do Power Platform de forma mais fácil usando linguagem natural.",
    "link": "https://learn.microsoft.com/pt-br/copilot/overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "PL-900 Bônus 02"
  }

];