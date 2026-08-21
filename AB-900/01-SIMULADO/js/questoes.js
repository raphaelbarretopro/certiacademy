// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AB-900
// ==========================================

export const questoes = [
  {
    "tipo": "simnao",
    "texto": "Você deseja exibir as ações administrativas executadas por um administrador de serviços no Microsoft 365. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode usar a Pesquisa e inteligência no centro de administração do Microsoft 365.",
      "Você pode usar a Auditoria no portal do Microsoft Defender.",
      "Você pode usar a Auditoria no portal do Microsoft Purview."
    ],
    "respostas": [
      true,
      true,
      true
    ],
    "explicacao": "Afirmação 1: A Pesquisa e inteligência no centro de administração do Microsoft 365 possui recursos básicos de busca, embora pesquisas completas de eDiscovery e auditoria sejam frequentemente redirecionadas para o Purview. Afirmação 2: O portal do Microsoft Defender permite acessar logs de auditoria e eventos voltados especificamente para o gerenciamento de ameaças e telemetria dos produtos Defender. Afirmação 3: O portal do Microsoft Purview é a ferramenta central e principal para pesquisar logs de auditoria, investigando ações de usuários e administradores em todos os serviços do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/purview/audit-log-search",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)"
  },
  {
    "tipo": "combobox",
    "texto": "O Microsoft Entra Privileged Identity Management (PIM) fornece <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "acesso restrito aos serviços do Microsoft 365.",
      "o gerenciamento do ciclo de vida de usuários.",
      "o gerenciamento de aplicativos corporativos.",
      "ativação de função com limite de tempo."
    ],
    "resposta": 4,
    "explicacao": "O Microsoft Entra Privileged Identity Management (PIM) é um serviço que permite gerenciar, controlar e monitorar o acesso a recursos importantes, fornecendo ativação de função com limite de tempo (acesso Just-In-Time)[cite: 2]. O acesso restrito aos serviços é gerenciado pelo Acesso Condicional[cite: 2]. O gerenciamento do ciclo de vida dos usuários é tratado pelo Identity Governance[cite: 2]. O gerenciamento de aplicativos é feito na seção de Aplicativos Corporativos do Microsoft Entra ID[cite: 2].",
    "link": "https://learn.microsoft.com/pt-br/entra/id-governance/privileged-identity-management/pim-configure",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 E5. Você precisa garantir que um serviço de nuvem de terceiros possa se autenticar no Microsoft Entra. O que você deve configurar?",
    "opcoes": [
      "Um conector do Microsoft 365 Copilot",
      "Autenticação multifator (MFA)",
      "Uma política de Acesso Condicional",
      "Um registro de aplicativo"
    ],
    "resposta": 3,
    "explicacao": "Um registro de aplicativo cria uma entidade de serviço (service principal) no Microsoft Entra ID e fornece as credenciais necessárias (como ID do cliente e segredo ou certificado). Isso permite que serviços externos de nuvem se autentiquem de forma programática utilizando fluxos como o OAuth 2.0 (client-credential flow), sem a necessidade de interação humana. As outras opções, como MFA ou Acesso Condicional, servem para proteger ou criar regras para o acesso de identidades de usuários, mas não criam a identidade do aplicativo no locatário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity-platform/app-objects-and-service-principals",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)"
  },
  {
    "tipo": "combobox",
    "texto": "As políticas de Acesso Condicional <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "são configuradas usando o portal do Microsoft Defender.",
      "são aplicadas apenas a recursos locais.",
      "fornecem controle sobre como os usuários podem acessar aplicativos em nuvem.",
      "exigem uma caixa postal do Microsoft Exchange."
    ],
    "resposta": 3,
    "explicacao": "O Acesso Condicional é o mecanismo de diretrizes do Microsoft Entra ID que permite impor requisitos específicos de segurança para controlar como os usuários acessam aplicativos em nuvem. As políticas são gerenciadas no centro de administração do Microsoft Entra, aplicam-se primariamente a recursos em nuvem e não dependem de uma caixa postal do Exchange.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/overview",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "O princípio de IA responsável da Microsoft de <combobox> requer a supervisão de sistemas de IA para garantir que os humanos permaneçam no controle.",
    "opcoes": [
      "Selecione uma resposta",
      "responsabilidade (accountability)",
      "inclusão (inclusiveness)",
      "privacidade e segurança (privacy and security)",
      "confiabilidade e segurança (reliability and safety)",
      "transparência (transparency)"
    ],
    "resposta": 1,
    "explicacao": "O princípio de IA responsável de responsabilidade (accountability) dita que as pessoas que projetam e implantam sistemas de IA devem ser responsáveis por como esses sistemas operam, exigindo a supervisão humana e o controle sobre as ações e impactos da IA.",
    "link": "https://learn.microsoft.com/pt-br/ai/responsible-ai/",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Um usuário chamado User5 navega para https://myapps.microsoft.com. Após inserir seu nome de usuário e senha, o User5 recebe uma mensagem em seu dispositivo móvel solicitando a inserção de um número exibido na tela para aprovação. O User5 está usando <combobox> para autenticação multifator (MFA).",
    "opcoes": [
      "Selecione uma resposta",
      "email OTP",
      "o aplicativo Microsoft Authenticator",
      "SMS",
      "um Passe de Acesso Temporário (Temporary Access Pass)"
    ],
    "resposta": 2,
    "explicacao": "A tela apresentada com a solicitação para inserir um número na tela (number-matching) é uma característica do método de aprovação via notificações push do aplicativo Microsoft Authenticator, projetado para aumentar a segurança contra ataques de fadiga de MFA.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/how-to-authentication-authenticator-app",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "multipla",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa avaliar a Pontuação de Segurança de Identidade (Identity Secure Score) da sua organização. Quais dois fatores afetam a pontuação?",
    "opcoes": [
      "as permissões de sites do SharePoint",
      "o número de administradores globais",
      "senhas que nunca expiram",
      "a localização dos usuários"
    ],
    "respostas": [
      1,
      2
    ],
    "explicacao": "A Pontuação de Segurança de Identidade avalia a postura de segurança das identidades. Reduzir o número de administradores globais diminui o risco de acesso privilegiado, melhorando diretamente a pontuação. Além disso, evitar senhas que nunca expiram (garantindo alteração periódica) é um controle recomendado, enquanto senhas permanentes aumentam o risco e afetam negativamente a pontuação. Permissões do SharePoint e a localização dos usuários não afetam diretamente as métricas de identidade do Secure Score.",
    "link": "https://learn.microsoft.com/pt-br/security/secure-score/microsoft-secure-score",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa revisar o impacto de um incidente recente de phishing que teve como alvo os usuários de email. O que você deve usar?",
    "opcoes": [
      "o portal do Microsoft Defender",
      "o centro de administração do Microsoft 365",
      "o centro de administração do Microsoft Entra",
      "o centro de administração do Microsoft Exchange"
    ],
    "resposta": 0,
    "explicacao": "O portal do Microsoft Defender (Defender for Office 365) fornece recursos nativos para investigar incidentes de phishing, incluindo rastreamento de email, quarentena, relatórios de inteligência contra ameaças e o fluxo de trabalho de investigação e resposta. O centro de administração do Exchange gerencia o fluxo de correio e regras de transporte, mas carece das ferramentas integradas de investigação de phishing baseadas em inteligência contra ameaças disponíveis no portal do Defender.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/office-365-security/anti-phishing-protection",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender para Office 365 oferece proteção contra phishing e ataques de malware.",
      "O Microsoft Defender para Identidade monitora identidades em domínios do Active Directory.",
      "O Gerenciamento de Vulnerabilidades do Microsoft Defender fornece proteção para aplicativos de software como serviço (SaaS)."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "Afirmação 1: O Microsoft Defender para Office 365 protege e-mails e ferramentas de colaboração contra phishing e malware. Afirmação 2: O Microsoft Defender para Identidade monitora identidades locais do Active Directory contra ameaças e comportamentos suspeitos. Afirmação 3: O Gerenciamento de Vulnerabilidades do Microsoft Defender foca na avaliação e remediação de vulnerabilidades em ativos de endpoints e dispositivos, e não na proteção direta de aplicativos SaaS.",
    "link": "https://learn.microsoft.com/pt-br/defender-xdr/microsoft-365-defender",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 que contém um site do Microsoft SharePoint chamado Site1. As permissões para o Site1 são configuradas conforme mostrado na imagem. Você cria um novo usuário chamado User1 na assinatura. O User1 é <combobox> do Site1.",
    "opcoes": [
      "Selecione uma resposta",
      "um visitante do site (site visitor of)",
      "um proprietário do site (site owner of)",
      "um membro do site (site member of)",
      "impedido de acessar (prevented from accessing)"
    ],
    "resposta": 3,
    "explicacao": "Em um ambiente integrado do Microsoft 365, adicionar um usuário como membro padrão de um grupo do Microsoft 365 o atribui automaticamente ao grupo de Membros do Site padrão no SharePoint conectado, garantindo privilégios de leitura e edição (Edit) através do grupo 'Everyone except external users' configurado em Site members.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/sharepoint-site-permissions",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900",
    "imagemUrl": "img/1.png",

  },
  {
    "tipo": "multipla",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você cria um grupo de segurança chamado Group1 e atribui uma licença do Microsoft 365 E3 ao grupo. Você descobre que um usuário chamado User1 NÃO tem acesso aos recursos do Microsoft 365 E3. Você precisa garantir que o User1 possa acessar todos os recursos do Microsoft 365 E3. Quais duas ações você pode realizar? Cada seleção correta apresenta uma solução completa.",
    "opcoes": [
      "Adicionar o User1 ao Group1.",
      "Atribuir uma política de Acesso Condicional ao Group1.",
      "Atribuir uma política de Acesso Condicional ao User1.",
      "Atribuir uma licença ao User1."
    ],
    "respostas": [
      0,
      3
    ],
    "explicacao": "Quando uma licença é atribuída a um grupo de segurança, adicionar o usuário ao grupo faz com que a licença E3 seja efetiva para aquela conta, habilitando o acesso aos serviços. Alternativamente, o licenciamento baseado em grupo ou a atribuição direta da licença ao objeto do usuário no Microsoft Entra garante que ele possua a licença válida. Políticas de Acesso Condicional controlam riscos de entrada e acesso baseado em políticas, mas não concedem ou modificam direitos de licenciamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/enterprise-users/licensing-methods#licensing-by-group",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "No centro de administração do SharePoint, você pode criar um(a) <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "servidor.",
      "usuário.",
      "site.",
      "função."
    ],
    "resposta": 3,
    "explicacao": "No centro de administração do SharePoint, os administradores podem criar e gerenciar sites do SharePoint (como sites de equipe e de comunicação), configurar definições de sites e gerenciar armazenamento, compartilhamento e políticas. Servidores não são gerenciados diretamente pois o SharePoint Online é uma plataforma SaaS, enquanto a criação de usuários é feita no centro de administração do Microsoft 365 ou no Microsoft Entra.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/manage-sites",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você descobre que alguns usuários não conseguem entrar no Microsoft 365. Você precisa visualizar as tentativas de entrada malsucedidas no Microsoft 365. O que você deve usar?",
    "opcoes": [
      "o portal do Microsoft Defender",
      "o centro de administração do Microsoft Entra",
      "o portal do Microsoft Purview",
      "o centro de administração do Microsoft 365"
    ],
    "resposta": 1,
    "explicacao": "O centro de administração do Microsoft Entra é responsável por gerenciar identidades e acessos, fornecendo relatórios detalhados sobre atividades de entrada, incluindo tentativas com falha (relatórios de entrada), permitindo filtrar por status, usuário e endereço IP.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/monitoring-health/concept-sign-ins",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "No Microsoft Entra Privileged Identity Management (PIM), um administrador tornou você elegível para a função de Administrador de Usuários (User Administrator). Antes de poder criar uma conta de usuário, você deve <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "ativar a função.",
      "instalar o aplicativo Microsoft Authenticator.",
      "solicitar uma licença.",
      "atualizar suas informações de localização."
    ],
    "resposta": 1,
    "explicacao": "No Microsoft Entra Privileged Identity Management (PIM), uma atribuição elegível segue o princípio de segurança Just-In-Time (JIT), significando que você não tem as permissões da função ativas por padrão durante tarefas normais. Para elevar seus privilégios de acesso e executar ações administrativas completas (como criar uma conta de usuário), você deve navegar explicitamente até o portal do PIM e ativar a função.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-governance/privileged-identity-management/pim-configure",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 que contém um site do Microsoft SharePoint chamado Site1. Você precisa impedir que os usuários compartilhem o conteúdo do Site1 com usuários externos. O que você deve usar?",
    "opcoes": [
      "o conteúdo do Site1",
      "o centro de administração do SharePoint",
      "o centro de administração do Microsoft 365",
      "o centro de administração do Microsoft Entra"
    ],
    "resposta": 1,
    "explicacao": "Para impedir que os usuários compartilhem o conteúdo de um site específico com usuários externos de forma direcionada e eficaz, o centro de administração do SharePoint fornece acesso direto para gerenciar as configurações de compartilhamento no nível do site, permitindo desabilitar o compartilhamento externo apenas para o Site1.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/turn-external-sharing-on-or-off",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é uma suíte corporativa unificada que coordena detecção, prevenção, investigação e resposta em pontos de extremidade, identidades, e-mail e aplicativos para fornecer proteção integrada contra ataques sofisticados.",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Defender XDR",
      "Microsoft Entra Conditional Access",
      "Microsoft Entra ID Protection",
      "Microsoft Purview"
    ],
    "resposta": 1,
    "explicacao": "O Microsoft Defender XDR (anteriormente conhecido como Microsoft 365 Defender) é uma suíte unificada de defesa empresarial integrada que utiliza automação baseada em IA para cruzar sinais de ameaças entre domínios e coordenar automaticamente a detecção, prevenção e investigação, enquanto as outras opções tratam de políticas de acesso, proteção de identidade ou governança de dados.",
    "link": "https://learn.microsoft.com/pt-br/defender-xdr/microsoft-365-defender",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Você abre o centro de administração do Microsoft Entra. Resolver a recomendação de <combobox> melhorará a Pontuação de Segurança de Identidade (Identity Secure Score) o máximo.",
    "opcoes": [
      "Selecione uma resposta",
      "não expirar senhas (Do not expire passwords)",
      "usar funções administrativas com privilégios mínimos (Use least privileged administrative roles)",
      "habilitar política para bloquear autenticação herdada (Enable policy to block legacy authentication)",
      "exigir autenticação multifator para funções administrativas (Require multifactor authentication for administrative roles)"
    ],
    "resposta": 4,
    "explicacao": "Exigir MFA para funções administrativas fornece um aumento imediato expressivo (geralmente 10 pontos) na pontuação de segurança, superando o impacto de outras ações isoladas no Identity Secure Score, pois mitiga o caminho mais perigoso de comprometimento de credenciais.",
    "link": "https://learn.microsoft.com/pt-br/security/secure-score/microsoft-secure-score",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900",
    "imagemUrl": "img/2.png",
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para bloquear automaticamente uma conta de usuário quando uma entrada de risco é detectada?",
    "opcoes": [
      "Microsoft Defender for Identity",
      "Microsoft Entra ID Protection",
      "Microsoft Defender for Office 365",
      "Microsoft Entra Privileged Identity Management (PIM)"
    ],
    "resposta": 1,
    "explicacao": "O Microsoft Entra ID Protection é projetado para proteger identidades de usuários em um ambiente Zero Trust, oferecendo a capacidade de bloquear automaticamente contas de usuário ou exigir alteração de senha baseada em políticas de risco quando uma tentativa de entrada de alto risco é detectada.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-protection/overview-identity-protection",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Um usuário chamado John recebeu uma função administrativa conforme exibido na imagem (Global Reader). John pode <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "visualizar todos os usuários no locatário do Microsoft Entra",
      "visualizar todo o conteúdo em sites do Microsoft SharePoint",
      "ler todo o conteúdo em caixas postais do Microsoft Exchange",
      "executar eDiscovery de prompts do Microsoft 365 Copilot"
    ],
    "resposta": 1,
    "explicacao": "A função de Leitor Global (Global Reader) concede visibilidade total somente leitura para configurações em nível de locatário, propriedades, objetos de diretório e métricas em portais de administração. Ela permite visualizar todos os usuários no locatário do Microsoft Entra, mas não concede permissões de nível de conteúdo para inspetuar dados individuais em sites do SharePoint, caixas postais do Exchange ou realizar eDiscovery de prompts do Copilot.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/users/directory-assign-admin-roles",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900",
    "imagemUrl": "img/3.png",
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode usar um grupo de segurança do Microsoft Entra para atribuir permissões a recursos do Microsoft Entra ID.",
      "Você pode usar um grupo de segurança do Microsoft Entra para atribuir licenças do Microsoft 365.",
      "Você pode usar um grupo de segurança do Microsoft Entra para atribuir permissões a caixas postais do Microsoft Exchange."
    ],
    "respostas": [
      true,
      true,
      false
    ],
    "explicacao": "Afirmação 1: O Microsoft Entra ID permite atribuir controles de acesso baseados em função (RBAC) ou permissões diretamente a grupos de segurança, simplificando a governança de identidades. Afirmação 2: Através do licenciamento baseado em grupo, administradores podem anexar perfis de licença a um grupo de segurança do Microsoft Entra para provisionar licenças automaticamente aos membros. Afirmação 3: Grupos de segurança padrão do Microsoft Entra são barreiras de segurança estruturais puras e não são reconhecidos pelo subsistema do Exchange; para delegar permissões de caixa postal, é preciso usar um grupo de segurança habilitado para email ou um grupo do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/concept-learn-about-groups",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Quando você precisa adicionar um domínio a uma assinatura do Microsoft 365, você deve verificar o domínio <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "adicionando um registro DNS público.",
      "confirmando seu endereço comercial.",
      "enviando um certificado.",
      "enviando uma página da web."
    ],
    "resposta": 1,
    "explicacao": "Para verificar a propriedade de um domínio personalizado no Microsoft 365, você deve adicionar um registro DNS público (como um registro TXT ou MX) fornecido pela Microsoft. O sistema examina os registros públicos de DNS para confirmar que você controla o domínio antes de ativá-lo no locatário.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/setup/add-domain",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Zero Trust exige uma assinatura do Azure.",
      "O Zero Trust é uma estratégia de segurança, NÃO um produto específico.",
      "No centro de administração do Microsoft 365, você pode habilitar o Zero Trust para sua organização."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "Afirmação 1: O Zero Trust é um modelo de arquitetura e padrão de segurança que pode ser aplicado a qualquer infraestrutura tecnológica, não dependendo de uma assinatura ativa do Azure. Afirmação 2: O Zero Trust é uma estrutura de design centrada em pilares e princípios, não existindo um produto ou licença única chamada 'Zero Trust' para compra. Afirmação 3: Como o Zero Trust é uma metodologia arquitetônica global e abrangente, não existe um botão único de ativação ou chave liga/desliga no centro de administração do Microsoft 365 para habilitá-lo.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Qual afirmação descreve com precisão a autorização no Microsoft 365?",
    "opcoes": [
      "um processo para verificar se uma identidade é quem ou o que ela afirma ser",
      "um processo para exigir métodos adicionais de autenticação antes que uma identidade possa acessar recursos",
      "um processo para verificar se uma identidade tem permissão para acessar um recurso",
      "um processo para validar uma identidade de um sistema externo"
    ],
    "resposta": 2,
    "explicacao": "A autorização trata fundamentalmente do controle de acesso, determinando quais ações uma identidade pode executar em um recurso após ser autenticada. Isso envolve verificar permissões, funções e políticas de acesso para decidir se uma identidade autenticada pode acessar um recurso específico, enquanto a verificação de quem a identidade é refere-se à autenticação.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/add-users/about-admin-roles",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um membro do site de um site do Microsoft SharePoint pode convidar usuários para acessar o conteúdo do site.",
      "Um proprietário do site de um site do Microsoft SharePoint pode adicionar grupos do Microsoft 365 como membros do site.",
      "Um proprietário do site de um site do Microsoft SharePoint pode remover outro proprietário do site."
    ],
    "respostas": [
      true,
      true,
      true
    ],
    "explicacao": "Afirmação 1: Por padrão, as regras do SharePoint permitem que os membros do site compartilhem o site, arquivos ou pastas com novos indivíduos, a menos que o proprietário altere as configurações. Afirmação 2: Um proprietário do site possui controle total estrutural e pode inserir grupos do Microsoft 365 ou grupos de segurança habilitados para email diretamente para conceder acesso baseado em grupo. Afirmação 3: Todas as contas atribuídas ao grupo de proprietários compartilham privilégios administrativos idênticos (Controle Total), permitindo que um proprietário remova outro proprietário.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/understanding-permission-levels",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "multipla",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Quais duas tarefas você pode executar usando o centro de administração do Exchange? Cada seleção correta apresenta parte da solução.",
    "opcoes": [
      "Atribuir uma licença do Microsoft Exchange.",
      "Criar uma regra de fluxo de email.",
      "Criar uma caixa postal compartilhada.",
      "Adicionar um domínio personalizado."
    ],
    "respostas": [
      1,
      2
    ],
    "explicacao": "O centro de administração do Exchange (EAC) é um hub de gerenciamento central para serviços do Exchange Online, permitindo a criação de regras de fluxo de email (regras de transporte) para controlar o fluxo de mensagens e a criação e gerenciamento de caixas postais compartilhadas. A atribuição de licenças e a adição de domínios personalizados são gerenciadas principalmente através do centro de administração principal do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/exchange/exchange-admin-center",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Você está analisando as políticas de segurança da sua empresa como parte de uma estratégia Zero Trust. Qual afirmação descreve com precisão os princípios do Zero Trust?",
    "opcoes": [
      "O Zero Trust melhora a experiência do usuário minimizando os prompts de autenticação.",
      "O Zero Trust assume violação e verifica cada solicitação.",
      "O Zero Trust trata todas as solicitações da sua rede corporativa como confiáveis.",
      "O Zero Trust elimina a necessidade de revisar e ajustar regularmente as permissões de acesso."
    ],
    "resposta": 1,
    "explicacao": "O princípio do Zero Trust é centrado no conceito de 'nunca confiar, sempre verificar'. Esse paradigma assume violação e verifica cada solicitação de acesso, independentemente de sua origem, autenticando e autorizando antes de conceder acesso.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa gerar um relatório que mostre as permissões e os links de compartilhamento ativos do conteúdo armazenado em contas do Microsoft OneDrive. O que você deve usar?",
    "opcoes": [
      "Auditoria no portal do Microsoft Defender",
      "Relatórios no centro de administração do Microsoft 365",
      "Governança de acesso a dados no centro de administração do SharePoint",
      "eDiscovery no portal do Microsoft Purview"
    ],
    "resposta": 2,
    "explicacao": "A governança de acesso a dados no centro de administração do SharePoint é projetada para fornecer insights sobre como o conteúdo é acessado e compartilhado no SharePoint e no OneDrive, relatando especificamente permissões e links de compartilhamento ativos.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/introduction",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> inclui sinais, como histórico de colaboração, relevância de documentos e frequência de comunicação, que influenciam as respostas do Microsoft 365 Copilot.",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Copilot Studio",
      "Microsoft Graph",
      "Microsoft Purview",
      "Microsoft Viva Insights"
    ],
    "resposta": 2,
    "explicacao": "Dentro da arquitetura do Microsoft 365 Copilot, o Microsoft Graph atua como o gateway central de dados e inteligência. Ele agrega sinais de vários domínios — incluindo histórico de colaboração, relevância de documentos, relacionamentos e frequência de comunicação — para fundamentar as respostas do modelo de linguagem (LLM).",
    "link": "https://learn.microsoft.com/pt-br/graph/overview",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Prompts e respostas emitidos por usuários no Microsoft 365 Copilot são usados pela Microsoft para treinar modelos.",
      "O conteúdo recuperado pelo uso do Microsoft Graph é usado pela Microsoft para treinar modelos.",
      "O Microsoft 365 Copilot respeita as permissões de segurança em sua assinatura do Microsoft 365."
    ],
    "respostas": [
      false,
      false,
      true
    ],
    "explicacao": "Afirmação 1: Sob os compromissos de Proteção de Dados Empresariais (EDP) da Microsoft, prompts enviados e respostas geradas permanecem isolados na fronteira do locatário, não sendo usados para treinar modelos públicos ou fundamentais de IA. Afirmação 2: Os dados comerciais internos acessados via Microsoft Graph para fundamentar um prompt são totalmente protegidos e nunca alimentam algoritmos de treinamento de modelos. Afirmação 3: O Copilot opera estritamente em nome do usuário autenticado, utilizando os mesmos controles de acesso a dados, associações de sites do SharePoint e permissões de nível de pasta configurados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/microsoft-365-copilot-privacy",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os usuários podem usar o Microsoft 365 Copilot anonimamente.",
      "Os administradores podem permitir a compra de autoatendimento de licenças do Microsoft 365 Copilot.",
      "As licenças do Microsoft 365 Copilot podem ser atribuídas a usuários convidados do Microsoft Entra ID de outras organizações."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "Afirmação 1: O Microsoft 365 Copilot interage com dados confidenciais do locatário através do Microsoft Graph e exige estritamente autenticação de usuário com uma conta ativa, sendo impossível usá-lo anonimamente. Afirmação 2: No centro de administração do Microsoft 365, os administradores globais podem gerenciar explicitamente e permitir compras de autoatendimento para o Copilot. Afirmação 3: O licenciamento do Copilot não suporta a atribuição direta a contas de convidados (guest users) provenientes de outras organizações.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/microsoft-365-copilot-requirements",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "comboboxs",
    "texto": "Sua empresa usa a cobrança pré-paga (pay-as-you-go) do Microsoft 365 Copilot. A empresa deseja maior visibilidade dos custos de uso do Copilot e a capacidade de prever os gastos departamentais. Você precisa garantir que possa ver os custos do Copilot por departamento. O que você deve usar? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Portal",
        "opcoes": [
          "The Microsoft 365 admin center",
          "The Microsoft Entra admin center",
          "The Microsoft Purview portal"
        ],
        "resposta": 0
      },
      {
        "requisito": "Feature",
        "opcoes": [
          "An auto-claim policy",
          "A billing policy",
          "A Copilot connector"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Os perfis de consumo medido ou configurações de faturamento pré-pago para o Microsoft 365 Copilot são provisionados e monitorados no centro de administração do Microsoft 365 (The Microsoft 365 admin center) por meio da seção de faturamento, e a associação de políticas de faturamento (billing policies) ajuda a gerenciar os custos e a alocação departamental.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/subscriptions/renew-your-subscription?view=o365-worldwide",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "No centro de administração do Microsoft 365, a métrica \"Credits used\" no relatório de créditos do Copilot mostra o total de créditos usados por usuários em sua organização que <combobox> e estão interagindo com agentes fundamentados no trabalho no Microsoft 365 Copilot Chat.",
    "opcoes": [
      "Selecione uma resposta",
      "usam o Microsoft Teams",
      "são externos à sua organização",
      "possuem uma licença do Microsoft 365 Copilot atribuída",
      "NÃO possuem uma licença do Microsoft 365 Copilot atribuída"
    ],
    "resposta": 4,
    "explicacao": "A métrica \"Credits used\" no relatório de créditos do Copilot do centro de administração do Microsoft 365 foi projetada para rastrear o uso de recursos do Copilot por usuários que não possuem uma licença completa atribuída do Copilot, mas que interagem com agentes específicos ou recursos baseados em consumo que consomem créditos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/?view=o365-worldwide",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Usuários que possuem uma licença do Microsoft 365 E5 podem criar agentes do Microsoft 365 Copilot fundamentados na web.",
      "Os usuários devem receber uma licença do Microsoft 365 Copilot para usar o agente Analista (Analyst agent).",
      "Os usuários podem usar um prompt em linguagem natural para criar um agente do Microsoft 365 Copilot."
    ],
    "respostas": [
      false,
      true,
      true
    ],
    "explicacao": "Afirmação 1: Uma licença do Microsoft 365 E5 contém recursos de produtividade e segurança, mas criar agentes personalizados exige uma licença dedicada do Copilot ou do Copilot Studio. Afirmação 2: O agente Analista é um assistente avançado de raciocínio restrito a usuários provisionados com uma licença de produto Microsoft 365 Copilot. Afirmação 3: Os criadores podem definir o escopo operacional, instruções e diretrizes de agentes digitando prompts de conversação em linguagem natural.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/copilot/",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "No centro de administração do Microsoft Teams, você pode <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "atribuir uma licença do Teams a um usuário.",
      "implantar o cliente do Teams.",
      "gerenciar um dispositivo Microsoft Teams Rooms.",
      "impedir que os usuários criem equipes."
    ],
    "resposta": 3,
    "explicacao": "O centro de administração do Microsoft Teams permite gerenciar dispositivos Microsoft Teams Rooms, visualizar todos os dispositivos, monitorar status e integridade, aplicar configurações, atualizações e reiniciar ou solucionar problemas remotamente. Atribuir licenças é feito no centro de administração do M365, implantar clientes via Intune, e gerenciar a criação de equipes é feito a nível global de grupos.",
    "link": "https://learn.microsoft.com/pt-br/microsoftteams/manage-teams-in-modern-portal",
    "dominio": "Identificar os principais recursos e objetos dos serviços do Microsoft 365 (30 a 35%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa investigar incidentes de segurança e alertas gerados a partir dos dispositivos Windows 11 em sua organização. O que você deve usar?",
    "opcoes": [
      "Microsoft Entra ID Protection",
      "Microsoft Defender for Identity",
      "Microsoft Purview Insider Risk Management",
      "Microsoft Defender for Endpoint"
    ],
    "resposta": 3,
    "explicacao": "O cenário exige uma solução capaz de ingerir, correlacionar e investigar alertas de segurança gerados por telemetria de endpoint em dispositivos Windows 11. O Microsoft Defender for Endpoint fornece detecção e resposta de endpoint (EDR) contínua, análise de ameaças e recursos integrados de investigação de incidentes.",
    "link": "https://learn.microsoft.com/pt-br/defender-endpoint/microsoft-defender-endpoint",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um site do Microsoft SharePoint. Você precisa visualizar as configurações de SLabel1. O que você deve usar?",
    "opcoes": [
      "o portal do Microsoft Defender",
      "o centro de administração do SharePoint",
      "o centro de administração do Microsoft 365",
      "o portal do Microsoft Purview"
    ],
    "resposta": 3,
    "explicacao": "A pista principal na questão é 'SLabel1', que se refere a um rótulo de sensibilidade (sensitivity label). Os rótulos de sensibilidade fazem parte da proteção de dados e conformidade gerenciados através do portal do Microsoft Purview, não sendo configurações gerais de administração ou do SharePoint.",
    "link": "https://learn.microsoft.com/pt-br/purview/sensitivity-labels",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900",
    "imagemUrl": "img/4.png",
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Todos os usuários têm licenças do Microsoft 365 Copilot. Você precisa identificar onde o conteúdo sensível está sendo usado durante as interações com o Copilot, analisar os padrões de uso de conteúdo e fornecer recomendações sobre a aplicação das proteções adequadas. O que você deve usar?",
    "opcoes": [
      "Microsoft Viva Insights",
      "a solução Microsoft Purview DSPM for AI",
      "Microsoft Security Copilot",
      "a solução Microsoft Purview Insider Risk Management"
    ],
    "resposta": 1,
    "explicacao": "O Microsoft Purview DSPM for AI é projetado especificamente para descobrir, classificar e proteger dados regulamentados ou sensíveis que fluem por cargas de trabalho habilitadas para IA, como o Copilot. Ele examina continuamente os logs de interação, analisa os padrões de uso e recomenda ações de política adaptadas à sensibilidade do conteúdo.",
    "link": "https://learn.microsoft.com/pt-br/purview/data-security-posture-management-learn-about",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode usar <combobox> para revisar indicadores de ameaça correlacionados em incidentes de email, identidade e dispositivos em uma única exibição.",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Defender for Office 365",
      "Microsoft Defender XDR",
      "Microsoft Purview Compliance Manager",
      "Microsoft Purview Data Loss Prevention"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft Defender XDR é uma plataforma de defesa cibernética unificada baseada em SaaS e pré-violação que coordena a proteção, detecção, investigação e resposta entre endpoints, identidades, email e aplicativos, correlacionando sinais de várias fontes em uma única exibição de incidentes.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/microsoft-365-defender",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
    "tipo": "unica",
    "texto": "Sua organização tem uma assinatura do Microsoft 365 que contém um usuário chamado User1. O User1 planeja deixar sua empresa em duas semanas. Você precisa capturar a atividade do User1 para identificar se o usuário está exfiltrando dados. Qual solução do Microsoft Purview você deve usar?",
    "opcoes": [
      "Communication Compliance",
      "Data Security Posture Management",
      "Insider Risk Management",
      "Data Lifecycle Management"
    ],
    "resposta": 2,
    "explicacao": "O Insider Risk Management (IRM) foi projetado para detectar atividades de risco originadas de usuários, como downloads anormais de arquivos, compartilhamento excessivo ou exportações de dados em grande escala, correlacionando sinais de logs do Microsoft 365 para identificar comportamentos de exfiltração.",
    "link": "https://learn.microsoft.com/pt-br/purview/insider-risk-management",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
  },
  {
  "tipo": "simnao",
  "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
  "afirmacoes": [
    "O Microsoft Purview Compliance Manager fornece uma pontuação de conformidade baseada em risco para ajudar você a entender sua postura de conformidade.",
    "O Microsoft Purview Compliance Manager fornece orientação passo a passo para corrigir problemas de conformidade.",
    "O Compliance Manager faz parte do Microsoft Defender."
  ],
  "respostas": [
    true,
    true,
    false
  ],
  "explicacao": "Afirmação 1: O Compliance Manager fornece uma pontuação que mede a postura de conformidade atual e é baseada em risco. Afirmação 2: Ele inclui ações de melhoria com instruções detalhadas sobre o que fazer e como implementar controles. Afirmação 3: O Compliance Manager pertence ao ecossistema do Microsoft Purview (focado em governança, risco e conformidade), e não ao Microsoft Defender (focado em segurança e proteção contra ameaças).",
  "link": "https://learn.microsoft.com/pt-br/purview/compliance-manager",
  "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
  "simulado": "ab-900"
},
{
    "tipo": "combobox",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você descobre que arquivos do Microsoft SharePoint estão sendo compartilhados com usuários fora da sua organização. Você precisa identificar quais arquivos estão sendo compartilhados com os usuários externos. O que você deve usar no centro de administração do SharePoint? <combobox>.",
    "opcoes": [
        "Selecione uma resposta",
        "Agent insights",
        "App insights",
        "Change history",
        "Data access governance",
        "OneDrive accounts",
        "Site policy comparison"
    ],
    "resposta": 4,
    "explicacao": "O relatório de governança de acesso a dados (Data access governance) no centro de administração do SharePoint permite revisar quem tem acesso ao conteúdo do SharePoint e OneDrive, identificando especificamente arquivos compartilhados excessivamente, acesso externo e exposição de conteúdo sensível, ajudando a aplicar políticas de segurança e conformidade.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/data-access-governance-reports",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
},
{
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
        "Para os administradores usarem o SharePoint Advanced Management, todos os usuários da sua organização precisam ter uma licença do Microsoft 365 Copilot.",
        "O SharePoint Advanced Management pode ajudar a restringir o acesso do Microsoft 365 Copilot ao conteúdo do Microsoft SharePoint.",
        "O SharePoint Advanced Management está disponível como uma licença independente para organizações sem o Microsoft 365 Copilot."
    ],
    "respostas": [
        false,
        true,
        true
    ],
    "explicacao": "Afirmação 1: O SharePoint Advanced Management é um suplemento de administração e governança, e seu uso não exige que todos os usuários do locatário tenham uma licença do Microsoft 365 Copilot. Afirmação 2: Uma das principais finalidades do SharePoint Advanced Management é controlar e aplicar governança e restrições sobre o conteúdo que o Copilot pode acessar, reduzindo o risco de exposição de dados confidenciais. Afirmação 3: Ele está disponível como uma licença autônoma/independente, podendo ser adquirido e utilizado por organizações mesmo que não utilizem o Microsoft 365 Copilot.",
    "link": "https://learn.microsoft.com/pt-br/sharepoint/",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
},
{
    "tipo": "combobox",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. O departamento de RH da sua empresa solicita uma cópia de todos os arquivos recentes que foram modificados por um usuário chamado User1. O que você deve usar no portal do Microsoft Purview? <combobox>.",
    "opcoes": [
        "Selecione uma resposta",
        "Audit",
        "Communication Compliance",
        "Compliance alerts",
        "Compliance Manager",
        "Data Catalog",
        "Data Lifecycle Management",
        "Data Loss Prevention",
        "Data Security Investigations (preview)",
        "Data Security Posture Management",
        "DSPM for AI",
        "eDiscovery",
        "Information Barriers",
        "Information Protection",
        "Insider Risk Management"
    ],
    "resposta": 11,
    "explicacao": "O eDiscovery (descoberta eletrônica) no portal do Microsoft Purview é a solução principal utilizada para pesquisar, coletar e exportar dados e conteúdos em todo o Microsoft 365 (incluindo caixas de correio e arquivos modificados por usuários específicos), atendendo a solicitações internas, investigações ou casos legais.",
    "link": "https://learn.microsoft.com/pt-br/purview/ediscovery",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
},
{
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
        "O Microsoft Purview DSPM for AI pode fornecer insights sobre o uso do ChatGPT.",
        "O Microsoft Purview DSPM for AI pode fornecer insights sobre o uso do Microsoft 365 Copilot.",
        "O Microsoft Purview DSPM for AI pode bloquear usuários de usar o Microsoft 365 Copilot."
    ],
    "respostas": [
        true,
        true,
        true
    ],
    "explicacao": "Afirmação 1: O Microsoft Purview DSPM for AI ajuda as organizações a descobrir e monitorar o uso de aplicativos de IA generativa, como o ChatGPT, fornecendo visibilidade e monitoramento de riscos. Afirmação 2: Ele também fornece visibilidade sobre como o Microsoft 365 Copilot interage com os dados organizacionais e como os usuários o utilizam. Afirmação 3: Ele permite aplicar políticas e controles de segurança para governar o uso de IA, incluindo ações de bloqueio e proteção contra vazamento de dados em ferramentas de IA como o Copilot.",
    "link": "https://learn.microsoft.com/pt-br/purview/dspm-for-ai",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
},
{
    "tipo": "comboboxs",
    "texto": "Sua organização tem uma assinatura do Microsoft 365. Você precisa usar o Microsoft Purview para atender aos seguintes requisitos: Impedir que os usuários compartilhem arquivos que contenham Informações de Identificação Pessoal (PII). Usar aprendizado de máquina para treinar um modelo que detecta conteúdo confidenciais. Qual solução do Microsoft Purview você deve usar para cada requisito?",
    "pares": [
        {
            "requisito": "Prevent users from sharing PII",
            "opcoes": [
                "Communication Compliance",
                "Data Loss Prevention",
                "DSPM for AI",
                "Information Protection",
                "Insider Risk Management"
            ],
            "resposta": 1
        },
        {
            "requisito": "Use machine learning to train a model",
            "opcoes": [
                "Communication Compliance",
                "Data Loss Prevention",
                "DSPM for AI",
                "Information Protection",
                "Insider Risk Management"
            ],
            "resposta": 2
        }
    ],
    "explicacao": "O Microsoft Purview Data Loss Prevention (DLP) é projetado especificamente para detectar informações confidenciais, como PII, e impedir ou restringir o compartilhamento indevido de dados no Exchange, SharePoint, OneDrive e Microsoft Teams. Para treinar modelos personalizados usando aprendizado de máquina com base em exemplos de documentos sensíveis, utiliza-se a classificação baseada em machine learning e recursos associados de análise e descoberta de dados em IA e conformidade.",
    "link": "https://learn.microsoft.com/pt-br/purview/dlp-learn-about-dlp",
    "dominio": "Entenda as tarefas de proteção e governança de dados para Microsoft 365 e Copilot (35 a 40%)",
    "simulado": "ab-900"
}
];
