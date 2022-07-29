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
      .then(res => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch(erro => {
        alert(erro);
      });
  }

  useEffect(() => {
    TripDetails();
  }, [])

  const approveCandidate = (idCandidate, valor) => {
    const token = localStorage.getItem('token');
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
      .then(res => {
        TripDetails()
      })
      .catch(erro => {
      
      });
  }

  const candidatesList = candidates.map(candidate => {
    return (

      <CardCandidates
        key={candidate.id}
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

  const listaAprovados = approved.map(candidate => {
    return (
      <ContainerCardApproved key={candidate.id}>
        <ul> <StyledTitles>{candidate.name}</StyledTitles></ul>
      </ContainerCardApproved>
    )
  })

  const renderCandidates = () => {
    if (candidatesList.length >= 1) {
      return candidatesList
    } else if (candidatesList.length === 0) {
      return <ContainerCard><StyledTitles>There's no candidates to approve!</StyledTitles></ContainerCard>
    }
  }

  const renderApproveds = () => {
    if (listaAprovados.length >= 1) {
      return listaAprovados
    } else if (listaAprovados.length === 0) {
      return <ContainerCard><StyledTitles>Approved's list is empty!

      </StyledTitles></ContainerCard>
    }
  }
  return (
    <MainContainer>
      <HeaderLogin />
      <H1TripsList>Trip</H1TripsList>
      <ContainerCard>
        <StyledTitles>Trip Name:</StyledTitles> <StyledInfos>{trip.name}</StyledInfos>
        <StyledTitles>Description:</StyledTitles> <StyledInfos>{trip.description}</StyledInfos>
        <StyledTitles>Planet:</StyledTitles>  <StyledInfos>{trip.planet}</StyledInfos>
        <StyledTitles>Duration (days):</StyledTitles> <StyledInfos>{trip.durationInDays}</StyledInfos>
        <StyledTitles>Date:</StyledTitles><StyledInfos>{trip.date}</StyledInfos>
      </ContainerCard>
      <H1TripsList>Pending Candidates</H1TripsList>
      <DisplayPendingCandidates>
        {renderCandidates()}
      </DisplayPendingCandidates>
      <H1TripsList>Approved Candidates</H1TripsList>
      <DisplayPendingCandidates>
        {renderApproveds()}
      </DisplayPendingCandidates>
    </MainContainer>
  )
}
