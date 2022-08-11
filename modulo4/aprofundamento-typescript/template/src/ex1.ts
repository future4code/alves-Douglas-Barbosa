// a)
// r: não é possivel atribuir numero a uma variavel string

// b)
// r: utiliando o | para serem aceitos dois tipos distintos

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum coresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    VIOLETA = "violeta"
}

const pessoa1: Pessoa = {
    nome: "doug",
    idade: 24,
    corFavorita: coresArcoIris.AZUL
}

const pessoa2: Pessoa = {
    nome: "fulano",
    idade: 20,
    corFavorita: coresArcoIris.VIOLETA
}

const pessoa3: Pessoa = {
    nome: "ciclano",
    idade: 18,
    corFavorita: coresArcoIris.VERDE
}

console.log(pessoa1, pessoa2, pessoa3)