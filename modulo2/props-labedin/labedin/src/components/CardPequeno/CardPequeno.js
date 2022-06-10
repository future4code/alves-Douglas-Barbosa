import React from 'react';
import {LittleCardContainer, LittleCardImg, OutroLittleCardContainer, LittleCardH4} from "./styled"

function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <LittleCardImg src={ props.imagem } />
            <OutroLittleCardContainer>
                <LittleCardH4>{ props.conteudo }</LittleCardH4> <p>{ props.email  }</p>
            </OutroLittleCardContainer>
        </LittleCardContainer>
        
    )
}

export default CardPequeno;