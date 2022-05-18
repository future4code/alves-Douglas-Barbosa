// Exercicios de interpretação
// 1.
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)

// a) O que o código abaixo está fazendo? 
//    Qual o resultado impresso no console?
//    R: O codigo está adicionando 1 ao i e atribuindo i
//       ao valor enquanto i for menor que 5.
//       Console irá mostrar 10

// 2.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

// a) O que vai ser impresso no console? 
//    R: Todos os elementos dentro do array lista maiores 
//       que 18 [19,21,23,25,27 e 30]

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, 
//     o for...of... é suficiente? Se sim, o que poderia ser 
//     usado para fazer isso?
//     R: Sim. Apenas removendo o if e dando um console.log lista.indexof(numero) no elemento.

// 3.
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}

// a) Qual seria o resultado impresso no console, se o usuário digitasse o número 4? 4 linhas com * aumentando em 1 * a cada linha.

// Exercicios de Código
// 1.
let bichinhosEstimacaoUser = Number(prompt("Insira o numero de bichinhos de estimação que voce tem"))
let contador = 0
let arrayBichinhos = []
function petFuncao(petsUser) {
    if (petsUser == 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else
        while (petsUser > contador) {
            let nomeBichinho = prompt("Digite o nome do seu bichinho")
            console.log(nomeBichinho)
            arrayBichinhos.push(nomeBichinho)
            contador++
        }
}

petFuncao(bichinhosEstimacaoUser)
console.log(arrayBichinhos)

// 2.
// a)
let arrayOriginal = [10, 20, 30, 40, 51]
for (let elemento of arrayOriginal) {
    console.log(elemento)

}

// b)
for (let elemento of arrayOriginal) {
    console.log(elemento / 10)
}

// c)
let novoArray = []
contadorDoFor = 0

function criarArrayPar(antigoArray) {
    for (let i = 0; i < antigoArray.length; i++) {
        if (antigoArray[i] % 2 == 0) {
            novoArray.push(antigoArray[i])
        }
    }
    console.log(novoArray)
}

criarArrayPar(arrayOriginal)

// d) 





// e)
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return console.log(maior)
}

retornaMaiorNumero(arrayOriginal)

function retornaMenorNumero(array) {
    let menor = -Infinity
}

retornaMenorNumero(arrayOriginal)