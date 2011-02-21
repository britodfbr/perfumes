PagSeguro = function (configuracoes, loja) {
  this.configuracoes = configuracoes
  this.loja = loja
  this.carrinho = {}
  this.menu(document.getElementById(this.configuracoes.id_menu))
  this.main(this.configuracoes.inicio, document.getElementById(this.configuracoes.id_main))
  setTimeout(this.atualizaCarrinho, 1)
}

PagSeguro.prototype.menu = function(elm) {
  ret='<ul>'
  for (i in this.loja)
    ret+='<li><a href="#" onclick="pgs.main(\''+i+'\', document.getElementById(pgs.configuracoes.id_main)); return false">'+i+'</a></li>'
  ret+='</ul>'
  if (elm==undefined) document.write(ret)
  else elm.innerHTML = ret
}

PagSeguro.prototype.main = function(grupo, elm) {
  var item
  var ret

  ret = '<h2>'+grupo+'</h2>'

  for (var i=0;i<this.loja[grupo].length;i++) {
    item = this.loja[grupo][i]
    ret += '<dl>'
    ret += '<dt>'+item.descr+'</dt>'
    if (this.configuracoes.imagem)
      ret += '<dd class="imagem"><img src="'+this.configuracoes.img_base+item.img+this.configuracoes.formatoimg+'" /></dd>'
    ret += '<dd class="referencia"><span>Referência olfativa:</span> '+item.ref+'</dd>'
    ret += '<dd class="referencia"><span>Gênero:</span> '+item.genero+'</dd>'
    ret += '<dd class="preco"><span>Preço:</span> '+this.moeda(item.valor)+'</dd>'
    ret += '<dd class="link"><a href="#" onclick="pgs.adicionar(\''+grupo+'\', \''+item.id+'\');pgs.atualizaCarrinho();return false">Comprar</a></dd>'
    ret += '</dl>'
  }

  elm.innerHTML = ret
}

PagSeguro.prototype.adicionar = function(grupo, id) {
  for (i in this.loja[grupo])
    if (this.loja[grupo][i].id == id)
      var item = this.loja[grupo][i]
  if (item==undefined) return

  for (i in this.carrinho) {
    if (String(i)==String(item.id)) {
      this.carrinho[i].quant++
      return
    }
  }
  this.carrinho[item.id] = {
    'id'    : item.id,
    'descr' : item.descr,
    'valor' : item.valor,
    'quant' : 1
  }
  if (item.peso)
    this.carrinho[item.id].peso = item.peso
  if (item.frete)
    this.carrinho[item.id].frete = item.frete
}

PagSeguro.prototype.remover = function(id) {
  for (i in this.carrinho) {
    if (String(i)==String(id)) {
      this.carrinho[i].quant--
      if (this.carrinho[i].quant==0)
        delete this.carrinho[i]
    }
  }
}


PagSeguro.prototype.atualizaCarrinho = function() {
  var x=total=0
  var tabela = '<h2> Minha Compra </h2> <table><thead><th>Quantia</th><th>Descrição</th><th>Vlr Unitário</th><th>Vlr Final</th></tr></thead><tbody>'
  var ret = '<form action="https://pagseguro.uol.com.br/security/webpagamentos/webpagto.aspx" method="POST" target="pagseguro">\n'
  ret += '<input type="hidden" name="email_cobranca" value="'+this.configuracoes.email+'" />'
  ret += '<input type="hidden" name="moeda" value="'+this.configuracoes.moeda+'" />'
  ret += '<input type="hidden" name="tipo" value="CP" />'
  ret += '<input type="hidden" name="extra" value="1" />'
  ret += '<input type="hidden" name="encoding" value="utf-8" />'


  for (i in this.carrinho) {
    if (this.carrinho[i]==undefined || this.carrinho[i].descr==undefined) continue
    x++
    if (this.configuracoes.peso)
      ret += '<input type="hidden" name="item_peso_'+x+'" value="'+pgs.valor(this.configuracoes.peso)+'" />'
  
    if (this.configuracoes.frete)
      ret += '<input type="hidden" name="item_frete_'+x+'" value="'+pgs.valor(this.configuracoes.frete)+'" />'
  
    if (this.configuracoes.tipofrete)
      ret += '<input type="hidden" name="item_tipo_frete" value="'+this.configuracoes.tipofrete+'" />'

    ret += '<input type="hidden" name="item_id_'+x+'" value="'+this.carrinho[i].id+'"  />\n'
    ret += '<input type="hidden" name="item_descr_'+x+'" value="'+this.carrinho[i].descr+'"  />\n'
    ret += '<input type="hidden" name="item_valor_'+x+'" value="'+pgs.valor(this.carrinho[i].valor)+'"  />\n'
    ret += '<input type="hidden" name="item_quant_'+x+'" value="'+this.carrinho[i].quant+'"  />\n'

    if (this.carrinho[i].peso && !this.configuracoes.peso)
      ret += '<input type="hidden" name="item_peso_'+x+'" value="'+pgs.valor(this.carrinho[i].peso)+'"  />\n'

    if (this.carrinho[i].frete && !this.configuracoes.frete)
      ret += '<input type="hidden" name="item_frete_'+x+'" value="'+pgs.valor(this.carrinho[i].frete)+'"  />\n'

    tabela += '<tr><td>'+this.carrinho[i].quant+'</td><td>'+this.carrinho[i].descr+'</td><td>'+this.moeda(this.carrinho[i].valor)+'</td><td>'+this.moeda(this.carrinho[i].quant*this.carrinho[i].valor)+'</td><td><a href="#" onclick="pgs.remover(\''+this.carrinho[i].id+'\');pgs.atualizaCarrinho(); return false"> <img height="15" width="25" src="'+this.configuracoes.rmBotao+'" alt="Remover item" /> </a></td></tr>'
    total+=this.carrinho[i].quant*this.carrinho[i].valor
  }
  tabela+='</tbody><tfoot><tr><th colspan="3">Total</th><th colspan="2">'+pgs.moeda(total)+'</th></tr></tfoot></table>'
  ret += '<input type=button onclick=window.location.replace("http://www.perfumes.incolume.com.br/#vitrinemenu"); value="Limpar Todos" alt="Limpar todos os itens da compra! :( " >'
  ret += '<input type=button onclick="parentNode.submit()" value="Finalizar Compra" alt="Finalizar compra! " >\n'
  /*ret += '<input type="image" src="'+this.configuracoes.imgBotao+'" name="submit" alt="Finalizar compra!" />\n'*/
  ret += '</form> Sua compra garantida ou seu dinheiro de volta! <h2> </h2>'
  document.getElementById(this.configuracoes.id_carrinho).innerHTML = tabela+ret
}

PagSeguro.prototype.moeda = function(valor) {
  return 'R$ ' + Number(valor).toFixed(2).replace(/[^\d]/, ',')
}

PagSeguro.prototype.valor = function(valor) {
  return Number(valor).toFixed(2).replace(/[^\d]/, '')
}

window.onload=function() {
  pgs=new PagSeguro(configuracoes, loja)
}
