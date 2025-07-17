// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim ou Não:",
    "afirmacoes": [
      "Microsoft Defender para Ponto de Extremidade pode proteger dispositivos Android.",
      "Microsoft Defender para Ponto de Extremidade pode proteger as máquinas virtuais do Azure que executam o Windows 10.",
      "Microsoft Defender para Ponto de Extremidade pode proteger sites e conteúdo do Microsoft SharePoint Online contra vírus."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️Afirmação 01 -  Sim, o Microsoft Defender para Ponto de Extremidade protege dispositivos Android. ✔️ Afirmação 02 -  Sim, ele também protege máquinas virtuais do Azure com Windows 10. ❌ Afirmação 03 -  Não, a proteção contra vírus no SharePoint Online é feita pelo Defender para Office 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Pode usar políticas de acesso condicional para controlar sessões em tempo real:",
    "opcoes": [
      "Microsoft Entra ID Privileged Identity Management (PIM)",
      "Azure Defender",
      "Azure Sentinel",
      "Microsoft Cloud App Security"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "Microsoft Cloud App Security é a solução correta, pois permite o uso de políticas de acesso condicional para controlar sessões em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/defender-cloud-apps/proxy-intro-aad"
  },
  {
    "tipo": "dragdrop",
    "texto": "Correlacione o serviço de rede do Azure com a descrição apropriada, arrastando o item equivalente a opção abaixo:",
    "itens": [
      { "label": "Azure Firewall" },
      { "label": "Azure Bastion" },
      { "label": "Grupo de Segurança de Rede (NSG)" }
    ],
    "grupos": [
      "Fornece serviços de tradução de endereços de rede (NAT)",
      "Fornece conectividade de Área de Trabalho Remota sem expor a máquina virtual",
      "Efetua filtragem de tráfego de entrada e saída em interfaces de rede de uma máquina virtual"
    ],
    "respostas": {
      "Fornece serviços de tradução de endereços de rede (NAT)": ["Azure Firewall"],
      "Fornece conectividade de Área de Trabalho Remota sem expor a máquina virtual": ["Azure Bastion"],
      "Efetua filtragem de tráfego de entrada e saída em interfaces de rede de uma máquina virtual": ["Grupo de Segurança de Rede (NSG)"]
    },
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ Azure Firewall — NAT e filtragem. ✔️ Azure Bastion — Acesso remoto seguro. ✔️ Grupo de Segurança de Rede (NSG) — Controle de tráfego de rede.",
    "link": "https://learn.microsoft.com/pt-br/azure/networking/networking-overview"
  },
  {
    "tipo": "unica",
    "texto": "Você planeja implementar uma estratégia de segurança e colocar várias camadas de defesa em uma infraestrutura de rede. Qual metodologia de segurança isso representa?",
    "opcoes": [
      "Modelagem de ameaças",
      "Identidade como o perímetro de segurança",
      "Defesa em profundidade",
      "Modelo de responsabilidade compartilhada"
    ],
    "resposta": 2,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": " A defesa em profundidade consiste em usar múltiplas camadas de segurança (como firewalls, autenticação, segmentação de rede, etc. Para proteger os recursos de forma redundante, dificultando a ação de invasores.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/solution-ideas/articles/azure-security-build-first-layer-defense"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para verificar anexos de e-mail e encaminhá-los para os destinatários somente se os anexos estiverem livres de malware?",
    "opcoes": [
      "Microsoft Defender para Office 365",
      "Microsoft Defender Antivirus",
      "Microsoft Defender para Identidade",
      "Microsoft Defender para Ponto de Extremidade"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "Microsoft Defender para Office 365 analisa anexos de e-mails e garante que os arquivos estejam livres de ameaças antes de serem entregues aos destinatários.",
    "link": "https://docs.microsoft.com/pt-br/office365/servicedescriptions/office-365-advanced-threat-protection-service-description"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso fornece a capacidade estendida de detecção e resposta (XDR) do Azure Sentinel?",
    "opcoes": [
      "integração com o centro de conformidade Microsoft 365",
      "suporte para proteção contra ameaças",
      "integração com o Microsoft 365 Defender",
      "suporte para pastas de trabalho do Azure Monitor"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "O Microsoft 365 Defender é a solução integrada que fornece a capacidade estendida de detecção e resposta (XDR) no Azure Sentinel.",
    "link": "https://docs.microsoft.com/pt-br/microsoft-365/security/defender/eval-overview?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para fornecer detecção de ameaças para Azure SQL Managed Instance?",
    "opcoes": [
      "Microsoft Secure Score",
      "Grupos de segurança de aplicativos",
      "Microsoft Defender",
      "Azure Bastion"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "O Microsoft Defender para a Nuvem oferece detecção de ameaças para o Azure SQL Managed Instance, ajudando a identificar atividades suspeitas e proteger os dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/defender-for-sql-introduction"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a instrução for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Microsoft Secure Score no centro de segurança do Microsoft 365 pode fornecer recomendações para o Microsoft Cloud App Security.",
      "No portal do Microsoft 365 Defender, você pode ver como sua pontuação do Microsoft Secure se compara à pontuação de organizações como a sua.",
      "Microsoft Secure Score no centro de segurança do Microsoft 365 oferece pontos se você abordar a ação de melhoria usando um aplicativo ou software de terceiros."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "O Microsoft Secure Score é uma ferramenta que ajuda as organizações a avaliar sua postura de segurança e fornecer recomendações para melhorar sua segurança.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/microsoft-secure-score"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Microsoft Entra ID você pode usar para impedir que dispositivos gerenciados pelo Microsoft Intune acessem recursos corporativos?",
    "opcoes": [
      "Grupos de segurança de rede (NSGs)",
      "Azure AD Privileged Identity Management (PIM)",
      "Políticas de acesso condicional",
      "Bloqueios de recursos"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "As políticas de acesso condicional permitem que você defina restrições para dispositivos gerenciados pelo Microsoft Intune, garantindo que somente dispositivos compatíveis possam acessar recursos corporativos.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/conditional-access/overview"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> Pode usar políticas de acesso condicional para controlar sessões em tempo real:",
    "opcoes": [
      "Microsoft Entra ID Privileged Identity Management (PIM)",
      "Azure Defender",
      "Azure Sentinel",
      "Microsoft Cloud App Security"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "Microsoft Cloud App Security é a solução correta, pois permite o uso de políticas de acesso condicional para controlar sessões em tempo real.",
    "link": "https://docs.microsoft.com/pt-br/cloud-app-security/what-is-cloud-app-security"
  },
  {
    "tipo": "combobox",
    "texto": "O Azure DDoS Protection Standard pode ser usado para proteger <combobox>",
    "opcoes": [
      "Aplicativos do Microsoft Entra ID",
      "Usuários do Microsoft Entra ID",
      "Grupo de recursos",
      "Redes virtuais"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "O Azure DDoS Protection Standard é utilizado para proteger redes virtuais contra ataques de negação de serviço distribuído (DDoS).",
    "link": "https://docs.microsoft.com/pt-br/azure/ddos-protection/ddos-protection-overview"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve usar no Portal do Microsoft 365 Defender para exibir tendências de segurança e rastrear o status de proteção de identidades?",
    "opcoes": [
      "Simulador de ataque",
      "Relatórios",
      "Proteção contra ameaças",
      "Incidentes"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "No Portal do Microsoft 365 Defender, você pode usar a seção Relatórios para exibir tendências de segurança e monitorar o status de proteção de identidades.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/office-365-security/reports-and-insights-in-security-and-compliance?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Microsoft 365 E3. Você planeja auditar a atividade do usuário usando o log de auditoria unificado e a auditoria básica. Por quanto tempo os registros de auditoria serão retidos?",
    "opcoes": [
      "15 dias",
      "30 dias",
      "90 dias",
      "180 dias"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "A retenção padrão dos registros de auditoria para a Auditoria Básica no Microsoft 365 foi alterada de 90 dias para 180 dias a partir de 17 de outubro de 2023. Portanto, para uma assinatura Microsoft 365 E3, os registros de auditoria são retidos por 180 dias",
    "link": "https://learn.microsoft.com/pt-br/purview/audit-log-retention-policies"
  },
  {
    "tipo": "unica",
    "texto": "Para qual tipo de recurso o Azure Bastion pode fornecer acesso seguro?",
    "opcoes": [
      "Arquivos do Azure",
      "Instâncias gerenciadas do Azure SQL",
      "Máquinas virtuais do Azure",
      "Serviço de Aplicativos do Azure"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "O Azure Bastion fornece conectividade RDP/SSH segura e contínua para suas máquinas virtuais diretamente do portal do Azure por TLS.",
    "link": "https://learn.microsoft.com/pt-br/azure/bastion/bastion-overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "A Política do Azure dá suporte à correção automática.",
      "A Política do Azure pode ser usada para garantir que novos recursos cumpram os padrões corporativos.",
      "A avaliação de conformidade na Política do Azure ocorre apenas quando um recurso de destino é criado ou modificado."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️Afirmação 01: Sim — A Política do Azure dá suporte à correção automática. ✔️ Afirmação 02: Sim — A Política do Azure pode ser usada para garantir que novos recursos cumpram os padrões corporativos. ❌ Afirmação 03: Não — A avaliação de conformidade ocorre durante a criação ou modificação de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual é um caso de uso para implementar políticas de barreira de informação no Microsoft 365?",
    "opcoes": [
      "Para restringir o acesso não autenticado ao Microsoft 365",
      "Para restringir os chats do Microsoft Teams entre determinados grupos dentro de uma organização",
      "Para restringir o e-mail do Microsoft Exchange Online entre determinados grupos dentro de uma organização",
      "Para restringir o compartilhamento de dados a destinatários de e-mail externos"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "O caso de uso para políticas de barreira de informação no Microsoft 365 é para restringir o e-mail do Microsoft Exchange Online entre determinados grupos dentro de uma organização, visando controlar a troca de informações sensíveis.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/information-barriers-policies?view=o365-worldwide"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Todas as edições de licença do Microsoft Entra ID incluem os mesmos recursos.",
      "Você pode gerenciar um locatário do Microsoft Entra ID usando o portal do Azure.",
      "Você deve implantar máquinas virtuais do Azure para hospedar um locatário do Microsoft Entra ID."
    ],
    "respostas": [false, true, false],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "❌ Afirmação 01 - A primeira afirmação está incorreta, pois nem todas as edições do Microsoft Entra ID incluem os mesmos recursos. ✔️ Afirmação 02 - A segunda afirmação está correta, você pode gerenciar o locatário do Azure AD através do portal do Azure. ❌ Afirmação 03 - A terceira afirmação está incorreta, pois não é necessário implantar máquinas virtuais do Azure para hospedar um locatário do Azure AD.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/active-directory-whatis"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> fornece as melhores práticas de funcionários, parceiros e clientes da Microsoft, incluindo ferramentas e orientações para auxiliar na implantação do Azure.",
    "opcoes": [
      "Azure Blueprints",
      "Azure Policy",
      "Microsoft Cloud Adoption Framework para Azure",
      "Um bloqueio de recursos"
    ],
    "resposta": 2,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "O Microsoft Cloud Adoption Framework para Azure fornece as melhores práticas de funcionários, parceiros e clientes da Microsoft, incluindo ferramentas e orientações para auxiliar na implantação do Azure.",
    "link": "https://docs.microsoft.com/pt-br/azure/cloud-adoption-framework/get-started/"
  },
  {
    "tipo": "combobox",
    "texto": " <combobox> é usado para identificar, manter e exportar informações eletrônicas que possam ser usadas em uma investigação.",
    "opcoes": [
      "Caixa de Segurança do Cliente",
      "Prevenção contra perda de dados (DLP)",
      "Descoberta Eletrônica (eDiscovery)",
      "Um bloqueio de recursos"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "A Descoberta Eletrônica (eDiscovery) é usada para identificar, manter e exportar informações eletrônicas que possam ser usadas em investigações.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/ediscovery?view=o365-worldwide"
  },
  {
    "tipo": "combobox",
    "texto": " Você pode gerenciar o Microsoft Intune usando <combobox>",
    "opcoes": [
      "Centro de administração do Microsoft Entra ID.",
      "Centro de conformidade do Microsoft 365.",
      "Portal do Microsoft 365 Defender.",
      "Centro de administração do Microsoft Endpoint Manager."
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "O Microsoft Intune pode ser gerido a partir do Centro de administração do Microsoft Endpoint Manager, que é a plataforma adequada para a gestão de dispositivos e políticas de segurança no Intune.",
    "link": "https://learn.microsoft.com/pt-br/mem/intune/fundamentals/what-is-intune"
  },
  {
    "tipo": "combobox",
    "texto": " A federação é usada para estabelecer <combobox>",
    "opcoes": [
      "Autenticação multifator (MFA)",
      "Uma relação de confiança",
      "Sincronização de conta de usuário",
      "Uma conexão VPN"
    ],
    "resposta": 1,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "Federação é uma coleção de domínios que estabeleceram confiança, permitindo que usuários em uma organização acessem recursos em outra.",
    "link": "https://docs.microsoft.com/pt-br/azure/active-directory/hybrid/whatis-fed"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não.\nNOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "A aplicação de atualizações do sistema aumenta a pontuação segura de uma organização na Central de Segurança do Azure.",
      "A pontuação segura na Central de Segurança do Azure pode avaliar recursos em várias assinaturas do Azure.",
      "Habilitar a autenticação multifator (MFA) aumenta a pontuação segura de uma organização na Central de Segurança do Azure."
    ],
    "respostas": [true, true, true],
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ Afirmação 1: Sim — Aplicar atualizações do sistema é essencial para corrigir vulnerabilidades conhecidas. Isso fortalece a postura de segurança da organização, e o Azure Secure Score reconhece essa ação como uma melhoria, contribuindo positivamente na pontuação geral. ✔️ Afirmação 2: Sim — O Azure Secure Score pode ser configurado para avaliar múltiplas assinaturas e fornecer uma visão centralizada da segurança em toda a organização, o que é ideal para grandes ambientes corporativos. ✔️ Afirmação 3: Sim — A ativação da autenticação multifator (MFA) é uma prática recomendada crítica para segurança. Ao exigir uma segunda forma de autenticação (como aplicativo de verificação ou token SMS), reduz-se significativamente o risco de acesso não autorizado. O Secure Score reconhece isso e atribui pontos por sua ativação.",
    "link": "https://docs.microsoft.com/pt-br/azure/security-center/secure-score-security-controls"
  },
  {
    "tipo": "unica",
    "texto": "Qual pontuação mede o progresso de uma organização na conclusão de ações que ajudam a reduzir os riscos associados à proteção de dados e aos padrões regulatórios?",
    "opcoes": [
      "Pontuação segura da Microsoft",
      "Pontuação de Produtividade",
      "Pontuação segura na Central de Segurança do Azure",
      "Pontuação de conformidade"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "A Pontuação de conformidade (Compliance Score) mede o progresso de uma organização na execução de ações recomendadas que ajudam a reduzir riscos relacionados à proteção de dados e ao atendimento a padrões regulatórios. Essa pontuação é fornecida pelo Microsoft Purview Compliance Manager, que avalia controles, políticas e a eficácia da implementação das medidas de conformidade.Ela não deve ser confundida com a Pontuação segura (Secure Score), que está focada em segurança técnica.🔐 Compliance Score = foco em proteção de dados + normas legais🛡️ Secure Score = foco em segurança técnica e postura de defesa",
    "link": "https://docs.microsoft.com/pt-br/microsoft-365/compliance/compliance-manager?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "O que você usa para fornecer integração em tempo real entre o Azure Sentinel e outra fonte de segurança?",
    "opcoes": [
      "Azure AD Connect",
      "Um espaço de trabalho Log Analytics",
      "Proteção de informações do Azure",
      "Um conector"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "Para integrar o Azure Sentinel com outras fontes de segurança, você utiliza conectores. Os conectores permitem que o Sentinel colete dados em tempo real de diversas origens, como: Microsoft 365 Defender Azure Active Directory Firewalls de terceiros Soluções SIEM/SOAR externas Com essa integração, é possível monitorar, correlacionar e responder a incidentes com maior eficácia. Conectores = integração contínua + ingestão de logs🚨 Detecção de ameaças + automação de resposta",
    "link": "https://docs.microsoft.com/pt-br/azure/sentinel/overview"
  },
  {
    "tipo": "unica",
    "texto": "Qual portal da Microsoft fornece informações sobre como os serviços de nuvem da Microsoft estão em conformidade com o padrão regulatório, como a Organização Internacional de Padronização (ISO)?",
    "opcoes": [
      "o centro de administração do Microsoft Endpoint Manager",
      "Gerenciamento de custos + Cobrança do Azure",
      "Portal de Confiança do Serviço da Microsoft",
      "o centro de administração do Microsoft Entra ID"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ O Portal de Confiança de Serviços da Microsoft contém detalhes sobre a implementação de controles e processos que protegem os serviços em nuvem da Microsoft e os dados dos clientes. ❌ O centro de administração do Microsoft Endpoint Manager é voltado à gestão de dispositivos e políticas. ❌ Gerenciamento de custos + Cobrança do Azure lida com uso e faturamento, não conformidade. ❌ O centro de administração do Microsoft Entra ID é usado para gerenciar identidades, não oferece detalhes sobre conformidade com padrões regulatórios.",
    "link": "https://docs.microsoft.com/pt-br/microsoft-365/compliance/get-started-with-service-trust-portal?view=o365-worldwide"
  },
  {
    "tipo": "unica",
    "texto": "No modelo de responsabilidade compartilhada para uma implantação do Azure, pelo que a Microsoft é a única responsável pelo gerenciamento?",
    "opcoes": [
      "O gerenciamento de dispositivos móveis",
      "As Permissões para os dados do usuário armazenados no Azure",
      "As criação e gerenciamento de contas de usuário",
      "O gerenciamento do hardware físico"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "No modelo de responsabilidade compartilhada, a Microsoft é responsável pelo gerenciamento do hardware físico, como servidores, armazenamento e infraestrutura de rede. ❌ A criação e gerenciamento de contas de usuário, permissões e dados armazenados no Azure são responsabilidades do cliente. ❌ O gerenciamento de dispositivos móveis e permissões de dados também ficam a cargo do cliente, não da Microsoft.",
    "link": "https://docs.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "Verificar explicitamente é um dos princípios norteadores da Confiança Zero.",
      "Assumir que a violação é um dos princípios orientadores da Confiança Zero.",
      "O modelo de segurança Confiança Zero assume que um firewall protege a rede interna contra ameaças externas."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "✔️ Afirmação 01 - Sim, verificar explicitamente é um princípio essencial da Confiança Zero, garantindo que cada acesso seja validado independentemente da localização. ✔️ Afirmação 02 - Sim, assumir que a violação pode ocorrer é um dos pilares da Confiança Zero, promovendo monitoramento contínuo. ❌ Afirmação 03 - Não, o modelo de Confiança Zero não depende apenas de firewalls; ele adota uma abordagem abrangente baseada em identidade, dispositivo e contexto para proteger recursos.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/copilots/apply-zero-trust-copilots-overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale ponto.",
    "afirmacoes": [
      "O controle é um princípio fundamental de privacidade da Microsoft.",
      "A transparência é um princípio fundamental de privacidade da Microsoft.",
      "A responsabilidade compartilhada é um princípio fundamental de privacidade da Microsoft."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ Afirmação 01 - Sim, o controle é um princípio fundamental da privacidade da Microsoft, pois garante que os usuários tenham poder sobre seus dados pessoais. ✔️ Afirmação 02 - Sim, a transparência também é um princípio essencial, pois reforça o compromisso da Microsoft em informar claramente como os dados são utilizados. ❌ Afirmação 03 - Não, a responsabilidade compartilhada é um conceito aplicado à segurança em nuvem, não um princípio de privacidade da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/compliance/assurance/assurance-privacy"
  },
  {
    "tipo": "combobox",
    "texto": "Torna os dados no arquivo legíveis e utilizáveis apenas para os visualizadores que possuem a chave apropriada <combobox>",
    "opcoes": [
      "Arquivar",
      "Comprimir",
      "Deduplicar",
      "Criptografar"
    ],
    "resposta": 3,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "A resposta correta é 'Criptografar', pois criptografar um arquivo torna os dados no arquivo legíveis e utilizáveis somente por visualizadores que possuem a chave apropriada.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/encryption-overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "A assinatura digital de um documento requer uma chave privada.",
      "A verificação da autenticidade de um documento assinado digitalmente requer a chave pública do signatário.",
      "A verificação da autenticidade de um documento assinado digitalmente requer a chave privada do signatário."
    ],
    "respostas": [true, true, false],
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ Afirmação 01 - Sim, a assinatura digital requer uma chave privada, que é usada exclusivamente pelo signatário para garantir a autenticidade do documento. ✔️ Afirmação 02 - Sim, a chave pública do signatário é utilizada para validar a assinatura digital e confirmar que o documento não foi alterado. ❌ Afirmação 03 - Não, a verificação da autenticidade de uma assinatura digital não depende da chave privada, mas sim da chave pública correspondente.",
    "link": "https://support.microsoft.com/pt-br/office/obter-um-certificado-digital-e-criar-uma-assinatura-digital-e3d9d813-3305-4164-a820-2e063d86e512"
  },
  {
    "tipo": "combobox",
    "texto": "Quando os usuários entram no portal do Azure, eles primeiro são <combobox>",
    "opcoes": [
      "Atribuídos permissões.",
      "Autenticados.",
      "Autorizados.",
      "Resolvidos."
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "A resposta correta é 'autenticados'. Quando um usuário acessa o portal do Azure, o primeiro passo é a autenticação, que garante que o usuário é quem afirma ser. Esse processo é essencial antes que qualquer permissão seja atribuída ou recurso acessado.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/overview-authentication"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é o processo de identificar se um usuário conectado pode acessar um recurso específico.",
    "opcoes": [
      "Autenticação",
      "Autorização",
      "Federação",
      "Logon único (SSO)"
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "A resposta correta é 'Autorização'. A autorização é o processo de permitir ou negar o acesso a um recurso após a autenticação do usuário. Após um usuário ser autenticado, a autorização verifica se ele tem permissão para acessar um recurso específico.",
    "link": "https://docs.microsoft.com/pt-br/azure/app-service/overview-authentication-authorization"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> permite a colaboração com parceiros de negócios de organizações externas como fornecedores, parceiros e vendedores. Os usuários externos aparecem como usuários convidados no diretório.",
    "opcoes": [
      "Serviços de Domínio Active Directory (AD DS)",
      "Confianças de florestas do Microsoft Entra ID",
      "Microsoft Entra ID business-to-business (B2B)",
      "Microsoft Entra ID business-to-consumer B2C (Azure AD B2C)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "O Azure Microsoft Entra ID business-to-business (B2B) permite a colaboração com parceiros de negócios de organizações externas como fornecedores, parceiros e vendedores. Os usuários externos aparecem como usuários convidados no diretório.",
    "link": "https://docs.microsoft.com/pt-br/azure/active-directory/external-identities/what-is-b2b"
  },
  {
    "tipo": "multipla",
    "texto": "No Microsoft Cloud Adoption Framework para o Azure, quais duas fases são abordadas antes da fase Ready? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Planejar",
      "Gerenciar",
      "Adotar",
      "Governar",
      "Definir estratégia"
    ],
    "respostas": [0, 4],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "As fases de 'Planejar' e 'Definir estratégia' são abordadas antes da fase 'Ready', ajudando na preparação e planejamento da adoção da nuvem no Microsoft Cloud Adoption Framework.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/overview"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim, se a afirmação for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Em software como serviço (SaaS), aplicar pacotes de serviços a aplicações é responsabilidade da organização.",
      "Em infraestrutura como serviço (IaaS), gerenciar a rede física é responsabilidade do provedor de nuvem.",
      "Em todos os tipos de implantação de nuvem do Azure, gerenciar a segurança de informações e dados é responsabilidade da organização."
    ],
    "respostas": [false, true, true],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "❌ Afirmação 01 - Não, em SaaS a responsabilidade pela infraestrutura, rede e plataforma é do provedor de serviços; a organização apenas gerencia dados e configurações da aplicação. ✔️ Afirmação 02 - Sim, no modelo IaaS, a rede física é responsabilidade do provedor de nuvem, enquanto a organização administra o sistema operacional e as aplicações. ✔️ Afirmação 03 - Sim, a segurança das informações e dados é sempre responsabilidade da organização, independentemente do modelo de nuvem adotado.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes declarações, selecione Sim ou Não:",
    "afirmacoes": [
      "O Microsoft Entra ID Connect pode ser usado para implementar a identidade híbrida.",
      "A identidade híbrida requer a implementação de dois locatários do Microsoft 365.",
      "A identidade híbrida refere-se à sincronização do Active Directory Domain Services (AD DS) e do Microsoft Entra ID."
    ],
    "respostas": [true, false, true],
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "✔️ Afirmação 01 - Sim, o Microsoft Entra ID Connect (antigo Azure AD Connect) é a ferramenta usada para implementar a identidade híbrida. ❌ Afirmação 02 - Não, a identidade híbrida não exige dois locatários do Microsoft 365; ela normalmente integra um único domínio local com a nuvem. ✔️ Afirmação 03 - Sim, a identidade híbrida refere-se à sincronização entre o Active Directory Domain Services (AD DS) e o Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/whatis-hybrid-identity"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> fornece recomendações de referência e orientação para proteger os serviços do Azure:",
    "opcoes": [
      "Azure Application Insights",
      "Observador de Rede do Azure",
      "Espaços de trabalho do Log Analytics",
      "Linhas de base de segurança para o Azure"
    ],
    "resposta": 3,
    "dominio": "Descrever os recursos das soluções de conformidade da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ As Linhas de base de segurança para o Azure fornecem recomendações com base em padrões e práticas recomendadas para proteger os serviços do Azure. ❌ As demais opções — Azure Application Insights, Observador de Rede do Azure e Espaços de trabalho do Log Analytics — são voltadas para monitoramento e análise, não para definição de diretrizes de segurança.",
    "link": "https://learn.microsoft.com/pt-br/security/benchmark/azure/baselines/cloud-services-security-baseline"
  },
  {
    "tipo": "unica",
    "texto": "O que é um exemplo de criptografia em repouso?",
    "opcoes": [
      "Criptografando comunicações usando uma VPN site-a-site",
      "Criptografando um disco de máquina virtual",
      "Acessando um site usando uma conexão HTTPS criptografada",
      "Enviando um email criptografado"
    ],
    "resposta": 1,
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "✔️ A resposta correta é 'Criptografar um disco de máquina virtual', pois isso representa criptografia em repouso, já que os dados são protegidos enquanto estão armazenados. ❌ As demais opções referem-se à criptografia em trânsito, como VPN, HTTPS e e-mails criptografados.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/encryption-atrest"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são as três declarações que descrevem com precisão os princípios norteadores do Confiança Zero?",
    "opcoes": [
      "Defina o perímetro por locais físicos.",
      "Use a identidade como o limite de segurança principal.",
      "Sempre verifique explicitamente as permissões de um usuário.",
      "Sempre assuma que o sistema do usuário pode ser violado.",
      "Use a rede como o principal limite de segurança."
    ],
    "respostas": [1, 2, 3],
    "dominio": "Descrever os conceitos de segurança, conformidade e identidade",
    "simulado": "sc-1",
    "explicacao": "❌ Não — Definir o perímetro por locais físicos é uma prática ultrapassada e não representa os princípios do modelo Confiança Zero. ✔️ A identidade é o novo perímetro no modelo de Confiança Zero, protegendo o acesso com base em quem você é. ✔️ Verificar explicitamente é essencial para garantir que cada solicitação seja autenticada, autorizada e inspecionada. ✔️ Assumir que o sistema do usuário pode ser violado é um princípio-chave, promovendo a postura de segurança contínua. ❌ Usar a rede como limite principal é uma abordagem tradicional, enquanto o modelo Zero Trust considera que a rede por si só não é confiável.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço você deve usar para visualizar sua pontuação segura do Azure?",
    "opcoes": [
      "Advisor",
      "Azure Policy",
      "Microsoft Defender",
      "Monitor"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ O Microsoft Defender para Nuvem fornece a pontuação segura do Azure, que mede a postura de segurança dos seus recursos e recomenda melhorias. ❌ Advisor oferece apenas recomendações de boas práticas, mas não apresenta pontuação de segurança. ❌ Azure Policy é usado para aplicar políticas e garantir conformidade, mas não exibe a pontuação segura. ❌ Monitor é uma ferramenta para observabilidade (logs, métricas e alertas), sem função direta de exibição da pontuação de segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/secure-score-access-and-track"
  },
  {
    "tipo": "unica",
    "texto": "O que você pode usar para fornecer a um usuário uma janela de duas horas para concluir uma tarefa administrativa no Azure?",
    "opcoes": [
      "Microsoft Entra ID - Gerenciamento privilegiado de identidade (PIM)",
      "Autenticação multifator do Azure (MFA)",
      "Microsoft Entra ID Identity Protection - Proteção de Identidade",
      "Políticas de acesso condicional"
    ],
    "resposta": 0,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "✔️ O Gerenciamento de Identidade com Privilégios (PIM) do Microsoft Entra permite conceder acesso temporário e com restrições de tempo, como uma janela de duas horas, a funções administrativas, reduzindo os riscos associados ao acesso permanente.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/pim-configure"
  },
  {
    "tipo": "unica",
    "texto": "Em um modelo de identidade híbrido, o que você pode usar para sincronizar identidades entre os Serviços de Domínio do Active Directory (AD DS) e o Microsoft Entra ID?",
    "opcoes": [
      "Serviços de Federação do Active Directory (AD FS)",
      "Azure Sentinel",
      "Microsoft Entra ID Connect",
      "Microsoft Entra ID Privileged Identity Management (PIM)"
    ],
    "resposta": 2,
    "dominio": "Descrever os recursos do Microsoft Entra",
    "simulado": "sc-1",
    "explicacao": "✔️ O Microsoft Entra ID Connect é a ferramenta usada para sincronizar identidades entre o Active Directory local (AD DS) e o Microsoft Entra ID, permitindo um modelo de identidade híbrido. ❌ Os Serviços de Federação do Active Directory (AD FS) são usados para autenticação federada, não sincronização de identidades. ❌ O Azure Sentinel é uma solução de SIEM e SOAR, voltada para análise e resposta a ameaças, sem relação com sincronização de identidades. ❌ O Privileged Identity Management (PIM) do Microsoft Entra ID gerencia o acesso just-in-time a funções privilegiadas, mas não faz sincronização de identidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/hybrid/whatis-azure-ad-connect"
  },
  {
    "tipo": "combobox",
    "texto": "Com o Windows Hello for Business, os dados biométricos de um usuário usados para autenticação <combobox>",
    "opcoes": [
      "São armazenados em um dispositivo externo.",
      "São armazenados apenas em um dispositivo local.",
      "São armazenados no Microsoft Entra ID.",
      "São replicados para todos os dispositivos designados pelo usuário."
    ],
    "resposta": 1,
    "dominio": "Descrever os recursos das soluções de segurança da Microsoft",
    "simulado": "sc-1",
    "explicacao": "✔️ Os dados biométricos utilizados pelo Windows Hello for Business são armazenados somente no dispositivo local do usuário, garantindo maior segurança e privacidade. ❌ Armazenar em dispositivos externos ou na nuvem não é prática do Windows Hello for Business. ❌ Os dados também não são replicados entre dispositivos.",
    "link": "https://learn.microsoft.com/pt-br/windows/security/identity-protection/hello-for-business/hello-overview"
  }
];
