import axios from "axios";
import React, { Component } from 'react'
import styled from "styled-components";

const ContainerUsuarios = styled.div`
border: 1px solid black;
padding: 10px;
margin-bottom: 20px;
height: 40px;
width: 300px;
display: flex;
justify-content: space-between;
align-items: center;

button {
    height: 22px;
}


`

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

    removerUsuario = (id) => {
       const confirmBox = window.confirm(
        "Voce quer realmente remover esse usuario?"
       )
       if (confirmBox === true){
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                {
                    headers: {
                        Authorization: "douglas-henrique-alves"
                    }
                }
            )
            .then((res) => {
                alert("Usuario deletado com sucesso")
            })
            .catch((error) => {
                alert(error.response.data)
            })
       }

    
    }

    render() {
        return (
            <ContainerUsuarios>

                <h3>{this.props.usuario.name}</h3>
                <button
                    onClick={() => this.removerUsuario(this.props.usuario.id)}>
                    X</button>
            </ContainerUsuarios>
        )
    }
}
