// ==========================================
// Arquivo: questoes_bloco04.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 4 de 10 — Descrever os principais componentes arquitetônicos do Azure
// (regiões, pares de regiões, regiões soberanas, zonas de disponibilidade,
//  datacenters, recursos e grupos de recursos, assinaturas, grupos de gerenciamento,
//  hierarquia de grupos de recursos / assinaturas / grupos de gerenciamento)
// 48 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 96, 98, 100, 101, 102, 103, 104, 107, 113, 114, 116, 127, 128, 129, 135, 136, 141, 142,
// 144, 145, 152, 153, 159, 199, 226, 258, 263, 276, 282, 286, 287, 299, 301, 306, 310, 320,
// 322, 328, 337, 353, 360, 403, 410, 419, 433, 437, 451, 467
//
// ATENÇÃO — CONTRADIÇÃO INTERNA NO BANCO ORIGINAL:
// As Questões 32 (Q299) e 43 (Q410) têm o MESMO enunciado ("___ fornecem às organizações
// a capacidade de gerenciar a conformidade de recursos do Azure em várias assinaturas"),
// mas a fonte original traz gabaritos DIFERENTES: Q299 = "Azure policies", Q410 =
// "Management groups". Mantive fiel à fonte em cada uma, mas recomendo decidir com o
// grupo qual resposta usar como oficial antes de aplicar em avaliação.
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q96)
  {
    "tipo": "unica",
    "texto": "Você precisa identificar o tipo de falha para o qual uma Zona de Disponibilidade do Azure pode ser usada para proteger o acesso aos serviços do Azure.\nO que você deve identificar?",
    "opcoes": [
      "uma falha de servidor físico",
      "uma falha de região do Azure",
      "uma falha de armazenamento",
      "uma falha de datacenter do Azure"
    ],
    "resposta": 3,
    "explicacao": "As zonas de disponibilidade ampliam o nível de controle que você tem para manter a disponibilidade de aplicativos e dados em suas VMs. Uma Zona de Disponibilidade é uma zona fisicamente separada, dentro de uma região do Azure. Existem três Zonas de Disponibilidade por região com suporte. Cada Zona de Disponibilidade tem uma fonte de energia, rede e refrigeração distintas. Ao arquitetar suas soluções para usar VMs replicadas em zonas, você pode proteger seus aplicativos e dados da perda de um datacenter. Se uma zona for comprometida, os aplicativos e dados replicados ficam instantaneamente disponíveis em outra zona.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/availability",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 02 (banco original Q98)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê planeja implantar várias máquinas virtuais do Azure.\nVocê precisa garantir que os serviços em execução nas máquinas virtuais fiquem disponíveis caso um único datacenter falhe.\nSolução: Você implanta as máquinas virtuais em dois ou mais grupos de recursos.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Um grupo de recursos é um contêiner lógico para recursos do Azure. Ao criar um grupo de recursos, você especifica em qual local o grupo de recursos será criado. No entanto, ao criar uma máquina virtual e colocá-la no grupo de recursos, a máquina virtual ainda pode estar em um local diferente (datacenter diferente). Portanto, criar vários grupos de recursos, mesmo que estejam em datacenters separados, não garante que os serviços em execução nas máquinas virtuais estarão disponíveis caso um único datacenter falhe. A solução correta seria distribuir as VMs em duas ou mais zonas de disponibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 03 (banco original Q100)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma assinatura do Azure pode ser associada a vários locatários do Microsoft Entra ID.",
      "Você pode alterar o locatário do Microsoft Entra ID ao qual uma assinatura do Azure está associada.",
      "Quando uma assinatura do Azure expira, o locatário do Microsoft Entra ID associado é excluído automaticamente."
    ],
    "respostas": [false, true, false],
    "explicacao": "Um locatário do Microsoft Entra ID pode ter várias assinaturas, mas uma assinatura do Azure só pode estar associada a um único locatário do Microsoft Entra ID. Você pode, sim, alterar o locatário ao qual uma assinatura está associada. Se sua assinatura expirar, você perde acesso a todos os outros recursos associados a ela — porém, o diretório do Microsoft Entra ID permanece no Azure; você pode associá-lo e gerenciá-lo usando uma assinatura diferente.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 04 (banco original Q101)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nGrupos de recursos fornecem às organizações a capacidade de gerenciar a conformidade de recursos do Azure em várias assinaturas.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "Grupos de gerenciamento", "Políticas do Azure", "Planos do Azure App Service"],
    "resposta": 1,
    "explicacao": "Grupos de gerenciamento do Azure são contêineres para gerenciar a conformidade em várias assinaturas — não os grupos de recursos, que organizam recursos dentro de uma única assinatura.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/management-groups/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 05 (banco original Q102)
  {
    "tipo": "multipla",
    "texto": "Sua empresa planeja migrar para o Azure.\nA empresa tem vários departamentos. Todos os recursos do Azure usados por cada departamento serão gerenciados por um administrador de departamento.\nQuais são duas técnicas possíveis para segmentar o Azure entre os departamentos? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "várias assinaturas",
      "vários diretórios do Microsoft Entra ID",
      "várias regiões",
      "vários grupos de recursos"
    ],
    "respostas": [0, 1],
    "explicacao": "Uma assinatura do Azure é um contêiner para recursos do Azure — também um limite de permissões e de faturamento. Você é cobrado mensalmente por todos os recursos em uma assinatura. Um único locatário do Azure (Microsoft Entra ID) pode conter várias assinaturas. Para permitir que cada administrador de departamento gerencie os recursos do Azure usados por esse departamento, você precisará criar uma assinatura separada por departamento e atribuir cada administrador como administrador dessa assinatura. Alternativamente, usar múltiplos diretórios do Microsoft Entra ID (um por departamento) também segmenta administrativamente o ambiente.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/create-subscription",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 06 (banco original Q103)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma única conta da Microsoft pode ser usada para gerenciar várias assinaturas do Azure.",
      "Duas assinaturas do Azure podem ser mescladas em uma única assinatura.",
      "Uma empresa pode usar recursos de várias assinaturas."
    ],
    "respostas": [true, false, true],
    "explicacao": "Você pode usar a mesma conta para gerenciar várias assinaturas. Você pode criar uma assinatura adicional para sua conta no portal do Azure, seja para evitar atingir limites de assinatura, criar ambientes separados por segurança, ou isolar dados por motivos de conformidade. Você não pode mesclar duas assinaturas em uma única — porém, é possível mover alguns recursos do Azure de uma assinatura para outra, além de transferir a propriedade de uma assinatura e alterar o tipo de faturamento. Uma empresa pode ter várias assinaturas e armazenar recursos nas diferentes assinaturas — no entanto, uma instância de recurso só pode existir em uma única assinatura.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/create-subscription",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 07 (banco original Q104)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você tem várias máquinas virtuais em uma assinatura do Azure. Você cria uma nova assinatura. <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "As máquinas virtuais não podem ser movidas para a nova assinatura.",
      "As máquinas virtuais podem ser movidas para a nova assinatura.",
      "As máquinas virtuais só podem ser movidas para a nova assinatura se estiverem todas no mesmo grupo de recursos.",
      "As máquinas virtuais só podem ser movidas para a nova assinatura se executarem o Windows Server 2016."
    ],
    "resposta": 2,
    "explicacao": "Você pode mover uma VM e seus recursos associados para uma assinatura diferente usando o portal do Azure. Mover entre assinaturas pode ser útil se você criou originalmente uma VM em uma assinatura pessoal e agora deseja movê-la para a assinatura da sua empresa, para continuar seu trabalho. Você não precisa iniciar a VM para movê-la, e ela deve continuar em execução durante o processo.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/move-vm",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 08 (banco original Q107)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Cada assinatura do Azure pode conter vários administradores de conta.",
      "Cada assinatura do Azure pode ser gerenciada usando apenas uma conta da Microsoft.",
      "Um grupo de recursos do Azure contém várias assinaturas do Azure."
    ],
    "respostas": [false, false, false],
    "explicacao": "Você pode atribuir administradores de serviço e coadministradores no Portal do Azure, mas só pode haver um administrador de conta. Você precisa de uma conta do Microsoft Entra ID para gerenciar uma assinatura, não apenas uma conta da Microsoft — uma conta é criada no Microsoft Entra ID quando você cria a assinatura, e outras contas podem ser criadas no Microsoft Entra ID para gerenciá-la. Grupos de recursos são contêineres lógicos para recursos do Azure — porém, grupos de recursos não contêm assinaturas; é o contrário: assinaturas contêm grupos de recursos.",
    "link": "https://learn.microsoft.com/pt-br/office365/enterprise/subscriptions-licenses-accounts-and-tenants-for-microsoft-cloud-offerings",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 09 (banco original Q113)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja começar a usar o Azure e migrará todos os seus recursos de rede para o Azure.\nVocê precisa iniciar o processo de planejamento explorando o Azure.\nO que você deve criar primeiro?",
    "opcoes": ["uma assinatura", "um grupo de recursos", "uma rede virtual", "um grupo de gerenciamento"],
    "resposta": 0,
    "explicacao": "A primeira coisa que você cria no Azure é uma assinatura. Você pode pensar em uma assinatura do Azure como uma \"conta do Azure\". Você é cobrado por assinatura. Uma assinatura é um acordo com a Microsoft para usar uma ou mais plataformas ou serviços de nuvem da Microsoft, para os quais cobranças ocorrem com base em uma taxa de licença por usuário ou no consumo de recursos baseados em nuvem. As organizações podem ter várias assinaturas para as ofertas de nuvem da Microsoft.",
    "link": "https://learn.microsoft.com/pt-br/office365/enterprise/subscriptions-licenses-accounts-and-tenants-for-microsoft-cloud-offerings",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 10 (banco original Q114)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Todos os recursos do Azure implantados em um grupo de recursos devem usar a mesma região do Azure.",
      "Se você atribuir uma marca a um grupo de recursos, todos os recursos do Azure nesse grupo de recursos serão atribuídos à mesma marca.",
      "Se você atribuir permissões para um usuário gerenciar um grupo de recursos, o usuário poderá gerenciar todos os recursos do Azure nesse grupo de recursos."
    ],
    "respostas": [false, false, true],
    "explicacao": "Recursos do Azure implantados em um único grupo de recursos podem estar em regiões diferentes — o grupo de recursos contém apenas metadados sobre os recursos que ele engloba. Marcas não são herdadas automaticamente pelos recursos a partir do grupo de recursos ao qual pertencem. Um grupo de recursos pode ser usado para definir o escopo de controle de acesso para ações administrativas — por padrão, as permissões definidas no nível do recurso são herdadas pelos recursos do grupo de recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 11 (banco original Q116)
  {
    "tipo": "comboboxs",
    "texto": "Você planeja implantar um aplicativo crítico de linha de negócio no Azure. O aplicativo será executado em uma máquina virtual do Azure. Você precisa recomendar uma solução de implantação para o aplicativo. A solução deve fornecer uma disponibilidade garantida de 99,99%. Qual é o número mínimo de máquinas virtuais e o número mínimo de zonas de disponibilidade que você deve recomendar para a implantação? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Número mínimo de máquinas virtuais:",
        "opcoes": ["1", "2", "3"],
        "resposta": 1
      },
      {
        "requisito": "Número mínimo de zonas de disponibilidade:",
        "opcoes": ["1", "2", "3"],
        "resposta": 1
      }
    ],
    "explicacao": "Você precisa de no mínimo duas máquinas virtuais, cada uma localizada em uma zona de disponibilidade diferente. As Zonas de Disponibilidade são uma oferta de alta disponibilidade que protege seus aplicativos e dados contra falhas de datacenter. São locais físicos únicos dentro de uma região do Azure. Cada zona é composta por um ou mais datacenters equipados com energia, refrigeração e rede independentes. Para garantir resiliência, há um mínimo de três zonas separadas em todas as regiões habilitadas. Com Zonas de Disponibilidade, o Azure oferece o melhor SLA de tempo de atividade de VM do mercado: 99,99%.",
    "link": "https://learn.microsoft.com/pt-br/azure/availability-zones/az-overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 12 (banco original Q127)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode usar Zonas de Disponibilidade no Azure para proteger máquinas virtuais do Azure contra uma falha de datacenter.",
      "Você pode usar Zonas de Disponibilidade no Azure para proteger máquinas virtuais do Azure contra uma falha de região.",
      "Você pode usar Zonas de Disponibilidade no Azure para proteger discos gerenciados do Azure contra uma falha de datacenter."
    ],
    "respostas": [true, false, true],
    "explicacao": "As zonas de disponibilidade ampliam o nível de controle que você tem para manter a disponibilidade de aplicativos e dados nas suas VMs — protegendo contra falha de datacenter. Como as zonas de disponibilidade existem dentro de uma mesma região, elas não protegem contra uma falha de região inteira (para isso seria necessário replicar entre regiões diferentes). Discos gerenciados também podem ser protegidos usando zonas de disponibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/manage-availability",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 13 (banco original Q128)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma assinatura do Azure pode ter vários administradores de conta.",
      "Uma assinatura do Azure pode ser gerenciada usando apenas uma conta da Microsoft.",
      "Um grupo de recursos do Azure pode conter várias assinaturas do Azure."
    ],
    "respostas": [false, false, false],
    "explicacao": "Só pode haver um administrador de conta por assinatura. Assinaturas do Azure podem ser gerenciadas tanto por contas da Microsoft (pessoais) quanto por contas do Microsoft Entra ID (organizacionais) — não apenas por uma conta da Microsoft. Um grupo de recursos no Azure é um contêiner lógico que organiza recursos dentro de uma única assinatura — você não pode ter recursos de várias assinaturas dentro do mesmo grupo de recursos.",
    "link": "https://learn.microsoft.com/pt-br/office365/enterprise/subscriptions-licenses-accounts-and-tenants-for-microsoft-cloud-offerings",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 14 (banco original Q129)
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
    "explicacao": "Uma região é um conjunto de datacenters implantados dentro de um perímetro definido por latência e conectados por meio de uma rede regional dedicada de baixa latência. O Microsoft Azure atualmente tem dezenas de regiões em todo o mundo. As regiões são divididas em Zonas de Disponibilidade, que são locais fisicamente separados dentro de uma região do Azure.",
    "link": "https://azure.microsoft.com/pt-br/explore/global-infrastructure/geographies/",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 15 (banco original Q135)
  {
    "tipo": "unica",
    "texto": "Qual é a falha mais severa da qual uma Zona de Disponibilidade do Azure pode ser usada para proteger o acesso a um serviço do Azure?",
    "opcoes": [
      "uma falha de servidor físico",
      "uma falha de região do Azure",
      "uma falha de armazenamento",
      "uma falha de datacenter do Azure"
    ],
    "resposta": 3,
    "explicacao": "As zonas de disponibilidade ampliam o nível de controle que você tem para manter a disponibilidade de aplicativos e dados nas suas VMs. Uma Zona de Disponibilidade é uma zona fisicamente separada, dentro de uma região do Azure, com fonte de energia, rede e refrigeração distintas — a falha mais severa que ela protege é a de um datacenter inteiro. Uma falha de região inteira exigiria replicação entre regiões diferentes, que vai além do escopo das zonas de disponibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/availability",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 16 (banco original Q136)
  {
    "tipo": "unica",
    "texto": "Você precisa comprar um dispositivo de segurança virtual de terceiros para implantar em uma assinatura do Azure.\nO que você deve usar?",
    "opcoes": ["Assinaturas do Azure", "Microsoft Defender for Cloud", "Azure Marketplace", "Microsoft Store"],
    "resposta": 2,
    "explicacao": "Você pode acessar esses recursos avançados de segurança de rede usando uma solução parceira do Azure. Você pode encontrar as soluções de segurança de rede de parceiros do Azure mais atuais visitando o Azure Marketplace e pesquisando por \"security\" e \"network security\".",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/network-overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 17 (banco original Q141)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você tem várias máquinas virtuais em uma assinatura do Azure. Você cria uma nova assinatura. <combobox>",
    "opcoes": [
      "Escolha uma opção",
      "As máquinas virtuais não podem ser movidas para a nova assinatura.",
      "As máquinas virtuais podem ser movidas para a nova assinatura.",
      "As máquinas virtuais só podem ser movidas para a nova assinatura se estiverem todas no mesmo grupo de recursos.",
      "As máquinas virtuais só podem ser movidas para a nova assinatura se executarem o Windows Server 2019."
    ],
    "resposta": 2,
    "explicacao": "Você pode mover uma VM e seus recursos associados para uma assinatura diferente usando o portal do Azure. O processo deve ser repetido para cada grupo de recursos contendo as VMs a serem movidas.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/move-vm",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 18 (banco original Q142)
  {
    "tipo": "unica",
    "texto": "Você precisa comprar um dispositivo de segurança virtual de terceiros para implantar em uma assinatura do Azure.\nO que você deve usar?",
    "opcoes": ["Assinaturas do Azure", "Microsoft Defender for Cloud", "Azure Marketplace", "Microsoft Store"],
    "resposta": 2,
    "explicacao": "Alguns serviços de revenda de terceiros disponíveis no Azure Marketplace agora consomem o saldo de Pré-pagamento do Azure do seu Contrato Enterprise (EA).",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/ea-azure-marketplace",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 19 (banco original Q144)
  {
    "tipo": "unica",
    "texto": "Você planeja implantar um serviço em máquinas virtuais do Azure.\nVocê precisa garantir que o serviço fique disponível caso um datacenter falhe.\nO que você deve usar como parte da implantação da máquina virtual?",
    "opcoes": [
      "conjuntos de disponibilidade",
      "grupos de posicionamento por proximidade",
      "grupos de host",
      "zonas de disponibilidade"
    ],
    "resposta": 3,
    "explicacao": "As zonas de disponibilidade do Azure são locais fisicamente separados dentro de cada região do Azure, tolerantes a falhas locais. As falhas podem variar desde falhas de software e hardware até eventos como terremotos, enchentes e incêndios. A tolerância a falhas é alcançada devido à redundância e ao isolamento lógico dos serviços do Azure. Para garantir resiliência, um mínimo de três zonas de disponibilidade separadas está presente em todas as regiões habilitadas para zonas de disponibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/availability-zones/az-overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 20 (banco original Q145)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure que contém recursos em várias regiões.\nVocê precisa garantir que os administradores só possam criar recursos nessas regiões.\nO que você deve usar?",
    "opcoes": ["um bloqueio somente leitura", "uma política do Azure", "um grupo de gerenciamento", "uma reserva"],
    "resposta": 1,
    "explicacao": "Você pode aplicar políticas a um grupo de gerenciamento que limitam as regiões disponíveis para a criação de máquinas virtuais (VMs). Essa política seria aplicada a todos os grupos de gerenciamento aninhados, assinaturas e recursos, permitindo a criação de VMs apenas em regiões autorizadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/management-groups/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 21 (banco original Q152)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Quando você precisa delegar permissões a várias máquinas virtuais do Azure simultaneamente, você deve implantar as máquinas virtuais <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "na mesma região do Azure.",
      "usando o mesmo modelo do Azure Resource Manager.",
      "no mesmo grupo de recursos.",
      "na mesma zona de disponibilidade."
    ],
    "resposta": 3,
    "explicacao": "Um grupo de recursos é um contêiner lógico para recursos do Azure. Grupos de recursos facilitam o gerenciamento de recursos do Azure. Com um grupo de recursos, você pode permitir que um usuário gerencie todos os recursos no grupo, como máquinas virtuais, sites e sub-redes. As permissões que você aplica ao grupo de recursos se aplicam a todos os recursos contidos nele.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 22 (banco original Q153)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê planeja implantar várias máquinas virtuais do Azure.\nVocê precisa garantir que os serviços em execução nas máquinas virtuais fiquem disponíveis caso um único datacenter falhe.\nSolução: Você implanta as máquinas virtuais em duas ou mais zonas de disponibilidade.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "As zonas de disponibilidade ampliam o nível de controle que você tem para manter a disponibilidade de aplicativos e dados nas suas VMs. Uma Zona de Disponibilidade é uma zona fisicamente separada, dentro de uma região do Azure. Existem três Zonas de Disponibilidade por região com suporte. Cada Zona de Disponibilidade tem uma fonte de energia, rede e refrigeração distintas. Ao arquitetar suas soluções para usar VMs replicadas em zonas, você pode proteger seus aplicativos e dados da perda de um datacenter — atendendo ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/availability",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 23 (banco original Q159)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Recursos do Azure só podem acessar outros recursos no mesmo grupo de recursos.",
      "Se você excluir um grupo de recursos, todos os recursos nesse grupo de recursos serão excluídos.",
      "Um grupo de recursos pode conter recursos de várias regiões do Azure."
    ],
    "respostas": [false, true, true],
    "explicacao": "Um recurso pode interagir com recursos em outros grupos de recursos. Excluir o grupo de recursos removerá o grupo de recursos, bem como todos os recursos nele contidos — isso é útil para gerenciamento, por exemplo ao criar um ambiente de teste inteiro (componentes de rede, máquinas virtuais etc.) em um grupo de recursos e depois excluí-lo por completo. Recursos de diferentes regiões podem ser colocados em um mesmo grupo de recursos — o grupo de recursos contém apenas metadados sobre os recursos que ele engloba.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 24 (banco original Q199)
  {
    "tipo": "unica",
    "texto": "Qual nó no portal do Azure você deve usar para atribuir a um usuário a função de Leitor (Reader) para um grupo de recursos?",
    "opcoes": ["Visão geral", "Log de atividades", "Controle de acesso (IAM)", "Marcas"],
    "resposta": 2,
    "explicacao": "Para atribuir uma função a um usuário em um grupo de recursos, você deve usar o nó Controle de acesso (IAM) (Gerenciamento de Identidade e Acesso), disponível no menu de navegação do grupo de recursos no portal do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/role-assignments-portal",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 25 (banco original Q226)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Cloud pode monitorar recursos do Azure e recursos locais.",
      "Todos os recursos do Microsoft Defender for Cloud são gratuitos.",
      "No Microsoft Defender for Cloud, você pode baixar um relatório de Conformidade Regulatória."
    ],
    "respostas": [true, false, true],
    "explicacao": "O Microsoft Defender for Cloud (anteriormente Azure Security Center) é um sistema unificado de gerenciamento de segurança de infraestrutura que fortalece a postura de segurança dos seus datacenters e fornece proteção avançada contra ameaças em suas cargas de trabalho híbridas — seja no Azure ou não — bem como localmente. Apenas alguns recursos, como avaliação contínua e recomendações de segurança, e o Secure Score do Azure, são gratuitos. Os recursos avançados de monitoramento do Defender for Cloud também permitem rastrear e gerenciar a conformidade e a governança ao longo do tempo, incluindo o download de relatórios de Conformidade Regulatória.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/defender-for-cloud-introduction",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 26 (banco original Q258)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode criar funções personalizadas do Azure para controlar o acesso a recursos.",
      "Uma conta de usuário pode ser atribuída a várias funções do Azure.",
      "Um grupo de recursos pode ter a função de Proprietário (Owner) atribuída a vários usuários."
    ],
    "respostas": [true, true, true],
    "explicacao": "Você pode, sim, criar funções personalizadas do Azure para controlar o acesso a recursos, além das funções internas já existentes. Uma conta de usuário pode ser atribuída a várias funções do Azure simultaneamente. Além disso, um grupo de recursos pode ter a função de Proprietário atribuída a múltiplos usuários — a função de Proprietário concede acesso total a todos os recursos no grupo, incluindo a capacidade de criar, modificar e excluir recursos, e pode ser concedida a mais de uma pessoa ou grupo para colaboração, embora isso aumente o risco de alterações acidentais ou intencionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 27 (banco original Q263)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nO Azure Alemanha pode ser usado apenas por residentes legais da Alemanha.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": [
      "nenhuma alteração é necessária",
      "apenas empresas registradas na Alemanha",
      "apenas empresas que compram suas licenças do Azure de um parceiro sediado na Alemanha",
      "qualquer usuário ou empresa que exija que seus dados residam na Alemanha"
    ],
    "resposta": 3,
    "explicacao": "O Azure Alemanha está disponível para clientes e parceiros elegíveis globalmente que pretendem fazer negócios na UE/EFTA, incluindo o Reino Unido. O Azure Alemanha oferece uma instância separada dos serviços do Microsoft Azure a partir de datacenters alemães. Os datacenters estão localizados em dois locais, Frankfurt/Main e Magdeburg. Esse posicionamento garante que os dados do cliente permaneçam na Alemanha e que os datacenters se conectem entre si através de uma rede privada. Todos os dados do cliente são armazenados exclusivamente nesses datacenters. Uma empresa alemã designada — o fiduciário de dados alemão — controla o acesso aos dados do cliente e aos sistemas e infraestrutura que os armazenam.",
    "link": "https://learn.microsoft.com/pt-br/azure/germany/germany-welcome",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 28 (banco original Q276)
  {
    "tipo": "unica",
    "texto": "Você cria um grupo de recursos chamado RG1 no Azure Resource Manager.\nVocê precisa impedir a exclusão acidental dos recursos em RG1.\nQual configuração você deve usar? Para responder, selecione a configuração apropriada na área de resposta.",
    "opcoes": ["Início rápido", "Custos do recurso", "Implantações", "Políticas", "Propriedades", "Bloqueios", "Exportar modelo"],
    "resposta": 5,
    "explicacao": "A opção \"Bloqueios\" no menu Configurações de um grupo de recursos permite proteger os recursos de exclusões acidentais, aplicando bloqueios de exclusão (CanNotDelete) ou somente leitura (ReadOnly) no grupo de recursos ou em recursos específicos.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 29 (banco original Q282)
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure.\nOnde você encontrará detalhes sobre os dados pessoais coletados pela Microsoft, como a Microsoft usa esses dados e para que finalidade são usados?",
    "opcoes": [
      "o Adendo de Proteção de Dados",
      "os Termos dos Serviços Online da Microsoft",
      "a Declaração de Privacidade da Microsoft",
      "o Microsoft Defender for Cloud"
    ],
    "resposta": 2,
    "explicacao": "A Declaração de Privacidade da Microsoft explica quais dados pessoais a Microsoft processa, como a Microsoft os processa e para quais finalidades. Seu Contrato de Serviços aplicável ou os Termos Suplementares de Pré-visualização podem especificar medidas de privacidade diferentes ou menores para alguns serviços em pré-visualização.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 30 (banco original Q286)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Trust Center faz parte do Microsoft Defender for Cloud.",
      "O Trust Center só pode ser acessado por usuários que têm uma assinatura do Azure.",
      "O Trust Center fornece informações sobre as ofertas de conformidade do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "O Trust Center é um recurso público independente, não fazendo parte do Microsoft Defender for Cloud. Ele pode ser acessado por qualquer pessoa, mesmo sem uma assinatura do Azure. O Trust Center fornece, de fato, informações detalhadas sobre segurança, privacidade e as ofertas de conformidade do Azure.",
    "link": "https://www.microsoft.com/pt-br/trust-center",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 31 (banco original Q287)
  {
    "tipo": "dragdrop",
    "texto": "Associe o recurso à descrição apropriada. Cada recurso pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Declaração de Privacidade da Microsoft" },
      { "label": "Termos dos Serviços Online" },
      { "label": "Adendo de Proteção de Dados" }
    ],
    "grupos": [
      "Descreve quais dados pessoais são coletados, como os dados são usados e para que os dados são usados.",
      "Um acordo legal que detalha as obrigações entre a Microsoft e um cliente em relação ao processamento e à segurança de dados do cliente e dados pessoais.",
      "Define os termos de processamento e segurança de dados para serviços online, incluindo a divulgação de dados processados e a transferência, retenção e exclusão de dados."
    ],
    "respostas": {
      "Descreve quais dados pessoais são coletados, como os dados são usados e para que os dados são usados.": ["Declaração de Privacidade da Microsoft"],
      "Um acordo legal que detalha as obrigações entre a Microsoft e um cliente em relação ao processamento e à segurança de dados do cliente e dados pessoais.": ["Termos dos Serviços Online"],
      "Define os termos de processamento e segurança de dados para serviços online, incluindo a divulgação de dados processados e a transferência, retenção e exclusão de dados.": ["Adendo de Proteção de Dados"]
    },
    "explicacao": "A Declaração de Privacidade da Microsoft descreve quais dados pessoais são coletados, como são usados e para quais finalidades. Os Termos dos Serviços Online (OST) são um acordo legal entre a Microsoft e o cliente, detalhando as obrigações de ambas as partes em relação ao processamento e à segurança de dados do cliente e dados pessoais — aplicando-se especificamente aos serviços online licenciados por assinatura, incluindo Azure, Dynamics 365, Office 365 e Bing Maps. O Adendo de Proteção de Dados (DPA) detalha ainda mais os termos de processamento e segurança para serviços online, incluindo divulgação de dados processados, transferência, retenção e exclusão de dados.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/examine-privacy-compliance-data-protection-standards/3-access-microsoft-privacy-statement",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 32 (banco original Q299)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornecem às organizações a capacidade de gerenciar a conformidade dos recursos do Azure em várias assinaturas.",
    "opcoes": [
      "Escolha uma opção",
      "Grupos de recursos",
      "Grupos de gerenciamento",
      "Políticas do Azure",
      "Planos do Azure App Service"
    ],
    "resposta": 3,
    "explicacao": "Se sua organização tem muitas assinaturas, você pode precisar de uma forma de gerenciar com eficiência o acesso, as políticas e a conformidade dessas assinaturas. Os grupos de gerenciamento do Azure fornecem um nível de escopo acima das assinaturas — você organiza assinaturas em contêineres chamados \"grupos de gerenciamento\" e aplica suas condições de governança a eles, que são automaticamente herdadas por todas as assinaturas e recursos aninhados. Você pode, por exemplo, aplicar políticas a um grupo de gerenciamento que limita as regiões disponíveis para a criação de VMs — essa política seria aplicada a todos os grupos de gerenciamento aninhados, assinaturas e recursos.\n\nNota: a fonte deste banco de questões apresenta o mesmo enunciado em outra questão (Q43 deste bloco) com o gabarito \"Grupos de gerenciamento\" em vez de \"Políticas do Azure\" — recomenda-se decidir com a turma qual das duas respostas será considerada oficial.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 33 (banco original Q301)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode adicionar um modelo do Azure Resource Manager a um blueprint do Azure.",
      "Você pode atribuir um blueprint do Azure a um grupo de recursos.",
      "Você pode usar Blueprints do Azure para conceder permissões a um recurso."
    ],
    "respostas": [true, false, true],
    "explicacao": "Cada blueprint pode consistir em zero ou mais artefatos de modelo ARM — isso significa que esforços anteriores para desenvolver e manter uma biblioteca de modelos ARM podem ser reaproveitados em Blueprints do Azure. Ao criar uma definição de blueprint, você define onde o blueprint será salvo — blueprints podem ser salvos em um grupo de gerenciamento ou assinatura aos quais você tenha acesso de Colaborador, não em um grupo de recursos diretamente. As permissões de definição do blueprint devem ser concedidas ou herdadas no escopo do grupo de gerenciamento ou assinatura onde ele é salvo — o que significa que isso concede permissões aos recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/blueprints/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 34 (banco original Q306)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se um grupo de recursos chamado RG1 tiver um bloqueio de exclusão, <combobox> excluir RG1.",
    "opcoes": [
      "Escolha uma opção",
      "somente um membro do grupo de administradores globais poderá",
      "o bloqueio de exclusão deverá ser removido antes que um administrador possa",
      "uma política do Azure deverá ser modificada antes que um administrador possa",
      "uma marca do Azure deverá ser adicionada antes que um administrador possa"
    ],
    "resposta": 2,
    "explicacao": "Você pode configurar um bloqueio em um grupo de recursos para impedir a exclusão acidental do grupo de recursos. O bloqueio se aplica a todos, incluindo administradores globais. Se você quiser excluir o grupo de recursos, o bloqueio deve ser removido primeiro.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/lock-resources",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 35 (banco original Q310)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Um serviço do Azure fica disponível a todos os clientes do Azure quando está em <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "pré-visualização pública",
      "pré-visualização privada",
      "desenvolvimento",
      "uma assinatura de Contrato Enterprise (EA)"
    ],
    "resposta": 1,
    "explicacao": "Pré-visualização pública significa que o serviço está em beta público e pode ser experimentado por qualquer pessoa com uma assinatura do Azure. Serviços em pré-visualização pública costumam ser oferecidos com desconto. As pré-visualizações públicas são excluídas dos SLAs e, em alguns casos, nenhum suporte é oferecido. Já os serviços em pré-visualização privada estão disponíveis apenas para pessoas selecionadas que se inscreveram no programa de pré-visualização privada, os serviços em desenvolvimento não estão disponíveis ao público, e serviços fornecidos sob uma assinatura EA estão disponíveis apenas ao proprietário dessa assinatura.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 36 (banco original Q320)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem 10 departamentos.\nA empresa planeja implementar um ambiente do Azure.\nVocê precisa garantir que cada departamento possa usar uma opção de pagamento diferente para os serviços do Azure que consome.\nO que você deve criar para cada departamento?",
    "opcoes": ["uma reserva", "uma assinatura", "um grupo de recursos", "uma instância de contêiner"],
    "resposta": 1,
    "explicacao": "Existem diferentes opções de pagamento no Azure, incluindo pagamento conforme o uso (PAYG), Contrato Enterprise (EA) e contas do Contrato de Cliente Microsoft (MCA). Seus custos do Azure são \"por assinatura\" — você é cobrado mensalmente por todos os recursos em uma assinatura. Portanto, para usar diferentes opções de pagamento por departamento, você precisará criar uma assinatura separada para cada departamento. Você pode criar várias assinaturas em um único locatário do Microsoft Entra ID. Reservas, grupos de recursos e instâncias de contêiner não oferecem uma forma de usar diferentes opções de pagamento por departamento.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/manage/create-subscription",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 37 (banco original Q322)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um serviço do Azure em pré-visualização privada é liberado a todos os clientes do Azure.",
      "Um serviço do Azure em pré-visualização pública é liberado a todos os clientes do Azure.",
      "Um serviço do Azure em disponibilidade geral é liberado a um subconjunto de clientes do Azure."
    ],
    "respostas": [false, true, false],
    "explicacao": "A maioria dos serviços passa por pré-visualização privada e depois pré-visualização pública antes de chegar à disponibilidade geral. A pré-visualização privada está disponível apenas para determinados clientes selecionados, para fins de avaliação. A pré-visualização pública significa que o serviço está em beta público e pode ser testado por qualquer pessoa com uma assinatura do Azure. Um serviço em disponibilidade geral está disponível para todos os clientes do Azure, não apenas para um subconjunto.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/preview-supplemental-terms/",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 38 (banco original Q328)
  {
    "tipo": "unica",
    "texto": "Você precisa solicitar à Microsoft o aumento do limite de cota de uma assinatura da sua empresa.\nQual painel (blade) você deve usar no portal do Azure? Para responder, selecione o painel apropriado na área de resposta.",
    "opcoes": ["Criar um recurso", "Todos os serviços", "Gerenciamento de Custos", "Assinaturas", "Ajuda + suporte", "Máquinas virtuais", "Todos os recursos", "App Services"],
    "resposta": 4,
    "explicacao": "Para solicitar um aumento de cota padrão, você deve usar o painel \"Ajuda + suporte\" no portal do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-portal/supportability/per-vm-quota-requests",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 39 (banco original Q337)
  {
    "tipo": "unica",
    "texto": "Quem pode usar a calculadora de Custo Total de Propriedade (TCO) do Azure?",
    "opcoes": [
      "somente leitores de faturamento de uma assinatura do Azure",
      "somente proprietários de uma assinatura do Azure",
      "qualquer pessoa",
      "somente usuários com uma conta no Microsoft Entra ID vinculada a uma assinatura do Azure"
    ],
    "resposta": 2,
    "explicacao": "Você não precisa de uma assinatura do Azure para trabalhar com a Calculadora de TCO — ela está disponível publicamente para qualquer pessoa.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/plan-manage-azure-costs/2-compare-costs-tco-calculator",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 40 (banco original Q353)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O custo do tráfego de saída do Azure é o mesmo para todas as regiões do Azure.",
      "A compra de serviços do Azure por meio de um Contrato Enterprise (EA) exige que você gaste um valor predeterminado.",
      "A Microsoft define a estrutura de preços de todos os serviços de terceiros vendidos pelo Azure Marketplace."
    ],
    "respostas": [false, true, false],
    "explicacao": "Dentro da maioria das áreas, há claramente regiões mais caras e menos caras — o custo do tráfego de saída varia por região. Muitas organizações com Contratos Enterprise (EA) da Microsoft adicionam o Azure ao seu EA para aproveitar benefícios como minimizar custos iniciais ao fixar preços com pré-compromisso de consumo, geralmente exigindo um valor mínimo de gasto predeterminado. O mercado comercial (Azure Marketplace) opera em um modelo de agência, no qual os próprios publishers definem os preços — a Microsoft fatura o cliente e repassa a receita ao publisher, retendo uma taxa de agência, mas não define a estrutura de preços de todos os serviços de terceiros.",
    "link": "https://azure.microsoft.com/pt-br/pricing/",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 41 (banco original Q360)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Um usuário atribuído à função de Proprietário (Owner) pode transferir a propriedade de uma assinatura do Azure.",
      "Você pode converter a assinatura do Azure da sua empresa de Avaliação Gratuita (Free Trial) para Pagamento Conforme o Uso (Pay-As-You-Go).",
      "O limite de gastos do Azure é fixo e não pode ser aumentado nem diminuído."
    ],
    "respostas": [false, true, true],
    "explicacao": "É necessário ser um administrador da conta de faturamento que contém a assinatura para poder transferi-la — isso pode ser um Administrador de Faturamento ou Administrador Global. Um proprietário de assinatura pode gerenciar todos os recursos e permissões dentro dela, mas não pode transferir a propriedade da assinatura em si. É possível, sim, converter uma assinatura de avaliação gratuita para pagamento conforme o uso — prática comum para quem deseja continuar usando os serviços do Azure quando o período de teste expira. Você pode remover o limite de gastos, mas não pode aumentá-lo nem diminuí-lo — o limite é igual ao valor do crédito disponível e não pode ser alterado.",
    "link": "https://azure.microsoft.com/pt-br/free/free-account-faq/",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 42 (banco original Q403)
  {
    "tipo": "unica",
    "texto": "Você precisa criar um novo usuário para uma assinatura do Azure.\nO que você deve usar? Para responder, selecione o serviço na área de resposta.",
    "opcoes": ["Criar um recurso", "Máquinas virtuais", "Gerenciamento de Custos", "Assinaturas", "Microsoft Entra ID", "Máquinas virtuais...", "Todos os recursos", "App Services"],
    "resposta": 3,
    "explicacao": "A palavra-chave é \"assinatura\". No portal do Azure, selecione Assinaturas. Selecione a assinatura à qual deseja atribuir o usuário e, em seguida, selecione Controle de Acesso. Selecione Adicionar para adicionar um usuário à assinatura. Depois de adicionar o usuário à assinatura, você pode atribuir a ele uma função e a conta à qual o usuário terá acesso.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/role-assignments-portal",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 43 (banco original Q410)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> fornecem às organizações a capacidade de gerenciar a conformidade dos recursos do Azure em várias assinaturas.",
    "opcoes": [
      "Escolha uma opção",
      "Grupos de recursos",
      "Grupos de gerenciamento",
      "Políticas do Azure",
      "Planos do Azure App Service"
    ],
    "resposta": 2,
    "explicacao": "Os Grupos de gerenciamento do Azure permitem que as organizações organizem assinaturas e apliquem políticas de governança e conformidade de forma centralizada, atuando em um nível superior ao das assinaturas.\n\nNota: a fonte deste banco de questões apresenta o mesmo enunciado na Q32 deste bloco com o gabarito \"Políticas do Azure\" em vez de \"Grupos de gerenciamento\" — recomenda-se decidir com a turma qual das duas respostas será considerada oficial.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/management-groups/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 44 (banco original Q419)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode atribuir uma política do Azure a uma máquina virtual.",
      "Se uma política do Azure for atribuída a um grupo de recursos, os recursos não conformes são removidos do grupo.",
      "Se uma política do Azure for atribuída a um grupo de recursos, apenas recursos em conformidade podem ser implantados no grupo."
    ],
    "respostas": [true, false, true],
    "explicacao": "Atribuições de Azure Policy podem ter escopo em diferentes níveis da hierarquia de nuvem. Embora sejam frequentemente aplicadas no nível de grupo de gerenciamento, assinatura ou grupo de recursos, você pode direcionar um recurso individual diretamente. Ao atribuir uma política a um grupo de recursos, os recursos não conformes existentes NÃO são removidos automaticamente — eles são sinalizados como não conformes, mas permanecem. No entanto, a política impede que novos recursos não conformes sejam implantados no grupo.",
    "link": "https://learn.microsoft.com/pt-br/azure/governance/policy/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 45 (banco original Q433)
  {
    "tipo": "unica",
    "texto": "Sua empresa tem uma assinatura do Azure e três unidades de negócios.\nVocê planeja implantar novos recursos para cada unidade de negócios.\nVocê precisa garantir que os novos recursos sejam implantados usando um método repetível e confiável, que aplique as mesmas configurações a cada recurso.\nO que você deve usar?",
    "opcoes": ["Azure Policy", "Azure Arc", "um grupo de recursos", "modelos do Azure Resource Manager (ARM)"],
    "resposta": 3,
    "explicacao": "A resposta correta é: modelos do Azure Resource Manager (ARM). Os modelos ARM são arquivos JSON (JavaScript Object Notation) que definem a infraestrutura e a configuração do seu projeto. Eles usam Infraestrutura como Código (IaC), que permite definir de forma declarativa o que você deseja implantar. Como a configuração é definida em um arquivo, você pode reutilizar o mesmo modelo para implantar recursos em várias unidades de negócios — atendendo diretamente ao requisito de um método repetível e confiável que garanta que as mesmas configurações sejam aplicadas sempre.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/templates/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 46 (banco original Q437)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Quando você precisa delegar permissões a várias máquinas virtuais do Azure simultaneamente, você deve implantar as máquinas virtuais <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "na mesma região do Azure.",
      "usando o mesmo modelo do Azure Resource Manager.",
      "no mesmo grupo de recursos.",
      "na mesma zona de disponibilidade."
    ],
    "resposta": 3,
    "explicacao": "Um grupo de recursos é um contêiner lógico para recursos do Azure. Grupos de recursos facilitam o gerenciamento de recursos do Azure. Com um grupo de recursos, você pode permitir que um usuário gerencie todos os recursos no grupo, como máquinas virtuais, sites e sub-redes. As permissões que você aplica ao grupo de recursos se aplicam a todos os recursos contidos nele.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 47 (banco original Q451)
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure.\nVocê precisa usar o Azure Cloud Shell para executar um script de implantação.\nO que você deve usar para acessar o Cloud Shell?",
    "opcoes": ["Azure Resource Manager (ARM)", "Microsoft Visual Studio", "um prompt de comando do Windows", "um navegador Web"],
    "resposta": 3,
    "explicacao": "O Azure Cloud Shell é um shell interativo, autenticado e acessível pelo navegador, para gerenciar recursos do Azure. Ele pode ser acessado diretamente do portal do Azure usando um navegador Web, sem necessidade de instalar nada localmente.",
    "link": "https://learn.microsoft.com/pt-br/azure/cloud-shell/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  },
  // Questao 48 (banco original Q467)
  {
    "tipo": "dragdrop",
    "texto": "Em qual ordem os recursos do Azure devem ser organizados, do objeto pai de maior nível (no topo) ao objeto filho de menor nível (embaixo)? Para responder, mova todos os recursos da lista para a área de resposta e organize-os na ordem correta.",
    "itens": [
      { "label": "grupo de recursos" },
      { "label": "máquina virtual do Azure" },
      { "label": "assinatura do Azure" },
      { "label": "grupo de gerenciamento" }
    ],
    "grupos": ["1", "2", "3", "4"],
    "respostas": {
      "1": ["grupo de gerenciamento"],
      "2": ["assinatura do Azure"],
      "3": ["grupo de recursos"],
      "4": ["máquina virtual do Azure"]
    },
    "explicacao": "A hierarquia de organização do Azure, do nível mais alto para o mais baixo, é: grupo de gerenciamento (organiza uma ou mais assinaturas) → assinatura do Azure (contêiner de faturamento e permissões) → grupo de recursos (contêiner lógico dentro de uma assinatura) → recursos individuais, como uma máquina virtual do Azure (o objeto filho de nível mais baixo, contido dentro de um grupo de recursos).",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/overview",
    "dominio": "Descrever os principais componentes arquitetônicos do Azure",
    "simulado": "az-2026-bloco04"
  }

];