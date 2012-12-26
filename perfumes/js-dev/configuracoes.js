configuracoes = {
  email       : 'vendas@perfumes.incolume.com.br',
  moeda       : 'BRL', // Atualmente o PagSeguro só suporta (BRL) Brasil - Real

  // Configurações sobre o frete
  //tipofrete   : 'EN', // Se esta opção for definida (é opcional), 
                      // use frete nas configurações para frete unico por 
                      // item ou um tipo de frete para cada produto
                      // 
                      // Aqui você deverá informar EN para PAC ou SD para Sedex
                      // Não se esqueça de definir suas opções no seu Admin do PagSeguro
//  frete       : 15,
  //peso        : 17,
  peso        : 0,

  // Abaixo, coloque as referencias aos seus elementos do HTML
  id_menu     : 'vitrinemenu',
  id_main     : 'vitrine',
  id_carrinho : 'carrinho',

  // Gostaria de inserir imagens aos seus itens.
  // Os arquivos devem estar dentro da pasta imagem
  // no formato [baseImg]/[img].[formatoimg]
  //img_base    : 'imagem/', 
  img_base    : 'https://incolume.googlecode.com/svn/trunk/perfumes/img/', 
  // nesta variável, baseImg, insira a localização das imagens; 
  // ex diretório: 'img/'; ex url: 'https://meu.site.com/img/'
  imagem      : true,
  //formatoimg  : '.jpg',
  formatoimg  : '',
  
  // Endereço do botão de compra
  //imgBotao    : 'https://pagseguro.uol.com.br/Security/Imagens/btnComprarBR.jpg',
  //imgBotao    : 'https://pagseguro.uol.com.br/Security/Imagens/btnConcluirBR.jpg',
  imgBotao    : 'https://incolume.googlecode.com/svn/trunk/perfumes/img/btnFinalizar.jpg',
  bntPS    : 'https://incolume.googlecode.com/svn/trunk/perfumes/img/120x53-comprar.gif',
  bntPP    : 'https://incolume.googlecode.com/svn/trunk/perfumes/img/bnr_horizontal_solution_PP_166wx80h.gif',
  rmBotao    : 'https://incolume.googlecode.com/svn/trunk/perfumes/img/close.png',

/* Logo pagseguro*/
  logops: 'https://lh3.googleusercontent.com/-ptPKPMJwUVM/UNMfzHtPD1I/AAAAAAAACl8/1fjLX1EiaL0/s144/novo-novo-logo-ps-1352153644117_266x66.gif',
  logopsBlack: 'https://lh4.googleusercontent.com/-A46-Eh3QyyQ/UNtLgJUobgI/AAAAAAAACnw/H7b413ACqBc/s144/novo-novo-logo-ps-1352153644117_266x66_black.gif',

/* Logo paypal*/
  logopp: 'https://lh4.googleusercontent.com/-NBdOz-5RXFc/UNrq036ieBI/AAAAAAAACnM/GCl3mTbhaxY/s144/paypal_logo.gif',
  logoppBlack: 'https://lh6.googleusercontent.com/-Hq-R3LS5HFM/UNtLLFw2XsI/AAAAAAAACnk/OLlgPGcYE7E/s144/paypal_logo_black.gif',

  // Abaixo, informe o primeiro grupo a ser mostrado na loja
  // Não se esqueça! Este valor é case-sensitive, ou seja Maiúsculas é diferente de MAIÚSCULAS
  inicio     : '50ml'
}
