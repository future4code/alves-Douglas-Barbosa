import React from 'react'
import { ContainerSocialMedia, ImgGithub, ImgLinkedin, MainContainer, SpanTextColor, StyledText } from './Styled'
import GitHub from '../Assets/GitHub.svg'
import Linkedin from '../Assets/Linkedin.svg'

export default function DevelopedBy() {
    return (
        <MainContainer>
            <StyledText>Developed by <SpanTextColor>Douggx</SpanTextColor></StyledText>
            <ContainerSocialMedia>
                <a href='https://github.com/Douggx' target="_blank" rel="noopener noreferrer"><ImgGithub src={GitHub} alt='github logo'/></a>
                <a href='https://www.linkedin.com/in/douglas-henrique-840808216/' target="_blank" rel="noopener noreferrer"><ImgLinkedin src={Linkedin} alt='linkedin logo'/></a>
            </ContainerSocialMedia>
        </MainContainer>
    )
}
