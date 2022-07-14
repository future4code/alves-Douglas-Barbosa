import React from 'react'
import { ContainerCard} from './Styled'

export default function CardTrips (props) {
  return (
    <ContainerCard>
    <p>Name: {props.name}</p>
    <p>Descrição: {props.description}</p>
    <p>Data: {props.date}</p>
    <p>Duração: {props.duration}</p>
    <p>Planeta: {props.planet}</p>
    </ContainerCard>
  )
}
