import React, { Component } from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaOpcoes from './PerguntaOpcoes'
import PerguntaOpcoesClasse from './PerguntaOpcoesClasse'

const DivPrincipal = styled.div`
text-align: center;
`

export default class Etapa1 extends Component {
    state = {
        nome: "",
        idade: "",
        email: "",
    }
  render() {
    return (
      <DivPrincipal>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntaAberta value={this.state.nome} pergunta={"1. Qual o seu nome?"}/>
        <PerguntaAberta value={this.state.idade} pergunta={"2. Qual sua idade?"}/>
        <PerguntaAberta value={this.state.email} pergunta={"3. Qual seu email?"}/>
        <PerguntaOpcoesClasse 
        pergunta={"4. Qual a sua escolaridade?"}
        opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
          mudarEnsinoMedio={this.props.mudarEnsinoMedio}
          mudarEnsinoSuperior={this.props.mudarEnsinoSuperior}
          
        />
        </DivPrincipal>
    )
  }
}
