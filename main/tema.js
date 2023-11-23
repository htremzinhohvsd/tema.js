
var botao = document.querySelector('#tema');

//Alternar entre as classes tema_claro e tema_escuro
botao.onclick = function() {
    document.body.classList.toggle('tema_claro') ;
    document.body.classList.toggle('tema_escuro') ;
};
