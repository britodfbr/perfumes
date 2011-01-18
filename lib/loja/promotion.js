document.form1.p1.focus();
document.form1.p1.selected;
function controle(form1) { var test = document.form1.p1.value; alert("Escreveste: " + test); }

//como já está vindo selecionado os campos então eu chamo a função quando abre a página tbm
selecionaP1(document.form1.p1.value);
selecionaP2(document.form1.p2.value);
selecionaP3(document.form1.p3.value);
selecionaP4(document.form1.p4.value);
selecionaP5(document.form1.p5.value);
selecionaP6(document.form1.p6.value);
selecionaP7(document.form1.p7.value);

function selecionaItem(coditem, cod, desc, vol){
  var nome_campo = "item_id_" + coditem
  document.getElementById(nome_campo).value = cod
  document.form1.item_descr_1.value = desc + cod + vol;
}
function  selecionaP1(codP1){
  document.form1.item_id_1.value = codP1;
  document.form1.item_descr_1.value = "Perfume Fragrancia Olfativa "+ codP1 +" 50 ml";
}
function  selecionaP2(codP2){
  document.form1.item_id_2.value = codP1;
  document.form1.item_descr_2.value = "Perfume Fragrancia Olfativa "+ codP2 +" 50 ml";
}
function  selecionaP3(codP3){
  document.form1.item_id_3.value = codP3;
  document.form1.item_descr_3.value = "Perfume Fragrancia Olfativa "+ codP3 +" 50 ml";
}
function  selecionaP4(codP4){
  document.form1.item_id_4.value = codP4;
  document.form1.item_descr_4.value = "Perfume Fragrancia Olfativa "+ codP4 +" 50 ml";
}
function  selecionaP5(codP5){
  document.form1.item_id_5.value = codP5;
  document.form1.item_descr_5.value = "Perfume Fragrancia Olfativa "+ codP5 +" 50 ml";
}
function  selecionaP6(codP6){
  document.form1.item_id_6.value = codP6;
  document.form1.item_descr_6.value = "Perfume Fragrancia Olfativa "+ codP6 +" 50 ml";
}
function  selecionaP7(codP7){
  document.form1.item_id_7.value = codP7;
  document.form1.item_descr_7.value = "Perfume Fragrancia Olfativa "+ codP7 +" 50 ml";
}
