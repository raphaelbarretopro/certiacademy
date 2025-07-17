// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Você está criando um aplicativo canvas para permitir que os usuários solicitem ingressos. Você cria um campo de entrada para os usuários inserirem o número de ingressos a serem solicitados. Os usuários devem solicitar no mínimo dois e no máximo quatro ingressos. Se o usuário inserir um número diferente de 2, 3 ou 4, o campo deve ser exibido em vermelho. Se inserir 2, 3 ou 4, o campo deve ser exibido em verde. Você precisa colorir o campo com base na entrada do usuário. O que você deve usar?",
    "opcoes": [
      "Fórmula",
      "Galeria",
      "Conector",
      "Coluna calculada"
    ],
    "resposta": 0,
    "explicacao": "Para alterar dinamicamente a cor de um campo com base na entrada do usuário, você deve usar uma fórmula no Power Apps. Por exemplo, com a função `If(IsNumeric(TextInput1.Text), Verde, Vermelho)` você pode validar e formatar visualmente o campo. Fórmulas como essa são essenciais para lógica condicional em aplicativos canvas.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/working-with-formulas",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre a integração de aplicativos Power Platform com o Microsoft SharePoint e Microsoft Teams.",
    "afirmacoes": [
      "Usuários podem interagir com aplicativos canvas diretamente no Microsoft SharePoint e Teams.",
      "Usuários podem interagir com aplicativos orientados por modelo diretamente no Microsoft SharePoint e Teams."
    ],
    "respostas": [true, false],
    "explicacao": "Afirmação 01 - Sim. Aplicativos canvas podem ser incorporados diretamente em listas do SharePoint usando o controle de formulário personalizado ou adicionados como guias em Microsoft Teams.\n\nAfirmação 02 - Não. Aplicativos orientados por modelo se baseiam em entidades do Dataverse e não podem ser integrados diretamente a listas do SharePoint ou adicionados diretamente ao Teams como os canvas apps.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/teams/overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está desenvolvendo um aplicativo orientado por modelos (model-driven app). Você precisa criar e configurar os objetos necessários para o aplicativo. Quais categorias de componentes você deve usar? Para responder, arraste as categorias de componentes apropriadas para os objetos corretos. Cada categoria pode ser usada uma ou mais vezes, ou não ser usada.",
    "itens": [
      { "label": "Interface do usuário (UI)" },
      { "label": "Dados" },
      { "label": "Lógica" },
      { "label": "Visualização" }
    ],
    "grupos": [
      "Relacionamento entre aplicativos",
      "Formulários de entrada",
      "Processo de regra de negócios",
      "Exibições para revisar informações semelhantes"
    ],
    "respostas": {
      "Relacionamento entre aplicativos": ["Dados"],
      "Formulários de entrada": ["Interface do usuário (UI)"],
      "Processo de regra de negócios": ["Lógica"],
      "Exibições para revisar informações semelhantes": ["Interface do usuário (UI)"]
    },
    "explicacao": "Em aplicativos orientados por modelos, os relacionamentos fazem parte da camada de dados. Formulários e visualizações são considerados elementos da interface do usuário, enquanto processos de regra de negócios estão relacionados à lógica do aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-components",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "simnao",
    "texto": "Você está criando um aplicativo canvas que será usado em vários países/regiões. Avalie as afirmações a seguir.",
    "afirmacoes": [
      "O ambiente de criação do aplicativo canvas se adapta à configuração de idioma do autor.",
      "Ao executar um aplicativo canvas em um dispositivo móvel, o aplicativo adota o idioma do autor.",
      "Números e datas nos aplicativos Power Apps se adaptam automaticamente às configurações regionais e de idioma do dispositivo do usuário."
    ],
    "respostas": [true, false, true],
    "explicacao": "Afirmação 01 - Sim. O ambiente de criação do Power Apps canvas adapta-se automaticamente ao idioma definido pelo autor, exibindo interface e comandos nesse idioma.\nAfirmação 02 - Não. O idioma do aplicativo canvas em dispositivos móveis segue a configuração regional do dispositivo do usuário, e não o idioma do autor.\nAfirmação 03 - Sim. O Power Apps ajusta automaticamente a exibição de datas, números e moeda conforme as configurações regionais do dispositivo usado pelo usuário.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/global-apps",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja implementar o Power Apps. Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Criar aplicativos no Power Apps exige proficiência em programação JavaScript.",
      "Você deve selecionar um dos modelos de aplicativo para criar um aplicativo."
    ],
    "respostas": [false, false],
    "explicacao": "Afirmação 01 - Não. O Power Apps permite que usuários criem aplicativos usando uma abordagem low-code, sem a necessidade de conhecimento em JavaScript.\n\nAfirmação 02 - Não. Os usuários podem começar um aplicativo do zero, importar dados ou usar modelos prontos. A seleção de um modelo não é obrigatória.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está atribuindo privilégios em nível de registro para Power Apps e Model-Driven Apps. Qual privilégio você deve usar para garantir o acesso em cada cenário? Para responder, arraste os privilégios apropriados para os requisitos corretos.",
    "itens": [
      { "label": "Anexar (Append)" },
      { "label": "Atribuir (Assign)" },
      { "label": "Compartilhar (Share)" }
    ],
    "grupos": [
      "Permitir que os usuários concedam acesso a um registro que possuem para outros usuários.",
      "Conceder a propriedade de um registro a outro usuário.",
      "Permitir que os usuários associem o registro atual com outro registro."
    ],
    "respostas": {
      "Permitir que os usuários concedam acesso a um registro que possuem para outros usuários.": ["Compartilhar (Share)"],
      "Conceder a propriedade de um registro a outro usuário.": ["Atribuir (Assign)"],
      "Permitir que os usuários associem o registro atual com outro registro.": ["Anexar (Append)"]
    },
    "explicacao": "Compartilhar (Share): usado para conceder acesso a um registro a outro usuário mantendo seu próprio acesso.\nAtribuir (Assign): permite transferir a propriedade de um registro para outro usuário.\nAnexar (Append): permite associar o registro atual a outro, por exemplo, uma nota a uma oportunidade.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/security-roles-privileges#record-level-privileges",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa o Microsoft Power Platform para gerenciar etíquetes de suporte. Os clientes enviam solicitações para um endereço de e-mail de suporte. Todos os e-mails com alta prioridade devem ser registrados em uma planilha do Microsoft Excel para fins históricos. Você precisa identificar os componentes necessários para registrar os e-mails no Excel. Quais componentes você deve usar?",
    "itens": [
      { "label": "Ação" },
      { "label": "Gatilhos" },
      { "label": "Conector" }
    ],
    "grupos": [
      "Inicia um fluxo de trabalho quando um e-mail for enviado para um endereço de e-mail específico.",
      "Avalia se um e-mail é de alta prioridade no fluxo usando uma condição.",
      "Cria uma linha no Excel com informações sobre o e-mail de alta prioridade recebido."
    ],
    "respostas": {
      "Inicia um fluxo de trabalho quando um e-mail for enviado para um endereço de e-mail específico.": ["Gatilhos"],
      "Avalia se um e-mail é de alta prioridade no fluxo usando uma condição.": ["Ação"],
      "Cria uma linha no Excel com informações sobre o e-mail de alta prioridade recebido.": ["Conector"]
    },
    "explicacao": "Um 'gatilho' (Trigger) inicia o fluxo quando um e-mail é recebido. Uma 'ação' (Action) avalia o conteúdo do e-mail para determinar se ele é de alta prioridade. Um 'conector' (Connector) permite interagir com o Excel para registrar as informações do e-mail.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction?tabs=new-designer",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Você está usando o Power Virtual Agents para criar um chatbot para seu portal do Power Apps. O chatbot deve iniciar a conversa do início se a entrada do usuário não for reconhecida. O que você deve configurar?",
    "opcoes": [
      "Gatilho",
      "Recursos de IA",
      "Tópico de fallback",
      "Mensagem de erro"
    ],
    "resposta": 2,
    "explicacao": "O 'Tópico de fallback' é usado para lidar com situações em que a entrada do usuário não é reconhecida pelo chatbot. Se a entrada não corresponder a nenhum tópico ou pergunta, o tópico de fallback será acionado, permitindo configurar uma resposta ou redirecionar a conversa para outro tópico.",
    "link": "https://learn.microsoft.com/pt-br/microsoft-copilot-studio/authoring-system-fallback-topic",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Microsoft 365 e o Power Platform. Você não atribui permissões a nenhum usuário licenciado. Os usuários conseguem criar e editar aplicativos em tela (canvas) do Power Apps. Em qual ambiente os usuários estão criando e editando os aplicativos?",
    "opcoes": [
      "Produção",
      "Teste",
      "Sandbox"
    ],
    "resposta": 1,
    "explicacao": "O ambiente de teste (Test) já não é mais considerado uma categoria distinta. O ambiente padrão (Default) é automaticamente criado pelo Power Apps para cada tenant e permite que todos os usuários criem e editem aplicativos sem permissões específicas.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/environments-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa usa uma planilha do Microsoft Excel para registrar diariamente a qualidade de matérias-primas. O diretor de tecnologia (CTO) deseja usar um aplicativo orientado por modelo (model-driven) para registrar essas informações. O diretor executivo (CEO) somente financiará o desenvolvimento do aplicativo se entender os benefícios desse tipo de solução.\n\nVocê precisa identificar os benefícios de aplicativos orientados por modelo. Quais dois benefícios devem ser destacados?",
    "opcoes": [
      "O aplicativo contém tabelas, formulários e exibições pré-criadas, o que reduz o tempo de desenvolvimento.",
      "Os usuários podem utilizar o mesmo aplicativo em um dispositivo móvel, tablet ou computador.",
      "O aplicativo pode continuar usando a planilha do Excel como fonte de dados.",
      "Tanto funcionários quanto usuários anônimos podem usar o aplicativo."
    ],
    "respostas": [0, 1],
    "explicacao": "Os aplicativos orientados por modelo oferecem componentes reutilizáveis como tabelas, formulários e exibições que aceleram o desenvolvimento. Além disso, são acessíveis em vários dispositivos. O uso do Excel como fonte de dados não é considerado um benefício principal, e o acesso por usuários anônimos não é suportado como benefício padrão.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/model-driven-app-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está criando um aplicativo orientado por modelo. É necessário adicionar formulários ao aplicativo. Quais tipos de formulário você deve usar para cada requisito?",
    "pares": [
      {
        "requisito": "Um formulário compacto para dispositivos móveis",
        "opcoes": [
          "Cartão",
          "Criação Rápida",
          "Visualização Rápida"
        ],
        "resposta": 0
      },
      {
        "requisito": "Um formulário básico para entrada de dados",
        "opcoes": [
          "Principal",
          "Criação Rápida",
          "Visualização Rápida"
        ],
        "resposta": 1
      },
      {
        "requisito": "Um formulário compacto para uso em clientes web para editar registros",
        "opcoes": [
          "Visualizações de Pesquisa Avançada",
          "Visualizações Associadas",
          "Visualizações de Pesquisa",
          "Visualizações Públicas"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "O tipo de formulário 'Cartão' é usado para exibição compacta em dispositivos móveis. 'Criação Rápida' é apropriado para entrada básica de dados. 'Visualizações de Pesquisa' são usadas em clientes web para localizar e editar registros de forma eficiente.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-and-edit-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa um aplicativo orientado por modelo para sua equipe de vendas. Você deve personalizar um formulário para atender aos seguintes requisitos:\n- Se uma caixa de seleção estiver marcada, um campo oculto deve aparecer.\n- O formulário deve exibir uma lista de clientes e campos sobre os clientes.\n\nVocê precisa identificar os componentes que um desenvolvedor deve configurar para atender aos requisitos.",
    "itens": [
      { "label": "Coluna" },
      { "label": "Visualização" },
      { "label": "Formulário" },
      { "label": "Tabela" }
    ],
    "grupos": [
      "O campo oculto aparece",
      "Lista de clientes e campos exibidos"
    ],
    "respostas": {
      "O campo oculto aparece": ["Coluna"],
      "Lista de clientes e campos exibidos": ["Formulário"]
    },
    "explicacao": "Para exibir um campo oculto com base em uma condição, é necessário usar uma Coluna com lógica condicional. Já para apresentar uma lista de clientes e seus respectivos campos, o componente adequado é o Formulário.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-and-edit-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa um aplicativo orientado por modelo. Você adicionou várias colunas a um formulário. Os usuários afirmam que as novas colunas não aparecem no formulário. Você precisa corrigir o problema. O que você deve fazer?",
    "opcoes": [
      "Criar um fluxo do Power Automate",
      "Criar uma regra de negócios",
      "Garantir que as colunas estejam em uma única seção do formulário",
      "Copiar o formulário e renomeá-lo",
      "Publicar o formulário"
    ],
    "resposta": 4,
    "explicacao": "A opção correta é publicar o formulário. Se os usuários informam que as novas colunas não aparecem, provavelmente o formulário ainda não foi publicado com as alterações mais recentes. Publicar o formulário torna essas colunas visíveis.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-and-edit-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um aplicativo do Power Apps e um fluxo do Power Automate.\n\nVocê precisa combinar vários tipos de valores de campo em um único valor de texto e formatar essa string.\n\nO que você deve usar?",
    "opcoes": [
      "Condição",
      "Comutador (switch)",
      "Variável de ambiente",
      "Expressão"
    ],
    "resposta": 3,
    "explicacao": "A resposta correta é Expressão. As opções Condição e Switch são usadas para avaliar condições e executar diferentes ações com base nos resultados, mas não são utilizadas para concatenar ou formatar strings. A variável de ambiente serve para armazenar e recuperar dados entre componentes do Power Apps e Power Automate, mas também não se aplica a concatenação ou formatação de texto.",
    "link": "https://learn.microsoft.com/pt-br/azure/logic-apps/workflow-definition-language-functions-reference",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada tipo de aplicativo do Power Apps à sua respectiva funcionalidade.\n\nPara responder, arraste o tipo de aplicativo da coluna da esquerda para sua funcionalidade na direita. Cada tipo pode ser usado mais de uma vez, ou não ser usado.",
    "itens": [
      { "label": "Aplicativo de tela (Canvas app)" },
      { "label": "Aplicativo orientado por modelos (Model-driven app)" }
    ],
    "grupos": [
      "Permite layout, design e esquema de cores totalmente personalizáveis",
      "Conecta-se a várias fontes de dados",
      "Usa fluxos de processo de negócios para guiar os usuários em um processo de entrada de dados",
      "Faz leitura de códigos de barras"
    ],
    "respostas": {
      "Permite layout, design e esquema de cores totalmente personalizáveis": ["Aplicativo de tela (Canvas app)"],
      "Conecta-se a várias fontes de dados": ["Aplicativo de tela (Canvas app)"],
      "Usa fluxos de processo de negócios para guiar os usuários em um processo de entrada de dados": ["Aplicativo orientado por modelos (Model-driven app)"],
      "Faz leitura de códigos de barras": ["Aplicativo de tela (Canvas app)"]
    },
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5",
    "explicacao": "Aplicativos de tela oferecem alta flexibilidade em layout, design e conectividade com múltiplas fontes, incluindo suporte à leitura de códigos de barras. Já aplicativos orientados por modelos utilizam fluxos de processo de negócios para padronizar a entrada de dados e navegação em ambientes estruturados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/add-data-connection"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza um aplicativo de tela do Power Apps para inserir informações. Esse aplicativo usa uma lista do Microsoft SharePoint para armazenar os dados.\n\nUm usuário copia manualmente as informações para uma instância do Microsoft Dataverse.\n\nVocê precisa automatizar esse processo manual.\n\nVocê deve criar uma solução para atender a esse requisito.\n\nO que você deve fazer?",
    "opcoes": [
      "Criar um controle do Power Apps Component Framework (PCF) para os eventos OnLoad.",
      "Criar um fluxo de processo de negócios que aciona um fluxo do Power Automate para desktop.",
      "Criar um controle do Power Apps Component Framework (PCF) para o evento OnSave.",
      "Criar um fluxo em nuvem do Power Automate sem conectores.",
      "Criar um fluxo em nuvem do Power Automate com um conector para email."
    ],
    "resposta": 4,
    "explicacao": "A alternativa correta é criar um fluxo em nuvem do Power Automate com um conector para email. Isso porque o fluxo deve ser acionado automaticamente quando um novo item for criado na lista do SharePoint, copiando as informações para o Microsoft Dataverse. Para isso, é necessário um conector, como o de email ou SharePoint.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/get-started-logic-flow",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "multipla",
    "texto": "Uma companhia aérea deseja usar o Power Apps para gerenciar o balcão de achados e perdidos.\n\nVocê precisa determinar se a empresa deve criar um aplicativo de tela ou um aplicativo orientado por modelos.\n\nQuais duas perguntas você deve fazer para determinar qual tipo de aplicativo a empresa deve usar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Quais fontes de dados serão utilizadas?",
      "Quais usuários ou grupos do Microsoft Entra ID (antigo Azure AD) usarão o aplicativo?",
      "O aplicativo será usado em dispositivos móveis ou tablets?",
      "O aplicativo precisa usar um layout específico?",
      "Os desenvolvedores do aplicativo terão habilidades de codificação?"
    ],
    "respostas": [0, 3],
    "explicacao": "As fontes de dados influenciam diretamente na escolha entre aplicativos de tela e aplicativos orientados por modelos, pois eles se conectam a dados de maneiras diferentes. Além disso, a necessidade de um layout específico é relevante: aplicativos de tela oferecem mais controle sobre a interface do usuário, enquanto aplicativos orientados por modelos fornecem uma interface padrão e baseada em dados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/guidance/planning/app-type",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "simnao",
    "texto": "Você criou um aplicativo orientado por modelos. Você precisa determinar quais personalizações podem ser feitas em formulários de tabela.",
    "afirmacoes": [
      "Um formulário pode ser tornado visível apenas para usuários que receberam uma função de segurança específica.",
      "O rótulo de uma coluna em um formulário pode ser diferente do nome de exibição da coluna.",
      "Você pode editar a exibição do sistema chamada Pesquisa Rápida (Quick Find) para alterar o título e o subtítulo exibidos para registros em uma coluna de pesquisa (lookup)."
    ],
    "respostas": [true, true, false],
    "explicacao": "Formulários podem ser associados a funções de segurança específicas, o que restringe sua visibilidade. Além disso, o rótulo exibido no formulário pode ser personalizado independentemente do nome da coluna. No entanto, não é possível alterar o título e o subtítulo na exibição do sistema Pesquisa Rápida (Quick Find) para colunas de pesquisa; essas exibições são limitadas em termos de personalização.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-design-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está usando um aplicativo orientado por modelos para gerenciar dados de clientes. A empresa exige atualizações no formulário principal da tabela de contas. As atualizações devem ser feitas dentro do aplicativo.\n\nVocê precisa fazer as atualizações necessárias. Quais alterações você deve fazer para atender a cada requisito?",
    "itens": [
      { "label": "Editar a coluna existente" },
      { "label": "Criar uma nova coluna" }
    ],
    "grupos": [
      "Exigi que a cidade seja selecionada a partir de uma lista suspensa em vez de inserida como texto.",
      "Restringi o número máximo de caracteres do campo Código Postal para 4.",
      "Remove o componente de hora da coluna de data e hora Último em espera."
    ],
    "respostas": {
      "Exigi que a cidade seja selecionada a partir de uma lista suspensa em vez de inserida como texto.": ["Editar a coluna existente"],
      "Restringi o número máximo de caracteres do campo Código Postal para 4.": ["Criar uma nova coluna"],
      "Remove o componente de hora da coluna de data e hora Último em espera.": ["Criar uma nova coluna"]
    },
    "explicacao": "A exigência de selecionar a cidade por uma lista suspensa pode ser atendida alterando a entrada da coluna existente para uma opção de escolha (choice). As outras duas mudanças requerem novos formatos ou restrições, sendo mais apropriado criar novas colunas com os formatos desejados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-edit-fields",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },

  {
    "tipo": "multipla",
    "texto": "Uma empresa cria aplicativos de tela que utilizam uma fonte de dados da equipe de vendas. Para atender às políticas de dispositivos da empresa, você deve determinar os formatos de aplicativo disponíveis que a equipe de vendas pode selecionar ao criar o aplicativo de tela.\n\nVocê precisa determinar os formatos de aplicativo disponíveis.\n\nQuais dois formatos de aplicativo você deve selecionar?",
    "opcoes": [
      "Android",
      "iOS",
      "Celular",
      "Computador",
      "Tablet"
    ],
    "respostas": [2, 4],
    "explicacao": "Aplicativos de tela (Canvas apps) podem ser criados para dispositivos móveis (Celular) e tablets (Tablet). O formato para celular é ideal para acesso em movimento, enquanto o formato para tablet oferece uma tela maior para usuários que trabalham com interfaces mais complexas ou dados mais detalhados.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está passando por uma transformação digital utilizando a Microsoft Power Platform.<br><br>Os departamentos da empresa possuem os seguintes requisitos:<br><br><table border='1' cellpadding='4' cellspacing='0'><thead><tr><th>Departamento</th><th>Requisito</th></tr></thead><tbody><tr><td>Atendimento ao cliente</td><td>Permitir que clientes sem licenças da Microsoft Power Platform criem suas próprias contas e registrem tíquetes de atendimento</td></tr><tr><td>Instalações</td><td>Permitir que técnicos tirem fotos de equipamentos do armazém com seus dispositivos móveis e registrem detalhes sobre a condição do equipamento</td></tr><tr><td>Finanças</td><td>Copiar automaticamente os detalhes de faturas recebidas em uma caixa de correio compartilhada para o sistema financeiro</td></tr><tr><td>Marketing</td><td>Criar uma lista de palavras-chave e frases usadas por clientes que forneceram feedback</td></tr></tbody></table><br>Você precisa determinar qual departamento pode usar um aplicativo de tela para atender ao seu requisito.<br><br>Para qual departamento você deve desenvolver um aplicativo de tela?",
    "opcoes": [
      "Instalações",
      "Finanças",
      "Atendimento ao cliente",
      "Marketing"
    ],
    "resposta": 0,
    "explicacao": "O departamento de Instalações exige a coleta de dados por dispositivos móveis, como fotos e informações em campo. Aplicativos de tela (Canvas apps) são ideais para esse tipo de tarefa personalizada e responsiva.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Um usuário solicita a remoção da coluna Fax do seguinte formulário em um aplicativo orientado por modelos: Qual formulário você deve abrir no App Designer?",
    "opcoes": [
      "Conta",
      "Informações",
      "Resumo",
      "Alpine Ski House"
    ],
    "resposta": 1,
    "explicacao": "O formulário correto para editar é o chamado 'Informações'. Ele está associado à entidade Conta e é onde os campos como 'Fax' podem ser modificados ou removidos dentro do App Designer.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-edit-main-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5",
    "imagemUrl": "img/3.png"
  },
  {
    "tipo": "unica",
    "texto": "Você cria um modelo personalizado no Construtor de IA e o utiliza em fluxos na nuvem do Power Automate. Os usuários informam que não conseguem utilizar o modelo em seus fluxos. \n\nVocê precisa permitir que os usuários acessem o modelo em seus fluxos.\n\nQual ação você deve realizar no modelo?",
    "opcoes": [
      "Compartilhar",
      "Editar",
      "Publicar",
      "Treinar"
    ],
    "resposta": 0,
    "explicacao": "Para permitir que os usuários acessem o modelo personalizado do Construtor de IA em seus fluxos do Power Automate, é necessário compartilhar o modelo. Compartilhando o modelo, você concede aos usuários as permissões necessárias para usá-lo em seus próprios fluxos, possibilitando a integração das capacidades de IA ao processo de automação.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/share-model",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza o Microsoft Power Platform para monitorar redes sociais. Você cria um fluxo de nuvem no Power Automate para processar mensagens nas redes sociais que mencionam positivamente a empresa e seus produtos. É necessário escolher um conector para realizar a análise de sentimentos nessas mensagens. Quais dois conectores você pode usar no fluxo? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Azure Communication Services Chat",
      "Language – Perguntas e Respostas",
      "Construtor de IA (AI Builder)",
      "Azure Application Insights",
      "Serviço de Cognição do Azure para Linguagem"
    ],
    "respostas": [2, 4],
    "explicacao": "O Construtor de IA (AI Builder) permite incorporar análise de sentimentos em fluxos do Power Automate com base em mensagens recebidas. O Serviço de Cognição do Azure para Linguagem, anteriormente conhecido como Text Analytics, é outro conector que detecta sentimentos, linguagem e outros aspectos em textos. Ambos são adequados para análise de mensagens de redes sociais.",
    "link": "https://learn.microsoft.com/pt-br/connectors/cognitiveservicestextanalytics/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa armazena as informações de garantia de seus clientes no Microsoft Dataverse. Clientes autenticados e autorizados devem ser capazes de acessar suas próprias informações de garantia sem exigir uma licença atribuída do Microsoft Power Platform. Você precisa compartilhar essas informações de garantia com esses clientes. O que você deve usar?",
    "opcoes": [
      "Relatório do Power BI",
      "Aplicativo baseado em modelo",
      "Site do Power Pages",
      "Aplicativo Canvas"
    ],
    "resposta": 2,
    "explicacao": "O Power Pages permite que clientes autenticados e autorizados acessem dados armazenados no Microsoft Dataverse sem a necessidade de uma licença atribuída do Microsoft Power Platform, tornando-o ideal para cenários externos como portais de garantia.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/security/authentication/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },

  {
    "tipo": "multipla",
    "texto": "Você está criando uma solução de autoatendimento para gerenciar chamadas recebidas de suporte a vendas. A solução deve detectar a localização do chamador e traduzir qualquer informação fornecida da língua nativa do chamador para o inglês. Quais dois componentes você deve utilizar? Cada resposta correta apresenta parte da solução. NOTA: Cada seleção correta vale um ponto.",
    "opcoes": [
      "Power Virtual Agents",
      "Serviços Cognitivos do Microsoft Azure",
      "Modelo de Detecção de Idioma do Criador de IA",
      "Microsoft Dynamics 365 Assistência Remota para Dispositivos Móveis"
    ],
    "respostas": [1, 2],
    "explicacao": "Serviços Cognitivos do Microsoft Azure são utilizados para realizar traduções automáticas de textos entre idiomas. O Modelo de Detecção de Idioma do Criador de IA identifica automaticamente o idioma usado pelo usuário. Power Virtual Agents cria chatbots interativos, o que não atende a exigência de tradução automática. Microsoft Dynamics 365 Assistência Remota para Dispositivos Móveis é voltado para suporte visual remoto e não realiza traduções ou detecção de idioma.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/get-started-with-ai-builder/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "combobox",
    "texto": "Você cria soluções com base na Microsoft Power Platform. Você deseja gerar previsões em fluxos de nuvem do Power Automate usando modelos de aprendizado de máquina (ML). Você precisa escolher como criar e treinar os modelos de ML para as previsões na plataforma. Criar e treinar modelos de ML sem código para uso em fluxos da Microsoft Power Platform é realizado usando: <combobox>",
    "opcoes": [
      "Selecione a opção desejada",
      "Construtor de IA (AI Builder)",
      "Serviços Cognitivos do Microsoft Azure",
      "Aprendizado de Máquina do Azure",
      "Pesquisa Cognitiva do Azure"
    ],
    "resposta": 1,
    "explicacao": "O Construtor de IA (AI Builder) é a ferramenta sem código da Power Platform que permite criar e treinar modelos de aprendizado de máquina diretamente integrados aos fluxos do Power Automate. Os Serviços Cognitivos do Microsoft Azure fornecem APIs pré-construídas para cenários específicos de IA; o Aprendizado de Máquina do Azure é uma plataforma para cenários de ML profissionais que requerem configuração de ambiente e código; e a Pesquisa Cognitiva do Azure é um serviço de indexação e pesquisa inteligente.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/prediction-overview",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Você cria um aplicativo canvas usando a opção Iniciar com dados. Você conecta uma planilha que contém registros de clientes. Os registros de clientes são exibidos em uma lista na tela Navegar. Você precisa modificar uma propriedade do controle nessa tela. Qual controle você deve modificar?",
    "opcoes": [
      "Formulário de exibição",
      "Ícone",
      "Pesquisa",
      "Galeria"
    ],
    "resposta": 3,
    "explicacao": "O controle Galeria exibe registros em formato de lista na tela Navegar e permite modificar propriedades de exibição dos itens. Formulário de exibição apresenta detalhes de um único registro; Ícone exibe elementos gráficos; e Pesquisa filtra registros sem alterar a apresentação da lista.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/controls/control-gallery",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza a Microsoft Power Platform. Um administrador cria uma nova política de prevenção de perda de dados (DLP). Você precisa identificar os componentes da Microsoft Power Platform que devem ser atualizados para atender à política. Quais dois tipos de componentes você deve identificar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Fluxos de nuvem do Power Automate",
      "Aplicativos canvas",
      "Relatórios do Power BI",
      "Aplicativos dirigidos por modelo",
      "Sites do Power Pages"
    ],
    "respostas": [0, 1],
    "explicacao": "As políticas de DLP definem quais conectores ou serviços podem ser usados em fluxos de nuvem do Power Automate e em aplicativos canvas para garantir o controle e a conformidade de dados. Outros componentes, como relatórios do Power BI, aplicativos dirigidos por modelo e sites do Power Pages, não são diretamente afetados pelas configurações de DLP.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/admin/wp-data-loss-prevention",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "comboboxs",
    "texto": "Para cada um dos requisitos abaixo, selecione o componente da Microsoft Power Platform mais adequado.",
    "pares": [
      {
        "requisito": "Atualizar dados em uma API hospedada no Azure.",
        "opcoes": [
          "Conector personalizado",
          "Microsoft Dataverse",
          "Power Query",
          "Conector padrão"
        ],
        "resposta": 0
      },
      {
        "requisito": "Atualizar arquivos em pastas de bibliotecas de documentos do SharePoint.",
        "opcoes": [
          "Conector personalizado",
          "Microsoft Dataverse",
          "Power Query",
          "Conector padrão"
        ],
        "resposta": 3
      },
      {
        "requisito": "Ingerir e transformar dados no Microsoft Dataverse usando fluxos de dados.",
        "opcoes": [
          "Conector personalizado",
          "Microsoft Dataverse",
          "Power Query",
          "Conector padrão"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Conectores personalizados permitem chamar APIs externas hospedadas no Azure; conectores padrão gerenciam integração com serviços como SharePoint; Power Query é a ferramenta de transformação usada em dataflows; e Microsoft Dataverse armazena os dados já processados.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Um hotel desenvolve uma lista de verificação de limpeza para sua equipe usar ao terminar de limpar um quarto. A equipe deve usar o dispositivo móvel para marcar cada tarefa concluída e tirar uma foto da cama preparada. Os resultados da lista de verificação para cada quarto devem ser armazenados em uma lista do SharePoint. Qual componente da Microsoft Power Platform atende a esse requisito?",
    "opcoes": [
      "Site do Power Pages",
      "Chatbot do Power Virtual Agents",
      "Relatório do Power BI",
      "Aplicativo dirigido por modelo",
      "Aplicativo canvas"
    ],
    "resposta": 4,
    "explicacao": "Para atender a esse requisito, o Aplicativo canvas é a melhor escolha. Ele permite criar aplicativos personalizados que podem ser usados em dispositivos móveis para marcar tarefas concluídas e tirar fotos. Além disso, você pode integrar o aplicativo com o SharePoint para armazenar os resultados da lista de verificação.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/getting-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa usa o Microsoft Power Apps e o Microsoft Azure para modernizar sua força de trabalho móvel. Você precisa identificar o tipo de aplicativo correto para três casos de uso abaixo.",
    "itens": [
      { "label": "Canvas" },
      { "label": "Lógica" },
      { "label": "Dirigido por modelo" }
    ],
    "grupos": [
      "Aplicativo para auditar expositores de loja de varejo com layout específico para tablet",
      "Aplicativo para criar pedidos de venda usando fluxos de processo de negócios",
      "Aplicativo para exibir informações de produto usando dados do Microsoft Dataverse, Microsoft Excel e Microsoft SharePoint"
    ],
    "respostas": {
      "Aplicativo para auditar expositores de loja de varejo com layout específico para tablet": ["Canvas"],
      "Aplicativo para criar pedidos de venda usando fluxos de processo de negócios": ["Lógica"],
      "Aplicativo para exibir informações de produto usando dados do Microsoft Dataverse, Microsoft Excel e Microsoft SharePoint": ["Dirigido por modelo"]
    },
    "explicacao": "Aplicativos Canvas permitem design personalizado para formatos específicos, aplicativos de Lógica (Logic) suportam fluxos de processo de negócios, e aplicativos dirigidos por modelo utilizam dados do Dataverse e se conectam a diversas fontes para exibir informações de produto.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa tem um seminário programado. O convite será enviado à base de clientes existente. O gerente de eventos quer que os clientes se registrem e façam o pagamento de seus ingressos pelo dispositivo móvel. O responsável pela segurança exige tecnologia compatível com PCI para o processamento de pagamentos. Identifique os componentes da Microsoft Power Platform que atendem aos requisitos abaixo.",
    "itens": [
      { "label": "Power Pages" },
      { "label": "Power Automate" },
      { "label": "Power Virtual Agents" }
    ],
    "grupos": [
      "Registrar e pagar pelo dispositivo móvel",
      "Suportar criação de interface compatível com PCI para processamento de pagamento"
    ],
    "respostas": {
      "Registrar e pagar pelo dispositivo móvel": ["Power Pages"],
      "Suportar criação de interface compatível com PCI para processamento de pagamento": ["Power Pages"]
    },
    "explicacao": "O Power Pages permite criar sites responsivos e seguros, ideais para registro e pagamento em dispositivos móveis, e oferece suporte a interfaces compatíveis com o padrão PCI DSS para proteção de dados de cartão de pagamento.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },

  {
    "tipo": "simnao",
    "texto": "Para cada uma das seguintes afirmações sobre o modelo de processamento de recibos do AI Builder em um aplicativo canvas, selecione Sim se a afirmação for verdadeira; caso contrário, selecione Não.",
    "afirmacoes": [
      "O processamento de recibos requer uma foto tirada usando o controle de câmera no aplicativo canvas.",
      "O processamento de recibos pode extrair dados de texto impresso em um recibo.",
      "O processamento de recibos pode extrair dados de texto manuscrito em um recibo."
    ],
    "respostas": [false, true, true],
    "explicacao": "O processamento de recibos não exige necessariamente o uso do controle de câmera, pois imagens podem ser carregadas de outras formas; o modelo extrai dados de texto impresso e também reconhece texto manuscrito em recibos.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/flow-receipt-processing",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa o Dataverse para armazenar informações sobre seus produtos e níveis de estoque. A empresa necessita de uma solução que permita a clientes existentes e potenciais realizar as seguintes ações de autoatendimento: localizar informações sobre produtos disponíveis, registrar seus dados para materiais de marketing e criar seus próprios pedidos. Qual componente da Microsoft Power Platform você deve recomendar?",
    "opcoes": [
      "Power BI",
      "Power Pages",
      "Aplicativo canvas",
      "Aplicativo dirigido por modelo"
    ],
    "resposta": 1,
    "explicacao": "O Power Pages permite criar portais web responsivos voltados para usuários externos, onde clientes podem pesquisar produtos, preencher formulários para materiais de marketing e criar pedidos de forma self-service, tudo integrado ao Dataverse.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/introduction",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Um consultório médico utiliza um aplicativo dirigido por modelo que usa o Microsoft Dataverse. Você planeja criar uma tela para que os usuários capturem informações sobre médicos. A tela deve permitir: armazenar dados adicionais de perfil de médico que não fazem parte da tabela padrão de conta ou de contato; armazenar informações sobre a especialidade do médico no formulário de perfil; e selecionar uma seguradora em um campo de lista suspensa com 10 opções. Você precisa usar componentes da Microsoft Power Platform para armazenar esses dados no Dataverse.",
    "itens": [
      { "label": "Tabela" },
      { "label": "Coluna" },
      { "label": "Escolha" },
      { "label": "Linha" }
    ],
    "grupos": [
      "Armazenar dados adicionais de perfil de médico",
      "Armazenar informações sobre a especialidade do médico",
      "Selecionar uma seguradora"
    ],
    "respostas": {
      "Armazenar dados adicionais de perfil de médico": ["Tabela"],
      "Armazenar informações sobre a especialidade do médico": ["Coluna"],
      "Selecionar uma seguradora": ["Escolha"]
    },
    "explicacao": "Tabelas armazenam conjuntos de registros (perfil de médico adicional); Colunas armazenam valores de campos individuais (especialidade); e Escolha cria um campo de seleção com opções predefinidas, ideal para listar seguradoras.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/model-driven-apps/create-and-edit-forms",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está investigando as capacidades dos serviços da Microsoft Power Platform. Relacione cada serviço à capacidade correspondente.",
    "itens": [
      { "label": "Dataverse" },
      { "label": "Power Apps" },
      { "label": "Power Automate" },
      { "label": "Power Pages" }
    ],
    "grupos": [
      "Criar rapidamente um aplicativo que pode se conectar a várias fontes de dados",
      "Fornecer um armazenamento de dados escalável e altamente seguro",
      "Definir lógica comum no contexto de vários aplicativos",
      "Atualizar uma lista do SharePoint toda semana usando lógica comum"
    ],
    "respostas": {
      "Criar rapidamente um aplicativo que pode se conectar a várias fontes de dados": ["Power Apps"],
      "Fornecer um armazenamento de dados escalável e altamente seguro": ["Dataverse"],
      "Definir lógica comum no contexto de vários aplicativos": ["Power Automate"],
      "Atualizar uma lista do SharePoint toda semana usando lógica comum": ["Power Pages"]
    },
    "explicacao": "Power Apps permite criar rapidamente aplicativos com conectividade a várias fontes de dados; Dataverse oferece uma solução de armazenamento de dados segura e escalável; Power Automate define lógica de negócios comum em diversos aplicativos; e Power Pages pode acionar lógica e processar atualizações em listas do SharePoint por meio de páginas e fluxos integrados.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está implementando a Microsoft Power Platform. Atualmente, a empresa armazena dados em um banco de dados SQL Server. Você precisa explicar os principais benefícios do Dataverse em comparação ao SQL Server. Quais três benefícios você deve destacar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Alterações no esquema de dados podem ser feitas sem nenhum conhecimento de código",
      "Aplicativos de engajamento do Dynamics 365 existentes integram-se nativamente ao Dataverse",
      "O Dataverse possui várias opções de extensibilidade dentro do Microsoft Azure",
      "Administradores podem gerenciar todos os aspectos da plataforma subjacente",
      "O Dataverse pode ser hospedado em diferentes provedores de nuvem para melhorar a resiliência"
    ],
    "respostas": [0, 1, 2],
    "explicacao": "No Dataverse, é possível alterar o esquema de dados por meio da interface sem escrever código; aplicativos de engajamento do Dynamics 365 usam o Dataverse como repositório nativo; e o Dataverse oferece opções de extensibilidade, como plug-ins e APIs, integradas ao Azure.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/developer/get-started",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está usando serviços da Microsoft Power Platform para aumentar a produtividade dos negócios. Você precisa identificar os cenários de produtividade que o Copilot pode resolver. Quais três benefícios o Copilot pode fornecer? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Permitir que usuários de aplicativos dirigidos por modelo façam perguntas sobre seus dados",
      "Criar aplicativos canvas descrevendo o que os criadores desejam construir",
      "Acionar um fluxo automatizado do Power Automate",
      "Explicar a funcionalidade de um fluxo do Power Automate existente",
      "Ler uma imagem de cartão de visita e extrair valores de texto"
    ],
    "respostas": [0, 1, 3],
    "explicacao": "O Copilot permite que usuários interajam com dados em aplicativos dirigidos por modelo usando linguagem natural; pode gerar aplicativos canvas a partir de descrições em linguagem natural; e fornece explicações detalhadas sobre como um fluxo do Power Automate opera, ajudando na compreensão e otimização de processos.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/copilot",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está avaliando o modelo de segurança da Microsoft Power Platform. Você precisa identificar o nível mais baixo possível ao qual a autorização pode ser aplicada. Qual nível você deve identificar?",
    "opcoes": [
      "Tenant",
      "Linha",
      "Ambiente",
      "Coluna"
    ],
    "resposta": 1,
    "explicacao": "No modelo de segurança da Power Platform, o nível mais granular de autorização é o nível de linha (row-level), garantindo que apenas usuários ou funções autorizadas possam acessar registros específicos (linhas) em uma tabela do Dataverse. Outros níveis (ambiente, tenant, coluna) são mais amplos ou aplicados de forma diferente.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/guidance/planning/security",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa possui um aplicativo do Power Apps usado pela maioria dos funcionários e está expandindo para outros países/regiões. É necessário traduzir texto gerado no aplicativo em tempo real. Qual solução você deve recomendar?",
    "opcoes": [
      "Microsoft Azure Synapse Analytics",
      "Serviços Cognitivos do Microsoft Azure",
      "Conector do Dataverse",
      "Power BI"
    ],
    "resposta": 1,
    "explicacao": "Os Serviços Cognitivos do Microsoft Azure oferecem APIs de tradução em tempo real sem exigir especialização em machine learning, permitindo integrar facilmente a capacidade de tradução dentro de aplicativos canvas ou model-driven.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/translator/quickstart-translator",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  },
  {
    "tipo": "unica",
    "texto": "Você criou um chatbot no Power Virtual Agents. Você precisa compartilhar o bot com outros membros da equipe para que eles possam testá-lo antes de disponibilizá-lo para os clientes. O que você deve usar?",
    "opcoes": [
      "Site de demonstração",
      "Site de produção ao vivo",
      "Recurso de bate-papo de teste"
    ],
    "resposta": 2,
    "explicacao": "Para compartilhar o chatbot com outros membros da equipe para testes, você deve usar o Recurso de bate-papo de teste. Este recurso permite que os membros da equipe interajam com o bot em um ambiente de teste, garantindo que todas as funcionalidades estejam funcionando corretamente antes de disponibilizá-lo para os clientes.",
    "link": "https://learn.microsoft.com/pt-br/microsoftteams/platform/bots/how-to/add-power-virtual-agents-bot-to-teams",
    "dominio": "Demonstrar as funcionalidades do Power Apps",
    "simulado": "pl-5"
  }





];