// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Qual recurso de conformidade você deve usar para identificar documentos que são currículos de funcionários?",
    "opcoes": [
      "Classificadores pré-treinados",
      "Explorador de atividades",
      "eDiscovery",
      "Explorador de conteúdo"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ Os classificadores pré-treinados são usados para identificar documentos específicos, como currículos de funcionários, com base no conteúdo. ❌ O explorador de atividades é usado para monitorar e analisar as atividades dos usuários, mas não para identificar documentos específicos. ❌ eDiscovery é uma ferramenta de descoberta eletrônica de documentos, mas não é especificamente voltada para identificar tipos específicos de documentos. ❌ O explorador de conteúdo ajuda a visualizar dados, mas não é usado para identificar documentos específicos.",
    "link": "https://learn.microsoft.com/pt-br/purview/trainable-classifiers-get-started-with"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os pilares do Zero Trust aos requisitos apropriados, arrastando até sua descrição abaixo:",
    "itens": [
      { "label": "Dados" },
      { "label": "Identidades" },
      { "label": "Redes" }
    ],
    "grupos": [
      "Deve ser segmentado",
      "Deve ser verificado usando autenticação forte",
      "Deve ser classificado, rotulado e criptografado com base em seus atributos"
    ],
    "respostas": {
      "Deve ser segmentado": ["Redes"],
      "Deve ser verificado usando autenticação forte": ["Identidades"],
      "Deve ser classificado, rotulado e criptografado com base em seus atributos": ["Dados"]
    },
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "✔️ Redes precisam ser segmentadas para evitar movimentos laterais e limitar o acesso. ✔️ As identidades devem ser verificadas com autenticação forte para garantir que apenas usuários autenticados tenham acesso. ✔️ Os dados precisam ser classificados, rotulados e criptografados com base em seus atributos para garantir sua segurança.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de ações de pontuação de conformidade às tarefas apropriadas, arrastando até a descrição abaixo:",
    "itens": [
      { "label": "Corretiva" },
      { "label": "Detectiva" },
      { "label": "Preventiva" }
    ],
    "grupos": [
      "Use criptografia para proteger dados em repouso",
      "Monitore ativamente os sistemas para identificar irregularidades que possam representar riscos"
    ],
    "respostas": {
      "Use criptografia para proteger dados em repouso": ["Preventiva"],
      "Monitore ativamente os sistemas para identificar irregularidades que possam representar riscos": ["Detectiva"]
    },
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ A ação preventiva é usada para proteger dados de forma proativa, como criptografá-los para garantir a segurança. ✔️ A ação detectiva envolve o monitoramento ativo dos sistemas para identificar potenciais riscos ou falhas que possam ser exploradas.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/insider-risk-management"
  },
  {
    "tipo": "unica",
    "texto": "Qual pilar de identidade está relacionado ao rastreamento dos recursos acessados por um usuário?",
    "opcoes": [
      "Autorização",
      "Auditoria",
      "Administração",
      "Autenticação"
    ],
    "resposta": 1,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "✔️ O pilar de Auditoria é responsável por monitorar e registrar os recursos acessados por um usuário, ajudando a identificar acessos não autorizados ou atividades suspeitas. ❌ O pilar de Autorização trata da concessão de permissões, não do monitoramento de acessos. ❌ Administração é relacionado à gestão de identidades, mas não especificamente ao rastreamento de acessos. ❌ Autenticação está associada à verificação da identidade do usuário, não ao rastreamento de seus acessos.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/introduction-identity-access-management"
  },
  {
    "tipo": "unica",
    "texto": "O que pode ser criado no Active Directory Domain Services (AD DS)?",
    "opcoes": [
      "Aplicações de linha de negócios (LOB) que exigem autenticação moderna",
      "Contas de computador",
      "Aplicações de software como serviço (SaaS) que exigem autenticação moderna",
      "Dispositivos móveis"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ No Active Directory Domain Services (AD DS), podem ser criadas contas de computador para autenticação e gerenciamento de dispositivos dentro de uma rede. ❌ As aplicações de linha de negócios e SaaS geralmente requerem outros serviços de identidade, como o Microsoft Entra ID. ❌ O AD DS não é focado em gerenciamento de dispositivos móveis.",
    "link": "https://learn.microsoft.com/pt-br/windows-server/identity/ad-ds/active-directory-domain-services"
  },
  {
    "tipo": "combobox",
    "texto": "Quando os usuários fazem login, o recurso <combobox> verifica as credenciais deles para provar sua identidade.",
    "opcoes": [
      "Administração",
      "Auditoria",
      "Autenticação",
      "Autorização"
    ],
    "resposta": 2,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "✔️ A autenticação é o processo que verifica as credenciais do usuário para garantir que ele seja quem diz ser. ❌ A administração está relacionada à gestão de recursos. ❌ A auditoria é usada para monitorar e registrar atividades, não para verificar credenciais. ❌ A autorização ocorre após a autenticação, decidindo os recursos aos quais o usuário terá acesso.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/active-directory-whatis"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "A autorização é usada para identificar o nível de acesso a um recurso.",
      "A autenticação é a prova de que os usuários são quem dizem ser.",
      "A autenticação identifica se você pode ler e gravar em um arquivo."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "✔️ A autorização determina os níveis de acesso de um usuário a recursos. ✔️ A autenticação serve para garantir que os usuários são realmente quem dizem ser. ❌ A autenticação não define permissões de leitura ou gravação, isso é responsabilidade da autorização.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/active-directory-whatis"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma função dos controles de sessão de Acesso Condicional?",
    "opcoes": [
      "Impor a conformidade do dispositivo",
      "Impor a conformidade do aplicativo cliente",
      "Habilitar experiências limitadas, como bloquear o download de informações sensíveis",
      "Solicitar autenticação multifatorial (MFA)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ Os controles de sessão do Acesso Condicional permitem habilitar experiências limitadas, como bloquear o download de informações sensíveis. ❌ Impor conformidade de dispositivos, aplicativos cliente e autenticação multifatorial são funções relacionadas a outras configurações do Acesso Condicional, mas não aos controles de sessão.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/concept-conditional-access-session"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "O Microsoft Entra ID Identity Protection pode adicionar usuários a grupos com base no nível de risco do usuário.",
      "O Microsoft Entra ID Identity Protection pode detectar se as credenciais de um usuário foram vazadas para o público.",
      "O Microsoft Entra ID Identity Protection pode ser usado para invocar a autenticação multifatorial com base no nível de risco do usuário."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "❌ O Microsoft Entra ID Identity Protection não adiciona usuários a grupos com base no nível de risco, isso é feito por meio de políticas de acesso condicional. ✔️ O Azure AD Identity Protection pode detectar se as credenciais do usuário foram vazadas para o público. ✔️ Além disso, ele pode ser configurado para invocar autenticação multifatorial com base no nível de risco do usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para garantir que todos os usuários de um grupo específico precisem usar autenticação multifatorial (MFA) para acessar o Microsoft Entra ID?",
    "opcoes": [
      "Azure Policy",
      "Uma política de conformidade de comunicação",
      "Uma política de Acesso Condicional",
      "Uma política de risco de usuário"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ A política de Acesso Condicional no Microsoft Entra ID pode ser configurada para exigir MFA para os membros de um grupo específico. ❌ O Azure Policy é utilizado para gerenciar recursos, mas não configura MFA diretamente. ❌ A política de conformidade de comunicação gerencia a conformidade de e-mails e mensagens, não a autenticação. ❌ A política de risco de usuário é usada para gerenciar riscos, mas não configura MFA diretamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Você pode criar uma identidade híbrida em um Active Directory local que se sincronize com o Microsoft Entra ID.",
      "Contas de usuário criadas no Microsoft Entra ID são sincronizadas automaticamente para um Active Directory local.",
      "Ao usar um modelo híbrido, a autenticação pode ser feita pelo Microsoft Entra ID ou por outro provedor de identidade."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ Você pode criar uma identidade híbrida que se sincronize com o Microsoft Entra ID. ❌ Contas criadas no Microsoft Entra ID não são sincronizadas automaticamente para o Active Directory local, mas o contrário é possível. ✔️ Ao usar o modelo híbrido, a autenticação pode ser feita pelo Microsoft Entra ID ou por outro provedor de identidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/hybrid/whatis-hybrid-identity"
  },
  {
    "tipo": "multipla",
    "texto": "Quais três métodos de autenticação os usuários do Microsoft Entra ID podem usar para redefinir sua senha? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "notificação do aplicativo móvel",
      "mensagem de texto para um telefone",
      "perguntas de segurança",
      "certificado",
      "senha de imagem"
    ],
    "respostas": [0, 1, 2],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ O método de notificação do aplicativo móvel envia um alerta para o aplicativo no dispositivo do usuário. ✔️ A mensagem de texto para um telefone envia um código SMS para o número registrado. ✔️ As perguntas de segurança podem ser usadas para validar a identidade do usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-authentication-methods"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O Microsofot Entra ID B2C permite que usuários externos façam login usando suas identidades sociais ou de conta corporativa preferidas.",
      "Os usuários externos do Microsofot Entra ID B2C são gerenciados no mesmo diretório que os usuários na organização do Microsofot Entra ID.",
      "A personalização de branding pode ser aplicada à autenticação do Microsofot Entra ID B2C."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ O Microsofot Entra ID AD B2C permite que os usuários se autentiquem usando suas identidades preferidas, como redes sociais ou contas corporativas. ❌ Os usuários externos do Azure AD B2C são gerenciados em um diretório separado e não no mesmo diretório da organização do Azure AD. ✔️ A personalização de branding pode ser aplicada à autenticação do Azure AD B2C para fornecer uma experiência de login personalizada.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory-b2c/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Tokens de software são um exemplo de autenticação sem senha.",
      "O Windows Hello é um exemplo de autenticação sem senha.",
      "Chaves de segurança FIDO2 são um exemplo de autenticação sem senha."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ Os tokens de software permitem autenticação sem a necessidade de senha, usando métodos alternativos como biometria ou PIN. ✔️ O Windows Hello também oferece autenticação sem senha, utilizando biometria ou PIN para verificar a identidade do usuário. ✔️ As chaves de segurança FIDO2 são um exemplo de autenticação sem senha, fornecendo uma maneira segura e sem senha de autenticar o usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-authentication-passwordless"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso de segurança está disponível no modo gratuito do Microsoft Defender for Cloud?",
    "opcoes": [
      "Alertas de proteção contra ameaças",
      "Acesso JIT (just-in-time) a máquinas virtuais do Azure",
      "Escaneamento de vulnerabilidades em máquinas virtuais",
      "Pontuação de segurança"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ A pontuação de segurança está disponível no modo gratuito do Microsoft Defender for Cloud, fornecendo uma visão geral da postura de segurança da sua organização. ❌ Alertas de proteção contra ameaças, acesso JIT a máquinas virtuais e escaneamento de vulnerabilidades estão disponíveis apenas nas camadas pagas do serviço.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/defender-for-cloud-introduction"
  },
  {
    "tipo": "unica",
    "texto": "Microsoft 365 Endpoint data loss prevention (Endpoint DLP) pode ser usado em quais sistemas operacionais?",
    "opcoes": [
      "Apenas Windows 10 e versões mais recentes",
      "Windows 10 e versões mais recentes e Android apenas",
      "Windows 10 e versões mais recentes e iOS apenas",
      "Windows 10 e versões mais recentes, Android e iOS"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Endpoint DLP do Microsoft 365 é compatível com Windows 10 e versões mais recentes e iOS. ❌ Não é compatível com outras versões ou sistemas operacionais como Android na configuração básica.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/endpoint-dlp-learn-about?view=o365-worldwide"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Microsoft Defender for Cloud pode detectar vulnerabilidades e ameaças para o Azure Storage.",
      "O Cloud Security Posture Management (CSPM) está disponível para todas as assinaturas do Azure.",
      "O Microsoft Defender for Cloud pode avaliar a segurança das cargas de trabalho implantadas no Azure ou no local."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Microsoft Defender for Cloud pode detectar vulnerabilidades e ameaças no Azure Storage. ✔️ O CSPM está disponível para todas as assinaturas do Azure. ✔️ O Microsoft Defender for Cloud pode avaliar a segurança de cargas de trabalho implantadas no Azure ou no local.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é um serviço de nuvem para armazenar segredos de aplicativos:",
    "opcoes": [
      "Azure Active Directory (Azure AD) Password Protection",
      "Azure Bastion",
      "Azure Information Protection (AIP)",
      "Azure Key Vault"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ O Azure Key Vault é um serviço de nuvem para armazenar segredos de aplicativos, como chaves de criptografia, senhas e outros dados sensíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> fornece proteção de carga de trabalho em nuvem para recursos do Azure e nuvem híbrida:",
    "opcoes": [
      "Microsoft Defender for Cloud",
      "Azure Monitor",
      "Azure Security Benchmark",
      "Microsoft Secure Score"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Microsoft Defender for Cloud oferece proteção de carga de trabalho em nuvem para recursos do Azure e híbridos. ❌ O Azure Monitor é uma plataforma de monitoramento, mas não oferece proteção direta de carga de trabalho. ❌ O Azure Security Benchmark fornece diretrizes de segurança, mas não proteção de carga de trabalho. ❌ O Microsoft Secure Score avalia a segurança, mas não é um serviço de proteção de carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/defender-for-cloud-introduction"
  },
  {
    "tipo": "unica",
    "texto": "Qual é o número máximo de recursos que o Azure DDoS Protection Standard pode proteger sem custos adicionais?",
    "opcoes": [
      "50",
      "100",
      "500",
      "1000"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Azure DDoS Protection Standard pode proteger até 100 recursos sem custos adicionais. ❌ 50, 500 e 1000 são valores incorretos, pois o limite sem custos adicionais é 100.",
    "link": "https://learn.microsoft.com/pt-br/azure/ddos-protection/ddos-protection-overview"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são duas razões para implantar várias redes virtuais em vez de usar apenas uma rede virtual? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Atender às políticas de governança",
      "Conectar vários tipos de recursos",
      "Separar os recursos para orçamentação",
      "Isolar os recursos"
    ],
    "respostas": [0, 3],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ Atender às políticas de governança e isolar os recursos são razões válidas para a implantação de várias redes virtuais. ❌ Conectar vários tipos de recursos e separar recursos para orçamentação não são razões diretamente associadas à decisão de usar várias redes virtuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-networks-overview"
  },
  {
    "tipo": "combobox",
    "texto": "Microsoft Sentinel fornece insights rápidos sobre dados usando <combobox>",
    "opcoes": [
      "Azure Logic Apps",
      "Azure Monitor workbook templates",
      "Azure Resource Graph Explorer",
      "playbooks"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ Azure Monitor workbook templates é a solução correta para obter insights rápidos sobre dados no Microsoft Sentinel. ❌ Azure Logic Apps, Azure Resource Graph Explorer e playbooks não são usados especificamente para esse propósito.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/visualize/workbooks-overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual métrica do Microsoft Defender for Cloud exibe a saúde geral de segurança de uma assinatura do Azure?",
    "opcoes": [
      "Pontuação de segurança",
      "Saúde do recurso",
      "Controles concluídos",
      "Status das recomendações"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ A pontuação de segurança do Microsoft Defender for Cloud exibe a saúde geral de segurança de uma assinatura do Azure, com base nas práticas de segurança implementadas. ❌ A saúde do recurso é mais focada no estado de funcionamento de recursos individuais, mas não fornece a visão geral da segurança. ❌ Controles concluídos e status das recomendações são métricas úteis, mas não representam a saúde geral de segurança.",
    "link": "https://learn.microsoft.com/pt-br/defender-xdr/microsoft-secure-score"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Você pode usar barreiras de informação com o Microsoft Exchange.",
      "Você pode usar barreiras de informação com o Microsoft SharePoint.",
      "Você pode usar barreiras de informação com o Microsoft Teams."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Microsoft Exchange suporta barreiras de informação para proteger dados sensíveis e separar diferentes grupos de usuários. ❌ O Microsoft SharePoint não é suportado diretamente para barreiras de informação, pois ele está mais focado em permissões de acesso a dados. ❌ O Microsoft Teams também não possui suporte nativo para barreiras de informação, embora você possa controlar o acesso de maneira diferente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/information-barriers"
  },
  {
    "tipo": "combobox",
    "texto": "O gerenciamento de risco interno é configurado a partir do <combobox>",
    "opcoes": [
      "Centro de administração do Microsoft 365.",
      "Centro de conformidade do Microsoft 365.",
      "Portal do Microsoft 365 Defender.",
      "Portal do Microsoft Defender para aplicativos na nuvem."
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O gerenciamento de risco interno é configurado no Centro de Conformidade do Microsoft 365. ❌ O Centro de administração do Microsoft 365 é utilizado para configurações gerais e administrativas, mas não para o gerenciamento de riscos internos. ❌ O Portal do Microsoft 365 Defender e o Portal do Microsoft Defender para aplicativos na nuvem são voltados para segurança, não para gerenciamento de risco interno.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/insider-risk-management"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa garantir a repetibilidade ao criar novos recursos em uma assinatura do Azure. O que você deve usar?",
    "opcoes": [
      "Microsoft Sentinel",
      "Azure Policy",
      "Azure Batch",
      "Azure Blueprints"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Azure Blueprints permite criar e gerenciar ambientes consistentes ao criar novos recursos, garantindo que padrões e práticas recomendadas sejam seguidos. ❌ O Microsoft Sentinel é focado em segurança e monitoramento. ❌ O Azure Policy aplica políticas em recursos, mas não se destina a criar ou garantir a repetibilidade. ❌ O Azure Batch é usado para execução em larga escala, mas não garante repetibilidade na criação de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma característica de um rótulo de sensibilidade no Microsoft 365?",
    "opcoes": [
      "Criptografado",
      "Restrito a categorias predefinidas",
      "Persistente"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ Os rótulos de sensibilidade no Microsoft 365 são persistentes, o que significa que as classificações aplicadas permanecem com o documento ou e-mail, independentemente do seu local ou movimentação. ❌ A criptografia é uma característica que pode ser configurada, mas não é a principal característica de um rótulo de sensibilidade. ❌ Os rótulos de sensibilidade não estão restritos a categorias predefinidas, pois os administradores podem criar suas próprias categorias e políticas.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as etapas do fluxo de trabalho de Gerenciamento de Riscos Internos do Microsoft Purview à tarefa apropriada:",
    "itens": [
      { "label": "Ação" },
      { "label": "Investigar" },
      { "label": "Triagem" }
    ],
    "grupos": [
      "Revisar e filtrar alertas",
      "Criar casos no painel de casos",
      "Enviar um lembrete de políticas corporativas para os usuários"
    ],
    "respostas": {
      "Revisar e filtrar alertas": ["Triagem"],
      "Criar casos no painel de casos": ["Investigar"],
      "Enviar um lembrete de políticas corporativas para os usuários": ["Ação"]
    },
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ Triagem é o processo de revisar e filtrar alertas. ✔️ Investigar é a etapa em que os casos são criados no painel de casos. ✔️ Ação refere-se ao envio de lembretes sobre as políticas corporativas aos usuários.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/insider-risk-management"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "O Microsoft Purview fornece classificação de dados sensíveis.",
      "O Microsoft Sentinel é uma solução de gerenciamento de ciclo de vida de dados.",
      "O Microsoft Purview só pode descobrir dados armazenados no Azure."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O Microsoft Purview fornece classificação de dados sensíveis, permitindo que as organizações identifiquem, classifiquem e protejam dados sensíveis em sua infraestrutura, independentemente do local onde estejam armazenados. Essa funcionalidade é parte do Microsoft Purview Information Protection. ❌ O Microsoft Sentinel não é uma solução de gerenciamento de ciclo de vida de dados. Ele é uma solução de gerenciamento de eventos e informações de segurança (SIEM) usada para coletar, analisar e responder a ameaças de segurança em tempo real. ❌ O Microsoft Purview pode descobrir dados além do Azure, incluindo dados armazenados em sistemas locais e em outros serviços de nuvem, proporcionando uma visão mais abrangente da conformidade e governança de dados da organização. ",
    "link": "https://learn.microsoft.com/pt-br/purview/concept-best-practices-classification"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> mede o progresso de uma empresa nas ações para reduzir riscos relacionados à proteção de dados e normas regulatórias.",
    "opcoes": [
      "Pontuação de conformidade",
      "Relatórios do portal de conformidade do Microsoft Purview",
      "O Trust Center",
      "Documentos de confiança"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ A 'Pontuação de conformidade' mede o progresso de uma empresa em completar as ações que ajudam a reduzir os riscos em torno da proteção de dados e das normas regulatórias. Ela fornece uma visão detalhada de como a organização está atendendo aos requisitos de conformidade. ❌ Os relatórios do portal de conformidade do Microsoft Purview oferecem informações sobre a conformidade, mas não são usados para medir diretamente o progresso em ações específicas. ❌ O Trust Center fornece transparência sobre as práticas de segurança da Microsoft, mas não mede diretamente o progresso em conformidade. ❌ Documentos de confiança são usados para fornecer informações sobre políticas de segurança e privacidade, mas não são usados para medir o progresso em ações de conformidade.",
    "link": "https://learn.microsoft.com/pt-br/purview/compliance-manager"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "A criptografia assimétrica usa um par de chaves pública e privada.",
      "A criptografia simétrica usa um par de chaves pública e privada.",
      "Você pode usar a descriptografia para recuperar o conteúdo original de um hash de conteúdo."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "✔️ A criptografia assimétrica utiliza um par de chaves pública e privada para encriptar e descriptografar dados. ❌ A criptografia simétrica usa a mesma chave para criptografar e descriptografar os dados, não um par de chaves pública e privada. ❌ A descriptografia não pode ser usada para recuperar o conteúdo original de um hash de conteúdo, já que o hash é uma função unidirecional e irreversível.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/encryption-at-rest"
  },
  {
    "tipo": "combobox",
    "texto": "Garantir que os dados que você recupera sejam os mesmos dados que você armazenou é um exemplo de manutenção de <combobox>",
    "opcoes": [
      "Disponibilidade",
      "Confidencialidade",
      "Integridade",
      "Transparência"
    ],
    "resposta": 2,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "✔️ A integridade dos dados garante que os dados recuperados sejam os mesmos que os dados armazenados, ou seja, sem alterações ou corrompimento. ❌ Disponibilidade se refere ao acesso a dados quando necessário. ❌ Confidencialidade garante que os dados sejam acessados apenas por pessoas autorizadas. ❌ Transparência envolve a clareza e a visibilidade no processamento e no acesso aos dados, mas não está relacionada diretamente à comparação entre dados armazenados e recuperados.",
    "link": "https://azure.microsoft.com/en-us/blog/data-integrity-in-azure-sql-database/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "No software como serviço (SaaS), a aplicação de atualizações do aplicativo é responsabilidade da organização.",
      "Na infraestrutura como serviço (IaaS), gerenciar a rede física é responsabilidade do provedor de nuvem.",
      "Em todos os tipos de implantação do Azure, gerenciar a segurança das informações e dados é responsabilidade da organização."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-4",
    "explicacao": "❌ No modelo SaaS, o provedor de nuvem geralmente gerencia as atualizações do aplicativo. ✔️ Na IaaS, a responsabilidade pela rede física é do provedor de nuvem. ✔️ Em todos os tipos de implantação do Azure, a segurança das informações e dados é responsabilidade da organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve usar para associar a mesma identidade a mais de uma máquina virtual do Azure?",
    "opcoes": [
      "Uma conta de usuário do Microsoft Entra ID",
      "Uma identidade gerenciada atribuída pelo usuário",
      "Uma identidade gerenciada atribuída pelo sistema",
      "Um grupo de segurança do Microsoft Entra ID"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "✔️ Uma identidade gerenciada atribuída pelo usuário pode ser associada a várias máquinas virtuais do Azure. ❌ Uma conta de usuário do Microsoft Entra ID não é adequada para esse tipo de associação em várias VMs. ❌ A identidade gerenciada atribuída pelo sistema é associada a uma única máquina virtual. ❌ Um grupo de segurança do Microsoft Entra ID não é utilizado para associar identidades a VMs.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os padrões de segurança exigem uma licença Microsoft Entra ID Premium.",
      "Os padrões de segurança podem ser ativados para um único usuário do Microsoft Entra ID.",
      "Quando os padrões de segurança são ativados, todos os administradores devem usar autenticação multifatorial (MFA)."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-4",
    "explicacao": "❌ Os padrões de segurança não exigem uma licença Microsoft Entra ID Premium. Eles estão disponíveis com a licença gratuita do Azure AD. ❌ Os padrões de segurança não podem ser habilitados para um único usuário do Microsoft Entra ID. ✔️ Quando os padrões de segurança estão ativados, todos os administradores precisam usar autenticação multifatorial (MFA).",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/security/azure-ad-security-defaults"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure que contém um espaço de trabalho Log Analytics. Você precisa integrar o Microsoft Sentinel. O que você deve fazer primeiro?",
    "opcoes": [
      "Criar uma consulta de caça (hunting query).",
      "Correlacionar alertas em incidentes.",
      "Conectar aos seus fontes de segurança.",
      "Criar uma regra de detecção personalizada."
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O primeiro passo para integrar o Microsoft Sentinel é conectar seus fontes de segurança, para que ele possa começar a coletar dados e gerar alertas. ❌ Criar consultas de caça, correlacionar alertas ou criar regras de detecção são etapas que ocorrem depois de conectar suas fontes de segurança. Essas são ações complementares após o processo inicial de integração.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/connect-data-sources"
  },
  {
    "tipo": "combobox",
    "texto": "A feature do Microsoft Defender for Cloud que bloqueia malware e outras aplicações indesejadas, reduzindo a superfície de ataque da rede em máquinas virtuais do Azure é <combobox>",
    "opcoes": [
      "Controle de acesso e aplicativo",
      "Cloud Security Posture Management (CSPM)",
      "Segurança de contêiner",
      "Avaliação de vulnerabilidades"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-4",
    "explicacao": "✔️ O controle de acesso e aplicativo bloqueia malware e outras aplicações indesejadas enquanto reduz a superfície de ataque na rede. ❌ O Cloud Security Posture Management (CSPM) gerencia as políticas de segurança, mas não se concentra no bloqueio de malware. ❌ A segurança de contêiner se aplica à proteção de contêineres, mas não é a funcionalidade correta para bloqueio de malware em máquinas virtuais. ❌ A avaliação de vulnerabilidades ajuda a identificar falhas de segurança, mas não bloqueia malware ou aplicações indesejadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/"
  }
];
