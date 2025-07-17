// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [

  {
    "tipo": "unica",
    "texto": "Qual solução de armazenamento oferece suporte a listas de controle de acesso (ACLs) em nível de arquivo e pasta?",
    "opcoes": [
      "Azure Data Lake Storage",
      "Armazenamento da Fila do Azure",
      "Armazenamento de Blobs do Azure",
      "Azure Cosmos DB"
    ],
    "resposta": 0,
    "explicacao": "O Azure Data Lake Storage Gen2 oferece suporte a controle de acesso baseado em função (RBAC) e listas de controle de acesso (ACLs) do tipo POSIX em nível de arquivo e pasta, permitindo um controle granular de permissões sobre os dados.",
    "link": "https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é um gráfico de retângulos coloridos. O tamanho dos retângulos representa o valor relativo de cada item. O gráfico pode ser hierárquico, exibindo dados como um conjunto de retângulos aninhados no retângulo principal.",
    "opcoes": ["Escolha uma opção", "gráfico de linhas", "matriz", "espalhar", "mapa de árvore"],
    "resposta": 4,
    "explicacao": "O 'mapa de árvore' (treemap) é um tipo de visualização que usa retângulos proporcionais para representar valores hierárquicos. É útil para mostrar partes de um todo e suas subdivisões em um único gráfico.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-treemaps",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual é uma característica do processamento em lote?",
    "opcoes": [
      "Os dados ingeridos durante o processamento em lote devem ser processados assim que os dados forem recebidos.",
      "Grandes conjuntos de dados devem ser divididos em lotes de menos de 1GB antes que os dados possam ser processados.",
      "Há um atraso perceptível entre a ingestão de dados e a obtenção dos resultados do processamento de dados.",
      "O processamento em lote só pode processar dados estruturados."
    ],
    "resposta": 2,
    "explicacao": "O processamento em lote é caracterizado por um atraso entre a ingestão e a saída de dados, pois os dados são acumulados e processados em blocos. Esse tipo de processamento é adequado para grandes volumes de dados e é comum em tarefas analíticas que não exigem resultados em tempo real.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em uma instrução SQL, <combobox> são exemplos de funções agregadas.",
    "opcoes": [
      "Selecione uma resposta",
      "FROM and WHERE",
      "GROUP BY and ORDER BY",
      "JOIN and MERGE",
      "MÁX and MÍN"
    ],
    "resposta": 4,
    "explicacao": "Funções agregadas em SQL, como MÁX e MÍN, são utilizadas para realizar cálculos em conjuntos de valores e retornar um único valor. Essas funções são fundamentais para resumir dados em consultas, diferentemente de cláusulas como GROUP BY ou comandos JOIN.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/functions/aggregate-functions-transact-sql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre cargas de trabalho em lote e em streaming.",
    "afirmacoes": [
      "Um trabalho que processa dados de vendas uma vez por dia é um exemplo de carga de trabalho em lote.",
      "Um trabalho que calcula uma leitura de temperatura média contínua é um exemplo de carga de trabalho de streaming.",
      "Um trabalho que calcula a receita média por produto no último mês é um exemplo de carga de trabalho de streaming."
    ],
    "respostas": [true, true, false],
    "explicacao": "A primeira afirmação está correta porque cargas de trabalho em lote processam dados em intervalos programados, como uma vez por dia. A segunda também está correta, pois streaming envolve o processamento contínuo de dados em tempo real, como leituras de sensores. A terceira afirmação está incorreta, já que calcular a receita média por produto no último mês caracteriza uma análise de dados históricos, típica de cargas de trabalho em lote.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em um banco de dados relacional, cada linha de uma tabela possui <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "um conjunto diferente de colunas",
      "um par de valores-chave",
      "o mesmo conjunto de colunas",
      "dados não estruturados"
    ],
    "resposta": 3,
    "explicacao": "Em bancos de dados relacionais, todas as linhas de uma tabela compartilham a mesma estrutura, ou seja, o mesmo conjunto de colunas. Isso garante consistência no armazenamento e facilita a aplicação de regras de integridade e a execução de consultas.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/design-first-database-tutorial?view=azuresql&tabs=ssms",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre normalização de bancos de dados.",
    "afirmacoes": [
      "A normalização de um banco de dados aumenta o rendimento de gravação de transações.",
      "Os sistemas analíticos são mais normalizados do que os sistemas transacionais.",
      "A normalização de um banco de dados resulta em consultas que exigem mais junções."
    ],
    "respostas": [false, false, true],
    "explicacao": "1 A normalização não aumenta o rendimento de gravações; ela pode até reduzi-lo devido à maior quantidade de junções necessárias.\n2 Sistemas analíticos normalmente utilizam dados desnormalizados para otimizar a leitura, enquanto os sistemas transacionais tendem a ser mais normalizados.\n3 A normalização resulta em múltiplas tabelas relacionadas, o que requer mais junções nas consultas.",
    "link": "https://learn.microsoft.com/pt-br/office/troubleshoot/access/database-normalization-description",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> apoiar nativamente a análise de relacionamentos entre entidades.",
    "opcoes": [
      "Escolha uma opção",
      "Bancos de dados de família de colunas",
      "Bancos de dados de documentos",
      "Bancos de dados gráficos",
      "Lojas de valores-chave"
    ],
    "resposta": 3,
    "explicacao": "Bancos de dados gráficos são projetados especificamente para armazenar e consultar relações complexas entre dados. Eles usam estruturas chamadas de nós e arestas para representar entidades e seus relacionamentos, tornando-os ideais para análises de redes sociais, cadeias de suprimentos, e mais.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um armazenamento de dados de chave/valor é otimizado para <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "impor restrições.",
      "pesquisas simples.",
      "junções de tabela."
    ],
    "resposta": 2,
    "explicacao": "Armazenamentos de dados de chave/valor são otimizados para pesquisas simples e rápidas com base em uma chave única. Eles não suportam recursos avançados como junções ou restrições complexas, o que os torna ideais para cargas de trabalho com requisitos de leitura extremamente rápida e simples.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em uma instância de infraestrutura como serviço (IaaS) do Microsoft SQL Server no Azure, você gerencia o (a) <combobox> que hospeda o SQL Server.",
    "opcoes": [
      "Escolha uma opção",
      "piscina elástica",
      "Servidor MySQL",
      "Servidor PostgreSQL",
      "máquina virtual"
    ],
    "resposta": 4,
    "explicacao": "Quando você executa o Microsoft SQL Server no Azure usando IaaS (Infraestrutura como Serviço), isso significa que você está gerenciando uma máquina virtual (VM) onde o SQL Server está instalado. Isso oferece controle total sobre o sistema operacional, configurações do SQL Server, backups e atualizações — diferente de uma solução PaaS, onde a Microsoft gerencia esses aspectos para você.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Campos variados para cada entidade em um documento JSON são um exemplo de <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "dados relacionais",
      "dados semiestruturados",
      "dados estruturados",
      "dados não estruturados"
    ],
    "resposta": 2,
    "explicacao": "Documentos JSON são exemplos clássicos de dados semiestruturados, pois não seguem um esquema fixo. Cada entidade pode conter diferentes campos e estruturas internas, o que os diferencia de dados estruturados (como os encontrados em tabelas relacionais) e de dados completamente não estruturados (como imagens ou vídeos).",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/non-relational-data",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um documento JSON é um exemplo de <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "dados do gráfico",
      "dados relacionais",
      "dados semiestruturados",
      "dados não estruturados"
    ],
    "resposta": 3,
    "explicacao": "Documentos JSON são considerados dados semiestruturados, pois não seguem rigidamente um modelo de dados fixo como os dados estruturados, mas ainda mantêm uma organização interna através de chaves e valores. Eles representam uma ponte entre dados estruturados e não estruturados, com maior flexibilidade para representar diferentes tipos de entidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/non-relational-data",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual propriedade de uma carga de trabalho transacional garante que cada transação seja tratada como uma única unidade que seja bem-sucedida ou falhe completamente?",
    "opcoes": [
      "atomicidade",
      "isolamento",
      "durabilidade",
      "consistência"
    ],
    "resposta": 0,
    "explicacao": "A atomicidade é uma das propriedades ACID das transações em bancos de dados. Ela garante que uma transação seja executada completamente ou, em caso de falha, nenhuma de suas alterações seja aplicada, mantendo a integridade dos dados.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/language-elements/transactions-transact-sql?view=sql-server-ver17",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um armazenamento de dados que possui a estrutura mostrada na exposição (com nós e relacionamentos entre funcionários e departamentos). Qual tipo de armazenamento de dados é esse?",
    "imagemUrl": "img/1.png",
    "opcoes": [
      "chave/valor",
      "dados de objeto",
      "gráfico",
      "série temporal"
    ],
    "resposta": 2,
    "explicacao": "Bancos de dados do tipo gráfico armazenam informações em nós e arestas. Os nós representam entidades (como funcionários ou departamentos), enquanto as arestas representam relacionamentos entre essas entidades. Esse modelo é ideal para representar estruturas complexas com múltiplos relacionamentos interconectados.",
    "link": "https://docs.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Que tipo de banco de dados contém nós e arestas?",
    "opcoes": [
      "gráfico",
      "chave/valor",
      "colunar",
      "série temporal"
    ],
    "resposta": 0,
    "explicacao": "Bancos de dados do tipo gráfico armazenam dois tipos de informações: nós e arestas. Os nós representam entidades e as arestas representam relacionamentos entre elas. Cada nó ou aresta pode ter propriedades associadas, funcionando de forma semelhante às colunas de uma tabela relacional. Esse modelo é ideal para estruturas altamente conectadas.",
    "link": "https://docs.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é responsável por identificar quais regras de negócio devem ser aplicadas aos dados de uma empresa.",
    "opcoes": [
      "Escolha uma opção",
      "Um analista de dados",
      "Um engenheiro de dados",
      "Um cientista de dados"
    ],
    "resposta": 1,
    "explicacao": "O analista de dados é o profissional responsável por entender as necessidades do negócio e aplicar regras de negócio sobre os dados para gerar insights relevantes. Ele atua na coleta, organização, análise e interpretação dos dados para suportar a tomada de decisão empresarial.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/data-analytics-microsoft/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Dados relacionais usam <combobox> para impor relacionamentos entre tabelas diferentes.",
    "opcoes": [
      "Escolha uma opção",
      "coleções",
      "linhas",
      "chaves",
      "partições"
    ],
    "resposta": 3,
    "explicacao": "Em bancos de dados relacionais, as *chaves* (primárias e estrangeiras) são fundamentais para impor e manter relacionamentos entre diferentes tabelas. Elas garantem a integridade referencial e permitem que dados relacionados sejam acessados de forma consistente.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-relational-data-offerings/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um banco de dados de gerenciamento de inventário que contém a tabela a seguir. Qual instrução você deve usar em uma consulta SQL para alterar a quantidade de estoque do Produto1 para 270?",
    "imagemUrl": "img/2.png",
    "opcoes": ["INSERT", "MERGE", "UPDATE", "CREATE"],
    "resposta": 2,
    "explicacao": "A instrução correta para modificar o valor de uma linha existente em uma tabela é UPDATE. Essa instrução permite alterar valores específicos de colunas para registros que atendem a uma determinada condição, como mudar a quantidade de Produto1 para 270.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/update-transact-sql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa precisa implementar um banco de dados relacional no Azure. A solução deve minimizar a manutenção contínua. Qual serviço do Azure você deve usar?",
    "opcoes": [
      "Azure HDInsight",
      "Banco de Dados SQL do Azure",
      "Azure Cosmos DB",
      "SQL Server em Máquinas Virtuais do Azure"
    ],
    "resposta": 1,
    "explicacao": "O Banco de Dados SQL do Azure é uma oferta PaaS (Plataforma como Serviço) que gerencia automaticamente tarefas como backups, correções e atualizações, reduzindo a necessidade de manutenção contínua. É ideal para quem deseja uma solução relacional com alta disponibilidade e escalabilidade sem a complexidade da administração tradicional.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você está escrevendo um conjunto de consultas SQL que os administradores usarão para solucionar problemas de um banco de dados SQL do Azure. Você precisa incorporar documentos e resultados de consultas em um notebook SQL. O que você deve usar?",
    "opcoes": [
      "Microsoft SQL Server Management Studio (SSMS)",
      "Estúdio de dados do Azure",
      "CLI do Azure",
      "Azure PowerShell"
    ],
    "resposta": 1,
    "explicacao": "O Estúdio de dados do Azure (Azure Data Studio) é uma ferramenta de banco de dados multiplataforma que permite criar notebooks SQL com suporte a markdown, código e resultados. É ideal para documentar consultas e análises usadas na administração e solução de problemas de bancos de dados SQL do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure-data-studio/notebooks/notebooks-sql-kernel",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os termos com as descrições apropriadas relacionadas a objetos de banco de dados.",
    "itens": [
      { "label": "Índice" },
      { "label": "Visualizar" },
      { "label": "tabela" }
    ],
    "grupos": [
      "Um objeto de banco de dados que contém dados",
      "Um objeto de banco de dados cujo conteúdo é definido por uma consulta",
      "Um objeto de banco de dados que ajuda a melhorar a velocidade de recuperação de dados"
    ],
    "respostas": {
      "Um objeto de banco de dados que contém dados": ["tabela"],
      "Um objeto de banco de dados cujo conteúdo é definido por uma consulta": ["Visualizar"],
      "Um objeto de banco de dados que ajuda a melhorar a velocidade de recuperação de dados": ["Índice"]
    },
    "explicacao": "A 'tabela' (ou tabela) é o objeto principal de armazenamento de dados em um banco de dados. A 'visualização' (ou view) é uma consulta salva que apresenta dados com base em uma ou mais tabelas. O 'índice' é utilizado para melhorar o desempenho das consultas, acelerando a localização e recuperação de registros.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/tables/tables",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo de comércio eletrônico que lê e grava dados em um banco de dados SQL do Azure. Que tipo de processamento o aplicativo usa?",
    "opcoes": [
      "Processamento de fluxo",
      "Processamento em lote",
      "Processamento Analítico Online (OLAP)",
      "Processamento de transações online (OLTP)"
    ],
    "resposta": 3,
    "explicacao": "O OLTP (Processamento de Transações Online) é ideal para sistemas que realizam muitas transações rápidas e pequenas, como aplicativos de comércio eletrônico. Ele permite a leitura e gravação em tempo real em bancos de dados, garantindo integridade e desempenho para operações do dia a dia.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-core-data-concepts/5-transactional-data-processing",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Quando você pode usar um modelo do Azure Resource Manager?",
    "opcoes": [
      "Para automatizar a criação de um grupo interdependente de recursos do Azure de forma repetível",
      "Aplicar políticas do Azure para implantações multlocatários",
      "Para provisionar assinaturas do Azure",
      "Para controlar quais serviços e recursos os administradores e desenvolvedores podem implantar no portal do Azure"
    ],
    "resposta": 0,
    "explicacao": "Os modelos do Azure Resource Manager (ARM) são usados para automatizar a implantação de um conjunto interdependente de recursos de infraestrutura como código. Eles permitem definir de forma declarativa os recursos e configurações necessários, facilitando a repetibilidade e padronização das implantações.",
    "link": "https://docs.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um banco de dados SQL do Azure que pode ser acessado diretamente da Internet. Você alterou recentemente o endereço IP público do seu computador. Após alterar o endereço IP, você não poderá mais acessar o banco de dados. Você pode conectar-se a outros recursos no Azure. Qual é a possível causa do problema?",
    "opcoes": [
      "Controle de acesso baseado em função (RBAC)",
      "Protocolo de configuração dinâmica de host (DHCP)",
      "Serviço de Nome de Domínio (DNS)",
      "Um firewall em nível de banco de dados"
    ],
    "resposta": 3,
    "explicacao": "O firewall do Banco de Dados SQL do Azure permite configurar quais endereços IP podem acessar o servidor SQL. Quando o IP público do computador é alterado, o novo IP precisa ser explicitamente autorizado no firewall. Caso contrário, o acesso ao banco de dados será negado, mesmo que outros recursos no Azure ainda sejam acessíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/firewall-configure",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine as ferramentas com suas descrições apropriadas relacionadas ao gerenciamento e desenvolvimento de bancos de dados no Azure e SQL Server.",
    "itens": [
      { "label": "Estúdio de dados do Azure" },
      { "label": "Ferramenta de dados do Microsoft SQL Server (SSDT)" },
      { "label": "Microsoft SQL Server Management Studio (SSMS)" }
    ],
    "grupos": [
      "Uma ferramenta gráfica para gerenciar bancos de dados SQL Server ou Azure SQL que dá suporte a tarefas de acesso, configuração, gerenciamento e administração.",
      "Um editor leve que pode executar consultas SQL sob demanda e visualizar e salvar resultados como arquivos de texto, JSON ou Microsoft Excel.",
      "Uma ferramenta de desenvolvimento para criar bancos de dados do SQL do Azure, bancos de dados relacionais do Microsoft SQL Server, modelos de dados do SQL Server Analysis Services (SSAS), pacotes do SQL Server Integration Services (SSIS) e relatórios do SQL Server Reporting Services (SSRS)."
    ],
    "respostas": {
      "Uma ferramenta gráfica para gerenciar bancos de dados SQL Server ou Azure SQL que dá suporte a tarefas de acesso, configuração, gerenciamento e administração.": ["Microsoft SQL Server Management Studio (SSMS)"],
      "Um editor leve que pode executar consultas SQL sob demanda e visualizar e salvar resultados como arquivos de texto, JSON ou Microsoft Excel.": ["Estúdio de dados do Azure"],
      "Uma ferramenta de desenvolvimento para criar bancos de dados do SQL do Azure, bancos de dados relacionais do Microsoft SQL Server, modelos de dados do SQL Server Analysis Services (SSAS), pacotes do SQL Server Integration Services (SSIS) e relatórios do SQL Server Reporting Services (SSRS).": ["Ferramenta de dados do Microsoft SQL Server (SSDT)"]
    },
    "explicacao": "O SSMS é ideal para administração de bancos de dados. O Azure Data Studio é uma ferramenta leve para consultas e visualizações. O SSDT é usado para desenvolvimento completo de soluções de BI e bancos relacionais no SQL Server.",
    "link": "https://learn.microsoft.com/pt-br/sql/ssms/sql-server-management-studio-ssms",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre conceitos de bancos de dados relacionais.",
    "afirmacoes": [
      "As tabelas de banco de dados relacional contêm colunas e linhas",
      "Os índices em um banco de dados relacional descrevem os tipos de dados em uma tabela",
      "Uma visualização de banco de dados é uma tabela virtual cujo conteúdo é definido por uma consulta"
    ],
    "respostas": [true, false, true],
    "explicacao": "1 Verdadeiro: Tabelas relacionais organizam dados em linhas e colunas, sendo essa a estrutura fundamental de armazenamento. \n2 Falso: Índices não descrevem tipos de dados; eles são usados para melhorar o desempenho das consultas, facilitando a localização rápida de registros. \n3 Verdadeiro: Uma visualização é uma tabela virtual derivada de uma consulta SQL, que não armazena dados fisicamente, mas fornece uma representação dinâmica com base em outras tabelas.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual ferramenta de linha de comando você pode usar para consultar bancos de dados SQL do Azure?",
    "opcoes": ["sqlcmd", "bcp", "azdata", "CLI do Azure"],
    "resposta": 0,
    "explicacao": "A ferramenta `sqlcmd` permite executar instruções Transact-SQL (T-SQL) diretamente em uma instância do SQL Server ou Azure SQL Database a partir do prompt de comando. Ela é ideal para executar consultas e scripts SQL.\n\nAs demais ferramentas têm funções distintas: `bcp` é usada para exportar/importar dados em massa; `azdata` é voltada para interações com recursos do Azure Data Studio; e `CLI do Azure` é uma ferramenta para gerenciamento geral de recursos do Azure, não sendo específica para consultas SQL.",
    "link": "https://learn.microsoft.com/pt-br/sql/tools/sqlcmd-utility?view=sql-server-ver15",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os recursos de Banco de Dados SQL do Azure.",
    "afirmacoes": [
      "Banco de Dados SQL do Azure inclui um serviço de backup gerenciado.",
      "O Banco de Dados SQL do Azure possui alta disponibilidade integrada.",
      "O Banco de Dados SQL do Azure pode usar o Azure Defender."
    ],
    "respostas": [true, true, true],
    "explicacao": "1 O Banco de Dados SQL do Azure realiza backups automáticos que são gerenciados pela plataforma e podem ser usados para recuperação pontual. \n\n2. Ele fornece alta disponibilidade integrada por meio de replicações automáticas e failover dentro da infraestrutura do Azure. \n\n3. O Azure Defender pode ser habilitado para o Banco de Dados SQL do Azure para fornecer proteção avançada contra ameaças e vulnerabilidades.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/features-comparison",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre ferramentas de consulta a diferentes serviços de banco de dados no Azure.",
    "afirmacoes": [
      "Você pode usar o Azure Data Studio para consultar um cluster de Big Data do Microsoft SQL Server.",
      "Você pode usar o Microsoft SQL Server Management Studio (SSMS) para consultar um data warehouse do Azure Synapse Analytics.",
      "Você pode usar o MySQL Workbench para consultar o Banco de Dados do Azure para bancos de dados MariaDB."
    ],
    "respostas": [true, true, true],
    "explicacao": "1 O Azure Data Studio é compatível com SQL Server Big Data Clusters e permite a execução de consultas, além de visualizações de notebooks. \n\n2 O SSMS pode ser utilizado para conectar-se ao Azure Synapse Analytics e gerenciar objetos de banco de dados, executar consultas e análises. \n\n3 O MySQL Workbench é uma ferramenta comum para administração e consulta a bancos MySQL/MariaDB, incluindo os oferecidos no serviço de Banco de Dados do Azure para MariaDB.",
    "link": "https://learn.microsoft.com/pt-br/sql/tools/overview-sql-tools?view=sql-server-ver17",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre bancos de dados de plataforma como serviço (PaaS) no Azure.",
    "afirmacoes": [
      "As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem alta disponibilidade integrada.",
      "As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem opções de dimensionamento configuráveis.",
      "As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure reduzem a sobrecarga administrativa para o gerenciamento de hardware."
    ],
    "respostas": [true, true, true],
    "explicacao": "1 Os serviços de banco de dados PaaS no Azure, como o Banco de Dados SQL do Azure, incluem alta disponibilidade integrada com redundância e failover automático. \n\n2 Esses serviços permitem configurar opções de dimensionamento vertical e horizontal para atender às necessidades de desempenho. \n\n3 Como o provedor gerencia a infraestrutura, o PaaS elimina a necessidade de o cliente se preocupar com manutenção de hardware, backups, patches e atualizações.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você tem a seguinte consulta SQL: \n\nINSERT INTO dbo.Products (ProductID, ProductName, Price, ProductDescription)\nVALUES (1, 'Clamp', 12.48, 'Workbench clamp');\n\nAssocie cada item ao tipo de objeto SQL correspondente.",
    "pares": [
      {
        "requisito": "dbo.Products",
        "opcoes": [
          "Uma coluna",
          "Um banco de dados",
          "Uma tabela",
          "Um índice"
        ],
        "resposta": 2
      },
      {
        "requisito": "ProductName",
        "opcoes": [
          "Uma coluna",
          "Um banco de dados",
          "Uma tabela",
          "Um índice"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "No SQL, 'dbo.Products' representa uma **tabela** no esquema 'dbo'. 'ProductName' é uma **coluna** dessa tabela. A instrução INSERT está adicionando uma nova linha com valores para essas colunas na tabela 'Products'.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/insert-transact-sql",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os bancos de dados SQL do Azure.",
    "afirmacoes": [
      "Você deve aplicar atualizações do sistema operacional aos bancos de dados SQL do Azure regularmente.",
      "Você precisa de uma assinatura do Microsoft 365 para criar um banco de dados SQL do Azure.",
      "Você pode usar licenças existentes do Microsoft SQL Server para reduzir o custo dos bancos de dados SQL do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "1 **Falso** – O Azure SQL Database é uma oferta PaaS (Platform as a Service), o que significa que a Microsoft gerencia automaticamente o sistema operacional, incluindo atualizações.\n2 **Falso** – Não é necessário ter uma assinatura do Microsoft 365 para usar o Azure SQL Database. Basta uma conta do Azure.\n3 **Verdadeiro** – É possível usar o benefício de Licenciamento Híbrido do Azure (Azure Hybrid Benefit) com licenças existentes do SQL Server para reduzir custos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual afirmação é um exemplo de linguagem de definição de dados (DDL)?",
    "opcoes": [
      "SELECT",
      "JOIN",
      "UPDATE",
      "CREATE"
    ],
    "resposta": 3,
    "explicacao": "A linguagem de definição de dados (DDL) é usada para definir e modificar a estrutura de objetos em um banco de dados, como tabelas e índices. O comando **CREATE** é um exemplo clássico de DDL, pois é usado para criar estruturas de dados. Outros comandos DDL incluem ALTER, DELETE e RENAME.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/statements",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre ferramentas de gerenciamento de banco de dados no Azure.",
    "afirmacoes": [
      "Azure Data Studio pode ser usado para consultar um banco de dados SQL do Azure a partir de um dispositivo que executa macOS.",
      "O Microsoft SQL Server Management Studio (SSMS) permite que os usuários criem e usem notebooks SQL.",
      "O Azure Data Studio pode ser usado para restaurar um banco de dados."
    ],
    "respostas": [true, false, true],
    "explicacao": "1 O Azure Data Studio é compatível com Windows, macOS e Linux, e permite consultar bancos de dados SQL do Azure a partir de dispositivos macOS.\n2. A funcionalidade de notebooks SQL está disponível no Azure Data Studio, não no SSMS.\n3. O Azure Data Studio permite restaurar backups de bancos de dados em formatos compatíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure-data-studio/download-azure-data-studio?tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você está implantando um aplicativo de software como serviço (SaaS) que requer um banco de dados relacional para Processamento de Transações Online (OLTP). Qual serviço do Azure você deve usar para dar suporte ao aplicativo?",
    "opcoes": [
      "Azure Cosmos DB",
      "Azure HDInsight",
      "Azure SQL Database",
      "Azure Synapse Analytics"
    ],
    "resposta": 2,
    "explicacao": "O Azure SQL Database é um serviço de banco de dados relacional totalmente gerenciado que oferece suporte a cargas de trabalho OLTP. Por outro lado, o Azure Cosmos DB e o HDInsight são usados para dados não relacionais, e o Azure Synapse Analytics é voltado para data warehousing e OLAP.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são dois dos benefícios das ofertas de banco de dados relacional de plataforma como serviço (PaaS) no Azure, como o Banco de Dados SQL do Azure? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "A. acesso aos recursos mais recentes",
      "B. controle total sobre os processos de backup e restauração",
      "C. serviços de aprendizado de máquina no banco de dados",
      "D. esforço administrativo reduzido para gerenciar a infraestrutura do servidor"
    ],
    "respostas": [0, 3],
    "explicacao": "As opções A e D estão corretas porque o Azure SQL Database, como um serviço PaaS, garante acesso contínuo aos recursos mais recentes (como melhorias de desempenho e segurança) sem a necessidade de intervenção manual. Além disso, ele reduz significativamente o esforço administrativo, pois a Microsoft gerencia automaticamente tarefas como backups, atualizações de patches e infraestrutura.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre responsabilidades ao usar bancos de dados PaaS no Azure.",
    "afirmacoes": [
      "Se tiver uma base de dados de plataforma como serviço (PaaS) no Azure, será responsável por aplicar atualizações do sistema operativo.",
      "Se você tiver um banco de dados de plataforma como serviço (PaaS) no Azure, os backups serão realizados automaticamente.",
      "Se tiver uma base de dados de plataforma como serviço (PaaS) no Azure, será responsável pela instalação do motor de base de dados."
    ],
    "respostas": [false, true, false],
    "explicacao": "1 Em bancos de dados PaaS no Azure, a Microsoft é responsável por aplicar atualizações do sistema operacional, portanto essa afirmação é falsa. 2. Os serviços PaaS do Azure oferecem backups automáticos por padrão, tornando essa afirmação verdadeira. 3. A instalação do motor de banco de dados é gerenciada pela plataforma Azure em serviços PaaS, então o usuário não é responsável por isso, tornando a afirmação falsa.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/data-storage",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "dragdrop",
    "texto": "Você tem uma tabela chamada Vendas que contém os dados abaixo. Você precisa consultar a tabela para retornar o valor médio de vendas por dia. A saída deve produzir os resultados abaixo. Como você deve completar a consulta? Para responder, arraste os valores apropriados para os alvos corretos. Cada valor pode ser usado uma vez, mais de uma vez ou nunca. ",
    "imagemUrl": "img/3.png",
    "itens": [
      { "label": "CREATE" },
      { "label": "GROUP BY" },
      { "label": "ORDER BY" },
      { "label": "SELECT" }

    ],
    "grupos": [
      "SalesDate, AVG (SalesAmount) \nFROM Sales",
      "SalesDate \nORDER BY SalesDate"
    ],
    "respostas": {
      "SalesDate, AVG (SalesAmount) \nFROM Sales": ["SELECT"],
      "SalesDate \nORDER BY SalesDate": ["GROUP BY"]
    },
    "explicacao": "A cláusula SELECT é usada para escolher as colunas de saída, incluindo agregações como AVG(). GROUP BY é usada para agrupar os dados por uma coluna específica, neste caso SalesDate, para calcular agregados por grupo. ORDER BY organiza os resultados com base em uma ou mais colunas, neste caso, também por SalesDate.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/select-transact-sql",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Ao criar um banco de dados SQL do Azure, qual conta sempre pode se conectar ao banco de dados?",
    "opcoes": [
      "A conta do Azure Active Directory (Azure AD) que criou o banco de dados",
      "A conta de login de administrador do servidor lógico",
      "A conta de administrador do Azure Active Directory (Azure AD)",
      "A conta sa"
    ],
    "resposta": 1,
    "explicacao": "Ao implantar o Azure SQL pela primeira vez, você especifica um login de administrador e uma senha associada. Essa conta administrativa é chamada de administrador do servidor e tem acesso garantido ao banco de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/single-database-create-quickstart",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Qual afirmação é um exemplo de linguagem de definição de dados (DDL)?",
    "opcoes": [
      "SELECT",
      "INSERT",
      "DELETE",
      "DROP"
    ],
    "resposta": 3,
    "explicacao": "As instruções da linguagem de definição de dados (DDL) definem estruturas de dados. Elas são usadas para criar, modificar ou remover estruturas em bancos de dados. Exemplos incluem comandos como CREATE, ALTER, DROP e DISABLE TRIGGER.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/statements",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Uma equipe de desenvolvedores possui computadores que executam Windows 10 e Ubuntu Desktop. Os desenvolvedores precisam se conectar e consultar um banco de dados SQL do Azure em cada um dos seus computadores. Os desenvolvedores exigem recursos de assistência de código, como IntelliSense. O que os desenvolvedores devem usar?",
    "opcoes": [
      "sqlcmd",
      "Microsoft SQL Server Management Studio (SSMS)",
      "Estúdio de dados do Azure",
      "Explorador de Dados do Azure"
    ],
    "resposta": 2,
    "explicacao": "O Azure Data Studio é uma ferramenta de banco de dados multiplataforma para profissionais de dados que usam plataformas de dados locais e em nuvem no Windows, macOS e Linux. Ele oferece uma experiência de editor moderna com IntelliSense, snippets de código, integração de controle de origem e um terminal integrado.",
    "link": "https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-2"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Criptografia transparente de dados (TDE) protege <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "uma coluna para proteger dados em repouso e em trânsito.",
      "consultas e seus resultados para proteger os dados em trânsito.",
      "o banco de dados para proteger os dados em repouso.",
      "o servidor para proteger os dados em repouso."
    ],
    "resposta": 3,
    "explicacao": "A criptografia de dados transparente (TDE) protege o banco de dados criptografando arquivos de dados físicos em repouso. Ela não protege os dados em trânsito nem consultas ou colunas individualmente. TDE ajuda a impedir acesso não autorizado a dados armazenados em disco.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/transparent-data-encryption-tde-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa garantir que os usuários usem a autenticação multifator (MFA) ao se conectarem a um banco de dados SQL do Azure. Que tipo de autenticação você deve usar?",
    "opcoes": [
      "autenticação principal de serviço",
      "Autenticação do Azure Active Directory (Azure AD)",
      "Autenticação SQL",
      "autenticação de certificado"
    ],
    "resposta": 1,
    "explicacao": "A autenticação do Azure Active Directory (Azure AD) é a única entre as listadas que oferece suporte à autenticação multifator (MFA) para conexões com o SQL Database do Azure. Os outros métodos, como autenticação SQL, principal de serviço ou certificado, não são compatíveis com MFA.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/authentication-mfa-ssms-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-2"
  }














];
