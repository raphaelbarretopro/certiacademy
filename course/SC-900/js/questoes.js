// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "Todas as edições de licença do Azure Active Directory incluem os mesmos recursos.",
      "Você pode gerenciar um tenant do Azure Active Directory usando o portal do Azure.",
      "Você deve implantar máquinas virtuais do Azure para hospedar um tenant do Azure Active Directory."
    ],
    "respostas": [1],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "❌ O Azure Active Directory vem em quatro edições com diferentes recursos: Gratuito, Office 365 Apps, Premium P1 e Premium P2.<br>✔️ Você pode gerenciar um tenant do Azure Active Directory usando o portal do Azure.<br>❌ O Azure Active Directory é um serviço gerenciado na nuvem, não requer máquinas virtuais para hospedagem.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/active-directory-whatis"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: ____ fornece as melhores práticas de funcionários, parceiros e clientes da Microsoft, incluindo ferramentas e orientações para auxiliar em uma implantação do Azure.",
    "opcoes": [
      "Azure Blueprints",
      "Azure Policy",
      "O Microsoft Cloud Adoption Framework para Azure",
      "Resource Lock"
    ],
    "resposta": 2,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ O Microsoft Cloud Adoption Framework para Azure é uma coleção de documentação, guia de implementação, melhores práticas e ferramentas comprovadas pela Microsoft para acelerar a jornada de adoção da nuvem.<br>❌ Azure Blueprints é usado para definir configurações repetíveis para ambientes de conformidade.<br>❌ Azure Policy é usado para criar, atribuir e gerenciar políticas que aplicam regras sobre os recursos do Azure.<br>❌ Resource Lock é usado para proteger recursos contra modificação ou exclusão acidental.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/overview"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: ____ é usado para identificar, reter e exportar informações eletrônicas que podem ser usadas em uma investigação.",
    "opcoes": [
      "Customer Lockbox",
      "Data Loss Prevention (DLP)",
      "eDiscovery",
      "Resource Log"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ eDiscovery, ou descoberta eletrônica, é o processo de identificar e entregar informações eletrônicas que podem ser usadas como evidência em casos legais.<br>❌ Customer Lockbox é um recurso que fornece controle explícito para aprovação de acesso a dados durante suporte.<br>❌ Data Loss Prevention (DLP) é usado para prevenir a perda de dados sensíveis, não para investigação.<br>❌ Resource Log são registros de atividades e diagnósticos fornecidos pelo Azure.",
    "link": "https://learn.microsoft.com/pt-br/purview/ediscovery"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: Você pode gerenciar o Microsoft Intune usando o(a) ____.",
    "opcoes": [
      "Azure Active Directory Admin Center",
      "Microsoft 365 Comp Center",
      "Microsoft 365 Defender portal",
      "Microsoft Endpoint Manager admin center"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Microsoft Endpoint Manager admin center combina serviços como Microsoft Intune, Configuration Manager, Desktop Analytics, Co-management e Windows Autopilot.<br>❌ Azure Active Directory Admin Center é usado para gerenciar identidades e acessos, não dispositivos.<br>❌ Microsoft 365 Comp Center não é um portal válido para gerenciamento do Intune.<br>❌ Microsoft 365 Defender portal é focado em segurança, não em gerenciamento de dispositivos.",
    "link": "https://learn.microsoft.com/pt-br/mem/intune/fundamentals/what-is-intune"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: Federação é usada para estabelecer ____ entre organizações.",
    "opcoes": [
      "Autenticação Multifator (MFA)",
      "Relação de confiança",
      "Sincronização de contas de usuário",
      "Conexão VPN"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Federação é uma coleção de domínios que estabeleceram confiança, que tipicamente inclui autenticação e quase sempre autorização.<br>❌ Autenticação Multifator (MFA) é um método de segurança adicional, não estabelece relações entre organizações.<br>❌ Sincronização de contas de usuário é um processo para manter as identidades sincronizadas, não estabelece relações entre organizações.<br>❌ Conexão VPN é uma conexão de rede segura, não estabelece relações de confiança entre organizações.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-fed"
  },
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "Aplicar atualizações de sistema aumenta a pontuação segura da organização no Microsoft Defender for Cloud.",
      "A pontuação segura no Microsoft Defender for Cloud pode avaliar recursos em várias assinaturas do Azure.",
      "Habilitar a autenticação multifator aumenta a pontuação segura de uma organização no Microsoft Defender for Cloud."
    ],
    "respostas": [0, 1, 2],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Aplicar atualizações de sistema reduz as vulnerabilidades de segurança e aumenta a pontuação segura.<br>✔️ A pontuação segura no Microsoft Defender for Cloud pode avaliar recursos em várias assinaturas do Azure para fornecer uma visão consolidada da segurança.<br>✔️ Habilitar a autenticação multifator (MFA) torna as contas mais seguras e aumenta a pontuação segura da organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/secure-score-security-controls"
  },
  {
    "tipo": "unica",
    "texto": "Qual pontuação mede o progresso de uma organização na conclusão de ações que ajudam a reduzir o risco associado à proteção de dados e aos padrões regulatórios?",
    "opcoes": [
      "Microsoft Secure Score",
      "Productivity Score",
      "Secure Score no Azure Security Center",
      "Compliance Score"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ O Compliance Score no Microsoft Purview Compliance Manager ajuda você a gerenciar os requisitos de conformidade da sua organização.<br>❌ Microsoft Secure Score mede a postura de segurança geral, não especificamente a conformidade regulatória.<br>❌ Productivity Score mede a produtividade, não a conformidade regulatória.<br>❌ Secure Score no Azure Security Center (agora Microsoft Defender for Cloud) mede a segurança, não especificamente a conformidade regulatória.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager-overview"
  },
  {
    "tipo": "unica",
    "texto": "O que você usa para fornecer integração em tempo real entre o Azure Sentinel e outra fonte de segurança?",
    "opcoes": [
      "Azure AD Connect",
      "Um workspace do Log Analytics",
      "Azure Information Protection",
      "Um conector"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Um conector é usado para integrar o Azure Sentinel com outras fontes de segurança em tempo real.<br>❌ Azure AD Connect é usado para sincronizar identidades entre o Active Directory local e o Azure AD.<br>❌ Um workspace do Log Analytics é um local para armazenar dados, não fornece integração em tempo real.<br>❌ Azure Information Protection é usado para proteger documentos e emails, não para integração com o Azure Sentinel.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/connect-data-sources"
  },
  {
    "tipo": "unica",
    "texto": "Qual portal da Microsoft fornece informações sobre como os serviços de nuvem da Microsoft cumprem padrões regulatórios como a Organização Internacional para Padronização (ISO)?",
    "opcoes": [
      "O Microsoft Endpoint Manager admin center",
      "O Azure Cost Management + Billing",
      "Microsoft Service Trust Portal",
      "O Azure Active Directory admin center"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ O Microsoft Service Trust Portal contém detalhes sobre a implementação de controles e processos da Microsoft que protegem seus serviços de nuvem e os dados do cliente.<br>❌ O Microsoft Endpoint Manager admin center é usado para gerenciar dispositivos, não para fornecer informações de conformidade.<br>❌ O Azure Cost Management + Billing é usado para gerenciar custos, não para fornecer informações de conformidade.<br>❌ O Azure Active Directory admin center é usado para gerenciar identidades, não para fornecer informações de conformidade.",
    "link": "https://learn.microsoft.com/pt-br/compliance/regulatory/offering-home"
  },
  {
    "tipo": "unica",
    "texto": "No modelo de responsabilidade compartilhada para uma implantação do Azure, pelo que a Microsoft é unicamente responsável por gerenciar?",
    "opcoes": [
      "O gerenciamento de dispositivos móveis",
      "As permissões para os dados do usuário armazenados no Azure",
      "A criação e o gerenciamento de contas de usuário",
      "O gerenciamento do hardware físico"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ No modelo de responsabilidade compartilhada, a Microsoft é unicamente responsável pelo gerenciamento do hardware físico em todos os modelos de serviço em nuvem.<br>❌ O gerenciamento de dispositivos móveis é responsabilidade do cliente.<br>❌ As permissões para os dados do usuário armazenados no Azure são responsabilidade do cliente.<br>❌ A criação e o gerenciamento de contas de usuário são responsabilidade do cliente.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility"
  },
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "Verificar explicitamente é um dos princípios orientadores do Zero Trust.",
      "Assumir a violação é um dos princípios orientadores do Zero Trust.",
      "O modelo de segurança Zero Trust assume que o firewall protege a rede interna de ameaças externas."
    ],
    "respostas": [0, 1],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Verificar explicitamente é um dos princípios orientadores do Zero Trust, exigindo verificação em todas as solicitações.<br>✔️ Assumir a violação é um dos princípios orientadores do Zero Trust, onde cada solicitação é tratada como se originasse de uma rede não controlada.<br>❌ O modelo Zero Trust não assume que o firewall protege a rede interna. Na verdade, ele assume o oposto - que a rede interna já pode estar comprometida.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/zero-trust-overview"
  },
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "Controle é um princípio chave de privacidade da Microsoft.",
      "Transparência é um princípio chave de privacidade da Microsoft.",
      "Responsabilidade compartilhada é um princípio chave de privacidade da Microsoft."
    ],
    "respostas": [0, 1],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Controle é um princípio chave de privacidade da Microsoft, permitindo que os usuários controlem seus dados.<br>✔️ Transparência é um princípio chave de privacidade da Microsoft, sendo transparente sobre como os dados são coletados e usados.<br>❌ Responsabilidade compartilhada não é um dos seis princípios chave de privacidade da Microsoft, embora seja um conceito importante em segurança na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/compliance/regulatory/privacy-principles"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: ____ um arquivo torna os dados no arquivo legíveis e utilizáveis para visualizadores que possuem a chave apropriada.",
    "opcoes": [
      "Arquivar",
      "Comprimir",
      "Desduplicar",
      "Criptografar"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Criptografar um arquivo torna os dados no arquivo ilegíveis sem a chave apropriada, e legíveis apenas para aqueles que possuem a chave.<br>❌ Arquivar é o processo de armazenar dados raramente acessados, não está relacionado a tornar dados legíveis apenas com a chave apropriada.<br>❌ Comprimir é o processo de reduzir o tamanho de um arquivo, não está relacionado à segurança ou acesso aos dados.<br>❌ Desduplicar é o processo de eliminar cópias redundantes de dados, não está relacionado à segurança ou acesso aos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/encryption-overview"
  },
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "Assinar digitalmente um documento requer uma chave privada.",
      "Verificar a autenticidade de um documento assinado digitalmente requer a chave pública do signatário.",
      "Verificar a autenticidade de um documento assinado digitalmente requer a chave privada do signatário."
    ],
    "respostas": [0, 1],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Assinar digitalmente um documento requer uma chave privada, que é mantida em segredo pelo signatário.<br>✔️ Verificar a autenticidade de um documento assinado digitalmente requer a chave pública do signatário, que é distribuída publicamente.<br>❌ A chave privada do signatário não é necessária para verificar a autenticidade de um documento assinado digitalmente, apenas a chave pública.",
    "link": "https://learn.microsoft.com/pt-br/windows/security/information-protection/windows-information-protection/how-wip-works-with-azure-rms"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: Quando os usuários fazem login no portal do Azure, eles são primeiro ____.",
    "opcoes": [
      "Atribuir permissões",
      "Autenticados",
      "Autorizados",
      "Resolvidos"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Autenticação é o processo de verificar a identidade de um usuário, confirmando quem eles dizem ser.<br>❌ Atribuir permissões ocorre após a autenticação e autorização, não é o primeiro passo.<br>❌ Autorização é o processo de determinar quais recursos um usuário pode acessar, ocorre após a autenticação.<br>❌ Resolução não é um processo padrão em segurança de identidade.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/auth-mechanisms"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: ____ é o processo de identificar se um usuário conectado pode acessar um recurso específico.",
    "opcoes": [
      "Autenticação",
      "Autorização",
      "Federação",
      "Single Sign-On"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Autorização é o processo de determinar quais recursos um usuário pode acessar, ou quais permissões ele tem.<br>❌ Autenticação é o processo de verificar a identidade de um usuário, não suas permissões.<br>❌ Federação é o processo de estabelecer confiança entre organizações para compartilhar identidades.<br>❌ Single Sign-On é a capacidade de usar uma única credencial para acessar múltiplos recursos.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-authentication-methods"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase: ____ permite a colaboração com parceiros de negócios de organizações externas, como fornecedores e vendedores. Usuários externos aparecem como usuários convidados no diretório.",
    "opcoes": [
      "Active Directory Domain Services (AD DS)",
      "Active Directory Forest Trusts",
      "Azure Active Directory Business-to-Business (B2B)",
      "Azure Active Directory Business-to-Consumer (B2C)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Azure Active Directory Business-to-Business (B2B) permite convidar usuários externos para colaborar com sua organização, aparecendo como usuários convidados no diretório.<br>❌ Active Directory Domain Services (AD DS) é o serviço de diretório local da Microsoft, não específico para colaboração externa.<br>❌ Active Directory Forest Trusts são relacionamentos de confiança entre domínios do Active Directory, não específicos para colaboração externa.<br>❌ Azure Active Directory Business-to-Consumer (B2C) é usado para gerenciar identidades de clientes, não para colaboração com parceiros de negócios.",
    "link": "https://learn.microsoft.com/pt-br/entra/external-id/what-is-b2b"
  },
  {
    "tipo": "multipla",
    "texto": "No Microsoft Cloud Adoption Framework para Azure, quais duas fases são abordadas antes da fase 'Ready'?",
    "opcoes": [
      "Plan",
      "Manage",
      "Adopt",
      "Govern",
      "Define strategy"
    ],
    "respostas": [0, 4],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ Plan (Planejar) é a fase que vem antes da fase Ready no Microsoft Cloud Adoption Framework.<br>✔️ Define strategy (Definir estratégia) é a primeira fase do Cloud Adoption Framework, antes de Plan e Ready.<br>❌ Manage (Gerenciar) é uma fase que vem após a fase Ready.<br>❌ Adopt (Adotar) é uma fase que vem após a fase Ready.<br>❌ Govern (Governar) é uma fase que vem após a fase Ready.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/overview"
  },
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "Em Software como Serviço (SaaS), aplicar service packs aos aplicativos é responsabilidade da organização.",
      "Em Infraestrutura como Serviço (IaaS), gerenciar a rede física é responsabilidade do provedor de nuvem.",
      "Em todos os tipos de implantação de nuvem do Azure, gerenciar a segurança das informações e dos dados é responsabilidade da organização."
    ],
    "respostas": [1, 2],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "❌ Em Software como Serviço (SaaS), aplicar service packs aos aplicativos é responsabilidade do provedor de nuvem, não da organização.<br>✔️ Em Infraestrutura como Serviço (IaaS), gerenciar a rede física é responsabilidade do provedor de nuvem, não da organização.<br>✔️ Em todos os tipos de implantação de nuvem do Azure, gerenciar a segurança das informações e dos dados é responsabilidade da organização, pois você é o proprietário de seus dados e identidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility"
  },
  {
    "tipo": "multipla",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "opcoes": [
      "O Azure AD Connect pode ser usado para implementar identidade híbrida.",
      "A identidade híbrida requer a implementação de dois tenants do Microsoft 365.",
      "A autenticação de identidades híbridas requer a sincronização do Active Directory Domain Services e do Azure Active Directory."
    ],
    "respostas": [0, 2],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "SC-900 Bônus 02",
    "explicacao": "✔️ O Azure AD Connect é uma ferramenta que pode ser usada para implementar identidade híbrida, sincronizando identidades entre o AD DS local e o Azure AD.<br>❌ A identidade híbrida não requer a implementação de dois tenants do Microsoft 365, apenas um tenant do Azure AD e um ambiente local do AD DS.<br>✔️ A autenticação de identidades híbridas requer a sincronização entre o Active Directory Domain Services local e o Azure Active Directory.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-hybrid-identity"
  }


];
