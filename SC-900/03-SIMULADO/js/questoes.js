// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "multipla",
    "texto": "Quando os padrões de segurança são habilitados para um locatário do Microsoft Entra ID, quais são os dois requisitos impostos?",
    "opcoes": [
      "Todos os usuários devem se autenticar a partir de um dispositivo registrado.",
      "Os administradores devem sempre usar o Azure Multi-Factor Authentication (MFA).",
      "O registro MFA (Multi-Factor Authentication) do Azure é necessário para todos os usuários.",
      "Todos os usuários devem se autenticar usando a entrada sem senha.",
      "Todos os usuários devem se autenticar usando o Windows Hello."
    ],
    "respostas": [1, 2],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "Os padrões de segurança do Azure impõem requisitos automáticos como o registro dos usuários no Azure Multi-Factor Authentication e a exigência de MFA para administradores. Não é necessário que todos os usuários se autentiquem sem senha, com Windows Hello ou por dispositivos registrados.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/concept-fundamentals-security-defaults"
  },
  {
    "tipo": "unica",
    "texto": "Que tipo de identidade é criada quando você registra um aplicativo com o Microsoft Entra ID?",
    "opcoes": [
      "uma conta de usuário",
      "uma identidade gerenciada atribuída pelo usuário",
      "uma identidade gerenciada atribuída pelo sistema",
      "uma entidade de serviço"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "Quando você registra um aplicativo por meio do portal do Azure, um objeto de aplicativo e uma entidade de serviço são criados automaticamente em seu diretório inicial ou locatário.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/develop/howto-create-service-principal-portal"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são as três tarefas que podem ser executadas usando a Proteção de Identidade do Microsoft Entra ID?",
    "opcoes": [
      "Configurar o acesso externo para organizações parceiras.",
      "Exportar a detecção de risco para utilitários de terceiros.",
      "Automatizar a detecção e a correção de riscos baseados em identidade.",
      "Investigar os riscos relacionados à autenticação do usuário.",
      "Criar e atribuir automaticamente rótulos de confidencialidade aos dados."
    ],
    "respostas": [1, 2, 3],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ A Proteção de Identidade do Microsoft Entra ID permite exportar detecções de risco para soluções de terceiros, automatizar respostas a riscos e investigar riscos relacionados à autenticação. ❌ Ela não é usada para configurar acesso externo ou aplicar rótulos de sensibilidade a dados.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-protection/overview-identity-protection"
  },
  {
    "tipo": "combobox",
    "texto": "Ao usar a autenticação multifator (MFA), uma senha é considerada algo que você <combobox>",
    "opcoes": [
      "é",
      "tem",
      "sabe",
      "compartilha"
    ],
    "resposta": 2,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "Uma senha é algo que o usuário sabe. Na autenticação multifator (MFA), são combinados fatores distintos como: algo que o usuário sabe (senha), algo que ele tem (token ou dispositivo), e algo que ele é (biometria).",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-mfa-howitworks"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Windows Hello para Empresas pode usar o aplicativo Microsoft Authenticator como um método de autenticação.",
      "O Windows Hello para Empresas pode usar um código PIN como método de autenticação.",
      "As informações de autenticação do Windows Hello para Empresas são sincronizadas em todos os dispositivos registrados por um usuário."
    ],
    "respostas": [false, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "❌ Afirmativa 1: Não — O Microsoft Authenticator é utilizado para autenticação multifator, mas não é um método do Windows Hello para Empresas. ✅ Afirmativa 2: Sim — O Windows Hello usa PIN como uma das formas de autenticação forte vinculada ao dispositivo. ❌ Afirmativa 3: Não — As credenciais do Windows Hello não são sincronizadas entre dispositivos, pois são vinculadas ao próprio dispositivo.",
    "link": "https://learn.microsoft.com/pt-br/windows/security/identity-protection/hello-for-business/hello-overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> pode ser atribuída a um recurso do Azure para que ele acesse outros serviços com segurança.",
    "opcoes": [
      "identidade do usuário",
      "identidade gerenciada",
      "entidade de serviço",
      "conta de convidado"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ Identidade gerenciada — Uma identidade gerenciada permite que um recurso do Azure acesse com segurança outros recursos protegidos pelo Microsoft Entra ID (Azure AD), sem necessidade de armazenar credenciais no código.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Grupos de segurança de rede (NSGs) podem negar o tráfego de entrada da Internet.",
      "Grupos de segurança de rede (NSGs) podem negar o tráfego de saída para a Internet.",
      "Grupos de segurança de rede (NSGs) podem filtrar o tráfego com base no endereço IP, protocolo e porta."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ NSGs permitem criar regras para negar tráfego de entrada e saída. ✔️ Essas regras podem ser baseadas em IP, protocolo e porta, ajudando no controle de acesso aos recursos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O Microsoft Intune pode ser usado para gerenciar dispositivos Android.",
      "O Microsoft Intune pode ser usado para provisionar assinaturas do Azure.",
      "O Microsoft Intune pode ser usado para gerenciar dispositivos de propriedade da organização e dispositivos pessoais."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ O Microsoft Intune é uma solução de gerenciamento de dispositivos móveis e aplicativos. Ele permite gerenciar dispositivos Android e iOS, incluindo dispositivos pessoais e corporativos. ❌ Intune não é usado para provisionar assinaturas do Azure, essa função pertence ao gerenciamento de licenças e subscrições da plataforma Azure.",
    "link": "https://learn.microsoft.com/pt-br/mem/intune/fundamentals/what-is-intune"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Você pode criar um Azure Bastion por rede virtual.",
      "O Azure Bastion fornece conexões de usuário seguras usando RDP.",
      "O Azure Bastion fornece uma conexão segura com uma máquina virtual do Azure usando o portal do Azure."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ O Azure Bastion é implantado por rede virtual. ✔️ Ele permite conexões seguras por RDP e SSH sem necessidade de IP público. ✔️ O acesso é feito diretamente do portal do Azure, garantindo segurança e praticidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/bastion/bastion-overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft Defender for Endpoint fornece a primeira linha de defesa contra ameaças cibernéticas, reduzindo a superfície de ataque?",
    "opcoes": [
      "correção automatizada",
      "investigação automatizada",
      "busca avançada",
      "proteção de rede"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "A proteção de rede é um recurso do Microsoft Defender for Endpoint que ajuda a proteger os dispositivos contra ameaças baseadas em rede, reduzindo a superfície de ataque logo na primeira linha de defesa.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/network-protection"
  },
  {
    "tipo": "combobox",
    "texto": "No Microsoft Sentinel, você pode automatizar tarefas comuns usando <combobox>",
    "opcoes": [
      "Ferramentas de investigação profunda",
      "Procurando ferramentas de pesquisa e consulta",
      "Playbooks",
      "PSastas de trabalho"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "No Microsoft Sentinel, os playbooks permitem automatizar respostas a incidentes e tarefas rotineiras. Eles são fluxos de trabalho baseados no Azure Logic Apps que podem ser acionados automaticamente por alertas, incidentes ou manualmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando usar os serviços de Nuvem do Azure. Eles estão analisando os diferentes aspectos de segurança quando se trata de privacidade da Microsoft. A Transparência é uma das principais entidades de segurança da Microsoft?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "A Transparência é um dos cinco pilares fundamentais de privacidade da Microsoft, ao lado de controle, segurança, fortes proteções legais e ausência de segmentação baseada em conteúdo. A Microsoft garante que os usuários tenham visibilidade sobre como os dados são coletados e utilizados.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/apply-responsible-ai-principles/"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando usar os serviços de Nuvem do Azure. Eles estão olhando para o conceito do princípio Zero Trust. Verificar explicitamente é um princípio de Confiança Zero?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "Verificar explicitamente é um dos três princípios fundamentais do modelo de segurança Zero Trust, junto com o uso de acesso com privilégios mínimos e a suposição de violação. Isso significa que nenhuma entidade é confiável por padrão, sendo sempre necessário autenticar e autorizar com base em todos os dados disponíveis.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/zero-trust-overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando usar os serviços de Nuvem do Azure. Qual das seguintes opções pode ser usada para garantir que os dados possam ser lidos somente por usuários autorizados?",
    "opcoes": [
      "Criptografia",
      "Deduplicação",
      "Arquivamento",
      "Compressão"
    ],
    "resposta": 0,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "Você pode garantir que os dados sejam criptografados. Assim, somente usuários autorizados teriam a chave de criptografia. A chave pode ser usada para descriptografar e ler os dados. Deduplicação elimina dados repetidos; arquivamento armazena dados que não são usados com frequência; compressão reduz o tamanho do armazenamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/encryption-overview"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está planejando usar o Microsoft Entra ID. Qual das seguintes opções é usada para descrever o termo exato para o Microsoft Entra ID?",
    "opcoes": [
      "Servidor de Federação",
      "Provedor de Identidade",
      "Servidor proxy",
      "Firewall"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "O Microsoft Entra ID é o provedor de identidade da Microsoft. Ele é usado para autenticação e autorização de usuários, aplicativos e dispositivos em ambientes em nuvem. Nenhuma das outras opções representa adequadamente esse papel.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis"
  },
  {
    "tipo": "multipla",
    "texto": "Sua empresa está planejando usar o Microsoft Entra ID para o armazenamento de identidades. Eles querem fazer uso do recurso de redefinição de senha de autoatendimento. Quais dos seguintes métodos de autenticação estão disponíveis para redefinição de senha de autoatendimento? Escolha 3 respostas entre as opções abaixo.",
    "opcoes": [
      "Email",
      "Um número de identificação de passaporte",
      "Uma mensagem de imagem",
      "Notificação de aplicativo móvel",
      "Código do aplicativo móvel"
    ],
    "respostas": [0, 3, 4],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "Os métodos de autenticação disponíveis para redefinição de senha de autoatendimento incluem: Email, Notificação de aplicativo móvel e Código do aplicativo móvel. Outras opções como número de passaporte ou imagem não fazem parte dos métodos válidos.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-sspr-howitworks"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando fazer uso do Microsoft Entra ID. Todas as versões do Microsoft Entra ID fornecem o mesmo conjunto de recursos?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "Nem todas as versões do Microsoft Entra ID oferecem o mesmo conjunto de recursos. Por exemplo, a versão gratuita não inclui recursos como redefinição de senha de autoatendimento para usuários da nuvem, gerenciamento de acesso a grupos e contrato de nível de serviço.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/compare"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando fazer uso de Grupos de Segurança de Rede. Você pode fazer uso de grupos de segurança de rede para filtrar o tráfego com base no endereço IP, protocolo e número da porta?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "Sim. Com grupos de segurança de rede (NSG), você pode criar regras para permitir ou negar tráfego com base em critérios como endereço IP de origem ou destino, número da porta e protocolo. Essas regras ajudam a controlar o acesso aos recursos em uma rede virtual do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando usar o Microsoft Entra ID Protection. Você pode usar a proteção de identidade para fornecer acesso a recursos no Azure?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "A Proteção de Identidade do Azure AD é usada para identificar e detectar riscos com base no comportamento de autenticação do usuário. Ela não concede acesso a recursos do Azure, mas ajuda a proteger contas com base em políticas de risco.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview-identity-protection"
  },
  {
    "tipo": "unica",
    "texto": "Você tem que decidir sobre o serviço certo para usar com base no requisito. Qual das seguintes opções você usaria para o requisito abaixo? “Fornecer conversão de endereços de rede”",
    "opcoes": [
      "Azure Bastion",
      "Azure Firewall",
      "Network Security Groups",
      "Azure DDoS Protection"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "O Azure Firewall permite a conversão de endereços IP públicos em IPs privados por meio da funcionalidade de tradução de endereços de rede (DNAT), permitindo a comunicação com recursos internos de forma segura. Os outros serviços listados não realizam esse tipo de tradução.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/tutorial-firewall-dnat"
  },
  {
    "tipo": "unica",
    "texto": "Você tem que decidir sobre o serviço certo para usar com base no requisito. Qual das seguintes opções você usaria para o requisito abaixo? “Fornecer uma maneira segura de RDP/SSH em máquinas virtuais do Azure”",
    "opcoes": [
      "Azure Bastion",
      "Azure Firewall",
      "Network Security Groups",
      "Azure DDoS Protection"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "O Azure Bastion permite conexões RDP e SSH seguras diretamente do portal do Azure sem expor as máquinas virtuais a redes públicas. Isso melhora a postura de segurança ao eliminar a necessidade de IPs públicos nas VMs.",
    "link": "https://learn.microsoft.com/pt-br/azure/bastion/bastion-overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando usar o serviço Microsoft Defender para Ponto de Extremidade. Você pode usar o Microsoft Defender for Endpoint para proteger computadores com Windows 10?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "Sim, os dispositivos com Windows 10 são compatíveis com o Microsoft Defender para Ponto de Extremidade e podem ser protegidos por esse serviço.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Qual das seguintes opções pode ser usada para o seguinte requisito: \"Ser capaz de implantar um conjunto de recursos, grupos de recursos, atribuições de funções a um conjunto de assinaturas.\"",
    "opcoes": [
      "Azure Policy",
      "Azure Blueprints",
      "Azure AD Identity Protection",
      "Azure Resource locks"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "Você pode usar o Azure Blueprints para implantar um conjunto de artefatos. Esses artefatos podem incluir modelos ARM, grupos de recursos e atribuições de função, permitindo a configuração padronizada de ambientes em várias assinaturas do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview"
  },
  {
    "tipo": "unica",
    "texto": "Os rótulos de confidencialidade no Microsoft 365 adicionam um cabeçalho e rodapé ao documento subjacente do Office 365 ao qual o rótulo é aplicado?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "Quando você aplica um rótulo de confidencialidade a um documento, ele também adicionará automaticamente um cabeçalho e rodapé ao conteúdo do Microsoft 365, como parte da proteção visual do documento.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está analisando as diferentes opções disponíveis quando se trata de soluções de segurança para o Microsoft 365. Um dos requisitos é: Fornecer acesso a um engenheiro de suporte da Microsoft aos dados do Exchange Online de um usuário. Qual das seguintes opções pode ser usada para esse requisito?",
    "opcoes": [
      "Barreiras de informação",
      "Ferramenta de pesquisa de conteúdo",
      "Bloqueador de clientes",
      "Gerenciamento de acesso privilegiado"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Bloqueador de clientes (Customer Lockbox) permite que engenheiros da Microsoft solicitem acesso aos dados de um usuário em situações específicas de suporte. O cliente pode aprovar ou negar a solicitação, garantindo controle total sobre o acesso aos dados. ❌ Barreiras de informação são usadas para evitar a colaboração entre grupos em conflito. ❌ Ferramenta de pesquisa de conteúdo permite localizar informações em caixas de correio e sites do SharePoint. ❌ Gerenciamento de acesso privilegiado é voltado para controle just-in-time sobre funções administrativas.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/customer-lockbox-requests"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa quer começar a usar o Azure. Eles estão analisando diferentes aspectos de segurança quando se trata de usar o Azure. Qual das seguintes opções pode ser usada para o seguinte requisito? “Ser capaz de sincronizar usuários do Active Directory local para o Microsoft Entra ID”",
    "opcoes": [
      "Azure AD Identity Management",
      "Azure Conditional Access",
      "Azure AD Roles",
      "Microsoft Entra Connect"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ Microsoft Entra Connect é usado para sincronizar identidades do Active Directory local com o Azure Active Directory, permitindo uma integração híbrida de identidades entre ambientes on-premises e a nuvem. ❌ Azure AD Identity Management está relacionado à proteção de identidades, não à sincronização. ❌ Azure Conditional Access aplica políticas de acesso com base em condições, como localização e risco. ❌ Azure AD Roles serve para atribuição de funções administrativas e não para sincronização.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/hybrid/whatis-azure-ad-connect"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um conjunto de recursos no Azure. Você pode adicionar um bloqueio de exclusão a um recurso que já tenha um bloqueio somente leitura?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Sim. É possível aplicar múltiplos tipos de bloqueios a um recurso no Azure. Um recurso pode ter tanto um bloqueio de somente leitura quanto um bloqueio de exclusão, o que oferece proteção adicional contra alterações e remoções acidentais.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources"
  },
  {
    "tipo": "unica",
    "texto": "Qual das seguintes opções é uma solução de resposta automatizada escalável, nativa da nuvem, de gerenciamento de eventos de informações de segurança e orquestração de segurança?",
    "opcoes": [
      "Azure Sentinel",
      "Azure Security Center",
      "Microsoft Entra ID",
      "Azure AD Identity Protection"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "O Azure Sentinel é uma solução nativa da nuvem, escalável, usada para orquestração e automação de respostas a eventos de segurança. Ele permite ingerir dados de várias fontes, identificar ameaças e responder a elas com ações automatizadas. Azure Security Center fornece recomendações de segurança, mas não orquestração completa. Microsoft Entra ID é voltado para identidade. Azure AD Identity Protection é usado para proteção baseada em risco e não para orquestração.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está atualmente procurando usar o serviço de Política do Azure. O serviço de Política do Azure pode ser usado para corrigir problemas detectados por meio de suas verificações de conformidade?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "Algumas das políticas na Política do Azure (Azure Policy) têm uma seção de Correção. Isso pode ser usado para corrigir problemas se os recursos não estiverem em conformidade com a política.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando fazer uso do Azure Blueprints. O Azure Blueprints pode ser usado para criar atribuições de função para uma assinatura do Azure?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "Ao criar um Azure Blueprints, você pode criar vários artefatos como parte do Blueprint. Uma delas são as atribuições de funções, o que permite controlar permissões dentro da assinatura do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual das seguintes opções fornece proteção avançada e inteligente do Azure e recursos e cargas de trabalho híbridos?",
    "opcoes": [
      "Azure Defender",
      "Azure Policies",
      "Azure Blueprints",
      "Azure Active Directory"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Azure Defender é uma solução de segurança que fornece proteção avançada para cargas de trabalho no Azure e ambientes híbridos. Ele faz parte da Central de Segurança do Azure e oferece alertas de segurança, pontuação de segurança e recomendações com base em inteligência de ameaças. ❌ Azure Policies é voltado para governança de recursos. ❌ Azure Blueprints é utilizado para implantar artefatos. ❌ Azure Active Directory é voltado para gerenciamento de identidade e não segurança de carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/security-center/azure-defender"
  },
  {
    "tipo": "unica",
    "texto": "Qual das seguintes opções está disponível para o serviço Gateway de Aplicativo do Azure que ajuda a proteger aplicativos Web contra explorações e vulnerabilidades comuns?",
    "opcoes": [
      "Azure Firewall",
      "Azure Web Application Firewall",
      "Azure Policy",
      "Azure Identity Protection"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Azure Web Application Firewall (WAF) é usado com o Gateway de Aplicativo do Azure para proteger aplicativos Web contra explorações e vulnerabilidades comuns, como injeção de SQL e ataques de script entre sites. ❌ Azure Firewall protege recursos na rede virtual. ❌ Azure Policy é voltado à governança. ❌ Azure Identity Protection protege identidades e não aplicativos Web.",
    "link": "https://learn.microsoft.com/pt-br/azure/web-application-firewall/ag/ag-overview"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está planejando fazer uso do Privileged Identity Management. O Gerenciamento de Identidades Privilegiadas pode ser usado para fornecer atribuições com limite de tempo para recursos do Azure?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ Sim. O Privileged Identity Management permite conceder acesso com limite de tempo aos recursos do Azure, garantindo maior controle e segurança sobre atribuições de funções privilegiadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/pim-resource-roles-assign-roles"
  },
  {
    "tipo": "unica",
    "texto": "Qual das seguintes técnicas de criptografia é utilizada para 'Criptografar informações que residem em armazenamento persistente em mídia física'?",
    "opcoes": [
      "Criptografia em trânsito",
      "Criptografia em repouso",
      "Criptografia na memória",
      "Criptografia SSL"
    ],
    "resposta": 1,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "✔️ Criptografia em repouso é usada para proteger dados armazenados em dispositivos físicos, como discos rígidos ou SSDs. Ela garante que as informações estejam protegidas mesmo quando não estão em uso.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/encryption-overview"
  },
  {
    "tipo": "unica",
    "texto": "Você está planejando usar o serviço de Firewall do Azure. Você pode usar o serviço Firewall do Azure para criptografar o tráfego de rede de entrada para máquinas virtuais do Azure?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "❌ O Firewall do Azure não é responsável por criptografar tráfego. ✔️ Ele é um serviço gerenciado usado para proteger os recursos da rede virtual do Azure, mas não realiza criptografia do tráfego de entrada para VMs.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/overview"
  },
  {
    "tipo": "unica",
    "texto": "Você está procurando usar as Revisões de Acesso do Microsoft Entra ID. Você pode usar esse serviço para revisar as associações de grupo para usuários?",
    "opcoes": [
      "Sim",
      "Não"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ Sim, as revisões de acesso do Azure AD podem ser usadas para revisar as associações de grupos e equipes para usuários. Isso ajuda a garantir que apenas os usuários apropriados mantenham acesso a recursos no Azure AD.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/governance/access-reviews-overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O Microsoft Entra ID Identity Protection gera detecções de risco assim que um usuário é autenticado.",
      "O Microsoft Entra ID Identity Protection atribui um nível de risco de Baixo, Médio ou Alto a cada evento de risco.",
      "O risco de usuário no Microsoft Entra ID Identity Protection representa a probabilidade de que uma identidade ou conta específica esteja comprometida."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ O Microsoft Entra ID Identity Protection gera detecções de risco após a autenticação do usuário. <br> ✔️ O Microsoft Entra ID Identity Protection atribui um nível de risco para cada evento de risco, como Baixo, Médio ou Alto. <br> ✔️ O risco de usuário no Microsoft Entra ID Identity Protection representa a probabilidade de que uma identidade ou conta esteja comprometida.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview"
  },
  {
    "tipo": "unica",
    "texto": "O que é uma avaliação no Compliance Manager?",
    "opcoes": [
      "Uma iniciativa de política que inclui várias políticas.",
      "Um dicionário de palavras que não são permitidas em documentos da empresa.",
      "Um agrupamento de controles de uma regulamentação, norma ou política específica.",
      "Uma orientação recomendada para ajudar as organizações a se alinharem aos seus padrões corporativos."
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Uma avaliação no Compliance Manager é um agrupamento de controles provenientes de uma regulamentação, norma ou política específica.<br>❌ Uma iniciativa de política envolve múltiplas políticas, mas não é uma avaliação.<br>❌ Um dicionário de palavras é utilizado em políticas de DLP, mas não caracteriza uma avaliação.<br>❌ A orientação recomendada ajuda no alinhamento com os padrões, mas não é uma avaliação propriamente dita.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager-overview"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para visualizar o Microsoft Secure Score para dispositivos?",
    "opcoes": [
      "Microsoft Defender for Cloud Apps",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Office 365"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ O Microsoft Defender for Endpoint é a ferramenta usada para visualizar o Microsoft Secure Score para dispositivos, permitindo avaliar a postura de segurança dos endpoints.<br>❌ O Microsoft Defender for Cloud Apps é usado para proteger aplicativos em nuvem.<br>❌ O Microsoft Defender for Identity foca na proteção das identidades.<br>❌ O Microsoft Defender for Office 365 é usado para proteger aplicativos do Office 365.",
    "link": "https://learn.microsoft.com/pt-br/defender-xdr/microsoft-secure-score"
  },
  {
    "tipo": "dragdrop",
    "texto": "Correlacione o recurso do Microsoft Defender para Office 365 à descrição apropriada, arrastando o item equivalente a opção abaixo:",
    "itens": [
      { "label": "Explorador de Ameaças" },
      { "label": "Rastreadores de Ameaças" },
      { "label": "Proteção contra Phishing" }
    ],
    "grupos": [
      "Fornece inteligência sobre questões cibernéticas prevalentes.",
      "Fornece relatórios em tempo real para identificar e analisar ameaças recentes.",
      "Detecta tentativas de personificação."
    ],
    "respostas": {
      "Fornece inteligência sobre questões cibernéticas prevalentes.": ["Rastreadores de Ameaças"],
      "Fornece relatórios em tempo real para identificar e analisar ameaças recentes.": ["Explorador de Ameaças"],
      "Detecta tentativas de personificação.": ["Proteção contra Phishing"]
    },
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Rastreadores de Ameaças — Fornece inteligência sobre questões cibernéticas prevalentes.<br>✔️ Explorador de Ameaças — Fornece relatórios em tempo real para identificar e analisar ameaças recentes.<br>✔️ Proteção contra Phishing — Detecta tentativas de personificação.",
    "link": "https://learn.microsoft.com/pt-br/training/defender/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Cada regra do grupo de segurança de rede (NSG) deve ter um nome exclusivo.",
      "As regras padrão do grupo de segurança de rede (NSG) podem ser excluídas.",
      "As regras do grupo de segurança de rede (NSG) podem ser configuradas para verificar tipos de protocolos de rede TCP, UDP ou ICMP."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ Cada regra de um NSG deve ter um nome único.<br>❌ As regras padrão de NSG não podem ser excluídas, mas podem ser alteradas.<br>✔️ As regras do NSG podem ser configuradas para filtrar tráfego com base em protocolos de rede como TCP, UDP ou ICMP.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/security-overview"
  },
  {
    "tipo": "combobox",
    "texto": "Quando os usuários tentam acessar uma aplicação ou serviço, <combobox> controla seu nível de acesso.",
    "opcoes": [
      "Administração",
      "Auditoria",
      "Autenticação",
      "Autorização"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "✔️ A autorização é o processo que determina o nível de acesso do usuário a uma aplicação ou serviço após a autenticação ser realizada. <br> ❌ Administração refere-se ao controle e gerenciamento de usuários e serviços. <br> ❌ Auditoria refere-se ao processo de monitoramento e registro das atividades dos usuários. <br> ❌ Autenticação é o processo de verificação da identidade de um usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/active-directory-whatis"
  },
  {
    "tipo": "unica",
    "texto": "O que os clientes são responsáveis ao avaliar a segurança em um modelo de serviços de software como serviço (SaaS)?",
    "opcoes": [
      "Sistemas operacionais",
      "Controles de rede",
      "Aplicações",
      "Contas e identidades"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "✔️ No modelo SaaS, os clientes são responsáveis pela segurança das contas e identidades, garantindo o gerenciamento adequado de usuários e autenticação. <br> ❌ Sistemas operacionais e controles de rede são responsabilidade do provedor de SaaS, enquanto as aplicações são geralmente gerenciadas pelo fornecedor de SaaS. <br> ❌ Aplicações e sistemas operacionais são responsabilidades do fornecedor do serviço, não do cliente.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> fornece capacidades de login único (SSO) através de vários provedores de identidade.",
    "opcoes": [
      "Um controlador de domínio",
      "Serviços de domínio do Active Directory (AD DS)",
      "Gerenciamento de Identidade Privilegiada do Microsoft Entra ID (PIM)",
      "Federação"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ A Federação fornece capacidades de SSO entre diferentes provedores de identidade. <br> ❌ Um controlador de domínio e AD DS estão mais relacionados ao gerenciamento de identidades locais, enquanto PIM está mais focado em gerenciar acesso privilegiado.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-fed"
  },
  {
    "tipo": "combobox",
    "texto": "Em um ambiente que possui recursos locais e recursos na nuvem, deve ser o perímetro de segurança principal <combobox>",
    "opcoes": [
      "A nuvem",
      "Um firewall",
      "Identidade",
      "Microsoft Defender for Cloud"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ A identidade deve ser o perímetro de segurança principal, pois é a primeira linha de defesa contra acessos não autorizados. <br> ❌ A nuvem, o firewall e o Microsoft Defender for Cloud são importantes, mas a identidade é a chave para proteger o acesso aos recursos.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-protection/overview-identity-protection"
  },
  {
    "tipo": "unica",
    "texto": "O que o Acesso Condicional avalia ao usar o Microsoft Entra ID Identity Protection?",
    "opcoes": [
      "Ações do usuário",
      "Membro de grupo",
      "Conformidade do dispositivo",
      "Risco do usuário"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-3",
    "explicacao": "✔️ O Acesso Condicional avalia o risco do usuário com base em vários sinais, como comportamento e padrões de login. ❌ Ações do usuário, membro de grupo e conformidade do dispositivo não são os principais critérios avaliados pelo Acesso Condicional com o Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual declaração representa um princípio de privacidade da Microsoft?",
    "opcoes": [
      "A Microsoft gerencia as configurações de privacidade para seus clientes.",
      "A Microsoft respeita as leis de privacidade locais que são aplicáveis aos seus clientes.",
      "A Microsoft usa dados de e-mail e bate-papo hospedados de clientes para publicidade direcionada.",
      "A Microsoft não coleta nenhum dado de cliente."
    ],
    "resposta": 1,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-3",
    "explicacao": "✔️ A Microsoft respeita as leis locais de privacidade aplicáveis aos seus clientes. Isso garante que a privacidade dos clientes seja tratada conforme as regulamentações locais.<br>❌ A Microsoft não gerencia diretamente as configurações de privacidade de seus clientes, mas respeita as leis aplicáveis.<br>❌ A Microsoft não utiliza dados de clientes para publicidade direcionada.<br>❌ A Microsoft coleta dados de clientes para garantir a segurança e fornecer serviços, conforme acordado nos termos e condições.",
    "link": "https://www.microsoft.com/pt-br/privacy/privacystatement"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox>, é uma ferramenta que coleta dados de vários sistemas, identifica correlações ou anomalias e gera alertas e incidentes.",
    "opcoes": [
      "Gerenciamento de Informações e Eventos de Segurança (SIEM)",
      "Resposta Automática Orquestrada de Segurança (SOAR)",
      "Troca Automatizada Confiável de Informações de Indicadores (TAXII)",
      "Redução da Superfície de Ataque (ASR)"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ O sistema SIEM é uma ferramenta que coleta dados de vários sistemas, identifica correlações ou anomalias, e gera alertas e incidentes.<br>❌ O SOAR é utilizado para orquestrar e automatizar respostas a incidentes, mas não se foca na coleta de dados.<br>❌ O TAXII é um protocolo utilizado para troca de informações de indicadores de ameaças, não sendo uma solução para coleta e correlação de eventos.<br>❌ O ASR visa a redução da superfície de ataque, mas não realiza a coleta e correlação de eventos.",
    "link": "https://www.microsoft.com/pt-br/security/business/security-101/what-is-siem"
  },
  {
    "tipo": "combobox",
    "texto": "O Microsoft Sentinel usa o Azure Logic Apps para automatizar e orquestrar respostas a alertas <combobox>",
    "opcoes": [
      "Regras analíticas",
      "Consultas de hunting",
      "Playbooks",
      "Workbooks"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-3",
    "explicacao": "✔️ Os Playbooks no Microsoft Sentinel são usados para automatizar e orquestrar respostas a alertas.<br>❌ Regras analíticas são usadas para detectar anomalias, mas não para orquestrar respostas a alertas.<br>❌ Consultas de hunting são usadas para procurar ameaças, mas não para orquestrar respostas.<br>❌ Workbooks são usados para visualizar dados, mas não para automatizar respostas a alertas.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/automation/create-playbooks?tabs=azure-portal%2Cconsumption"
  }
];
