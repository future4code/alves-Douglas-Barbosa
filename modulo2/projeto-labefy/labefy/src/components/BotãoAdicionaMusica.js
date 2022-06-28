import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Botão = styled.button`
height: 23px;
width: 20px;
`
const Input = styled.input`
appearance: none;
background-image: none;
border: 0px none;
display: block;
font-size: 1rem;
line-height: 1.5rem;
font-weight: 400;
width: 150px;
box-sizing: border-box;
margin-top: 0px;
margin-bottom: 0px;
border-radius: 4px;
background-color: var(--background-base,#ffffff);
box-shadow: inset 0 0 0 1px var(--essential-subdued,#878787);
color: var(--text-base,#000000);
`
const DescriçãoInputs = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  padding-bottom: 5px;
`

const DescriçãoInputsMeio = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  padding-bottom: 5px;
  padding-top: 5px;
`

export default class BotãoAdicionaMusica extends Component {

    iconAddMusic = () => {
        if (this.props.adicionarMusica === false) {
            return <Botão
                onClick={this.props.changeStateAddMusic}>+</Botão>
        } else {
            return <div>
                <h4>Adicione uma musica <Botão
                    onClick={this.props.changeStateAddMusic}>-</Botão></h4>
                <label>
                    <DescriçãoInputs>Nome da musica:</DescriçãoInputs>
                    <Input
                        value={this.props.nomeMusica}
                        onChange={this.props.handleNomeMusica}
                    ></Input>
                    <DescriçãoInputs>Artista:</DescriçãoInputs>
                    <Input
                        value={this.props.nomeArtista}
                        onChange={this.props.handleNomeArtista}
                    ></Input>
                    <DescriçãoInputs>Url:</DescriçãoInputs>
                    <Input
                        value={this.props.inputUrl}
                        onChange={this.props.handleUrl}
                    ></Input>
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
                alert("Musica adicionada com sucesso!")
                this.props.changeStateAddMusic()
                this.props.limparInputs()

            })
            .catch((erro) => {
                console.log(erro.response)
            })
    }


    render() {

        return (
            <div>{this.iconAddMusic()}</div>
        )
    }
}
