import React from 'react'
import styled from 'styled-components'

const DivPrincipal = styled.div`
text-align: center;
`

export default function PerguntaOpcoes(props) {
  return (
    <DivPrincipal>
        <h3>{props.pergunta}</h3>
        <select>
            <option value={props.opcoes[0]}>{props.opcoes[0]}</option>
            <option value={props.opcoes[1]}>{props.opcoes[1]}</option>
            <option value={props.opcoes[2]}>{props.opcoes[2]}</option>
            <option value={props.opcoes[3]}>{props.opcoes[3]}</option>
            </select>
    </DivPrincipal>
  )
}
