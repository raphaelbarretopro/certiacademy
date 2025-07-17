// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [

  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Dataverse para armazenar informações sobre os produtos que ela vende.\n\nA empresa deseja uma interface que permita que os usuários móveis não autenticados acessem essas informações.\n\nVocê precisa recomendar o componente da Microsoft Power Platform que a empresa deve usar para criar a interface.\n\nQual componente você deve recomendar?",
    "opcoes": [
      "Aplicativo baseado em modelo",
      "Site do Power Pages",
      "Aplicativo de tela"
    ],
    "resposta": 1,
    "explicacao": "Power Pages (anteriormente Power Apps portals) é o componente da Microsoft Power Platform projetado especificamente para criar sites externos que podem ser acessados por usuários não autenticados (anônimos) ou autenticados. Ele permite que informações armazenadas no Dataverse sejam expostas publicamente ou a usuários externos com controle de segurança granular. .",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa pretende usar o Power Apps para se conectar a uma série de serviços personalizados. Não há conectores disponíveis para esses serviços.\n\nPara cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os conectores personalizados exigem moderação e certificação da Microsoft.",
      "Você pode criar um conector personalizado uma vez e reutilizá-lo no Power Apps e no Power Automate."
    ],
    "respostas": [false, true],
    "explicacao": "Conectores personalizados **não exigem certificação** da Microsoft para uso interno. A certificação só é necessária caso deseje publicá-los no catálogo oficial. Já a reutilização entre Power Apps e Power Automate é totalmente suportada.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/define-blank",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa usa um aplicativo de nuvem desenvolvido pelo departamento de TI. O aplicativo tem uma API disponível publicamente para gerenciar a disponibilidade dos funcionários. Usando o Power Automate, você está criando um fluxo automatizado que envia um email ao gerente de um funcionário quando este for registrado como doente no aplicativo. Você precisa escolher o tipo de conector apropriado para o fluxo. Selecione a resposta que completa a frase corretamente: <combobox>",
    "resposta": 1,
    "opcoes": [
      "Selecione uma resposta",
      "Conector personalizado",
      "Conector premium",
      "Conector padrão"
    ],
    "explicacao": "Conectores personalizados são utilizados quando o fluxo precisa se conectar a serviços com APIs públicas ou privadas que não têm conectores padrão no Power Automate.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/define-blank",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está criando um aplicativo baseado em modelo para que funcionários registrem os dados de clientes.\n\nA empresa exige que os usuários atualizem o status de construção do cliente em tabelas do Dataverse e cada nova criação de cliente se torne um registro de cliente no Dataverse. A tabela de clientes já está conectada ao aplicativo.\n\nVocê precisa configurar o sistema de construção do cliente na tabela de clientes no Dataverse.\n\nO que você deve usar?",
    "opcoes": [
      "Relacionamento",
      "Tabela",
      "Exibição",
      "Fluxo de dados",
      "Coluna"
    ],
    "resposta": 4,
    "explicacao": "Você deve usar uma coluna no Dataverse para configurar o sistema de construção do cliente, pois colunas armazenam e controlam os dados dentro de uma tabela. Relacionamentos, exibições e fluxos de dados não são apropriados para essa finalidade específica.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-edit-field-portal",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa o Microsoft Power Platform para gerenciar tíquetes de suporte. Os clientes enviam solicitações de suporte através de um e-mail para o suporte. Todos os e-mails de alta prioridade devem ser registrados em uma planilha do Microsoft Excel para fins de histórico.\n\nVocê precisa identificar os componentes necessários para atender aos requisitos descritos. Cada componente pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Ação" },
      { "label": "Conector" },
      { "label": "Gatilho" }
    ],
    "grupos": [
      "Iniciar um fluxo de trabalho quando um e-mail for enviado para um endereço de e-mail específico.",
      "Avaliar se um e-mail é de alta prioridade no fluxo usando uma condição.",
      "Criar uma linha no Excel com informações sobre os e-mails de alta prioridade recebidos."
    ],
    "respostas": {
      "Iniciar um fluxo de trabalho quando um e-mail for enviado para um endereço de e-mail específico.": ["Gatilho"],
      "Avaliar se um e-mail é de alta prioridade no fluxo usando uma condição.": ["Ação"],
      "Criar uma linha no Excel com informações sobre os e-mails de alta prioridade recebidos.": ["Conector"]
    },
    "explicacao": "No Power Automate, um gatilho inicia o fluxo com base em eventos como a chegada de um e-mail. Ações permitem integrar com serviços como o Outlook e avaliar condições como prioridade. Conectores são usadas para executar tarefas, como registrar dados no Excel.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Dynamics 365 Supply Chain Management. A empresa deseja criar interfaces de usuário personalizadas que forneçam funcionalidade adicional. Você precisa recomendar uma solução para a empresa. O que você deve recomendar?",
    "opcoes": [
      "Power Automate",
      "Criador de IA",
      "Aplicativos de tela do Power Apps",
      "Power BI"
    ],
    "resposta": 2,
    "explicacao": "Os Aplicativos de tela do Power Apps permitem que as empresas criem interfaces de usuário altamente personalizadas para conectar dados e fornecer funcionalidades adicionais. Eles são ideais para complementar soluções como o Dynamics 365 Supply Chain Management com experiências personalizadas para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "A recepção de um hotel usa um aplicativo baseado em modelo para fazer o check-in dos hóspedes. O hotel quer criar um aplicativo de tela para a equipe de camareiras gerenciar os produtos de limpeza. O aplicativo de tela será conectado a uma nova instância do Microsoft Dataverse. Você precisa criar um ambiente para a equipe de camareiras. O que você deve usar?",
    "opcoes": [
      "Portal do criador do Power Apps",
      "Portal do Microsoft Azure",
      "Centro de administração do Microsoft Power Platform",
      "Centro de administração do Microsoft 365"
    ],
    "resposta": 2,
    "explicacao": "Para criar ambientes no Microsoft Power Platform, é necessário utilizar o Centro de administração do Power Platform. Nele é possível configurar novos ambientes, escolher o tipo de ambiente, habilitar o Microsoft Dataverse e gerenciar permissões para uso de aplicativos por equipes específicas.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/create-environment",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa pretende usar o Power BI para visualizar dados nos sistemas corporativos. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode exibir agrupamentos de dados e dados brutos em um relatório do Power BI.",
      "Você pode exibir dados relacionados de várias fontes no mesmo relatório do Power BI."
    ],
    "respostas": [true, true],
    "explicacao": "O Power BI permite criar relatórios que incluem dados agregados e dados brutos simultaneamente. Além disso, é possível integrar e relacionar dados de múltiplas fontes no mesmo relatório, oferecendo uma visão consolidada e dinâmica.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/desktop-data-sources",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um ambiente do Microsoft Power Platform deve conter um banco de dados do Microsoft Dataverse.",
      "Um aplicativo criado em um ambiente pode se conectar apenas às fontes de dados que são implantadas no mesmo ambiente."
    ],
    "respostas": [false, false],
    "explicacao": "Ambientes no Power Platform podem ser criados com ou sem o Dataverse. Ele é necessário apenas em alguns cenários, como quando se deseja usar funcionalidades específicas como tabelas e relacionamentos. Além disso, os aplicativos podem se conectar a fontes de dados externas, como SQL Server, SharePoint ou Excel, independentemente de estarem no mesmo ambiente.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/create-environment",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você deve usar o Microsoft Power Platform para atender aos seguintes requisitos de negócios no Dynamics 365 Sales. Qual aplicativo você deve usar para cada requisito?",
    "itens": [
      { "label": "Power BI" },
      { "label": "Power Automate" },
      { "label": "Power Portals" }
    ],
    "grupos": [
      "Exibir análise sobre contas",
      "Enviar aprovações automaticamente"
    ],
    "respostas": {
      "Exibir análise sobre contas": ["Power BI"],
      "Enviar aprovações automaticamente": ["Power Automate"]
    },
    "explicacao": "O Power BI é utilizado para exibir visualizações e relatórios interativos com dados de contas e outros elementos do Dynamics 365 Sales. Já o Power Automate permite automatizar processos de aprovação, como envio automático de aprovações para decisões rápidas.",
    "link": "https://learn.microsoft.com/en-us/power-automate/modern-approvals",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você gerencia o suporte de uma empresa que está crescendo rapidamente. O objetivo da equipe é melhorar o envio e o processamento das solicitações de suporte. Qual ferramenta você deve recomendar para cada requisito de negócios?",
    "itens": [
      { "label": "Power Apps" },
      { "label": "Power Automate" },
      { "label": "Power BI" },
      { "label": "Microsoft Dataverse" }
    ],
    "grupos": [
      "Os clientes devem estar aptos a enviar solicitações de suporte usando um aplicativo.",
      "Os dados do cliente devem ser armazenados e sincronizados com o Dynamics 365 Finance.",
      "Os técnicos de suporte devem ser notificados quando uma nova solicitação de suporte for inserida."
    ],
    "respostas": {
      "Os clientes devem estar aptos a enviar solicitações de suporte usando um aplicativo.": ["Power Apps"],
      "Os dados do cliente devem ser armazenados e sincronizados com o Dynamics 365 Finance.": ["Microsoft Dataverse"],
      "Os técnicos de suporte devem ser notificados quando uma nova solicitação de suporte for inserida.": ["Power Automate"]
    },
    "explicacao": "O Power Apps permite que os clientes registrem solicitações de suporte por meio de um aplicativo personalizado. O Microsoft Dataverse serve como plataforma de dados que sincroniza com sistemas como o Dynamics 365 Finance. O Power Automate é usado para notificar automaticamente a equipe de suporte quando novas solicitações forem registradas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/data-platform-intro",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa pretende implementar aplicativos do Microsoft Power Platform. A empresa não pretende usar ferramentas nem plug-ins de desenvolvimento. Quais ações você pode executar? Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode sincronizar informações de conta do Dynamics 365 Sales com um banco de dados de terceiros.",
      "Você pode criar faturas usando ordens de venda e enviar as faturas ao cliente usando um fluxo do Power Automate."
    ],
    "respostas": [true, true],
    "explicacao": "A Power Platform permite integrar o Dynamics 365 Sales a bancos de dados externos usando conectores e fluxos. Além disso, o Power Automate é uma ferramenta eficaz para automatizar processos de negócios, como criação e envio de faturas com base em ordens de venda.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa pretende criar um fluxo de trabalho que execute periodicamente uma ação no Dynamics 365 com base nos dados de soluções baseadas em nuvem de terceiros. Qual componente você deve usar para criar o fluxo de trabalho? Para resposta, selecione os componentes adequados de acordo com a ação. Selecione uma resposta.: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Gatilhos",
      "Aplicativos Lógicos",
      "Conectores",
      "Gateways"
    ],
    "resposta": 4,
    "explicacao": "Para garantir que o Power Automate possa interagir com aplicativos de terceiros, é necessário o uso de um gateway, especialmente quando o serviço está fora da nuvem Microsoft. Já para verificar alterações de forma proativa nos dados, utilizam-se gatilhos, que iniciam automaticamente os fluxos ao detectar essas mudanças.",
    "link": "https://learn.microsoft.com/pt-br/data-integration/gateway/service-gateway-install",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Dynamics 365 Sales. Toda vez que uma oportunidade é criada, um fluxo do Power Automate é executado para enviar a oportunidade por email ao gerente de vendas. O gerente de vendas deixou a empresa. Você desabilitou todas as contas do gerente de vendas. Você precisa garantir que o novo gerente de vendas receba automaticamente o email sobre oportunidades quando elas forem criadas. O que você deve fazer?",
    "opcoes": [
      "Modificar o fluxo e garantir que o email correto do gerente esteja listado no campo Para",
      "Modificar o fluxo e garantir que o fluxo solicite que o usuário digite o email correto no campo Para",
      "Modificar o fluxo e garantir que o email correto do gerente esteja listado no campo De",
      "Criar um fluxo que encaminhe emails de oportunidade automaticamente para o novo gerente de vendas",
      "Conceder ao novo gerente de vendas acesso à caixa de entrada do gerente de vendas antigo"
    ],
    "resposta": 0,
    "explicacao": "A opção mais adequada é modificar o fluxo e garantir que o email correto do gerente esteja listado no campo Para. Isso garante que o processo continue funcionando automaticamente, sem depender de contas inativas ou ações manuais que podem comprometer a continuidade e a segurança da operação.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/email-top-scenarios",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está criando um aplicativo de tela para gerenciar relatórios de status semanais dos usuários sobre projetos. Quando um relatório de status é enviado, o aplicativo deve enviar automaticamente uma confirmação por mensagem de texto. Um lembrete deve ser enviado às 20:00 no domingo para todos que ainda não enviaram um relatório de status da semana anterior. Você precisa identificar os componentes apropriados a serem usados na solução. O que você deve usar? Para responder, arraste os mecanismos de implementação apropriados até a ação correta.",
    "itens": [
      { "label": "Fluxos de processo empresarial" },
      { "label": "Fluxos de nuvem" },
      { "label": "Criador de IA" },
      { "label": "Power BI" }
    ],
    "grupos": [
      "Enviar automaticamente uma mensagem de texto.",
      "Enviar automaticamente um lembrete aos domingos."
    ],
    "respostas": {
      "Enviar automaticamente uma mensagem de texto.": ["Fluxos de nuvem"],
      "Enviar automaticamente um lembrete aos domingos.": ["Fluxos de nuvem"]
    },
    "explicacao": "Os fluxos de nuvem no Power Automate são ideais para automações como envio de mensagens de texto e lembretes baseados em horários definidos. Eles permitem criar gatilhos que executam ações como notificações SMS e emails em horários programados.",
    "link": "https://learn.microsoft.com/bs-latn-ba/power-automate/run-scheduled-tasks?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Power Automate. Toda vez que uma ordem de trabalho é criada, um gerente de serviço deve revisar e aprovar a ordem de trabalho antes que um trabalhador seja despachado. Você precisa criar um fluxo para impor o processo. O que você deve criar?",
    "opcoes": [
      "fluxo de equipe",
      "fluxo de aprovação",
      "fluxo agendado",
      "plug-in",
      "regra de negócios"
    ],
    "resposta": 1,
    "explicacao": "Fluxos de aprovação no Power Automate são usados quando é necessário garantir que uma ação, como o despacho de uma ordem de trabalho, só ocorra após a validação de uma pessoa autorizada, como um gerente. Esse tipo de fluxo é ideal para processos de controle e conformidade.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/modern-approvals",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está criando vários fluxos do Power Automate. Você precisa selecionar os gatilhos para os fluxos. Quais tipos de fluxo você deve usar? Para responder, selecione as opções apropriadas na área de resposta.  Selecione uma resposta.",
    "pares": [
      {
        "requisito": "- Disparar um fluxo quando um botão for selecionado.",
        "opcoes": [
          "Fluxo de Interface do Usuário",
          "Automático",
          "Fluxo do Processo de Negócios",
          "Instantâneo"
        ],
        "resposta": 3
      },
      {
        "requisito": "- Disparar um fluxo quando um registro for criado.",
        "opcoes": [
          "Fluxo de Interface do Usuário",
          "Automático",
          "Fluxo do Processo de Negócios",
          "Instantâneo"
        ],
        "resposta": 1
      },
      {
        "requisito": "- Orientar um usuário por várias etapas em um aplicativo controlado por modelo.",
        "opcoes": [
          "Fluxo de Interface do Usuário",
          "Automático",
          "Fluxo do Processo de Negócios",
          "Instantâneo"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Para criar fluxos de aprovação modernos e integrados, recomenda-se o uso do Microsoft Power Automate, que permite configurar aprovações automatizadas via e-mail ou dispositivos móveis. Já a combinação do Microsoft Dataverse com o Power BI permite conectar e visualizar dados de forma eficaz, inclusive os armazenados no Dynamics 365 Field Service.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/modern-approvals",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa deseja usar um aplicativo baseado em modelo para sua equipe de vendas. O gerente de vendas deseja garantir que cada membro da equipe possa modificar suas próprias exibições sem afetar outras exibições. O gerente de TI deseja garantir que a exibição seja atualizada para todos os usuários. Você precisa identificar o tipo de exibição para o aplicativo baseado em modelo. Qual tipo de exibição você deve recomendar? Para responder, mova os tipos de exibição adequados até os requisitos corretos.",
    "itens": [
      { "label": "pessoal" },
      { "label": "pública" },
      { "label": "sistema" }
    ],
    "grupos": [
      "Gerente de vendas",
      "Gerente de TI"
    ],
    "respostas": {
      "Gerente de vendas": ["pessoal"],
      "Gerente de TI": ["pública"]
    },
    "explicacao": "A exibição pessoal é ideal para permitir que membros da equipe personalizem suas próprias visualizações sem afetar os demais. Já a exibição pública permite que o gerente de TI crie e disponibilize uma visualização compartilhada para todos os usuários, sendo apropriada para uso coletivo sem exigir customizações profundas como ocorre nas exibições do sistema.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa um aplicativo baseado em modelo para registrar as preferências alimentares dos clientes. Você precisa alterar a ordem das colunas em um modo de exibição pessoal que você criou na tabela Contato. Onde você deve alterar a ordem?",
    "opcoes": [
      "Centro de administração do Power Platform",
      "Power Apps Studio",
      "Aplicativo baseado em modelo",
      "Estúdio de design"
    ],
    "resposta": 3,
    "explicacao": "Para modificar a ordem das colunas em uma exibição pessoal, você deve acessar o modo de edição da exibição no estado de design, dentro do Power Apps. O estado de design permite personalizar visualmente as colunas, filtros e ordenações para exibições criadas pelo próprio usuário.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa implementa o Microsoft Power Apps no Microsoft Power Platform. Os membros da equipe de vendas deverão tirar fotos dos recibos de despesas de viagem e inserir informações básicas sobre compras. A equipe de contabilidade deverá ser capaz de editar e atualizar registros em um documento compartilhado do Microsoft Excel em dispositivos móveis. Você precisa selecionar o tipo de aplicativo do Power Apps para cada cenário. Que tipo de aplicativo você deve usar?",
    "itens": [
      { "label": "Aplicativo de tela" },
      { "label": "Aplicativo baseado em modelo" }
    ],
    "grupos": [
      "Equipe de vendas",
      "Equipe de contabilidade"
    ],
    "respostas": {
      "Equipe de vendas": ["Aplicativo de tela"],
      "Equipe de contabilidade": ["Aplicativo baseado em modelo"]
    },
    "explicacao": "Aplicativos de tela oferecem uma experiência personalizada com controle completo sobre o layout, ideais para cenários móveis como captura de recibos de despesas. Aplicativos baseados em modelo são mais adequados para estruturas de dados consistentes, como as exigidas pela equipe de contabilidade ao trabalhar com registros vinculados ao Excel.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa aérea quer usar o Power Apps para gerenciar o balcão de extravio de bagagem. Você precisa determinar se a empresa deve criar um aplicativo de tela ou um aplicativo baseado em modelo. Quais são as três perguntas que você deve fazer para determinar o tipo de aplicativo que a empresa deve usar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Quais usuários ou grupos do Microsoft Entra ID usarão o aplicativo?",
      "Os criadores de aplicativos terão habilidades de codificação?",
      "Quais fontes de dados serão usadas?",
      "O aplicativo será usado com dispositivos móveis ou tablets?",
      "O aplicativo precisa usar um layout específico?"
    ],
    "respostas": [2, 3, 4],
    "explicacao": "Para escolher entre um aplicativo de tela ou baseado em modelo, é fundamental considerar quais fontes de dados estarão envolvidas, se o uso será em dispositivos móveis (cenário ideal para aplicativos de tela) e se o aplicativo precisa de um layout personalizado (possível apenas em aplicativos de tela).",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa cria aplicativos de tela que usam uma fonte de dados da sua equipe de vendas. Para atender às políticas de dispositivos da empresa, você deve determinar os formatos de aplicativo disponíveis que a equipe de vendas pode selecionar quando clicar na tela. Quais são os dois formatos de aplicativo que você deve selecionar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Android",
      "Desktop",
      "iOS",
      "Celular",
      "Tablet"
    ],
    "respostas": [3, 4],
    "explicacao": "Aplicativos de tela no Power Apps são comumente utilizados em dispositivos móveis, como celulares e tablets, permitindo que os usuários interajam com os dados de forma intuitiva e responsiva durante o trabalho em campo.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/mobile/run-powerapps-on-mobile",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está passando por uma transformação digital graças ao uso do Microsoft Power Platform.<br><br>Os departamentos da empresa têm os seguintes requisitos:<br><br><table border='1' cellpadding='5' cellspacing='0'><tr><th>Departamento</th><th>Requisito</th></tr><tr><td>Serviço de atendimento ao consumidor</td><td>Permitir que os clientes sem licenças do Microsoft Power Platform, por iniciativa própria, criem uma conta e registrem requisições de serviço de atendimento ao consumidor.</td></tr><tr><td>Instalações</td><td>Permitir que os técnicos tirem fotos do equipamento do depósito com seus dispositivos móveis e registrem detalhes do equipamento, incluindo o número de série.</td></tr><tr><td>Financeiro</td><td>Comparar, em paralelo, no sistema financeiro, os detalhes das faturas recebidas em uma caixa de correio corporativa.</td></tr><tr><td>Marketing</td><td>Criar uma lista de palavras-chave e frases-chave usadas pelos clientes que fizeram comentários.</td></tr></table><br><br>Você precisa determinar qual departamento pode usar um aplicativo de tela para atender ao respectivo requisito.<br><br>Para qual departamento você deve desenvolver um aplicativo de tela?",
    "opcoes": [
      "Financeiro",
      "Serviço de atendimento ao consumidor",
      "Marketing",
      "Instalações"
    ],
    "resposta": 3,
    "explicacao": "Aplicativos de tela são ideais para situações em que os usuários precisam capturar dados visuais ou interagir diretamente com a interface do aplicativo em dispositivos móveis, como tirar fotos e preencher campos de registro. O cenário do departamento de Instalações se encaixa perfeitamente nesse uso.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa tem uma equipe de vendas e uma equipe de suporte. A empresa tem os seguintes requisitos:<br><br>- A equipe de vendas deve ser capaz de acessar o estoque disponível dos fornecedores. A equipe de suporte de back-office manterá uma lista de clientes.<br>- A equipe de suporte de back-office deve manter uma lista de itens que a empresa vende. A lista deve incluir um fluxo do processo empresarial para todos os descontos no preço de venda.<br><br>Você precisa criar um aplicativo do Power Apps que dê suporte às equipes usando a funcionalidade nativa do Power Apps.",
    "itens": [
      { "label": "Aplicativo de tela" },
      { "label": "Aplicativo baseado em modelo" }
    ],
    "grupos": [
      "Equipe de vendas",
      "Equipe de suporte"
    ],
    "respostas": {
      "Equipe de vendas": ["Aplicativo baseado em modelo"],
      "Equipe de suporte": ["Aplicativo de tela"]
    },
    "explicacao": "Aplicativos baseados em modelo são mais adequados quando a tarefa envolve dados relacionais estruturados, como consultar estoques e detalhes de fornecedores. Já os aplicativos de tela oferecem maior flexibilidade para personalização e são ideais para interações específicas da equipe de suporte, como registrar feedback e seguir fluxos de aprovação.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa usa um aplicativo baseado em modelo para rastrear consultas e ordens de clientes. A empresa exige opções de autoatendimento para que os clientes analisem os pedidos existentes e adicionem novas consultas. Você precisa indicar por que a empresa deve usar o Power Pages para criar um site com essas opções. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Power Pages sempre exige que o cliente se conecte antes de exibir ou adicionar qualquer informação.",
      "Os sites do Power Pages funcionam perfeitamente em navegadores e dispositivos móveis sem configuração.",
      "O Power Pages pode fornecer conectividade nativa para a mesma instância do Dataverse que o aplicativo baseado em modelo existente."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Power Pages permite criar sites públicos ou restritos, sendo possível configurar autenticação apenas quando necessário. Esses sites são responsivos por padrão e funcionam sem ajustes em dispositivos móveis. Além disso, eles se integram nativamente ao Dataverse, o que permite acessar os mesmos dados usados por aplicativos baseados em modelo.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/admin/connectivity",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Sua empresa criou um copiloto do Microsoft Copilot Studio para ajudar os funcionários com questões comuns, como verificar saldos de férias, horários de funcionamento do escritório e políticas de despesas de viagem. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para recuperar o saldo de férias do usuário, o copiloto pode usar uma ação.",
      "Tópicos são componentes que o copiloto pode reconhecer na caixa de diálogo, recuperar dados e responder ao usuário.",
      "Um usuário pode inserir uma frase fora de gatilho esperada para que o copiloto responda com informações apropriadas."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Copilot Studio permite criar copilotos capazes de realizar ações, como buscar saldo de férias. Os tópicos organizam as conversas por contexto e lógica. Além disso, a IA integrada entende linguagem natural, o que permite ao copiloto responder corretamente mesmo que o usuário não use exatamente os gatilhos previstos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/guidance/topics-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Você está criando visualizações do Power BI. É necessário saber em que visual onde um usuário pode executar cada função. Que solução você deve usar? Para responder, selecione a opção apropriada na área de resposta. Requisitos: - Tomar decisões ao analisar KPIs de alto nível. - Fazer uma busca detalhada em um visual. Selecione uma resposta: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Serviço do Power BI",
      "Power BI Desktop",
      "Painéis do Power BI"
    ],
    "resposta": 3,
    "explicacao": "Painéis do Power BI são usados para visualização rápida de KPIs em tempo real no serviço online. Para buscas detalhadas, interações e análises aprofundadas nos dados, a ferramenta adequada é o Power BI Desktop.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa pretende implementar o Power BI. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Power BI Report Builder é a única ferramenta usada para criar relatórios e serem publicados no serviço do Power BI.",
      "O serviço do Power BI pode incluir colunas calculadas.",
      "O Power BI Desktop pode incluir colunas calculadas."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Power BI Report Builder é usado para relatórios paginados, mas a principal ferramenta para criação de relatórios é o Power BI Desktop. Colunas calculadas são criadas apenas no Desktop, pois o serviço do Power BI não oferece recursos de modelagem de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/transform-model/desktop-calculated-columns",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você está usando o serviço do Power BI para exibir um visual em um relatório que foi compartilhado com você. Você precisa adicionar o visual a um painel como um bloco. Qual ação você deve realizar?",
    "opcoes": [
      "Exportar dados",
      "Copiar",
      "Destacar",
      "Fixar"
    ],
    "resposta": 3,
    "explicacao": "Para adicionar um visual de um relatório a um painel no serviço do Power BI, você deve usar a ação 'Fixar'. Isso cria um bloco no painel com o visual selecionado, permitindo acompanhar dados importantes de forma centralizada.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboard-pin-live-tile-from-report",
    "dominio": "Demonstrar as funcionalidades do Power BI",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa pretende implementar aplicativos de engajamento do cliente no Dynamics 365 Customer Service. A empresa planeja implantar um portal que se conecte ao Customer Service. Os clientes devem ser capazes de fazer login e acessar detalhes sobre casos abertos. Você precisa identificar a solução da Microsoft Power Platform que fornece a funcionalidade necessária. Que solução você deve usar?",
    "opcoes": [
      "Aplicativo de tela",
      "Site do Power Pages",
      "Aplicativo baseado em modelo"
    ],
    "resposta": 1,
    "explicacao": "O Power Pages permite criar portais externos seguros nos quais usuários autenticados, como clientes, podem acessar dados específicos do Dataverse, incluindo registros de casos no Dynamics 365 Customer Service.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/introduction",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-b1"
  },
  {
    "tipo": "multipla",
    "texto": "Você está criando um site do Power Pages para uma empresa. A empresa deseja um gráfico em uma página para visualizar os dados mantidos no Dataverse. Você precisa adicionar o gráfico à página. Quais são os dois recursos que você pode usar? Cada resposta correta apresenta uma solução completa. Escolha duas alternativas.",
    "opcoes": [
      "Gráfico do aplicativo baseado em modelo",
      "Bloco do Power BI",
      "Controle de gráfico de linha do aplicativo de tela",
      "Controle de gráfico de pizza do aplicativo de tela"
    ],
    "respostas": [0, 1],
    "explicacao": "Você pode incorporar gráficos existentes do aplicativo baseado em modelo ou usar blocos do Power BI para exibir visualizações interativas em páginas do Power Pages. Controles de gráfico dos aplicativos de tela não são compatíveis com Power Pages.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/guidance/how-to-power-bi-embedded",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-b1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa cria aplicativos de tela para a equipe de vendas. Um usuário cria um aplicativo de tela com base em uma fonte de dados. Você precisa determinar as telas criadas. Quais são as três telas que você deve identificar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "boas-vindas",
      "editar/criar",
      "detalhes",
      "procurar",
      "excluir"
    ],
    "respostas": [1, 2, 3],
    "explicacao": "Os aplicativos de tela baseados em dados geralmente são estruturados com três telas principais: 'procurar' (listagem), 'detalhes' (visualização) e 'editar/criar' (manipulação de dados). A tela de boas-vindas não é essencial para a funcionalidade do app, e a exclusão normalmente é uma função acionada dentro de uma das outras telas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/get-started-create-from-blank",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada aplicativo do Microsoft Power Automate à respectiva funcionalidade. Para responder, mova o aplicativo apropriado da coluna à esquerda até as respectivas funcionalidades à direita. Você pode usar cada aplicativo do Power Automate uma vez.",
    "itens": [
      { "label": "Power Automate para Desktop" },
      { "label": "Power Automate Mobile" },
      { "label": "Portal do criador do Power Automate" }
    ],
    "grupos": [
      "Criar e monitorar todos os tipos de fluxo da nuvem no Power Automate e iniciar a automação de processos.",
      "Iniciar fluxos instantâneos do Power Automate no campo e gerar notificações.",
      "Criar automações robóticas de processos."
    ],
    "respostas": {
      "Criar e monitorar todos os tipos de fluxo da nuvem no Power Automate e iniciar a automação de processos.": ["Portal do criador do Power Automate"],
      "Iniciar fluxos instantâneos do Power Automate no campo e gerar notificações.": ["Power Automate Mobile"],
      "Criar automações robóticas de processos.": ["Power Automate para Desktop"]
    },
    "explicacao": "O portal do criador do Power Automate permite criar, editar e monitorar todos os tipos de fluxos. O aplicativo móvel permite disparar fluxos instantâneos em campo. Já o Power Automate para Desktop é voltado para automações robóticas de processos (RPA), que interagem com interfaces de usuário em aplicações locais.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada tipo de aplicativo do Power Apps à respectiva funcionalidade. Cada tipo de aplicativo pode ser usado uma vez, mais de uma vez ou pode não ser usado.",
    "itens": [
      { "label": "Aplicativo de tela" },
      { "label": "Aplicativo baseado em modelo" }
    ],
    "grupos": [
      "Habilita elementos totalmente personalizáveis, como layout, design e esquema de cores.",
      "Estabelece conexão com diversas fontes de dados.",
      "Usa fluxos de processo empresarial para orientar os usuários em um processo de entrada de dados.",
      "Escaneia códigos de barras."
    ],
    "respostas": {
      "Habilita elementos totalmente personalizáveis, como layout, design e esquema de cores.": ["Aplicativo de tela"],
      "Estabelece conexão com diversas fontes de dados.": ["Aplicativo de tela"],
      "Usa fluxos de processo empresarial para orientar os usuários em um processo de entrada de dados.": ["Aplicativo baseado em modelo"],
      "Escaneia códigos de barras.": ["Aplicativo de tela"]
    },
    "explicacao": "Aplicativos de tela permitem controle visual completo e integração com dispositivos como câmera, ideais para escanear códigos de barras e criar layouts personalizados. Aplicativos baseados em modelo são ideais para cenários estruturados, orientados por processos empresariais guiados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você está usando o Microsoft Copilot Studio para criar um copiloto para o Power Pages. Você precisa que o copiloto comece desde o início da conversa se a entrada do usuário não for reconhecida. O que você deve configurar?",
    "opcoes": [
      "Tópico de fallback",
      "Gatilho",
      "Mensagem de erro",
      "Recursos de IA"
    ],
    "resposta": 0,
    "explicacao": "O tópico de fallback no Copilot Studio é usado para lidar com entradas inesperadas ou não reconhecidas. Ele garante que o copiloto tenha uma resposta padrão quando nenhuma outra correspondência de tópico for encontrada.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/authoring-system-fallback-topic",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um copiloto do Microsoft Copilot Studio para uma empresa. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você deve criar uma ação personalizada para exibir um artigo da base de dados de conhecimento que responda a uma pergunta comum de suporte.",
      "Você pode usar o Power Automate para recuperar o número de contato do cliente a fim de verificar se ele é um usuário autorizado e o respectivo SLA do plano de suporte."
    ],
    "respostas": [false, true],
    "explicacao": "Ações personalizadas permitem que o copiloto acesse dados externos, como artigos da base de conhecimento. Além disso, fluxos do Power Automate podem ser usados para recuperar informações do cliente e aplicar regras de SLA, garantindo um atendimento automatizado e preciso.",
    "link": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-plugins-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os copilotos do Microsoft Copilot Studio podem ser criados diretamente no Microsoft Teams.",
      "Os copilotos do Microsoft Copilot Studio podem usar o recurso de teste de bot diretamente no Microsoft Teams."
    ],
    "respostas": [true, true],
    "explicacao": "Os copilotos são criados no Microsoft Copilot Studio, uma plataforma de criação independente. No entanto, também é possível cria-los e testá-los diretamente no Microsoft Teams, desde que o canal esteja configurado.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/publication-fundamentals-publish-channels?tabs=web",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa criou um aplicativo do Power Apps para tirar fotos e armazenar dados de cartão de visita durante um seminário. A empresa deseja selecionar uma ferramenta que possa extrair dados das imagens. Você precisa identificar a ferramenta. Qual ferramenta você deve selecionar?",
    "opcoes": [
      "Azure Machine Learning",
      "Microsoft Copilot Studio",
      "Microsoft Dataverse",
      "AI Builder"
    ],
    "resposta": 3,
    "explicacao": "O AI Builder oferece modelos prontos, como o leitor de cartões de visita, que extraem automaticamente dados estruturados de imagens capturadas por aplicativos do Power Apps. É a solução ideal para esse cenário.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prebuilt-business-card",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está implementando o Microsoft Power Platform para seus usuários empresariais. Os usuários empresariais são especialistas em suas áreas, mas não estão familiarizados com configurações do Microsoft Power Platform. A empresa quer ajudar esses usuários com o assistente com o aplicativo do Microsoft Power Platform e a configuração de automações. Você precisa selecionar um recurso que possa ajudar os usuários com a configuração. Selecione a resposta que completa a frase corretamente. Para ajudar os usuários empresariais com a criação de aplicativos e automações usando linguagem natural no Microsoft Power Platform, eles podem usar <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "AI Builder",
      "Microsoft 365",
      "Power Automate",
      "Microsoft 365 Copilot"
    ],
    "resposta": 4,
    "explicacao": "O Microsoft 365 Copilot oferece suporte de IA para que usuários criem fluxos, aplicativos e consultas usando linguagem natural, sem precisar de conhecimento técnico avançado. Ele acelera o uso da Power Platform para usuários de negócios.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/ai-overview",
    "dominio": "Descrever a experiência de criação de IA no Microsoft Power Platform",
    "simulado": "pl-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você está criando um modelo de dados no Dataverse para uma empresa de planejamento de eventos. Os indivíduos podem se registrar para vários eventos durante um dia. Quando os planejadores de eventos criam um evento, os detalhes sobre os indivíduos devem ser copiados para o novo evento automaticamente. As organizações devem ser impedidas de se registrarem. Você criou a tabela para os eventos. Você precisa identificar qual componente do Dataverse usar para finalizar o modelo. Qual componente você deve identificar?",
    "opcoes": [
      "Coluna de escolha",
      "Regra de negócios",
      "Coluna de cliente",
      "Relação"
    ],
    "resposta": 3,
    "explicacao": "Relações são usadas no Dataverse para vincular registros de diferentes tabelas. No caso, a tabela de eventos deve se relacionar com a de indivíduos, permitindo registrar múltiplos participantes por evento e vice-versa.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-edit-1n-relationships-portal",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-b1"
  }

];