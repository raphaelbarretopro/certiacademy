// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [

  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A cláusula <combobox> pode ser usada em instruções da Linguagem de Manipulação de Dados (DML) para especificar os critérios que as linhas devem atender.",
    "opcoes": ["Selecione uma resposta", "ALTER", "JOIN", "SET", "WHERE"],
    "resposta": 4,
    "explicacao": "A cláusula WHERE é utilizada em instruções DML como SELECT, UPDATE e DELETE para filtrar os registros com base em condições específicas. Ela define os critérios que as linhas devem atender para serem afetadas pela operação.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/where-transact-sql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual das instruções a seguir é um exemplo de Linguagem de Manipulação de Dados (DML)?",
    "opcoes": ["GRANT", "INSERT", "REVOKE", "DROP"],
    "resposta": 1,
    "explicacao": "A instrução INSERT faz parte da Linguagem de Manipulação de Dados (DML), pois é usada para inserir dados em tabelas existentes. As instruções GRANT, REVOKE e DROP pertencem a outras linguagens de controle ou definição de dados.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/insert-transact-sql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma característica de um banco de dados não relacional?",
    "opcoes": [
      "Suporte completo ao Transact-SQL",
      "Um esquema fixo",
      "Entidades autodescritivas"
    ],
    "resposta": 2,
    "explicacao": "Bancos de dados não relacionais geralmente usam estruturas de dados flexíveis e armazenam entidades autodescritivas, permitindo que os dados sejam interpretados sem depender de um esquema rígido. Isso contrasta com bancos relacionais, que requerem esquemas fixos e suporte completo a linguagens como Transact-SQL.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-provision-deploy-non-relational-data-services-azure/",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve usar para excluir automaticamente blobs do Azure Blob Storage?",
    "opcoes": [
      "Armazenamento de arquivamento",
      "O feed de alterações",
      "Exclusão reversível (soft delete)",
      "Uma política de gerenciamento do ciclo de vida"
    ],
    "resposta": 3,
    "explicacao": "A política de gerenciamento do ciclo de vida permite automatizar tarefas de gerenciamento de dados em blobs, como exclusão, movimentação entre camadas e arquivamento com base em regras definidas pelo usuário.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/lifecycle-management-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "multipla",
    "texto": "No armazenamento Azure Table, cada linha em uma tabela deve ser identificada exclusivamente por quais dois componentes?",
    "opcoes": [
      "Uma chave de partição",
      "Um intervalo",
      "Uma chave de linha",
      "Um carimbo de data/hora"
    ],
    "respostas": [0, 2],
    "explicacao": "No Azure Table Storage, cada entidade (linha) é identificada exclusivamente por uma combinação da chave de partição e da chave de linha. A chave de partição agrupa entidades, facilitando consultas rápidas, enquanto a chave de linha identifica exclusivamente uma entidade dentro de uma partição. O carimbo de data/hora é utilizado para controle de versão, mas não faz parte da chave primária.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/tables/table-storage-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é responsável por criar visualizações e gráficos que ajudam a empresa a tomar decisões informadas.",
    "opcoes": [
      "Escolha uma opção",
      "Um engenheiro de dados",
      "Um cientista de dados",
      "Um analista de dados",
      "Um administrador de banco de dados"
    ],
    "resposta": 3,
    "explicacao": "O analista de dados é responsável por explorar e analisar dados para criar visualizações e gráficos que ajudam as organizações a tomar decisões informadas. Eles utilizam ferramentas de BI (Business Intelligence) para transformar dados em insights visuais, permitindo melhor compreensão dos dados por parte dos tomadores de decisão.",
    "link": "https://www.coursera.org/articles/data-visualization-jobs",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa armazenar dados de log de eventos que são semiestruturados e recebidos em tempo real. O que você deve usar?",
    "opcoes": [
      "Azure Table storage",
      "Azure Queue storage",
      "Azure Files",
      "Azure Blob storage"
    ],
    "resposta": 1,
    "explicacao": "O Azure Queue Storage é mais adequado para dados de log de eventos recebidos em tempo real, pois fornece um modelo de armazenamento orientado a mensagens que permite a entrega confiável e escalável de logs como mensagens. Além disso, pode ser facilmente integrado a outros serviços do Azure para processamento e análise posterior.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/queues/storage-queues-introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual API do Azure Cosmos DB você deve usar para um banco de dados de grafos?",
    "opcoes": ["Table", "Cassandra", "Core (SQL)", "Gremlin"],
    "resposta": 3,
    "explicacao": "A API Gremlin do Azure Cosmos DB é usada para armazenar e consultar dados de grafos. Ela implementa o modelo de grafo de propriedade TinkerPop e permite consultas sofisticadas de grafos em estruturas de vértices e arestas.",
    "link": "https://learn.microsoft.com/en-us/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre serviços de análise de dados no Azure.",
    "afirmacoes": [
      "O Azure Data Lake Storage pode ser usado como uma área de preparação para dados ingeridos antes que sejam convertidos em um formato adequado para análises.",
      "O Azure Data Factory é um mecanismo de análise que utiliza uma arquitetura de processamento maciçamente paralelo (MPP).",
      "O Azure HDInsight permite criar modelos tabulares a partir de várias fontes de dados para dar suporte a consultas OLAP (processamento analítico online)."
    ],
    "respostas": [true, false, false],
    "explicacao": "1. Verdadeiro: O Azure Data Lake Storage é comumente utilizado como área de preparação (staging) para armazenar dados ingeridos antes que passem por transformações analíticas.\n\n2. Falso: O Azure Data Factory é uma ferramenta de integração de dados usada para criar e orquestrar pipelines de dados. Ele não é um mecanismo de análise nem utiliza MPP.\n\n3. Falso: O Azure HDInsight é uma plataforma de análise de big data que suporta frameworks como Hadoop, Spark e Hive, mas não é usado para construir modelos tabulares para OLAP, função típica do Azure Analysis Services ou Power BI.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/technology-choices-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> permite que várias bases de dados Azure SQL compartilhem recursos como memória, espaço de armazenamento de dados e poder de processamento.",
    "opcoes": [
      "Escolha uma opção",
      "Um servidor Azure SQL",
      "Um pool elástico",
      "O Assistente de Migração de Dados (DMA)",
      "Uma rede virtual"
    ],
    "resposta": 2,
    "explicacao": "A alternativa correta é 'Um pool elástico'. O Azure Elastic Pool permite que várias bases de dados Azure SQL compartilhem um conjunto de recursos (como DTUs ou vCores), o que proporciona um uso mais eficiente da capacidade computacional e redução de custos em cenários com cargas de trabalho variáveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/elastic-pool-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Um banco possui um sistema que gerencia transações financeiras. Ao transferir dinheiro entre contas, o sistema nunca deve recuperar um valor da conta de origem que reflita o saldo antes da transferência e um valor da conta de destino que reflita o saldo após a transferência. Qual princípio da semântica ACID é exemplificado nesse caso?",
    "opcoes": [
      "Atomicidade",
      "Durabilidade",
      "Consistência",
      "Isolamento"
    ],
    "resposta": 3,
    "explicacao": "O princípio do isolamento garante que transações concorrentes não interfiram umas nas outras. No exemplo, enquanto uma transação de transferência está em andamento, qualquer outra transação que consulte os saldos deve aguardar ou retornar dados consistentes, não podendo ver parte do efeito da transação até que ela seja concluída. Isso assegura que os dados intermediários não fiquem visíveis para outras transações.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/set-implicit-transactions-transact-sql?view=sql-server-ver16",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os termos aos seus respectivos conceitos sobre processamento analítico e armazenamento de dados.",
    "itens": [
      { "label": "Extract, transform, and load (ETL)" },
      { "label": "Fact tables" },
      { "label": "Data warehouses" }
    ],
    "grupos": [
      "Uma solução que copia dados de arquivos e bancos de dados OLTP para um sistema de processamento analítico.",
      "Contém valores numéricos que podem ser analisados.",
      "Uma solução que armazena dados em um esquema relacional otimizado para operações de leitura."
    ],
    "respostas": {
      "Uma solução que copia dados de arquivos e bancos de dados OLTP para um sistema de processamento analítico.": ["Extract, transform, and load (ETL)"],
      "Contém valores numéricos que podem ser analisados.": ["Fact tables"],
      "Uma solução que armazena dados em um esquema relacional otimizado para operações de leitura.": ["Data warehouses"]
    },
    "explicacao": "O processo ETL (Extract, Transform, Load) é usado para mover dados de fontes transacionais para ambientes analíticos. As tabelas de fatos armazenam dados quantitativos para análise e são complementadas por tabelas dimensionais. Data warehouses são estruturas otimizadas para leitura e análise de grandes volumes de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/data-warehousing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Ao provisionar um Azure Cosmos DB, é necessário especificar o tipo de API que será usada no nível da <combobox>.",
    "opcoes": ["Escolha uma opção", "container", "Banco de Dados", "Conta", "item"],
    "resposta": 3,
    "explicacao": "Ao criar uma conta no Azure Cosmos DB, é necessário definir o tipo de API (como SQL, MongoDB, Cassandra, Gremlin ou Table), pois ela determina como os dados serão acessados e armazenados. Essa escolha é feita no nível da conta, antes de criar bancos de dados ou containers.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Um engenheiro de dados é responsável por qual das seguintes tarefas?",
    "opcoes": [
      "Explorar dados para identificar tendências.",
      "Implementar políticas, ferramentas e processos para planos de backup e recuperação.",
      "Projetar e construir modelos analíticos.",
      "Projetar e implementar armazenamentos de dados para cargas de trabalho analíticas."
    ],
    "resposta": 3,
    "explicacao": "Engenheiros de dados trabalham com stakeholders para projetar e implementar cargas de trabalho relacionadas a dados. Isso inclui ingestão, limpeza, transformação e armazenamento de dados para análises. Essa função usa tecnologias como bancos de dados relacionais, não relacionais, arquivos e fluxos de dados.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-roles-responsibilities-world-of-data/2-explore-job-roles",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O mecanismo de processamento massivamente paralelo (MPP) do Azure Synapse Analytics <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "distribui o processamento entre os nós de computação.",
      "distribui o processamento entre os nós de controle.",
      "redireciona conexões de clientes entre os nós de computação.",
      "redireciona conexões de clientes entre os nós de controle."
    ],
    "resposta": 1,
    "explicacao": "O mecanismo MPP (Massively Parallel Processing) do Azure Synapse Analytics distribui as cargas de trabalho de processamento entre múltiplos nós de computação para realizar consultas em paralelo, garantindo alto desempenho e escalabilidade na análise de grandes volumes de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Os dados em um data warehouse podem ser agregados e carregados em um modelo de processamento analítico online (OLAP), que também é conhecido como <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "data lake",
      "dimension",
      "measure",
      "cube"
    ],
    "resposta": 4,
    "explicacao": "No contexto de OLAP (processamento analítico online), os dados são organizados em estruturas multidimensionais chamadas 'cubos', que permitem análises rápidas e flexíveis em grandes volumes de dados. Um cubo OLAP permite que os usuários analisem dados de diferentes perspectivas, como tempo, produto ou localização.",
    "link": "https://learn.microsoft.com/pt-br/analysis-services/multidimensional-models-olap-logical-cube-objects/cube-objects-analysis-services-multidimensional-data?view=asallproducts-allversions",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> são usados para comparar duas medidas numéricas e identificar uma relação ou correlação entre elas.",
    "opcoes": [
      "Escolha uma opção",
      "Gráficos de barras",
      "Gráficos de pizza",
      "Gráficos de dispersão",
      "Tabelas"
    ],
    "resposta": 3,
    "explicacao": "Gráficos de dispersão (scatter charts) usam pontos para representar valores de duas variáveis numéricas diferentes. A posição de cada ponto nos eixos horizontal e vertical indica os valores de uma observação individual. Eles são ideais para identificar correlações e relações entre variáveis.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a#scatter-charts",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um bloco de código que é executado em um banco de dados é chamado de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Uma tabela",
      "Uma view",
      "Um índice",
      "Uma stored procedure"
    ],
    "resposta": 4,
    "explicacao": "Uma stored procedure (procedimento armazenado) é um bloco de código SQL salvo no banco de dados, que pode ser executado várias vezes para realizar tarefas como inserções, atualizações, exclusões ou consultas. Ela encapsula lógica reutilizável no lado do servidor.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/stored-procedures/stored-procedures-database-engine",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual formato de arquivo possui nomes e tipos de dados definidos para cada coluna e utiliza armazenamento columnar compactado?",
    "opcoes": ["HTML", "CSV", "Apache Parquet", "JSON"],
    "resposta": 2,
    "explicacao": "O Apache Parquet é um formato de arquivo colunar eficiente e compactado, projetado para armazenar dados tabulares. Ele mantém metadados sobre os tipos e nomes das colunas e permite leitura eficiente em análises baseadas em colunas, sendo amplamente usado em soluções de big data.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-best-practices",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um banco de dados relacional é apropriado para cenários que envolvem um alto volume de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "alterações nos relacionamentos entre entidades",
      "gravações distribuídas geograficamente",
      "gravações com estruturas de dados variadas",
      "gravações transacionais"
    ],
    "resposta": 4,
    "explicacao": "Bancos de dados relacionais são ideais para cenários que exigem consistência transacional e integridade referencial. Eles oferecem suporte robusto a transações ACID, tornando-os apropriados para um alto volume de gravações transacionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os níveis de acesso do Azure Blob Storage.",
    "afirmacoes": [
      "Os dados armazenados no nível de acesso Hot do Azure Blob Storage são armazenados em mídia de alto desempenho.",
      "O nível de acesso Cool no Azure Blob Storage incorre em custos de armazenamento mais altos em comparação com o nível Hot.",
      "O nível de acesso Archive no Azure Blob Storage tem a maior latência dos três níveis disponíveis."
    ],
    "respostas": [true, false, true],
    "explicacao": "1. A afirmação é verdadeira: O nível Hot é otimizado para acesso frequente e utiliza mídias de alto desempenho.\n2. A afirmação é falsa: O nível Cool possui custos de armazenamento mais baixos do que o nível Hot, porém, tem custos de acesso mais altos.\n3. A afirmação é verdadeira: O nível Archive é projetado para dados acessados raramente e tem a maior latência de recuperação.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre OLTP, OLAP e data warehouses.",
    "afirmacoes": [
      "O processamento de transações online (OLTP) depende de um sistema de banco de dados onde o armazenamento de dados é otimizado para operações de leitura e escrita.",
      "O processamento analítico online (OLAP) depende de um sistema de banco de dados onde o armazenamento de dados é otimizado para operações de leitura e escrita.",
      "Os data warehouses são otimizados para operações de leitura."
    ],
    "respostas": [true, false, true],
    "explicacao": "1. Verdadeiro: OLTP lida com operações frequentes de leitura e escrita e requer desempenho equilibrado.\n2. Falso: OLAP é focado em análises e consultas complexas, sendo otimizado majoritariamente para leitura.\n3. Verdadeiro: Data warehouses são projetados para grandes volumes de leitura e análise de dados históricos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-analytical-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Um sistema de ponto de venda (POS) no varejo é um exemplo de que tipo de solução?",
    "opcoes": [
      "Um data warehouse",
      "Processamento analítico online (OLAP)",
      "Extração, transformação e carregamento (ETL)",
      "Processamento de transações online (OLTP)"
    ],
    "resposta": 3,
    "explicacao": "Sistemas POS executam muitas transações em tempo real, como vendas, pagamentos e atualizações de estoque. Isso caracteriza um cenário típico de OLTP, que é otimizado para transações frequentes e rápidas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-analytical-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em um banco de dados de grafos, as arestas (edges) especificam relações entre <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "famílias de colunas",
      "fatos",
      "vértices",
      "tabelas"
    ],
    "resposta": 3,
    "explicacao": "Em bancos de dados de grafos, os dados são representados por vértices (vértices) e suas conexões por arestas (arestas). As arestas definem as relações entre os vértices, que representam entidades como pessoas, locais ou objetos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Você possui dados estruturados em formato tabular. O que representa uma instância individual de uma entidade de dados?",
    "opcoes": ["uma coluna", "uma tabela", "uma célula", "uma linha"],
    "resposta": 3,
    "explicacao": "Em um banco de dados relacional, cada linha (row) em uma tabela representa uma instância individual de uma entidade. As colunas representam os atributos da entidade, enquanto a tabela armazena o conjunto de entidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Bancos de dados relacionais são comumente usados para armazenar e consultar <combobox>.",
    "opcoes": ["Escolha uma opção", "blobs", "dados semiestruturados", "dados estruturados", "dados não estruturados"],
    "resposta": 3,
    "explicacao": "Bancos de dados relacionais são projetados para armazenar e consultar dados estruturados, organizados em tabelas com linhas e colunas bem definidas. Isso permite consultas eficientes usando SQL.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual oferta do Azure SQL fornece compatibilidade quase total (quase 100%) com instâncias do Microsoft SQL Server locais, além de oferecer atualizações automáticas, backups e tarefas de manutenção?",
    "opcoes": [
      "Azure SQL Managed Instance",
      "SQL Server em Máquinas Virtuais do Azure",
      "Azure SQL Database",
      "Azure SQL Edge"
    ],
    "resposta": 0,
    "explicacao": "O Azure SQL Managed Instance oferece alta compatibilidade com o Microsoft SQL Server local e fornece recursos automatizados de gerenciamento, como atualizações, backups e manutenção. É ideal para migração lift-and-shift de aplicações legadas SQL Server para a nuvem com o mínimo de mudanças.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview?view=azuresql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Dados relacionais usam <combobox> para impor relacionamentos entre diferentes tabelas.",
    "opcoes": ["Escolha uma opção", "coleções", "linhas", "chaves", "partições"],
    "resposta": 3,
    "explicacao": "Em bancos de dados relacionais, as chaves primárias e estrangeiras (keys) são usadas para definir e impor relacionamentos entre diferentes tabelas, garantindo integridade referencial.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/design-a-data-model-with-ads/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Um processo de extração, carregamento e transformação (ELT) requer <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "um pipeline de dados que inclua um mecanismo de transformação",
      "um mecanismo de transformação separado",
      "um armazenamento de dados de destino poderoso o suficiente para transformar os dados",
      "dados totalmente processados antes de serem carregados no armazenamento de dados de destino"
    ],
    "resposta": 3,
    "explicacao": "No processo ELT (Extract, Load, Transform), os dados são carregados primeiro no armazenamento de destino e a transformação é feita posteriormente nesse destino. Isso requer que o armazenamento (como um data warehouse) seja poderoso o suficiente para realizar as transformações.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Em um modelo analítico projetado como um esquema em estrela, as entidades pelas quais você agrega ou fatia as medidas são chamadas de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "cubos",
      "dimensões",
      "fatos",
      "esquemas"
    ],
    "resposta": 2,
    "explicacao": "No modelo de dados em estrela, as *dimensões* representam entidades pelas quais as *fatos* (medidas) podem ser agregadas ou divididas. Exemplos incluem tempo, local, produto, etc.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/guidance/star-schema",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as opções de armazenamento de dados do Azure aos tipos apropriados de dados.",
    "itens": [
      { "label": "Azure Blob Storage" },
      { "label": "Azure Cosmos DB for NoSQL" },
      { "label": "Azure Data Factory" },
      { "label": "Azure SQL Database" }
    ],
    "grupos": [
      "Arquivos de áudio",
      "Documentos JSON",
      "Conjuntos de dados tabulares"
    ],
    "respostas": {
      "Arquivos de áudio": ["Azure Blob Storage"],
      "Documentos JSON": ["Azure Cosmos DB for NoSQL"],
      "Conjuntos de dados tabulares": ["Azure SQL Database"]
    },
    "explicacao": "O Azure Blob Storage é ideal para armazenar arquivos binários como áudio e vídeo. O Azure Cosmos DB é otimizado para documentos NoSQL como JSON. O Azure SQL Database é ideal para dados relacionais organizados em tabelas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/data-storage",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre dados relacionais, processos de ELT e modelos analíticos em estrela.",
    "afirmacoes": [
      "Dados relacionais usam coleções para reforçar relacionamentos entre tabelas.",
      "Um processo ELT requer que os dados sejam totalmente transformados antes de serem carregados no repositório.",
      "Em um modelo de estrela, as entidades que permitem a agregação ou divisão de medidas são chamadas de dimensões."
    ],
    "respostas": [false, false, true],
    "explicacao": "1. **Falso** – Dados relacionais utilizam *chaves* (primárias e estrangeiras) para reforçar relacionamentos entre tabelas, não coleções.\n2. **Falso** – No modelo ELT (Extract, Load, Transform), os dados são primeiro carregados no destino e só depois transformados. Transformar antes é característico do modelo ETL.\n3. **Verdadeiro** – Em modelos analíticos com esquema estrela, as *dimensões* representam os eixos pelos quais as medidas podem ser agregadas ou analisadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A API do Azure Cosmos DB <combobox> permite o uso de instruções SELECT para recuperar documentos do Azure Cosmos DB.",
    "opcoes": [
      "Selecione uma resposta",
      "para NoSQL",
      "para Apache Gremlin",
      "para MongoDB",
      "para Tabela"
    ],
    "resposta": 1,
    "explicacao": "A API do Azure Cosmos DB para NoSQL permite a execução de instruções SELECT usando uma linguagem de consulta semelhante ao SQL. Essa API é ideal para consultas em documentos JSON armazenados no Cosmos DB. As outras APIs são voltadas para modelos de grafos (Gremlin), documentos compatíveis com MongoDB ou dados em tabelas, e não utilizam a mesma sintaxe de consulta.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/nosql/overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o Azure File Storage.",
    "afirmacoes": [
      "Você cria o Azure File Storage em uma conta de armazenamento.",
      "O nível Premium do Azure File Storage utiliza hardware baseado em HDD em um datacenter.",
      "O nível Standard do Azure File Storage utiliza SSDs."
    ],
    "respostas": [true, false, false],
    "explicacao": "A primeira afirmação é verdadeira, pois os recursos do Azure File Storage são criados dentro de contas de armazenamento. A segunda afirmação é falsa, já que o nível Premium utiliza SSDs, não HDDs, para oferecer maior desempenho. A terceira também é falsa, pois o nível Standard utiliza discos rígidos (HDDs), não SSDs.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-files-introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O <combobox> oferece uma gama completa de recursos de modelagem de dados e edição de relatórios do Power BI.",
    "opcoes": [
      "Selecione uma resposta",
      "Microsoft Power BI Desktop",
      "O serviço Microsoft Power BI",
      "O aplicativo móvel Microsoft Power BI"
    ],
    "resposta": 1,
    "explicacao": "O Microsoft Power BI Desktop é a ferramenta principal utilizada para modelagem de dados, criação de relatórios e desenvolvimento de soluções de BI. Já o serviço Power BI é voltado para compartilhamento, colaboração e visualização online, e o aplicativo móvel é utilizado para visualização de relatórios, mas não permite edição ou modelagem completa.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/desktop-getting-started",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Depois de criar modelos de dados e relatórios no Microsoft Power BI, você pode publicá-los em <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "Power BI Desktop",
      "Power Query",
      "o aplicativo móvel Power BI",
      "o serviço Power BI"
    ],
    "resposta": 4,
    "explicacao": "Após criar modelos e relatórios no Power BI Desktop, eles são publicados no serviço Power BI (Power BI Service), onde podem ser compartilhados com outros usuários, atualizados automaticamente e incorporados em dashboards.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-get-started",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de recurso do Azure oferece suporte à configuração serverless de um banco de dados Azure SQL?",
    "opcoes": [
      "Servidor SQL em Máquinas Virtuais do Azure",
      "um pool elástico do Azure SQL Database",
      "um banco de dados único no Azure SQL Database",
      "Instância Gerenciada do Azure SQL"
    ],
    "resposta": 2,
    "explicacao": "A configuração serverless está disponível apenas para bancos de dados únicos no Azure SQL Database. Ela permite escalabilidade automática e cobrança por segundo com base em uso real.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/serverless-tier-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Os sistemas de Processamento Analítico Online (OLAP) são particularmente adequados para cargas de trabalho analíticas porque os dados são <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "limitados em tamanho.",
      "otimizados para transações.",
      "pré-agregados.",
      "somente leitura."
    ],
    "resposta": 3,
    "explicacao": "Os sistemas OLAP são usados para análise de grandes volumes de dados históricos. Esses dados geralmente são pré-agregados para permitir consultas rápidas e eficientes, o que os torna ideais para análise e relatórios complexos.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-6"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as linguagens de processamento de dados aos respectivos serviços de análise em tempo real do Azure.",
    "itens": [
      { "label": "JavaScript" },
      { "label": "KQL" },
      { "label": "Python" },
      { "label": "SQL" }
    ],
    "grupos": [
      "Azure Data Explorer",
      "Azure Stream Analytics",
      "Azure Synapse Analytics"
    ],
    "respostas": {
      "Azure Data Explorer": ["KQL"],
      "Azure Stream Analytics": ["SQL"],
      "Azure Synapse Analytics": ["SQL"]
    },
    "explicacao": "KQL (Kusto Query Language) é utilizado no Azure Data Explorer para análise de grandes volumes de dados. Azure Stream Analytics utiliza uma variação de SQL para processar dados em tempo real. Azure Synapse Analytics também usa SQL para análise de dados em larga escala.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-explorer/kusto/query/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Qual API do Azure Cosmos DB você deve usar para um banco de dados de grafos?",
    "opcoes": ["Table", "Cassandra", "NoSQL", "Gremlin"],
    "resposta": 3,
    "explicacao": "A API do Gremlin no Azure Cosmos DB é utilizada especificamente para trabalhar com bancos de dados de grafos, permitindo a modelagem de relacionamentos complexos entre dados. Ela oferece suporte à linguagem de consulta Gremlin, que é amplamente usada em cenários de grafos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um Microsoft Power BI <combobox> permite aos usuários criar documentos altamente formatados, com layout fixo, otimizados para impressão e arquivamento.",
    "opcoes": ["Escolha uma opção", "dashboard", "interactive report", "paginated report", "subscription"],
    "resposta": 3,
    "explicacao": "Os relatórios paginados (paginated reports) no Power BI são ideais para gerar documentos altamente formatados e com layout fixo, como faturas ou relatórios financeiros. Eles são otimizados para cenários onde a impressão e o arquivamento são importantes, seguindo uma estrutura de relatório tradicional, página por página.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/paginated-reports/paginated-reports-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um Microsoft Power BI <combobox> permite aos usuários criar documentos altamente formatados, com layout fixo, otimizados para impressão e arquivamento.",
    "opcoes": ["Escolha uma opção", "painel", "relatório interativo", "relatório paginado", "assinatura"],
    "resposta": 3,
    "explicacao": "Os relatórios paginados no Power BI são ideais para criar documentos detalhados e altamente formatados com layout fixo, como faturas, demonstrativos financeiros ou documentos que exigem precisão na impressão e arquivamento.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/paginated-reports/paginated-reports-report-builder-power-bi",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre funções relacionadas à manipulação e análise de dados.",
    "afirmacoes": [
      "Administradores de banco de dados aplicam rotinas de limpeza de dados e transformam dados em informações úteis.",
      "Engenheiros de dados gerenciam bancos de dados, armazenam cópias de segurança dos dados e restauram os dados em caso de falha.",
      "Analistas de dados criam visualizações de dados e possibilitam que as empresas tomem decisões baseadas em dados."
    ],
    "respostas": [false, false, true],
    "explicacao": "1. **FALSA**: Administradores de banco de dados (DBAs) são responsáveis por manter e proteger os bancos de dados, mas rotinas de limpeza e transformação de dados geralmente são atribuídas a engenheiros ou analistas de dados.\n\n2. **FALSA**: Engenheiros de dados são focados em construir pipelines e fluxos de dados, mas o gerenciamento de backups e restauração costuma ser responsabilidade dos DBAs.\n\n3. **VERDADEIRA**: Analistas de dados criam dashboards, relatórios e visualizações para apoiar a tomada de decisão com base em dados.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-roles-responsibilities-world-of-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  },
  {
    "tipo": "unica",
    "texto": "Um banco precisa garantir que, após a conclusão de uma transação de transferência de conta, os saldos revisados persistam mesmo que o sistema de banco de dados que hospeda a transação se torne temporariamente indisponível. Qual princípio ACID isso exemplifica?",
    "opcoes": [
      "Durabilidade",
      "Isolamento",
      "Atomicidade",
      "Consistência"
    ],
    "resposta": 0,
    "explicacao": "Durabilidade garante que, uma vez que uma transação foi confirmada, os dados resultantes sejam permanentemente salvos no banco de dados, mesmo em caso de falhas ou quedas do sistema. Essa propriedade é essencial para a confiabilidade de sistemas transacionais como os usados por bancos.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/system-dynamic-management-views/sys-dm-tran-database-transactions-transact-sql?view=sql-server-ver16",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-6"
  }





];
