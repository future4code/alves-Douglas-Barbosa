import React from 'react'
import { ContainerLogo, MainContainer, NavBar, SpanOrange, StyledLogo, StyledNavButton, StyledNavButtonLogin } from './Styled'
import { goToHomePage } from '../../../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'


export default function HeaderLogin() {
    const navigate = useNavigate()

  return (
    <MainContainer>
        <ContainerLogo>
            <StyledLogo onClick={() => goToHomePage(navigate)}>
                Labe<SpanOrange onClick={() => goToHomePage(navigate)}>X</SpanOrange>
            </StyledLogo>
        </ContainerLogo>
        </MainContainer>
  )
}
