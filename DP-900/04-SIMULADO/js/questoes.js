// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [


  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre particionamento e configuração de APIs no Azure Cosmos DB.",
    "afirmacoes": [
      "A API do Azure Cosmos DB é configurada separadamente para cada banco de dados em uma conta do Azure Cosmos DB.",
      "Chaves de partição são usadas no Azure Cosmos DB para otimizar consultas.",
      "Itens contidos na mesma partição lógica do Azure Cosmos DB podem ter diferentes chaves de partição."
    ],
    "respostas": [false, true, false],
    "explicacao": "A API do Azure Cosmos DB é definida no nível da conta, não por banco de dados individual. As chaves de partição são essenciais para distribuir dados e otimizar consultas em containers. Todos os itens dentro de uma mesma partição lógica compartilham o mesmo valor de chave de partição, portanto não podem ter diferentes chaves.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/partitioning-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está desenvolvendo um aplicativo que escreverá um grande volume de dados JSON e terá um esquema definido pela aplicação. Qual tipo de armazenamento de dados você deve usar?",
    "opcoes": [
      "Colunar",
      "Chave/valor",
      "Documento",
      "Grafo"
    ],
    "resposta": 2,
    "explicacao": "Armazenamentos de documentos são ideais para grandes volumes de dados JSON com esquemas definidos pela aplicação, pois oferecem flexibilidade de schema e suporte nativo para indexação e consultas de objetos JSON. Diferente dos bancos chave/valor, que exigem recuperação total para processar o conteúdo, bancos de documentos como o Azure Cosmos DB ou MongoDB permitem consultas eficientes sobre o conteúdo JSON.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa recomendar um armazenamento de dados não relacional que seja otimizado para armazenar e recuperar arquivos de texto, vídeos, fluxos de áudio e imagens de disco virtual. O armazenamento de dados deve conter os dados, alguns metadados e um identificador exclusivo para cada arquivo. Qual tipo de armazenamento de dados você deve recomendar?",
    "opcoes": [
      "Chave/valor",
      "Colunar",
      "Objeto",
      "Documento"
    ],
    "resposta": 2,
    "explicacao": "O armazenamento de objetos é otimizado para armazenar e recuperar grandes objetos binários, como imagens, arquivos, vídeos, fluxos de áudio e imagens de disco de máquinas virtuais. Ele também permite armazenar metadados e é ideal para grandes volumes de dados não estruturados. Cada objeto armazenado pode ser identificado de forma exclusiva, o que o torna adequado para esse cenário.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está projetando um armazenamento de dados para sensores de temperatura conectados à internet. Os dados coletados serão usados para analisar tendências de temperatura. Qual tipo de armazenamento de dados você deve usar?",
    "opcoes": [
      "Relacional",
      "Série temporal",
      "Grafo",
      "Colunar"
    ],
    "resposta": 1,
    "explicacao": "Armazenamentos de dados de séries temporais são ideais para dados organizados por tempo, como leituras de sensores. Eles são otimizados para coletar grandes volumes de dados em tempo real a partir de várias fontes e suportam análises sobre tendências ao longo do tempo. Operações de escrita são frequentes e em lote, e mesmo registros pequenos podem gerar grandes volumes de dados rapidamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre armazenamento no Azure Data Lake.",
    "afirmacoes": [
      "Copiar dados para o Azure Data Lake Storage de outra região do Azure resulta em custo extra.",
      "Você pode usar armazenamento de blob, tabela e arquivo na mesma conta de Armazenamento do Azure.",
      "Você implementa o Azure Data Lake Storage criando uma conta de Armazenamento do Azure."
    ],
    "respostas": [true, true, true],
    "explicacao": "1. A transferência de dados entre regiões no Azure gera custos adicionais, conforme a política de cobrança de largura de banda da Microsoft. \n2. O Azure Storage suporta múltiplos tipos de armazenamento (Blob, File, Table e Queue) dentro de uma mesma conta, o que proporciona flexibilidade e economia. \n3. O Azure Data Lake Storage Gen2 é uma funcionalidade do Azure Blob Storage, sendo implementado ao criar uma conta de armazenamento com hierarquia de namespace habilitada.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Ao usar a API Gremlin do Azure Cosmos DB, o tipo de recurso do contêiner é projetado como um <combobox>.",
    "opcoes": ["Escolha uma opção", "tabela", "chave de partição", "documento", "grafo"],
    "resposta": 4,
    "explicacao": "Quando a API Gremlin é usada no Azure Cosmos DB, o contêiner é projetado como um grafo. Isso se deve ao fato de que o Gremlin é uma API voltada para dados em grafos, onde os contêineres representam grafos e os itens representam nós e arestas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/quickstart-console",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Em quais dois níveis você pode definir a taxa de transferência (throughput) em uma conta do Azure Cosmos DB? Cada resposta correta apresenta uma solução completa.",
    "opcoes": ["database", "item", "container", "partition"],
    "respostas": [0, 2],
    "explicacao": "No Azure Cosmos DB, é possível configurar a taxa de transferência (throughput) em dois níveis: **database** e **container**. Quando definida no nível de **database**, todos os contêineres dentro do banco de dados compartilham a taxa de transferência. Quando definida no nível de **container**, cada contêiner tem uma taxa de transferência dedicada. As opções 'item' e 'partition' não são níveis válidos para configurar throughput.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/set-throughput",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre suporte a regiões de leitura e escrita em Azure Table Storage e Azure Cosmos DB Table API.",
    "afirmacoes": [
      "Azure Table storage suporta múltiplas réplicas de leitura.",
      "Azure Table storage suporta múltiplas regiões de escrita.",
      "A API Azure Cosmos DB Table suporta múltiplas réplicas de leitura.",
      "A API Azure Cosmos DB Table suporta múltiplas regiões de escrita."
    ],
    "respostas": [true, false, true, true],
    "explicacao": "1. **Azure Table Storage suporta múltiplas réplicas de leitura**: Verdadeiro. O Azure Storage replica dados automaticamente em uma única região primária e até em regiões secundárias, permitindo redundância e leitura em múltiplos locais, dependendo da configuração (por exemplo, RA-GRS).\n2. **Azure Table Storage suporta múltiplas regiões de escrita**: Falso. Azure Table Storage não oferece suporte a escrita em múltiplas regiões — ele opera com uma única região de escrita.\n3. **Azure Cosmos DB Table API suporta múltiplas réplicas de leitura**: Verdadeiro. O Azure Cosmos DB suporta leitura em qualquer região configurada para leitura.\n4. **Azure Cosmos DB Table API suporta múltiplas regiões de escrita**: Verdadeiro. O Cosmos DB permite replicação global com suporte a regiões de leitura e escrita simultâneas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/table/table-support",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma característica dos dados não relacionais?",
    "opcoes": [
      "Sem índices",
      "Entidades autodescritivas",
      "Um esquema bem definido",
      "Sem valores de chave únicos"
    ],
    "resposta": 1,
    "explicacao": "Dados não relacionais, como os armazenados em bancos de dados do tipo documento, chave-valor e coluna larga, geralmente têm entidades autodescritivas. Isso significa que cada item armazena não apenas os dados, mas também a estrutura (esquema) desses dados. Diferentemente dos dados relacionais, eles não exigem um esquema fixo pré-definido. Essa flexibilidade é ideal para dados semi-estruturados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é um recurso do Azure Synapse Analytics que recupera dados do Azure Blob Storage usando consultas Transact-SQL.",
    "opcoes": [
      "Escolha uma opção",
      "A hierarchical namespace",
      "Azure Synapse Link",
      "PolyBase",
      "The Data Movement Service (DMS)"
    ],
    "resposta": 3,
    "explicacao": "O recurso PolyBase permite que o Azure Synapse Analytics consulte diretamente dados externos armazenados no Azure Blob Storage usando T-SQL, sem a necessidade de mover os dados fisicamente para o ambiente de análise. Isso viabiliza a virtualização de dados e otimiza o desempenho das consultas sobre grandes volumes de dados distribuídos.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/polybase/polybase-guide",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa coletar dados de telemetria em tempo real de um aplicativo móvel. Qual tipo de carga de trabalho descreve esse cenário?",
    "opcoes": [
      "Processamento de Transações Online (OLTP)",
      "Lote (batch)",
      "Processamento massivamente paralelo (MPP)",
      "Streaming"
    ],
    "resposta": 3,
    "explicacao": "O cenário envolve a coleta de dados em tempo real, o que é característico do processamento de dados em streaming. Diferente do OLTP ou de cargas em lote, o streaming permite a ingestão e análise contínua de dados, tornando-o ideal para telemetria de aplicações móveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Você possui um pool SQL dedicado no Azure Synapse Analytics que é usado ativamente apenas à noite por oito horas. Você precisa minimizar o custo do pool SQL dedicado o máximo possível durante os períodos ociosos, garantindo que os dados permaneçam intactos. O que você deve fazer com o pool SQL dedicado?",
    "opcoes": [
      "Reduzir as unidades de data warehouse (DWUs).",
      "Pausar o pool.",
      "Criar um ponto de restauração definido pelo usuário.",
      "Excluir o pool."
    ],
    "resposta": 1,
    "explicacao": "Para reduzir custos em um pool SQL dedicado do Azure Synapse Analytics que não está em uso, a abordagem recomendada é pausá-lo. Isso interrompe a cobrança de recursos computacionais, preservando os dados intactos. Quando necessário, o pool pode ser retomado com os dados disponíveis, garantindo continuidade operacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-manage-compute-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual componente do Azure Data Factory inicia a execução de um pipeline?",
    "opcoes": [
      "Um fluxo de controle",
      "Um gatilho",
      "Um parâmetro",
      "Uma atividade"
    ],
    "resposta": 1,
    "explicacao": "No Azure Data Factory, a execução de pipelines pode ser iniciada manualmente ou automaticamente por meio de um gatilho (trigger). Gatilhos são usados para iniciar execuções com base em eventos, horários ou outros critérios definidos, sendo o componente responsável por iniciar a execução do pipeline.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/concepts-pipeline-execution-triggers#trigger-execution",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa possui uma solução de relatórios com páginas paginadas. Os relatórios consultam um modelo dimensional em um data warehouse. Que tipo de processamento essa solução de relatórios utiliza?",
    "opcoes": [
      "Processamento de fluxo (stream processing)",
      "Processamento em lote (batch processing)",
      "Processamento analítico online (OLAP)",
      "Processamento de transações online (OLTP)"
    ],
    "resposta": 2,
    "explicacao": "Relatórios que consultam um modelo dimensional em um data warehouse utilizam processamento analítico online (OLAP). Esse tipo de processamento é otimizado para consultas analíticas complexas e acesso a grandes volumes de dados organizados para análise, como relatórios empresariais e dashboards.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-analytical-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de atividades aos respectivos tipos de atividades do Azure Data Factory.",
    "itens": [
      { "label": "Control" },
      { "label": "Data movement" },
      { "label": "Data transformation" }
    ],
    "grupos": [
      "Copy",
      "Mapping data flow",
      "Lookup"
    ],
    "respostas": {
      "Copy": ["Data movement"],
      "Mapping data flow": ["Data transformation"],
      "Lookup": ["Control"]
    },
    "explicacao": "A atividade 'Copy' é usada para movimentação de dados entre fontes e destinos. 'Mapping data flow' realiza transformação de dados de forma visual e em escala. 'Lookup' é uma atividade de controle que permite buscar valores em tabelas ou arquivos para controle de fluxo no pipeline.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/introduction",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são três características de uma carga de trabalho de Processamento de Transações Online (OLTP)? Cada alternativa correta representa uma solução completa.",
    "opcoes": [
      "Dados desnormalizados",
      "Gravações intensas e leituras moderadas",
      "Gravações leves e leituras pesadas",
      "Esquema na gravação",
      "Esquema na leitura",
      "Dados normalizados"
    ],
    "respostas": [1, 3, 5],
    "explicacao": "As cargas de trabalho OLTP normalmente envolvem gravações intensas e leituras moderadas, pois lidam com grandes volumes de transações em tempo real. Utilizam o modelo de 'esquema na gravação', em que a estrutura dos dados é rigidamente definida ao serem gravados no banco de dados. Além disso, os dados tendem a ser altamente normalizados para reduzir a redundância e melhorar a integridade dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-transaction-processing",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Quais duas atividades podem ser realizadas inteiramente usando o serviço do Microsoft Power BI, sem depender do Power BI Desktop? Cada alternativa correta representa uma solução completa.",
    "opcoes": [
      "Criação de relatórios e dashboards",
      "Compartilhamento e distribuição de relatórios",
      "Modelagem de dados",
      "Aquisição e preparação de dados"
    ],
    "respostas": [0, 1],
    "explicacao": "A criação de dashboards e o compartilhamento de relatórios são funcionalidades disponíveis exclusivamente no Power BI Service. A modelagem e preparação de dados geralmente requerem o uso do Power BI Desktop, pois envolvem transformações complexas e definição de relacionamentos de dados.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No Azure Data Factory, você pode usar <combobox> para orquestrar atividades de pipeline que dependem da saída de outras atividades.",
    "opcoes": [
      "Selecione uma resposta",
      "um fluxo de controle",
      "um conjunto de dados",
      "um serviço vinculado",
      "um runtime de integração"
    ],
    "resposta": 1,
    "explicacao": "O fluxo de controle no Azure Data Factory é responsável por orquestrar o encadeamento e a execução condicional de atividades de pipeline com base nos resultados de outras atividades.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/concepts-pipelines-activities",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa desenvolver uma solução para fornecer dados a executivos. A solução deve fornecer uma interface gráfica interativa, apresentar vários indicadores-chave de desempenho (KPIs) e permitir a exploração de dados por meio de drill down. O que você deve usar no Microsoft Power BI?",
    "opcoes": [
      "Uma visualização (view)",
      "Um relatório (report)",
      "Um fluxo de dados (dataflow)",
      "Microsoft Power Apps"
    ],
    "resposta": 1,
    "explicacao": "Um relatório do Power BI permite a criação de interfaces interativas com suporte a KPIs e funcionalidades como drill down, ideal para a exploração de dados por executivos.",
    "link": "https://docs.microsoft.com/en-us/power-bi/consumer/end-user-dashboards",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Quais dois serviços do Azure podem ser usados para provisionar clusters Apache Spark? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Azure Time Series Insights",
      "Azure HDInsight",
      "Azure Databricks",
      "Azure Log Analytics"
    ],
    "respostas": [1, 2],
    "explicacao": "O Azure HDInsight e o Azure Databricks são serviços do Azure que oferecem suporte nativo ao Apache Spark. O HDInsight permite criar clusters Spark totalmente gerenciados para cargas de trabalho de big data. O Azure Databricks fornece uma plataforma otimizada para Apache Spark com integração ao Azure, facilitando a análise de dados em larga escala.",
    "link": "https://learn.microsoft.com/pt-br/azure/hdinsight/spark/apache-spark-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo de garantia de qualidade que lê dados de um data warehouse. Que tipo de processamento esse aplicativo utiliza?",
    "opcoes": [
      "Processamento de Transações Online (OLTP)",
      "Processamento em lote",
      "Processamento Analítico Online (OLAP)",
      "Processamento de fluxo"
    ],
    "resposta": 2,
    "explicacao": "O OLAP (Processamento Analítico Online) é indicado para análise de grandes volumes de dados históricos armazenados em data warehouses. Ele permite a descoberta de insights, suporte à decisão e análise de qualidade. Como o aplicativo está lendo dados de um data warehouse para análise, o tipo de processamento correto é OLAP.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-analytical-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Quais três objetos podem ser adicionados a um dashboard do Microsoft Power BI? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Uma página de relatório",
      "Um slide do Microsoft PowerPoint",
      "Uma visualização de um relatório",
      "Um dataflow",
      "Uma caixa de texto"
    ],
    "respostas": [0, 2, 4],
    "explicacao": "Em um dashboard do Power BI, é possível fixar visualizações individuais de relatórios (C), páginas inteiras de relatório (A) e elementos como caixas de texto (E) para adicionar contexto ou anotações. Slides do PowerPoint e dataflows não podem ser fixados diretamente em dashboards.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/create-reports/service-dashboard-add-widget",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre dashboards no Microsoft Power BI.",
    "afirmacoes": [
      "Um dashboard do Microsoft Power BI está associado a um único workspace.",
      "Um dashboard do Microsoft Power BI só pode exibir visualizações de um único conjunto de dados.",
      "Um dashboard do Microsoft Power BI pode exibir visualizações de uma pasta de trabalho do Microsoft Excel."
    ],
    "respostas": [true, false, true],
    "explicacao": "1. Verdadeiro – Cada dashboard do Power BI está vinculado a um único workspace, onde os relatórios e os conjuntos de dados associados estão armazenados. \n2. Falso – Um dashboard pode exibir visualizações de vários conjuntos de dados e de vários relatórios dentro do mesmo workspace. \n3. Verdadeiro – É possível fixar visualizações diretamente de pastas de trabalho do Excel no Power BI, tornando-as parte do dashboard.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/consumer/end-user-dashboards",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual componente do Azure Data Factory fornece o ambiente de computação para atividades?",
    "opcoes": [
      "Pacotes SSIS",
      "Um runtime de integração",
      "Um fluxo de controle",
      "Um pipeline"
    ],
    "resposta": 1,
    "explicacao": "O Integration Runtime (IR) é a infraestrutura de computação usada pelo Azure Data Factory para oferecer suporte à movimentação e transformação de dados. Ele fornece o ambiente necessário para a execução de atividades como fluxos de dados e movimentações entre fontes.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/concepts-integration-runtime",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A Microsoft Power BI <combobox> permite que os usuários criem documentos com layout fixo altamente formatados, otimizados para impressão e arquivamento.",
    "opcoes": [
      "Selecione uma resposta",
      "dashboard",
      "interactive report",
      "paginated report",
      "subscription"
    ],
    "resposta": 3,
    "explicacao": "Paginated Reports no Power BI permitem criar documentos com layout fixo otimizados para impressão e arquivamento, como arquivos PDF e Word. Esses relatórios oferecem controle adicional de visualizações, possibilitando a expansão horizontal e vertical de tabelas e a exibição de todos os dados ao longo de várias páginas.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/paginated-reports/paginated-reports-report-builder-power-bi",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são dois usos da visualização de dados? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Representar tendências e padrões ao longo do tempo",
      "Implementar machine learning para prever valores futuros",
      "Comunicar o significado dos dados",
      "Impor lógica de negócios em relatórios"
    ],
    "respostas": [0, 2],
    "explicacao": "A visualização de dados permite identificar tendências, padrões e outliers nos dados, facilitando a compreensão por parte dos usuários. Ela também ajuda a comunicar a importância e o significado dos dados de forma clara e visual, o que é essencial para a tomada de decisões baseada em dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/spark/apache-spark-data-visualization",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa usar Transact-SQL para consultar arquivos no Azure Data Lake Storage Gen2 a partir de um data warehouse do Azure Synapse Analytics. O que você deve usar para consultar os arquivos?",
    "opcoes": [
      "Azure Functions",
      "Microsoft SQL Server Integration Services (SSIS)",
      "PolyBase",
      "Azure Data Factory"
    ],
    "resposta": 2,
    "explicacao": "PolyBase permite consultar dados diretamente de fontes externas, como o Azure Data Lake Storage Gen2, usando Transact-SQL no Azure Synapse Analytics. Ele permite ingerir e consultar dados em formato tabular sem necessidade de movimentação prévia.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre dashboards do Microsoft Power BI.",
    "afirmacoes": [
      "Você pode copiar um dashboard entre workspaces do Microsoft Power BI.",
      "Um dashboard do Microsoft Power BI só pode exibir visualizações de um único conjunto de dados.",
      "Um dashboard do Microsoft Power BI pode exibir visualizações de uma planilha do Microsoft Excel."
    ],
    "respostas": [false, false, true],
    "explicacao": "Dashboards no Power BI não podem ser copiados entre workspaces; apenas duplicados no mesmo workspace. Eles também podem agregar visualizações de múltiplos conjuntos de dados. Além disso, é possível exibir visualizações originadas de planilhas do Microsoft Excel em um dashboard.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/connect-data/service-datasets-across-workspaces",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são três características de uma carga de trabalho OLTP (Online Transaction Processing)?",
    "opcoes": [
      "Dados desnormalizados",
      "Gravações intensas e leituras moderadas",
      "Leituras intensas e gravações leves",
      "Esquema definido em um banco de dados",
      "Esquema definido ao ler dados não estruturados de um banco de dados",
      "Dados normalizados"
    ],
    "respostas": [1, 3, 5],
    "explicacao": "As cargas de trabalho OLTP geralmente envolvem gravações intensas e leituras moderadas, com dados altamente normalizados e esquemas fortemente definidos no momento da gravação. Isso garante integridade e consistência em ambientes transacionais.",
    "link": "https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-transaction-processing",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual é o principal propósito de um data warehouse?",
    "opcoes": [
      "Fornecer respostas para consultas complexas que dependem de dados de múltiplas fontes",
      "Fornecer serviços de transformação entre fontes e destinos de dados",
      "Fornecer armazenamento somente leitura de dados históricos relacionais e não relacionais",
      "Fornecer armazenamento para aplicações transacionais de linha de negócios (LOB)"
    ],
    "resposta": 0,
    "explicacao": "O principal propósito de um data warehouse é armazenar dados históricos de várias fontes em um único local e permitir consultas complexas para fins de análise e geração de relatórios. Esses dados são normalmente somente leitura e estruturados para facilitar a análise, não sendo voltados para transações operacionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/data-warehousing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure aos locais apropriados na arquitetura de análise de dados. Cada serviço pode ser usado uma ou mais vezes, ou não ser usado.",
    "imagemUrl": "img/1.png",
    "itens": [
      { "label": "Azure Cognitive Search" },
      { "label": "Azure Data Catalog" },
      { "label": "Azure Data Factory" },
      { "label": "Azure Synapse Analytics" }
    ],
    "grupos": ["Ingestão", "Pré-processamento e modelagem"],
    "respostas": {
      "Ingestão": ["Azure Data Factory"],
      "Pré-processamento e modelagem": ["Azure Synapse Analytics"]
    },
    "explicacao": "Azure Data Factory é utilizado para pipelines de ingestão de dados. Azure Data Lake Storage é usado para armazenar grandes volumes de dados estruturados e não estruturados. Azure Synapse Analytics permite o pré-processamento e modelagem de dados, incluindo a aplicação de modelos de machine learning.",
    "link": "https://learn.microsoft.com/pt-br/azure/machine-learning/how-to-data-ingest-adf",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de cargas de trabalho aos cenários apropriados. Cada tipo de carga pode ser usado uma ou mais vezes, ou não ser usado.",
    "itens": [
      { "label": "Batch" },
      { "label": "Streaming" }
    ],
    "grupos": [
      "Analisar dados históricos contendo tráfego da web coletado durante o ano anterior.",
      "Classificar imagens que foram enviadas no mês passado.",
      "Acompanhar em tempo real quantas pessoas estão atualmente usando um site."
    ],
    "respostas": {
      "Analisar dados históricos contendo tráfego da web coletado durante o ano anterior.": ["Batch"],
      "Classificar imagens que foram enviadas no mês passado.": ["Batch"],
      "Acompanhar em tempo real quantas pessoas estão atualmente usando um site.": ["Streaming"]
    },
    "explicacao": "O processamento em lote (batch) é ideal para análise de grandes volumes de dados históricos ou acumulados. Já o streaming é usado quando é necessário processar dados em tempo real, como no rastreamento de atividades enquanto elas ocorrem.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/real-time-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em uma carga de trabalho de data warehousing, os dados <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "são distribuídos de uma única origem para vários destinos",
      "são adicionados a uma fila para que múltiplos sistemas processem",
      "de múltiplas origens são combinados em um único local",
      "são usados para treinar modelos de machine learning"
    ],
    "resposta": 3,
    "explicacao": "Em uma carga de trabalho de data warehousing, dados de várias origens são combinados em um único local para facilitar a análise e o armazenamento estruturado. Isso permite relatórios consistentes, análises históricas e centralização da informação.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-workload-management",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre pipelines no Azure Data Factory.",
    "afirmacoes": [
      "Um pipeline é uma representação de uma estrutura de dados dentro do Azure Data Factory.",
      "Pipelines do Azure Data Factory podem executar outros pipelines.",
      "Uma etapa de processamento dentro de um pipeline do Azure Data Factory é uma atividade."
    ],
    "respostas": [false, true, true],
    "explicacao": "1. FALSA — Um pipeline não representa uma estrutura de dados, mas sim um grupo de atividades que juntas realizam uma tarefa de integração de dados.\n2. VERDADEIRA — Um pipeline pode usar a atividade 'Execute Pipeline' para invocar outro pipeline.\n3. VERDADEIRA — No Azure Data Factory, atividades representam as etapas de processamento dentro de um pipeline.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/concepts-pipelines-activities",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure aos seus respectivos requisitos relacionados ao formato Parquet.",
    "itens": [
      { "label": "Azure Data Lake Storage" },
      { "label": "Azure SQL Database" },
      { "label": "Azure Synapse Analytics" }
    ],
    "grupos": [
      "Saída de dados para o formato Parquet",
      "Armazene dados no formato Parquet",
      "Persistir uma representação tabular de dados armazenados no formato Parquet"
    ],
    "respostas": {
      "Saída de dados para o formato Parquet": ["Azure Synapse Analytics"],
      "Armazene dados no formato Parquet": ["Azure Data Lake Storage"],
      "Persistir uma representação tabular de dados armazenados no formato Parquet": ["Azure SQL Database"]
    },
    "explicacao": "Azure Synapse Analytics pode exportar dados em formato Parquet como parte de cargas de trabalho analíticas. Azure Data Lake Storage é otimizado para armazenar arquivos de grande volume, como Parquet. Já o Azure SQL Database persiste dados tabulares, inclusive quando carregados a partir de arquivos Parquet.",
    "link": "https://learn.microsoft.com/pt-br/sql/tools/sqlpackage/sqlpackage-for-azure-synapse-analytics?view=sql-server-ver17",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre escalabilidade e custo no Azure Synapse Analytics.",
    "afirmacoes": [
      "Azure Synapse Analytics escala armazenamento e computação de forma independente",
      "Azure Synapse Analytics pode ser pausado para reduzir custos de computação",
      "Um data warehouse do Azure Synapse Analytics possui capacidade de armazenamento fixa"
    ],
    "respostas": [true, true, false],
    "explicacao": "1. Azure Synapse permite escalabilidade independente de armazenamento (baseado em Azure Data Lake) e computação (por meio de pools dedicados ou serverless). 2. É possível pausar pools dedicados de SQL para evitar cobrança por tempo de execução. 3. O armazenamento não é fixo — é escalável automaticamente conforme os dados aumentam.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "O que você deve usar para criar um relatório paginado do Microsoft Power BI?",
    "opcoes": [
      "Charticulator",
      "Power BI Desktop",
      "O serviço Power BI",
      "Power BI Report Builder"
    ],
    "resposta": 3,
    "explicacao": "O Power BI Report Builder é a ferramenta independente utilizada para criar relatórios paginados, sendo adequada para cenários em que a formatação precisa ser altamente controlada, como faturas ou relatórios regulamentares.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/paginated-reports/paginated-reports-report-builder-power-bi",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure aos componentes apropriados de uma solução de análise de dados que realiza ETL e armazena os dados em um data warehouse.",
    "imagemUrl": "img/2.png",
    "itens": [
      { "label": "Azure Analysis Services" },
      { "label": "Azure Data Factory" },
      { "label": "Azure Table storage" },
      { "label": "Azure Cosmos DB" },
      { "label": "Azure Synapse Analytics" }
    ],
    "grupos": [
      "Extract Transform Load (ETL)",
      "Data Warehouse"
    ],
    "respostas": {
      "Extract Transform Load (ETL)": ["Azure Data Factory"],
      "Data Warehouse": ["Azure Synapse Analytics"]

    },
    "explicacao": "Azure Cosmos DB é uma fonte de dados NoSQL altamente escalável usada na ingestão de dados. Azure Data Factory é responsável por orquestrar processos de ETL (Extração, Transformação e Carga) entre as fontes e os destinos. Azure Synapse Analytics é utilizado como repositório de dados analíticos em larga escala, ideal para data warehouses.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/example-scenario/data/data-warehouse",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre serviços de análise e integração de dados no Azure.",
    "afirmacoes": [
      "Azure Databricks é uma plataforma de análise baseada em Apache Spark.",
      "Azure Analysis Services é usado para cargas de trabalho transacionais.",
      "Azure Data Factory orquestra fluxos de trabalho de integração de dados."
    ],
    "respostas": [true, false, true],
    "explicacao": "Azure Databricks é de fato uma plataforma de análise baseada em Apache Spark, projetada para grandes volumes de dados. Azure Analysis Services não é voltado para cargas transacionais, mas sim para modelagem semântica e análise de dados. Azure Data Factory é utilizado para orquestrar pipelines de dados e fluxos de trabalho de integração entre diferentes fontes e destinos.",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/scenarios/what-is-azure-databricks",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "unica",
    "texto": "Qual cenário é um exemplo de uma carga de trabalho de streaming?",
    "opcoes": [
      "Enviar transações com mais de um mês para um arquivo de arquivamento",
      "Enviar transações diariamente de dispositivos de ponto de venda (POS)",
      "Enviar dados de telemetria de dispositivos de borda",
      "Enviar metadados de infraestrutura em nuvem a cada 30 minutos"
    ],
    "resposta": 2,
    "explicacao": "A coleta de dados de telemetria em tempo real, como a proveniente de dispositivos de borda, é uma característica típica de cargas de trabalho de streaming, pois envolve o processamento contínuo e imediato de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/stream-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: As cargas de trabalho em lote (batch workloads) <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "processam dados na memória, linha por linha.",
      "coletam e processam dados no máximo uma vez por dia.",
      "processam dados à medida que são recebidos em quase tempo real.",
      "coletam dados e depois os processam quando uma condição é atendida."
    ],
    "resposta": 4,
    "explicacao": "Cargas de trabalho em lote são caracterizadas pelo acúmulo de dados por um período de tempo e seu processamento posterior, geralmente quando um critério ou condição específica é atendido. Isso as diferencia das cargas de trabalho em tempo real, que processam dados continuamente à medida que são recebidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre tipos de cargas de trabalho (batch e streaming).",
    "afirmacoes": [
      "O processamento de pagamentos salariais uma vez por mês é um exemplo de uma carga de trabalho em lote (batch workload).",
      "Uma turbina eólica que envia 50 leituras de sensores por segundo é um exemplo de uma carga de trabalho de streaming.",
      "Um medidor de eletricidade residencial que envia leituras uma vez por dia a um provedor de energia é um exemplo de uma carga de trabalho de streaming."
    ],
    "respostas": [true, true, false],
    "explicacao": "1. Cargas de trabalho em lote processam dados em intervalos definidos — como o pagamento mensal de salários.\n2. Cargas de trabalho de streaming processam dados continuamente ou quase em tempo real — como leituras frequentes de sensores de turbinas eólicas.\n3. Leituras enviadas uma vez por dia não caracterizam streaming, pois não ocorrem em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-4"
  }

















];
