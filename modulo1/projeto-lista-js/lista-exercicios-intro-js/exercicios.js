// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Insira a altura"))
  let largura = Number(prompt("Insira a largura"))
  let calculaAreaRetangulo = altura * largura
  return console.log(calculaAreaRetangulo)


}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Insira o ano atual"))
  let anoNascimento = Number(prompt("Insira o ano de nascimento"))
  let imprimeIdade = anoAtual - anoNascimento
  return console.log(imprimeIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let calculaIMC = peso / (altura * altura)
return calculaIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome04 = prompt("Insira seu nome")
  let idade = Number(prompt("Insira sua idade"))
  let email = prompt("Insira seu email")
  return console.log(`Meu nome é ${nome04}, tenho ${idade} anos, e o meu email é ${email}.`)
  
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Insira uma cor")
  let cor2 = prompt("Insira outra cor")
  let cor3 = prompt("insira outra cor")
  let imprimeTresCoresFavoritas = [cor1, cor2, cor3]
  return console.log(imprimeTresCoresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 return string.toUpperCase()

}
console.log(retornaStringEmMaiuscula("oi"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}
console.log(calculaIngressosEspetaculo(3000, 100))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let lenghtstring1 = string1.length
let lenghtstring2 = string2.length
  let checaStringsMesmoTamanho = lenghtstring1 == lenghtstring2
return checaStringsMesmoTamanho


}
console.log(checaStringsMesmoTamanho("ola", "abcdf"))
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
let arrayLength = array.length
return array[arrayLength-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let salvarElemento = array[0]
console.log(salvarElemento)
  array[0] = array[array.length-1]
array[array.length-1] = salvarElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
let igualdade1 = string1.toLowerCase()
console.log(igualdade1)
let igualdade2 = string2.toLowerCase()
console.log(igualdade2)
let checaIgualdadeDesconsiderandoCase = igualdade1 == igualdade2
return checaIgualdadeDesconsiderandoCase

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}