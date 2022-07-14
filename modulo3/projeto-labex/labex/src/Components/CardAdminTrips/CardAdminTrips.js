import React from 'react'
import { ContainerCard } from './Styled'
import Trash from '../Assets/trash.svg'
import Dots from '../Assets/three-dots.svg'
import { ContainerButtons } from '../CardTrips/Styled'
import { goToTripDetailsPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function CardAdminTrips(props) {
    const navigate = useNavigate()
  return (
    <ContainerCard>
    <p>Name: {props.name}</p>
    <ContainerButtons>
    <img src={Dots} onClick={()=> goToTripDetailsPage(navigate, props.id)} />
    <img src={Trash} />
    </ContainerButtons>
    </ContainerCard>
  )
}
