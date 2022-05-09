/* 
Exercicios de interpretação:
let a = 10
let b = 10
console.log(b) // b é igual a 10
b = 5 // b agora é igual a 5
console.log(a, b) // 10, 5

--

let a = 10
let b = 20
c = a // c = 10
b = c // b = 10
a = b // a = 10

console.log(a, b, c) // (10,10, 10)
--

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasPorDia} por hora`) */

const nomeUsuario = prompt("digite seu nome")
const idadeUsuario = Number(prompt("digite sua idade"))
console.log (typeof nomeUsuario)
console.log (typeof idadeUsuario)
// Ambas variaveis undefined em let pois não foram definidas, alterei para const e atribui imediatamente
//string e number
console.log ("Olá", nomeUsuario,"você tem", idadeUsuario,"anos")

let sim = true
let não = false
let resposta1 = prompt("Você tomou café hoje?[sim/não]")
console.log ("Você tomou café hoje?", resposta1)
let resposta2 = prompt("Dormiu mais de 8 horas hoje?[sim/não]")
console.log ("Dormiu mais de 8 horas hoje?", resposta2)
let resposta3 = prompt("Estamos no fim de semana?[sim/não]")
console.log ("Estamos no fim de semana?", resposta3)

let a = 10
let b = 25
let c = 10
a = b // a = 25 b = 25
b = c // b = 10 c = 10
console.log("O novo valor de a é", (a)) 
console.log("O novo valor de b é", (b))

let numero1 = Number(prompt("Insira um numero"))
let numero2 = Number(prompt ("Insira outro numero"))
resultado1 = numero1 + numero2
resultado2 = numero1 * numero2
console.log("1. O primeiro número somado ao segundo número resulta em:", resultado1)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", resultado2)