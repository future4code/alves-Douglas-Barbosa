import React, { Component } from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'

const DivPrincipal = styled.div`
text-align: center;
`

export default class Etapa3 extends Component {
  render() {
    return (
        <DivPrincipal>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
        <PerguntaAberta pergunta={"6. Você fez algum curso complementar"}/>
        </DivPrincipal>
    )
  }
}
