import React from 'react'
import Header from '../../Header/Header'
import { BackgroundImage, ButtonJoinUs, JoinUsDiv, SpanOrangeH1, StyledH1 } from './Styled'

export default function HomePage() {


  return (
    <BackgroundImage>
      <Header />
      <JoinUsDiv>
      <StyledH1>Welcome to<br/>Space </StyledH1>
      <ButtonJoinUs onClick={''}>Join Us</ButtonJoinUs>
      </JoinUsDiv>
    </BackgroundImage>
  )
}
