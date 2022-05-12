// Exercicios de Interpretação
// 1.

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) O que vai ser impresso no console? r: 10 e 50

// b) O que aconteceria se retirasse os dois `console.log` e 
// simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 
// r: ele executaria a função mas não mostraria nada no console

// 2.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade r: joga o texto em caixa baixa e checa a presença da string "cenoura" em true or false

/* b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` = TRUE
     ii.  `CENOURA é bom pra vista` = TRUE
     iii. `Cenouras crescem na terra` = TRUE */

// Exercicios de código
// 1. a)
function imprimirFrase(){
console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
}
(imprimirFrase())
// b)
const exibirmsg = (nome, idade, cidade, profissão) => {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`

}
const resultado = (exibirmsg("Laís", 23, "Guaripari", "instrutora"))
console.log(resultado)

// 2. a)
function somar(n1, n2) {
    const soma = n1 + n2
     return soma

}
console.log((somar(2,2)))

// b)
function booleano(n3, n4) {
const resultado2 =  n3 >= n4
 return resultado2

}
console.log(booleano(4, 3))

// c)

function parOuNao (numero) {
const resultado3 = numero % 2 === 0
return resultado3

}
console.log(parOuNao(4))

// d) 

function stringMaiusculaLength (string2) {
    const resultado4 = string2.length
    console.log(resultado4)
    const resultado5 = string2.toUpperCase()
    console.log(resultado5)
    return resultado4, resultado5
}
(stringMaiusculaLength("parede"))

// 2.
const var1 = Number(prompt("Insira um numero"))
const var2 = Number(prompt("Insira outro numero"))

function somar2 (var1, var2) {
const resultado6 = var1 + var2
    return resultado6
}

function subtrair (var1, var2) {
const resultado7 = var1 - var2
    return resultado7

}

function multiplicação (var1, var2) {
const resultado8 = var1 * var2
    return resultado8

}

function divisão (var1, var2) {
const resultado9 = var1 / var2
    return resultado9
}

console.log(var1 ,"e", var2)
console.log(somar2(var1, var2))
console.log(subtrair(var1, var2))
console.log(multiplicação(var1, var2))
console.log(divisão(var1, var2))