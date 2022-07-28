import React from 'react'
import { useNavigate } from 'react-router-dom'
import Endbar from '../../Components/EndBar/Endbar'
import useForm from '../../Hooks/useForm'
import { goToLogin } from '../../Routes/Coordinator'
import { Signup } from '../../Services/Signup'
import { DivCheckBox, SignupForm, SpanLink, StyledAcordo, StyledButton, StyledCheckbox, StyledInput, StyledTerms, } from './Styled'

export default function CadastroForm(props) {
  const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    Signup(form, cleanFields)
    const confirmBox = window.confirm(
        "Usuario cadastrado com sucesso!"
    )
    if (confirmBox === true) {
        goToLogin(navigate)
    } else {
        goToLogin(navigate)
    }
  }

  return (
      <SignupForm onSubmit={onSubmitForm}>
        
        <StyledInput 
        darkMode={props.darkMode}
        type='text'
        placeholder='Nome de usuário' 
        name='username'
        value={form.username}
        onChange={onChange}
        required
        />

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
        required />

        <StyledTerms darkMode={props.darkMode}>Ao continuar, você concorda com o nosso <SpanLink>Contrato de usuário</SpanLink> e nossa <SpanLink>Política de Privacidade</SpanLink> </StyledTerms>
        <DivCheckBox>
          <StyledCheckbox type='checkbox' required ></StyledCheckbox>
          <StyledAcordo darkMode={props.darkMode}>Eu concordo em receber emails sobre coisas legais no Labeddit</StyledAcordo>
        </DivCheckBox>

        <StyledButton darkMode={props.darkMode} type='submit'>Cadastrar</StyledButton>
        
        <Endbar />
      </SignupForm>
  )
}
