import axios from "axios";
import React, { Component } from 'react'

export default class Usuarios extends Component {
    state = {
        busca: "",
        usuarioEncontrado: "",
        usuarios: [],
    }

    componentDidMount() {
        this.props.pegarUsuarios();
    }

    novaBusca = (e) => {
        this.setState({ busca: e.target.value })
    }

    // pegarUsuarios = () => {
    //     axios
    //       .get(
    //         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //         {
    //           headers: {
    //             Authorization: "douglas-henrique-alves"
    //           }
    //         }
    //       )
    //       .then((resposta) => {
    //         console.log(resposta.data)
    //         this.setState({ usuarios: resposta.data })

    //       })
    //       .catch((erro) => {
    //         console.log(erro)
    //         this.setState({ erro: erro.response })
    //       })
    //   }

    // pegaUsuario = () => {
    //    const buscaUsuario = {
    //     name: this.state.busca,
    //     email: this.state.busca
    //    }

    //     axios
    //         .get(
    //             "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=",
    //                 buscaUsuario,
    //                 {
    //                   headers: {
    //                     Authorization: "douglas-henrique-alves"
    //                   }
    //                 }
    //         ).then((resposta) => {
    //             this.setState({ usuarios: resposta.data.result})
    //         })
    //         .catch((erro) => {
    //             console.log(erro.response)
    //         })
    // }

    removerUsuario = () => {
        const id = this.props.usuario.id

        axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "douglas-henrique-alves"
                }
            }
        )
    }

    render() {
        return (
            <main>

                <h3>{this.props.usuario.name}</h3>
                <button
                onClick={this.removerUsuario}>
                X</button>
            </main>
        )
    }
}
