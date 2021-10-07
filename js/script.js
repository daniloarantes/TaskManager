var tarefa = document.getElementById("inputTarefa");

function criarTarefa() {
    var boxTarefas = document.getElementById("boxTarefas");
    var t1 = "<div class='col s12 task'><p><label><input type='checkbox'/><span>";
    var t2 = "</span></label></p><i class='tiny material-icons' onclick='remover(this)'>clear</i></div>";

    boxTarefas.innerHTML += t1 + tarefa.value + t2;
    tarefa.value = "";
}


tarefa.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        criarTarefa();
    }
});

function remover(btn) {
    btn.parentElement.remove();
}