import React from 'react'
import StatusBar from '../../Components/StatusBar/StatusBar'
import { LoginForm, MainContainer, StyledButton, StyledCreateAccount, StyledDivider, StyledInput, StyledLabeddit, StyledLogo, StyledSubtitle } from './Styled'
import Logo from '../../Assets/Logo.svg'
import Divider from '../../Assets/DividerL.svg'
import Endbar from '../../Components/EndBar/Endbar'
import { goToCadastro } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <StatusBar />

      <StyledLogo src={Logo} />
      <StyledLabeddit>Labeddit</StyledLabeddit>
      <StyledSubtitle>O projeto de rede social da Labenu</StyledSubtitle>

      <LoginForm>
        <StyledInput placeholder='Nome' />
        <StyledInput placeholder='Senha' />
      </LoginForm>

      <StyledButton>Continuar</StyledButton>
      <StyledDivider src={Divider} />
      <StyledCreateAccount onClick={()=>goToCadastro(navigate)}>Criar uma conta!</StyledCreateAccount>

      <Endbar />

    </MainContainer>
  )
}
