// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Uma empresa de distribuição possui vários armazéns. As taxas cobradas em pedidos de venda precisam ser calculadas com base na localidade e na região. Você precisa recomendar uma solução econômica que possa ser implementada rapidamente. O que você deve recomendar?",
    "opcoes": [
      "Verificar o AppSource para um complemento de impostos",
      "Criar alertas no Dynamics 365 Finance para alterações na tabela de impostos",
      "Implementar o Modelo de Dados Comum",
      "Executar um relatório do Power BI",
      "Escrever scripts e codificar atualizações de impostos"
    ],
    "resposta": 3,
    "explicacao": "Executar um relatório do Power BI permite visualizar e analisar rapidamente dados de diferentes fontes, oferecendo uma solução econômica e rápida para calcular taxas baseadas em localidade e região, sem a necessidade de personalizações complexas ou desenvolvimento adicional.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/power-bi-overview",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  }, {
    "tipo": "unica",
    "texto": "Você precisa exibir pedidos de vendas maiores do que um limite específico em um relatório do Power BI. O que você deve usar?",
    "opcoes": [
      "Filtro",
      "Consulta avançada (Power Query)",
      "Universo de dados Microsoft (Microsoft Dataverse)",
      "Conector"
    ],
    "resposta": 0,
    "explicacao": "O filtro é a melhor opção para exibir (DISPLAY) uma seleção específica de dados em um relatório do Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/power-bi-report-add-filter?tabs=powerbi-desktop",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você é um representante de vendas. Você cria um relatório do Power BI para visualizar dados de uma planilha do Microsoft Excel. Os usuários precisam ser capazes de visualizar e compartilhar o relatório. Quais duas ações você deve realizar?",
    "opcoes": [
      "Fixar o relatório em um painel",
      "Exportar os dados",
      "Publicar o painel",
      "Compartilhar o painel"
    ],
    "respostas": [0, 3],
    "explicacao": "Para permitir que os usuários vejam e compartilhem o relatório no Power BI, é necessário fixar o relatório em um painel e compartilhar o painel com eles. Exportar os dados não é necessário para visualização e 'Publicar o painel' não é uma ação suportada diretamente no Power BI, já que a publicação é feita para conjuntos de dados e relatórios.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-share-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre a publicação e compartilhamento de aplicativos no Power BI.",
    "afirmacoes": [
      "O aplicativo publicado no Power BI é armazenado dentro do site do Microsoft Teams para que outros possam instalá-lo.",
      "Um dos outros gerentes de projeto instala e modifica um dashboard dentro do aplicativo publicado no Power BI. As alterações são automaticamente aplicadas no aplicativo publicado original."
    ],
    "respostas": [false, false],
    "explicacao": "Os aplicativos publicados no Power BI não são armazenados no site do Microsoft Teams. Eles são acessados por meio da seção de aplicativos do serviço Power BI. Além disso, se um usuário instalar e modificar um dashboard de um app publicado, essas mudanças não são refletidas automaticamente no app original. Para refletir alterações, o autor original precisa republicar o app.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-create-distribute-apps",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você criou um painel (Dashboard) no Power BI (Serviço de visualização e análise de dados) que exibe dados do Dynamics 365 Customer Engagement (Sistema de gestão de relacionamento com o cliente – CRM – voltado para vendas, marketing e atendimento ao cliente). Você precisa compartilhar esse painel com colegas de trabalho. Quais são três maneiras possíveis de atingir esse objetivo? Cada opção correta representa uma solução completa.",
    "opcoes": [
      "Criar um workspace no Power BI (Serviço de visualização e análise de dados) e conceder permissões aos colegas.",
      "Publicar o painel como um aplicativo (App) para os colegas.",
      "Exportar os dados para o Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform) para que outros possam manipulá-los no Power BI (Serviço de visualização e análise de dados).",
      "Exportar os dados para o Microsoft Excel para que outros possam importar e visualizar no Power BI (Serviço de visualização e análise de dados).",
      "Incorporar relatórios no portal interno da sua empresa."
    ],
    "respostas": [0, 1, 4],
    "explicacao": "As opções corretas incluem: (1) compartilhar através de workspaces concedendo permissões específicas, (2) publicar como um aplicativo, que é ideal para ambientes isolados de desenvolvimento e uso, e (3) incorporar o relatório em um portal da empresa, utilizando o código de incorporação. Exportar para o Microsoft Excel ou para o Microsoft Dataverse não são métodos diretos ou recomendados de compartilhamento de conteúdo no Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-share-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3",
    "imagemUrl": "img/1.png"
  },
  {
    "tipo": "multipla",
    "texto": "Você criou um painel (Dashboard) no Power BI (Serviço de visualização e análise de dados) que exibe dados do Dynamics 365 Customer Engagement (Sistema de gestão de relacionamento com o cliente – CRM – voltado para vendas, marketing e atendimento ao cliente). Você precisa compartilhar esse painel com colegas de trabalho. Quais são três maneiras possíveis de atingir esse objetivo? Cada opção correta representa uma solução completa.",
    "opcoes": [
      "Criar um workspace no Power BI (Serviço de visualização e análise de dados) e conceder permissões aos colegas.",
      "Publicar o painel como um aplicativo (App) para os colegas.",
      "Exportar os dados para o Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform) para que outros possam manipulá-los no Power BI (Serviço de visualização e análise de dados).",
      "Exportar os dados para o Microsoft Excel para que outros possam importar e visualizar no Power BI (Serviço de visualização e análise de dados).",
      "Incorporar relatórios no portal interno da sua empresa."
    ],
    "respostas": [0, 1, 4],
    "explicacao": "As opções corretas incluem: (1) compartilhar através de workspaces concedendo permissões específicas, (2) publicar como um aplicativo, que é ideal para ambientes isolados de desenvolvimento e uso, e (3) incorporar o relatório em um portal da empresa, utilizando o código de incorporação. Exportar para o Microsoft Excel ou para o Microsoft Dataverse não são métodos diretos ou recomendados de compartilhamento de conteúdo no Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-share-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3",
    "imagemUrl": "img/2.png"
  },
  {
    "tipo": "unica",
    "texto": "Você é gerente distrital de uma grande rede varejista. Você treina cada gerente de loja para usar o Power BI (Serviço de visualização e análise de dados) para acompanhar vendas e metas diárias. Um gerente de loja lembra da funcionalidade 'Analisar no Excel', mas não consegue encontrá-la em seu painel. Você precisa ajudá-lo a resolver o problema. O que você deve orientá-lo a fazer?",
    "opcoes": [
      "Instalar o aplicativo Power BI Desktop.",
      "Selecionar o botão Destaque (Spotlight) no bloco do painel.",
      "Assinar o painel e seguir o link recebido por e-mail.",
      "Navegar até o relatório usado pelo painel."
    ],
    "resposta": 3,
    "explicacao": "A funcionalidade 'Analisar no Excel' está disponível apenas em relatórios, não em painéis. Por isso, é necessário que o usuário navegue até o relatório que alimenta o painel para visualizar essa opção.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-analyze-in-excel",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja exibir métricas de chamadas de suporte em uma tela visível a todos os funcionários do call center. Você precisa recomendar soluções para atender aos requisitos da empresa. Arraste os componentes apropriados para os requisitos corretos.",
    "itens": [
      { "label": "Tema" },
      { "label": "Aplicativo de modelo" },
      { "label": "Treemap" },
      { "label": "Página" },
      { "label": "Alerta" },
      { "label": "DirectQuery" },
      { "label": "Tile (Bloco de painel)" },
      { "label": "Workspace (Espaço de trabalho)" }
    ],
    "grupos": [
      "Exibir um gráfico com chamadas recebidas versus tempo de espera e fixar o gráfico em um painel.",
      "Enviar uma notificação a um usuário específico quando o número de chamadas de suporte pendentes for superior a 20.",
      "Exibir métricas de diferentes conjuntos de dados que tenham dados relacionados."
    ],
    "respostas": {
      "Exibir um gráfico com chamadas recebidas versus tempo de espera e fixar o gráfico em um painel.": ["Tile (Bloco de painel)"],
      "Enviar uma notificação a um usuário específico quando o número de chamadas de suporte pendentes for superior a 20.": ["Alerta"],
      "Exibir métricas de diferentes conjuntos de dados que tenham dados relacionados.": ["Workspace (Espaço de trabalho)"]
    },
    "explicacao": "Blocos (tiles) são usados para fixar visualizações específicas em um painel no Power BI (Serviço de visualização e análise de dados). Alertas permitem notificações automáticas com base em valores de dados. Espaços de trabalho (workspaces) permitem organizar e visualizar dados relacionados de diferentes fontes em um ambiente colaborativo.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboard-tiles",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você criou um painel (Dashboard) no Power BI (Serviço de visualização e análise de dados) que exibe dados do Common Data Model (Padrão de dados estruturados usados para integrar e unificar dados entre aplicativos e serviços da Microsoft). Você precisa compartilhar o painel com os colegas de trabalho e permitir que colaborem. Quais são duas maneiras possíveis de alcançar esse objetivo? Cada alternativa correta apresenta uma solução completa.",
    "opcoes": [
      "Criar um workspace no Power BI (Serviço de visualização e análise de dados) e conceder permissões aos colegas.",
      "Publicar o painel como um aplicativo (App) para os colegas.",
      "Exportar os dados para o Microsoft Excel, fazer alterações necessárias e reimportar os dados.",
      "Criar um fluxo no Power Automate (Automatização de fluxos de trabalho entre aplicativos e serviços) para exportar os dados para um banco de dados SQL Server."
    ],
    "respostas": [0, 1],
    "explicacao": "Para colaborar em painéis no Power BI (Serviço de visualização e análise de dados), é possível (1) criar um workspace e conceder permissões aos usuários para acesso e edição e (2) publicar o painel como um aplicativo, permitindo que os colegas o acessem e interajam com ele. Exportar dados para Excel ou SQL Server não atende ao requisito de colaboração direta via painel.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-share-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está utilizando o Dynamics 365 Sales (Sistema de gestão de vendas e relacionamento com clientes). É necessário criar um relatório no Power BI (Serviço de visualização e análise de dados) que inclua os endereços dos escritórios dos clientes. As colunas Cidade e Estado devem ser combinadas em uma única coluna no relatório. O que você deve fazer?",
    "opcoes": [
      "Usar o Editor do Power Query (Ferramenta de transformação e preparação de dados usada no Power BI, Excel e outras soluções da Microsoft) para mesclar colunas.",
      "Importar os dados.",
      "Exportar os dados para o Microsoft Excel.",
      "Criar uma exibição (view)."
    ],
    "resposta": 0,
    "explicacao": "O Editor do Power Query permite mesclar facilmente colunas, como Cidade e Estado, em uma única coluna no Power BI (Serviço de visualização e análise de dados), sem a necessidade de modificar a origem dos dados. Essa é a abordagem recomendada para transformação de dados antes da criação do relatório.",
    "link": "https://support.microsoft.com/pt-br/office/mesclar-colunas-no-power-query-80ec9e1e-1eb6-4048-b500-d5d42d9f0a8d",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você é gerente regional de vendas em uma grande empresa de varejo. Você precisa determinar se os novos relatórios estão sendo utilizados e enviar e-mails para os associados de vendas com orientações sobre como usar os relatórios e dashboards. Associe cada necessidade ao recurso adequado do Power BI.",
    "pares": [
      {
        "requisito": "Enviar um e-mail para os associados de vendas em um horário predefinido.",
        "opcoes": [
          "Assinatura (Subscribe)",
          "Exportação (Export)",
          "Favoritos (Favorites)",
          "Publicador (Publisher)"
        ],
        "resposta": 0
      },
      {
        "requisito": "Quantificar o uso de adoção pelos associados de vendas.",
        "opcoes": [
          "Explorar (Explore)",
          "Favoritos (Favorites)",
          "Métricas de uso (Usage metrics)",
          "Inspetor de desempenho (Performance inspector)"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "O recurso Assinatura (Subscribe) do Power BI permite agendar o envio automático de relatórios por e-mail, mantendo os usuários atualizados. Já o recurso Métricas de uso (Usage metrics) oferece insights sobre o comportamento dos usuários, como visualizações e interações com os relatórios.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/consumer/end-user-subscribe",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você está criando relatórios no Power BI (Serviço de visualização e análise de dados). É necessário escolher quais tipos de filtros podem ser utilizados nos relatórios. Quais são três tipos de filtros que você pode usar? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Exploração (Drill-down)",
      "Automático",
      "Banco de dados",
      "Manual",
      "Externo"
    ],
    "respostas": [0, 1, 3],
    "explicacao": "O Power BI oferece diferentes tipos de filtros que podem ser aplicados a relatórios. Os filtros automáticos são gerados com base nos dados utilizados. Os filtros manuais são configurados pelo criador do relatório. A funcionalidade de exploração (drill-down) permite navegar por níveis hierárquicos de dados, funcionando também como filtro contextual. Filtros externos ou diretamente do banco de dados não são considerados tipos nativos de filtro de relatório no Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/power-bi-report-filter-types",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando visualizações do Power BI (Serviço de visualização e análise de dados) para uma equipe. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Power BI só pode recuperar dados de até duas fontes diferentes por painel.",
      "As visualizações do Power BI podem ser usadas em aplicativos canvas e aplicativos baseados em modelo no Power Apps (Criação de aplicativos personalizados com pouco ou nenhum código).",
      "O Power BI pode exibir gráficos e listas em painéis."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Power BI pode combinar dados de várias fontes em um único painel, sem limite rígido de duas fontes. Visualizações do Power BI podem ser integradas em aplicativos canvas e baseados em modelo no Power Apps. Power BI oferece suporte nativo para exibição de gráficos, cartões, tabelas e listas em painéis.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/customer-service/use/customer-service-analytics-insights-csh",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa de manufatura utiliza dispositivos de Internet das Coisas (IoT) para monitorar a temperatura em diferentes partes de seu armazém. É necessário visualizar informações quase em tempo real desses dispositivos IoT em dashboards do Power BI (Serviço de visualização e análise de dados). Qual ferramenta você deve usar?",
    "opcoes": [
      "Conjunto de dados com atualização agendada (Scheduled refresh dataset)",
      "Conjunto de dados de streaming (Streaming dataset)",
      "Conjunto de dados de pacote de conteúdo (Content Pack dataset)",
      "Power BI dataflows",
      "Quick Insights"
    ],
    "resposta": 1,
    "explicacao": "Conjuntos de dados de streaming (Streaming datasets) permitem a visualização de dados em tempo real diretamente em painéis do Power BI. Esse recurso é ideal para cenários com dispositivos IoT, onde é necessário acompanhar métricas com mínima latência.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/service-real-time-streaming",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "combobox",
    "texto": "Você tem um relatório do Power BI (Serviço de visualização e análise de dados) com uma página chamada RevReceived, que mostra a receita bruta recebida pela sua empresa. Você deseja criar uma página quase idêntica que exiba a receita líquida em vez da bruta. O que você deve fazer? <combobox>",
    "opcoes": [
      "",
      "Modificar a página RevReceived",
      "Duplicar a página RevReceived e atualizar a cópia duplicada",
      "Importar a página RevReceived",
      "Copiar os visuais da página RevReceived para uma nova página"
    ],
    "resposta": 2,
    "explicacao": "A maneira mais eficiente de reutilizar a estrutura de uma página no Power BI (Serviço de visualização e análise de dados) é duplicá-la. Isso permite preservar os visuais, filtros e layout, e modificar apenas as medidas ou campos necessários, como substituir receita bruta por receita líquida.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/field-service/mobile/create-service-report",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar o Power BI (Serviço de visualização e análise de dados) para analisar dados operacionais do varejo. Você precisa recomendar quais componentes do Power BI devem ser usados para atender aos requisitos da empresa. Arraste cada componente para a exigência correspondente.",
    "itens": [
      { "label": "Relatórios (Reports)" },
      { "label": "Espaços de trabalho (Workspaces)" },
      { "label": "Painéis (Dashboards)" },
      { "label": "Conjuntos de dados (Dataset)" }
    ],
    "grupos": [
      "Permiti que os usuários configurem e recebam alertas quando os dados ultrapassarem limites especificados.",
      "Visualiza e filtra dados e exporta para o Microsoft Excel para posterior análise e manipulação."
    ],
    "respostas": {
      "Permiti que os usuários configurem e recebam alertas quando os dados ultrapassarem limites especificados.": ["Painéis (Dashboards)"],
      "Visualiza e filtra dados e exporta para o Microsoft Excel para posterior análise e manipulação.": ["Relatórios (Reports)"]
    },
    "explicacao": "Os painéis (Dashboards) do Power BI permitem configurar alertas com base em limites predefinidos. Já os relatórios (Reports) permitem aplicar filtros e exportar visualizações para o Microsoft Excel, ideal para análises mais detalhadas e manipulação fora da plataforma.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-set-data-alerts",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está criando visualizações no Power BI (Serviço de visualização e análise de dados). Associe cada necessidade à solução mais adequada.",
    "pares": [
      {
        "requisito": "Tomar decisões com base na análise de indicadores-chave de desempenho (KPIs) de alto nível.",
        "opcoes": [
          "Power BI Service",
          "Power BI Desktop",
          "Painéis do Power BI (Power BI dashboards)"
        ],
        "resposta": 2
      },
      {
        "requisito": "Explorar os detalhes de uma visualização por meio do recurso de Drill-down.",
        "opcoes": [
          "Relatórios do Power BI (Power BI reports)",
          "Power BI Desktop",
          "Painéis do Power BI (Power BI dashboards)"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Os Painéis do Power BI são usados para monitorar KPIs de alto nível em tempo real, permitindo decisões rápidas e centralizadas. Já os Relatórios do Power BI oferecem funcionalidades de drill-down para análise interativa e aprofundada dos dados.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/consumer/end-user-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },

  {
    "tipo": "comboboxs",
    "texto": "Uma empresa está usando o Power BI para analisar um grande número de conjuntos de dados. Associe cada necessidade ao recurso mais adequado.",
    "pares": [
      {
        "requisito": "Melhorar o desempenho reduzindo o tamanho das tabelas.",
        "opcoes": [
          "Agregações (Aggregations)",
          "Fórmulas (Formulas)",
          "Exibição de modelagem (Modeling view)"
        ],
        "resposta": 2
      },
      {
        "requisito": "Armazenar em cache os dados localmente no dispositivo do usuário.",
        "opcoes": [
          "Importação (Import)",
          "Modo dual (Dual)"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "A Exibição de modelagem permite organizar melhor os modelos de dados e seus relacionamentos, otimizando o desempenho em grandes volumes. Já o modo de Importação armazena os dados localmente, melhorando a velocidade de carregamento e navegação nos relatórios.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-modeling-view",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um conjunto de dashboards e relatórios para uma equipe de projeto que combina dados de diferentes fontes no Power BI (Serviço de visualização e análise de dados). Parte dos dados é considerada sensível. Você precisa distribuir esses dashboards e relatórios com segurança para a equipe. O que você deve criar?",
    "opcoes": [
      "Um conector de dados personalizado (Custom data connector)",
      "Um aplicativo publicado (Published app)",
      "Um fluxo do Microsoft (Microsoft flow)",
      "Um workspace do Power BI (Workspace do Power BI)"
    ],
    "resposta": 3,
    "explicacao": "A maneira recomendada de organizar, controlar permissões e distribuir conteúdo como dashboards e relatórios no Power BI é através de um workspace (espaço de trabalho). De lá, é possível publicar aplicativos, gerenciar acessos e garantir a segurança dos dados sensíveis.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-create-workspaces",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você está criando visualizações no Power BI (Serviço de visualização e análise de dados). Você criou gráficos de área, gráficos de pizza e gráficos de rosca que utilizam os dados da sua empresa. É necessário exibir esses gráficos para outras pessoas da organização. Em quais dois objetos você pode adicionar esses gráficos? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Power BI Service",
      "Relatórios do Power BI (Power BI reports)",
      "Power BI Desktop",
      "Painéis do Power BI (Power BI dashboards)"
    ],
    "respostas": [1, 3],
    "explicacao": "Gráficos como os de área, pizza e rosca podem ser adicionados em relatórios do Power BI (Power BI reports), que são criados no Power BI Desktop e publicados no Power BI Service. Esses relatórios podem então ser fixados em painéis (dashboards) para visualização compartilhada e resumida.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está implementando o Power BI (Serviço de visualização e análise de dados) para acompanhar as vendas. Cada relatório de vendas da empresa possui metas de vendas trimestrais e anuais. Você precisa criar um painel (dashboard) de vendas com diferentes representações visuais. Qual tipo de gráfico você deve usar? Para responder, arraste o tipo de gráfico apropriado para cada requisito.",
    "itens": [
      { "label": "Gráfico de rosca (Donut)" },
      { "label": "Indicador de desempenho (KPIs)" },
      { "label": "Gráfico de linhas (Line chart)" },
      { "label": "Matriz (Matrix)" }
    ],
    "grupos": [
      "Exibi o total de vendas trimestrais até o momento em relação à meta de vendas.",
      "Exibi a tendência de vendas por mês do ano de vendas atual para todas as regiões.",
      "Exibi as vendas acumuladas do ano como percentual por região."
    ],
    "respostas": {
      "Exibi o total de vendas trimestrais até o momento em relação à meta de vendas.": ["Indicador de desempenho (KPIs)"],
      "Exibi a tendência de vendas por mês do ano de vendas atual para todas as regiões.": ["Gráfico de linhas (Line chart)"],
      "Exibi as vendas acumuladas do ano como percentual por região.": ["Gráfico de rosca (Donut)"]
    },
    "explicacao": "Os KPIs são usados para comparar os valores atuais com metas específicas, ideal para medir vendas em relação a objetivos. Gráficos de linhas são excelentes para exibir tendências ao longo do tempo, como vendas mensais. Gráficos de rosca (Donut) são úteis para mostrar proporções, como participação regional nas vendas acumuladas do ano.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você criou um painel (dashboard) no Power BI (Serviço de visualização e análise de dados). Associe cada opção à sua função correspondente. Para responder, arraste a opção correta da coluna da esquerda para a exigência correspondente na coluna da direita.",
    "itens": [
      { "label": "Compartilhar (Share)" },
      { "label": "Obter dados (Get Data)" },
      { "label": "Fixar (Pin)" }
    ],
    "grupos": [
      "Garanti que os colegas possam visualizar o painel.",
      "Exibi dados do Microsoft Excel no painel.",
      "Adiciona um bloco de relatório ao painel."
    ],
    "respostas": {
      "Garanti que os colegas possam visualizar o painel.": ["Compartilhar (Share)"],
      "Exibi dados do Microsoft Excel no painel.": ["Obter dados (Get Data)"],
      "Adiciona um bloco de relatório ao painel.": ["Fixar (Pin)"]
    },
    "explicacao": "O recurso Compartilhar (Share) permite que outros usuários visualizem o painel. Obter dados (Get Data) é usado para conectar o Power BI a fontes como Excel. Fixar (Pin) permite adicionar visualizações ou páginas de relatório diretamente ao painel como blocos interativos.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboard-pin-live-tile-from-report",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está usando o Dynamics 365 Sales (Sistema de gestão de vendas e relacionamento com clientes). É necessário importar dados para um relatório do Power BI (Serviço de visualização e análise de dados) para sua equipe. As colunas Cidade e Estado devem ser combinadas para formar uma única coluna no relatório. Qual função você deve usar?",
    "opcoes": [
      "Usar o Power Query (Ferramenta de transformação e preparação de dados usada no Power BI, Excel e outras soluções da Microsoft) para mesclar colunas.",
      "Importar os dados.",
      "Exportar os dados para o Microsoft Excel.",
      "Criar uma exibição (view)."
    ],
    "resposta": 0,
    "explicacao": "A ferramenta Power Query permite transformar dados ao mesclar colunas, formatar textos e realizar outras ações essenciais antes da modelagem. Isso facilita a criação de relatórios mais organizados e automatizados no Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/desktop-shape-and-combine-data",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa que utiliza a Power Platform está implementando o Power BI (Serviço de visualização e análise de dados). A empresa pretende se conectar a diversas fontes de dados e criar relatórios e dashboards. Quais duas fontes de dados você deve usar? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Microsoft Excel",
      "Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform)",
      "Microsoft OneNote",
      "Microsoft Word"
    ],
    "respostas": [0, 1],
    "explicacao": "O Power BI permite a conexão com uma grande variedade de fontes de dados para criação de relatórios e dashboards. O Microsoft Excel é uma das fontes mais comuns, especialmente quando os dados já estão organizados em planilhas. O Microsoft Dataverse, parte da Power Platform, permite o armazenamento centralizado de dados estruturados, sendo uma fonte poderosa e integrada ao ecossistema Microsoft. Já o OneNote e o Word não são considerados fontes de dados compatíveis diretamente com o Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/desktop-data-sources",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um relatório do Power BI (Serviço de visualização e análise de dados) com várias páginas para uma organização. É necessário permitir que os vendedores da empresa usem o relatório para visualizar apenas os dados relevantes à sua região de vendas. Que recurso você deve habilitar no relatório?",
    "opcoes": [
      "Rótulos de sensibilidade (Sensitivity labels)",
      "Microsoft Azure Active Directory",
      "Microsoft Trust Center",
      "Políticas de prevenção contra perda de dados (Data loss prevention policies)",
      "Segurança em nível de linha (Row-level security)"
    ],
    "resposta": 4,
    "explicacao": "A segurança em nível de linha (Row-level security - RLS) permite restringir o acesso aos dados com base em filtros definidos para cada função de usuário. No Power BI, esse recurso é ideal para garantir que cada vendedor veja apenas as informações pertinentes à sua área de atuação, como região de vendas.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/enterprise/service-admin-rls",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "User1 cria vários dashboards no Power BI (Serviço de visualização e análise de dados) para uma empresa. O User1 compartilha um dashboard com o User2, que trabalha para outra empresa. O User2 relata que consegue visualizar o dashboard. O User2 encaminha o e-mail contendo o link de compartilhamento para o User3. O User3 relata que recebe uma mensagem de erro ao tentar acessar o link para o dashboard. O User3 consegue visualizar um dashboard que ele mesmo criou. Você precisa identificar por que o User3 está recebendo um erro. Qual é o problema?",
    "opcoes": [
      "O User3 está usando uma versão desatualizada do Power BI e precisa atualizá-la para uma versão mais recente.",
      "O User2 está conectado ao dashboard e deve sair antes que o User3 possa se conectar.",
      "O encaminhamento do e-mail não compartilha o dashboard com o User3.",
      "O User3 está conectado com a conta organizacional errada no Power BI."
    ],
    "resposta": 2,
    "explicacao": "No Power BI, o compartilhamento de dashboards é feito de forma segura com base em permissões individuais. Encaminhar o e-mail com o link de acesso não concede automaticamente permissões de visualização para outra pessoa. É necessário que o proprietário do dashboard (User1) compartilhe diretamente com cada usuário que precisa acessá-lo.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/collaborate-share/service-share-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja implementar o Power BI (Serviço de visualização e análise de dados). Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Power BI Report Builder é a única ferramenta usada para criar relatórios a serem publicados no Power BI Service.",
      "O Power BI Service pode incluir colunas calculadas.",
      "O Power BI Desktop pode incluir colunas calculadas."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Power BI Report Builder é usado para criar relatórios paginados, mas não é a única ferramenta usada para criar relatórios para o Power BI Service. O Power BI Service não permite criar colunas calculadas diretamente – isso é feito no Power BI Desktop. O Power BI Desktop permite criar colunas calculadas usando fórmulas DAX, sendo a principal ferramenta para transformação de dados e modelagem.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-calculated-columns",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo relatórios para uma empresa. É necessário criar visualizações que incluam os seguintes dados: - Faturas de um sistema ERP de terceiros; - Número de chamadas feitas ao cliente a partir do Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform); - Dados de arquivos do Microsoft Excel. Os relatórios devem ser exibidos em uma única página. Qual recurso você deve usar?",
    "opcoes": [
      "Pipelines de implantação (Deployment pipelines)",
      "Tabelas",
      "Colunas",
      "Painéis do Power BI (Power BI dashboards)"
    ],
    "resposta": 3,
    "explicacao": "Os dashboards (painéis) do Power BI são ideais para exibir múltiplas visualizações em uma única página. Eles permitem combinar dados de diferentes fontes como Excel, ERP ou Dataverse, apresentando KPIs e gráficos de forma resumida e interativa.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboards",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está usando o Power BI (Serviço de visualização e análise de dados) para visualizar um gráfico em um relatório que foi compartilhado com você. É necessário adicionar essa visualização a um painel como um bloco. Qual ação você deve realizar?",
    "opcoes": [
      "Exportar dados",
      "Fixar (Pin)",
      "Copiar",
      "Destaque (Spotlight)"
    ],
    "resposta": 1,
    "explicacao": "Ao utilizar o Power BI, você pode fixar (pin) uma visualização ou uma página inteira de relatório a um painel como um bloco. Essa ação é chamada de 'fixar um bloco ativo' (live tile), permitindo que qualquer alteração feita no relatório seja refletida automaticamente no painel.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboard-pin-tile-from-report",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa gerencia uma rede de lojas de varejo. Ela armazena uma lista com nomes e números das lojas em uma tabela do Power BI (Serviço de visualização e análise de dados). A empresa também armazena os dados das transações de venda, que incluem um ID de transação contendo o número da loja. É necessário exibir o nome da loja em todas as transações nos relatórios do Power BI. Qual ferramenta você deve usar?",
    "opcoes": [
      "Editor de Consultas (Query Editor)",
      "Power BI Service (Serviço de visualização e análise de dados)",
      "Microsoft Excel",
      "Conector de Dados (Data Connector)"
    ],
    "resposta": 0,
    "explicacao": "O Editor de Consultas (Query Editor) disponível no Power BI Desktop permite conectar-se a várias fontes de dados e realizar transformações como junções, fusões e criação de colunas personalizadas. Para relacionar o número da loja ao seu nome e garantir que essa informação esteja disponível nos relatórios, o uso do Query Editor é a escolha correta.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-query-overview",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa o Power BI (Serviço de visualização e análise de dados) para construir visualizações. Os administradores de TI não querem que os usuários instalem o Power BI Desktop em seus computadores, e preferem que o máximo possível de trabalho seja feito no Power BI Service.\n\nVocê precisa recomendar qual ferramenta usar para cada tarefa.\n\nArraste e solte os componentes apropriados conforme a necessidade.",
    "itens": [
      { "label": "Power BI Service only (Serviço de visualização e análise de dados)" },
      { "label": "Power BI Desktop only" },
      { "label": "Power BI Desktop ou Power BI Service" }
    ],
    "grupos": [
      "Cria Painéis (dashboards)",
      "Cria relatórios",
      "Cria colunas calculadas",
      "Configura segurança",
      "Configura compartilhamento"
    ],
    "respostas": {
      "Cria Painéis (dashboards)": ["Power BI Service only (Serviço de visualização e análise de dados)"],
      "Cria relatórios": ["Power BI Desktop ou Power BI Service"],
      "Cria colunas calculadas": ["Power BI Desktop only"],
      "Configura segurança": ["Power BI Desktop ou Power BI Service"],
      "Configura compartilhamento": ["Power BI Service only (Serviço de visualização e análise de dados)"]
    },
    "explicacao": "Dashboards são exclusivos do Power BI Service. A criação de colunas calculadas só está disponível no Power BI Desktop. Relatórios e configurações de segurança podem ser feitas em ambas as ferramentas. O compartilhamento é feito apenas via Power BI Service.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-service-vs-desktop",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa cria um relatório do Power BI para que fornecedores visualizem pedidos de compra. Os fornecedores devem acessar o relatório usando seu próprio ambiente (tenant). Você precisa usar uma tecnologia do Power BI que permita aos fornecedores visualizarem esse relatório. O que você deve usar?",
    "opcoes": [
      "Painel (dashboard)",
      "Aplicativo móvel (mobile app)",
      "Aplicativo de modelo (template app)",
      "Espaço de trabalho (workspace)"
    ],
    "resposta": 2,
    "explicacao": "O Aplicativo de Modelo (Template App) permite que parceiros do Power BI criem e compartilhem aplicativos prontos com relatórios, dashboards e conjuntos de dados. Ele pode ser instalado por outros locatários (tenants) com pouca ou nenhuma configuração, o que o torna ideal para compartilhamento entre organizações diferentes.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/service-template-apps-overview",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você cria e compartilha dois painéis do Power BI com um contador. Você configura os painéis para atualização diária. O DashboardA exibe um cadeado quando o contador tenta visualizar o painel. O DashboardB exibe dados desatualizados.\n\nVocê precisa identificar os problemas nos painéis.\n\nArraste os problemas para os painéis corretos. Cada problema pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Permissões no conjunto de dados (Permissions on dataset)" },
      { "label": "A atualização não foi executada (Refresh has not run)" },
      { "label": "Conjuntos de dados incorretos importados (Incorrect datasets imported)" }
    ],
    "grupos": [
      "DashboardA",
      "DashboardB"
    ],
    "respostas": {
      "DashboardA": ["Permissões no conjunto de dados (Permissions on dataset)"],
      "DashboardB": ["A atualização não foi executada (Refresh has not run)"]
    },
    "explicacao": "Se um painel exibe um cadeado, isso indica que o usuário não tem permissão para acessar o conjunto de dados subjacente. Se os dados exibidos estiverem desatualizados, é provável que a atualização agendada do conjunto de dados não tenha sido executada corretamente.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/refresh-data",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre funcionalidades do Power BI (Serviço de visualização e análise de dados):",
    "afirmacoes": [
      "Você pode se conectar a recursos externos com o Power BI Desktop (Ferramenta local para criação e modelagem de relatórios), mas não com o Power BI Service (Plataforma online de visualização).",
      "Você pode criar e editar relatórios do Power BI usando tanto o Power BI Desktop quanto o Power BI Service.",
      "A única forma de distribuir um relatório criado no Power BI Desktop é enviando o arquivo PBIX (Formato de relatório local) para outras pessoas."
    ],
    "respostas": [false, true, false],
    "explicacao": "A primeira afirmação está incorreta, pois o Power BI Service também permite conexão com várias fontes externas por meio de gateways e conectores. A segunda está correta: é possível criar e editar relatórios em ambas as plataformas, embora o Power BI Desktop ofereça recursos mais avançados. A terceira afirmação está incorreta, pois relatórios do Power BI Desktop podem ser publicados no Power BI Service e compartilhados com outros usuários diretamente pela nuvem, sem necessidade de envio de arquivos PBIX.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo uma solução da Microsoft Power Platform. A solução utiliza dados armazenados no Microsoft Excel, em um banco de dados Microsoft Dataverse e em um banco de dados Azure SQL. \n\nVocê deve criar vários visuais para exibir os dados em uma tela sem mover os dados de seu local de origem.\n\nQual ferramenta você deve usar?",
    "opcoes": [
      "Power Automate",
      "Pacote inicial do Centro de Excelência da Power Platform",
      "Chatbots do Power Virtual Agents",
      "Power BI"
    ],
    "resposta": 3,
    "explicacao": "O Power BI é uma ferramenta de inteligência de negócios e visualização de dados que permite conectar-se a várias fontes de dados, incluindo Microsoft Excel, Microsoft Dataverse e bancos de dados Azure SQL. Ele permite criar relatórios e dashboards interativos e visualmente atraentes sem precisar mover os dados de seu local de origem. Power Automate, o Pacote inicial do Centro de Excelência da Power Platform e o Power Virtual Agents são ferramentas diferentes que não foram especificamente projetadas para criar visualizações de dados como o Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/power-bi-overview",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar o Power BI. A empresa deseja implementar alguns recursos específicos que o Power BI não inclui. Você precisa recomendar soluções para a empresa. O que você deve recomendar?",
    "itens": [
      { "label": "Microsoft Fonte de Aplicativos (AppSource)" },
      { "label": "Microsoft Serviços de Ciclo de Vida (Lifecycle Services)" },
      { "label": "Microsoft Azure Mercado  (Marketplace)" }
    ],
    "grupos": [
      "Avaliar soluções que atendam às lacunas atuais nos recursos do Power BI.",
      "Avaliar os serviços de várias empresas para identificar um parceiro que possa ajudar na construção de uma solução de prova de conceito."
    ],
    "respostas": {
      "Avaliar soluções que atendam às lacunas atuais nos recursos do Power BI.": ["Microsoft Fonte de Aplicativos (AppSource)"],
      "Avaliar os serviços de várias empresas para identificar um parceiro que possa ajudar na construção de uma solução de prova de conceito.": ["Microsoft Serviços de Ciclo de Vida (Lifecycle Services)"]
    },
    "explicacao": "Microsoft Fonte de Aplicativos (AppSource) é usado para avaliar soluções que abordam lacunas nos recursos atuais do Power BI. Microsoft Serviços de Ciclo de Vida (Lifecycle Services) ajuda na avaliação de serviços de empresas para desenvolver provas de conceito.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você está projetando dashboards e relatórios no Power BI para analisar os dados financeiros de uma empresa. É necessário garantir que os dashboards exibam apenas os dados necessários. Quais são duas formas possíveis de atingir esse objetivo?",
    "opcoes": [
      "Criar agregações",
      "Importar dados para o Microsoft Dataverse",
      "Compartilhar dashboards",
      "Criar colunas calculadas"
    ],
    "respostas": [0, 3],
    "explicacao": "Criar agregações permite reduzir o volume de dados processados, melhorando o desempenho dos relatórios e garantindo que apenas os dados necessários sejam analisados. Criar colunas calculadas também é útil para restringir e estruturar os dados exibidos nos dashboards. Importar para o Microsoft Dataverse e compartilhar dashboards não são métodos eficazes para limitar os dados exibidos.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-aggregations",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja usar o Power BI para visualizar dados. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Power BI permite que os usuários criem e consumam visualizações em uma única exibição usando dados de várias fontes diferentes.",
      "A Power Platform utiliza bancos de dados do Microsoft SQL Server para armazenar e gerenciar com segurança os dados usados por aplicativos empresariais."
    ],
    "respostas": [true, false],
    "explicacao": "O Power BI é capaz de consolidar dados de diversas fontes para criar visualizações integradas. No entanto, a Power Platform não utiliza exclusivamente bancos de dados do SQL Server — ela depende principalmente do Microsoft Dataverse como repositório de dados padrão.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa um aplicativo orientado por modelos para registrar as preferências alimentares dos clientes.\n\nVocê precisa alterar a ordem das colunas em uma visualização pessoal que foi criada na tabela de Contatos.\n\nOnde você deve alterar a ordem?",
    "opcoes": [
      "Power Apps Studio",
      "Designer de aplicativo",
      "Aplicativo orientado por modelos",
      "Centro de administração do Microsoft Power Platform"
    ],
    "resposta": 1,
    "explicacao": "A visualização pode ser modificada usando o designer de aplicativo (App designer) ou o designer de tabelas, onde é possível reorganizar colunas e campos exibidos para visualizações personalizadas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-edit-views-app-designer",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa implementa o Microsoft Power Apps na plataforma Microsoft Power Platform. Os membros da equipe de vendas devem tirar fotos dos recibos de despesas de viagem e inserir informações básicas sobre as compras. A equipe de contabilidade deve ser capaz de visualizar e atualizar registros em um documento do Microsoft Excel compartilhado em dispositivos móveis.\n\nVocê precisa selecionar o tipo de aplicativo Power Apps para cada cenário.",
    "itens": [
      { "label": "Aplicativo de tela" },
      { "label": "Aplicativo orientado por modelo" }
    ],
    "grupos": [
      "Equipe de vendas",
      "Equipe de contabilidade"
    ],
    "respostas": {
      "Equipe de vendas": ["Aplicativo orientado por modelo"],
      "Equipe de contabilidade": ["Aplicativo de tela"]
    },
    "explicacao": "O aplicativo orientado por modelo é mais adequado para cenários baseados em processos, como os da equipe de vendas que precisa capturar dados estruturados. Já o aplicativo de tela é ideal para personalizações e interações com fontes de dados como arquivos do Excel, como exigido pela equipe de contabilidade.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você cria um site Power Pages para compartilhar dados do Microsoft Dataverse com clientes externos.\n\nOs clientes devem estar autenticados para visualizar os dados.\n\nVocê precisa configurar o Power Pages.\n\nQual componente você deve usar para cada requisito?",
    "itens": [
      { "label": "Formulário" },
      { "label": "IFrame" },
      { "label": "Lista" },
      { "label": "Seção" }
    ],
    "grupos": [
      "Coletar dados dos clientes e armazenar os dados em uma tabela.",
      "Exibir várias linhas de uma tabela."
    ],
    "respostas": {
      "Coletar dados dos clientes e armazenar os dados em uma tabela.": ["Formulário"],
      "Exibir várias linhas de uma tabela.": ["Lista"]
    },
    "explicacao": "O componente 'Formulário' é utilizado para capturar dados dos usuários e gravá-los no Dataverse. O componente 'Lista' é usado para exibir diversas linhas de dados provenientes de uma tabela do Dataverse em uma página do Power Pages.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/configure/component-framework",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está considerando usar o Criador de IA para obter insights sobre seus dados. Você precisa determinar se os casos de uso do Criador de IA atendem aos requisitos da empresa. Quais são três casos de uso do Criador de IA? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Previsão",
      "Detecção de objetos",
      "Detecção de anomalias",
      "Compreensão de linguagem conversacional",
      "Classificação de categorias"
    ],
    "respostas": [0, 1, 4],
    "explicacao": "Os principais casos de uso do Criador de IA incluem Previsão, Detecção de objetos e Classificação de categorias. Esses recursos permitem criar modelos personalizados para análises preditivas, reconhecimento de imagens e organização de dados com base em categorias.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/model-types",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa utiliza o Power BI e deseja usar os Insights da IA para tomar decisões baseadas em dados. Você precisa selecionar o tipo de insight apropriado para cada requisito abaixo.",
    "itens": [
      { "label": "Anomalias" },
      { "label": "Análise de Indicador de Desempenho (KPI)" },
      { "label": "Tendências" }
    ],
    "grupos": [
      "Avalia o valor atual em relação a um alvo definido",
      "Identifica dados que estão fora do limite de valores normalmente esperados",
      "Encontra padrões em dados de séries temporais"
    ],
    "respostas": {
      "Avalia o valor atual em relação a um alvo definido": ["Análise de Indicador de Desempenho (KPI)"],
      "Identifica dados que estão fora do limite de valores normalmente esperados": ["Anomalias"],
      "Encontra padrões em dados de séries temporais": ["Tendências"]
    },
    "explicacao": "A Análise de Indicador de Desempenho (KPI) compara valores atuais a metas definidas; Anomalias identifica dados que fogem dos limites esperados; e Tendências detecta padrões em séries temporais.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/introduction-power-bi/",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo canvas para permitir que os usuários registrem suas despesas. O aplicativo também deve oferecer suporte a leitores de tela para usuários com deficiência visual. Você tem os seguintes requisitos: usar uma ferramenta que identifique possíveis problemas; usar uma ferramenta que forneça sugestões para modificar o aplicativo. Qual ferramenta você deve usar?",
    "opcoes": [
      "Verificador de fluxo",
      "Centro de Confiabilidade da Microsoft",
      "Centro de administração da Microsoft Power Platform",
      "Verificador de acessibilidade"
    ],
    "resposta": 3,
    "explicacao": "O Verificador de acessibilidade analisa o aplicativo canvas em busca de problemas de acessibilidade e fornece recomendações para corrigi-los, garantindo suporte efetivo a leitores de tela para usuários com deficiência visual.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/accessibility-checker",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você analisa um relatório do Power BI sobre os dados de vendas de uma empresa. Você abre uma notificação de insight e observa que uma das lojas da empresa apresenta valor de vendas maior que a meta do trimestre anterior. Você precisa identificar qual insight é exibido na notificação. Qual insight é usado?",
    "opcoes": [
      "Análise de indicador de desempenho (KPI)",
      "Anomalia significativa",
      "Reversão de tendência",
      "Tendência recente"
    ],
    "resposta": 1,
    "explicacao": "Uma anomalia significativa destaca mudanças inesperadas ou incomuns nos dados, como um desvio em relação a padrões estabelecidos, que pode exigir investigação adicional.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/insights",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um site do Power Pages para uma empresa. Você criou as páginas e aplicou a identidade visual ao site. Agora, é necessário tornar o site visível na internet. Qual ferramenta você deve usar?",
    "opcoes": [
      "Design Studio",
      "Visual Studio Code",
      "Aplicativo de gerenciamento de portal",
      "Portal de criação do Power Automate"
    ],
    "resposta": 2,
    "explicacao": "O Aplicativo de gerenciamento de portal é usado para configurar e gerenciar as configurações de visibilidade e publicação do Power Pages (antigo Power Apps Portals), permitindo ajustar as definições para que o site fique acessível a usuários externos.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/configure/portal-management-app",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-3"
  }

];