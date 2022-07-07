import React from 'react'
import { ContainerHeader, StyledLogo, SpanOrange, StyledButton } from './Styled'
import ButtonGoToMatches from '../Assets/ButtonGoToMatches.svg'
import ButtonGoBack from '../Assets/ButtonGoBack.svg'

export default function Header(props) {
    return (
        <ContainerHeader>
            <span></span>
            <StyledLogo>
                Astro<SpanOrange>Match</SpanOrange>
            </StyledLogo>
            <StyledButton onClick={props.setPageToMatches} src={ButtonGoToMatches} alt='go to matches button'></StyledButton>




        </ContainerHeader>
    )
}