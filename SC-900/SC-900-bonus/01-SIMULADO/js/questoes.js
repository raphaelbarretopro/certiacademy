// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [

  {
    "tipo": "combobox",
    "texto": "<combobox> fornece práticas recomendadas da Microsoft para funcionários, parceiros e clientes, incluindo ferramentas e orientações para auxiliar em uma implantação do Azure.",
    "opcoes": [
      "Azure Blueprints",
      "Azure Policy",
      "Microsoft Cloud Adoption Framework para Azure",
      "Bloqueio de recurso"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ Microsoft Cloud Adoption Framework para Azure — Fornece um conjunto abrangente de diretrizes, melhores práticas e ferramentas recomendadas pela Microsoft para auxiliar organizações na adoção da nuvem com segurança e eficiência.<br>❌ Azure Blueprints — É utilizado para implantar artefatos como grupos de recursos e políticas, mas não é um framework completo de adoção.<br>❌ Azure Policy — Serve para aplicar regras e efeitos aos recursos do Azure para garantir conformidade.<br>❌ Bloqueio de recurso — É utilizado para impedir alterações ou exclusões acidentais de recursos no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é usado para identificar, reter e exportar informações eletrônicas que podem ser utilizadas em uma investigação.",
    "opcoes": [
      "Bloqueador de Clientes",
      "Prevenção contra perda de dados (DLP)",
      "eDiscovery",
      "Bloqueio de recurso"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ eDiscovery é usado para localizar, reter e exportar informações eletrônicas em investigações internas ou externas.\n❌ Bloqueador de Clientes permite que engenheiros da Microsoft solicitem acesso aos dados do cliente com aprovação.\n❌ DLP previne vazamento de dados sensíveis.\n❌ Bloqueio de recurso protege contra alterações acidentais em recursos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/ediscovery"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Aplicar atualizações de sistema aumenta a pontuação de segurança de uma organização no Microsoft Defender for Cloud.",
      "A pontuação de segurança no Microsoft Defender for Cloud pode avaliar recursos em várias assinaturas do Azure.",
      "Habilitar a autenticação multifator (MFA) aumenta a pontuação de segurança de uma organização no Microsoft Defender for Cloud."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ Aplicar atualizações de sistema reduz vulnerabilidades conhecidas, o que melhora a postura de segurança e aumenta a pontuação no Microsoft Defender for Cloud. ✔️ O Microsoft Defender for Cloud consegue avaliar recursos em múltiplas assinaturas do Azure e consolidar os resultados em uma única pontuação de segurança. ✔️ Habilitar MFA é uma recomendação de segurança que contribui diretamente para a pontuação do Defender for Cloud.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/secure-score-security-controls"
  },
  {
    "tipo": "multipla",
    "texto": "Quais três afirmações descrevem com precisão os princípios orientadores do modelo Zero Trust? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Definir o perímetro por localizações físicas.",
      "Usar a identidade como o principal limite de segurança.",
      "Sempre verificar explicitamente as permissões de um usuário.",
      "Sempre assumir que o sistema do usuário pode ser violado.",
      "Usar a rede como o principal limite de segurança."
    ],
    "respostas": [1, 2, 3],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-b1",
    "explicacao": "✔️ O modelo Zero Trust é baseado em três princípios: verificar explicitamente, usar o menor privilégio possível (baseado em identidade) e assumir violação. Não se baseia em perímetros físicos ou na rede como limite de segurança.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust"
  },
  {
    "tipo": "dragdrop",
    "texto": "Arraste e solte o nome do serviço para a descrição correta com base nos serviços do portal Azure:",
    "itens": [
      { "label": "Security Center" },
      { "label": "Connect Health" },
      { "label": "Application Insights" },
      { "label": "Advisor" }
    ],
    "grupos": [

      "Monitora a integridade dos serviços de identidade do Azure.",
      "Centraliza a postura de segurança e protege cargas de trabalho em nuvem.",
      "Fornece recomendações personalizadas para otimizar seu ambiente do Azure.",
      "Ajuda a detectar e diagnosticar problemas de desempenho de aplicativos."

    ],
    "respostas": {
      "Monitora a integridade dos serviços de identidade do Azure.": ["Connect Health"],
      "Centraliza a postura de segurança e protege cargas de trabalho em nuvem.": ["Security Center"],
      "Fornece recomendações personalizadas para otimizar seu ambiente do Azure.": ["Advisor"],
      "Ajuda a detectar e diagnosticar problemas de desempenho de aplicativos.": ["Application Insights"]

    },
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Security Center protege cargas de trabalho na nuvem. ✔️ O Connect Health monitora serviços de identidade. ✔️ O Application Insights ajuda a identificar gargalos em apps. ✔️ O Advisor sugere melhorias de desempenho e segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/security-center/security-center-introduction"
  },
  {
    "tipo": "combobox",
    "texto": "Compliance Manager pode ser acessado diretamente a partir do <combobox>",
    "opcoes": [
      "Centro de administração do Microsoft 365",
      "Portal do Microsoft 365 Defender",
      "Microsoft 365 Compliance Center",
      "Portal de Suporte da Microsoft"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Microsoft 365 Compliance Center oferece acesso direto ao Compliance Manager, permitindo que as organizações avaliem riscos de conformidade, acompanhem melhorias e gerenciem controles regulatórios.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager-overview"
  },
  {
    "tipo": "combobox",
    "texto": "As aplicações registradas no Microsoft Entra ID estão automaticamente associadas a um(a) <combobox>",
    "opcoes": [
      "conta de convidado (guest account)",
      "identidade gerenciada (managed identity)",
      "entidade de serviço (service principal)",
      "conta de usuário (user account)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "✔️ Ao registrar uma aplicação no Microsoft Entra ID, ela é automaticamente associada a uma entidade de serviço (service principal), que permite que a aplicação autentique e acesse recursos em nome dela mesma ou de um usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity-platform/app-objects-and-service-principals"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase. Um recurso do Azure pode usar uma identidade atribuída automaticamente para acessar os serviços do Azure <combobox>",
    "opcoes": [
      "Dispositivo Microsoft Entra ID conectado",
      "Identidade gerenciada",
      "Principal de serviço",
      "Identidade do usuário"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "Um recurso do Azure pode usar um dispositivo conectado ao Azure Active Directory (Azure AD) como uma identidade atribuída automaticamente para acessar os serviços do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "unica",
    "texto": "Selecione a resposta que completa corretamente a frase. Um recurso do Azure pode utilizar uma identidade atribuída automaticamente para autenticar e acessar os serviços do Azure de forma segura e sem a necessidade de gerenciar credenciais manualmente.",
    "opcoes": [
      "Dispositivo Microsoft Entra ID conectado",
      "Identidade gerenciada",
      "Principal de serviço",
      "Identidade do usuário"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "Um recurso do Azure pode usar uma identidade gerenciada para acessar os serviços do Azure, sem a necessidade de gerenciar credenciais adicionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois tipos de recursos podem ser protegidos pelo uso do Azure Firewall? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Máquinas virtuais do Azure",
      "Usuários do Azure Active Directory (Azure AD)",
      "Caixas de entrada do Microsoft Exchange Online",
      "Redes virtuais do Azure",
      "Sites do Microsoft SharePoint Online"
    ],
    "respostas": [0, 3],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "O Azure Firewall pode ser usado para proteger máquinas virtuais do Azure e redes virtuais do Azure, permitindo o controle e monitoramento do tráfego de rede.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim ou Não:",
    "afirmacoes": [
      "O Microsoft Secure Score no Microsoft 365 Security Center pode fornecer recomendações para o Microsoft Cloud App Security.",
      "No portal Microsoft 365 Defender, você pode ver como o seu Microsoft Secure Score se compara ao score de organizações semelhantes à sua.",
      "O Microsoft Secure Score no portal Microsoft 365 Defender dá pontos se você atender à ação de melhoria usando um aplicativo ou software de terceiros."
    ],
    "respostas": [true, true, true],
    "explicacao": "As três afirmações são verdadeiras. O Microsoft Secure Score no Microsoft 365 Security Center pode fornecer recomendações para o Cloud App Security. No portal do Microsoft 365 Defender, você pode ver como seu score se compara ao de organizações semelhantes, e o portal também oferece pontos por ações de melhoria usando software de terceiros.",
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/secure-score?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "A qual tipo de recurso o Azure Bastion pode fornecer acesso seguro?",
    "opcoes": [
      "Azure Files",
      "Azure SQL Managed Instances",
      "Azure virtual machines",
      "Azure App Service"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "O Azure Bastion fornece acesso seguro a máquinas virtuais do Azure (Azure virtual machines) sem a necessidade de um endereço IP público.",
    "link": "https://learn.microsoft.com/pt-br/azure/bastion/bastion-overview"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são três usos do Microsoft Cloud App Security? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Descobrir e controlar o uso de shadow IT",
      "Fornecer conexões seguras para máquinas virtuais do Azure",
      "Proteger informações sensíveis hospedadas em qualquer lugar na nuvem",
      "Fornecer autenticação pass-through para aplicativos on-premises",
      "Evitar vazamento de dados para aplicativos não conformes e limitar o acesso a dados regulados"
    ],
    "respostas": [0, 2, 4],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "O Microsoft Cloud App Security pode ser utilizado para controlar o uso de shadow IT, proteger informações sensíveis na nuvem e evitar vazamentos de dados para aplicativos não conformes.",
    "link": "https://learn.microsoft.com/pt-br/defender-cloud-apps/what-is-defender-for-cloud-apps"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa corretamente a frase. No portal Microsoft 365 Defender, um incidente é uma coleção correlacionada de <combobox>",
    "opcoes": [
      "Alertas",
      "Eventos",
      "Vulnerabilidades",
      "Ações de melhoria do Microsoft Secure Score"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "No portal Microsoft 365 Defender, um incidente é composto por alertas relacionados, ou seja, uma coleção de alertas que foram identificados e agrupados devido a uma possível ameaça ou problema.",
    "link": "https://learn.microsoft.com/pt-br/defender-xdr/alert-policies"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa se conectar a uma máquina virtual do Azure usando o Azure Bastion. O que você deve usar?",
    "opcoes": [
      "Remotação PowerShell",
      "O Portal do Azure",
      "O cliente Remote Desktop Connection",
      "Um cliente SSH"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "Para se conectar a uma máquina virtual do Azure usando o Azure Bastion, você deve usar o portal do Azure, pois ele fornece uma maneira segura e simplificada de acessar a máquina virtual diretamente do navegador, sem a necessidade de configurar um cliente de área de trabalho remota.",
    "link": "https://learn.microsoft.com/pt-br/azure/bastion/bastion-overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço inclui o recurso de treinamento de simulação de ataque?",
    "opcoes": [
      "Microsoft Defender para Cloud Apps",
      "Microsoft Defender para Identidade",
      "Microsoft Defender para SQL",
      "Microsoft Defender para Office 365"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "O Microsoft Defender para Office 365 inclui a funcionalidade de treinamento de simulação de ataque, permitindo que as organizações treinem usuários para reconhecer e responder a ataques de phishing e outras ameaças.",
    "link": "https://learn.microsoft.com/pt-br/defender-office-365/attack-simulation-training-faq"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de alerta você pode gerenciar no portal Microsoft 365 Defender?",
    "opcoes": [
      "Microsoft Defender para Armazenamento",
      "Microsoft Defender para SQL",
      "Microsoft Defender para Endpoint",
      "Microsoft Defender para IoT"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "No portal Microsoft 365 Defender, você pode gerenciar alertas do Microsoft Defender para Endpoint, que ajuda a detectar e responder a ameaças nos dispositivos de ponto final da organização, como desktops e dispositivos móveis.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/manage-alerts?view=o365-worldwide"
  },
  {
    "tipo": "simnao",
    "texto": "Selecione as opções em que as afirmações são verdadeiras.",
    "afirmacoes": [
      "Os conectores de dados do Microsoft Sentinel suportam apenas serviços da Microsoft.",
      "Você pode usar os workbooks do Azure Monitor para monitorar dados coletados pelo Microsoft Sentinel.",
      "Hunting fornece a capacidade de identificar ameaças de segurança antes que um alerta seja acionado."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "Os conectores de dados do Microsoft Sentinel podem suportar uma variedade de serviços, incluindo serviços de terceiros, e não são limitados apenas a serviços da Microsoft. No entanto, os workbooks do Azure Monitor podem ser usados para visualizar dados coletados pelo Sentinel, e o Hunting é uma técnica que permite identificar ameaças antes que um alerta seja acionado.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/hunting"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois recursos do Azure podem ser associados a um grupo de segurança de rede (NSG)?",
    "opcoes": [
      "uma sub-rede de rede virtual",
      "uma interface de rede",
      "um grupo de recursos",
      "uma rede virtual",
      "um aplicativo web do Azure App Service"
    ],
    "respostas": [0, 1],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "Os grupos de segurança de rede (NSG) podem ser associados a sub-redes de redes virtuais e interfaces de rede. Eles não podem ser diretamente associados a grupos de recursos, redes virtuais ou aplicativos web do Azure App Service.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/security-overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual é um caso de uso para implementar políticas de barreiras de informação no Microsoft 365?",
    "opcoes": [
      "para restringir o acesso não autenticado ao Microsoft 365",
      "para restringir chats do Microsoft Teams entre certos grupos dentro de uma organização",
      "para restringir e-mails do Microsoft Exchange Online entre certos grupos dentro de uma organização",
      "para restringir o compartilhamento de dados com destinatários de e-mail externos"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "As políticas de barreiras de informação no Microsoft 365 são usadas para restringir chats no Microsoft Teams entre certos grupos dentro de uma organização, a fim de evitar conflitos de interesse ou vazamento de dados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/information-barriers"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para implantar recursos do Azure em várias assinaturas de maneira consistente?",
    "opcoes": [
      "Microsoft Defender for Cloud",
      "Azure Blueprints",
      "Microsoft Sentinel",
      "Azure Policy"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "O Azure Blueprints é uma ferramenta que permite implantar e gerenciar recursos do Azure de maneira consistente em várias assinaturas, garantindo conformidade e práticas recomendadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> fornece um local centralizado para gerenciar políticas de proteção de informações, governança de informações e prevenção contra perda de dados (DLP).",
    "opcoes": [
      "Azure Defender",
      "O centro de conformidade do Microsoft 365",
      "O portal Microsoft Defender",
      "Microsoft Endpoint Manager"
    ],
    "resposta": 1,
    "explicacao": "A opção correta é O centro de conformidade do Microsoft 365, que oferece um local central para gerenciar as políticas de proteção de dados e DLP.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/microsoft-365-compliance-center?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft 365 você pode usar para restringir usuários de enviar mensagens de e-mail que contenham listas de clientes e seus números de cartão de crédito?",
    "opcoes": [
      "políticas de retenção",
      "políticas de prevenção contra perda de dados (DLP)",
      "políticas de acesso condicional",
      "barreiras de informações"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "As políticas de prevenção contra perda de dados (DLP) permitem que você configure regras que impedem o envio de informações confidenciais, como números de cartões de crédito, em e-mails.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/data-loss-prevention-policies?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> pode ser usado para fornecer acesso aos engenheiros de suporte da Microsoft aos dados de uma organização armazenados no Microsoft Exchange Online, SharePoint Online e OneDrive for Business.",
    "opcoes": [
      "Customer Lockbox (Bloqueador de Clientes)",
      "Barreiras de informação",
      "Gerenciamento de Acesso Privilegiado (PAM)",
      "Rótulos de sensibilidade"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Customer Lockbox é usado para fornecer acesso controlado e registrado aos engenheiros de suporte da Microsoft para acessar os dados de uma organização no Exchange Online, SharePoint Online e OneDrive for Business, com a permissão explícita do cliente.<br>❌ Barreiras de informação são usadas para restrições de comunicação entre grupos dentro de uma organização.<br>❌ Gerenciamento de Acesso Privilegiado (PAM) é utilizado para gerenciar e controlar o acesso de usuários privilegiados, mas não para fornecer acesso aos engenheiros de suporte da Microsoft.<br>❌ Rótulos de sensibilidade são usados para proteger dados sensíveis, mas não para fornecer acesso a engenheiros de suporte da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/customer-lockbox-overview"
  },
  {
    "tipo": "unica",
    "texto": "Em um fluxo de trabalho Core eDiscovery, o que você deve fazer antes de procurar por conteúdo?",
    "opcoes": [
      "Criar uma retenção de eDiscovery.",
      "Executar a Análise Express.",
      "Configurar a detecção de privilégio advogado-cliente.",
      "Exportar e baixar os resultados."
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ Criar uma retenção de eDiscovery é o primeiro passo para garantir que os dados relevantes não sejam alterados ou excluídos antes que a pesquisa seja realizada.<br>❌ Executar a Análise Express é uma etapa que pode ocorrer após a retenção de eDiscovery.<br>❌ A detecção de privilégio advogado-cliente é uma etapa posterior, focada em proteger informações confidenciais durante a pesquisa.<br>❌ Exportar e baixar os resultados ocorre após a pesquisa e análise dos dados.",
    "link": "https://learn.microsoft.com/pt-br/purview/ediscovery-create-holds"
  },
  {
    "tipo": "unica",
    "texto": "Qual portal da Microsoft fornece informações sobre como a Microsoft gerencia privacidade, conformidade e segurança?",
    "opcoes": [
      "Microsoft Service Trust Portal",
      "Compliance Manager",
      "Microsoft 365 compliance center",
      "Microsoft Support"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Microsoft Service Trust Portal fornece informações detalhadas sobre como a Microsoft gerencia privacidade, conformidade e segurança em seus serviços.<br>❌ O Compliance Manager ajuda a avaliar e melhorar o compliance, mas não foca em gestão de segurança e privacidade de forma ampla.<br>❌ O Microsoft 365 compliance center foca na conformidade organizacional, mas não fornece informações gerais sobre segurança e privacidade.<br>❌ O Microsoft Support oferece suporte técnico, mas não é o portal de gestão de conformidade.",
    "link": "https://servicetrust.microsoft.com/"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode proteger usando a solução de proteção de informações no Microsoft 365 Compliance Center?",
    "opcoes": [
      "Computadores contra exploits zero-day",
      "Usuários contra tentativas de phishing",
      "Arquivos contra malware e vírus",
      "Dados sensíveis contra exposição a usuários não autorizados"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ A solução de proteção de informações no Microsoft 365 Compliance Center é projetada para proteger dados sensíveis, evitando que sejam expostos a usuários não autorizados, garantindo a conformidade e segurança das informações.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/information-protection"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode especificar nas etiquetas de sensibilidade do Microsoft 365?",
    "opcoes": [
      "Quanto tempo os arquivos devem ser preservados",
      "Quando arquivar uma mensagem de e-mail",
      "Qual marca d'água adicionar aos arquivos",
      "Onde armazenar os arquivos"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ As etiquetas de sensibilidade do Microsoft 365 permitem que você defina qual marca d'água deve ser adicionada aos arquivos, garantindo que informações sensíveis sejam protegidas e identificadas visualmente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Você pode usar o Advanced Audit no Microsoft 365 para visualizar detalhes de faturamento.",
      "Você pode usar o Advanced Audit no Microsoft 365 para visualizar o conteúdo de uma mensagem de e-mail.",
      "Você pode usar o Advanced Audit no Microsoft 365 para identificar quando um usuário usa a barra de pesquisa no Outlook na web para pesquisar itens em uma caixa de correio."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "A auditoria avançada no Microsoft 365 não permite visualizar detalhes de faturamento nem o conteúdo de mensagens de e-mail. Porém, permite identificar quando um usuário usa a barra de pesquisa no Outlook na web para procurar itens em sua caixa de correio.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/advanced-audit"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Você pode adicionar um bloqueio de recurso a uma assinatura do Azure.",
      "Você pode adicionar apenas um bloqueio de recurso a um recurso do Azure.",
      "Você pode excluir um grupo de recursos que contém recursos com bloqueios de recurso."
    ],
    "respostas": [true, false, false],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ Você pode adicionar um bloqueio de recurso a uma assinatura do Azure. ❌ Você pode adicionar apenas um bloqueio de recurso a um recurso do Azure. ❌ Você não pode excluir um grupo de recursos que contém recursos com bloqueios de recurso.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Usuários podem aplicar rótulos de sensibilidade manualmente.",
      "Vários rótulos de sensibilidade podem ser aplicados ao mesmo arquivo.",
      "Um rótulo de sensibilidade pode aplicar uma marca d'água a um documento do Microsoft Word."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ Os usuários podem aplicar rótulos de sensibilidade manualmente.<br>❌ Vários rótulos de sensibilidade não podem ser aplicados ao mesmo arquivo.<br>✔️ Um rótulo de sensibilidade pode aplicar uma marca d'água a um documento do Microsoft Word.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels"
  },
  {
    "tipo": "combobox",
    "texto": "O Compliance Manager avalia os dados de conformidade de uma organização de forma <combobox>",
    "opcoes": [
      "Contínua",
      "Mensal",
      "Sob demanda",
      "Trimestral"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Compliance Manager avalia continuamente os dados de conformidade para garantir que a organização esteja sempre em conformidade.<br>❌ A avaliação mensal, sob demanda ou trimestral não são as opções padrão para o Compliance Manager.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager-overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft 365 você pode usar para criptografar conteúdo automaticamente com base em condições específicas?",
    "opcoes": [
      "Pesquisa de Conteúdo",
      "Rótulos de Sensibilidade",
      "Políticas de Retenção",
      "eDiscovery"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ Os rótulos de sensibilidade permitem criptografar automaticamente o conteúdo com base em condições específicas, como a classificação do conteúdo como sensível.<br>❌ A Pesquisa de Conteúdo é usada para localizar dados dentro do Microsoft 365, mas não criptografa o conteúdo.<br>❌ As Políticas de Retenção são usadas para gerenciar a retenção de dados e não para criptografar automaticamente o conteúdo.<br>❌ eDiscovery é uma ferramenta de pesquisa e preservação de conteúdo para litígios e investigações, não para criptografia.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Você pode usar a solução de gerenciamento de riscos internos para detectar golpes de phishing.",
      "Você pode acessar a solução de gerenciamento de riscos internos a partir do centro de conformidade do Microsoft 365.",
      "Você pode usar a solução de gerenciamento de riscos internos para detectar vazamentos de dados por funcionários insatisfeitos."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "❌ A solução de gerenciamento de riscos internos não é usada para detectar golpes de phishing. Ela é mais focada em identificar atividades de risco internas, como vazamento de dados.<br>✔️ A solução de gerenciamento de riscos internos pode ser acessada diretamente do centro de conformidade do Microsoft 365.<br>✔️ A solução de gerenciamento de riscos internos pode detectar vazamentos de dados internos, incluindo casos de funcionários insatisfeitos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/insider-risk-management"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O Azure Policy suporta remediação automática.",
      "O Azure Policy pode ser usado para garantir que novos recursos atendam aos padrões corporativos.",
      "A avaliação de conformidade no Azure Policy ocorre apenas quando um recurso alvo é criado ou modificado."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Azure Policy pode, de fato, automatizar a remediação de recursos que não atendem aos padrões definidos.<br>✔️ O Azure Policy é utilizado para garantir que novos recursos estejam em conformidade com os padrões corporativos desde sua criação.<br>❌ A avaliação de conformidade no Azure Policy ocorre não apenas quando um recurso é criado ou modificado, mas também periodicamente para avaliar a conformidade contínua.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as etapas do fluxo de trabalho de gerenciamento de riscos internos do Microsoft 365 arrastando até tarefa apropriada:",
    "itens": [
      { "label": "Ação" },
      { "label": "Investigar" },
      { "label": "Triagem" }
    ],
    "grupos": [
      "Revisar e filtrar alertas",
      "Criar casos no painel de casos",
      "Enviar um lembrete das políticas corporativas aos usuários"
    ],
    "respostas": {
      "Revisar e filtrar alertas": ["Triagem"],
      "Criar casos no painel de casos": ["Investigar"],
      "Enviar um lembrete das políticas corporativas aos usuários": ["Ação"]
    },
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ A etapa 'Triagem' é responsável por revisar e filtrar alertas. <br> ✔️ 'Investigar' é a etapa que permite criar casos no painel de casos.<br> ✔️ A etapa 'Ação' é utilizada para enviar um lembrete das políticas corporativas aos usuários.",
    "link": "https://learn.microsoft.com/pt-br/purview/insider-risk-management"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois cards estão disponíveis no portal Microsoft 365 Defender? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Dispositivos em risco",
      "Pontuação de conformidade",
      "Saúde do serviço",
      "Gerenciamento de usuários",
      "Usuários em risco"
    ],
    "respostas": [0, 4],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O card 'Dispositivos em risco' mostra dispositivos comprometidos no Microsoft 365 Defender. <br> ✔️ O card 'Usuários em risco' exibe usuários que estão sob risco de ataques ou comprometimento.",
    "link": "https://learn.microsoft.com/pt-br/defender-business/mdb-view-tvm-dashboard"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve usar para garantir que os membros de um grupo do Microsoft Entra ID utilizem autenticação multifatorial (MFA) quando fizerem login?",
    "opcoes": [
      "Controle de acesso baseado em função do Azure (Azure RBAC)",
      "Microsoft Entra ID Privileged Identity Management (PIM)",
      "Microsoft Entra ID Identity Protection",
      "Uma política de acesso condicional"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-b1",
    "explicacao": "✔️ A política de acesso condicional no Azure AD pode ser configurada para exigir MFA para os membros de um grupo do Azure AD. <br> ❌ O Azure RBAC é usado para gerenciar o acesso a recursos, mas não configura a autenticação multifatorial. <br> ❌ O PIM é usado para gerenciar acessos privilegiados, mas não é focado em MFA diretamente. <br> ❌ O Azure AD Identity Protection ajuda a proteger identidades, mas a política de MFA é configurada por meio do acesso condicional.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa manter uma cópia de todos os arquivos em um site do Microsoft SharePoint por um ano, mesmo que os usuários excluam os arquivos do site. O que você deve aplicar ao site?",
    "opcoes": [
      "Uma política de retenção",
      "Uma política de risco interno",
      "Uma política de prevenção contra perda de dados (DLP)",
      "Uma política de rótulo de sensibilidade"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ A política de retenção garante que uma cópia dos arquivos seja mantida por um período de tempo especificado, mesmo que os usuários excluam os arquivos.<br>❌ A política de risco interno não tem como objetivo garantir a retenção de arquivos por um período determinado.<br>❌ A política DLP foca na proteção contra o vazamento de dados sensíveis, não no armazenamento de arquivos por longos períodos.<br>❌ A política de rótulo de sensibilidade é usada para proteger informações sensíveis, mas não para reter arquivos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/retention?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa criar uma política de prevenção contra perda de dados (DLP). O que você deve usar?",
    "opcoes": [
      "o Microsoft 365 Compliance center",
      "o Microsoft Endpoint Manager admin center",
      "o Microsoft 365 admin center",
      "o Microsoft 365 Defender portal"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-b1",
    "explicacao": "✔️ O Microsoft 365 Compliance center é a ferramenta ideal para criar e gerenciar políticas DLP.<br>❌ O Microsoft Endpoint Manager admin center é utilizado para gerenciar dispositivos, não para criar políticas DLP.<br>❌ O Microsoft 365 admin center é utilizado para gerenciar configurações gerais de usuários e serviços, mas não é especializado em políticas DLP.<br>❌ O Microsoft 365 Defender portal é focado em segurança, mas não para criação de políticas DLP.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/data-loss-prevention-policies?view=o365-worldwide"
  }


];
