import React, { Component } from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaOpcoes from './PerguntaOpcoes'
import PerguntaOpcoesClasse from './PerguntaOpcoesClasse'

const DivPrincipal = styled.div`
text-align: center;
`

export default class Etapa1 extends Component {
  render() {
    return (
      <DivPrincipal>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>
        <PerguntaAberta pergunta={"2. Qual sua idade?"}/>
        <PerguntaAberta pergunta={"3. Qual seu email?"}/>
        <PerguntaOpcoesClasse funcao={this.props.mudar}
        pergunta={"4. Qual a sua escolaridade?"}
        opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
          
        />
        </DivPrincipal>
    )
  }
}
