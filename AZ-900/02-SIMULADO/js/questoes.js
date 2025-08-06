// ==========================================
// Arquivo: questoes.js
// Descrição: Contém todas as questões do simulado AZ-900
// ==========================================

export const questoes = [

  
  // Questao 01
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> permite(m) que os usuários autentiquem-se em vários aplicativos usando o SSO (logon único).",
    "opcoes": [
      "Selecione uma resposta",
      "Grupos de segurança de aplicativo no Azure",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Microsoft Defender para Nuvem"
    ],
    "resposta": 2,
    "explicacao": "O Microsoft Entra ID (anteriormente Azure Active Directory) é o serviço de identidade da Microsoft que fornece autenticação única (SSO) para acessar vários aplicativos com uma única credencial, melhorando a segurança e a experiência do usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 04
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A sincronização do Microsoft Entra Connect é um serviço de nuvem do Azure.",
      "Você deve implantar um controlador de domínio para provisionar o Microsoft Entra Domain Services.",
      "O Microsoft Entra ID dá suporte ao SSO (logon único)."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Microsoft Entra Connect é um componente local, não um serviço de nuvem. O Entra Domain Services provisiona automaticamente um domínio gerenciado, sem necessidade de um controlador de domínio. O Microsoft Entra ID oferece suporte a SSO, permitindo que os usuários acessem vários aplicativos com uma única autenticação.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis#which-features-work-in-microsoft-entra-id",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
// Questao 07
  {
    "tipo": "unica",
    "texto": "Você tem servidores locais que executam o Windows Server. O que você deve implementar para gerenciar os servidores usando o portal do Azure?",
    "opcoes": [
      "Docker",
      "Azure Arc",
      "RBAC (controle de acesso baseado em função)",
      "AKS (Serviço de Kubernetes do Azure)"
    ],
    "resposta": 1,
    "explicacao": "O Azure Arc permite conectar, gerenciar e governar servidores locais ou em outras nuvens diretamente pelo portal do Azure. Ele estende os serviços de gerenciamento do Azure para ambientes híbridos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-arc/servers/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 14
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
    "simulado": "az-1"
  },
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é um serviço de migração física usado para transferir grandes quantidades de dados de modo rápido, confiável e de baixo custo.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure Data Box",
      "Azure Databricks",
      "Sincronização de Arquivos do Azure",
      "Migrações para Azure"
    ],
    "resposta": 1,
    "explicacao": "O Azure Data Box é um dispositivo físico fornecido pela Microsoft que permite transferir grandes volumes de dados para o Azure de forma rápida e segura, ideal em cenários onde a transferência pela rede seria inviável.",
    "link": "https://learn.microsoft.com/pt-br/azure/databox/data-box-overview?pivots=dbx-ng",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 23
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um host da sessão Área de Trabalho Virtual do Azure pode executar apenas o Windows 10 ou Windows 11.",
      "Um pool de host da Área de Trabalho Virtual do Azure que inclui 20 hosts de sessão dá suporte a, no máximo, 20 conexões simultâneas do usuário.",
      "A Área de Trabalho Virtual do Azure oferece suporte à virtualização de aplicativo e área de trabalho."
    ],
    "respostas": [false, false, true],
    "explicacao": "A Área de Trabalho Virtual do Azure oferece suporte a diversos sistemas operacionais, incluindo Windows Server, além do Windows 10 e 11. O número de conexões simultâneas não é limitado diretamente ao número de hosts — isso depende da configuração de escalabilidade. O serviço oferece suporte à virtualização de áreas de trabalho completas e também de aplicativos individuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-desktop/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 24
  {
    "tipo": "unica",
    "texto": "Você pretende mapear uma unidade de rede de vários computadores que executam o Windows 11 para o Armazenamento do Azure. Você precisa criar uma solução de armazenamento no Azure para a unidade mapeada planejada. O que você deve criar?",
    "opcoes": [
      "um serviço de Arquivo em uma conta de armazenamento",
      "um banco de dados SQL do Azure",
      "um disco de dados de máquina virtual",
      "um serviço de Blob em uma conta de armazenamento"
    ],
    "resposta": 0,
    "explicacao": "O Azure Files permite que você crie compartilhamentos de arquivos acessíveis por meio do protocolo SMB, o que é ideal para mapear unidades de rede em sistemas operacionais como o Windows 11.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/files/storage-files-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 25
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O AzCopy é um utilitário de linha de comando usado para copiar blobs ou arquivos de ou para uma conta de armazenamento.",
      "O Gerenciador de Armazenamento do Azure é um serviço de migração hospedado na nuvem usado para transferir grandes quantidades de dados.",
      "A Sincronização de Arquivos do Azure sincroniza arquivos e pastas entre os Arquivos do Azure e servidores de arquivos Windows."
    ],
    "respostas": [true, false, true],
    "explicacao": "O AzCopy é uma ferramenta de linha de comando eficiente para transferir dados para o Azure Storage. O serviço que permite migração de grandes volumes de dados fisicamente é o Azure Data Box, não o Gerenciador de Armazenamento. A Sincronização de Arquivos do Azure permite manter os arquivos locais e na nuvem sincronizados, ideal para cenários híbridos.",
    "link": "https://learn.microsoft.com/pt-br/azure/storage/common/storage-use-azcopy-blobs",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
   // Questao 26
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você planeja implantar 20 máquinas virtuais em um ambiente do Azure. Para garantir que uma máquina virtual chamada VM1 não possa se conectar a outras máquinas virtuais, VM1 deverá <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "ser implantada em uma rede virtual separada.",
      "executar um sistema operacional diferente das outras máquinas virtuais.",
      "ser implantada em um grupo de recursos separado.",
      "ter duas interfaces de rede."
    ],
    "resposta": 1,
    "explicacao": "Para isolar a comunicação de uma máquina virtual no Azure, ela deve ser colocada em uma rede virtual (VNet) separada. As VNets definem os limites de comunicação entre recursos de rede, garantindo o isolamento necessário.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-networks-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 27
  {
    "tipo": "unica",
    "texto": "Em qual camada OSI o ExpressRoute opera?",
    "opcoes": [
      "Camada 5",
      "Camada 2",
      "Camada 3",
      "Camada 7"
    ],
    "resposta": 2,
    "explicacao": "O ExpressRoute opera na Camada 3 do modelo OSI (Rede), pois utiliza o protocolo BGP para roteamento entre a rede local do cliente e os serviços da Microsoft, estabelecendo conectividade baseada em IP.",
    "link": "https://learn.microsoft.com/pt-br/azure/expressroute/expressroute-routing",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 30
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornecem acesso à capacidade de computação não utilizada do Azure com descontos significativos.",
    "opcoes": [
      "Selecione uma resposta",
      "Instâncias de Contêiner do Azure",
      "Instâncias de Máquinas Virtuais Reservadas do Azure",
      "Instâncias de máquinas virtuais de Spot do Azure",
      "Conjuntos de dimensionamento de máquinas virtuais do Azure"
    ],
    "resposta": 2,
    "explicacao": "As instâncias de máquinas virtuais de Spot do Azure permitem utilizar a capacidade de computação não utilizada da Microsoft com grandes descontos. Elas são ideais para cargas de trabalho que podem ser interrompidas, como testes ou renderizações.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/spot-vms",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
   // Questao 32
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um banco de dados do Microsoft SQL Server que é hospedado na nuvem e tem atualizações de software gerenciadas pelo Azure é um exemplo de <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "DRaaS (recuperação de desastre como serviço)",
      "IaaS (infraestrutura como serviço)",
      "PaaS (plataforma como serviço)",
      "SaaS (software como serviço)"
    ],
    "resposta": 3,
    "explicacao": "Quando um banco de dados SQL é provisionado como um serviço totalmente gerenciado, com atualizações, backups e infraestrutura mantidos pelo provedor (neste caso, o Azure), ele é classificado como PaaS — Plataforma como Serviço.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-sql/database/sql-database-paas-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 36
  {
    "tipo": "dragdrop",
    "texto": "Você precisa identificar o nível de responsabilidade compartilhada de um cliente com base no modelo de serviço de nuvem. Em qual ordem os modelos devem ser listados da maior responsabilidade (no alto) para a menor responsabilidade do cliente (embaixo)? Para responder, mova todos os modelos da lista de modelos para a área de resposta e organize-os na ordem correta.",
    "itens": [
      { "label": "IaaS (infraestrutura como serviço)" },
      { "label": "PaaS (plataforma como serviço)" },
      { "label": "SaaS (software como serviço)" }
    ],
    "grupos": [
      "1",
      "2",
      "3"
    ],
    "respostas": {
      "1": ["IaaS (infraestrutura como serviço)"],
      "2": ["PaaS (plataforma como serviço)"],
      "3": ["SaaS (software como serviço)"]
    },
    "explicacao": "No modelo IaaS, o cliente gerencia mais componentes, como sistema operacional, middleware e tempo de execução, tendo mais responsabilidade. Em PaaS, o provedor gerencia quase tudo, exceto os dados e aplicativos. Em SaaS, o provedor gerencia todo o ambiente, restando mínima responsabilidade ao cliente.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/describe-cloud-service-types/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
   // Questao 37
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft SQL Server 2022 instalado em uma máquina virtual do Azure é um exemplo de PaaS (plataforma como serviço).",
      "O Banco de Dados SQL do Azure é um exemplo de PaaS (plataforma como serviço).",
      "O Azure Cosmos DB é um exemplo de SaaS (software como serviço)."
    ],
    "respostas": [false, true, false],
    "explicacao": "Instalar SQL Server manualmente em uma VM caracteriza o uso como IaaS, pois o cliente gerencia o sistema operacional e o software. O Azure SQL Database é um serviço PaaS totalmente gerenciado. Já o Azure Cosmos DB também é um serviço PaaS e não um SaaS, pois o cliente ainda gerencia os dados e parte da configuração.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/data-guide/technology-choices/data-storage",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  },
  // Questao 38
  {
    "tipo": "unica",
    "texto": "O que um aplicativo deve usar para interagir com o Azure e gerenciar recursos?",
    "opcoes": [
      "Modelos do ARM (Azure Resource Manager)",
      "CLI (Interface de Linha de Comando) do Azure",
      "APIs",
      "Azure Cloud Shell"
    ],
    "resposta": 2,
    "explicacao": "Para que um aplicativo interaja com o Azure e gerencie recursos programaticamente, ele deve usar APIs. A CLI e o Azure Cloud Shell são ferramentas para humanos interagirem com o Azure, enquanto os Modelos ARM são usados para implantações declarativas, não para comunicação direta por aplicativos.",
    "link": "https://learn.microsoft.com/pt-br/rest/api/azure/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-1"
  }


];
