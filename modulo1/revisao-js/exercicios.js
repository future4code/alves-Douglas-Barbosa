// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length }

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b);
  return array 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {   
            numerosPares.push(array[i]);
        }
    }
  return numerosPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {   
            numerosPares.push(array[i]**2);
        }
    }
  return numerosPares 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNum = 0
    for (let numero of array){
      if (numero > maiorNum){
          maiorNum = numero
      }
  } return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   numeroDivisivelPorMenor = Math.max(num1,num2) % Math.min(num1, num2) == 0
   diferencaEntreDois = Math.max(num1, num2) - Math.min(num1, num2)
    let objetoEntreDois = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: numeroDivisivelPorMenor,
        diferenca: diferencaEntreDois,
    } 
    return objetoEntreDois


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC)
    return "Escaleno"
    else if (ladoA == ladoB && ladoB == ladoC)
    return "Equilátero"
    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)
    return "Isósceles"
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    segundoMaior = array[array.length - 2]
    segundoMenor = array[1]
    newArr = [segundoMaior, segundoMenor]
    return newArr


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let filmeExemplo = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${filmeExemplo.nome}, de ${filmeExemplo.ano}, dirigido por ${filmeExemplo.diretor} e estrelado por ${filmeExemplo.atores[0]}, ${filmeExemplo.atores[1]}, ${filmeExemplo.atores[2]}, ${filmeExemplo.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novaPessoa = {
        ...pessoa,
        nome:"ANÔNIMO"
    }
    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((item) => {{
            return item.altura > 1.5 && item.idade > 14 && item.idade < 60
        }
    })
    return pessoasAutorizadas 
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((item) => {
        return item.altura < 1.5 || item.idade <= 14 || item.idade > 60
    })
    return pessoasNaoAutorizadas
  
}

// EXERCÍCIO 14
let contasSaldo = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((conta) => {
        let soma = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
        let saldo = conta.saldoTotal
        return {...conta, saldoTotal: saldo - soma, compras: []}
    })
        return resultado
  }
    

// EXERCÍCIO 15A
let consultaLista =[
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ]
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
    })
    return consultas}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
        consultas.map( a => a.dataDaConsulta = a.dataDaConsulta.split('/').reverse().join());
        consultas.sort( (a, b) => {
            if (a.dataDaConsulta < b.dataDaConsulta) {
                return -1
            } else if (a.dataDaConsulta > b.dataDaConsulta) {
                return 1
            } else {
                return 0
            }
        })
        consultas.map( a => a.dataDaConsulta = a.dataDaConsulta.split(',').reverse().join().replaceAll(',','/'));
        return consultas;
    }
    