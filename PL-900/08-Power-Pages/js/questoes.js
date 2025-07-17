// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado PL-900
// ==========================================

export const questoes = [
  {
    "tipo": "unica",
    "texto": "Você é um gerente de atendimento ao cliente. Você precisa implementar um portal do Power Apps que permita aos clientes enviar casos. Qual tipo de fonte de dados é utilizada?",
    "opcoes": [
      "Conector do Dynamics 365",
      "Microsoft SharePoint",
      "Armazenamento do Microsoft Azure",
      "Serviço de Dados Comum"
    ],
    "resposta": 3,
    "explicacao": "O Power Apps Portals, agora chamado de Power Pages, permite a criação de sites responsivos de baixo código que possibilitam aos usuários externos interagir com dados armazenados no Serviço de Dados Comum (atualmente Microsoft Dataverse). Esse serviço oferece um ambiente seguro e gerenciado para o armazenamento e o gerenciamento de dados utilizados por aplicativos de negócios.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/overview",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "unica",
    "texto": "Você cria um portal no Power Apps (Construtor de aplicativos low-code da Power Platform). Quando um usuário acessa o portal, a seguinte mensagem de erro é exibida: Usuário não encontrado. Você confirma que as informações de login do usuário estão corretas. É necessário determinar a causa do erro. O que você deve fazer?",
    "opcoes": [
      "Desativar mensagens de erro personalizadas.",
      "Criar uma mensagem de erro personalizada.",
      "Ativar ferramentas de diagnóstico no Lifecycle Services.",
      "Ativar o modo de manutenção."
    ],
    "resposta": 0,
    "explicacao": "Ao desativar mensagens de erro personalizadas no Power Apps portal, é possível exibir detalhes mais técnicos sobre falhas de autenticação, como problemas de associação de usuários no Dataverse ou configurações incorretas no provedor de identidade. Isso permite identificar com precisão a causa do erro 'Usuário não encontrado'.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/portals-maintenance-troubleshooting/1-introduction",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o uso do Power Apps portal (Componente da Power Platform para criação de sites de acesso externo):",
    "afirmacoes": [
      "Você deve usar modelos padrão para construir portais.",
      "Você pode testar os portais em ambientes de não produção e depois migrá-los para ambientes de produção.",
      "Ao migrar para uma nova versão de um portal, é possível exibir uma página de manutenção personalizada até que o novo portal esteja pronto para uso."
    ],
    "respostas": [true, true, true],
    "explicacao": "Todos os itens são verdadeiros. O Power Apps portal utiliza modelos padrão como ponto de partida. Ele permite a criação e o teste de portais em ambientes de não produção, e a migração para produção é feita com suporte oficial. Também é possível habilitar uma página de manutenção personalizada durante o processo de transição de versão.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/overview",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está construindo um portal com o Power Apps (Componente da Power Platform para criação de sites de acesso externo). Você precisa selecionar os tipos de portal prontos (out-of-the-box) que atendem aos requisitos da empresa.",
    "itens": [
      { "label": "Partner portal (Portal de parceiros)" },
      { "label": "Community portal (Portal da comunidade)" },
      { "label": "Portal from blank (Portal em branco)" },
      { "label": "Customer self-service portal (Portal de autoatendimento do cliente)" }
    ],
    "grupos": [
      "Integrar de forma colaborativa novos fornecedores e distribuidores.",
      "Publicar um blog anunciando novos fornecedores."
    ],
    "respostas": {
      "Integrar de forma colaborativa novos fornecedores e distribuidores.": ["Partner portal (Portal de parceiros)"],
      "Publicar um blog anunciando novos fornecedores.": ["Community portal (Portal da comunidade)"]
    },
    "explicacao": "O Partner portal permite a integração colaborativa com revendedores e distribuidores, fornecendo acesso a fluxos de trabalho compartilhados. O Community portal permite interação com clientes e especialistas por meio de artigos, fóruns e blogs. Portais em branco e de autoatendimento não atendem diretamente aos requisitos descritos na pergunta.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/portal-templates",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está considerando implementar o Power Platform. A empresa precisa minimizar os custos de desenvolvimento. Para quais três cenários você deve considerar a implementação de Power Apps Portals? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Um site de suporte ao cliente que inclua pesquisa em base de conhecimento e suporte para upload de documentos",
      "Um site público que ofereça suporte a comunidades multilíngues com fóruns e blog",
      "Um site seguro para usuários móveis que esteja disponível apenas por meio de VPN na rede corporativa",
      "Um site seguro para fornecedores acessarem dados armazenados no Common Data Service",
      "Um site interno para funcionários com acesso limitado aos dados do Dynamics 365 Finance"
    ],
    "respostas": [0, 1, 3],
    "explicacao": "Os Power Apps Portals são ideais para soluções externas com acesso seguro a dados do Dataverse. A opção A representa um portal de autoatendimento ao cliente. A opção B descreve um portal comunitário, que permite interações públicas. A opção D refere-se a um portal de parceiros, que oferece acesso seguro a fornecedores. As opções C e E não são ideais para Power Apps Portals por exigirem infraestrutura interna ou uso exclusivo interno com licenças do Dynamics 365.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/portal-templates",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "comboboxs",
    "texto": "Uma empresa publica e-books para autores independentes e deseja implementar uma solução de portal do Power Apps para fazer anúncios sobre novos livros. Associe cada necessidade ao recurso mais adequado do Power Pages.",
    "pares": [
      {
        "requisito": "Garantir que os autores de livros possam acessar com segurança seus dados.",
        "opcoes": [
          "Autenticar usuários externos",
          "Acessar dados no Common Data Service",
          "Navegar pelo conteúdo anonimamente",
          "Personalizar layouts",
          "Usar modelos de página"
        ],
        "resposta": 0
      },
      {
        "requisito": "Garantir design de página consistente em todo o site.",
        "opcoes": [
          "Autenticar usuários externos",
          "Acessar dados no Common Data Service",
          "Navegar pelo conteúdo anonimamente",
          "Personalizar layouts",
          "Usar modelos de página"
        ],
        "resposta": 4
      },
      {
        "requisito": "Garantir que o público possa acessar anúncios sobre novos livros.",
        "opcoes": [
          "Autenticar usuários externos",
          "Acessar dados no Common Data Service",
          "Navegar pelo conteúdo anonimamente",
          "Personalizar layouts",
          "Usar modelos de página"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Para autores acessarem seus dados com segurança, é necessário autenticar usuários externos. Para garantir consistência no design do site, o uso de modelos de página é a prática recomendada. Já para permitir que o público visualize anúncios sem login, é necessário habilitar a navegação anônima.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/configure/webpage-access-control",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "dragdrop",
    "texto": "Uma empresa está criando um Power Apps Portal. É necessário selecionar os componentes de página apropriados. Relacione cada requisito ao componente correto.",
    "itens": [
      { "label": "Lista" },
      { "label": "Formulário" },
      { "label": "IFrame" },
      { "label": "Conector" }
    ],
    "grupos": [
      "Exibir um único registro do Microsoft Dataverse",
      "Exibir uma lista de registros de uma lista do Microsoft SharePoint",
      "Exibir uma lista de registros do Microsoft Dataverse"
    ],
    "respostas": {
      "Exibir um único registro do Microsoft Dataverse": ["Formulário"],
      "Exibir uma lista de registros de uma lista do Microsoft SharePoint": ["Conector"],
      "Exibir uma lista de registros do Microsoft Dataverse": ["Lista"]
    },
    "explicacao": "O componente 'Formulário' é usado para exibir um único registro do Microsoft Dataverse. Para acessar dados do SharePoint, é necessário utilizar um 'Conector'. Já o componente 'Lista' é ideal para exibir múltiplos registros do Microsoft Dataverse no portal.",
    "link": "https://learn.microsoft.com/pt-br/power-apps/maker/portals/",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa está considerando usar o Power Pages para seu site.\n\nVocê precisa identificar as funcionalidades do Power Pages.\n\nQuais são duas funcionalidades do Power Pages? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Oferecer suporte a múltiplos idiomas",
      "Fornecer sites com pouco código hospedados como um serviço",
      "Fornecer feeds OData",
      "Criar estilos personalizados para cada usuário"
    ],
    "respostas": [0, 1],
    "explicacao": "O Power Pages permite a criação de sites com pouco código hospedados como um serviço, o que facilita a publicação e manutenção de portais web. Além disso, ele oferece suporte a múltiplos idiomas, possibilitando a criação de experiências localizadas para diferentes públicos. As demais opções não fazem parte dos recursos nativos do Power Pages.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/introduction",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você precisa implantar um site do Power Pages usando um modelo. Quais três ações você deve executar em sequência?",
    "itens": [
      { "label": "Inserir um nome e endereço da Web." },
      { "label": "Selecionar um ambiente do Microsoft Dataverse." },
      { "label": "Criar uma conexão com o Microsoft Dataverse." },
      { "label": "Publicar o site." },
      { "label": "Escolher um modelo." }
    ],
    "grupos": [
      "Etapa 01",
      "Etapa 02",
      "Etapa 03"
    ],
    "respostas": {
      "Etapa 01": ["Selecionar um ambiente do Microsoft Dataverse."],
      "Etapa 02": ["Escolher um modelo."],
      "Etapa 03": ["Inserir um nome e endereço da Web."]
    },
    "explicacao": "A ordem correta para implantar um site do Power Pages com base em um modelo é: (1) selecionar o ambiente do Microsoft Dataverse, (2) escolher um modelo, e (3) inserir o nome e endereço da web. Esses passos são essenciais para a configuração inicial do site antes de conectá-lo ou publicá-lo.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/getting-started/create-manage",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "multipla",
    "texto": "Uma empresa precisa de um site Power Pages que utilize um dos modelos de design fornecidos pelo Power Pages para construir seu website. Você precisa implantar o site. Quais três páginas estarão incluídas no site? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Fóruns",
      "Página inicial",
      "Resumo",
      "Resultados de pesquisa",
      "Fale conosco"
    ],
    "respostas": [1, 3, 4],
    "explicacao": "Os sites criados a partir de modelos de design do Power Pages geralmente incluem as páginas 'Página inicial', 'Resultados de pesquisa' e 'Fale conosco'. Essas páginas são padrões no layout inicial oferecido pelo modelo para garantir funcionalidade básica desde a implantação.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/templates/starter-layout",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },

  {
    "tipo": "dragdrop",
    "texto": "Você está planejando implantar sites do Power Pages.\n\nVocê precisa escolher o tipo apropriado de modelo para cada requisito dos sites.\n\nQuais tipos de modelos você deve usar?",
    "itens": [
      {
        "label": "Página em branco"
      },
      {
        "label": "Baseado em cenário"
      },
      {
        "label": "Autoatendimento ao cliente"
      },
      {
        "label": "Design do site"
      }
    ],
    "grupos": [
      "Etapa 01 - Fornecer blocos de construção para o site",
      "Etapa 02 - Criar um site que permita aos usuários enviar aplicativos online",
      "Etapa 03 - Criar um site para clientes do Microsoft Dynamics 365 acessarem recursos de suporte",
      "Etapa 04 - Criar um site com uma única página inicial"
    ],
    "respostas": {
      "Etapa 01 - Fornecer blocos de construção para o site": ["Design do site"],
      "Etapa 02 - Criar um site que permita aos usuários enviar aplicativos online": ["Baseado em cenário"],
      "Etapa 03 - Criar um site para clientes do Microsoft Dynamics 365 acessarem recursos de suporte": ["Autoatendimento ao cliente"],
      "Etapa 04 - Criar um site com uma única página inicial": ["Página em branco"]
    },
    "explicacao": "O modelo 'Design do site' fornece blocos de construção reutilizáveis para estruturação visual. O modelo 'Baseado em cenário' atende a fluxos de trabalho específicos, como envio de aplicativos. 'Autoatendimento ao cliente' é voltado para integração com Dynamics 365 para acesso a suporte. Já 'Página em branco' permite criar um site personalizado com apenas uma seção e uma página inicial.",
    "link": "https://learn.microsoft.com/pt-br/power-pages/templates/",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "unica",
    "texto": "Uma empresa está considerando usar o Power Pages para seu site. Você precisa determinar se os casos de uso do Power Pages atendem aos requisitos da empresa. Qual é um caso de uso do Power Pages?",
    "opcoes": [
      "Compartilhar dados com clientes",
      "Criar aplicativos móveis para iOS",
      "Executar tarefas repetitivas",
      "Criar visualizações de dados"
    ],
    "resposta": 0,
    "explicacao": "O Power Pages permite criar sites seguros para compartilhar dados com clientes, parceiros ou qualquer público externo, com controle de acesso e personalização.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/power-pages-get-started/",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  },
  {
    "tipo": "dragdrop",
    "texto": "Um gerente de atendimento executa um call center e um portal de suporte para clientes que buscam assistência. O gerente descobre que os clientes estão insatisfeitos ao ler avaliações online, o que se tornou uma tarefa demorada. Quais componentes você deve identificar para atender aos requisitos abaixo?",
    "itens": [
      { "label": "Detector de objetos" },
      { "label": "Reconhecimento de texto" },
      { "label": "Power Automate" },
      { "label": "Análise de sentimento" }
    ],
    "grupos": [
      "Identificar linguagem negativa no texto de uma avaliação",
      "Enviar uma notificação por e-mail"
    ],
    "respostas": {
      "Identificar linguagem negativa no texto de uma avaliação": ["Análise de sentimento"],
      "Enviar uma notificação por e-mail": ["Power Automate"]
    },
    "explicacao": "A Análise de sentimento identifica automaticamente expressões negativas em avaliações de texto; o Power Automate envia notificações por e-mail quando um evento é disparado.",
    "link": "https://learn.microsoft.com/pt-br/ai-builder/flow-sentiment-analysis",
    "dominio": "Demonstrar as funcionalidades do Power Pages",
    "simulado": "pl-8"
  }

];