// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre a implementação de fluxos no Power Automate.",
    "afirmacoes": [
      "Fluxos de processo de negócios são considerados fluxos automáticos.",
      "Você deve criar um fluxo automático para iniciar um fluxo quando um usuário seleciona um botão em um formulário."
    ],
    "respostas": [false, false],
    "explicacao": "A primeira afirmação está incorreta porque os fluxos de processo de negócios são uma categoria distinta e não são classificados como fluxos automáticos; eles são voltados para guiar o usuário por etapas específicas em um processo. A segunda também está incorreta, pois esse tipo de execução pode ser feito com fluxos instantâneos, acionados manualmente por botões em formulários ou aplicativos, sem a necessidade de fluxo automático.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/business-process-flows-overview",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está planejando criar um aplicativo orientado por modelos para uma empresa que vende plantas e suprimentos de jardinagem. O aplicativo deve atender aos seguintes requisitos:\n\n- Enviar automaticamente um e-mail para um cliente quando um registro for modificado.\n- Garantir que todos os vendedores sigam as mesmas etapas ao processar vendas.\n\nVocê precisa criar fluxos do Power Automate para o aplicativo. Quais tipos de fluxo você deve usar? Relacione corretamente cada requisito ao tipo de fluxo correspondente.",
    "itens": [
      { "label": "Botão" },
      { "label": "Automático" },
      { "label": "Agendado" },
      { "label": "Fluxo de processo de negócios" }
    ],
    "grupos": [
      "Envia e-mail para os clientes.",
      "Garanti que os vendedores sigam as mesmas etapas."
    ],
    "respostas": {
      "Envia e-mail para os clientes.": ["Automático"],
      "Garanti que os vendedores sigam as mesmas etapas.": ["Fluxo de processo de negócios"]
    },
    "explicacao": "Fluxos automáticos são usados para iniciar ações automaticamente com base em eventos, como a modificação de um registro. Já os fluxos de processo de negócios garantem que os usuários sigam uma sequência específica de etapas, ideal para padronizar processos de vendas.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/flow-types",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está criando um aplicativo canvas para gerenciar relatórios semanais de status de usuários sobre projetos. Os relatórios de status devem ser criados semanalmente e podem incluir solicitações de escalonamento para tarefas em atraso ou em risco. Quando um relatório é enviado com uma solicitação de escalonamento, o aplicativo deve enviar automaticamente uma mensagem de texto para o gerente do responsável. Também deve ser enviado um lembrete automático às 20h de domingo para todos que não enviaram o relatório da semana anterior. Você precisa identificar os mecanismos de implementação apropriados para atender aos requisitos.",
    "itens": [
      { "label": "Ações" },
      { "label": "Gatilhos" },
      { "label": "Condições" },
      { "label": "Fluxos de processo de negócios" }
    ],
    "grupos": [
      "Enviar automaticamente uma mensagem de texto com base no envio do relatório.",
      "Enviar automaticamente um lembrete às 20h com base na ausência de envio de relatório."
    ],
    "respostas": {
      "Enviar automaticamente uma mensagem de texto com base no envio do relatório.": ["Gatilhos"],
      "Enviar automaticamente um lembrete às 20h com base na ausência de envio de relatório.": ["Condições"]
    },
    "explicacao": "Gatilhos são usados para iniciar ações automaticamente com base em eventos, como o envio de um relatório com solicitação de escalonamento. Condições são utilizadas para avaliar situações específicas, como a ausência de um relatório enviado até certo horário, e tomar ações com base nisso, como o envio de lembretes.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está criando uma solução no Power Automate. É necessário selecionar a ação de controle apropriada para cada função no fluxo. Relacione as ações de controle com suas respectivas funções.",
    "itens": [
      { "label": "Executar até (Do until)" },
      { "label": "Aplicar a cada (Apply to each)" },
      { "label": "Alternar (Switch)" },
      { "label": "Condição (Condition)" }
    ],
    "grupos": [
      "Continuar executando um conjunto de ações até que uma condição se torne verdadeira.",
      "Permitir várias ramificações com base em um conjunto de opções.",
      "Permitir que duas ramificações sejam criadas com base em uma condição verdadeira/falsa."
    ],
    "respostas": {
      "Continuar executando um conjunto de ações até que uma condição se torne verdadeira.": ["Executar até (Do until)"],
      "Permitir várias ramificações com base em um conjunto de opções.": ["Alternar (Switch)"],
      "Permitir que duas ramificações sejam criadas com base em uma condição verdadeira/falsa.": ["Condição (Condition)"]
    },
    "explicacao": "A ação 'Do until' repete um conjunto de etapas até que uma condição seja verdadeira. A ação 'Switch' permite avaliar múltiplas possibilidades com base em diferentes valores. A ação 'Condition' permite seguir caminhos diferentes com base em uma avaliação booleana (verdadeiro/falso).",
    "link": "https://learn.microsoft.com/pt-br/power-automate/desktop-flows/actions-reference/flowcontrol",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está utilizando a Power Platform para criar uma solução de verificação de integridade de projetos. Para cada projeto ativo, os membros da equipe utilizarão o aplicativo para registrar uma nota de integridade e inserir observações. A solução deve atender aos seguintes requisitos:  - Se a nota de integridade for baixa, um e-mail deve ser enviado ao gerente informando que é necessária uma intervenção. - Se não houver observações registradas, uma notificação móvel deve ser enviada ao gerente alertando sobre a ausência de comentários.  Quais ações você deve realizar em sequência? Para responder, mova as ações apropriadas da lista para a área de resposta e organize-as na ordem correta.",
    "itens": [
      { "label": "Criar um fluxo de processo de negócios." },
      { "label": "Adicionar as ações." },
      { "label": "Criar um aplicativo do Power Apps." },
      { "label": "Criar um fluxo de botão." },
      { "label": "Criar um fluxo automatizado." },
      { "label": "Adicionar os gatilhos." },
      { "label": "Adicionar as condições." },
      { "label": "Criar um chatbot do Power Automate Virtual Agents." }
    ],
    "grupos": [
      "Passo 1",
      "Passo 2",
      "Passo 3",
      "Passo 4"

    ],
    "respostas": {
      "Passo 1": ["Criar um fluxo automatizado."],
      "Passo 2": ["Adicionar os gatilhos."],
      "Passo 3": ["Criar um aplicativo do Power Apps."],
      "Passo 4": ["Adicionar as ações."]
    },
    "explicacao": "Etapa 1: Criar um fluxo automatizado Você pode usar o Power Automate para criar uma lógica que execute uma ou mais tarefas quando um evento ocorrer em um aplicativo canvas. Por exemplo, é possível configurar um botão para que, ao ser selecionado por um usuário, um item seja criado em uma lista criada com o Microsoft Lists, um e-mail ou solicitação de reunião seja enviado, um arquivo seja adicionado à nuvem ou todas essas ações sejam realizadas. Você pode configurar qualquer controle no aplicativo para iniciar o fluxo, que continuará em execução mesmo que o Power Apps seja fechado.  Etapa 2: Adicionar os gatilhos Nesta etapa, você criará um fluxo usando o Power Automate, que criará um item em uma lista com base no valor inserido em um aplicativo criado com o Power Apps. Você criará o aplicativo que utilizará esse fluxo na próxima etapa. 1 Acesse o Power Apps com sua conta. 2 No menu à esquerda, selecione Fluxos. 3 Clique em + Novo fluxo > Fluxo instantâneo na nuvem. 4 Insira um nome para o fluxo, como por exemplo: FluxoNoAplicativo. 5 Em “Escolher como iniciar este fluxo”, selecione Power Apps.  Etapa 3: Criar um aplicativo do Power Apps Nesta etapa, você aprenderá a criar um aplicativo no Power Apps que utilize o fluxo criado anteriormente. O aplicativo usará o texto inserido em uma caixa de texto e, ao clicar em um botão, acionará o fluxo para criar um item na lista selecionada. 1 Crie um aplicativo canvas em branco com um nome como AplicativoComFluxo. 2 No painel esquerdo, selecione + Inserir. 3 Selecione o controle Entrada de texto. 4 Selecione o controle Botão. 5 No canvas, posicione o botão abaixo do campo de entrada de texto. 6 Modele o aplicativo com o layout desejado. 7 No menu superior, selecione Ação e, em seguida, Power Automate.  Etapa 4: Adicionar as ações Depois de configurar o fluxo e o aplicativo, adicione as ações necessárias para executar as tarefas desejadas, como envio de notificações, criação de itens ou integração com outros serviços.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/get-started-logic-flow",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "multipla",
    "texto": "Você planeja usar o Power Automate para executar tarefas de gerenciamento de dados quando os usuários interagirem com dados no modelo de dados comum. Quais três tipos de eventos podem gerar um gatilho para essas tarefas? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Quando um registro é exibido em uma visualização",
      "Quando um registro é excluído",
      "Quando um registro é criado",
      "Quando um registro é atualizado",
      "Quando um registro é lido"
    ],
    "respostas": [1, 2, 3],
    "explicacao": "Os fluxos no Power Automate podem ser acionados quando um registro é criado, atualizado ou excluído. Esses gatilhos são amplamente utilizados para automatizar processos baseados em alterações de dados dentro de tabelas do Dataverse.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/connection-dynamics365",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa utiliza o Dynamics 365 Supply Chain Management. Quando um pedido de venda é criado para um dos clientes que um determinado usuário gerencia, uma tarefa do Microsoft Outlook deve ser criada para lembrar o usuário de realizar ações de acompanhamento exigidas. Você precisa implementar a funcionalidade para criar essas tarefas no Outlook. Quais dois recursos você deve usar? Cada resposta correta representa parte da solução.",
    "opcoes": [
      "Construtor de IA (AI Builder)",
      "Power Apps",
      "Eventos de Negócio (Business Events)",
      "Power Automate",
      "Serviço de Dados Comum (Common Data Service)"
    ],
    "respostas": [2, 3],
    "explicacao": "Eventos de Negócio podem ser consumidos no Power Automate por meio de conectores de aplicativo. Esses eventos são usados como gatilhos e permitem acionar fluxos quando ocorrem mudanças no sistema, como a criação de um pedido de venda. O Power Automate automatiza a criação de tarefas no Outlook com base nesses eventos.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/fin-ops-core/dev-itpro/business-events/business-events-flow",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa usa um aplicativo de terceiros e um processo de aprovação por e-mail. No final do mês, o Departamento de TI insere os dados no Microsoft Excel para criar gráficos dinâmicos. Os gráficos do Excel devem usar a mesma fonte de dados que o Dynamics 365 Field Service. Associe cada necessidade à solução mais adequada.",
    "pares": [
      {
        "requisito": "Criar um fluxo de aprovação.",
        "opcoes": [
          "Notificações de fluxo de trabalho do Dynamics 365",
          "Integração com Microsoft Outlook",
          "AI Builder",
          "Microsoft Flow"
        ],
        "resposta": 3
      },
      {
        "requisito": "Conectar-se aos dados para relatórios.",
        "opcoes": [
          "Common Data Service (atualmente Microsoft Dataverse) e Power BI",
          "Aplicativo de terceiros da AppSource",
          "Integração com arquivos texto personalizados",
          "Dynamics 365 Field Service"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "Para criar fluxos de aprovação modernos e integrados, recomenda-se o uso do Microsoft Flow (Power Automate), que permite configurar aprovações automatizadas via e-mail ou dispositivos móveis. Já a combinação do Microsoft Dataverse com o Power BI permite conectar e visualizar dados de forma eficaz, inclusive os armazenados no Dynamics 365 Field Service.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/modern-approvals",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está usando um modelo de fluxo e deseja adicionar suporte a cenários de negócios adicionais. Relacione cada requisito à ferramenta correta.",
    "itens": [
      { "label": "Testar" },
      { "label": "Verificador de Fluxo (Flow Checker)" }
    ],
    "grupos": [
      "Verificar o fluxo quanto a erros ou avisos.",
      "Executar o fluxo usando dados processados anteriormente.",
      "Monitorar o fluxo enquanto ele está em execução."
    ],
    "respostas": {
      "Verificar o fluxo quanto a erros ou avisos.": ["Verificador de Fluxo (Flow Checker)"],
      "Executar o fluxo usando dados processados anteriormente.": ["Testar"],
      "Monitorar o fluxo enquanto ele está em execução.": ["Testar"]
    },
    "explicacao": "O Verificador de Fluxo (Flow Checker) permite identificar erros no fluxo e fornece sugestões de melhorias com base nas melhores práticas. Já a ferramenta Testar permite executar o fluxo com dados existentes e acompanhar sua execução em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/error-checker?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "unica",
    "texto": "Você está implementando o Power Apps em uma empresa. Os dados de um sistema contábil proprietário devem ser atualizados automaticamente a cada quatro horas no Microsoft Dataverse, sem criar duplicatas. Somente as alterações nos dados devem ser adicionadas. Milhares de registros são adicionados por dia. Você precisa configurar a tecnologia para garantir que os dados sejam integrados a cada quatro horas. O que você deve fazer?",
    "opcoes": [
      "Criar um conector personalizado.",
      "Criar um fluxo em nuvem (Cloud Flow) que exporta e importa os dados.",
      "Exportar todos os dados para o armazenamento do Azure Blob."
    ],
    "resposta": 1,
    "explicacao": "A criação de um fluxo em nuvem que exporta e importa dados com atualização incremental é a abordagem mais eficiente para grandes volumes de dados. O Dataverse permite configurar políticas de atualização incremental com base em critérios definidos por entidade, garantindo a sincronização contínua sem duplicidade.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/data-platform/create-and-use-dataflows",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está criando uma solução com o Power Automate. É necessário selecionar a ação de controle apropriada para cada função no fluxo. Relacione cada função à ação de controle correta.",
    "itens": [
      { "label": "Executar até (Do until)" },
      { "label": "Aplicar a cada (Apply to each)" },
      { "label": "Alternar (Switch)" },
      { "label": "Condição (Condition)" }
    ],
    "grupos": [
      "Continuar executando um conjunto de ações até que uma condição se torne verdadeira.",
      "Permitir que várias ramificações sejam criadas com base em um conjunto de opções.",
      "Permitir que duas ramificações sejam criadas com base em uma condição verdadeira/falsa."
    ],
    "respostas": {
      "Continuar executando um conjunto de ações até que uma condição se torne verdadeira.": ["Executar até (Do until)"],
      "Permitir que várias ramificações sejam criadas com base em um conjunto de opções.": ["Alternar (Switch)"],
      "Permitir que duas ramificações sejam criadas com base em uma condição verdadeira/falsa.": ["Condição (Condition)"]
    },
    "explicacao": "A ação 'Do until' executa repetidamente um conjunto de ações até que uma condição seja satisfeita. A ação 'Switch' permite criar múltiplas ramificações com base em diferentes valores. A ação 'Condição' avalia uma expressão booleana (verdadeiro ou falso) para decidir entre dois caminhos.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/desktop-flows/actions-reference/flowcontrol",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa deseja usar o Power Automate para enviar alertas por e-mail a um funcionário específico sempre que a empresa for mencionada em uma postagem no Twitter. Você precisa criar esse fluxo. A partir de quais dois locais é possível criar o fluxo necessário? Cada resposta correta representa uma solução completa.",
    "opcoes": [
      "Um aplicativo móvel",
      "Um navegador",
      "Um aplicativo de desktop",
      "Dynamics 365"
    ],
    "respostas": [0, 1],
    "explicacao": "É possível criar fluxos no Power Automate tanto pelo aplicativo móvel quanto por um navegador acessando o portal web. O Power Automate não possui um aplicativo de desktop independente para criação de fluxos, e o Dynamics 365 não é a interface direta para isso.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você está criando uma solução com o Power Apps para uma empresa que fabrica bicicletas. A empresa possui os seguintes requisitos:\n\n- Um fornecedor envia semanalmente uma planilha do Microsoft Excel para a empresa. A planilha contém listas de peças e seus respectivos preços. Os dados devem ser automaticamente importados para o Microsoft Dataverse assim que o arquivo for enviado. Além disso, alertas devem ser enviados a usuários específicos quando novos arquivos forem carregados.\n\n- Os dados do cliente devem ser sincronizados com um banco de dados contábil proprietário quando um usuário clicar em um botão no formulário de conta.\n\nVocê deve recomendar os tipos de gatilho (trigger) para atender a esses requisitos. Relacione cada requisito ao tipo de gatilho apropriado.",
    "itens": [
      { "label": "Gatilho por envio (Push trigger)" },
      { "label": "Gatilho por pesquisa (Polling trigger)" },
      { "label": "Gatilhos para fluxos agendados" },
      { "label": "Gatilhos para fluxo de processo de negócios" }
    ],
    "grupos": [
      "Envia uma notificação quando um arquivo Excel for carregado.",
      "Sincroniza dados do cliente com um banco de dados contábil proprietário."
    ],
    "respostas": {
      "Envia uma notificação quando um arquivo Excel for carregado.": ["Gatilho por envio (Push trigger)"],
      "Sincroniza dados do cliente com um banco de dados contábil proprietário.": ["Gatilho por pesquisa (Polling trigger)"]
    },
    "explicacao": "Gatilhos por push são acionados imediatamente quando um evento ocorre, como o upload de um arquivo Excel. Já os gatilhos por pesquisa (polling) verificam periodicamente a presença de novos dados em um serviço, como em um banco de dados contábil, e executam o fluxo quando detectam mudanças.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/create-triggers-custom-connectors/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa está utilizando conectores personalizados no Power Automate. Para cada uma das afirmações a seguir, selecione 'Sim' se for verdadeira ou 'Não' se for falsa.",
    "afirmacoes": [
      "Conectores personalizados usam APIs públicas ou privadas para se conectar a fontes externas.",
      "Você não pode usar conectores personalizados no Power Automate.",
      "As operações de um conector podem ser uma ação ou um gatilho."
    ],
    "respostas": [true, false, true],
    "explicacao": "Conectores personalizados permitem que o Power Automate se conecte a serviços externos por meio de APIs, públicas ou privadas. Eles podem ser usados dentro do Power Automate e oferecem suporte a operações que atuam como ações ou gatilhos para iniciar fluxos.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/define-blank",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está implementando uma solução de atendimento ao cliente usando o Dynamics 365 Customer Service. A empresa está expandindo a solução para atender requisitos adicionais de negócios. Você precisa usar tecnologias da Microsoft Power Platform para implementar a solução. Qual tecnologia você deve usar? Para responder, arraste as tecnologias apropriadas para os requisitos corretos.",
    "itens": [
      { "label": "Portais do Power Apps" },
      { "label": "Power Automate" },
      { "label": "Aplicativos em tela (Canvas apps)" }
    ],
    "grupos": [
      "Os clientes podem acessar um site seguro e visualizar o andamento de tickets de atendimento ao cliente.",
      "Solicitações de reembolso acima de um determinado valor podem ser automaticamente enviadas para aprovação gerencial no Microsoft Teams.",
      "Crie uma página personalizada exibindo uma galeria de imagens dentro do aplicativo Dynamics 365 Customer Service."
    ],
    "respostas": {
      "Os clientes podem acessar um site seguro e visualizar o andamento de tickets de atendimento ao cliente.": ["Portais do Power Apps"],
      "Solicitações de reembolso acima de um determinado valor podem ser automaticamente enviadas para aprovação gerencial no Microsoft Teams.": ["Power Automate"],
      "Crie uma página personalizada exibindo uma galeria de imagens dentro do aplicativo Dynamics 365 Customer Service.": ["Aplicativos em tela (Canvas apps)"]
    },
    "explicacao": "Portais do Power Apps permitem acesso seguro a informações externas por meio da web. O Power Automate é ideal para automatizar fluxos de trabalho, como aprovações. Aplicativos em tela (Canvas apps) oferecem personalização visual completa para construir interfaces como galerias de imagens.",
    "link": "https://learn.microsoft.com/pt-br/power-platform/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },

  {
    "tipo": "simnao",
    "texto": "Você cria um fluxo do Power Automate. Para cada uma das seguintes afirmações, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um botão de fluxo do Power Automate exige que o usuário forneça uma entrada antes de clicar no botão do fluxo.",
      "Um fluxo do Power Automate só pode ser acionado por botões virtuais em softwares."
    ],
    "respostas": [false, false],
    "explicacao": "Os botões de fluxo do Power Automate podem ser configurados com ou sem entrada do usuário antes de serem acionados. Além disso, os fluxos não são restritos apenas a botões virtuais em softwares, podendo ser acionados por diversos gatilhos, como eventos automáticos, aplicativos móveis, entre outros.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "simnao",
    "texto": "Você criou um fluxo do Power Automate. Para cada uma das afirmações a seguir, selecione Sim se for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um fluxo em nuvem do Power Automate pode ser adicionado a uma solução usando o aplicativo móvel do Power Automate.",
      "O Power Automate for desktop é um aplicativo que deve ser instalado em um computador.",
      "Fluxos de processo de negócios podem ser criados usando o portal do Power Automate."
    ],
    "respostas": [true, true, true],
    "explicacao": "Fluxos em nuvem podem ser adicionados a soluções pelo aplicativo móvel do Power Automate. O Power Automate for desktop deve ser instalado localmente para executar automações de interface. Os fluxos de processo de negócios são criados no portal do Power Automate como parte das soluções empresariais.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa ler dados de um arquivo do Microsoft Excel para o Microsoft Dataverse e, em seguida, copiar esses dados para um sistema ERP (planejamento de recursos empresariais). Você precisa configurar o conector. Quais operações você deve usar para cada ação?",
    "itens": [
      { "label": "Gatilho" },
      { "label": "Ação" },
      { "label": "Fluxo de processo de negócios" },
      { "label": "Regra de negócios" }
    ],
    "grupos": [
      "Importa dados para o Microsoft Dataverse.",
      "Sincroniza dados com o sistema ERP."
    ],
    "respostas": {
      "Importa dados para o Microsoft Dataverse.": ["Gatilho"],
      "Sincroniza dados com o sistema ERP.": ["Ação"]
    },
    "explicacao": "O gatilho (trigger) é usado para iniciar o fluxo assim que os dados forem recebidos ou detectados no Excel. Após a importação para o Microsoft Dataverse, uma ação (action) é usada para sincronizar os dados com o sistema ERP. 'Fluxo de processo de negócios' e 'Regra de negócios' não são apropriados para esse tipo de tarefa automatizada baseada em eventos.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/connection-references",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "unica",
    "texto": "Você está testando um fluxo de processo de negócios em um ambiente de sandbox (ambiente isolado para testes).\n\nAo concluir os testes, é necessário copiar o fluxo de processo de negócios para um ambiente de produção sem levar nenhum dado ou outra modificação junto com ele.\n\nVocê deve atender a esse requisito.\nO que você deve fazer?",
    "opcoes": [
      "Exportar a solução padrão.",
      "Criar uma exibição e exportar a exibição.",
      "Adicionar o fluxo de processo de negócios a uma solução separada. Exportar a solução.",
      "Exportar o formulário que contém o fluxo de processo de negócios para uma solução separada."
    ],
    "resposta": 2,
    "explicacao": "A opção correta é adicionar o fluxo de processo de negócios a uma solução separada e exportar essa solução. Isso permite mover apenas o componente necessário sem levar dados ou outros itens não relacionados.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/business-process-flows-overview",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "simnao",
    "texto": "Você recebe uma cópia de um fluxo em nuvem do Power Automate de um colega.\n\nPara cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar um novo fluxo que seja uma cópia do fluxo original.",
      "Você pode modificar o fluxo original."
    ],
    "respostas": [true, false],
    "explicacao": "Sim, é possível criar um novo fluxo que seja uma cópia do fluxo original usando a opção 'Salvar como'. No entanto, para modificar o fluxo original, é necessário ter as permissões apropriadas e acesso ao fluxo. Caso contrário, a modificação não será permitida.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/getting-started",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa usa um sistema personalizado para registrar dados financeiros que é executado na máquina de um gerente. O sistema não possui uma API. Novos dados de clientes devem ser inseridos manualmente no sistema pelo gerente a partir de uma planilha central. A interface do sistema contém lógica de negócios complexa necessária para o processo manual de entrada de dados do cliente.\n\nVocê precisa garantir que os novos dados de clientes possam ser inseridos automaticamente no sistema usando o Power Automate.\n\nQue tipo de fluxo você deve criar?",
    "opcoes": [
      "Nuvem automatizada",
      "Fluxo de processo de negócios",
      "Desktop",
      "Nuvem instantânea"
    ],
    "resposta": 2,
    "explicacao": "Como o sistema personalizado é executado localmente na máquina do gerente e não possui uma API, o fluxo mais adequado a ser usado é o fluxo Desktop. Esse tipo de fluxo é projetado para automatizar tarefas em máquinas locais, interagindo com aplicativos de desktop e executando ações como se fosse um usuário. Neste caso, o fluxo Desktop pode ser configurado para automatizar a entrada de novos dados de clientes no sistema, realizando as etapas necessárias a partir da planilha central.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/desktop-flows/introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "combobox",
    "texto": "Uma empresa usa um aplicativo orientado por modelo para gerenciar seu processo de vendas. Você está criando um fluxo em nuvem do Power Automate que enviará uma mensagem no Microsoft Teams quando um novo pedido for registrado no Microsoft Dataverse.\n\nSelecione a resposta que completa corretamente a frase: Para determinar quando o fluxo será iniciado, você deve selecionar: <combobox>",
    "opcoes": [
      "Uma ação",
      "Uma fórmula",
      "Um gatilho"
    ],
    "resposta": 2,
    "explicacao": "Um gatilho (trigger) define quando um fluxo do Power Automate será iniciado. Ele é a condição de entrada que monitora eventos, como a criação de um novo registro no Microsoft Dataverse. Ações e fórmulas são usadas após o gatilho, mas não determinam o início do fluxo.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/triggers-introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "combobox",
    "texto": "Para acionar o fluxo de nuvem do Power Automate quando um funcionário for registrado como doente no aplicativo, utilize um conector do tipo <combobox>",
    "opcoes": [
      "Selecione a opção desejada",
      "Personalizado",
      "Premium",
      "Padrão"
    ],
    "resposta": 1,
    "explicacao": "Um conector Personalizado permite chamar diretamente a API pública desenvolvida pelo departamento de TI para acionar o fluxo no Power Automate. Conectores Padrão integram serviços comuns da Power Platform e Conectores Premium exigem licença extra para recursos avançados, mas nenhum deles acessa APIs personalizadas sem criar um conector personalizado.",
    "link": "https://learn.microsoft.com/pt-br/connectors/custom-connectors/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está avaliando o uso do Power Automate para eliminar tarefas manuais repetitivas. Para cada cenário abaixo, selecione o tipo de fluxo do Power Automate mais adequado.",
    "itens": [
      { "label": "Fluxo de desktop" },
      { "label": "Fluxo de nuvem instantâneo" },
      { "label": "Fluxo de nuvem automatizado" }
    ],
    "grupos": [
      "Nas manhãs de segunda-feira, navegar para um site de notícias local e registrar quaisquer eventos do fim de semana.",
      "Quando um membro da equipe ligar dizendo que está doente, postar uma mensagem no canal Microsoft Teams do escritório.",
      "Quando a caixa de correio do gerente receber um e-mail com o assunto Aprovação, enviar uma aprovação no Teams."
    ],
    "respostas": {
      "Nas manhãs de segunda-feira, navegar para um site de notícias local e registrar quaisquer eventos do fim de semana.": ["Fluxo de desktop"],
      "Quando um membro da equipe ligar dizendo que está doente, postar uma mensagem no canal Microsoft Teams do escritório.": ["Fluxo de nuvem instantâneo"],
      "Quando a caixa de correio do gerente receber um e-mail com o assunto Aprovação, enviar uma aprovação no Teams.": ["Fluxo de nuvem automatizado"]
    },
    "explicacao": "Fluxos de desktop automatizam tarefas no computador local, como navegar em um site em horários agendados; fluxos de nuvem instantâneos são acionados manualmente ou via evento definido para postar mensagens imediatamente; e fluxos de nuvem automatizados são acionados por eventos, como a chegada de um e-mail, para executar ações automaticamente.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/desktop-flows/introduction",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está editando o fluxo de nuvem do Power Automate exibido na imagem. Precisa realizar uma análise de etapas para determinar como o fluxo usa seus conectores e seus componentes. Para cada pergunta, selecione a opção adequada.",
    "pares": [
      {
        "requisito": "Qual etapa é um gatilho?",
        "opcoes": [
          "Obter detalhes da resposta",
          "Iniciar uma aprovação",
          "Enviar um e-mail para aprovação",
          "Quando uma nova resposta for enviada"
        ],
        "resposta": 3
      },
      {
        "requisito": "Qual etapa usa o mesmo conector de Obter detalhes da resposta?",
        "opcoes": [
          "Iniciar uma aprovação",
          "Enviar um e-mail para aprovação",
          "Quando uma nova resposta for enviada"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "A etapa disparadora é “Quando uma nova resposta for enviada” (gatilho do Microsoft Forms) e ela utiliza o mesmo conector na etapa “Obter detalhes da resposta”.",
    "link": "https://learn.microsoft.com/pt-br/power-automate/forms/popular-scenarios?tabs=new-designer",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7",
    "imagemUrl": "img/5.png"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa utiliza o Dynamics 365 Supply Chain Management. Você precisa usar o Power Automate para automatizar o processo de recebimento e acompanhamento de matérias-primas. Qual tipo de conector você deve usar?",
    "opcoes": [
      "Dataverse",
      "Dynamics 365",
      "Dynamics 365 para Finanças e Operações",
      "Dynamic Signal"
    ],
    "resposta": 0,
    "explicacao": "O conector do Dataverse (anteriormente Common Data Service) permite o fluxo de dados entre aplicativos do Dynamics 365 Finance and Operations (Supply Chain) e outras aplicações, habilitando a automação de processos de recebimento e rastreamento de matérias-primas.",
    "link": "https://learn.microsoft.com/pt-br/connectors/commondataserviceforapps/",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  },
  {
    "tipo": "simnao",
    "texto": "Uma empresa planeja criar soluções utilizando as tecnologias da Power Platform. Avalie as afirmações a seguir e selecione Sim se forem verdadeiras ou Não caso contrário.",
    "afirmacoes": [
      "Os dados de conversa do Power Virtual Agents são salvos, a menos que sejam excluídos pelo cliente após uma sessão de chat.",
      "Os fluxos do Power Automate operam com privilégios administrativos o tempo todo."
    ],
    "respostas": [false, false],
    "explicacao": "As conversas do Power Virtual Agents não são armazenadas por padrão após a sessão, a menos que haja configuração específica para isso. Além disso, os fluxos do Power Automate não operam sempre com privilégios administrativos — é possível configurar permissões específicas para cada fluxo.",
    "link": "https://learn.microsoft.com/pt-br/training/powerplatform/power-automate",
    "dominio": "Demonstrar os recursos do Power Automate",
    "simulado": "pl-7"
  }

];