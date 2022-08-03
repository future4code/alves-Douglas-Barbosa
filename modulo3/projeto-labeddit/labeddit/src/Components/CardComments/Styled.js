import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
width: 21.125rem;
max-height: 15.875rem;
background: ${props => props.darkMode === false ? "#FBFBFB" : "#c4c3c3"};
border: 1px solid ${props => props.darkMode === false ? "#E0E0E0" : "#131313"};
border-radius: 12px;
margin-left: 2rem;
flex-shrink: 1;
overflow-wrap: break-word;
`

export const EnviadoPor = styled.p`
width: 8.25rem;
height: 1rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 0.75rem;
line-height: 1rem;
text-align: center;
color: #6F6F6F;
white-space: nowrap;
`

export const TituloPost = styled.p`
width: 20.9375rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.4375rem;
color: #000000;
`

export const BodyPost = styled.p`
width: 20.9375rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 1.4375rem;
color: #000000;
margin-bottom: 0.125rem;
overflow-wrap: break-word;
`

export const DivDownBars = styled.div`
width: 10.8956rem;
height: 1.75rem;
display: flex;
flex-direction: row;
gap: 0.75rem;
`

export const DivDislikes = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0.2917rem;
gap: 0.995rem;
border: 0.0498rem solid ${props => props.darkMode === false ? "#ECECEC" : "#827D7D;"};
border-radius: 1.75rem;
`

export const NumberLikes = styled.p`
width: 1.375rem;
height: 0.75rem;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 0.5976rem;
line-height: 0.75rem;
text-align: center;

color: #6F6F6F;
`

export const DivComments = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.2917rem;
gap: 0.5rem;
width: 4.0831rem;
border: 0.0496rem solid #ECECEC;
border-radius: 1.75rem;
`

export const StyledCounter = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 0.5976rem;
line-height: 0.75rem;
text-align: center;

color: #6F6F6F;
`

export const VoteUncolored = styled.img`
cursor: pointer;
`

export const StyledCommentImage = styled.img`
cursor: pointer;
`

