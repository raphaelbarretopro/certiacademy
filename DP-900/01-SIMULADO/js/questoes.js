// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [

  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A análise descritiva informa <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "o que é mais provável de ocorrer no futuro.",
      "o que ocorreu no passado.",
      "quais ações você pode executar para afetar os resultados.",
      "por que algo ocorreu no passado."
    ],
    "resposta": 2,
    "explicacao": "A análise descritiva tem como foco relatar eventos que já aconteceram, utilizando dados históricos para descrever padrões ou tendências. Ela não prevê nem explica causas, apenas relata os fatos observados.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/azure-data-fundamentals-explore-data-warehouse-analytics/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre normalização de banco de dados.",
    "afirmacoes": [
      "A normalização envolve a eliminação de relacionamentos entre tabelas de banco de dados.",
      "A normalização de um banco de dados reduz a redundância de dados.",
      "A normalização melhora a integridade dos dados."
    ],
    "respostas": [false, true, true],
    "explicacao": "A primeira afirmação está incorreta, pois a normalização não elimina relacionamentos, mas organiza os dados para reduzir redundâncias. A segunda está correta, já que um dos principais objetivos da normalização é justamente minimizar a duplicidade de dados. A terceira também está correta, pois a normalização melhora a integridade ao garantir que os dados sejam armazenados de forma consistente e organizada.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/explore-relational-data-offerings/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um processo de extração, transformação e carregamento (ETL) requer <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "um esquema correspondente na fonte de dados e no destino de dados.",
      "um armazenamento de dados de destino poderoso o suficiente para transformar dados.",
      "dados que são totalmente processados antes de serem carregados no armazenamento de dados de destino.",
      "que o destino de dados seja um banco de dados relacional."
    ],
    "resposta": 3,
    "explicacao": "No processo ETL, os dados passam por uma transformação antes de serem carregados no destino. Isso significa que os dados devem ser totalmente processados para atender aos requisitos de qualidade e estrutura antes do carregamento, garantindo que estejam prontos para uso analítico ou operacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: No processamento em lote, <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "os dados são sempre inseridos uma linha por vez.",
      "os dados são processados em tempo real.",
      "a latência na entrega dos resultados do processamento de dados é aceitável.",
      "o processamento só pode ser executado em série."
    ],
    "resposta": 3,
    "explicacao": "No processamento em lote, é aceitável haver latência, pois os dados são processados em grandes volumes em momentos programados, e não em tempo real. Isso é comum em processos que não exigem resposta imediata, como geração de relatórios periódicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: A transcrição de arquivos de áudio é um exemplo de Análise <combobox>",
    "opcoes": [
      "Selecione uma resposta",
      "cognitiva",
      "descritiva",
      "preditivo",
      "prescritivo"
    ],
    "resposta": 1,
    "explicacao": "Transcrever significa converter áudio em texto, o que exige o reconhecimento da fala por máquinas, caracterizando uma análise cognitiva. É semelhante ao funcionamento de assistentes virtuais como a Alexa, que utilizam serviços cognitivos para interpretar comandos de voz.",
    "link": "https://azure.microsoft.com/pt-br/services/cognitive-services/speech-services/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os tipos de análise que podem ser usados para responder às questões de negócios.",
    "itens": [
      { "label": "Cognitivo" },
      { "label": "Diagnóstico" },
      { "label": "Descritivo" },
      { "label": "Preditivo" },
      { "label": "Prescritivo" }
    ],
    "grupos": [
      "Por que as vendas aumentaram no mês passado?",
      "Como aloco meu orçamento para comprar diferentes itens de estoque?",
      "Quais pessoas são mencionadas nos documentos comerciais de uma empresa?"
    ],
    "respostas": {
      "Por que as vendas aumentaram no mês passado?": ["Diagnóstico"],
      "Como aloco meu orçamento para comprar diferentes itens de estoque?": ["Preditivo"],
      "Quais pessoas são mencionadas nos documentos comerciais de uma empresa?": ["Descritivo"]
    },
    "explicacao": "A análise diagnóstica identifica as causas de eventos passados, como o aumento das vendas. A preditiva auxilia no planejamento futuro com base em dados históricos. A descritiva relata dados observados, como nomes mencionados em documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/analysis-visualizations-reporting",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você tem o seguinte documento JSON. Classifique cada elemento com base em sua estrutura dentro do JSON.",
    "imagemUrl": "img/1.png",
    "pares": [
      {
        "requisito": "O cliente é",
        "opcoes": [
          "uma matriz aninhada",
          "um objeto aninhado",
          "um objeto raiz"
        ],
        "resposta": 2
      },
      {
        "requisito": "O endereço é",
        "opcoes": [
          "uma matriz aninhada",
          "um objeto aninhado",
          "um objeto raiz"
        ],
        "resposta": 1
      },
      {
        "requisito": "A mídia social é",
        "opcoes": [
          "uma matriz aninhada",
          "um objeto aninhado",
          "um objeto raiz"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "O objeto 'cliente' está na raiz do JSON, por isso é o objeto raiz. O campo 'endereço' está dentro de 'cliente', sendo um objeto aninhado. Já 'mídia social' é um array (matriz) de objetos aninhados, portanto é uma matriz aninhada.",
    "link": "https://www.w3schools.com/js/js_json_objects.asp",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está revisando o modelo de dados mostrado na exposição a seguir. Use os menus suspensos para selecionar a opção de resposta que completa cada afirmação com base nas informações apresentadas no gráfico.",
    "imagemUrl": "img/2.png",
    "pares": [
      {
        "requisito": "O modelo de dados é uma",
        "opcoes": [
          "modelo transacional",
          "esquema em estrela",
          "esquema de floco de neve"
        ],
        "resposta": 1
      },
      {
        "requisito": "Cliente é uma tabela",
        "opcoes": [
          "fato",
          "dimensão",
          "ponte"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "O modelo apresentado segue a estrutura de um esquema em estrela, no qual a tabela de fatos (Vendas) se conecta diretamente a múltiplas tabelas de dimensões (Cliente, Produto, Vendedor, Armazém). A tabela 'Cliente' é considerada uma tabela de dimensão porque fornece atributos descritivos que podem ser usados para análise.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/guidance/star-schema",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Para completar a frase, selecione a opção apropriada na área de resposta.",
    "pares": [
      {
        "requisito": "O mecanismo de processamento massivamente paralelo (MPP) do Azure Synapse Analytics",
        "opcoes": [
          "distribui o processamento entre nós de computação.",
          "distribui o processamento entre nós de controle.",
          "redireciona conexões de clientes entre nós de computação.",
          "redireciona conexões de clientes entre nós de controle."
        ],
        "resposta": 0
      }
    ],
    "explicacao": "O Mecanismo de Processamento Massivamente Paralelo (MPP) do Azure Synapse distribui a carga de trabalho entre múltiplos nós de computação, permitindo a execução paralela de grandes volumes de dados, o que melhora a performance e escalabilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/massively-parallel-processing-mpp-architecture",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Para completar a frase, selecione a opção apropriada.",
    "pares": [
      {
        "requisito": "Um banco de dados relacional é apropriado para cenários que envolvem um grande volume de",
        "opcoes": [
          "mudanças nos relacionamentos entre entidades",
          "gravações distribuídas geograficamente",
          "gravações transacionais",
          "escreve que tem estruturas de dados variadas"
        ],
        "resposta": 2
      }
    ],
    "explicacao": "Os bancos de dados relacionais são apropriados para gravações transacionais, pois oferecem suporte a transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade), integridade de dados e consistência em cenários estruturados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o envio de dados em cargas de trabalho de processamento em lote.",
    "afirmacoes": [
      "O processamento em lote pode enviar dados para um armazenamento de arquivos.",
      "O processamento em lote pode enviar dados para um banco de dados relacional.",
      "O processamento em lote pode enviar dados para um banco de dados NoSQL."
    ],
    "respostas": [true, true, true],
    "explicacao": "1️⃣ O processamento em lote pode sim enviar dados para armazenamentos como Azure Data Lake ou Blob Storage, que são comuns para arquivamento e análises posteriores.\n2️⃣ Também é possível integrar dados processados em lote com bancos relacionais como o Azure SQL Database para persistência e consulta estruturada.\n3️⃣ Bancos NoSQL como Azure Cosmos DB também são destinos viáveis para processamento em lote, especialmente quando se trabalha com dados semi-estruturados ou de alta escala.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/batch-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Sua empresa planeja carregar dados de um sistema de gerenciamento de relacionamento com o cliente (CRM) para um data warehouse usando um processo de extração, carregamento e transformação (ELT). Onde ocorre o processamento de dados para cada etapa do processo ELT? Relacione cada etapa ao local apropriado.",
    "itens": [
      { "label": "O sistema CRM" },
      { "label": "O Data warehouse" },
      { "label": "O Data warehouse" }
    ],
    "grupos": ["Extrair", "Carregar", "Transformar"],
    "respostas": {
      "Extrair": ["O sistema CRM"],
      "Carregar": ["O Data warehouse"],
      "Transformar": ["O Data warehouse"]
    },
    "explicacao": "No processo ELT (Extração, Carregamento e Transformação), os dados são extraídos do sistema de origem (como o CRM), carregados diretamente no Data warehouse e, em seguida, transformados dentro do próprio armazém. Isso difere do processo ETL, onde a transformação ocorre antes da carga.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Uma visualização que mostra a matrícula atual de estudantes de uma universidade versus a capacidade máxima é um exemplo de <combobox> análise.",
    "opcoes": ["Escolha uma opção", "cognitivo", "preditivo", "descritivo", "prescritivo"],
    "resposta": 3,
    "explicacao": "A análise descritiva tem como foco explicar o que está acontecendo ou o que aconteceu, por meio da apresentação de dados históricos ou atuais. Mostrar o número atual de matrículas versus a capacidade máxima é uma forma de resumir a situação presente, sem prever o futuro ou recomendar ações, caracterizando uma análise descritiva.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/data-analytics-microsoft/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os tipos de visualizações com as descrições apropriadas. Arraste cada tipo de visualização até a descrição correspondente.",
    "itens": [
      { "label": "Influenciador principal" },
      { "label": "Dispersão" },
      { "label": "Mapa de árvore" }
    ],
    "grupos": [
      "Um gráfico que exibe os principais contribuintes de um resultado ou valor selecionado.",
      "Um gráfico que mostra a relação entre dois valores numéricos.",
      "Um gráfico de retângulos coloridos e aninhados que exibe pontos de dados individuais representados pelo tamanho e pela cor de um retângulo relativo."
    ],
    "respostas": {
      "Um gráfico que exibe os principais contribuintes de um resultado ou valor selecionado.": ["Influenciador principal"],
      "Um gráfico que mostra a relação entre dois valores numéricos.": ["Dispersão"],
      "Um gráfico de retângulos coloridos e aninhados que exibe pontos de dados individuais representados pelo tamanho e pela cor de um retângulo relativo.": ["Mapa de árvore"]
    },
    "explicacao": "Gráficos de influenciador principal ajudam a identificar fatores que mais influenciam um resultado. Gráficos de dispersão são usados para analisar relações entre variáveis numéricas. Mapas de árvore exibem hierarquias com retângulos proporcionais ao valor dos dados.",
    "link": "https://learn.microsoft.com/pt-br/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "multipla",
    "texto": "Você precisa criar uma conta de armazenamento do Azure. Os dados da conta devem ser replicados automaticamente fora da região do Azure. Quais são os dois tipos de replicação que você pode usar para a conta de armazenamento? Cada resposta correta apresenta uma resposta completa da solução.",
    "opcoes": [
      "Armazenamento com redundância de zona (ZRS)",
      "Armazenamento com redundância geográfica com acesso de leitura (RA-GRS)",
      "Armazenamento com redundância local (LRS)",
      "Armazenamento com redundância geográfica (GRS)"
    ],
    "respostas": [1, 3],
    "explicacao": "As opções corretas são RA-GRS e GRS porque ambas replicam os dados para uma região secundária, atendendo ao requisito de replicação fora da região do Azure. O RA-GRS permite acesso de leitura à região secundária, enquanto o GRS garante apenas a replicação, sem acesso até ocorrer failover. LRS e ZRS não replicam os dados para fora da região, portanto não atendem ao requisito.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy#redundancy-in-a-secondary-region",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure exigem menos esforço de instalação e configuração do que as ofertas de banco de dados de infraestrutura como serviço (IaaS).",
      "As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem aos usuários finais a capacidade de controlar e atualizar a versão do sistema operacional.",
      "Todas as ofertas de banco de dados de plataforma como serviço (PaaS) relacionais e não relacionais no Azure podem ser pausadas para reduzir custos."
    ],
    "respostas": [true, false, false],
    "explicacao": "1) Correto: O modelo PaaS abstrai o gerenciamento da infraestrutura, reduzindo o esforço necessário para instalação e configuração. 2) Incorreto: No PaaS, o gerenciamento do sistema operacional é responsabilidade do provedor, não do usuário final. 3) Incorreto: Nem todas as ofertas de banco de dados PaaS no Azure oferecem a capacidade de pausar instâncias — essa opção depende do tipo específico de serviço.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/paa-s-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Qual afirmação é um exemplo de linguagem de manipulação de dados (DML)?",
    "opcoes": ["REVOGAR", "DESATIVAR", "INSERIR", "CONCESSÃO"],
    "resposta": 2,
    "explicacao": "A Linguagem de Manipulação de Dados (DML) é usada para manipular dados armazenados em tabelas de banco de dados. Comandos como INSERT, UPDATE, DELETE e SELECT são exemplos de DML, pois atuam diretamente sobre os dados. O comando 'INSERIR' (INSERT) adiciona novas linhas à tabela, o que o caracteriza como DML. Já os comandos como REVOKE e GRANT pertencem à linguagem DCL (Controle de Dados), e DESATIVAR não é um comando SQL padrão.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/statements",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Você tem uma consulta SQL que combina dados do cliente e dados do pedido. A consulta inclui colunas calculadas. Você precisa criar um objeto de banco de dados que permita que outros usuários executem novamente a mesma consulta SQL. O que você deve criar?",
    "opcoes": ["um índice", "uma visão", "uma função escalar", "uma tabela"],
    "resposta": 1,
    "explicacao": "Uma visão (view) é uma tabela virtual cujo conteúdo é definido por uma consulta SQL. Ela permite reutilização da lógica de consulta, facilitando o acesso e a consistência dos dados. Outros usuários podem consultar a visão como se fosse uma tabela, executando novamente a mesma lógica definida na consulta original.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/views/views",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um armazenamento de dados de chave/valor é otimizado para <combobox>",
    "opcoes": ["Escolha uma opção", "impor restrições", "junções de mesa", "pesquisas simples", "transações"],
    "resposta": 3,
    "explicacao": "Armazenamentos de chave/valor são otimizados para operações de leitura simples e rápidas, normalmente baseadas em uma chave única. Esses armazenamentos, como o Azure Table Storage ou o Azure Cosmos DB (modo chave/valor), são projetados para alta escalabilidade e baixa latência, o que os torna ideais para pesquisas simples. Eles não são adequados para junções complexas, transações ou aplicação de restrições de integridade referencial.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os tipos de dados aos serviços de dados apropriados do Azure.",
    "itens": [
      { "label": "Arquivos de imagem" },
      { "label": "Pares chave/valor" },
      { "label": "Relacionamentos entre funcionários" }
    ],
    "grupos": [
      "Armazenamento de Blobs do Azure",
      "API Gremlin do Azure Cosmos DB",
      "Armazenamento de Tabela do Azure"
    ],
    "respostas": {
      "Armazenamento de Blobs do Azure": ["Arquivos de imagem"],
      "API Gremlin do Azure Cosmos DB": ["Relacionamentos entre funcionários"],
      "Armazenamento de Tabela do Azure": ["Pares chave/valor"]
    },
    "explicacao": "O Armazenamento de Blobs do Azure é ideal para arquivos não estruturados, como imagens. A API Gremlin do Azure Cosmos DB é usada para dados em grafos, como relacionamentos complexos entre entidades (ex: funcionários). O Armazenamento de Tabela do Azure é otimizado para dados NoSQL estruturados como pares chave/valor.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os termos do Azure Data Lake Storage Gen2 com os níveis apropriados na hierarquia.",
    "itens": [
      { "label": "|__ Conta de armazenamento do Azure" },
      { "label": "|__ Pastas" },
      { "label": "|__ Recipiente" },
      { "label": "|__ Arquivos" }
    ],
    "grupos": [
      "Nível 1",
      "Nível 2",
      "Nível 3",
      "Nível 4"
    ],
    "respostas": {
      "Nível 1": ["|__ Conta de armazenamento do Azure"],
      "Nível 2": ["|__ Recipiente"],
      "Nível 3": ["|__ Pastas"],
      "Nível 4": ["|__ Arquivos"]
    },
    "explicacao": "No Azure Data Lake Storage Gen2, a hierarquia segue esta estrutura: o grupo de recursos contém a conta de armazenamento, que contém recipientes, que por sua vez contêm os arquivos organizados em pastas. Isso facilita o gerenciamento granular de permissões e organização de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são as duas características do processamento de dados em tempo real? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Os dados são processados periodicamente",
      "Baixa latência é esperada",
      "Alta latência é aceitável",
      "Os dados são processados à medida que são criados"
    ],
    "respostas": [1, 3],
    "explicacao": "O processamento de dados em tempo real envolve a captura e o processamento imediato dos dados assim que são gerados. Isso exige baixa latência para que os dados possam ser utilizados quase instantaneamente, como em dashboards ao vivo ou alertas em tempo real. Portanto, as opções corretas são 'Baixa latência é esperada' e 'Os dados são processados à medida que são criados'.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/big-data/real-time-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os componentes do Azure Data Factory com as descrições apropriadas.",
    "itens": [
      { "label": "Conjunto de dados" },
      { "label": "Serviço vinculado" },
      { "label": "Pipeline" }
    ],
    "grupos": [
      "Uma representação de estruturas de dados em armazenamentos de dados",
      "As informações usadas para se conectar a recursos externos",
      "Um agrupamento lógico de atividades que executa uma unidade de trabalho e pode ser agendado"
    ],
    "respostas": {
      "Uma representação de estruturas de dados em armazenamentos de dados": ["Conjunto de dados"],
      "As informações usadas para se conectar a recursos externos": ["Serviço vinculado"],
      "Um agrupamento lógico de atividades que executa uma unidade de trabalho e pode ser agendado": ["Pipeline"]
    },
    "explicacao": "No Azure Data Factory, um 'Conjunto de dados' define o esquema dos dados utilizados, o 'Serviço vinculado' contém as credenciais e configurações de conexão com os recursos externos, e o 'Gasoduto' organiza e orquestra as atividades de ETL/ELT, sendo executável e agendável.",
    "link": "https://learn.microsoft.com/pt-br/azure/data-factory/concepts-pipelines-activities",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os tipos de cargas de trabalho com os cenários apropriados no contexto de data warehouse no Azure.",
    "itens": [
      { "label": "Lote" },
      { "label": "Transmissão" }
    ],
    "grupos": [
      "Os dados de um catálogo de produtos serão carregados a cada 12 horas em um data warehouse.",
      "Milhares de conjuntos de dados por segundo para compras online serão carregados em um data warehouse em tempo real.",
      "As atualizações nos dados de inventário serão carregadas em um data warehouse a cada 1 milhão de transações."
    ],
    "respostas": {
      "Os dados de um catálogo de produtos serão carregados a cada 12 horas em um data warehouse.": ["Lote"],
      "Milhares de conjuntos de dados por segundo para compras online serão carregados em um data warehouse em tempo real.": ["Transmissão"],
      "As atualizações nos dados de inventário serão carregadas em um data warehouse a cada 1 milhão de transações.": ["Lote"]
    },
    "explicacao": "Carga em lote é usada para dados processados em intervalos periódicos, como catálogos e inventários. Já a transmissão (streaming) é usada quando dados em tempo real, como compras online, precisam ser ingeridos continuamente no sistema.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/stream-processing",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Sua empresa planeja carregar dados de um sistema de CRM para um data warehouse usando o processo de extração, carregamento e transformação (ELT). Associe cada etapa do processo ELT ao local correto onde ela ocorre.",
    "itens": [
      { "label": "O sistema CRM" },
      { "label": "O Data warehouse" },
      { "label": "Uma ferramenta autônoma de análise de dados" }
    ],
    "grupos": [
      "Extrair",
      "Carregar",
      "Transformar"
    ],
    "respostas": {
      "Extrair": ["O sistema CRM"],
      "Carregar": ["O Data warehouse"],
      "Transformar": ["O Data warehouse"]
    },
    "explicacao": "No processo ELT, os dados são extraídos da fonte original (neste caso, o sistema CRM), carregados diretamente em um Data warehouse, e a transformação dos dados ocorre dentro desse armazém utilizando seus recursos computacionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa relatou recentemente as vendas do terceiro trimestre. Com base na tendência do gráfico apresentado, qual tipo de análise está sendo utilizado para representar os dados do quarto trimestre?",
    "imagemUrl": "img/3.png",
    "opcoes": [
      "Preditivo",
      "Prescritivo",
      "Descritivo",
      "Diagnóstico"
    ],
    "resposta": 0,
    "explicacao": "A análise apresentada no gráfico para o quarto trimestre é baseada em projeções futuras com base nos dados anteriores, o que caracteriza a análise preditiva. Essa abordagem utiliza modelos estatísticos e de aprendizado de máquina para prever resultados futuros com base em padrões históricos.",
    "link": "https://learn.microsoft.com/pt-br/training/powerplatform/power-bi",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Qual afirmação é um exemplo de linguagem de manipulação de dados (DML)?",
    "opcoes": [
      "revoke",
      "Disable",
      "Create",
      "Update"
    ],
    "resposta": 3,
    "explicacao": "A linguagem de manipulação de dados (DML) é usada para gerenciar dados dentro das tabelas de um banco de dados. Instruções como SELECT, INSERT, UPDATE e DELETE fazem parte da DML. A opção 'Atualização' representa a instrução UPDATE, portanto é um exemplo de DML.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/statements?view=sql-server-ver16",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "A criação de texto de legenda oculta para arquivos de áudio é um exemplo de análise <combobox>",
    "opcoes": ["Escolha uma opção", "descritiva", "preditiva", "cognitiva", "prescritiva"],
    "resposta": 3,
    "explicacao": "A criação de legendas a partir de áudio utiliza tecnologias como reconhecimento de fala e compreensão de linguagem natural, que são características da análise cognitiva. Os serviços cognitivos da Microsoft Azure oferecem esse tipo de funcionalidade, como o Speech to Text.",
    "link": "https://learn.microsoft.com/pt-br/azure/cognitive-services/speech-service/speech-to-text",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Uma visualização que ilustra a matrícula atual de estudantes de uma universidade por departamento é um exemplo de análise <combobox>",
    "opcoes": ["Escolha uma opção", "cognitiva", "descritiva", "preditiva", "prescritiva"],
    "resposta": 2,
    "explicacao": "A análise descritiva é usada para resumir e interpretar dados históricos ou atuais, como o número atual de matrículas de estudantes por departamento. Ela responde à pergunta 'o que aconteceu?' ou 'o que está acontecendo agora?'.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/data-analytics-microsoft/",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Um processo de extração, carregamento e transformação (ELT) requer <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "um mecanismo de transformação separado.",
      "um armazenamento de dados de destino poderoso o suficiente para transformar dados.",
      "dados que são totalmente processados antes de serem carregados no armazenamento de dados de destino.",
      "um pipeline de dados que inclui um mecanismo de transformação."
    ],
    "resposta": 2,
    "explicacao": "Em ELT, os dados são carregados diretamente no armazenamento de destino, e a transformação é feita nesse próprio local. Portanto, requer um armazenamento de dados de destino com capacidade computacional suficiente para transformar dados após o carregamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa criar um recurso do Azure para armazenar dados no Armazenamento de Tabela do Azure. Qual comando você deve executar?",
    "opcoes": [
      "criação de compartilhamento de armazenamento az",
      "criação de conta de armazenamento az",
      "az cosmosdb criar",
      "criação de contêiner de armazenamento az"
    ],
    "resposta": 1,
    "explicacao": "Para utilizar o Armazenamento de Tabela do Azure, é necessário primeiro criar uma conta de armazenamento. Isso é feito com o comando de criação de conta de armazenamento via CLI, o que possibilita a criação de tabelas posteriormente.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/tables/table-storage-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "O banco de dados do Azure Cosmos <combobox> API permite o uso de instruções SELECT para recuperar documentos do Azure Cosmos DB.",
    "opcoes": ["Escolha uma opção", "Gremlin", "MongoDB", "Núcleo (SQL)", "Tabela"],
    "resposta": 3,
    "explicacao": "A API SQL do Azure Cosmos DB (Núcleo SQL) permite consultas usando instruções SELECT com sintaxe semelhante ao SQL, sendo ideal para recuperação estruturada de documentos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/choose-api",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa modificar uma visualização em um banco de dados relacional adicionando uma nova coluna. Qual afirmação você deve usar?",
    "opcoes": ["MERGE", "ALTER", "INSERT", "UPDATE"],
    "resposta": 1,
    "explicacao": "O comando 'ALTERAR' (ALTER) faz parte da linguagem DDL (Data Definition Language) e é utilizado para modificar a estrutura de objetos do banco de dados, como adicionar uma coluna a uma visualização existente.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/alter-view-transact-sql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre os processos ETL e ELT.",
    "afirmacoes": [
      "Extrair, transformar e carregar (ETL) pode reduzir a transferência de dados confidenciais para sistemas de destino.",
      "Extrair, carregar e transformar (ELT) transforma dados usando um recurso de computação independente do sistema de origem e do sistema de destino.",
      "Extrair, carregar e transformar (ELT) minimiza o tempo necessário para copiar grandes volumes de dados para sistemas de destino."
    ],
    "respostas": [true, false, true],
    "explicacao": "A primeira afirmação é verdadeira porque, no processo ETL, os dados podem ser transformados no sistema de origem, reduzindo a exposição no destino. A segunda afirmação é falsa porque no ELT a transformação ocorre geralmente dentro do sistema de destino, e não em um recurso independente. A terceira é verdadeira, pois o ELT permite transferir dados rapidamente antes da transformação, o que é mais eficiente para grandes volumes.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/etl",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "comboboxs",
    "texto": "Você está planejando implantar um banco de dados PostgreSQL no Azure. Associe cada opção de implantação ao modelo de hospedagem correspondente.",
    "pares": [
      {
        "requisito": "PostgreSQL em VMs do Azure",
        "opcoes": [
          "Infraestrutura como serviço (IaaS)",
          "Plataforma como serviço (PaaS)",
          "Software como serviço (SaaS)"
        ],
        "resposta": 0
      },
      {
        "requisito": "Banco de dados do Azure para PostgreSQL",
        "opcoes": [
          "Infraestrutura como serviço (IaaS)",
          "Plataforma como serviço (PaaS)",
          "Software como serviço (SaaS)"
        ],
        "resposta": 1
      }
    ],
    "explicacao": "Executar PostgreSQL em VMs do Azure é um exemplo clássico de Infraestrutura como Serviço (IaaS), onde o usuário gerencia o sistema operacional e o banco de dados. Já o Banco de Dados do Azure para PostgreSQL é um serviço gerenciado, o que caracteriza uma Plataforma como Serviço (PaaS), com recursos de escalabilidade, backup e alta disponibilidade fornecidos automaticamente pelo Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/postgresql/flexible-server/overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> apoiar nativamente a análise de relacionamentos entre entidades.",
    "opcoes": [
      "Selecione uma Opção",
      "Bancos de dados de família de colunas",
      "Bancos de dados de documentos",
      "Bancos de dados gráficos",
      "Lojas de valores-chave"
    ],
    "resposta": 3,
    "explicacao": "Bancos de dados gráficos são projetados especificamente para armazenar e consultar relacionamentos complexos entre entidades. Eles utilizam estruturas como vértices e arestas para representar dados conectados, facilitando análises como redes sociais, recomendações e detecção de fraudes.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Qual solução de armazenamento do Azure fornece suporte nativo para listas de controle de acesso (ACLs) compatíveis com POSIX?",
    "opcoes": [
      "Armazenamento de Tabelas do Azure",
      "Azure Data Lake Storage",
      "Armazenamento de fila do Azure",
      "Arquivos do Azure"
    ],
    "resposta": 1,
    "explicacao": "O Armazenamento do Lago de Dados do Azure (Azure Data Lake Storage Gen2) oferece suporte nativo para listas de controle de acesso (ACLs) no estilo POSIX. Isso permite definir permissões detalhadas em diretórios e arquivos, o que é essencial para ambientes que exigem controle rigoroso de acesso baseado em funções.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-access-control",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Os dados relacionais são armazenados em <combobox>",
    "opcoes": [
      "Selecione uma opção",
      "um sistema de arquivos como dados não estruturados.",
      "uma estrutura hierárquica de pastas.",
      "uma forma tabular de linhas e colunas.",
      "arquivos de valores separados por vírgula (CSV)."
    ],
    "resposta": 3,
    "explicacao": "Os dados relacionais são organizados em tabelas compostas por linhas e colunas, o que permite consultas eficientes por meio de SQL. Este modelo tabular facilita a definição de esquemas rígidos e relacionamentos entre dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/relational-data/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> classifica fisicamente os dados em uma tabela com base nos valores de uma coluna especificada.",
    "opcoes": [
      "Selecione uma opção",
      "Uma visão",
      "Um índice clusterizado",
      "Um procedimento armazenado",
      "Um índice não clusterizado"
    ],
    "resposta": 2,
    "explicacao": "Um índice clusterizado (ou clustered index) determina a ordem física dos dados em uma tabela. Ele reordena os registros da tabela para coincidir com a ordem do índice, tornando a busca por dados mais eficiente quando se usa a coluna do índice.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um bloco de código executado em um banco de dados é chamado <combobox>",
    "opcoes": [
      "Selecione uma opção",
      "uma Stored procedure.",
      "uma tabela.",
      "uma visão.",
      "um índice."
    ],
    "resposta": 1,
    "explicacao": "Um procedimento armazenado (ou stored procedure) é um conjunto de comandos SQL que pode ser salvo e reutilizado no banco de dados. Ele permite automatizar operações como inserções, atualizações ou consultas complexas.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/stored-procedures/stored-procedures-database-engine",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os tipos de análise com os cenários apresentados para entender como diferentes abordagens são usadas para responder questões de negócios.",
    "itens": [
      { "label": "Cognitivo" },
      { "label": "Diagnóstico" },
      { "label": "Descritivo" },
      { "label": "Preditivo" },
      { "label": "Prescritivo" }
    ],
    "grupos": [
      "Por que as vendas aumentaram no mês passado?",
      "Forneça orientação específica sobre como alocar o orçamento atual para comprar diferentes itens de estoque.",
      "Detecte imagens do logotipo da empresa incluídas em documentos PDF"
    ],
    "respostas": {
      "Por que as vendas aumentaram no mês passado?": ["Diagnóstico"],
      "Forneça orientação específica sobre como alocar o orçamento atual para comprar diferentes itens de estoque.": ["Prescritivo"],
      "Detecte imagens do logotipo da empresa incluídas em documentos PDF": ["Cognitivo"]
    },
    "explicacao": "A análise diagnóstica identifica causas de eventos passados. A análise prescritiva fornece recomendações com base nos dados disponíveis. A análise cognitiva aplica inteligência artificial para interpretar conteúdo complexo como imagens ou linguagem natural.",
    "link": "https://learn.microsoft.com/pt-br/training/paths/data-analytics-microsoft/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> apresenta conteúdo definido por uma consulta.",
    "opcoes": [
      "Escolha uma opção",
      "Um monte",
      "Um procedimento armazenado",
      "Uma visão",
      "Um índice"
    ],
    "resposta": 3,
    "explicacao": "Uma visão (ou *view*) é um objeto de banco de dados que apresenta dados resultantes de uma instrução SELECT, ou seja, conteúdo definido por uma consulta. Ela é útil para abstração e segurança ao fornecer uma forma simplificada ou controlada de acessar dados.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/views/views?view=sql-server-ver15",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-1"
  },
  {
    "tipo": "unica",
    "texto": "Que tipo de banco de dados é o Banco de Dados do Azure para PostgreSQL?",
    "opcoes": [
      "Plataforma como serviço (PaaS)",
      "Infraestrutura como serviço (IaaS)",
      "Microsoft SQL Server",
      "No local"
    ],
    "resposta": 0,
    "explicacao": "O Banco de Dados do Azure para PostgreSQL é oferecido como um serviço de plataforma (PaaS). Isso significa que a Microsoft gerencia a infraestrutura, backups, atualizações e segurança, permitindo que os usuários foquem apenas no gerenciamento dos dados e desenvolvimento de aplicações.",
    "link": "https://learn.microsoft.com/pt-br/azure/postgresql/overview-postgres-choose-server-options",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-1"
  }













];
