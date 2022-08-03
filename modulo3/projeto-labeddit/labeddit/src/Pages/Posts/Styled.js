import styled from "styled-components"

export const MainContainer = styled.div`
width: 26.75rem;
height: 57.875rem;
background-color: ${props => props.darkMode === false ? "white" : "#19191b"};
display: flex;
flex-direction: column;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 1.125rem;
width: 21.125rem;
max-height: 15.875rem;
background:  ${props => props.darkMode === false ? "#FBFBFB" : "#c4c3c3"};
border: 1px solid ${props => props.darkMode === false ? "#E0E0E0" : "#131313"};
border-radius: 12px;
flex-shrink: 1;
margin-top: 1.75rem;
margin-bottom: 0.75rem;
overflow-wrap: break-word;
align-self: center;
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
border: 0.0496rem solid ${props => props.darkMode === false ? "#ECECEC" : "#827D7D;"};
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

export const InputPost = styled.textarea`
width: 22.4375rem;
height: 7.875rem;
padding: 0.3125rem 0.3125rem;
background: ${props => props.darkMode === false ? "#EDEDED" : "#c4c3c3"};
border-radius: 0.75rem;
border: none;
font-size: 1rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.4375rem;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
`

export const StyledButton = styled.button`
width: 22.4375rem;
height: 2.9375rem;
background: ${props => props.darkMode === false ? "linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)" : "linear-gradient(90deg,#a33a1a 0%,#D29032 100%)"};
border-radius: 0.75rem;
border: none;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
line-height: 1.4375rem;
color: #FFFFFF;
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.01);
  transition-duration: 0.2s;
}
`

export const StyledDivider = styled.img`
width: 22.6875rem;
align-self: center;
margin-bottom: 2.25rem;
`

export const DisplayCards = styled.div`
display: flex;
flex-direction: column;
height: 31.5625rem;
overflow-y: auto;
gap: 1.25rem;
::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-track {
	background: ${props => props.darkMode === false ? "white" : "#19191b"};
	border-radius: 20px;
	margin-block: 5px
}
::-webkit-scrollbar-thumb {
	background: #f3c7a6;
	border-radius: 20px;
}
@supports (scrollbar-color: #ff5e51 ${props => props.darkMode === false ? "white" : "#19191b"} ) {
	scrollbar-color: #f3c7a6 grey;
	scrollbar-width: thin;
	border-radius: 20px;
	
}
`
