import React from 'react';
import {ImageButtonContainer, ImgDoImageButtonContainer} from './styled'

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <ImgDoImageButtonContainer src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;