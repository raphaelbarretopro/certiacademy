// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "comboboxs",
    "texto": "Sua empresa deseja criar um sistema de atendimento ao cliente utilizando o Dynamics 365 Customer Service. A empresa possui os seguintes requisitos: - Fornecer um aplicativo para permitir que a equipe de suporte converse ao vivo com um cliente; - Importar automaticamente dados de uma planilha do Microsoft Excel uma vez por dia; - Fornecer um chatbot que possa ajudar clientes que precisam de suporte. Associe cada necessidade à ferramenta mais adequada da Power Platform.",
    "pares": [
      {
        "requisito": "Importar automaticamente dados de uma planilha do Microsoft Excel uma vez por dia.",
        "opcoes": [
          "Conector Personalizado",
          "Lago de Dados (Azure Data Lake)",
          "Automatização de energia (Power Automate)",
          "Power BI"
        ],
        "resposta": 2
      },
      {
        "requisito": "Fornecer um chatbot que possa ajudar clientes que precisam de suporte.",
        "opcoes": [
          "Agentes Virtuais Poderosos (Power Virtual Agents)",
          "Automatização de energia (Power Automate)"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Para importar dados automaticamente de uma planilha do Excel, o Power Automate permite agendar fluxos de trabalho recorrentes. Já para oferecer suporte automatizado aos clientes por meio de conversas, o Power Virtual Agents é a ferramenta ideal, permitindo criar chatbots sem necessidade de programação.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "multipla",
    "texto": "Você sobrescreveu um fluxo do Power Automate editando a definição e salvando as alterações. Agora, precisa conseguir reverter o fluxo ao estado anterior. Quais duas opções você pode usar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Exportar",
      "Renomear",
      "Salvar como",
      "Compartilhar"
    ],
    "respostas": [0, 2],
    "explicacao": "Exportar: você pode exportar um fluxo como um pacote e importá-lo para outro ambiente ou usá-lo para restaurar o mesmo fluxo em um ambiente posteriormente.\nSalvar como: permite criar uma cópia de um fluxo existente, útil quando você deseja manter um rascunho ou criar variações do fluxo original.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um fluxo criado no Power Automate que envia automaticamente um e-mail ao gerente de projetos quando membros da equipe marcam uma tarefa como concluída. No entanto, os membros da equipe estão marcando tarefas como concluídas antes do tempo. Os líderes de projeto precisam validar se as tarefas realmente foram concluídas antes que o e-mail seja enviado. Você precisa modificar o fluxo. Qual componente você deve usar?",
    "opcoes": [
      "Um argumento de processo",
      "Uma condição",
      "Uma expressão",
      "Um gatilho",
      "Uma solução"
    ],
    "resposta": 1,
    "explicacao": "Você deve usar uma condição para verificar se a tarefa realmente está concluída antes de enviar o e-mail. A ação de envio deve ser executada somente se a condição for atendida.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/add-condition",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza o Power Automate. Quais três itens podem acionar fluxos? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Serviços de ciclo de vida (Lifecycle Services)",
      "Microsoft 365 Centro de Administração",
      "Serviço de Dados Comuns (Common Data Service)",
      "Microsoft Perspectiva (Outlook) 365",
      "Microsoft Windows Desktop"
    ],
    "respostas": [0, 2, 3],
    "explicacao": "Os fluxos do Power Automate podem ser acionados por eventos em serviços como Lifecycle Services, Common Data Service (Dataverse) e Microsoft Outlook 365. Esses serviços possuem conectores ou APIs compatíveis com gatilhos de fluxo. O Microsoft 365 Centro de Administração e o Windows Desktop não são usados diretamente como gatilhos de fluxo.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa de software planeja usar o Power Automate. Avalie as afirmações a seguir:",
    "afirmacoes": [
      "Você deve certificar conectores personalizados antes que usuários de outros departamentos dentro da sua organização possam usá-los.",
      "Você deve usar aplicativos da API do Microsoft Azure para criar um conector personalizado público."
    ],
    "respostas": [false, false],
    "explicacao": "Afirmação 01 - Não. Conectores personalizados podem ser compartilhados dentro da organização sem necessidade de certificação formal. A certificação é necessária apenas se você quiser disponibilizá-los para todos os usuários do Power Platform como conectores oficiais.\n\nAfirmação 02 - Não. Aplicativos da API do Microsoft Azure não são obrigatórios para criar conectores personalizados públicos; você pode criá-los diretamente no Power Platform com especificações OpenAPI, Postman collections ou definições SOAP.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está usando o Power Automate para automatizar processos de negócios. Você precisa executar um fluxo quando um usuário pressionar um botão em um aplicativo. Qual tipo de gatilho você deve recomendar?",
    "opcoes": [
      "Power Apps",
      "Para uma linha selecionada",
      "Acionamento manual de um fluxo"
    ],
    "resposta": 2,
    "explicacao": "O gatilho 'Acionar manualmente um fluxo' é utilizado quando se deseja executar um fluxo por meio de uma interação manual do usuário, como pressionar um botão em um aplicativo. Esse tipo de gatilho é ideal para cenários onde o usuário precisa ter controle sobre quando o fluxo será iniciado.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza um processo manual para gerenciar escalonamentos de chamadas de suporte ao cliente. Você deve usar o Power Automate para automatizar o processo de encaminhamento dessas chamadas. Qual tipo de conector você deve utilizar?",
    "opcoes": [
      "Microsoft Excel",
      "Microsoft Dataverse",
      "Usuários do Office 365"
    ],
    "resposta": 2,
    "explicacao": "O conector 'Usuários do Office 365' permite recuperar informações de perfil de usuário, como endereço de e-mail, gerente e outros dados úteis para automações relacionadas a escalonamento de chamados e encaminhamentos.",
    "link": "https://learn.microsoft.com/pt-br/connectors/office365users/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um fluxo no Power Automate. O fluxo deve ler cada item de uma lista do Microsoft SharePoint que detalha oportunidades de vendas e definir o valor do campo chamado 'Status' como 'Atrasado', caso o valor de um campo chamado  'Acomannhar' ('Follow up') seja menor ou igual à data atual. Você precisa selecionar o componente apropriado para percorrer toda a lista. Qual componente você deve utilizar?",
    "opcoes": [
      "Condição",
      "Conector",
      "Ação",
      "Gatilho"
    ],
    "resposta": 2,
    "explicacao": "Para percorrer todos os itens de uma lista, é necessário usar uma ação de repetição, como 'Apply to each', que permite processar todos os registros. Condições são utilizadas para lógica condicional, e conectores ou gatilhos não percorrem listas por si só.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/apply-to-each",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um fluxo de aprovação no Power Automate.",
    "afirmacoes": [
      "A adição de um relatório de despesas a uma pasta do Microsoft OneDrive (Uma unidade) pode iniciar um fluxo de aprovação.",
      "As aprovações devem seguir uma ordem sequencial obrigatória."
    ],
    "respostas": [true, false],
    "explicacao": "Afirmação 01 - Sim. A adição de arquivos em pastas do OneDrive pode ser usada como gatilho para iniciar fluxos de aprovação no Power Automate.\nAfirmação 02 - Não. As aprovações não precisam seguir exclusivamente uma ordem sequencial. O Power Automate permite aprovações paralelas, integradas ou unânimes.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/modern-approvals",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Power Automate. Cada vez que uma ordem de serviço é criada, um gerente de serviço deve revisar e aprovar a ordem antes que um trabalhador seja designado. Você precisa criar um fluxo para aplicar esse processo. O que você deve criar?",
    "opcoes": [
      "Plug-in",
      "Fluxo de aprovação",
      "Regra de negócio",
      "Fluxo de equipe",
      "Fluxo agendado"
    ],
    "resposta": 1,
    "explicacao": "O fluxo de aprovação do Power Automate permite gerenciar a aprovação de documentos ou processos em serviços como SharePoint, Dynamics 365, Salesforce, OneDrive for Business e outros. Nesse caso, ele garante que a ordem de serviço seja aprovada antes da designação do trabalhador.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/modern-approvals",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você utiliza o Power Automate para monitorar o que as pessoas estão dizendo sobre os produtos da sua empresa. Você armazena o feedback para fins de pesquisa e desenvolvimento. Você precisa recomendar os componentes apropriados do Power Automate para usar na solução. Para responder, arraste os componentes para os requisitos corretos.",
    "itens": [
      { "label": "Ação" },
      { "label": "Expressão" },
      { "label": "Serviço" },
      { "label": "Gatilho" }
    ],
    "grupos": [
      "Recupera as cinco postagens principais da página do Facebook da empresa.",
      "Inseri as postagens resultantes no banco de dados do produto.",
      "Combina os campos de autor e link em um único campo.",
      "Executa o fluxo a cada hora."
    ],
    "respostas": {
      "Recupera as cinco postagens principais da página do Facebook da empresa.": ["Ação"],
      "Inseri as postagens resultantes no banco de dados do produto.": ["Ação"],
      "Combina os campos de autor e link em um único campo.": ["Expressão"],
      "Executa o fluxo a cada hora.": ["Gatilho"]
    },
    "explicacao": "No Power Automate, ações são usadas para executar tarefas como obter ou inserir dados. Expressões são utilizadas para transformar valores dentro do fluxo, como concatenar strings. Gatilhos iniciam a execução de fluxos com base em eventos ou em uma programação definida.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Você está começando a trabalhar com o Microsoft Flow. Você cria um fluxo que extrai datas de nascimento dos usuários e, em seguida, envia um e-mail de felicitações no dia do aniversário. O fluxo não extrai corretamente as datas de nascimento. Onde você deve fazer as alterações?",
    "opcoes": [
      "Conectores",
      "Expressão",
      "Modelos"
    ],
    "resposta": 1,
    "explicacao": "Expressões são utilizadas para manipular dados dentro do fluxo, como concatenar duas strings, extrair partes de uma data ou realizar operações matemáticas. Neste caso, o erro na extração de datas de nascimento provavelmente está relacionado a uma expressão incorreta. Conectores servem para conectar-se a serviços externos, e modelos são usados para acelerar a criação de fluxos com estruturas pré-definidas.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/use-expressions-in-conditions?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja usar o Power Automate para automatizar tarefas. Relacione cada tipo de fluxo à sua descrição correspondente. Para responder, arraste o tipo de fluxo apropriado da coluna da esquerda para sua descrição à direita. Cada opção pode ser usada uma vez, mais de uma vez ou não ser usada.",
    "itens": [
      { "label": "Automatizado" },
      { "label": "Processo de negócios" },
      { "label": "Agendado" },
      { "label": "Instantâneo" }
    ],
    "grupos": [
      "Um fluxo que é executado após ser acionado por um evento",
      "Um fluxo que orienta o usuário por meio de um conjunto de tarefas",
      "Um fluxo que é executado após um número especificado de dias",
      "Um fluxo que permite iniciar tarefas sob demanda"
    ],
    "respostas": {
      "Um fluxo que é executado após ser acionado por um evento": ["Automatizado"],
      "Um fluxo que orienta o usuário por meio de um conjunto de tarefas": ["Processo de negócios"],
      "Um fluxo que é executado após um número especificado de dias": ["Agendado"],
      "Um fluxo que permite iniciar tarefas sob demanda": ["Instantâneo"]
    },
    "explicacao": "Os fluxos do Power Automate podem ser iniciados de formas distintas: os automatizados são acionados por eventos como e-mails; os de processo de negócios guiam o usuário em etapas definidas; os agendados ocorrem em intervalos fixos; e os instantâneos são iniciados manualmente, como por um botão no aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja usar o Power Automate para automatizar tarefas. Relacione cada tipo de fluxo à sua descrição correspondente. Para responder, arraste o tipo de fluxo apropriado da coluna da esquerda para sua descrição à direita. Cada opção pode ser usada uma vez, mais de uma vez ou não ser usada.",
    "itens": [
      { "label": "Automatizado" },
      { "label": "Processo de negócios" },
      { "label": "Agendado" },
      { "label": "Instantâneo" }
    ],
    "grupos": [
      "Um fluxo que é executado após ser acionado por um evento",
      "Um fluxo que orienta o usuário por meio de um conjunto de tarefas",
      "Um fluxo que é executado após um número especificado de dias",
      "Um fluxo que permite iniciar tarefas sob demanda"
    ],
    "respostas": {
      "Um fluxo que é executado após ser acionado por um evento": ["Automatizado"],
      "Um fluxo que orienta o usuário por meio de um conjunto de tarefas": ["Processo de negócios"],
      "Um fluxo que é executado após um número especificado de dias": ["Agendado"],
      "Um fluxo que permite iniciar tarefas sob demanda": ["Instantâneo"]
    },
    "explicacao": "Os fluxos do Power Automate podem ser iniciados de formas distintas: os automatizados são acionados por eventos como e-mails; os de processo de negócios guiam o usuário em etapas definidas; os agendados ocorrem em intervalos fixos; e os instantâneos são iniciados manualmente, como por um botão no aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja sincronizar dados entre o Gerenciamento da cadeia de suprimentos do Dynamics 365 (Dynamics 365 Supply Chain Management) e o Dynamics 365 Vendas. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode implementar uma integração baseada em processos usando o recurso de Integração de Dados.",
      "Você pode usar a Migração de Dados do Microsoft Azure para sincronizar dados entre os aplicativos."
    ],
    "respostas": [true, false],
    "explicacao": "O recurso de Integração de Dados permite configurar fluxos de dados entre aplicativos do Dynamics 365 com base em processos. Já o Microsoft Azure Data Migration é voltado para migração única de dados, e não para sincronização contínua entre sistemas.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/data-integrator",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa possui um site. O site inclui um formulário que permite à empresa coletar informações sobre leads. É necessário configurar um fluxo automatizado para criar leads no Dynamics 365 Sales quando leads forem criados no site personalizado da empresa. O que você deve criar?",
    "opcoes": [
      "Fluxo de tarefa (Task Flow)",
      "Fluxo do Power Automate",
      "Fluxo de trabalho do Dynamics 365",
      "Fluxo de Processo de Negócio"
    ],
    "resposta": 1,
    "explicacao": "O fluxo do Power Automate permite automatizar processos entre diferentes serviços, incluindo a criação de registros no Dynamics 365 Sales quando eventos ocorrem em um site, como o envio de um formulário.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/get-started-logic-flow",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa constrói e vende apartamentos residenciais. A empresa usa o Dynamics 365 Sales para gerenciar oportunidades de vendas. A gerência precisa receber notificações em seus dispositivos móveis quando novas oportunidades forem criadas. Você deve recomendar os componentes apropriados da Microsoft Power Platform para acionar o processo de notificação. Quais dois componentes você deve recomendar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Construtor IA (AI Builder)",
      "Power Automate",
      "Conector do Microsoft Dataverse",
      "Power BI"
    ],
    "respostas": [1, 2],
    "explicacao": "O Power Automate é usado para criar fluxos automatizados, como envio de notificações. O conector do Microsoft Dataverse permite interações com os dados armazenados no Dynamics 365, como detectar quando uma nova oportunidade de venda é criada.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/dataverse/overview",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa usa Microsoft 365, SharePoint Online e Dynamics 365 Sales. Você precisa recomendar ferramentas para construir uma solução que atenda aos seguintes requisitos:\n\n- Sincronizar dados diariamente de uma instância externa do Microsoft SQL Server.\n- Enviar um relatório automaticamente para executivos da empresa.\n- Garantir que oportunidades acima de um determinado valor sejam aprovadas por um gerente de vendas.\n\nQuais duas ferramentas ou componentes você deve recomendar? Cada resposta correta representa parte da solução.",
    "opcoes": [
      "Microsoft Excel",
      "Microsoft Word",
      "Power BI",
      "Microsoft Dataverse",
      "Power Automate"
    ],
    "respostas": [2, 4],
    "explicacao": "O Power BI pode se conectar a fontes de dados externas como SQL Server para gerar relatórios automatizados. O Power Automate pode ser usado para criar fluxos que executam ações como aprovação de oportunidades de vendas e envio automático de relatórios.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/release-plan/2023wave2/power-automate/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "simnao",
    "texto": "Você planeja enviar uma notificação por e-mail para um usuário quando um novo arquivo for colocado em uma pasta específica no OneDrive for Business. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar um fluxo sem escrever uma única linha de código e implantar o fluxo em um ambiente de produção.",
      "Você pode adicionar ações adicionais aos modelos internos do Power Automate.",
      "Você pode visualizar o código que implementa ações e gatilhos de fluxo de trabalho sem instalar software adicional."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Power Automate permite criar fluxos sem codificação, utilizar e personalizar modelos internos com ações adicionais e visualizar a lógica do fluxo sem a necessidade de instalar software extra. Isso oferece flexibilidade para automatizar tarefas e processos com facilidade.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/get-started-logic-flow",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Sales. Sempre que uma oportunidade é criada, um fluxo do Power Automate é executado para enviar um e-mail ao gerente de vendas. O gerente de vendas deixa a empresa, e você desativa todas as contas associadas a ele. É necessário garantir que o novo gerente de vendas receba automaticamente e-mails sobre oportunidades quando forem criadas. O que você deve fazer?",
    "opcoes": [
      "Modificar o fluxo e garantir que o e-mail do novo gerente esteja listado no campo De.",
      "Modificar o fluxo e garantir que o e-mail do novo gerente esteja listado no campo Para.",
      "Conceder ao novo gerente de vendas acesso à caixa de entrada do gerente anterior.",
      "Modificar o fluxo para solicitar ao usuário que insira o e-mail correto no campo Para.",
      "Criar um fluxo que encaminhe automaticamente os e-mails de oportunidade para o novo gerente de vendas."
    ],
    "resposta": 1,
    "explicacao": "A ação correta é modificar o fluxo existente para refletir o novo endereço de e-mail no campo Para. Criar um novo fluxo é desnecessário e ineficiente, pois a lógica já está pronta. Basta atualizar os parâmetros existentes para redirecionar corretamente os e-mails ao novo gerente.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa planeja criar um fluxo de trabalho que execute periodicamente ações no Dynamics 365 com base em dados de terceiros em soluções baseadas em nuvem. Associe cada necessidade ao recurso mais adequado do Power Automate.",
    "pares": [
      {
        "requisito": "Garantir que o Power Automate possa interagir com o aplicativo de terceiros.",
        "opcoes": [
          "Gatilhos",
          "Logic Apps",
          "Conectores",
          "Gateways"
        ],
        "resposta": 2
      },
      {
        "requisito": "Verificar periodicamente alterações de dados no aplicativo de terceiros.",
        "opcoes": [
          "Ações",
          "Gatilhos",
          "Conectores",
          "DirectQuery"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Para se comunicar com serviços de terceiros, o Power Automate utiliza conectores, que estabelecem a conexão com os dados e ações externas. Já os gatilhos (triggers) são responsáveis por iniciar fluxos com base em eventos, podendo atuar de forma programada (polling) para checar atualizações em intervalos definidos.",
    "link": "https://learn.microsoft.com/pt-br/connectors/connector-reference/connector-reference-powerautomate-connectors",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre cenários em que você pode usar o Power Automate.",
    "afirmacoes": [
      "Notificar membros da equipe quando uma resposta for registrada em um formulário do Microsoft Forms.",
      "Quando um e-mail for recebido, salvar os anexos do e-mail no OneDrive for Business.",
      "Receber notificações quando comentários negativos sobre a empresa forem publicados no Twitter."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Power Automate pode ser usado para: 1) Enviar notificações automáticas com base em respostas recebidas no Microsoft Forms; 2) Criar fluxos que salvam anexos de e-mails recebidos diretamente no OneDrive for Business; 3) Monitorar redes sociais como o Twitter e gerar notificações com base em palavras-chave, inclusive sentimentos negativos.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/get-started-logic-flow",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Relacione os tipos de fluxo do Power Automate com o requisito correspondente para atender diferentes necessidades de automação de tarefas em um projeto.",
    "itens": [
      { "label": "Automatizado" },
      { "label": "Instantâneo" },
      { "label": "Agendado" },
      { "label": "Fluxo de processo de negócios" }
    ],
    "grupos": [
      "Garanti que todas as etapas para concluir as tarefas sejam consistentemente seguidas por todos os membros da equipe.",
      "Garanti que os usuários possam enviar manualmente um e-mail ao líder do projeto sempre que uma tarefa for concluída.",
      "Envia automaticamente uma lista de tarefas concluídas ao final de cada semana."
    ],
    "respostas": {
      "Garanti que todas as etapas para concluir as tarefas sejam consistentemente seguidas por todos os membros da equipe.": ["Fluxo de processo de negócios"],
      "Garanti que os usuários possam enviar manualmente um e-mail ao líder do projeto sempre que uma tarefa for concluída.": ["Instantâneo"],
      "Envia automaticamente uma lista de tarefas concluídas ao final de cada semana.": ["Agendado"]
    },
    "explicacao": "Fluxo de processo de negócios garante que os usuários sigam etapas consistentes. Fluxos instantâneos são acionados manualmente pelo usuário. Fluxos agendados executam ações recorrentes, como relatórios semanais, sem intervenção.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/flow-types",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está criando vários fluxos do Power Automate e precisa selecionar os gatilhos apropriados para cada tipo de fluxo. Associe cada cenário ao tipo de fluxo correspondente.",
    "pares": [
      {
        "requisito": "Acionar um fluxo quando um botão for selecionado.",
        "opcoes": [
          "Fluxo de interface do usuário (UI Flow)",
          "Automático",
          "Fluxo de processo de negócios",
          "Instantâneo"
        ],
        "resposta": 3
      },
      {
        "requisito": "Acionar um fluxo quando um registro é criado.",
        "opcoes": [
          "Fluxo de interface do usuário (UI Flow)",
          "Automático",
          "Fluxo de processo de negócios",
          "Instantâneo"
        ],
        "resposta": 1
      },
      {
        "requisito": "Guiar um usuário por uma série de etapas em um aplicativo orientado por modelos.",
        "opcoes": [
          "Fluxo de interface do usuário (UI Flow)",
          "Automático",
          "Fluxo de processo de negócios",
          "Instantâneo"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "O fluxo instantâneo é acionado manualmente pelo usuário, como ao clicar em um botão. O fluxo automático é iniciado automaticamente com base em um evento, como a criação de um registro. Já o fluxo de processo de negócios orienta o usuário por etapas dentro de um aplicativo orientado por modelos, assegurando consistência e conformidade no processo.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Relacione cada fonte de dados utilizada no Power Automate com o tipo de componente necessário para extrair os dados corretamente.",
    "itens": [
      { "label": "Conector" },
      { "label": "Expressão" },
      { "label": "Fórmula" }
    ],
    "grupos": [
      "Microsoft Excel",
      "Azure Data Lake",
      "GitHub"
    ],
    "respostas": {
      "Microsoft Excel": ["Conector"],
      "Azure Data Lake": ["Conector"],
      "GitHub": ["Conector"]
    },
    "explicacao": "Todos os serviços citados (Microsoft Excel, Azure Data Lake e GitHub) são integrados ao Power Automate por meio de conectores. Esses conectores permitem importar dados, acionar fluxos ou executar ações diretamente a partir das respectivas plataformas.",
    "link": "https://learn.microsoft.com/pt-br/connectors/connector-reference/connector-reference-powerautomate-connectors",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa está usando o Power Automate para automatizar processos de negócios. Você precisa recomendar os gatilhos apropriados para fluxos instantâneos. Associe cada cenário ao tipo de gatilho correto.",
    "pares": [
      {
        "requisito": "Executar um fluxo quando o usuário pressiona um botão em um aplicativo canvas.",
        "opcoes": [
          "PowerApps",
          "Para uma linha selecionada",
          "Fluxo acionado manualmente",
          "Para uma linha selecionada (OneDrive for Business)"
        ],
        "resposta": 0
      },
      {
        "requisito": "Executar um fluxo quando o usuário pressiona um botão no aplicativo móvel do Power Automate.",
        "opcoes": [
          "PowerApps",
          "Para uma linha selecionada",
          "Fluxo acionado manualmente",
          "Para uma linha selecionada (SharePoint)"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "O gatilho 'PowerApps' permite que um fluxo seja acionado diretamente de um botão dentro de um aplicativo canvas. Já o gatilho 'Fluxo acionado manualmente' é usado para iniciar fluxos a partir do aplicativo móvel do Power Automate ou diretamente pelo portal, permitindo execução sob demanda.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Supply Chain Management. Você precisa usar o Power Automate para automatizar o processo de recebimento e rastreamento de matérias-primas. Qual tipo de conector você deve utilizar?",
    "opcoes": [
      "Serviço de Dados Comum (Common Data Service)",
      "Dynamics 365",
      "Dynamics 365 para Finanças e Operações",
      "Sinal Dinâmico (Dynamic Signal)"
    ],
    "resposta": 0,
    "explicacao": "O Dynamics 365 para Finanças e Operações agora é licenciado como Dynamics 365 Finance e Dynamics 365 Supply Chain Management. Você pode usar o Serviço de Dados Comum para permitir o fluxo de dados entre os aplicativos Dynamics 365 Finance e Dynamics 365 Sales, o que o torna o conector apropriado nesse cenário.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/fin-ops-core/dev-itpro/data-entities/data-integration-cds",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa realiza inspeções e serviços presenciais para equipamentos industriais de ar. Os técnicos de campo devem realizar uma série de verificações de manutenção sempre que visitam um local de cliente. Cada técnico realiza os passos de manutenção em uma ordem diferente. Alguns técnicos pulam etapas. Você precisa garantir que todos os técnicos realizem as mesmas etapas na mesma ordem. O que você deve usar?",
    "opcoes": [
      "Fluxo de processo de negócios",
      "Construtor de IA (AI Builder)",
      "Regra de negócios",
      "Agente Virtual"
    ],
    "resposta": 0,
    "explicacao": "O fluxo de processo de negócios garante que os dados sejam inseridos de forma consistente e que os usuários sigam as mesmas etapas sempre que trabalham com um cliente. Ele permite padronizar o atendimento ao cliente ou exigir aprovações antes de determinadas ações. Apesar de usar tecnologias semelhantes a outros fluxos, ele oferece recursos específicos voltados ao controle de processos.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/business-process-flows-overview",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  },
  {
    "tipo": "multipla",
    "texto": "Você tem um fluxo do Power Automate que salva anexos de e-mails no OneDrive for Business. Você precisa determinar por que o fluxo não está funcionando. Quais são três maneiras possíveis de atingir esse objetivo? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Navegar até o centro de administração do Power Automate e visualizar os projetos.",
      "Navegar até a seção de Itens de Ação no portal do Power Automate.",
      "Ativar as Dicas de Reparo para o fluxo.",
      "Navegar até o fluxo e visualizar o histórico de execuções.",
      "Navegar até o portal web do Power Automate e clicar em visualizar notificações."
    ],
    "respostas": [1, 2, 3],
    "explicacao": "1) A seção de Itens de Ação do Power Automate exibe erros e ações recomendadas para correção de fluxos com falhas. 2) As Dicas de Reparo ajudam a identificar problemas de configuração e oferecem orientações para corrigir o erro. 3) O histórico de execução do fluxo mostra detalhes técnicos dos erros, como códigos 400 ou 404, permitindo a correção ao editar e reenviar o fluxo.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/fix-flow-failures",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-6"
  }


];