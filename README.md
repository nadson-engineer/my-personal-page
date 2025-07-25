Documentação: Página Pessoal Responsiva
Este documento descreve a estrutura, o funcionamento e as tecnologias utilizadas.

1 - Visão Geral do Projeto
Esta é uma página web pessoal construída utilizando as tecnologias front-end fundamentais: HTML e CSS. O objetivo principal é ser uma plataforma para conhecer mais sobre mim e poder conversar comigo diretamente. A página é totalmente responsiva, adaptando-se a diferentes tamanhos de tela (desktop, tablet, mobile) para uma ótima experiência de usuário em qualquer dispositivo.

2 - Tecnologias Utilizadas
HTML5: Usado para estruturar o conteúdo da página, incluindo seções semânticas

  CSS3: Responsável pela estilização e pelo design visual da página.

  Flexbox & CSS Grid: Utilizados para criar layouts modernos e responsivos, garantindo que os elementos se organizem de forma otimizada em diferentes dimensões de tela.

  Media Queries: Essenciais para aplicar estilos específicos a determinados tamanhos de tela, assegurando a responsividade.

  Manipulação do DOM (Document Object Model): Usado para selecionar elementos HTML, alterar conteúdo, adicionar/remover classes e escutar eventos do usuário.

3 - Responsividade
  A página foi projetada com uma abordagem Mobile-First ou Desktop-First e implementa responsividade através de:

  Meta Viewport Tag: Presente no <head> do index.html (<meta name="viewport" content="width=device-width, initial-scale=1.0">), garantindo que a página seja renderizada corretamente em dispositivos móveis.

  Unidades Relativas: Uso de em, rem, %, vw, vh para tamanhos de fonte, espaçamentos e dimensões de elementos, permitindo que eles se ajustem proporcionalmente.

  Imagens Flexíveis: Imagens configuradas com max-width: 100%; height: auto; para escalar proporcionalmente dentro de seus contêineres.

  Media Queries: Definidas no CSS para ajustar o layout, tamanhos de fonte e visibilidade de elementos em breakpoints específicos (ex: para tablets e desktops).

4 - Contribuição e Manutenção
Estilos: Todas as alterações de estilo devem ser feitas no arquivo css/style.css ou, se houver, em css/responsive.css para ajustes específicos de responsividade.

  Conteúdo: As modificações no conteúdo e na estrutura da página são feitas em index.html.

  Link: https://nadson-engineer.github.io/portifoliio/
