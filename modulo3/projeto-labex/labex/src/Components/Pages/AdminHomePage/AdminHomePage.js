import React, { useState, useEffect } from 'react'
import { ProtectedPage } from '../../../hooks/ProtectedPage'
import HeaderLogin from '../LoginPage/HeaderLogin/HeaderLogin'
import { MainContainer, StyledH2 } from './styled'
import axios from 'axios'
import CardAdminTrips from '../../CardAdminTrips/CardAdminTrips'

export default function AdminHomePage() {
    const [trips, setTrips] = useState()
    ProtectedPage()

    useEffect(() => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips')
        .then((res) => setTrips(res.data.trips))
        .catch((err) => alert(err.response))
    }, []);

    const CardsAdmin = trips?.map((trip) => {
      return <CardAdminTrips
      key={trip.id}
      name={trip.name}
      id={trip.id} />
    })
  return (
    <>
    <HeaderLogin />
    <MainContainer>
        <StyledH2>Admin HomePage</StyledH2>
        <br />
        <div>
        <button>voltar</button>
        <button>criar viagens</button>
        <button>logout</button>
        </div>
        {CardsAdmin}
        </MainContainer>
    </>
  )
}
