import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import BotãoAdicionaMusica from './BotãoAdicionaMusica'

const ContainerPrincipal = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
const EstilizaçãoMusicas = styled.span`
font-weight: 600;
font-size: 1.2rem;
color: #2f3640;
`
const EstilizaçãoMusicasNames = styled.span`
font-weight: 800;
font-size: 1.2rem;
color: black;
`
const Player = styled.audio`
  display: block;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 10px;

  @media (max-width: 925px) {
    width: 50px;
  }
`

const Pstilizado = styled.p`
display: flex;
align-content: center;
align-items: center;
`

export default class Musicas extends Component {
    state = {
        musicas: []
    }

    componentDidMount() {
        this.pegarMusicas(this.props.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.musicas !== this.state.musicas) {
            this.pegarMusicas(this.props.id)
        } else {
            console.log("else")
        }
    }

    pegarMusicas = (id) => {
        const nome = this.props.nome
        const sobrenome = this.props.sobrenome
        const turma = this.props.turma
        console.log(this.props)

        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
                {
                    headers: {
                        Authorization: `${nome}-${sobrenome}-${turma}`
                    }
                }
            )
            .then((res) => {
                this.setState({ musicas: res.data.result.tracks })
                console.log(res)

            })
            .catch((erro) => {
                console.log(erro.response)
            })
    }

    render() {
        


        const listaMusicas = this.state.musicas.map((musica) => {
            return (
                <ContainerPrincipal
                    key={musica.id}>
                    <Pstilizado><EstilizaçãoMusicas>Musica:<EstilizaçãoMusicasNames>⠀{musica.name}</EstilizaçãoMusicasNames></EstilizaçãoMusicas></Pstilizado>
                    <Pstilizado><EstilizaçãoMusicas>Artista:<EstilizaçãoMusicasNames>⠀{musica.artist}</EstilizaçãoMusicasNames></EstilizaçãoMusicas></Pstilizado>
                    <Pstilizado><EstilizaçãoMusicas>Play!</EstilizaçãoMusicas></Pstilizado><Player
                        controls
                        src={musica.url}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </Player>
                    <br></br>

                </ContainerPrincipal>
            )
        })
        return (
            <div>
                {listaMusicas}
            </div>
        )
    }
}
