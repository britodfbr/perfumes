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
  var cod_item = "item_id_" + coditem;
  var desc_item = "item_descr_" + coditem;
  document.getElementById(cod_item).value = elem_valor;
  document.getElementById(desc_item).value = desc + elem_valor + vol;
}
function selecionaRadio(coditem, elem_valor, desc, cor){
  var cod_item = "item_id_" + coditem;
  var desc_item = "item_descr_" + coditem;
  if (cor == "undefied" || cor == ""){
	if(elem_valor == '001'){ cor = "Dourado";}
  	if(elem_valor == '002'){ cor = "Prateado";}
  	if(elem_valor == '003'){ cor = "Preto";}
  	if(elem_valor == '004'){ cor = "Vermelho";}
  }
  document.getElementById(cod_item).value = elem_valor;
  document.getElementById(desc_item).value = desc + elem_valor + cor;
}
function showmessage(msg){
  alert(msg);
}
function CheckAll(chk){
  for (i = 0; i < chk.length; i++)
    chk[i].checked = true ;
  checkItem();
}
function UnCheckAll(chk){
  for (i = 0; i < chk.length; i++)
    chk[i].checked = false ;
  checkItem();
}
function freteOff(obj,valor){
  document.getElementById(obj).value = valor;
}
function checkItem(){
	check = document.form.item_id;
        freteOff('extras','');
	cod_item = "";
	compra = "";
	count = "";
	if(check.length){
		for (i = 0; i < check.length; i++){
		    if(check[i].checked){
		        cod_item = check[i].value;
			nome_campo = "item_id_" + cod_item;
			count++;
			valor='';
			if (count <= 1){
			  valor='1000';
			}else if (count > 1 && count <=2){
			  valor='850';
			}else if (count > 2 && count <=3){
			  valor='750';
			}else if (count > 3 && count <=4){
			  valor='700';
			}else if (count > 4 && count <=5){
			  valor='550';
			}else {
			  valor='500';
			}
			   //document.getElementById(nome_campo).value = cod_item;	/* fazer conforme o outro script usado com o select */
			   prod = '<input type="" size="" name="item_id_'+  count  +'" id="item_id_' +  count  +'" value="'+ cod_item +'" />'
  			   prod = prod + '<input type="" size="" name="item_descr_'+ count +'" id="item_descr_'+ count +'" value="Ecssus '+ cod_item+' 5ml" />'
			   prod = prod + '<input type="" size="" name="item_quant_'+ count +'" id="item_quant_'+ count +'" value="1" />'
			   prod = prod + '<input type="" size="" name="item_valor_'+ count +'" id="item_valor_'+ count +'" value="'+valor+'" />'
			   prod = prod + '<input type="" size="" name="item_frete_'+ count +'" id="item_frete_'+ count +'" value="1000" />'
			   prod = prod + '<input type="" size="" name="item_peso_'+ count +'" id=" item_peso_'+ count +'" value="0" /> <br />'
			   compra = compra + prod;
		    }
		}
		if (count >= 3){
		   c = (count -1)*5+10
		   freteOff('extras',c*-100)
		}
	}else{
		if(check.checked)
		    cod_item = document.form.item_id.value; /* fazer conforme o outro script usado com o select */
	}
	//document.write(prod);
	document.getElementById('produtos').innerHTML = compra + count;
}
