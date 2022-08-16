import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type Usuarios = {
    id: number, 
    name: string,
    phone: number,
    email: string,
    website: string
}

const arrayDeUsers: Usuarios[] = [
    {
    id:1,
    name: "doug",
    phone: 3154778963,
    email: "douggx@Hotmail.com",
    website: "doug.com"
    },
    {
        id:2,
        name: "arnold shortman",
        phone: 4478965412,
        email: "heyarnold@gmail.com",
        website: "heyarnold.com"
    }
]

app.get("/users", (req, res) => {          
    res.send(arrayDeUsers)
})

type Posts = {
    id: number, 
    title: string, 
    body: string,
    userID: number
}

const arrayDePosts: Posts[] = [
    {
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        userID: 1
    },
    {
        id: 2,
        title: "qui est esse",
        body: 	"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        userID: 2
    }
]

app.get("/posts", (req, res) => {          
    res.send(arrayDePosts)
})

app.get("/posts/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const post: Posts[] = arrayDePosts.filter((post) => {
        return post.userID === Number(id)
    })

    res.send(post)

})