1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true 

console.log("d. ", typeof resultado) // d. boolean

2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!") // o prompt deve ser especificado com number antes
// const soma = primeiroNumero + segundoNumero

// console.log(soma) // Será impresso no console a concatenação de duas strings

3.
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma)

// - Exercícios de escrita de código
1.
let idadeUsuario = Number(prompt("Digite a sua idade"))
let idadeAmigo = Number(prompt("Digite a idade de seu melhor amigo(a)"))
let idadeMaior = idadeUsuario > idadeAmigo
let diferençaIdade = idadeUsuario - idadeAmigo

console.log("Sua idade é maior que a de seu melhor amigo?", idadeMaior)
console.log(diferençaIdade)

2.
let numeroPar = Number(prompt("Insira um numero par"))
console.log(numeroPar % 2) // O resto da divisão de numeros pares por 2 sempre será 0
                           // O ressto da divisão de numeros impares por 2 sempre será 1

3.
let idadeUsuario2 = Number(prompt("Digite a sua idade"))
let meses = idadeUsuario2 * 12
let dias = idadeUsuario2 * 365
let horas = dias * 24
console.log("A idade do usuario em meses é:", meses)
console.log("A idade do usuario em dias é:", dias)
console.log("A idade do usuario em horas é:", horas)

4.
let numero1 = Number(prompt("Digite um numero"))
let numero2 = Number(prompt("Digite outro numero"))
let primeiraPergunta = numero1 > numero2
let segundaPergunta = numero1 === numero2
let terceiraPergunta =  numero1 % numero2 
let terceiraPergunta2 = terceiraPergunta === 0
let quartaPergunta = numero2 % numero1
let quartaPergunta2 = quartaPergunta === 0

console.log("O primeiro numero é maior que o segundo?", primeiraPergunta)
console.log(" primeiro numero é igual ao segundo?", segundaPergunta)
console.log("O primeiro numero é divisível pelo segundo?", terceiraPergunta2)
console.log("O segundo numero é divisível pelo primeiro?", quartaPergunta2)

// Desafios
1.
// Graus Fahrenheit(°F) para Kelvin(K)
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
let grausFahrenheit = Number(prompt("Digite uma temperatura em Fahrenheit"))
let Kelvin = (grausFahrenheit - 32) * (5/9) + 273.15
console.log(Kelvin,"K")
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
let grausCelsius = Number(prompt("Digite uma temperatura em Celsius"))
let celsiusParaFahrenheit = (grausCelsius) * (9/5) + 32
console.log(celsiusParaFahrenheit,"F")
// GRAUS_CELSIUS PARA FAHRENHEIT E KELVIN RESPECTIVAMENTE
let grausCelsius2 = Number(prompt("Digite uma temperatura em Celsius"))
console.log(celsiusParaFahrenheit2 = (grausCelsius2) * (9/5) + 32,"F")
console.log((celsiusParaFahrenheit2 - 32) * (5/9) + 273.15, "K")

2.
let Hora = 0.05
let valorResidencia = 280 * Hora
console.log(valorResidencia, "Reais")

let porcentagemDesconto = valorResidencia * 0.15
console.log(porcentagemDesconto)

let valorASerPago = valorResidencia - porcentagemDesconto
console.log("O valor a ser pago é de:", valorASerPago,"reais")

