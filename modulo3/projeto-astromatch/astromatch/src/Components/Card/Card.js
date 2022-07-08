import React from "react";
import { ContainerCard, ContainerShadowBottom, ContainerShadowTop, StyledDescription, StyledName } from './Styled';

export default function Card(props) {

  return (
    <ContainerCard style={{ backgroundImage: `url(${props.photo})` }}
      likeOrDislike={props.likeOrDislike}
      id={props.id}>
      <ContainerShadowTop />
      <StyledName>{props.name ? (props.name + `,`) : <></>} {props.age ? (props.age) : <></>}</StyledName>
      <StyledDescription>{props.bio ? (props.bio) : <></>}</StyledDescription>
      <ContainerShadowBottom />
    </ContainerCard>
  )
}
