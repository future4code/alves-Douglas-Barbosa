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
`