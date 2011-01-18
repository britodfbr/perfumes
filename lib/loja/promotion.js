document.form1.p1.focus();
document.form1.p1.selected;
function controle(form1) { var test = document.form1.p1.value; alert("Escreveste: " + test); }

//como já está vindo selecionado os campos então eu chamo a função quando abre a página tbm
selecionaP1(document.form1.p1.value);

function  selecionaP1(codP1){
  document.form1.item_id_1.value = codP1;
  document.form1.item_descr_1.value = "Perfume Fragrancia Olfativa "+ codP1 +" 50 ml";
}
function  selecionaP1(codP1){
  document.form1.item_id_1.value = codP1;
  document.form1.item_descr_1.value = "Perfume Fragrancia Olfativa "+ codP1 +" 50 ml";
}
