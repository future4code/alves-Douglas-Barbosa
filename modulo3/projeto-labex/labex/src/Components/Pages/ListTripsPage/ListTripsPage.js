import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardTrips from '../../CardTrips/CardTrips';
import Header from '../../Header/Header';
import { ButtonStyled, DisplayTrips, H1TripsList, MainContainer } from './Styled';
import { goToListApplication } from '../../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


export default function ListTripsPage() {
    const [trips, setTrips] = useState()
    const navigate = useNavigate()

    // const getTrips = () => {
    //     axios
    //     .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips')
    //     .then((res) => console.log(res.data.trips))
    //     .catch((err) => alert(err.response))
    // }

    useEffect(() => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips')
        .then((res) => setTrips(res.data.trips))
        .catch((err) => alert(err.response))
    }, []);

  return (
    <MainContainer>
        <Header />
        <DisplayTrips>
        <H1TripsList>Travel's List</H1TripsList>
        <ButtonStyled onClick={()=>goToListApplication(navigate)}>Sign Up</ButtonStyled>
        {trips?.map((trip) => {
            return <CardTrips 
            key={trip.id}
            id={trip.id}
            name={trip.name}
            planet={trip.planet}
            date={trip.date}
            description={trip.description}
            duration={trip.durationInDays}/>
        })}
        </DisplayTrips>
    </MainContainer>
  )
}
