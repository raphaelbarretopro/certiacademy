// ==========================================
// Arquivo: questoes_bloco07.js
// Descrição: Simulado AZ-900 (fonte: CertyIQ, versão 2026) — tradução PT-BR
// BLOCO 7 de 10 — Descrever a identidade, o acesso e a segurança do Azure
// (Microsoft Entra ID e Entra Domain Services; SSO, MFA, acesso sem senha;
//  identidades externas; Acesso Condicional; RBAC; Confiança Zero;
//  defesa em profundidade; Microsoft Defender para Nuvem)
// 48 questões — distribuição balanceada conforme guia oficial de estudos AZ-900
//
// CORRESPONDÊNCIA COM O BANCO ORIGINAL (numeração do PDF em inglês, em ordem):
// 8, 26, 27, 29, 30, 33, 48, 55, 121, 124, 130, 143, 221, 224, 225, 227, 228, 234, 237, 238,
// 239, 241, 243, 244, 249, 251, 254, 255, 261, 264, 268, 270, 271, 273, 274, 278, 279, 281,
// 288, 297, 305, 308, 335, 379, 384, 408, 418, 444
//
// NOTAS DE TERMINOLOGIA:
// "Azure Active Directory (Azure AD)" foi atualizado para "Microsoft Entra ID" em toda a
// tradução. "Azure Security Center" e "Azure Sentinel" foram atualizados para os nomes
// atuais "Microsoft Defender for Cloud" e "Microsoft Sentinel", respectivamente, conforme
// confirmado nas próprias explicações do banco de questões original.
// ==========================================

