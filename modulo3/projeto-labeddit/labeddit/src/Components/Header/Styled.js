import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 26.75rem;
min-height: 3.125rem;
background-color: ${props => props.darkMode === false ? "#F3C7A6" : "#C5C2C2"};
`

export const MiniLogo = styled.img`
width: 1.7512rem;
height: 1.79rem;
`

export const LogoutButton = styled.a`
margin-right: 1.890rem;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 1.125rem;
line-height: 1.5625rem;
cursor: pointer;
/* identical to box height */
text-align: center;

color: #4088CB;
`

export const StyledGoBack = styled.img`
margin-left: 2.125rem;
cursor: pointer;
`

export const StyledSpan = styled.span`
width: 4.375rem;
`