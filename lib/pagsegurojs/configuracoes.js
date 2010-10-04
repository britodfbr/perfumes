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
  //frete       : 1,
  //peso        : 2,

  // Abaixo, coloque as referencias aos seus elementos do HTML
  id_menu     : 'menu',
  id_main     : 'main',
  id_carrinho : 'carrinho',

  // Gostaria de inserir imagens aos seus itens.
  // Os arquivos devem estar dentro da pasta imagem
  // no formato [baseImg]/[img].[formatoimg]
  //img_base    : 'imagem/', 
  img_base    : 'https://incolume.googlecode.com/svn/trunk/perfumes/imagens/', 
  // nesta variável, baseImg, insira a localização das imagens; 
  // ex diretório: 'img/'; ex url: 'https://meu.site.com/img/'
  imagem      : true,
  formatoimg  : '.jpg',
  
  // Endereço do botão de compra
  //imgBotao    : 'https://pagseguro.uol.com.br/Security/Imagens/btnComprarBR.jpg',
  //imgBotao    : 'https://pagseguro.uol.com.br/Security/Imagens/btnConcluirBR.jpg',
  imgBotao    : 'https://pagseguro.uol.com.br/Security/Imagens/btnFinalizar.jpg',
  //imgBotao    : 'https://pagseguro.uol.com.br/Security/Imagens/btnConcluir.jpg',

  // Abaixo, informe o primeiro grupo a ser mostrado na loja
  // Não se esqueça! Este valor é case-sensitive, ou seja Maiúsculas é diferente de MAIÚSCULAS
  inicio     : 'Masculino'
}
