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
          alert("It's a Match! <3")
        }
        props.getNewPerson()

      })
      .catch((error) => {
        alert("Error :( take it easy, buddy..")
        props.getNewPerson()
      })

  }

  const AlertSuperLike = () => {
    alert("It looks like you are not an AstroMatch subscriber. We will be enabling this functionality in a few light years!")}

  return (
    <BarContainer>
      <DislikeButton onClick={() => LikeOrDislike(false)} src={Dislike} alt='dislike button'></DislikeButton>
      <SuperLikeButton onClick={AlertSuperLike} src={SuperLike} alt='superlike button'></SuperLikeButton>
      <LikeButton onClick={() => LikeOrDislike(true)} src={Like} alt='like button'></LikeButton>
    </BarContainer>
  )
}
