import styled from "styled-components";

export const MainContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`

export const H1TripsList = styled.h1`
font-size: 42px;
font-weight: 600;
color: #F88833;
margin: 0 auto;
margin-top: 3vh;
@media screen and (max-width: 375px) {
    font-size: 2.5rem;
}
`

export const DisplayTrips = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
gap: 10px;
align-items: flex-start;
margin: 0 auto;
`

export const ButtonStyled = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 1.5rem;
line-height: 3.75rem;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
background-color: #163055;
border: 2px solid rgba(255, 255, 255, 0.44);
border-radius: 10px;
padding: 5px 10px;
cursor: pointer;
:hover {
    background-color: #324e65;
}
@media screen and (max-width: 375px) {
    font-size: 1.5rem;
    padding: 2.5px 5px
}
`