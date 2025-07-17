// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [


  {
    "tipo": "unica",
    "texto": "Qual das instruções a seguir é um exemplo de Linguagem de Manipulação de Dados (DML)?",
    "opcoes": ["INSERT", "ALTER", "DROP", "CREATE"],
    "resposta": 0,
    "explicacao": "A instrução INSERT é parte da Linguagem de Manipulação de Dados (DML), usada para inserir dados em tabelas existentes. Já as instruções ALTER, DROP e CREATE fazem parte da Linguagem de Definição de Dados (DDL), usada para definir e modificar a estrutura de objetos no banco de dados.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/insert-transact-sql",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Qual linguagem é usada para definir consultas no Azure Synapse Data Explorer?",
    "opcoes": ["Bash", "PowerShell", "KQL", "SQL"],
    "resposta": 2,
    "explicacao": "A KQL (Kusto Query Language) é usada para definir consultas em serviços como o Azure Data Explorer e também no Azure Synapse Data Explorer. Ela foi projetada especificamente para consultas eficientes em grandes volumes de dados de telemetria e logs.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-explorer/kusto/query/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O serviço <combobox> é otimizado para soluções de IoT.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure SQL Database",
      "Azure SQL Edge",
      "Azure SQL Managed Instance",
      "SQL Server on Azure Virtual Machines"
    ],
    "resposta": 2,
    "explicacao": "O Azure SQL Edge é uma versão do SQL Server projetada especificamente para dispositivos de borda (edge), com suporte para cenários de IoT. Ele oferece funcionalidades como armazenamento local, análise em tempo real e integração com fluxos de dados, sendo otimizado para funcionar em dispositivos com recursos limitados.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql-edge/overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre bancos de dados relacionais e armazenamentos chave/valor.",
    "afirmacoes": [
      "Em um banco de dados relacional, o esquema é definido antes que os dados sejam gravados na tabela.",
      "Armazenamentos de dados chave/valor são altamente otimizados para consultas complexas que contêm múltiplos joins.",
      "Um banco de dados relacional é comumente usado para armazenar e consultar dados estruturados."
    ],
    "respostas": [true, false, true],
    "explicacao": "Em bancos de dados relacionais, o esquema é definido antes da inserção dos dados, garantindo consistência e integridade. Armazenamentos chave/valor são otimizados para desempenho simples e rápido, e não para consultas complexas com múltiplos joins. Bancos de dados relacionais são adequados para armazenar dados estruturados, com tipos e relações bem definidas.",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/azure-account/search?ef_id=_k_d6a1616832801d097aee0951a450344a_k_&OCID=AIDcmmzmnb0182_SEM__k_d6a1616832801d097aee0951a450344a_k_&msclkid=d6a1616832801d097aee0951a450344a",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O formato <combobox> é usado para armazenar dados delimitados, separa os campos de dados usando vírgulas e termina as linhas com um caractere de retorno.",
    "opcoes": ["Selecione uma resposta", "CSV", "JSON", "TSV", "XML"],
    "resposta": 1,
    "explicacao": "O formato CSV (Comma-Separated Values) é amplamente utilizado para armazenar dados delimitados. Ele separa os campos por vírgulas e normalmente utiliza um caractere de retorno de carro para indicar o fim de cada linha, facilitando sua leitura por diversos sistemas.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/format-delimited-text",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O formato de arquivo <combobox> usa um esquema de documento hierárquico para definir entidades de dados que possuem vários atributos.",
    "opcoes": ["Selecione uma resposta", "CSV", "JSON", "ORC", "TSV"],
    "resposta": 2,
    "explicacao": "O formato JSON (JavaScript Object Notation) é baseado em uma estrutura hierárquica de chave e valor, o que permite representar entidades de dados com múltiplos atributos e aninhamentos. Isso o torna adequado para armazenar dados complexos, como documentos estruturados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as APIs do Azure Cosmos DB às estruturas de dados apropriadas.",
    "itens": [
      { "label": "Azure Cosmos DB for Apache Cassandra API" },
      { "label": "Azure Cosmos DB for Apache Gremlin API" },
      { "label": "Azure Cosmos DB for NoSQL API" },
      { "label": "Azure Cosmos DB for Table API" }
    ],
    "grupos": ["Graph data", "JSON documents", "Key/value data"],
    "respostas": {
      "Graph data": ["Azure Cosmos DB for Apache Gremlin API"],
      "JSON documents": ["Azure Cosmos DB for NoSQL API"],
      "Key/value data": ["Azure Cosmos DB for Table API"]
    },
    "explicacao": "A API Gremlin é usada para dados de grafos. A API NoSQL é usada para documentos JSON armazenados em coleções. A API Table é compatível com dados no formato chave/valor, similar ao Azure Table Storage.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Qual API do Azure Cosmos DB você deve usar para um banco de dados de grafos?",
    "opcoes": [
      "Azure Cosmos DB for Table",
      "Azure Cosmos DB for Apache Cassandra",
      "Azure Cosmos DB for NoSQL",
      "Azure Cosmos DB for Apache Gremlin"
    ],
    "resposta": 3,
    "explicacao": "A API do Azure Cosmos DB para Apache Gremlin é projetada para armazenar e consultar dados de grafos, permitindo modelar relacionamentos complexos entre entidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> são responsáveis pela disponibilidade, desempenho e otimização dos bancos de dados.",
    "opcoes": [
      "Escolha uma opção",
      "Analistas de dados",
      "Engenheiros de dados",
      "Cientistas de dados",
      "Administradores de banco de dados"
    ],
    "resposta": 4,
    "explicacao": "Administradores de banco de dados (DBAs) são responsáveis por garantir a disponibilidade, o desempenho e a otimização de bancos de dados, realizando tarefas como monitoramento, manutenção e ajustes de desempenho. Essa é uma função técnica essencial em qualquer ambiente de dados.",
    "link": "https://learn.microsoft.com/pt-br/credentials/certifications/azure-database-administrator-associate/?practice-assessment-type=certification",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe o modelo de serviço em nuvem ao serviço de banco de dados relacional do Azure correspondente.",
    "itens": [
      { "label": "Infraestrutura como serviço" },
      { "label": "Plataforma como serviço" },
      { "label": "Software como serviço" }
    ],
    "grupos": [
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "SQL Server em Máquinas Virtuais do Azure"
    ],
    "respostas": {
      "Azure SQL Database": ["Plataforma como serviço"],
      "Azure SQL Managed Instance": ["Plataforma como serviço"],
      "SQL Server em Máquinas Virtuais do Azure": ["Infraestrutura como serviço"]
    },
    "explicacao": "O Azure SQL Database e o Azure SQL Managed Instance são exemplos de 'Plataforma como Serviço' (PaaS), pois gerenciam automaticamente tarefas como backup, atualização e escalabilidade. Já o SQL Server em Máquinas Virtuais do Azure representa 'Infraestrutura como Serviço' (IaaS), pois o usuário gerencia o sistema operacional e a instância do SQL Server.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview?view=azuresql",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Um banco precisa garantir que uma transação que envolve debitar fundos de uma conta de origem e creditar os mesmos fundos em uma conta de destino conclua ambas as ações. Se qualquer uma das ações falhar, a outra também deve falhar. De qual propriedade ACID esse exemplo trata?",
    "opcoes": [
      "Consistência",
      "Durabilidade",
      "Atomicidade",
      "Isolamento"
    ],
    "resposta": 2,
    "explicacao": "A propriedade de atomicidade garante que cada transação seja tratada como uma única 'unidade', que deve ser concluída integralmente ou não ser realizada. Isso significa que, se qualquer parte da transação falhar, nenhuma das ações será aplicada ao banco de dados. Isso assegura a integridade em operações críticas, como transações bancárias.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "A reidratação de blobs ocorre no armazenamento Azure Blob quando um blob é movido entre quais camadas de acesso?",
    "opcoes": [
      "Hot para Cool",
      "Hot para Archive",
      "Cool para Archive",
      "Archive para Cool"
    ],
    "resposta": 3,
    "explicacao": "A reidratação de blobs no Azure Blob Storage ocorre quando um blob é movido da camada Archive para uma camada de acesso superior, como Cool ou Hot. Esse processo é necessário porque os blobs na camada Archive ficam inacessíveis até serem reidratados para leitura ou uso ativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/archive-rehydrate-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Qual atividade é mais comum para cargas de trabalho transacionais?",
    "opcoes": [
      "Registrar pequenas unidades de eventos de trabalho em tempo real",
      "Agregação de grandes volumes de dados",
      "Produção de relatórios complexos",
      "Exploração de dados em modo de autoatendimento"
    ],
    "resposta": 0,
    "explicacao": "As cargas de trabalho transacionais normalmente lidam com muitas operações pequenas e frequentes, como inserções, atualizações e exclusões de registros em tempo real. Essa característica é típica de sistemas de processamento de transações online (OLTP).",
    "link": "https://learn.microsoft.com/pt-br/shows/dbfundamentals/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo bancário que transfere dinheiro entre contas. De qual tipo de solução isso é um exemplo?",
    "opcoes": [
      "Processamento de transações online (OLTP)",
      "Processamento analítico online (OLAP)",
      "Extração, transformação e carga (ETL)",
      "Um data warehouse"
    ],
    "resposta": 0,
    "explicacao": "Soluções OLTP (Online Transaction Processing) são otimizadas para lidar com um grande número de pequenas transações, como operações bancárias, onde a integridade e a velocidade são essenciais. Cada transação é breve, mas crítica.",
    "link": "https://learn.microsoft.com/pt-br/shows/dbfundamentals/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os papéis profissionais às tarefas adequadas. Cada papel pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Engenheiro de Dados" },
      { "label": "Administrador de Banco de Dados" },
      { "label": "Analista de Dados" }
    ],
    "grupos": [
      "Criar um pipeline para transferir dados de um banco de dados para um data warehouse.",
      "Criar um banco de dados transacional.",
      "Criar um gráfico que mostre transações de vendas por semana."
    ],
    "respostas": {
      "Criar um pipeline para transferir dados de um banco de dados para um data warehouse.": ["Engenheiro de Dados"],
      "Criar um banco de dados transacional.": ["Administrador de Banco de Dados"],
      "Criar um gráfico que mostre transações de vendas por semana.": ["Analista de Dados"]
    },
    "explicacao": "O Engenheiro de Dados constrói pipelines para movimentação e transformação de dados. O Administrador de Banco de Dados cria e gerencia bancos de dados transacionais. O Analista de Dados cria visualizações e relatórios, como gráficos de vendas semanais.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-roles-responsibilities-world-of-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os papéis profissionais às tarefas correspondentes. Cada papel pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Administrador de Banco de Dados" },
      { "label": "Analista de Dados" },
      { "label": "Engenheiro de Dados" }
    ],
    "grupos": [
      "Backup e recuperação de banco de dados",
      "Habilitar capacidades analíticas avançadas por meio de relatórios",
      "Monitoramento de pipelines de dados"
    ],
    "respostas": {
      "Backup e recuperação de banco de dados": ["Administrador de Banco de Dados"],
      "Habilitar capacidades analíticas avançadas por meio de relatórios": ["Analista de Dados"],
      "Monitoramento de pipelines de dados": ["Engenheiro de Dados"]
    },
    "explicacao": "O Administrador de Banco de Dados é responsável pela integridade e segurança dos dados, incluindo backup e recuperação. O Analista de Dados cria relatórios que promovem insights analíticos. O Engenheiro de Dados supervisiona o funcionamento dos pipelines de dados para garantir a entrega correta das informações.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-roles-responsibilities-world-of-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os termos do Azure Data Lake Storage Gen2 aos níveis apropriados da hierarquia. Cada termo pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "imagemUrl": "img/1.png",
    "itens": [
      { "label": "Conta de Armazenamento do Azure" },
      { "label": "Container" }
    ],
    "grupos": [
      "\n",
      "\n\n"
    ],
    "respostas": {
      "\n": ["Conta de Armazenamento do Azure"],
      "\n\n": ["Container"]

    },
    "explicacao": "No Azure Data Lake Storage Gen2, a estrutura hierárquica começa com o Grupo de Recursos, que contém a Conta de Armazenamento. Dentro dessa conta, há Containers, e dentro deles, compartilhamentos de arquivos que podem conter pastas e arquivos.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as funções de trabalho às tarefas apropriadas no contexto de gerenciamento e análise de dados.",
    "itens": [
      { "label": "Administrador de banco de dados" },
      { "label": "Engenheiro de dados" },
      { "label": "Analista de dados" }
    ],
    "grupos": [
      "Atribuir permissões aos usuários",
      "Extrair significado dos dados criando visualizações e gráficos",
      "Implementar quais pipelines transferem e transformam dados entre sistemas"
    ],
    "respostas": {
      "Atribuir permissões aos usuários": ["Administrador de banco de dados"],
      "Extrair significado dos dados criando visualizações e gráficos": ["Analista de dados"],
      "Implementar quais pipelines transferem e transformam dados entre sistemas": ["Engenheiro de dados"]
    },
    "explicacao": "O administrador de banco de dados é responsável pela segurança e permissões. O analista de dados cria visualizações para extrair insights. O engenheiro de dados desenvolve pipelines para transferência e transformação de dados.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-roles-responsibilities-world-of-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é responsável por encontrar padrões ocultos nos dados e criar relatórios gráficos que apresentem informações de maneira útil e atrativa.",
    "opcoes": [
      "Escolha uma opção",
      "Um engenheiro de dados",
      "Um administrador de banco de dados",
      "Um analista de dados"
    ],
    "resposta": 3,
    "explicacao": "O analista de dados é responsável por interpretar dados, identificar padrões e apresentar visualizações compreensíveis que apoiem a tomada de decisões.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-roles-responsibilities-world-of-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "SELECT, INSERT e UPDATE são exemplos de qual tipo de instrução SQL?",
    "opcoes": [
      "Linguagem de Definição de Dados (DDL)",
      "Linguagem de Controle de Dados (DCL)",
      "Linguagem de Manipulação de Dados (DML)",
      "Linguagem de Transação de Dados (DTL)"
    ],
    "resposta": 2,
    "explicacao": "Instruções como SELECT, INSERT, UPDATE e DELETE fazem parte da Linguagem de Manipulação de Dados (DML), pois são usadas para consultar e modificar dados nas tabelas.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/queries?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é um exemplo de uma instrução da Linguagem de Manipulação de Dados (DML).",
    "opcoes": ["Escolha uma opção", "CREATE", "DROP", "RENAME", "UPDATE"],
    "resposta": 4,
    "explicacao": "A instrução UPDATE é usada para modificar dados existentes em uma tabela, sendo uma operação típica da Linguagem de Manipulação de Dados (DML). Já as instruções CREATE, DROP e RENAME pertencem à DDL (Data Definition Language).",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/update-transact-sql?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre recursos das ofertas de bancos de dados gerenciados no Azure.",
    "afirmacoes": [
      "A ferramenta pgAdmin pode ser usada para gerenciar o Azure Database for PostgreSQL.",
      "O Azure Database for MariaDB oferece restauração pontual (point-in-time restore) por até 365 dias.",
      "O Azure Database for MySQL sempre exige conexões SSL."
    ],
    "respostas": [true, false, false],
    "explicacao": "1. **Verdadeiro**: O pgAdmin é uma ferramenta compatível para gerenciar o Azure Database for PostgreSQL.\n2. **Falso**: O Azure Database for MariaDB oferece restauração pontual por até 35 dias, não 365 dias.\n3. **Falso**: O uso de conexões SSL no Azure Database for MySQL é recomendado e habilitado por padrão, mas não é obrigatório em todos os cenários.",
    "link": "https://learn.microsoft.com/pt-br/azure/postgresql/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Azure Data Explorer usa <combobox> para explorar, filtrar e agregar dados rapidamente.",
    "opcoes": ["Escolha uma opção", "Python", "Scala", "KQL"],
    "resposta": 3,
    "explicacao": "Azure Data Explorer utiliza a linguagem KQL (Kusto Query Language) para realizar consultas eficientes em grandes volumes de dados, possibilitando filtragem, agregações e análises rápidas.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-explorer/kusto/query/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um modelo de processamento analítico online (OLAP) armazena dados <combobox> que são otimizados para cargas de trabalho analíticas.",
    "opcoes": ["Escolha uma opção", "normalizados", "semi-estruturados", "não estruturados", "agregados"],
    "resposta": 4,
    "explicacao": "Modelos OLAP são otimizados para análise e tomada de decisão, e por isso armazenam dados agregados. Esses dados são organizados de maneira que facilitem consultas analíticas rápidas, como somatórios e médias, diferentemente de modelos OLTP, que priorizam dados normalizados para eficiência transacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-analytical-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Em um modelo de dados analítico, que tipo de tabela contém entidades usadas para agregar valores numéricos, onde cada entidade é representada por uma linha com uma chave exclusiva?",
    "opcoes": ["Bridge", "Dimensão", "Fato"],
    "resposta": 2,
    "explicacao": "Uma tabela de fatos geralmente armazena dados quantitativos, frequentemente referidos como medidas ou métricas, e contém chaves estrangeiras que referenciam tabelas de dimensão relacionadas. As tabelas de fatos são centrais para os esquemas estrela ou floco de neve, usados em ambientes de data warehousing e OLAP para dar suporte à análise e geração de relatórios.",
    "link": "https://learn.microsoft.com/pt-br/fabric/data-warehouse/dimensional-modeling-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Em um banco de dados totalmente desnormalizado, como os dados são lidos e gravados para uma única entidade?",
    "opcoes": [
      "Os dados são lidos de uma única tabela e gravados em uma única tabela.",
      "Os dados são lidos de várias tabelas e gravados em uma única tabela.",
      "Os dados são lidos de uma única tabela e gravados em várias tabelas.",
      "Os dados são lidos de várias tabelas e gravados em várias tabelas."
    ],
    "resposta": 0,
    "explicacao": "Em bancos de dados desnormalizados, os dados são duplicados para reduzir a necessidade de junções complexas. Isso permite que dados de uma entidade sejam lidos e gravados em uma única tabela, o que melhora o desempenho em cenários de leitura intensiva.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/best-practices/data-partitioning#denormalization",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No Microsoft Power BI, você pode criar <combobox> para realizar drill-up ou drill-down rapidamente e encontrar valores agregados em diferentes níveis de uma dimensão.",
    "opcoes": [
      "Escolha uma opção",
      "um dashboard",
      "uma tabela de fatos",
      "uma chave única",
      "uma hierarquia de atributos"
    ],
    "resposta": 4,
    "explicacao": "Uma hierarquia de atributos permite organizar atributos de dimensão em uma estrutura hierárquica, normalmente com múltiplos níveis de granularidade. Isso facilita a navegação entre diferentes níveis de detalhe durante a análise de dados no Power BI.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/transform-model/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O mecanismo de pipeline usado no Azure Data Factory também está disponível em <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Databricks",
      "Azure HDInsight",
      "Banco de Dados SQL do Azure",
      "Azure Synapse Analytics"
    ],
    "resposta": 4,
    "explicacao": "O mecanismo de pipeline do Azure Data Factory também é utilizado no Azure Synapse Analytics, permitindo integração e orquestração de dados em ambas as plataformas com funcionalidades semelhantes.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/data-integration/concepts-data-factory-differences",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em um modelo analítico, qualquer ponto onde as dimensões se cruzam representa <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "um cubo",
      "uma dimensão agregada",
      "uma medida agregada"
    ],
    "resposta": 1,
    "explicacao": "Em modelos analíticos multidimensionais, como no SQL Server Analysis Services (SSAS), as interseções entre dimensões formam células em um cubo. Cada célula pode conter valores agregados baseados nas medidas e dimensões selecionadas.",
    "link": "https://learn.microsoft.com/pt-br/analysis-services/multidimensional-models/cubes-in-multidimensional-models",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> combina um data warehouse relacional escalável e de alto desempenho baseado no Microsoft SQL Server com a flexibilidade de um data lake e do Apache Spark de código aberto.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Databricks",
      "Azure HDInsight",
      "Azure Stream Analytics",
      "Azure Synapse Analytics"
    ],
    "resposta": 4,
    "explicacao": "O Azure Synapse Analytics combina recursos de data warehouse relacional com a flexibilidade de um data lake e integração com Apache Spark. Ele permite consultar e analisar grandes volumes de dados estruturados e não estruturados em um único ambiente.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/overview-what-is",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Os blobs de página do Azure Blob Storage são otimizados para <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "operações de anexação.",
      "operações de leitura e gravação aleatórias.",
      "armazenamento de dados chave/valor.",
      "armazenamento de grandes objetos binários que mudam com pouca frequência."
    ],
    "resposta": 2,
    "explicacao": "Os blobs de página do Azure são otimizados para leitura e gravação aleatórias, o que os torna ideais para discos de máquinas virtuais, bancos de dados e outros cenários com acesso não sequencial.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blob-pageblob-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "GRANT, REVOKE e DENY são exemplos de qual tipo de instrução SQL?",
    "opcoes": [
      "Linguagem de Definição de Dados (DDL)",
      "Linguagem de Controle de Dados (DCL)",
      "Linguagem de Manipulação de Dados (DML)"
    ],
    "resposta": 1,
    "explicacao": "As instruções GRANT, REVOKE e DENY são usadas para controlar permissões de acesso aos objetos do banco de dados, sendo classificadas como parte da Linguagem de Controle de Dados (DCL).",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/grant-database-permissions-transact-sql?view=sql-server-ver16",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os termos ACID às descrições apropriadas, relacionadas às propriedades das transações em bancos de dados.",
    "itens": [
      { "label": "Atomicidade" },
      { "label": "Consistência" },
      { "label": "Isolamento" },
      { "label": "Durabilidade" }
    ],
    "grupos": [
      "Transações simultâneas não podem interferir umas com as outras e devem resultar em um estado consistente do banco de dados.",
      "Cada transação é tratada como uma unidade única que é executada completamente ou falha completamente.",
      "As transações só podem levar os dados de um estado válido para outro.",
      "Quando uma transação é confirmada (committed), ela permanecerá confirmada."
    ],
    "respostas": {
      "Transações simultâneas não podem interferir umas com as outras e devem resultar em um estado consistente do banco de dados.": ["Isolamento"],
      "Cada transação é tratada como uma unidade única que é executada completamente ou falha completamente.": ["Atomicidade"],
      "As transações só podem levar os dados de um estado válido para outro.": ["Consistência"],
      "Quando uma transação é confirmada (committed), ela permanecerá confirmada.": ["Durabilidade"]
    },
    "explicacao": "As propriedades ACID garantem confiabilidade em transações de banco de dados: *Atomicidade* assegura que a transação seja 'tudo ou nada'; *Consistência* garante transições entre estados válidos; *Isolamento* previne interferência entre transações concorrentes; e *Durabilidade* assegura que os efeitos de uma transação persistam mesmo após falhas.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os termos de normalização de banco de dados às descrições apropriadas.",
    "itens": [
      { "label": "Atributos" },
      { "label": "Entidades" },
      { "label": "Chaves estrangeiras" }
    ],
    "grupos": [
      "São separados em colunas individuais",
      "São separados em tabelas individuais",
      "Relacionam duas entidades"
    ],
    "respostas": {
      "São separados em colunas individuais": ["Atributos"],
      "São separados em tabelas individuais": ["Entidades"],
      "Relacionam duas entidades": ["Chaves estrangeiras"]
    },
    "explicacao": "Na normalização de bancos de dados, *atributos* representam características que se tornam colunas, *entidades* representam objetos ou conceitos que são modelados como tabelas, e *chaves estrangeiras* são usadas para relacionar entidades entre si.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-transaction-processing",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Para criar um dashboard, você pode usar <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "apenas o aplicativo Microsoft Power BI Desktop",
      "apenas o aplicativo Microsoft Power BI Mobile",
      "apenas o serviço Microsoft Power BI",
      "tanto o aplicativo Microsoft Power BI Desktop quanto o serviço Power BI"
    ],
    "resposta": 3,
    "explicacao": "Dashboards só podem ser criados no serviço Power BI (Online), e não no Power BI Desktop ou no aplicativo móvel. O Power BI Desktop é usado para criar relatórios, que depois podem ser publicados no serviço para criação de dashboards.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboards",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre processamento em lote e em fluxo de dados.",
    "afirmacoes": [
      "O processamento em lote é otimizado para lidar com grandes volumes de dados.",
      "O processamento em fluxo é otimizado para realizar análises complexas de conjuntos de dados.",
      "A latência do processamento em lote é normalmente medida em segundos ou milissegundos."
    ],
    "respostas": [true, false, false],
    "explicacao": "1. Verdadeiro – O processamento em lote é projetado para lidar com grandes volumes de dados, processando-os em blocos. \n2. Falso – O processamento em fluxo (streaming) é mais adequado para análises em tempo real, não para análises complexas, que normalmente são feitas em batch. \n3. Falso – A latência do processamento em lote é geralmente medida em minutos ou horas, não em segundos ou milissegundos, que são características do stream processing.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Dados estruturados onde cada linha representa uma única entidade de dados usam qual tipo de esquema?",
    "opcoes": ["XML", "Tabular", "Blob", "JSON"],
    "resposta": 1,
    "explicacao": "O esquema tabular é usado para dados estruturados em que cada linha representa uma entidade e cada coluna representa um atributo. Esse formato é comum em tabelas de bancos de dados relacionais e arquivos CSV.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/power-bi-data-sources",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O fluxo de trabalho para criar uma solução analítica no Microsoft Power BI começa com <combobox>.",
    "opcoes": ["Escolha uma opção", "Power BI Desktop", "O aplicativo móvel do Power BI", "O serviço do Power BI"],
    "resposta": 1,
    "explicacao": "O processo de criação de uma solução de análise no Power BI geralmente começa com o Power BI Desktop, onde os usuários conectam-se a fontes de dados, modelam e transformam os dados, e criam visualizações. Depois, os relatórios podem ser publicados no serviço do Power BI para compartilhamento e colaboração.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/power-bi-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa implementar uma plataforma como serviço (PaaS) do Azure que hospedará um banco de dados relacional. A solução deve oferecer suporte a escalonamento automático embutido. Qual serviço você deve implementar?",
    "opcoes": [
      "Azure SQL Database",
      "SQL Server em Máquinas Virtuais do Azure",
      "Instância Gerenciada do Azure SQL",
      "Azure SQL Edge"
    ],
    "resposta": 0,
    "explicacao": "O Azure SQL Database é uma oferta de PaaS da Microsoft que fornece funcionalidades de banco de dados totalmente gerenciado, incluindo suporte a escalabilidade automática, alta disponibilidade, backups automáticos e balanceamento de carga. As outras opções não oferecem o mesmo nível de abstração gerenciada ou não são indicadas para esse tipo de cenário.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre bancos de dados não relacionais.",
    "afirmacoes": [
      "Em bancos de dados não relacionais, os dados são sempre armazenados em tabelas.",
      "Em bancos de dados não relacionais, os dados são sempre armazenados usando um esquema fixo.",
      "Em bancos de dados não relacionais, duas entidades na mesma coleção podem ter conjuntos diferentes de campos."
    ],
    "respostas": [false, false, true],
    "explicacao": "1. Bancos de dados não relacionais, como os baseados em documentos (por exemplo, Azure Cosmos DB), não armazenam dados em tabelas, mas em coleções de documentos, grafos, colunas ou pares chave-valor.\n2. Esses bancos de dados geralmente são orientados por esquema flexível, ou seja, não utilizam um esquema fixo. Isso permite maior agilidade na modelagem dos dados.\n3. De fato, em coleções de bancos não relacionais como o Cosmos DB, documentos diferentes podem ter estruturas de dados diferentes dentro da mesma coleção.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre serviços de banco de dados SQL no Azure.",
    "afirmacoes": [
      "Cada instância gerenciada do Azure SQL dá suporte a múltiplos bancos de dados que podem ser acessados por meio de consultas entre bancos.",
      "Pools elásticos são usados para compartilhar recursos entre várias instâncias do SQL Server em Máquinas Virtuais do Azure.",
      "O Azure SQL Database é totalmente compatível com instâncias físicas locais e instâncias virtualizadas do Microsoft SQL Server."
    ],
    "respostas": [true, true, false],
    "explicacao": "1. A instância gerenciada do Azure SQL (Managed Instance) oferece suporte a múltiplos bancos de dados e permite consultas entre bancos (cross-database queries).\n2. Pools elásticos são usados para compartilhar recursos, e embora mais comuns no Azure SQL Database, também há recursos similares para balanceamento em ambientes mais amplos, como SQL Server em VMs com arquiteturas customizadas.\n3. O Azure SQL Database é uma plataforma como serviço (PaaS) e, apesar de oferecer alta compatibilidade, **não** é totalmente compatível com todas as funcionalidades do SQL Server físico ou virtualizado local.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/elastic-pool-overview?view=azuresql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-7"
  },
  {
    "tipo": "unica",
    "texto": "Você tem os seguintes dados:<br><br><pre style=\"background-color:#f4f4f4;padding:10px;border:1px solid #ccc;border-radius:5px;\">{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"address\": {\n    \"streetAddress\": \"1 Main St.\",\n    \"city\": \"New York\",\n    \"state\": \"NY\",\n    \"postalCode\": \"10009\"\n  }\n},\n{\n  \"firstName\": \"Jane\",\n  \"lastName\": \"Doe\",\n  \"address\": {\n    \"streetAddress\": \"1 Main St.\",\n    \"city\": \"New York\",\n    \"state\": \"NY\",\n    \"postalCode\": \"10009\"\n  },\n  \"contact\": [\n    {\n      \"type\": \"email\",\n      \"address\": \"jane.doe@contoso.com\"\n    }\n  ]\n}</pre><br>Que tipo de dado é esse?",
    "opcoes": ["Não estruturado", "Semiestruturado", "Estruturado"],
    "resposta": 1,
    "explicacao": "Dados semiestruturados, como JSON, não seguem um modelo rígido de tabela (como os dados estruturados), mas ainda mantêm uma organização com marcadores e hierarquias, o que os distingue dos dados totalmente não estruturados. JSON é um exemplo típico de dado semiestruturado.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/non-relational-data",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-7"
  }


];
