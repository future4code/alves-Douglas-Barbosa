```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
count = arrayDeNumeros.filter(x => x == numeroEscolhido).length
    if (count === 0) {
        return `Número não encontrado`
    }
    else if (count >= 1) {
        return `O número ${numeroEscolhido} aparece ${count}x`
    } 
}``