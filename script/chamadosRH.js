var tabela = document.querySelector(".tabela");
var detalhes = document.querySelector(".detalhamento-chamado");
var btnFechar = document.querySelector("#btn-fechar");
var btnCancelar = document.querySelector("#btn-cancelar");
var btnAtribuir = document.querySelector("#btn-atribuir");
var interacaoChamado = document.querySelector("#interacao-chamado");

tabela.addEventListener("dblclick", function() {
    if(detalhes.style.display  == 'none') {
        detalhes.style.display = 'block';
    } else {
        detalhes.style.display = 'none';
    }
});

btnFechar.addEventListener("click", function() {
    detalhes.style.display = 'none';
});

btnCancelar.addEventListener("click", function() {
    interacaoChamado.classList.add("cancelamento");
    interacaoChamado.remove();
});

btnAtribuir.addEventListener("click", function() {
    document.getElementById("alteracao-nome").innerHTML = "Icaro Carvalho";
})




