import React, { Component } from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'

const DivPrincipal = styled.div`
text-align: center;
`

export default class Etapa2 extends Component {
  render() {
    return (
      <DivPrincipal>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <PerguntaAberta pergunta={"5. Qual curso?"}/>
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
        </DivPrincipal>
    )
  }
}
