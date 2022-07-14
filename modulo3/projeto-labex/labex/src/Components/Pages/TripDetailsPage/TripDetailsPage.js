import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProtectedPage } from '../../../hooks/ProtectedPage';
import axios from 'axios';

export default function TripDetailsPage() {
    const params = useParams();
    const navigate = useNavigate();
    ProtectedPage();
  
    const [trip, setTrip] = useState({});
    const [candidates, setCandidates] = useState([]);
    const [approved, setApproved] = useState([]);

    const TripDetails = () => {
        const token = localStorage.getItem('token');
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trip/${params.id}`,
        {
          headers: 
          {
            auth: token
          }
        })
        .then( res => {
          console.log(res.data.trip);
          setTrip(res.data.trip);
          setCandidates(res.data.trip.candidates);
          setApproved(res.data.trip.approved);
        })
        .catch( erro => {
          console.log('Deu errado os detalhes da viagem', erro);
        });
      }

      useEffect(()=>{
        TripDetails();
      },[])

  return (
    <div>TripDetailsPage</div>
  )
}
