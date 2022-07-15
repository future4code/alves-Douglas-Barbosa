import React from 'react'
import { ContainerCard, StyledInfos, StyledTitles, Buttons } from './Styled'
import Trash from '../Assets/trash.svg'
import Dots from '../Assets/three-dots.svg'
import { ContainerButtons } from '../CardTrips/Styled'
import { goToTripDetailsPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CardAdminTrips(props) {
    const navigate = useNavigate()

    const deleteTrip = (id) => {
      const token = localStorage.getItem('token');
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips/${id}`,
      {
        headers: 
        {
          auth: token
        }
      })
      .then( res => {
        alert('Trip deletada com sucesso');
        props.getTrip()
      }) 
      .catch( erro => alert('Não foi possível deletar a trip clicada'))
    }
  return (
    <ContainerCard>
    <StyledTitles>Trip Name:</StyledTitles><StyledInfos>{props.name}</StyledInfos>
    <ContainerButtons>
    <Buttons src={Dots} onClick={()=> goToTripDetailsPage(navigate, props.id)} />
    <Buttons  src={Trash} onClick={()=>deleteTrip(props.id)}/>
    </ContainerButtons>
    </ContainerCard>
  )
}
