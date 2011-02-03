function controle(form1) { var test = document.form1.p1.value; alert("Escreveste: " + test); }
function validaForm(objForm){
//by simone
  var selects = document.getElementsByTagName('select');
  qtd_selects = selects.length
  qtd_selecionado = 0;
  for (i = 1; i <= qtd_selects; i++){
            var  coditem = i;
            cod_item = "item_id_" + coditem;
            if(document.getElementById(cod_item).value != "") {
                  qtd_selecionado = qtd_selecionado + 1;
            }
  }
  //alert(qtd_selecionado)
  if(qtd_selecionado < qtd_selects){
          alert("Selecione os "+ qtd_selects + " produtos!")
          return false
  }
  objForm.submit();
}
function selecionaItem(coditem, elem_valor, desc, vol){
  var cod_item = "item_id_" + coditem
  var desc_item = "item_descr_" + coditem
  document.getElementById(cod_item).value = elem_valor
  document.getElementById(desc_item).value = desc + elem_valor + vol;
}
function showmessage(msg){
  alert(msg);
}
