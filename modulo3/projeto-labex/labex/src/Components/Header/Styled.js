import styled from "styled-components";

export const MainContainer = styled.header`
background-color: #163055;
max-width: 100%;
height: 11vh;
margin-top: 6vh;
display: flex;
flex-direction: row;
justify-content: space-around;
`

export const ContainerLogo = styled.div`
width: 10vw;
height: 10vh;
/* margin-left: 3vw; */
`

export const StyledLogo = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 96px;
text-align: center;
color: #FFFFFF;
`

export const SpanOrange = styled.span`
color: #F88833;
`

export const NavBar = styled.nav`
background-color: #163055;
width: 30vw;
display: flex;
align-items: center;
justify-content: space-around;
`

export const StyledNavButton = styled.a`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 2.25rem;
line-height: 3.375rem;
text-align: center;
color: #FFFFFF;
cursor: pointer;
`

export const StyledNavButtonLogin = styled.a`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 2.25rem;
line-height: 54px;
text-align: center;
color: #FFFFFF;
border: 2px solid rgba(255, 255, 255, 0.44);
border-radius: 10px;
padding: 5px 10px;
cursor: pointer;
`