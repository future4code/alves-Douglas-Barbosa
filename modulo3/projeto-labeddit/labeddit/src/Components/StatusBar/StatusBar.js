import React from 'react'
import { Container, HourImage, HourMoment, StatusImage } from './Styled'
import Hour from '../../Assets/Hour.svg'
import Status from '../../Assets/Status Icons.svg'

export default function StatusBar() {
  const hora = new Date();

  hora.getHours()

  return (
    <Container>
      <HourMoment>{hora.toString().slice(16,21)}</HourMoment>
      <StatusImage src={Status} />
    </Container>
  )
}
