// script.js

//Seleciona o elemento HTML com o id 'mensagem'
const mensagemElemento = document.getElementById('mensagem')

// Modifica o texto do elemento
mensagemElemento.textContent = 'Olá, Mundo! Esse é o meu primeiro Hello World com Javascript';

//inserindo testo no HTML
document.write("<h2>Mais uma ferramenta testada</h2>")

//Variáveis

let nome = "João";// variável que pode mudar

// Reatribuição de valores
let cidade = "São Paulo";
cidade = "Ceará"

//Constantes
const pi = 3.14159; // Constante, valor imutável

// Constante como objeto ou array, suas propriedades ou elementos podem ser modificados
const carro = {marca: "Toyota", modelo:"Corolla"};
carro.modelo = "Camry";// Permitido

//Funções
function saudacao(nome){
    return `Olá, ${nome}`
}
console.log(saudacao("Maria"))

//Estrutura Condicionais

// if/else
let idade = 18;
if(idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de Idade")
}

// switch

let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3: 
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
}

// Estruturas de Repetições

// for
for(let i = 0; i < 5; i++){
    console.log(i)
}

// while
let contador = 0;
while(contador < 5){
    console.log(contador)
    contador++
}

// Requisições
fetch('<a href="http://localhost:3000/usuarios" class="_blanktarget">http://localhost:3000/usuarios</a>')
.then(response => response.json())
.then(id => console.log(id))
.catch(error => console.error('Erro', error)
)

