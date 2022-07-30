import styled from "styled-components";

export const MainContainer = styled.div`
width: 26.75rem;
height: 57.875rem;
background-color: ${props => props.darkMode === false ? "white" : "#19191b"};
display: flex;
flex-direction: column;
`

export const Welcome = styled.h3`
margin-top: 1.8125rem;
margin-left: 2rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 2.0625rem;
line-height: 2.6875rem;
color: ${props => props.darkMode === false ? "#373737" : "#f3f3f3"};
margin-bottom: 12.125rem;
`

export const SignupForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
`

export const StyledInput = styled.input`
width: 22.375rem;
height: 3.438rem;
padding: 0.100rem 0.700rem;
border: 1.7px solid #d5d8de;
border-radius: 0.313rem;
background: ${props => props.darkMode === false ? "white" : "#c4c3c3"};
::placeholder {
font-size: 1rem;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1.375rem;
color: #323941;
opacity: 0.8;
}
`

export const StyledTerms = styled.p`
margin-top: 4.0625rem;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.1875rem;
color: ${props => props.darkMode === false ? "#000000" : "#c4c3c3"};
width: 22.5637rem;
height: 2.375rem;
margin-bottom: 0.4375rem;
`

export const SpanLink = styled.span`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 0.875rem;
line-height: 1.1875rem;
color: #4088CB;
`

export const DivCheckBox = styled.div`
display: flex;
flex-direction: row;
gap: 0.625rem;
`

export const StyledCheckbox = styled.input`
input:checked ~ .checkmark:after {
  display: block;
}
.checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`

export const StyledAcordo = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.1875rem;
width: 21.0763rem;
height: 2.375rem;
color: ${props => props.darkMode === false ? "#000000" : "#c4c3c3"};
`

export const StyledButton = styled.button`
width: 22.813rem;
height: 3.188rem;
background: ${props => props.darkMode === false ? "linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)" : "linear-gradient(90deg,#a33a1a 0%,#D29032 100%)"};
border-radius: 1.6875rem;
border: none;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
line-height: 1.563rem;
text-align: center;
color: #FFFFFF;
margin-top: 1.75rem;
margin-bottom: 3.25rem;
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.01);
  transition-duration: 0.2s;
}
`