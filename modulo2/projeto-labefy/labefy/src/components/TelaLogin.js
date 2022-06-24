import React, { Component } from 'react'
import styled from 'styled-components'

export default class TelaLogin extends Component {

    render() {

        return (
            <div>
                <h1>Login</h1>
                <label>
                    <p>Nome: </p>
                    <input
                        value={this.props.nome}
                        onChange={this.props.handleNome} />
                    <p>Sobrenome: </p>
                    <input
                        value={this.props.sobrenome}
                        onChange={this.props.handleSobrenome} />
                    <p>Turma</p>
                    <input
                        value={this.props.turma}
                        onChange={this.props.handleTurma} />
                </label>
                <button
                onClick={this.props.handleLogin}>
                    Logar
                </button>
            </div>
        )
    }
}

