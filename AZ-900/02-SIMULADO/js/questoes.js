// ==========================================
// Arquivo: questoes_bloco02.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 2 de 10 — Descrever os benefícios do uso de serviços de nuvem
// (alta disponibilidade e escalabilidade; confiabilidade e previsibilidade;
//  segurança e governança; capacidade de gerenciamento)
// 47 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
// Terminologia atualizada onde aplicável (Azure Sentinel -> Microsoft Sentinel)
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q19)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê precisa implantar um aplicativo crítico de linha de negócio (LOB) em uma máquina virtual no Azure.\nVocê foi informado de que a estratégia de implantação do aplicativo deve garantir uma disponibilidade de 99,99%. Você precisa garantir que a estratégia utilize o menor número possível de máquinas virtuais e zonas de disponibilidade.\nSolução: Você inclui duas máquinas virtuais e uma zona de disponibilidade na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Para todas as VMs com duas ou mais instâncias implantadas em duas ou mais zonas de disponibilidade na mesma região, a Microsoft garante conectividade de pelo menos 99,99% do tempo. Já para VMs com duas ou mais instâncias no mesmo conjunto de disponibilidade (sem múltiplas zonas), a garantia é de 99,95%. Como o cenário usa apenas uma zona, o SLA de 99,99% não é atingido.",
    "link": "https://learn.microsoft.com/pt-br/azure/reliability/availability-zones-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 02 (banco original Q20)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nVocê precisa implantar um aplicativo crítico de linha de negócio (LOB) em uma máquina virtual no Azure.\nVocê foi informado de que a estratégia de implantação do aplicativo deve garantir uma disponibilidade de 99,99%. Você precisa garantir que a estratégia utilize o menor número possível de máquinas virtuais e zonas de disponibilidade.\nSolução: Você inclui uma máquina virtual e duas zonas de disponibilidade na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Uma única instância de VM, mesmo distribuída entre zonas, não atinge o SLA de 99,99% — esse nível exige duas ou mais instâncias implantadas em duas ou mais zonas de disponibilidade na mesma região. VMs de instância única têm SLAs de no máximo 99,9% (Premium SSD/Ultra Disk), 99,5% (SSD padrão) ou 95% (HDD padrão).",
    "link": "https://learn.microsoft.com/pt-br/azure/reliability/availability-zones-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 03 (banco original Q37)
  {
    "tipo": "unica",
    "texto": "Você tem uma rede local que contém vários servidores.\nVocê planeja migrar todos os servidores para o Azure.\nVocê precisa recomendar uma solução para garantir que alguns dos servidores fiquem disponíveis caso um único datacenter do Azure fique offline por um período prolongado.\nO que você deve incluir na recomendação?",
    "opcoes": ["tolerância a falhas", "elasticidade", "escalabilidade", "baixa latência"],
    "resposta": 0,
    "explicacao": "Tolerância a falhas é a capacidade de um sistema continuar funcionando mesmo que alguns de seus componentes falhem. Neste cenário, você poderia ter servidores replicados entre datacenters. As zonas de disponibilidade ampliam o nível de controle para manter a disponibilidade de aplicativos e dados nas VMs — são locais físicos únicos dentro de uma região do Azure, cada uma com pelo menos três zonas separadas, garantindo que, se uma zona for comprometida, aplicativos e dados replicados fiquem instantaneamente disponíveis em outra zona (SLA de até 99,99%).",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/availability",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 04 (banco original Q44)
  {
    "tipo": "unica",
    "texto": "Sua empresa hospeda um aplicativo contábil chamado App1, usado por todos os clientes da empresa. O App1 tem uso baixo nas três primeiras semanas de cada mês e uso muito alto na última semana de cada mês.\nQual benefício dos Serviços de Nuvem do Azure dá suporte ao gerenciamento de custos para esse tipo de padrão de uso?",
    "opcoes": ["alta disponibilidade", "alta latência", "elasticidade", "balanceamento de carga"],
    "resposta": 2,
    "explicacao": "A elasticidade, neste caso, é a capacidade de fornecer recursos de computação adicionais quando necessário e reduzi-los quando não são mais necessários, diminuindo custos. O dimensionamento automático (autoscaling) é um exemplo de elasticidade: o sistema ajusta os recursos alocados à demanda real, sem interromper as operações, evitando pagar por capacidade ociosa.",
    "link": "https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-elastic-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 05 (banco original Q50, idêntica à Q81)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Azure Site Recovery fornece <combobox> para máquinas virtuais.",
    "opcoes": [
      "Escolha uma opção",
      "tolerância a falhas",
      "recuperação de desastre",
      "elasticidade",
      "alta disponibilidade"
    ],
    "resposta": 2,
    "explicacao": "O Azure Site Recovery é um serviço de recuperação de desastre fornecido pelo Microsoft Azure, que pode ser usado para proteger e recuperar máquinas virtuais.",
    "link": "https://azure.microsoft.com/pt-br/products/site-recovery/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 06 (banco original Q54)
  {
    "tipo": "dragdrop",
    "texto": "Associe o benefício do serviço do Azure à descrição correta. Cada benefício pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Recuperação de Desastre" },
      { "label": "Tolerância a Falhas" },
      { "label": "Baixa Latência" },
      { "label": "Escalabilidade Dinâmica" }
    ],
    "grupos": [
      "Um serviço de nuvem que permanece disponível após a ocorrência de uma falha",
      "Um serviço de nuvem que pode ser recuperado após a ocorrência de uma falha",
      "Um serviço de nuvem que tem bom desempenho quando a demanda aumenta",
      "Um serviço de nuvem que pode ser acessado rapidamente pela internet"
    ],
    "respostas": {
      "Um serviço de nuvem que permanece disponível após a ocorrência de uma falha": ["Tolerância a Falhas"],
      "Um serviço de nuvem que pode ser recuperado após a ocorrência de uma falha": ["Recuperação de Desastre"],
      "Um serviço de nuvem que tem bom desempenho quando a demanda aumenta": ["Escalabilidade Dinâmica"],
      "Um serviço de nuvem que pode ser acessado rapidamente pela internet": ["Baixa Latência"]
    },
    "explicacao": "Tolerância a falhas é a capacidade de um serviço permanecer disponível após a falha de um de seus componentes (ex.: um serviço rodando em vários servidores resiste à falha de um deles). Recuperação de desastre é a restauração de um serviço após uma falha (ex.: restaurar uma VM a partir de backup). Escalabilidade dinâmica é a capacidade de adicionar recursos de computação a um serviço sob carga pesada (ex.: um conjunto de dimensionamento de VMs adicionando instâncias). Baixa latência é o tempo de resposta rápido de um serviço a requisições.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 07 (banco original Q57)
  {
    "tipo": "multipla",
    "texto": "Sua empresa tem uma rede local que contém vários servidores.\nA empresa planeja reduzir as seguintes responsabilidades administrativas:\n• Fazer backup dos dados de aplicativos\n• Substituir hardware de servidor com falha\n• Gerenciar a segurança física dos servidores\n• Atualizar os sistemas operacionais dos servidores\n• Gerenciar permissões de documentos compartilhados\nA empresa planeja migrar servidores para máquinas virtuais do Azure.\nVocê precisa identificar quais responsabilidades administrativas serão eliminadas após a migração planejada.\nQuais duas responsabilidades você deve identificar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Substituir hardware de servidor com falha",
      "Fazer backup dos dados de aplicativos",
      "Gerenciar a segurança física dos servidores",
      "Atualizar os sistemas operacionais dos servidores",
      "Gerenciar permissões de documentos compartilhados"
    ],
    "respostas": [0, 2],
    "explicacao": "As máquinas virtuais do Azure rodam em servidores físicos Hyper-V que são de propriedade e gerenciados pela Microsoft. Como cliente, você não tem acesso aos servidores físicos — a Microsoft gerencia a substituição de hardware com falha e a segurança física. Já o backup dos dados de aplicativos, a atualização dos sistemas operacionais das VMs e o gerenciamento de permissões de pastas compartilhadas continuam sendo responsabilidade sua, pois a Microsoft não tem controle sobre os aplicativos, sistemas operacionais ou pastas que você executa nas VMs.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 08 (banco original Q80)
  {
    "tipo": "dragdrop",
    "texto": "Associe o benefício da nuvem à descrição correta. Cada benefício pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Agilidade" },
      { "label": "Distribuição Geográfica (Geo-distribution)" },
      { "label": "Escalabilidade" }
    ],
    "grupos": [
      "Os recursos podem ser provisionados dinamicamente para atender a demandas em mudança.",
      "Aplicativos e dados podem ser implantados em várias regiões.",
      "Aplicativos podem ser desenvolvidos, testados e lançados rapidamente."
    ],
    "respostas": {
      "Os recursos podem ser provisionados dinamicamente para atender a demandas em mudança.": ["Escalabilidade"],
      "Aplicativos e dados podem ser implantados em várias regiões.": ["Distribuição Geográfica (Geo-distribution)"],
      "Aplicativos podem ser desenvolvidos, testados e lançados rapidamente.": ["Agilidade"]
    },
    "explicacao": "Escalabilidade se refere à capacidade de um sistema lidar com o crescimento ou a redução da carga de trabalho ajustando seus recursos (horizontal ou verticalmente). Distribuição geográfica é a prática de executar instâncias de aplicativos e replicar dados em locais físicos distintos globalmente, garantindo redundância regional e reduzindo a latência para usuários finais. Agilidade descreve a velocidade operacional e a flexibilidade organizacional obtidas ao migrar cargas de trabalho para a nuvem, permitindo provisionar ambientes completos em minutos.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/principles-cloud-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 09 (banco original Q81, idêntica à Q50)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Azure Site Recovery fornece <combobox> para máquinas virtuais.",
    "opcoes": [
      "Escolha uma opção",
      "tolerância a falhas",
      "recuperação de desastre",
      "elasticidade",
      "alta disponibilidade"
    ],
    "resposta": 2,
    "explicacao": "Você configura a recuperação de desastre para VMs do Azure usando o Azure Site Recovery.",
    "link": "https://learn.microsoft.com/pt-br/azure/site-recovery/azure-to-azure-tutorial-enable-replication",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 10 (banco original Q88, idêntica em conceito à Q392)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O dimensionamento automático (autoscaling) é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "agilidade",
      "elasticidade",
      "distribuição geográfica",
      "previsibilidade"
    ],
    "resposta": 2,
    "explicacao": "Um conjunto de dimensionamento de máquinas virtuais do Azure pode aumentar ou diminuir automaticamente o número de instâncias de VM que executam seu aplicativo. Esse comportamento automatizado e elástico reduz a sobrecarga de gerenciamento necessária para monitorar e otimizar o desempenho do aplicativo.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 11 (banco original Q90)
  {
    "tipo": "unica",
    "texto": "Qual termo representa a capacidade de aumentar a capacidade de computação de uma máquina virtual adicionando memória ou CPUs?",
    "opcoes": ["agilidade", "escala vertical", "escala horizontal", "elasticidade"],
    "resposta": 1,
    "explicacao": "Escala vertical, também conhecida como scale up e scale down, significa aumentar ou diminuir o tamanho de uma máquina virtual (VM) em resposta a uma carga de trabalho. Compare esse comportamento com a escala horizontal (scale out/scale in), em que o número de VMs é alterado dependendo da carga de trabalho.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-vertical-scale-reprovision",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 12 (banco original Q93)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> permite que recursos do Azure sejam implantados próximos aos usuários.",
    "opcoes": [
      "Escolha uma opção",
      "Elasticidade",
      "Distribuição Geográfica (Geo-distribution)",
      "Alta disponibilidade",
      "Escalabilidade"
    ],
    "resposta": 2,
    "explicacao": "Graças à distribuição geográfica, você pode implantar aplicativos e dados em datacenters regionais ao redor do mundo, garantindo que seus clientes sempre tenham o melhor desempenho em sua região.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/benefits-of-cloud-computing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 13 (banco original Q94)
  {
    "tipo": "dragdrop",
    "texto": "Associe o benefício da computação em nuvem à descrição apropriada. Cada benefício pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Recuperação de Desastre" },
      { "label": "Distribuição Geográfica (Geo-distribution)" },
      { "label": "Alta Disponibilidade" },
      { "label": "Escalabilidade" }
    ],
    "grupos": [
      "Aumentar a capacidade de computação de aplicativos na nuvem.",
      "Fornecer uma experiência de usuário contínua, sem indisponibilidade aparente.",
      "Garantir que os usuários sempre tenham a melhor experiência, implantando aplicativos em todas as regiões onde há usuários."
    ],
    "respostas": {
      "Aumentar a capacidade de computação de aplicativos na nuvem.": ["Escalabilidade"],
      "Fornecer uma experiência de usuário contínua, sem indisponibilidade aparente.": ["Alta Disponibilidade"],
      "Garantir que os usuários sempre tenham a melhor experiência, implantando aplicativos em todas as regiões onde há usuários.": ["Distribuição Geográfica (Geo-distribution)"]
    },
    "explicacao": "Escalabilidade aumenta a capacidade de computação de aplicativos na nuvem. Alta disponibilidade garante uma experiência contínua ao usuário, sem indisponibilidade perceptível. Distribuição geográfica garante que os usuários sempre tenham a melhor experiência ao implantar aplicativos nas regiões onde eles estão.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/benefits-of-cloud-computing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 14 (banco original Q95)
  {
    "tipo": "unica",
    "texto": "Qual benefício da computação em nuvem fornece acesso contínuo do usuário a um aplicativo baseado em nuvem, com indisponibilidade mínima?",
    "opcoes": ["agilidade", "escalabilidade", "elasticidade", "alta disponibilidade"],
    "resposta": 3,
    "explicacao": "Alta disponibilidade é a única resposta diretamente relacionada a manter os aplicativos disponíveis para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/benefits-of-cloud-computing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 15 (banco original Q108)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "As zonas de disponibilidade podem ser implementadas em todas as regiões do Azure.",
      "Somente máquinas virtuais que executam o Windows Server podem ser criadas em zonas de disponibilidade.",
      "As zonas de disponibilidade são usadas para replicar dados e aplicativos em várias regiões."
    ],
    "respostas": [false, false, false],
    "explicacao": "Nem todas as regiões do Azure oferecem suporte a zonas de disponibilidade. As zonas de disponibilidade podem ser usadas com muitos serviços do Azure, não apenas VMs — inclusive com qualquer sistema operacional suportado, não só Windows Server. E as zonas de disponibilidade são locais físicos únicos dentro de uma única região do Azure, não uma forma de replicar entre regiões diferentes.",
    "link": "https://learn.microsoft.com/pt-br/azure/reliability/availability-zones-region-support",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 16 (banco original Q139)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma Zona de Disponibilidade no Azure tem locais fisicamente separados <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "em dois continentes",
      "dentro de uma única região do Azure",
      "em várias regiões do Azure",
      "dentro de um único datacenter do Azure"
    ],
    "resposta": 2,
    "explicacao": "As zonas de disponibilidade do Azure são locais fisicamente separados dentro de cada região do Azure, tolerantes a falhas locais.",
    "link": "https://learn.microsoft.com/pt-br/azure/reliability/availability-zones-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 17 (banco original Q146)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma região do Azure <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "contém um ou mais datacenters conectados por uma rede de baixa latência.",
      "é encontrada em todos os países onde a Microsoft tem uma subsidiária.",
      "pode ser encontrada em todos os países da Europa e das Américas apenas.",
      "contém um ou mais datacenters conectados por uma rede de alta latência."
    ],
    "resposta": 1,
    "explicacao": "Cada região do Azure é composta por datacenters implantados dentro de um perímetro definido por latência, conectados por meio de uma rede regional dedicada de baixa latência. Esse design garante que os serviços do Azure em qualquer região ofereçam o melhor desempenho e segurança possíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/reliability/availability-zones-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 18 (banco original Q154)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nUm dos benefícios do Azure SQL Data Warehouse é que a alta disponibilidade já vem integrada à plataforma.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "dimensionamento automático", "compressão de dados", "versionamento"],
    "resposta": 0,
    "explicacao": "O Azure Data Warehouse (hoje conhecido como Azure Synapse Analytics) é uma oferta PaaS da Microsoft. Como todos os serviços PaaS da Microsoft, o SQL Data Warehouse oferece um SLA de disponibilidade de 99,9%. A Microsoft consegue oferecer essa disponibilidade porque possui recursos de alta disponibilidade integrados à plataforma — portanto, a afirmação já está correta como está.",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-faq",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 19 (banco original Q170)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure à descrição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure HDInsight" },
      { "label": "Azure Data Lake Analytics" },
      { "label": "Azure Synapse Analytics" },
      { "label": "Banco de Dados SQL do Azure" }
    ],
    "grupos": [
      "Um serviço de banco de dados relacional gerenciado na nuvem.",
      "Um serviço baseado em nuvem que utiliza processamento massivamente paralelo (MPP) para executar rapidamente consultas complexas em petabytes de dados em um banco de dados relacional.",
      "Pode executar programas de transformação e processamento de dados massivamente paralelos em petabytes de dados.",
      "Uma estrutura de código aberto para o processamento distribuído e a análise de grandes conjuntos de dados em clusters."
    ],
    "respostas": {
      "Um serviço de banco de dados relacional gerenciado na nuvem.": ["Banco de Dados SQL do Azure"],
      "Um serviço baseado em nuvem que utiliza processamento massivamente paralelo (MPP) para executar rapidamente consultas complexas em petabytes de dados em um banco de dados relacional.": ["Azure Synapse Analytics"],
      "Pode executar programas de transformação e processamento de dados massivamente paralelos em petabytes de dados.": ["Azure Data Lake Analytics"],
      "Uma estrutura de código aberto para o processamento distribuído e a análise de grandes conjuntos de dados em clusters.": ["Azure HDInsight"]
    },
    "explicacao": "Dica de memorização: \"relacional\" remete a SQL; \"massivamente paralelo em petabytes com banco relacional\" remete a Synapse; \"processamento massivo em petabytes\" (sem ser necessariamente relacional) remete a Data Lake; \"código aberto\" remete a HDInsight (baseado em frameworks como Hadoop e Spark).",
    "link": "https://learn.microsoft.com/pt-br/azure/synapse-analytics/overview-what-is",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 20 (banco original Q174)
  {
    "tipo": "unica",
    "texto": "Você planeja implantar um site no Azure. O site será acessado por usuários do mundo todo e hospedará arquivos de vídeo grandes.\nVocê precisa recomendar qual recurso do Azure deve ser usado para fornecer a melhor experiência de reprodução de vídeo.\nO que você deve recomendar?",
    "opcoes": ["um gateway de aplicativo", "um circuito do Azure ExpressRoute", "uma rede de distribuição de conteúdo (CDN)", "um perfil do Azure Traffic Manager"],
    "resposta": 2,
    "explicacao": "Como os usuários estão localizados globalmente e farão download de arquivos de vídeo grandes, a experiência de reprodução melhora se eles puderem baixar o vídeo de servidores na mesma região. Uma rede de distribuição de conteúdo (CDN) é uma rede distribuída de servidores que armazena conteúdo em cache em nós de presença (POPs) próximos aos usuários finais, minimizando a latência e melhorando o desempenho.",
    "link": "https://learn.microsoft.com/pt-br/azure/cdn/cdn-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 21 (banco original Q200)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é um serviço de análise baseado em Apache Spark.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Databricks",
      "Azure Data Factory",
      "Azure DevOps",
      "Azure Synapse Analytics"
    ],
    "resposta": 1,
    "explicacao": "O Azure Databricks é um serviço rápido, fácil e colaborativo de análise de big data baseado em Apache Spark, projetado para ciência de dados e engenharia de dados.",
    "link": "https://azure.microsoft.com/pt-br/products/databricks/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 22 (banco original Q222)
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure você pode usar como uma solução de gerenciamento de eventos e informações de segurança (SIEM)?",
    "opcoes": ["Azure Analysis Services", "Microsoft Sentinel", "Azure Information Protection", "Azure Cognitive Services"],
    "resposta": 1,
    "explicacao": "O Microsoft Sentinel (anteriormente Azure Sentinel) é uma solução escalável, nativa em nuvem, de gerenciamento de eventos e informações de segurança (SIEM) e de resposta automatizada e orquestrada de segurança (SOAR).",
    "link": "https://azure.microsoft.com/pt-br/products/microsoft-sentinel/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 23 (banco original Q229)
  {
    "tipo": "unica",
    "texto": "Quais recursos podem ser usados como origem em uma regra de segurança de entrada de um grupo de segurança de rede?",
    "opcoes": [
      "Somente Marcas de Serviço (Service Tags)",
      "Endereços IP, Marcas de Serviço e Grupos de Segurança de Aplicativo",
      "Somente Grupos de Segurança de Aplicativo",
      "Somente Endereços IP"
    ],
    "resposta": 1,
    "explicacao": "A origem ou o destino de uma regra pode ser: qualquer valor, um endereço IP individual, um bloco CIDR (ex.: 10.0.0.0/24), uma marca de serviço (service tag) ou um grupo de segurança de aplicativo. Especificar um intervalo, uma marca de serviço ou um grupo de segurança de aplicativo permite criar menos regras de segurança.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 24 (banco original Q235, idêntica em conceito à Q222)
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure você pode usar como uma solução de gerenciamento de eventos e informações de segurança (SIEM)?",
    "opcoes": ["Azure Analysis Services", "Microsoft Sentinel", "Azure Information Protection", "Azure Cognitive Services"],
    "resposta": 1,
    "explicacao": "O Microsoft Sentinel é uma solução escalável, nativa em nuvem, de gerenciamento de eventos e informações de segurança (SIEM) e de resposta automatizada e orquestrada de segurança (SOAR). Ele fornece análises de segurança inteligentes e inteligência contra ameaças em toda a empresa, oferecendo uma única solução para detecção de ataques, visibilidade de ameaças, busca proativa e resposta a ameaças.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 25 (banco original Q246, idêntica à Q232 do Bloco 1)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: A proteção contra negação de serviço distribuída (DDoS) do Azure é um exemplo de proteção implementada na <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "camada de aplicativo",
      "camada de computação",
      "camada de rede",
      "camada de perímetro"
    ],
    "resposta": 4,
    "explicacao": "A camada de perímetro utiliza proteção contra negação de serviço distribuída (DDoS) para filtrar ataques em larga escala antes que possam causar uma negação de serviço para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/secure-network-connectivity-azure/2-what-is-defense-in-depth",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 26 (banco original Q289)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O Azure China <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "é operado pela Microsoft.",
      "tem paridade de recursos com o Azure global.",
      "só pode ser acessado a partir da China.",
      "é uma instância distinta e separada do Microsoft Azure."
    ],
    "resposta": 4,
    "explicacao": "O Microsoft Azure operado pela 21Vianet (Azure China) é uma instância fisicamente separada dos serviços de nuvem, localizada na China.",
    "link": "https://learn.microsoft.com/pt-br/azure/china/overview-operations",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 27 (banco original Q325)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você tem um aplicativo composto por um aplicativo Web do Azure com um SLA (Contrato de Nível de Serviço) de 99,95% e um banco de dados SQL do Azure com um SLA de 99,99%. O SLA composto para o aplicativo é <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "o produto dos dois SLAs, que equivale a 99,94 por cento",
      "o menor SLA associado ao aplicativo, que é 99,95 por cento",
      "o maior SLA associado ao aplicativo, que é 99,99 por cento",
      "a diferença entre os dois SLAs, que é 0,05 por cento"
    ],
    "resposta": 1,
    "explicacao": "SLAs compostos envolvem múltiplos serviços dando suporte a um aplicativo, cada um com um nível de disponibilidade diferente. Se qualquer um dos serviços falhar, todo o aplicativo falha. Como a probabilidade de falha de cada serviço é independente, o SLA composto é 99,95% × 99,99% = 99,94% — menor que os SLAs individuais, o que não é surpreendente, já que um aplicativo que depende de múltiplos serviços tem mais pontos potenciais de falha.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/framework/resiliency/business-metrics",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 28 (banco original Q326)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O tempo de atividade mínimo garantido para todos os serviços do Azure é de 99,9%.",
      "A garantia de tempo de atividade do SLA aumenta quando os recursos são implantados em várias regiões.",
      "O número de assinaturas está relacionado ao SLA de tempo de atividade."
    ],
    "respostas": [true, true, false],
    "explicacao": "Os SLAs variam conforme o tipo de recurso e a distribuição geográfica, mas o tempo de atividade mínimo garantido para todos os serviços do Azure é de 99,9%. Essa garantia geralmente aumenta (normalmente para 99,95%) quando os recursos são implantados em várias regiões. O número de assinaturas não tem relação com o SLA de tempo de atividade — você pode implantar recursos em várias regiões sob uma única assinatura, ou ter várias assinaturas com recursos implantados na mesma região.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/summary/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 29 (banco original Q338, idêntica à Q439)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você implanta um recurso do Azure. O recurso fica indisponível por um período prolongado devido a uma interrupção de serviço. A Microsoft irá <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "reembolsar sua conta bancária.",
      "migrar o recurso para outra assinatura.",
      "creditar sua conta do Azure.",
      "enviar um código de cupom que você pode resgatar por créditos do Azure."
    ],
    "resposta": 3,
    "explicacao": "Se o SLA de um serviço do Azure não for cumprido, você recebe créditos referentes a esse serviço específico, deduzidos da sua fatura mensal daquele serviço. Os Créditos de Serviço se aplicam apenas às taxas pagas pelo Serviço, Recurso de Serviço ou nível de Serviço específico cujo Nível de Serviço não foi atingido, e nunca excedem, em qualquer mês de faturamento, as taxas mensais de serviço pagas para aquele Serviço ou Recurso de Serviço.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/summary/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 30 (banco original Q341)
  {
    "tipo": "unica",
    "texto": "Você tem um aplicativo do Azure que usa os serviços mostrados na tabela a seguir: Aplicativos Web do Serviço de Aplicativo (SLA de 99,95%) e Banco de Dados SQL do Azure (SLA de 99,99%).\nComo você deve calcular o SLA composto para o aplicativo?",
    "opcoes": [
      "0,999 * 0,9999 = 0,9989001 = 99,89001%",
      "0,999 / 0,9999 = 0,9991 = 99,91%",
      "Max(0,999, 0,9999) = 0,9999 = 99,99%",
      "Min(0,999, 0,9999) = 0,999 = 99,9%"
    ],
    "resposta": 0,
    "explicacao": "SLAs compostos envolvem múltiplos serviços dando suporte a um aplicativo, cada um com um nível de disponibilidade diferente. Se qualquer serviço falhar, todo o aplicativo falha. Como a probabilidade de falha de cada serviço é independente, o cálculo correto é o produto (multiplicação) dos SLAs individuais — não a soma, a divisão, o máximo ou o mínimo entre eles.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/framework/resiliency/business-metrics",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 31 (banco original Q344, idêntica à Q372)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Todos os serviços do Azure que estão em pré-visualização pública (public preview) são <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "fornecidos sem nenhuma documentação.",
      "configuráveis apenas pela CLI do Azure.",
      "excluídos dos Contratos de Nível de Serviço (SLAs).",
      "configuráveis apenas pelo portal do Azure."
    ],
    "resposta": 3,
    "explicacao": "Os recursos de pré-visualização são disponibilizados sob a condição de que você aceite termos adicionais que complementam os termos regulares do Azure. Esses termos suplementares estabelecem que as pré-visualizações são fornecidas \"como estão\", \"com todas as falhas\" e \"conforme disponibilidade\", sendo excluídas dos Contratos de Nível de Serviço e da garantia limitada.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 32 (banco original Q352, idêntica à Q231 do Bloco 1)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> no Firewall do Azure permitem que usuários na internet acessem um servidor em uma rede virtual.",
    "opcoes": [
      "Escolha uma opção",
      "Regras de aplicativo",
      "Regras de NAT (Conversão de Endereços de Rede)",
      "Regras de rede",
      "Marcas de serviço"
    ],
    "resposta": 2,
    "explicacao": "As regras de DNAT permitem ou negam tráfego de entrada através do(s) endereço(s) IP público(s) do firewall. Você usa uma regra de DNAT quando quer que um endereço IP público seja traduzido para um endereço IP privado, permitindo filtrar o tráfego da internet e traduzi-lo para recursos internos no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/policy-rule-sets",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 33 (banco original Q356)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Todos os serviços do Azure em pré-visualização privada devem ser acessados usando um portal do Azure separado.",
      "Serviços do Azure em pré-visualização pública podem ser usados em ambientes de produção.",
      "Serviços do Azure em pré-visualização pública estão sujeitos a um Contrato de Nível de Serviço (SLA)."
    ],
    "respostas": [false, true, false],
    "explicacao": "Serviços em pré-visualização privada podem ser visualizados no portal regular do Azure — porém, é preciso estar inscrito no recurso em pré-visualização privada antes de poder visualizá-lo, e o acesso geralmente é apenas por convite. Serviços em pré-visualização pública podem ser usados em produção, mas o serviço pode ter falhas, não está sujeito a um SLA e pode ser retirado sem aviso prévio — as pré-visualizações públicas são excluídas dos SLAs e, em alguns casos, nenhum suporte é oferecido.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 34 (banco original Q365)
  {
    "tipo": "comboboxs",
    "texto": "Como você deve calcular a porcentagem de tempo de atividade mensal? Para responder, selecione as opções apropriadas na área de resposta. A fórmula é: (<combobox 1>) / <combobox 2> × <combobox 3>",
    "pares": [
      {
        "requisito": "Primeira parte da fórmula (numerador):",
        "opcoes": [
          "Tempo de Inatividade em Minutos",
          "Minutos Máximos Disponíveis",
          "(Minutos Máximos Disponíveis − Tempo de Inatividade em Minutos)"
        ],
        "resposta": 2
      },
      {
        "requisito": "Segunda parte da fórmula (denominador):",
        "opcoes": [
          "60",
          "1.440",
          "Minutos Máximos Disponíveis"
        ],
        "resposta": 2
      },
      {
        "requisito": "Terceira parte da fórmula (multiplicador):",
        "opcoes": [
          "100",
          "99,99",
          "1.440"
        ],
        "resposta": 0
      }
    ],
    "explicacao": "\"Minutos Máximos Disponíveis\" é o total de minutos acumulados durante um mês de cobrança. \"Tempo de Inatividade\" é o total de minutos, dentro dos Minutos Máximos Disponíveis, em que o sistema ficou indisponível. A \"Porcentagem de Tempo de Atividade Mensal\" de um serviço é calculada como Minutos Máximos Disponíveis menos o Tempo de Inatividade, dividido pelos Minutos Máximos Disponíveis, multiplicado por 100. Fórmula: % de Tempo de Atividade Mensal = (Minutos Máximos Disponíveis − Tempo de Inatividade) / Minutos Máximos Disponíveis × 100.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/cloud-services/v1_0/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 35 (banco original Q372, idêntica à Q344)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Todos os serviços do Azure que estão em pré-visualização pública (public preview) são <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "fornecidos sem nenhuma documentação",
      "configuráveis apenas pela CLI do Azure",
      "excluídos dos Contratos de Nível de Serviço (SLAs)",
      "configuráveis apenas pelo portal do Azure"
    ],
    "resposta": 3,
    "explicacao": "Os recursos de pré-visualização são disponibilizados sob a condição de aceitação de termos suplementares. Esses termos estabelecem que as pré-visualizações são fornecidas \"como estão\", \"com todas as falhas\" e \"conforme disponibilidade\", e são excluídas dos Contratos de Nível de Serviço e da garantia limitada.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 36 (banco original Q377)
  {
    "tipo": "unica",
    "texto": "O que permite que um serviço de nuvem se adapte rapidamente a requisitos em mudança?",
    "opcoes": ["alta disponibilidade", "previsibilidade", "capacidade de gerenciamento", "agilidade"],
    "resposta": 3,
    "explicacao": "Agilidade é a capacidade de reagir rapidamente. Os serviços de nuvem podem alocar e desalocar recursos rapidamente, sendo fornecidos sob demanda via self-service, permitindo provisionar grandes volumes de recursos de computação em minutos, sem intervenção manual.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/benefits-of-cloud-computing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 37 (banco original Q386)
  {
    "tipo": "dragdrop",
    "texto": "Associe o benefício da computação em nuvem ao requisito apropriado. Cada benefício pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Recuperação de Desastre" },
      { "label": "Distribuição Geográfica (Geo-distribution)" },
      { "label": "Alta Disponibilidade" },
      { "label": "Escalabilidade" }
    ],
    "grupos": [
      "Fornecer uma experiência contínua ao usuário em caso de falha de um recurso.",
      "Implantar aplicativos e dados em datacenters regionais localizados perto dos usuários.",
      "A capacidade de computação pode ser aumentada dinamicamente adicionando RAM ou CPU a uma máquina virtual."
    ],
    "respostas": {
      "Fornecer uma experiência contínua ao usuário em caso de falha de um recurso.": ["Alta Disponibilidade"],
      "Implantar aplicativos e dados em datacenters regionais localizados perto dos usuários.": ["Distribuição Geográfica (Geo-distribution)"],
      "A capacidade de computação pode ser aumentada dinamicamente adicionando RAM ou CPU a uma máquina virtual.": ["Escalabilidade"]
    },
    "explicacao": "Alta disponibilidade garante o máximo de disponibilidade, independentemente de interrupções ou eventos que possam ocorrer. Distribuição geográfica implanta aplicativos e dados em datacenters regionais próximos aos usuários. Escalabilidade se refere à capacidade de ajustar recursos para atender à demanda — se o tráfego aumenta repentinamente, é possível adicionar mais recursos (como RAM ou CPU) para lidar melhor com a demanda.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/benefits-of-cloud-computing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 38 (banco original Q388)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> permite avançar com confiança, tendo foco na performance ou no custo.",
    "opcoes": [
      "Escolha uma opção",
      "Previsibilidade",
      "Elasticidade",
      "Distribuição Geográfica",
      "Escalabilidade"
    ],
    "resposta": 1,
    "explicacao": "A previsibilidade na nuvem permite avançar com confiança. Ela pode ter foco na previsibilidade de desempenho ou de custo — ambas fortemente influenciadas pelo Azure Well-Architected Framework. Ao implantar uma solução construída em torno desse framework, você obtém uma solução cujo custo e desempenho são previsíveis.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/describe-benefits-use-cloud-services/3-reliability-predictability-cloud",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 39 (banco original Q392, idêntica em conceito à Q88)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Quando um aplicativo em nuvem pode alocar e liberar recursos, ele tem <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "elasticidade.",
      "governança.",
      "alta disponibilidade.",
      "previsibilidade.",
      "confiabilidade."
    ],
    "resposta": 1,
    "explicacao": "Computação elástica é a capacidade de expandir ou reduzir rapidamente os recursos de processamento, memória e armazenamento para atender a demandas em mudança, sem se preocupar com planejamento de capacidade para picos de uso. Com a elasticidade, uma empresa evita pagar por capacidade ociosa e não precisa se preocupar com investimento em recursos adicionais.",
    "link": "https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-elastic-computing/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 40 (banco original Q406)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um SLA do Azure é um acordo formal entre a Microsoft e um cliente que define <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "um compromisso de entregar os recursos de um roteiro tecnológico.",
      "um compromisso com padrões de desempenho.",
      "os limites máximos de escalabilidade de uma infraestrutura disponível.",
      "os limites mínimos de escalabilidade de uma infraestrutura disponível."
    ],
    "resposta": 2,
    "explicacao": "Um Contrato de Nível de Serviço (SLA) do Azure é um acordo formal entre a Microsoft e um cliente que define o nível de serviço e disponibilidade que a Microsoft fornecerá para um serviço específico do Azure. O SLA normalmente inclui métricas como tempo de atividade, disponibilidade e capacidade de resposta, e especifica as garantias que a Microsoft assume quanto ao cumprimento dessas métricas, prevendo créditos ao cliente caso o nível de serviço acordado não seja atingido.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/summary/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 41 (banco original Q417)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você tem uma rede virtual do Azure chamada VNET1 em um grupo de recursos chamado RG1. Você atribui a definição de Azure Policy \"Tipo de Recurso Não Permitido\" e especifica que redes virtuais não são um tipo de recurso permitido em RG1. VNET1 <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "é excluída automaticamente.",
      "é movida automaticamente para outro grupo de recursos.",
      "continua a funcionar normalmente.",
      "é agora um objeto somente leitura."
    ],
    "resposta": 3,
    "explicacao": "O Azure Policy impede a criação de novos recursos que não estejam em conformidade com a política, mas não afeta recursos existentes de forma retroativa. Portanto, a VNET1 continua funcionando normalmente mesmo após a aplicação da política.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 42 (banco original Q424)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> garante o acesso a recursos de nuvem em caso de falha de serviço.",
    "opcoes": [
      "Escolha uma opção",
      "Alta disponibilidade",
      "Previsibilidade",
      "Confiabilidade",
      "Escalabilidade"
    ],
    "resposta": 1,
    "explicacao": "Alta disponibilidade (HA) refere-se à capacidade de um sistema permanecer continuamente operacional e acessível, mesmo que um componente subjacente ou serviço localizado apresente falha. Na nuvem, isso é alcançado por meio de redundâncias integradas, como a implantação de aplicativos em várias Zonas de Disponibilidade com balanceamento de carga automatizado — se um rack de hardware ou datacenter inteiro cair, o tráfego é redirecionado automaticamente para uma instância saudável, garantindo indisponibilidade zero ou quase zero para os usuários.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/describe-benefits-use-cloud-services/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 43 (banco original Q426)
  {
    "tipo": "dragdrop",
    "texto": "Associe o benefício da computação em nuvem ao requisito apropriado. Cada benefício pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Agilidade" },
      { "label": "Elasticidade" },
      { "label": "Recuperação de Desastre" }
    ],
    "grupos": [
      "A capacidade de escalar dinamicamente os recursos disponíveis para um aplicativo de nuvem",
      "A capacidade de usar serviços de backup baseados em nuvem para restaurar recursos em caso de interrupção",
      "A capacidade de implantar e configurar rapidamente recursos baseados em nuvem conforme os requisitos do aplicativo mudam"
    ],
    "respostas": {
      "A capacidade de escalar dinamicamente os recursos disponíveis para um aplicativo de nuvem": ["Elasticidade"],
      "A capacidade de usar serviços de backup baseados em nuvem para restaurar recursos em caso de interrupção": ["Recuperação de Desastre"],
      "A capacidade de implantar e configurar rapidamente recursos baseados em nuvem conforme os requisitos do aplicativo mudam": ["Agilidade"]
    },
    "explicacao": "Elasticidade é a capacidade de um sistema provisionar e desprovisionar automaticamente recursos (como RAM, CPU ou VMs) sob demanda, ajustando-se rapidamente à demanda atual. Recuperação de desastre é uma estratégia focada em manter os aplicativos disponíveis usando backups baseados em nuvem para restaurar recursos após uma interrupção. Agilidade é a velocidade operacional e a flexibilidade organizacional obtidas ao migrar para a nuvem, permitindo implantar e configurar ambientes rapidamente.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/fundamental-azure-concepts/benefits-of-cloud-computing",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 44 (banco original Q439, idêntica à Q338)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você implanta um recurso do Azure. O recurso fica indisponível por um período prolongado devido a uma interrupção de serviço. A Microsoft irá <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "reembolsar sua conta bancária.",
      "migrar o recurso para outra assinatura.",
      "creditar sua conta do Azure.",
      "enviar um código de cupom que você pode resgatar por créditos do Azure."
    ],
    "resposta": 3,
    "explicacao": "Quando o SLA de um serviço do Azure não é cumprido, a Microsoft credita a conta do Azure do cliente com o valor correspondente, conforme os termos do Contrato de Nível de Serviço.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/summary/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 45 (banco original Q452)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Adicionar mais RAM a uma máquina virtual é um exemplo de escala horizontal.",
      "Adicionar uma máquina virtual adicional conforme a demanda é um exemplo de escala vertical.",
      "A escala horizontal pode ocorrer automaticamente ou manualmente."
    ],
    "respostas": [false, false, true],
    "explicacao": "Adicionar RAM a uma VM existente é um exemplo de escala vertical (scale up), não horizontal. Adicionar uma VM adicional conforme a demanda é um exemplo de escala horizontal (scale out), não vertical. A escala horizontal pode, de fato, ocorrer de forma automática (por exemplo, via conjuntos de dimensionamento com regras de autoscaling) ou manual.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  },
  // Questao 46 (banco original Q473)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O SLA (Contrato de Nível de Serviço) de um provedor de serviço de nuvem expressa <combobox> como uma porcentagem de tempo de atividade ao longo de um determinado ano.",
    "opcoes": [
      "Escolha uma opção",
      "disponibilidade",
      "elasticidade",
      "confiabilidade",
      "escalabilidade"
    ],
    "resposta": 1,
    "explicacao": "Um SLA (Service-Level Agreement) é um contrato entre um provedor de serviço e um cliente que define o nível de serviço esperado. No contexto da computação em nuvem, uma das métricas mais importantes definidas em um SLA é o tempo de atividade, expresso como uma porcentagem de disponibilidade ao longo de um determinado período, tipicamente um ano.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/summary/",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-2026-bloco02"
  }

];