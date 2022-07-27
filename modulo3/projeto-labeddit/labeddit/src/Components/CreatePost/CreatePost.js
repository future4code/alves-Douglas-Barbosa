import React from 'react'
import { Container, InputPost, StyledButton } from './Styled'

export default function CreatePost() {
  return (
    <Container>
        <InputPost type='text' placeholder='Seu post aqui!' />
        <StyledButton>Postar</StyledButton>
    </Container>
  )
}
