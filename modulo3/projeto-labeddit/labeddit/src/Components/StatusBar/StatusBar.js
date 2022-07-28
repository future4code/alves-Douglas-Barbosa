import React, { useContext } from 'react'
import { Container, HourMoment, StatusImage } from './Styled'
import Status from '../../Assets/Status Icons.svg'
import DarkMode from '../../Assets/DarkMode.svg'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function StatusBar() {
  const { states, constants } = useContext(GlobalStateContext)

  const hora = new Date();

  hora.getHours()

  return (
    <Container darkMode={states.darkMode}>
      <HourMoment>{hora.toString().slice(16,21)}</HourMoment>
      <StatusImage onClick={constants.darkModeOn} src={DarkMode} />
      <StatusImage src={Status} />
    </Container>
  )
}
