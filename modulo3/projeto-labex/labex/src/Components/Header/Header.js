import React from 'react'
import { ContainerLogo, MainContainer, NavBar, SpanOrange, StyledLogo, StyledNavButton, StyledNavButtonLogin } from './Styled'
import { goToLoginPage, goToHomePage, goToListTrips } from '../../routes/Coordinator'
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
            <StyledNavButton onClick={()=>goToListTrips(navigate)}>Trips</StyledNavButton>
            <StyledNavButtonLogin onClick={()=>goToLoginPage(navigate)}>Login</StyledNavButtonLogin>
        </NavBar>
        </MainContainer>
  )
}
