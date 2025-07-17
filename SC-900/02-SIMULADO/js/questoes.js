// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Qual é a finalidade da Proteção de Senha do Microsoft Entra ID?",
    "opcoes": [
      "Para controlar a frequência com que os usuários devem alterar suas senhas.",
      "Para identificar dispositivos nos quais os usuários podem fazer login sem usar a autenticação multifator (MFA).",
      "Para criptografar uma senha usando padrões de criptografia reconhecidos globalmente.",
      "Para impedir que os usuários usem palavras específicas em suas senhas."
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ A Proteção de Senha do Microsoft Entra ID detecta e bloqueia senhas fracas conhecidas e suas variantes. Além disso, permite bloquear termos adicionais específicos para sua organização. Essas listas são aplicadas automaticamente a todos os usuários de um locatário, aumentando a segurança das senhas.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/concept-password-ban-bad-on-premises"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft Entra ID você pode usar para avaliar a associação ao grupo e remover automaticamente os usuários que não exigem mais associação a um grupo?",
    "opcoes": [
      "Revisões de acesso",
      "Identidades gerenciadas",
      "Políticas de acesso condicional",
      "Proteção de Identidade do Microsoft Entra ID"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ As revisões de acesso do Microsoft Entra ID permitem que as organizações gerenciem eficientemente as associações de grupos, o acesso a aplicativos corporativos e as atribuições de função, incluindo a remoção automática de acessos desnecessários.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/governance/access-reviews-overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é uma solução baseada em nuvem que aproveita os sinais do Active Directory local para identificar, detectar e investigar ameaças avançadas.",
    "opcoes": [
      "Segurança de aplicativos em nuvem da Microsoft",
      "Microsoft Defender para Ponto de Extremidade",
      "Microsoft Defender para Identidade",
      "Microsoft Defender para Office 365"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Microsoft Defender para Identidade é a solução baseada em nuvem que aproveita sinais do Active Directory local para identificar e investigar ameaças avançadas. As demais opções não realizam esse tipo de monitoramento em ambientes de identidade local.",
    "link": "https://learn.microsoft.com/pt-br/defender-for-identity/what-is"
  },
  {
    "tipo": "combobox",
    "texto": "Microsoft Defender para Identidade pode identificar ameaças avançadas no(s) <combobox>",
    "opcoes": [
      "Azure Active Directory (Azure AD)",
      "Azure AD Connect",
      "Serviços de Domínio do Active Directory (AD DS) local"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Microsoft Defender para Identidade identifica ameaças avançadas com base nos sinais dos Serviços de Domínio do Active Directory (AD DS) local. Ele não usa sinais do Azure AD ou do AD Connect, pois é voltado especificamente para ambientes locais.",
    "link": "https://learn.microsoft.com/pt-br/defender-for-identity/what-is"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft Entra ID você pode usar para fornecer acesso Just-in-time (JIT) para gerenciar recursos do Azure?",
    "opcoes": [
      "Políticas de acesso condicional",
      "Proteção de Identidade do Microsoft Entra ID",
      "Microsoft Entra ID Privileged Identity Management (PIM)",
      "Políticas de método de autenticação"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ Microsoft Entra ID Privileged Identity Management (PIM) permite fornecer acesso Just-in-time (JIT), ou seja, acesso temporário e controlado a recursos privilegiados no Azure e Microsoft Entra ID, melhorando a segurança e a governança.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/pim-configure"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> você pode usar no centro de segurança do Microsoft 365 para identificar os dispositivos afetados por um alerta.",
    "opcoes": [
      "Classificações",
      "Incidentes",
      "Políticas",
      "Pontuação segura"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ A resposta correta é 'incidentes', pois no centro de segurança do Microsoft 365 você pode usar os incidentes para acompanhar alertas e identificar rapidamente quais dispositivos foram impactados por ameaças.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/incidents-overview?view=o365-worldwide"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são os dois recursos do Microsoft Defender para Ponto de Extremidade?  Cada seleção correta apresenta uma solução completa. NOTA: Cada seleção correta vale ponto.",
    "opcoes": [
      "investigação e correção automatizadas",
      "criptografia de transporte",
      "detecção de TI de sombra",
      "redução da superfície de ataque"
    ],
    "respostas": [0, 3],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ 'investigação e correção automatizadas' é um recurso do Microsoft Defender para Ponto de Extremidade que agiliza a resposta a incidentes, reduzindo o tempo de exposição a ameaças. ✔️ 'redução da superfície de ataque' ajuda a minimizar os caminhos pelos quais os dispositivos podem ser comprometidos. ❌ 'criptografia de transporte' não é um foco direto do Defender para Endpoint. ❌ 'detecção de TI de sombra' refere-se a outras soluções como Defender for Cloud Apps.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é uma solução de gerenciamento de eventos e informações de segurança nativa da nuvem (SIEM) e resposta automatizada de orquestração de segurança (SOAR) usada para fornecer uma solução única para detecção de alertas, visibilidade de ameaças, busca proativa e resposta a ameaças.",
    "opcoes": [
      "Azure Advisor",
      "Azure Bastion",
      "Azure Monitor",
      "Azure Sentinel"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Azure Sentinel é a resposta correta, pois é a solução SIEM nativa da nuvem da Microsoft, combinando gerenciamento de eventos com resposta automatizada (SOAR). As demais opções não oferecem esse tipo de gerenciamento de segurança e resposta.",
    "link": "https://docs.microsoft.com/pt-br/azure/sentinel/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O Azure Defender pode detectar vulnerabilidades e ameaças para o Armazenamento do Azure.",
      "O Cloud Security Posture Management (CSPM) está disponível para todas as assinaturas do Azure.",
      "A Central de Segurança do Azure pode avaliar a segurança das cargas de trabalho implantadas no Azure ou no local."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmativa 1: Sim — O Azure Defender fornece alertas de segurança e proteção avançada contra ameaças para máquinas virtuais, bancos de dados SQL, contêineres, aplicativos web, rede e armazenamento, incluindo o Armazenamento do Azure. ✔️ Afirmativa 2: Sim — O CSPM está disponível gratuitamente para todos os usuários do Azure, oferecendo postura de segurança baseada em políticas. ✔️ Afirmativa 3: Sim — A Central de Segurança do Azure pode avaliar cargas de trabalho tanto no Azure quanto em ambientes locais.",
    "link": "https://docs.microsoft.com/en-us/azure/security-center/security-center-introduction"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox>, você pode usar no centro de segurança da Microsoft 365 para exibir uma agregação de alertas relacionados ao mesmo ataque:",
    "opcoes": [
      "Relatórios",
      "Busca",
      "Simulador de ataque",
      "Incidentes"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ A resposta correta é 'Incidentes'. No centro de segurança do Microsoft 365, a seção Incidentes permite a visualização de uma agregação de alertas relacionados ao mesmo ataque, oferecendo uma visão consolidada e facilitando a análise e a resposta.",
    "link": "https://docs.microsoft.com/pt-br/microsoft-365/security/defender/threat-analytics?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do centro de conformidade do Microsoft 365 você pode usar para identificar todos os documentos em um site do Microsoft SharePoint Online que contém uma palavra-chave específica?",
    "opcoes": [
      "Auditoria",
      "Gerente de Conformidade",
      "Pesquisa de Conteúdo",
      "Alertas"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ A 'Pesquisa de Conteúdo' permite localizar rapidamente e-mails e documentos que contenham palavras-chave específicas em locais como SharePoint, OneDrive, Exchange e Skype for Business, sendo ideal para identificar conteúdos sensíveis ou relevantes em investigações.",
    "link": "https://docs.microsoft.com/en-us/microsoft-365/compliance/search-for-content?view=o365-worldwide"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são as duas tarefas que você pode implementar usando políticas de prevenção de perda de dados (DLP) no Microsoft 365?",
    "opcoes": [
      "Exibir dicas de política para usuários que estão prestes a violar as políticas da sua organização.",
      "Habilitar a criptografia de disco nos terminais.",
      "Proteger documentos no Microsoft OneDrive que contenham informações confidenciais.",
      "Aplicar linhas de base de segurança aos dispositivos."
    ],
    "respostas": [0, 2],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ A DLP permite exibir dicas de política em tempo real para educar os usuários quando estão prestes a violar uma política de conformidade. ✔️ Também protege documentos com informações sensíveis armazenados no OneDrive ou em outros serviços, impedindo o compartilhamento inadequado. ❌ A criptografia de disco e ❌ linhas de base de segurança são tratadas por outras ferramentas como Microsoft Intune.",
    "link": "https://docs.microsoft.com/pt-br/microsoft-365/compliance/dlp-learn-about-dlp?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso de conformidade do Microsoft 365 você pode usar para criptografar conteúdo automaticamente com base em condições específicas?",
    "opcoes": [
      "Pesquisa de conteúdo",
      "Rótulos de confidencialidade",
      "Políticas de retenção",
      "Descoberta Eletrônica (eDiscovery)"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Os rótulos de confidencialidade podem aplicar criptografia automaticamente a documentos e e-mails com base em condições específicas, como o tipo de dado sensível detectado. Eles ajudam a proteger informações confidenciais sem exigir ações manuais do usuário.",
    "link": "https://docs.microsoft.com/pt-br/microsoft-365/compliance/information-protection?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para provisionar recursos do Azure em várias assinaturas de forma consistente?",
    "opcoes": [
      "Azure Defender",
      "Azure Blueprints",
      "Azure Sentinel",
      "Azure Policy"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Azure Blueprints permite que você defina um conjunto repetível de recursos do Azure que implementa e adere aos padrões, políticas e requisitos da organização em várias assinaturas de forma consistente.",
    "link": "https://docs.microsoft.com/pt-br/azure/governance/blueprints/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a instrução for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar funções personalizadas no Microsoft Entra ID.",
      "Administrador global é uma função no Microsoft Entra ID.",
      "Um usuário do Microsoft Entra ID pode receber apenas uma função."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmativa 1: Sim — O Microsoft Entra ID (antigo Azure AD) permite a criação de funções personalizadas com permissões específicas. ✔️ Afirmativa 2: Sim — A função de Administrador Global fornece acesso a todos os recursos administrativos do Microsoft Entra ID. ❌ Afirmativa 3: Não — Um único usuário pode ser atribuído a várias funções simultaneamente no Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/role-based-access-control/permissions-reference"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> requer verificação adicional, como um código de verificação enviado para um telefone celular.",
    "opcoes": [
      "Autenticação multifator (MFA)",
      "Autenticação de passagem",
      "Writeback de senha",
      "Logon único (SSO)"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ A autenticação multifator (MFA) é um processo que exige do usuário uma forma adicional de verificação além da senha, como um código enviado por SMS ou um reconhecimento biométrico, aumentando significativamente a segurança do acesso.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/concept-mfa-howitworks"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "As políticas de acesso condicional podem usar o estado do dispositivo como um sinal.",
      "As políticas de acesso condicional se aplicam antes que a autenticação de primeiro fator seja concluída.",
      "As políticas de acesso condicional podem acionar a autenticação multifator (MFA) se um usuário tentar acessar um aplicativo específico."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmativa 1: Sim — As políticas de acesso condicional podem considerar o estado do dispositivo (por exemplo, se está ou não em conformidade) como parte do processo de decisão. ❌ Afirmativa 2: Não — Elas são aplicadas **após** a conclusão da autenticação de primeiro fator. ✔️ Afirmativa 3: Sim — É possível configurar políticas que exijam MFA ao acessar determinados aplicativos.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Com a Auditoria Avançada no Microsoft 365, você pode identificar quando os itens de email foram acessados.",
      "A auditoria avançada no Microsoft 365 dá suporte ao mesmo período de retenção de logs de auditoria que a auditoria principal.",
      "A auditoria avançada no Microsoft 365 aloca largura de banda dedicada ao cliente para acessar dados de auditoria."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmativa 1: Sim — A Auditoria Avançada permite identificar quando os itens de email foram acessados por meio do evento 'Itens de Emails Acessados'. ❌ Afirmativa 2: Não — A Auditoria Básica retém registros por 90 dias, enquanto a Auditoria Avançada mantém por 1 ano. ✔️ Afirmativa 3: Sim — A Auditoria Avançada aloca largura de banda dedicada para clientes acessarem os dados com mais eficiência.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/advanced-audit"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale  ponto.",
    "afirmacoes": [
      "A Proteção de Identidade do Microsoft Entra ID pode adicionar usuários a grupos com base no nível de risco do usuário.",
      "A Proteção de Identidade do Microsoft Entra ID pode detectar se as credenciais do usuário vazaram para o público.",
      "A Proteção de Identidade do Microsoft Entra ID pode ser usada para invocar a autenticação multifator com base no nível de risco de um usuário."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "❌ Afirmativa 1: Não — A Proteção de Identidade não adiciona usuários automaticamente a grupos com base no risco. ✔️ Afirmativa 2: Sim — A Proteção de Identidade pode detectar se as credenciais de um usuário foram vazadas. ✔️ Afirmativa 3: Sim — A autenticação multifator pode ser exigida com base no risco do usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview-identity-protection"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Gerenciador de Conformidade rastreia apenas os controles gerenciados pelo cliente.",
      "Gerenciador de Conformidade fornece modelos predefinidos para a criação de avaliações.",
      "Gerenciador de Conformidade pode ajudá-lo a avaliar se os dados seguem padrões específicos de proteção de dados."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "❌ Afirmativa 1: Não — O Gerenciador de Conformidade rastreia controles gerenciados pela Microsoft, pelo cliente e também os compartilhados. ✔️ Afirmativa 2: Sim — Ele fornece modelos predefinidos que ajudam na criação de avaliações de conformidade. ✔️ Afirmativa 3: Sim — Ele auxilia na verificação de conformidade com padrões específicos de proteção de dados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager?view=o365-worldwide"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "O Microsoft Entra ID é implantado em um ambiente local.",
      "O Microsoft Entra ID é fornecido como parte de uma assinatura do Microsoft 365.",
      "O Microsoft Entra ID é um serviço de gerenciamento de identidade e acesso."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "❌ Afirmativa 1: Não — O Microsoft Entra ID é um serviço de identidade baseado em nuvem, não implantado localmente. ✔️ Afirmativa 2: Sim — O Microsoft Entra ID é incluído nas assinaturas do Microsoft 365 para gerenciar identidade e acesso. ✔️ Afirmativa 3: Sim — O Microsoft Entra ID é um serviço de gerenciamento de identidade e acesso baseado em nuvem.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/about-microsoft-365-identity?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": "O Microsoft Entra ID é usado para autenticação e autorização como <combobox>",
    "opcoes": [
      "um sistema estendido de detecção e resposta (XDR)",
      "um provedor de identidade",
      "um grupo de gestão",
      "um sistema de gerenciamento de informações e eventos de segurança (SIEM)"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "O Microsoft Entra ID é um serviço de autenticação e identidade de usuário baseado em nuvem, atuando como um provedor de identidade em ambientes corporativos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/about-microsoft-365-identity?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": "O Gerente de Conformidade avalia os dados de conformidade para uma organização <combobox>",
    "opcoes": [
      "continuamente",
      "mensalmente",
      "sob demanda",
      "trimestralmente"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "O Gerente de Conformidade avalia os dados de conformidade de forma contínua. Essa avaliação constante permite acompanhar e pontuar a conformidade da organização em tempo real, com base nos controles implementados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-score-calculation?view=o365-worldwide#como-o-gerente-de-conformidade-avalia-continuamente-os-controles"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Os rótulos de confidencialidade podem ser usados para criptografar documentos.",
      "Os rótulos de confidencialidade podem adicionar cabeçalhos e rodapés aos documentos.",
      "Os rótulos de confidencialidade podem aplicar marcas d'água a e-mails."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmação 1: Sim — Os rótulos de sensibilidade podem ser configurados para aplicar criptografia a documentos e e-mails, impedindo acesso não autorizado. ✔️ Afirmação 2: Sim — Esses rótulos podem adicionar cabeçalhos e rodapés em documentos para reforçar a classificação de conteúdo. ✔️ Afirmação 3: Sim — Também é possível aplicar marcas d'água para indicar visualmente a sensibilidade do conteúdo nos documentos e e-mails.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está avaliando a pontuação de conformidade no Gerenciador de Conformidade. Correlacione as subcategorias de ação de pontuação de conformidade com as ações apropriadas, arrastando e soltando no serviço correto:",
    "itens": [
      { "label": "Corretiva" },
      { "label": "Detecção" },
      { "label": "Preventiva" }
    ],
    "grupos": [
      "Criptografe dados em repouso.",
      "Realize uma auditoria de acesso ao sistema.",
      "Faça alterações de configuração em resposta a um incidente de segurança."
    ],
    "respostas": {
      "Criptografe dados em repouso.": ["Preventiva"],
      "Realize uma auditoria de acesso ao sistema.": ["Detecção"],
      "Faça alterações de configuração em resposta a um incidente de segurança.": ["Corretiva"]
    },
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Preventiva — Criptografar dados em repouso é uma ação preventiva contra ataques e violações. ✔️ Detecção — Auditoria de acesso permite identificar comportamentos suspeitos. ✔️ Corretiva — Alterações em resposta a incidentes reduzem ou revertem os danos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-score-calculation"
  },
  {
    "tipo": "combobox",
    "texto": "O Gerenciador de Conformidade pode ser acessado diretamente a partir do <combobox>",
    "opcoes": [
      "Centro de administração do Microsoft 365",
      "Portal do Microsoft 365 Defender",
      "Centro de Conformidade do Microsoft 365",
      "Portal de suporte da Microsoft"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "O Centro de Conformidade do Microsoft 365 (atualmente chamado Microsoft Purview) é o portal correto para acessar o Gerenciador de Conformidade. A navegação pode ser feita diretamente pelo painel lateral após login com uma conta de administrador.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager-setup"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Habilitar a autenticação multifator (MFA) aumenta o Microsoft Secure Score.",
      "Um Microsoft Secure Score mais alto significa um nível de risco identificado mais baixo no locatário do Microsoft 365.",
      "O Microsoft Secure Score mede o progresso na conclusão de ações com base em controles que incluem regulamentos e padrões importantes para proteção e governança de dados."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmativa 1: Sim — Habilitar MFA é uma das ações de melhoria recomendadas pelo Secure Score, aumentando a pontuação da organização. ✔️ Afirmativa 2: Sim — Quanto maior o Secure Score, menor o risco identificado no ambiente Microsoft 365. ✔️ Afirmativa 3: Sim — O Secure Score mede a implementação de controles baseados em padrões e regulamentações de segurança.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/microsoft-secure-score"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são os três métodos de autenticação que podem ser usados pela autenticação multifator do Azure (MFA)?  NOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "mensagem de texto (SMS)",
      "Aplicativo Microsoft Authenticator",
      "verificação de e-mail",
      "telefonema",
      "pergunta de segurança"
    ],
    "respostas": [0, 1, 3],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ mensagem de texto (SMS): é um dos métodos permitidos pelo Azure MFA. ✔️ Aplicativo Microsoft Authenticator: é o principal método recomendado de autenticação. ✔️ telefonema: também é aceito como método de autenticação. ❌ verificação de e-mail e pergunta de segurança: não são métodos válidos para MFA no Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/concept-authentication-methods"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft 365 você pode usar para restringir a comunicação e o compartilhamento de informações entre membros de dois departamentos da sua organização?",
    "opcoes": [
      "Políticas de rótulo de sensibilidade",
      "Bloqueador de clientes",
      "Barreiras de informação",
      "Gerenciamento de Acesso Privilegiado (PAM)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ Barreiras de informação: são usadas para restringir comunicações e colaborações entre grupos específicos dentro da organização, como entre departamentos jurídicos e financeiros, garantindo conformidade com regulamentações.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/information-barriers"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "As políticas de acesso condicional sempre impõem o uso da autenticação multifator (MFA).",
      "As políticas de acesso condicional podem ser usadas para bloquear o acesso a um aplicativo com base na localização do usuário.",
      "As políticas de acesso condicional afetam apenas os usuários que têm dispositivos ingressados no Microsoft Entra ID."
    ],
    "respostas": [false, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "❌ Afirmativa 1: Nem todas as políticas de acesso condicional impõem o uso de MFA. Elas podem impor diversos controles, como bloqueios ou requisitos específicos, dependendo das condições definidas. ✔️ Afirmativa 2: É possível configurar políticas de acesso condicional com base em localizações, restringindo ou permitindo acessos conforme o local de acesso do usuário. ❌ Afirmativa 3: As políticas de acesso condicional aplicam-se a todos os usuários conforme as condições, independentemente do tipo de dispositivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "As políticas de acesso condicional podem ser aplicadas a administradores globais.",
      "As políticas de acesso condicional são avaliadas antes que um usuário seja autenticado.",
      "As políticas de acesso condicional podem usar uma plataforma de dispositivo, como Android ou iOS, como um sinal."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ Afirmativa 1: Sim — As políticas de acesso condicional podem ser aplicadas a todos os usuários, incluindo administradores globais. ❌ Afirmativa 2: Não — As políticas de acesso condicional são aplicadas após a conclusão da autenticação do primeiro fator. ✔️ Afirmativa 3: Sim — É possível configurar políticas baseadas em sinais de plataforma, como Android ou iOS.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "combobox",
    "texto": "Os aplicativos registrados no Microsoft Entra ID são associados automaticamente a uma <combobox>",
    "opcoes": [
      "Conta de visitante.",
      "Identidade gerenciada.",
      "Entidade de serviço.",
      "Conta de usuário."
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "Ao registrar um aplicativo no portal do Azure, é criada automaticamente uma entidade de serviço no diretório inicial ou locatário. Essa entidade permite que o aplicativo tenha uma identidade própria para autenticação e autorização.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/develop/howto-create-service-principal-portal"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são os três métodos de autenticação compatíveis com o Windows Hello for Business?  NOTA: Cada seleção correta apresenta uma solução completa.",
    "opcoes": [
      "impressão digital",
      "reconhecimento facial",
      "PIN",
      "verificação de e-mail",
      "pergunta de segurança"
    ],
    "respostas": [0, 1, 2],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "✔️ O Windows Hello for Business é compatível com métodos biométricos e pessoais como impressão digital, reconhecimento facial e PIN. ❌ Verificação por e-mail e perguntas de segurança não são considerados métodos compatíveis com o Windows Hello.",
    "link": "https://learn.microsoft.com/pt-br/windows/security/identity-protection/hello-for-business/hello-how-it-works-authentication"
  },
  {
    "tipo": "combobox",
    "texto": "Quando você habilita os padrões de segurança no Microsoft Entra ID, ativa <combobox>",
    "opcoes": [
      "Proteção de identidade do Azure AD",
      "Azure AD Privileged Identity Management (PIM)",
      "Autenticação multifator (MFA)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "Quando os padrões de segurança são habilitados no Azure AD, a autenticação multifator (MFA) é ativada por padrão para todos os usuários como medida essencial de segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/concept-fundamentals-security-defaults"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure. Você precisa implementar a ativação de função com limite de tempo e baseada em aprovação. O que você deve usar?",
    "opcoes": [
      "Windows Hello for Business",
      "Microsoft Entra ID Identity Protection",
      "Access reviews in Microsoft Entra ID",
      "Microsoft Entra ID Privileged Identity Management (PIM)"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "Microsoft Entra ID Privileged Identity Management (PIM) permite a ativação de funções com base em tempo limitado e aprovação, ideal para controle de acesso privilegiado temporário.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/pim-configure"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das instruções a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.  NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Os administradores globais estão isentos de políticas de acesso condicional.",
      "Uma política de acesso condicional pode adicionar usuários às funções do Microsoft Entra ID.",
      "As políticas de acesso condicional podem forçar o uso de autenticação multifator (MFA) para acessar aplicativos em nuvem."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-2",
    "explicacao": "❌ Afirmativa 1: Falsa — Administradores globais **não estão isentos** de políticas de acesso condicional. Elas devem ser aplicadas com cuidado. ❌ Afirmativa 2: Falsa — Políticas de acesso condicional **não atribuem funções**, apenas controlam o acesso com base em condições. ✔️ Afirmativa 3: Verdadeira — Políticas de acesso condicional **podem exigir MFA** ao acessar aplicativos em nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são os dois recursos do Microsoft Defender para Ponto de Extremidade? Cada seleção correta apresenta uma solução completa. NOTA: Cada seleção correta vale ponto.",
    "opcoes": [
      "investigação e correção automatizadas",
      "criptografia de transporte",
      "detecção de TI de sombra",
      "redução da superfície de ataque"
    ],
    "respostas": [0, 3],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-2",
    "explicacao": "✔️ 'investigação e correção automatizadas' é um recurso do Microsoft Defender para Ponto de Extremidade que agiliza a resposta a incidentes, reduzindo o tempo de exposição a ameaças. ❌ 'criptografia de transporte' não é um foco direto do Defender para Endpoint. ❌ 'detecção de TI de sombra' refere-se a outras soluções como Defender for Cloud Apps. ✔️ 'redução da superfície de ataque' ajuda a minimizar os caminhos pelos quais os dispositivos podem ser comprometidos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint?view=o365-worldwide"
  }
];
