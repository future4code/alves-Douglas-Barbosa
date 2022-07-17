import styled from "styled-components";

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
background-color:#b6d2ee;
width: 24vw;
padding: 15px;
gap: 3px;
border-radius: 5px;
margin-top: 10px;
:hover {
    background-color: #f1f1e6;
}
@media screen and (max-width: 375px) {
    width: 48vh;
}
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const StyledInfos = styled.p`
font-weight: 500;
font-size: 18px;
`

export const StyledTitles = styled.h2`
font-weight: 600;
font-size: 20px;
`

export const Buttons = styled.img`
cursor: pointer;
height: 30px;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`