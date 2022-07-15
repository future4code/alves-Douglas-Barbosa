import React from 'react'
import { ContainerHeader, StyledLogo, SpanOrange, StyledButtonBack } from './Styled'
import ButtonGoBack from '../../Assets/ButtonGoBack.svg'

export default function Header(props) {
    return (
        <ContainerHeader>
            <StyledButtonBack onClick={() => props.setPageTo("home")} src={ButtonGoBack} />
            <StyledLogo>
                Astro<SpanOrange>Match</SpanOrange>
            </StyledLogo>
            <span></span>
        </ContainerHeader>
    )
}