import React from 'react'
import styled from "styled-components";
import BackgroundImagem from '../Assets/wallpaper.jpg'
import { ContainerShadowBottom, ContainerShadowTop, StyledDescrição, StyledNome } from './Styled';

const ContainerCard = styled.div`
display: flex;
position: absolute;
margin-top: 75px;
margin-left: 25px;
width: 324px;
height: 589px;
border-radius: 24px;
background-image: url(${BackgroundImagem});
`

export default function Card(props) {
  return (
    <ContainerCard>
      <ContainerShadowTop />
      <StyledNome>Donnie Darko, 19</StyledNome>
      <StyledDescrição>A man that tragically died in his home in a plane crash..</StyledDescrição>
      <ContainerShadowBottom />
    </ContainerCard>
  )
}
