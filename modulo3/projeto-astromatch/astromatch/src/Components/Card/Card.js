import React from "react";
import { ContainerCard, ContainerShadowBottom, ContainerShadowTop, StyledDescrição, StyledNome } from './Styled';

export default function Card(props) {

  return (
    <ContainerCard style={{ backgroundImage: `url(${props.photo})`}}>
      <ContainerShadowTop />
      <StyledNome>{props.name ? (props.name + `,`) : <></>} {props.age ? (props.age) : <></>}</StyledNome>
      <StyledDescrição>{props.bio ? (props.bio) : <></>}</StyledDescrição>
      <ContainerShadowBottom />
    </ContainerCard>
  )
}
