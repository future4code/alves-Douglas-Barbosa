import React from 'react'
import { ContainerHeader, StyledLogo, SpanOrange, StyledButton } from './Styled'
import ButtonGoToMatches from '../Assets/ButtonGoToMatches.svg'

export default function Header() {
    return (
        <ContainerHeader>
            <span></span>
            <StyledLogo>
                Astro<SpanOrange>Match</SpanOrange>
            </StyledLogo>
            <StyledButton src={ButtonGoToMatches}></StyledButton>




        </ContainerHeader>
    )
}