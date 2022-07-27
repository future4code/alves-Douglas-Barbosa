import React from 'react'
import StatusBar from '../../Components/StatusBar/StatusBar'
import { MainContainer, StyledCreateAccount, StyledDivider, StyledLabeddit, StyledLogo, StyledSubtitle } from './Styled'
import Logo from '../../Assets/Logo.svg'
import Divider from '../../Assets/DividerL.svg'
import Endbar from '../../Components/EndBar/Endbar'
import { goToCadastro, goToFeed, goToLogin } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import LoginForms from './LoginForms'
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'
import { useEffect } from 'react'

export default function Login() {
  const navigate = useNavigate()

  useUnprotectedPage()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token === null) {
      goToLogin(navigate)
    } else {
      goToFeed(navigate)
    }
   
      
    } , [])

  return (
    <MainContainer>
      <StatusBar />

      <StyledLogo src={Logo} />
      <StyledLabeddit>Labeddit</StyledLabeddit>
      <StyledSubtitle>O projeto de rede social da Labenu</StyledSubtitle>

      <LoginForms />

      <StyledDivider src={Divider} />
      <StyledCreateAccount onClick={() => goToCadastro(navigate)}>Criar uma conta!</StyledCreateAccount>

      <Endbar />
    </MainContainer>
  )
}
