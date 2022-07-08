import React from 'react'
import { ContainerHeader, StyledLogo, SpanOrange, StyledButton } from './Styled'
import ButtonGoToMatches from '../Assets/ButtonGoToMatches.svg'

export default function Header(props) {
    return (
        <ContainerHeader>
            <span></span>
            <StyledLogo>
                Astro<SpanOrange>Match</SpanOrange>
            </StyledLogo>
            <StyledButton onClick={() => props.setPageTo("matches")} src={ButtonGoToMatches} alt='go to matches button'></StyledButton>
        </ContainerHeader>
    )
}