import React, { useContext } from 'react'
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
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function Login() {
  const navigate = useNavigate()
  const { states, constants } = useContext(GlobalStateContext)

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
    <MainContainer darkMode={states.darkMode}>
      <StatusBar />

      <StyledLogo src={Logo} />
      <StyledLabeddit darkMode={states.darkMode}>Labeddit</StyledLabeddit>
      <StyledSubtitle darkMode={states.darkMode}>O projeto de rede social da Labenu</StyledSubtitle>

      <LoginForms darkMode={states.darkMode}/>

      <StyledDivider src={Divider} />
      <StyledCreateAccount darkMode={states.darkMode} onClick={() => goToCadastro(navigate)}>Criar uma conta!</StyledCreateAccount>

      <Endbar />
    </MainContainer>
  )
}
