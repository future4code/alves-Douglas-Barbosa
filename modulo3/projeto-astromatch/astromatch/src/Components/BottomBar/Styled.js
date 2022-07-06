import styled from "styled-components";

export const BarContainer = styled.div`
display: flex;
position: absolute;
width: 254px;
height: 62px;
margin-top: 693px;
margin-left: 60px;
margin-right: 60px;
justify-content: space-between;
`

export const SuperLikeButton = styled.img`
height: 42px;
width: 42px;
align-self: center;
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.8s;
:hover {
  transform: scale(1.2);
  transition-duration: 0.8s;}
`

export const LikeButton = styled.img`
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.2);
  transition-duration: 0.5s;}
`

export const DislikeButton = styled.img`
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.2);
  transition-duration: 0.5s;}
`