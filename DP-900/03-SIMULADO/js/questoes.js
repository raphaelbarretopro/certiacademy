// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado DP-900
// ==========================================

export const questoes = [



  {
    "tipo": "unica",
    "texto": "Qual é a vantagem de hospedar um banco de dados na instância gerenciada do Azure SQL em comparação com um banco de dados SQL do Azure?",
    "opcoes": [
      "Alta disponibilidade integrada",
      "Suporte nativo para consultas e transações entre bancos de dados",
      "Backups automáticos iniciados pelo sistema",
      "Suporte para criptografia em repouso"
    ],
    "resposta": 1,
    "explicacao": "A instância gerenciada do Azure SQL oferece suporte nativo para consultas e transações entre bancos de dados, o que não é possível em bancos de dados únicos do SQL do Azure. Essa funcionalidade é especialmente útil em cenários que exigem comunicação entre múltiplos bancos de dados, como integração de sistemas ou consolidação de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/features-comparison",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Por padrão, cada banco de dados SQL do Azure é protegido por <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "um grupo de segurança de rede (NSG).",
      "um firewall em nível de servidor.",
      "Firewall do Azure.",
      "Porta frontal do Azure."
    ],
    "resposta": 2,
    "explicacao": "Quando um novo servidor de Banco de Dados SQL do Azure é criado, ele é automaticamente protegido por um firewall em nível de servidor, que impede todo o acesso ao ponto de extremidade público até que regras específicas de firewall sejam configuradas. Isso garante uma segurança básica por padrão para novos recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/network-access-controls-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa projetar e modelar um banco de dados usando uma ferramenta gráfica que ofereça suporte ao desenvolvimento de banco de dados offline orientado a projetos. O que você deve usar?",
    "opcoes": [
      "Ferramentas de dados do Microsoft SQL Server (SSDT)",
      "Microsoft SQL Server Management Studio (SSMS)",
      "Blocos de dados do Azure",
      "Estúdio de Dados Azure"
    ],
    "resposta": 0,
    "explicacao": "O SQL Server Data Tools (SSDT) é uma ferramenta moderna de desenvolvimento usada para criar bancos de dados relacionais do SQL Server, bancos de dados em Azure SQL, modelos de dados do Analysis Services (AS), pacotes do Integration Services (IS) e relatórios do Reporting Services (RS). Ele permite projetar e implantar conteúdo de banco de dados com a mesma facilidade de um aplicativo no Visual Studio.",
    "link": "https://docs.microsoft.com/en-us/sql/ssdt/project-oriented-offline-database-development?view=sql-server-ver15",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os componentes de segurança com os cenários apropriados.",
    "itens": [
      { "label": "Autenticação" },
      { "label": "Firewall" },
      { "label": "Criptografia" }
    ],
    "grupos": [
      "Impede o acesso a um banco de dados SQL do Azure de outra rede.",
      "Dá suporte a entradas do Azure Active Directory (Azure AD) em um banco de dados SQL do Azure.",
      "Certifique-se de que os dados confidenciais nunca apareçam como texto simples em um banco de dados SQL do Azure."
    ],
    "respostas": {
      "Impede o acesso a um banco de dados SQL do Azure de outra rede.": ["Firewall"],
      "Dá suporte a entradas do Azure Active Directory (Azure AD) em um banco de dados SQL do Azure.": ["Autenticação"],
      "Certifique-se de que os dados confidenciais nunca apareçam como texto simples em um banco de dados SQL do Azure.": ["Criptografia"]
    },
    "explicacao": "Firewall restringe o acesso ao banco de dados com base em regras de rede e IP. Autenticação é utilizada para verificar se o usuário tem permissão para acessar o banco de dados, incluindo autenticação via Azure AD. Criptografia garante que dados sensíveis sejam protegidos mesmo que acessados indevidamente, impedindo sua visualização em texto simples.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/security-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo transacional que armazena dados em uma instância gerenciada do Azure SQL. Quando você deve implementar uma réplica de banco de dados somente leitura?",
    "opcoes": [
      "Você precisa gerar relatórios sem afetar a carga de trabalho transacional.",
      "Você precisa auditar o aplicativo transacional.",
      "Você precisa implementar alta disponibilidade no caso de uma interrupção regional.",
      "Você precisa melhorar o objetivo do ponto de recuperação (RPO)."
    ],
    "resposta": 0,
    "explicacao": "Você deve implementar uma réplica de banco de dados somente leitura quando precisar gerar relatórios sem afetar a carga de trabalho transacional. Réplicas somente leitura descarregam cargas de trabalho de consulta, transferindo essas cargas para instâncias secundárias e melhorando o desempenho do ambiente transacional principal.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/read-scale-out",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Um banco de dados relacional deve ser usado quando <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "um esquema dinâmico é necessário.",
      "os dados serão armazenados como pares chave/valor.",
      "armazenar imagens e vídeos grandes.",
      "são necessárias fortes garantias de consistência."
    ],
    "resposta": 4,
    "explicacao": "Um banco de dados relacional é ideal quando são necessárias fortes garantias de consistência, pois ele segue o modelo ACID (Atomicidade, Consistência, Isolamento e Durabilidade), garantindo integridade e confiabilidade dos dados mesmo em cenários transacionais complexos.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Usos de dados relacionais utilizam <combobox> para impor relacionamentos entre tabelas diferentes.",
    "opcoes": [
      "Selecione uma resposta",
      "coleções",
      "colunas",
      "chaves",
      "partições"
    ],
    "resposta": 3,
    "explicacao": "Em bancos de dados relacionais, 'chaves' são usadas para impor relacionamentos entre tabelas, por meio de chaves primárias e estrangeiras. Elas garantem a integridade referencial dos dados.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/tables/primary-and-foreign-key-constraints",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "<combobox> é uma tabela virtual que contém conteúdo definido por uma consulta.",
    "opcoes": [
      "Selecione uma resposta",
      "Um heap",
      "Um procedimento armazenado",
      "Uma visão",
      "Um índice"
    ],
    "resposta": 3,
    "explicacao": "Uma visão (view) em bancos de dados relacionais é uma tabela virtual cujo conteúdo é definido por uma instrução SELECT. Ela permite abstrair e simplificar o acesso a dados complexos.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/views/views",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "multipla",
    "texto": "Quais são os três requisitos que devem ser atendidos para consultar a tabela Produtos em um banco de dados SQL do Azure na Internet?",
    "opcoes": [
      "Você deve receber a função de Leitor para o grupo de recursos que contém o banco de dados.",
      "Você deve ter acesso SELECT à tabela Produtos.",
      "Você deve ter um usuário no banco de dados.",
      "Você deve receber a função de Colaborador para o grupo de recursos que contém o banco de dados.",
      "Seu endereço IP deve ter permissão para se conectar ao banco de dados."
    ],
    "respostas": [1, 2, 4],
    "explicacao": "Para consultar uma tabela em um banco de dados SQL do Azure, é necessário: (1) possuir permissões de leitura (como SELECT) sobre a tabela; (2) existir como usuário autenticado dentro do banco de dados; e (3) ter o endereço IP autorizado na firewall do servidor SQL. Permissões no grupo de recursos (como Leitor ou Colaborador) não substituem permissões no nível do banco de dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/authentication-aad-overview?view=azuresql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual cláusula você deve usar em uma instrução SELECT para combinar linhas de uma tabela com linhas de outra tabela?",
    "opcoes": ["SET", "VALUES", "KEY", "JOIN"],
    "resposta": 3,
    "explicacao": "A cláusula correta é JOIN (traduzida no enunciado como 'JUNTE-SE'), que permite combinar registros de duas ou mais tabelas com base em uma condição relacionada, geralmente uma chave primária e uma chave estrangeira.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/from-transact-sql#join",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "A sua empresa precisa de garantir que uma máquina virtual do Azure pode ligar-se a bases de dados SQL do Azure sem expor as bases de dados à Internet. O que você deve usar?",
    "opcoes": [
      "Gateway de Aplicativo do Azure",
      "Gerenciador de Tráfego do Azure",
      "DNS do Azure",
      "Link Privado do Azure"
    ],
    "resposta": 3,
    "explicacao": "O Azure Private Link permite a conexão a serviços PaaS (como o Azure SQL Database) por meio de um ponto final privado dentro da rede virtual do cliente. Isso garante que o tráfego não transite pela Internet pública, aumentando a segurança da conexão.",
    "link": "https://learn.microsoft.com/pt-br/azure/private-link/private-link-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os serviços SQL do Azure com os casos de uso apropriados.",
    "itens": [
      { "label": "Instância gerenciada de SQL do Azure" },
      { "label": "Banco de dados único do Banco de Dados SQL do Azure" },
      { "label": "Pool elástico do Banco de Dados SQL do Azure" }
    ],
    "grupos": [
      "Um banco de dados que tem a mais alta compatibilidade com o Microsoft SQL Server local",
      "Uma configuração sem servidor",
      "Um banco de dados de baixo custo e baixa manutenção"
    ],
    "respostas": {
      "Um banco de dados que tem a mais alta compatibilidade com o Microsoft SQL Server local": ["Instância gerenciada de SQL do Azure"],
      "Uma configuração sem servidor": ["Banco de dados único do Banco de Dados SQL do Azure"],
      "Um banco de dados de baixo custo e baixa manutenção": ["Pool elástico do Banco de Dados SQL do Azure"]
    },
    "explicacao": "A instância gerenciada fornece maior compatibilidade com o SQL Server local, incluindo suporte a SQL Agent e Linked Servers. O banco de dados único suporta configuração sem servidor (serverless), com escalonamento automático. O pool elástico permite compartilhar recursos entre bancos com padrões de uso variáveis, sendo ideal para cenários de baixo custo e baixa manutenção.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/purchasing-models?view=azuresql",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual instrução T-SQL deve ser usada para instruir um sistema de gerenciamento de banco de dados a usar um índice em vez de realizar uma varredura completa da tabela?",
    "opcoes": ["SELECT", "WHERE", "JOIN", "ORDER BY"],
    "resposta": 1,
    "explicacao": "A cláusula WHERE é utilizada para filtrar registros. Quando um índice está disponível nas colunas especificadas na cláusula WHERE, o mecanismo do banco de dados pode usá-lo para localizar rapidamente os dados, evitando uma varredura completa da tabela. Essa prática melhora significativamente o desempenho das consultas.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/queries/select-transact-sql",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> é um serviço de dados relacionais de plataforma como serviço (PaaS) que usa processamento massivamente paralelo (MPP).",
    "opcoes": [
      "Escolha uma opção",
      "Banco de dados SQL do Azure",
      "Banco de dados do Azure para MariaDB",
      "Análise do Azure Synapse",
      "SQL Server em máquinas virtuais do Azure"
    ],
    "resposta": 3,
    "explicacao": "O Azure Synapse Analytics é um serviço de análise que permite consultas em larga escala usando processamento massivamente paralelo (MPP), ideal para data warehouses corporativos e grandes volumes de dados. É um serviço PaaS voltado para análises avançadas e integração com pipelines de dados no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> classifica fisicamente os dados em uma tabela com base nos valores de uma coluna especificada.",
    "opcoes": [
      "Escolha uma opção",
      "Uma visão",
      "Um índice clusterizado",
      "Um procedimento armazenado",
      "Um índice não clusterizado"
    ],
    "resposta": 2,
    "explicacao": "Um índice clusterizado determina a ordem física dos dados em uma tabela. Quando um índice clusterizado é criado em uma coluna, os dados da tabela são organizados fisicamente de acordo com os valores dessa coluna, o que melhora o desempenho das consultas que usam essa ordenação.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-3"
  },
  {
    "tipo": "comboboxs",
    "texto": "Analise a instrução SQL fornecida e associe cada parte da instrução ao tipo apropriado de objeto de banco de dados.",
    "pares": [
      {
        "requisito": "Dbo. Produtos",
        "opcoes": [
          "Uma coluna",
          "Um banco de dados",
          "Uma tabela",
          "Um índice"
        ],
        "resposta": 2
      },
      {
        "requisito": "Nome do produto",
        "opcoes": [
          "Uma coluna",
          "Um banco de dados",
          "Uma tabela",
          "Um índice"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "`Dbo.Produtos` refere-se a uma tabela (mesa) onde os dados serão inseridos. `Nome do produto` refere-se a uma coluna específica da tabela que armazenará o nome do item a ser inserido. Esses conceitos são fundamentais na sintaxe de instruções `INSERT` em SQL.",
    "link": "https://learn.microsoft.com/pt-br/sql/t-sql/statements/insert-transact-sql",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Em um banco de dados relacional, o <combobox> identifica exclusivamente cada linha em uma tabela.",
    "opcoes": [
      "Selecione uma resposta",
      "Chave estrangeira",
      "Chave primária",
      "Cláusula WHERE",
      "Índice não clusterizado"
    ],
    "resposta": 2,
    "explicacao": "Em um banco de dados relacional, a chave primária é usada para identificar exclusivamente cada linha em uma tabela. Ela garante que os valores sejam únicos e não nulos, sendo essencial para a integridade dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/design-first-database-tutorial?view=azuresql&tabs=ssms",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: <combobox> apresenta conteúdo definido por uma consulta.",
    "opcoes": [
      "Selecione uma resposta",
      "Um heap",
      "Um procedimento armazenado",
      "Uma view",
      "Um índice"
    ],
    "resposta": 3,
    "explicacao": "Uma visão é um objeto de banco de dados que apresenta dados com base no resultado de uma consulta. Ela permite abstrair a complexidade das tabelas e unir dados de múltiplas fontes sem armazená-los fisicamente.",
    "link": "https://learn.microsoft.com/pt-br/sql/relational-databases/views/views?view=sql-server-ver16",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure oferece a maior compatibilidade para bancos de dados migrados do Microsoft SQL Server 2019 Enterprise edition?",
    "opcoes": [
      "Banco de Dados SQL do Azure",
      "Banco de Dados do Azure para MySQL",
      "Instância Gerenciada de SQL do Azure",
      "Um pool elástico do Banco de Dados SQL do Azure"
    ],
    "resposta": 2,
    "explicacao": "A Instância Gerenciada de SQL do Azure fornece quase 100% de compatibilidade com o mecanismo de banco de dados SQL Server (Enterprise Edition), incluindo suporte à rede virtual (VNet), o que facilita a migração com mínima necessidade de alterações no código e na configuração.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual configuração só pode ser definida durante a criação de uma conta do Azure Cosmos DB?",
    "opcoes": [
      "Redundância geográfica",
      "Gravações multirregionais",
      "Tipo de conta de produção ou não produção",
      "API"
    ],
    "resposta": 3,
    "explicacao": "A API utilizada por uma conta do Azure Cosmos DB deve ser escolhida no momento da criação e não pode ser alterada posteriormente. Cada API requer uma conta separada.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/how-to-manage-database-account",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Combine os tipos de armazenamento de dados com os cenários apropriados. Cada tipo deve ser associado a um cenário correspondente.",
    "itens": [
      { "label": "Gráfico" },
      { "label": "Objeto" },
      { "label": "Chave/valor" }
    ],
    "grupos": [
      "Uma lista de nomes de usuários de aplicativos e, para cada um, o idioma padrão",
      "Uma coleção de imagens médicas e seus metadados associados",
      "Dados de funcionários que mostram as relações entre funcionários"
    ],
    "respostas": {
      "Uma lista de nomes de usuários de aplicativos e, para cada um, o idioma padrão": ["Chave/valor"],
      "Uma coleção de imagens médicas e seus metadados associados": ["Objeto"],
      "Dados de funcionários que mostram as relações entre funcionários": ["Gráfico"]
    },
    "explicacao": "O armazenamento Chave/valor é adequado para estruturas simples com pares únicos, como configurações de usuário. O armazenamento de Objetos é ideal para grandes volumes de dados binários e metadados, como imagens médicas. O modelo Gráfico é perfeito para representar relações complexas, como as conexões entre funcionários.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "multipla",
    "texto": "Você tem uma conta do Azure Cosmos DB que usa a API Core (SQL). Quais são as duas configurações que você pode definir no nível do contêiner?",
    "opcoes": [
      "A taxa de transferência",
      "A região de leitura",
      "A chave de partição",
      "A API",
      "A redundância geográfica"
    ],
    "respostas": [0, 2],
    "explicacao": "No Azure Cosmos DB, ao configurar um contêiner, você pode definir a taxa de transferência (provisionamento de RU/s) e a chave de partição, que determina como os dados serão distribuídos. A API e a região de leitura são definidas no nível da conta, não no nível de contêiner.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/partitioning-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está projetando um armazenamento de dados que conterá dados dos alunos. Os dados têm o seguinte formato:<br><br><table style='width:100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;'><thead><tr style='background-color: #f2f2f2;'><th style='border: 1px solid #000; padding: 8px; text-align: left;'>Número do aluno</th><th style='border: 1px solid #000; padding: 8px; text-align: left;'>Informações do aluno</th></tr></thead><tbody><tr><td style='border: 1px solid #000; padding: 8px;'>7634634</td><td style='border: 1px solid #000; padding: 8px;'><strong>Nome:</strong> Ben<br><strong>Último:</strong> Smith<br><strong>Nome preferido:</strong> Benjamim</td></tr><tr><td style='border: 1px solid #000; padding: 8px;'>7634634</td><td style='border: 1px solid #000; padding: 8px;'><strong>Nome:</strong> Dominic<br><strong>Sobrenome:</strong> Paiha<br><strong>Endereço de e-mail:</strong> dpaiha@contoso.com<br><strong>ID MCP:</strong> 931817</td></tr><tr><td style='border: 1px solid #000; padding: 8px;'>7634636</td><td style='border: 1px solid #000; padding: 8px;'><strong>Nome:</strong> Reshma<br><strong>Sobrenome:</strong> Patel<br><strong>Número de telefone:</strong> 514-555-1101</td></tr><tr><td style='border: 1px solid #000; padding: 8px;'>7634637</td><td style='border: 1px solid #000; padding: 8px;'><strong>Primeiro Nome:</strong> Yun-Feng<br><strong>Sobrenome:</strong> Peng</td></tr></tbody></table>",
    "opcoes": ["Gráfico", "Chave/valor", "Objeto", "Coluna"],
    "resposta": 3,
    "explicacao": "O armazenamento por coluna é ideal para cenários de análise em larga escala, onde os dados são organizados em colunas em vez de linhas. Esse formato permite alto desempenho em consultas analíticas, especialmente quando você precisa acessar um subconjunto de colunas de um grande volume de registros. Como os dados estão estruturados em colunas (como 'Número do aluno' e 'Informações do aluno'), o modelo colunar oferece maior eficiência.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/analytical-data-stores",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual solução de armazenamento oferece suporte ao controle de acesso baseado em função (RBAC) no nível de arquivos ou pastas?",
    "opcoes": [
      "Azure Disk Storage",
      "Azure Data Lake Storage",
      "Azure Blob storage",
      "Azure Queue storage"
    ],
    "resposta": 1,
    "explicacao": "O Azure Data Lake Storage (ADLS) oferece controle de acesso baseado em função (RBAC) no nível de arquivos e pastas, permitindo um gerenciamento refinado de permissões. Isso o torna ideal para cenários em que a segurança e o controle detalhado são críticos.",
    "link": "https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa armazenar dados no Armazenamento de Blobs do Azure por sete anos para atender aos requisitos de conformidade da empresa. O tempo de recuperação dos dados não é importante. A solução deve minimizar os custos de armazenamento. Qual camada de armazenamento você deve usar?",
    "opcoes": [
      "Arquivo",
      "Hot",
      "Cool"
    ],
    "resposta": 0,
    "explicacao": "A camada de armazenamento Arquivo (Archive) do Azure Blob é otimizada para dados raramente acessados e armazenados por pelo menos 180 dias. Essa camada oferece o menor custo de armazenamento, ideal para retenção a longo prazo quando o tempo de recuperação não é uma prioridade.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual tipo de armazenamento de dados não relacional oferece suporte a um esquema flexível, armazena dados como arquivos JSON e armazena todos os dados de uma entidade no mesmo documento?",
    "opcoes": [
      "Documento",
      "Colunar",
      "Gráfico",
      "Série temporal"
    ],
    "resposta": 0,
    "explicacao": "O modelo de armazenamento de documentos é ideal para dados semiestruturados, como JSON. Ele permite um esquema flexível e armazena todas as informações relacionadas a uma entidade em um único documento, o que simplifica o acesso e a consulta dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview#document-data-stores",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe as APIs do Azure Cosmos DB às suas respectivas estruturas de dados. Cada API oferece suporte a um modelo de dados específico usado para diferentes cenários.",
    "itens": [
      { "label": "Cassandra API" },
      { "label": "Gremlin API" },
      { "label": "MongoDB API" },
      { "label": "Table API" }
    ],
    "grupos": ["Graph data", "JSON documents", "Key/value data"],
    "respostas": {
      "Graph data": ["Gremlin API"],
      "JSON documents": ["MongoDB API"],
      "Key/value data": ["Table API"]
    },
    "explicacao": "A API Gremlin é usada para dados de grafos. A API MongoDB é usada para documentos JSON, mantendo compatibilidade com o MongoDB. A API Table é usada para armazenar dados no formato chave/valor, similar ao Azure Table Storage.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Para configurar uma conta de Armazenamento do Azure para dar suporte à segurança no nível da pasta e à manipulação de diretório atômico, <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "defina o tipo de conta como BlobStorage.",
      "defina Desempenho como Premium.",
      "habilite o namespace hierárquico.",
      "defina a replicação para armazenamento com redundância geográfica com acesso de leitura (RA-GRS)."
    ],
    "resposta": 3,
    "explicacao": "A ativação do namespace hierárquico é necessária para habilitar recursos avançados no Azure Data Lake Storage Gen2, como segurança no nível de diretório e controle de acesso baseado em função (RBAC) em arquivos e pastas.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-namespace",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Você pode consultar um banco de dados gráfico no Azure Cosmos DB <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "com um documento JSON usando uma linguagem semelhante a SQL.",
      "como um armazenamento de linhas particionado usando Cassandra Query Language (CQL).",
      "com um armazenamento de linhas particionado usando LINQ (Consulta Integrada à Linguagem).",
      "como nós e arestas usando a linguagem Gremlin."
    ],
    "resposta": 4,
    "explicacao": "O Azure Cosmos DB oferece suporte ao modelo de grafo por meio da API Gremlin, permitindo consultas de grafos usando nós e arestas, ideais para representar relacionamentos complexos.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Ao provisionar uma conta do Azure Cosmos DB, qual recurso fornece redundância dentro de uma região do Azure?",
    "opcoes": [
      "replicação multimestre",
      "Zonas de disponibilidade",
      "O forte nível de consistência",
      "failover automático"
    ],
    "resposta": 1,
    "explicacao": "As Zonas de Disponibilidade (Availability Zones) fornecem redundância dentro de uma única região do Azure, garantindo que as réplicas sejam distribuídas em diferentes zonas físicas para alta disponibilidade e resiliência a falhas locais.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/high-availability#replica-outages",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Qual é o benefício da API de tabela do Azure Cosmos DB em comparação com o armazenamento de tabelas do Azure?",
    "opcoes": [
      "Fornece resiliência se uma região do Azure falhar",
      "Suporta particionamento",
      "Oferece uma maior capacidade de armazenamento",
      "Suporta um modelo multirregião"
    ],
    "resposta": 3,
    "explicacao": "O suporte multirregião (multi-master) para o Azure Cosmos DB está disponível em todas as regiões públicas. Isso permite que o banco de dados aceite gravações em várias regiões simultaneamente, garantindo alta disponibilidade e baixa latência global. O Azure Table Storage não oferece suporte a esse modelo de replicação ativa.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/table/table-support",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa precisa projetar um banco de dados que mostre como alterações no tráfego de rede em uma área podem afetar o tráfego em outras áreas da rede. Qual tipo de armazenamento de dados deve ser utilizado?",
    "opcoes": [
      "Grafo",
      "Chave/valor",
      "Documento",
      "Colunar"
    ],
    "resposta": 0,
    "explicacao": "Os bancos de dados em grafo são ideais para representar dados altamente conectados, como o tráfego de rede. Eles armazenam relacionamentos diretamente na camada de armazenamento, o que permite consultas de alto desempenho. O Azure Cosmos DB oferece suporte a esse modelo por meio da API Gremlin.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/graph-introduction#introduction-to-graph-databases",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre o consumo de dados pelo Azure Databricks.",
    "afirmacoes": [
      "O Azure Databricks pode consumir dados do Azure SQL Database.",
      "O Azure Databricks pode consumir dados do Azure Event Hubs.",
      "O Azure Databricks pode consumir dados do Azure Cosmos DB."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Azure Databricks pode se conectar ao Azure SQL Database usando JDBC ou conectores Spark, permitindo ingestão de dados relacionais. Ele também é compatível com Azure Event Hubs, possibilitando o consumo de dados de streaming em tempo real. Além disso, o Azure Databricks pode acessar dados do Azure Cosmos DB por meio de APIs específicas ou conectores, como o conector do Spark para Cosmos DB.",
    "link": "https://learn.microsoft.com/pt-br/azure/databricks/data/data-sources/",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços de armazenamento de dados às descrições apropriadas com base em suas funcionalidades no Azure.",
    "itens": [
      { "label": "Azure Blob storage" },
      { "label": "Azure Cosmos DB" },
      { "label": "Azure Files" },
      { "label": "Azure Table storage" }
    ],
    "grupos": [
      "Permite o uso de consultas SQL em dados armazenados em documentos JSON",
      "Permite que os usuários acessem dados usando o protocolo Server Message Block (SMB) versão 3"
    ],
    "respostas": {
      "Permite o uso de consultas SQL em dados armazenados em documentos JSON": ["Azure Cosmos DB"],
      "Permite que os usuários acessem dados usando o protocolo Server Message Block (SMB) versão 3": ["Azure Files"]
    },
    "explicacao": "Azure Cosmos DB, usando a API SQL (Core), armazena dados como documentos JSON e permite consultas com SQL. Já o Azure Files oferece compartilhamento de arquivos baseado nativamente no protocolo SMB, o que permite o acesso direto a arquivos como se estivessem em um sistema de arquivos local.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/nosql/query/working-with-json",
    "dominio": "Descrever uma carga de trabalho de análise no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Ao provisionar um Azure Cosmos DB <combobox>, é necessário especificar qual tipo de API será usada.",
    "opcoes": ["Escolha uma opção", "container", "database", "account", "item"],
    "resposta": 3,
    "explicacao": "Ao criar uma conta do Azure Cosmos DB, você deve escolher a API (como SQL, MongoDB, Cassandra, Gremlin ou Table). Essa decisão determina como os dados serão acessados e estruturados. A escolha da API acontece no nível da conta, e não no nível de banco de dados, contêiner ou item.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/create-cosmosdb-resources-portal",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa armazenar dados usando o Azure Table Storage. O que você deve criar primeiro?",
    "opcoes": [
      "Uma instância do Azure Cosmos DB",
      "Uma conta de armazenamento",
      "Um contêiner de blob",
      "Uma tabela"
    ],
    "resposta": 1,
    "explicacao": "Para usar o Azure Table Storage, é necessário primeiro criar uma conta de armazenamento no Azure. Essa conta oferece suporte a vários tipos de dados, incluindo blobs, arquivos, filas e tabelas. Após a criação da conta de armazenamento, você pode criar uma tabela por meio do serviço Table no portal do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/tables/table-storage-quickstart-portal",
    "dominio": "Descrever os principais conceitos de dados",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você precisa recomendar um serviço de armazenamento de dados que atenda aos seguintes requisitos: acesso nativo à API SQL e índices configuráveis. O que você deve recomendar?",
    "opcoes": [
      "Azure Files",
      "Armazenamento de Blobs do Azure",
      "Armazenamento de Tabelas do Azure",
      "Azure Cosmos DB"
    ],
    "resposta": 3,
    "explicacao": "O Azure Cosmos DB fornece suporte nativo à API SQL (Core API) e permite configurar políticas de indexação específicas por contêiner. É possível definir ou substituir as políticas padrão para atender a necessidades específicas de desempenho e consulta.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/sql/how-to-manage-indexing-policy",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "simnao",
    "texto": "Avalie as afirmações a seguir sobre a capacidade de leitura e gravação simultânea em diferentes regiões do Azure usando Azure Table Storage e Azure Cosmos DB.",
    "afirmacoes": [
      "O armazenamento de Tabela do Azure dentro de uma única conta de armazenamento oferece suporte a várias leituras simultâneas em diferentes regiões do Azure.",
      "O armazenamento de Tabela do Azure dentro de uma única conta de armazenamento oferece suporte a várias gravações simultâneas em diferentes regiões do Azure.",
      "Uma conta do Azure Cosmos DB que usa a API de Tabela oferece suporte a várias leituras simultâneas em diferentes regiões do Azure.",
      "Uma conta do Azure Cosmos DB que usa a API de Tabela oferece suporte a várias gravações simultâneas em diferentes regiões do Azure."
    ],
    "respostas": [true, false, true, true],
    "explicacao": "1. Verdadeiro: O Azure Table Storage pode ser lido simultaneamente em diferentes regiões usando recursos de redundância geográfica, mas a conta ainda é localizada em uma única região. \n2. Falso: O Azure Table Storage não oferece suporte a gravações simultâneas entre regiões. Ele não é distribuído globalmente como o Cosmos DB.\n3. Verdadeiro: O Azure Cosmos DB com a API de Tabela oferece suporte à leitura simultânea em várias regiões com baixa latência.\n4. Verdadeiro: O Azure Cosmos DB também oferece suporte a gravações simultâneas em várias regiões quando configurado com gravação multirregional.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/table/table-support",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta correta: Para configurar uma conta de Armazenamento do Azure para dar suporte a listas de controle de acesso com permissões em nível de objeto, <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "defina o tipo de conta como BlobStorage",
      "defina o desempenho como Premium",
      "habilite o namespace hierárquico",
      "defina a replicação como armazenamento georeduntante com acesso de leitura (RA-GRS)"
    ],
    "resposta": 3,
    "explicacao": "Para que uma conta do Azure Storage suporte listas de controle de acesso (ACLs) com permissões em nível de objeto, é necessário habilitar o namespace hierárquico. Esse recurso é fundamental no Azure Data Lake Storage Gen2, pois permite organizar dados em uma hierarquia de diretórios e aplicar permissões específicas em arquivos individuais, assim como em um sistema de arquivos tradicional.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/data-lake-storage-namespace",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa precisa projetar um banco de dados que ilustre os relacionamentos entre os níveis de utilização de dispositivos de rede individuais em uma rede local. Qual tipo de armazenamento de dados você deve usar?",
    "opcoes": [
      "grafo",
      "chave/valor",
      "documento",
      "colunar"
    ],
    "resposta": 0,
    "explicacao": "Os bancos de dados em grafo são ideais para representar relações complexas entre entidades, como conexões entre dispositivos de rede. Eles armazenam as relações diretamente na camada de armazenamento, o que permite consultas altamente eficientes. O Azure Cosmos DB, por exemplo, oferece suporte ao modelo de grafo por meio da API Gremlin.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/gremlin/introduction",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você gerencia um aplicativo que armazena dados em uma pasta compartilhada em um servidor Windows. Você precisa mover a pasta compartilhada para o Azure Storage. Qual tipo de armazenamento do Azure você deve usar?",
    "opcoes": ["fila", "blob", "arquivo", "tabela"],
    "resposta": 2,
    "explicacao": "O Azure Files permite compartilhar arquivos por meio do protocolo SMB, sendo ideal para substituir pastas compartilhadas em servidores Windows. Ele oferece suporte a implantações locais e em nuvem, além de permitir caching em servidores Windows com o Azure File Sync para acesso rápido aos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/",
    "dominio": "Identificar considerações sobre dados relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Sua empresa está projetando um banco de dados que conterá dados de sessão para um site. Os dados incluirão notificações, atributos de personalização e produtos adicionados a um carrinho de compras. Qual tipo de armazenamento de dados fornecerá a menor latência para recuperar os dados?",
    "opcoes": ["chave/valor", "grafo", "colunar", "documento"],
    "resposta": 2,
    "explicacao": "Bancos de dados colunares são otimizados para leitura rápida e baixa latência em grandes volumes de dados. Eles são ideais para cenários como personalização, telemetria, dados de sensores, mensagens e análises em tempo real — exatamente o tipo de acesso exigido por dados de sessão em websites.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/technology-choices/data-store-overview",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  },
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo que é executado no Windows e requer acesso a uma unidade mapeada. Qual serviço do Azure você deve usar?",
    "opcoes": ["Azure Files", "Armazenamento Blob do Azure", "Azure Cosmos DB", "Armazenamento de Tabela do Azure"],
    "resposta": 0,
    "explicacao": "Azure Files é o sistema de arquivos em nuvem fácil de usar da Microsoft, que pode ser montado em máquinas Windows usando uma letra de unidade ou caminho UNC. Ele é ideal para aplicativos que exigem acesso a uma unidade mapeada.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-how-to-use-files-windows",
    "dominio": "Descrever considerações sobre o trabalho com os dados não relacionais no Azure",
    "simulado": "dp-3"
  }





















];
