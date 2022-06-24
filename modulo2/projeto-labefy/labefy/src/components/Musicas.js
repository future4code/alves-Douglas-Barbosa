import React, { Component } from 'react'
import axios from 'axios'
import TelaLogado from './TelaLogado'

export default class Musicas extends Component {
    state = {
        musicas: []
    }
    
    componentDidMount(){
        this.pegarMusicas(this.props.id)
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
        this.setState({musicas: res.data.result.tracks})
        console.log(res)

    })
    .catch((erro) => {
        console.log(erro.response)
    })}

  render() {
    

    const listaMusicas = this.state.musicas.map((musica) => {
        return (
            <div
            key={musica.id}>
                <p>{musica.name}</p>
                <p>{musica.artist}</p>
                <p>{musica.url}</p>

            </div>
        )
    })
    return (
      <div>
        {listaMusicas}
      </div>
    )
  }
}
