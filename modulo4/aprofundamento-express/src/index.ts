import express, { Request, Response } from 'express'
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/playlists", (req, res) => {
  // tenho todos os usuários
  const currentUsers = users // array de objetos
  console.log(1, currentUsers);

  // Vou pegar as playlists de cada usuário
  const userPlaylists = currentUsers.map((user: any) => {
    return user.playlists 
  }) // array de arrays
  console.log(2, userPlaylists)

  const result = userPlaylists.flat(1)

  res.status(200).send(result);
})


app.get("/tracks", (req, res) => {
  const playlistId = req.query.id

  if(!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

  const allPlaylists = users.map((user: any) => {
    return user.playlists
  }).flat(1)

  let tracks;

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      tracks = playlist.tracks
    }
  })

  res.status(200).send(tracks)
})

app.delete("/playlist", (req, res) => {
  const id = req.query.id

  users.forEach((user: any) => {
    user.playlists = user.playlists.map((playlist: any) => {
      if (playlist.id === id) {
        return {}
      }
      return playlist
    });
  })

  res.status(200).send(users)
})

app.delete("/track", (req, res) => {
  const trackId = req.query.trackId
  const playlistId = req.query.playlistId

  const allPlaylists = users
    .map((user: any) => {
      return user.playlists;
    })
    .flat(1);
  for (let i = 0; i <= allPlaylists.lenght; i++) {
    allPlaylists[i]
  }

  for (let playlist of allPlaylists) {
    playlist
  }

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
       playlist.tracks = playlist.tracks.map((track: any) => {
         if (track.id === trackId) {
           return {};
         }
         return track;
       });
    }
  })

  res.status(200).send(allPlaylists)
})

// ex1

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

// ex2
type ToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
} 

let arrayDeTarefas: ToDo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  }]

  // ex 4

  app.get("/todos/completed", (req, res) => {          
    const completed = arrayDeTarefas.filter((todo) => {
      return todo.completed === true
    }).flat()
    res.send(completed)
  })

  app.get("/todos/incompleted", (req, res) => {          
    const uncompleted = arrayDeTarefas.filter((todo) => {
      return todo.completed === false
    }).flat()
    res.send(uncompleted)
  })

  // ex5

  app.post("/todos", (req: Request, res: Response) => {
    const {userId, id, title, completed} = req.body

  if(arrayDeTarefas) {
    arrayDeTarefas.push({
        userId,
        id,
        title,
        completed,
      })
      res.send(arrayDeTarefas)
  } else {
    res.status(404).send("Não foi possível criar a tarefa, confira as informações")

  }})

  // ex6

  app.delete('/todos/:taskId', (req: Request, res: Response) => {
    const taksId = req.params.taskId

  const deleteTask = arrayDeTarefas.filter((task) => {
    return task.id !== Number(taksId)
  })

  arrayDeTarefas = deleteTask

  res.end()
})

// ex7

app.get('/list/searchTask', (req: Request, res: Response) => {
  const id = Number(req.query.id) 



  const allTask = arrayDeTarefas.map((tasks) => {
      return tasks
  })

  const result = allTask.filter((tasks) => {
      return tasks.userId === id
  })

  res.send(result)
})

// ex8

app.put("/list/change/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const changeTask =  arrayDeTarefas.filter((tarefa) => {
      if(tarefa.id === id) {
          return tarefa
      }
  }).map((tarefa) => {
      if(tarefa.completed === false) {
          return tarefa.completed = true
      } else {
          return tarefa.completed = false 
      }
  })

  res.send(changeTask)
}) 