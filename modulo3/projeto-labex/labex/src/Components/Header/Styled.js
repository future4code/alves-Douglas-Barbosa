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
/* width: 10vw; */
height: 10vh;
/* margin-left: 3vw; */
@media screen and (max-width: 1153px) {
margin-right: 5vw;
}
@media screen and (max-width: 900px) {
margin-right: 5vw;
}
@media screen and (max-width: 720px) {
    margin-right: 10vw;
}
`

export const StyledLogo = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 96px;
text-align: center;
color: #FFFFFF;
cursor: pointer;
@media screen and (max-width: 900px) {
    font-size: 3.5rem;
}
@media screen and (max-width: 720px) {
    font-size: 3.5rem;
}
@media screen and (max-width: 375px) {
    font-size: 2.5rem;
}
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
margin-top: 2.5vh;
@media screen and (max-width: 1153px) {
gap: 2vw;
}
@media screen and (max-width: 900px) {
    gap: 2vw;
}
@media screen and (max-width: 720px) {
    gap: 2vw;
    margin-top: 2.5vh;
}
@media screen and (max-width: 642px) {
    margin-right: 8vw;
}
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
@media screen and (max-width: 720px) {
    font-size: 2rem;
}
@media screen and (max-width: 375px) {
    font-size: 1.2rem;
}
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
:hover {
    background-color: #324e65;
}
@media screen and (max-width: 720px) {
    font-size: 2rem;
}
@media screen and (max-width: 720px) {
    padding: 2.5px 5px;
}
@media screen and (max-width: 375px) {
    font-size: 1.2rem;
    padding: 0px;
}
`