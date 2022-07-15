import styled from "styled-components";

export const MainContainer = styled.div`
position: absolute;
width: 194px;
height: 50px;
margin-top: 718px;
margin-left: 90px;
`

export const StyledText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;

color: #000000;
`

export const SpanTextColor = styled.span`
background-image: linear-gradient(246deg, rgba(255,78,64,1) 41%, rgba(0,0,0,1) 100%);;
  background-size: auto auto;
  background-clip: border-box;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 16px;

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`

export const ContainerSocialMedia = styled.div`
height: 22px;
left: 67px;
top: 28px;
display: flex;
justify-content: center;
gap: 17px;
`
export const ImgGithub = styled.img`
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`

export const ImgLinkedin = styled.img`
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`