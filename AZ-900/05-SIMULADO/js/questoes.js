// ==========================================
// Arquivo: questoes_bloco05.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 5 de 10 — Descrever os serviços de computação e rede do Azure
// (tipos de computação; opções de VM; recursos necessários para VMs; opções de
//  hospedagem de aplicativos; rede virtual, sub-redes, emparelhamento, DNS,
//  Gateway de VPN, ExpressRoute; endpoints públicos e privados)
// 48 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 7, 9, 21, 25, 34, 64, 89, 97, 99, 105, 110, 122, 131, 132, 140, 148, 151, 155, 156,
// 182, 192, 202, 203, 210, 217, 218, 220, 250, 252, 253, 256, 257, 259, 260, 262, 309,
// 333, 336, 361, 366, 381, 387, 416, 427, 434, 457, 461, 463
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q7) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Seus desenvolvedores criaram 10 aplicativos Web que devem ser hospedados no Azure.\nVocê precisa determinar qual plano de camada de serviço Web do Azure usar para hospedar os aplicativos. O plano deve atender aos seguintes requisitos:\n• Os aplicativos Web usarão domínios personalizados.\n• Cada aplicativo Web requer 10 GB de armazenamento.\n• Cada aplicativo Web deve ser executado em instâncias de computação dedicadas.\n• O balanceamento de carga entre instâncias deve estar incluído.\n• Os custos devem ser minimizados.\nQual plano de camada Web você deve usar?",
    "opcoes": [
      "Standard",
      "Basic",
      "Free",
      "Shared"
    ],
    "resposta": 0,
    "explicacao": "Analisando os requisitos: domínios personalizados são suportados nas camadas Basic, Shared e Standard. 10 GB de armazenamento é suportado tanto por Basic quanto por Standard. Instâncias de computação dedicadas: Basic suporta no máximo 3 instâncias, enquanto Standard suporta até 10. Balanceamento de carga entre instâncias: as camadas Free, Shared e Basic não suportam balanceamento de carga — apenas a partir da camada Standard esse recurso é oferecido. Por fim, entre as camadas que atendem a todos os requisitos, a Standard tem o menor custo em comparação com Premium ou Isolada.",
    "link": "https://azure.microsoft.com/pt-br/pricing/details/app-service/windows/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 02 (banco original Q9) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSua empresa planeja migrar todas as suas máquinas virtuais para uma assinatura do Azure com pagamento conforme o uso (pay-as-you-go). As máquinas virtuais estão atualmente hospedadas em hosts Hyper-V em um datacenter.\nVocê precisa garantir que a solução do Azure pretendida utilize o modelo de despesa correto.\nSolução: Você deve recomendar o uso do modelo de despesa elástico.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Elasticidade não é um modelo de despesa, e sim uma das características da computação em nuvem. A vantagem básica da nuvem é migrar de um modelo de Despesa de Capital (CapEx) elevado para um modelo de pagamento conforme o uso, que é uma Despesa Operacional (OpEx).",
    "link": "https://azure.microsoft.com/pt-br/pricing/purchase-options/pay-as-you-go/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 03 (banco original Q21) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nOs desenvolvedores da sua empresa pretendem implantar um grande número de máquinas virtuais personalizadas semanalmente. Eles também removerão essas máquinas virtuais na mesma semana em que foram implantadas. Sessenta por cento das VMs têm o Windows Server 2016 instalado, enquanto os outros quarenta por cento têm o Ubuntu Linux instalado.\nVocê precisa garantir que o esforço administrativo necessário para esse processo seja reduzido, empregando um serviço adequado do Azure.\nSolução: Você recomenda o uso do Microsoft Managed Desktop.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O Microsoft Managed Desktop combina o Microsoft 365 Enterprise, gerenciamento de dispositivos baseado em nuvem e monitoramento de segurança — não está relacionado a provisionar e remover ambientes de VM de teste rapidamente. A ferramenta correta para esse cenário é o Azure DevTest Labs.",
    "link": "https://learn.microsoft.com/pt-br/azure/devtest-labs/devtest-lab-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 04 (banco original Q25) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Você tem máquinas virtuais (VMs) hospedadas no Microsoft Azure. As VMs estão localizadas em uma única rede virtual do Azure chamada VNet1.\nA empresa tem usuários que trabalham remotamente. Os usuários remotos precisam de acesso às VMs na VNet1.\nVocê precisa fornecer acesso para os trabalhadores remotos.\nO que você deve fazer?",
    "opcoes": [
      "Configurar uma VPN Site a Site (S2S).",
      "Configurar uma VPN VNet a VNet.",
      "Configurar uma VPN Ponto a Site (P2S).",
      "Configurar o DirectAccess em uma VM com Windows Server 2012.",
      "Configurar uma VPN Multi-Site."
    ],
    "resposta": 2,
    "explicacao": "Uma conexão de gateway VPN Ponto a Site (P2S) permite criar uma conexão segura à sua rede virtual a partir de um computador cliente individual — ideal para usuários remotos individuais que precisam acessar recursos na rede virtual.",
    "link": "https://learn.microsoft.com/pt-br/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 05 (banco original Q34)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece controle total dos sistemas operacionais que hospedam os aplicativos.",
      "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece a capacidade de dimensionar a plataforma automaticamente.",
      "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece serviços profissionais de desenvolvimento para adicionar continuamente recursos a aplicativos personalizados."
    ],
    "respostas": [false, true, true],
    "explicacao": "Uma solução PaaS não fornece acesso ao sistema operacional. O serviço Aplicativos Web do Azure (Azure App Service) fornece um ambiente para você hospedar seus aplicativos Web — por trás dos bastidores, os aplicativos Web são hospedados em máquinas virtuais rodando IIS, mas você não tem acesso direto à VM, ao sistema operacional ou ao IIS. Uma solução PaaS que hospeda aplicativos Web no Azure fornece, sim, a capacidade de dimensionar a plataforma automaticamente — isso é conhecido como dimensionamento automático (autoscaling). O PaaS fornece um framework sobre o qual desenvolvedores podem construir, com ferramentas de desenvolvimento que reduzem o tempo necessário para codificar novos aplicativos, com componentes pré-codificados integrados à plataforma, como fluxo de trabalho, serviços de diretório, recursos de segurança e busca.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-paas/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 06 (banco original Q64)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece controle total dos sistemas operacionais que hospedam os aplicativos.",
      "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure pode receber memória adicional ao mudar a camada de preço.",
      "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure pode ser configurada para dimensionar automaticamente o número de instâncias com base na demanda."
    ],
    "respostas": [false, true, true],
    "explicacao": "Uma solução PaaS não fornece acesso ao sistema operacional. Uma solução PaaS que hospeda aplicativos Web pode, sim, receber memória adicional ao mudar de camada de preço (por exemplo, no Azure App Service). E pode ser configurada para dimensionar automaticamente o número de instâncias com base na demanda — comportamento conhecido como dimensionamento automático (autoscaling), que adiciona mais máquinas virtuais balanceadas por carga para hospedar os aplicativos Web.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-paas/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 07 (banco original Q89)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Redes virtuais do Azure implantadas na mesma região do Azure são conectadas por padrão.",
      "Cada rede virtual do Azure em um único grupo de recursos deve ter um nome exclusivo.",
      "O espaço de endereço de uma rede virtual do Azure deve ser exclusivo dentro de uma assinatura."
    ],
    "respostas": [false, true, true],
    "explicacao": "Redes virtuais na mesma região do Azure NÃO são conectadas por padrão — você precisaria configurar as conexões, por exemplo com o emparelhamento de VNets (peering). Todos os tipos de recursos do Azure têm um escopo que define o nível em que os nomes dos recursos devem ser exclusivos — uma rede virtual tem escopo de grupo de recursos, ou seja, só pode existir uma rede com um determinado nome dentro de um mesmo grupo de recursos. Ao construir sua rede no Azure, é importante garantir espaços de endereço não sobrepostos — o espaço de endereço (bloco CIDR) da sua VNet não deve se sobrepor a outros intervalos de rede da organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/tutorial-connect-virtual-networks-portal",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 08 (banco original Q97)
  {
    "tipo": "unica",
    "texto": "Você planeja estender a rede da sua empresa para o Azure.\nA rede contém um dispositivo VPN que usa o endereço IP 131.107.200.1.\nVocê precisa criar um recurso do Azure que defina o dispositivo VPN no Azure.\nQual recurso do Azure você deve criar? Para responder, selecione o recurso apropriado na área de resposta.",
    "opcoes": [
      "Gateways NAT",
      "Gateways de aplicativo",
      "Gateways de rede local",
      "Gateways de rede virtual",
      "Gateways de Dados Locais",
      "Gateway do Azure Data Box",
      "Azure Stack Edge / Data Box Gateway",
      "Políticas de Firewall de Aplicativo Web"
    ],
    "resposta": 2,
    "explicacao": "Um Gateway de Rede Local é um objeto no Azure que representa seu dispositivo VPN local. Um Gateway de Rede Virtual é o objeto VPN no lado do Azure da conexão. Uma \"conexão\" é o que liga o Gateway de Rede Local e o Gateway de Rede Virtual para estabelecer a VPN. O gateway de rede local normalmente se refere ao seu local on-premises: você dá um nome ao site pelo qual o Azure pode se referir a ele, e especifica o endereço IP do dispositivo VPN local ao qual você fará a conexão, além dos prefixos de endereço IP que serão roteados por meio do gateway VPN até o dispositivo VPN.",
    "link": "https://learn.microsoft.com/pt-br/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 09 (banco original Q99)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê planeja implantar várias máquinas virtuais do Azure.\nVocê precisa garantir que os serviços em execução nas máquinas virtuais fiquem disponíveis caso um único datacenter falhe.\nSolução: Você implanta as máquinas virtuais em um conjunto de dimensionamento (scale set).\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Esta resposta não especifica que o conjunto de dimensionamento será configurado em vários datacenters — portanto, essa solução não atende ao objetivo por si só. Os conjuntos de dimensionamento de máquinas virtuais do Azure permitem criar e gerenciar um grupo de VMs balanceadas por carga. O número de instâncias de VM pode aumentar ou diminuir automaticamente em resposta à demanda ou a uma programação definida. Conjuntos de dimensionamento fornecem alta disponibilidade aos seus aplicativos e permitem gerenciar, configurar e atualizar centralmente muitas VMs. As máquinas virtuais em um conjunto de dimensionamento podem ser implantadas em vários domínios de atualização e de falha para maximizar a disponibilidade e a resiliência contra interrupções causadas por falhas de datacenter e eventos de manutenção planejados ou não planejados — mas isso precisa ser configurado explicitamente para abranger múltiplos datacenters.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/availability",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 10 (banco original Q105)
  {
    "tipo": "multipla",
    "texto": "Você tem um ambiente do Azure que contém várias máquinas virtuais do Azure.\nVocê planeja implementar uma solução que permita que os computadores clientes da sua rede local se comuniquem com as máquinas virtuais do Azure.\nVocê precisa recomendar quais recursos do Azure devem ser criados para a solução planejada.\nQuais dois recursos do Azure você deve incluir na recomendação? Cada resposta correta apresenta parte da solução.",
    "opcoes": [
      "um gateway de rede virtual",
      "um balanceador de carga",
      "um gateway de aplicativo",
      "uma rede virtual",
      "uma sub-rede de gateway"
    ],
    "respostas": [0, 4],
    "explicacao": "Se você já tem VMs do Azure, isso implica que já tem uma VNet. Para implementar uma solução que permita que computadores clientes de uma rede local se comuniquem com máquinas virtuais do Azure, você precisa configurar uma VPN (Rede Privada Virtual) para conectar a rede local à rede virtual do Azure. O dispositivo VPN do Azure é conhecido como Gateway de Rede Virtual. O gateway de rede virtual precisa estar localizado em uma sub-rede dedicada na rede virtual do Azure — essa sub-rede dedicada é conhecida como sub-rede de gateway e deve ser nomeada \"GatewaySubnet\". A rede virtual em si também é necessária, mas como já existem VMs implantadas no Azure, podemos assumir que a rede virtual já está em vigor.",
    "link": "https://learn.microsoft.com/pt-br/office365/enterprise/connect-an-on-premises-network-to-a-microsoft-azure-virtual-network",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 11 (banco original Q110)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja mover vários servidores para o Azure.\nA política de conformidade da empresa determina que um servidor chamado FinServer deve estar em um segmento de rede separado.\nVocê está avaliando quais serviços do Azure podem ser usados para atender aos requisitos da política de conformidade.\nQual solução do Azure você deve recomendar?",
    "opcoes": [
      "um grupo de recursos para o FinServer e outro grupo de recursos para todos os outros servidores",
      "uma rede virtual para o FinServer e outra rede virtual para todos os outros servidores",
      "uma VPN para o FinServer e um gateway de rede virtual para cada um dos outros servidores",
      "um grupo de recursos para todos os servidores e um bloqueio de recurso para o FinServer"
    ],
    "resposta": 1,
    "explicacao": "Redes no Azure são conhecidas como redes virtuais. Uma rede virtual pode ter vários espaços de endereço IP e várias sub-redes. O Azure roteia automaticamente o tráfego entre diferentes sub-redes dentro de uma mesma rede virtual. A questão afirma que o FinServer deve estar em um segmento de rede separado. A única forma de separar o FinServer dos outros servidores em termos de rede é colocar o servidor em uma rede virtual diferente da dos outros servidores — usar sub-redes diferentes dentro da mesma rede virtual não seria suficiente, já que o roteamento entre sub-redes é automático.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-network-vnet-plan-design-arm",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 12 (banco original Q122)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê planeja implantar várias máquinas virtuais do Azure.\nVocê precisa garantir que os serviços em execução nas máquinas virtuais fiquem disponíveis caso um único datacenter falhe.\nSolução: Você implanta as máquinas virtuais em dois ou mais conjuntos de dimensionamento (scale sets).\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Um conjunto de disponibilidade é um agrupamento lógico de VMs dentro de um único datacenter. Para o objetivo declarado (proteção contra falha de um datacenter inteiro), seria necessário usar zonas de disponibilidade, não apenas múltiplos conjuntos de dimensionamento. Esta resposta não especifica que os conjuntos de dimensionamento serão configurados em vários datacenters, portanto essa solução não atende ao objetivo. Conjuntos de dimensionamento de VMs do Azure permitem criar e gerenciar um grupo de VMs balanceadas por carga, com alta disponibilidade dentro de sua configuração, mas isso precisa ser explicitamente distribuído entre datacenters/zonas para atender ao requisito da questão.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/availability",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 13 (banco original Q131)
  {
    "tipo": "multipla",
    "texto": "Você planeja implantar várias máquinas virtuais do Azure.\nVocê precisa garantir que os serviços em execução nas máquinas virtuais permaneçam disponíveis caso um único datacenter falhe.\nQuais são as duas soluções possíveis? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Implantar as máquinas virtuais em duas ou mais zonas de disponibilidade.",
      "Implantar as máquinas virtuais em dois ou mais grupos de recursos.",
      "Implantar as máquinas virtuais em um conjunto de dimensionamento (scale set).",
      "Implantar as máquinas virtuais em duas ou mais regiões."
    ],
    "respostas": [0, 3],
    "explicacao": "Implantar as VMs em duas ou mais zonas de disponibilidade: uma Zona de Disponibilidade do Azure é um local físico único dentro de uma região do Azure. Cada zona é composta por um ou mais datacenters equipados com infraestrutura independente de energia, refrigeração e rede. Ao distribuir suas VMs entre várias zonas de disponibilidade (ex.: Zona 1, Zona 2), se um datacenter ou uma zona inteira ficar indisponível devido a uma falha de energia ou infraestrutura, suas VMs em execução nas outras zonas continuam disponíveis. Implantar as VMs em duas ou mais regiões: uma Região do Azure é um conjunto de datacenters implantados dentro de um perímetro definido por latência e conectados por meio de uma rede regional dedicada de baixa latência. Ao implantar máquinas virtuais em regiões separadas (ex.: Leste dos EUA e Oeste dos EUA), você separa sua infraestrutura por centenas de quilômetros. Se uma região inteira sofrer uma falha catastrófica de datacenter, falha na rede elétrica ou desastre natural, as cargas de trabalho na região secundária manterão seus serviços disponíveis.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 14 (banco original Q132)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você planeja implantar 20 máquinas virtuais em um ambiente do Azure. Para garantir que uma máquina virtual chamada VM1 não possa se conectar a outras máquinas virtuais, VM1 deve <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "ser implantada em uma rede virtual separada.",
      "executar um sistema operacional diferente das outras máquinas virtuais.",
      "ser implantada em um grupo de recursos separado.",
      "ter duas interfaces de rede."
    ],
    "resposta": 1,
    "explicacao": "O Azure roteia automaticamente o tráfego entre sub-redes em uma rede virtual. Portanto, todas as máquinas virtuais em uma rede virtual podem se conectar às outras máquinas virtuais na mesma rede virtual — mesmo que as VMs estejam em sub-redes separadas dentro da rede virtual, elas ainda podem se comunicar. Para garantir que uma máquina virtual não possa se conectar às outras, a máquina virtual deve ser implantada em uma rede virtual separada.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-networks-udr-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 15 (banco original Q140)
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure às descrições corretas. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Functions" },
      { "label": "Azure App Service" },
      { "label": "Máquinas virtuais do Azure" },
      { "label": "Instâncias de Contêiner do Azure" }
    ],
    "grupos": [
      "Fornecem virtualização do sistema operacional.",
      "Fornecem um ambiente portátil para aplicativos em contêiner.",
      "São usados para criar, implantar e dimensionar aplicativos Web.",
      "Fornecem uma plataforma para código sem servidor (serverless)."
    ],
    "respostas": {
      "Fornecem virtualização do sistema operacional.": ["Máquinas virtuais do Azure"],
      "Fornecem um ambiente portátil para aplicativos em contêiner.": ["Instâncias de Contêiner do Azure"],
      "São usados para criar, implantar e dimensionar aplicativos Web.": ["Azure App Service"],
      "Fornecem uma plataforma para código sem servidor (serverless).": ["Azure Functions"]
    },
    "explicacao": "Máquinas virtuais do Azure fornecem virtualização do sistema operacional. Instâncias de Contêiner do Azure (ACI) é um serviço gerenciado que permite executar contêineres diretamente na nuvem pública do Azure, sem exigir o uso de máquinas virtuais — desenvolva aplicativos rapidamente sem gerenciar VMs ou aprender novas ferramentas, é apenas seu aplicativo, em um contêiner, rodando na nuvem. O Azure App Service é uma plataforma totalmente gerenciada para construir aplicativos Web — os aplicativos rodam e escalam com facilidade em ambientes Windows e Linux. O Azure Functions é um serviço sem servidor baseado em nuvem que permite executar código acionado por eventos de forma escalável, sem provisionar ou gerenciar infraestrutura.",
    "link": "https://learn.microsoft.com/pt-br/azure/container-instances/container-instances-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 16 (banco original Q148)
  {
    "tipo": "unica",
    "texto": "Qual é a função de uma VPN Site a Site?",
    "opcoes": [
      "fornece uma conexão segura entre um computador em uma rede pública e a rede corporativa",
      "fornece uma conexão privada dedicada ao Azure que NÃO trafega pela internet",
      "fornece uma conexão de um dispositivo VPN local a um gateway VPN do Azure"
    ],
    "resposta": 2,
    "explicacao": "Uma conexão de gateway VPN Site a Site é usada para conectar sua rede local a uma rede virtual do Azure por meio de um túnel VPN IPsec/IKE (IKEv1 ou IKEv2). Esse tipo de conexão requer um dispositivo VPN localizado no ambiente local, que tenha um endereço IP público voltado para fora atribuído a ele.",
    "link": "https://learn.microsoft.com/pt-br/azure/vpn-gateway/vpn-gateway-howto-site-to-site-resource-manager-portal",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 17 (banco original Q151)
  {
    "tipo": "multipla",
    "texto": "Você precisa gerenciar contêineres.\nQuais dois serviços você pode usar? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Área de Trabalho Virtual do Azure",
      "Máquinas virtuais do Azure",
      "Azure Functions",
      "Instâncias de Contêiner do Azure",
      "Serviço do Kubernetes do Azure (AKS)"
    ],
    "respostas": [3, 4],
    "explicacao": "Execute contêineres Docker sob demanda em um ambiente do Azure gerenciado e sem servidor. As Instâncias de Contêiner do Azure são uma solução para qualquer cenário que possa operar em contêineres isolados, sem orquestração. Execute aplicativos orientados a eventos, implante rapidamente a partir de seus pipelines de desenvolvimento de contêineres e execute processamento de dados e jobs de compilação. Você pode gerenciar contêineres em escala com um serviço totalmente gerenciado de gerenciamento e orquestração de contêineres Kubernetes que se integra ao Microsoft Entra ID. O Serviço de Kubernetes do Azure é um serviço robusto e econômico de orquestração de contêineres que ajuda a implantar e gerenciar aplicativos em contêiner em segundos, com recursos adicionais atribuídos automaticamente, sem a dor de cabeça de gerenciar servidores adicionais.",
    "link": "https://learn.microsoft.com/pt-br/azure/container-instances/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 18 (banco original Q155)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nVocê planeja implantar várias máquinas virtuais do Azure.\nVocê precisa garantir que os serviços em execução nas máquinas virtuais fiquem disponíveis caso um único datacenter falhe.\nSolução: Você implanta as máquinas virtuais em duas ou mais regiões.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Ao implantar as máquinas virtuais em duas ou mais regiões, você está implantando-as em múltiplos datacenters. Isso garantirá que os serviços em execução nas máquinas virtuais fiquem disponíveis caso um único datacenter falhe. O Azure opera em vários datacenters ao redor do mundo. Esses datacenters são agrupados em regiões geográficas, dando flexibilidade na escolha de onde construir seus aplicativos. Dentro de cada região, múltiplos datacenters existem para fornecer redundância e disponibilidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/regions",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 19 (banco original Q156)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Uma instância de contêiner do Azure é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "serviço de computação",
      "serviço de identidade",
      "serviço de rede",
      "serviço de armazenamento"
    ],
    "resposta": 1,
    "explicacao": "A Instância de Contêiner do Azure (Azure Container Instance) permite executar contêineres na nuvem sem gerenciar máquinas virtuais. Ela se enquadra na categoria de serviços de computação do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/container-instances/container-instances-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 20 (banco original Q182)
  {
    "tipo": "unica",
    "texto": "Uma equipe de desenvolvedores da sua empresa planeja implantar e, depois, remover 50 máquinas virtuais toda semana. Todas as máquinas virtuais são configuradas usando modelos do Azure Resource Manager.\nVocê precisa recomendar qual serviço do Azure minimizará o esforço administrativo necessário para implantar e remover as máquinas virtuais.\nO que você deve recomendar?",
    "opcoes": [
      "Instâncias de Máquina Virtual (VM) Reservadas do Azure",
      "Azure DevTest Labs",
      "conjuntos de dimensionamento de máquinas virtuais do Azure",
      "Área de Trabalho Virtual do Azure"
    ],
    "resposta": 1,
    "explicacao": "O Azure DevTest Labs cria laboratórios compostos por bases pré-configuradas ou modelos do Azure Resource Manager. Usando o DevTest Labs, você pode testar as versões mais recentes de seus aplicativos executando as seguintes tarefas: provisionar rapidamente ambientes Windows e Linux usando modelos e artefatos reutilizáveis; integrar facilmente seu pipeline de implantação ao DevTest Labs para provisionar ambientes sob demanda; escalar seus testes de carga provisionando múltiplos agentes de teste e criando ambientes pré-provisionados para treinamento e demonstrações.",
    "link": "https://learn.microsoft.com/pt-br/azure/lab-services/devtest-lab-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 21 (banco original Q192)
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure às descrições corretas. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Functions" },
      { "label": "Azure App Service" },
      { "label": "Máquinas virtuais do Azure" },
      { "label": "Instâncias de Contêiner do Azure" }
    ],
    "grupos": [
      "Fornecem virtualização do sistema operacional",
      "Fornecem um ambiente portátil para aplicativos em contêiner",
      "São usados para criar, implantar e dimensionar aplicativos Web",
      "Fornecem uma plataforma para código sem servidor (serverless)"
    ],
    "respostas": {
      "Fornecem virtualização do sistema operacional": ["Máquinas virtuais do Azure"],
      "Fornecem um ambiente portátil para aplicativos em contêiner": ["Instâncias de Contêiner do Azure"],
      "São usados para criar, implantar e dimensionar aplicativos Web": ["Azure App Service"],
      "Fornecem uma plataforma para código sem servidor (serverless)": ["Azure Functions"]
    },
    "explicacao": "Máquinas virtuais do Azure fornecem virtualização do sistema operacional. As Instâncias de Contêiner do Azure fornecem um ambiente portátil para executar aplicativos em contêiner sem gerenciar VMs. O Azure App Service é usado para criar, implantar e dimensionar aplicativos Web. O Azure Functions fornece uma plataforma para código sem servidor.",
    "link": "https://learn.microsoft.com/pt-br/azure/container-instances/container-instances-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 22 (banco original Q202)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure à definição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Databricks" },
      { "label": "Azure Functions" },
      { "label": "Azure App Service" },
      { "label": "Azure Application Insights" }
    ],
    "grupos": [
      "Fornece a plataforma para código sem servidor",
      "Um serviço de análise de big data para machine learning",
      "Detecta e diagnostica anomalias em aplicativos Web",
      "Hospeda aplicativos Web"
    ],
    "respostas": {
      "Fornece a plataforma para código sem servidor": ["Azure Functions"],
      "Um serviço de análise de big data para machine learning": ["Azure Databricks"],
      "Detecta e diagnostica anomalias em aplicativos Web": ["Azure Application Insights"],
      "Hospeda aplicativos Web": ["Azure App Service"]
    },
    "explicacao": "Sem servidor (serverless) corresponde ao Azure Functions. Análise de big data para machine learning corresponde ao Azure Databricks. Detecção e diagnóstico de anomalias em aplicativos Web corresponde ao Azure Application Insights. Hospedagem de aplicativos Web corresponde ao Azure App Service.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-monitor/app/app-insights-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 23 (banco original Q203)
  {
    "tipo": "unica",
    "texto": "Uma equipe de desenvolvedores da sua empresa planeja implantar e, depois, remover 50 máquinas virtuais personalizadas toda semana. Trinta das máquinas virtuais executam o Windows Server 2016 e 20 executam o Ubuntu Linux.\nVocê precisa recomendar qual serviço do Azure minimizará o esforço administrativo necessário para implantar e remover as máquinas virtuais.\nO que você deve recomendar?",
    "opcoes": [
      "Instâncias de Máquinas Virtuais (VM) Reservadas do Azure",
      "conjuntos de dimensionamento de máquinas virtuais do Azure",
      "Azure DevTest Labs",
      "Microsoft Managed Desktop"
    ],
    "resposta": 2,
    "explicacao": "O Azure DevTest Labs cria laboratórios compostos por bases pré-configuradas ou modelos do Azure Resource Manager. Usando o DevTest Labs, você pode testar as versões mais recentes de seus aplicativos: provisionando rapidamente ambientes Windows e Linux usando modelos e artefatos reutilizáveis; integrando facilmente seu pipeline de implantação ao DevTest Labs para provisionar ambientes sob demanda; e escalando seus testes de carga provisionando múltiplos agentes de teste, além de criar ambientes pré-provisionados para treinamento e demonstrações.",
    "link": "https://learn.microsoft.com/pt-br/azure/lab-services/devtest-lab-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 24 (banco original Q210)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode gerenciar um servidor Windows local como um recurso do Azure usando <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "o Microsoft Entra Connect.",
      "o Azure Arc.",
      "um agente do Azure Pipelines.",
      "o Azure VPN Gateway."
    ],
    "resposta": 1,
    "explicacao": "O Azure Arc simplifica a governança e o gerenciamento, entregando uma plataforma consistente de gerenciamento multinuvem e local. O Azure Arc fornece uma forma centralizada e unificada de: gerenciar todo o seu ambiente em conjunto, projetando seus recursos não Azure e/ou locais no Azure Resource Manager; gerenciar máquinas virtuais, clusters Kubernetes e bancos de dados como se estivessem sendo executados no Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-arc/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 25 (banco original Q217)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSeu ambiente do Azure contém várias máquinas virtuais do Azure.\nVocê precisa garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP.\nSolução: Você modifica um perfil do Azure Traffic Manager.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O Azure Traffic Manager é uma solução de balanceamento de carga baseada em DNS. Ele não é usado para garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP. Para garantir esse acesso, você precisa modificar um grupo de segurança de rede ou o Firewall do Azure — adicionando uma regra que permita a conexão à máquina virtual na porta 80 (HTTP).",
    "link": "https://learn.microsoft.com/pt-br/azure/traffic-manager/traffic-manager-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 26 (banco original Q218)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja implantar vários servidores Web e vários servidores de banco de dados no Azure.\nVocê precisa recomendar uma solução do Azure para limitar os tipos de conexões dos servidores Web para os servidores de banco de dados.\nO que você deve incluir na recomendação?",
    "opcoes": [
      "grupos de segurança de rede (NSGs)",
      "Azure Service Bus",
      "um gateway de rede local",
      "um filtro de rota"
    ],
    "resposta": 0,
    "explicacao": "Um grupo de segurança de rede funciona como um firewall. Você pode associar um grupo de segurança de rede a uma rede virtual e/ou a sub-redes individuais dentro da rede virtual. Você também pode associar um grupo de segurança de rede a uma interface de rede atribuída a uma máquina virtual. Você pode usar múltiplos grupos de segurança de rede dentro de uma rede virtual para restringir o tráfego entre recursos, como máquinas virtuais e sub-redes. Você pode filtrar o tráfego de rede de e para recursos do Azure em uma rede virtual do Azure com um grupo de segurança de rede — que contém regras de segurança que permitem ou negam tráfego de entrada e saída para vários tipos de recursos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/security-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 27 (banco original Q220)
  {
    "tipo": "unica",
    "texto": "Qual serviço fornece filtragem de tráfego de rede em várias assinaturas e redes virtuais do Azure?",
    "opcoes": [
      "Firewall do Azure",
      "um grupo de segurança de aplicativo",
      "proteção DDoS do Azure",
      "um grupo de segurança de rede (NSG)"
    ],
    "resposta": 0,
    "explicacao": "Você pode restringir o tráfego para várias redes virtuais em várias assinaturas com um único Firewall do Azure. O Firewall do Azure é um serviço de segurança de rede gerenciado e baseado em nuvem que protege seus recursos de Rede Virtual do Azure. É um firewall com estado completo, como serviço, com alta disponibilidade integrada e escalabilidade de nuvem irrestrita. Você pode criar, aplicar e registrar centralmente políticas de conectividade de aplicativos e de rede em assinaturas e redes virtuais. O Firewall do Azure usa um endereço IP público estático para os recursos da sua rede virtual, permitindo que firewalls externos identifiquem o tráfego originado na sua rede virtual.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 28 (banco original Q250)
  {
    "tipo": "multipla",
    "texto": "Seu ambiente do Azure contém várias máquinas virtuais do Azure.\nVocê precisa garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP.\nQuais são as duas soluções possíveis? Cada resposta correta apresenta uma solução completa.",
    "opcoes": [
      "Modificar um perfil do Azure Traffic Manager",
      "Modificar um grupo de segurança de rede (NSG)",
      "Modificar um plano de proteção DDoS",
      "Modificar um firewall do Azure"
    ],
    "respostas": [1, 3],
    "explicacao": "Um grupo de segurança de rede funciona como um firewall e pode ser associado a uma rede virtual, sub-redes ou interfaces de rede, permitindo filtrar o tráfego de e para recursos do Azure — nesse cenário, seria necessário adicionar uma regra permitindo a conexão à máquina virtual na porta 80 (HTTP). O Firewall do Azure também pode ser modificado para permitir essa conexão, sendo um serviço de segurança de rede gerenciado e baseado em nuvem com estado completo. Já o Traffic Manager (balanceamento de carga baseado em DNS) e o plano de proteção DDoS (que protege contra ataques de negação de serviço) não fornecem conectividade direta a uma VM.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/security-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 29 (banco original Q252)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Você pode associar um grupo de segurança de rede (NSG) a uma sub-rede de rede virtual.",
      "Você pode associar um grupo de segurança de rede (NSG) a uma rede virtual.",
      "Você pode associar um grupo de segurança de rede (NSG) a uma interface de rede."
    ],
    "respostas": [true, false, true],
    "explicacao": "Você pode associar zero, ou um, grupo de segurança de rede a cada sub-rede de rede virtual e a cada interface de rede em uma VM que tenha interfaces de rede — mas não é possível associar um NSG diretamente a uma rede virtual inteira (apenas a sub-redes específicas dentro dela, ou a interfaces de rede individuais).",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 30 (banco original Q253)
  {
    "tipo": "unica",
    "texto": "Você tem um ambiente do Azure que contém 10 redes virtuais e 100 máquinas virtuais.\nVocê precisa limitar a quantidade de tráfego de entrada para todas as redes virtuais do Azure.\nO que você deve criar?",
    "opcoes": [
      "um grupo de segurança de aplicativo (ASG)",
      "10 gateways de rede virtual",
      "10 circuitos do Azure ExpressRoute",
      "um firewall do Azure"
    ],
    "resposta": 3,
    "explicacao": "Você pode restringir o tráfego para várias redes virtuais com um único Firewall do Azure. O Firewall do Azure é um serviço de segurança de rede gerenciado e baseado em nuvem que protege seus recursos de Rede Virtual do Azure. É um firewall com estado completo, como serviço, com alta disponibilidade integrada e escalabilidade de nuvem irrestrita. Você pode criar, aplicar e registrar centralmente políticas de conectividade de aplicativos e de rede em assinaturas e redes virtuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 31 (banco original Q256)
  {
    "tipo": "unica",
    "texto": "Você planeja implantar várias máquinas virtuais do Azure.\nVocê precisa controlar as portas que dispositivos na internet podem usar para acessar as máquinas virtuais.\nO que você deve usar?",
    "opcoes": [
      "um grupo de segurança de rede (NSG)",
      "uma função do Microsoft Entra ID",
      "um grupo do Microsoft Entra ID",
      "um cofre de chaves do Azure"
    ],
    "resposta": 0,
    "explicacao": "Um grupo de segurança de rede funciona como um firewall. Você pode associá-lo a uma rede virtual e/ou a sub-redes individuais dentro dela, ou a uma interface de rede atribuída a uma máquina virtual, permitindo controlar as portas e o tráfego que dispositivos externos podem usar para acessar as máquinas virtuais.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/security-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 32 (banco original Q257)
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
    "explicacao": "Você pode usar um grupo de segurança de rede do Azure para filtrar o tráfego de rede de e para recursos do Azure em uma rede virtual. Um grupo de segurança de rede contém regras de segurança que permitem ou negam tráfego de entrada, ou negam tráfego de saída, de vários tipos de recursos do Azure. Para cada regra, você pode especificar origem e destino, porta e protocolo.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 33 (banco original Q259)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSeu ambiente do Azure contém várias máquinas virtuais do Azure.\nVocê precisa garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP.\nSolução: Você modifica um grupo de segurança de rede (NSG).\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "Um grupo de segurança de rede funciona como um firewall. Você pode associá-lo a uma rede virtual e/ou sub-redes individuais dentro dela. Também pode associá-lo a uma interface de rede atribuída a uma máquina virtual. Você pode usar múltiplos grupos de segurança de rede dentro de uma rede virtual para restringir o tráfego entre recursos. Nesta questão, precisamos adicionar uma regra ao grupo de segurança de rede para permitir a conexão à máquina virtual na porta 80 (HTTP) — o que atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/security-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 34 (banco original Q260)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSeu ambiente do Azure contém várias máquinas virtuais do Azure.\nVocê precisa garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP.\nSolução: Você modifica um plano de proteção DDoS.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "DDoS é uma forma de ataque a um recurso de rede. Um plano de proteção DDoS é usado para proteger contra ataques DDoS; ele não fornece conectividade a uma máquina virtual. Para garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP, você precisa modificar um grupo de segurança de rede ou o Firewall do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/ddos-protection-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 35 (banco original Q262)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Cada questão contém uma solução única que pode atender aos objetivos declarados. Alguns conjuntos de questões podem ter mais de uma solução correta, enquanto outros podem não ter nenhuma solução correta.\nDepois de responder a uma questão desta seção, você NÃO poderá retornar a ela. Por isso, essas questões não aparecerão na tela de revisão.\nSeu ambiente do Azure contém várias máquinas virtuais do Azure.\nVocê precisa garantir que uma máquina virtual chamada VM1 seja acessível pela internet via HTTP.\nSolução: Você modifica um firewall do Azure.\nIsso atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O Firewall do Azure é um serviço de segurança de rede gerenciado e baseado em nuvem que protege seus recursos de Rede Virtual do Azure. É um firewall com estado completo, como serviço, com alta disponibilidade integrada e escalabilidade de nuvem irrestrita. Nesta questão, precisamos adicionar uma regra ao Firewall do Azure para permitir a conexão à máquina virtual na porta 80 (HTTP) — o que atende ao objetivo.",
    "link": "https://learn.microsoft.com/pt-br/azure/firewall/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 36 (banco original Q309)
  {
    "tipo": "unica",
    "texto": "O que é garantido em um Contrato de Nível de Serviço (SLA) do Azure para máquinas virtuais?",
    "opcoes": ["tempo de atividade", "disponibilidade de recursos", "largura de banda", "desempenho"],
    "resposta": 0,
    "explicacao": "O SLA para máquinas virtuais garante \"tempo de atividade\". A quantidade de tempo de atividade garantida depende de fatores como se as VMs estão em um conjunto de disponibilidade ou zona de disponibilidade (caso haja mais de uma VM), a distribuição das VMs (se houver mais de uma) ou o tipo de disco (caso seja uma única VM). O SLA para Máquinas Virtuais estabelece: para todas as VMs com duas ou mais instâncias implantadas em duas ou mais Zonas de Disponibilidade na mesma região, garantia de conectividade de pelo menos 99,99% do tempo; para VMs com duas ou mais instâncias no mesmo Conjunto de Disponibilidade ou Grupo de Host Dedicado, garantia de pelo menos 99,95%; para qualquer VM de instância única usando SSD Premium ou Ultra Disk em todos os discos de SO e de dados, garantia de pelo menos 99,9%.",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/summary/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 37 (banco original Q333)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Se uma máquina virtual do Azure tiver o status Parada (desalocada), você continuará pagando por <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "capacidade de computação",
      "operações de E/S",
      "rede",
      "armazenamento"
    ],
    "resposta": 3,
    "explicacao": "Quando uma máquina virtual é parada (desalocada), o Azure não cobra pelas horas de núcleo da VM. No entanto, você continua acumulando cobranças pelo armazenamento do Azure necessário para o disco do SO da VM e quaisquer discos de dados anexados.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/states-billing",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 38 (banco original Q336)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Adicionar grupos de recursos em uma assinatura do Azure gera custos adicionais.",
      "Copiar 10 GB de dados PARA o Azure a partir de uma rede local por uma VPN gera custos adicionais de transferência de dados do Azure.",
      "Copiar 10 GB de dados DO Azure para uma rede local por uma VPN gera custos adicionais de transferência de dados do Azure."
    ],
    "respostas": [false, false, true],
    "explicacao": "A criação de grupos de recursos não gera custos adicionais. A transferência de dados de entrada para o Azure (de fora para dentro) é gratuita. No entanto, a transferência de dados de saída (do Azure para fora, como uma rede local via VPN) pode gerar custos adicionais conforme a política de preços de banda.",
    "link": "https://learn.microsoft.com/pt-br/azure/azure-resource-manager/management/azure-subscription-service-limits",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 39 (banco original Q361)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Com Reservas do Azure, você paga menos por máquinas virtuais do que com o preço de pagamento conforme o uso (pay-as-you-go).",
      "Duas máquinas virtuais do Azure que usam o tamanho B2S têm os mesmos custos mensais.",
      "Quando uma máquina virtual do Azure é parada, você continua pagando os custos de armazenamento associados a ela."
    ],
    "respostas": [true, false, true],
    "explicacao": "Uma reserva é quando você se compromete a pagar por um recurso (por exemplo, uma máquina virtual) por um ou três anos. Isso dá a você um preço com desconto sobre o recurso durante o período da reserva. Existem outros fatores que influenciam o custo de uma máquina virtual, como os discos rígidos virtuais anexados a ela — você pode ter várias máquinas virtuais com o mesmo \"tamanho\" (B2S neste caso), mas com configurações de disco rígido virtual diferentes. Quando uma máquina virtual é parada (desalocada), a VM é descarregada/desmontada do servidor físico no Azure. Nesse estado, você não é cobrado pela máquina virtual em si — porém, ainda é cobrado pelos custos de armazenamento dos discos rígidos virtuais anexados a ela.",
    "link": "https://learn.microsoft.com/pt-br/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 40 (banco original Q366)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Ao criar grupos de recursos adicionais em uma assinatura do Azure, custos adicionais são gerados.",
      "Ao copiar vários gigabits de dados PARA o Azure a partir de uma rede local por uma VPN, custos adicionais de transferência de dados são gerados.",
      "Ao copiar vários GB de dados DO Azure para uma rede local por uma VPN, custos adicionais de transferência de dados são gerados."
    ],
    "respostas": [false, false, true],
    "explicacao": "A criação de grupos de recursos adicionais não gera custos adicionais. A transferência de dados de entrada para o Azure (de fora para dentro) é gratuita. A transferência de dados de saída (do Azure para uma rede local via VPN) gera custos adicionais de transferência de dados.",
    "link": "https://azure.microsoft.com/pt-br/pricing/details/bandwidth/",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 41 (banco original Q381)
  {
    "tipo": "unica",
    "texto": "Qual recurso adicional é necessário para uma máquina virtual do Azure?",
    "opcoes": ["uma rede virtual", "um endpoint de serviço", "o Firewall do Azure", "um endereço IP público"],
    "resposta": 0,
    "explicacao": "Uma rede virtual é um recurso obrigatório exigido por uma VM do Azure. Um IP público é uma opção adicional para a VM — a palavra-chave da questão é \"recurso adicional\" necessário, e entre as opções, a rede virtual é o recurso indispensável (não opcional) para o funcionamento de uma máquina virtual do Azure.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/virtual-networks-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 42 (banco original Q387)
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços do Azure às descrições apropriadas. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "ExpressRoute" },
      { "label": "Emparelhamento de rede virtual (Virtual network peering)" },
      { "label": "Gateway de VPN" }
    ],
    "grupos": [
      "Estende redes locais para a nuvem da Microsoft por meio de uma conexão privada:",
      "Combina duas ou mais redes virtuais do Azure em uma única rede virtual lógica:",
      "Fornece uma conexão criptografada de redes locais para o Azure por meio de uma rede pública:"
    ],
    "respostas": {
      "Estende redes locais para a nuvem da Microsoft por meio de uma conexão privada:": ["ExpressRoute"],
      "Combina duas ou mais redes virtuais do Azure em uma única rede virtual lógica:": ["Emparelhamento de rede virtual (Virtual network peering)"],
      "Fornece uma conexão criptografada de redes locais para o Azure por meio de uma rede pública:": ["Gateway de VPN"]
    },
    "explicacao": "O Azure ExpressRoute permite criar conexões privadas entre datacenters da Microsoft e sua infraestrutura local ou de colocation — as conexões ExpressRoute não passam pela internet pública, oferecendo maior confiabilidade, velocidades mais altas, latências mais baixas e maior segurança. O emparelhamento de redes virtuais (VNet peering) permite conectar perfeitamente várias redes virtuais no Azure — uma vez emparelhadas, as VNets aparecem como uma única rede lógica para fins de conectividade, com tráfego entre VMs usando a infraestrutura de backbone privada da Microsoft. Um Gateway de VPN do Azure é um tipo específico de gateway de rede virtual usado para enviar tráfego criptografado entre um local local e uma VNet do Azure — diferente do ExpressRoute, essa conexão trafega pela internet pública por meio de um túnel criptografado (tipicamente usando os protocolos IPsec/IKE), sendo uma solução econômica para conectividade híbrida Site a Site.",
    "link": "https://learn.microsoft.com/pt-br/azure/expressroute/expressroute-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 43 (banco original Q416)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Em um conjunto de dimensionamento de máquinas virtuais do Azure, as máquinas virtuais são configuradas de forma idêntica.",
      "O número de máquinas virtuais do Azure em um conjunto de dimensionamento pode aumentar automaticamente.",
      "O número de máquinas virtuais do Azure em um conjunto de dimensionamento pode diminuir automaticamente."
    ],
    "respostas": [true, true, true],
    "explicacao": "Um Conjunto de Dimensionamento de Máquinas Virtuais do Azure é projetado para implantar e gerenciar uma frota de máquinas virtuais balanceadas por carga. Para permitir dimensionamento contínuo, todas as instâncias de VM no conjunto são criadas a partir exatamente da mesma configuração base — compartilhando a mesma imagem de sistema operacional, tamanho de SKU, discos de armazenamento, configurações de extensões e de rede definidas no modelo de configuração central do conjunto. Essa é a funcionalidade central do dimensionamento automático (scale-out): você pode definir regras de dimensionamento automático com base em métricas de desempenho (como utilização média de CPU acima de 75%, pressão de memória ou profundidade de fila de rede) ou com base em uma programação específica de calendário. Quando esses limites são atingidos, o conjunto provisiona e configura automaticamente novas instâncias de VM idênticas para lidar com o aumento de carga de trabalho — e também pode reduzir automaticamente o número de instâncias quando a demanda diminui.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 44 (banco original Q427)
  {
    "tipo": "dragdrop",
    "texto": "Associe os componentes de segurança às camadas apropriadas do modelo de defesa em profundidade. Cada componente pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Autenticação multifator (MFA)" },
      { "label": "Atualizações e patches de software" },
      { "label": "Câmera de vigilância" }
    ],
    "grupos": ["Computação", "Identidade e acesso", "Segurança física"],
    "respostas": {
      "Computação": ["Atualizações e patches de software"],
      "Identidade e acesso": ["Autenticação multifator (MFA)"],
      "Segurança física": ["Câmera de vigilância"]
    },
    "explicacao": "Atualizações e patches de software correspondem à camada de Computação — o foco dessa camada é proteger os recursos de processamento reais, como máquinas virtuais, instâncias de contêiner ou funções sem servidor que executam seus aplicativos. Sistemas operacionais e runtimes desatualizados contêm vulnerabilidades conhecidas que os invasores podem explorar; aplicar atualizações e patches de segurança fortalece diretamente os ambientes de computação, minimizando a superfície de ataque das máquinas virtuais ou ambientes de host individuais. A Autenticação Multifator (MFA) corresponde à camada de Identidade e Acesso — essa camada controla o acesso à infraestrutura, aos aplicativos e aos dados, garantindo que apenas usuários autenticados e autorizados tenham acesso. Câmera de vigilância corresponde à camada de Segurança Física — a camada mais externa do modelo de defesa em profundidade, que protege o acesso físico aos datacenters.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/secure-network-connectivity-azure/2-what-is-defense-in-depth",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 45 (banco original Q434)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O ExpressRoute usa o Protocolo de Gateway de Borda (BGP).",
      "O ExpressRoute usa a internet para conectar uma rede local ao Azure.",
      "Você pode configurar vários circuitos ExpressRoute para conectar um datacenter local ao Azure."
    ],
    "respostas": [true, false, true],
    "explicacao": "O ExpressRoute usa roteamento dinâmico entre sua rede e a Microsoft, via BGP (Border Gateway Protocol). As conexões ExpressRoute NÃO passam pela internet pública — essa é justamente uma das vantagens do ExpressRoute em relação a uma VPN convencional. É possível, sim, vincular uma única rede virtual a até quatro circuitos ExpressRoute no mesmo local, ou até 16 circuitos ExpressRoute em locais de emparelhamento diferentes — sendo, inclusive, fortemente recomendado configurar pelo menos dois circuitos ExpressRoute para evitar pontos únicos de falha.",
    "link": "https://learn.microsoft.com/pt-br/azure/expressroute/expressroute-introduction",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 46 (banco original Q457)
  {
    "tipo": "dragdrop",
    "texto": "Associe os serviços de computação do Azure às descrições apropriadas. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure App Service" },
      { "label": "Instâncias de Contêiner do Azure" },
      { "label": "Azure Functions" },
      { "label": "Conjuntos de Dimensionamento de Máquinas Virtuais do Azure" }
    ],
    "grupos": [
      "Fornece emulação por software de um computador físico.",
      "Fornece virtualização do sistema operacional."
    ],
    "respostas": {
      "Fornece emulação por software de um computador físico.": ["Instâncias de Contêiner do Azure"],
      "Fornece virtualização do sistema operacional.": ["Conjuntos de Dimensionamento de Máquinas Virtuais do Azure"]
    },
    "explicacao": "Instâncias de Contêiner do Azure fornecem emulação por software de um computador físico, permitindo executar contêineres sem gerenciar máquinas virtuais. Conjuntos de Dimensionamento de Máquinas Virtuais do Azure fornecem virtualização do sistema operacional, permitindo criar e gerenciar um grupo de VMs balanceadas por carga com o mesmo sistema operacional.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machine-scale-sets/overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 47 (banco original Q461)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Grupos de segurança de rede (NSGs) podem conter várias regras de segurança de entrada e de saída.",
      "Uma VM que desempenha uma função específica, como executar um firewall, também é chamada de dispositivo de rede virtual (NVA).",
      "Uma rota definida pelo usuário (UDR) só pode controlar o tráfego de rede entre sub-redes de uma única rede virtual."
    ],
    "respostas": [true, true, false],
    "explicacao": "Um NSG atua como um firewall básico de filtragem de pacotes para as sub-redes ou interfaces de rede individuais da sua rede virtual. Dentro de um único NSG, você pode criar múltiplas regras de segurança (até os limites padrão, tipicamente 1.000 regras por NSG), especificando prioridade, origem/destino, porta, protocolo e uma ação explícita (Permitir ou Negar) tanto para tráfego de entrada quanto de saída. Um Dispositivo de Rede Virtual (NVA) é uma imagem de máquina virtual especializada, implantada diretamente em uma rede virtual, pré-configurada para executar funções avançadas de rede — mais comumente firewalls (como Check Point, Palo Alto ou Fortinet), otimizadores de WAN, roteadores ou balanceadores de carga especializados. Embora rotas definidas pelo usuário (UDRs) sejam frequentemente usadas para substituir o roteamento do sistema entre sub-redes dentro da mesma VNet (por exemplo, forçando todo o tráfego por um firewall NVA), elas não se limitam a uma única rede virtual — UDRs podem controlar o roteamento de saída em uma ampla variedade de fronteiras, como direcionar tráfego de saída para um datacenter local via VPN Gateway/ExpressRoute, rotear tráfego por um gateway de internet específico, ou direcionar tráfego entre redes interconectadas via VNet Peering.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-network/network-security-groups-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  },
  // Questao 48 (banco original Q463)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure DNS oferece suporte apenas a nomes de domínio DNS públicos.",
      "Máquinas virtuais do Azure podem registrar nomes no Azure DNS automaticamente.",
      "O Azure DNS pode hospedar um domínio DNS personalizado."
    ],
    "respostas": [false, true, true],
    "explicacao": "O Azure DNS oferece suporte completo tanto à resolução de nomes pública quanto privada. Embora possa hospedar domínios públicos voltados para a internet, ele também fornece Zonas Privadas do Azure DNS, que permitem configurar e resolver nomes de domínio internos e personalizados dentro de uma rede virtual (VNet) ou entre VNets interconectadas, sem expor esses registros ou tráfego à internet pública. Ao vincular uma Zona Privada do Azure DNS a uma rede virtual, é possível habilitar um recurso integrado chamado auto-registro: uma vez ativado, quando uma nova máquina virtual é criada e associada a essa VNet, o Azure DNS rastreia automaticamente seu ciclo de vida e registra um registro 'A' (endereço) correspondente ao nome de host da VM e seu endereço IP privado, também limpando o registro automaticamente caso a VM seja excluída. O Azure DNS permite, sim, hospedar seu próprio domínio personalizado registrado (como contoso.com ou minhaempresa.com.br) — após adquirir um domínio junto a um registrador, basta criar um objeto de zona DNS no Azure e atualizar a configuração do registrador para apontar para os servidores de nomes do Azure DNS designados.",
    "link": "https://learn.microsoft.com/pt-br/azure/dns/dns-overview",
    "dominio": "Descrever a arquitetura e os serviços do Azure",
    "simulado": "az-2026-bloco05"
  }

];