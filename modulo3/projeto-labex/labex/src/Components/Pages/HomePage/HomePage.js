import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Header/Header'
import { BackgroundImage, ButtonJoinUs, JoinUsDiv, SpanOrangeH1, StyledH1 } from './Styled'
import { goToListTrips } from '../../../routes/Coordinator'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <BackgroundImage>
      <Header />
      <JoinUsDiv>
      <StyledH1>Welcome to<SpanOrangeH1>Space </SpanOrangeH1></StyledH1>
      <ButtonJoinUs onClick={() => goToListTrips(navigate)}>Join Us</ButtonJoinUs>
      </JoinUsDiv>
    </BackgroundImage>
  )
}
