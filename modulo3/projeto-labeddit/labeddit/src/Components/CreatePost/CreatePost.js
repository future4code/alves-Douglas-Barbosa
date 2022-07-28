import axios from 'axios'
import React, { useContext } from 'react'
import { baseURL } from '../../Constants/baseUrl'
import useForm from '../../Hooks/useForm'
import { Container, InputPost, InputTitle, StyledButton, StyledDivider, StyledForm } from './Styled'
import Divider from '../../Assets/DividerL.svg'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function CreatePost() {
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" })
  const { states, constants } = useContext(GlobalStateContext)

  const createPost = (event) => {
    event.preventDefault()
  const token = localStorage.getItem('token')
  axios
    .post(`${baseURL}/posts`, form,
      {
        headers:
        {
          Authorization: token
        }
      })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <Container>
        <StyledForm onSubmit={createPost}>

        <InputTitle
        darkMode={states.darkMode}
        type='text' 
        placeholder='Titulo do post' 
        name='title'
        value={form.title}
        onChange={onChange}/>

        <InputPost 
        darkMode={states.darkMode}
        type='text' 
        placeholder='Seu post aqui!' 
        name='body'
        value={form.body}
        onChange={onChange}/>

        <StyledButton darkMode={states.darkMode} type='submit'>Postar</StyledButton>
        </StyledForm>

        <StyledDivider src={Divider} />
    </Container>
  )
}
