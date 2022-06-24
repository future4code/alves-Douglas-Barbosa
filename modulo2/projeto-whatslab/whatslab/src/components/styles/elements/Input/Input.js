import styled from 'styled-components'
import React, { Component } from 'react'
import FooterInput from './FooterInput'
import MainContainer from '../MainContainer/MainContainer'

const ContainerMensagens = styled.main`
display: flex;
flex-direction: column-reverse;
justify-content: flex-start;
width: 29.9vw;
overflow: auto;
`

const ConteudoUsuario = styled.span`
font-size: 18px;
font-weight: 600;
color: #44bd32;
`

const ConteudoMensagem = styled.p`
margin: 10px;
font-size: 14px;
border-radius: 5px;
color: #3d3d3d;
padding-left: 2px;
`

const InputNome = styled.input`
height: 4.4vh;
width: 5vw;
font-size: 14px;
`

const InputMensagem = styled.input`
width: 20vw;
font-size: 14px;

`

const InputButton = styled.button`
width: 5.2vw;
font-size: 16px;
`

class Input extends Component {
  state = {
    
    usuario: [
      {
        nome: '',
        mensagem: ''
      }
    ]
    
    }
  
  mandarMensagem = () => {
  
    const novaMensagem = {
        nome: this.state.nome,
        mensagem: this.state.mensagem
    };

    const novaMensagens = [...this.state.usuario, novaMensagem];

    this.setState({ usuario: novaMensagens})

  }

  onChangeInputNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  onChangeInputMensagem = (event) => {
    this.setState({ mensagem: event.target.value })
  }

  thisResetInput = (e) => {
    this.setState({ nome: '',
                    mensagem:'' })
  }

  pressEnterToSend = (e) => {
    if(e.keyCode === 13){
      this.mandarMensagem();
    }
  }

    render() {
        const ListaDeMensagens = this.state.usuario.map((usuario, indice) => {
            return <ConteudoMensagem id={indice}> 
                    <ConteudoUsuario>{usuario.nome}</ConteudoUsuario> <br/> <br/>
                    {usuario.mensagem}
            </ConteudoMensagem>
        })

    return ( 
      <>
      <ContainerMensagens>
      {ListaDeMensagens}
      </ContainerMensagens>
      <FooterInput>
        <InputNome onKeyDown={this.pressEnterToSend} value={this.state.usuario.nome} onChange={this.onChangeInputNome} placeholder={"Username"} />
        <InputMensagem onKeyDown={this.pressEnterToSend} value={this.state.usuario.mensagem} onChange={this.onChangeInputMensagem} placeholder={"Mensagem"} />
        <InputButton onKeyDown={this.pressEnterToSend} onClick={this.mandarMensagem}>Enviar</InputButton>
      </FooterInput> </>
    )
  }
}


export default Input