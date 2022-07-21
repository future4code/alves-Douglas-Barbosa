import styled from "styled-components";

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
background-color:#b6d2ee;
width: 35vw;
padding: 15px;
gap: 3px;
margin-bottom: 10px;
border-radius: 5px;
margin: 0 auto;
white-space: pre-wrap;
:hover {
    background-color: #f1f1e6;
}
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 2vh;
`

export const StyledInfos = styled.p`
font-weight: 500;
font-size: 18px;
`

export const StyledTitles = styled.h2`
font-weight: 600;
font-size: 22px;
`
export const Buttons = styled.img`
cursor: pointer;
height: 35px;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`