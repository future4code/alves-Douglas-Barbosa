import React from 'react'
import axios from 'axios'
import { BarContainer, SuperLikeButton, LikeButton, DislikeButton } from './Styled'
import Dislike from '../Assets/DislikeGroup.svg'
import SuperLike from '../Assets/SuperLikeGroup.svg'
import Like from '../Assets/LikeGroup.svg'

export default function BottomBar(props) {

  const LikeOrDislike = (choice) => {
    const body = {
      id: `${props.id}`,
      choice: choice
    }

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/choose-person`,
        body,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        if (res.data.isMatch === true) {
          alert("Voces deram match! <3")
        }
        props.getNewPerson()

      })
      .catch((error) => {
        alert("Erro :( vai com calma..")
        props.getNewPerson()
      })

  }

  const AlertSuperLike = () => {
    alert("Parece que você não é um assinante AstroMatch. Estaremos habilitando essa funcionalidade em alguns anos luz!")}

  return (
    <BarContainer>
      <DislikeButton onClick={() => LikeOrDislike(false)} src={Dislike}></DislikeButton>
      <SuperLikeButton onClick={AlertSuperLike} src={SuperLike}></SuperLikeButton>
      <LikeButton onClick={() => LikeOrDislike(true)} src={Like}></LikeButton>
    </BarContainer>
  )
}