export const questoes = [

  // Questao 01 (banco original Q8) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nA infraestrutura da sua empresa inclui diversas unidades de negócio que necessitam de uma grande quantidade de recursos variados do Azure para a operação diária.\nOs recursos exigidos por cada unidade de negócio são idênticos.\nVocê precisa aprovar uma estratégia para criar recursos do Azure automaticamente.\nSolução: Você recomenda incluir vários diretórios (locatários) do Microsoft Entra ID na estratégia.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "Não há motivo para criar vários locatários do Microsoft Entra ID quando é possível criar um único locatário e organizar as divisões dentro dele (por exemplo, usando grupos de gerenciamento e RBAC).",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 02 (banco original Q26) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSeus superiores informaram sobre a intenção da empresa de automatizar a implantação de servidores no Azure. Há, porém, uma preocupação de que credenciais administrativas possam ser descobertas durante esse processo.\nVocê precisa garantir que, durante a implantação, as credenciais administrativas sejam criptografadas usando uma solução adequada do Azure.\nSolução: Você recomenda o uso do Azure Information Protection.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O Azure Information Protection (AIP) é uma solução baseada em nuvem para descobrir, classificar e proteger documentos e e-mails — não serve para criptografar credenciais administrativas durante implantações. A solução correta é o Azure Key Vault.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 03 (banco original Q27) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSeus superiores informaram sobre a intenção da empresa de automatizar a implantação de servidores no Azure. Há, porém, uma preocupação de que credenciais administrativas possam ser descobertas durante esse processo.\nVocê precisa garantir que, durante a implantação, as credenciais administrativas sejam criptografadas usando uma solução adequada do Azure.\nSolução: Você recomenda o uso da Autenticação Multifator do Azure (MFA).\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O MFA adiciona uma camada extra de autenticação para o acesso do usuário — não criptografa credenciais. A solução correta para armazenar e proteger segredos/credenciais é o Azure Key Vault.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 04 (banco original Q29) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSua empresa tem um ambiente do Microsoft Entra ID. Os usuários ocasionalmente se conectam ao Microsoft Entra ID pela Internet.\nVocê foi encarregado de garantir que os usuários que se conectam ao Microsoft Entra ID pela internet a partir de um endereço IP não identificado sejam automaticamente incentivados a alterar suas senhas.\nSolução: Você configura o uso do Microsoft Entra ID Protection.\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 0,
    "explicacao": "O Entra ID Protection identifica riscos de diversos tipos, incluindo uso de endereço IP anônimo, deslocamento atípico, credenciais vazadas e pulverização de senha. Com base nessas detecções, ele pode aplicar políticas automáticas, como exigir a troca de senha.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-protection/howto-identity-protection-configure-risk-policies",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 05 (banco original Q30) — já traduzida no lote01
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nSua empresa tem um ambiente do Microsoft Entra ID. Os usuários ocasionalmente se conectam ao Microsoft Entra ID pela Internet.\nVocê foi encarregado de garantir que os usuários que se conectam ao Microsoft Entra ID pela internet a partir de um endereço IP não identificado sejam automaticamente incentivados a alterar suas senhas.\nSolução: Você configura o uso do Microsoft Entra Privileged Identity Management (PIM).\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O PIM fornece ativação de funções privilegiadas baseada em tempo e aprovação — não detecta risco de login por IP não identificado nem força troca automática de senha. Essa é a função do Microsoft Entra ID Protection.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-governance/privileged-identity-management/pim-configure",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 06 (banco original Q33)
  {
    "tipo": "unica",
    "texto": "Nota: Esta questão faz parte de um grupo de questões que descreve o mesmo cenário. Porém, cada questão possui um resultado distinto. Avalie se a solução atende aos requisitos.\nA floresta do Active Directory da sua empresa contém milhares de contas de usuário.\nVocê foi informado de que todos os recursos de rede serão migrados para o Azure. Depois disso, o datacenter local será desativado.\nVocê precisa empregar uma estratégia que reduza o impacto sobre os usuários após a conclusão da migração planejada.\nSolução: Você planeja exigir a Autenticação Multifator do Azure (MFA).\nA solução atende ao objetivo?",
    "opcoes": ["Sim", "Não"],
    "resposta": 1,
    "explicacao": "O MFA não ajudará a reduzir os problemas relacionados aos usuários. Ele reforça a segurança, mas o que realmente é necessário aqui é sincronizar as contas com o Microsoft Entra ID (via Microsoft Entra Connect). \"Você precisa empregar uma estratégia que reduza o impacto sobre os usuários\" — a autenticação multifator não reduz nem tem qualquer efeito sobre essa questão específica. O MFA é usado para reforçar a segurança na identificação de um usuário, mas não ajuda em nada a organizar as contas dos usuários durante a migração.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 07 (banco original Q48)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para alcançar um modelo de nuvem híbrida, uma empresa deve sempre migrar de um modelo de nuvem privada.",
      "Uma empresa pode estender a capacidade de sua rede interna usando a nuvem pública.",
      "Em um modelo de nuvem pública, somente usuários convidados da sua empresa podem acessar os recursos na nuvem."
    ],
    "respostas": [false, true, false],
    "explicacao": "Não é verdade que uma empresa deve sempre migrar de um modelo de nuvem privada para alcançar a nuvem híbrida — é possível começar com uma nuvem pública e depois combiná-la com uma infraestrutura local. Uma empresa pode, sim, estender a capacidade de sua rede interna usando a nuvem pública — isso é muito comum, já que, ao invés de investir em nova infraestrutura local, é possível configurar um ambiente de nuvem e conectar a rede local a ele via VPN. Não é verdade que apenas usuários convidados podem acessar recursos na nuvem — qualquer pessoa com uma conta no Microsoft Entra ID pode ter acesso aos recursos de nuvem.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 08 (banco original Q55)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para implementar um modelo de nuvem híbrida, uma empresa deve ter uma rede interna.",
      "Uma empresa pode estender os recursos de computação de sua rede interna usando uma nuvem híbrida.",
      "Em um modelo de nuvem pública, somente usuários convidados da sua empresa podem acessar os recursos na nuvem."
    ],
    "respostas": [true, true, false],
    "explicacao": "Para implementar um modelo de nuvem híbrida, uma empresa precisa, sim, ter uma rede interna (local), que será combinada com a nuvem pública. Uma empresa pode, sim, estender os recursos de computação de sua rede interna usando a nuvem híbrida — isso é muito comum: em vez de investir em nova infraestrutura local, você configura um ambiente de nuvem e conecta sua rede local a ele via VPN. Não é verdade que apenas usuários convidados podem acessar recursos em um modelo de nuvem pública.",
    "link": "https://azure.microsoft.com/pt-br/overview/what-is-hybrid-cloud-computing/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 09 (banco original Q121)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A América do Norte é representada por uma única região do Azure.",
      "Toda região do Azure tem vários datacenters.",
      "As transferências de dados entre serviços do Azure localizados em regiões diferentes são sempre gratuitas."
    ],
    "respostas": [false, false, false],
    "explicacao": "A América do Norte tem várias regiões do Azure, incluindo Oeste dos EUA, Centro dos EUA, Centro-Sul dos EUA, Leste dos EUA e Leste do Canadá. Uma região é uma área geográfica no planeta que contém pelo menos um, mas potencialmente vários datacenters próximos e conectados em rede com baixa latência — porém, nem toda região necessariamente tem múltiplos datacenters. A transferência de dados de saída é cobrada à taxa normal, e a transferência de dados de entrada é gratuita — ou seja, as transferências não são sempre gratuitas.",
    "link": "https://www.pragimtech.com/blog/azure/azure-regions-and-paired-regions/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 10 (banco original Q124)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço do Azure à descrição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Azure Sphere" },
      { "label": "IoT Central" },
      { "label": "IoT Hub" }
    ],
    "grupos": [
      "Um serviço gerenciado que fornece comunicação bidirecional entre dispositivos IoT e o Azure",
      "Uma solução totalmente gerenciada de software como serviço (SaaS) para conectar, monitorar e gerenciar dispositivos IoT em escala",
      "Uma solução de software e hardware que fornece recursos de comunicação e segurança para dispositivos IoT"
    ],
    "respostas": {
      "Um serviço gerenciado que fornece comunicação bidirecional entre dispositivos IoT e o Azure": ["IoT Hub"],
      "Uma solução totalmente gerenciada de software como serviço (SaaS) para conectar, monitorar e gerenciar dispositivos IoT em escala": ["IoT Central"],
      "Uma solução de software e hardware que fornece recursos de comunicação e segurança para dispositivos IoT": ["Azure Sphere"]
    },
    "explicacao": "O Azure IoT Hub é uma oferta central de Plataforma como Serviço (PaaS) que atua como um hub central de mensagens para comunicação segura e bidirecional entre milhões de dispositivos IoT e um backend na nuvem. O Azure IoT Central simplifica o processo de implantação, oferecendo um painel SaaS pronto para uso, baseado na Web, projetado para organizações que desejam conectar e gerenciar dispositivos em escala sem precisar de arquitetura de nuvem ou desenvolvimento de backend aprofundados. O Azure Sphere é uma solução de software e hardware altamente segura, que inclui uma unidade de microcontrolador (MCU) e um sistema operacional Linux personalizado, projetada para proteger dispositivos IoT conectados à internet contra ameaças digitais e físicas.",
    "link": "https://learn.microsoft.com/pt-br/azure/iot-hub/about-iot-hub",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 11 (banco original Q130)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para usar as credenciais do Microsoft Entra ID para entrar em um computador que executa o Windows 10, o computador deve estar associado (joined) ao Microsoft Entra ID.",
      "Usuários no Microsoft Entra ID são organizados usando grupos de recursos.",
      "Grupos do Microsoft Entra ID oferecem suporte a regras de associação dinâmica."
    ],
    "respostas": [true, false, true],
    "explicacao": "Para que um sistema operacional cliente local (como Windows 10 ou 11) confie, avalie e aceite nativamente credenciais de identidade baseadas em nuvem na tela de login, o próprio dispositivo precisa estabelecer uma relação formal de confiança com o diretório de identidade — o que é feito por meio da associação ao Microsoft Entra ID (Microsoft Entra Join, ou associação híbrida), que registra o dispositivo no locatário e permite que os usuários entrem no desktop usando suas credenciais organizacionais na nuvem. Esta afirmação mistura dois limites arquitetônicos completamente separados: grupos de recursos são contêineres lógicos de implantação estritamente usados para organizar, gerenciar, proteger e gerenciar o ciclo de vida de componentes de infraestrutura física (como máquinas virtuais, redes virtuais e bancos de dados) dentro de uma assinatura do Azure. Já os objetos de identidade do Microsoft Entra ID são organizados hierarquicamente usando Unidades Administrativas (UAs), grupos de segurança ou configurações organizacionais aninhadas — grupos de recursos não têm papel na estruturação de usuários do diretório. Grupos do Microsoft Entra ID oferecem, sim, suporte a regras de associação dinâmica, baseadas em atributos do usuário ou do dispositivo.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/devices/device-join-plan",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 12 (banco original Q143)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é uma solução de IoT altamente segura que inclui uma unidade de microcontrolador (MCU) e um sistema operacional Linux personalizado.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Arc",
      "Azure IoT Central",
      "Azure IoT Hub",
      "Azure Sphere"
    ],
    "resposta": 3,
    "explicacao": "O Azure Sphere é uma solução de IoT altamente segura que inclui uma unidade de microcontrolador (MCU) e um sistema operacional Linux personalizado.",
    "link": "https://learn.microsoft.com/pt-br/azure-sphere/product-overview/what-is-azure-sphere",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 13 (banco original Q221)
  {
    "tipo": "unica",
    "texto": "Qual serviço do Azure você deve usar para armazenar certificados?",
    "opcoes": ["Microsoft Defender for Cloud", "uma conta de Armazenamento do Azure", "Azure Key Vault", "Azure Information Protection"],
    "resposta": 2,
    "explicacao": "Gerenciamento de certificados: o Azure Key Vault também é um serviço que permite provisionar, gerenciar e implantar facilmente certificados SSL/TLS (Secure Sockets Layer/Transport Layer Security) públicos e privados para uso com o Azure e seus recursos internos conectados. O Azure Key Vault é um armazenamento seguro para diversos tipos de informações sensíveis, incluindo senhas e certificados, podendo ser usado para armazenar e controlar rigorosamente o acesso a tokens, senhas, certificados, chaves de API e outros segredos. Segredos e chaves são protegidos pelo Azure usando algoritmos padrão do setor, comprimentos de chave e módulos de segurança de hardware (HSMs) validados pelo FIPS 140-2 Nível 2.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 14 (banco original Q224)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço à descrição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Microsoft Entra ID" },
      { "label": "Azure Key Vault" },
      { "label": "Azure Lighthouse" },
      { "label": "Microsoft Defender for Cloud" },
      { "label": "Microsoft Sentinel" }
    ],
    "grupos": [
      "Analisar arquivos de log de segurança de máquinas virtuais do Azure",
      "Exibir a pontuação de segurança (secure score) de uma assinatura do Azure",
      "Armazenar senhas para uso por aplicativos do Azure Functions."
    ],
    "respostas": {
      "Analisar arquivos de log de segurança de máquinas virtuais do Azure": ["Microsoft Sentinel"],
      "Exibir a pontuação de segurança (secure score) de uma assinatura do Azure": ["Microsoft Defender for Cloud"],
      "Armazenar senhas para uso por aplicativos do Azure Functions.": ["Azure Key Vault"]
    },
    "explicacao": "O Microsoft Sentinel (anteriormente Azure Sentinel) é uma solução escalável, nativa em nuvem, de gerenciamento de eventos e informações de segurança (SIEM), usada para analisar logs de segurança. O Microsoft Defender for Cloud (anteriormente Azure Security Center) exibe a pontuação de segurança de uma assinatura no portal do Azure. O Azure Key Vault armazena senhas com segurança para uso por aplicativos, como o Azure Functions. O Microsoft Entra ID (anteriormente Azure Active Directory) é um serviço de gerenciamento de identidade e acesso que ajuda seus funcionários a entrar e acessar recursos. O Azure Lighthouse é usado para gerenciamento entre locatários (cross-tenant) e multilocatário.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 15 (banco original Q225)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Firewall do Azure criptografará todo o tráfego de rede enviado do Azure para a internet.",
      "Um grupo de segurança de rede (NSG) criptografará todo o tráfego de rede enviado do Azure para a internet.",
      "Máquinas virtuais do Azure que executam o Windows Server 2016 podem criptografar o tráfego de rede enviado para a internet."
    ],
    "respostas": [false, false, false],
    "explicacao": "O Firewall do Azure não criptografa o tráfego de rede — ele é usado para bloquear ou permitir tráfego com base em endereço IP de origem/destino, portas de origem/destino e protocolo. Um grupo de segurança de rede também não criptografa o tráfego de rede — funciona de maneira similar a um firewall, também bloqueando ou permitindo tráfego com base em endereço IP, portas e protocolo. A questão é bastante vaga, pois dependeria da configuração do host na internet: o Windows Server vem com um cliente VPN e também oferece suporte a outros métodos de criptografia, como IPSec ou SSL/TLS, então poderia criptografar o tráfego se o host de destino na internet estivesse configurado para exigir ou aceitar a criptografia. No entanto, a VM não conseguiria criptografar o tráfego para um host na internet que não esteja configurado para exigir essa criptografia.",
    "link": "https://learn.microsoft.com/pt-br/azure/security/fundamentals/data-encryption-best-practices",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 16 (banco original Q227)
  {
    "tipo": "dragdrop",
    "texto": "Você precisa completar a estratégia de defesa em profundidade usada em um datacenter. O que você deve fazer? Para responder, arraste as camadas apropriadas para as posições corretas no modelo. Cada camada pode ser usada uma vez, mais de uma vez ou não ser usada.",
    "itens": [
      { "label": "Perímetro" },
      { "label": "Aplicativo" },
      { "label": "Segurança Física" }
    ],
    "grupos": [
      "Camada (acima de Identidade e Acesso)",
      "Camada (entre Identidade e Acesso e Rede)",
      "Camada (entre Computação e Dados)"
    ],
    "respostas": {
      "Camada (acima de Identidade e Acesso)": ["Segurança Física"],
      "Camada (entre Identidade e Acesso e Rede)": ["Perímetro"],
      "Camada (entre Computação e Dados)": ["Aplicativo"]
    },
    "explicacao": "A estrutura completa do modelo de defesa em profundidade, do exterior para o interior, é: Segurança Física (camada mais externa) → Identidade e Acesso → Perímetro → Rede → Computação → Aplicativo → Dados (camada mais interna, o ativo mais valioso a proteger).",
    "link": "https://learn.microsoft.com/pt-br/training/modules/secure-network-connectivity-azure/2-what-is-defense-in-depth",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 17 (banco original Q228)
  {
    "tipo": "unica",
    "texto": "Você tem uma máquina virtual do Azure chamada VM1.\nVocê planeja criptografar a VM1 usando a Criptografia de Disco do Azure (Azure Disk Encryption).\nQual recurso do Azure você deve criar primeiro?",
    "opcoes": ["uma conta de Armazenamento do Azure", "um Azure Key Vault", "uma política do Azure Information Protection", "uma chave de criptografia"],
    "resposta": 1,
    "explicacao": "A Criptografia de Disco do Azure exige um Azure Key Vault para controlar e gerenciar as chaves e segredos de criptografia de disco.",
    "link": "https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/disk-encryption-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 18 (banco original Q234)
  {
    "tipo": "dragdrop",
    "texto": "Associe o serviço à descrição correta. Cada serviço pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Microsoft Entra ID" },
      { "label": "Azure Key Vault" },
      { "label": "Azure Lighthouse" },
      { "label": "Microsoft Defender for Cloud" },
      { "label": "Microsoft Sentinel" }
    ],
    "grupos": [
      "Fornecer funcionalidade de gerenciamento de eventos e informações de segurança (SIEM)",
      "Exibir a pontuação de segurança (secure score) de uma assinatura do Azure",
      "Armazenar senhas para uso por aplicativos do Azure Functions"
    ],
    "respostas": {
      "Fornecer funcionalidade de gerenciamento de eventos e informações de segurança (SIEM)": ["Microsoft Sentinel"],
      "Exibir a pontuação de segurança (secure score) de uma assinatura do Azure": ["Microsoft Defender for Cloud"],
      "Armazenar senhas para uso por aplicativos do Azure Functions": ["Azure Key Vault"]
    },
    "explicacao": "O Microsoft Sentinel é uma solução escalável, nativa em nuvem, de gerenciamento de eventos e informações de segurança (SIEM) e de resposta automatizada e orquestrada de segurança (SOAR). O Microsoft Defender for Cloud exibe sua pontuação de segurança geral, assim como sua pontuação por assinatura, no portal do Azure. O Azure Key Vault armazena senhas para uso por aplicativos, como funções do Azure Functions.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/secure-score-security-controls",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 19 (banco original Q237)
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure.\nVocê precisa revisar sua pontuação de segurança (secure score).\nO que você deve usar?",
    "opcoes": ["Azure Monitor", "Azure Advisor", "Ajuda + suporte", "Microsoft Defender for Cloud"],
    "resposta": 3,
    "explicacao": "O recurso central no Microsoft Defender for Cloud que permite alcançar esses objetivos é a pontuação de segurança. O Microsoft Defender for Cloud tem dois objetivos principais: ajudar você a entender sua situação de segurança atual, e ajudar você a melhorar sua segurança de forma eficiente e eficaz. O recurso central que permite alcançar esses objetivos é a pontuação de segurança (secure score). O Defender for Cloud avalia continuamente seus recursos entre nuvens em busca de problemas de segurança, agregando todas as descobertas em uma única pontuação, para que você possa saber, rapidamente, sua situação de segurança atual: quanto maior a pontuação, menor o nível de risco identificado.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/secure-score-security-controls",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 20 (banco original Q238)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode habilitar o acesso just-in-time (JIT) a VMs usando <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Bastion",
      "o Firewall do Azure",
      "o Azure Front Door",
      "o Microsoft Defender for Cloud"
    ],
    "resposta": 3,
    "explicacao": "Bloqueie o tráfego de entrada para suas Máquinas Virtuais do Azure com o recurso de acesso just-in-time (JIT) do Microsoft Defender for Cloud. Isso reduz a exposição a ataques, mantendo o acesso fácil quando você precisar se conectar a uma VM.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/just-in-time-access-usage",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 21 (banco original Q239)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode visualizar o relatório de conformidade regulatória da sua empresa a partir do <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Advisor",
      "Azure Analysis Services",
      "Azure Monitor",
      "Microsoft Defender for Cloud"
    ],
    "resposta": 3,
    "explicacao": "O Microsoft Defender for Cloud ajuda a simplificar o processo de atendimento aos requisitos de conformidade regulatória, usando o painel de conformidade regulatória. Você pode baixar relatórios em PDF/CSV, bem como relatórios de certificação do status de sua conformidade.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/regulatory-compliance-dashboard",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 22 (banco original Q241)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> permite que os usuários se autentiquem em vários aplicativos usando logon único (SSO).",
    "opcoes": [
      "Escolha uma opção",
      "Grupos de segurança de aplicativo no Azure",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Microsoft Defender for Cloud"
    ],
    "resposta": 1,
    "explicacao": "Você pode habilitar o logon único (SSO) para um aplicativo empresarial por meio do Microsoft Entra ID. Grupos de segurança de aplicativo permitem configurar segurança de rede como uma extensão natural da estrutura de um aplicativo, permitindo agrupar máquinas virtuais e definir políticas de segurança de rede com base nesses grupos.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/enterprise-apps/add-application-portal-setup-sso",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 23 (banco original Q243)
  {
    "tipo": "dragdrop",
    "texto": "Associe o termo à descrição correta. Cada termo pode ser usado uma vez, mais de uma vez ou não ser usado.",
    "itens": [
      { "label": "Autorização" },
      { "label": "Autenticação multifator (MFA)" },
      { "label": "Logon único (SSO)" }
    ],
    "grupos": [
      "A capacidade de usar as mesmas credenciais para acessar múltiplos recursos e aplicativos de diferentes provedores.",
      "O processo de identificar o nível de acesso de um usuário ou serviço.",
      "Exige vários elementos para identificar um usuário ou um serviço."
    ],
    "respostas": {
      "A capacidade de usar as mesmas credenciais para acessar múltiplos recursos e aplicativos de diferentes provedores.": ["Logon único (SSO)"],
      "O processo de identificar o nível de acesso de um usuário ou serviço.": ["Autorização"],
      "Exige vários elementos para identificar um usuário ou um serviço.": ["Autenticação multifator (MFA)"]
    },
    "explicacao": "Logon único (SSO): a capacidade de usar as mesmas credenciais para acessar múltiplos recursos e aplicativos de diferentes provedores. Autorização: o processo de identificar o nível de acesso de um usuário ou serviço. Autenticação multifator (MFA): exige vários elementos para identificar um usuário ou serviço. Nota: a fonte original deste banco tinha um pequeno erro de digitação em sua explicação, usando o termo \"Authentication\" (autenticação) onde na verdade se referia a \"Authorization\" (autorização) — a autorização é o processo correto de identificar o nível de acesso, enquanto a autenticação é o processo de provar a identidade em si.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 24 (banco original Q244)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja automatizar a implantação de servidores no Azure.\nSeu gestor está preocupado que credenciais administrativas possam ser expostas durante a implantação.\nVocê precisa recomendar uma solução do Azure que criptografe as credenciais administrativas durante a implantação.\nO que você deve incluir na recomendação?",
    "opcoes": ["Azure Key Vault", "Azure Information Protection", "Microsoft Defender for Cloud", "Autenticação Multifator do Azure (MFA)"],
    "resposta": 0,
    "explicacao": "O Azure Key Vault protege chaves criptográficas, certificados (e as chaves privadas associadas aos certificados) e segredos (como strings de conexão e senhas) na nuvem.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/security-features",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 25 (banco original Q249)
  {
    "tipo": "comboboxs",
    "texto": "Você planeja implementar vários serviços de segurança para um ambiente do Azure. Você precisa identificar quais serviços do Azure devem ser usados para atender aos seguintes requisitos de segurança:\n• Monitorar ameaças usando sensores\n• Aplicar Autenticação Multifator do Azure (MFA) com base em uma condição\nQual serviço do Azure você deve identificar para cada requisito? Para responder, selecione as opções apropriadas na área de resposta.",
    "pares": [
      {
        "requisito": "Monitorar ameaças usando sensores:",
        "opcoes": ["Azure Monitor", "Microsoft Defender for Cloud", "Microsoft Entra ID Protection", "Microsoft Defender for Identity (ATP)"],
        "resposta": 3
      },
      {
        "requisito": "Aplicar MFA com base em uma condição:",
        "opcoes": ["Azure Monitor", "Microsoft Defender for Cloud", "Microsoft Entra ID Protection", "Microsoft Defender for Identity (ATP)"],
        "resposta": 2
      }
    ],
    "explicacao": "Para monitorar ameaças usando sensores, você usaria o Microsoft Defender for Identity (anteriormente Azure Advanced Threat Protection/ATP). O Defender for Identity é uma solução de segurança baseada em nuvem que aproveita os sinais do seu Active Directory local para identificar, detectar e investigar ameaças avançadas, identidades comprometidas e ações internas mal-intencionadas direcionadas à sua organização. Sensores são pacotes de software instalados em seus servidores para enviar informações ao Defender for Identity. Para aplicar o MFA com base em uma condição, você usaria o Microsoft Entra ID Protection. O Entra ID Protection ajuda a gerenciar a implementação do registro de MFA configurando uma política de Acesso Condicional para exigir o registro de MFA, independentemente do aplicativo de autenticação moderno em que o usuário está entrando.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-protection/howto-identity-protection-configure-mfa-policy",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 26 (banco original Q251)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Você pode habilitar o acesso just-in-time (JIT) a VMs usando <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "Azure Bastion",
      "o Firewall do Azure",
      "o Azure Front Door",
      "o Microsoft Defender for Cloud"
    ],
    "resposta": 3,
    "explicacao": "Você pode usar o acesso just-in-time (JIT) do Microsoft Defender for Cloud para proteger suas máquinas virtuais (VMs) do Azure contra acesso não autorizado pela rede. Muitas vezes, os firewalls contêm regras de permissão que deixam suas VMs vulneráveis a ataques. O JIT permite que você conceda acesso às suas VMs apenas quando o acesso é necessário, nas portas necessárias, e pelo período de tempo necessário.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/just-in-time-access-usage",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 27 (banco original Q254)
  {
    "tipo": "unica",
    "texto": "Esta questão exige que você avalie o texto sublinhado para determinar se está correto.\nO Azure Key Vault é usado para armazenar segredos para contas de usuário do Microsoft Entra ID.\nInstruções: Revise o texto sublinhado. Se ele tornar a afirmação correta, selecione \"Nenhuma alteração é necessária\". Se a afirmação estiver incorreta, selecione a opção que a torna correta.",
    "opcoes": ["Nenhuma alteração é necessária", "contas administrativas do Microsoft Entra ID", "Informações de Identificação Pessoal (PII)", "aplicativos de servidor"],
    "resposta": 3,
    "explicacao": "Centralizar o armazenamento de segredos de aplicativos no Azure Key Vault permite que você controle sua distribuição. O Key Vault reduz muito as chances de segredos serem acidentalmente vazados. Quando desenvolvedores de aplicativos usam o Key Vault, eles não precisam mais armazenar informações de segurança em seu aplicativo. Não precisar armazenar informações de segurança em aplicativos elimina a necessidade de tornar essa informação parte do código. Por exemplo, um aplicativo pode precisar se conectar a um banco de dados. Em vez de armazenar a string de conexão no código do aplicativo, você pode armazená-la com segurança no Key Vault. O Key Vault é, portanto, usado para armazenar segredos para aplicativos de servidor — não para contas de usuário do Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 28 (banco original Q255)
  {
    "tipo": "unica",
    "texto": "Sua empresa planeja automatizar a implantação de servidores no Azure.\nSeu gestor está preocupado que credenciais administrativas possam ser expostas durante a implantação.\nVocê precisa recomendar uma solução do Azure que criptografe as credenciais administrativas durante a implantação.\nO que você deve incluir na recomendação?",
    "opcoes": ["Azure Key Vault", "Azure Information Protection", "Microsoft Defender for Cloud", "Autenticação Multifator do Azure (MFA)"],
    "resposta": 0,
    "explicacao": "O Azure Key Vault é um armazenamento seguro para vários tipos de informações sensíveis. Nesta questão, armazenaríamos as credenciais administrativas no Key Vault. Com essa solução, não há necessidade de armazenar as credenciais administrativas como texto simples nos scripts de implantação. Todas as informações armazenadas no Key Vault são criptografadas.",
    "link": "https://learn.microsoft.com/pt-br/azure/key-vault/general/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 29 (banco original Q261)
  {
    "tipo": "unica",
    "texto": "Você precisa coletar e analisar automaticamente eventos de segurança do Microsoft Entra ID.\nO que você deve usar?",
    "opcoes": ["Microsoft Sentinel", "Azure Synapse Analytics", "Microsoft Entra Connect", "Azure Key Vault"],
    "resposta": 0,
    "explicacao": "O Microsoft Sentinel é uma solução escalável, nativa em nuvem, de gerenciamento de eventos e informações de segurança (SIEM) e de resposta automatizada e orquestrada de segurança (SOAR). O Microsoft Sentinel fornece análises de segurança inteligentes e inteligência contra ameaças em toda a empresa, oferecendo uma única solução para detecção de alertas, visibilidade de ameaças, busca proativa e resposta a ameaças. O Microsoft Sentinel vem com vários conectores para soluções da Microsoft, disponíveis prontos para uso e fornecendo integração em tempo real, incluindo as soluções do Microsoft 365 Defender, fontes do Microsoft 365 (incluindo Office 365, Microsoft Entra ID, Microsoft Defender for Identity e Microsoft Defender for Cloud Apps), entre outras.",
    "link": "https://learn.microsoft.com/pt-br/azure/sentinel/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 30 (banco original Q264)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Identidades armazenadas em um Active Directory local podem ser sincronizadas com o Microsoft Entra ID.",
      "Identidades armazenadas no Microsoft Entra ID, em serviços de nuvem de terceiros, e em um Active Directory local podem ser usadas para acessar recursos do Azure.",
      "O Azure tem serviços de autenticação e autorização integrados que fornecem acesso seguro aos recursos do Azure."
    ],
    "respostas": [true, true, true],
    "explicacao": "A ferramenta usada para sincronizar as contas é o Microsoft Entra Connect. Os serviços de sincronização do Microsoft Entra Connect cuidam de todas as operações relacionadas à sincronização de dados de identidade entre seu ambiente local e o Microsoft Entra ID. Serviços de nuvem de terceiros e um Active Directory local podem, sim, ser usados para acessar recursos do Azure — isso é conhecido como 'federação'. A federação é um conjunto de domínios que estabeleceram confiança entre si; o nível de confiança pode variar, mas normalmente inclui autenticação e quase sempre inclui autorização. O Microsoft Entra ID é um provedor de identidade centralizado na nuvem — este é o principal serviço integrado de autenticação e autorização para fornecer acesso seguro aos recursos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 31 (banco original Q268)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra ID exige a implementação de controladores de domínio em máquinas virtuais do Azure.",
      "O Microsoft Entra ID fornece serviços de autenticação para recursos hospedados no Azure e no Microsoft 365.",
      "Cada conta de usuário no Microsoft Entra ID pode receber apenas uma licença."
    ],
    "respostas": [false, true, false],
    "explicacao": "O Microsoft Entra ID é um serviço baseado em nuvem — ele não exige controladores de domínio em máquinas virtuais. O Microsoft Entra ID é um provedor de identidade centralizado na nuvem — este é o principal serviço integrado de autenticação e autorização para fornecer acesso seguro a recursos do Azure e do Microsoft 365. Contas de usuário no Microsoft Entra ID podem receber múltiplas licenças, para diferentes serviços do Azure ou do Microsoft 365.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 32 (banco original Q270)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "Para implementar uma solução de Autenticação Multifator do Azure (MFA), você precisa sincronizar as identidades locais com a nuvem.",
      "Dois métodos válidos para a Autenticação Multifator do Azure (MFA) são identificação por foto e número de passaporte.",
      "A Autenticação Multifator do Azure (MFA) pode ser exigida para contas de usuário administrativas e não administrativas."
    ],
    "respostas": [false, false, true],
    "explicacao": "Não é verdade que você deva implantar uma solução de federação ou sincronizar identidades locais com a nuvem — é possível ter um ambiente somente na nuvem e ainda usar o MFA. Identificação por foto e número de passaporte não são métodos válidos de autenticação MFA. Métodos válidos incluem: senha, aplicativo Microsoft Authenticator, SMS e chamada de voz. Você pode configurar o MFA para ser exigido apenas para contas de administrador, ou configurá-lo para qualquer conta de usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-authentication-methods",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 33 (banco original Q271)
  {
    "tipo": "unica",
    "texto": "Você precisa garantir que, quando usuários do Microsoft Entra ID se conectarem ao Microsoft Entra ID pela Internet usando um endereço IP anônimo, os usuários sejam automaticamente solicitados a alterar sua senha.\nQual serviço do Azure você deve usar?",
    "opcoes": ["Microsoft Entra Connect Health", "Microsoft Entra Privileged Identity Management", "Microsoft Defender for Identity (ATP)", "Microsoft Entra ID Protection"],
    "resposta": 3,
    "explicacao": "O Microsoft Entra ID Protection inclui duas políticas de risco: política de risco de login e política de risco do usuário. Um risco de login representa a probabilidade de que uma determinada solicitação de autenticação não tenha sido autorizada pelo proprietário da identidade. Existem vários tipos de detecção de risco. Um deles é o Endereço IP Anônimo. Esse tipo de detecção de risco indica logins a partir de um endereço IP anônimo (por exemplo, navegador Tor ou VPN anônima). Esses endereços IP são normalmente usados por agentes que querem ocultar sua telemetria de login (endereço IP, localização, dispositivo, etc.) com potencial intenção maliciosa. Você pode configurar a política de risco de login para exigir que os usuários alterem sua senha.",
    "link": "https://learn.microsoft.com/pt-br/entra/id-protection/howto-identity-protection-configure-risk-policies",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 34 (banco original Q273)
  {
    "tipo": "unica",
    "texto": "A que um aplicativo deve se conectar para recuperar tokens de segurança?",
    "opcoes": ["uma conta de Armazenamento do Azure", "o Microsoft Entra ID", "um repositório de certificados", "um Azure Key Vault"],
    "resposta": 1,
    "explicacao": "O Microsoft Entra ID é um provedor de identidade centralizado na nuvem que autentica usuários e fornece tokens de acesso a eles. É por meio dele que aplicativos recuperam tokens de segurança. Já o Azure Key Vault é projetado para armazenar segredos de configuração para aplicativos de servidor, não para fornecer tokens de segurança de identidade. Uma conta de Armazenamento do Azure é usada para armazenar dados, não segredos para aplicativos.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 35 (banco original Q274)
  {
    "tipo": "unica",
    "texto": "Sua rede contém uma floresta do Active Directory. A floresta contém 5.000 contas de usuário.\nSua empresa planeja migrar todos os recursos de rede para o Azure e desativar o datacenter local.\nVocê precisa recomendar uma solução para minimizar o impacto sobre os usuários após a migração planejada.\nO que você deve recomendar?",
    "opcoes": [
      "Implementar a Autenticação Multifator do Azure (MFA)",
      "Sincronizar todas as contas de usuário do Active Directory com o Microsoft Entra ID",
      "Instruir todos os usuários a alterarem sua senha",
      "Criar uma conta de usuário convidado no Microsoft Entra ID para cada usuário"
    ],
    "resposta": 1,
    "explicacao": "Para migrar para o Azure e desativar o datacenter local, seria necessário criar as 5.000 contas de usuário no Microsoft Entra ID. A forma mais fácil de fazer isso é sincronizar todas as contas de usuário do Active Directory com o Microsoft Entra ID — sendo possível, inclusive, sincronizar as senhas para minimizar ainda mais o impacto sobre os usuários. A ferramenta usada para sincronizar as contas é o Microsoft Entra Connect. Os serviços de sincronização do Microsoft Entra Connect cuidam de todas as operações relacionadas à sincronização de dados de identidade entre seu ambiente local e o Microsoft Entra ID.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 36 (banco original Q278)
  {
    "tipo": "unica",
    "texto": "Você tem uma assinatura do Azure e 100 dispositivos Windows 10.\nVocê precisa garantir que apenas usuários cujos dispositivos tenham os patches de segurança mais recentes instalados possam acessar aplicativos integrados ao Microsoft Entra ID.\nO que você deve implementar?",
    "opcoes": ["uma política de Acesso Condicional", "Azure Bastion", "Firewall do Azure", "Azure Policy"],
    "resposta": 0,
    "explicacao": "Uma política de Acesso Condicional é um recurso do Microsoft Entra ID que permite controlar o acesso a aplicativos de nuvem com base em um conjunto de condições. Você pode usar uma política de Acesso Condicional para restringir o acesso a aplicativos integrados ao Microsoft Entra ID apenas aos dispositivos que atendam a determinados requisitos de segurança, como ter os patches de segurança mais recentes instalados. Ao implementar uma política de Acesso Condicional, você pode garantir que apenas usuários cujos dispositivos têm os patches de segurança mais recentes possam acessar os aplicativos integrados ao Microsoft Entra ID, bloqueando o acesso para usuários com dispositivos que não atendam aos requisitos de segurança.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/conditional-access/concept-conditional-access-policies",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 37 (banco original Q279)
  {
    "tipo": "unica",
    "texto": "O que o Azure Information Protection pode criptografar?",
    "opcoes": ["tráfego de rede", "documentos e mensagens de e-mail", "uma conta de Armazenamento do Azure", "um banco de dados SQL do Azure"],
    "resposta": 1,
    "explicacao": "O Azure Information Protection pode criptografar documentos e e-mails. O Azure Information Protection é uma solução baseada em nuvem que ajuda uma organização a classificar e, opcionalmente, proteger seus documentos e e-mails, aplicando rótulos. Os rótulos podem ser aplicados automaticamente por administradores que definem regras e condições, manualmente por usuários, ou por uma combinação em que os usuários recebem recomendações. A tecnologia de proteção usa o Azure Rights Management (frequentemente abreviado como Azure RMS). Essa tecnologia é integrada a outros serviços e aplicativos de nuvem da Microsoft, como o Microsoft 365 e o Microsoft Entra ID, e usa criptografia, identidade e políticas de autorização.",
    "link": "https://learn.microsoft.com/pt-br/azure/information-protection/what-is-information-protection",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 38 (banco original Q281)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> permite que os usuários se autentiquem em vários aplicativos usando logon único (SSO).",
    "opcoes": [
      "Escolha uma opção",
      "Grupos de segurança de aplicativo no Azure",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Microsoft Defender for Cloud"
    ],
    "resposta": 1,
    "explicacao": "O Microsoft Entra ID fornece serviços como: Logon único (SSO), que permite lembrar apenas um nome de usuário e uma senha para acessar múltiplos aplicativos. Uma única identidade é vinculada a um usuário, o que simplifica o modelo de segurança. À medida que os usuários mudam de função ou saem de uma organização, as modificações de acesso são vinculadas a essa identidade, o que reduz muito o esforço necessário para alterar ou desabilitar contas.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/describe-azure-identity-access-security/3-authentication-methods",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 39 (banco original Q288)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: Exigir que um usuário digite uma senha e responda a uma pergunta de segurança ao se conectar ao Microsoft Entra ID é um exemplo de <combobox>.",
    "opcoes": [
      "Escolha uma opção",
      "serviços de identidade business-to-customer (B2C).",
      "identidades gerenciadas.",
      "autenticação multifator (MFA).",
      "controle de acesso baseado em função (RBAC)."
    ],
    "resposta": 2,
    "explicacao": "Requerer que o usuário digite uma senha e responda a uma pergunta de segurança é um exemplo de autenticação multifator (MFA), pois exige mais de um fator/elemento para verificar a identidade do usuário.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/authentication/concept-mfa-howitworks",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 40 (banco original Q297)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é o processo de verificar as credenciais de um usuário.",
    "opcoes": [
      "Escolha uma opção",
      "Autorização",
      "Autenticação",
      "Federação",
      "Emissão de tíquetes (Ticketing)"
    ],
    "resposta": 1,
    "explicacao": "Autenticação, e não autorização, é o processo de verificar as credenciais de um usuário. A diferença entre autenticação e autorização é: Autenticação é comprovar sua identidade, provar que você é quem diz ser. O exemplo mais comum disso é entrar em um sistema fornecendo credenciais, como um nome de usuário e senha. Autorização é o que você tem permissão para fazer depois de ser autenticado — por exemplo, quais recursos você pode acessar e o que pode fazer com eles.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity-platform/authentication-vs-authorization",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 41 (banco original Q305)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "A autorização para acessar recursos do Azure pode ser fornecida somente a usuários do Microsoft Entra ID.",
      "Identidades armazenadas no Microsoft Entra ID, em serviços de nuvem de terceiros, e em um Active Directory local podem ser usadas para acessar recursos do Azure.",
      "O Azure tem serviços de autenticação e autorização integrados que fornecem acesso seguro aos recursos do Azure."
    ],
    "respostas": [false, true, true],
    "explicacao": "A autorização para acessar recursos do Azure pode, sim, ser fornecida por outros provedores de identidade, usando federação. Um exemplo comumente usado é federar seu ambiente local do Active Directory com o Microsoft Entra ID e usar essa federação para conceder acesso. Identidades armazenadas no Microsoft Entra ID, em serviços de nuvem de terceiros e em um Active Directory local podem, sim, ser usadas para acessar recursos do Azure — isso é conhecido como 'federação'. O Microsoft Entra ID é um provedor de identidade centralizado na nuvem — este é o principal serviço integrado de autenticação e autorização para fornecer acesso seguro aos recursos do Azure.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity/hybrid/connect/whatis-azure-ad-connect",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 42 (banco original Q308)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O logon único (SSO) exige que todos os usuários se conectem usando o aplicativo Microsoft Authenticator.",
      "Autenticação é o processo de identificar qual nível de acesso um usuário ou serviço autenticado possui.",
      "O Acesso Condicional usa sinais coletados de um usuário durante o processo de login para decidir se deve permitir ou negar solicitações de acesso."
    ],
    "respostas": [false, false, true],
    "explicacao": "O logon único é um método de autenticação que permite aos usuários entrar usando um único conjunto de credenciais para fazer login em várias aplicações — não exige especificamente o Microsoft Authenticator, podendo usar outros métodos. Autorização, e não autenticação, é o processo de estabelecer qual nível de acesso um usuário ou serviço legítimo deve ter. Durante o login, o Acesso Condicional coleta sinais do usuário, toma decisões com base nesses sinais e aplica essa decisão permitindo ou negando a solicitação de acesso, ou desafiando com uma resposta de autenticação multifator.",
    "link": "https://learn.microsoft.com/pt-br/training/modules/secure-access-azure-identity-services/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 43 (banco original Q335)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "No Microsoft Entra ID Premium P2, é garantida uma disponibilidade de pelo menos 99,9%.",
      "O Contrato de Nível de Serviço (SLA) para o Microsoft Entra ID Premium P2 é o mesmo que o SLA para o Microsoft Entra ID Free.",
      "Todos os clientes pagantes do Azure recebem um crédito caso sua porcentagem de tempo de atividade mensal fique abaixo do valor garantido no Contrato de Nível de Serviço (SLA)."
    ],
    "respostas": [true, false, true],
    "explicacao": "A Microsoft garante pelo menos 99,9% de disponibilidade para os serviços das edições Premium do Microsoft Entra ID. Os serviços são considerados disponíveis nos seguintes cenários: usuários conseguem entrar no serviço, acessar o Painel de Acesso e aplicativos no Painel de Acesso e redefinir senhas; administradores de TI conseguem criar, ler, gravar e excluir entradas no diretório, ou provisionar/desprovisionar usuários em aplicativos no diretório. Não é fornecido SLA para a camada gratuita (Free) do Microsoft Entra ID — portanto, o SLA do P2 não é o mesmo que o do nível gratuito, já que este último simplesmente não possui garantia de SLA. Você pode solicitar crédito se a disponibilidade cair abaixo do SLA — o valor do crédito depende do nível de disponibilidade real (por exemplo, 25% de crédito se a disponibilidade for menor que 99,9%, 50% se for menor que 99%, e 100% se for menor que 95%).",
    "link": "https://azure.microsoft.com/pt-br/support/legal/sla/active-directory/v1_0/",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 44 (banco original Q379)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Defender for Cloud pode monitorar recursos do Azure e recursos locais.",
      "Todos os recursos do Microsoft Defender for Cloud são gratuitos.",
      "No Microsoft Defender for Cloud, você pode baixar um relatório de Conformidade Regulatória."
    ],
    "respostas": [true, false, true],
    "explicacao": "O Microsoft Defender for Cloud é uma plataforma de Gerenciamento de Postura de Segurança na Nuvem (CSPM) e de Proteção de Carga de Trabalho na Nuvem (CWPP) para todos os seus recursos do Azure, locais e multinuvem (AWS e GCP). O Defender for Cloud inclui recursos fundamentais de CSPM gratuitamente — você também pode habilitar recursos avançados de CSPM habilitando o plano Defender CSPM. Isso significa que os recursos fundamentais são gratuitos, mas os recursos avançados têm custo — portanto, nem todos os recursos são gratuitos. As capacidades avançadas de monitoramento do Defender for Cloud também permitem rastrear e gerenciar a conformidade ao longo do tempo, incluindo o download de relatórios de Conformidade Regulatória.",
    "link": "https://learn.microsoft.com/pt-br/azure/defender-for-cloud/defender-for-cloud-introduction",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 45 (banco original Q384)
  {
    "tipo": "unica",
    "texto": "O que é usado para conceder permissão a recursos da Área de Trabalho Virtual do Azure?",
    "opcoes": ["marcas (tags)", "funções de controle de acesso baseado em função (RBAC)", "grupos de recursos", "grupos de segurança de aplicativo"],
    "resposta": 1,
    "explicacao": "No Azure, você pode usar o controle de acesso baseado em função (RBAC) para conceder permissões a recursos da Área de Trabalho Virtual do Azure. O RBAC é um sistema que permite gerenciar o acesso a recursos do Azure com base em funções. No RBAC, você pode definir funções que representam um conjunto de permissões e, então, atribuir essas funções a usuários ou grupos. Por exemplo, você pode criar uma função que permita aos usuários visualizar e gerenciar recursos da Área de Trabalho Virtual do Azure, e depois atribuir essa função a um grupo de usuários que precisam acessar esses recursos.",
    "link": "https://learn.microsoft.com/pt-br/azure/role-based-access-control/overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 46 (banco original Q408)
  {
    "tipo": "combobox",
    "texto": "Selecione a resposta que completa a frase corretamente: <combobox> é o processo de verificar as credenciais de um usuário.",
    "opcoes": [
      "Escolha uma opção",
      "Autorização",
      "Autenticação",
      "Federação",
      "Emissão de tíquetes (Ticketing)"
    ],
    "resposta": 1,
    "explicacao": "A autenticação é o processo de comprovar que você é quem diz ser. A autorização é o ato de conceder a uma parte já autenticada permissão para fazer algo.",
    "link": "https://learn.microsoft.com/pt-br/entra/identity-platform/authentication-vs-authorization",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 47 (banco original Q418)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Azure Advisor fornece recomendações personalizadas.",
      "O Azure Advisor pode fornecer recomendações de custo para máquinas virtuais.",
      "O Azure Advisor pode fornecer recomendações em várias assinaturas do Azure."
    ],
    "respostas": [true, true, true],
    "explicacao": "O Azure Advisor é um consultor de nuvem personalizado que analisa continuamente a configuração e o uso de seus recursos, fornecendo recomendações práticas e personalizadas sobre as melhores práticas em cinco pilares: segurança, custo, confiabilidade, excelência operacional e desempenho. Para custos, o Advisor pode identificar oportunidades específicas de economia relacionadas a máquinas virtuais, como redimensionar ou desligar recursos subutilizados. Você pode configurar o Advisor para direcionar assinaturas e grupos de recursos específicos, permitindo que ele forneça recomendações consolidadas em várias assinaturas do Azure de uma organização.",
    "link": "https://learn.microsoft.com/pt-br/azure/advisor/advisor-overview",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  },
  // Questao 48 (banco original Q444)
  {
    "tipo": "simnao",
    "texto": "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "afirmacoes": [
      "O Microsoft Entra ID exige controladores de domínio em máquinas virtuais do Azure.",
      "O Microsoft Entra ID fornece serviços de autenticação para o Azure e o Microsoft 365.",
      "Cada conta de usuário no Microsoft Entra ID pode receber apenas uma licença do Microsoft 365."
    ],
    "respostas": [false, true, false],
    "explicacao": "O Microsoft Entra ID é uma plataforma de identidade como serviço (IDaaS) nativa em nuvem. Diferente dos Serviços de Domínio do Active Directory (AD DS) tradicionais e locais, ele não depende de uma estrutura de controladores de domínio (DCs) físicos ou virtualizados executando o Windows Server — a Microsoft cuida de toda a escala e infraestrutura subjacente nativamente, e você simplesmente consome as capacidades de diretório pela web. O Microsoft Entra ID atua como o mecanismo central de identidade e provedor de confiança para todo o panorama de nuvem da Microsoft — ele lida com a autenticação do usuário, avalia políticas de Acesso Condicional e emite tokens de segurança quando alguém tenta acessar o Portal do Azure, o Exchange Online ou o Microsoft Teams. Um único objeto de identidade no Microsoft Entra ID pode receber múltiplas licenças simultaneamente — por exemplo, um usuário pode ter uma licença do Microsoft 365 E5 para produtividade, uma licença independente do Power BI Premium para análise avançada de dados, e uma licença individual do Dynamics 365 para acesso a CRM.",
    "link": "https://learn.microsoft.com/pt-br/entra/fundamentals/whatis",
    "dominio": "Descrever o gerenciamento e a governança do Azure",
    "simulado": "az-2026-bloco07"
  }

];