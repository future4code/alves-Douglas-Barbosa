import React from 'react'
import { DivComments, DivDislikes, DivDownBars, EnviadoPor, MainContainer, NumberLikes, StyledCounter, TituloPost } from './Styled'
import Upvote from '../../Assets/Upvote.svg'
import Downvote from '../../Assets/Downvote.svg'
import CommentLogo from '../../Assets/Comment.svg'

export default function CardPosts(props) {
  return (
    <MainContainer>

        <EnviadoPor>Enviado por: {props.user}</EnviadoPor>

        <TituloPost>{props.title}</TituloPost>
        <TituloPost>{props.body}</TituloPost>

        <DivDownBars>

        <DivDislikes>
            <img src={Upvote}/>
            <NumberLikes>{props.votes}</NumberLikes>
            <img src={Downvote}/>
        </DivDislikes>

        <DivComments>
            <img src={CommentLogo} />
            <StyledCounter>{props.commentCount}</StyledCounter>
        </DivComments>

        </DivDownBars>
    </MainContainer>
  )
}
