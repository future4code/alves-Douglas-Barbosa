import styled from "styled-components";

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
width: 375px;
height: 46px;
border-bottom: 1px solid rgba(0, 0, 0, 0.14);
`

export const StyledLogo = styled.h1`
font-family: 'Poppins';
width: 200px;
height: 34px;
margin-left: 40px;
margin-right: 88px;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #333333;
cursor: pointer;
`

export const SpanOrange = styled.span`
color: #FF4E40;
`

export const StyledButtonBack = styled.img`
margin-left: 13.06px;
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.8s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;}
`