// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado na imagem para determinar sua correção. Você possui um Power Apps. Após criar e publicar uma nova versão do aplicativo, um cliente inicia o processo de restauração da versão anterior. Na guia 'Versões' do aplicativo, o número de versões visíveis será:",
    "opcoes": [
      "Nenhuma alteração é necessária.",
      "Uma",
      "Três",
      "Quatro"
    ],
    "resposta": 2,
    "explicacao": "Ao restaurar uma versão anterior de um aplicativo Power Apps, a versão atual permanece publicada, a versão anterior restaurada é adicionada ao histórico, e a versão que estava sendo editada (antes da restauração) também pode estar presente como um rascunho ou última versão salva. Portanto, o cliente visualizará a versão atual publicada, a versão restaurada e possivelmente uma versão intermediária, totalizando três versões. Ao restaurar uma versão anterior de um aplicativo de tela, uma nova versão é criada com o conteúdo da versão restaurada. A versão atual do aplicativo permanece inalterada, e o histórico de versões mantém todas as alterações.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/restore-an-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4",
    "imagemUrl": "img/1.png"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa planeja usar a Power Platform para criar aplicativos que abordem desafios específicos de negócios. Associe cada cenário ao tipo apropriado de aplicativo do Power Apps.",
    "pares": [
      {
        "requisito": "Técnicos de campo precisam de um aplicativo móvel para capturar a localização e a imagem de produtos defeituosos.",
        "opcoes": [
          "Aplicativo em tela (Canvas app)",
          "Portais do Power Apps",
          "Serviço de Dados Comum"
        ],
        "resposta": 0
      },
      {
        "requisito": "Representantes de vendas precisam ver diferentes visualizações e dashboards no aplicativo de vendas.",
        "opcoes": [
          "Aplicativo em tela (Canvas app)",
          "Aplicativo orientado por modelo (Model-driven app)",
          "Portais do Power Apps"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "O Aplicativo em tela (Canvas app) é ideal para técnicos de campo, pois permite criar interfaces móveis personalizadas com recursos como captura de imagem e GPS. Já o Aplicativo orientado por modelo (Model-driven app) é mais adequado para representantes de vendas, pois oferece visualizações baseadas em dados e dashboards integrados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa de viagens planeja usar a Power Platform para criar ferramentas que ajudem agentes de viagens a reservar viagens para clientes. Você precisa recomendar soluções para a empresa. Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Regra de negócios" },
      { "label": "Fluxo de processo de negócios" },
      { "label": "Power Automate" },
      { "label": "Power BI" }
    ],
    "grupos": [
      "Se um cliente estiver viajando com uma pessoa menor de 18 anos, um campo deve ser exibido para coletar a data de nascimento do viajante menor de 18 anos somente",
      "Garantir que todos os agentes de viagens usem o mesmo processo com todos os clientes",
      "Enviar um e-mail de confirmação aos clientes após a conclusão das reservas"
    ],
    "respostas": {
      "Se um cliente estiver viajando com uma pessoa menor de 18 anos, um campo deve ser exibido para coletar a data de nascimento do viajante menor de 18 anos somente": ["Regra de negócios"],
      "Garantir que todos os agentes de viagens usem o mesmo processo com todos os clientes": ["Fluxo de processo de negócios"],
      "Enviar um e-mail de confirmação aos clientes após a conclusão das reservas": ["Power Automate"]
    },
    "explicacao": "A Regra de negócios é utilizada para aplicar lógicas de negócios diretamente nos formulários de aplicativos, como exibir um campo apenas em condições específicas. O Fluxo de processo de negócios padroniza os procedimentos para todos os usuários seguindo as mesmas etapas no processo. O Power Automate automatiza ações, como o envio de e-mails de confirmação aos clientes após as reservas serem concluídas.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },

  {
    "tipo": "combobox",
    "texto": "Você tem a versão 1.0.0.0 de um aplicativo do Power Apps publicado. Você cria e publica a versão 2.0.0.0 do aplicativo. Um cliente passa pelo processo de restauração da versão anterior do aplicativo. Quantas versões do aplicativo serão exibidas na guia de Versão do aplicativo? <combobox>",
    "opcoes": [
      "",
      "1",
      "2",
      "3",
      "4"
    ],
    "resposta": 3,
    "explicacao": "Quando uma versão anterior do aplicativo é restaurada e ambas as versões, 1.0.0.0 e 2.0.0.0, têm menos de seis meses, a versão restaurada é exibida juntamente com as versões existentes, totalizando três versões visíveis na guia de Versão.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/restore-an-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está avaliando o Power Platform e tem dúvidas sobre o papel que o Microsoft Dataverse desempenha no uso do Power Apps e do Power Automate. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira ou Não se for falsa.",
    "afirmacoes": [
      "Aplicativos orientados por modelo exigem um banco de dados do Microsoft Dataverse.",
      "Uma instância de fluxo só pode acessar um banco de dados do Microsoft Dataverse.",
      "Aplicativos de tela exigem um banco de dados do Microsoft Dataverse."
    ],
    "respostas": [
      true,
      false,
      false
    ],
    "explicacao": "Afirmação 01 - Sim. Aplicativos orientados por modelo exigem um banco de dados do Microsoft Dataverse para armazenar e modelar dados. Afirmação 02 - Não. Uma instância de fluxo pode acessar diferentes fontes de dados além do Microsoft Dataverse. Afirmação 03 - Não. Aplicativos de tela podem utilizar diversas fontes de dados, não sendo obrigatória a utilização do Microsoft Dataverse.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa precisa criar diversos fluxos de trabalho e aplicativos para ajudar a otimizar suas operações de vendas. Associe cada cenário ao aplicativo mais apropriado da Power Platform.",
    "pares": [
      {
        "requisito": "Criar fluxos de trabalho sem código que utilizem diferentes sistemas.",
        "opcoes": [
          "Azure Logic Apps",
          "Power Apps",
          "Power Automate"
        ],
        "resposta": 2
      },
      {
        "requisito": "Criar um aplicativo móvel sem código.",
        "opcoes": [
          "Azure Logic Apps",
          "Power Apps",
          "Power Automate"
        ],
        "resposta": 1
      },
      {
        "requisito": "Criar um aplicativo móvel utilizando o Microsoft Dataverse.",
        "opcoes": [
          "Azure Logic Apps",
          "Power Apps",
          "Power Automate"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "O Power Automate é a melhor opção para criar fluxos de trabalho automatizados entre sistemas e serviços. O Power Apps permite criar aplicativos móveis personalizados sem código, sendo ideal tanto para apps simples quanto para aqueles que usam o Microsoft Dataverse como fonte de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },


  {
    "tipo": "simnao",
    "texto": "Você está criando um aplicativo no Power Apps e deseja garantir que ele possa ser utilizado por pessoas com deficiência visual. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira ou Não se for falsa.",
    "afirmacoes": [
      "O Power Apps pode usar um leitor de tela sem a necessidade de um conector.",
      "Você pode usar um verificador de acessibilidade para aplicativos do Power Apps para identificar violações de acessibilidade e fornecer dicas de interface do usuário."
    ],
    "respostas": [
      false,
      true
    ],
    "explicacao": "Afirmação 01 - Não. O Power Apps requer combinações específicas de software para uso com leitores de tela e não funciona de forma nativa sem integração adequada. Afirmação 02 - Sim. O Power Apps possui um verificador de acessibilidade que ajuda a detectar violações de acessibilidade e fornece sugestões para melhorar a experiência do usuário.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/user/screen-reader",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você é diretor de varejo de uma grande empresa de roupas e utiliza o canal corporativo do YouTube para divulgar vídeos internos com metas e iniciativas. Associe cada necessidade à funcionalidade adequada do Power Apps.",
    "pares": [
      {
        "requisito": "Projetar um aplicativo do Power Apps que transmita os vídeos para os usuários internos.",
        "opcoes": [
          "Tela (Canvas)",
          "Orientado por modelo (Model-driven)",
          "Portal"
        ],
        "resposta": 0
      },
      {
        "requisito": "Arrastar e soltar um vídeo no aplicativo.",
        "opcoes": [
          "Visão (View)",
          "Conector (Connector)",
          "Controle (Control)"
        ],
        "resposta": 2
      },
      {
        "requisito": "Aplicar cores consistentes da empresa ao aplicativo.",
        "opcoes": [
          "Interface Unificada",
          "Controle",
          "Tema",
          "Modelo"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Para criar um app que transmita vídeos, o ideal é usar um aplicativo em tela (Canvas), que oferece controle visual total. Os controles de vídeo são inseridos usando o objeto 'Controle', com suporte a arrastar e soltar. A personalização visual do aplicativo é feita por meio do objeto 'Tema', que aplica cores e estilos consistentes.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "combobox",
    "texto": "Você deseja criar um aplicativo do Power Apps que permita definir um Mapa do Site (Sitemap) personalizado. O que você deve fazer? <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Um aplicativo em tela (Canvas)",
      "Um aplicativo orientado por modelo (Model-driven)",
      "Um portal",
      "Um aplicativo usando um modelo (Template)"
    ],
    "resposta": 2,
    "explicacao": "Para definir um Sitemap personalizado em um aplicativo do Power Apps, é necessário criar um aplicativo orientado por modelo (Model-driven). Esse tipo de aplicativo permite a configuração de componentes como a navegação de Sitemap, formulários, exibições e dashboards de forma estruturada.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "multipla",
    "texto": "Você criou uma regra de negócios na entidade de contato para impor o requisito de que os usuários devem inserir um número de telefone, número de fax ou e-mail ao criar um novo registro. A empresa decidiu remover o número de fax da condição. Você precisa atualizar a regra de negócios. Quais são duas maneiras de atingir esse objetivo? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "Salvar uma cópia da regra e alterar a condição Desativar e excluir a regra original.",
      "Desativar a regra de negócios e alterar a condição.",
      "Capturar uma imagem da regra de negócios e alterar a condição.",
      "Alterar a condição e ativar a alteração."
    ],
    "respostas": [
      0,
      1
    ],
    "explicacao": "Não é possível alterar uma regra de negócios ativa. Primeiro, é necessário desativá-la para então realizar as alterações desejadas, como a remoção da exigência do número de fax.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/customerengagement/on-premises/customize/create-business-rules-recommendations-apply-logic-form?view=op-9-1",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa possui um banco de dados Microsoft SQL Server local que contém dados legados de vendas. É necessário exibir informações desse banco de dados em um novo aplicativo criado no Power Apps (Criação de aplicativos personalizados com pouco ou nenhum código). Você precisa estabelecer uma conexão segura entre o banco de dados e o aplicativo. O que você deve usar?",
    "opcoes": [
      "Fonte de dados",
      "Aplicativo (App)",
      "Gateway de dados",
      "Power Automate (Automatização de fluxos de trabalho entre aplicativos e serviços)"
    ],
    "resposta": 2,
    "explicacao": "Para conectar um banco de dados local a um aplicativo do Power Apps (Criação de aplicativos personalizados com pouco ou nenhum código), é necessário usar um gateway de dados. O gateway permite que os dados locais sejam acessados com segurança por serviços da nuvem, como Power Apps e Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/connections/connection-azure-sqldatabase",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Uma atualização recente foi feita em um aplicativo canvas. A atualização causou problemas de usabilidade. Você precisa reverter o aplicativo para uma versão anterior. O que você deve fazer?",
    "opcoes": [
      "Restaurar a versão anterior do aplicativo.",
      "Desinstalar o aplicativo para todos os usuários e reinstalá-lo usando o pacote de uma versão anterior.",
      "Desativar a versão ativa, importar a versão anterior do aplicativo e ativá-la.",
      "Excluir o aplicativo e criar um novo baseado na versão anterior."
    ],
    "resposta": 0,
    "explicacao": "O Power Apps (Criação de aplicativos personalizados com pouco ou nenhum código) permite restaurar uma versão anterior de um aplicativo canvas diretamente pelo histórico de versões. Basta acessar a guia de versões do aplicativo desejado, selecionar a versão anterior e clicar em Restaurar.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/restore-an-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },

  {
    "tipo": "dragdrop",
    "texto": "Uma empresa precisa criar uma série de aplicativos móveis para capacitar seus engenheiros de campo a realizarem diversas tarefas com diferentes níveis de complexidade. Associe cada tipo de aplicativo à sua definição.",
    "itens": [
      { "label": "Aplicativo baseado em modelo (model-driven)" },
      { "label": "Painel (dashboard)" },
      { "label": "Conjunto de dados (dataset)" },
      { "label": "Aplicativo canvas (canvas)" }
    ],
    "grupos": [
      "Criar rapidamente aplicativos para processos de negócios muito complexos com base em dados no Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform), com pouco ou nenhum código.",
      "Criar aplicativos simples com uma interface de usuário altamente personalizável."
    ],
    "respostas": {
      "Criar rapidamente aplicativos para processos de negócios muito complexos com base em dados no Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform), com pouco ou nenhum código.": ["Aplicativo baseado em modelo (model-driven)"],
      "Criar aplicativos simples com uma interface de usuário altamente personalizável.": ["Aplicativo canvas (canvas)"]
    },
    "explicacao": "Aplicativos baseados em modelo (model-driven) são ideais para cenários de negócios complexos, pois aproveitam a estrutura de dados do Microsoft Dataverse e geram interfaces automaticamente. Já os aplicativos canvas (canvas) permitem total controle sobre a interface do usuário, sendo ideais para soluções simples e personalizadas conectadas a diversas fontes de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "comboboxs",
    "texto": "Um usuário está começando a aprender sobre o Power Apps. Associe cada cenário ao objeto mais apropriado da Power Platform.",
    "pares": [
      {
        "requisito": "Um aplicativo do Power Apps pode chamar um:",
        "opcoes": [
          "Conector",
          "Fluxo",
          "Gateway",
          "Solução"
        ],
        "resposta": 0
      },
      {
        "requisito": "Ações e gatilhos são propriedades de um:",
        "opcoes": [
          "Conector",
          "Fluxo",
          "Gateway",
          "Solução"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Aplicativos do Power Apps podem chamar conectores para se comunicar com serviços como Microsoft 365, SharePoint ou SQL. Já os fluxos (flows), criados no Power Automate, utilizam ações e gatilhos para definir o comportamento automatizado dos processos.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },


  {
    "tipo": "unica",
    "texto": "Uma empresa de limpeza utiliza o Dynamics 365 Sales (Sistema de gestão de vendas e relacionamento com clientes). O processo de entrada de informações dos clientes durante visitas presenciais é muito complexo. A empresa deseja uma tela simplificada que permita aos vendedores capturar nome, telefone e outras informações enquanto falam com o cliente. Você precisa recomendar uma solução que funcione em vários tipos de dispositivos móveis. O que você deve recomendar?",
    "opcoes": [
      "Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform)",
      "Power Automate (Automatização de fluxos de trabalho entre aplicativos e serviços)",
      "Construtor IA (Criação de modelos de inteligência artificial sem programação)",
      "Aplicativo canvas (Canvas app)",
      "Power BI (Serviço de visualização e análise de dados)"
    ],
    "resposta": 3,
    "explicacao": "Os aplicativos canvas (Canvas apps) permitem criar interfaces personalizadas com flexibilidade total de layout. São ideais para capturar dados de forma simplificada em dispositivos móveis, especialmente em cenários de atendimento presencial, como vendas em campo.",
    "link": "https://learn.microsoft.com/en-us/power-apps/maker/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },

  {
    "tipo": "simnao",
    "texto": "Você está construindo um portal do Power Apps (Criação de aplicativos personalizados com pouco ou nenhum código) usando o Modelo Customer Self-Service (Modelo de portal no Power Pages voltado para autoatendimento de clientes, com suporte a formulários web e multilíngue, mas sem autenticação via Microsoft Entra ID). Para cada uma das afirmações a seguir, selecione Sim se for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O portal Customer Self-Service oferece suporte à autenticação via Microsoft Entra ID.",
      "O portal Customer Self-Service oferece suporte multilíngue.",
      "O portal Customer Self-Service oferece suporte a formulários da web."
    ],
    "respostas": [false, true, true],
    "explicacao": "O portal Customer Self-Service não suporta autenticação via Microsoft Entra ID, recurso disponível apenas no Employee Self-Service Portal. No entanto, ele possui suporte multilíngue e suporte a formulários da web (web forms), permitindo a criação de experiências de autoatendimento personalizadas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/portal-templates",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso do Power Apps (Construtor de aplicativos low-code da Power Platform):",
    "afirmacoes": [
      "Você pode incorporar aplicativos Canvas em aplicativos baseados em modelo (Model-Driven Apps).",
      "Um portal do Power Apps pode utilizar apenas uma fonte de dados.",
      "É obrigatório utilizar o Power BI para criar relatórios em aplicativos baseados em modelo (Model-Driven Apps)."
    ],
    "respostas": [true, false, false],
    "explicacao": "Afirmação 01 - Sim, é possível incorporar aplicativos Canvas em aplicativos baseados em modelo, permitindo aproveitar experiências personalizadas dentro de soluções orientadas por dados. \n\nAfirmação 02 - Não, o Power Apps portal pode utilizar várias fontes de dados além do Microsoft Dataverse, incluindo conectores personalizados e APIs externas. \n\nAfirmação 03 - Não, os aplicativos baseados em modelo permitem a criação de gráficos e visualizações nativas, não sendo obrigatório o uso do Power BI para geração de relatórios.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "comboboxs",
    "texto": "Um usuário está criando seu primeiro aplicativo de tela no Power Apps e precisa de orientação sobre os controles mais apropriados para diferentes cenários. Associe cada necessidade ao controle correto do Power Apps.",
    "pares": [
      {
        "requisito": "Visualizar a data, horário e local de reuniões internas futuras.",
        "opcoes": [
          "Gallery (Galeria)",
          "Meeting-screen template (Modelo de tela de reunião)",
          "List box (Caixa de lista)"
        ],
        "resposta": 1
      },
      {
        "requisito": "Acessar registros de clientes no Dynamics 365 Sales para visualizar uma foto do cliente antes da reunião.",
        "opcoes": [
          "People-screen template (Modelo de tela de pessoas)",
          "Image (Imagem)",
          "Add picture (Adicionar imagem)"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "O modelo de tela de reunião (Meeting-screen template) organiza informações como data, hora e local de forma estruturada e visualmente adequada. Já o controle Image (Imagem) permite exibir fotos de clientes armazenadas no Dataverse ou em serviços conectados, sendo ideal para visualização prévia antes de reuniões.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/controls/control-image",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Você está projetando uma solução do Power Apps que permite aos usuários enviar um relatório de status diretamente para o site do Microsoft SharePoint da empresa usando seus dispositivos móveis. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você deve criar um aplicativo orientado por modelo (model-driven) no Power Apps.",
      "Você deve criar um aplicativo canvas no Power Apps.",
      "Os usuários devem baixar e executar o aplicativo móvel do Power Apps para usar a solução."
    ],
    "respostas": [false, true, true],
    "explicacao": "Afirmação 01 - Não, aplicativos model-driven são usados em cenários com estruturas de dados complexas e fortemente relacionadas, o que não se aplica a um simples envio de relatório para o SharePoint.\nAfirmação 02 - Sim, o aplicativo canvas permite personalização da interface e integração com fontes externas como o SharePoint, sendo ideal para esse tipo de solução.\nAfirmação 03 - Sim, para usar um aplicativo canvas em dispositivos móveis, os usuários devem baixar e usar o aplicativo móvel do Power Apps.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/user/run-app-client",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Supply Chain Management (Gestão da Cadeia de Suprimentos). A empresa deseja criar interfaces de usuário personalizadas que adicionem funcionalidades extras. Você precisa recomendar uma solução para a empresa. O que você deve recomendar?",
    "opcoes": [
      "Power BI",
      "Aplicativos canvas do Power Apps (Canvas apps)",
      "AI Builder (Construtor de IA)",
      "Microsoft Flow (Power Automate)"
    ],
    "resposta": 1,
    "explicacao": "Os aplicativos canvas do Power Apps permitem criar experiências de usuário altamente personalizadas e adaptadas às necessidades específicas da empresa. Eles oferecem flexibilidade para conectar-se ao Dynamics 365 Supply Chain Management e estender sua funcionalidade com interfaces personalizadas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa criar um aplicativo móvel que permita aos associados de vendas inserir leads de vendas de clientes. Quais quatro ações você deve realizar em sequência? Para responder, mova as ações apropriadas da lista para a área de resposta e organize-as na ordem correta.",
    "itens": [
      { "label": "Ir para o centro de administração do Office 365." },
      { "label": "Adicionar componentes ao aplicativo." },
      { "label": "Criar um novo aplicativo do Power Apps." },
      { "label": "Publicar o aplicativo." },
      { "label": "Salvar o aplicativo." },
      { "label": "Adicionar fluxos ao aplicativo." }
    ],
    "grupos": [
      "Primeira Ação",
      "Segunda Ação",
      "Terceira Ação",
      "Quarta Ação"
    ],
    "respostas": {
      "Primeira Ação": ["Criar um novo aplicativo do Power Apps."],
      "Segunda Ação": ["Adicionar componentes ao aplicativo."],
      "Terceira Ação": ["Salvar o aplicativo."],
      "Quarta Ação": ["Publicar o aplicativo."]
    },
    "explicacao": "Para construir um aplicativo no Power Apps, a ordem típica começa com a criação do aplicativo, seguida da adição de componentes (como entidades, formulários e visualizações), salvamento das alterações feitas e, por fim, a publicação para disponibilização aos usuários.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/model-driven-apps/build-first-model-driven-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza aplicativos canvas do Power Apps. Quando um usuário abre o Power Apps Studio em um navegador e seleciona Aplicativos > editar, ele não vê um aplicativo que precisa modificar. Você precisa determinar por que o usuário não consegue ver o aplicativo. Quais são três possíveis razões? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "O usuário selecionou um ambiente incorreto do Power Apps.",
      "O usuário não recebeu a função Personalizador do sistema.",
      "O usuário não foi definido como coproprietário do aplicativo.",
      "O aplicativo não foi compartilhado com o usuário.",
      "O ambiente não possui um banco de dados do Microsoft Dataverse."
    ],
    "respostas": [0, 2, 3],
    "explicacao": "As causas mais comuns para um aplicativo não aparecer na opção 'Posso editar' no Power Apps Studio são: o aplicativo não foi compartilhado com o usuário (é necessário ter permissão de edição), o usuário não foi adicionado como coproprietário, ou o ambiente selecionado está incorreto. A ausência do banco de dados do Microsoft Dataverse não impede a visualização de aplicativos canvas.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/canvas-apps/edit-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você criou um aplicativo orientado por modelo. O aplicativo está pronto para ser compartilhado. Você precisa concluir o processo necessário para configurar o aplicativo para ser compartilhado. Como você deve concluir o processo de configuração? Para responder, arraste as etapas apropriadas da lista para a área de resposta e organize-as na ordem correta.",
    "itens": [
      { "label": "Selecione um aplicativo da lista do Power Apps." },
      { "label": "Selecione o aplicativo e selecionar uma função de segurança." },
      { "label": "Selecione um usuário e escolher uma função de segurança." },
      { "label": "Selecione Compartilhar." }
    ],
    "grupos": [
      "Etapa 1",
      "Etapa 2",
      "Etapa 3",
      "Etapa 4"
    ],
    "respostas": {
      "Etapa 1": ["Selecione um aplicativo da lista do Power Apps."],
      "Etapa 2": ["Selecione Compartilhar."],
      "Etapa 3": ["Selecione um usuário e escolher uma função de segurança."],
      "Etapa 4": ["Selecione Compartilhar."]
    },
    "explicacao": "Para compartilhar um aplicativo orientado por modelo, você primeiro seleciona o aplicativo na lista do Power Apps. Em seguida, escolhe a opção 'Compartilhar', depois define o(s) usuário(s) e atribui uma função de segurança. Por fim, clica novamente em 'Compartilhar' para concluir.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/model-driven-apps/build-first-model-driven-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um aplicativo orientado por modelo. Avalie as afirmações a seguir.",
    "afirmacoes": [
      "As entidades são adicionadas ao aplicativo sendo arrastadas para a tela do aplicativo a partir da área de componentes.",
      "A definição da visualização é criada na área de componentes do designer do aplicativo.",
      "É necessário salvar, validar e publicar seu aplicativo para que outras pessoas vejam as alterações."
    ],
    "respostas": [false, true, true],
    "explicacao": "Afirmação 01 - Não, entidades não são arrastadas para uma tela como em aplicativos de tela (canvas). Em aplicativos orientados por modelo, as entidades são adicionadas por meio da seleção no designer.\nAfirmação 02 - Sim, as visualizações são criadas na área de componentes do designer do aplicativo, permitindo definir como os dados serão exibidos.\nAfirmação 03 - Sim, é necessário salvar, validar e publicar as alterações feitas no aplicativo para que elas fiquem visíveis para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/model-driven-apps/build-first-model-driven-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um aplicativo canvas que permite que contratados registrem o tempo trabalhado em um projeto. Os contratados devem poder usar o aplicativo apenas para inserir o tempo e não devem ter permissão para realizar outras ações no app.\n\nQue tipo de permissão você deve configurar para os contratados?",
    "opcoes": [
      "Nível de aplicação",
      "Nível de tarefa",
      "Nível recorde",
      "Nível de campo"
    ],
    "resposta": 3,
    "explicacao": "A segurança em nível de campo (field-level security) permite um controle mais granular sobre o acesso do usuário aos dados dentro de um registro, possibilitando restringir a edição ou visualização de campos específicos sem afetar o restante do aplicativo. É ideal para o cenário onde contratados podem registrar apenas determinadas informações.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/wp-security-cds",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está criando um aplicativo baseado em modelo para rastrear solicitações de orçamentos. O aplicativo deve usar a seguinte estrutura de navegação: Vendas: - Registro de vendas. - Solicitações de orçamento. - Projetos. - Orçamentos. - Clientes. - Linhas de produtos. - Territórios de vendas. Administração: - Administração de usuários. - Usuários. - Funções. Você precisa criar a navegação do aplicativo. Quais tipos de componentes do sitemap você deve usar? Para responder, arraste os tipos de componentes apropriados para os elementos de navegação corretos.",
    "itens": [
      { "label": "Área" },
      { "label": "Grupo" },
      { "label": "Subárea" }
    ],
    "grupos": [
      "Administração",
      "Registro de vendas",
      "Clientes"
    ],
    "respostas": {
      "Administração": ["Grupo"],
      "Registro de vendas": ["Subárea"],
      "Clientes": ["Subárea"]
    },
    "explicacao": "Ao configurar a navegação em um aplicativo baseado em modelo no Power Apps, os elementos são organizados hierarquicamente em Áreas, Grupos e Subáreas. Grupos agrupam Subáreas sob uma Área. 'Administração' é um grupo, enquanto 'Registro de vendas' e 'Clientes' são subáreas dentro de uma área como 'Vendas'.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-site-map-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },

  {
    "tipo": "unica",
    "texto": "Você tem uma planilha do Microsoft Excel que contém uma lista de tarefas para um projeto. O arquivo está armazenado no OneDrive para Empresas. Você precisa criar um aplicativo canvas que permita que os membros da equipe atualizem o status de suas tarefas. O que você deve usar?",
    "opcoes": [
      "O recurso Gerar um aplicativo a partir de dados",
      "Uma ação personalizada no Serviço de dados comuns (Common Data Service)",
      "Power Apps Checker (Power Apps Checker)",
      "O recurso Abrir dados da entidade no Excel"
    ],
    "resposta": 0,
    "explicacao": "O recurso 'Gerar um aplicativo a partir de dados' permite que você conecte facilmente uma fonte de dados como Excel (armazenado no OneDrive for Business) e crie um aplicativo canvas automaticamente. Ele é ideal para cenários simples como atualização de status de tarefas.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/canvas-apps/add-data-connection",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Você cria um aplicativo canvas usando o recurso Gerar a partir de dados. O aplicativo se conecta a uma lista do Microsoft SharePoint. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma tela é gerada contendo uma lista navegável de itens da lista do SharePoint.",
      "Uma tela é gerada permitindo que os usuários atualizem itens da lista do SharePoint."
    ],
    "respostas": [true, true],
    "explicacao": "Ao usar o recurso 'Gerar a partir de dados' no Power Apps com uma lista do SharePoint, são geradas automaticamente três telas: de navegação (browsable), de exibição (view) e de edição (edit). Isso permite que o usuário visualize e atualize os dados da lista conectada.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/canvas-apps/app-from-sharepoint",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso de aplicativos Power Apps.",
    "afirmacoes": [
      "Os aplicativos Power Apps só podem ser executados em dispositivos móveis.",
      "Os aplicativos Power Apps só podem ser executados com produtos do Dynamics 365.",
      "Se um usuário executa um aplicativo Power Apps que acessa informações às quais ele não tem acesso, o aplicativo concede as permissões automaticamente."
    ],
    "respostas": [false, false, false],
    "explicacao": "Power Apps pode ser executado em navegadores e dispositivos móveis, e não depende exclusivamente do Dynamics 365. Além disso, o aplicativo não concede permissões automaticamente — os usuários precisam ter as permissões apropriadas definidas previamente.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/powerapps-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa planeja criar um aplicativo canvas que se conecte a três bancos de dados com diferentes formatos proprietários. Qual é o número mínimo de conectores necessários?",
    "opcoes": [
      "0",
      "1",
      "2",
      "3"
    ],
    "resposta": 3,
    "explicacao": "Cada banco de dados com formato proprietário distinto requer um conector específico. Portanto, para três bancos de dados diferentes, são necessários três conectores distintos.",
    "link": "https://learn.microsoft.com/pt-br/connectors/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar aplicativos Power Apps em um ambiente Power Platform. É necessário implementar outros componentes exigidos. Relacione cada produto à sua função correspondente.",
    "itens": [
      { "label": "Microsoft Azure" },
      { "label": "Conector personalizado" },
      { "label": "Fluxo da Microsoft (Microsoft Flow)" },
      { "label": "Aplicativo orientado por modelo" },
      { "label": "Aplicativo canvas" }
    ],
    "grupos": [
      "Implementar autenticação de usuário",
      "Enviar dados para um bloco de anotações do Microsoft OneNote no mesmo locatário"
    ],
    "respostas": {
      "Implementar autenticação de usuário": ["Microsoft Azure"],
      "Enviar dados para um bloco de anotações do Microsoft OneNote no mesmo locatário": ["Fluxo da Microsoft (Microsoft Flow)"]
    },
    "explicacao": "A autenticação de usuários pode ser implementada por meio dos serviços de identidade do Microsoft Azure, como o Microsoft Entra ID. O Microsoft Flow (atualmente chamado de Power Automate) permite integrar diferentes serviços e enviar dados, como para o OneNote dentro do mesmo locatário.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja criar aplicativos de tela. Qual é o número mínimo de conectores necessários? Para responder, arraste o número apropriado de conectores para os cenários corretos. Cada número de conectores pode ser usado uma vez, mais de uma vez ou não.",
    "itens": [
      { "label": "0" },
      { "label": "1" },
      { "label": "2" },
      { "label": "3" }
    ],
    "grupos": [
      "Sincronizar dados com três fontes de dados que usam formatos proprietários diferentes.",
      "Criar três aplicativos Power Apps que exibem dados de uma lista do Microsoft SharePoint.",
      "Criar três fluxos que copiem dados para o Microsoft Azure Data Lake em agendamentos diferentes."
    ],
    "respostas": {
      "Sincronizar dados com três fontes de dados que usam formatos proprietários diferentes.": ["3"],
      "Criar três aplicativos Power Apps que exibem dados de uma lista do Microsoft SharePoint.": ["1"],
      "Criar três fluxos que copiem dados para o Microsoft Azure Data Lake em agendamentos diferentes.": ["1"]
    },
    "explicacao": "Para conectar-se a três bancos de dados com formatos proprietários distintos, são necessários três conectores separados. No caso de múltiplos aplicativos acessando a mesma lista do SharePoint, apenas um conector é necessário. O mesmo se aplica a fluxos direcionados ao mesmo destino (Azure Data Lake), ainda que com agendamentos diferentes.",
    "link": "https://learn.microsoft.com/pt-br/connectors/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Um consultório médico possui um aplicativo orientado por modelo que utiliza o Microsoft Dataverse. É necessário criar uma tela que permita aos usuários capturar informações sobre os médicos. A tela deve permitir que os usuários insiram ou selecionem os seguintes dados:\n\n- Um local para armazenar dados adicionais do perfil do médico que não fazem parte da tabela de conta ou de contato;\n- Um local para armazenar a especialidade do médico no perfil;\n- Um local para selecionar a seguradora, dentre 10 opções diferentes.\n\nVocê precisa selecionar os componentes apropriados para armazenar esses dados no Dataverse. Para responder, arraste os componentes para o requisito correspondente.",
    "itens": [
      { "label": "Entidade" },
      { "label": "Campo" },
      { "label": "Conjunto de opções" },
      { "label": "Registro" }
    ],
    "grupos": [
      "Armazenar dados adicionais do perfil do médico.",
      "Armazenar informações sobre a especialidade do médico.",
      "Selecionar uma seguradora."
    ],
    "respostas": {
      "Armazenar dados adicionais do perfil do médico.": ["Entidade"],
      "Armazenar informações sobre a especialidade do médico.": ["Campo"],
      "Selecionar uma seguradora.": ["Conjunto de opções"]
    },
    "explicacao": "A entidade é usada para criar uma estrutura separada para armazenar dados personalizados de perfil. Campos são adicionados a entidades existentes para capturar atributos específicos, como especialidade médica. Conjuntos de opções permitem que o usuário selecione uma opção de uma lista pré-definida, como seguradoras.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-edit-entities",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um aplicativo canvas no Power Apps. É necessário garantir que seus colegas de trabalho possam executar o aplicativo. O que você deve fazer?",
    "opcoes": [
      "Compartilhar o aplicativo.",
      "Enviar a URL do aplicativo para os colegas de trabalho.",
      "Publicar o aplicativo.",
      "Criar um fluxo para o aplicativo."
    ],
    "resposta": 0,
    "explicacao": "Para que outras pessoas possam usar um aplicativo canvas no Power Apps, é necessário compartilhá-lo explicitamente com elas. Apenas publicar ou enviar o link não garante permissões de acesso.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/canvas-apps/share-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },

  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza um aplicativo orientado por modelo (model-driven app) para suas atividades de vendas móveis. A empresa deseja modificar a exibição usada para pedidos de vendas, aplicando um novo filtro padrão. Também é necessário modificar a ordenação padrão dos pedidos. Em quais três locais é possível realizar essas alterações?",
    "opcoes": [
      "Site do Power Apps",
      "Gerenciador de Soluções (Solution Explorer)",
      "Microsoft Azure DevOps",
      "Designer de Aplicativo (App Designer)",
      "Microsoft Visual Studio"
    ],
    "respostas": [0, 1, 3],
    "explicacao": "É possível criar ou modificar exibições com ordenação e filtros padrão diretamente no site do Power Apps, no Solution Explorer (desde que o componente não esteja gerenciado) e no App Designer. O Azure DevOps e o Visual Studio não são ferramentas apropriadas para essa finalidade.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-edit-views-app-designer",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso de aplicativos canvas com outras ferramentas do Microsoft 365.",
    "afirmacoes": [
      "Você pode incorporar um aplicativo canvas em um formulário do Microsoft Forms para coletar feedback dos usuários.",
      "Você pode incorporar um aplicativo canvas dentro de uma planilha do Microsoft Excel para permitir que os usuários interajam com os dados de forma estruturada.",
      "Você pode incorporar um aplicativo canvas dentro de um aplicativo orientado por modelo da Power Platform."
    ],
    "respostas": [false, false, true],
    "explicacao": "Afirmação 01 - Não: O Microsoft Forms é uma ferramenta independente de coleta de dados e não oferece suporte à incorporação de aplicativos canvas.\nAfirmação 02 - Não: O Excel suporta integração com Power BI e complementos, mas não permite incorporar aplicativos canvas diretamente em suas planilhas.\nAfirmação 03 - Sim: Aplicativos canvas podem ser incorporados em aplicativos orientados por modelo da Power Platform usando o componente Power Apps.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre a personalização de aplicativos canvas no Power Apps.",
    "afirmacoes": [
      "Você pode personalizar botões e itens de menu em aplicativos canvas, mas não pode reordenar as telas.",
      "Você pode adicionar seções aos seus formulários de aplicativo canvas apenas no momento da criação do aplicativo.",
      "Você só pode editar botões em um aplicativo Power Apps usando um aplicativo de terceiros."
    ],
    "respostas": [false, false, false],
    "explicacao": "Afirmação 01 - Não. É possível reordenar telas em aplicativos canvas diretamente pela interface do Power Apps Studio utilizando os comandos 'Mover para cima' ou 'Mover para baixo'.\nAfirmação 02 - Não. As seções dentro de formulários em aplicativos canvas podem ser adicionadas e modificadas a qualquer momento, desde que o formulário esteja sendo editado; não é limitado ao momento de criação do app.\nAfirmação 03 - Não. Os botões podem ser editados diretamente no Power Apps Studio, permitindo alteração de texto, cor, ação e outros estilos sem necessidade de ferramentas externas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/add-form",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está criando um aplicativo canvas para exibir dados de um banco de dados SQL Server legado que está localizado na rede interna da empresa. Você precisa se conectar a esses dados. O que você deve usar?",
    "opcoes": [
      "Conector personalizado",
      "Pacote de conteúdo",
      "Gateway de dados",
      "Power BI"
    ],
    "resposta": 2,
    "explicacao": "Para acessar dados locais, como um banco de dados SQL Server localizado na rede interna da empresa, é necessário utilizar um gateway de dados. O gateway atua como um ponte segura entre os dados locais e os serviços em nuvem do Microsoft Power Platform, permitindo que aplicativos canvas se conectem e manipulem esses dados em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/canvas-apps/gateway-management",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "multipla",
    "texto": "Você está criando um aplicativo canvas que usa um conector. Quais dois objetos são fornecidos pelo conector? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Personalizações",
      "Fontes de dados",
      "Ações",
      "Tabelas",
      "Gatilhos"
    ],
    "respostas": [2, 3],
    "explicacao": "Um conector pode fornecer tabelas de dados ou ações. Alguns conectores fornecem apenas tabelas, outros apenas ações, e alguns oferecem ambos. Isso permite que os aplicativos canvas interajam com dados externos e executem operações de forma integrada.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "multipla",
    "texto": "Você criou um aplicativo orientado por modelos para um departamento. É necessário tornar esse aplicativo acessível a outros membros do departamento. Quais dois métodos você deve usar? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Enviar a URL da Web do aplicativo para outros membros da equipe por e-mail",
      "Usar o recurso Compartilhar no designer do Power Apps",
      "Publicar o aplicativo no AppSource",
      "Implantar o aplicativo em outras instâncias do usuário via PowerShell"
    ],
    "respostas": [0, 1],
    "explicacao": "Para compartilhar um aplicativo orientado por modelos com outros usuários, você pode enviar o link direto (URL da Web) do aplicativo ou usar a funcionalidade nativa de compartilhamento dentro do Power Apps. Publicar no AppSource ou usar PowerShell não são métodos recomendados ou suportados nesse cenário.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/share-model-driven-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Você criou um aplicativo orientado por modelos. É necessário determinar quais personalizações podem ser feitas em formulários de tabela.",
    "afirmacoes": [
      "Um formulário pode ser visível apenas para usuários que tenham sido atribuídos a uma função de segurança específica.",
      "O rótulo de uma coluna em um formulário pode ser diferente do nome de exibição da coluna.",
      "Você pode editar a exibição do sistema chamada Localização Rápida (Quick Find) para alterar o título e o subtítulo exibidos para registros em uma coluna de pesquisa."
    ],
    "respostas": [true, true, false],
    "explicacao": "Afirmação 01 - Sim. É possível restringir a visibilidade de formulários a usuários com funções de segurança específicas, permitindo experiências personalizadas com base nos perfis dos usuários.\n\nAfirmação 02 - Sim. O nome exibido no formulário pode ser alterado por meio da propriedade de rótulo, independentemente do nome da coluna.\n\nAfirmação 03 - Não. A exibição 'Localização Rápida' (Quick Find) permite modificar critérios de pesquisa, mas não permite alterar título e subtítulo de exibição em colunas de pesquisa.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/control-access-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa de tutoria desenvolveu e implantou um aplicativo orientado por modelo para a equipe administrativa e um aplicativo canvas para os professores. Avalie as afirmações a seguir.",
    "afirmacoes": [
      "Os professores podem acessar o aplicativo canvas usando computadores e dispositivos móveis.",
      "Somente atribuições de funções de segurança são exigidas para acesso ao aplicativo canvas.",
      "A equipe administrativa pode criar exibições e dashboards pessoais no aplicativo orientado por modelo."
    ],
    "respostas": [true, false, true],
    "explicacao": "Afirmação 01 - Sim. Aplicativos canvas podem ser acessados por navegadores ou dispositivos móveis, como parte da flexibilidade da plataforma Power Apps.\nAfirmação 02 - Não. Para acessar aplicativos canvas, é necessário também especificar quem pode usá-lo no nível de usuário ou grupo, não apenas com base em funções de segurança.\nAfirmação 03 - Sim. Usuários podem criar exibições e dashboards pessoais no aplicativo orientado por modelo, visíveis apenas a eles ou configurados como padrão.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/share-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  },
  {
    "tipo": "unica",
    "texto": "Você concluiu o desenvolvimento e os testes de um novo aplicativo canvas. Você adiciona usuários a uma equipe de segurança e atribui permissões do aplicativo a essa equipe. Os usuários não conseguem visualizar o aplicativo. O que você deve fazer para garantir que eles possam iniciar e usar o aplicativo?",
    "opcoes": [
      "Adicionar o aplicativo à solução.",
      "Publicar o aplicativo.",
      "Compartilhar o aplicativo.",
      "Adicionar um controle do Power Apps Component Framework (PCF) ao aplicativo."
    ],
    "resposta": 1,
    "explicacao": "Quando você salva alterações em um aplicativo canvas, essas alterações são publicadas automaticamente apenas para você e para quem tem permissão para editá-lo. Para torná-las disponíveis a todos com quem o aplicativo foi compartilhado, é necessário publicá-las explicitamente.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/save-publish-app",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-4"
  }






];