import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Musicas from './Musicas'
import BotãoAdicionaMusica from './BotãoAdicionaMusica'

const DivPrincipal = styled.div`
display: grid;
justify-content: center;
margin-bottom: 50px;
border: 1px solid;
padding: 10px;
border-radius: 10px;
margin-top: 15px;
background-color: #ff3c009e;
`

const DivTituloPlaylist = styled.div`
display: flex;
flex-direction: row;
padding-bottom: 10px;
gap:7px;
align-items: center;
`
const Botão = styled.button`
height: 23px;
width: 20px;
`
const PnomePlaylist = styled.p`
display: grid;
align-content: center;
`

export default class TelaLogado extends Component {
    state = {
        playlists: [],
        erro: "",
        musicas: [],
        criarPlaylist: false,
        nomePlaylist: "",
        playlistDeletada: 0,
        adicionarMusica: false,
        nomeMusica: "",
        nomeArtista: "",
        inputUrl: "",
    }

    componentDidMount() {
        this.pegarPlaylists()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.playlists !== prevState) {
            this.pegarPlaylists()
        } else if (this.state.playlistDeletada !== prevState) {
            this.pegarPlaylists()
        }
    }

    pegarPlaylists = () => {
        const nome = this.props.nome
        const sobrenome = this.props.sobrenome
        const turma = this.props.turma


        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: `${nome}-${sobrenome}-${turma}`
                    }
                }
            )
            .then((res) => {
                this.setState({ playlists: res.data.result.list })


            })
            .catch((erro) => {
                console.log(erro.response)
            })
    }

    changeStateCriarPlaylist = () => {
        this.setState({ criarPlaylist: !this.state.criarPlaylist })
    }

    handleNomePlaylist = (e) => {
        this.setState({ nomePlaylist: e.target.value })
    }

    apiCreatePlaylist = () => {
        const nome = this.props.nome
        const sobrenome = this.props.sobrenome
        const turma = this.props.turma

        const body = {
            name: this.state.nomePlaylist
        }

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body,
                {
                    headers: {
                        Authorization: `${nome}-${sobrenome}-${turma}`
                    }
                }
            )
            .then((res) => {
                console.log(res.data)

            })
            .catch((erro) => {
                console.log(erro.response)
            })
    }

    criarPlaylist = () => {
        if (this.state.criarPlaylist === false) {
            return <button
                onClick={this.changeStateCriarPlaylist}>Criar playlist</button>
        } else {
            return <div>
                <h1>Crie sua playlist</h1>
                <label>
                    <p>Nome da playlist:</p>
                    <input
                        value={this.state.nomePlaylist}
                        onChange={this.handleNomePlaylist}
                    ></input>
                    <button
                        onClick={this.apiCreatePlaylist}>Enviar</button>
                </label>
            </div>
        }
    }

    deletarPlaylist = (id) => {
        const nome = this.props.nome
        const sobrenome = this.props.sobrenome
        const turma = this.props.turma

        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
                {
                    headers: {
                        Authorization: `${nome}-${sobrenome}-${turma}`
                    }
                }
            )
            .then((res) => {
                console.log(res.data)


            })
            .catch((erro) => {
                console.log(erro.response)
            })
    }

    aPlaylistWasDeleted = () => {
        this.setState({ playlistDeletada: this.state.playlistDeletada + 1 })
    }

    handleNomeMusica = (e) => {
        this.setState({ nomeMusica: e.target.value })
        console.log(this.state.nomeMusica)
    }

    handleNomeArtista = (e) => {
        this.setState({ nomeArtista: e.target.value })
        console.log(this.state.nomeArtista)
    }

    handleUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
        console.log(this.state.inputUrl)
    }

    changeStateAddMusic = () => {
        this.setState({adicionarMusica: !this.state.adicionarMusica})
    }

    iconAddMusic = () => {
        if (this.state.adicionarMusica === false) {
            return <button
            onClick={this.changeStateAddMusic}>+</button>
        } else {
            return <div> 
                <h4>Adicione uma musica <button
            onClick={this.changeStateAddMusic}>-</button></h4>
                <label>
                    <p>Nome da musica:</p>
                    <input
                        value={this.state.nomeMusica}
                        onChange={this.handleNomeMusica}
                    ></input>
                    <p>Artista:</p>
                    <input
                        value={this.state.nomeArtista}
                        onChange={this.handleNomeArtista}
                    ></input>
                    <p>Url:</p>
                    <input
                        value={this.state.inputUrl}
                        onChange={this.handleUrl}
                    ></input>
                    <button
                        onClick={this.apiAdicionaMusica}>Enviar</button>
                </label>
            </div>
        }

    }

    apiAdicionaMusica = (id) => {
        const nome = this.props.nome
        const sobrenome = this.props.sobrenome
        const turma = this.props.turma

        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.url
        }

        axios
            .post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
                body,
                {
                    headers: {
                        Authorization: `${nome}-${sobrenome}-${turma}`
                    }
                }
            )
            .then((res) => {
                console.log(res.data)
                alert("Musica adicionada com sucesso!")

            })
            .catch((erro) => {
                console.log(erro.response)
            })
    }


    render() {


        const listaPlaylists = this.state.playlists.map((playlist) => {
            return (
                <DivPrincipal
                    key={playlist.id}>
                    <DivTituloPlaylist><PnomePlaylist>Nome da playlist:</PnomePlaylist><h1>{playlist.name} 
                        </h1>
                        <Botão
                        onClick={() => this.deletarPlaylist(playlist.id)}>x</Botão>
                        <BotãoAdicionaMusica 
                        adicionarMusica={this.state.adicionarMusica}
                        changeStateAddMusic={this.changeStateAddMusic}
                        nomeMusica={this.state.nomeMusica}
                        nomeArtista={this.state.nomeArtista}
                        inputUrl={this.state.inputUrl}
                        handleNomeMusica={this.handleNomeMusica}
                        handleNomeArtista={this.handleNomeArtista}
                        handleUrl={this.handleUrl}
                        playlist={playlist}
                        nome={this.props.nome}
                        sobrenome={this.props.sobrenome}
                        turma={this.props.turma}
                        playlistDeleted={this.aPlaylistWasDeleted}
                        /></DivTituloPlaylist>

                        
                    
                    <Musicas
                        nome={this.props.nome}
                        sobrenome={this.props.sobrenome}
                        turma={this.props.turma}
                        id={playlist.id}></Musicas>
                </DivPrincipal>
            )
        })
        return (
            <div>
                {this.criarPlaylist()}
                {listaPlaylists}
            </div>
        )
    }
}
