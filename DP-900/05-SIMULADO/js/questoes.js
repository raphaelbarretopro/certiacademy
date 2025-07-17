// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [

  {
    "tipo": "unica",
    "texto": "Um gráfico de barras mostrando as vendas acumuladas no ano por região é um exemplo de qual tipo de análise?",
    "opcoes": ["Preditiva", "Prescritiva", "Descritiva", "Diagnóstica"],
    "resposta": 2,
    "explicacao": "A análise descritiva resume dados históricos para entender o que aconteceu no passado. Gráficos de barras que mostram dados consolidados, como vendas por região, são típicos desse tipo de análise.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-concepts-of-data-analytics/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o processamento de fluxo (streaming) e em lote (batch).",
    "afirmacoes": [
      "O processamento de fluxo tem acesso aos dados mais recentes recebidos ou a dados dentro de uma janela de tempo deslizante.",
      "O processamento em lote deve ocorrer imediatamente e ter latência na ordem de segundos ou milissegundos.",
      "O processamento de fluxo é usado para funções de resposta simples, agregações ou cálculos como médias móveis."
    ],
    "respostas": [true, false, true],
    "explicacao": "1. Verdadeiro — O stream processing opera com dados em tempo real ou quase em tempo real, muitas vezes utilizando janelas deslizantes para análise contínua.\n2. Falso — O batch processing não requer execução imediata; ele é projetado para processar grandes volumes de dados de forma agendada, com maior latência.\n3. Verdadeiro — O processamento de fluxo é ideal para cálculos contínuos e agregações simples, como médias móveis, contagens e somas em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/real-time-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa executar consultas de processamento híbrido transacional e analítico (HTAP) em fontes de dados do Azure Cosmos DB usando o Azure Synapse Analytics. O que você deve usar?",
    "opcoes": [
      "Synapse pipelines",
      "Um pool SQL do Synapse",
      "Synapse Link",
      "Synapse Studio"
    ],
    "resposta": 2,
    "explicacao": "O Synapse Link é um recurso do Azure Cosmos DB que permite habilitar análises em tempo real sobre dados transacionais. Ele cria uma conexão contínua entre o Azure Cosmos DB e o Azure Synapse Analytics, permitindo consultas analíticas sem impacto no desempenho transacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/synapse-link",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa criar uma visualização dos totais acumulados de vendas por trimestre, conforme mostrado na imagem. O que você deve criar no Power BI Desktop?",
    "imagemUrl": "img/1.png",
    "opcoes": [
      "Um gráfico de cascata (waterfall chart)",
      "Um gráfico de fita (ribbon chart)",
      "Um gráfico de barras (bar chart)",
      "Uma árvore de decomposição (decomposition tree)"
    ],
    "resposta": 0,
    "explicacao": "O gráfico de cascata (waterfall chart) é ideal para visualizar totais acumulados ao longo do tempo, como aumentos e diminuições sequenciais nas vendas por trimestre. Ele mostra claramente como os valores se acumulam até um total final.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-waterfall-charts?tabs=powerbi-desktop",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Ao usar a API Gremlin do Azure Cosmos DB, o tipo de recurso de contêiner é projetado como um <combobox>.",
    "opcoes": ["Escolha uma opção", "table", "partition key", "document", "graph"],
    "resposta": 4,
    "explicacao": "Quando se utiliza a API Gremlin no Azure Cosmos DB, os dados são armazenados em contêineres que são interpretados como grafos. A API é projetada para armazenar e consultar dados de grafos com vértices e arestas, por isso o recurso é projetado como um 'graph'.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "<p>Você possui as seguintes duas tabelas de dados de clientes:</p>\n<table style='width:100%; border-collapse: collapse;' border='1'>\n<thead>\n<tr>\n<th>CustomerID</th><th>NameStyle</th><th>Title</th><th>FirstName</th><th>MiddleName</th><th>LastName</th>\n</tr>\n</thead>\n<tbody>\n<tr><td>29486</td><td>0</td><td>Ms.</td><td>Kim</td><td>NULL</td><td>Abercrombie</td></tr>\n<tr><td>29489</td><td>0</td><td>Ms.</td><td>Frances</td><td>B.</td><td>Adams</td></tr>\n<tr><td>29490</td><td>0</td><td>Ms.</td><td>Margaret</td><td>J.</td><td>Smith</td></tr>\n<tr><td>29492</td><td>0</td><td>Mr.</td><td>Jay</td><td>NULL</td><td>Adams</td></tr>\n</tbody>\n</table>\n<br/>\n<table style='width:100%; border-collapse: collapse;' border='1'>\n<thead>\n<tr>\n<th>CustomerID</th><th>AddressID</th><th>AddressType</th><th>ModifiedDate</th>\n</tr>\n</thead>\n<tbody>\n<tr><td>29486</td><td>621</td><td>Main Office</td><td>9/1/05 0:00</td></tr>\n<tr><td>29489</td><td>1069</td><td>Main Office</td><td>7/1/05 0:00</td></tr>\n<tr><td>29490</td><td>887</td><td>Main Office</td><td>9/1/06 0:00</td></tr>\n<tr><td>29492</td><td>618</td><td>Main Office</td><td>12/1/06 0:00</td></tr>\n<tr><td>29494</td><td>537</td><td>Main Office</td><td>9/1/05 0:00</td></tr>\n</tbody>\n</table>\n<br/>\n<p>Que tipo de dados essas tabelas contêm?</p>",
    "opcoes": ["Dados estruturados", "Dados não relacionais", "Dados semiestruturados", "Dados não estruturados"],
    "resposta": 0,
    "explicacao": "As tabelas apresentadas contêm dados organizados em colunas e linhas com tipos de dados consistentes e definidos, o que caracteriza dados estruturados. Esse formato é típico de bancos de dados relacionais.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/azure-sql-intro/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode consultar um banco de dados de grafos no Azure Cosmos DB <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "como armazenamento de linha particionado usando a Cassandra Query Language (CQL)",
      "como armazenamento de linha particionado usando a Language-Integrated Query (LINQ)",
      "como nós e arestas usando a linguagem Gremlin"
    ],
    "resposta": 3,
    "explicacao": "O Azure Cosmos DB oferece suporte à API Gremlin para trabalhar com dados de grafos, permitindo representar e consultar nós (vértices) e arestas (relacionamentos) com a linguagem Gremlin.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual recurso do Azure Blob Storage permite sincronizar uma conta de Blob Storage com um cache externo?",
    "opcoes": [
      "O nível de acesso Hot",
      "Change feed",
      "Snapshots",
      "Versionamento"
    ],
    "resposta": 1,
    "explicacao": "O recurso Change feed do Azure Blob Storage é ideal para aplicações que precisam acompanhar e processar alterações em dados. Ele permite sincronizar objetos com caches externos, mecanismos de busca ou outros sistemas de gerenciamento de conteúdo ao detectar mudanças nos blobs.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blob-change-feed",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um banco de dados Microsoft SQL Server local. É necessário migrar o banco de dados para a nuvem, atendendo aos seguintes requisitos:\n* Minimizar o esforço de manutenção.\n* Suportar os recursos Database Mail e Service Broker.\nO que você deve incluir na solução?",
    "opcoes": [
      "Banco de dados único do Azure SQL Database",
      "Azure SQL Database em pool elástico",
      "Instância Gerenciada do Azure SQL",
      "SQL Server em máquinas virtuais do Azure"
    ],
    "resposta": 2,
    "explicacao": "A Instância Gerenciada do Azure SQL é a única opção gerenciada que oferece suporte aos recursos Database Mail e Service Broker, exigidos na questão. Ela também minimiza o esforço de manutenção em comparação ao SQL Server em máquinas virtuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/features-comparison",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um processo de extração, transformação e carga (ETL) requer <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "um esquema correspondente na fonte e no destino de dados",
      "um repositório de dados de destino poderoso o suficiente para transformar dados",
      "dados totalmente processados antes de serem carregados no repositório de dados de destino",
      "que o destino de dados seja um banco de dados relacional"
    ],
    "resposta": 3,
    "explicacao": "No processo ETL, os dados são extraídos de uma fonte, transformados de acordo com as necessidades do destino e, somente após totalmente processados, são carregados no repositório de destino. A transformação ocorre antes do carregamento, ao contrário do processo ELT.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Cargas de trabalho em lote (batch workloads) <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "sempre processam dados na memória, linha por linha",
      "coletam e processam dados no máximo uma vez por dia",
      "processam os dados conforme são recebidos em quase tempo real",
      "coletam dados e depois processam os dados quando uma condição é atendida"
    ],
    "resposta": 4,
    "explicacao": "As cargas de trabalho em lote coletam grandes volumes de dados ao longo do tempo e os processam posteriormente, com base em uma condição, como um horário agendado ou um gatilho específico. Isso difere do processamento em tempo real, que lida com os dados assim que são recebidos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Sua empresa planeja carregar dados de um sistema de gerenciamento de relacionamento com o cliente (CRM) para um data warehouse usando um processo de extração, carregamento e transformação (ELT). Onde o processamento de dados ocorre em cada etapa do processo ELT?",
    "itens": [
      { "label": "Uma ferramenta autônoma de análise de dados" },
      { "label": "O sistema de CRM" },
      { "label": "O data warehouse" }
    ],
    "grupos": ["Extração", "Carregamento", "Transformação"],
    "respostas": {
      "Extração": ["O sistema de CRM"],
      "Carregamento": ["O data warehouse"],
      "Transformação": ["O data warehouse"]
    },
    "explicacao": "No processo ELT, os dados são extraídos da origem (CRM), carregados diretamente no destino (data warehouse), e então transformados dentro do próprio data warehouse utilizando sua capacidade de processamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A análise descritiva informa <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "o que é mais provável que ocorra no futuro",
      "o que ocorreu no passado",
      "quais ações você pode realizar para afetar os resultados",
      "por que algo ocorreu no passado"
    ],
    "resposta": 2,
    "explicacao": "A análise descritiva (descriptive analytics) tem como objetivo relatar eventos passados com base em dados históricos. Ela responde à pergunta 'o que aconteceu?', sendo o ponto de partida para outras análises mais avançadas, como a preditiva ou prescritiva.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-concepts-of-data-analytics/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma função de um data warehouse moderno?",
    "opcoes": [
      "Suporta apenas o processamento em lote",
      "Suporta processamento em tempo real e em lote",
      "Oferece processamento analítico online incorporado ou nativo",
      "Armazena apenas dados brutos"
    ],
    "resposta": 1,
    "explicacao": "Um data warehouse moderno é projetado para lidar com grandes volumes de dados em diferentes formatos, tanto em tempo real quanto em lote. Ele integra recursos de big data e permite a ingestão e análise de dados de forma mais flexível e escalável. Ao contrário dos data warehouses convencionais, que geralmente processam apenas dados estruturados em lote, os modernos também suportam fluxos de dados em tempo real, utilizando tecnologias como Spark para processamento distribuído.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/examine-components-of-modern-data-warehouse/1-introduction",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Uma conta de Armazenamento do Azure deve ter <combobox> habilitado para oferecer suporte ao Azure Data Lake Storage.",
    "opcoes": ["Escolha uma opção", "Exclusão reversível de blobs", "Compartilhamentos de arquivos grandes", "Namespace hierárquico", "Controle de versão"],
    "resposta": 3,
    "explicacao": "Para que uma conta de Armazenamento do Azure seja compatível com o Azure Data Lake Storage Gen2, é necessário habilitar o 'namespace hierárquico'. Essa funcionalidade permite que os dados sejam organizados de forma hierárquica (como em diretórios e subdiretórios), algo essencial para operações eficientes com grandes volumes de dados analíticos.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/create-data-lake-storage-account",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "O que pode ser usado com suporte nativo a notebooks para consultar e visualizar dados usando uma interface baseada na web?",
    "opcoes": ["Azure Databricks", "pgAdmin", "Microsoft Power BI", "Alternativa D"],
    "resposta": 0,
    "explicacao": "Os notebooks são amplamente utilizados em ciência de dados e aprendizado de máquina para desenvolvimento de código e apresentação de resultados. No Azure Databricks, os notebooks são a principal ferramenta para criar fluxos de trabalho de ciência de dados e aprendizado de máquina, com suporte à coautoria em tempo real, versionamento automático e visualizações integradas.",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/notebooks/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Você tem dados salvos no seguinte formato:<br><br><div style='background-color:#f5f5f5; padding:10px; font-family:monospace; border:1px solid #ccc; border-radius:5px;'><pre>{<br>  \"firstname\": \"John\",<br>  \"lastName\": \"Doe\",<br>  \"age\": \"23\",<br>  \"hobbies\": [<br>    { \"type\": \"Sports\", \"value\": \"Golf\" },<br>    { \"type\": \"Leisure\", \"value\": \"Reading\" },<br>    { \"type\": \"Leisure\", \"value\": \"Guitar\" }<br>  ]<br>}</pre></div><br>Qual formato foi usado?",
    "opcoes": ["XML", "HTML", "YAML", "JSON"],
    "resposta": 3,
    "explicacao": "O formato mostrado é JSON (JavaScript Object Notation), um formato leve de troca de dados, fácil de ler e escrever para humanos, e fácil de interpretar por máquinas.",
    "link": "https://learn.microsoft.com/pt-br/dotnet/standard/serialization/system-text-json-how-to",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Você tem dados salvos no seguinte formato:\n\n<style>\n  pre {\n    background-color: #f4f4f4;\n    padding: 10px;\n    border-radius: 5px;\n    font-family: monospace;\n  }\n</style>\n<pre>\n&lt;Person Age=\"23\"&gt;\n  &lt;FirstName&gt;John&lt;/FirstName&gt;\n  &lt;LastName&gt;Smith&lt;/LastName&gt;\n  &lt;Hobbies&gt;\n    &lt;Hobby Type=\"Sports\"&gt;Golf&lt;/Hobby&gt;\n    &lt;Hobby Type=\"Leisure\"&gt;Reading&lt;/Hobby&gt;\n    &lt;Hobby Type=\"Leisure\"&gt;Guitar&lt;/Hobby&gt;\n  &lt;/Hobbies&gt;\n&lt;/Person&gt;\n</pre>\n\nQual formato foi usado?",
    "opcoes": ["JSON", "YAML", "HTML", "XML"],
    "resposta": 3,
    "explicacao": "O formato apresentado é XML (Extensible Markup Language), que utiliza tags para estruturar dados de forma hierárquica. É amplamente usado para armazenamento e transporte de dados, especialmente em integrações e serviços web.",
    "link": "https://learn.microsoft.com/pt-br/dotnet/standard/data/xml/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual propriedade de transação de banco de dados garante que as alterações transacionais em um banco de dados sejam preservadas durante reinicializações inesperadas do sistema operacional?",
    "opcoes": ["Consistência", "Atomicidade", "Durabilidade", "Isolamento"],
    "resposta": 2,
    "explicacao": "A durabilidade é uma das propriedades ACID (Atomicidade, Consistência, Isolamento, Durabilidade) e garante que, uma vez que uma transação é confirmada, ela permanecerá salva mesmo que ocorra uma falha, como uma queda de energia ou reinicialização do sistema.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/native-client-odbc-how-to/use-microsoft-distributed-transaction-coordinator-odbc?view=sql-server-ver15",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um banco de dados relacional deve ser usado quando <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "é necessário um esquema dinâmico",
      "os dados serão armazenados como pares chave/valor",
      "são exigidas garantias fortes de consistência"
    ],
    "resposta": 3,
    "explicacao": "Bancos de dados relacionais são ideais quando há necessidade de forte consistência dos dados. Eles utilizam esquemas fixos e estruturados para garantir a integridade e previsibilidade das informações, além de impor restrições e relacionamentos entre os dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Dados relacionais são armazenados em <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "um sistema de arquivos como dados não estruturados",
      "uma estrutura de pastas hierárquica",
      "uma forma tabular de linhas e colunas",
      "arquivos de valores separados por vírgula (CSV)"
    ],
    "resposta": 3,
    "explicacao": "Dados relacionais são organizados em tabelas compostas por linhas e colunas, o que permite estruturação rígida, integridade e facilidade na aplicação de regras e relacionamentos entre os dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual propriedade de transação de banco de dados garante que as transações individuais sejam executadas apenas uma vez e que sejam concluídas completamente ou revertidas?",
    "opcoes": ["atomicidade", "durabilidade", "isolamento", "consistência"],
    "resposta": 0,
    "explicacao": "A atomicidade garante que todas as operações em uma transação sejam concluídas com sucesso ou nenhuma delas seja executada. Isso evita que alterações parciais sejam aplicadas ao banco de dados, o que poderia comprometer sua integridade.",
    "link": "https://learn.microsoft.com/bs-latn-ba/sql/t-sql/statements/set-statistics-xml-transact-sql?view=sql-server-linux-ver15",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é um objeto associado a uma tabela que realiza a ordenação com base nos valores de chave.",
    "opcoes": [
      "Escolha uma opção",
      "Um índice clusterizado",
      "Um FileTable",
      "Uma chave estrangeira",
      "Um procedimento armazenado"
    ],
    "resposta": 1,
    "explicacao": "Um índice clusterizado (clustered index) é um tipo de índice em que os dados da tabela são armazenados fisicamente na ordem dos valores de chave. Ele determina a ordem física dos dados na tabela, o que melhora a performance de buscas baseadas em chaves.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described?view=sql-server-ver15",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço de Armazenamento do Azure implementa o modelo de chave/valor?",
    "opcoes": [
      "Azure Queue",
      "Azure Files",
      "Azure Table",
      "Azure Blob"
    ],
    "resposta": 2,
    "explicacao": "O Azure Table Storage é um serviço que armazena dados estruturados não relacionais (também conhecidos como dados NoSQL estruturados) na nuvem. Ele fornece um armazenamento de chave/atributo com um design sem esquema, ideal para cenários que exigem alta escalabilidade e acesso rápido baseado em chaves.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/tables/table-storage-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Usuários e seguidores de mídias sociais em um banco de dados de grafos são um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "dados semi-estruturados",
      "dados estruturados",
      "dados não estruturados"
    ],
    "resposta": 1,
    "explicacao": "Dados de grafos, como conexões entre usuários e seguidores em mídias sociais, são considerados dados semi-estruturados. Eles não seguem um esquema rígido como tabelas relacionais e frequentemente são armazenados em formatos como JSON, permitindo flexibilidade na representação de relacionamentos complexos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em uma carga de trabalho de data warehousing (armazenamento de dados), os dados <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "de uma única fonte são distribuídos para vários locais",
      "de várias fontes são combinados em um único local",
      "são adicionados a uma fila para serem processados por múltiplos sistemas",
      "são usados para treinar modelos de aprendizado de máquina"
    ],
    "resposta": 2,
    "explicacao": "Em cargas de trabalho de data warehousing, os dados geralmente são extraídos de várias fontes e combinados em um único repositório centralizado, como um data warehouse, para fins de análise e relatórios. Esse processo é conhecido como ETL (Extract, Transform, Load).",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/data-warehousing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No processamento em lote (batch processing), <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "os dados sempre são inseridos uma linha por vez",
      "os dados são processados em tempo real",
      "o atraso na entrega dos resultados do processamento de dados é aceitável",
      "o processamento só pode ser executado de forma serial"
    ],
    "resposta": 3,
    "explicacao": "O processamento em lote (batch processing) é adequado para grandes volumes de dados que não precisam ser processados em tempo real. Ele permite atrasos aceitáveis na entrega dos resultados, já que os dados são acumulados e processados periodicamente.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "multipla",
    "texto": "Você planeja implantar um aplicativo. O aplicativo exige um serviço de dados não relacional que forneça garantias de latência inferiores a 10 milissegundos para leituras e gravações. O que você deve incluir na solução?",
    "opcoes": [
      "Armazenamento Blob do Azure",
      "Arquivos do Azure",
      "Armazenamento de Tabela do Azure",
      "Azure Cosmos DB"
    ],
    "respostas": [2, 3],
    "explicacao": "O Azure Table Storage e o Azure Cosmos DB são serviços de dados não relacionais. No entanto, apenas o Cosmos DB fornece garantias explícitas de latência abaixo de 10 ms para leituras e gravações em todos os níveis de consistência. O Table Storage, embora seja um armazenamento NoSQL econômico, pode atender a alguns requisitos de baixa latência dependendo do cenário. Por isso, ambos são considerados válidos nesta pergunta.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/consistency-levels",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um banco de dados não relacional <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "impõe um esquema fixo aos dados",
      "armazena entidades sem uma chave exclusiva",
      "armazena dados em tabelas relacionais",
      "armazena dados sem um esquema fixo"
    ],
    "resposta": 4,
    "explicacao": "Bancos de dados não relacionais, como o Azure Cosmos DB ou MongoDB, são projetados para armazenar dados de forma flexível, sem exigir um esquema fixo. Isso permite lidar melhor com dados semiestruturados ou não estruturados, possibilitando mudanças dinâmicas na estrutura dos dados sem a necessidade de migrações complexas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre propriedades de transações em bancos de dados (ACID).",
    "afirmacoes": [
      "Em um banco de dados transacional que garante atomicidade, todas as instruções de uma transação devem ser concluídas com êxito ou a transação deve ser revertida.",
      "Em um banco de dados transacional que garante consistência, todas as alterações de dados serão registradas e contabilizadas.",
      "Em um banco de dados transacional que garante isolamento, os processos podem ver apenas dados em um estado consistente."
    ],
    "respostas": [true, false, true],
    "explicacao": "1. **Atomicidade**: Verdadeiro. A propriedade de atomicidade garante que todas as operações de uma transação sejam concluídas com sucesso ou, em caso de falha, nenhuma alteração seja aplicada ao banco de dados.\n\n2. **Consistência**: Falso. A consistência garante que uma transação leve o banco de dados de um estado válido para outro, mas não implica necessariamente que todas as alterações sejam registradas (isso seria mais relacionado à durabilidade).\n\n3. **Isolamento**: Verdadeiro. A propriedade de isolamento garante que as transações concorrentes não interfiram entre si, assegurando que cada processo veja os dados em um estado consistente durante sua execução.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Você tem dados salvos no seguinte formato:<br><br>\n<style>\n  table.csv-table {\n    border-collapse: collapse;\n    width: 100%;\n    font-family: monospace;\n  }\n  .csv-table th, .csv-table td {\n    border: 1px solid #ccc;\n    padding: 6px 10px;\n    text-align: left;\n  }\n</style>\n<table class=\"csv-table\">\n  <tr><th>FirstName</th><th>LastName</th><th>Age</th><th>LeisureHobby</th><th>SportsHobby</th></tr>\n  <tr><td>John</td><td>Smith</td><td>23</td><td>Reading</td><td>Backteball</td></tr>\n  <tr><td>Ben</td><td>Smith</td><td>21</td><td>Guitar</td><td>Curling</td></tr>\n</table>\n<br>\nQual formato foi utilizado?",
    "opcoes": ["YAML", "CSV", "JSON", "HTML"],
    "resposta": 1,
    "explicacao": "O formato apresentado é **CSV (Comma-Separated Values)**, que armazena dados em texto simples separados por vírgulas. Cada linha representa um registro e cada coluna, um campo. Este formato é amplamente utilizado para intercâmbio de dados entre sistemas e planilhas.",
    "link": "https://learn.microsoft.com/pt-pt/power-query/connectors/text-csv",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é responsável por gerenciar a segurança dos dados em um banco de dados.",
    "opcoes": [
      "Escolha uma opção",
      "Um analista de dados (data analyst)",
      "Um engenheiro de dados (data engineer)",
      "Um cientista de dados (data scientist)",
      "Um administrador de banco de dados (database administrator)"
    ],
    "resposta": 4,
    "explicacao": "O administrador de banco de dados (DBA) é o profissional responsável por gerenciar a segurança, integridade e desempenho dos bancos de dados. Isso inclui definir permissões de acesso, implementar criptografia, realizar backups e restaurar dados quando necessário. Outras funções como analistas ou engenheiros de dados focam em análise, extração, transformação e movimentação de dados, mas não na segurança do banco.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/built-in-roles#sql-db",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Fazer backup e restaurar dados são responsabilidades de um <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Analista de dados (data analyst)",
      "Engenheiro de dados (data engineer)",
      "Cientista de dados (data scientist)",
      "Administrador de banco de dados (database administrator)"
    ],
    "resposta": 4,
    "explicacao": "O administrador de banco de dados (DBA) é responsável por tarefas operacionais críticas como backup e restauração de dados. Isso garante a recuperação de dados em caso de falhas, atendendo aos requisitos de continuidade e proteção de dados. Outros profissionais como analistas, engenheiros e cientistas de dados não têm essa função como foco principal.",
    "link": "https://learn.microsoft.com/pt-br/azure/backup/backup-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "O que é necessário para provisionar o Azure Data Lake Storage em uma conta de Armazenamento do Azure?",
    "opcoes": [
      "O versionamento deve estar desativado.",
      "O namespace hierárquico deve estar desativado.",
      "O versionamento deve estar ativado.",
      "O namespace hierárquico deve estar ativado."
    ],
    "resposta": 3,
    "explicacao": "Para utilizar o Azure Data Lake Storage Gen2, é necessário habilitar o namespace hierárquico na conta de armazenamento. Isso permite organizar os dados em uma estrutura de diretórios, além de habilitar funcionalidades como controle de acesso granular e gerenciamento eficiente de arquivos.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: As tabelas do Microsoft SQL Server armazenam <combobox>.",
    "opcoes": ["Escolha uma opção", "dados não relacionais", "dados semiestruturados", "dados relacionais"],
    "resposta": 3,
    "explicacao": "O Microsoft SQL Server é um sistema de gerenciamento de banco de dados relacional (RDBMS), projetado para armazenar dados estruturados em tabelas com colunas e linhas, utilizando relações entre diferentes entidades. Portanto, ele armazena dados relacionais.",
    "link": "https://learn.microsoft.com/pt-br/sql/sql-server/?view=sql-server-ver16",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> pode ser usado como parte de uma solução lift-and-shift para migrar um aplicativo local para a nuvem com alterações mínimas.",
    "opcoes": [
      "Escolha uma opção",
      "Um pool elástico do Azure SQL Database",
      "Uma instância do SQL Server em Máquinas Virtuais do Azure",
      "Um banco de dados único no Azure SQL Database"
    ],
    "resposta": 2,
    "explicacao": "Uma instância do SQL Server em Máquinas Virtuais do Azure (Azure VM) oferece controle total sobre o ambiente do SQL Server, tornando-a ideal para migrações lift-and-shift. Isso permite que os aplicativos existentes sejam movidos para a nuvem sem a necessidade de reconfigurações significativas.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/virtual-machines/windows/sql-server-on-azure-vm-iaas-what-is-overview?view=azuresql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No Microsoft Power BI, um <combobox> é uma coleção de visualizações que aparecem juntas em uma ou mais páginas.",
    "opcoes": [
      "Escolha uma opção",
      "painel",
      "conjunto de dados",
      "relatório",
      "bloco visual"
    ],
    "resposta": 3,
    "explicacao": "No Power BI, um 'relatório' é uma coleção de visualizações que aparecem juntas em uma ou mais páginas. Ele permite que os usuários analisem e explorem dados interativamente com base em um conjunto de dados conectado.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/power-bi-overview",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "dragdrop",
    "texto": "Relacione os processos aos cenários apropriados. Cada processo pode ser usado uma ou mais vezes ou não ser usado. Arraste o processo correspondente da coluna à esquerda até o cenário correspondente à direita.",
    "itens": [
      { "label": "Ingestão de dados" },
      { "label": "Processamento ELT (Extrair, Carregar e Transformar)" },
      { "label": "Processamento ETL (Extrair, Transformar e Carregar)" }
    ],
    "grupos": [
      "Os dados são recuperados e processados antes de serem salvos em um sistema de destino",
      "Os dados são salvos em um sistema de destino e, em seguida, processados",
      "Os dados são extraídos de um sistema de origem e, em seguida, salvos em um sistema de destino"
    ],
    "respostas": {
      "Os dados são recuperados e processados antes de serem salvos em um sistema de destino": ["Processamento ETL (Extrair, Transformar e Carregar)"],
      "Os dados são salvos em um sistema de destino e, em seguida, processados": ["Processamento ELT (Extrair, Carregar e Transformar)"],
      "Os dados são extraídos de um sistema de origem e, em seguida, salvos em um sistema de destino": ["Ingestão de dados"]
    },
    "explicacao": "No processamento ETL, os dados são extraídos, transformados e só então carregados no sistema de destino. No ELT, os dados são carregados primeiro e transformados no destino. A ingestão de dados foca apenas em extrair e carregar os dados sem transformação inicial.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual linguagem é usada para definir uma consulta (query) em tarefas de processamento de fluxo no Azure Stream Analytics?",
    "opcoes": ["YAML", "KQL", "SQL", "XML"],
    "resposta": 2,
    "explicacao": "O Azure Stream Analytics utiliza uma linguagem de consulta baseada em SQL para processar dados em tempo real a partir de diversas fontes, como IoT, logs e eventos.",
    "link": "https://learn.microsoft.com/pt-br/azure/stream-analytics/stream-analytics-introduction",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> permite que várias bases de dados do Azure SQL compartilhem recursos como memória, armazenamento de dados e poder de processamento.",
    "opcoes": [
      "Escolha uma opção",
      "Um servidor Azure SQL",
      "O Data Migration Assistant (DMA)",
      "Um pool elástico",
      "Uma rede virtual"
    ],
    "resposta": 3,
    "explicacao": "Um pool elástico do Azure SQL permite que múltiplos bancos de dados compartilhem recursos como CPU e memória. Essa funcionalidade é útil para bancos com padrões de uso imprevisíveis, reduzindo custos e otimizando a performance.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/elastic-pool-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Arquivos no formato XML são exemplos de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "dados relacionais",
      "dados semiestruturados",
      "dados não estruturados"
    ],
    "resposta": 2,
    "explicacao": "Dados semiestruturados têm alguma estrutura, mas não seguem o modelo rígido dos dados relacionais. Arquivos XML são um exemplo clássico, pois armazenam dados com tags organizadas, permitindo flexibilidade de campos entre registros. Isso os diferencia de dados totalmente estruturados ou não estruturados.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-core-data-concepts/2-data-formats",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Em um banco de dados totalmente normalizado, como os dados são lidos e gravados para uma única entidade?",
    "opcoes": [
      "Os dados são lidos de várias tabelas e gravados em várias tabelas.",
      "Os dados são lidos de uma única tabela e gravados em uma única tabela.",
      "Os dados são lidos de uma única tabela e gravados em várias tabelas.",
      "Os dados são lidos de várias tabelas e gravados em uma única tabela."
    ],
    "resposta": 3,
    "explicacao": "Em um banco de dados normalizado, os dados de uma única entidade são distribuídos entre várias tabelas para eliminar redundância e dependências. Portanto, ao recuperar dados de uma entidade, é necessário consultar várias tabelas. No entanto, ao inserir ou atualizar os dados dessa entidade, geralmente é feito em uma única tabela correspondente ao contexto atual.",
    "link": "https://learn.microsoft.com/pt-pt/training/modules/explore-core-data-concepts/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-5"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma característica principal de um banco de dados relacional?",
    "opcoes": [
      "Uma estrutura de dados flexível",
      "Os dados são consultados e manipulados usando uma variante da linguagem SQL",
      "Falta de dependências entre as tabelas",
      "Grande quantidade de dados duplicados"
    ],
    "resposta": 1,
    "explicacao": "Uma característica essencial dos bancos de dados relacionais é que os dados são consultados e manipulados por meio da linguagem SQL (Structured Query Language). Ela permite selecionar, inserir, atualizar e excluir dados, além de facilitar a junção entre tabelas relacionadas.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/errors-events/mssqlserver-18456-database-engine-error?view=sql-server-ver16",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-5"
  }















];
