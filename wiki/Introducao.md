# CertiAcademy - Wiki

Bem-vindo à Wiki do CertiAcademy!

Esta wiki reúne toda a documentação detalhada do projeto CertiAcademy, desde sua motivação, arquitetura, design, uso, estrutura de arquivos, tecnologias utilizadas, até orientações para contribuição e perguntas frequentes.

---

## Índice
- [Visão Geral](#visão-geral)
- [Motivação e Objetivos](#motivação-e-objetivos)
- [Arquitetura e Design](#arquitetura-e-design)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Contribuir](#como-contribuir)
- [Perguntas Frequentes (FAQ)](#perguntas-frequentes-faq)
- [Licença](#licença)

---

## Visão Geral
O CertiAcademy é uma plataforma de simulados para certificações Microsoft, criada para ajudar estudantes e profissionais a se prepararem para exames oficiais. O projeto foi inicialmente desenvolvido em PHP, mas evoluiu para uma versão estática em HTML e CSS puro, tornando-se mais acessível, leve e fácil de manter.

## Motivação e Objetivos
- **Simular a experiência real dos exames Microsoft**: O CertiAcademy oferece simulados que reproduzem fielmente o ambiente, os tipos de questões e a análise de desempenho dos exames oficiais.
- **Acessibilidade**: Ao migrar para HTML e CSS puro, o projeto pode ser executado em qualquer navegador, sem necessidade de servidor ou backend.
- **Facilidade de manutenção e colaboração**: O código é simples, modular e bem documentado, facilitando contribuições da comunidade.

## Arquitetura e Design
O CertiAcademy foi projetado para ser modular e escalável. A estrutura do projeto separa claramente os arquivos de estilo, imagens e conteúdo, permitindo fácil expansão e manutenção. O layout utiliza Tailwind CSS para responsividade e componentes reutilizáveis.

### Princípios de Design
- **Responsividade**: Interface adaptável a dispositivos móveis e desktops.
- **Usabilidade**: Navegação intuitiva, menus claros e foco na experiência do usuário.
- **Visual Moderno**: Uso de Tailwind CSS e design limpo.
- **Documentação**: Wiki e LEIAME para facilitar o entendimento e colaboração.

## Funcionalidades
- Simulados com múltiplos tipos de questões: múltipla escolha, resposta única, arrasta e solta, combobox, múltiplos comboboxes e sim/não.
- Análise detalhada de desempenho ao final do simulado.
- Revisão de questões respondidas.
- Seção de perguntas frequentes (FAQ).
- Menu de navegação com links para diferentes certificações.
- Links para redes sociais e informações institucionais.

## Como Usar
1. Baixe ou clone o repositório do CertiAcademy.
2. Abra o arquivo `index.html` em seu navegador preferido.
3. Navegue pelas seções, explore os simulados e utilize os recursos disponíveis.
4. Não é necessário instalar nada ou rodar servidor web.

## Estrutura do Projeto

Abaixo está a estrutura completa do projeto, incluindo todos os diretórios e arquivos presentes:

```
certiacademy/
├── AI-900/
├── AZ-900/
├── SC-900/
├── DP-900/
├── MS-900/
├── PL-900/
├── imagens/
│   └── certiacademy_logo.svg
├── css/ 
├── wiki/
│   └── Introducao.md
├── index.html
├── LICENSE
└── README.md
```

- **.github/**: Configurações e templates para GitHub.
- **AI-900/**, **AZ-900/**, **DP-900/**, **MS-900/**, **PL-900/**, **SC-900/**: Diretórios para diferentes certificações Microsoft, contendo os simulados correspondentes.
- **css/**: Arquivos de estilo CSS para diferentes partes do site.
- **imagens/**: Ícones e logos em SVG para redes sociais e marca.
- **wiki/**: Documentação adicional do projeto.
- **.gitattributes**: Configurações de atributos do Git.
- **index.html**: Página principal estática do projeto.
- **LICENSE**: Licença do projeto.
- **README.md**: LEIAME resumido para visão rápida.

## Tecnologias Utilizadas
- **HTML5**: Estruturação do conteúdo.
- **CSS3**: Estilização customizada.
- **Tailwind CSS**: Framework utilitário para design responsivo e moderno.
- **Imagens SVG/PNG**: Ícones e ilustrações.

## Como Contribuir
1. Faça um fork do projeto no GitHub.
2. Crie uma branch para sua feature ou correção.
3. Faça suas alterações e adicione testes, se necessário.
4. Envie um pull request com uma descrição clara das mudanças.
5. Participe das discussões e ajude a melhorar o projeto!

## Perguntas Frequentes (FAQ)
**1. Preciso de servidor para rodar o CertiAcademy?**
> Não. Basta abrir o arquivo `index.html` em qualquer navegador moderno.

**2. Os simulados são iguais aos exames oficiais?**
> O CertiAcademy busca simular ao máximo a experiência dos exames Microsoft, incluindo tipos de questões e análise de desempenho.

**3. Posso contribuir com novos simulados ou melhorias?**
> Sim! Sinta-se à vontade para enviar sugestões, abrir issues ou contribuir com código.

**4. O projeto é gratuito?**
> Sim, o CertiAcademy é open source e gratuito para uso e colaboração.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

CertiAcademy © 2025
