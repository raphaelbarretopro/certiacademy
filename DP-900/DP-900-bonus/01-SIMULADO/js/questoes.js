// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [

  {
    "tipo": "dragdrop",
    "texto": "Associe cada modelo de serviço de nuvem ao serviço de banco de dados relacional do Azure correspondente.",
    "itens": [
      { "label": "IaaS (infraestrutura como serviço)" },
      { "label": "PaaS (plataforma como serviço)" }
    ],
    "grupos": [
      "SQL Server em Máquinas Virtuais do Azure",
      "Instância Gerenciada do SQL do Azure",
      "Banco de Dados SQL do Azure"
    ],
    "respostas": {
      "SQL Server em Máquinas Virtuais do Azure": ["IaaS (infraestrutura como serviço)"],
      "Instância Gerenciada do SQL do Azure": ["PaaS (plataforma como serviço)"],
      "Banco de Dados SQL do Azure": ["PaaS (plataforma como serviço)"]
    },
    "explicacao": "O modelo IaaS se aplica ao SQL Server em Máquinas Virtuais do Azure, pois o controle da infraestrutura é responsabilidade do usuário. Já o modelo PaaS inclui tanto a Instância Gerenciada do SQL quanto o Banco de Dados SQL do Azure, pois a plataforma gerencia tarefas como backups, atualizações e disponibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview?view=azuresql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você tem dados salvos no seguinte formato:\n\nFirstName, LastName, Age, LeisureHobby, SportsHobby \nJohn, Smith, 23, Reading, Basketball \nBen, Smith, 21, Guitar, Curling \n\nQual formato foi usado?",
    "opcoes": ["YAML", "HTML", "JSON", "CSV"],
    "resposta": 3,
    "explicacao": "O formato mostrado utiliza vírgulas para separar os campos, o que caracteriza o formato CSV (Comma-Separated Values). Esse tipo de arquivo é comum para armazenamento de dados tabulares, sendo compatível com planilhas e bancos de dados.",
    "link": "https://learn.microsoft.com/en-us/power-query/connectors/text-csv",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual propriedade de transação do banco de dados garante que as transações individuais sejam executadas apenas uma vez, tenham êxito ou sejam revertidas?",
    "opcoes": ["consistência", "isolamento", "durabilidade", "atomicidade"],
    "resposta": 3,
    "explicacao": "A propriedade de *atomicidade* garante que uma transação seja executada completamente ou não seja executada. Isso significa que, se alguma parte da transação falhar, todas as alterações feitas até aquele ponto são revertidas, assegurando integridade.",
    "link": "https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é responsável por identificar quais regras de negócios devem ser aplicadas aos dados de uma empresa.",
    "opcoes": [
      "Escolha uma opção",
      "Um analista de dados",
      "Um engenheiro de dados",
      "Um cientista de dados"
    ],
    "resposta": 1,
    "explicacao": "Um analista de dados é o profissional responsável por garantir que os dados utilizados estejam de acordo com as regras de negócio da organização, assegurando a precisão e relevância das informações analisadas.",
    "link": "https://learn.microsoft.com/pt-br/training/career-paths/data-analyst",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe cada propriedade ACID ao seu respectivo princípio relacionado às transações em banco de dados.",
    "itens": [
      { "label": "Atomicidade" },
      { "label": "Consistência" },
      { "label": "Isolamento" },
      { "label": "Durabilidade" }
    ],
    "grupos": [
      "Transações simultâneas não podem interferir umas nas outras e devem resultar em um estado de banco de dados consistente.",
      "Cada transação é tratada como uma unidade independente que resulta em sucesso completo ou falha completa.",
      "Transações só podem levar os dados do banco de dados de um estado válido para outro estado válido.",
      "Quando uma transação é confirmada, ela permanece confirmada."
    ],
    "respostas": {
      "Transações simultâneas não podem interferir umas nas outras e devem resultar em um estado de banco de dados consistente.": ["Isolamento"],
      "Cada transação é tratada como uma unidade independente que resulta em sucesso completo ou falha completa.": ["Atomicidade"],
      "Transações só podem levar os dados do banco de dados de um estado válido para outro estado válido.": ["Consistência"],
      "Quando uma transação é confirmada, ela permanece confirmada.": ["Durabilidade"]
    },
    "explicacao": "As propriedades ACID garantem a integridade das transações: Atomicidade assegura que uma transação ocorra por completo ou não ocorra, Consistência assegura a validade do estado do banco antes e depois, Isolamento garante que transações simultâneas não interfiram umas nas outras, e Durabilidade garante que os dados permaneçam salvos após a confirmação.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver17",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> formato é usado para armazenar dados delimitados, separa campos de dados usando vírgulas e termina as linhas usando um retorno de carro.",
    "opcoes": ["Escolha uma opção", "CSV", "JSON", "TSV", "XML"],
    "resposta": 1,
    "explicacao": "O formato CSV (Comma-Separated Values) é amplamente utilizado para armazenar dados tabulares em texto simples. Ele separa os campos usando vírgulas e quebra de linha para delimitar registros, tornando-se um formato comum para importação/exportação entre sistemas e bancos de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/format-delimited-text",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "multipla",
    "texto": "Quais das opções abaixo são três características de uma carga de trabalho OLTP (processamento de transações online)? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "dados normalizados",
      "gravações leves e leituras intensas",
      "dados desnormalizados",
      "gravações intensas e leituras moderadas",
      "esquema definido ao ler dados não estruturados de um banco de dados",
      "esquema definido em um banco de dados"
    ],
    "respostas": [0, 3, 5],
    "explicacao": "Em sistemas OLTP, as transações são curtas, frequentes e requerem desempenho consistente. Portanto, os dados são geralmente normalizados para reduzir a redundância e melhorar a integridade. Há um padrão de gravações intensas e leituras moderadas, pois as operações de escrita são constantes (como inserções e atualizações de pedidos, transações bancárias, etc.). Além disso, o OLTP utiliza um esquema definido para garantir a estrutura rígida do banco de dados relacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-transaction-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual formato de arquivo define nomes e tipos de dados para cada coluna e usa armazenamento colunar compactado?",
    "opcoes": [
      "JSON",
      "Apache Parquet",
      "CSV",
      "HTML"
    ],
    "resposta": 1,
    "explicacao": "O Apache Parquet é um formato de armazenamento colunar eficiente, que permite definir nomes e tipos de dados para cada coluna, além de usar compressão de dados. É amplamente utilizado em cargas de trabalho de big data por oferecer alto desempenho de leitura e economia de espaço.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/data-explorer/ingest-data/data-explorer-ingest-data-supported-formats",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você tem dados salvos no seguinte formato: <br> {<br> &nbsp; &nbsp; \"firstName\": \"John\",<br> &nbsp; &nbsp; \"lastName\": \"Doe\",<br> &nbsp; &nbsp;  \"age\": 23,<br> &nbsp; &nbsp; \"hobbies\": [<br> &nbsp; &nbsp; &nbsp; &nbsp;   { \"type\": \"Sports\", \"value\": \"Golf\" },<br> &nbsp; &nbsp; &nbsp; &nbsp;   { \"type\": \"Leisure\", \"value\": \"Reading\" },<br> &nbsp; &nbsp; &nbsp; &nbsp;   { \"type\": \"Leisure\", \"value\": \"Guitar\" }<br> &nbsp; &nbsp;  ]<br>} <br> Qual formato foi usado?",
    "opcoes": [
      "HTML",
      "YAML",
      "JSON",
      "XML"
    ],
    "resposta": 2,
    "explicacao": "O formato mostrado segue a estrutura de objetos com pares chave-valor entre aspas, colchetes para arrays e chaves para objetos, que é a marca registrada do JSON (JavaScript Object Notation).",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/format-json",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual é a responsabilidade de um administrador de banco de dados?",
    "opcoes": [
      "aplicar rotinas de limpeza de dados",
      "criar visualizações de dados",
      "gerenciar processos de integração de dados",
      "armazenar cópias de backup de dados"
    ],
    "resposta": 3,
    "explicacao": "Uma das principais responsabilidades de um administrador de banco de dados (DBA) é garantir a segurança e disponibilidade dos dados, o que inclui a criação e o gerenciamento de backups. Essa prática assegura que os dados possam ser recuperados em caso de falhas ou perdas.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "O que pode ser usado com o suporte nativo a notebooks para consultar e visualizar dados usando-se uma interface baseada na Web?",
    "opcoes": [
      "Azure Databricks",
      "Microsoft Power BI",
      "pgAdmin"
    ],
    "resposta": 0,
    "explicacao": "O Azure Databricks oferece um ambiente baseado na web com suporte nativo a notebooks, permitindo a análise e visualização interativa de dados. Ele é altamente utilizado para análise de Big Data, Machine Learning e integração com diversas fontes de dados no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/notebooks/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um banco de dados relacional deverá ser usado quando <combobox>",
    "opcoes": [
      "Selecione uma opção",
      "um esquema dinâmico for obrigatório.",
      "os dados forem armazenados como pares de chave/valor.",
      "vídeos e imagens grandes forem armazenados.",
      "garantias de coerência forte forem obrigatórias."
    ],
    "resposta": 4,
    "explicacao": "Bancos de dados relacionais são ideais quando há necessidade de garantir coerência forte, isto é, quando transações precisam manter a integridade dos dados com propriedades ACID (Atomicidade, Consistência, Isolamento e Durabilidade).",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/data-storage",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Durante o primeiro estágio de uma arquitetura de análise em escala empresarial, os dados operacionais são transformados e carregados em <combobox>",
    "opcoes": [
      "Selecione uma opção",
      "armazenamento de blobs.",
      "um data lake.",
      "um data warehouse.",
      "um banco de dados relacional."
    ],
    "resposta": 2,
    "explicacao": "No início de uma arquitetura de análise moderna, os dados brutos ou semiestruturados de diferentes fontes operacionais são ingeridos e armazenados em um data lake. Esse repositório centralizado permite armazenar grandes volumes de dados de forma econômica antes de serem transformados e transferidos para outras camadas analíticas, como data warehouses.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/example-scenario/data/data-warehouse",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Um banco precisa garantir que uma transação que envolva debitar fundos de uma conta de origem e creditar os mesmos fundos em uma conta de destino conclua ambas as ações. Se uma das ações não for concluída, a outra ação deverá falhar. Este é um exemplo de qual semântica ACID?",
    "opcoes": ["atomicidade", "consistência", "durabilidade", "isolamento"],
    "resposta": 0,
    "explicacao": "A atomicidade garante que todas as operações de uma transação sejam concluídas com sucesso ou nenhuma delas seja aplicada. No exemplo, ou ambas as ações (débito e crédito) ocorrem ou nenhuma deve ocorrer, o que caracteriza atomicidade.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> pode ser usado(a) como parte de uma solução lift-and-shift para migrar.",
    "opcoes": [
      "Escolha uma opção",
      "Um pool elástico do Banco de Dados SQL do Azure",
      "Uma instância do SQL Server em Máquinas Virtuais do Azure",
      "Um único banco de dados no Banco de Dados SQL do Azure"
    ],
    "resposta": 2,
    "explicacao": "A alternativa correta é 'Uma instância do SQL Server em Máquinas Virtuais do Azure' porque essa abordagem permite migrar aplicativos legados sem exigir grandes alterações, o que caracteriza a estratégia 'lift-and-shift'.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/example-scenario/data/data-warehouse",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre OLTP, OLAP e data warehouses.",
    "afirmacoes": [
      "O OLTP (processamento de transações online) baseia-se em um sistema de banco de dados em que o armazenamento de dados é otimizado para as operações de leitura e gravação.",
      "O OLAP (processamento analítico online) baseia-se em um sistema de banco de dados em que o armazenamento de dados é otimizado para as operações de leitura e gravação.",
      "Os data warehouses estão otimizados para operações de leitura."
    ],
    "respostas": [true, false, true],
    "explicacao": "A primeira afirmação é verdadeira, pois OLTP lida com grandes volumes de pequenas transações e requer otimização para leitura e gravação rápidas. A segunda afirmação é falsa porque OLAP é otimizado para consultas complexas e leitura, e não para gravação. A terceira é verdadeira, pois data warehouses são projetados especificamente para leitura analítica, com desempenho ideal em consultas agregadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/online-analytical-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os processos ETL e ELT.",
    "afirmacoes": [
      "O ETL (extração, transformação e carregamento) pode reduzir a transferência de dados confidenciais para os sistemas de destino.",
      "O ELT (Extrair, Carregar e Transformar) transforma dados usando um recurso de computação independente do sistema de origem e do sistema de destino.",
      "O ELT (Extrair, Carregar e Transformar) minimiza o tempo necessário para copiar grandes volumes de dados para os sistemas de destino."
    ],
    "respostas": [true, false, true],
    "explicacao": "A primeira afirmação é verdadeira, pois no ETL os dados são transformados antes de serem carregados, o que pode reduzir o risco de exposição de dados confidenciais. A segunda afirmação é falsa, porque no ELT a transformação ocorre no sistema de destino, normalmente aproveitando a capacidade computacional do banco de dados de destino. A terceira afirmação é verdadeira, já que o ELT permite transferir rapidamente grandes volumes de dados e realizar as transformações posteriormente no destino.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "O que é necessário para provisionar o Azure Data Lake Storage em uma conta do Armazenamento do Azure?",
    "opcoes": [
      "O namespace hierárquico deve estar habilitado.",
      "O controle de versão deve estar habilitado.",
      "O namespace hierárquico deve estar desabilitado.",
      "O controle de versão deve estar desabilitado."
    ],
    "resposta": 0,
    "explicacao": "Para provisionar o Azure Data Lake Storage Gen2 em uma conta de armazenamento, é necessário habilitar o namespace hierárquico. Essa configuração permite o uso de recursos como diretórios e controle de acesso baseado em arquivos.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é a implementação do Azure de uma solução ampla de análise de dados criada com base no Apache Spark e está disponível em várias plataformas de nuvem.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Data Factory",
      "Azure Databricks",
      "Azure Analysis Services"
    ],
    "resposta": 2,
    "explicacao": "Azure Databricks é a plataforma de análise baseada em Apache Spark disponibilizada como um serviço no Azure. Ele oferece um ambiente colaborativo para análise de big data e machine learning, com escalabilidade e integração com outras ferramentas do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/introduction/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: O(A) <combobox> é um gráfico de retângulos coloridos. O tamanho dos retângulos representa o valor relativo de cada item. O gráfico pode ser hierárquico com dados como um conjunto de retângulos aninhados no retângulo principal.",
    "opcoes": [
      "Escolha uma opção",
      "gráfico de linhas",
      "matriz",
      "dispersão",
      "mapa de árvore"
    ],
    "resposta": 4,
    "explicacao": "O mapa de árvore (treemap) é uma visualização que utiliza retângulos coloridos e proporcionais para representar a contribuição relativa dos itens em uma hierarquia. Ele permite explorar dados categóricos com facilidade, destacando proporções e relações hierárquicas.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-treemaps",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em uma carga de trabalho de data warehouse, os dados <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "de uma única fonte são distribuídos para vários locais.",
      "de várias fontes são combinados em um único local.",
      "são adicionados a uma fila para serem processados por vários sistemas.",
      "são usados para treinar modelos de machine learning."
    ],
    "resposta": 2,
    "explicacao": "Em um data warehouse, os dados são coletados de múltiplas fontes e combinados em um único repositório centralizado para facilitar análises e relatórios corporativos. Esse processo permite a criação de uma fonte confiável de dados integrada para suporte à decisão.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/data-warehousing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Relacione os tipos de visualizações às descrições apropriadas.",
    "itens": [
      { "label": "Principal influenciador" },
      { "label": "Dispersão" },
      { "label": "Mapa de árvore" }
    ],
    "grupos": [
      "Um gráfico de retângulos coloridos aninhados que exibe pontos de dados individuais representados pelo tamanho e pela cor de um retângulo relativo.",
      "Um gráfico que exibe os principais colaboradores de um resultado ou valor selecionado.",
      "Um gráfico que mostra a relação entre dois valores numéricos."
    ],
    "respostas": {
      "Um gráfico de retângulos coloridos aninhados que exibe pontos de dados individuais representados pelo tamanho e pela cor de um retângulo relativo.": ["Mapa de árvore"],
      "Um gráfico que exibe os principais colaboradores de um resultado ou valor selecionado.": ["Principal influenciador"],
      "Um gráfico que mostra a relação entre dois valores numéricos.": ["Dispersão"]
    },
    "explicacao": "Cada tipo de gráfico tem uma finalidade específica: o gráfico de Mapa de Árvore representa hierarquias e proporções com retângulos aninhados; o gráfico de Principal Influenciador identifica fatores que afetam um resultado; e o gráfico de Dispersão revela correlações entre duas variáveis numéricas.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual é a finalidade principal de um data warehouse?",
    "opcoes": [
      "fornecer respostas para consultas complexas que dependem de dados de várias fontes",
      "fornecer armazenamento somente leitura de dados históricos relacionais e não relacionais",
      "fornecer armazenamento para aplicativos de LOB (linha de negócios) transacionais",
      "fornecer serviços de transformação entre armazenamentos de dados de origem e de destino"
    ],
    "resposta": 0,
    "explicacao": "A principal finalidade de um data warehouse é fornecer respostas para consultas analíticas complexas, agregando dados de diversas fontes para gerar insights de negócios. Ele é otimizado para leitura e análise de grandes volumes de dados, diferentemente de bancos transacionais usados no dia a dia.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/data-warehousing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma solução de geração de relatórios que inclui relatórios paginados. Os relatórios consultam um modelo dimensional em um data warehouse. Qual o tipo de processamento usado pela solução de geração de relatórios?",
    "opcoes": [
      "OLTP (processamento de transações online)",
      "OLAP (processamento analítico online)",
      "processamento em lotes",
      "processamento de fluxo"
    ],
    "resposta": 1,
    "explicacao": "Soluções de relatórios baseadas em data warehouse utilizam processamento analítico online (OLAP), que permite análise rápida de grandes volumes de dados históricos estruturados em modelos dimensionais. Isso é ideal para relatórios complexos e paginados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/analytical-data-stores",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No Microsoft Power BI, um <combobox> é uma coleção de visualizações que aparecem juntas em uma ou mais páginas.",
    "opcoes": [
      "Selecione uma resposta",
      "painel",
      "conjunto de dados",
      "relatório",
      "bloco"
    ],
    "resposta": 3,
    "explicacao": "No Power BI, um relatório é uma coleção de visualizações organizadas em uma ou mais páginas. Relatórios permitem explorar e apresentar dados de forma interativa e estruturada, sendo diferentes de painéis, que são coleções de blocos de visualização em uma única página.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/fundamentals/service-basic-concepts",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No processamento em lotes, <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "os dados são sempre inseridos uma linha de cada vez.",
      "os dados são processados em tempo real.",
      "o atraso no fornecimento de resultados do processamento de dados é aceitável.",
      "o processamento só pode ser executado em série."
    ],
    "resposta": 3,
    "explicacao": "No processamento em lotes, os dados são coletados, armazenados e processados em grandes volumes periodicamente. Como resultado, há um atraso natural no fornecimento dos resultados, o que é considerado aceitável nesse tipo de arquitetura, ao contrário do processamento em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre destinos de saída no processamento em lotes.",
    "afirmacoes": [
      "O processamento em lotes pode gerar a saída de dados para um repositório de arquivos.",
      "O processamento em lotes pode gerar a saída de dados para um banco de dados relacional.",
      "O processamento em lotes pode gerar a saída de dados para um banco de dados NoSQL."
    ],
    "respostas": [true, true, true],
    "explicacao": "O processamento em lotes é flexível quanto ao destino da saída. Ele pode gravar os resultados em repositórios de arquivos como o Azure Data Lake, em bancos de dados relacionais como o Azure SQL Database, ou em bancos NoSQL como o Azure Cosmos DB. Isso depende da arquitetura e dos requisitos da aplicação.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está criando um armazenamento de dados para sensores de temperatura conectados à Internet. Os dados coletados serão usados para analisar tendências de temperatura. Que tipo de armazenamento de dados você deve usar?",
    "opcoes": [
      "relacional",
      "série temporal",
      "colunar",
      "grafo"
    ],
    "resposta": 1,
    "explicacao": "Dados de sensores coletados ao longo do tempo são ideais para serem armazenados em bancos de dados de série temporal, pois esse tipo de armazenamento é otimizado para registrar, consultar e analisar dados que mudam com o tempo, como medições de temperatura.",
    "link": "https://learn.microsoft.com/pt-pt/kusto/query/time-series-analysis?view=microsoft-fabric",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você planeja implantar um aplicativo. O aplicativo requer um serviço de dados não relacionais que forneça garantias de latência de menos de 10 ms para leituras e gravações. O que você deve incluir na solução?",
    "opcoes": [
      "Armazenamento de Tabelas do Azure",
      "Armazenamento de Blobs do Azure",
      "Azure Cosmos DB",
      "Arquivos do Azure"
    ],
    "resposta": 2,
    "explicacao": "O Azure Cosmos DB é um banco de dados NoSQL distribuído globalmente que oferece garantias de latência inferior a 10 milissegundos para operações de leitura e gravação, tornando-o ideal para aplicativos que exigem alto desempenho e baixa latência.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Uma conta de Armazenamento do Azure deve ter o(a) <combobox> habilitado(a) para dar suporte ao Azure Data Lake Storage.",
    "opcoes": [
      "Selecione uma resposta",
      "Exclusão temporária de blob",
      "Namespace hierárquico",
      "Compartilhamentos de arquivo grandes",
      "Controle de versão"
    ],
    "resposta": 2,
    "explicacao": "Para que uma conta de armazenamento do Azure seja compatível com o Azure Data Lake Storage Gen2, é necessário habilitar o namespace hierárquico, que permite estrutura de diretórios e operações eficientes em arquivos e pastas.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um banco de dados não relacional <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "impõe um esquema fixo em dados",
      "armazena entidades sem um valor de chave exclusivo",
      "armazena dados em tabelas relacionais",
      "armazena dados sem um esquema fixo"
    ],
    "resposta": 4,
    "explicacao": "Bancos de dados não relacionais, como os do tipo NoSQL, são projetados para armazenar dados de forma flexível, permitindo estruturas variadas e dados sem a necessidade de um esquema predefinido. Isso proporciona escalabilidade e agilidade em aplicações modernas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/nosql/overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa armazenar dados usando o Armazenamento de Tabelas do Azure. O que você deve criar primeiro?",
    "opcoes": [
      "uma instância do Azure Cosmos DB",
      "uma tabela",
      "uma conta de armazenamento",
      "um contêiner de blobs"
    ],
    "resposta": 2,
    "explicacao": "Para usar o Armazenamento de Tabelas do Azure, é necessário primeiro criar uma conta de armazenamento. Somente após isso é possível criar tabelas dentro dessa conta. Essa estrutura fornece o contexto e os recursos necessários para armazenar e gerenciar os dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/tables/table-storage-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual solução de armazenamento dá suporte a ACLs (listas de controle de acesso) no nível do arquivo e da pasta?",
    "opcoes": [
      "Azure Data Lake Storage",
      "Armazenamento de Blobs do Azure",
      "Azure Cosmos DB",
      "Armazenamento de Filas do Azure"
    ],
    "resposta": 0,
    "explicacao": "O Azure Data Lake Storage Gen2 oferece suporte nativo a ACLs no nível de arquivo e pasta, permitindo um controle refinado de permissões. Esse recurso é essencial para cenários de big data e análises em que é necessário controlar o acesso a dados específicos dentro de um repositório hierárquico.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um armazenamento de dados de chave/valor é otimizado para <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "impor restrições",
      "pesquisas simples",
      "junções de tabela"
    ],
    "resposta": 2,
    "explicacao": "Armazenamentos de chave/valor, como o Azure Table Storage ou serviços NoSQL semelhantes, são otimizados para buscas rápidas e simples com base em uma chave única. Eles não são projetados para operações complexas como junções de tabelas ou imposição de restrições, o que os torna ideais para cenários que requerem consultas rápidas com base em uma chave.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o Azure Cosmos DB.",
    "afirmacoes": [
      "A API do Azure Cosmos DB é configurada separadamente para cada banco de dados em uma conta do Azure Cosmos DB.",
      "Valores de chaves de partição são usados no Azure Cosmos DB para otimizar consultas.",
      "Itens contidos na mesma partição lógica do Azure Cosmos DB podem ter chaves de partição diferentes."
    ],
    "respostas": [false, true, false],
    "explicacao": "A API do Azure Cosmos DB é configurada no nível da conta, não por banco de dados individual. O uso de chaves de partição melhora significativamente a eficiência e o desempenho das consultas no Azure Cosmos DB. Todos os itens dentro da mesma partição lógica devem compartilhar o mesmo valor de chave de partição.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/partitioning-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Você pode consultar um banco de dados de grafos no Azure Cosmos DB <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "como um repositório de linhas particionado usando a CQL (linguagem de consulta do Cassandra).",
      "como um repositório de linhas particionado usando a LINQ (consulta integrada à linguagem).",
      "como nós e bordas usando a linguagem Gremlin."
    ],
    "resposta": 3,
    "explicacao": "A API de Gremlin do Azure Cosmos DB permite trabalhar com bancos de dados de grafos. Nela, os dados são organizados como nós (entidades) e bordas (relacionamentos), e são consultados usando a linguagem Gremlin, que é projetada especificamente para consultas em grafos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um banco de dados local do Microsoft SQL Server. Você precisa migrar o banco de dados para a nuvem. A solução deve atender aos seguintes requisitos: minimizar o esforço de manutenção e dar suporte aos recursos Database Mail e Service Broker. O que você deve incluir na solução?",
    "opcoes": [
      "um SQL Server em uma máquina virtual do Azure",
      "um banco de dados individual do Banco de Dados SQL do Azure",
      "uma Instância Gerenciada de SQL do Azure",
      "um pool elástico do Banco de Dados SQL do Azure"
    ],
    "resposta": 2,
    "explicacao": "A Instância Gerenciada de SQL do Azure é a escolha ideal para migrações lift-and-shift de bancos de dados SQL Server locais para a nuvem. Ela oferece alta compatibilidade com o SQL Server tradicional e suporte a recursos como Database Mail e Service Broker, além de reduzir o esforço de manutenção.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview?view=azuresql",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre bancos de dados PaaS (plataforma como serviço) no Azure.",
    "afirmacoes": [
      "Se tiver um banco de dados PaaS (plataforma como serviço) no Azure, você será responsável por aplicar atualizações do sistema operacional.",
      "Se você tiver um banco de dados PaaS (plataforma como serviço) no Azure, os backups serão realizados automaticamente.",
      "Se tiver um banco de dados PaaS (plataforma como serviço) no Azure, você será responsável pela instalação do mecanismo do banco de dados."
    ],
    "respostas": [false, true, false],
    "explicacao": "1. Afirmativa 1: Incorreta. Em soluções PaaS no Azure, como o Azure SQL Database, a Microsoft é responsável pela manutenção do sistema operacional, incluindo atualizações e patches.\n2. Afirmativa 2: Correta. O Azure realiza backups automáticos de bancos de dados PaaS por padrão, com políticas configuráveis.\n3. Afirmativa 3: Incorreta. A instalação e manutenção do mecanismo de banco de dados são gerenciadas pela Microsoft em ambientes PaaS.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview?view=azuresql",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é um objeto associado a uma tabela que classifica e armazena linhas de dados com base nos valores de chave.",
    "opcoes": [
      "Escolha uma opção",
      "Um índice clusterizado",
      "Um FileTable",
      "Uma chave estrangeira",
      "Um procedimento armazenado"
    ],
    "resposta": 1,
    "explicacao": "A alternativa correta é 'Um índice clusterizado'. Um índice clusterizado determina a ordem física dos dados em uma tabela e organiza os dados com base nos valores de chave. É o tipo padrão de índice em muitas tabelas primárias e melhora significativamente o desempenho de consultas que usam as colunas indexadas.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure fornece a compatibilidade mais alta para bancos de dados migrados do Microsoft SQL Server 2019 Enterprise Edition?",
    "opcoes": [
      "Um banco de dados SQL do Azure",
      "O Banco de Dados do Azure para MySQL",
      "Um pool elástico do Banco de Dados SQL do Azure",
      "A Instância Gerenciada do SQL do Azure"
    ],
    "resposta": 3,
    "explicacao": "A Instância Gerenciada do SQL do Azure oferece a mais alta compatibilidade com o SQL Server local, incluindo suporte para SQL Server Agent, Service Broker, Linked Servers e outras funcionalidades avançadas encontradas na edição Enterprise. É ideal para migração com poucas alterações.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview?view=azuresql",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Que cláusula deve ser usada em uma instrução SELECT para combinar as linhas de uma tabela com as linhas de outra tabela?",
    "opcoes": [
      "SET",
      "JOIN",
      "KEY",
      "VALUES"
    ],
    "resposta": 1,
    "explicacao": "A cláusula JOIN é usada em uma instrução SELECT para combinar registros de duas ou mais tabelas com base em uma condição de correspondência, geralmente uma chave estrangeira e uma chave primária.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/from-transact-sql?view=sql-server-ver16",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Relacione os termos de banco de dados aos seus respectivos significados.",
    "itens": [
      { "label": "Índice" },
      { "label": "Tabela" },
      { "label": "Exibição" }
    ],
    "grupos": [
      "Um objeto de banco de dados que contém dados.",
      "Um objeto de banco de dados cujo conteúdo é definido por uma consulta.",
      "Um objeto de banco de dados que ajuda a aumentar a velocidade da recuperação de dados."
    ],
    "respostas": {
      "Um objeto de banco de dados que contém dados.": ["Tabela"],
      "Um objeto de banco de dados cujo conteúdo é definido por uma consulta.": ["Exibição"],
      "Um objeto de banco de dados que ajuda a aumentar a velocidade da recuperação de dados.": ["Índice"]
    },
    "explicacao": "Tabelas armazenam fisicamente os dados no banco; exibições (views) são objetos virtuais definidos por consultas; índices otimizam a velocidade de leitura ao permitir acesso mais rápido aos registros.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/tables/create-tables-database-engine?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Qual instrução é um exemplo de DDL (linguagem de definição de dados)?",
    "opcoes": ["JOIN", "INSERT", "CREATE", "MERGE"],
    "resposta": 2,
    "explicacao": "A instrução `CREATE` pertence à DDL (Data Definition Language), usada para definir estruturas no banco de dados, como criar tabelas, índices ou esquemas. As instruções `INSERT` e `MERGE` são da DML (Data Manipulation Language) e `JOIN` é uma cláusula usada em consultas.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver16",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em um banco de dados relacional, cada linha em uma tabela tem <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "um conjunto diferente de colunas",
      "um par de chave-valor",
      "o mesmo conjunto de colunas",
      "dados não estruturados"
    ],
    "resposta": 3,
    "explicacao": "Em bancos de dados relacionais, todas as linhas de uma tabela seguem o mesmo esquema, ou seja, possuem o mesmo conjunto de colunas. Isso garante a consistência estrutural dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre as camadas de acesso no Armazenamento do Azure.",
    "afirmacoes": [
      "A camada Acesso esporádico é a camada padrão de uma conta do Armazenamento do Azure.",
      "Os blobs de acréscimo são otimizados para operações aleatórias de leitura e gravação.",
      "A recuperação de dados da camada Acesso a arquivos leva horas para ser concluída."
    ],
    "respostas": [false, false, true],
    "explicacao": "1. **Camada padrão**: A camada padrão para o Armazenamento do Azure é a 'Hot' (frequente), não 'Esporádico' (Cool).\n2. **Blobs de acréscimo**: São otimizados para acréscimos sequenciais, como logs, não para leitura/gravação aleatória.\n3. **Recuperação da camada Arquivo**: A camada Arquivo (Archive) tem recuperação lenta — pode levar horas para tornar os dados acessíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-b1"
  },
  {
    "tipo": "unica",
    "texto": "Em um modelo de dados analítico, que tipo de tabela contém entidades usadas para agregar valores numéricos, onde cada entidade é representada por uma linha com um valor de chave exclusivo?",
    "opcoes": ["dimensão", "ponte", "fato"],
    "resposta": 2,
    "explicacao": "Tabelas de fatos armazenam dados quantitativos e são usadas para agregar valores numéricos em modelos analíticos. Cada linha representa uma ocorrência de evento (como uma transação) e contém chaves estrangeiras que fazem referência a tabelas de dimensão, além de medidas numéricas.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/guidance/star-schema",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-b1"
  }



















];
