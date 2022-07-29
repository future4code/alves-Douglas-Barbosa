import styled from "styled-components";

export const MainContainer = styled.div`
height: 100vh;
width: 100vw;
background-color:#163055;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden ;
`

export const ContainerLogin = styled.div`
min-height: 65vh;
min-width: 25vw;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
border-radius: 5px;
margin-bottom: 25vh;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
padding: 20px;
margin-top: 5vh;
@media screen and (max-width: 375px) {
    width: 48vh;
}


`

export const StyledLogin = styled.h1`
font-family: 'Poppins', 'Roboto';
font-size: 2rem;
font-weight: 600;
margin-top: 2vh;
margin-bottom: 3vh;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
`

export const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const PasswordP = styled.p`
margin-top: 1vh;
margin-bottom: 0.5vh;
font-weight: 500;
font-size: 1.1rem;
`

export const ContainerButton = styled.div`
margin-top: 3vh;
display: flex;
justify-content: space-around;
flex-direction: row;
gap: 3.4vw;
`

export const StyledSelect = styled.select`
height: 3em;
width: 17em;
`