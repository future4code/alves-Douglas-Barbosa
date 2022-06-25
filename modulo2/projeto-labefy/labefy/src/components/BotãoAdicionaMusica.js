import React, { Component } from 'react'
import axios from 'axios'
import TelaLogado from './TelaLogado'

export default class BotãoAdicionaMusica extends Component {

    iconAddMusic = () => {
        if (this.props.adicionarMusica === false) {
            return <button
                onClick={this.props.changeStateAddMusic}>+</button>
        } else {
            return <div>
                <h4>Adicione uma musica <button
                    onClick={this.props.changeStateAddMusic}>-</button></h4>
                <label>
                    <p>Nome da musica:</p>
                    <input
                        value={this.props.nomeMusica}
                        onChange={this.props.handleNomeMusica}
                    ></input>
                    <p>Artista:</p>
                    <input
                        value={this.props.nomeArtista}
                        onChange={this.props.handleNomeArtista}
                    ></input>
                    <p>Url:</p>
                    <input
                        value={this.props.inputUrl}
                        onChange={this.props.handleUrl}
                    ></input>
                    <button
                        onClick={() => this.apiAdicionaMusica(this.props.playlist.id)}>Enviar</button>
                </label>
            </div>
        }

    }

    apiAdicionaMusica = (id) => {
        const nome = this.props.nome
        const sobrenome = this.props.sobrenome
        const turma = this.props.turma

        const body = {
            name: this.props.nomeMusica,
            artist: this.props.nomeArtista,
            url: this.props.inputUrl
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
        <TelaLogado
        apiAdicionaMusica={this.apiAdicionaMusica}></TelaLogado>
        return (
            <div>{this.iconAddMusic()}</div>
        )
    }
}
