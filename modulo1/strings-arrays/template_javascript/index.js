// Exercicios de interpretação
// 1.
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3 

array[i+1] = 19
console.log('e. ', array) // e. i = 0 + 1 = 1 logo o 1 no array é o numero 4 que vai se tornar o 19

const valor = array[i+6]
console.log('f. ', valor) // f. 9

// 2. 
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27 

// Exercícios de escrita de código
// 1.
let nomeUsuario = prompt("Insira o nome de usuario")
let emailUsuario = prompt("Insira o email")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}`)

// 2.
let arrayComidas = ["Pizza", "Sanduiche", "Pavê", "Milk-Shake", "Sorvete"]
console.log(arrayComidas)
console.log(`Essas são minhas comidas preferidas:\n ${arrayComidas[0]} \n ${arrayComidas[1]} \n ${arrayComidas[2]} \n ${arrayComidas[3]} \n ${arrayComidas[4]}`)
let novaComida = prompt("Insira sua comida favorita")
arrayComidas[1] = novaComida
console.log(arrayComidas)

// 3.
let listaDeTarefas = [undefined]
let tarefa1 = prompt("Insira uma tarefa")
listaDeTarefas[0] = tarefa1
let tarefa2 = prompt("Insira outra tarefa")
listaDeTarefas[1] = tarefa2
let tarefa3 = prompt("Insira mais uma tarefa")
listaDeTarefas[2] = tarefa3
console.log(listaDeTarefas)
let numeroIndice = Number(prompt("Insira o indice da tarefa já feita"))
listaDeTarefas.splice(numeroIndice, 1)
console.log(listaDeTarefas)

// Desafios
// 1.
let fraseAleatoria = prompt("Insira uma frase aleatoria")
let lista23 = [fraseAleatoria.split(' ')];
console.log(lista23)

// 2.
let arrayDesafio = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(arrayDesafio, arrayDesafio.indexOf("Abacaxi"), arrayDesafio.length)