enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const organizaFilmes = (titulo:string, ano:number, genero:GENERO, nota?:number) => {
    if (nota) {
    return {nome: titulo, anoLancamento: ano, generoDoFilme: genero, pontuação: nota}
    } else {
     return {nome: titulo, anoLancamento: ano, generoDoFilme: genero}
    }
}

console.log(organizaFilmes("Spider Man 2", 2004, GENERO.ACAO, 83))
console.log(organizaFilmes("Donnie Darko", 2001, GENERO.DRAMA))