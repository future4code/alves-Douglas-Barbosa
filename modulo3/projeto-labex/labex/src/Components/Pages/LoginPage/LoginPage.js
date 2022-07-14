import React, { useState, useEffect } from 'react'
import { ContainerButton, ContainerInputs, ContainerLogin, MainContainer, PasswordP, StyledLogin } from './Styled'
import HeaderLogin from './HeaderLogin/HeaderLogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from '../../../hooks/useForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToAdminHomePage, goToLoginPage } from '../../../routes/Coordinator';

export default function LoginPage() {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "", })
  const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null ) {
            goToLoginPage(navigate)
        } else {
            goToAdminHomePage(navigate)
        }
    }, [])

  const loginHandler = (event) => {
    event.preventDefault()

    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglashenrique/login', form)
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        goToAdminHomePage(navigate)
      })
      .catch((err) => console.log(err.response))
  }

  return (
    <>
      <HeaderLogin />
      <MainContainer>
        <ContainerLogin>
          <form onSubmit={loginHandler}>
            <StyledLogin>Login</StyledLogin>
            <ContainerInputs>
              <PasswordP>Email</PasswordP>
              <TextField name='email' id="outlined-basic" variant="outlined" required value={form.email} onChange={onChange} />
              <PasswordP>Password</PasswordP>
              <TextField name='password' id="outlined-basic" variant="outlined" required value={form.password} onChange={onChange} />
              <ContainerButton>
                <Button onClick={loginHandler} variant="contained" margin='normal'>Login</Button>

              </ContainerButton>
            </ContainerInputs>
          </form>
        </ContainerLogin>
      </MainContainer>
    </>
  )
}
