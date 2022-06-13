import React, { Component } from 'react'
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'
import styled from 'styled-components'
import PerguntaOpcoesClasse from './Components/PerguntaOpcoesClasse'

const DivPrincipal = styled.div`
text-align: center;
justify-content: center;
align-items: center;
background-color: #f3a683;
height: 50vh;
display: block;
`
const Botão = styled.button`
text-align: center;
justify-content: center;
padding: 10px;
color: #f7d794;
background-color: #303952;
border: 2px;
border-radius: 8px;
`

const Background = styled.div`
height: 95vh;
width: 100vw;
background-color: #f3a683;
`

export default class App extends Component {
  state = {
    etapa: 1,
    ensino: ""
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 mudarEnsinoMedio={this.mudarEnsinoMedio} mudarEnsinoSuperior={this.mudarEnsinoSuperior}/>
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />

    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  irParaProximaEtapaDesafio = () => {
    if (this.state.ensino === "medio") {
      this.setState({ etapa: 3 })
    } else {
      this.setState({ etapa: this.state.etapa + 1 })
    }
  }

  irParaUltimaPagina = () => {
    this.setState({ etapa: 4 })
  }

  mudarEnsinoMedio = () => {
    this.setState({ ensino: "medio" })
    console.log("oi")
  }

  mudarEnsinoSuperior = () => {
    this.setState({ ensino: "superior" })
    console.log("oi")
  }

  // exibeBotão = () => {
  //   switch  {
  //     case (this.state.etapa === 1 && this.state.ensino === "nada"):
  //       return <button onClick={this.irParaProximaEtapaDesafio}>Proxima etapa</button>
  //     case (this.state.etapa === 1 && this.state.ensino === "medio"):
  //       return <button onClick={this.irParaProximaEtapaDesafio}>Proxima etapa</button>
  //     case (this.state.etapa === 1 && this.state.ensino === "superior"):
  //       return <button onClick={this.irParaProximaEtapaDesafio}>Proxima etapa</button>
  //     case (this.state.etapa === 3 && this.state.ensino === "medio"):
  //       return <button>Finalizar</button>
  //     case (this.state.etapa === 2 && this.state.ensino === "superior"):
  //       return <button>Finalizar</button>

  //   }
  // }
  // (this.state.etapa < 4)
  // return <button onClick={this.irParaProximaEtapaDesafio}>Proxima etapa</button>

  exibeBotão = () => {
    if (this.state.etapa === 3 && this.state.ensino === "medio") {
      return <Botão onClick={this.irParaUltimaPagina}>Finalizar</Botão>
    } else if (this.state.etapa === 2 && this.state.ensino !== "medio"){
      return <Botão onClick={this.irParaUltimaPagina}>Finalizar</Botão>
    } else if (this.state.etapa < 4) {
      return <Botão onClick={this.irParaProximaEtapaDesafio}>Proxima etapa</Botão>
    }
  }

  render() {
    <PerguntaOpcoesClasse mudarEnsinoMedio={this.mudarEnsinoMedio} mudarEnsinoSuperior={this.mudarEnsinoSuperior} />
    return (
      <Background>
      <DivPrincipal>
        {this.renderizaEtapa()}
        <br />
        {this.exibeBotão()}
      </DivPrincipal></Background>
    )
  }
}


