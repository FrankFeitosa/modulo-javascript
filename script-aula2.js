// // // Exemplo de função
// // function boasVindas(nome) {
// //     document.write(`<h1>Bem-vindo(a), ${nome}!</h1>`);
// // }

// // // Chamando a função com diferentes nomes
// // boasVindas("Frank");
// // boasVindas("Cristina");
// // boasVindas("Leticia");
// // boasVindas("Benjamim");
// // boasVindas("Emanuel");

// // // Parâmetros undefined e Erro de referência

// // //undefined
// // function exibirNome(nome) {
// //     document.write(`<h1> Nome: ${nome}</h1>`)
// // }
// // exibirNome()

// // //erro de referência
// // function exibirIdade(idade) {
// //     document.write(`<h1>Idade: ${idade}</h1>`)
// // }
// // exibirIdade(30);

// // //Função somar
// // function somar(numero1,numero2) {
// //     let resultado = numero1 + numero2
// //     return resultado
// // }

// // let resultadoSoma = somar(30,20);
// // document.write(`<h1>O resultado da soma é: ${resultadoSoma}</h1>`);

// // //Funções Mutáveis e Estáticas

// // //Função Mutável
// // let contador = 0;

// // function incrementar() {
// //     contador++
// // }

// // incrementar();
// // document.write(`<h1>Contador: ${contador}</h1>`)

// // //Função Estática
// // function calcularDobro(num) {
// //     return num * 2
// // }

// // let valor= 5;
// // let dobro = calcularDobro(valor);
// // document.write(`<h1>Dobro de ${valor} é : ${dobro}</h1>`)

// // //Função para preencher selects-html
// // function preencherSelect(tag,limite) {
// //     for(let i = 1; i < limite; i++){
// //         tag.innerHTML += `<option> ${i} </option> `
// //     }
// // }
// // // pode utilizar variáveis || apenas chemar a função
// // // let dia = document.getElementById('dia');
// // // let mes = document.getElementById('mes');

// // preencherSelect(dia,32);
// // preencherSelect(mes,13);

// // //Funções anônimas 

// // let saudacao = function (nome) {
// //     return "Olá " + nome
// // }

// // console.log(saudacao("João"))

// // // Arrow Functions

// // const soma = (a,b) => 'a' + 'b';

// // //Comparando funções tradicionais com arrow functions

// // //contagem de idade ♾️
// // function Pessoa(){
// //     this.idade = 0;

// //     setInterval(function() {
// //         this.idade++;
// //         console.log(this.idade);// 'this' refere-se ao objeto global, não ao objeto Pessoa
// //     }, 1000)
// // }
// // // Usando Arrow Function 
// // function pessoa() {
// //     this.idade = 0;
    
// //     setInterval(() => {
// //         this.idade++;
// //         console.log(this.idade); // 'this' refere-se ao objeto pessoa
// //     }, 1000);
// // }

// // //  Objetos e Arrays

// // //objeto
// let pessoa = {
//     nome: "Frank",
//    idade: 34,
//    genero: "Masculino",
//    habilidades: ["JavaScript", "HTML", "CSS"] // aqui é um array dentro do objeto
// }

// //acessando as propriedades do objeto
// // console.log(pessoa.nome);
// // console.log(pessoa.idade);
// // console.log(pessoa.genero);
// // console.log(pessoa.habilidades);

// //Exemplo completo de Objeto e funções dentro do objeto
// let pessoaExemplo = {
//     nome: "Frank",
//    idade: 34,
//    genero: "Masculino",
//    habilidades: ["JavaScript", "HTML", "CSS"], // aqui é um array dentro do objeto
//    saudacao: function () {
//     return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
//    }, 
//    adicionarHabilidade: function(habilidade){
//     this.habilidades.push(habilidade)
//    },
//    listarHabilidades: () => {
//     console.log(`Minhas habilidades são: ${pessoaExemplo.habilidades.join(", ")}`)
//    } 
// }

// pessoaExemplo.saudacao();
// pessoaExemplo.adicionarHabilidade("Node.js");
// pessoaExemplo.listarHabilidades();

// let elemento = document.getElementById("meuElemento");
// elemento.innerHTML = "Texto atualizado"
// console.log(document.ELEMENT_NODE);

// localStorage.setItem("nome", "Frank Feitosa")
// localStorage.getItem("nome")
// console.log(nome)

// function mostrarHora(){
//     let agora = new Date();
//     document.getElementById("relogio").innerHTML = agora.toLocaleDateString();
// }
// setInterval(mostrarHora, 1000)

// setTimeout(() => {
//     alert("Olá Pessoal")
// }, 2000)

let numero1 = Number(prompt("Digite um número: "))

if(numero1 > 5){
    console.log("Esse número é maior que 5");
}else if(numero1 < 5){
    console.log("Esse número é menor que 5");
}else {
    console.log("Esse número é 5");
    
}