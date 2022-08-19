import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data';
const app = express();
app.use(express.json());
app.use(cors());



// app.get('/test/hello', (req: Request, res: Response) => {
//     res.send(`Olá, mundo!`)
// })
// app.get('/test/:number', (req: Request, res: Response) => {
//     res.send(
//         `Seu número da sorte é ${Number(req.params.number) + 3}!
//     `)
// })



app.get("/playlists", (req: Request, res: Response) => {
    const playlists = users.map((user) => {
        return user.playlists
    }).flat()
    res.send(playlists)
})
app.get("/tracks", (req: Request, res: Response) => {
    const playlists = users.map((user) => {
        return user.playlists
    }).flat()
    const tracks = playlists.map((playlist) => {
        return playlist.tracks
    }).flat()
    res.send(tracks)
})
app.delete("/playlist/:playlistId", (req: Request, res: Response) => {
    const userId = req.headers.user
    const playlistId = req.params.playlistId
    // console.log("userId", userId)
    const user = users.find((user) => {
        return user.id === userId
    })
    if (user === undefined) {
        res.status(404).send("Usuario não encontrado")
        return
    }
    user.playlists = user?.playlists.filter((playlist) => {
        return playlist.id !== playlistId
    })
    res.end()
})
app.delete("/track/:trackId", (req: Request, res: Response) => {
    const userId = req.headers.user
    const trackId = req.params.trackId
    const user = users.find((user) => user.id === userId)
    if (user === undefined) {
        res.status(404).send("Usuario não foi encontrado")
        return
    }
    user.playlists = user.playlists.map((playlist) => {
        // const newPlaylist =
        return {
            id: playlist.id,
            name: playlist.name,
            tracks: playlist.tracks.filter((track) => {
                return track.id !== trackId
            })
        }
    })
    res.end()
})
app.get("/playlists/search", (req: Request, res: Response): void => {
    const name = req.query.name as string

    const allPlaylists = users.map((user) => {
        return user.playlists
    }).flat()

    const result = allPlaylists.filter((playlist) => {
        return name ? playlist.name.includes(name) : true;
    })
    res.send(result)
})
app.post("/playlists", (req: Request, res: Response) => {
    const { idUser, name } = req.body
    const user = users.find((user) => user.id === idUser)

    if (user) {
        user.playlists.push({
            id: Date.now().toString(),
            name: name,
            tracks: []
        })

        res.send("Playlist foi criada")
    } else {
        res.status(400).send("Usuario não encontrado")
    }

})

app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
    
    const { name, artist, url } = req.body

    const playlistId = req.params.playlistId
    const userId = req.headers.authorization

    const user = users.find((user) => user.id === userId)

    if (user) {
        const playlist = user.playlists.find((playlist) => {
            return playlist.id === playlistId
        })
        if(playlist){
            playlist.tracks.push({
                id: Date.now().toString(),
                name,
                artist,
                url
            })
            res.send("Track foi criada")
        }else{
            res.status(404).send("Playlist não encontrada")
        }
    } else {
        res.status(404).send("Usuario não encontrado")
    }

})

app.listen(3003, function () {
    console.log("Meu servidor está rodando na porta 3003");
});