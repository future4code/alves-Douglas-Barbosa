import React from 'react'
import { LoginForm, StyledButton, StyledInput, } from './Styled'
import useForm from '../../Hooks/useForm'
import { login } from '../../Services/Login'
import { useNavigate } from 'react-router-dom'
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'

export default function LoginForms(props) {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
  const navigate = useNavigate()

  useUnprotectedPage()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, cleanFields, navigate)
    
  }

  return (
      <LoginForm onSubmit={onSubmitForm}>
        <StyledInput
         darkMode={props.darkMode}
          type='email'
          placeholder='Email'
          name='email'
          value={form.email}
          onChange={onChange}
          required
        />
        <StyledInput
          darkMode={props.darkMode}
          type='password'
          placeholder='Senha'
          name='password'
          value={form.password}
          onChange={onChange}
          required
        />

        <StyledButton darkMode={props.darkMode} type='submit'>Continuar</StyledButton>
      </LoginForm>
  )
}