import styled from "styled-components";

export const MainContainer = styled.div`
width: 26.75rem;
height: 57.875rem;
background-color: ${props => props.darkMode === false ? "white" : "#19191b"};
display: flex;
flex-direction: column;
`

export const StyledLogo = styled.img`
height: 5.25rem;
width: 5.25rem;
margin-left: 10.438rem;
margin-top: 5.563rem;
`

export const StyledLabeddit = styled.h2`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 2.25rem;
line-height: 2.938rem;
color: ${props => props.darkMode === false ? "#373737" : "#f3f3f3"};
margin-left: 8.375rem;
margin-top: 0.686rem;
`

export const StyledSubtitle = styled.h4`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 1.313px;
text-align: center;
color: ${props => props.darkMode === false ? "#000000" : "#f2f1f1"};
`

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 6.688rem;
align-items: center;
`

export const StyledInput = styled.input`
width: 22.375rem;
height: 3.438rem;
padding: 0.100rem 0.700rem;
border: 1.7px solid #d5d8de;
border-radius: 0.313rem;
margin-top: 0.5rem;
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
margin-top: 3.5rem;
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.01);
  transition-duration: 0.2s;
}
`

export const StyledDivider = styled.img`
margin-top: 1.125rem;
margin-bottom: 1.125rem;;
width: 22.6875rem;
align-self: center;
`

export const StyledCreateAccount = styled.button`
width: 22.813rem;
height: 3.188rem;
background: ${props => props.darkMode === false ? "white" : "#1b1919"};
border-radius: 1.6875rem;
border: 1px solid #fe7e02;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
line-height: 1.563rem;
text-align: center;
color: #FFFFFF;
margin-left: 1.8125rem;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
line-height: 1.5625rem;
text-align: center;
color: #FE7E02;
margin-bottom: 9.875rem;
cursor: pointer;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.01);
  transition-duration: 0.2s;
}
`