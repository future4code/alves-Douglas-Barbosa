import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import StatusBar from '../../Components/StatusBar/StatusBar'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'
import CadastroForm from './CadastroForm'
import { MainContainer, Welcome } from './Styled'

export default function Cadastro() {
  const { states, constants } = useContext(GlobalStateContext)

  useUnprotectedPage()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    
  }

  return (
    <MainContainer darkMode={states.darkMode}>
      <StatusBar />
      <Header darkMode={states.darkMode}/>

      <Welcome darkMode={states.darkMode}>Olá, boas vindas ao Labeddit ;)</Welcome>

      <CadastroForm darkMode={states.darkMode}/>

    </MainContainer>
  )
}
