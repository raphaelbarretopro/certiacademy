// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [

  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza o Microsoft 365 e o Venda Dinâmica 365 (Dynamics 365 Sales). A empresa não possui desenvolvedores em sua equipe. Você precisa explicar aos executivos os benefícios de usar aplicativos do Power Platform. Quais são dois benefícios?",
    "opcoes": [
      "Os usuários podem enviar e-mails do Venda Dinâmica 365 (Dynamics 365 Sales) para seus endereços de e-mail pessoais.",
      "Os usuários podem criar aplicativos com o Power Apps para diferentes departamentos.",
      "Os usuários podem usar o Power Automate para compartilhar informações entre o Microsoft 365 e o Venda Dinâmica 365 (Dynamics 365 Sales).",
      "A empresa pode unificar todos os dispositivos móveis para um único fornecedor."
    ],
    "respostas": [
      1,
      2
    ],
    "explicacao": "Os usuários podem criar aplicativos personalizados com o Power Apps para atender às necessidades de diferentes departamentos e podem utilizar o Power Automate para integrar e automatizar fluxos de informações entre o Microsoft 365 e o Venda Dinâmica 365 (Dynamics 365 Sales). Os demais itens não representam benefícios diretos do Power Platform.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/powerapps-overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "unica",
    "texto": "Qual é um benefício de implantar aplicativos do Microsoft 365 e do Venda Dinâmica 365 (Dynamics 365 Sales) no mesmo locatário?",
    "opcoes": [
      "Usar o Microsoft Dataverse para conectar-se aos dados do aplicativo.",
      "Configurar grupos no Microsoft 365 para permissões de acesso a todos os dados.",
      "Os usuários podem acessar tanto o Microsoft 365 quanto o Venda Dinâmica 365 (Dynamics 365 Sales) utilizando o logon único (SSO)."
    ],
    "resposta": 2,
    "explicacao": "Ao implantar o Microsoft 365 e o Venda Dinâmica 365 (Dynamics 365 Sales) no mesmo locatário, os usuários podem usar o logon único (Single Sign-On - SSO) para acessar ambos os sistemas sem a necessidade de múltiplos logins, otimizando a experiência de acesso.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/microsoft-365-integration?view=o365-worldwide",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está considerando implementar o Power Apps para ajudar a gerenciar processos de negócios. Os usuários estão tentando entender os propósitos e benefícios dos componentes do Power Apps. Associe cada benefício à ferramenta correta.",
    "itens": [
      { "label": "Conectores" },
      { "label": "Aplicativos canvas" },
      { "label": "Construtor de IA" },
      { "label": "Power Automate" },
      { "label": "Portais" }
    ],
    "grupos": [
      "Integração de dados facilitada",
      "Baixo código / sem código em aplicações",
      "Interface de front-end fácil de personalizar"
    ],
    "respostas": {
      "Integração de dados facilitada": ["Conectores"],
      "Baixo código / sem código em aplicações": ["Construtor de IA"],
      "Interface de front-end fácil de personalizar": ["Aplicativos canvas"]
    },
    "explicacao": "Os Conectores permitem integração com diversos serviços de dados. O AI Builder oferece recursos de inteligência artificial com baixo ou nenhum código. Os Aplicativos canvas fornecem flexibilidade para criação de interfaces customizadas de forma simples.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/intro-maker-portal",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações sobre o Power Virtual Agents, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Chatbots do Power Virtual Agents podem ser criados diretamente no Microsoft Teams.",
      "Chatbots do Power Virtual Agents podem usar o recurso de teste de bot diretamente dentro do Microsoft Teams."
    ],
    "respostas": [true, true],
    "explicacao": "É possível criar chatbots diretamente no Microsoft Teams utilizando o aplicativo Power Virtual Agents. Além disso, a interface do Teams permite testar os bots diretamente sem sair da plataforma.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/teams/fundamentals-what-is-power-virtual-agents-teams",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "unica",
    "texto": "Você está desenvolvendo um chatbot com o Power Virtual Agents. O chatbot deve responder às perguntas dos usuários usando mensagens instantâneas (IM). Você precisa implantar o chatbot. Onde você deve instalar o chatbot?",
    "opcoes": [
      "Portal do criador do Power Apps",
      "Aplicativo da Power Platform",
      "Microsoft Teams",
      "Seu computador"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft Teams é a plataforma adequada para implantar chatbots que utilizam mensagens instantâneas, como os criados com o Power Virtual Agents, permitindo integração direta com os usuários.",
    "link": "https://learn.microsoft.com/pt-br/microsoftteams/platform/bots/how-to/add-power-virtual-agents-bot-to-teams",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Vendas. A empresa utiliza um aplicativo baseado em navegador chamado Central de Vendas. Você precisa garantir que os usuários possam acessar os dados da Central de Vendas utilizando dispositivos móveis. Qual aplicativo os usuários devem instalar?",
    "opcoes": [
      "Assistente Remoto do Dynamics 365",
      "Dynamics 365 Central de Negócios ",
      "Dynamics 365 Finanças",
      "Dynamics 365 para Telefones"
    ],
    "resposta": 3,
    "explicacao": "O aplicativo 'Dynamics 365 para Telefones' é a escolha correta para acessar a Central de Vendas em dispositivos móveis. Ele permite que os usuários interajam com dados do Dynamics 365 Vendas de forma otimizada para smartphones.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/sales/intro-saleshub",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Compartilhar um aplicativo orientado por modelo e compartilhar um aplicativo em tela ambos enviam um e-mail com o link do aplicativo para os usuários.",
      "Administradores atribuem funções de segurança e permissões do Power Platform da mesma forma para aplicativos em tela, aplicativos orientados por modelo e aplicativos compartilhados.",
      "Você deve publicar tanto as exibições pessoais quanto as exibições de sistema antes que um usuário possa consumi-las."
    ],
    "respostas": [false, true, false],
    "explicacao": "Compartilhar aplicativos orientados por modelo não envia e-mails automaticamente como acontece com aplicativos em tela. As funções de segurança e permissões são aplicadas de forma semelhante em todos os tipos de aplicativos. As exibições pessoais não precisam ser publicadas, pois são visíveis apenas para o usuário que as criou.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/share-model-driven-app",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "A data e hora são os gatilhos para um fluxo de nuvem agendado.",
      "Fluxos de nuvem devem ser exportados para um arquivo do Microsoft Excel para copiá-los para outro ambiente.",
      "Os usuários devem criar fluxos de desktop para compartilhá-los sem serem administradores."
    ],
    "respostas": [true, false, false],
    "explicacao": "Fluxos de nuvem agendados são acionados por data e hora; não é necessário exportar para Excel para mover fluxos entre ambientes (pode-se usar soltar e arrastar ou soluções); e o compartilhamento de fluxos de nuvem não exige criação de fluxos de desktop nem privilégios de administrador.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/run-scheduled-tasks",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Sales. A empresa usa um aplicativo baseado em navegador chamado Hub de Vendas. Você precisa garantir que os usuários possam acessar dados de dispositivos móveis. Qual aplicativo os usuários devem instalar?",
    "opcoes": [
      "Dynamics 365 Remote Assist (Assistência Remota)",
      "Dynamics 365 Finance (Finanças)",
      "Dynamics 365 Business Central (Business Central)",
      "Dynamics 365 for Phones (para Celulares)"
    ],
    "resposta": 3,
    "explicacao": "Utilize os aplicativos Dynamics 365 para celulares e Dynamics 365 para tablets para suas vendas, atendimento ao cliente, serviço de campo e outras tarefas quando estiver em movimento. Com um único download da sua loja de aplicativos, você terá acesso automático a todos os aplicativos necessários para sua função. Você verá aplicativos com a Interface Unificada no seu dispositivo móvel.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/mobile-app/overview",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode acionar um fluxo do Power Automate quando carregar um arquivo do Excel ou do Word em um site do SharePoint.",
      "Você pode usar um fluxo de desktop do Power Automate para abrir um aplicativo em nuvem e executar uma ação que cria um arquivo.",
      "Você pode usar um conector em um fluxo de nuvem do Power Automate para inserir dados em uma fonte de dados de aplicativo do Power Apps a partir de uma fonte de dados de terceiros."
    ],
    "respostas": [true, false, true],
    "explicacao": "Fluxos de nuvem do Power Automate suportam gatilhos baseados no carregamento de arquivos em bibliotecas do SharePoint; fluxos de desktop não são usados para interagir diretamente com aplicativos em nuvem nem para criar arquivos dessa forma; e fluxos de nuvem podem usar conectores para inserir dados em fontes de dados do Power Apps a partir de serviços de terceiros.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  },
  {
    "tipo": "unica",
    "texto": "Você desenvolve um copiloto do Copilot Studio em um canal do Microsoft Teams. É necessário identificar qual ação o copiloto pode executar. Qual ação ele pode realizar?",
    "opcoes": [
      "Disparar uma solicitação de aprovação de um gerente sênior para despesas de alto valor",
      "Fazer upload e processar um arquivo PDF",
      "Transferir um chat para uma pessoa real se o copiloto não conseguir responder à pergunta"
    ],
    "resposta": 2,
    "explicacao": "No Copilot Studio, um copiloto em um canal do Teams pode ser configurado para escalonar conversas para um agente humano quando não consegue resolver uma consulta, transferindo o chat para uma pessoa real.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    "dominio": "Descrever o valor de negócios do Microsoft Power Platform",
    "simulado": "pl-1"
  }

];


























