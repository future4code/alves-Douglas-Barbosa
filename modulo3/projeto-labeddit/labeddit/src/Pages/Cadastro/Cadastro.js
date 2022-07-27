import React from 'react'
import Endbar from '../../Components/EndBar/Endbar'
import Header from '../../Components/Header/Header'
import StatusBar from '../../Components/StatusBar/StatusBar'
import { useUnprotectedPage } from '../../Hooks/useUnprotectedPage'
import CadastroForm from './CadastroForm'
import { MainContainer, Welcome } from './Styled'

export default function Cadastro() {
  useUnprotectedPage()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    
  }

  return (
    <MainContainer>
      <StatusBar />
      <Header />

      <Welcome>Olá, boas vindas ao Labeddit ;)</Welcome>

      <CadastroForm />

    </MainContainer>
  )
}
