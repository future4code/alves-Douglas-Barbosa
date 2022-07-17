import styled from "styled-components";

export const MainContainer = styled.div`
width: 100vw;
background-color:#163055;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden ;
gap: 2px;
margin-bottom: 6vh;
`

export const StyledH2 = styled.h2`
font-size: 2.8rem;
color:#F88833;
display: flex;
flex-direction: column;
margin-bottom: 2vh;
text-align: center;
margin-top: 1vh;
`

export const DivContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
margin-top: 1vh;
margin-bottom: 2vh;
gap: 3vw;
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
    font-size: 1.3rem;
}
`