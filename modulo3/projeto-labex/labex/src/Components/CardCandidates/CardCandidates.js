import React from 'react'
import { Buttons, ContainerButtons, ContainerCard, StyledInfos, StyledTitles} from './Styled'
import ThumbsUp from '../Assets/approve.svg'
import ThumbsDown from '../Assets/dissaprove.svg'

export default function CardCandidates (props) {
  return (
    <ContainerCard>
    <StyledTitles>Name:</StyledTitles><StyledInfos>{props.name}</StyledInfos>
    <StyledTitles>Profession:</StyledTitles><StyledInfos>{props.profession}</StyledInfos>
    <StyledTitles>Age:</StyledTitles><StyledInfos>{props.age}</StyledInfos>
    <StyledTitles>Country:</StyledTitles><StyledInfos>{props.country}</StyledInfos>
    <StyledTitles>Text:</StyledTitles><StyledInfos>{props.text}</StyledInfos>
    <ContainerButtons>
    <Buttons src={ThumbsDown} onClick={()=>props.approveCandidate(props.idCandidate, false)}/>
    <Buttons src={ThumbsUp} onClick={()=>props.approveCandidate(props.idCandidate, true)} />
    </ContainerButtons>
    </ContainerCard>
  )
}
