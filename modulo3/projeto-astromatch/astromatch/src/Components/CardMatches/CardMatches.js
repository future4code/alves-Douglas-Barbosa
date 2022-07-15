import React from 'react'
import { BorderPhoto, MainContainer, StyledName, StyledHour, StyledDivider } from './Styled'
import DividerCardMatches from '../Assets/DividerCardMatches.svg'

export default function CardMatches(props) {
  return (
    <MainContainer>
      <BorderPhoto style={{ backgroundImage: `url(${props.photo})` }}></BorderPhoto>
      <StyledName>{props.name}</StyledName>
      <StyledHour> 01 min</StyledHour>
      <StyledDivider src={DividerCardMatches} />
    </MainContainer>
  )
}
