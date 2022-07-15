import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProtectedPage } from '../../../hooks/ProtectedPage';
import axios from 'axios';
import HeaderLogin from '../LoginPage/HeaderLogin/HeaderLogin';
import { ContainerCard, ContainerCardApproved, ContainerVazio, DisplayPendingCandidates, H1TripsList, MainContainer, StyledInfos, StyledTitles } from './Styled';
import CardCandidates from '../../CardCandidates/CardCandidates';

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

      const approveCandidate = (idCandidate, valor) => {
        const token = localStorage.getItem('token');

        console.log("token = ",token);
        console.log("ID candidato = ",idCandidate);
        console.log("ID trip = ",trip.id);
        console.log("resposta = ",valor);

        axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips/${trip.id}/candidates/${idCandidate}/decide`,
        {
          "approve": valor
        },
        {
          headers: 
          {
            auth: token
          }
        })
        .then( res => {
          console.log('Deu certo a escolha do candidato', res);
          TripDetails()
        })
        .catch( erro => {
          console.log('Deu errado a escolha do candidato', erro);
        });
      }

      const candidatesList = candidates.map( candidate => {
        return (
          
            <CardCandidates
              name={candidate.name}
              profession={candidate.profession}
              age={candidate.age}
              country={candidate.country}
              text={candidate.applicationText}
              idCandidate={candidate.id}
              approveCandidate={approveCandidate}
            />
        )
      })

      const listaAprovados = approved.map( candidate => {
        console.log(candidate.name)
        return (
          <ContainerCardApproved key={candidate.id}>
           <ul> <StyledTitles>{candidate.name}</StyledTitles></ul>
          </ContainerCardApproved>
        )
      })


  return (
    <MainContainer>
    <HeaderLogin />
    <H1TripsList>Viagem</H1TripsList>
    <ContainerCard>
      <StyledTitles>Nome:</StyledTitles> <StyledInfos>{trip.name}</StyledInfos>
      <StyledTitles>Descrição:</StyledTitles> <StyledInfos>{trip.description}</StyledInfos>
      <StyledTitles>Planeta:</StyledTitles>  <StyledInfos>{trip.planet}</StyledInfos>
        <StyledTitles>Duração (dias):</StyledTitles> <StyledInfos>{trip.durationInDays}</StyledInfos>
        <StyledTitles>Data:</StyledTitles><StyledInfos>{trip.date}</StyledInfos>
        </ContainerCard>
        <H1TripsList>Candidatos Pendentes</H1TripsList>
        <DisplayPendingCandidates>
        {
          candidatesList.lenght !== 0 ? candidatesList : <ContainerCard><StyledTitles>There's no candidates to approve!</StyledTitles></ContainerCard>
        }
        </DisplayPendingCandidates>
        <H1TripsList>Candidatos Aprovados</H1TripsList>
        <DisplayPendingCandidates>
          {
            listaAprovados.lenght !== 0 ? listaAprovados : <ContainerCard><p>A lista de Aprovados está vazia!</p></ContainerCard>
          }
        </DisplayPendingCandidates>
    </MainContainer>
  )
}
