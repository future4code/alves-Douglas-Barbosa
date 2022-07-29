import styled from "styled-components";
import Background from '../../Assets/Background.jpg'

export const BackgroundImage = styled.div`
 background-image: url(${Background});
 background-repeat: no-repeat;
 background-size: cover, contain;
 background-position: bottom;
 width: 100vw;
 max-width: 100%;
 height: 100vh;
 overflow: hidden;
`

export const JoinUsDiv = styled.div`
width: 34.032vw;
height: 29.27vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin-left: 9vw;
margin-top: 15vh;
white-space: no-wrap;
`

export const StyledH1 = styled.h1`
display: flex;
flex-direction: column;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 4rem;
line-height: 6rem;  
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
@media screen and (max-width: 1153px) {
    font-weight: 500;
    line-height: 4rem;
}
@media screen and (max-width: 720px) {
    font-size: 3rem;
}
@media screen and (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
}
`

export const SpanOrangeH1 = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 4rem;
line-height: 6rem;  
display: flex;
align-items: center;
text-align: center;
color: #E99555;
@media screen and (max-width: 1153px) {
    font-weight: 600;
    line-height: 4rem;
}
@media screen and (max-width: 720px) {
    font-size: 3rem;
}
@media screen and (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
}
`
export const ButtonJoinUs = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 2.5rem;
line-height: 3.75rem;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
background-color: #163055;
border: 2px solid rgba(255, 255, 255, 0.44);
border-radius: 10px;
padding: 5px 32px;
cursor: pointer;
:hover {
    background-color: #324e65;
}
@media screen and (max-width: 1153px) {
    margin-top: 3vh;
}
@media screen and (max-width: 627px) {
    font-size: 2.1rem;
    padding: 5px 18px;
}
@media screen and (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
    margin-top: 0px;
    padding: 2.5px 8px;
}
`