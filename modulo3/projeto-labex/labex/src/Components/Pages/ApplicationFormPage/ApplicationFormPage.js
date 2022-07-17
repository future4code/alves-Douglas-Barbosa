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
        alert('Application sent successfully')
        
      })
      .catch((err) => alert(err))
  }

  return (
    <>
      <HeaderLogin />
      <MainContainer>
        <ContainerLogin>
          <form onSubmit={submitTripApplication}>
            <StyledLogin>Signup to a out of space trip! </StyledLogin>
            <ContainerInputs>
              <PasswordP>Choose your trip</PasswordP>

              <StyledSelect
                name='tripChoice'
                id={"select-trip"}
                onChange={onChangeTripChoice}
                required
                >
                <option
                  value={""}>
                  Nenhum
                </option>
                {tripOptions}
              </StyledSelect>

              <PasswordP>Name</PasswordP>
              <TextField
                name='name'
                id="outlined-basic"
                variant="outlined"
                value={form.name} 
                onChange={onChange}
                required
                placeholder='Name'/>
              <PasswordP>Age</PasswordP>
              <TextField
                name='age'
                id="outlined-basic"
                variant="outlined"
                type='number'
                value={form.age}
                onChange={onChange}
                required
                placeholder='Age'/>
              <PasswordP>Application Text</PasswordP>
              <TextField
                name='applicationText'
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                value={form.applicationText}
                onChange={onChange}
                required
                placeholder='Application Text'
              />
              <PasswordP>Profession</PasswordP>
              <TextField
                name='profession'
                id="outlined-basic"
                variant="outlined"
                value={form.profession} 
                onChange={onChange}
                required
                placeholder='Profession'/>
              <PasswordP>country</PasswordP>
              {CountrySelects(onChange)}
              <ContainerButton>
                <Button variant="contained" margin='normal' onClick={()=> goToHomePage(navigate)}>Back</Button>
                <Button type='submit' variant="contained" margin='normal'>Sign Up</Button>
              </ContainerButton>
            </ContainerInputs>
          </form>
        </ContainerLogin>
      </MainContainer>
    </>
  )
}