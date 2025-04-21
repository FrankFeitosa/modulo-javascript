function botaoTarefa() {
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}

function fecharModal() {
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}

function buscarTarefas(){
    fetch("http://localhost:3000/tarefas")
        .then(res => res.json())
        .then(res => {
            inserirTarefas(res)
        })
} 
buscarTarefas()

function inserirTarefas(listaDeTarefas) {
    if (listaDeTarefas.length > 0) {
        lista.innerHTML = ""
        listaDeTarefas.map(tarefa => {
            lista.innerHTML += `
                <li>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                    <div class="acao">
                        <box-icon name='trash' size="sm" onclick="deletarTarefa(${tarefa.id})"></box-icon>
                    </div>
                </li>
            `
        })
    }
}

function novaTarefa() {
    event.preventDefault();
    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    }
    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(tarefa)
    })
    .then(res => res.json())
    .then(res => {
        fecharModal();
        buscarTarefas();
        let form = document.querySelectorAll("#criarTarefa form");
        form.reset();
    })
}

function deletarTarefa(id){
    fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(res => {
        alert("Tarefa deletada com sucesso");
        buscarTarefas();
    })
}

// function pesquisarTarefas(){
//     let li = document.querySelectorAll("ul li")
//     if(busca.value.length > 0){
//         li.forEach(lis => {
//             if(!lis.children[0].innerText.includes(busca.value)){
//                 lis.classList.add("oculto")
//             }else {
//                 lis.classList.remove("oculto")
//             }
//         })
//     }else {
//         li.forEach(lis =>{
//             lis.classList.remove("oculto")
//         })
//     }
// }

function pesquisarTarefas(){
    let li = document.querySelectorAll("ul li")
    if(busca.value.length > 0){
        li.forEach(lis => {
            let descricao = lis.querySelector("p").innerText;
            if(!descricao.includes(busca.value)){
                lis.classList.add("oculto")
            }else {
                lis.classList.remove("oculto")
            }
        })
    }else {
        li.forEach(lis =>{
            lis.classList.remove("oculto")
        })
    }
}
