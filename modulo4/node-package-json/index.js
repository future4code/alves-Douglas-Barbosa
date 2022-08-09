const fs = require("fs")

const teste = fs.readFileSync(__dirname + "/save.json")
const tarefas = JSON.parse(teste)

const adicionaTarefas = (tarefa) => {
    tarefas.push(tarefa)
    const tarefasString = JSON.stringify(tarefas)
    fs.writeFileSync(__dirname + "/save.json", tarefasString)
    return(`Tarefa adicionada com sucesso!`)
}

console.log(adicionaTarefas(process.argv[2]), "Tarefas:", tarefas)