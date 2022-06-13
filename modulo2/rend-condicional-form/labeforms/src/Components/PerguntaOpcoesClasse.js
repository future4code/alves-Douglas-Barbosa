import React, { Component } from 'react'
import styled from 'styled-components'

const DivPrincipal = styled.div`
text-align: center;
`

export default class PerguntaOpcoesClasse extends Component {


    verificaEnsino = () => {
        if (this.state.ensino === "medio") {
            this.setState({ etapa: this.state.etapa + 2 })
        } else {
            this.setState({ etapa: this.state.etapa + 1 })
        }
    }

    mudar = () => {
        let resp = this.props.mudarEnsinoMedio(this.setState({ ensino: "medio" }))
        console.log(resp)
        console.log("oi")
    }

    mudarSuperior = () => {
        let rasp = this.props.mudarEnsinoSuperior(this.setState({ ensino: "superior"}))
        console.log(rasp)
        console.log("oi")
    }


    render() {
        return (
            <DivPrincipal>
                <h3>{this.props.pergunta}</h3>
                <select>
                    <option onClick={this.mudar} value={this.props.opcoes[0]}>{this.props.opcoes[0]}</option>
                    <option onClick={this.mudar} value={this.props.opcoes[1]}>{this.props.opcoes[1]}</option>
                    <option onClick={this.mudarSuperior} value={this.props.opcoes[2]}>{this.props.opcoes[2]}</option>
                    <option onClick={this.mudarSuperior} value={this.props.opcoes[3]}>{this.props.opcoes[3]}</option>
                </select>
            </DivPrincipal>
        )
    }
}
