// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado MS-900
// ==========================================

export const questoes = [
    {
        "tipo": "multipla",
        "texto": "Uma empresa usa o Microsoft 365. Os funcionários relatam que suas pesquisas estão falhando no Microsoft Outlook. Você precisa determinar o motivo da falha das pesquisas. Quais são as duas maneiras possíveis de atingir esse objetivo? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Exibir os avisos do Exchange Online no Painel de integridade do serviço.",
            "Exibir a lista de caixas de correio no centro de administração do Exchange.",
            "Enviar uma solicitação de serviço no Assistente de Suporte.",
            "Exibir a atividade de email nos relatórios de uso."
        ],
        "respostas": [0, 2],
        "explicacao": "O painel de integridade do Exchange Online mostra incidentes em andamento que afetam o Outlook, como falhas de pesquisa. Além disso, verificar as caixas de correio no centro de administração do Exchange pode revelar problemas técnicos como armazenamento excedido ou corrupção de dados, que impactam diretamente a busca. As demais opções não são métodos imediatos de diagnóstico.",
        "link": "https://learn.microsoft.com/pt-br/exchange/exchange-admin-center",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa está migrando para o Microsoft 365. A empresa está analisando as opções de conta de cobrança no Microsoft 365. É necessário recomendar opções de uma conta de cobrança. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "A conta de cobrança é criada quando um indivíduo se inscreve diretamente em uma assinatura do Microsoft 365.",
            "A conta de cobrança é criada quando uma empresa assina um contrato de licenciamento por volume para comprar software e serviços online.",
            "A conta de cobrança é criada quando uma organização trabalha com um representante da Microsoft ou parceiro autorizado."
        ],
        "respostas": [true, true, true],
        "explicacao": [
            "Quando um indivíduo se inscreve diretamente em uma assinatura do Microsoft 365, é criada uma conta de cobrança do tipo Microsoft Online Subscription Agreement (MOSA).",
            "Empresas que assinam contratos de licenciamento por volume, como o Microsoft Products and Services Agreement (MPSA), têm contas de cobrança criadas para gerenciar essas aquisições.",
            "Organizações que trabalham com representantes da Microsoft ou parceiros autorizados têm contas de cobrança do tipo Microsoft Customer Agreement (MCA)."
        ],
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/manage-billing-accounts",
        "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa usa o Microsoft 365. Ela deseja criar um bot de chat para integração com o Microsoft Teams. Você precisa recomendar uma solução para criar o bot de chat. Qual solução você deve escolher?",
        "opcoes": [
            "Power Virtual Agents",
            "Dynamics 365 Customer Service",
            "Dynamics 365 Guide",
            "Assistência Remota"
        ],
        "resposta": 0,
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Power Virtual Agents é a solução da Microsoft projetada para criação de bots de chat sem necessidade de código. Ele pode ser facilmente integrado ao Microsoft Teams para permitir interações automatizadas com os usuários, como parte de fluxos de trabalho empresariais.",
        "link": "https://learn.microsoft.com/pt-br/microsoftteams/platform/bots/how-to/add-power-virtual-agents-bot-to-teams"
    },


    {
        "tipo": "simnao",
        "texto": "Você adicionou um comentário a um documento do Word que inclui o símbolo @ e o nome de um usuário. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "A notificação por email que o usuário recebe exibe uma visualização do texto do documento e o comentário associado.",
            "Quando o usuário clica no link do email, o documento é aberto com o comentário no arquivo.",
            "O usuário pode responder ao comentário no documento diretamente do email."
        ],
        "respostas": [true, true, true],
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O e-mail mostra uma prévia do documento com o comentário, o link leva direto ao ponto comentado no arquivo, e é possível responder ao comentário sem sair do e-mail.",
        "link": "https://support.microsoft.com/pt-br/office/utilizar-coment%C3%A1rios-modernos-no-word-edc6ae71-0a2d-49fe-8faa-986f1e48136a"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa determinar as funcionalidades do Microsoft Bookings. Quais são os recursos do Microsoft Bookings? Cada resposta correta apresenta parte da solução.",
        "opcoes": [
            "Usa o Microsoft Teams para reuniões virtuais.",
            "Fornece notificações por SMS para compromissos.",
            "Fornece notificações por chamada telefônica para compromissos.",
            "Usa o Microsoft Viva Engage para reuniões virtuais."
        ],
        "respostas": [0, 1],
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Microsoft Bookings integra-se com o Microsoft Teams para reuniões online e pode enviar notificações por SMS. Não há suporte para chamadas telefônicas nem integração com o Viva Engage para esse fim.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/bookings/bookings-overview"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa planeja implantar o Microsoft 365 Apps. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "O Microsoft 365 Apps pode ser implantado da nuvem.",
            "O Microsoft 365 Apps pode ser implantado de um compartilhamento de rede local.",
            "O Microsoft 365 Apps pode ser implantado usando o Microsoft Endpoint Configuration Manager."
        ],
        "respostas": [true, true, true],
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Microsoft 365 Apps pode ser implantado de três formas principais: diretamente da nuvem, a partir de compartilhamento de rede local com ODT, ou usando o Microsoft Endpoint Configuration Manager.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365-apps/deploy/overview-office-deployment-tool"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando formas de aprimorar sua produtividade usando o Microsoft 365. Você precisa determinar o recurso de produtividade correto. Selecione a resposta que completa a frase corretamente. Pergunta: Uma empresa pode exibir padrões de trabalho de uma equipe, como trabalho regular fora do expediente, usando <combobox>",
        "opcoes": [
            "Selecione uma resposta",
            "Insights pessoais",
            "Informações de reuniões",
            "Insights do líder",
            "Microsoft MyAnalytics"
        ],
        "resposta": 3,
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O recurso 'Insights do líder' do Microsoft Viva permite aos gestores visualizarem padrões de trabalho da equipe, como colaboração fora do expediente e sobrecarga de reuniões.",
        "link": "https://learn.microsoft.com/pt-br/previous-versions/viva/insights/use/viva-insights-intro"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa usa os serviços de nuvem da Microsoft. Você precisa alterar os canais de atualização para o Microsoft 365 Apps para Grandes Empresas usando um método com suporte da Microsoft. Quais são os dois métodos que podem ser usados? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Readiness Toolkit",
            "Aplicativo cliente",
            "Ferramenta de Implantação do Office",
            "Assistente de Atualização do Windows 10",
            "Política de Grupo"
        ],
        "respostas": [2, 4],
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "A Ferramenta de Implantação do Office e a Política de Grupo são métodos com suporte da Microsoft para alterar canais de atualização do Microsoft 365 Apps.",
        "link": "https://learn.microsoft.com/pt-br/deployoffice/updates/overview-update-channels"
    },

    {
        "tipo": "unica",
        "texto": "Uma empresa está desenvolvendo sua estratégia de WaaS (Windows como serviço). A empresa deseja distribuir as atualizações do Windows mais recentes para dispositivos específicos antes de distribuí-las para outros dispositivos. Você precisa recomendar o recurso correto para atender ao requisito. Qual recurso você deve recomendar?",
        "opcoes": [
            "Build do Insider Preview",
            "Anéis de implantação",
            "Canais de manutenção",
            "Política de grupo",
            "Atualizações de pilha de atendimento"
        ],
        "resposta": 1,
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "Anéis de implantação são usados para distribuir atualizações de forma gradual em diferentes grupos de dispositivos, permitindo testes antes de uma implementação geral.",
        "link": "https://learn.microsoft.com/pt-br/windows/deployment/update/waas-deployment-rings-windows-10-updates"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa usa os serviços de nuvem da Microsoft. Você precisa alterar os canais de atualização para o Microsoft 365 Apps para Grandes Empresas usando um método com suporte da Microsoft. Quais são os dois métodos que podem ser usados?",
        "opcoes": [
            "Readiness Toolkit",
            "Aplicativo cliente",
            "Ferramenta de Implantação do Office",
            "Assistente de Atualização do Windows 10",
            "Política de Grupo"
        ],
        "respostas": [2, 4],
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "Os métodos com suporte para alterar os canais de atualização do Microsoft 365 Apps incluem o uso da Ferramenta de Implantação do Office (ODT) e Política de Grupo, conforme documentado pela Microsoft.",
        "link": "https://learn.microsoft.com/pt-br/deployoffice/updates/change-update-channels"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa está avaliando serviços de virtualização. Você precisa determinar a diferença entre o Windows 365 e a Área de Trabalho Virtual do Azure. Qual recurso é exclusivo do Windows 365?",
        "opcoes": [
            "Os administradores podem conectar a máquina virtual a uma rede local",
            "Os usuários podem entrar em uma máquina virtual dedicada",
            "Os administradores podem atribuir usuários ao grupo de administradores locais na máquina virtual",
            "Os administradores podem gerenciar as máquinas virtuais usando o Microsoft Endpoint Manager",
            "Os usuários podem renomear a máquina virtual atribuída a eles"
        ],
        "resposta": 4,
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Windows 365 permite que Os usuários podem renomear a máquina virtual atribuída a eles.",
        "link": "https://learn.microsoft.com/pt-br/windows-365/overview"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está avaliando o Microsoft Viva. Você precisa recomendar os módulos adequados do Microsoft Viva. Qual módulo você deve usar? Para responder, arraste os módulos adequados até os recursos corretos. Cada módulo pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Insights" },
            { "label": "Tópicos" },
            { "label": "Conexões" },
            { "label": "Aprendizagem" }
        ],
        "grupos": [
            "Fornece um aplicativo unificado no Microsoft Teams que inclui o Workplace Analytics, MyAnalytics e Glint.",
            "Usa IA (inteligência artificial) para identificar o conhecimento e especialistas em uma empresa e os exibe no Microsoft Teams.",
            "Fornece colaboração centralizada para usuários usando um aplicativo com a marca da empresa no Microsoft Teams."
        ],
        "respostas": {
            "Fornece um aplicativo unificado no Microsoft Teams que inclui o Workplace Analytics, MyAnalytics e Glint.": ["Insights"],
            "Usa IA (inteligência artificial) para identificar o conhecimento e especialistas em uma empresa e os exibe no Microsoft Teams.": ["Tópicos"],
            "Fornece colaboração centralizada para usuários usando um aplicativo com a marca da empresa no Microsoft Teams.": ["Conexões"]
        },
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Microsoft Viva inclui vários módulos. Viva Insights fornece dados de produtividade e bem-estar baseados em análises, como Workplace Analytics e MyAnalytics. Viva Tópicos utiliza IA para organizar o conhecimento dentro da empresa e exibi-lo no Teams. Viva Conexões é voltado para engajamento dos funcionários e comunicação interna com branding.",
        "link": "https://learn.microsoft.com/pt-br/viva/microsoft-viva-overview"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa recomendar um serviço que atenda aos requisitos da empresa. Selecione a resposta que completa a frase corretamente. Uma empresa pode melhorar o engajamento dos funcionários permitindo que eles criem publicações de usuários e compartilhem arquivos dentro de um grupo de interesses usando o <combobox>",
        "opcoes": [
            "Selecione uma resposta",
            "Microsoft Yammer",
            "Microsoft Teams",
            "Microsoft Viva",
            "Microsoft SharePoint"
        ],
        "resposta": 1,
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Microsoft Yammer é ideal para criar comunidades, fazer postagens e permitir colaboração informal entre os usuários por meio de grupos de interesse. É o serviço mais adequado para promover o engajamento e o compartilhamento de arquivos em um grupo de empresa.",
        "link": "https://learn.microsoft.com/pt-br/power-platform/admin/connect-yammer"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está avaliando aplicativos de colaboração do Microsoft 365. Você precisa descrever os aplicativos de colaboração. Associe cada aplicativo de colaboração à respectiva descrição.",
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
            "Parar de compartilhar um arquivo"
        ],
        "respostas": {
            "Colocar as tarefas em um quadro para sua equipe.": ["Microsoft Planner"],
            "Trabalhar em conjunto em uma apresentação.": ["Microsoft PowerPoint"],
            "Compartilhar sua agenda com outras pessoas.": ["Microsoft Outlook"],
            "Parar de compartilhar um arquivo": ["Microsoft OneDrive"]
        },
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Microsoft Planner é utilizado para gerenciar tarefas em quadros Kanban. O Microsoft PowerPoint permite colaboração em tempo real em apresentações. O Outlook é voltado ao gerenciamento de calendário e e-mails. O OneDrive permite compartilhar e revogar o compartilhamento de arquivos.",
        "link": "https://learn.microsoft.com/pt-br/training/modules/describe-collaboration-solutions-microsoft-365/"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa planeja migrar para o Microsoft 365. A empresa está avaliando os produtos do Microsoft 365 para atender a cada requisito de colaboração. Associe cada requisito de colaboração ao produto apropriado.",
        "itens": [
            { "label": "Viva Engage" },
            { "label": "Microsoft SharePoint" },
            { "label": "Microsoft Power Apps" }
        ],
        "grupos": [
            "Compartilhar notícias e comunicados com usuários no Microsoft Teams e no Microsoft Outlook",
            "Fornecer aos usuários recursos de armazenamento e compartilhamento de arquivos, bem como coautoria de documentos"
        ],
        "respostas": {
            "Compartilhar notícias e comunicados com usuários no Microsoft Teams e no Microsoft Outlook": ["Viva Engage"],
            "Fornecer aos usuários recursos de armazenamento e compartilhamento de arquivos, bem como coautoria de documentos": ["Microsoft SharePoint"]
        },
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Viva Engage é ideal para comunicação interna com publicações semelhantes a redes sociais integradas ao Teams e Outlook. O SharePoint oferece colaboração com coautoria e armazenamento de documentos. O Power Apps não é usado diretamente para esses fins.",
        "link": "https://learn.microsoft.com/pt-br/viva/engage/overview"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa está avaliando os recursos do Microsoft Entra. Você precisa identificar um tipo de entidade de serviço no Microsoft Entra. Qual tipo você pode usar?",
        "opcoes": [
            "Acesso somente ao aplicativo",
            "Acesso denegado",
            "Identidade gerenciada"
        ],
        "resposta": 2,
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "A identidade gerenciada é um tipo de entidade de serviço no Microsoft Entra usada para permitir que serviços acessem outros recursos com segurança sem a necessidade de armazenar segredos ou credenciais manualmente.",
        "link": "https://learn.microsoft.com/pt-br/azure/active-directory/managed-identities-azure-resources/overview"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa planeja implementar o Microsoft 365 para gerenciar projetos e compromissos com clientes. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "O Microsoft Planner pode ser usado para fornecer compromissos personalizados que os clientes podem agendar em um site.",
            "O Microsoft Planner pode ser usado para garantir que os clientes recebam confirmações e lembretes com notificações automáticas de compromissos por email e SMS.",
            "O Microsoft Planner pode ser usado para atribuir e gerenciar tarefas para clientes em um quadro Kanban usando cartões de tarefas."
        ],
        "respostas": [false, false, true],
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1",
        "explicacao": "O Microsoft Planner não é voltado para agendamentos personalizados nem para notificações automáticas por SMS/email — essas são funções do Microsoft Bookings ou Outlook. O Planner é usado para gestão de tarefas visuais em quadros estilo Kanban, permitindo organizar tarefas com cartões.",
        "link": "https://www.microsoft.com/pt-br/microsoft-365/planner/microsoft-planner"
    },
    {
        "tipo": "comboboxs",
        "texto": "Uma empresa planeja mudar do suporte a servidores locais para o uso de serviços do Microsoft 365. Você precisa determinar qual carga de trabalho do Microsoft 365 é apropriada para substituir cada serviço local.",
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
        "simulado": "ms-b1"
    },
    {
        "tipo": "unica",
        "texto": "Qual tipo de modelo de nuvem fornece acesso aos aplicativos do Microsoft Office?",
        "opcoes": [
            "SaaS (software como serviço)",
            "IaaS (infraestrutura como serviço)",
            "PaaS (plataforma como serviço)"
        ],
        "resposta": 0,
        "explicacao": "O Microsoft Office, incluído no Microsoft 365, é fornecido como Software como Serviço (SaaS), permitindo que os usuários acessem e utilizem os aplicativos pela internet sem precisar gerenciar a infraestrutura subjacente.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/microsoft-365-overview?view=o365-worldwide",
        "dominio": "Descrever os conceitos da nuvem",
        "simulado": "ms-b1"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa usa o Microsoft 365. A empresa cancela uma assinatura com um complemento tradicional associado a ela. O complemento tem uma data de validade diferente da assinatura associada. Você precisa determinar o que acontecerá com o complemento. O que acontece com o complemento?",
        "opcoes": [
            "O complemento será automaticamente transferido para outra assinatura ativa.",
            "O complemento permanecerá até ser manualmente cancelado pela empresa.",
            "O complemento permanecerá até a data de validade ser atingida.",
            "O complemento será imediatamente cancelado com a assinatura."
        ],
        "resposta": 3,
        "explicacao": "Existem dois tipos de complementos: Os complementos tradicionais são vinculados a uma assinatura específica. Se você cancelar a assinatura, o complemento associado também será cancelado. Assinaturas de complementos independentes aparecem como uma assinatura separada na página (Seus produtos) e têm sua própria data de validade.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/subscriptions/cancel-your-subscription?view=o365-worldwide",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa assina o Microsoft 365 e usa o Microsoft Entra ID. Os usuários devem usar um computador corporativo e o aplicativo Microsoft Authenticator. A empresa quer proteger os dispositivos dos funcionários quando eles se encontrarem fora do país/região. Você precisa identificar os níveis de acesso condicional que a empresa deve usar. Quais são os dois níveis que você deve identificar? Cada resposta correta apresenta parte da solução.",
        "opcoes": [
            "Localização nomeada",
            "Risco de entrada",
            "Atributos de usuário",
            "Associação de grupo"
        ],
        "respostas": [0, 1],
        "explicacao": "A 'localização nomeada' permite criar políticas com base em localização geográfica (como estar fora do país). Já o 'risco de entrada' é um nível de risco que detecta atividades suspeitas de login, como tentativa de acesso a partir de uma localização incomum. Ambas são ferramentas importantes para aplicar políticas de segurança baseadas em contexto.",
        "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/overview",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa determinar o componente correto a ser protegido. Selecione a resposta que completa a frase corretamente. pergunta: A empresa precisa proteger os telefones e computadores corporativos dos trabalhadores de escritório, que também são conhecidos como <combobox>",
        "opcoes": [
            "Selecione uma resposta",
            "Aplicativos hospedados",
            "Contas de identidade",
            "Recursos de nuvem",
            "Dispositivos de ponto de extremidade"
        ],
        "resposta": 4,
        "explicacao": "Telefones e computadores corporativos usados por funcionários são classificados como 'dispositivos de ponto de extremidade'. Esses dispositivos precisam de proteção contra ameaças, e são gerenciados usando soluções como o Microsoft Defender para Ponto de Extremidade.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint?view=o365-worldwide",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "dragdrop",
        "texto": "Associe cada identidade de autenticação ao respectivo cenário. Cada identidade pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Apenas identidade do Microsoft Entra ID" },
            { "label": "Apenas identidade do Active Directory" },
            { "label": "Identidade do Microsoft Entra ID + identidade do Active Directory" }
        ],
        "grupos": [
            "Usada para fornecer autenticação para serviços do Microsoft 365",
            "Usada para fornecer autenticação para o Exchange Server"
        ],
        "respostas": {
            "Usada para fornecer autenticação para serviços do Microsoft 365": ["Apenas identidade do Microsoft Entra ID"],
            "Usada para fornecer autenticação para o Exchange Server": ["Apenas identidade do Active Directory"]
        },
        "explicacao": "Para acessar serviços em nuvem do Microsoft 365, utiliza-se a identidade do Microsoft Entra ID. Já para recursos locais, como o Exchange Server, é necessário autenticar com o Active Directory local.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/about-microsoft-365-identity?view=o365-worldwide",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa identificar conceitos do uso do princípio de privilégios mínimos. Quais são os dois conceitos que você deve identificar? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Just-enough-access",
            "Autenticação multifator do Microsoft Entra ID",
            "Acesso just-in-time",
            "Bloqueio da autenticação herdada"
        ],
        "respostas": [0, 2],
        "explicacao": "O princípio de privilégios mínimos envolve conceder aos usuários apenas os acessos estritamente necessários, pelo tempo necessário. Os conceitos Just-enough-access e Just-in-time são práticas recomendadas nesse contexto.",
        "link": "https://learn.microsoft.com/pt-br/azure/active-directory/privileged-identity-management/pim-configure",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa usa os serviços de nuvem da Microsoft. A empresa precisa se proteger contra violações de segurança. Você precisa seguir a abordagem de segurança da Microsoft. Qual abordagem você deve usar?",
        "opcoes": [
            "Validará a segurança",
            "Nunca confiará na rede de perímetro",
            "Só confiará na rede de perímetro",
            "Nunca confiará na segurança de aplicativos específicos",
            "Nunca confiará na segurança"
        ],
        "resposta": 1,
        "explicacao": "A abordagem Zero Trust da Microsoft assume que nenhuma rede é confiável, mesmo a interna. Por isso, nunca confiará na rede de perímetro e sempre verificará explicitamente cada solicitação.",
        "link": "https://learn.microsoft.com/pt-br/security/zero-trust/",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "dragdrop",
        "texto": "Associe as ferramentas do Microsoft 365 ao tipo de dispositivo de uso apropriado.",
        "itens": [
            { "label": "Windows Autopilot" },
            { "label": "Windows 365 Business" },
            { "label": "Windows 365 Enterprise" },
            { "label": "Programa Windows Insider" },
            { "label": "ICD (Designer de Configuração e Imagens do Windows)" }
        ],
        "grupos": [
            "Vendas",
            "Quiosque"
        ],
        "respostas": {
            "Vendas": ["Windows Autopilot"],
            "Quiosque": ["ICD (Designer de Configuração e Imagens do Windows)"]
        },
        "explicacao": "Windows 365 Business é adequado para vendedores que precisam de acesso remoto a PCs virtuais, enquanto o Windows Autopilot facilita a configuração automatizada de dispositivos em ambientes como quiosques. Os outros itens não foram associados na imagem.",
        "link": "https://learn.microsoft.com/pt-br/windows/deployment/windows-autopilot/windows-autopilot",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "simnao",
        "texto": "O modelo CSP (Provedor de Soluções na Nuvem) de cobrança direta permite que os clientes comprem licenças e recebam suporte da organização parceira.",
        "afirmacoes": [
            "O modelo CSP (Provedor de Soluções na Nuvem) de cobrança direta permite que os clientes comprem licenças diretamente da Microsoft.",
            "O modelo CSP (Provedor de Soluções na Nuvem) de cobrança direta permite um único ponto de contato organizacional para suporte técnico.",
            "O modelo CSP (Provedor de Soluções na Nuvem) de cobrança direta permite um único ponto de contato organizacional para cobrança."
        ],
        "respostas": [false, true, true],
        "explicacao": "No modelo CSP de cobrança direta, os clientes não compram diretamente da Microsoft, mas sim de um parceiro. Este parceiro é o ponto de contato para cobrança e suporte técnico, centralizando o relacionamento com o cliente.",
        "link": "https://learn.microsoft.com/pt-br/partner-center/customers/indirect-provider-tasks-in-partner-center",
        "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa determinar as funcionalidades do Microsoft Viva Insights. Quais são dois dos recursos do Insights do Microsoft Viva? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Acompanhamento de aprendizado recomendado concluído atribuído à equipe de um gerente.",
            "Um painel que usa cartões dinâmicos que podem agregar dados de um site do SharePoint.",
            "Um painel que recomenda fazer pausas regulares durante o dia.",
            "Informações de padrão geral de trabalho sobre a equipe de um gerente."
        ],
        "respostas": [2, 3],
        "explicacao": "O Microsoft Viva Insights inclui um painel pessoal com recomendações como pausas e foco, e um painel de gerente com dados agregados sobre hábitos da equipe. As opções sobre aprendizado e SharePoint não fazem parte dos recursos de Insights.",
        "link": "https://support.microsoft.com/pt-br/topic/informa%C3%A7%C3%B5es-pessoais-no-viva-insights-1d501790-479b-44f4-9876-97538869fc73",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa pretende implantar o Microsoft 365. Associe cada solução de colaboração à respectiva descrição. Para responder, arraste a solução de colaboração apropriada da coluna à esquerda até a respectiva descrição à direita. Cada solução de colaboração pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
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
        "explicacao": "Microsoft Forms é usado para criar pesquisas com respostas em tempo real, enquanto o Microsoft Planner é ideal para planejamento e rastreamento de tarefas. Microsoft Entra ID P2 está relacionado à governança de identidade, e Delve à descoberta de conteúdo — não são soluções de colaboração direta.",
        "link": "https://support.microsoft.com/pt-br/office/treinamento-em-v%C3%ADdeo-do-microsoft-planner-4d71390f-08d8-4db0-84ea-92fb078687c7",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa usa os serviços de nuvem da Microsoft. Você precisa alterar os canais de atualização para o Microsoft 365 Apps para Grandes Empresas usando um método com suporte da Microsoft. Quais são os dois métodos que podem ser usados? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Readiness Toolkit",
            "Política de Grupo",
            "Aplicativo cliente",
            "Ferramenta de Implantação do Office",
            "Assistente de Atualização do Windows 10"
        ],
        "respostas": [1, 3],
        "explicacao": "A Política de Grupo e a Ferramenta de Implantação do Office são os dois métodos com suporte da Microsoft para alterar canais de atualização do Microsoft 365 Apps para Grandes Empresas. As demais opções não são utilizadas para essa finalidade.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365-apps/updates/configure-update-settings-microsoft-365-apps",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando formas de aprimorar sua produtividade usando o Microsoft 365. Você precisa determinar o recurso de produtividade correto. Selecione a resposta que completa a frase corretamente. Uma empresa pode exibir padrões de trabalho de uma equipe, como trabalho regular fora do expediente, usando: <combobox>",
        "opcoes": [
            "Selecione uma resposta",
            "Insights do gerente",
            "Insights pessoais",
            "Insights do aplicativo",
            "Insights do líder",
            "Customer Insights"
        ],
        "resposta": 1,
        "explicacao": "O recurso 'Insights do gerente' do Viva Insights fornece visibilidade sobre padrões de trabalho da equipe, como excesso de trabalho fora do expediente, sobrecarga de reuniões e colaboração cruzada, permitindo ações baseadas em dados.",
        "link": "https://learn.microsoft.com/pt-br/viva/insights/org-team-insights/org-insights",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está avaliando soluções de colaboração do Microsoft 365. Você precisa descrever os recursos de diversas soluções do Microsoft Viva. Faça a correspondência de cada aplicativo do Microsoft Viva e sua descrição. Para responder, arraste o aplicativo do Microsoft Viva adequado da coluna à esquerda para a respectiva descrição à direita. Cada aplicativo do Microsoft Viva pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Viva Goals" },
            { "label": "Viva Engage" },
            { "label": "Insights do Viva" },
            { "label": "Conexões do Viva" }
        ],
        "grupos": [
            "Um aplicativo do Microsoft Teams que fornece um news feed, um painel e recursos personalizados para um funcionário.",
            "Um aplicativo do Microsoft Teams que usa o Yammer e fornece acesso às comunidades onde os funcionários podem compartilhar histórias e interagir com outros colegas.",
            "Um aplicativo ou site do Microsoft Teams e um suplemento do Microsoft Outlook que fornece informações sobre o padrão de trabalho da equipe."
        ],
        "respostas": {
            "Um aplicativo do Microsoft Teams que fornece um news feed, um painel e recursos personalizados para um funcionário.": ["Conexões do Viva"],
            "Um aplicativo do Microsoft Teams que usa o Yammer e fornece acesso às comunidades onde os funcionários podem compartilhar histórias e interagir com outros colegas.": ["Viva Engage"],
            "Um aplicativo ou site do Microsoft Teams e um suplemento do Microsoft Outlook que fornece informações sobre o padrão de trabalho da equipe.": ["Insights do Viva"]
        },
        "explicacao": "Viva Conexões oferece um painel e recursos internos para engajar os funcionários. Viva Engage usa Yammer para promover comunidades e interação. Viva Insights fornece dados de produtividade, padrão de trabalho e bem-estar da equipe.",
        "link": "https://learn.microsoft.com/pt-br/viva/microsoft-viva-overview",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa determinar as funcionalidades do Microsoft Viva Insights. Quais são dois recursos do Insights do Microsoft Viva? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Acompanhamento de aprendizado recomendado concluído atribuído à equipe de um gerente.",
            "Um painel que usa cartões dinâmicos que podem agregar dados de um site do SharePoint.",
            "Um painel que recomenda fazer pausas regulares durante o dia.",
            "Informações de padrão geral de trabalho sobre a equipe de um gerente."
        ],
        "respostas": [2, 3],
        "explicacao": "O Viva Insights fornece recomendações de bem-estar como pausas regulares e também painéis com padrões de trabalho das equipes para ajudar os gerentes a promoverem equilíbrio e produtividade. Os itens A e B pertencem a outros recursos do Microsoft Viva, como Learning e Conexões.",
        "link": "https://learn.microsoft.com/pt-br/viva/insights/",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está migrando para o Microsoft 365. A empresa está analisando as opções de conta de cobrança no Microsoft 365. É necessário recomendar opções de uma conta de cobrança. Qual tipo de conta de cobrança você deve recomendar? Para responder, arraste as contas de cobrança adequadas até o cenário correto. Cada conta de cobrança pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Programa Microsoft Online Services" },
            { "label": "Programa MPSA (Microsoft Products and Services Agreement)" },
            { "label": "Contrato de Cliente da Microsoft" },
            { "label": "Programa CSP (Provedor de Soluções na Nuvem da Microsoft)" }
        ],
        "grupos": [
            "A conta de cobrança é criada quando um indivíduo se inscreve diretamente em uma assinatura do Microsoft 365.",
            "A conta de cobrança é criada quando uma empresa assina um contrato de licenciamento por volume para comprar software e serviços online."
        ],
        "respostas": {
            "A conta de cobrança é criada quando um indivíduo se inscreve diretamente em uma assinatura do Microsoft 365.": ["Contrato de Cliente da Microsoft"],
            "A conta de cobrança é criada quando uma empresa assina um contrato de licenciamento por volume para comprar software e serviços online.": ["Programa MPSA (Microsoft Products and Services Agreement)"]
        },
        "explicacao": "O 'Contrato de Cliente da Microsoft' é adequado para inscrições diretas por indivíduos. O 'Programa MPSA' é voltado para licenciamento por volume, atendendo empresas que compram software e serviços online em escala.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/commerce/?view=o365-worldwide",
        "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa está avaliando as funcionalidades do Windows 365 e da Área de Trabalho Virtual do Azure. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "Os usuários devem ter uma licença do Microsoft Intune para utilizar o Windows 365.",
            "O Windows 365 usa um sistema operacional Windows para multiusuários.",
            "A Área de Trabalho Virtual do Azure usa um contêiner do FSLogix para armazenar dados de perfil do usuário."
        ],
        "respostas": [false, false, true],
        "explicacao": "O Microsoft Intune é opcional para gerenciar dispositivos no Windows 365, mas não obrigatório. O Windows 365 usa sistemas operacionais para usuário único, não multiusuário. A Área de Trabalho Virtual do Azure utiliza contêineres FSLogix para otimizar e armazenar perfis de usuário.",
        "link": "https://learn.microsoft.com/pt-br/azure/virtual-desktop/fslogix-profile-containers",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa implanta aplicativos do Serviço de Aplicativo do Azure no Azure. Os usuários se autenticam nos aplicativos usando o SSO (logon único). A empresa exige acesso aos aplicativos dos seguintes tipos de dispositivos:\n- Dispositivos pessoais que não exigem uma conta da organização para entrar no dispositivo.\n- Dispositivos da empresa no Active Directory local automaticamente provisionados no Microsoft Entra ID. Você precisa identificar como os dispositivos serão provisionados no Microsoft Entra ID até os requisitos corretos. Cada identidade de dispositivo do Microsoft Entra ID pode ser usada uma vez.",
        "itens": [
            { "label": "Dispositivo ingressado no Microsoft Entra" },
            { "label": "Dispositivo registrado no Microsoft Entra" },
            { "label": "Dispositivo híbrido ingressado no Microsoft Entra" }
        ],
        "grupos": [
            "Dispositivos pessoais",
            "Dispositivos da empresa"
        ],
        "respostas": {
            "Dispositivos pessoais": ["Dispositivo registrado no Microsoft Entra"],
            "Dispositivos da empresa": ["Dispositivo híbrido ingressado no Microsoft Entra"]
        },
        "explicacao": "Dispositivos pessoais normalmente são registrados manualmente no Microsoft Entra (registrado). Já dispositivos corporativos unidos ao Active Directory são automaticamente provisionados como dispositivos híbridos ingressados no Entra.",
        "link": "https://learn.microsoft.com/pt-br/entra/identity/devices/device-identity",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando o Microsoft 365. Você precisa determinar o componente correto a ser protegido. Selecione a resposta que completa a frase corretamente. A empresa precisa garantir a segurança dos telefones e computadores corporativos dos funcionários da recepção, que também são conhecidos como <combobox>",
        "opcoes": [
            "Selecione uma resposta",
            "Pontos de extremidade",
            "Dispositivos de gateway",
            "Hosts virtuais",
            "Dispositivos de autenticação"
        ],
        "resposta": 1,
        "explicacao": "No contexto da segurança do Microsoft 365, dispositivos como computadores e smartphones usados por trabalhadores são classificados como 'pontos de extremidade'. Proteger esses dispositivos é essencial para manter a integridade e a segurança da organização.",
        "link": "https://learn.microsoft.com/pt-br/defender-endpoint/microsoft-defender-endpoint",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "ms-b1"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa está avaliando soluções de segurança no Microsoft 365. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "O Microsoft Defender para Ponto de Extremidade pode bloquear malwares em dispositivos com sistema Windows.",
            "O Microsoft Defender para Office 365 é uma solução que pode detectar emails maliciosos.",
            "O Microsoft Defender para Ponto de Extremidade é uma solução apenas disponível para dispositivos com Windows 10."
        ],
        "respostas": [true, true, false],
        "explicacao": "O Microsoft Defender para Ponto de Extremidade oferece proteção avançada contra ameaças, incluindo bloqueio de malware. O Defender para Office 365 protege contra ameaças em emails. No entanto, o Defender para Ponto de Extremidade não é exclusivo para Windows 10 — ele também oferece suporte a outras plataformas, como macOS, Android e iOS.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "ms-b1"
    }
];
