const calculo = process.argv[2]

const num1 = +process.argv[3]
const num2 = +process.argv[4]

const operação = (operacao, num1, num2) => {
    switch(operacao){
        case "soma":
         return num1 + num2
            
        case "subt":
         return num1 - num2
            
        case "mult":
        return num1 * num2
            
        case "div":
        return num1 / num2
                
    }
}

console.log(operação(calculo, num1, num2))