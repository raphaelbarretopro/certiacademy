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
  // Questao 02
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Purview fornece backup de dados.",
      "O Microsoft Purview fornece descoberta de dados.",
      "O Microsoft Purview fornece classificação de dados."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Microsoft Purview não é uma ferramenta de backup de dados, mas oferece funcionalidades de governança de dados, como descoberta, classificação, mapeamento e catalogação de dados em toda a organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/purview/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 03
  {
    "tipo": "unica",
    "texto": "Você tem uma conta de armazenamento que tem um bloqueio somente leitura. O que o proprietário da conta pode fazer na conta de armazenamento?",
    "opcoes": [
      "Modificar as permissões da conta de armazenamento.",
      "Definir Tipo de bloqueio como Excluir.",
      "Remover o bloqueio.",
      "Renomear o bloqueio."
    ],
    "resposta": 2,
    "explicacao": "No Azure, um bloqueio de somente leitura (Read-only lock) impede que recursos sejam modificados ou excluídos. No entanto, o proprietário da conta (ou qualquer usuário com permissões apropriadas, como Owner ou User Access Administrator) pode remover o bloqueio, pois ele tem controle total sobre os recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
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

  // Questao 05
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se um grupo de recursos chamado RG1 tiver um bloqueio de exclusão, <combobox> excluir RG1.",
    "opcoes": [
      "Selecione uma resposta",
      "somente um membro do grupo de administradores globais poderá",
      "o bloqueio de exclusão deverá ser removido antes que um administrador possa",
      "uma Azure Policy deverá ser modificada antes que um administrador possa",
      "uma marca do Azure deverá ser adicionada antes que um administrador possa"
    ],
    "resposta": 2,
    "explicacao": "Os bloqueios de exclusão no Azure impedem que recursos protegidos sejam excluídos. Para permitir a exclusão, o bloqueio deve ser removido manualmente por alguém com permissões adequadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 06
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> oferece uma visão geral da integridade dos serviços e regiões do Azure.",
    "opcoes": [
      "Selecione uma resposta",
      "Azure Monitor",
      "Azure Resource Health",
      "Integridade do Serviço do Azure",
      "Status do Azure"
    ],
    "resposta": 4,
    "explicacao": "O site Status do Azure fornece uma visão geral pública da integridade dos serviços do Azure em todas as regiões. Ele mostra interrupções e degradações conhecidas em tempo quase real.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/azure-status-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
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
  // Questao 08
  {
    "tipo": "dragdrop",
    "texto": "Você cria um grupo de recursos chamado RG1 no Azure Resource Manager. Você precisa impedir a exclusão acidental dos recursos em RG1. Qual configuração você deve usar? Para responder, selecione a configuração apropriada na área de resposta.",
    "itens": [
      { "label": "Início Rápido" },
      { "label": "Custos do recurso" },
      { "label": "Implantações" },
      { "label": "Políticas" },
      { "label": "Propriedades" },
      { "label": "Bloqueios" },
      { "label": "Exportar modelo" }
    ],
    "grupos": ["Área de Resposta"],
    "respostas": {
      "Área de Resposta": ["Bloqueios"]
    },
    "explicacao": "A opção 'Bloqueios' permite proteger os recursos de exclusões acidentais, aplicando bloqueios de exclusão ou somente leitura no grupo de recursos ou recursos específicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 09
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A calculadora de TCO (custo total de propriedade) exibe o custo da execução de cargas de trabalho em um datacenter.",
      "A calculadora de TCO (custo total de propriedade) exibe o custo da execução de cargas de trabalho no Azure.",
      "A calculadora de TCO (custo total de propriedade) gera relatórios gráficos."
    ],
    "respostas": [true, false, true],
    "explicacao": "A calculadora de TCO permite estimar os custos atuais de infraestrutura local (como em datacenters) para compará-los com os custos no Azure, mas não exibe os custos de execução diretamente no Azure. Além disso, ela fornece relatórios gráficos que ajudam na visualização dos dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/migrate/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 10
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode configurar os logs de atividade do Microsoft Entra para aparecerem no Azure Monitor.",
      "No Azure Monitor, você pode criar alertas.",
      "No Azure Monitor, você pode monitorar recursos em várias assinaturas do Azure."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Azure Monitor permite a centralização de dados de telemetria, incluindo logs de atividade do Microsoft Entra. Ele também oferece suporte à criação de alertas com base em métricas e logs, além de permitir a visualização e análise de dados em várias assinaturas do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 11
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Adicionar grupos de recursos em uma assinatura do Azure gera custos adicionais.",
      "Copiar 10 GB de dados no Azure de uma rede local por uma VPN gera custos adicionais de transferência de dados do Azure.",
      "Copiar 10 GB de dados do Azure para uma rede local por uma VPN gera custos adicionais de transferência de dados do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "A criação de grupos de recursos não gera custos adicionais. A transferência de dados de entrada para o Azure (de fora para dentro) é gratuita. No entanto, a transferência de dados de saída (do Azure para fora, como uma rede local via VPN) pode gerar custos adicionais conforme a política de preços de banda.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/azure-subscription-service-limits",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 12
  {
    "tipo": "unica",
    "texto": "Você precisa ser notificado de quando a Microsoft pretende realizar a manutenção que pode afetar os recursos em uma assinatura do Azure. O que você deve usar?",
    "opcoes": [
      "Azure Monitor",
      "Integridade do Serviço do Azure",
      "Assistente do Azure",
      "Central de Confiabilidade da Microsoft"
    ],
    "resposta": 1,
    "explicacao": "A 'Integridade do Serviço do Azure' fornece notificações personalizadas sobre eventos de manutenção planejada e problemas que afetam os serviços em suas assinaturas. É a ferramenta recomendada para acompanhar o impacto direto sobre seus recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/service-health/service-health-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 13 - img/azb1q13.png
  {
    "tipo": "unica",
    "texto": "Você precisa gerenciar o Azure usando o Azure Cloud Shell. Qual ícone do portal do Azure você deve selecionar? Para responder, selecione o ícone apropriado na área de resposta.",
    "imagemUrl": "img/azb1q13.png",
    "opcoes": [
      "Ícone 1",
      "Ícone 2",
      "Ícone 3",
      "Ícone 4",
      "Ícone 5",
      "Ícone 6",
      "Ícone 7"
    ],
    "resposta": 2,
    "explicacao": "O Azure Cloud Shell pode ser acessado diretamente pelo ícone em forma de prompt (>) no canto superior direito do portal do Azure. Ele permite executar scripts e comandos em Bash ou PowerShell diretamente no navegador.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
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
  // Questao 15
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém recursos em várias regiões. Você precisa garantir que os administradores possam criar recursos apenas nessas regiões. O que você deve usar?",
    "opcoes": [
      "um grupo de gerenciamento",
      "uma política do Azure",
      "um bloqueio somente leitura",
      "uma reserva"
    ],
    "resposta": 1,
    "explicacao": "As políticas do Azure permitem restringir ações e impor regras de conformidade, como limitar a criação de recursos a regiões específicas. Isso ajuda a garantir que os recursos estejam alinhados com as diretrizes da organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 16
  {
    "tipo": "multipla",
    "texto": "No modelo de serviço de nuvem IaaS (infraestrutura como serviço), quais são os dois componentes que são responsabilidade do provedor de serviços de nuvem? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "a configuração da rede",
      "a instalação e configuração do sistema operacional",
      "a manutenção do hardware",
      "a segurança física da infraestrutura do datacenter",
      "a configuração e manutenção do armazenamento"
    ],
    "respostas": [2, 3],
    "explicacao": "No modelo IaaS, o provedor de nuvem é responsável pela infraestrutura subjacente, incluindo manutenção do hardware e segurança física do datacenter. O cliente é responsável pelo sistema operacional, aplicações, rede e dados.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-1"
  },
  // Questao 17
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma assinatura do Azure pode ser associada a vários locatários do Microsoft Entra.",
      "Você pode alterar o locatário do Microsoft Entra ao qual uma assinatura do Azure está associada.",
      "Quando uma assinatura do Azure expira, o locatário do Microsoft Entra associado é excluído automaticamente."
    ],
    "respostas": [false, true, false],
    "explicacao": "Uma assinatura do Azure só pode estar associada a um único locatário do Microsoft Entra por vez. No entanto, é possível transferir uma assinatura para outro locatário. A expiração de uma assinatura não exclui automaticamente o locatário do Microsoft Entra.",
    "link": "https://learn.microsoft.com/pt-br/azure/active-directory/fundamentals/active-directory-how-subscriptions-associated-directory",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 18
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma única conta da Microsoft pode ser usada para gerenciar várias assinaturas do Azure.",
      "Duas assinaturas do Azure podem ser mescladas em uma única assinatura.",
      "Uma empresa pode usar recursos de várias assinaturas do Azure."
    ],
    "respostas": [true, false, true],
    "explicacao": "Uma única conta da Microsoft pode ter acesso a várias assinaturas do Azure. No entanto, assinaturas do Azure não podem ser mescladas. É possível que uma organização utilize múltiplas assinaturas para segmentar cargas de trabalho ou departamentos e ainda assim compartilhar recursos entre elas usando, por exemplo, grupos de gerenciamento e redes conectadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/manage-billing-access",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 19
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Os serviços do Azure China <combobox>.",
    "opcoes": [
      "Selecione uma resposta",
      "são operados pela Microsoft.",
      "têm paridade de recurso com o Azure global.",
      "só podem ser acessados na China.",
      "compõem uma instância separada diferente do Microsoft Azure."
    ],
    "resposta": 4,
    "explicacao": "Os serviços do Azure China são operados por um provedor local autorizado e constituem uma instância separada do Azure global. Essa separação é exigida por regulamentos chineses para serviços em nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/china/overview-operations",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-1"
  },
  // Questao 20
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra pode ser usado para gerenciar o acesso aos aplicativos locais.",
      "O Microsoft Entra fornece SSO (logon único).",
      "Os dispositivos iOS podem ser registrados em um locatário do Microsoft Entra."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Microsoft Entra (anteriormente Azure AD) permite o gerenciamento de acesso a aplicativos locais por meio de integração com serviços como o Azure AD Application Proxy. Ele também oferece suporte a logon único (SSO) e permite o registro de dispositivos, inclusive iOS, para controle de acesso baseado em identidade.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 21
  {
    "tipo": "unica",
    "texto": "Sua empresa pretende começar a usar o Azure e migrará todos os recursos de rede para o Azure. Você precisa iniciar o processo de planejamento explorando o Azure. O que você deve criar primeiro?",
    "opcoes": [
      "um grupo de gerenciamento",
      "um grupo de recursos",
      "uma assinatura",
      "uma rede virtual"
    ],
    "resposta": 2,
    "explicacao": "A assinatura é a unidade básica para uso do Azure, pois é através dela que os serviços são ativados, monitorados e cobrados. Sem uma assinatura, não é possível provisionar ou gerenciar recursos no portal.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/create-subscription",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-1"
  },
  // Questao 22
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
  // Questao 28
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O preço de pagamento conforme o uso do Azure é um exemplo de CapEx.",
      "Pagar pela energia do seu datacenter é um exemplo de OpEx.",
      "Implantar seu próprio datacenter é um exemplo de CapEx."
    ],
    "respostas": [false, true, true],
    "explicacao": "O modelo de pagamento conforme o uso no Azure é classificado como OpEx (despesa operacional), pois envolve custos variáveis e contínuos. Já pagar pela energia do datacenter e implantar a infraestrutura física são exemplos de CapEx (despesa de capital), relacionados a investimentos fixos e infraestrutura local.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/inform/cost-efficiency",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-1"
  },
  // Questao 29
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: O SLA (contrato de nível de serviço) de um provedor de serviço de nuvem expressa <combobox> como uma porcentagem do tempo de atividade ao longo de um determinado ano.",
    "opcoes": [
      "Selecione uma resposta",
      "disponibilidade",
      "elasticidade",
      "confiabilidade",
      "escalabilidade"
    ],
    "resposta": 1,
    "explicacao": "O SLA (Service Level Agreement) mede a **disponibilidade** dos serviços de nuvem, normalmente apresentada como um percentual de tempo de atividade garantido ao longo de um período, como 99,9% em um ano.",
    "link": "https://learn.microsoft.com/pt-br/dynamics365/supply-chain/service-management/service-level-agreements",
    "dominio": "Descrever os conceitos da nuvem",
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
  // Questao 31
  {
    "tipo": "unica",
    "texto": "Sua empresa hospeda um aplicativo contábil chamado App1, que é usado por todos os clientes da empresa. O App1 apresenta uso baixo durante as três primeiras semanas de cada mês e uso muito alto durante a última semana de cada mês. Qual benefício dos Serviços de Nuvem do Azure dá suporte ao gerenciamento de custo para esse tipo de padrão de uso?",
    "opcoes": [
      "alta disponibilidade",
      "balanceamento de carga",
      "elasticidade",
      "alta latência"
    ],
    "resposta": 2,
    "explicacao": "A elasticidade é a capacidade da nuvem de ajustar automaticamente os recursos computacionais com base na demanda. Isso permite otimizar os custos em cenários com variação de uso, como o do App1.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/guide/design-principles/scale-out",
    "dominio": "Descrever os conceitos da nuvem",
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
  // Questao 33 - NAO VEIO FOTO

  // Questao 34
  {
    "tipo": "unica",
    "texto": "Qual é um exemplo de escala vertical em um ambiente de nuvem?",
    "opcoes": [
      "adição de outra CPU a uma máquina virtual do Azure existente",
      "adição de outra máquina virtual do Azure",
      "adição de outro host de sessão da Área de Trabalho Virtual do Azure",
      "adição automática de outra instância do Serviço de Aplicativo do Azure"
    ],
    "resposta": 0,
    "explicacao": "Escala vertical (scale up) refere-se ao aumento dos recursos de uma instância existente, como adicionar mais CPU ou memória a uma máquina virtual. Já a escala horizontal (scale out) envolve adicionar mais instâncias para distribuir a carga.",
    "link": "https://learn.microsoft.com/pt-br/azure/architecture/best-practices/auto-scaling",
    "dominio": "Descrever os conceitos da nuvem",
    "simulado": "az-1"
  },
  // Questao 35
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A computação em nuvem oferece custos menores de CapEx (despesas de capital) do que as implantações locais.",
      "A computação em nuvem fornece as mesmas opções de configuração que as implantações locais.",
      "A computação em nuvem poderá ser escalonada quando um negócio exigir alterações."
    ],
    "respostas": [true, false, true],
    "explicacao": "A computação em nuvem reduz os custos de CapEx ao substituí-los por OpEx. As opções de configuração são diferentes, não idênticas, às implantações locais. Um dos principais benefícios da nuvem é a escalabilidade sob demanda, que permite adaptar recursos conforme as necessidades do negócio.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-adoption-framework/strategy/inform/cost-efficiency",
    "dominio": "Descrever os conceitos da nuvem",
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
