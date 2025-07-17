// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra Permissions Management pode ser gerenciado usando o portal de conformidade do Microsoft Purview.",
      "O Microsoft Entra Permissions Management pode ser usado para gerenciar permissões no Amazon Web Services (AWS).",
      "O Microsoft Secure Score pode ser visualizado a partir do Permissions Management no centro de administração do Microsoft Entra."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Entra Permissions Management pode ser gerenciado usando o portal de conformidade do Microsoft Purview. ✔️ O Microsoft Entra Permissions Management também pode ser integrado com a AWS para gerenciar permissões. ❌ O Microsoft Secure Score não está disponível diretamente através do Permissions Management no centro de administração do Microsoft Entra.",
    "link": "https://learn.microsoft.com/pt-br/entra/permissions-management/"
  },
  {
    "tipo": "unica",
    "texto": "Qual portal da Microsoft fornece informações sobre como os serviços de nuvem da Microsoft cumprem com os padrões regulatórios, como a Organização Internacional para Padronização (ISO)? ",
    "opcoes": [
      "Centro de administração do Microsoft 365 (The Microsoft 365 admin center)",
      "Gerenciamento de Custos e Faturamento do Azure (Azure Cost Management + Billing)",
      "Portal de confiança de serviços da Microsoft (Microsoft Service Trust Portal)",
      "O portal de conformidade do Microsoft Purview (The Microsoft Purview compliance portal)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Service Trust Portal fornece informações detalhadas sobre a conformidade regulatória dos serviços em nuvem da Microsoft com padrões internacionais, incluindo ISO. ❌ O centro de administração do Microsoft 365 é focado na administração de usuários e serviços do 365, não na conformidade com padrões regulatórios. ❌ Azure Cost Management + Billing é uma ferramenta de gerenciamento de custos, não está relacionada à conformidade regulatória. ❌ O portal de conformidade do Microsoft Purview se concentra em conformidade e proteção de dados, não na conformidade com padrões regulatórios. ",
    "link": "https://learn.microsoft.com/pt-br/purview/get-started-with-service-trust-portal"
  },
  {
    "tipo": "combobox",
    "texto": "você pode <combobox> as regras de segurança padrão de um grupo de segurança de rede (NSG).",
    "opcoes": [
      "Copiar (copy)",
      "Deletar (delete)",
      "Substituir (override)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ Você pode substituir (override) as regras de segurança padrão de um grupo de segurança de rede, mas não pode copiá-las ou deletá-las diretamente. ❌ Não é possível copiar nem deletar as regras padrão.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure que contém um espaço de trabalho do Log Analytics.\nVocê precisa integrar o Microsoft Sentinel.\nO que você deve fazer primeiro?",
    "opcoes": [
      "Criar uma consulta de caça (Create a hunting query)",
      "Correlacionar alertas em incidentes (Correlate alerts into incidents)",
      "Conectar às suas fontes de dados (Connect to your data sources)",
      "Criar uma regra de detecção personalizada (Create a custom detection rule)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O primeiro passo ao integrar o Microsoft Sentinel é conectar às fontes de dados. Isso permite que o Sentinel comece a coletar e analisar dados. ❌ Criar uma consulta de caça, correlacionar alertas ou criar regras de detecção personalizadas são etapas subsequentes após a integração inicial das fontes de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/configure-data-connector?tabs=azure-portal"
  },
  {
    "tipo": "unica",
    "texto": "Para que o Azure Key Vault é utilizado?",
    "opcoes": [
      "Implantar um serviço de segurança de rede baseado em nuvem que protege os recursos de rede virtual do Azure",
      "Proteger aplicativos baseados na nuvem contra ameaças cibernéticas e vulnerabilidades",
      "Proteger chaves criptográficas e outros segredos usados por aplicativos e serviços em nuvem",
      "Fornecer conectividade RDP/SSH segura e sem interrupções para máquinas virtuais do Azure via TLS do portal do Azure"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Azure Key Vault é usado para proteger chaves criptográficas e outros segredos críticos utilizados por aplicativos e serviços em nuvem. ❌ O serviço de segurança de rede e a conectividade RDP/SSH são relacionados a outros serviços, como o Azure Firewall e o Azure Bastion.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview"
  },
  {
    "tipo": "unica",
    "texto": "Quando um usuário se autentica usando o login sem senha, o que o usuário deve selecionar no aplicativo Microsoft Authenticator?",
    "opcoes": [
      "Uma resposta para uma pergunta de segurança",
      "Um número",
      "Uma chave alfanumérica",
      "Uma senha secreta"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O usuário deve selecionar um número para autenticação sem senha no Microsoft Authenticator. ❌ As outras opções não são usadas para login sem senha, que se baseia em números ou métodos alternativos de autenticação.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/howto-mfa-userstates"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Cloud é uma solução de operações de segurança no desenvolvimento (DevSecOps).",
      "O Microsoft Defender for Cloud é uma solução de gerenciamento de postura de segurança em nuvem (CSPM).",
      "O Microsoft Defender for Cloud é uma solução de plataforma de proteção de cargas de trabalho em nuvem (CWPP)."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender for Cloud cobre as três soluções mencionadas, ajudando na proteção de cargas de trabalho em nuvem, gerenciamento de postura de segurança e integrando-se com operações de segurança no desenvolvimento (DevSecOps).",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox>, é um site público utilizado para publicar relatórios de auditoria e outras informações relacionadas à conformidade associadas aos serviços de nuvem da Microsoft.",
    "opcoes": [
      "Azure EA portal",
      "Microsoft Purview compliance portal",
      "Microsoft Purview governance portal",
      "Microsoft Service Trust Portal"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Service Trust Portal é o portal público que fornece relatórios de auditoria e outras informações relacionadas à conformidade dos serviços de nuvem da Microsoft. ❌ Os outros portais não são especificamente voltados para auditoria e conformidade pública relacionada aos serviços de nuvem.",
    "link": "https://learn.microsoft.com/pt-br/purview/get-started-with-service-trust-portal"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso suporta o e-mail como método de autenticação dos usuários?",
    "opcoes": [
      "Microsoft Entra ID Protection",
      "Microsoft Entra Multi-Factor Authentication (MFA)",
      "Redefinição de senha de autoatendimento (SSPR)",
      "Microsoft Entra Password Protection"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O recurso de redefinição de senha de autoatendimento (SSPR) usa o e-mail como um dos métodos de autenticação para recuperar ou redefinir senhas. ❌ O Microsoft Entra ID Protection e a autenticação multifatorial (MFA) são mais voltados para autenticação adicional e verificação de identidade. ❌ O Microsoft Entra Password Protection é mais voltado para definir políticas de senha seguras.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/tutorial-enable-sspr"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft Purview pode usar algoritmos de aprendizado de máquina para detectar e proteger automaticamente itens sensíveis?",
    "opcoes": [
      "eDiscovery",
      "Prevenção contra perda de dados (DLP)",
      "Riscos de informações",
      "Conformidade de comunicação"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ A Prevenção contra perda de dados (DLP) usa algoritmos de aprendizado de máquina para identificar e proteger automaticamente itens sensíveis. ❌ O eDiscovery é usado para busca e coleta de dados, não para proteção automática. ❌ Riscos de informações e conformidade de comunicação estão mais focados na gestão de dados e comunicação, respectivamente, sem o uso automático de algoritmos para proteção.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/data-loss-prevention-policies"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os resultados da pesquisa do eDiscovery (Padrão) podem ser exportados.",
      "O eDiscovery (Padrão) pode ser integrado com gerenciamento de riscos internos.",
      "O eDiscovery (Padrão) pode ser usado para pesquisar pastas públicas do Microsoft Exchange Online."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O eDiscovery (Padrão) permite a exportação dos resultados de pesquisa, permitindo que dados relevantes sejam extraídos e analisados fora da plataforma para cumprir com os requisitos legais ou de conformidade. ❌ O eDiscovery (Padrão) não oferece integração direta com o gerenciamento de riscos internos, que é uma funcionalidade fornecida por outras ferramentas como o Microsoft Purview Insider Risk Management. ✔️ O eDiscovery (Padrão) oferece a capacidade de pesquisar pastas públicas do Exchange Online, permitindo que os dados corporativos armazenados nas pastas públicas sejam acessados e analisados conforme necessário para investigações legais ou de conformidade.",
    "link": "https://learn.microsoft.com/pt-br/purview/ediscovery-standard-get-started"
  },
  {
    "tipo": "combobox",
    "texto": "Informações no Microsoft cloud security benchmark (MCSB) de como criar uma rede virtual, faz parte <combobox>",
    "opcoes": [

      "Do Mapeamento para recomendações de frameworks da indústria",
      "Das Orientações do Azure",
      "Do Princípio de Segurança"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ A Orientação do Azure fornece melhores práticas e recomendações de implementação para proteger ambientes do Azure, incluindo a criação de redes virtuais e configuração de recursos de segurança relacionados. \n❌ O Mapeamento para recomendações de frameworks da indústria foca em alinhar-se com frameworks de segurança externos, mas não oferece orientações específicas para a implementação no Azure. \n❌ O Princípio de Segurança refere-se a conceitos e princípios de segurança de alto nível, que não oferecem etapas específicas e acionáveis para criação de rede.",
    "link": "https://learn.microsoft.com/pt-br/security/benchmark/"
  },
  {
    "tipo": "multipla",
    "texto": "Quais duas ações você pode realizar usando o Azure Key Vault? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Armazenar segredos.",
      "Armazenar modelos do Azure Resource Manager (ARM).",
      "Implementar grupos de segurança de rede (NSGs).",
      "Implementar proteção contra DDoS do Azure.",
      "Armazenar chaves."
    ],
    "respostas": [0, 4],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Azure Key Vault pode armazenar segredos, como senhas, certificados e strings de conexão, além de chaves criptográficas usadas para proteger dados. \n✔️ O Azure Key Vault também é projetado para armazenar chaves criptográficas de forma segura. \n❌ O Key Vault não armazena templates do Azure Resource Manager (ARM) nem implementa grupos de segurança de rede ou proteção contra DDoS.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso está incluído no Microsoft Entra ID Governance?",
    "opcoes": [
      "Proteção de Identidade.",
      "Gerenciamento de Identidade Privilegiada (PIM).",
      "Gerenciamento de Permissões.",
      "Credenciais Verificáveis."
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Gerenciamento de Identidade Privilegiada (PIM) faz parte do Microsoft Entra ID Governance, permitindo a ativação de funções com base em aprovação e configurações de tempo determinado. \n❌ A Proteção de Identidade, o Gerenciamento de Permissões e as Credenciais Verificáveis são funcionalidades do Microsoft Entra, mas não fazem parte do Microsoft Entra ID Governance.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve criar para pesquisar e exportar conteúdo preservado em um bloqueio de eDiscovery?",
    "opcoes": [
      "Um site do Microsoft SharePoint Online.",
      "Um caso.",
      "Uma pasta pública do Microsoft Exchange Online.",
      "Azure Files."
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ Um caso é necessário para pesquisar e exportar conteúdo preservado no eDiscovery hold. \n❌ O site do Microsoft SharePoint Online, a pasta pública do Exchange e o Azure Files não são usados diretamente para realizar pesquisas ou exportação no eDiscovery.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/ediscovery-cases"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de classificação de dados do Microsoft Purview suporta o uso de expressões regulares?",
    "opcoes": [
      "Correspondência exata de dados (EDM)",
      "Classificador de impressões digitais",
      "Tipos de informações sensíveis (SITs)",
      "Classificador treinável"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ Os Tipos de Informações Sensíveis (SITs) do Microsoft Purview suportam o uso de expressões regulares para a classificação de dados. \n❌ A correspondência exata de dados (EDM) é usada para encontrar correspondências exatas de dados, mas não utiliza expressões regulares. \n❌ O classificador de impressões digitais e o classificador treinável não são projetados para usar expressões regulares.",
    "link": "https://learn.microsoft.com/pt-br/purview/sit-sensitive-information-type-learn-about"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra Access Review avalia permissões de usuários e grupos para recursos do Azure.",
      "Um usuário pode ser removido de um grupo automaticamente após uma avaliação do Microsoft Entra Access Review.",
      "O recurso Microsoft Entra Access Review está disponível em todos os planos de serviço do Microsoft Entra ID."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Entra Access Review pode avaliar permissões de usuários e grupos para recursos do Azure. \n✔️ Após uma avaliação, o Microsoft Entra Access Review pode automatizar a remoção de usuários de grupos. \n❌ O recurso Microsoft Entra Access Review não está disponível em todos os planos de serviço do Microsoft Entra ID, mas está disponível apenas nos planos específicos que incluem essa funcionalidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/governance/access-reviews-overview"
  },
  {
    "tipo": "combobox",
    "texto": "Usando as credenciais da sua empresa para acessar os recursos de uma empresa parceira requer uma solução <combobox>",
    "opcoes": [
      "De Federação",
      "Híbrida",
      "Com Autenticação multifatorial (MFA)",
      "Com Autenticação pass-through"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ A solução de federação permite que os usuários usem suas credenciais da empresa para acessar recursos da empresa parceira com segurança. \n❌ Soluções híbridas ou de autenticação pass-through não são as mais apropriadas para este tipo de integração. \n❌ A autenticação multifatorial (MFA) é uma camada adicional de segurança, mas não substitui a necessidade de uma solução de federação para esse tipo de acesso.",
    "link": "https://learn.microsoft.com/pt-br/windows-server/identity/ad-fs/ad-fs-overview"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois tipos de dispositivos podem ser gerenciados usando a prevenção de perda de dados no endpoint (Endpoint DLP)? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Windows 11",
      "Linux",
      "iOS",
      "macOS",
      "Android"
    ],
    "respostas": [0, 3],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Windows 11 e o macOS são compatíveis com a prevenção de perda de dados no Endpoint DLP. O Endpoint DLP é projetado para proteger dados confidenciais em dispositivos Windows e macOS, impedindo sua perda ou exposição acidental. \n❌ Linux e iOS não são suportados para proteção de dados com Endpoint DLP devido a limitações na integração com as plataformas móveis e o sistema operacional baseado em código aberto. \n❌ O Android não oferece o mesmo nível de proteção via Endpoint DLP no contexto da plataforma de segurança da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/endpoint-dlp-learn-about?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": "O Microsoft Sentinel usa para correlacionar alertas em incidentes <combobox>",
    "opcoes": [
      "Caça (hunting)",
      "Blocos de notas (notebooks)",
      "Análise (analytics)",
      "Livros de trabalho (workbooks)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Sentinel usa 'análise' para correlacionar alertas em incidentes, pois ele utiliza regras de análise e modelos para agrupar alertas relacionados a possíveis incidentes. \n❌ 'Caça' é usado para investigar manualmente dados e procurar por possíveis ameaças, mas não é a ferramenta para correlacionar alertas. \n❌ 'Blocos de notas' são usados para realizar análises e experimentos mais aprofundados com dados, mas não têm como objetivo a correlação de alertas. \n❌ 'Livros de trabalho' são usados para visualização de dados e criação de relatórios, mas não para correlação de alertas.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/"
  },
  {
    "tipo": "unica",
    "texto": "Qual dos seguintes recursos do Microsoft Entra ajuda a proteger identidades e dados de usuários?",
    "opcoes": [
      "Microsoft Defender for Endpoint",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Office 365",
      "Microsoft Defender for Cloud"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender for Identity protege identidades contra ataques e ameaça com foco na segurança de identidade e na proteção contra riscos. \n❌ Os outros recursos são focados na proteção de endpoints, aplicativos e dados em nuvem, não diretamente em identidades.",
    "link": "https://learn.microsoft.com/pt-br/defender-for-identity/what-is"
  },
  {
    "tipo": "unica",
    "texto": "Qual é o principal objetivo do Microsoft Entra ID em um ambiente corporativo?",
    "opcoes": [
      "Gerenciar dispositivos móveis",
      "Gerenciar identidades e acessos",
      "Proteger dados armazenados na nuvem",
      "Configurar ambientes híbridos"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Entra ID gerencia identidades e acessos, oferecendo um sistema robusto de controle de identidade. \n❌ As outras opções estão relacionadas a diferentes aspectos da infraestrutura de TI e não ao gerenciamento de identidades e acessos.",
    "link": "https://learn.microsoft.com/pt-br/entra/architecture/secure-fundamentals"
  },
  {
    "tipo": "unica",
    "texto": "O que o Microsoft Purview ajuda a proteger dentro de um ambiente corporativo?",
    "opcoes": [
      "Dispositivos móveis",
      "Dados sensíveis e informações",
      "Aplicações em nuvem",
      "Infraestruturas de rede"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Purview é projetado para proteger dados sensíveis e informações críticas, com foco em conformidade e governança. \n❌ As outras opções não estão diretamente relacionadas ao foco do Purview, que é governança de dados e conformidade.",
    "link": "https://learn.microsoft.com/pt-br/purview/purview"
  },
  {
    "tipo": "unica",
    "texto": "Qual a principal função do Microsoft Defender para Office 365?",
    "opcoes": [
      "Proteger contra malware",
      "Proteger e-mails contra phishing e ransomware",
      "Gerenciar acessos de usuários no Office 365",
      "Garantir a conformidade do Office 365"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender para Office 365 protege contra ameaças como phishing e ransomware, focando em e-mails e aplicativos do Office. \n❌ As outras opções não abordam as ameaças cibernéticas que o Defender foca, como phishing e malware.",
    "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/office-365-advanced-threat-protection-service-description"
  },
  {
    "tipo": "unica",
    "texto": "Quais são as formas de autenticação que podem ser configuradas no Microsoft Entra ID?",
    "opcoes": [
      "Autenticação multifatorial (MFA) e senha única",
      "Autenticação baseada em token e senha",
      "Autenticação sem senha (Windows Hello, chaves de segurança FIDO2) e aplicativo Microsoft Authenticator",
      "Autenticação por biometria e senha"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Entra ID permite configurar a autenticação sem senha e a autenticação multifatorial para aumentar a segurança. \n❌ As outras opções não refletem corretamente as formas de autenticação disponíveis no Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/"
  },
  {
    "tipo": "unica",
    "texto": "O que o Microsoft Defender para Cloud oferece como principal funcionalidade?",
    "opcoes": [
      "Proteção de identidade e acesso",
      "Proteção de dados em trânsito",
      "Gestão de postura de segurança em nuvem",
      "Proteção contra ameaças internas"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender para Cloud oferece gestão de postura de segurança em nuvem, ajudando a identificar riscos e vulnerabilidades. \n❌ As outras opções estão relacionadas a diferentes áreas de segurança e não especificamente à postura de segurança em nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/security-center/"
  },
  {
    "tipo": "unica",
    "texto": "Qual funcionalidade do Microsoft Entra ID permite automatizar o processo de revisão de acessos em sua organização?",
    "opcoes": [
      "Análise de risco de identidade",
      "Revisão de acesso",
      "Gerenciamento de acessos condicional",
      "Controle de atividades de login"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ A Revisão de Acesso no Microsoft Entra ID permite automatizar o processo de revisão de permissões e acessos de usuários. \n❌ As outras funcionalidades não automatizam o processo de revisão de acessos.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-governance/access-reviews-overview"
  },
  {
    "tipo": "unica",
    "texto": "No contexto do Microsoft Defender, o que significa a sigla XDR?",
    "opcoes": [
      "Extensive Data Retention",
      "Extended Detection and Response",
      "Excessive Data Reporting",
      "External Data Request"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ XDR significa 'Extended Detection and Response', um sistema que proporciona detecção e resposta a ameaças de forma extensiva e integrada. \n❌ As outras opções não correspondem à sigla XDR e suas funcionalidades.",
    "link": "https://learn.microsoft.com/pt-br/defender-xdr/microsoft-365-defender"
  },
  {
    "tipo": "unica",
    "texto": "Qual das opções a seguir ajuda a garantir a conformidade regulatória em um ambiente de trabalho?",
    "opcoes": [
      "Microsoft Purview",
      "Microsoft Defender for Endpoint",
      "Azure Key Vault",
      "Azure Security Center"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Purview ajuda na governança de dados e conformidade regulatória. \n❌ As outras opções são focadas em segurança e proteção, não diretamente na conformidade regulatória.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/"
  },
  {
    "tipo": "unica",
    "texto": "Em relação ao gerenciamento de risco de identidade no Microsoft Entra ID, qual das opções é considerada uma ação preventiva?",
    "opcoes": [
      "Autenticação multifatorial (MFA)",
      "Monitoramento de atividades suspeitas",
      "Relatórios de acesso não autorizado",
      "Armazenamento seguro de credenciais"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ A autenticação multifatorial (MFA) é uma medida preventiva que ajuda a proteger identidades contra acesso não autorizado. \n❌ As outras opções são ações reativas, não preventivas.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-mfa-howitworks"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Identity pode detectar atividades suspeitas e comprometimento de identidades.",
      "O Microsoft Defender for Identity é exclusivamente voltado para proteger dispositivos móveis.",
      "O Microsoft Defender for Identity pode ser integrado com o Microsoft Entra ID para monitoramento de identidades."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender for Identity detecta e investiga ameaças relacionadas a identidades, como o comprometimento de contas e práticas de ataques. \n❌ O Microsoft Defender for Identity não é voltado especificamente para dispositivos móveis, mas sim para a proteção de identidades e acessos. \n✔️ O Defender for Identity pode ser integrado ao Microsoft Entra ID, fornecendo monitoramento e proteção contínuos contra ameaças de identidade.",
    "link": "https://learn.microsoft.com/pt-br/defender-for-identity/what-is"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Cloud pode ser usado para gerenciar a segurança de aplicativos locais e em nuvem.",
      "O Microsoft Defender for Cloud oferece proteção exclusiva para máquinas virtuais em nuvem.",
      "O Microsoft Defender for Cloud oferece visibilidade e controle sobre a segurança de recursos em ambientes híbridos."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender for Cloud permite a proteção de aplicativos em nuvem e locais, fornecendo segurança em ambientes híbridos. \n❌ O Defender for Cloud oferece proteção para mais do que apenas máquinas virtuais em nuvem, incluindo outros recursos em nuvem e locais. \n✔️ O Defender for Cloud proporciona visibilidade e controle sobre a segurança de recursos tanto em nuvem quanto em ambientes híbridos.",
    "link": "https://learn.microsoft.com/pt-br/azure/security-center/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Purview permite a gestão de conformidade para dados corporativos e informações sensíveis.",
      "O Microsoft Purview é focado apenas em dados armazenados na nuvem.",
      "O Microsoft Purview oferece integração com o Microsoft 365 para governança de dados."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Purview é uma plataforma de governança de dados que permite proteger, classificar e governar dados sensíveis em várias fontes de dados. \n❌ O Microsoft Purview pode ser utilizado tanto para dados em nuvem quanto locais, oferecendo uma abordagem abrangente para governança de dados. \n✔️ O Microsoft Purview integra-se com o Microsoft 365 para realizar a governança de dados e a proteção da conformidade de informações armazenadas e compartilhadas.",
    "link": "https://learn.microsoft.com/pt-br/purview/purview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra ID fornece controle de acesso baseado em funções (RBAC) para gerenciar permissões de usuários.",
      "O Microsoft Entra ID permite a implementação de políticas de acesso baseadas em riscos.",
      "O Microsoft Entra ID não suporta autenticação multifatorial (MFA)."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Entra ID oferece RBAC, que permite controlar e gerenciar permissões de acesso de usuários e recursos dentro do ambiente Azure. \n✔️ O Microsoft Entra ID também permite criar políticas de acesso baseadas em riscos, como a localização e o comportamento do usuário. \n❌ O Microsoft Entra ID suporta autenticação multifatorial (MFA) como uma medida de segurança adicional para proteger os acessos.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A autenticação multifatorial (MFA) é uma prática recomendada no Microsoft Entra ID para proteger identidades.",
      "A autenticação baseada em senha é a única opção de segurança no Microsoft Entra ID.",
      "A autenticação multifatorial (MFA) ajuda a prevenir o acesso não autorizado em sistemas corporativos."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ A MFA é uma prática recomendada no Microsoft Entra ID, fornecendo uma camada extra de segurança para proteger identidades. \n❌ A MFA não é a única opção de segurança; o Microsoft Entra ID oferece várias opções, incluindo a autenticação baseada em senha e outras medidas de segurança. \n✔️ A MFA ajuda a prevenir acessos não autorizados, exigindo múltiplas formas de autenticação antes de permitir o acesso.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/multi-factor-authentication"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Cloud integra com o Microsoft Entra ID para gerenciamento de identidades e acessos.",
      "O Microsoft Defender for Cloud oferece visibilidade e controle sobre a segurança apenas em recursos na nuvem.",
      "O Microsoft Defender for Cloud fornece ferramentas para proteger tanto a infraestrutura local quanto a em nuvem."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender for Cloud pode ser integrado com o AMicrosoft Entra ID para oferecer controle de acesso e identidade, além de gerenciar as permissões. \n❌ O Microsoft Defender for Cloud oferece visibilidade tanto para recursos locais quanto na nuvem, proporcionando uma proteção abrangente. \n✔️ O Microsoft Defender for Cloud oferece visibilidade e controle sobre a segurança em recursos locais e em nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/security-center/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Endpoint oferece proteção avançada contra ameaças nos endpoints.",
      "O Microsoft Defender for Endpoint é focado apenas em dispositivos móveis.",
      "O Microsoft Defender for Endpoint pode ser integrado ao Microsoft 365 Defender para ampliar a proteção."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Defender for Endpoint é uma solução avançada de segurança que protege endpoints contra ameaças e ataques. \n❌ O Defender for Endpoint não é focado apenas em dispositivos móveis, mas em endpoints em geral, incluindo servidores, dispositivos de desktop e móveis. \n✔️ O Microsoft Defender for Endpoint pode ser integrado com o Microsoft 365 Defender para fornecer uma abordagem de segurança unificada e aprimorada.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra ID oferece soluções para gerenciamento de acessos em ambientes híbridos.",
      "O Microsoft Entra ID oferece proteção contra ameaças internas e externas.",
      "O Microsoft Entra ID não suporta integração com serviços externos de identidade."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ O Microsoft Entra ID oferece soluções robustas para o gerenciamento de acessos tanto em nuvem quanto em ambientes híbridos. \n✔️ O Microsoft Entra ID proporciona a proteção de identidades contra ameaças internas e externas, incluindo ataques de phishing e comprometimento de contas. \n❌ O Microsoft Entra ID suporta integração com serviços externos de identidade, como o Google e outros provedores de identidade baseados em SAML ou OpenID.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de autenticação multifatorial (MFA) com suas características abaixo:",
    "itens": [

      { "label": "Aplicativo de autenticação" },
      { "label": "Autenticação baseada em SMS" },
      { "label": "Chave de segurança" },
      { "label": "Autenticação biométrica" }

    ],
    "grupos": [
      "Requer um código enviado via mensagem de texto para o dispositivo do usuário.",
      "Requer um aplicativo para gerar códigos temporários de autenticação no dispositivo do usuário.",
      "Requer uma verificação baseada em características físicas, como impressões digitais ou reconhecimento facial.",
      "Requer um dispositivo físico que gera ou transmite um código único para autenticação."
    ],
    "respostas": {
      "Requer um código enviado via mensagem de texto para o dispositivo do usuário.": ["Autenticação baseada em SMS"],
      "Requer um aplicativo para gerar códigos temporários de autenticação no dispositivo do usuário.": ["Aplicativo de autenticação"],
      "Requer uma verificação baseada em características físicas, como impressões digitais ou reconhecimento facial.": ["Autenticação biométrica"],
      "Requer um dispositivo físico que gera ou transmite um código único para autenticação.": ["Chave de segurança"]
    },
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-6",
    "explicacao": "✔️ A autenticação baseada em SMS exige que um código seja enviado via mensagem de texto para o dispositivo do usuário. \n✔️ O aplicativo de autenticação, como o Microsoft Authenticator, gera códigos temporários para a verificação do usuário. \n✔️ A autenticação biométrica usa características físicas do usuário, como impressões digitais ou reconhecimento facial, para garantir a identidade. \n✔️ A chave de segurança é um dispositivo físico que gera ou transmite um código único de autenticação.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/authentication/multi-factor-authentication"
  }
];
