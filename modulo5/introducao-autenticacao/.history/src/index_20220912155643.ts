import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

// Exercicio 1

// a) Sou favorável em usar strings pois a combinação de letras e numeros é superior no quesito segurança.
// b) services > GenerateToken

// 