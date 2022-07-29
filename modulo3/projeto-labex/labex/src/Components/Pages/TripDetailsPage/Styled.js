import styled from "styled-components";

export const MainContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
`
export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
background-color:#b6d2ee;
width: 30vw;
padding: 15px;
gap: 3px;
border-radius: 5px;
margin: 0 auto;
margin-top: 20px;
:hover {
    background-color: #f1f1e6;
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
font-size: 22px;`

export const H1TripsList = styled.h1`
font-size: 42px;
font-weight: 600;
color: #F88833;
margin: 0 auto;
margin-top: 3vh;
margin-bottom: 2vh;
`

export const DisplayPendingCandidates = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
gap: 10px;
align-items: flex-start;
margin: 0 auto;
`

export const ContainerCardApproved = styled.div`
display: flex;
flex-direction: column;
background-color:#b6d2ee;
padding: 5px;
gap: 0px;
border-radius: 5px;
margin: 0 auto;
:hover {
    background-color: #f1f1e6;
}
`

export const ContainerVazio = styled.div`
display: flex;
height: 5vh;
:hover {
    background-color: #f1f1e6;
}
`