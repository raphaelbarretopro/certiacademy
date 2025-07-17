// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [

  {
    "tipo": "simnao",
    "texto": "Você criou uma entidade personalizada usando o Common Data Service. Para cada uma das seguintes afirmativas, selecione Sim se a afirmativa for verdadeira. Caso contrário, selecione Não. NOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Você pode alterar a propriedade da entidade de Usuário para Organização.",
      "Você pode criar uma regra de negócios para uma entidade personalizada que pode ser usada em um Fluxo."
    ],
    "respostas": [
      false,
      true
    ],
    "explicacao": [
      "Afirmação 01 - Não, o Common Data Service suporta dois tipos de propriedade de registro: propriedade da Organização e propriedade do Usuário ou Equipe. Essa é uma escolha que acontece no momento em que a entidade é criada e não pode ser alterada. Afirmação 02 - Sim, combinar condições e ações, você pode fazer o seguinte com regras de negócios: Definir valores de campo - Limpar valores de campo - Definir níveis de exigência de campo - Mostrar ou ocultar campos - Habilitar ou desabilitar campos - Validar dados e mostrar mensagens de erro - Criar recomendações de negócios baseadas em inteligência de negócios."
    ],
    "link": "https://docs.microsoft.com/pt-br/power-platform/admin/wp-security-cds",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa explicar os principais componentes do modelo de dados comum (Common Data Model - CDM) e suas funções. Associe cada termo à sua definição. NOTA: Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Entidades" },
      { "label": "Conectores de dados" },
      { "label": "Serviço de Dados Comum" },
      { "label": "Modelo de Dados Comum" },
      { "label": "Fluxos de trabalho" }
    ],
    "grupos": [
      "Ajuda a acelerar o desenvolvimento de aplicativos aproveitando a lógica de negócios, segurança e integrações",
      "Um conjunto de registros usado para armazenar dados"
    ],
    "respostas": {
      "Ajuda a acelerar o desenvolvimento de aplicativos aproveitando a lógica de negócios, segurança e integrações": ["Serviço de Dados Comum"],
      "Um conjunto de registros usado para armazenar dados": ["Entidades"]
    },
    "explicacao": "Box 1 - Serviço de Dados Comum: O Common Data Service foi renomeado para Universo de Dados (Dataverse). Usando o Dataverse, é possível acelerar o desenvolvimento de aplicativos aproveitando o Common Data Model com segurança de negócios, lógica e integração já incorporadas. Box 2 - Entidades: Uma entidade é um conjunto de registros usados para armazenar dados, de forma semelhante a como uma tabela armazena dados em um banco de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/data-platform-intro",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você gerencia a equipe de suporte em uma empresa em rápido crescimento. Clientes e técnicos de suporte precisam de uma melhor experiência ao registrar e responder a solicitações de suporte. Você precisa de mais visibilidade sobre o que os técnicos de suporte estão fazendo semanalmente. Você precisa recomendar ferramentas para atender às necessidades da empresa. Quais ferramentas você deve recomendar? Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Portal do Power Apps" },
      { "label": "Power Automate" },
      { "label": "Power BI" },
      { "label": "Serviço de Dados Comum" }
    ],
    "grupos": [
      "Os clientes devem ser capazes de enviar solicitações de suporte usando um site",
      "As solicitações de suporte devem ser criadas e armazenadas",
      "Os técnicos de suporte devem ser notificados quando uma nova solicitação de suporte for inserida",
      "Os técnicos de suporte devem ser capazes de inserir um relatório de status para o trabalho concluído durante a semana anterior usando um aplicativo móvel"
    ],
    "respostas": {
      "Os clientes devem ser capazes de enviar solicitações de suporte usando um site": ["Portal do Power Apps"],
      "As solicitações de suporte devem ser criadas e armazenadas": ["Serviço de Dados Comum"],
      "Os técnicos de suporte devem ser notificados quando uma nova solicitação de suporte for inserida": ["Power Automate"],
      "Os técnicos de suporte devem ser capazes de inserir um relatório de status para o trabalho concluído durante a semana anterior usando um aplicativo móvel": ["Power BI"]
    },
    "explicacao": "Portal do Power Apps: Permite que usuários externos enviem solicitações por meio de um site responsivo criado com baixo código. Serviço de Dados Comum: Utilizado para armazenar e gerenciar dados de solicitações de suporte de forma segura e integrada. Power Automate: Automatiza notificações e fluxos de trabalho, como avisar técnicos sobre novas solicitações. Power BI: Permite que os técnicos insiram e visualizem relatórios de status sobre o trabalho realizado, incluindo acesso por dispositivos móveis.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/developer/get-started",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Você está desenvolvendo aplicativos do Power Apps que utilizam tanto o Dynamics 365 Sales quanto o Microsoft 365. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "O Dynamics 365 Sales e o Microsoft 365 devem estar no mesmo locatário para permitir o Single Sign-On (SSO).",
      "É necessário baixar um produto do AppSource para garantir que o SSO funcione com o Dynamics 365 Sales e o Microsoft 365."
    ],
    "respostas": [
      true,
      false
    ],
    "explicacao": "Afirmação 01 - Sim. Para que o Single Sign-On (SSO) funcione corretamente, o Dynamics 365 Sales e o Microsoft 365 devem estar associados ao mesmo locatário do Azure Active Directory. Afirmação 02 - Não. Não é necessário baixar um produto adicional do AppSource para habilitar o SSO entre o Dynamics 365 Sales e o Microsoft 365, pois o suporte ao SSO é nativo quando ambos estão no mesmo locatário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/enterprise-apps/add-application-portal-setup-sso",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "multipla",
    "texto": "Você precisa implementar Aplicações de Negócios da Microsoft juntamente com a Microsoft Power Platform. Quais três produtos da Microsoft fazem parte da Power Platform? Cada seleção correta apresenta uma solução completa. Cada seleção correta vale um ponto.",
    "opcoes": [
      "Power Apps",
      "Microsoft Entra ID",
      "Power Automate",
      "Azure Machine Learning",
      "Power BI"
    ],
    "respostas": [
      0,
      2,
      4
    ],
    "explicacao": "A Microsoft Power Platform é composta pelo Power Apps, Power BI e Power Automate. O Power Apps permite criar aplicativos personalizados de forma rápida e com pouco código. O Power Automate facilita a automação de processos e fluxos de trabalho. O Power BI é usado para análise de dados e geração de relatórios interativos. O Microsoft Entra ID, anteriormente conhecido como Azure Active Directory, e o Azure Machine Learning não fazem parte diretamente da Power Platform.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja implementar aplicativos da Power Platform. A empresa não pretende usar ferramentas de desenvolvimento ou plug-ins. Quais ações você pode realizar? Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Você pode sincronizar informações de conta do Dynamics 365 Sales com um banco de dados de terceiros.",
      "Você pode criar faturas a partir de pedidos e, em seguida, enviar as faturas ao cliente utilizando um fluxo do Power Automate."
    ],
    "respostas": [
      true,
      true
    ],
    "explicacao": "Ambas as afirmações estão corretas. A Power Platform, utilizando o Power Automate, permite sincronizar dados de diferentes sistemas, como informações de conta do Dynamics 365 Sales para bancos de dados de terceiros, sem a necessidade de desenvolvimento tradicional. Também é possível automatizar a criação de faturas a partir de pedidos e enviá-las aos clientes através de fluxos de trabalho configuráveis no Power Automate.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma grande empresa de varejo implementa o Power Apps, o Power Automate e o Serviço de Dados Comum. O conselho de administração está questionando se os usuários estão encontrando valor na tecnologia. A empresa gostaria de medir e relatar o uso do software. Você precisa recomendar uma ferramenta para determinar o uso do software. O que você deve recomendar?",
    "opcoes": [
      "Microsoft Intune",
      "Azure Stream Analytics",
      "Análises da Power Platform",
      "Dynamics 365 Product Insights"
    ],
    "resposta": 2,
    "explicacao": "O recurso de Análises da Power Platform fornece relatórios de uso padrão que permitem aos administradores visualizar informações como o número de lançamentos de aplicativos, usuários ativos diários e outros dados relevantes no ambiente. Esses relatórios ajudam a medir o envolvimento dos usuários e a utilização dos aplicativos, sem necessidade de configurações adicionais complexas.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/analytics-powerapps",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa utiliza o Power Apps. Você precisa executar tarefas administrativas para a empresa. Quais centros de administração você deve usar? Cada centro de administração pode ser usado uma vez, mais de uma vez ou não ser usado. Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Microsoft Entra ID" },
      { "label": "Central de administração do Dynamics 365" },
      { "label": "Central de administração do Power Apps" },
      { "label": "Portal de administração do Power BI" }
    ],
    "grupos": [
      "Criar contas de usuário para o Power Apps",
      "Atribuir a função de Criador de Ambiente a um usuário"
    ],
    "respostas": {
      "Criar contas de usuário para o Power Apps": ["Microsoft Entra ID"],
      "Atribuir a função de Criador de Ambiente a um usuário": ["Central de administração do Power Apps"]
    },
    "explicacao": "Para criar contas de usuário para o Power Apps, é necessário utilizar o Microsoft Entra ID, anteriormente conhecido como Azure Active Directory. Para atribuir a função de Criador de Ambiente a um usuário, é utilizado a Central de administração do Power Apps, onde é possível gerenciar ambientes e atribuir funções administrativas como Administrador de Ambiente ou Criador de Ambiente.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-administration",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa em rápido crescimento fornece licenças do Microsoft 365 para todos os funcionários. A empresa deseja capacitar os usuários para criar aplicativos, automatizar processos de negócios e analisar dados sem exigir habilidades avançadas de desenvolvimento e sem aumentar as despesas de TI e as dependências. Associe cada necessidade de negócio à ferramenta recomendada da Power Platform.",
    "pares": [
      {
        "requisito": "Criar fluxos de trabalho automáticos que acessem várias fontes de dados.",
        "opcoes": [
          "AI Builder",
          "Power Apps",
          "Power Automate",
          "Azure Functions",
          "Power BI"
        ],
        "resposta": 2
      },
      {
        "requisito": "Criar aplicativos personalizados que atendam a necessidades específicas de negócios.",
        "opcoes": [
          "AI Builder",
          "Power Apps",
          "Power Automate",
          "Azure Functions",
          "Power BI"
        ],
        "resposta": 1
      },
      {
        "requisito": "Desenvolver visualizações de dados perspicazes.",
        "opcoes": [
          "AI Builder",
          "Power Apps",
          "Power Automate",
          "Azure Functions",
          "Power BI"
        ],
        "resposta": 4
      }
    ],
    "explicacao": "O Power Automate é ideal para automatizar fluxos de trabalho e processos entre diversos serviços. O Power Apps permite criar aplicativos personalizados com pouco ou nenhum código. O Power BI oferece ferramentas avançadas de visualização e análise de dados conectando múltiplas fontes.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa possui locais em várias regiões. A empresa desenvolve soluções baseadas no Power Apps e no Power Automate. Você precisa recomendar recursos para apoiar a implementação. Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Ambiente" },
      { "label": "Grupo de segurança" },
      { "label": "Biblioteca do SharePoint" }
    ],
    "grupos": [
      "Garante tempo de resposta mais rápidos para cada local da empresa",
      "Cria cópias de teste e produção dos dados e aplicativos"
    ],
    "respostas": {
      "Garante tempo de resposta mais rápidos para cada local da empresa": ["Ambiente"],
      "Cria cópias de teste e produção dos dados e aplicativos": ["Ambiente"]
    },
    "explicacao": "O recurso Ambiente na Power Platform permite isolar dados, aplicativos e fluxos para locais específicos, garantindo tempos de resposta mais rápidos ao alocar os recursos próximos de cada local da empresa. Além disso, os ambientes são usados para separar os ambientes de teste e de produção, permitindo a criação de cópias distintas dos dados e aplicativos.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza a Power Platform. Você deve garantir que os usuários não possam compartilhar dados de clientes com outros usuários. Também deve garantir que os usuários não possam se conectar a fontes de dados sem que seja concedida permissão explícita para acessar uma fonte de dados. Você precisa recomendar tipos de políticas para atender aos requisitos de segurança da empresa. Quais dois tipos de políticas você deve recomendar? Cada seleção correta apresenta parte da solução. Cada seleção correta vale um ponto.",
    "opcoes": [
      "Políticas de nuvem do Office",
      "Objetos de Política de Grupo",
      "Políticas de nível de ambiente",
      "Políticas de nível de locatário",
      "Políticas de segurança de ambiente"
    ],
    "respostas": [
      2,
      3
    ],
    "explicacao": "As Políticas de nível de ambiente controlam o acesso e o comportamento dos recursos dentro de um ambiente específico da Power Platform, permitindo a proteção de dados em fontes específicas. As Políticas de nível de locatário são aplicadas em todo o locatário para definir regras globais de segurança, como restrições de compartilhamento e controle de conexão com fontes de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/wp-data-loss-prevention",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma organização planeja criar soluções na Power Platform e está avaliando o Microsoft Dataverse. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Os dados de tabelas virtuais são armazenados no Microsoft Dataverse.",
      "As colunas são usadas em formulários e exibições."
    ],
    "respostas": [
      false,
      true
    ],
    "explicacao": "Afirmação 01 - Não. A tabela virtual é uma definição de tabela no Microsoft Dataverse sem o armazenamento físico dos dados no banco de dados, pois os dados são recuperados dinamicamente do sistema externo associado durante a execução. Afirmação 02 - Sim. As colunas podem ser usadas em formulários e visualizações no Dataverse, permitindo a construção de formulários e exibições personalizados usando os campos disponíveis.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/developer/data-platform/virtual-entities/get-started-ve",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "As soluções gerenciadas podem ser usadas para agrupar vários componentes da Power Platform durante o desenvolvimento de soluções.",
      "As soluções gerenciadas devem ser usadas para distribuir um aplicativo da Power Platform no AppSource.",
      "As soluções gerenciadas sempre protegem os componentes da Power Platform contra edições quando exportados para outro ambiente."
    ],
    "respostas": [
      false,
      true,
      true
    ],
    "explicacao": "Afirmação 01 - Não. Soluções não gerenciadas são usadas durante o desenvolvimento para agrupar componentes; soluções gerenciadas são utilizadas principalmente para distribuição. Afirmação 02 - Sim. Para publicar um aplicativo da Power Platform no AppSource, é necessário utilizar uma solução gerenciada. Afirmação 03 - Sim. As soluções gerenciadas protegem os componentes contra edições quando são importados para outros ambientes, impedindo modificações diretas sem primeiro convertê-los para soluções não gerenciadas.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/alm/solution-concepts-alm",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma equipe de cinco pessoas planeja criar soluções na Power Platform para uma empresa. Os membros da equipe planejam usar instâncias de avaliação da Power Platform para criar soluções. Eles têm dúvidas sobre quantas instâncias da Power Platform e bancos de dados do Microsoft Dataverse precisam ser criados. Você deve orientar a equipe. Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Uma por usuário" },
      { "label": "Uma por locatário" },
      { "label": "Uma por ambiente" },
      { "label": "Uma por aplicativo da Power Platform" }
    ],
    "grupos": [
      "Quantas instâncias de avaliação a equipe deve criar?",
      "Quantos bancos de dados do Microsoft Dataverse a equipe deve criar?"
    ],
    "respostas": {
      "Quantas instâncias de avaliação a equipe deve criar?": ["Uma por ambiente"],
      "Quantos bancos de dados do Microsoft Dataverse a equipe deve criar?": ["Uma por ambiente"]
    },
    "explicacao": "Cada instância de avaliação da Power Platform e cada banco de dados do Microsoft Dataverse é criado por ambiente. Portanto, para que a equipe trabalhe corretamente e de forma organizada, uma instância de avaliação e um banco de dados devem ser criados por ambiente configurado.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está criando um aplicativo em tela (Canvas app) para rastrear e analisar visitas de clientes às suas lojas de varejo. Os dados sobre as visitas dos clientes são armazenados localmente em cada loja. O aplicativo deve exibir dados sobre as visitas dos clientes assim que os usuários iniciarem o aplicativo. Você precisa garantir que os dados estejam disponíveis para consumo no aplicativo. Qual ferramenta você deve usar?",
    "opcoes": [
      "Conector",
      "Microsoft Dataverse",
      "Fonte de dados",
      "Power Automate",
      "Gateway de dados"
    ],
    "resposta": 4,
    "explicacao": "O Gateway de dados permite conectar fontes de dados locais, como o armazenamento de dados de visitas em lojas físicas, à Power Platform baseada em nuvem. Dessa forma, o aplicativo em tela (Canvas app) pode acessar e exibir os dados dos clientes em tempo real sem necessidade de migração prévia para a nuvem.",
    "link": "https://learn.microsoft.com/pt-br/data-integration/gateway/service-gateway-install",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "As funções de segurança são modificadas no Microsoft Entra ID.",
      "As funções de segurança são atribuídas a cada tabela."
    ],
    "respostas": [
      true,
      false
    ],
    "explicacao": "Afirmação 01 - Sim. No Microsoft Entra ID, é possível modificar funções de segurança administrativas, criando novas funções ou copiando funções existentes para ajustar permissões. Afirmação 02 - Não. As funções de segurança são atribuídas a usuários e a grupos, e não diretamente a tabelas individuais.",
    "link": "https://learn.microsoft.com/pt-br/intune/configmgr/core/understand/fundamentals-of-role-based-administration",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa atualmente não separa os ambientes de teste, desenvolvimento e produção conforme o protocolo padrão de Gerenciamento do Ciclo de Vida de Aplicativos (ALM). A empresa usa o Power Apps para processos de contabilidade e vendas. É necessário usar apenas uma conta de login por usuário e evitar que o desenvolvimento e os testes impactem a produção. Você precisa implementar uma solução para atender aos requisitos. Qual método você deve selecionar?",
    "opcoes": [
      "Ambientes separados",
      "Locatários separados",
      "Armazenamentos de Blobs do Microsoft Azure separados",
      "Conectores separados"
    ],
    "resposta": 0,
    "explicacao": "Para seguir os princípios de Gerenciamento do Ciclo de Vida de Aplicativos (ALM), é necessário criar ambientes separados para o desenvolvimento, teste e produção. Essa separação ajuda a garantir que o desenvolvimento e os testes não impactem os aplicativos e dados da produção.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/alm/environment-strategy-alm",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa cria os seguintes ambientes do Microsoft Power Platform para gerenciar um aplicativo personalizado orientado por modelo: Desenvolvimento e Produção. Você recebeu a função de segurança System Administrator no ambiente de desenvolvimento e uma função de segurança personalizada chamada Project Team Member no ambiente de produção. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Você não poderá acessar o aplicativo até que a função de segurança System Administrator seja atribuída ao aplicativo no ambiente de desenvolvimento.",
      "Você pode excluir registros no ambiente de desenvolvimento.",
      "Você não poderá acessar o aplicativo até que a função de segurança Project Team Member seja atribuída ao aplicativo no ambiente de produção."
    ],
    "respostas": [
      false,
      true,
      false
    ],
    "explicacao": "Afirmação 01 - Não. Como você já possui a função System Administrator no ambiente de desenvolvimento, você já tem acesso total ao aplicativo sem a necessidade de nova atribuição. Afirmação 02 - Sim. Com a função System Administrator, você tem permissão total para excluir registros no ambiente de desenvolvimento. Afirmação 03 - Não. Existem outras funções de segurança que também permitem o acesso ao aplicativo além da função Project Team Member, dependendo das permissões atribuídas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/app-visibility-privileges",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa utiliza o Dynamics 365 Sales. Você tem os seguintes requisitos: visualizar análises sobre contas, o aplicativo orientado por modelo deve criar automaticamente um formulário de aprovação para um gerente quando a compra for superior a 10.000 dólares, e criar um chatbot para interagir com perguntas dos clientes em uma página da web. Você precisa selecionar um aplicativo da Power Platform para cada requisito. Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Power BI" },
      { "label": "Power Automate" },
      { "label": "Power Virtual Agents" },
      { "label": "Power Apps Portals" }
    ],
    "grupos": [
      "Visualizar análises sobre contas",
      "Criar automaticamente um formulário de aprovação",
      "Criar chatbot para páginas da web"
    ],
    "respostas": {
      "Visualizar análises sobre contas": ["Power BI"],
      "Criar automaticamente um formulário de aprovação": ["Power Automate"],
      "Criar chatbot para páginas da web": ["Power Virtual Agents"]
    },
    "explicacao": "O Power BI é usado para criar dashboards e visualizar análises sobre contas. O Power Automate é utilizado para criar fluxos automáticos de aprovação baseados em eventos, como quando um pedido ultrapassa 10.000 dólares. O Power Virtual Agents permite a criação de chatbots personalizados para interação com usuários em páginas da web.",
    "link": "https://learn.microsoft.com/pt-br/power-virtual-agents/fundamentals-what-is-power-virtual-agents",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja usar o Power BI para visualizar dados de sistemas de negócios. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Você pode exibir agregações de dados e dados brutos em um relatório do Power BI.",
      "Você pode exibir dados relacionados de várias fontes no mesmo relatório do Power BI."
    ],
    "respostas": [
      true,
      true
    ],
    "explicacao": "Afirmação 01 - Sim. No Power BI, é possível exibir tanto dados agregados quanto dados brutos em um relatório, permitindo que as visualizações sejam otimizadas para análise em diferentes níveis de detalhe. Afirmação 02 - Sim. No Power BI, você pode combinar dados de múltiplas fontes, moldá-los conforme necessário e exibi-los em um único relatório integrado.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/desktop-shape-and-combine-data",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja criar aplicativos da Power Platform que consomem fontes de dados padrão do setor e fontes de dados proprietárias. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "O conector personalizado não pode ser usado se houver um conector padrão disponível para o serviço.",
      "Os conectores personalizados são suportados apenas em fluxos instantâneos.",
      "Conectores padrão e personalizados não podem ser misturados no mesmo fluxo ou aplicativo."
    ],
    "respostas": [
      false,
      false,
      false
    ],
    "explicacao": "Afirmação 01 - Não. Os conectores personalizados podem ser usados mesmo que haja um conector padrão disponível, caso seja necessário atender requisitos específicos que o conector padrão não contemple. Afirmação 02 - Não. Os conectores personalizados podem ser utilizados em vários tipos de fluxos no Power Automate, incluindo fluxos automatizados, agendados e de processos empresariais, não apenas em fluxos instantâneos. Afirmação 03 - Não. Conectores padrão e personalizados podem ser usados juntos no mesmo fluxo ou aplicativo, proporcionando maior flexibilidade nas soluções.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/register-custom-api",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja criar um ambiente do Microsoft Dataverse. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira ou Não se for falsa.",
    "afirmacoes": [
      "Você pode criar um ambiente do Microsoft Dataverse no Centro de Administração do Power Platform.",
      "Você deve habilitar a criptografia de dados após criar um ambiente do Microsoft Dataverse.",
      "Você pode controlar funções de segurança e privilégios em um ambiente do Microsoft Dataverse a partir do Centro de Administração do Power Apps."
    ],
    "respostas": [
      true,
      false,
      true
    ],
    "explicacao": "Afirmação 01 - Sim. É possível criar um ambiente do Microsoft Dataverse diretamente no Centro de Administração do Power Platform. Afirmação 02 - Não. A criptografia de dados é habilitada automaticamente ao criar um ambiente do Microsoft Dataverse e não requer habilitação manual. Afirmação 03 - Sim. O gerenciamento de funções de segurança e privilégios pode ser realizado a partir do Centro de Administração do Power Apps.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/create-database",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Gerenciamento da Cadeia de Suprimentos do Dinâmica 365 (Dynamics 365 Supply Chain Management) e o Finanças Dinâmica 365 (Dynamics 365 Finance). Os dados das contas de usuário devem ser sincronizados entre os dois sistemas. Você precisa garantir que os dados sincronizados sejam armazenados em um único local. O que você deve usar?",
    "opcoes": [
      "Azure IoT Central",
      "Microsoft Entra ID",
      "SQL Server",
      "Microsoft Dataverse"
    ],
    "resposta": 3,
    "explicacao": "O Microsoft Dataverse fornece um armazenamento centralizado para dados sincronizados de diferentes aplicativos, permitindo a integração eficiente entre o Dynamics 365 Supply Chain Management e o Dynamics 365 Finance.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/data-platform-intro",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja implementar soluções que utilizam o Microsoft Dataverse. Você precisa recomendar funcionalidades para atender às necessidades da empresa. Quais funcionalidades você deve recomendar?",
    "itens": [
      { "label": "Regras de Negócios (Business rules)" },
      { "label": "Fluxos de processos de negócios (Business process flows)" },
      { "label": "Modelo de dados comum (Common Data Model)" }
    ],
    "grupos": [
      "Validar dados entre vários campos e entidades, independentemente do aplicativo usado para criar os dados.",
      "Criar guias visuais para garantir que os usuários insiram dados e realizem tarefas de maneira consistente.",
      "Acelerar o desenvolvimento usando um conjunto padrão de entidades para os cenários mais comuns."
    ],
    "respostas": {
      "Validar dados entre vários campos e entidades, independentemente do aplicativo usado para criar os dados.": ["Regras de Negócios (Business rules)"],
      "Criar guias visuais para garantir que os usuários insiram dados e realizem tarefas de maneira consistente.": ["Fluxos de processos de negócios (Business process flows)"],
      "Acelerar o desenvolvimento usando um conjunto padrão de entidades para os cenários mais comuns.": ["Modelo de dados comum (Common Data Model)"]
    },
    "explicacao": "As business rules permitem validar dados automaticamente sem a necessidade de codificação. Os business process flows ajudam os usuários a inserir dados de forma consistente e seguir etapas de processo. O Common Data Model acelera o desenvolvimento oferecendo um conjunto padronizado de entidades para uso comum.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/guide-staff-through-common-tasks-processes",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você gerencia a equipe de suporte de uma empresa em rápido crescimento. Os técnicos de suporte precisam de uma experiência melhor ao registrar e responder a solicitações de suporte. Você precisa recomendar ferramentas para atender às necessidades da empresa. Quais ferramentas você deve recomendar?",
    "itens": [
      { "label": "Power Apps" },
      { "label": "Power Automate" },
      { "label": "Power BI" },
      { "label": "Microsoft Dataverse" }
    ],
    "grupos": [
      "Os técnicos de suporte devem ser capazes de enviar solicitações de suporte usando um aplicativo.",
      "Os dados dos clientes devem ser armazenados e sincronizados com o Venda Dinâmica 365 (Dynamics 365 Finance).",
      "Os técnicos de suporte devem ser notificados quando uma nova solicitação de suporte for registrada."
    ],
    "respostas": {
      "Os técnicos de suporte devem ser capazes de enviar solicitações de suporte usando um aplicativo.": ["Power Apps"],
      "Os dados dos clientes devem ser armazenados e sincronizados com o Venda Dinâmica 365 (Dynamics 365 Finance).": ["Microsoft Dataverse"],
      "Os técnicos de suporte devem ser notificados quando uma nova solicitação de suporte for registrada.": ["Power Automate"]
    },
    "explicacao": "O Power Apps permite que os técnicos criem e enviem solicitações de suporte por meio de aplicativos personalizados. O Microsoft Dataverse é usado para armazenar e sincronizar dados dos clientes de forma segura com o Venda Dinâmica 365 (Dynamics 365 Finance). O Power Automate envia notificações automáticas para os técnicos sempre que uma nova solicitação de suporte é registrada.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/help-desk-install",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada ferramenta da Power Platform à sua respectiva tarefa. Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Power BI" },
      { "label": "Power Automate" },
      { "label": "Power Apps" }
    ],
    "grupos": [
      "Automatizar fluxos de trabalho",
      "Acionar uma ação a partir de um evento",
      "Criar uma tela de entrada de dados personalizada para dispositivos móveis"
    ],
    "respostas": {
      "Automatizar fluxos de trabalho": ["Power Automate"],
      "Acionar uma ação a partir de um evento": ["Power Automate"],
      "Criar uma tela de entrada de dados personalizada para dispositivos móveis": ["Power Apps"]
    },
    "explicacao": "O Power Automate é a ferramenta da Power Platform responsável por automatizar fluxos de trabalho e também por acionar ações a partir de eventos, como recebimento de e-mails ou alterações em dados. O Power Apps é usado para criar aplicativos personalizados, incluindo telas de entrada de dados adaptadas para dispositivos móveis, permitindo uma experiência de usuário eficiente e interativa.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está desenvolvendo aplicativos para apoiar suas operações comerciais. Os aplicativos utilizarão conectores para acessar dados de várias fontes e responder a diversos eventos gerados por componentes. Quais duas operações você pode usar com conectores? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Ações",
      "Plug-ins",
      "Gateways",
      "Gatilhos"
    ],
    "respostas": [
      0,
      3
    ],
    "explicacao": "Cada conector oferece um conjunto de operações classificadas como ações e gatilhos. Após a conexão com o serviço subjacente, essas operações podem ser facilmente aproveitadas dentro dos aplicativos e fluxos de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/connectors/connectors",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Você é gerente de vendas de uma grande organização de varejo. Está criando um aplicativo do Power Apps que exibirá informações de compras de produtos de clientes do seu antigo sistema de ponto de venda (POS) e precisa vincular essas vendas às contas de clientes e às vendas de produtos no Comércio Dinâmico 365 (Dynamics 365 Commerce). Você precisa usar o componente apropriado. O que você deve usar?",
    "opcoes": [
      "Microsoft Dataverse",
      "Fluxo de processo de negócios",
      "Metadados da entidade",
      "Regra de negócios"
    ],
    "resposta": 0,
    "explicacao": "O Microsoft Dataverse é usado para armazenar e gerenciar dados de negócios com segurança, incluindo informações sobre clientes, contas e vendas, permitindo a integração entre diferentes sistemas como POS e Dynamics 365 Commerce.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/data-platform-intro",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está estudando sobre o Power Apps e como utilizar gatilhos. Associe cada descrição ao objeto mais apropriado da Power Platform.",
    "pares": [
      {
        "requisito": "Quando uma condição é atendida, um aplicativo do Power Apps pode acionar um:",
        "opcoes": [
          "Conector",
          "Fluxo do Power Automate",
          "Gateway",
          "Solução"
        ],
        "resposta": 1
      },
      {
        "requisito": "Ações e gatilhos são propriedades de um:",
        "opcoes": [
          "Conector",
          "Gateway",
          "Solução"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Em Power Apps, quando uma condição é atendida, é possível acionar um fluxo do Power Automate para executar ações automatizadas. Já os conectores são os componentes que contêm ações e gatilhos usados para integrar o Power Apps e o Power Automate com serviços externos.",
    "link": "https://learn.microsoft.com/pt-br/connectors/connectors",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Um colega de trabalho está criando um aplicativo no Power Apps e precisa sincronizar automaticamente dados de uma fonte externa. O colega não conseguiu localizar um modelo de conector aprovado pela Microsoft no AppSource. Você precisa recomendar uma solução para o colega. O que você deve recomendar?",
    "opcoes": [
      "Criar um conector personalizado",
      "Solicitar à fonte externa que envie os dados uma vez por semana",
      "Usar o Power Automate para conectar-se ao banco de dados",
      "Abrir um chamado na Microsoft e solicitar um novo conector",
      "Usar o Microsoft Azure Service Bus"
    ],
    "resposta": 0,
    "explicacao": "Existem mais de 250 conectores pré-definidos disponíveis no Power Apps e no Power Automate. Se nenhum conector atender às suas necessidades específicas, você pode criar um Conector Personalizado. Um Conector Personalizado é um encapsulamento em torno de uma API REST (ou SOAP) que permite que aplicativos como Power Apps, Microsoft Flow (Power Automate) e Logic Apps comuniquem-se com a API.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está implementando uma solução para um hospital veterinário. O hospital precisa entrar em contato com os donos dos animais sobre seus pets. É necessário modelar as informações de dono e pet usando o Microsoft Dataverse, minimizando a quantidade de personalização necessária. Informações a serem modeladas: primeiro nome do dono, sobrenome do dono, e-mail do dono, data de nascimento do dono, nome do pet, raça do pet e vínculo entre o pet e seu dono. Qual componente você deve usar para cada informação?",
    "itens": [
      { "label": "O objeto do dono" },
      { "label": "O objeto do pet" },
      { "label": "O e-mail do dono" },
      { "label": "Referência de um registro de pet como pertencente a um registro de dono" }
    ],
    "grupos": [
      "Tabela padrão do Dataverse",
      "Tabela personalizada do Dataverse",
      "Coluna",
      "Relacionamento"
    ],
    "respostas": {
      "Tabela padrão do Dataverse": ["O objeto do dono"],
      "Tabela personalizada do Dataverse": ["O objeto do pet"],
      "Coluna": ["O e-mail do dono"],
      "Relacionamento": ["Referência de um registro de pet como pertencente a um registro de dono"]
    },
    "explicacao": "A tabela padrão do Dataverse é utilizada para dados comuns e reutilizáveis, como contatos (donos). A tabela personalizada é usada para novos tipos de registros, como pets. Informações como e-mail são adicionadas como colunas. Já a associação entre registros (pet e dono) é feita por meio de um relacionamento.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/types-of-entities",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa planeja criar aplicativos Canvas que serão usados dentro do Microsoft Teams. Você precisa identificar a plataforma com base nas considerações de design. Para responder, arraste as plataformas corretas para as respectivas considerações de design. Cada plataforma pode ser usada uma vez, mais de uma vez ou nenhuma vez. NOTA: Cada seleção correta vale um ponto.",
    "itens": [
      { "label": "Universo de dados para equipes (Dataverse for Teams)" },
      { "label": "Universo de dados (Dataverse)" }
    ],
    "grupos": [
      "Limitar o número de linhas para menos de um milhão que podem existir para um aplicativo no Teams",
      "Garantir que desenvolvedores profissionais tenham o máximo de recursos possível, como acesso a APIs, plug-ins e mais, ao desenvolver aplicativos para uso dentro do Teams"
    ],
    "respostas": {
      "Limitar o número de linhas para menos de um milhão que podem existir para um aplicativo no Teams": ["Universo de dados para equipes (Dataverse for Teams)"],
      "Garantir que desenvolvedores profissionais tenham o máximo de recursos possível, como acesso a APIs, plug-ins e mais, ao desenvolver aplicativos para uso dentro do Teams": ["Universo de dados (Dataverse)"]
    },
    "explicacao": "O Dataverse for Teams possui uma limitação de capacidade de até 2 GB, limitando o número de linhas e o volume de dados que podem ser usados em aplicativos do Microsoft Teams. Para funcionalidades mais avançadas, como acesso a APIs, uso de plug-ins e outros recursos profissionais, deve-se usar o Dataverse completo.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/about-teams-environment",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual é um benefício de implantar os aplicativos do Microsoft 365 e do Dynamics 365 Customer Engagement (Sistema de gestão de relacionamento com o cliente – CRM – voltado para vendas, marketing e atendimento ao cliente) no mesmo locatário (tenant)?",
    "opcoes": [
      "Você não precisa fazer backup dos dados manualmente.",
      "Ambos usarão o mesmo fuso horário.",
      "Você pode usar o Power BI (Serviço de visualização e análise de dados) para exibir dados que vêm de ambos os ambientes.",
      "Você pode implementar logon único (SSO - Single Sign-On)."
    ],
    "resposta": 3,
    "explicacao": "Implantar Microsoft 365 e Dynamics 365 no mesmo locatário permite implementar o logon único (SSO), o que facilita o acesso do usuário aos aplicativos com uma única autenticação. Isso reduz barreiras de login e melhora a segurança e a produtividade.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está utilizando o Power BI (Serviço de visualização e análise de dados). A equipe deseja verificar quais conectores de dados estão disponíveis para a construção de dashboards. O que você deve usar para visualizar todos os conectores disponíveis?",
    "opcoes": [
      "Workspace do Power BI",
      "Microsoft Dataverse (Plataforma de dados estruturados e relacionais usada em toda a Power Platform)",
      "Power BI Dataflows",
      "Centro de administração do Power Platform (Gerenciamento, monitoramento e segurança dos ambientes da Power Platform)",
      "Power BI Desktop"
    ],
    "resposta": 3,
    "explicacao": "O Centro de Administração do Power Platform permite aos administradores visualizar e gerenciar políticas, conectores disponíveis, ambientes e outras configurações relacionadas à segurança e integração dos serviços da Power Platform, incluindo os dashboards do Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/admin-documentation?tabs=new",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza Microsoft 365, Power Platform e Dynamics 365. Nenhuma permissão é atribuída aos usuários licenciados. Mesmo assim, os usuários conseguem criar e editar aplicativos canvas no Power Apps. Em qual ambiente os usuários estão criando e editando os aplicativos?",
    "opcoes": [
      "Produção",
      "Padrão (Default)",
      "Sandbox"
    ],
    "resposta": 1,
    "explicacao": "Quando um novo usuário se inscreve no Power Apps, ele é automaticamente adicionado à função de criador no ambiente padrão. Por isso, mesmo sem atribuição explícita de permissões, é possível criar e editar aplicativos nesse ambiente.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Um desenvolvedor do Power Apps tem permissões suficientes para criar aplicativos, conexões e fluxos. No entanto, o desenvolvedor não possui permissões para acessar os dados da empresa. Você precisa conceder ao desenvolvedor acesso aos dados da empresa para um aplicativo. Qual função de segurança predefinida você deve atribuir ao desenvolvedor?",
    "opcoes": [
      "Criador de Ambiente",
      "Personalizador de Sistema",
      "Usuário do Common Data Service",
      "Delegado"
    ],
    "resposta": 3,
    "explicacao": "A função de segurança 'Delegado' permite que códigos sejam executados como se fossem outro usuário, funcionando como um mecanismo de delegação. Normalmente, essa função é usada junto com outra função de segurança que conceda acesso a registros.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/database-security#predefined-security-roles",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre conectores personalizados no uso com Power Apps e Power Automate.",
    "afirmacoes": [
      "Conectores personalizados para serviços específicos de clientes não requerem revisão e certificação da Microsoft.",
      "Você pode criar um conector personalizado uma vez e reutilizá-lo no Power Apps e no Power Automate.",
      "Você pode tornar conectores personalizados publicamente disponíveis para todos os usuários da Power Platform sem que a Microsoft os certifique."
    ],
    "respostas": [true, true, false],
    "explicacao": "Conectores personalizados criados para uso interno não exigem certificação da Microsoft. Eles podem ser reutilizados entre Power Apps e Power Automate. No entanto, para tornar um conector personalizado publicamente disponível para todos os usuários da Power Platform, ele precisa passar por processo de certificação e aprovação pela Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma organização está avaliando o uso da Power Platform para melhorar processos de negócios. Avalie as afirmações a seguir sobre as possibilidades de integração.",
    "afirmacoes": [
      "Você pode adicionar uma entidade personalizada do Microsoft Dataverse à navegação do Dynamics 365 Sales Hub.",
      "Você pode incorporar um aplicativo canvas da Power Platform em um canal do Microsoft Teams da sua organização."
    ],
    "respostas": [true, true],
    "explicacao": "É possível adicionar entidades personalizadas do Dataverse à navegação do Dynamics 365 Sales Hub por meio da personalização da interface. Além disso, aplicativos canvas criados na Power Platform podem ser facilmente incorporados em canais do Microsoft Teams, facilitando a colaboração e a automação de tarefas dentro do ambiente de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/teams/overview",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa planeja migrar um sistema local de gerenciamento de dados de atendimento ao cliente para uma solução em nuvem gerenciada. O sistema atual de atendimento ao cliente deve ser substituído por um aplicativo baseado em modelo. A empresa usa pacotes do SQL Server Integration Services (SSIS) para mover dados do sistema local para um sistema de ERP de terceiros. Você precisa substituir os pacotes SSIS para realizar a transferência dos dados. O que a empresa deve utilizar no lugar desses pacotes para realizar a migração dos dados?",
    "opcoes": [
      "Conector da Power Platform",
      "Lago de Dados do Microsoft Azure (Azure Data Lake)",
      "Agentes Virtuais do Power Platform (Power Virtual Agents)",
      "Estrutura de Migração de Dados (Data Migration Framework)"
    ],
    "resposta": 3,
    "explicacao": "A Estrutura de Migração de Dados (Data Migration Framework) é uma ferramenta que permite migrar dados de sistemas locais para soluções em nuvem, como o Microsoft Dataverse. Essa estrutura oferece suporte à importação e exportação em larga escala, sendo indicada para substituição de pacotes SSIS quando se deseja realizar a integração com sistemas externos como ERPs.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/fin-ops-core/dev-itpro/data-entities/data-import-export-job",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja criar um ambiente do Microsoft Dataverse. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar um ambiente do Microsoft Dataverse no Centro de Administração da Power Platform.",
      "Você deve habilitar a criptografia de dados após criar um ambiente do Microsoft Dataverse.",
      "Você pode controlar funções de segurança e privilégios em um ambiente do Microsoft Dataverse a partir do Centro de Administração do Power Apps."
    ],
    "respostas": [true, false, true],
    "explicacao": "É possível criar ambientes do Microsoft Dataverse diretamente pelo Centro de Administração da Power Platform. A criptografia de dados já é habilitada por padrão no Dataverse, portanto não é necessário ativá-la após a criação do ambiente. As funções de segurança e privilégios podem ser gerenciadas pelo Centro de Administração do Power Apps.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/create-environment",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações, selecione Sim se for verdadeira. Caso contrário, selecione Não.\n\nNOTA: Cada seleção correta vale um ponto.",
    "afirmacoes": [
      "Um ambiente do Microsoft Power Platform deve conter um banco de dados do Microsoft Dataverse.",
      "Um aplicativo criado em um ambiente só pode se conectar às fontes de dados que estão implantadas no mesmo ambiente.",
      "Ambientes do Microsoft Dataverse for Teams são criados automaticamente para todos os membros da equipe quando você cria um aplicativo do Microsoft Power Platform no Microsoft Teams."
    ],
    "respostas": [false, false, true],
    "explicacao": "Nem todo ambiente precisa ter um banco de dados do Dataverse — ele é opcional. Aplicativos podem acessar dados de outras fontes mesmo que estejam em ambientes distintos. Já no Microsoft Teams, ao criar um app do Power Platform, um ambiente do Dataverse for Teams é criado automaticamente e compartilhado com os membros da equipe.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações sobre dataflows no Microsoft Dataverse, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode acessar fontes de dados em um fluxo de dados (dataflow) usando os conectores que são usados no Power Automate.",
      "Você pode usar o Power Query para modelar e transformar dados em um fluxo de dados (dataflow).",
      "Você pode executar dataflows em um agendamento para atualizar os dados no Dataverse."
    ],
    "respostas": [true, true, true],
    "explicacao": "Dataflows aproveitam os mesmos conectores do Power Automate para acessar fontes de dados, utilizam o Power Query para transformação de dados e suportam execução agendada para atualização automática no Dataverse.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-and-use-dataflows",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações sobre as capacidades do Dataverse, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "O Dataverse pode ser hospedado na nuvem e no local (on-premises).",
      "O Dataverse inclui um esquema comum de objetos de negócios por padrão.",
      "O Dataverse pode oferecer suporte a até 8 TB de armazenamento por instância."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Dataverse é um serviço baseado em nuvem e não oferece hospedagem on-premises; inclui um esquema comum de entidades de negócios fora da caixa; e suporta até 8 TB de armazenamento por instância.",
    "link": "https://learn.microsoft.com/pt-br/powerapps/maker/data-platform/data-platform-intro",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Um departamento de atendimento ao cliente usa o Microsoft Dynamics 365 Customer Service para gerenciar solicitações de reparo. A equipe de reparos acompanha seus esforços usando uma lista do Microsoft SharePoint.\n\nA empresa deve usar a Microsoft Power Platform para conectar a equipe de reparo com a solução do Dynamics 365 Customer Service.\n\nA solução deve atender aos seguintes requisitos:\n\nRequisito 1: Do aplicativo de tela no Dynamics 365, permitir que o usuário insira um número de reparo, visualize os dados do SharePoint correspondentes e inicie uma solicitação de reparo.\nRequisito 2: Criar um relatório que visualize dados em tempo real sobre informações de serviço ao cliente que a equipe de reparo possa acessar e utilizar para melhorar o atendimento ao cliente.\nRequisito 3: Acionar automaticamente um e-mail usando o Microsoft Teams para notificar um agente de serviço ao cliente e um e-mail para o cliente quando um membro da equipe de reparo concluir um reparo.\n\nVocê precisa implementar as tecnologias apropriadas para atender aos requisitos.",
    "itens": [
      {
        "label": "Canvas app"
      },
      {
        "label": "Microsoft Power BI"
      },
      {
        "label": "Microsoft Power Automate"
      },
      {
        "label": "Chatbot do Microsoft Power Virtual Agents"
      }
    ],
    "grupos": [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3"
    ],
    "respostas": {
      "Requisito 1": ["Canvas app"],
      "Requisito 2": ["Microsoft Power BI"],
      "Requisito 3": ["Microsoft Power Automate"]
    },
    "explicacao": "O aplicativo de tela (Canvas app) permite entrada de dados e integração com o SharePoint. O Microsoft Power BI é ideal para criação de relatórios em tempo real para tomada de decisão. O Power Automate é utilizado para automatizar notificações por e-mail com base em gatilhos como a conclusão de reparos.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  },
  {
    "tipo": "multipla",
    "texto": "Os aplicativos voltados ao cliente de uma empresa devem estar em conformidade com o Regulamento Geral de Proteção de Dados (GDPR). Você precisa recomendar ações para ajudar a garantir a conformidade com o GDPR. Quais dois recursos a empresa deve usar? Cada resposta correta representa parte da solução.",
    "opcoes": [
      "Forçar um usuário a atualizar as perguntas de segurança após um período de tempo.",
      "Solicitar o consentimento de um usuário para utilizar seus dados pessoais e registrar a data do consentimento.",
      "Bloquear usuários que forem identificados como menores de idade.",
      "Desativar automaticamente um usuário que não utilizou o portal nos últimos seis meses."
    ],
    "respostas": [1, 2],
    "explicacao": "Solicitar o consentimento do usuário e registrar esse consentimento é uma exigência essencial do GDPR. Também é importante implementar restrições para usuários menores, assegurando o cumprimento dos requisitos de privacidade e controle sobre os dados pessoais.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-365/compliance/gdpr?view=o365-worldwide",
    "dominio": "Identificar os componentes básicos do Microsoft Power Platform",
    "simulado": "pl-2"
  }



];