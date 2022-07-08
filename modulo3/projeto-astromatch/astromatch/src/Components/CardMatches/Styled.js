import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
width: 305px;
height: 57px;
justify-content: space-between;
`

export const BorderPhoto = styled.div`
box-sizing: border-box;
width: 56px;
height: 56px;
position: absolute;
border: inset 2px transparent;
border-color: #F27121;
border-radius: 30px;
background-repeat: no-repeat;
background-size: cover, contain;
background-position: center;
:hover {
  opacity: 1;
	-webkit-animation: flash 2s;
	animation: flash 1.2s;
}
@-webkit-keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
@keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
  
`

export const StyledName = styled.p`

margin-left: 66px;
margin-top: 10px;
margin-bottom: 29px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 150%;
color: #000000;
`
export const StyledMessage = styled.p`
left: 21.64%;
right: 16.39%;
top: 49.12%;
bottom: 14.04%;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #000000;
`

export const StyledHour = styled.p`
left: 83.61%;
right: 0%;
top: 15.79%;
bottom: 52.63%;
margin-top: 10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
text-align: right;
color: #ADAFBB;
`

export const StyledDivider = styled.img`
position: absolute;
background: #E8E6EA;
left: 66px;
margin-top: 56px;
`

export const DisplayMatches = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width:330px;
height:442px;
margin-top: 207px;
margin-left: 25px;
gap: 10px;
overflow-y: auto;
overflow-x: hidden;
`