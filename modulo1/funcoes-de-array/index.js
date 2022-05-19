// Exercicios de Interpretação
// 1.
    const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

// a) Será impresso todo o array novamente.

// 2.
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

// a) Será impresso um novo array contendo apenas os nomes de todos os indices.

// 3.
    const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
 })
 
    console.log(novoArrayC)

// a) Retornará um novo array com todo o array, exceto "Chijo"

// Exercicio de Código
// 1. 
// a)
    const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayPets = pets.map((item) => {
     return item.nome
 })

 console.log(novoArrayPets)

// b)

const novoArraySalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})

console.log(novoArraySalsicha)

// c)

const novoArrayPoodles = pets.filter((item) => {
    return item.raca === "Poodle"
})
console.log (novoArrayPoodles)

const imprimeArrayPoodles = novoArrayPoodles.map((item) => {
    return console.log(`Você ganhou um desconto de 10% para tosar o/a ${item.nome}!`)
})

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ] 

 console.log(produtos)

 // a) 
 const arrayProdutosNome = produtos.map((item) => {
     return item.nome
 })

 console.log(arrayProdutosNome)

 // b) 
 const novoArrayNomePreco = [
 { nome: "Alface Lavada", preco: 2.5 },
    { nome: "Guaraná 2l",  preco: 7.8 },
    { nome: "Veja Multiuso", preco: 12.6 },
    { nome: "Dúzia de Banana",  preco: 5.7 },
    { nome: "Leite", preco: 2.99 },
    { nome: "Cândida", preco: 3.30 },
    { nome: "Detergente Ypê", preco: 2.2 },
    { nome: "Vinho Tinto", preco: 55 },
    { nome: "Berinjela kg", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", preco: 10.80 }]

 const novoPreço = novoArrayNomePreco.map((item) => {
       return item.preco.toFixed(2) - 5 / 100
    
 })
// *0,5

console.log(novoPreço)


 // c)

 const apenasBebidas = produtos.filter((item) => {
     return item.categoria === "Bebidas"
 })

 console.log(apenasBebidas)

 // d) 

 const novoArrayYpe = produtos.filter((item) => {
       return item.nome.includes("Ypê") 
 })

 console.log(novoArrayYpe)

 // e)

 const mensagemYpe = novoArrayYpe.map((item) => {
     return `Compre ${item.nome} por ${item.preco}`
 })

console.log(mensagemYpe) 