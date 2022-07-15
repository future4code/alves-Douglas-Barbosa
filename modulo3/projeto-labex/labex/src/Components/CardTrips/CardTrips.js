import React from 'react'
import { ContainerCard, StyledInfos, StyledTitles} from './Styled'

export default function CardTrips (props) {
  return (
    <ContainerCard>
    <StyledTitles>Trip Name:</StyledTitles><StyledInfos>{props.name}</StyledInfos>
    <StyledTitles>description:</StyledTitles><StyledInfos>{props.description}</StyledInfos>
    <StyledTitles>Date:</StyledTitles><StyledInfos>{props.date}</StyledInfos>
    <StyledTitles>Duration:</StyledTitles><StyledInfos>{props.duration}</StyledInfos>
    <StyledTitles>Planet:</StyledTitles><StyledInfos>{props.planet}</StyledInfos>
    </ContainerCard>
  )
}
