// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado MS-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Uma empresa tem um servidor de aplicativos local.  A empresa deseja usar alguns dos serviços do Microsoft 365 com o servidor de aplicativos local.  Você precisa escolher um modelo de implantação de nuvem que atenda ao requisito.  O que você deve escolher?",
    "opcoes": [
      "Pública",
      "Privada",
      "Híbrida"
    ],
    "resposta": 2,
    "explicacao": "A implantação de nuvem híbrida permite que uma empresa integre serviços locais com serviços de nuvem, como o Microsoft 365. Isso é ideal para organizações que desejam manter parte da infraestrutura local enquanto aproveitam os benefícios da nuvem pública.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/scenarios/hybrid/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa identificar os serviços de SaaS (software como serviço), PaaS (plataforma como serviço) e IaaS (infraestrutura como serviço) fornecidos pelo Microsoft 365.  Que tipo de modelo de serviço de nuvem cada serviço de nuvem representa?",
    "itens": [
      { "label": "SaaS" },
      { "label": "PaaS" },
      { "label": "IaaS" }
    ],
    "grupos": [
      "Power Apps",
      "Microsoft 365 Apps",
      "Máquinas virtuais do Azure"
    ],
    "respostas": {
      "Power Apps": ["PaaS"],
      "Microsoft 365 Apps": ["SaaS"],
      "Máquinas virtuais do Azure": ["IaaS"]
    },
    "explicacao": "Microsoft 365 Apps, como Outlook e Word online, são exemplos de SaaS (software como serviço). O Power Apps é uma plataforma de desenvolvimento de aplicativos, sendo um exemplo de PaaS. Já as máquinas virtuais do Azure são recursos de infraestrutura sob demanda, enquadrando-se como IaaS.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/cloud-services-roadmap-microsoft-365?view=o365-worldwide",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "ms-1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa tem um ambiente do Exchange Server. A empresa planeja migrar para a nuvem.  Você precisa recomendar um modelo de nuvem que atenda aos seguintes requisitos:\n- Atualize o ambiente de email existente.\n- Minimize a manutenção de servidor e aplicativo.  Qual modelo você deve recomendar?",
    "opcoes": [
      "WaaS (Windows como serviço)",
      "PaaS (plataforma como serviço)",
      "SaaS (software como serviço)",
      "IaaS (infraestrutura como serviço)"
    ],
    "resposta": 2,
    "explicacao": "Para substituir o Exchange Server local e minimizar a manutenção de infraestrutura, a melhor opção é migrar para um modelo SaaS (Software como Serviço), como o Exchange Online incluído no Microsoft 365. Isso elimina a necessidade de gerenciar servidores e atualizações, pois tudo é gerenciado pela Microsoft na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/exchange/mailbox-migration/mailbox-migration",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa de reparos de automóveis usa o Microsoft Bookings. Os clientes podem agendar consultas para serviços automotivos com técnicos.  Relacione cada componente à respectiva descrição. Cada componente pode ser usado uma vez, mais de uma vez ou pode não ser usado.",
    "itens": [
      { "label": "Calendário de reservas" },
      { "label": "Página de reservas" },
      { "label": "Página da equipe" },
      { "label": "Página de serviços" }
    ],
    "grupos": [
      "Agendar férias para técnicos e horários de fechamento da empresa",
      "Agendar compromissos com clientes",
      "Exibir o horário de trabalho de um técnico"
    ],
    "respostas": {
      "Agendar férias para técnicos e horários de fechamento da empresa": ["Página de reservas"],
      "Agendar compromissos com clientes": ["Calendário de reservas"],
      "Exibir o horário de trabalho de um técnico": ["Página da equipe"]
    },
    "explicacao": "A Página de reservas permite configurar detalhes como horários de funcionamento e feriados, enquanto o Calendário de reservas é usado para marcar compromissos com clientes. Já a Página da equipe exibe a disponibilidade e horários dos técnicos individualmente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/bookings/bookings-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está planejando implementar o Microsoft Teams. A empresa requer uma funcionalidade no Teams que forneça as seguintes informações: um resumo dos principais pontos de discussão durante as reuniões, as próximas etapas para os participantes da reunião e as tarefas atribuídas aos participantes da reunião. Você precisa recomendar uma solução. Selecione a resposta que completa a frase corretamente: Para fornecer resumos de reuniões do Teams e identificar etapas e tarefas de acompanhamento, a empresa deve usar: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Aplicativo Tarefas",
      "Copilot",
      "Gravação de reunião",
      "Quadro de Comunicação"
    ],
    "resposta": 2,
    "explicacao": "O Copilot no Microsoft Teams utiliza inteligência artificial para gerar resumos automáticos de reuniões, listar etapas de acompanhamento e atribuir tarefas aos participantes. Nenhuma das outras funcionalidades oferece esse conjunto completo de recursos de forma automatizada e integrada.",
    "link": "https://learn.microsoft.com/pt-br/copilot/microsoft-365/microsoft-365-copilot-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está avaliando o Microsoft 365.  Selecione a resposta que completa a frase corretamente:  Os módulos chamados Conexões, Insights, Aprendizagem e Tópicos fazem parte do: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Defender",
      "Microsoft Intune",
      "Microsoft Viva",
      "Microsoft Endpoint Manager"
    ],
    "resposta": 3,
    "explicacao": "Os módulos Conexões, Insights, Aprendizagem e Tópicos compõem a plataforma Microsoft Viva, que é voltada para a experiência do funcionário, englobando bem-estar, aprendizado, conexão com colegas e descoberta de conhecimento organizacional.",
    "link": "https://learn.microsoft.com/pt-br/viva/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa está avaliando o Microsoft 365.  Você precisa determinar as funcionalidades de gerenciamento de pontos de extremidade do Microsoft 365.  Selecione a resposta que completa a frase corretamente:  Uma solução de máquina virtual baseada em nuvem que pode usar o FSLogix é: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Intune",
      "Microsoft Defender para Nuvem",
      "PC na nuvem Windows 365",
      "Microsoft Entra ID"
    ],
    "resposta": 3,
    "explicacao": "O PC na nuvem Windows 365 é uma solução de nuvem que fornece uma experiência de desktop virtual. Ele pode ser configurado com FSLogix para gerenciamento de perfis e otimização de desempenho, especialmente em cenários empresariais com múltiplos usuários. As demais opções não se referem a máquinas virtuais baseadas em nuvem com suporte ao FSLogix.",
    "link": "https://learn.microsoft.com/pt-br/windows-365/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa planeja implantar uma solução de colaboração que concede aos usuários dentro e fora da empresa acesso aos mesmos documentos, tarefas e conversas.  Você precisa identificar qual produto atende ao requisito.  Qual produto você deve selecionar?",
    "opcoes": [
      "Exchange Online",
      "Outlook 365",
      "Microsoft Teams",
      "Microsoft OneDrive"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft Teams é a solução de colaboração da Microsoft que permite que os usuários trabalhem juntos em tempo real em documentos, tarefas e conversas, dentro e fora da organização. Exchange Online e Outlook 365 são voltados para e-mails, enquanto o OneDrive foca no armazenamento individual de arquivos.",
    "link": "https://learn.microsoft.com/pt-br/microsoftteams/teams-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar o Microsoft Viva.  Você precisa identificar os aplicativos do Viva. Faça a correspondência de cada aplicativo com seu recurso. Cada aplicativo pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Viva Connections" },
      { "label": "Viva Engage" },
      { "label": "Viva Glint" },
      { "label": "Viva Sales" },
      { "label": "Viva Topics" }
    ],
    "grupos": [
      "Exibir a marca da empresa no Teams para que os funcionários acessem notícias, conversas, ferramentas e recursos",
      "Ambiente social para contribuição de conteúdo por meio de comunidades, eventos e conversas",
      "Plataforma para visualizar a integridade da empresa, fornecer insights às pessoas, acompanhar o progresso e o impacto dos comentários e conduzir modelagem preditiva de riscos",
      "Experiência de descoberta de conhecimento que organiza conteúdo e competências para ajudar os funcionários a se conectarem às informações e aos especialistas da empresa",
      "Aplicativo que usa o Microsoft 365 e o Teams para capturar, acessar e registrar dados de clientes em soluções de CRM"
    ],
    "respostas": {
      "Exibir a marca da empresa no Teams para que os funcionários acessem notícias, conversas, ferramentas e recursos": ["Viva Connections"],
      "Ambiente social para contribuição de conteúdo por meio de comunidades, eventos e conversas": ["Viva Engage"],
      "Plataforma para visualizar a integridade da empresa, fornecer insights às pessoas, acompanhar o progresso e o impacto dos comentários e conduzir modelagem preditiva de riscos": ["Viva Glint"],
      "Experiência de descoberta de conhecimento que organiza conteúdo e competências para ajudar os funcionários a se conectarem às informações e aos especialistas da empresa": ["Viva Topics"],
      "Aplicativo que usa o Microsoft 365 e o Teams para capturar, acessar e registrar dados de clientes em soluções de CRM": ["Viva Sales"]
    },
    "explicacao": "Cada aplicativo do Microsoft Viva atende a um pilar da experiência do funcionário. O Viva Connections centraliza a comunicação interna, o Viva Engage oferece um ambiente social corporativo, o Viva Glint analisa o bem-estar organizacional, o Viva Topics organiza conhecimento e o Viva Sales conecta dados de vendas com produtividade no Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/viva/microsoft-viva-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa de distribuição de móveis usa o Microsoft 365. A empresa gostaria de otimizar a interação dos funcionários no Microsoft Teams em toda a empresa.  Você precisa determinar uma solução. Relacione cada requisito com a solução apropriada. Cada solução pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Customer Insights" },
      { "label": "Insights do Viva" },
      { "label": "Insights de engajamento" },
      { "label": "Insights do Supply Chain" }
    ],
    "grupos": [
      "Determinar o número de reuniões nas quais um indivíduo ingressou em tempo hábil e absteve-se de realizar várias tarefas durante a reunião",
      "Capacitar os líderes de negócios a tratar de questões críticas sobre operações da cadeia de fornecedores e incentivar o envolvimento de funcionários por meio da página Resultados no Microsoft Teams"
    ],
    "respostas": {
      "Determinar o número de reuniões nas quais um indivíduo ingressou em tempo hábil e absteve-se de realizar várias tarefas durante a reunião": ["Insights do Viva"],
      "Capacitar os líderes de negócios a tratar de questões críticas sobre operações da cadeia de fornecedores e incentivar o envolvimento de funcionários por meio da página Resultados no Microsoft Teams": ["Insights do Supply Chain"]
    },
    "explicacao": "O Insights do Viva fornece métricas de produtividade e bem-estar digital, como pontualidade em reuniões e foco. Já o Insights do Supply Chain oferece dados críticos para líderes de negócios tomarem decisões baseadas em dados sobre cadeia de suprimentos, com integração ao Teams para comunicação e envolvimento.",
    "link": "https://learn.microsoft.com/pt-br/viva/insights/introduction",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa usa o Microsoft 365. A empresa tem um aplicativo executado em um dispositivo que não tem acesso à Internet. O dispositivo só pode ser atualizado manualmente a cada dois anos.  Você precisa determinar como deve atualizar o dispositivo.  Selecione a resposta que completa a frase corretamente:  Implantar e atualizar o WaaS (Windows como serviço) neste dispositivo usando o: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Canal de Serviço de Longo Prazo",
      "Canal de Serviço Semestral",
      "Canal de Atualizações Dinâmicas",
      "Canal do Microsoft Defender"
    ],
    "resposta": 1,
    "explicacao": "O Canal de Serviço de Longo Prazo (LTSC) é ideal para dispositivos que não têm conectividade com a internet ou exigem atualizações pouco frequentes. Ele fornece suporte estendido e atualizações de segurança por até 10 anos, sendo adequado para cenários como dispositivos embarcados ou ambientes altamente controlados.",
    "link": "https://learn.microsoft.com/pt-br/windows/deployment/update/waas-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está avaliando o Microsoft Viva. Você precisa recomendar os módulos adequados do Microsoft Viva.  Relacione cada módulo ao recurso correspondente. Cada módulo pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Insights" },
      { "label": "Tópicos" },
      { "label": "Conexões" },
      { "label": "Aprendizagem" }
    ],
    "grupos": [
      "Fornece um aplicativo unificado no Microsoft Teams que inclui o Workplace Analytics, MyAnalytics e Glint",
      "Usa IA (inteligência artificial) para identificar o conhecimento e especialistas em uma empresa e os exibe no Microsoft Teams",
      "Fornece colaboração centralizada para usuários usando um aplicativo com a marca da empresa no Microsoft Teams"
    ],
    "respostas": {
      "Fornece um aplicativo unificado no Microsoft Teams que inclui o Workplace Analytics, MyAnalytics e Glint": ["Insights"],
      "Usa IA (inteligência artificial) para identificar o conhecimento e especialistas em uma empresa e os exibe no Microsoft Teams": ["Tópicos"],
      "Fornece colaboração centralizada para usuários usando um aplicativo com a marca da empresa no Microsoft Teams": ["Conexões"]
    },
    "explicacao": "O módulo Viva Insights reúne recursos como Workplace Analytics e MyAnalytics para fornecer insights sobre bem-estar e produtividade. O Viva Tópicos utiliza IA para mapear conhecimento organizacional. O Viva Conexões oferece um hub de comunicação interna com a identidade visual da empresa no Teams.",
    "link": "https://learn.microsoft.com/pt-br/viva/microsoft-viva-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está avaliando serviços de virtualização da Microsoft.  Qual recurso é exclusivo do Windows 365?",
    "opcoes": [
      "Os usuários podem se conectar a uma máquina virtual usando um site.",
      "Uma máquina virtual é automaticamente provisionada após a atribuição de uma licença a um usuário.",
      "Uma máquina virtual pode autenticar usuários no Active Directory Domain Services (AD DS).",
      "Os usuários podem se conectar a uma máquina virtual usando o aplicativo Área de Trabalho Remota da Microsoft.",
      "Uma máquina virtual pode ser provisionada de uma imagem personalizada."
    ],
    "resposta": 1,
    "explicacao": "O recurso exclusivo do Windows 365 é o provisionamento automático de máquinas virtuais com base na atribuição de licença, sem necessidade de intervenção manual ou infraestrutura adicional. Os demais recursos também estão disponíveis em outras soluções de virtualização da Microsoft, como o Azure Virtual Desktop.",
    "link": "https://learn.microsoft.com/pt-br/windows-365/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa descrever os recursos do Microsoft Bookings.  Quais são os dois recursos do Microsoft Bookings? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Fornece notificação por SMS para compromissos.",
      "Usa o Microsoft Teams para reuniões virtuais.",
      "Fornece notificação por chamada telefônica para compromissos.",
      "Usa o Microsoft Viva Engage para reuniões virtuais."
    ],
    "respostas": [0, 1],
    "explicacao": "O Microsoft Bookings oferece notificações por SMS como lembretes de compromissos e integração com o Microsoft Teams para realizar reuniões virtuais com os clientes. Ele não utiliza o Microsoft Viva Engage nem envia chamadas telefônicas como notificação padrão.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/bookings/bookings-overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa pretende implantar fluxos de trabalho automatizados para que os gerentes aprovem.  Você precisa determinar quais produtos do Microsoft 365 permitem acessar fluxos de trabalho pessoais.  Quais são os dois produtos que os gerentes devem usar? Cada resposta correta apresenta uma solução parcial.",
    "opcoes": [
      "Microsoft Teams",
      "Viva Engage",
      "Microsoft Excel",
      "Power Automate"
    ],
    "respostas": [0, 3],
    "explicacao": "O Microsoft Teams permite que os gerentes colaborem e aprovem fluxos de trabalho diretamente em chats e canais. O Power Automate é a principal ferramenta de automação da Microsoft que integra com diversos aplicativos para criar e gerenciar fluxos de trabalho pessoais e corporativos. Viva Engage e Excel não são focados em fluxos de trabalho automatizados.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está investigando o Microsoft 365.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Planner está disponível como um aplicativo no Microsoft Teams.",
      "É possível adicionar tarefas do Microsoft Planner ao calendário do Microsoft Outlook.",
      "O Microsoft Planner pode ser integrado ao Verificador de Horas."
    ],
    "respostas": [true, true, false],
    "explicacao": "O Microsoft Planner está totalmente integrado ao Microsoft Teams como aplicativo de tarefas. Também é possível sincronizar tarefas com o calendário do Outlook. No entanto, o Planner não possui integração direta com o Verificador de Horas, que é um recurso separado e não vinculado nativamente ao Planner.",
    "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/project-online-service-description/microsoft-planner-service-description",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar o Microsoft 365 Apps.  A empresa tem os seguintes requisitos de produtividade:\n- Fornecer comentários sobre a linguagem corporal de um apresentador.\n- Fornecer recomendações sobre ortografia e gramática.  Você precisa recomendar o recurso do Microsoft 365 para cada requisito.",
    "itens": [
      { "label": "Treinador de Discurso" },
      { "label": "Editor Microsoft" },
      { "label": "Pesquisador Microsoft" },
      { "label": "Designer do PowerPoint" }
    ],
    "grupos": [
      "Comentários sobre a linguagem corporal do apresentador",
      "Recomendações sobre ortografia e gramática"
    ],
    "respostas": {
      "Comentários sobre a linguagem corporal do apresentador": ["Treinador de Discurso"],
      "Recomendações sobre ortografia e gramática": ["Editor Microsoft"]
    },
    "explicacao": "O Treinador de Discurso do PowerPoint fornece feedback sobre apresentação, incluindo linguagem corporal, tom de voz e ritmo. O Editor Microsoft é uma ferramenta de revisão que oferece correções e sugestões gramaticais e ortográficas em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/office-365-platform-service-description/office-365-suite-features",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está planejando implantar o Microsoft 365 para uma empresa.  Você precisa determinar quais serviços de nuvem usar.  Relacione cada requisito ao tipo de serviço de nuvem correspondente.",
    "itens": [
      { "label": "IaaS (infraestrutura como serviço)" },
      { "label": "SaaS (software como serviço)" },
      { "label": "WaaS (Windows como serviço)" }
    ],
    "grupos": [
      "Use o Microsoft Outlook na Web",
      "Teste as versões do Microsoft Insider Preview Branch do software Windows",
      "Implante máquinas virtuais rapidamente"
    ],
    "respostas": {
      "Use o Microsoft Outlook na Web": ["SaaS (software como serviço)"],
      "Teste as versões do Microsoft Insider Preview Branch do software Windows": ["WaaS (Windows como serviço)"],
      "Implante máquinas virtuais rapidamente": ["IaaS (infraestrutura como serviço)"]
    },
    "explicacao": "O Microsoft Outlook na Web é um exemplo de SaaS, pois o software é entregue como um serviço. O Windows como Serviço (WaaS) permite atualizações contínuas e testes de versões preview do sistema. Já o IaaS oferece infraestrutura sob demanda para implantar máquinas virtuais rapidamente.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/cloud-services-roadmap-microsoft-365?view=o365-worldwide",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando as políticas de Acesso Condicional do Microsoft Entra. Você precisa determinar quais cenários têm suporte das políticas do Acesso Condicional. Quais são os três cenários que devem ser selecionados?",
    "opcoes": [
      "Funcionalidades de redefinição de senha self-service",
      "Autenticação multifator",
      "Implantação do BitLocker",
      "Acesso bloqueado aos serviços do Microsoft 365 para usuários não verificados",
      "Dispositivo híbrido ingressado no Microsoft Entra"
    ],
    "respostas": [1, 3, 4],
    "explicacao": "O Acesso Condicional do Microsoft Entra pode aplicar políticas com base em autenticação multifator, estado do dispositivo (como ingressado híbrido) e restrições de acesso a serviços para usuários não verificados. Funcionalidades de redefinição de senha e BitLocker não fazem parte diretamente dessas políticas.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/overview",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Microsoft Entra ID. A empresa requer que as solicitações de autenticação de aplicativos cliente que não dão suporte à autenticação moderna sejam bloqueadas.  Você precisa identificar a política que atende ao requisito.  Qual política você deve selecionar?",
    "opcoes": [
      "Risco de entrada",
      "Acesso Condicional",
      "Risco do usuário",
      "Registro com autenticação multifator"
    ],
    "resposta": 1,
    "explicacao": "A política de 'Acesso Condicional' permite bloquear solicitações de aplicativos legados que não suportam autenticação moderna, atendendo ao requisito de segurança da empresa.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/block-legacy-authentication",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada identidade de autenticação ao respectivo cenário. Cada identidade de autenticação pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
    "itens": [
      { "label": "Apenas identidade do Microsoft Entra ID" },
      { "label": "Apenas identidade do Active Directory" },
      { "label": "Identidade do Microsoft Entra ID e identidade do Active Directory" }
    ],
    "grupos": [
      "Usada para fornecer autenticação para serviços do Microsoft 365",
      "Usada para fornecer autenticação para o Exchange Server"
    ],
    "respostas": {
      "Usada para fornecer autenticação para serviços do Microsoft 365": ["Apenas identidade do Microsoft Entra ID"],
      "Usada para fornecer autenticação para o Exchange Server": ["Apenas identidade do Active Directory"]
    },
    "explicacao": "A autenticação baseada apenas no Microsoft Entra ID é usada para acessar serviços modernos, como Microsoft 365. Já o Active Directory local é comumente utilizado para autenticação de serviços locais, como o Exchange Server instalado on-premises.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/overview-authentication",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está avaliando aplicativos de colaboração do Microsoft 365. Você precisa descrever os aplicativos de colaboração. Associe cada aplicativo de colaboração à respectiva descrição. Cada associação correta vale um ponto.",
    "itens": [
      { "label": "Microsoft OneDrive" },
      { "label": "Microsoft Outlook" },
      { "label": "Microsoft Planner" },
      { "label": "Microsoft PowerPoint" }
    ],
    "grupos": [
      "Colocar as tarefas em um quadro para sua equipe.",
      "Trabalhar em conjunto em uma apresentação.",
      "Compartilhar sua agenda com outras pessoas.",
      "Parar de compartilhar um arquivo quando a colaboração for concluída sem excluí-lo."
    ],
    "respostas": {
      "Colocar as tarefas em um quadro para sua equipe.": ["Microsoft Planner"],
      "Trabalhar em conjunto em uma apresentação.": ["Microsoft PowerPoint"],
      "Compartilhar sua agenda com outras pessoas.": ["Microsoft Outlook"],
      "Parar de compartilhar um arquivo quando a colaboração for concluída sem excluí-lo.": ["Microsoft OneDrive"]
    },
    "explicacao": "Microsoft Planner é usado para gerenciar tarefas em equipe. Microsoft PowerPoint permite a colaboração em apresentações. Microsoft Outlook compartilha agendas e compromissos. Microsoft OneDrive oferece controle de compartilhamento de arquivos, inclusive a interrupção da colaboração sem excluir o arquivo.",
    "link": "https://learn.microsoft.com/pt-br/entra/external-id/what-is-b2b",
    "dominio": "Descrever aplicativos e serviços do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando os principais recursos do Microsoft Defender para Office 365. Quais são os dois recursos incluídos? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Proteção anti-phishing",
      "Políticas de proteção contra ameaças",
      "Proteção do Controle de Aplicativos de Acesso Condicional",
      "Detecção e resposta de ponto de extremidade"
    ],
    "respostas": [0, 1],
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1",
    "explicacao": "O Microsoft Defender para Office 365 inclui a proteção anti-phishing, que protege contra tentativas de phishing via e-mail e URLs maliciosas, e políticas de proteção contra ameaças, que fornecem proteção abrangente contra ameaças como malware, phishing e spam. A proteção do Controle de Aplicativos de Acesso Condicional e a detecção e resposta de ponto de extremidade são recursos associados ao Microsoft Defender for Endpoint e ao Azure AD, não diretamente ao Defender para Office 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/office-365-security/overview?view=o365-worldwide"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada identidade de dispositivo ao recurso correto relacionado ao Microsoft Entra ID.",
    "itens": [
      { "label": "Ingressado de forma híbrida no Microsoft Entra" },
      { "label": "Ingressado no Microsoft Entra" },
      { "label": "Registrado no Microsoft Entra" }
    ],
    "grupos": [
      "BYOD (Traga seu próprio dispositivo)",
      "Dispositivo corporativo hospedado na nuvem",
      "Dispositivo gerenciado local"
    ],
    "respostas": {
      "BYOD (Traga seu próprio dispositivo)": ["Registrado no Microsoft Entra"],
      "Dispositivo corporativo hospedado na nuvem": ["Ingressado no Microsoft Entra"],
      "Dispositivo gerenciado local": ["Ingressado de forma híbrida no Microsoft Entra"]
    },
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1",
    "explicacao": "O dispositivo registrado no Microsoft Entra é geralmente associado a dispositivos pessoais (BYOD). O ingresso no Microsoft Entra é para dispositivos corporativos totalmente gerenciados pela nuvem. Já o ingresso híbrido no Microsoft Entra aplica-se a dispositivos gerenciados localmente (on-premises) e integrados à nuvem.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/devices/concept-directory-join"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Os rótulos de confidencialidade podem ser aplicados automaticamente e também podem solicitar que os usuários apliquem um rótulo recomendado.",
      "Os rótulos de confidencialidade podem ser usados para restringir o compartilhamento de informações em sites do SharePoint para usuários externos.",
      "Os rótulos de confidencialidade podem ser usados para gerenciar políticas de acesso condicional para dispositivos não gerenciados."
    ],
    "respostas": [true, true, true],
    "explicacao": "Os rótulos de confidencialidade do Microsoft Purview podem ser configurados para aplicação automática com base em condições predefinidas. Eles também controlam o acesso a conteúdo em SharePoint, OneDrive e Teams, inclusive bloqueando usuários externos, e podem ser usados para aplicar políticas de acesso condicional em dispositivos não gerenciados.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Você é administrador do Microsoft 365 de uma empresa.  Você precisa recuperar as seguintes informações:\n- uma avaliação do status de segurança do seu locatário para uma determinada regulamentação\n- uma lista de relatórios de avaliação e auditoria sobre os serviços de nuvem da Microsoft  Quais são os dois portais que têm essas informações?",
    "opcoes": [
      "Portal do Azure",
      "Portal de Confiança do Serviço",
      "Centro de Administração do SharePoint",
      "Centro de Conformidade"
    ],
    "respostas": [1, 3],
    "explicacao": "O Portal de Confiança do Serviço fornece documentos de auditoria, certificações e relatórios de conformidade. Já o Centro de Conformidade do Microsoft Purview permite avaliar a postura de conformidade do locatário, identificar riscos e gerar relatórios. Ambos são fontes essenciais para avaliação de segurança e auditoria em ambientes Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/microsoft-365-compliance-center?view=o365-worldwide",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender para Aplicativos de Nuvem é integrado ao Gráfico de Segurança Inteligente para gerar alertas do Microsoft Defender para Identidade.",
      "O Microsoft Defender para Aplicativos de Nuvem é integrado ao Secure Score para relatar os recursos de segurança disponíveis que talvez reduzam o risco.",
      "O Microsoft Defender para Aplicativos de Nuvem é integrado ao Microsoft Power BI para automatizar uma resposta quando alertas são disparados."
    ],
    "respostas": [true, true, false],
    "explicacao": "O Microsoft Defender para Aplicativos de Nuvem é realmente integrado ao Gráfico de Segurança da Microsoft, permitindo alertas cruzados com outras soluções como o Microsoft Defender para Identidade. Também se integra ao Microsoft Secure Score para fornecer recomendações e relatórios sobre a postura de segurança. No entanto, não se integra ao Power BI para automatizar respostas. Respostas automatizadas são feitas via políticas internas da própria solução, não pelo Power BI.",
    "link": "https://learn.microsoft.com/pt-br/defender-cloud-apps/what-is-defender-for-cloud-apps",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },

  {
    "tipo": "combobox",
    "texto": "Uma empresa está avaliando os princípios de segurança da Confiança Zero para o Microsoft 365. Você precisa identificar um princípio de segurança de Confiança Zero usado no Microsoft 365. Selecione a resposta que completa corretamente a frase.  Um princípio de segurança da Confiança Zero que usa acesso segmentado para redes, usuários, dispositivos e aplicativos é <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "Pressuposição de violação",
      "Verificação explícita",
      "Acesso com privilégio mínimo",
      "Acesso federado",
      "Controle baseado em dispositivo"
    ],
    "resposta": 3,
    "explicacao": "O princípio da Confiança Zero que usa acesso segmentado é 'Acesso com privilégio mínimo'. Esse conceito assegura que os usuários tenham apenas as permissões estritamente necessárias, limitando o escopo de possíveis violações.",
    "link": "https://learn.microsoft.com/pt-br/security/zero-trust/deploy/overview",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O portal do Gerenciador de Conformidade da Microsoft pode ser usado para criar políticas DLP (prevenção contra perda de dados).",
      "O portal de Confiança do Serviço Microsoft pode ser usado para fornecer relatórios de padrões e conformidade financeira."
    ],
    "respostas": [true, true],
    "explicacao": "O portal do Gerenciador de Conformidade do Microsoft Purview é usado para configurar políticas de DLP. Já o portal de Confiança do Serviço fornece documentos como relatórios de auditoria, certificações de conformidade e detalhes sobre segurança e privacidade.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/microsoft-365-compliance-center",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },

  {
    "tipo": "unica",
    "texto": "Uma empresa precisa proteger os usuários contra URLs e anexos mal-intencionados em emails.  Você precisa selecionar uma solução que atenda ao requisito.  Qual serviço você deve selecionar?",
    "opcoes": [
      "Microsoft Defender para Aplicativos de Nuvem",
      "Microsoft Defender para Ponto de Extremidade",
      "Microsoft Defender para Identidade",
      "Microsoft Defender para Office 365"
    ],
    "resposta": 3,
    "explicacao": "O Microsoft Defender para Office 365 protege os usuários contra ameaças como links maliciosos e anexos infectados em emails, oferecendo proteção avançada para o Exchange Online, SharePoint Online, OneDrive e Microsoft Teams.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/office-365-security/defender-for-office-365?view=o365-worldwide",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Cloud App Security pode ser integrado a várias nuvens.",
      "O Microsoft Cloud App Security pode ser usado para avaliar a conformidade regulamentar de aplicativos de nuvem.",
      "O Microsoft Cloud App Security pode fornecer análises comportamentais e detecção de anomalias."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Cloud App Security, agora Microsoft Defender para Aplicativos em Nuvem, oferece integração com várias nuvens, suporte à avaliação de conformidade de aplicativos SaaS e fornece análises comportamentais e detecção de anomalias com base em atividades dos usuários.",
    "link": "https://learn.microsoft.com/pt-br/defender-cloud-apps/what-is-defender-for-cloud-apps",
    "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa planeja implantar o Microsoft 365. A empresa não implantou nenhum produto da Microsoft. A empresa requer uma USL (assinatura de usuário de complemento) que minimize os custos de licença.  Você precisa identificar a solução de licença a ser usada.  Selecione a resposta que completa corretamente a frase:  A empresa deve usar a: <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "USL Completa",
      "USL Complementar",
      "USL Base",
      "USL de Atualização"
    ],
    "resposta": 1,
    "explicacao": "Para uma empresa que ainda não implantou nenhum produto da Microsoft e deseja minimizar os custos de licença, a opção correta é a USL Completa (A). A USL Completa é destinada a novos clientes que não possuem soluções correspondentes da Microsoft e oferece acesso completo aos serviços do Microsoft 365",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/licenses?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está revisando as USLs (licenças de assinatura de usuário) disponíveis no Microsoft 365.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "As USLs SA são para novos clientes que nunca compraram produtos e serviços da Microsoft.",
      "As USLs completas são para clientes existentes da Microsoft que desejam atualizar um serviço existente do Microsoft 365.",
      "As licenças complementares autônomas têm uma data de expiração diferente das outras assinaturas no Microsoft 365."
    ],
    "respostas": [false, false, true],
    "explicacao": "Não. As USLs SA (Software Assurance) são para clientes que já possuem licenças de software da Microsoft e desejam obter benefícios adicionais, como atualizações e suporte. Não. As USLs completas são destinadas a novos clientes que ainda não possuem soluções correspondentes da Microsoft e oferecem acesso completo aos serviços do Microsoft 365. Sim. As licenças complementares autônomas geralmente seguem o mesmo ciclo de renovação das outras assinaturas no Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/licenses/subscriptions-and-licenses?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está avaliando o licenciamento do Microsoft 365 Business.  Você precisa descrever as opções de assinatura de licença disponíveis.  Quais são as duas opções que você deve descrever? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Por mês",
      "Por trimestre",
      "Por grupo do Microsoft Entra ID",
      "Por ano fiscal",
      "Por usuário"
    ],
    "respostas": [0, 4],
    "explicacao": "O Microsoft 365 Business oferece licenciamento por mês (mensal ou anual com pagamento mensal) e por usuário, ou seja, cada licença é vinculada individualmente a um usuário. As opções 'por trimestre', 'por grupo do Microsoft Entra ID' e 'por ano fiscal' não são formatos oficiais de assinatura do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/licenses/subscriptions-and-licenses?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Você é o administrador do Microsoft 365 em uma empresa.  Um usuário enfrenta um problema com o SharePoint Online.  Você precisa resolver o problema.  Quais são as duas opções que podem ser usadas? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Criar uma nova solicitação de serviço no centro de administração do Microsoft 365.",
      "Entrar em contato com o suporte técnico da Microsoft por telefone.",
      "Acessar o centro de administração do SharePoint e criar uma solicitação de suporte.",
      "Criar uma solicitação de serviço no portal do SharePoint."
    ],
    "respostas": [0, 2],
    "explicacao": "Os administradores podem criar solicitações de suporte diretamente no centro de administração do Microsoft 365, bem como no centro de administração do SharePoint. Essas são as formas oficiais de solicitar suporte técnico. O suporte por telefone não é a forma recomendada inicial, e o portal do SharePoint não é usado para esse tipo de solicitação.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/contact-support-for-business-products",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-1"
  },
  {
    "tipo": "multipla",
    "texto": "Você é o administrador do Microsoft 365 em uma empresa.  Quais são as duas funções de administrador que podem comprar mais licenças? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Administrador global",
      "Administrador de serviços",
      "Administrador de cobrança",
      "Administrador de gerenciamento de usuários"
    ],
    "respostas": [0, 2],
    "explicacao": "No Microsoft 365, o administrador global tem permissões completas em todos os aspectos da assinatura, incluindo a compra de licenças. O administrador de cobrança também tem permissão para comprar e gerenciar assinaturas e faturas. As demais funções, como administrador de serviços ou de gerenciamento de usuários, não têm permissões para efetuar compras.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/add-users/about-admin-roles?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-1"
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
    "explicacao": "O perfil de cobrança permite definir métodos de pagamento, faturas agrupadas e informações do responsável financeiro. Já a fatura de cobrança contém o resumo de encargos periódicos, incluindo valores e impostos aplicáveis. A licença de assinatura é usada para atribuição de serviços aos usuários, não relacionada diretamente à cobrança.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/billing-and-payments/pay-for-your-subscription?view=o365-worldwide",
    "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
    "simulado": "ms-1"
  }
];
