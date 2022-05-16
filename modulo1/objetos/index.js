// Exercicios de intrpretação
// 1. a) O que vai ser impresso no console?
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavedinsh
console.log(filme.transmissoesHoje[2]) // Globo, Horario: 14h

// 2. a) O que vai ser impresso no console?
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: Juca, Idade: 3, raca: SRD
console.log(gato) // nome: Juba, Idade: 3, raca: SRD
console.log(tartaruga) // nome: goto, Idade: 3, raca: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? Ele copia o outro objeto com seus elementos.

// 3. a) O que vai ser impresso no console?
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? o elemento backender foi setado anteriormente como falso e o valor de altura não foi definido */

// Exercicios de codigo
// 1.
const pessoaCod = {
    nome: "Douglas",
    apelidos: ["Doug", "Dog", "Douglinhas"]
}

function saida(nomeObjeto) {
    console.log(`Eu sou ${nomeObjeto.nome}, mas pode me chamar de: ${nomeObjeto.apelidos[0]}, ${nomeObjeto.apelidos[1]} ou ${nomeObjeto.apelidos[2]}`)
}

saida(pessoaCod)

// b)
const novoPessoaCod = {
    ...pessoaCod,
    apelidos: ["Dodô", "Dô", "Douggx"],
}

saida(novoPessoaCod)

// 2.
const objeto1 = {
    nome: "Amanda",
    idade: 23,
    profissao: "Nutricionista",
}

const objeto2 = {
    nome: "Leila",
    idade: 54,
    profissao: "Dona de casa"
}

function retorneArray (pessoa) {
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]

}
console.log(retorneArray(objeto1))
console.log(retorneArray(objeto2))

// 3.
const variavelCarrinho = []

const objetoFruta = {
    nome: "Maçã",
    disponibilidade: true
}

const objetoFruta2 = {
    nome: "Morango",
    disponibilidade: true
}

const objetoFruta3 = {
    nome: "Banana",
    disponibilidade: true
}

function adicionarCarrinho (fruta) {
const novoCarrinho = variavelCarrinho.push(fruta)
console.log(novoCarrinho)
}

adicionarCarrinho(objetoFruta)
adicionarCarrinho(objetoFruta2)
adicionarCarrinho(objetoFruta2)
console.log(variavelCarrinho)

// Desafio
// 1. 

function usuarioObjeto() {
const nomeUsuario = prompt("Insira seu nome")
const idadeUsuario = Number(prompt("Insira sua idade"))
const profissaoUsuario = prompt("Insira sua profissão")
const usuarioFinal = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissao: profissaoUsuario,
}
console.log(usuarioFinal)
console.log(`Nome: ${usuarioFinal.nome}, Profissao: ${usuarioFinal.profissao} Idade: ${usuarioFinal.idade}`)
}

usuarioObjeto()

// 2.
const filmeObjeto1 = {
    nome: "Spider-Man 2",
    anoDeLancamento: 2004 
}

const filmeObjeto2 = {
    nome: "Spider-Man 1",
    anoDeLancamento: 2002
}

function filmeLançados (filme1, filme2) {
const comparativoFilmes = filme1.anoDeLancamento <= filme2.anoDeLancamento
const comparativoFilmes2 = filme1.anoDeLancamento == filme2.anoDeLancamento
console.log(comparativoFilmes)
console.log(`O primeiro filme foi lançado antes do segundo? ${comparativoFilmes}`)
console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparativoFilmes2}`)
}

filmeLançados(filmeObjeto1, filmeObjeto2)

// 3.
function estoqueSacolao (algumaFruta) {
const novaDisponibilidade = !algumaFruta.disponibilidade
console.log(novaDisponibilidade)
}

estoqueSacolao(objetoFruta)
estoqueSacolao(objetoFruta2)
estoqueSacolao(objetoFruta3)