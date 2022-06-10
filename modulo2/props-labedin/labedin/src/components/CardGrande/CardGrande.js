import React from 'react';
import { BigCardContainer, H4BigCard, ImgBigCard, OutroContainerBigCard } from './styled'

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgBigCard src={ props.imagem } />
            <OutroContainerBigCard>
                <H4BigCard>{ props.nome }</H4BigCard>
                <p>{ props.descricao }</p>
            </OutroContainerBigCard>
        </BigCardContainer>
    )
}

export default CardGrande;