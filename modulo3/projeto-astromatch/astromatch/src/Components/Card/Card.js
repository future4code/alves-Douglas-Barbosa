import React from 'react'
import styled from "styled-components";
import BackgroundImagem from '../Assets/wallpaper.jpg'
import { ContainerShadowBottom, ContainerShadowTop } from './Styled';

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
      <ContainerShadowBottom />
    </ContainerCard>
  )
}
