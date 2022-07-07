import styled from "styled-components";
import Search from '../Assets/Search.svg'

export const MainContainer = styled.div`
position: absolute;
width: 295px;
height: 112px;
margin-top: 75px;
margin-left: 25px;
`

export const StyledMatches = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 60px;

color: #333333;
`

export const SearchBar = styled.input`
box-sizing: border-box;
width: 295px;
height: 48px;
background: #FFFFFF;
border: 1px solid #E8E6EA;
border-radius: 15px;
outline: none;
padding-left: 40px;
background: url(${Search});
background-position: 10px;
background-repeat: no-repeat;
background-size: 17.38px 17.38px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: rgba(0, 0, 0, 0.4);

`