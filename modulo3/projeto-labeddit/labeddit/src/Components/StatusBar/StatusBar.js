import React from 'react'
import { Container, HourImage, StatusImage } from './Styled'
import Hour from '../../Assets/Hour.svg'
import Status from '../../Assets/Status Icons.svg'

export default function StatusBar() {
  return (
    <Container>
      <HourImage src={Hour} />
      <StatusImage src={Status} />
    </Container>
  )
}
