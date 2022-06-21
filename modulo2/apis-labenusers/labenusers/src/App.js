import React, { Component } from 'react'
import styled from "styled-components";
import axios from "axios";
import Usuarios from './Components/Usuarios';

class App extends Component {
  state = {
    usuarios: [],
    nome: "",
    email: "",
    erro: "",
    busca: "",
    usuarioEncontrado: "",
    tela: false
  }

  componentDidMount() {
    this.pegarUsuarios();
  }

  componentDidUpdate() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "douglas-henrique-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data })
        
      })
      .catch((erro) => {
        this.setState({ erro: erro.response })
      })
  }

  novoNome = (e) => {
    this.setState({ nome: e.target.value })
  }

  novoEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  criaUsuario = () => {
    const novoUsuario = {
      name: this.state.nome,
      email: this.state.email
    };
    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        novoUsuario,
        {
          headers: {
            Authorization: "douglas-henrique-alves"
          }
        }
    ).then((resposta) => {
      resposta.status === 201 && alert("Seu usuario foi criado");
      
    })
    .catch((erro) => {
      alert(erro.response.data.message)
    })
  }

  novaBusca = (e) => {
    this.setState({ busca: e.target.value })
}

pegaUsuario = () => {
   const buscaUsuario = {
    name: this.state.busca,
    email: this.state.busca
   }
   
    axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=",
                buscaUsuario,
                {
                    headers: {
                        Authorization: "douglas-henrique-alves"
                    }
                }
        ).then((resposta) => {
          console.log(resposta)
            this.setState({ usuarioEncontrado: resposta.data.result})
        })
        .catch((erro) => {
            console.log(erro.response)
        })
}

 estadoTela = () => {
  this.setState({tela: !this.state.tela})
 }

 renderizaTela = () => {
  if (this.state.tela === false) {
    return <div><input
    value={this.state.nome}
    onChange={this.novoNome}
    placeholder='nome' />
  <input
    value={this.state.email}
    onChange={this.novoEmail}
    placeholder='email' />
  <button
  onClick={this.criaUsuario}
  >Enviar</button>
  </div>
  } else {
    return <div><h2>Usuarios:</h2>
      {this.state.erro ? (<p>{this.state.erro}</p>) : (this.state.usuarios.map((usuario) => {
    return <Usuarios key={usuario.id} id={usuario.id} usuario={usuario} pegarUsuarios={this.pegarUsuarios}/>
  }))}
      <hr></hr>
    <h2>Procurar usuario</h2>
    <input
        value={this.state.busca}
        onChange={this.novaBusca}
        placeholder="nome exato" />
    <button
    onClick={this.pegaUsuario}
    >Salvar</button>
</div>
  }
 }

  render() {

    return (
      <div>
        <button
        onClick={this.estadoTela}>Trocar de tela</button>
        <br />
        {/* <button
        onClick={this.estadoTela}>Trocar de tela</button>
        <br />
        <input
          value={this.state.nome}
          onChange={this.novoNome}
          placeholder='nome' />
        <input
          value={this.state.email}
          onChange={this.novoEmail}
          placeholder='email' />
        <button
        onClick={this.criaUsuario}
        >Enviar</button>
        
        {this.state.erro ? (<p>{this.state.erro}</p>) : (this.state.usuarios.map((usuario) => {
          return <Usuarios key={usuario.id} id={usuario.id} usuario={usuario} pegarUsuarios={this.pegarUsuarios}/>
        }))}

<hr></hr>
                <h2>Procurar usuario</h2>
                <input
                    value={this.state.busca}
                    onChange={this.novaBusca}
                    placeholder="nome exato" />
                <button
                onClick={this.pegaUsuario}
                >Salvar</button> */}
                {this.renderizaTela()}
      </div>
    )
  }
}

export default App;
