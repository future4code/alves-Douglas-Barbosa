import React, { useState, useEffect } from 'react'
import { ProtectedPage } from '../../../hooks/ProtectedPage'
import HeaderLogin from '../LoginPage/HeaderLogin/HeaderLogin'
import { ButtonStyled, DivContainerButtons, MainContainer, StyledH2 } from './styled'
import axios from 'axios'
import CardAdminTrips from '../../CardAdminTrips/CardAdminTrips'
import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToHomePage, goToLoginPage } from '../../../routes/Coordinator'

export default function AdminHomePage() {
    const [trips, setTrips] = useState()
    const navigate = useNavigate()
    ProtectedPage()

    useEffect(() => {
        getTrip()
    }, []);

    const getTrip = () => {
      axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips')
        .then((res) => setTrips(res.data.trips))
        .catch((err) => alert(err.response))
    }

    const CardsAdmin = trips?.map((trip) => {
      return <CardAdminTrips
      key={trip.id}
      name={trip.name}
      id={trip.id} 
      getTrip={getTrip}/>
    })

    const clearToken = (navigate) => {
      localStorage.clear('token')
      goToLoginPage(navigate)
  }
  return (
    <>
    <HeaderLogin />
    <MainContainer>
        <StyledH2>Admin Dashboard</StyledH2>
        <br />
        <DivContainerButtons>
        <ButtonStyled onClick={()=>goToHomePage(navigate)}>Back</ButtonStyled>
        <ButtonStyled onClick={()=>goToCreateTripPage(navigate)}>Create Trips</ButtonStyled>
        <ButtonStyled onClick={()=>clearToken(navigate)}>Logout</ButtonStyled>
        </DivContainerButtons>
        {CardsAdmin}
        </MainContainer>
    </>
  )
}
