// Exercicios de interpretação 
// 1.
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

// a. O código testa o resto da divisão de um numero
// b. Ele passa no teste numeros pares
// c. Para numeros impares (que o resto dividi do não é 0)

// 2.
/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

// a) O codigo exibe ao usuario o preço das frutas
// b) 2.25 R$
// c) O preço apareceria errado para o usuario

// 3.
/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */

// a) A primeira numera está atribuindo um numero digitado
//    pelo usuario á constante numero

// b) 10: "Esse número passou no teste" 0: nada

// c) Ocorrerá um erro pois mensagem não foi definido, seria necessario
//    um return.
/////////////////////////////////////////////////////

// Exercicio de código
// 1.
const idadeUsuario = Number(prompt("Insira sua idade"))

function verificaIdade (idadeUser) {
    if (idadeUser > 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

verificaIdade(idadeUsuario)

// 2.
const turnoUsuario = prompt("Insira M/V/N para Matutino, Vespertino ou Noturno respectivamente")

function comparaTurno (turno) {
    if (turno == "M") {
        console.log("Bom Dia!")
    } else if (turno == "V") {
        console.log("Boa Tarde!")
    }   else if (turno == "N") {
        console.log("Boa Noite!")
    }
}

comparaTurno(turnoUsuario)

// 3.

    function comparaTurnoSwitchCase (turno) {
        switch (turno) {
            case "M":
            console.log ("Bom Dia!")
            break
            case "V":
            console.log ("Boa Tarde!")
            break
            case "N":
            console.log ("Boa Noite!") 
        } 
    }

comparaTurnoSwitchCase(turnoUsuario)

// 4.
const generoFilme = prompt("Insira o genêro do filme").toLowerCase()
const ingressoPreco = Number(prompt("Insira o preço do ingresso"))

function assistirFilme (genero, preço) {
    if (genero == "fantasia" && preço < 15) {
        console.log("Bom filme!")
        const lanchinhoUser = prompt("Qual lanchinho voce vai comprar?")
        console.log (`Aproveite o seu ${lanchinhoUser}`)
    }
    else {
        console.log("Escolha outro filme :(")
    }

}

assistirFilme (generoFilme, ingressoPreco)

// Desafios

// 1. Feito acima!

// 2. 
const nomeUsuarioVendas = prompt("Insira o seu nome")
const tipoDeJogo = prompt("Insira IN para internacional ou DO para domestico")
const etapaJogo = prompt("Insira SF para Semi-Final, DT para Decisão Terceiro Lugar ou FI para final")
const categoriaJogo = Number(prompt("Opções 1,2,3,4"))
const quantidadeIngressos = Number(prompt("Numero de ingressos"))

    function saidaJogo (nomeDoUsuario, tipo, etapa, categoria, quantidade) {
        console.log("--- Dados da Compra ---")
        console.log(`Nome do cliente: ${nomeDoUsuario}`)
        console.log(`Tipo de jogo: ${tipo}`)
        console.log(`Etapa do jogo: ${etapa}`)
        console.log(`Categoria do Jogo: ${categoria}`)
        console.log(`Quantidade de Ingressos: ${quantidade}`)
        console.log("---Valores---")
            if (tipo == "DO" && etapa == "SF" && categoria == 1 ) {
                precoDoIngresso = 1320
                valorTotal = quantidade * precoDoIngresso
                console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "DO" && etapa == "SF" && categoria == 2) {
                    precoDoIngresso = 880
                    valorTotal = quantidade * 880
                    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                    console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "DO" && etapa == "SF" && categoria == 3) {
                precoDoIngresso = 550
            valorTotal = quantidade * 550
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "DO" && etapa == "SF" && categoria == 4) {
            precoDoIngresso = 220
            valorTotal = quantidade * 220
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
        }       else if (tipo == "IN" && etapa == "SF" && categoria == 1 ) {
                precoDoIngresso = 1320 * 4,10
                valorTotal = quantidade * precoDoIngresso
                console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "IN" && etapa == "SF" && categoria == 2) {
                    precoDoIngresso = 880 * 4,10
                    valorTotal = quantidade * precoDoIngresso
                    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                    console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "IN" && etapa == "SF" && categoria == 3) {
                precoDoIngresso = 550 * 4,10
                valorTotal = quantidade * precoDoIngresso
                console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "IN" && etapa == "SF" && categoria == 4) {
                precoDoIngresso = 220 * 4,10
                valorTotal = quantidade * precoDoIngresso
                console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "DO" && etapa == "DT" && categoria == 1 ) {
            precoDoIngresso = 660
            valorTotal = quantidade * precoDoIngresso
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
    }       else if (tipo == "DO" && etapa == "DT" && categoria == 2 ) {
            precoDoIngresso = 440
            valorTotal = quantidade * precoDoIngresso
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
    }       else if (tipo == "DO" && etapa == "DT" && categoria == 3 ) {
            precoDoIngresso = 330
            valorTotal = quantidade * precoDoIngresso
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
    }       else if (tipo == "DO" && etapa == "DT" && categoria == 4 ) {
            precoDoIngresso = 170
            valorTotal = quantidade * precoDoIngresso
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
    }       else if (tipo == "IN" && etapa == "DT" && categoria == 1 ) {
                precoDoIngresso = 1320 * 4,10 
                valorTotal = quantidade * precoDoIngresso
                console.log(`Preço do ingresso: R$${precoDoIngresso} `)
                console.log(`Valor Total: R$${valorTotal}`)
        }   else if (tipo == "IN" && etapa == "DT" && categoria == 2 ) {
            precoDoIngresso = 440 * 4,10
            valorTotal = quantidade * precoDoIngresso
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
    }      else if (tipo == "IN" && etapa == "DT" && categoria == 3 ) {
        precoDoIngresso = 330 * 4,10
        valorTotal = quantidade * precoDoIngresso
        console.log(`Preço do ingresso: R$${precoDoIngresso} `)
        console.log(`Valor Total: R$${valorTotal}`)
}           else if (tipo == "IN" && etapa == "DT" && categoria == 4 ) {
            precoDoIngresso = 170 * 4,10
            valorTotal = quantidade * precoDoIngresso
            console.log(`Preço do ingresso: R$${precoDoIngresso} `)
            console.log(`Valor Total: R$${valorTotal}`)
    }       else if (tipo == "DO" && etapa == "FI" && categoria == 1 ) {
        precoDoIngresso = 1980
        valorTotal = quantidade * precoDoIngresso
        console.log(`Preço do ingresso: R$${precoDoIngresso} `)
        console.log(`Valor Total: R$${valorTotal}`)
}           else if (tipo == "DO" && etapa == "FI" && categoria == 2 ) {
    precoDoIngresso = 1320
    valorTotal = quantidade * precoDoIngresso
    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
    console.log(`Valor Total: R$${valorTotal}`)
}           else if (tipo == "DO" && etapa == "FI" && categoria == 3 ) {
    precoDoIngresso = 880
    valorTotal = quantidade * precoDoIngresso
    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
    console.log(`Valor Total: R$${valorTotal}`)
}           else if (tipo == "DO" && etapa == "FI" && categoria == 4 ) {
        precoDoIngresso = 330
        valorTotal = quantidade * precoDoIngresso
        console.log(`Preço do ingresso: R$${precoDoIngresso} `)
        console.log(`Valor Total: R$${valorTotal}`)
}        else if (tipo == "IN" && etapa == "FI" && categoria == 1 ) {
        precoDoIngresso = 1980 * 4,10
        valorTotal = quantidade * precoDoIngresso
        console.log(`Preço do ingresso: R$${precoDoIngresso} `)
        console.log(`Valor Total: R$${valorTotal}`)
}       else if (tipo == "IN" && etapa == "FI" && categoria == 2 ) {
    precoDoIngresso = 1320 * 4,10
    valorTotal = quantidade * precoDoIngresso
    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
    console.log(`Valor Total: R$${valorTotal}`)
}       else if (tipo == "IN" && etapa == "FI" && categoria == 3 ) {
    precoDoIngresso = 880 * 4,10
    valorTotal = quantidade * precoDoIngresso
    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
    console.log(`Valor Total: R$${valorTotal}`)
}       else if (tipo == "DO" && etapa == "FI" && categoria == 4 ) {
    precoDoIngresso = 330 * 4,10
    valorTotal = quantidade * precoDoIngresso
    console.log(`Preço do ingresso: R$${precoDoIngresso} `)
    console.log(`Valor Total: R$${valorTotal}`)
}
    }
    
saidaJogo (nomeUsuarioVendas, tipoDeJogo, etapaJogo, categoriaJogo, quantidadeIngressos)
