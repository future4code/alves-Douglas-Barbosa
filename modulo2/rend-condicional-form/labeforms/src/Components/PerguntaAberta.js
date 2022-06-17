import React from 'react'
import styled from 'styled-components'

const DivPrincipal = styled.div`
text-align: center;
`


export default function PerguntaAberta(props) {
  return (
    <DivPrincipal>
       <h3>{props.pergunta}</h3>
        <input></input>
    </DivPrincipal>
  )
}
