import React from 'react'
import { BorderPhoto, MainContainer, StyledMessage, StyledName, StyledHour, StyledDivider } from './Styled'
import DividerCardMatches from '../Assets/DividerCardMatches.svg'
import Wallpaper from '../Assets/wallpaper.jpg'

export default function CardMatches(props) {
  return (
    <MainContainer>
        <BorderPhoto style={{ backgroundImage: `url(${props.photo})`}}></BorderPhoto>
        <StyledName>{props.name}</StyledName>
        <StyledHour> 01 min</StyledHour>
        <StyledDivider src={DividerCardMatches} />
    </MainContainer>
  )
}
