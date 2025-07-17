// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado MS-900
// ==========================================

export const questoes = [
    {
        "tipo": "comboboxs",
        "texto": "Uma empresa está investigando soluções de proteção contra ameaças do Microsoft 365.  Você precisa identificar os serviços fornecidos pelo Microsoft Defender. Quais serviços você deve identificar? Para responder, selecione as opções apropriadas na área de resposta.",
        "pares": [
            {
                "requisito": "Uma plataforma que coleta telemetria comportamental, incluindo informações de processo, kernel, memória e registro: <comboboxs>",
                "opcoes": [
                    "Microsoft Defender para Endpoint",
                    "Microsoft Defender para Office 365",
                    "Microsoft Defender para Identidade",
                    "Microsoft Defender para Aplicativos em Nuvem"
                ],
                "resposta": 0
            },
            {
                "requisito": "Uma plataforma que inclui proteção antimalware, antispam e antiphishing: <comboboxs>",
                "opcoes": [
                    "Microsoft Defender para Endpoint",
                    "Microsoft Defender para Office 365",
                    "Microsoft Defender para Identidade",
                    "Microsoft Defender para Aplicativos em Nuvem"
                ],
                "resposta": 1
            },
            {
                "requisito": "Uma plataforma que detecta, investiga ameaças avançadas usando sinais correlacionados do Active Directory: <comboboxs>",
                "opcoes": [
                    "Microsoft Defender para Endpoint",
                    "Microsoft Defender para Office 365",
                    "Microsoft Defender para Identidade",
                    "Microsoft Defender para Aplicativos em Nuvem"
                ],
                "resposta": 2
            },
            {
                "requisito": "Uma plataforma que aplica políticas de acesso condicional, analisa o registro de tráfego e telemetria de APIs para softwares hospedados por terceiros: <comboboxs>",
                "opcoes": [
                    "Microsoft Defender para Endpoint",
                    "Microsoft Defender para Office 365",
                    "Microsoft Defender para Identidade",
                    "Microsoft Defender para Aplicativos em Nuvem"
                ],
                "resposta": 3
            }
        ],
        "explicacao": "O Microsoft Defender possui soluções específicas para cada tipo de proteção: Endpoint protege dispositivos; Office 365 protege e-mails contra phishing e malware; Identidade protege contra ameaças ao Active Directory; e Aplicativos em Nuvem aplica políticas de segurança em apps SaaS como Salesforce, Google Workspace e outros.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/security/defender/microsoft-365-defender?view=o365-worldwide",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa está avaliando Microsoft 365. Seu plano é implementar a autenticação multifator.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "Depois que um usuário fizer inscrição na autenticação multifator, ele deverá configurar um segundo fator de autenticação na próxima vez que entrar.",
            "Habilitar a autenticação multifator exige a compra de uma assinatura adicional.",
            "Contas na autenticação multifator usando mensagens de texto, um aplicativo de smartphone ou um telefonema."
        ],
        "respostas": [true, false, true],
        "explicacao": "A autenticação multifator do Microsoft Entra ID (antigo Azure AD) está incluída em planos gratuitos e pagos, portanto não exige compra adicional. Após a inscrição, o usuário deve configurar um segundo fator. Métodos comuns incluem chamadas telefônicas, aplicativos autenticadores e mensagens de texto.",
        "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-mfa-howitworks",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa está avaliando o Microsoft 365.  Você precisa identificar conceitos do uso do princípio de privilégios mínimos.  Quais são os dois conceitos que você deve identificar? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Acesso just-in-time",
            "Bloqueio da autenticação herdada",
            "Just-enough-access",
            "Autenticação multifator do Microsoft Entra ID"
        ],
        "respostas": [0, 2],
        "explicacao": "Os conceitos de 'Acesso just-in-time' e 'Just-enough-access' estão diretamente relacionados ao princípio de privilégios mínimos, que visa conceder aos usuários apenas os acessos necessários, pelo tempo necessário. Já 'Autenticação multifator' e 'Bloqueio da autenticação herdada' são medidas de segurança, mas não se enquadram como conceitos de privilégio mínimo.",
        "link": "https://learn.microsoft.com/pt-br/security/zero-trust/deploy/identity",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa está avaliando o uso do Microsoft Sentinel para gerenciar ameaças em sua infraestrutura de nuvem.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "O Microsoft Sentinel só permite pastas de trabalho internas.",
            "O Microsoft Sentinel só permite regras de correlação internas.",
            "O Microsoft Sentinel se integra aos Aplicativos Lógicos do Azure."
        ],
        "respostas": [false, false, true],
        "explicacao": "O Microsoft Sentinel permite o uso de pastas de trabalho e regras de correlação personalizadas **e externas**, como também a criação e modificação por meio de modelos. Além disso, ele se integra a outros serviços do Azure, como **Aplicativos Lógicos do Azure**, facilitando automações de resposta.",
        "link": "https://learn.microsoft.com/pt-br/azure/sentinel/data-connectors/azure-logic-apps",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "multipla",
        "texto": "Uma empresa compra uma assinatura do Microsoft 365 de forma direta.  A empresa está avaliando várias opções de suporte que não têm custos adicionais para os serviços do Microsoft 365.  Você precisa identificar quais opções de suporte são fornecidas sem custo adicional.  Quais são as duas opções que você deve identificar? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Fóruns de perguntas e respostas e ajuda online",
            "Suporte Professional Direct para o Microsoft 365",
            "Solicitação de suporte do centro de administração do Microsoft 365",
            "Suporte Unificado da Microsoft"
        ],
        "respostas": [0, 2],
        "explicacao": "O Microsoft 365 oferece suporte gratuito por meio de fóruns de perguntas e respostas e também permite solicitações de suporte diretamente pelo centro de administração. Já o Suporte Professional Direct e o Suporte Unificado são opções pagas e não estão incluídas em planos básicos.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/contact-support-for-business-products",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa usa o Microsoft 365.  A empresa está avaliando quais políticas de segurança de Confiança Zero deve implementar.  Qual princípio de segurança da Confiança Zero você deve recomendar? Para responder, arraste os princípios adequados até os requisitos corretos. Cada princípio pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Verificação explícita" },
            { "label": "Acesso com privilégios mínimos" },
            { "label": "Presunção de violação" },
            { "label": "Proteção contra ameaças" }
        ],
        "grupos": [
            "Monitorar todas as solicitações de acesso para confirmar o contexto de cada solicitação de acesso.",
            "Conceder aos usuários somente as permissões de ambiente e dispositivo necessárias para atender às metas de negócios exigidas.",
            "Monitorar, analisar e automatizar a resposta a incidentes de segurança."
        ],
        "respostas": {
            "Monitorar todas as solicitações de acesso para confirmar o contexto de cada solicitação de acesso.": ["Verificação explícita"],
            "Conceder aos usuários somente as permissões de ambiente e dispositivo necessárias para atender às metas de negócios exigidas.": ["Acesso com privilégios mínimos"],
            "Monitorar, analisar e automatizar a resposta a incidentes de segurança.": ["Proteção contra ameaças"]
        },
        "explicacao": "Os três pilares do modelo de Confiança Zero são: verificação explícita (validar continuamente identidades e contextos), acesso com privilégios mínimos (dar apenas o necessário) e proteção contra ameaças (resposta e automação).",
        "link": "https://learn.microsoft.com/pt-br/security/zero-trust/zero-trust-overview",
        "dominio": "Descrever os conceitos da nuvem",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa usa o Microsoft 365.  Você precisa identificar o portal que os usuários devem usar para instalar aplicativos do Office.  O que você deve identificar?",
        "opcoes": [
            "Centro de Serviços de Licenciamento por Volume da Microsoft",
            "Portal do Usuário do Microsoft 365",
            "Centro de Administração do Microsoft 365",
            "Portal do Azure"
        ],
        "resposta": 1,
        "explicacao": "Os usuários devem acessar o Portal do Usuário do Microsoft 365 (portal.office.com) para baixar e instalar os aplicativos do Office. Esse portal fornece acesso às instalações pessoais do Microsoft 365.",
        "link": "https://support.microsoft.com/pt-br/office/baixar-e-instalar-ou-reinstalar-o-microsoft-365-ou-o-office-2021-em-um-pc-ou-mac-4414eaaf-0478-48be-9c42-23adc4716658",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa pretende implantar o Microsoft 365.  Associe cada solução de colaboração à respectiva descrição. Para responder, arraste a solução de colaboração apropriada da coluna à esquerda até a respectiva descrição à direita. Cada solução de colaboração pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
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
        "explicacao": "Microsoft Forms é usado para criar pesquisas online com visualização de resultados em tempo real. Microsoft Planner é utilizado para planejar e acompanhar tarefas em equipe com quadros tipo Kanban. Os itens Microsoft Entra ID P2 e Delve não são soluções de colaboração direta.",
        "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/project-online-service-description/microsoft-planner-service-description",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "multipla",
        "texto": "Os funcionários de uma empresa estão colaborando em um projeto.  O gerente do projeto relata interrupções frequentes por parte de membros da equipe que solicitam atualizações do projeto. O gerente deseja que os membros da equipe sejam capazes de criar e revisar atualizações de projeto.  Você precisa recomendar uma solução de colaboração que permita que a equipe acompanhe tarefas individuais e o andamento geral do projeto.  Quais são os dois aplicativos de gerenciamento de trabalho que você deve recomendar?",
        "opcoes": [
            "Microsoft Planner",
            "Listas da Microsoft",
            "Microsoft Bookings",
            "Microsoft Outlook"
        ],
        "respostas": [0, 1],
        "explicacao": "Microsoft Planner permite gerenciar tarefas visuais com atribuições e status. Listas da Microsoft oferece rastreamento estruturado de informações em projetos. Bookings é voltado para agendamentos com clientes, e Outlook é uma ferramenta de comunicação, não de gerenciamento de trabalho.",
        "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/project-online-service-description/microsoft-planner-service-description",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando as soluções de proteção contra ameaças do Microsoft 365. A solução deve atender aos seguintes requisitos: - Agir como um gatekeeper entre os aplicativos hospedados e o usuário final. - Funcionar independentemente da localização do usuário final. - Funcionar independentemente do dispositivo do usuário final. Qual solução você deve implantar? Selecione a resposta que completa a frase corretamente. Você precisa implantar o <combobox>",
        "opcoes": [           
            "Microsoft Defender para Ponto de Extremidade",
            "Microsoft Defender para Office 365",
            "Microsoft Defender para Aplicativos em Nuvem",
            "Microsoft Defender para Identidade"
        ],
        "resposta": 2,
        "explicacao": "O Microsoft Defender para Aplicativos em Nuvem atua como gatekeeper entre usuários e aplicativos em nuvem, controlando acesso, aplicando políticas e protegendo contra ameaças, mesmo que os usuários estejam fora da rede corporativa ou usando dispositivos pessoais.",
        "link": "https://learn.microsoft.com/pt-br/defender-cloud-apps/what-is-defender-for-cloud-apps",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "simnao",
        "texto": "Uma empresa está investigando os SLAs (contratos de nível de serviço) oferecidos pelo Microsoft 365.  Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "afirmacoes": [
            "O SLA assume o compromisso de oferecer 100% de tempo de atividade e entrega de email.",
            "Todo aplicativo do Microsoft 365 tem um compromisso de SLA individual.",
            "A Microsoft oferece um crédito de serviço caso o SLA não seja cumprido."
        ],
        "respostas": [false, false, true],
        "explicacao": "A Microsoft não garante 100% de tempo de atividade; o SLA para os serviços online do Microsoft 365 normalmente é de 99,9%. Além disso, o SLA é fornecido para os serviços principais, não para cada aplicativo individual. A Microsoft concede créditos de serviço se o SLA acordado não for atendido.",
        "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/office-365-platform-service-description/service-level-agreement",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa que usa o Microsoft 365 planeja implantar atualizações em computadores.  Você precisa escolher o canal de atualização apropriado com base em cada requisito.  Qual canal de atualização você deve usar para cada requisito? Para responder, arraste os canais de atualização apropriados até os requisitos corretos. Cada canal de atualização pode ser usado uma vez, mais de uma vez ou não ser usado.",
        "itens": [
            { "label": "Atual" },
            { "label": "Empresarial Mensal" },
            { "label": "Empresarial Semestral" }
        ],
        "grupos": [
            "Fornece os recursos mais recentes assim que eles ficam prontos",
            "Fornece as atualizações de recursos mais recentes de acordo com um cronograma",
            "Fornece mais tempo para testar atualizações de recursos"
        ],
        "respostas": {
            "Fornece os recursos mais recentes assim que eles ficam prontos": ["Atual"],
            "Fornece as atualizações de recursos mais recentes de acordo com um cronograma": ["Empresarial Mensal"],
            "Fornece mais tempo para testar atualizações de recursos": ["Empresarial Semestral"]
        },
        "explicacao": "O canal Atual entrega atualizações assim que estão prontas. O canal Empresarial Mensal segue um cronograma fixo mensal, enquanto o canal Empresarial Semestral oferece mais tempo de teste antes da implantação.",
        "link": "https://learn.microsoft.com/pt-br/deployoffice/updates/overview-update-channels",
        "dominio": "Descrever a segurança, a conformidade, a privacidade e a confiança no Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "CompanyA, CompanyB e CompanyC usam recursos de nuvem, como mostrado na tabela a seguir.  <table border='1' style='border-collapse: collapse; width: 100%;'>\n  <tr>\n    <th>Empresa</th>\n    <th>Cenário de nuvem</th>\n  </tr>\n  <tr>\n    <td>CompanyA</td>\n    <td>Recursos de computação são executados apenas por essa empresa.</td>\n  </tr>\n  <tr>\n    <td>CompanyB</td>\n    <td>Recursos de computação são executados em sistemas usados por várias empresas.</td>\n  </tr>\n  <tr>\n    <td>CompanyC</td>\n    <td>Recursos de nuvem são integrados a um servidor local do Exchange.</td>\n  </tr>\n</table><br>Relacione cada modelo de nuvem à empresa apropriada. Para responder, arraste o modelo de nuvem da coluna à esquerda para a empresa correta à direita.",
        "itens": [
            { "label": "Privada" },
            { "label": "Pública" },
            { "label": "Híbrida" }
        ],
        "grupos": [
            "CompanyA",
            "CompanyB",
            "CompanyC"
        ],
        "respostas": {
            "CompanyA": ["Privada"],
            "CompanyB": ["Pública"],
            "CompanyC": ["Híbrida"]
        },
        "explicacao": "CompanyA usa recursos exclusivos para a própria organização, caracterizando a nuvem privada. CompanyB compartilha recursos com outras organizações, o que indica nuvem pública. CompanyC utiliza recursos de nuvem integrados a infraestrutura local, típico de nuvem híbrida.",
        "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/migrate/",
        "dominio": "Descrever os conceitos da nuvem",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "multipla",
        "texto": "Os funcionários de uma empresa estão colaborando em um projeto. O gerente do projeto relata interrupções frequentes por parte de membros da equipe que solicitam atualizações do projeto. O gerente de projeto deseja que os membros da equipe sejam capazes de criar e revisar atualizações de projeto.  Você precisa recomendar uma solução de colaboração que permita que a equipe acompanhe tarefas individuais e o andamento geral do projeto.  Quais são os dois aplicativos de gerenciamento de trabalho que você deve recomendar? Cada resposta correta apresenta uma solução completa.",
        "opcoes": [
            "Microsoft Outlook",
            "Microsoft Bookings",
            "Microsoft Planner",
            "Listas da Microsoft"
        ],
        "respostas": [2, 3],
        "explicacao": "O Microsoft Planner é ideal para planejamento e rastreamento visual de tarefas em equipe, enquanto o Listas da Microsoft permite organizar, acompanhar e gerenciar informações estruturadas em colaboração com o time. Outlook e Bookings não são adequados para esse cenário.",
        "link": "https://support.microsoft.com/pt-br/office/treinamento-em-v%C3%ADdeo-do-microsoft-planner-4d71390f-08d8-4db0-84ea-92fb078687c7",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "combobox",
        "texto": "Uma empresa está avaliando os Aplicativos do Microsoft 365. Você precisa descrever as funcionalidades nos Aplicativos do Microsoft 365.  Selecione a resposta que completa a frase corretamente. Um arquivo do Microsoft 365 Apps pode ser publicado diretamente no Microsoft Stream usando a opção de exportar em <combobox>",
        "opcoes": [            
            "Microsoft PowerPoint",
            "Microsoft Word",
            "Microsoft Excel",
            "Microsoft Outlook"
        ],
        "resposta": 0,
        "explicacao": "O Microsoft PowerPoint permite publicar diretamente vídeos gravados no Microsoft Stream por meio da opção de exportação. Os demais aplicativos do Office não possuem essa funcionalidade integrada.",
        "link": "https://learn.microsoft.com/pt-br/stream/streamnew/migration-settings",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está avaliando o Microsoft 365.  Você precisa descrever os recursos de portais da Microsoft.  Qual portal da Web você deve identificar? Para responder, arraste o portal da Web apropriado até o recurso correto. Cada portal da Web pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Portal do usuário do Microsoft 365" },
            { "label": "Centro de administração do Microsoft 365" },
            { "label": "Centro de Serviços de Licenciamento por Volume da Microsoft" }
        ],
        "grupos": [
            "Instalar aplicativos do Microsoft 365",
            "Adicionar e remover licenças de usuário",
            "Exibir relatórios de uso do Microsoft 365"
        ],
        "respostas": {
            "Instalar aplicativos do Microsoft 365": ["Portal do usuário do Microsoft 365"],
            "Adicionar e remover licenças de usuário": ["Centro de Serviços de Licenciamento por Volume da Microsoft"],
            "Exibir relatórios de uso do Microsoft 365": ["Centro de administração do Microsoft 365"]
        },
        "explicacao": "O Portal do usuário do Microsoft 365 permite instalar aplicativos. A adição de licenças é feita no Centro de Serviços de Licenciamento por Volume. O Centro de administração exibe relatórios e configurações administrativas.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/admin/admin-overview/admin-center-overview",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa implanta um Serviço de Aplicativo do Azure chamado App1.  A empresa tem os seguintes requisitos para aplicativos em App1:  - Os aplicativos devem usar a mesma identidade para acessar o Armazenamento do Azure.\n- Os usuários fora da empresa devem ser capazes de acessar os aplicativos usando a identidade de mídia social.  Você precisa identificar as soluções de identidade do Microsoft Entra ID.  O que você deve usar? Para responder, arraste a solução de identidade apropriada até o requisito correto. Cada solução de identidade pode ser usada uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Identidade gerenciada atribuída pelo usuário" },
            { "label": "Identidade gerenciada atribuída pelo sistema" },
            { "label": "Identidade B2B (Business to Business) do Microsoft Entra ID" },
            { "label": "Identidade B2C (Business to Customer) do Microsoft Entra ID" }
        ],
        "grupos": [
            "Identidade usada por aplicativos em App1 para acessar o Armazenamento do Azure",
            "Identidade usada por usuários de mídia social para acessar o App1"
        ],
        "respostas": {
            "Identidade usada por aplicativos em App1 para acessar o Armazenamento do Azure": ["Identidade gerenciada atribuída pelo sistema"],
            "Identidade usada por usuários de mídia social para acessar o App1": ["Identidade B2C (Business to Customer) do Microsoft Entra ID"]
        },
        "explicacao": "A identidade gerenciada atribuída pelo sistema permite que aplicativos acessem serviços do Azure com segurança. A identidade B2C do Microsoft Entra é ideal para autenticação de usuários externos, como redes sociais.",
        "link": "https://learn.microsoft.com/pt-br/azure/active-directory-b2c/overview",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "unica",
        "texto": "Você está usando serviços do Microsoft 365 com um CSP (Provedor de Serviços de Nuvem).  O CSP informou que o tempo de atividade mensal dos serviços do Microsoft 365 no mês anterior foi de 97%.  Você precisa determinar o crédito de serviço que deve receber da Microsoft.  Qual percentual de crédito de serviço você deve receber?",
        "opcoes": [
            "0%",
            "25%",
            "50%",
            "100%"
        ],
        "resposta": 1,
        "explicacao": "De acordo com o SLA da Microsoft, se o tempo de atividade mensal estiver entre 95% e 99%, o cliente tem direito a 25% de crédito de serviço.",
        "link": "https://learn.microsoft.com/pt-br/office365/servicedescriptions/office-365-platform-service-description/service-level-agreement",
        "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está avaliando o Microsoft Viva.  Você precisa recomendar os módulos adequados do Microsoft Viva.  Que módulo você deve usar? Para responder, arraste os módulos adequados até os recursos corretos. Cada módulo pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
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
        "explicacao": "O módulo Insights entrega bem-estar e produtividade no Teams com MyAnalytics e Glint. O Tópicos usa IA para mostrar conhecimentos relevantes. O Conexões oferece ambiente personalizado para comunicação organizacional dentro do Teams.",
        "link": "https://learn.microsoft.com/pt-br/viva/microsoft-viva-overview",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "dragdrop",
        "texto": "Uma empresa está avaliando o Microsoft 365 Apps.  Você precisa identificar o aplicativo do Microsoft 365 Apps que dá suporte a cada recurso.  Qual aplicativo você deve usar? Para responder, arraste os aplicativos do Microsoft 365 Apps para os recursos corretos. Cada aplicativo pode ser usado uma vez, mais de uma vez ou nenhuma vez.",
        "itens": [
            { "label": "Access" },
            { "label": "OneDrive" },
            { "label": "PowerPoint" },
            { "label": "Editor" }
        ],
        "grupos": [
            "Gera gráficos e pode armazenar dados em um banco de dados SQL do Azure.",
            "Acessa, edita e organiza arquivos em vários dispositivos.",
            "Converte documentos do Microsoft Word em apresentações.",
            "Cria etiquetas, boletins informativos e outros materiais de marketing usando modelos."
        ],
        "respostas": {
            "Gera gráficos e pode armazenar dados em um banco de dados SQL do Azure.": ["Access"],
            "Acessa, edita e organiza arquivos em vários dispositivos.": ["OneDrive"],
            "Converte documentos do Microsoft Word em apresentações.": ["PowerPoint"],
            "Cria etiquetas, boletins informativos e outros materiais de marketing usando modelos.": ["Editor"]
        },
        "explicacao": "O Access permite armazenar dados em SQL do Azure. O OneDrive permite acessar arquivos em nuvem em diferentes dispositivos. O PowerPoint pode converter arquivos do Word em slides. O Editor é voltado para criação de conteúdo gráfico e textual com templates.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365-apps/deploy/about-microsoft-365-apps",
        "dominio": "Descrever aplicativos e serviços do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "unica",
        "texto": "Uma empresa planeja comprar uma assinatura do Microsoft 365.  A empresa deve licenciar software e serviços de nuvem do Microsoft 365 por pelo menos três anos.  Você precisa identificar qual modelo de preços dá suporte aos requisitos de licenciamento.  Qual modelo de preços você deve usar?",
        "opcoes": [
            "Contrato de Cliente da Microsoft",
            "CSP (Provedor de Soluções na Nuvem da Microsoft)",
            "MPSA (Microsoft Products and Services Agreement)",
            "Programa Microsoft Online Services",
            "EA (Contrato Enterprise da Microsoft)"
        ],
        "resposta": 4,
        "explicacao": "O Enterprise Agreement (EA) é a opção ideal para organizações que planejam licenciar produtos Microsoft por três anos. Ele oferece descontos e benefícios adicionais em assinaturas de longo prazo, especialmente para grandes empresas.",
        "link": "https://www.microsoft.com/pt-br/licensing/licensing-programs/enterprise",
        "dominio": "Descrever os preços, o licenciamento e o suporte do Microsoft 365",
        "simulado": "MS-900 Bônus 02"
    },
    {
        "tipo": "unica",
        "texto": "Você está configurando o Microsoft 365.  Você precisa determinar quantos destinos um único localizador do Microsoft Entra pode ter.  Quantos destinos você deve identificar?",
        "opcoes": [
            "1",
            "2",
            "5",
            "10"
        ],
        "resposta": 1,
        "explicacao": "Ao configurar o Microsoft Entra ID para roteamento de mensagens e outros serviços com o Microsoft 365, dois destinos principais devem ser identificados: origem e destino. Isso garante o roteamento adequado das comunicações.",
        "link": "https://learn.microsoft.com/pt-br/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide",
        "dominio": "Descrever os conceitos da nuvem",
        "simulado": "MS-900 Bônus 02"
    }
];
