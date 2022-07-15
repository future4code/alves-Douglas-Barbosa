import React, { useState, useEffect } from 'react'
import { ContainerButton, ContainerInputs, ContainerLogin, MainContainer, PasswordP, StyledLogin, StyledSelect } from './styled'
import HeaderLogin from '../LoginPage/HeaderLogin/HeaderLogin';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import useForm from '../../../hooks/useForm';
import CountrySelects from '../../CountrySelects/CountrySelects';
import { goToAdminHomePage, goToHomePage } from '../../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: '' })
    const navigate = useNavigate()

    const submitNewTrip = () => {
        const token = localStorage.getItem('token');
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips`, form,
        {
          headers: 
          {
            auth: token
          }
        })
        .then( res => {
          console.log(res);
        })
        .catch( erro => {
          console.log(erro);
        });
      }
      console.log(form)
    return (
        <>
            <HeaderLogin />
            <MainContainer>
                <ContainerLogin>
                    <form onSubmit={submitNewTrip}>
                        <StyledLogin>Create a Trip</StyledLogin>
                        <ContainerInputs>
                            <PasswordP>Name</PasswordP>
                            <TextField
                                name='name'
                                id="outlined-basic"
                                variant="outlined"
                                value={form.name}
                                onChange={onChange}
                                required />
                            <PasswordP>Planet</PasswordP>
                            <StyledSelect
                                name='planet'
                                id={"select-trip"}
                                onChange={onChange}
                                required >
                                <option value={""}>
                                    Nenhum
                                </option>
                                <option value="Mercury">Mercury</option>
                                <option value="Venus">Venus</option>
                                <option value="Mars">Mars</option>
                                <option value="Jupiter">Jupiter</option>
                                <option value="Saturn">Saturn</option>
                                <option value="Uranus">Uranus</option>
                                <option value="Neptune">Neptune</option>
                                <option value="Pluto">Pluto</option>
                            </StyledSelect>

                            <PasswordP>Date</PasswordP>
                            <TextField
                                name='date'
                                id="outlined-basic"
                                variant="outlined"
                                type='date'
                                value={form.date}
                                onChange={onChange}
                                required />
                            <PasswordP>Description</PasswordP>
                            <TextField
                                name='description'
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={4}
                                value={form.description}
                                onChange={onChange}
                                required
                            />
                            <PasswordP>Duration in Days</PasswordP>
                            <TextField
                                name='durationInDays'
                                id="outlined-basic"
                                variant="outlined"
                                value={form.durationInDays}
                                onChange={onChange} 
                                type='number'
                                required/>
                            <ContainerButton>
                                <Button variant="contained" margin='normal' onClick={()=> goToAdminHomePage(navigate)}>Voltar</Button>
                                <Button variant="contained" margin='normal' onClick={submitNewTrip}>Login</Button>
                            </ContainerButton>
                        </ContainerInputs>
                    </form>
                </ContainerLogin>
            </MainContainer>
        </>
    )
}
