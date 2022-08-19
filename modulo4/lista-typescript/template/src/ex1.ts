const nomeData = (nome:string, dataNascimento:string):string => {
    const DivisãoData:string[] = dataNascimento.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${DivisãoData[0]} do mês de ${DivisãoData[1]} do ano de ${DivisãoData[2]}`
}

console.log(nomeData("doug", "20/10/1997"))