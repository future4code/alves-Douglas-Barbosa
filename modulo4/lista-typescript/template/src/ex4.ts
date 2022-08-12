enum setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type pessoasColaboradoras ={
    nome: string, 
    salário: number,
    setor: setores,
    presencial: boolean
}

const arrayDePessoas:pessoasColaboradoras[] = [
	{ nome: "Marcos", salário: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.MARKETING, presencial: true }
]


const filtraPessoas = (array: pessoasColaboradoras[]) => {
   const filtrados = array.filter((arr) => {
    return arr.setor === setores.MARKETING && arr.presencial === true
   })
   return filtrados
}

console.log(filtraPessoas(arrayDePessoas))