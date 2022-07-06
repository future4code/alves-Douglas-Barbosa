import styled from "styled-components";

export const ContainerCard = styled.div`
display: flex;
position: absolute;
margin-top: 75px;
margin-left: 26px;
width: 324px;
height: 589px;
border-radius: 24px;
background-repeat: no-repeat;
background-size: cover, contain;
background-position: center;
`

export const ContainerShadowTop = styled.div`
position: absolute;
width: 324px;
height: 125px;
left: 0px;
top: 0px;
border-radius: 24px;

background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
`

export const ContainerShadowBottom = styled.div`
position: absolute;
width: 324px;
height: 190px;
left: 0px;
top: 399px;
border-radius: 24px;

background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`

export const StyledNome = styled.p`
position: absolute;
width: 233px;
height: 42px;
left: 22px;
top: 475px;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 27px;
z-index: 2;
white-space: nowrap;
`

export const StyledDescrição = styled.p`
position: absolute;
width: 240px;
height: 46px;
left: 22px;
top: 505px;

font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 22px;

color: white;
z-index: 2;
`