
type usuarios = {
    name: string, email: string, role: string
}

const arrayEscritorio:usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const retornaAdmin = (array:usuarios[]) => {
    const admins = array.filter((arr) => {
        return arr.role === "admin"
    }).map((arr) => {
        return arr.email
    })
    return admins
}

console.log(retornaAdmin(arrayEscritorio))