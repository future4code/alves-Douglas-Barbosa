import React, { Component } from 'react'
import styled from 'styled-components'

const DivPrincipal = styled.div`
display: grid;
justify-content: center;
justify-items: center;
margin-bottom: 150px;
`

const Input = styled.input`
appearance: none;
background-image: none;
border: 0px none;
display: block;
font-size: 1rem;
line-height: 1.5rem;
font-weight: 400;
width: 100%;
box-sizing: border-box;
margin-top: 0px;
margin-bottom: 0px;
border-radius: 4px;
background-color: var(--background-base,#ffffff);
box-shadow: inset 0 0 0 1px var(--essential-subdued,#878787);
color: var(--text-base,#000000);
`
const DescriçãoInputs = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  padding-bottom: 5px;
`

const DescriçãoInputsMeio = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  padding-bottom: 5px;
  padding-top: 5px;
`

const BotãoLogin = styled.button`
position: relative;
background-color: var(--background-base,#e74c3c);
color: var(--text-base,#000000);
border-radius: 450px;
font-size: inherit;
padding: 12px 28px;
border: 0;
margin-top: 12px;

:hover {
    transform: scale(1.04);
}
`


export default class TelaLogin extends Component {

    render() {

        return (
            <DivPrincipal>
                
                <label>
                    <DescriçãoInputs>Nome </DescriçãoInputs>
                    <Input
                        value={this.props.nome}
                        onChange={this.props.handleNome} />
                    <DescriçãoInputsMeio>Sobrenome </DescriçãoInputsMeio>
                    <Input
                        value={this.props.sobrenome}
                        onChange={this.props.handleSobrenome} />
                    <DescriçãoInputsMeio>Turma </DescriçãoInputsMeio>
                    <Input
                        value={this.props.turma}
                        onChange={this.props.handleTurma} />
                </label>
                <BotãoLogin
                onClick={this.props.handleLogin}>
                    <DescriçãoInputs>Login</DescriçãoInputs>
                </BotãoLogin>
            </DivPrincipal>
        )
    }
}

