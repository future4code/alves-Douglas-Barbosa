import styled from "styled-components";

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
background-color:#b6d2ee;
width: 30vw;
padding: 15px;
gap: 3px;
margin-bottom: 10px;
border-radius: 5px;
:hover {
    background-color: #f1f1e6;
}
@media screen and (max-width: 375px) {
    width: 50vh;
}
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 4vh;
`

export const StyledInfos = styled.p`
font-weight: 500;
font-size: 18px;
`

export const StyledTitles = styled.h2`
font-weight: 600;
font-size: 22px;
`