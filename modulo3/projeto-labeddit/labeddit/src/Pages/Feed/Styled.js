import styled from "styled-components";

export const MainContainer = styled.div`
width: 26.75rem;
height: 57.875rem;
background-color: ${props => props.darkMode === false ? "white" : "#19191b"};
display: flex;
flex-direction: column;
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
overflow-x: hidden;
gap: 1.25rem;
margin-bottom: 3.0625rem;
margin-top: 5.625rem;
::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-track {
	background: grey;
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