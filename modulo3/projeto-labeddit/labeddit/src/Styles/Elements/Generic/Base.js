import {createGlobalStyle} from "styled-components";

export const Base = createGlobalStyle`
body {
background-color: #A1A1A1;
font-family: 'IBM Plex Sans', sans-serif;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}

html {
  font-size: 16px;

@media (max-width: 376px) {
    font-size: 11.52px;
}

@media (max-width: 360px) {
    font-size: 11px;
}

@media (max-width: 320px) {
    font-size: 9.8px;
}

@media (max-height: 480px) {
    font-size: 8.5px;
}
}
` 