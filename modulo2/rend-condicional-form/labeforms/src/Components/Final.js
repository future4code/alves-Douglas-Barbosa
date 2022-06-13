import React, { Component } from 'react'
import styled from 'styled-components'

const DivPrincipal = styled.div`
text-align: center;
`

export default class Final extends Component {
  render() {
    return (
     <DivPrincipal>
        <h1>O FORMULARIO ACABOU!</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
     </DivPrincipal>
    )
  }
}
