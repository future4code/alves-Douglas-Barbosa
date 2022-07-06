import React from 'react'
import { BarContainer, SuperLikeButton } from './Styled'
import Dislike from '../Assets/DislikeGroup.svg'
import SuperLike from '../Assets/SuperLikeGroup.svg'
import Like from '../Assets/LikeGroup.svg'

export default function BottomBar() {
  return (
    <BarContainer>
        <img src={Dislike}></img>
        <SuperLikeButton src={SuperLike}></SuperLikeButton>
        <img src={Like}></img>
    </BarContainer>
  )
}
