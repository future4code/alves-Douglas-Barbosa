import React from 'react'
import { ContainerLogo, MainContainer, NavBar, SpanOrange, StyledLogo, StyledNavButton, StyledNavButtonLogin } from './Styled'
import { goToLoginPage, goToHomePage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const navigate = useNavigate()

  return (
    <MainContainer>
        <ContainerLogo>
            <StyledLogo>
                Labe<SpanOrange>X</SpanOrange>
            </StyledLogo>
        </ContainerLogo>

        <NavBar>
            <StyledNavButton onClick={()=>goToHomePage(navigate)}>Home</StyledNavButton>
            <StyledNavButton>About</StyledNavButton>
            <StyledNavButtonLogin onClick={()=>goToLoginPage(navigate)}>Login</StyledNavButtonLogin>
        </NavBar>
        </MainContainer>
  )
}
