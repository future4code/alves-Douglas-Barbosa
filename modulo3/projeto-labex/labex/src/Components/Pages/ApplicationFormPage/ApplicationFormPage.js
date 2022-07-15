import React, { useState, useEffect } from 'react'
import { ContainerButton, ContainerInputs, ContainerLogin, MainContainer, PasswordP, StyledLogin, StyledSelect } from './Styled'
import HeaderLogin from '../LoginPage/HeaderLogin/HeaderLogin';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import useForm from '../../../hooks/useForm';
import CountrySelects from '../../CountrySelects/CountrySelects';
import { goToHomePage } from '../../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [trips, setTrips] = useState()
  const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
  const [tripChoice, setTripChoice] = useState('')
  const navigate = useNavigate()

  const onChangeTripChoice = (event) => {
    setTripChoice(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips')
      .then((res) => setTrips(res.data.trips))
      .catch((err) => alert(err.response))
  }, []);

  const tripOptions = trips?.map((trip) => {
    return (
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>
    )
  })

  const submitTripApplication = (event) => {
    const id = tripChoice
    //
    event.preventDefault()
    cleanFields()

    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips/${id}/apply`, form)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err.response))
  }

  console.log(form)
  return (
    <>
      <HeaderLogin />
      <MainContainer>
        <ContainerLogin>
          <form onSubmit={submitTripApplication}>
            <StyledLogin>Inscreva-se para uma viagem </StyledLogin>
            <ContainerInputs>
              <PasswordP>Escolha a viagem</PasswordP>

              <StyledSelect
                name='tripChoice'
                id={"select-trip"}
                onChange={onChangeTripChoice}
                required >
                <option
                  value={""}>
                  Nenhum
                </option>
                {tripOptions}
              </StyledSelect>

              <PasswordP>Nome</PasswordP>
              <TextField
                name='name'
                id="outlined-basic"
                variant="outlined"
                value={form.name} 
                onChange={onChange}
                required/>
              <PasswordP>Idade</PasswordP>
              <TextField
                name='age'
                id="outlined-basic"
                variant="outlined"
                type='number'
                value={form.age}
                onChange={onChange}
                required />
              <PasswordP>Texto de Candidatura</PasswordP>
              <TextField
                name='applicationText'
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                value={form.applicationText}
                onChange={onChange}
                required
              />
              <PasswordP>Profissão</PasswordP>
              <TextField
                name='profession'
                id="outlined-basic"
                variant="outlined"
                value={form.profession} 
                onChange={onChange}
                required/>
              <PasswordP>Pais</PasswordP>
              {CountrySelects(onChange)}
              <ContainerButton>
                <Button variant="contained" margin='normal' onClick={()=> goToHomePage(navigate)}>Voltar</Button>
                <Button variant="contained" margin='normal' onClick={submitTripApplication}>Login</Button>
              </ContainerButton>
            </ContainerInputs>
          </form>
        </ContainerLogin>
      </MainContainer>
    </>
  )
}