// ==========================================
// Arquivo: questoes_bloco06.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 6 de 10 — Descrever os serviços do armazenamento do Azure
// (comparação de serviços de armazenamento; níveis de armazenamento; opções de
//  redundância; opções/tipos de conta de armazenamento; AzCopy, Storage Explorer,
//  File Sync; opções de migração — Azure Migrate, Azure Data Box)
// 47 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 2, 13, 68, 73, 92, 109, 111, 112, 115, 118, 119, 120, 133, 134, 147, 157, 160, 162, 163,
// 175, 214, 245, 334, 376, 383, 385, 394, 395, 396, 397, 399, 400, 401, 414, 422, 428, 431,
// 432, 446, 449, 450, 455, 456, 465, 469, 470, 471
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q2) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Sua empresa tem datacenters em Los Angeles e Nova York. A empresa tem uma assinatura do Microsoft Azure. Você está configurando os dois datacenters como sites geoclusterizados para resiliência do site. Você precisa recomendar uma opção de redundância de armazenamento do Azure. Você tem os seguintes requisitos de armazenamento de dados:\n• Os dados devem ser armazenados em vários nós.\n• Os dados devem ser armazenados em nós localizados em regiões geográficas separadas.\n• Os dados devem poder ser lidos tanto do local secundário quanto do local primário.\nQual opção de redundância de armazenamento do Azure você deve recomendar?",
    "opcoes": [
      "Armazenamento georredundante (GRS)",
      "Armazenamento georredundante com acesso de leitura (RA-GRS)",
      "Armazenamento com redundância de zona (ZRS)",
      "Armazenamento com redundância local (LRS)"
    ],
    "resposta": 1,
    "explicacao": "O RA-GRS permite maior disponibilidade de leitura para sua conta de armazenamento, fornecendo acesso somente leitura aos dados replicados no local secundário. Ao habilitar esse recurso, o local secundário pode ser usado para alcançar maior disponibilidade caso os dados não estejam disponíveis na região primária. É um recurso opcional que exige que a conta de armazenamento seja georreplicada.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 02 (banco original Q13) — já traduzida no lote01
  {
    "tipo": "multipla",
    "texto": "Você tem um ambiente do Azure. Você precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android. Quais são as três possíveis soluções? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Usar o portal do PowerApps.",
      "Usar o portal do Azure.",
      "Usar o PowerShell no Azure Cloud Shell.",
      "Usar o Bash no Azure Cloud Shell.",
      "Usar o centro de administração de Segurança e Conformidade."
    ],
    "respostas": [1, 2, 3],
    "explicacao": "A criação de máquinas virtuais no Azure pode ser feita por meio do portal do Azure, do PowerShell ou do Bash via Azure Cloud Shell — todos acessíveis em dispositivos móveis como tablets. O PowerApps e o Centro de Segurança não são usados para esse tipo de operação.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/linux/quick-create-portal",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 03 (banco original Q68)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Azure Cosmos DB é um exemplo de uma oferta de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "plataforma como serviço (PaaS)",
      "infraestrutura como serviço (IaaS)",
      "sem servidor (serverless)",
      "software como serviço (SaaS)"
    ],
    "resposta": 1,
    "explicacao": "O Azure Cosmos DB é um exemplo de provedor de banco de dados na nuvem oferecido como plataforma como serviço (PaaS).",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/database-security",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 04 (banco original Q73)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja migrar todos os seus dados e recursos para o Azure.\nO plano de migração da empresa determina que apenas soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure.\nVocê precisa implantar um ambiente do Azure que atenda ao plano de migração da empresa.\nO que você deve criar?",
    "opcoes": [
      "máquinas virtuais do Azure, bancos de dados do Azure SQL e contas de Armazenamento do Azure.",
      "um Azure App Service e máquinas virtuais do Azure com o Microsoft SQL Server instalado.",
      "um Azure App Service e bancos de dados do Azure SQL.",
      "contas de Armazenamento do Azure e um servidor Web em máquinas virtuais do Azure."
    ],
    "resposta": 2,
    "explicacao": "O Azure App Service e os bancos de dados do Azure SQL são exemplos de soluções PaaS do Azure. Portanto, esta solução atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/app-service/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 05 (banco original Q92)
  {
    "tipo": "unica",
    "texto": "Qual é um recurso de uma rede virtual do Azure?",
    "opcoes": [
      "análise de custo de recursos",
      "inspeção de pacotes",
      "geo-redundância",
      "isolamento e segmentação"
    ],
    "resposta": 3,
    "explicacao": "Componentes de rede isolados, segmentados em uma ou mais sub-redes. Uma estratégia unificada de segmentação empresarial orienta as equipes técnicas a segmentar consistentemente o acesso usando rede, aplicativos, identidade e outros controles de acesso. Crie segmentação em sua rede definindo perímetros. Os principais motivos para a segmentação são: a capacidade de agrupar ativos relacionados que fazem parte (ou dão suporte) das operações de carga de trabalho; isolamento de recursos; e políticas de governança definidas pela organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/framework/security/design-network-segmentation",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 06 (banco original Q109)
  {
    "tipo": "unica",
    "texto": "Você planeja criar uma máquina virtual do Azure.\nVocê precisa identificar qual serviço de armazenamento deve ser usado para armazenar os discos de dados não gerenciados da máquina virtual.\nO que você deve identificar? Para responder, selecione o serviço apropriado na área de resposta.",
    "opcoes": [
      "Contêineres — armazenamento escalável e econômico para dados não estruturados",
      "Compartilhamentos de arquivos — compartilhamentos de arquivos SMB sem servidor",
      "Tabelas — armazenamento de dados tabulares",
      "Filas — dimensione aplicativos de forma eficaz de acordo com o tráfego"
    ],
    "resposta": 0,
    "explicacao": "Contêineres do Azure são a espinha dorsal da plataforma de discos virtuais para o IaaS do Azure. Tanto os discos de SO quanto os discos de dados do Azure são implementados como discos virtuais, com os dados persistidos de forma durável na plataforma de Armazenamento do Azure e entregues às máquinas virtuais para máximo desempenho. Os Discos do Azure são persistidos no formato VHD do Hyper-V e armazenados como um blob de páginas no Armazenamento do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blob-pageblob-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 07 (banco original Q111)
  {
    "tipo": "unica",
    "texto": "Você pretende mapear uma unidade de rede de vários computadores que executam o Windows 10 para o Armazenamento do Azure.\nVocê precisa criar uma solução de armazenamento no Azure para a unidade mapeada planejada.\nO que você deve criar?",
    "opcoes": [
      "um banco de dados SQL do Azure",
      "um disco de dados de máquina virtual",
      "um serviço de Arquivo em uma conta de armazenamento",
      "um serviço de Blob em uma conta de armazenamento"
    ],
    "resposta": 2,
    "explicacao": "O Arquivos do Azure é o sistema de arquivos em nuvem fácil de usar da Microsoft. Compartilhamentos de arquivos do Azure podem ser usados perfeitamente no Windows e no Windows Server. Para usar um compartilhamento de arquivos do Azure com o Windows, é necessário montá-lo (atribuindo uma letra de unidade ou caminho de ponto de montagem) ou acessá-lo por meio de seu caminho UNC. Diferente de outros compartilhamentos SMB com os quais você possa ter interagido, os compartilhamentos de arquivos do Azure atualmente não oferecem suporte à autenticação Kerberos com sua identidade do Active Directory (AD) ou Microsoft Entra ID — em vez disso, você deve acessar o compartilhamento usando a chave da conta de armazenamento, que é uma chave de administrador para toda a conta.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-how-to-use-files-windows",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 08 (banco original Q112)
  {
    "tipo": "unica",
    "texto": "Você planeja implementar uma solução de banco de dados do Azure.\nVocê precisa implementar uma solução de banco de dados que atenda aos seguintes requisitos:\n• Deve conseguir adicionar dados simultaneamente a partir de várias regiões.\n• Deve conseguir armazenar documentos JSON.\nQual serviço de banco de dados você deve implantar? Para responder, selecione o serviço apropriado na área de resposta.",
    "opcoes": [
      "Azure Cosmos DB",
      "Bancos de dados SQL",
      "Azure Database para servidores MySQL",
      "Azure Database para servidores PostgreSQL",
      "Servidores SQL",
      "Data warehouses SQL",
      "Serviços de Migração de Banco de Dados do Azure",
      "Azure Cache for Redis"
    ],
    "resposta": 0,
    "explicacao": "O Azure Cosmos DB é o serviço de banco de dados globalmente distribuído e multimodelo da Microsoft. Com um clique de botão, o Cosmos DB permite escalar elástica e independentemente a taxa de transferência e o armazenamento em qualquer número de regiões do Azure em todo o mundo. O Azure Cosmos DB é uma ótima forma de armazenar dados não estruturados e no formato JSON. Combinado com o Azure Functions, o Cosmos DB torna o armazenamento de dados rápido e fácil, com muito menos código do que seria necessário para armazenar dados em um banco de dados relacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 09 (banco original Q115)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Os dados armazenados na camada de acesso Arquivo Morto (Archive) de uma conta de Armazenamento do Azure <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "podem ser acessados a qualquer momento usando-se azcopy.exe.",
      "só podem ser lidos usando-se o Backup do Azure.",
      "devem ser restaurados antes que os dados possam ser acessados.",
      "devem ser reidratados para que os dados possam ser acessados."
    ],
    "resposta": 3,
    "explicacao": "O Armazenamento do Azure oferece diferentes camadas de acesso: quente (hot), fria (cool) e arquivo morto (archive). A camada de arquivo morto tem o menor custo de armazenamento, mas custos de recuperação de dados mais altos em comparação às camadas quente e fria. Os dados na camada de arquivo morto podem levar várias horas para serem recuperados. Enquanto um blob está no armazenamento de arquivo morto, os dados do blob ficam offline e não podem ser lidos, sobrescritos ou modificados. Para ler ou baixar um blob em arquivo morto, você deve primeiro reidratá-lo para uma camada online.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal#archive-access-tier",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 10 (banco original Q118)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma Zona de Disponibilidade no Azure tem locais fisicamente separados <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "em dois continentes.",
      "dentro de uma única região do Azure.",
      "em várias regiões do Azure.",
      "dentro de um único datacenter do Azure."
    ],
    "resposta": 1,
    "explicacao": "Uma Zona de Disponibilidade é uma oferta de alta disponibilidade que protege seus aplicativos e dados contra falhas de datacenter. As Zonas de Disponibilidade são locais fisicamente separados dentro de uma região do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/availability-zones/az-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 11 (banco original Q119)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Dados armazenados em uma conta de Armazenamento do Azure automaticamente têm pelo menos três cópias.",
      "Todos os dados copiados para uma conta de Armazenamento do Azure são automaticamente copiados em backup para outro datacenter do Azure.",
      "Uma conta de Armazenamento do Azure pode conter até 2 TB de dados e até um milhão de arquivos."
    ],
    "respostas": [true, false, false],
    "explicacao": "Existem diferentes opções de replicação disponíveis com uma conta de armazenamento. A opção de replicação 'mínima' é o Armazenamento com Redundância Local (LRS). Com o LRS, os dados são replicados de forma síncrona três vezes dentro da região primária. Os dados não são automaticamente copiados em backup para outro Datacenter do Azure, embora possam ser, dependendo da opção de replicação configurada para a conta — o LRS padrão mantém três cópias no mesmo datacenter; o armazenamento georredundante (GRS) tem replicação entre regiões para proteger contra interrupções regionais, replicando os dados de forma síncrona três vezes na região primária e depois de forma assíncrona para a região secundária. Os limites são muito mais altos do que 2 TB — o limite atual de armazenamento é de 2 PB para os EUA e Europa, e 500 TB para as demais regiões (incluindo o Reino Unido), sem limite no número de arquivos.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-account-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 12 (banco original Q120)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Se você tem recursos do Azure implantados em todas as regiões, você pode implementar zonas de disponibilidade em todas as regiões.",
      "Somente máquinas virtuais que executam o Windows Server podem ser criadas em zonas de disponibilidade.",
      "Zonas de disponibilidade são usadas para replicar dados e aplicativos em várias regiões."
    ],
    "respostas": [false, false, false],
    "explicacao": "Nem todas as regiões do Azure oferecem suporte a zonas de disponibilidade. Regiões que oferecem suporte a zonas de disponibilidade oferecem suporte também a máquinas virtuais Linux, não apenas Windows Server. Zonas de disponibilidade são usadas para replicar dados e aplicativos dentro da mesma região, não entre múltiplas regiões diferentes.",
    "link": "https://learn.microsoft.com/pt-br/azure/availability-zones/az-region#azure-regions-with-availability-zones",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 13 (banco original Q133)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure à descrição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Cosmos DB" },
      { "label": "Azure HDInsight" },
      { "label": "Azure Synapse Analytics" }
    ],
    "grupos": [
      "Um data warehouse totalmente gerenciado, com segurança integral em todos os níveis de escala, sem custo adicional.",
      "Um banco de dados distribuído globalmente que oferece suporte a NoSQL.",
      "Clusters gerenciados do Apache Hadoop na nuvem que permitem processar grandes volumes de dados."
    ],
    "respostas": {
      "Um data warehouse totalmente gerenciado, com segurança integral em todos os níveis de escala, sem custo adicional.": ["Azure Synapse Analytics"],
      "Um banco de dados distribuído globalmente que oferece suporte a NoSQL.": ["Azure Cosmos DB"],
      "Clusters gerenciados do Apache Hadoop na nuvem que permitem processar grandes volumes de dados.": ["Azure HDInsight"]
    },
    "explicacao": "O Azure Synapse Analytics (antigo Azure SQL Data Warehouse) é o data warehouse totalmente gerenciado. O Azure Cosmos DB é o único banco de dados desta lista que oferece suporte a NoSQL, sendo distribuído globalmente. O Azure HDInsight corresponde a clusters gerenciados do Hadoop.",
    "link": "https://learn.microsoft.com/pt-br/azure/cosmos-db/introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 14 (banco original Q134)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A camada de acesso Arquivo Morto (Archive) é definida no nível da conta de armazenamento.",
      "A camada de acesso Quente (Hot) é recomendada para dados acessados e modificados com frequência.",
      "A camada de acesso Fria (Cool) é recomendada para backups de longo prazo."
    ],
    "respostas": [false, true, false],
    "explicacao": "Apenas as camadas quente e fria podem ser definidas no nível da conta de armazenamento — a camada Arquivo Morto só pode ser definida no nível do blob individual. Cenários de uso da camada quente incluem: dados em uso ativo ou que se espera sejam lidos e gravados com frequência. Cenários de uso da camada fria incluem: backup de curto prazo e recuperação de desastre — a recomendação para backups de LONGO prazo é justamente a camada Arquivo Morto, não a camada Fria.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blob-storage-tiers",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 15 (banco original Q147)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode usar o agente de Sincronização de Arquivos do Azure (Azure File Sync) para sincronizar dados locais com um(a) <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "contêiner de blob.",
      "contêiner de Data Lake Storage.",
      "compartilhamento de arquivos.",
      "fila."
    ],
    "resposta": 2,
    "explicacao": "O agente de Sincronização de Arquivos do Azure permite que os dados em um servidor Windows sejam sincronizados com um compartilhamento de arquivos do Azure (Azure File share).",
    "link": "https://www.microsoft.com/pt-br/download/details.aspx?id=57159",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 16 (banco original Q157)
  {
    "tipo": "unica",
    "texto": "Em qual camada OSI o ExpressRoute opera?",
    "opcoes": ["Camada 2", "Camada 3", "Camada 5", "Camada 7"],
    "resposta": 1,
    "explicacao": "Conectividade de Camada 3 entre sua rede local e a Nuvem da Microsoft através de um provedor de conectividade. A conectividade pode ser de uma rede any-to-any (IPVPN), uma conexão Ethernet ponto a ponto, ou por meio de uma interconexão cruzada virtual via um ponto de troca Ethernet.",
    "link": "https://learn.microsoft.com/pt-br/azure/expressroute/expressroute-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 17 (banco original Q160)
  {
    "tipo": "multipla",
    "texto": "Você planeja armazenar 20 TB de dados no Azure. Os dados serão acessados com pouca frequência e visualizados usando o Microsoft Power BI.\nVocê precisa recomendar uma solução de armazenamento para os dados.\nQuais duas soluções você deve recomendar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Azure Data Lake",
      "Azure Cosmos DB",
      "Azure SQL Data Warehouse",
      "Banco de Dados SQL do Azure",
      "Azure Database for PostgreSQL"
    ],
    "respostas": [0, 2],
    "explicacao": "O Azure SQL Data Warehouse hoje é o Azure Synapse Analytics. Você pode usar o Power BI para analisar e visualizar dados armazenados no Azure Data Lake e no Azure SQL Data Warehouse. O Azure Data Lake inclui todos os recursos necessários para facilitar o armazenamento de dados de qualquer tamanho e formato por desenvolvedores, cientistas de dados e analistas, permitindo todos os tipos de processamento e análise entre plataformas e linguagens. Ele remove as complexidades de ingestão e armazenamento de todos os seus dados, tornando mais rápido colocar em funcionamento análises em lote, streaming e interativas.",
    "link": "https://azure.microsoft.com/pt-br/solutions/data-lake/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 18 (banco original Q162)
  {
    "tipo": "dragdrop",
    "texto": "Organize as opções de redundância de conta de armazenamento da menos redundante para a mais redundante. Para responder, mova todas as opções da lista para a área de resposta e organize-as na ordem correta.",
    "itens": [
      { "label": "Armazenamento com Redundância de Zona (ZRS)" },
      { "label": "Armazenamento Georredundante (GRS)" },
      { "label": "Armazenamento com Redundância Local (LRS)" }
    ],
    "grupos": ["1", "2", "3"],
    "respostas": {
      "1": ["Armazenamento com Redundância Local (LRS)"],
      "2": ["Armazenamento com Redundância de Zona (ZRS)"],
      "3": ["Armazenamento Georredundante (GRS)"]
    },
    "explicacao": "Da menos para a mais redundante: Armazenamento com Redundância Local (LRS) replica os dados três vezes dentro de um único datacenter na região primária. Armazenamento com Redundância de Zona (ZRS) replica os dados de forma síncrona entre três Zonas de Disponibilidade na região primária. Armazenamento Georredundante (GRS) replica os dados de forma síncrona três vezes na região primária (usando LRS) e depois de forma assíncrona para uma região secundária a centenas de quilômetros de distância — oferecendo o maior nível de redundância entre as três opções.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 19 (banco original Q163)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Armazenamento de Blobs do Azure é um(a) <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "armazenamento de dados para enfileiramento e entrega confiável de mensagens entre aplicativos.",
      "compartilhamento de arquivos que pode ser mapeado como unidade de rede.",
      "armazenamento de chave/atributo para dados não relacionais e estruturados.",
      "serviço de armazenamento otimizado para objetos muito grandes, como arquivos de vídeo e bitmaps."
    ],
    "resposta": 3,
    "explicacao": "O Armazenamento de Blobs do Azure é usado principalmente para arquivos grandes e não estruturados, como áudio, vídeo, imagens e arquivos de backup, entre outros.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blobs-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 20 (banco original Q175)
  {
    "tipo": "multipla",
    "texto": "Sua empresa planeja implantar vários milhões de sensores que farão upload de dados para o Azure.\nVocê precisa identificar quais recursos do Azure devem ser criados para dar suporte à solução planejada.\nQuais dois recursos do Azure você deve identificar? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "Azure Data Lake",
      "Armazenamento de Filas do Azure",
      "Armazenamento de Arquivos do Azure",
      "Azure IoT Hub",
      "Azure Notification Hubs"
    ],
    "respostas": [0, 3],
    "explicacao": "O IoT Hub (Hub da Internet das Coisas) recebe dados de milhões de sensores. O IoT Hub é um serviço gerenciado, hospedado na nuvem, que atua como um hub central de mensagens para comunicação bidirecional entre seu aplicativo de IoT e os dispositivos que ele gerencia. Você pode usar o Azure IoT Hub para construir soluções de IoT com comunicações confiáveis e seguras entre milhões de dispositivos IoT e um backend hospedado na nuvem. Existem dois serviços de armazenamento para os quais o IoT Hub pode rotear mensagens: Armazenamento de Blobs do Azure e contas do Azure Data Lake Storage Gen2 (ADLS Gen2), que são contas de armazenamento habilitadas para namespace hierárquico construídas sobre o armazenamento de blobs — ambos utilizam blobs para seu armazenamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/iot-hub/about-iot-hub",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 21 (banco original Q214)
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure fornece um conjunto de ferramentas de controle de versão para gerenciar código?",
    "opcoes": ["Azure Repos", "Azure DevTest Labs", "Azure Storage", "Azure Cosmos DB"],
    "resposta": 0,
    "explicacao": "O Azure Repos é um serviço dentro do Azure DevOps que fornece um conjunto de ferramentas de controle de versão para gerenciar código. Ele oferece suporte tanto a repositórios Git quanto ao Controle de Versão do Team Foundation (TFVC), permitindo que equipes colaborem no desenvolvimento de código de forma eficiente.",
    "link": "https://learn.microsoft.com/pt-br/azure/devops/repos/get-started/what-is-repos",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 22 (banco original Q245)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Depois de criar uma máquina virtual, você precisa modificar o(a) <combobox> para permitir conexões à porta TCP 8080 na máquina virtual.",
    "opcoes": [
      "Escolha uma opção",
      "grupo de segurança de rede (NSG)",
      "gateway de rede virtual",
      "rede virtual",
      "tabela de rotas"
    ],
    "resposta": 1,
    "explicacao": "Você pode usar um grupo de segurança de rede do Azure para filtrar o tráfego de rede de e para recursos do Azure em uma rede virtual. Um grupo de segurança de rede contém regras de segurança que permitem ou negam tráfego de entrada e saída, especificando origem, destino, porta e protocolo para cada regra.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 23 (banco original Q334)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Armazenar 1 TB de dados no Armazenamento de Blobs do Azure sempre custará o mesmo, independentemente da região do Azure onde os dados estão localizados.",
      "Ao usar uma conta de Armazenamento do Azure de finalidade geral v2, você é cobrado apenas pela quantidade de dados armazenados. Todas as operações de leitura e gravação são gratuitas.",
      "Transferir dados entre contas de Armazenamento do Azure em regiões diferentes do Azure é gratuito."
    ],
    "respostas": [false, false, false],
    "explicacao": "O custo de armazenar dados varia conforme a região do Azure — não é sempre o mesmo. Em uma conta de armazenamento de finalidade geral v2, você é cobrado não apenas pelo volume de dados armazenado, mas também pelas operações de leitura e gravação, que não são gratuitas. Transferir dados entre contas de armazenamento em regiões diferentes normalmente gera custos de transferência de dados de saída (egress) — não é gratuito.",
    "link": "https://azure.microsoft.com/pt-br/pricing/details/storage/blobs/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 24 (banco original Q376)
  {
    "tipo": "unica",
    "texto": "Quantas cópias de dados são mantidas por uma conta de Armazenamento do Azure que usa armazenamento com redundância local (LRS)?",
    "opcoes": ["3", "4", "6", "9"],
    "resposta": 0,
    "explicacao": "O armazenamento com redundância local (LRS) replica sua conta de armazenamento três vezes dentro de um único datacenter na região primária. O LRS fornece pelo menos 99,999999999% (11 noves) de durabilidade dos objetos ao longo de um determinado ano.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy#locally-redundant-storage",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 25 (banco original Q383)
  {
    "tipo": "unica",
    "texto": "Quantas cópias de dados são mantidas por uma conta de Armazenamento do Azure que usa armazenamento georredundante (GRS)?",
    "opcoes": ["3", "4", "6", "9"],
    "resposta": 2,
    "explicacao": "O armazenamento georredundante (GRS) copia seus dados de forma síncrona três vezes dentro de um único local físico na região primária, usando LRS. Em seguida, copia seus dados de forma assíncrona para um único local físico em uma região secundária, que fica a centenas de quilômetros de distância da região primária — totalizando 6 cópias.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy#geo-redundant-storage",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 26 (banco original Q385)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Redes virtuais do Azure implantadas na mesma região do Azure são conectadas por padrão.",
      "Redes virtuais criadas no mesmo grupo de recursos devem ter nomes exclusivos.",
      "O espaço de endereço de uma rede virtual do Azure deve ser exclusivo dentro de uma assinatura."
    ],
    "respostas": [false, true, true],
    "explicacao": "Redes virtuais na mesma região do Azure NÃO são conectadas por padrão — seria necessário configurar as conexões, por exemplo com o emparelhamento de VNets. Redes virtuais em um mesmo grupo de recursos precisam ter nomes exclusivos, já que uma rede virtual tem escopo de grupo de recursos. É importante garantir espaços de endereço não sobrepostos ao construir sua rede no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/tutorial-connect-virtual-networks-portal",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 27 (banco original Q394)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A camada de acesso Arquivo Morto (Archive) do Armazenamento do Azure pode ser definida no nível da conta.",
      "A camada de acesso Fria (Cool) oferece os custos mais baixos para armazenar blobs no Armazenamento do Azure.",
      "Depois que blobs são enviados a um contêiner do Armazenamento do Azure, a camada de acesso da conta de armazenamento pode ser alterada."
    ],
    "respostas": [false, false, true],
    "explicacao": "A camada de acesso Arquivo Morto para o Armazenamento do Azure NÃO pode ser definida no nível da conta — só pode ser definida no nível do blob. As camadas quente, fria e arquivo morto podem ser definidas no nível do blob. A camada Arquivo Morto tem o menor custo de armazenamento entre todas — não a camada Fria. Custo de armazenamento: Quente (mais alto) / Custo de acesso: mais baixo; Fria: intermediário nos dois; Arquivo Morto: custo de armazenamento mais baixo / custo de acesso mais alto. Após o envio dos blobs, a camada de acesso da conta de armazenamento pode, sim, ser alterada posteriormente.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 28 (banco original Q395)
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços de armazenamento do Azure às descrições apropriadas. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Armazenamento de Blobs do Azure" },
      { "label": "Armazenamento em Disco do Azure" },
      { "label": "Arquivos do Azure" },
      { "label": "Armazenamento de Filas do Azure" }
    ],
    "grupos": [
      "Usado para troca confiável de mensagens entre aplicativos",
      "Pode ser acessado como um compartilhamento de rede de um dispositivo Windows",
      "Pode ser configurado para usar a camada de acesso Arquivo Morto (Archive)"
    ],
    "respostas": {
      "Usado para troca confiável de mensagens entre aplicativos": ["Armazenamento de Filas do Azure"],
      "Pode ser acessado como um compartilhamento de rede de um dispositivo Windows": ["Arquivos do Azure"],
      "Pode ser configurado para usar a camada de acesso Arquivo Morto (Archive)": ["Armazenamento de Blobs do Azure"]
    },
    "explicacao": "O Armazenamento de Filas do Azure é um serviço de fila de mensagens totalmente gerenciado e baseado na nuvem, usado para trocas confiáveis de mensagens entre componentes de aplicativos distribuídos, com mensagens de até 64 KB. O Arquivos do Azure permite criar compartilhamentos de arquivos na nuvem acessíveis tanto por clientes Windows quanto Linux via protocolo SMB. O Armazenamento de Blobs do Azure é o único destes que pode ser configurado com a camada de acesso Arquivo Morto.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/queues/storage-queues-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 29 (banco original Q396)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Contas de armazenamento Premium podem ser configuradas como compartilhamentos de arquivos do Azure.",
      "Contas de armazenamento Premium podem ser configuradas para armazenamento de blob em blocos (block blobs).",
      "Contas de armazenamento Premium podem ser configuradas como armazenamento StorageV2."
    ],
    "respostas": [true, true, false],
    "explicacao": "Contas de armazenamento Premium fornecem armazenamento de alto desempenho para máquinas virtuais do Azure. Usar contas de armazenamento Premium para criar compartilhamentos de arquivos pode fornecer melhor desempenho e maior confiabilidade em comparação a contas de armazenamento padrão. Blobs em blocos são usados para armazenar dados não estruturados, como texto e imagens, podendo chegar a 4,75 TB de tamanho — contas Premium podem, sim, ser usadas para blobs em blocos. Contas de armazenamento Premium NÃO podem ser configuradas como contas StorageV2 — a conta StorageV2 é uma versão mais nova das contas de armazenamento de finalidade geral, que oferece todos os recursos das contas v1, além de recursos adicionais como compartilhamentos de arquivos maiores, maior IOPS/taxa de transferência e a camada de armazenamento Arquivo Morto.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-account-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 30 (banco original Q397)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Contas de armazenamento Premium com blobs em blocos (premium block blobs) oferecem suporte apenas a redundância <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "georredundante (GRS)",
      "geo-zona-redundante (GZRS)",
      "local (LRS)",
      "de zona (ZRS)"
    ],
    "resposta": 3,
    "explicacao": "A palavra-chave é 'redundância', o que significa que os dados precisarão ser armazenados em mais de um local. Contas de armazenamento Premium com blobs em blocos oferecem suporte apenas ao Armazenamento com Redundância de Zona (ZRS).",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 31 (banco original Q399)
  {
    "tipo": "unica",
    "texto": "Você precisa criar um novo compartilhamento de arquivos do Azure (Azure file share).\nO que você deve usar? Para responder, selecione o serviço apropriado.",
    "opcoes": [
      "Grupos de recursos",
      "App Services",
      "Contas de armazenamento",
      "Redes virtuais",
      "Microsoft Defender for Cloud"
    ],
    "resposta": 2,
    "explicacao": "Para criar um novo compartilhamento de arquivos do Azure, você deve usar o serviço \"Contas de armazenamento\" no portal do Azure, já que compartilhamentos de arquivos (Azure Files) são criados dentro de uma conta de armazenamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-how-to-create-file-share",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 32 (banco original Q400)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode implantar modelos do Azure Resource Manager (ARM) usando o portal do Azure.",
      "Modelos do Azure Resource Manager (ARM) podem definir infraestrutura usando código.",
      "Cada recurso do Azure a ser implantado exige um modelo do Azure Resource Manager (ARM) separado."
    ],
    "respostas": [true, true, false],
    "explicacao": "Você pode, sim, implantar modelos ARM usando o portal do Azure. Modelos ARM podem, sim, definir infraestrutura usando código (Infraestrutura como Código, IaC). Não é necessário usar um modelo separado para cada recurso — por exemplo, um modelo ARM pode definir uma máquina virtual, uma conta de armazenamento e uma rede virtual, todos juntos em um único modelo.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 33 (banco original Q401)
  {
    "tipo": "unica",
    "texto": "O que você deve usar para impedir que o tráfego de uma rede virtual do Azure seja roteado para uma conta de Armazenamento do Azure através da internet?",
    "opcoes": [
      "um grupo de segurança de rede (NSG)",
      "um endpoint público",
      "o Azure VPN Gateway",
      "um endpoint de serviço"
    ],
    "resposta": 3,
    "explicacao": "Um endpoint de serviço (service endpoint) estende a identidade da sua rede virtual aos serviços do Azure através de uma conexão direta, otimizando o roteamento para que o tráfego não precise passar pela internet pública — uma conta de armazenamento é um recurso do Azure Resource Manager, e o endpoint de serviço permite que o tráfego da rede virtual permaneça na rede de backbone da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-network-service-endpoints-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 34 (banco original Q414)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Os dados armazenados na camada de acesso Arquivo Morto (Archive) de uma conta de Armazenamento do Azure <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "podem ser acessados a qualquer momento usando-se azcopy.exe.",
      "só podem ser lidos usando-se o Backup do Azure.",
      "devem ser restaurados antes que os dados possam ser acessados.",
      "devem ser reidratados para que os dados possam ser acessados."
    ],
    "resposta": 3,
    "explicacao": "Os dados armazenados na camada de acesso Arquivo Morto de uma conta de Armazenamento do Azure devem ser reidratados antes que possam ser acessados.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal#archive-access-tier",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 35 (banco original Q422)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se as licenças do Windows Server ou do Microsoft SQL Server estiverem cobertas por <combobox>, você pode reaproveitar as licenças em máquinas virtuais do Azure.",
    "opcoes": [
      "Escolha uma opção",
      "um Contrato de Licença de Usuário Final (EULA)",
      "Microsoft Lifecycle Policy",
      "Software Assurance"
    ],
    "resposta": 2,
    "explicacao": "O Software Assurance é o programa da Microsoft que permite reaproveitar (via Benefício de Uso Híbrido do Azure) licenças existentes de Windows Server ou SQL Server em máquinas virtuais do Azure.",
    "link": "https://azure.microsoft.com/pt-br/pricing/hybrid-benefit/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 36 (banco original Q428)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A camada de acesso Quente (Hot) está disponível para dados de blob que usam armazenamento padrão (standard).",
      "A camada de acesso Fria (Cool) está disponível para compartilhamentos de arquivos em armazenamento Premium.",
      "A camada de acesso Fria (Cool) pode ser configurada no nível da conta de armazenamento."
    ],
    "respostas": [true, false, true],
    "explicacao": "Contas de armazenamento padrão oferecem suporte a diferentes camadas de acesso online adaptadas aos padrões de uso de dados — a camada Quente é otimizada para armazenar dados acessados ou modificados com frequência. Contas de armazenamento Premium usam SSDs projetados para desempenho alto e baixa latência, e não utilizam camadas de estilo blob padrão como Fria ou Arquivo Morto — para serviços de arquivo, compartilhamentos de arquivos Premium são provisionados em um nível de alto desempenho específico, com limites fixos. As camadas Fria (e Quente) podem, sim, ser configuradas no nível da conta de armazenamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 37 (banco original Q431)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O AzCopy é um utilitário de linha de comando usado para copiar blobs ou arquivos de ou para uma conta de armazenamento.",
      "O Storage Explorer do Azure é um serviço de migração hospedado na nuvem usado para transferir grandes quantidades de dados.",
      "A Sincronização de Arquivos do Azure sincroniza arquivos e pastas entre os Arquivos do Azure e servidores de arquivos Windows."
    ],
    "respostas": [true, false, true],
    "explicacao": "O AzCopy é um utilitário de linha de comando que você pode usar para copiar blobs ou arquivos de ou para uma conta de armazenamento. O Storage Explorer do Azure é, na verdade, um aplicativo autônomo (standalone) que facilita o trabalho com dados do Armazenamento do Azure no Windows, macOS e Linux — não é um serviço de migração hospedado na nuvem para transferir grandes quantidades de dados (essa função é do Azure Data Box). A Sincronização de Arquivos do Azure sincroniza, sim, arquivos e pastas entre os Arquivos do Azure e servidores de arquivos Windows.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-use-azcopy-v10",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 38 (banco original Q432)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é um serviço de migração física usado para transferir grandes quantidades de dados de modo rápido, econômico e confiável.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Data Box",
      "Azure Databricks",
      "Sincronização de Arquivos do Azure",
      "Azure Migrate"
    ],
    "resposta": 1,
    "explicacao": "A solução Microsoft Azure Data Box permite enviar terabytes de dados para dentro e para fora do Azure de forma rápida, econômica e confiável.",
    "link": "https://learn.microsoft.com/pt-br/azure/databox/data-box-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 39 (banco original Q446)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: A camada de acesso Fria (Cool) é otimizada <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "para dados que são acessados com pouca frequência e armazenados por pelo menos 30 dias.",
      "para dados que são acessados raramente, armazenados por pelo menos 180 dias, e têm requisitos de latência flexíveis.",
      "para armazenar dados que são acessados com frequência."
    ],
    "resposta": 1,
    "explicacao": "A camada de acesso Fria (Cool) é otimizada para dados que são acessados com pouca frequência e armazenados por pelo menos 30 dias.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 40 (banco original Q449)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> oferece suporte à sincronização entre o armazenamento local e o Armazenamento do Azure.",
    "opcoes": [
      "Escolha uma opção",
      "Armazenamento de Blobs do Azure",
      "Arquivos do Azure",
      "Armazenamento de Filas do Azure",
      "Armazenamento de Tabelas do Azure"
    ],
    "resposta": 1,
    "explicacao": "O Arquivos do Azure oferece suporte à sincronização entre o armazenamento local e o Armazenamento do Azure. A capacidade destacada nesta questão se refere a um serviço nativo de sincronização chamado Sincronização de Arquivos do Azure (Azure File Sync), que estende as capacidades do Arquivos do Azure, transformando seus Servidores Windows locais em um cache de alta velocidade para seus compartilhamentos de arquivos na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-sync-files-planning",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 41 (banco original Q450)
  {
    "tipo": "unica",
    "texto": "Você tem uma conta de Armazenamento do Azure chamada storage1.\nVocê precisa garantir que contêineres possam ser criados em storage1, mas não excluídos dele.\nO que você deve fazer?",
    "opcoes": [
      "Criar um bloqueio somente leitura (ReadOnly) para storage1.",
      "Criar um bloqueio de exclusão (delete lock) para storage1.",
      "Habilitar a exclusão reversível (soft delete) de contêineres.",
      "Habilitar a exclusão reversível (soft delete) de blobs."
    ],
    "resposta": 1,
    "explicacao": "Criar um bloqueio de exclusão para storage1. Um bloqueio de exclusão (CanNotDelete) impede a remoção do recurso protegido, mas ainda permite a criação de novos itens e modificações — atendendo exatamente ao requisito de permitir a criação, mas não a exclusão, de contêineres.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 42 (banco original Q455)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Apenas uma marca (tag) pode ser atribuída a um recurso do Azure.",
      "Marcas podem ser atribuídas a recursos do Azure usando modelos do Azure Resource Manager (ARM).",
      "Marcas podem ser usadas para impor padrões de nomenclatura de recursos do Azure."
    ],
    "respostas": [false, true, false],
    "explicacao": "Não é verdade que apenas uma marca pode ser atribuída a um recurso — cada recurso ou grupo de recursos pode ter até 50 marcas. Marcas podem, sim, ser atribuídas a recursos do Azure usando modelos ARM. Marcas não são usadas para impor padrões de nomenclatura — para isso, usa-se o Azure Policy.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/tag-resources",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 43 (banco original Q456)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> avalia sinais para permitir ou negar logins no Microsoft Entra ID.",
    "opcoes": [
      "Escolha uma opção",
      "Uma identidade gerenciada",
      "Acesso Condicional",
      "Microsoft Intune"
    ],
    "resposta": 1,
    "explicacao": "O Acesso Condicional é o mecanismo de política fundamental no núcleo da arquitetura de identidade Zero Trust da Microsoft. Ele funciona como um verificador automatizado de instruções \"se-então\" que agrega métricas em tempo real antes de conceder acesso a recursos corporativos.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 44 (banco original Q465)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A camada de acesso Fria (Cold) no Armazenamento do Azure é otimizada para pelo menos 90 dias de armazenamento de dados.",
      "A camada de acesso Fria (Cool) no Armazenamento do Azure é otimizada para pelo menos 90 dias de armazenamento de dados.",
      "A camada de acesso Arquivo Morto (Archive) no Armazenamento do Azure é otimizada para pelo menos 180 dias de armazenamento de dados."
    ],
    "respostas": [false, false, true],
    "explicacao": "A camada de acesso Fria (Cold) é uma camada online mais recente, posicionada entre a Fria (Cool) e a Arquivo Morto. Ela é otimizada para armazenar dados acessados ou modificados com pouca frequência, com um compromisso mínimo de retenção de 30 dias — não 90. Assim como a camada Cold, a camada Cool é projetada para armazenamento de curto a médio prazo de dados acessados com pouca frequência, também com duração mínima de 30 dias, não 90. A camada Arquivo Morto tem, de fato, um compromisso de duração mínima de 180 dias.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 45 (banco original Q469)
  {
    "tipo": "dragdrop",
    "texto": "Associe o método de autenticação ao nível de segurança e conveniência apropriado. Cada método pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Autenticação multifator (MFA)" },
      { "label": "Autenticação por senha" },
      { "label": "Autenticação sem senha (passwordless)" }
    ],
    "grupos": [
      "Alta segurança / Inconveniente",
      "Alta segurança / Conveniente",
      "Baixa segurança / Conveniente"
    ],
    "respostas": {
      "Alta segurança / Inconveniente": ["Autenticação multifator (MFA)"],
      "Alta segurança / Conveniente": ["Autenticação sem senha (passwordless)"],
      "Baixa segurança / Conveniente": ["Autenticação por senha"]
    },
    "explicacao": "A autenticação multifator (MFA) oferece alta segurança, mas exige etapas extras do usuário (menos conveniente). A autenticação sem senha (passwordless), usando biometria ou chaves de segurança, oferece alta segurança e alta conveniência — sendo posicionada pela Microsoft como o melhor dos dois mundos. A autenticação apenas por senha é conveniente (fácil de usar), mas apresenta baixa segurança, sendo vulnerável a phishing, reutilização de senha e ataques de força bruta.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-authentication-passwordless",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 46 (banco original Q470)
  {
    "tipo": "unica",
    "texto": "Quantas cópias de dados são armazenadas no armazenamento geo-zona-redundante (GZRS)?",
    "opcoes": ["2", "3", "6", "12"],
    "resposta": 2,
    "explicacao": "O Armazenamento Geo-Zona-Redundante (GZRS) combina a alta disponibilidade do Armazenamento com Redundância de Zona (ZRS) com a proteção de recuperação de desastre regional do Armazenamento Georredundante (GRS). Ele replica seus dados em um total de 6 cópias divididas entre duas regiões geográficas distintas.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-redundancy#geo-redundant-storage",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  },
  // Questao 47 (banco original Q471)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se você excluir dados de <combobox> antes de decorridos 30 dias, você deverá pagar uma taxa de exclusão antecipada.",
    "opcoes": [
      "Escolha uma opção",
      "um datastore do Azure Cosmos DB",
      "um Banco de Dados SQL do Azure",
      "a camada de acesso Fria (Cool) do Armazenamento de Blobs do Azure",
      "a camada de acesso Quente (Hot) do Armazenamento de Blobs do Azure"
    ],
    "resposta": 2,
    "explicacao": "A camada de acesso Fria (Cool): esta camada é projetada para dados acessados com pouca frequência e que devem permanecer armazenados por pelo menos 30 dias. Se um blob for excluído, sobrescrito ou movido para outra camada antes do término dessa janela de 30 dias, o Azure cobra uma taxa de exclusão antecipada proporcional aos dias restantes de armazenamento. Já a camada Quente é otimizada para acesso frequente de leitura/gravação, não tem requisito de duração mínima de armazenamento e não cobra penalidades de exclusão antecipada, embora seu custo de armazenamento por gigabyte seja mais alto.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/blobs/access-tiers-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco06"
  }

];