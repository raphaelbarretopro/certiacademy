// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AI-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Você usa o Microsoft 365 Copilot. O que o Copilot usa para gerar respostas com base em dados corporativos armazenados no Microsoft SharePoint?",
    "opcoes": [
      "Microsoft Intune",
      "Microsoft Defender",
      "Microsoft Graph",
      "Microsoft Purview"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft 365 Copilot aproveita a API do Microsoft Graph para consultar e recuperar conteúdo armazenado no SharePoint, OneDrive, Teams e outros serviços do Microsoft 365. O Graph fornece um ponto de extremidade unificado que mapeia diretamente para coleções de sites, bibliotecas de documentos e metadados de arquivos, permitindo que o Copilot extraia os documentos mais atualizados e o contexto necessário para a geração de respostas, sempre respeitando as permissões do usuário.",
    "link": "https://learn.microsoft.com/pt-br/graph/overview",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode usar a solução <combobox> do Microsoft Purview para detectar prompts do Microsoft 365 Copilot que contenham informações confidenciais.",
    "opcoes": [
      "Selecione uma resposta",
      "Data Lifecycle Management",
      "DSPM for AI",
      "Information Barriers",
      "Information Protection"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft Purview DSPM for AI é projetado para monitorar ferramentas de IA como o Microsoft 365 Copilot, fornecendo visibilidade sobre prompts, respostas e riscos de exposição de dados, permitindo detectar quando prompts de usuários contêm informações confidenciais.",
    "link": "https://learn.microsoft.com/pt-br/purview/dspm-for-ai",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Todos os usuários têm licenças do Microsoft 365 Copilot atribuídas. Alguns usuários relatam receber respostas do Copilot que contêm informações de um site do Microsoft SharePoint chamado Finance. Os usuários relatam que a informação é comercialmente sensível. Você precisa impedir que o Copilot forneça respostas que contenham informações do site Finance. O que você deve fazer?",
    "opcoes": [
      "No Microsoft Purview, crie uma política de Barreiras de Informação (Information Barrier - IB).",
      "No Microsoft Defender, crie um conector de dados.",
      "No Microsoft Entra, crie uma política de Acesso Condicional.",
      "No site Finance, configure as permissões."
    ],
    "resposta": 0,
    "explicacao": "As barreiras de informação (Information Barriers - IBs) são um recurso do Microsoft Purview que permite aos administradores definir políticas para bloquear ou restringir o compartilhamento de conteúdo ou o acesso entre grupos ou sites específicos, evitando que o Copilot recupere ou exiba informações comercialmente confidenciais de um site isolado.",
    "link": "https://learn.microsoft.com/pt-br/purview/information-barriers",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 que contém sites do Microsoft SharePoint e equipes do Microsoft Teams. Você descobre que os sites e as equipes são compartilhados com usuários fora da sua organização. Você precisa identificar quais sites e equipes foram compartilhados com os usuários externos. O que você deve usar?",
    "opcoes": [
      "o centro de administração do SharePoint",
      "o centro de administração do Microsoft Teams",
      "o centro de administração do Microsoft 365",
      "o portal do Microsoft Defender"
    ],
    "resposta": 0,
    "explicacao": "O centro de administração do SharePoint fornece recursos detalhados de visualização e auditoria para a atividade de compartilhamento em sites do SharePoint Online. A partir da seção de compartilhamento, é possível visualizar uma lista de sites compartilhados externamente, o tipo de compartilhamento e a data de criação do link, permitindo localizar rapidamente quais locais foram compartilhados com usuários externos.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa exige que todos os sites do Microsoft SharePoint tenham no mínimo dois proprietários. Você precisa garantir que os sites que tiverem menos de dois proprietários sejam marcados como somente leitura se não forem remediados. O que você deve configurar no centro de administração do SharePoint?",
    "opcoes": [
      "Site-level access restriction",
      "Data access governance reports",
      "Site lifecycle management",
      "Block download policy for SharePoint and OneDrive"
    ],
    "resposta": 2,
    "explicacao": "O gerenciamento do ciclo de vida do site (Site lifecycle management) permite que os administradores configurem políticas de governança, incluindo políticas de propriedade de site, para lidar com sites sem proprietários ou abaixo do número mínimo exigido de proprietários. Se o site entrar em um estado de não conformidade e não for remediado no prazo especificado, a política aciona automaticamente uma ação de governança, como definir o status do site como somente leitura.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/site-lifecycle-management",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode usar a solução <combobox> do Microsoft Purview para encontrar todo o conteúdo relacionado ao termo \"Project Falcon\" nos emails trocados por dois usuários.",
    "opcoes": [
      "Selecione uma resposta",
      "Audit",
      "Data Catalog",
      "eDiscovery",
      "Insider Risk Management"
    ],
    "resposta": 3,
    "explicacao": "Dentro do portal do Microsoft Purview, o eDiscovery (Descoberta Eletrônica) é a solução projetada especificamente para identificar, preservar, pesquisar, exportar e gerenciar informações eletrônicas em caixas de correio e arquivos, permitindo encontrar conteúdos baseados em palavras-chave específicas em comunicações de email.",
    "link": "https://learn.microsoft.com/pt-br/purview/ediscovery",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa usa políticas de prevenção contra perda de dados (DLP) do Microsoft Purview. Um usuário chamado User1 compartilha informações confidenciais com um usuário externo usando o Microsoft Teams. Você precisa identificar o conteúdo confessional que foi compartilhado. O que você deve usar no portal do Microsoft Purview?",
    "opcoes": [
      "Diagnostics",
      "Data explorer",
      "Content explorer",
      "Activity explorer"
    ],
    "resposta": 3,
    "explicacao": "O Activity Explorer (Explorador de atividades) foi desenvolvido para fornecer um registro detalhado e pesquisable de todas as atividades do usuário em serviços do Microsoft 365, incluindo o Microsoft Teams. Ele registra ações específicas como o compartilhamento de arquivos ou mensagens postadas que podem conter informações confidenciais, permitindo identificar o evento e o conteúdo compartilhado.",
    "link": "https://learn.microsoft.com/pt-br/purview/data-loss-prevention-policies",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "comboboxs",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa usar o Microsoft Purview para atender aos seguintes requisitos: Descobrir e classificar dados confidenciais em várias plataformas. Bloquear usuários de compartilhar propriedade intelectual com usuários externos. Qual solução do Microsoft Purview você deve usar para cada requisito?",
    "pares": [
      {
        "requisito": "Discover and classify sensitive data across multiple platforms",
        "opcoes": [
          "Communication Compliance",
          "Data Loss Prevention",
          "Information Protection",
          "Insider Risk Management"
        ],
        "resposta": 2
      },
      {
        "requisito": "Block users from sharing intellectual property with external users",
        "opcoes": [
          "Communication Compliance",
          "Data Loss Prevention",
          "Information Protection",
          "Insider Risk Management"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "O Microsoft Purview Information Protection é criado explicitamente para localizar, reconhecer, categorizar e rotular dados com base em critérios predefinidos de sensibilidade, digitalizando de forma uniforme em nuvens híbridas, plataformas multinuvem e aplicativos SaaS. O Microsoft Purview Data Loss Prevention (DLP) fornece uma camada automatizada de imposição de políticas que monitora ações transacionais do usuário e bloqueia o compartilhamento ou transferência de propriedade intelectual para destinatários externos não autorizados.",
    "link": "https://learn.microsoft.com/pt-br/purview/information-protection",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 E5. Você precisa impedir que os usuários compartilhem dados financeiros corporativos com usuários externos. O que você deve usar?",
    "opcoes": [
      "grupos de funções (role groups)",
      "políticas de prevenção contra perda de dados (DLP)",
      "políticas de gerenciamento de risco interno",
      "rótulos de retenção"
    ],
    "resposta": 1,
    "explicacao": "As políticas de prevenção contra perda de dados (DLP) são projetadas especificamente para detectar e impedir que informações confidenciais (como dados financeiros corporativos) sejam compartilhadas com partes não autorizadas, incluindo usuários externos. Elas podem identificar dados confidenciais com base em padrões ou rótulos e aplicar ações como bloquear o compartilhamento, enviar alertas ou exibir dicas de políticas.",
    "link": "https://learn.microsoft.com/pt-br/purview/dlp-learn-about-dlp",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você tem um site do Microsoft SharePoint chamado Site1 e um grupo de segurança chamado Group1. Você precisa impedir que todos os usuários que atualmente têm acesso ao Site1 acessem o conteúdo do site, a menos que o usuário também seja membro do Group1. O que você deve configurar?",
    "pares": [
      {
        "requisito": "Configuração",
        "opcoes": [
          "Restrict content from Microsoft 365 Copilot",
          "Restricted site access",
          "External file sharing",
          "Custom scripts"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "O recurso de acesso restrito (Restricted site access / Restricted Access Control - RAC) permite que o administrador clique em 'Editar' para especificar um grupo de segurança explícito (ou grupo do Microsoft 365) com permissão para acessar o site, bloqueando qualquer outro usuário que não seja membro designado desse grupo.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/restricted-access-control",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900",
    "imagemUrl": "img/5.png",
  },
  {
    "tipo": "unica",
    "texto": "Você precisa identificar arquivos e emails que contenham números de previdência social (SSNs) e números de cartão de crédito. O que você deve usar no portal do Microsoft Purview?",
    "opcoes": [
      "Data explorer",
      "Information Protection reports",
      "Information Protection policies",
      "Activity explorer"
    ],
    "resposta": 0,
    "explicacao": "O Data Explorer (Explorador de dados) é projetado para descobrir e analisar dados em várias fontes, incluindo conteúdos do Microsoft 365, utilizando rótulos de sensibilidade e classificação de dados para identificar, categorizar e atuar sobre informações confidenciais (como SSNs e números de cartão de crédito) por meio de classificadores predefinidos ou personalizados.",
    "link": "https://learn.microsoft.com/pt-br/purview/information-protection",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft 365 Copilot respeita os rótulos de sensibilidade do Microsoft Purview.",
      "O Microsoft 365 Copilot ignora as políticas de prevenção contra perda de dados (DLP) do Microsoft Purview.",
      "O Microsoft 365 Copilot respeita as permissões existentes do Microsoft 365."
    ],
    "respostas": [
      true,
      false,
      true
    ],
    "explicacao": "Afirmação 1: O Microsoft 365 Copilot se integra rigorosamente aos rótulos de sensibilidade do Purview; se um arquivo de origem possui regras de proteção como criptografia, o Copilot respeita esses controles e herda o rótulo. Afirmação 2: O Copilot não ignora as configurações de DLP, pois as políticas de DLP para o Copilot revisam interações conversacionais e interceptam transações caso o usuário tente usar dados confidenciais ou informações restritas. Afirmação 3: O Copilot opera dentro do contexto de segurança do usuário conectado e respeita totalmente os controles de acesso baseados em função do SharePoint, OneDrive e Teams, não podendo inventar permissões ou contornar configurações existentes.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/security-and-governance",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Os rótulos de sensibilidade do Microsoft Purview podem ser aplicados a <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure Blob Storage.",
      "Microsoft 365 Copilot conversations.",
      "Microsoft SharePoint sites."
    ],
    "resposta": 3,
    "explicacao": "Os rótulos de sensibilidade do Microsoft Purview suportam dois escopos principais de configuração: itens (arquivos individuais, emails e reuniões) e contêineres (o que abrange explicitamente sites do Microsoft SharePoint, Microsoft Teams e grupos do Microsoft 365).",
    "link": "https://learn.microsoft.com/pt-br/purview/sensitivity-labels",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "O recurso Restricted SharePoint Search permite restringir o acesso do <combobox> aos sites do Microsoft SharePoint sem impedir que os usuários acessem os arquivos e conteúdos aos quais têm permissão.",
    "opcoes": [
      "Selecione uma resposta",
      "administrator",
      "guest user",
      "Microsoft 365 Copilot",
      "Microsoft Purview eDiscovery"
    ],
    "resposta": 3,
    "explicacao": "Quando uma organização implanta o Microsoft 365 Copilot, a IA pode descobrir acidentalmente documentos com permissões amplas por meio da indexação de pesquisa de toda a empresa. A ativação da pesquisa restrita do SharePoint (Restricted SharePoint Search) restringe o limite de verificação do orquestrador de IA a uma lista predefinida e segura de sites permitidos.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/restricted-content-discovery",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um rótulo de sensibilidade pode ser aplicado a um site do Microsoft SharePoint.",
      "Um rótulo de sensibilidade pode ser aplicado a uma mensagem de email no Microsoft Exchange.",
      "Um rótulo de sensibilidade pode ser aplicado a dispositivos Windows 11."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "Afirmação 1: Os rótulos de sensibilidade suportam o escopo de contêineres (Groups & sites), permitindo aplicar rótulos diretamente a sites do Microsoft SharePoint para impor configurações de privacidade, controles de convidados externos e restrições de acesso condicional. Afirmação 2: Os rótulos suportam o escopo de itens, o que cobre explicitamente arquivos de usuários, eventos de calendário e mensagens de email individuais no Microsoft Exchange para aplicar criptografia ou marcas d'água. Afirmação 3: Os rótulos de sensibilidade são carimbos de metadados aplicados a conteúdos, arquivos ou contêineres de dados, e não diretamente a plataformas de sistemas operacionais ou hardware de endpoints como dispositivos Windows 11.",
    "link": "https://learn.microsoft.com/pt-br/purview/sensitivity-labels",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 E5. Você cria um rótulo de sensibilidade do Microsoft Purview chamado Label1. Você precisa garantir que os usuários possam aplicar o Label1 aos arquivos no Microsoft 365. O que você deve usar?",
    "opcoes": [
      "uma política de rótulo de sensibilidade (sensitivity label policy)",
      "um classificador treinável (trainable classifier)",
      "uma política de rótulo de retenção (retention label policy)",
      "uma política de rotulagem automática (auto-labeling policy)"
    ],
    "resposta": 0,
    "explicacao": "As políticas de rótulos de sensibilidade são projetadas para distribuir e gerenciar a aplicação de rótulos de sensibilidade em toda a organização, alinhando-se perfeitamente com o requisito de disponibilizar o Label1 para que os usuários o apliquem aos arquivos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma política de conformidade escrita que exige que todos os emails sejam retidos por sete anos e, em seguida, permanentemente excluídos. Qual solução do Microsoft Purview você deve usar?",
    "opcoes": [
      "Information Protection",
      "Data Lifecycle Management",
      "Data Loss Prevention",
      "Insider Risk Management"
    ],
    "resposta": 1,
    "explicacao": "O Data Lifecycle Management (Gerenciamento do ciclo de vida dos dados) no Microsoft Purview foi projetado para gerenciar todo o ciclo de vida dos dados de uma organização, desde a criação até a exclusão. Ele permite configurar políticas de retenção que podem reter emails automaticamente por um período especificado (sete anos) e aplicar uma ação de exclusão permanente após a expiração da política.",
    "link": "https://learn.microsoft.com/pt-br/purview/retention",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "No portal do Microsoft Purview, você pode usar o Data explorer para <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "create and manage privacy policies.",
      "perform searches for content in mailboxes and sites.",
      "identify sensitive information and where it is located.",
      "review the effectiveness of your data loss prevention (DLP) policies."
    ],
    "resposta": 3,
    "explicacao": "O Data Explorer foi projetado especificamente para fornecer visibilidade do patrimônio de dados, permitindo aos administradores visualizar a distribuição de informações confidenciais em todo o ambiente, entendendo onde os dados confidenciais estão armazenados, quais tipos de dados confidenciais existem com base em rótulos de classificação ou tipos de informações confidenciais, e quem tem acesso a eles.",
    "link": "https://learn.microsoft.com/pt-br/purview/ai-microsoft-purview",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma política de conformidade de comunicação pode detectar texto inadequado em mensagens do Microsoft Teams.",
      "Uma política de conformidade de comunicação pode detectar linguagem ofensiva em prompts do Microsoft 365 Copilot.",
      "Uma política de conformidade de comunicação pode ser usada para reter mensagens de email por 10 anos."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "Afirmação 1: A conformidade de comunicação (Communication Compliance) pode verificar mensagens do Microsoft Teams em busca de conteúdo inadequado ou de risco usando classificadores integrados ou personalizados. Afirmação 2: Ela inclui suporte para monitorar interações do Microsoft 365 Copilot, detectando linguagem ofensiva ou violações de políticas em prompts e respostas. Afirmação 3: Ela não é utilizada para retenção de dados a longo prazo (como reter emails por 10 anos), função que pertence às políticas de retenção do gerenciamento do ciclo de vida dos dados (Data Lifecycle Management).",
    "link": "https://learn.microsoft.com/pt-br/purview/communication-compliance",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa criar um agente do Microsoft 365 Copilot que possa criar gráficos e visualizações com base em uma pasta de trabalho do Microsoft Excel. O que você deve configurar para o agente?",
    "opcoes": [
      "o recurso de gerador de imagem (image-generator capability)",
      "o modelo Scrum Assistant",
      "o modelo Customer Insights Assistant",
      "o recurso de interpretador de código (code interpreter capability)"
    ],
    "resposta": 3,
    "explicacao": "O recurso de interpretador de código (code interpreter) permite que um agente do Copilot execute scripts personalizados que leem o conteúdo de uma pasta de trabalho do Excel, processem os dados e gerem dinamicamente gráficos ou visualizações. Ao configurar o interpretador para executar scripts, o agente pode criar programaticamente saídas visuais derivadas diretamente dos dados tabulares da planilha.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está testando o uso do Microsoft 365 Copilot e adquiriu 100 licenças do Microsoft 365 Copilot. Você precisa visualizar relatórios detalhados sobre o uso do Copilot no Microsoft Teams, como horas de reunião resumidas pelo Copilot e ações de reunião executadas usando o Copilot. O que você deve usar?",
    "opcoes": [
      "o relatório de prontidão do Microsoft 365 Copilot no centro de administração do Microsoft 365",
      "o relatório de uso do Microsoft 365 Copilot no centro de administração do Microsoft 365",
      "o painel do Microsoft 365 Copilot no Microsoft Viva Insights",
      "o relatório de uso de aplicativos do Microsoft 365 no centro de administração do Microsoft 365"
    ],
    "resposta": 2,
    "explicacao": "O painel do Microsoft 365 Copilot no Viva Insights é projetado especificamente para apresentar análises detalhadas no nível de atividade do Copilot, incluindo resumos de tempo de reunião e insights acionáveis, como ações de reunião geradas pelo Copilot, fornecendo as visualizações detalhadas necessárias para o monitoramento de pilotos dentro do Teams.",
    "link": "https://learn.microsoft.com/pt-br/viva/insights/org-team-insights/copilot-dashboard",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Um usuário chamado User1 cria um agente do Microsoft 365 Copilot chamado Agent1 e compartilha o agente com um usuário chamado User2. O que acontece se um administrador bloquear o Agent1?",
    "opcoes": [
      "O Agent1 é acessível a User1 e User2 até que os usuários desinstalem manualmente o Agent. Nenhum outro usuário pode instalar o Agent1.",
      "O Agent1 é acessível a User1 e User2, e nenhum outro usuário pode instalar o Agent1.",
      "O Agent1 é removido de User2, e User1 pode continuar a usar o Agent1.",
      "O Agent1 é removido de User1 e User2, e nenhum usuário pode instalar o Agent1."
    ],
    "resposta": 3,
    "explicacao": "Quando um administrador aplica um bloqueio em um agente do Copilot, a plataforma remove a instância do agente de todos os usuários que a instalaram anteriormente. O bloqueio é uma ação global em nível de locatário (tenant-wide); o agente se torna indisponível para instalação ou uso por qualquer pessoa, independentemente de ser o criador original ou um destinatário.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O relatório de uso do Microsoft 365 Copilot pode ser usado para visualizar os prompts do Copilot enviados pelos usuários.",
      "O relatório de uso do Microsoft 365 Copilot mostra o número total de usuários exclusivos em sua organização que possuem licenças do Microsoft 365 Copilot atribuídas.",
      "O relatório de uso do Microsoft 365 Copilot mostra o uso do Copilot de cada aplicativo individual do Microsoft 365."
    ],
    "respostas": [
      false,
      true,
      true
    ],
    "explicacao": "Afirmação 1: Para proteger a privacidade e a confidencialidade do usuário, o relatório de uso padrão não permite que os administradores visualizem o texto real dos prompts ou respostas geradas pelo Copilot. Afirmação 2: O relatório mostra o número total de usuários habilitados e ativos com licenças atribuídas para fornecer uma visão de alto nível do ROI de licenciamento. Afirmação 3: O relatório detalha a atividade por aplicativo para mostrar onde o Copilot está sendo mais utilizado (como Teams, Word, Excel, PowerPoint, Outlook e Loop).",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Na Galeria de Prompts do Copilot, você pode modificar um prompt salvo.",
      "Na Galeria de Prompts do Copilot, você pode compartilhar um prompt salvo com uma equipe do Microsoft Teams.",
      "Você pode criar um link compartilhado para um prompt que NÃO foi salvo na Galeria de Prompts do Copilot."
    ],
    "respostas": [
      true,
      true,
      true
    ],
    "explicacao": "Afirmação 1: É possível retornar à guia 'Your prompts' a qualquer momento para editar o título, o objetivo ou o contexto de um prompt salvo. Afirmação 2: Na Galeria de Prompts do Copilot, cada cartão de prompt salvo possui um botão de compartilhamento para enviá-lo a um Grupo do Microsoft 365 ou equipe do Teams. Afirmação 3: É possível gerar um link compartilhado (URL direta) passando o mouse sobre uma mensagem enviada no Copilot Chat, mesmo sem ter salvo o prompt previamente na Galeria.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/copilot-prompt-gallery",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os administradores podem remover um agente específico do Copilot de todos os usuários.",
      "No centro de administração do Microsoft 365, os administradores podem configurar os prompts de um agente do Copilot.",
      "Os administradores podem implantar agentes do Copilot para usuários específicos."
    ],
    "respostas": [
      true,
      false,
      true
    ],
    "explicacao": "Afirmação 1: Administradores Globais ou de Aplicativos Integrados podem gerenciar agentes do Copilot pelo centro de administração do Microsoft 365, permitindo remover ou despublicar um agente para todos os usuários. Afirmação 2: O centro de administração do Microsoft 365 é voltado para governança e implantação (quem pode ver o agente), e não para configurar os prompts, instruções ou a lógica interna (tarefa realizada no Copilot Studio). Afirmação 3: Os administradores utilizam o modelo de implantação de Aplicativos Integrados para escolher grupos ou usuários específicos ('Assign users') ao implantar um agente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "multipla",
    "texto": "Você planeja criar um agente no aplicativo Microsoft 365 Copilot para resolver um problema de negócios. Quais são dois motivos para criar o agente? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Você precisa usar um modelo de IA personalizado.",
      "Você precisa usar um conjunto personalizado de instruções que difere da experiência de chat.",
      "Você precisa raciocinar sobre um site específico.",
      "Você precisa agrupar chats relacionados em um bloco de notas do Copilot."
    ],
    "respostas": [
      1,
      2
    ],
    "explicacao": "B: Os agentes no aplicativo Copilot podem ser configurados com suas próprias instruções em estilo de prompt, permitindo que o agente siga um fluxo de trabalho ou tom personalizado que difere da experiência de chat padrão. C: Os agentes podem ser fundamentados para recuperar, indexar e raciocinar sobre conteúdos de um site específico, permitindo responder a consultas específicas de domínio.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/extensibility/agent-builder",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Se um usuário compartilhar um agente do Microsoft 365 Copilot, você poderá usar <combobox> para bloquear os usuários de usarem o agente.",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Foundry",
      "Microsoft Copilot Studio",
      "o centro de administração do Microsoft 365",
      "o portal do Power Apps"
    ],
    "resposta": 3,
    "explicacao": "Dentro do centro de administração do Microsoft 365 (normalmente em Configurações > Aplicativos integrados), os administradores têm autoridade para gerenciar o ciclo de vida de todos os aplicativos e agentes no locatário, permitindo bloquear o uso de agentes compartilhados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/extensibility/agent-builder",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para usar o Microsoft 365 Copilot Chat para raciocinar sobre dados da web, você precisa de uma licença do Microsoft 365 Copilot.",
      "Para usar o agente Researcher no Microsoft 365 Copilot, você precisa de uma licença do Microsoft 365 Copilot.",
      "Para adicionar um agente no aplicativo Microsoft 365 Copilot, você precisa de uma licença do Microsoft 365 Copilot."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "Afirmação 1: Você pode usar o Microsoft 365 Copilot Chat para raciocinar sobre dados da web sem uma licença do Microsoft 365 Copilot (com o Enterprise Data Protection). Afirmação 2: O uso do agente Researcher requer uma licença do Microsoft 365 Copilot. Afirmação 3: Adicionar certos agentes ou usar recursos básicos no aplicativo não exige estritamente a licença paga do Copilot em todos os contextos de extensibilidade ou criação de agentes básicos.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/credit-management",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft 365 Copilot exibe apenas os dados organizacionais para os quais os usuários individuais têm permissões.",
      "O Microsoft 365 Copilot usa os mesmos controles subjacentes para acesso a dados que outros serviços do Microsoft 365.",
      "O Microsoft 365 Copilot pode usar conectores para recuperar informações de fontes de dados de terceiros."
    ],
    "respostas": [
      true,
      true,
      true
    ],
    "explicacao": "Afirmação 1: O Copilot respeita o modelo de segurança existente da organização e segue o Controle de Acesso Baseado em Função (RBAC), exibindo apenas dados para os quais o usuário tem pelo menos permissão de visualização. Afirmação 2: O Copilot utiliza os mesmos controles de segurança subjacentes, respeitando rótulos de sensibilidade, acesso condicional e políticas de DLP do Microsoft 365. Afirmação 3: Ele pode utilizar conectores e plugins para interagir e recuperar informações de fontes externas de terceiros integradas ao ecossistema.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/microsoft-365-copilot-privacy",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "No Microsoft 365 Copilot, você deve usar <combobox> para realizar raciocínio de várias etapas sobre dados não estruturados.",
    "opcoes": [
      "Selecione uma resposta",
      "um bloco de notas",
      "o Chat",
      "o agente Analyst",
      "o agente Researcher"
    ],
    "resposta": 4,
    "explicacao": "O agente Researcher foi projetado especificamente para realizar investigações profundas e em várias fases (raciocínio de várias etapas) sobre dados não estruturados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/researcher-agent",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa atribuir uma licença a um usuário. O que você deve usar?",
    "opcoes": [
      "o portal do Microsoft Purview",
      "o centro de administração do Microsoft 365",
      "o centro de administração do Microsoft Teams"
    ],
    "resposta": 1,
    "explicacao": "O centro de administração do Microsoft 365 é o hub central para todas as operações de licenciamento. Ele permite que os administradores visualizem licenças disponíveis, atribuam-nas a usuários individuais ou grupos, modifiquem o tipo de licença e monitorem o uso e a conformidade.",
    "link": "https://learn.microsoft.com/pt-br/admin/manage/assign-licenses",
    "dominio": "Entender as tarefas básicas de administração para o Microsoft 365",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "O Microsoft 365 Copilot recupera dados de <combobox> usando o Microsoft Graph.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure OpenAI",
      "external users",
      "Microsoft SharePoint files",
      "web searchers"
    ],
    "resposta": 3,
    "explicacao": "O Microsoft 365 Copilot usa o Microsoft Graph para recuperar dados de fontes como SharePoint, OneDrive, Outlook e outros serviços do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/microsoft-365-copilot-architecture",
    "dominio": "Compreender os fundamentos do Microsoft 365 Copilot",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Sua empresa comprou recentemente licenças do Microsoft 365 Copilot para alguns usuários. Você precisa identificar quantos usuários sem licença usaram o Copilot no Microsoft Teams. Qual relatório de uso você deve usar no centro de administração do Microsoft 365?",
    "opcoes": [
      "Microsoft 365 Copilot Chat",
      "Microsoft 365 Copilot Search",
      "Microsoft 365 Apps",
      "Microsoft 365 Copilot"
    ],
    "resposta": 0,
    "explicacao": "Para identificar o número de usuários sem licença que usaram o Copilot no Microsoft Teams, o relatório mais adequado no centro de administração do Microsoft 365 é o Microsoft 365 Copilot Chat, devido ao seu foco em interações de chat onde o status de licenciamento para o uso no Teams é mais relevante.",
    "link": "https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage?view=o365-worldwide",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Um usuário chamado User1 é responsável por relatórios trimestrais de vendas. O User1 precisa identificar tendências de desempenho, gerar insights visuais e criar um resumo de anomalias em vários arquivos que contêm vários conjuntos de dados. O que você deve usar?",
    "opcoes": [
      "o agente Analyst no Microsoft 365 Copilot",
      "o agente Researcher no Microsoft 365 Copilot",
      "Microsoft 365 Copilot Search",
      "Copilot in Excel"
    ],
    "resposta": 0,
    "explicacao": "O agente Analyst no Microsoft 365 Copilot foi projetado especificamente para tarefas complexas de análise de dados, sendo ideal para identificar tendências, anomalias e correlacionar dados de vários arquivos e conjuntos de dados.",
    "link": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 que contém um site do Microsoft SharePoint chamado Site1. Você precisa identificar quaisquer alterações feitas por um administrador do site nas configurações de site do Site1. Qual relatório você deve usar no centro de administração do SharePoint?",
    "opcoes": [
      "Agent insights",
      "App insights",
      "Change history",
      "Data access governance",
      "OneDrive accounts",
      "Site policy comparison"
    ],
    "resposta": 2,
    "explicacao": "No centro de administração do SharePoint, o relatório Change history (Histórico de alterações) sob o painel de navegação Reports é explicitamente projetado para rastrear modificações administrativas e de configuração feitas em sites individuais do SharePoint (como atualizações em configurações de compartilhamento externo, limites de armazenamento ou alterações de propriedade por um administrador do site) em uma janela de até 180 dias.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/change-history-report",
    "dominio": "Entender as tarefas básicas de administração para o Microsoft 365",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está avaliando o licenciamento do Microsoft 365 Copilot. Em qual cenário você deve usar o faturamento pré-pago (pay-as-you-go)?",
    "opcoes": [
      "para fornecer aos usuários acesso ao assistente de IA no Copilot no Word",
      "para resumir as ações em reuniões do Microsoft Teams",
      "para gerar imagens em chats premium",
      "para disponibilizar um agente personalizado para usuários sem licença"
    ],
    "resposta": 3,
    "explicacao": "O faturamento pay-as-you-go é adequado para cenários em que o uso é variável ou precisa ser controlado por uso, especialmente ao estender recursos para usuários que não possuem uma licença padrão que cubra o recurso, como disponibilizar agentes personalizados para usuários sem licença.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/credit-management",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Você usa o Microsoft 365 Copilot. Você precisa agendar um prompt para ser executado à meia-noite. Qual tarefa você deve incluir na sua solução?",
    "opcoes": [
      "Criar um agente (Create an agent).",
      "Criar um bloco de notas (Create a notebook).",
      "Executar o prompt (Run the prompt).",
      "Salvar o prompt (Save the prompt)."
    ],
    "resposta": 2,
    "explicacao": "Para agendar um prompt para execução em um horário específico (como à meia-noite), o objetivo final da solução é disparar e executar o prompt no momento agendado, o que se alinha à ação de executar o prompt.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/automate-process-power-automate/",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Purview Communications Compliance pode detectar texto ofensivo em imagens armazenadas em sites do Microsoft SharePoint.",
      "O Microsoft Purview Communications Compliance anonimiza as identidades dos usuários por padrão durante investigações.",
      "O Microsoft Purview Communications Compliance adiciona um aviso (disclaimer) a todas as comunicações monitoradas."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "Afirmação 1: O Communications Compliance monitora tráfego interativo (como chats do Teams, emails, Viva Engage). Arquivos estáticos e imagens em repouso no SharePoint são governados por ferramentas de DLP ou Insider Risk com OCR. Afirmação 2: Para aderir a uma abordagem de privacidade desde a concepção, o Communications Compliance pseudonimiza/anonimiza nomes de exibição por padrão durante alertas. Afirmação 3: Ele é uma plataforma de inspeção passiva, detecção e mitigação, e nunca altera ou anexa blocos de texto ou avisos às mensagens dos usuários.",
    "link": "https://learn.microsoft.com/pt-br/purview/communication-compliance",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Todos os usuários possuem uma licença do Microsoft 365 Copilot atribuída. Você precisa impedir que os usuários gerem imagens usando o Copilot. O que você deve usar?",
    "opcoes": [
      "o portal do Microsoft Defender",
      "o centro de administração do Microsoft Entra",
      "o portal do Microsoft Purview",
      "o centro de administração do Microsoft 365"
    ],
    "resposta": 3,
    "explicacao": "O centro de administração do Microsoft 365 atua como o hub central para administrar todos os aspectos de uma assinatura do Microsoft 365, incluindo gerenciamento de usuários, licenciamento e configurações específicas de serviços, como o controle de recursos do Copilot (geração de imagens).",
    "link": "https://learn.microsoft.com/en-us/microsoft-365/admin/",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os administradores podem bloquear sites específicos de serem usados pelo Microsoft 365 Copilot.",
      "Os administradores podem bloquear o uso de pesquisa na web pelo Microsoft 365 Copilot ao responder a prompts de usuários.",
      "Os administradores podem bloquear o acesso ao agente Researcher no Microsoft 365 Copilot, permitindo o acesso ao agente Analyst."
    ],
    "respostas": [
      false,
      true,
      true
    ],
    "explicacao": "Afirmação 1: A fundamentação na web (web grounding) do Microsoft 365 Copilot não oferece um mecanismo granular de lista de bloqueio/permissão de domínio ou URL dentro do centro de administração do locatário. Afirmação 2: Os administradores globais podem desabilitar ou habilitar explicitamente a pesquisa na web/fundamentação de pesquisa do Bing no nível do locatário. Afirmação 3: Agentes de primeira parte fornecidos pela Microsoft (como o Researcher e o Analyst) são governados como entidades especializadas no centro de administração do Microsoft 365, permitindo aos administradores controle total para implantar, restringir ou desabilitar cada um deles de forma independente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/extensibility/agent-builder",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa garantir que os usuários possam usar um sistema externo como fonte de conhecimento para agentes personalizados do Microsoft 365 Copilot. O que você deve configurar no centro de administração do Microsoft 365?",
    "opcoes": [
      "Overview",
      "Agents",
      "Connectors",
      "Search",
      "Billing & usage",
      "Settings"
    ],
    "resposta": 2,
    "explicacao": "Os conectores (Connectors) fazem a ponte entre o Microsoft 365 Copilot e repositórios de dados corporativos externos e não pertencentes à Microsoft, permitindo que sejam utilizados como fontes de conhecimento.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/connectors",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja usar o Microsoft 365 Copilot. Você precisa fornecer a um usuário a capacidade de usar o Microsoft 365 Copilot, incluindo os agentes Researcher e Analyst. O que você deve usar?",
    "opcoes": [
      "o centro de administração do Microsoft 365",
      "o portal do Microsoft Purview",
      "o centro de administração do Microsoft Entra",
      "o portal do Microsoft Defender"
    ],
    "resposta": 0,
    "explicacao": "O centro de administração do Microsoft 365 é o hub central para gerenciar todos os aspectos dos serviços do Microsoft 365 para uma organização, incluindo licenciamento, permissões e configurações de recursos como o Copilot e seus agentes.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/?view=o365-worldwide",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está avaliando o faturamento pré-pago (pay-as-you-go) do Microsoft 365 Copilot em vez de comprar uma licença do Microsoft 365 Copilot. Em qual cenário o faturamento pré-pago pode ser aplicado?",
    "opcoes": [
      "realizar raciocínio de várias etapas usando o agente Researcher",
      "gerar um resumo de uma reunião do Microsoft Teams",
      "usar um agente personalizado fundamentado em dados de trabalho",
      "usar o assistente de IA para editar um documento no Copilot no Word"
    ],
    "resposta": 2,
    "explicacao": "O faturamento pay-as-you-go é mais adequado para cenários onde o uso é variável, imprevisível ou requer personalização além dos recursos padrão licenciados, como o uso de um agente personalizado fundamentado em dados de trabalho, o que permite pagar apenas pelo uso real.",
    "link": "https://www.microsoft.com/pt-br/microsoft-365/copilot/pricing",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem um site do Microsoft SharePoint chamado Site1. O Site1 contém todas as políticas do departamento de RH da empresa. As políticas são salvas como documentos do Microsoft Word. Todos os usuários têm acesso de leitura ao Site1. O gerente do departamento de RH relata que as solicitações dos usuários sobre as políticas NÃO estão sendo atendidas em tempo hábil, especialmente em feriados importantes. Você precisa recomendar uma solução para permitir que os usuários encontrem as políticas do departamento de RH. A solução deve fornecer aos usuários uma lista de consultas comuns e garantir que as respostas sejam fundamentadas apenas no Site1. O que você deve incluir na recomendação?",
    "opcoes": [
      "o assistente pessoal no Copilot no Word",
      "um agente personalizado do Microsoft 365 Copilot",
      "o agente Researcher no Microsoft 365 Copilot",
      "um bloco de notas do Microsoft 365 Copilot"
    ],
    "resposta": 1,
    "explicacao": "Um agente personalizado do Microsoft 365 Copilot pode ser configurado especificamente para indexar e extrair informações exclusivamente do Site1, garantindo que as respostas sejam fundamentadas apenas nas políticas de RH e fornecendo suporte imediato por meio de consultas comuns.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/extensibility/agent-builder",
    "dominio": "Executar tarefas administrativas básicas para Copilot e agentes (25 a 30%)",
    "simulado": "ab-900"
  }
];
