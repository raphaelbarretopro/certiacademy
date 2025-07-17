// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado MS-900
// ==========================================

export const questoes = [
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa descrever os recursos do Microsoft Bookings.  Quais são os dois recursos do Microsoft Bookings? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Usa o Microsoft Viva Engage para reuniões virtuais.",
      "Usa o Microsoft Teams para reuniões virtuais.",
      "Fornece notificação por SMS para compromissos.",
      "Fornece notificação por chamada telefônica para compromissos."
    ],
    "respostas": [1, 2],
    "explicacao": "O Microsoft Bookings oferece integração com o Microsoft Teams para reuniões virtuais com clientes e permite o envio de notificações por SMS como lembretes de compromissos. Ele não utiliza o Microsoft Viva Engage nem fornece chamadas telefônicas como método de notificação.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/bookings/bookings-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Você é o administrador do Microsoft 365 em uma empresa.  Um usuário enfrenta um problema com o SharePoint Online. Você precisa resolver o problema.  Quais são as duas opções que podem ser usadas? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Criar uma nova solicitação de serviço no centro de administração do Microsoft 365.",
      "Entrar em contato com o suporte técnico da Microsoft por telefone.",
      "Criar uma solicitação de serviço no portal do SharePoint.",
      "Acessar o centro de administração do SharePoint e criar uma solicitação de suporte."
    ],
    "respostas": [0, 3],
    "explicacao": "A maneira apropriada de resolver problemas no SharePoint Online como administrador é acessando o centro de administração do Microsoft 365 ou o centro de administração específico do SharePoint para registrar uma solicitação de suporte. Contato telefônico e o portal do SharePoint não são meios válidos para abrir chamados diretamente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/contact-support-for-business-products",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Cloud App Security pode ser integrado a vários recursos.",
      "O Microsoft Cloud App Security pode ser usado para analisar o comportamento de aplicativos em nuvem.",
      "O Microsoft Cloud App Security pode fornecer análises comportamentais e proteção de ameaças."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Cloud App Security, agora chamado Microsoft Defender para Aplicativos em Nuvem, é uma solução abrangente de segurança que permite integração com diversos serviços, análise de comportamento de aplicativos e oferece proteção baseada em inteligência contra ameaças.",
    "link": "https://learn.microsoft.com/pt-br/defender-cloud-apps/what-is-defender-for-cloud-apps",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está avaliando o uso de rótulos de confidencialidade no Microsoft 365.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os rótulos de confidencialidade podem ser aplicados automaticamente e também podem solicitar que o usuário aplique um rótulo recomendado.",
      "Os rótulos de confidencialidade podem ser usados para restringir o compartilhamento de informações em sites do SharePoint para usuários externos.",
      "Os rótulos de confidencialidade podem ser usados para gerenciar políticas de acesso condicional para dispositivos não gerenciados."
    ],
    "respostas": [true, true, true],
    "explicacao": "Os rótulos de confidencialidade do Microsoft Purview podem ser configurados para aplicação automática com base em condições predefinidas. Eles também controlam o acesso a conteúdo em SharePoint, OneDrive e Teams, inclusive bloqueando usuários externos, e podem ser usados para aplicar políticas de acesso condicional em dispositivos não gerenciados.",
    "link": "https://learn.microsoft.com/en-us/sharepoint/authentication-context-example",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando as políticas de Acesso Condicional do Microsoft Entra.  Você precisa determinar quais itens têm suporte pelas políticas de Acesso Condicional.  Quais são os três cenários que devem ser selecionados? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Autenticação multifator",
      "Acesso bloqueado aos serviços do Microsoft 365 para usuários não verificados",
      "Implantação do BitLocker",
      "Dispositivo híbrido ingressado no Microsoft Entra",
      "Funcionalidades de redefinição de senha self-service"
    ],
    "respostas": [0, 1, 3],
    "explicacao": "As políticas de Acesso Condicional do Microsoft Entra permitem aplicar autenticação multifator, bloquear acesso aos serviços para usuários não verificados e impor requisitos como o uso de dispositivos híbridos ingressados. Funcionalidades como BitLocker e redefinição de senha self-service não fazem parte direta do escopo do Acesso Condicional.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa o Microsoft 365.  Você precisa identificar os recursos de cobrança e compra no Microsoft 365.  Faça a correspondência de cada recurso com sua definição.",
    "itens": [
      { "label": "Perfil de cobrança" },
      { "label": "Fatura de cobrança" },
      { "label": "Licença de assinatura" }
    ],
    "grupos": [
      "Oferece personalização de faturas e opções de pagamento",
      "Fornece um resumo de encargos"
    ],
    "respostas": {
      "Oferece personalização de faturas e opções de pagamento": ["Perfil de cobrança"],
      "Fornece um resumo de encargos": ["Fatura de cobrança"]
    },
    "explicacao": "O perfil de cobrança permite configurar preferências de pagamento e personalização de faturas, enquanto a fatura de cobrança resume os encargos relacionados aos serviços utilizados. A licença de assinatura não se encaixa nessas definições.",
    "link": "https://learn.microsoft.com/en-us/microsoft-365/commerce/?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está avaliando os princípios de segurança da Confiança Zero para o Microsoft 365.  Você precisa identificar um princípio de segurança de Confiança Zero usado no Microsoft 365.  Selecione a resposta que completa corretamente a frase.  Um princípio de segurança da Confiança Zero que usa acesso segmentado para redes, usuários, dispositivos e aplicativos é <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Pressuposição de violação",
      "Acesso com privilégios mínimos",
      "Verificação explícita",
      "Modelo de responsabilidade compartilhada"
    ],
    "resposta": 2,
    "explicacao": "O princípio da Confiança Zero que estabelece acesso segmentado é a 'Verificação explícita'. Ele exige autenticação e autorização contínuas com base em todos os dados disponíveis, como identidade do usuário, localização, status do dispositivo e serviço utilizado.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/zero-trust-overview",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Portal de Confiança do Serviço Microsoft fornece relatórios de auditoria.",
      "O Portal de Confiança do Serviço Microsoft fornece relatórios de teste de penetração.",
      "O Portal de Confiança do Serviço Microsoft permite a configuração de políticas de acesso condicional."
    ],
    "respostas": [true, true, false],
    "explicacao": "O Portal de Confiança fornece relatórios de auditoria e de testes de penetração, permitindo que as organizações avaliem a conformidade da Microsoft com padrões regulatórios. No entanto, ele não é usado para configurar políticas de acesso condicional — isso é feito no Microsoft Entra.",
    "link": "https://learn.microsoft.com/pt-br/purview/get-started-with-service-trust-portal",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Microsoft Entra ID. A empresa requer que as solicitações de autenticação de aplicativos cliente que não dão suporte à autenticação moderna sejam bloqueadas. Você precisa identificar a política que atende ao requisito. Qual política você deve selecionar?",
    "opcoes": [
      "Acesso Condicional",
      "Risco do usuário",
      "Risco de entrada",
      "Registro com autenticação multifator"
    ],
    "resposta": 0,
    "explicacao": "A política de Acesso Condicional permite bloquear aplicativos legados que não dão suporte à autenticação moderna. Essa configuração é essencial para impedir acessos menos seguros e proteger os recursos do ambiente Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/block-legacy-authentication",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa pretende implantar o Microsoft 365. Associe cada solução de colaboração à respectiva descrição.",
    "itens": [
      { "label": "Microsoft Forms" },
      { "label": "Microsoft Planner" },
      { "label": "Microsoft Entra ID P2" },
      { "label": "Microsoft Delve" }
    ],
    "grupos": [
      "Criar pesquisas e sondagens online e rastrear as respostas em tempo real.",
      "Criar, atribuir e rastrear tarefas e itens de trabalho."
    ],
    "respostas": {
      "Criar pesquisas e sondagens online e rastrear as respostas em tempo real.": ["Microsoft Forms"],
      "Criar, atribuir e rastrear tarefas e itens de trabalho.": ["Microsoft Planner"]
    },
    "explicacao": "O Microsoft Forms é usado para criar pesquisas e questionários com feedback em tempo real. Já o Microsoft Planner é uma solução de gerenciamento de tarefas que permite atribuir, acompanhar e organizar atividades em equipe. As opções Microsoft Entra ID P2 e Microsoft Delve não são ferramentas de colaboração direta.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/bookings/bookings-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Você é o administrador do Microsoft 365 em uma empresa. Quais são as duas funções de administrador que podem comprar mais licenças? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Administrador de gerenciamento de usuários",
      "Administrador de cobrança",
      "Administrador de serviços",
      "Administrador global"
    ],
    "respostas": [1, 3],
    "explicacao": "As funções de Administrador de cobrança e Administrador global possuem permissões para comprar mais licenças no Microsoft 365. O administrador de gerenciamento de usuários pode atribuir licenças, mas não comprá-las. O administrador de serviços gerencia serviços, não aquisições.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/add-users/about-admin-roles",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja usar os relatórios disponíveis na análise de uso do Microsoft 365. Relacione cada relatório à respectiva descrição.",
    "itens": [
      { "label": "Comunicação" },
      { "label": "Colaboração" },
      { "label": "Mobilidade" },
      { "label": "Armazenamento" },
      { "label": "Uso" }
    ],
    "grupos": [
      "Fornece o número de usuários ativos e as atividades principais de cada produto nos últimos 12 meses",
      "Identifica padrões de uso do Microsoft Teams e do Viva Engage entre os usuários",
      "Identifica o número de documentos compartilhados interna ou externamente"
    ],
    "respostas": {
      "Fornece o número de usuários ativos e as atividades principais de cada produto nos últimos 12 meses": ["Uso"],
      "Identifica padrões de uso do Microsoft Teams e do Viva Engage entre os usuários": ["Comunicação"],
      "Identifica o número de documentos compartilhados interna ou externamente": ["Colaboração"]
    },
    "explicacao": "O relatório de Uso fornece uma visão geral da atividade dos usuários em vários serviços. O relatório de Comunicação mostra como os usuários interagem por meio do Teams e Viva Engage. O relatório de Colaboração se concentra no compartilhamento de arquivos e documentos entre usuários.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/usage-analytics/usage-analytics?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada identidade de autenticação ao respectivo cenário.",
    "itens": [
      { "label": "Apenas identidade do Microsoft Entra ID" },
      { "label": "Identidade do Microsoft Entra ID e identidade do Active Directory" }
    ],
    "grupos": [
      "Usada para fornecer autenticação para serviços do Microsoft 365",
      "Usada para fornecer autenticação para o Exchange Server"
    ],
    "respostas": {
      "Usada para fornecer autenticação para serviços do Microsoft 365": ["Apenas identidade do Microsoft Entra ID"],
      "Usada para fornecer autenticação para o Exchange Server": ["Identidade do Microsoft Entra ID e identidade do Active Directory"]
    },
    "explicacao": "Apenas a identidade do Microsoft Entra ID é necessária para autenticar serviços em nuvem como Microsoft 365. Já o Exchange Server, que pode ser parte de uma infraestrutura híbrida, requer integração com o Active Directory local junto ao Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/overview-authentication",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está investigando os SLAs (contratos de nível de serviço) oferecidos pelo Microsoft 365. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O SLA assume o compromisso de oferecer 100% do tempo de atividade e entrega de email.",
      "Todo aplicativo do Microsoft 365 tem um compromisso de SLA individual.",
      "A Microsoft oferece um crédito de serviço caso o SLA não seja cumprido."
    ],
    "respostas": [false, false, true],
    "explicacao": "A Microsoft não garante 100% de tempo de atividade nos SLAs — o valor típico é de 99,9%. Nem todos os aplicativos têm SLAs individuais; alguns compartilham compromissos de serviço. No entanto, a Microsoft realmente fornece crédito de serviço se os SLAs acordados não forem cumpridos.",
    "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/office-365-platform-service-description/office-365-platform-service-description",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa tem um ambiente do Exchange Server. A empresa planeja migrar para a nuvem. Você precisa recomendar um modelo de nuvem que atenda aos seguintes requisitos: Atualize o ambiente de email existente. Minimize a manutenção de servidor e aplicativo. Qual modelo você deve recomendar?",
    "opcoes": [
      "PaaS (plataforma como serviço)",
      "IaaS (infraestrutura como serviço)",
      "SaaS (software como serviço)",
      "WaaS (Windows como serviço)"
    ],
    "resposta": 2,
    "explicacao": "SaaS (Software como Serviço) é o modelo mais adequado quando se deseja minimizar a manutenção de servidores e aplicativos, transferindo essas responsabilidades para o provedor. A migração do Exchange Server para o Exchange Online, por exemplo, é uma solução SaaS.",
    "link": "https://learn.microsoft.com/pt-br/graph/cloudpc-concept-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "ms-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está avaliando serviços de virtualização da Microsoft. Qual recurso é exclusivo do Windows 365?",
    "opcoes": [
      "Uma máquina virtual é automaticamente provisionada após a atribuição de uma licença a um usuário.",
      "Uma máquina virtual pode autenticar usuários no Active Directory Domain Services (AD DS).",
      "Os usuários podem se conectar a uma máquina virtual usando o aplicativo Área de Trabalho Remota da Microsoft.",
      "Uma máquina virtual pode ser provisionada de uma imagem personalizada."
    ],
    "resposta": 0,
    "explicacao": "A principal característica exclusiva do Windows 365 é o provisionamento automático de uma máquina virtual assim que uma licença é atribuída a um usuário, eliminando a necessidade de configuração manual. As demais opções estão associadas ao Azure Virtual Desktop ou a outras soluções.",
    "link": "https://learn.microsoft.com/pt-br/windows-365/overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "ms-2"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está usando o Microsoft Teams para colaboração. A empresa deseja permitir que os funcionários colaborem com outras organizações do Microsoft Entra utilizando canais compartilhados do Teams. Os funcionários devem ser capazes de adicionar usuários de outras organizações ao canal compartilhado sem precisar alternar entre as organizações ou entrar com uma conta diferente. Você precisa garantir que os funcionários possam colaborar com usuários de outras organizações do Microsoft Entra. Selecione a resposta que completa a frase corretamente. Para garantir que os funcionários possam colaborar com usuários de outras organizações do Microsoft Entra, você precisa usar o(a) <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Identidade de nuvem híbrida",
      "Identidade de colaboração B2B",
      "Configuração de acesso condicional",
      "Autenticação multifator",
      "Autorização baseada em função"
    ],
    "resposta": 2,
    "explicacao": "A Identidade de colaboração B2B (Business-to-Business) do Microsoft Entra permite que usuários externos participem de canais compartilhados do Teams sem a necessidade de alternar de locatário ou utilizar uma conta separada, facilitando a colaboração entre organizações.",
    "link": "https://learn.microsoft.com/pt-br/entra/external-id/external-identities-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Microsoft 365. A empresa deseja fornecer fluxos de trabalho de tarefas comerciais que se conectam ao Microsoft Outlook e ao Microsoft Teams. Você precisa escolher uma solução que atenda ao requisito. Qual solução você deve escolher?",
    "opcoes": [
      "Power Automate",
      "Microsoft Bookings",
      "Microsoft Planner",
      "Power BI"
    ],
    "resposta": 0,
    "explicacao": "O Power Automate é a solução do Microsoft 365 usada para criar fluxos de trabalho automatizados entre aplicativos e serviços como Microsoft Outlook, Teams e outros. Ele permite que tarefas comerciais sejam executadas automaticamente com base em eventos e regras definidas.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está planejando implementar o Teams. A empresa requer uma funcionalidade no Teams que forneça as seguintes informações: um resumo dos principais pontos de discussão durante as reuniões, as próximas etapas para os participantes da reunião e tarefas atribuídas aos participantes da reunião. Você precisa recomendar uma solução. Para fornecer resumos de reunião do Teams e identificar etapas e tarefas de acompanhamento, a empresa deve usar <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Planner",
      "Power Automate",
      "Recursos de Recapitulação de Reunião",
      "Microsoft Loop",
      "Microsoft Viva Goals"
    ],
    "resposta": 3,
    "explicacao": "O recurso de Recapitulação de Reunião do Teams fornece automaticamente um resumo das reuniões, incluindo pontos de discussão, tarefas atribuídas e etapas de acompanhamento, integrando-se com Microsoft Planner e Outlook para facilitar o acompanhamento.",
    "link": "https://learn.microsoft.com/pt-br/microsoftteams/intelligent-recap-calls-meetings",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está avaliando o Microsoft 365 Apps. Você precisa identificar o aplicativo do Microsoft 365 Apps que dá suporte a cada recurso.",
    "itens": [
      { "label": "Access" },
      { "label": "OneDrive" },
      { "label": "PowerPoint" },
      { "label": "Editor" }
    ],
    "grupos": [
      "Gera gráficos e pode armazenar dados em um banco de dados SQL do Azure.",
      "Sincroniza arquivos entre dispositivos.",
      "Converte anotações do Microsoft Word em apresentações.",
      "Cria etiquetas, boletins informativos e materiais de marketing usando modelos."
    ],
    "respostas": {
      "Gera gráficos e pode armazenar dados em um banco de dados SQL do Azure.": ["Access"],
      "Sincroniza arquivos entre dispositivos.": ["OneDrive"],
      "Converte anotações do Microsoft Word em apresentações.": ["PowerPoint"],
      "Cria etiquetas, boletins informativos e materiais de marketing usando modelos.": ["Editor"]
    },
    "explicacao": "O Access é utilizado para criação de bancos de dados e relatórios com gráficos, podendo integrar-se ao SQL do Azure. O OneDrive sincroniza arquivos entre dispositivos. O PowerPoint agora permite transformar anotações do Word em slides. O Editor é ideal para criação de materiais com base em modelos de design prontos.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365-apps/deploy/deployment-guide-microsoft-365-apps",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Você é administrador do Microsoft 365 de uma empresa. Você precisa recuperar as seguintes informações: - Uma avaliação do status de segurança do seu locatário para uma determinada regulamentação. - Uma lista de relatórios de avaliação e auditoria sobre os serviços de nuvem da Microsoft. Quais são os dois portais que têm essas informações? Cada resposta correta apresenta uma solução parcial.",
    "opcoes": [
      "Centro de Administração do SharePoint",
      "Centro de Conformidade",
      "Portal do Azure",
      "Portal de Confiança do Serviço"
    ],
    "respostas": [1, 3],
    "explicacao": "O Centro de Conformidade do Microsoft Purview fornece informações detalhadas sobre regulamentações, pontuações de conformidade e avaliações. Já o Portal de Confiança do Serviço oferece acesso a documentos de auditoria, relatórios de conformidade e certificações. O Centro de Administração do SharePoint e o Portal do Azure não são usados para essas finalidades específicas.",
    "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-365-security-compliance-licensing-guidance",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa tem um servidor de aplicativos local. A empresa deseja usar alguns dos serviços do Microsoft 365 com o servidor de aplicativos local. Você precisa escolher um modelo de implantação de nuvem que atenda ao requisito. O que você deve escolher?",
    "opcoes": [
      "Híbrida",
      "Privada",
      "Pública"
    ],
    "resposta": 0,
    "explicacao": "A nuvem híbrida é a escolha ideal para empresas que desejam manter parte de sua infraestrutura local enquanto utilizam serviços baseados na nuvem, como os oferecidos pelo Microsoft 365. Esse modelo combina ambientes locais e de nuvem, permitindo integração e flexibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/scenarios/hybrid/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa comprou uma assinatura do Microsoft 365 de forma direta. A empresa está avaliando quais opções de suporte que não têm custos adicionais para os serviços do Microsoft 365. Você precisa identificar quais opções de suporte são fornecidas sem custo adicional. Quais são as duas opções que você deve identificar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Fórum de perguntas e respostas e ajuda online",
      "Suporte Professional Direct para o Microsoft 365",
      "Solicitação de suporte do centro de administração do Microsoft 365",
      "Suporte Unificado da Microsoft"
    ],
    "respostas": [0, 2],
    "explicacao": "O suporte gratuito incluso em uma assinatura do Microsoft 365 cobre solicitações por meio do centro de administração e acesso aos fóruns e artigos da documentação. Suporte Professional Direct e Suporte Unificado são serviços pagos e não fazem parte do suporte básico incluso.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/contact-support-for-business-products",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa pretende implantar fluxos de trabalho automatizados para que os gerentes aprovem. Você precisa determinar quais produtos do Microsoft 365 permitem acessar fluxos de trabalho pessoais. Quais são os dois produtos que os gerentes devem usar? Cada resposta correta apresenta uma solução parcial.",
    "opcoes": [
      "Microsoft Teams",
      "Microsoft Excel",
      "Viva Engage",
      "Power Automate"
    ],
    "respostas": [0, 3],
    "explicacao": "O Power Automate é a principal ferramenta da Microsoft para criação e automação de fluxos de trabalho pessoais e corporativos. O Microsoft Teams permite a integração com o Power Automate para aprovações e automações diretamente nos canais e chats. O Excel e o Viva Engage não oferecem recursos diretos para executar ou aprovar fluxos de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/teams/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar caixas de correio inativas para manter o conteúdo delas indefinidamente.",
      "Você pode usar políticas de retenção para verificar se um registro foi excluído.",
      "Você pode usar o Explorador de Atividade de Rótulo para pesquisar e exibir atividade de rótulo."
    ],
    "respostas": [true, false, true],
    "explicacao": "É possível criar caixas de correio inativas com o Microsoft Purview para manter conteúdo de forma indefinida, mesmo após exclusão. No entanto, as políticas de retenção não servem para verificar se um item foi excluído, mas sim para impedir sua exclusão prematura. O Explorador de Atividade de Rótulo é usado para monitorar e investigar o uso de rótulos de sensibilidade e retenção.",
    "link": "https://learn.microsoft.com/pt-br/purview/manage-data-governance",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma organização tem uma assinatura do Microsoft 365. Você planeja implementar a autenticação multifator. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Depois que os usuários forem inscritos na autenticação multifator, eles deverão configurar um segundo fator de autenticação na próxima vez que entrarem.",
      "Habilitar a autenticação multifator exige a compra de uma assinatura adicional.",
      "Conclua a autenticação multifator usando mensagens de texto, um aplicativo de smartphone ou um telefonema."
    ],
    "respostas": [true, false, true],
    "explicacao": "Após habilitar a autenticação multifator (MFA), os usuários devem configurar um segundo fator no próximo login. O MFA básico está incluído sem custo adicional no Microsoft 365. Os métodos suportados incluem aplicativo de autenticação, SMS e chamada telefônica.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-mfa-howitworks",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa planeja implementar o Microsoft 365. A empresa não comprou licenças da Microsoft. É necessário recomendar uma solução de licenciamento. Que solução de licenciamento você deve recomendar?",
    "opcoes": [
      "Licença de assinatura de usuário de complemento",
      "Licença de assinatura de usuário Step-up",
      "Licença de assinatura de usuário do SA (Software Assurance)",
      "Licença de assinatura de usuário completa"
    ],
    "resposta": 3,
    "explicacao": "A licença de assinatura de usuário completa é usada por organizações que ainda não adquiriram nenhuma licença por meio de contratos com a Microsoft. As demais opções, como complemento ou Step-up, requerem licenças existentes como base.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/licenses",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa determinar as funcionalidades do Microsoft Viva Insights.  Quais são dois dos recursos dos insights do Microsoft Viva? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Um painel que recomenda fazer pausas regulares durante o dia.",
      "Acompanhamento de aprendizado recomendado concluído atribuído à equipe de um gerente.",
      "Um painel que usa cartões dinâmicos que podem agregar dados de um site do SharePoint.",
      "Informações de padrão geral de trabalho sobre a equipe de um gerente."
    ],
    "respostas": [0, 3],
    "explicacao": "O Viva Insights fornece recomendações como pausas durante o dia e oferece aos gerentes informações agregadas sobre padrões de trabalho da equipe, como tempo em reuniões e foco. As outras opções pertencem a outros módulos como Viva Learning e Power Platform.",
    "link": "https://learn.microsoft.com/pt-br/viva/insights/",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada identidade de autenticação ao respectivo cenário. Cada identidade de autenticação pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Apenas identidade do Microsoft Entra ID" },
      { "label": "Apenas identidade do Active Directory" },
      { "label": "Identidade do Microsoft Entra ID e identidade do Active Directory" }
    ],
    "grupos": ["Usada para fornecer autenticação para serviços do Microsoft 365", "Usada para fornecer autenticação para o Exchange Server"],
    "respostas": {
      "Usada para fornecer autenticação para serviços do Microsoft 365": ["Apenas identidade do Microsoft Entra ID"],
      "Usada para fornecer autenticação para o Exchange Server": ["Apenas identidade do Active Directory"]
    },
    "explicacao": "Para serviços do Microsoft 365, a autenticação é feita com Microsoft Entra ID (antigo Azure AD). Para o Exchange Server local, utiliza-se apenas o Active Directory tradicional.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-authentication-methods",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa assina o Microsoft 365 e usa o Microsoft Entra ID. Os usuários devem usar um computador corporativo e o aplicativo Microsoft Authenticator.  A empresa quer proteger os dispositivos dos funcionários quando estes se encontram fora do país/região.  Você precisa identificar os sinais de acesso condicional que a empresa deve usar.  Quais são os dois sinais que você deve identificar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Localização nomeada",
      "Risco do usuário",
      "Aplicativos de nuvem",
      "Associação de grupo"
    ],
    "respostas": [0, 1],
    "explicacao": "Para proteger o acesso de usuários fora de um local esperado, sinais como 'Localização nomeada' e 'Risco do usuário' são apropriados. A 'localização nomeada' permite aplicar políticas com base na localização geográfica. O 'risco do usuário' permite detectar comportamentos incomuns baseados em análises de risco.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa planeja mudar do suporte a servidores locais para o uso de serviços do Microsoft 365.  Você precisa determinar qual carga de trabalho do Microsoft 365 é apropriada para substituir cada serviço local.",
    "pares": [
      {
        "requisito": "Receber atualizações sobre as últimas notícias e comunicados de um site da intranet hospedado em um servidor Web interno.",
        "opcoes": [
          "SharePoint Online",
          "Microsoft Stream",
          "OneDrive for Business",
          "Microsoft Teams"
        ],
        "resposta": 0
      },
      {
        "requisito": "Exibir os vídeos hospedados em um servidor Web interno.",
        "opcoes": [
          "SharePoint Online",
          "Microsoft Stream",
          "OneDrive for Business",
          "Microsoft Teams"
        ],
        "resposta": 1
      },
      {
        "requisito": "Armazenar e recuperar documentos compartilhados em um servidor de arquivos local.",
        "opcoes": [
          "SharePoint Online",
          "Microsoft Stream",
          "OneDrive for Business",
          "Microsoft Teams"
        ],
        "resposta": 0
      },
      {
        "requisito": "Armazenar documentos em uma pasta personalizada em um servidor de arquivos local.",
        "opcoes": [
          "SharePoint Online",
          "Microsoft Stream",
          "OneDrive for Business",
          "Microsoft Teams"
        ],
        "resposta": 2
      },
      {
        "requisito": "Conversar com outros funcionários usando um servidor do Skype for Business local.",
        "opcoes": [
          "SharePoint Online",
          "Microsoft Stream",
          "OneDrive for Business",
          "Microsoft Teams"
        ],
        "resposta": 3
      }
    ],
    "explicacao": "SharePoint Online substitui sites de intranet e compartilhamento de documentos em grupo. O Microsoft Stream é ideal para hospedagem e exibição de vídeos internos. O OneDrive for Business substitui pastas pessoais com acesso baseado em nuvem. O Microsoft Teams substitui o Skype for Business com funcionalidades de bate-papo, chamadas e colaboração.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja implementar o Microsoft 365 para gerenciar projetos e compromissos com clientes.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Planner pode ser usado para fornecer compromissos personalizados que os clientes podem agendar em um site.",
      "O Microsoft Planner pode ser usado para garantir que os clientes recebam confirmações e lembretes com notificações automáticas de compromissos por email e SMS.",
      "O Microsoft Planner pode ser usado para atribuir e gerenciar tarefas para clientes em um quadro Kanban usando cartões de tarefas."
    ],
    "respostas": [false, false, true],
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2",
    "explicacao": [
      "O Planner não oferece agendamento público de compromissos — essa funcionalidade é do Microsoft Bookings.",
      "O Planner não envia confirmações de compromisso por SMS ou email automaticamente — isso é típico do Microsoft Bookings e Power Automate.",
      "O Planner é projetado para gerenciamento de tarefas usando quadros Kanban e cartões de tarefas, o que torna essa afirmação correta."
    ],
    "link": "https://support.microsoft.com/pt-br/office/treinamento-em-v%C3%ADdeo-do-microsoft-planner-4d71390f-08d8-4db0-84ea-92fb078687c7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está avaliando os produtos do Microsoft 365 para atender a cada requisito de colaboração.  Você precisa recomendar o produto apropriado para cada um dos seguintes requisitos.",
    "itens": [
      { "label": "Viva Engage" },
      { "label": "Microsoft SharePoint" },
      { "label": "Microsoft Power Apps" }
    ],
    "grupos": ["Compartilhar notícias e comunicados com usuários no Microsoft Teams e no Microsoft Outlook", "Fornecer aos usuários recursos de armazenamento e compartilhamento de arquivos, bem como coautoria de documentos."],
    "respostas": {
      "Compartilhar notícias e comunicados com usuários no Microsoft Teams e no Microsoft Outlook": ["Viva Engage"],
      "Fornecer aos usuários recursos de armazenamento e compartilhamento de arquivos, bem como coautoria de documentos.": ["Microsoft SharePoint"]
    },
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-2",
    "explicacao": "O Viva Engage é voltado para engajamento social dentro da organização, sendo ideal para compartilhar comunicados e notícias com integração ao Teams e Outlook. Já o SharePoint fornece armazenamento e colaboração em documentos com suporte à coautoria, o que atende ao segundo requisito. O Power Apps não é adequado para nenhum dos dois requisitos apresentados nesta questão.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/describe-collaboration-solutions-microsoft-365/"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está migrando para o Microsoft 365. A empresa está analisando as opções de conta de cobrança no Microsoft 365.  É necessário recomendar opções de uma conta de cobrança.  Qual tipo de conta de cobrança você deve recomendar?  Associe as contas de cobrança adequadas até o cenário correto. Cada conta de cobrança pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Programa Microsoft Online Services" },
      { "label": "Programa MPSA (Microsoft Products and Services Agreement)" },
      { "label": "Contrato de Cliente da Microsoft" }
    ],
    "grupos": [
      "A conta de cobrança é criada quando um indivíduo se inscreve diretamente em uma assinatura do Microsoft 365.",
      "A conta de cobrança é criada quando uma empresa assina um contrato de licenciamento por volume para comprar software e serviços online."
    ],
    "respostas": {
      "A conta de cobrança é criada quando um indivíduo se inscreve diretamente em uma assinatura do Microsoft 365.": ["Programa Microsoft Online Services"],
      "A conta de cobrança é criada quando uma empresa assina um contrato de licenciamento por volume para comprar software e serviços online.": ["Programa MPSA (Microsoft Products and Services Agreement)"]
    },
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-2",
    "explicacao": "O Programa Microsoft Online Services é destinado a usuários que se inscrevem diretamente em uma assinatura do Microsoft 365. Já o Programa MPSA é voltado para empresas que precisam de licenciamento por volume de software e serviços da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/commerce/quick-tour-account-management"
  }
];
