import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 22.75rem;
height: 11.875rem;
margin-top: 1.875rem;
margin-bottom: 0.75rem;
gap: 0.75rem;
margin-left: 1.875rem;
align-items: center;
`

export const InputTitle = styled.input`
width: 22.4375rem;
height: 1.875rem;
padding: 0.3125rem 0.3125rem;
background: #EDEDED;
border-radius: 0.75rem;
border: none;
font-size: 1rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.4375rem;
`

export const InputPost = styled.textarea`
width: 22.4375rem;
height: 7.875rem;
padding: 0.3125rem 0.3125rem;
background: #EDEDED;
border-radius: 0.75rem;
border: none;
font-size: 1rem;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.4375rem;
`

export const StyledButton = styled.button`
width: 22.4375rem;
height: 2.9375rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 0.75rem;
border: none;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 1.125rem;
line-height: 1.4375rem;
color: #FFFFFF;
cursor: pointer;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: center;
`

export const StyledDivider = styled.img`
width: 22.6875rem;
align-self: center;
margin-bottom: 2.25rem;
`