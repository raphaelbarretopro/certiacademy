// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "multipla",
    "texto": "Quais três formas de verificação podem ser usadas com a autenticação multifatorial do Microsoft Entra ID (MFA)? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Questões de segurança",
      "O aplicativo Microsoft Authenticator",
      "Mensagens SMS",
      "Cartão inteligente",
      "Windows Hello for Business"
    ],
    "respostas": [1, 2, 4],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ O aplicativo Microsoft Authenticator é um método popular para autenticação multifatorial. ✔️ As mensagens SMS são frequentemente usadas como uma segunda camada de verificação. ✔️ O Windows Hello for Business é uma opção de verificação biométrica que também pode ser usada como parte da MFA.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-mfa-howitworks"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um endereço de e-mail externo pode ser usado para autenticar a redefinição de senha de autoatendimento (SSPR).",
      "Uma notificação para o aplicativo Microsoft Authenticator pode ser usada para autenticar a redefinição de senha de autoatendimento (SSPR).",
      "Para realizar a redefinição de senha de autoatendimento (SSPR), um usuário já deve estar conectado e autenticado no Microsoft Entra ID."
    ],
    "respostas": [false, true, false],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-5",
    "explicacao": "❌ Um endereço de e-mail externo não pode ser usado para autenticar a redefinição de senha de autoatendimento (SSPR). Apenas métodos configurados no Microsoft Entra ID, como o número de telefone ou o aplicativo Microsoft Authenticator, são aceitos para autenticação. ✔️ O aplicativo Microsoft Authenticator pode ser usado para autenticar a redefinição de senha. ❌ Para realizar a redefinição de senha de autoatendimento (SSPR), o usuário não precisa estar conectado ao Microsoft Entra ID, mas deve ter a autenticação configurada.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/tutorial-enable-sspr"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O Azure DDoS Protection Standard protege contra ataques man-in-the-middle (MITM).",
      "O Azure DDoS Protection Standard é habilitado por padrão em uma assinatura do Azure.",
      "O Azure DDoS Protection Standard protege contra ataques de protocolo."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "❌ O Azure DDoS Protection Standard não protege contra ataques man-in-the-middle (MITM). Ele foca na proteção contra ataques de DDoS, não MITM. ❌ O Azure DDoS Protection Standard não é habilitado por padrão. O serviço deve ser ativado manualmente em uma assinatura do Azure. ✔️ O Azure DDoS Protection Standard é eficaz contra ataques de protocolo, como TCP SYN flood e UDP reflection.",
    "link": "https://learn.microsoft.com/pt-br/azure/ddos-protection/ddos-protection-overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Você pode usar o Microsoft Purview Information Barriers para detectar mensagens que contenham linguagem inadequada.",
      "Você pode usar o Microsoft Purview Communication Compliance para escanear arquivos armazenados no Microsoft SharePoint Online.",
      "Você pode usar o Microsoft Purview Communication Compliance para escanear e-mails internos e externos no Microsoft Exchange Online."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft Purview Information Barriers pode ser usado para detectar mensagens com linguagem inadequada. ❌ O Microsoft Purview Communication Compliance não pode ser usado para escanear arquivos armazenados no Microsoft SharePoint Online. ✔️ O Microsoft Purview Communication Compliance pode escanear e-mails internos e externos no Microsoft Exchange Online.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/"
  },
  {
    "tipo": "combobox",
    "texto": "Single sign-on (SSO) configurado entre múltiplos provedores de identidade é um exemplo de <combobox>",
    "opcoes": [
      "Federação",
      "Integração",
      "Sincronização de hash de senha",
      "Autenticação pass-through"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A federação é o método que permite a autenticação entre diferentes provedores de identidade. ❌ A integração refere-se à conexão de sistemas, mas não necessariamente à autenticação única entre diferentes provedores de identidade. ❌ Sincronização de hash de senha é um método para armazenar senhas, não para autenticação única. ❌ A autenticação pass-through permite que a autenticação ocorra no provedor de identidade original, não diretamente entre os provedores.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-fed"
  },
  {
    "tipo": "unica",
    "texto": "Você planeja mover recursos para a nuvem.\nVocê está avaliando o uso de Infraestrutura como serviço (IaaS), Plataforma como serviço (PaaS) e Software como serviço (SaaS) modelos de nuvem.\nVocê planeja gerenciar apenas os dados, contas de usuário e dispositivos do usuário para um aplicativo baseado na nuvem.\nQual modelo de nuvem você usará?",
    "opcoes": [
      "SaaS",
      "PaaS",
      "IaaS"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ O modelo SaaS (Software as a Service) permite que você gerencie apenas dados, contas de usuário e dispositivos, enquanto o provedor de nuvem cuida do resto. ❌ O PaaS (Plataforma como serviço) oferece mais controle sobre as configurações do sistema e desenvolvimento, o que não é necessário neste caso. ❌ O IaaS (Infraestrutura como serviço) oferece controle total sobre os recursos de infraestrutura, o que inclui máquinas virtuais e redes, além de ser mais complexo para o que é exigido na questão.",
    "link": "https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/types-of-cloud-computing"
  },
  {
    "tipo": "combobox",
    "texto": "Habilitar uma identidade gerenciada atribuída ao sistema cria um principal de serviço que <combobox>",
    "opcoes": [
      "Pode ser compartilhado com múltiplos recursos do Azure.",
      "É gerenciado separadamente do recurso que o utiliza.",
      "Está atrelado ao ciclo de vida do recurso que o utiliza.",
      "Deve ser registrado manualmente no Microsoft Entra ID."
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A identidade gerenciada atribuída ao sistema está atrelada ao ciclo de vida do recurso que a utiliza, ou seja, quando o recurso for excluído, a identidade será removida automaticamente. ❌ A identidade não pode ser compartilhada com múltiplos recursos nem registrada manualmente. ❌ A gestão da identidade não é separada do recurso que a utiliza, ela segue o ciclo de vida do próprio recurso.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A identidade do dispositivo pode ser armazenada no Microsoft Entra ID.",
      "Uma identidade gerenciada atribuída ao sistema pode ser usada por múltiplos recursos do Azure.",
      "Se você excluir um recurso do Azure que tem uma identidade gerenciada atribuída ao usuário, a identidade gerenciada é excluída automaticamente."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A identidade do dispositivo pode ser armazenada no Microsoft Entra ID para autenticação e controle de acesso. ❌ Uma identidade gerenciada atribuída ao sistema não pode ser usada por múltiplos recursos, ela está atrelada ao recurso que a usa. ❌ Se você excluir um recurso que tem uma identidade gerenciada atribuída ao usuário, a identidade não será excluída automaticamente, pois ela é gerenciada separadamente do recurso.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "A identidade do dispositivo pode ser armazenada no Microsoft Entra ID.",
      "Uma identidade gerenciada atribuída ao sistema pode ser usada por múltiplos recursos do Azure.",
      "Se você excluir um recurso do Azure que tem uma identidade gerenciada atribuída ao usuário, a identidade gerenciada é excluída automaticamente."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A identidade do dispositivo pode ser armazenada no Microsoft Entra ID para autenticação e controle de acesso. ❌ Uma identidade gerenciada atribuída ao sistema não pode ser usada por múltiplos recursos, ela está atrelada ao recurso que a usa. ❌ Se você excluir um recurso que tem uma identidade gerenciada atribuída ao usuário, a identidade não será excluída automaticamente, pois ela é gerenciada separadamente do recurso.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Dispositivo pode ter identidade armazenada no Microsoft Entra ID.",
      "Identidade gerenciada atribuída a um único sistema pode ser usada por vários recursos do Azure.",
      "Se um recurso do Azure com identidade gerenciada atribuída pelo usuário for excluído, a identidade gerenciada será excluída automaticamente."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A identidade de dispositivo pode ser armazenada no Microsoft Entra ID. ❌ A identidade gerenciada atribuída a um único sistema não pode ser usada por vários recursos do Azure. ❌ Se você excluir um recurso do Azure com uma identidade gerenciada atribuída pelo usuário, a identidade não será excluída automaticamente; ela precisa ser gerenciada manualmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.\nNOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "A identidade do dispositivo pode ser armazenada no Microsoft Entra ID.",
      "Uma identidade gerenciada atribuída a um único sistema pode ser usada por vários recursos do Azure.",
      "Se você excluir um recurso do Azure com identidade gerenciada atribuída ao usuário, a identidade gerenciada será excluída automaticamente."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A identidade do dispositivo pode ser armazenada no Microsoft Entra ID. ❌ Uma identidade gerenciada atribuída a um único sistema não pode ser compartilhada entre vários recursos do Azure. ❌ Se você excluir um recurso do Azure que tenha uma identidade gerenciada atribuída ao usuário, essa identidade não será automaticamente excluída.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/identity-protection/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual pontuação mede o progresso de uma organização na conclusão das ações que ajudam a reduzir os riscos associados à proteção de dados e às normas regulatórias?",
    "opcoes": [
      "Pontuação de Adoção (Adoption Score)",
      "Pontuação de Segurança da Microsoft (Microsoft Secure Score)",
      "Pontuação de Segurança no Microsoft Defender for Cloud (Secure score in Microsoft Defender for Cloud)",
      "Pontuação de Conformidade (Compliance score)"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Compliance score mede o progresso de uma organização na implementação de ações de conformidade e na redução de riscos relacionados à proteção de dados e à conformidade regulatória. ❌ Adoption Score se concentra na adoção de ferramentas, mas não mede os riscos de conformidade. ❌ Microsoft Secure Score é um indicador de segurança, não diretamente relacionado à conformidade regulatória. ❌ Secure score no Microsoft Defender for Cloud também é voltado para segurança, mas não especificamente para conformidade.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-score"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.\nNOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "GitHub é um provedor de identidade baseado na nuvem.",
      "A federação fornece single sign-on (SSO) com múltiplos provedores de serviço.",
      "Um provedor central de identidade gerencia todos os serviços modernos de autenticação, como autenticação, autorização e auditoria."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "❌ O GitHub não é um provedor de identidade baseado na nuvem. ✔️ A federação fornece single sign-on (SSO) com múltiplos provedores de serviço. ✔️ Um provedor central de identidade gerencia todos os serviços modernos de autenticação, como autenticação, autorização e auditoria.",
    "link": "https://learn.microsoft.com/pt-br/windows-server/identity/ad-fs/deployment/how-to-connect-fed-azure-adfs"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os modelos de serviço de nuvem com a responsabilidade do cliente, arrastando até a descrição correta abaixo:",
    "itens": [

      { "label": "Infraestrutura como serviço (IaaS)" },
      { "label": "Datacenter local" },
      { "label": "Software como serviço (SaaS)" },
      { "label": "Plataforma como serviço (PaaS)" }

    ],
    "grupos": [
      "Tudo relacionado ao hardware, software, rede e segurança é de responsabilidade do cliente",
      "O cliente gerencia o sistema operacional, as aplicações, os dados e a segurança. A responsabilidade pela infraestrutura física, rede e hardware é do provedor.",
      "O cliente gerencia suas aplicações e dados. A responsabilidade pela infraestrutura, rede e sistema operacional é do provedor.",
      "O cliente gerencia apenas os dados. A responsabilidade pela aplicação, sistema operacional, infraestrutura e segurança é do provedor."
    ],
    "respostas": {
      "Tudo relacionado ao hardware, software, rede e segurança é de responsabilidade do cliente": ["Datacenter local"],
      "O cliente gerencia o sistema operacional, as aplicações, os dados e a segurança. A responsabilidade pela infraestrutura física, rede e hardware é do provedor.": ["Infraestrutura como serviço (IaaS)"],
      "O cliente gerencia suas aplicações e dados. A responsabilidade pela infraestrutura, rede e sistema operacional é do provedor.": ["Plataforma como serviço (PaaS)"],
      "O cliente gerencia apenas os dados. A responsabilidade pela aplicação, sistema operacional, infraestrutura e segurança é do provedor.": ["Software como serviço (SaaS)"]
    },
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-5",
    "explicacao": "✔️ Datacenter local coloca a maior responsabilidade no cliente, pois ele gerencia toda a infraestrutura e os recursos. ✔️ No modelo IaaS, o cliente gerencia a infraestrutura virtual, mas o provedor cuida da infraestrutura física. ✔️ No modelo PaaS, o provedor gerencia a infraestrutura e a plataforma, enquanto o cliente configura o software. ✔️ No modelo SaaS, o provedor cuida de tudo, desde a infraestrutura até o software, e o cliente usa o serviço sem se preocupar com a gestão.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/adopt/"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode atribuir a uma função do Microsoft Entra ID <combobox>",
    "opcoes": [
      "Um grupo de gerenciamento",
      "Um grupo de recursos",
      "Um principal de segurança",
      "Uma unidade administrativa"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ Um principal de segurança pode ser atribuído a funções no Microsoft Entra ID, permitindo que os usuários ou serviços sejam gerenciados com permissões específicas. ❌ Um grupo de gerenciamento ou grupo de recursos não pode ser atribuído diretamente a funções no Microsoft Entra ID. ❌ A unidade administrativa não é um tipo de objeto atribuído a funções no Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/overview"
  },
  {
    "tipo": "unica",
    "texto": "Você possui uma assinatura do Azure e precisa implementar a ativação de funções baseada em aprovação e com tempo determinado. O que você deve usar?",
    "opcoes": [
      "Revisões de acesso no Microsoft Entra ID",
      "Microsoft Entra ID Privileged Identity Management (PIM)",
      "Microsoft Entra ID Identity Protection",
      "Acesso condicional no Microsoft Entra ID"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft Entra ID Privileged Identity Management (PIM) permite a ativação de funções com aprovação e configurações de tempo determinado, ajudando a gerenciar privilégios de administrador. ❌ Revisões de acesso no Microsoft Entra ID são para revisões periódicas de permissões, mas não lidam com ativação de funções temporárias. ❌ O Microsoft Entra ID Identity Protection gerencia riscos de identidade, mas não se aplica à ativação de funções. ❌ O Acesso condicional no Microsoft Entra ID aplica políticas de segurança baseadas em condições, mas não gerencia a ativação de funções temporárias.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve usar no portal do Microsoft 365 Defender para visualizar as tendências de segurança e acompanhar o status de proteção das identidades?",
    "opcoes": [
      "Relatórios",
      "Incidentes",
      "Hunting",
      "Secure score"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ Os Relatórios no portal do Microsoft 365 Defender fornecem uma visão das tendências de segurança e ajudam a monitorar o status de proteção das identidades. ❌ Incidentes são relacionados a eventos de segurança e não a tendências. ❌ Hunting é utilizado para investigar possíveis ameaças ativas, mas não para visualizar tendências. ❌ Secure score é usado para avaliar a postura de segurança geral, mas não para visualizar tendências de segurança e status de proteção das identidades.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a opção que completa corretamente a frase: Fornece recomendações e orientações básicas para proteger os serviços do Azure <combobox>",
    "opcoes": [
      "Insights de Aplicações do Azure (Azure Application Insights)",
      "Monitor de Rede do Azure (Azure Network Watcher)",
      "Espaços de Trabalho do Log Analytics (Log Analytics workspaces)",
      "Benchmark de Segurança da Nuvem Microsoft (Microsoft cloud security benchmark)"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft cloud security benchmark fornece recomendações básicas de segurança para proteger serviços do Azure. ❌ Azure Application Insights é voltado para monitoramento de aplicativos. ❌ Azure Network Watcher ajuda na análise de redes, mas não foca diretamente na segurança. ❌ Log Analytics workspaces são utilizados para analisar dados, mas não fornecem orientações sobre segurança.",
    "link": "https://learn.microsoft.com/pt-br/security/benchmark/azure/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Sentinel usa aplicativos de lógica para identificar anomalias em recursos.",
      "O Microsoft Sentinel usa workbooks para correlacionar alertas em incidentes.",
      "As ferramentas de pesquisa e consulta de caça do Microsoft Sentinel são baseadas na estrutura MITRE ATT&CK."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "❌ O Microsoft Sentinel utiliza uma combinação de detecção, investigação e resposta automatizada, mas não se baseia exclusivamente em aplicativos de lógica para identificar anomalias. A detecção é realizada através de modelos de análise e de IA. ❌ Workbooks no Microsoft Sentinel são usados para visualização e análise, mas não são responsáveis por correlacionar alertas em incidentes. A correlação é feita por meio de regras de análise e playbooks automatizados. ✔️ As ferramentas de pesquisa e consulta no Microsoft Sentinel são baseadas na framework MITRE ATT&CK, que fornece uma metodologia de detecção de ameaças avançadas e técnicas de ataque utilizadas por adversários.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode restringir a comunicação entre usuários no Exchange Online usando Barreiras de Informação.",
      "Você pode restringir o acesso a um site do SharePoint Online usando Barreiras de Informação.",
      "Você pode impedir o compartilhamento de um arquivo com outro usuário no Microsoft Teams usando Barreiras de Informação."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "❌ As Barreiras de Informação no Exchange Online não impedem a comunicação entre todos os usuários, apenas entre usuários de diferentes segmentos ou níveis de segurança. ✔️ No SharePoint Online, é possível restringir o acesso ao conteúdo com Barreiras de Informação, aplicando controle de acesso entre diferentes grupos de usuários. ✔️ No Microsoft Teams, também é possível controlar o compartilhamento de arquivos entre usuários usando Barreiras de Informação, garantindo que informações confidenciais não sejam compartilhadas de maneira inadequada.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/information-barriers?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Qual portal contém o catálogo de soluções?",
    "opcoes": [
      "Portal de conformidade do Microsoft Purview",
      "Portal do Microsoft 365 Defender",
      "Centro de administração do Microsoft 365",
      "Centro de administração de aplicativos do Microsoft 365"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O portal de conformidade do Microsoft Purview contém o catálogo de soluções, que oferece uma coleção de soluções para proteger dados, gerenciar riscos e conformidade. ❌ O portal do Microsoft 365 Defender está focado em soluções de segurança e proteção contra ameaças, não no catálogo de soluções. ❌ O centro de administração do Microsoft 365 é voltado para a gestão de usuários e serviços no ambiente do Microsoft 365. ❌ O centro de administração de aplicativos do Microsoft 365 é voltado para a configuração e gerenciamento de aplicativos no Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/microsoft-365-compliance-center?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": "No portal de conformidade do Microsoft Purview, você pode usar para remover recursos do painel de navegação <combobox>",
    "opcoes": [
      "Gerenciador de Conformidade",
      "Personalizar navegação",
      "Políticas",
      "Configurações"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Personalizar navegação permite remover recursos do painel de navegação no portal de conformidade do Microsoft Purview, proporcionando uma interface personalizada para o usuário. ❌ Gerenciador de Conformidade é utilizado para gerenciar a conformidade de sua organização com políticas e controles. ❌ Políticas refere-se à criação e implementação de políticas de conformidade no portal. ❌ Configurações permite a configuração de opções gerais do portal, mas não remove recursos do painel de navegação.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/microsoft-365-compliance-center?view=o365-worldwide"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A conformidade de comunicação é configurada usando o centro de administração do Microsoft 365.",
      "O Microsoft SharePoint Online suporta conformidade de comunicação.",
      "A conformidade de comunicação pode corrigir problemas de conformidade."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "❌ A conformidade de comunicação não é configurada diretamente no centro de administração do Microsoft 365, mas através de políticas de conformidade de comunicação no Microsoft Purview. ❌ O Microsoft SharePoint Online não suporta diretamente a conformidade de comunicação. ✔️ A conformidade de comunicação pode corrigir problemas de conformidade, aplicando políticas para monitorar e auditar comunicações em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/communication-compliance"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode usar grupos dinâmicos no Microsoft Entra ID para automatizar o processo de ciclo de vida de <combobox>",
    "opcoes": [
      "Acesso",
      "Objeto",
      "Acesso privilegiado"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ Grupos dinâmicos no Microsoft Entra ID são usados para automatizar o gerenciamento de acesso com base em atributos específicos de usuário. ❌ Os grupos dinâmicos não são usados para automatizar objetos nem acesso privilegiado, mas sim para a gestão eficiente de usuários e seus acessos.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/users-groups-roles/groups-dynamic-membership"
  },
  {
    "tipo": "unica",
    "texto": "Quando você habilita a Autenticação Multifatorial (MFA) no Microsoft Entra ID, quantos fatores são necessários para autenticação?",
    "opcoes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ A autenticação multifatorial (MFA) exige dois fatores de autenticação para garantir maior segurança. ❌ Um único fator não é suficiente, pois a MFA visa adicionar uma camada extra de segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/concept-mfa-howitworks"
  },
  {
    "tipo": "combobox",
    "texto": "O Microsoft Defender para Nuvem avalia os recursos do Azure para problemas de segurança <combobox>",
    "opcoes": [
      "Diariamente",
      "Continuamente",
      "A cada 15 minutos",
      "A cada hora"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft Defender para Nuvem avalia continuamente os recursos do Azure para problemas de segurança, garantindo proteção em tempo real. ❌ Avaliações diárias, a cada 15 minutos ou a cada hora não são suficientes para garantir uma proteção contínua e imediata.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "As políticas de retenção atribuem as mesmas configurações de retenção a todos os arquivos em uma biblioteca do Microsoft SharePoint Online.",
      "Os rótulos de retenção podem ser atribuídos a arquivos individuais e mensagens de e-mail.",
      "Você pode atribuir vários rótulos de retenção a uma mensagem de e-mail ou a um documento."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ As políticas de retenção podem ser configuradas para aplicar configurações de retenção a todos os arquivos em uma biblioteca do SharePoint Online. ✔️ Rótulos de retenção podem ser atribuídos a arquivos e mensagens de e-mail para controle de retenção. ❌ Não é possível atribuir múltiplos rótulos de retenção a um único item de e-mail ou documento.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/retention"
  },
  {
    "tipo": "combobox",
    "texto": "É utilizado quando os aplicativos da web do Azure precisam usar a mesma identidade <combobox>",
    "opcoes": [
      "Um certificado",
      "Um principal de serviço",
      "Uma identidade gerenciada atribuída ao sistema",
      "Uma identidade gerenciada atribuída pelo usuário"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ Uma identidade gerenciada atribuída pelo usuário é usada quando os aplicativos da web do Azure precisam compartilhar a mesma identidade. ❌ Um certificado é uma forma de autenticação, mas não garante a mesma identidade para aplicativos. ❌ Um principal de serviço também é utilizado para autenticação, mas não é especificamente destinado a garantir a mesma identidade entre aplicativos. ❌ Uma identidade gerenciada atribuída ao sistema é vinculada ao ciclo de vida de um recurso específico, não sendo reutilizável entre aplicativos.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "combobox",
    "texto": "As políticas de Acesso Condicional são aplicadas a autenticação de primeiro fator <combobox>",
    "opcoes": [
      "Depois",
      "Antes",
      "Durante",
      "Em vez de"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ As políticas de Acesso Condicional são aplicadas após a autenticação de primeiro fator para garantir que o acesso esteja conforme as condições definidas. ❌ Antes ou durante a autenticação, não se aplica corretamente, pois a autenticação precisa ser validada antes de aplicar as políticas. ❌ 'Em vez de' também está incorreto, pois as políticas não substituem a autenticação de primeiro fator, mas sim agem após essa etapa.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de sinal de Acesso Condicional arrastando até as definições apropriadas:",
    "itens": [
      { "label": "Dispositivo" },
      { "label": "Localização" },
      { "label": "Risco de entrada" },
      { "label": "Risco de usuário" }
    ],
    "grupos": [
      "A probabilidade de que uma identidade ou conta esteja comprometida",
      "A probabilidade de que uma solicitação de autenticação não seja autorizada pelo proprietário da identidade"
    ],
    "respostas": {
      "A probabilidade de que uma identidade ou conta esteja comprometida": ["Risco de usuário"],
      "A probabilidade de que uma solicitação de autenticação não seja autorizada pelo proprietário da identidade": ["Risco de entrada"]
    },
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ O risco de usuário avalia a probabilidade de que uma identidade ou conta esteja comprometida. ✔️ O risco de entrada avalia a probabilidade de que uma solicitação de autenticação não seja autorizada pelo proprietário da identidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual solução do Microsoft Purview pode ser usada para identificar vazamento de dados?",
    "opcoes": [
      "Gestão de risco de insiders (Insider risk management)",
      "Compliance Manager",
      "Compliance de comunicação (Communication compliance)",
      "eDiscovery"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ A Gestão de risco de insiders é uma solução do Microsoft Purview que pode ser usada para identificar vazamento de dados ao monitorar comportamentos de risco dentro da organização. ❌ O Compliance Manager é uma ferramenta para gerenciar a conformidade, mas não é especificamente voltada para identificar vazamentos de dados. ❌ O Compliance de comunicação é utilizado para monitorar e gerenciar comunicações internas, mas não para vazamentos de dados. ❌ O eDiscovery é utilizado para buscas legais e investigação, mas não para identificar vazamentos de dados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/insider-risk-management"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Acesso Condicional é implementado usando políticas no Microsoft Entra ID.",
      "Uma política de Acesso Condicional pode bloquear ou permitir conexões do Microsoft Entra ID com base na plataforma específica do dispositivo do usuário.",
      "Uma política de Acesso Condicional pode ser aplicada a um grupo do Microsoft 365."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ O Acesso Condicional é implementado com políticas no Microsoft Entra ID para gerenciar o acesso aos recursos da organização. ✔️ A política de Acesso Condicional pode bloquear ou permitir conexões dependendo da plataforma do dispositivo (Windows, iOS, Android, etc.). ✔️ As políticas de Acesso Condicional podem ser aplicadas a grupos do Microsoft 365 para controlar o acesso dos membros do grupo.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual solução realiza avaliações de segurança e gera alertas automaticamente quando uma vulnerabilidade é encontrada?",
    "opcoes": [
      "Gerenciamento de postura de segurança na nuvem (CSPM)",
      "DevSecOps",
      "Plataforma de proteção de carga de trabalho na nuvem (CWPP)",
      "Gerenciamento de informações e eventos de segurança (SIEM)"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Gerenciamento de postura de segurança na nuvem (CSPM) realiza avaliações de segurança e gera alertas automaticamente quando vulnerabilidades são encontradas no ambiente de nuvem. ❌ O DevSecOps foca na integração da segurança no ciclo de vida do desenvolvimento, mas não gera alertas sobre vulnerabilidades por si só. ❌ A CWPP foca na segurança das cargas de trabalho na nuvem, mas o CSPM é a solução para avaliação de vulnerabilidades e geração de alertas. ❌ As soluções SIEM coletam, analisam e relatam eventos de segurança, mas não são especializadas em escaneamento de vulnerabilidades e geração de alertas.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/concept-cloud-security-posture-management"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para proteger contra links maliciosos enviados em mensagens de e-mail, mensagens de chat e canais?",
    "opcoes": [
      "Microsoft Defender para Aplicativos em Nuvem",
      "Microsoft Defender para Office 365",
      "Microsoft Defender para Endpoint",
      "Microsoft Defender para Identidade"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft Defender para Office 365 protege contra links maliciosos em e-mails, mensagens de chat e canais, oferecendo proteção contra phishing e outros ataques. ❌ O Microsoft Defender para Aplicativos em Nuvem foca na proteção de aplicativos em nuvem, não especificamente contra links maliciosos em e-mails. ❌ O Microsoft Defender para Endpoint protege dispositivos contra ameaças, mas não é focado na proteção de links em mensagens. ❌ O Microsoft Defender para Identidade foca na proteção de identidades, não em links maliciosos.",
    "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/office-365-advanced-threat-protection-service-description"
  },
  {
    "tipo": "combobox",
    "texto": "Microsoft Entra Permissions Management é uma solução de <combobox>",
    "opcoes": [
      "Gestão de postura de segurança em nuvem (CSPM)",
      "Gestão de informações e eventos de segurança (SIEM)",
      "Gestão de infraestrutura de direitos em nuvem (CIEM)",
      "Detecção e resposta estendidas (XDR)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft Entra Permissions Management é uma solução de Gestão de Infraestrutura de Direitos em Nuvem (CIEM), focada na governança e controle de permissões em ambientes de nuvem. ❌ O CSPM foca na postura de segurança em nuvem, não em gestão de permissões. ❌ O SIEM lida com coleta e análise de dados de segurança, enquanto o XDR foca em detectar e responder a ameaças avançadas.",
    "link": "https://learn.microsoft.com/pt-br/entra/permissions-management/"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço inclui o Microsoft Secure Score para dispositivos?",
    "opcoes": [
      "Microsoft Defender for IoT",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Office 365"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-5",
    "explicacao": "✔️ O Microsoft Defender for Endpoint inclui o Microsoft Secure Score para dispositivos, ajudando a avaliar a segurança e a postura de dispositivos conectados. ❌ O Microsoft Defender for IoT é voltado para dispositivos IoT, não para dispositivos tradicionais. ❌ O Microsoft Defender for Identity se concentra em proteger identidades, não dispositivos. ❌ O Microsoft Defender for Office 365 protege serviços de e-mail, não dispositivos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/"
  }
];
