import React from 'react'
import { ContainerButton, ContainerInputs, ContainerLogin, MainContainer, PasswordP, StyledLogin, StyledSelect } from './styled'
import HeaderLogin from '../LoginPage/HeaderLogin/HeaderLogin';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import useForm from '../../../hooks/useForm';
import { goToAdminHomePage } from '../../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';
import { ProtectedPage } from '../../../hooks/ProtectedPage';

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: '' })
    const navigate = useNavigate()
    ProtectedPage()

    const submitNewTrip = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token');
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/trips`, form,
                {
                    headers:
                    {
                        auth: token
                    }
                })
            .then(res => {
                alert('Trip created successfully!')
                cleanFields()
            })
            .catch(erro => {
                alert(erro);
            });
    }


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
                                required={true}
                                placeholder='Name'
                                 />
                            <PasswordP>Planet</PasswordP>
                            <StyledSelect
                                name='planet'
                                id={"select-trip"}
                                onChange={onChange}
                                required
                                 >
                                <option value={""}>
                                    None
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
                            required={true}
                                name='date'
                                id="outlined-basic"
                                variant="outlined"
                                type='date'
                                value={form.date}
                                onChange={onChange}
                                placeholder='Expedition Date'
                                 />
                            <PasswordP>Description</PasswordP>
                            <TextField
                            required={true}
                                name='description'
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={4}
                                value={form.description}
                                onChange={onChange}
                                placeholder='Description'
                                
                            />
                            <PasswordP>Duration in Days</PasswordP>
                            <TextField
                            required={true}
                                name='durationInDays'
                                id="outlined-basic"
                                variant="outlined"
                                value={form.durationInDays}
                                onChange={onChange}
                                type='number'
                                placeholder='10'
                                 />
                            <ContainerButton>
                                <Button variant="contained" margin='normal' onClick={() => goToAdminHomePage(navigate)}>Back</Button>
                                <Button type='submit' variant="contained" margin='normal' >Create Trip</Button>
                            </ContainerButton>
                        </ContainerInputs>
                    </form>
                </ContainerLogin>
            </MainContainer>
        </>
    )
}
