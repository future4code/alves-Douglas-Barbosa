// como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R: Usamos o process.argv para passar parametros.

// console.log("Olá,", process.argv[2],"Você tem", process.argv[3], "anos.", "Em sete anos você terá", +process.argv[3] + +7)

const nome = process.argv[2]
const idade = process.argv[3]
const idadeFutura = +process.argv[3] + 7

const verificar = (nome, idade) => {
    if (nome && idade) {
        return console.log(`Olá, ${nome}!, Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}.`)
    } else {
        return "Insira os parametros corretamente"
    }
}

verificar(nome, idade)