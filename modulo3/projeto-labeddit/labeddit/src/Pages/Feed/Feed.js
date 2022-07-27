import React, { useState } from 'react'
import CreatePost from '../../Components/CreatePost/CreatePost'
import Header from '../../Components/Header/Header'
import StatusBar from '../../Components/StatusBar/StatusBar'
import { DisplayCards, MainContainer, StyledDivider } from './Styled'
import Divider from '../../Assets/DividerL.svg'
import CardPosts from '../../Components/CardPosts/CardPosts'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import axios from 'axios'
import {baseURL} from '../../Constants/baseUrl'
import { useEffect } from 'react'
import Endbar from '../../Components/EndBar/Endbar'

export default function Feed() {
  const [posts, setPosts] = useState([])
  console.log(posts)

  useEffect(() => {
    getPosts()
   
      
    } , [])

  const getPosts = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    axios
    .get(`${baseURL}/posts?page=1&size=10`, 
    {
      headers:
      {
        Authorization: token
      }
  })
  .then((res) => {
    console.log(res)
    setPosts(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

  useProtectedPage()

  return (
    <MainContainer>
      <StatusBar />
      <Header />

      <CreatePost />
      <StyledDivider src={Divider} />

      <DisplayCards>
      {posts.map((post) => {
        return <CardPosts 
        body={post.body}
        commentCount={post.commentCount}
        id={post.id}
        title={post.title}
        user={post.username}
        votes={post.voteSum}/>
      })}
      </DisplayCards>

      <Endbar />
    </MainContainer>
  )
}
