import React, { Component } from 'react'
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'
import styled from 'styled-components'

const DivPrincipal = styled.div`
text-align: center;
`

export default class App extends Component {
  state = {
    etapa: 1,
    ensino: ""
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 mudar={this.mudarEnsinoMedio}/>
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />

    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1})
  }

  irParaProximaEtapaDesafio = () => {
    if (this.state.ensino === "medio") {
      this.setState({ etapa: this.state.etapa + 2 })
    } else {
      this.setState({ etapa: this.state.etapa + 1 })
    }
  }

  mudarEnsinoMedio = () => {
    this.setState({ ensino: "medio" })
    console.log("oi")
}

mudarEnsinoSuperior = () => {
    this.setState({ ensino: "superior" })
}

  exibeBotão = () => {
    if (this.state.etapa < 4) {
      return <button onClick={this.irParaProximaEtapaDesafio}>Proxima etapa</button>
    } else {
      <p>xD</p>
    }
  }


  render() {
    return (
      <DivPrincipal>
        {this.renderizaEtapa()}
        <br />
        {this.exibeBotão()}
      </DivPrincipal>
    )
  }
}


