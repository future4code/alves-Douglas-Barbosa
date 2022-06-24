import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Musicas from './Musicas'
import BotãoAdicionaMusica from './BotãoAdicionaMusica'

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
                <div
                    key={playlist.id}>
                    <h1>{playlist.name} <button
                        onClick={() => this.deletarPlaylist(playlist.id)}>x</button>
                        </h1>
                        {this.iconAddMusic(playlist.id)}

                        
                    
                    <Musicas
                        nome={this.props.nome}
                        sobrenome={this.props.sobrenome}
                        turma={this.props.turma}
                        id={playlist.id}></Musicas>
                </div>
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
