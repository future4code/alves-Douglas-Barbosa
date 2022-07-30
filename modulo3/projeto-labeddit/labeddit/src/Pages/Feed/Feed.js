import React, { useState } from 'react'
import CreatePost from '../../Components/CreatePost/CreatePost'
import Header from '../../Components/Header/Header'
import StatusBar from '../../Components/StatusBar/StatusBar'
import { DisplayCards, MainContainer } from './Styled'
import CardPosts from '../../Components/CardPosts/CardPosts'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { baseURL } from '../../Constants/baseUrl'
import { useEffect } from 'react'
import Endbar from '../../Components/EndBar/Endbar'
import { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Loading from '../../Components/Loading/Loading'

export default function Feed() {
  const [posts, setPosts] = useState([])
  const { states, constants } = useContext(GlobalStateContext)

  useProtectedPage()

  //

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
    constants.getPosts()
    }

  }, [])

  //


  const getPosts = () => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}/posts?page=1&size=10`,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }



  return (
    <MainContainer darkMode={states.darkMode}>
      <StatusBar />
      <Header darkMode={states.darkMode}/>

      <CreatePost />
      
      {states.posts && states.posts ?
      <DisplayCards>
        {states.posts.map((post) => {
          return <CardPosts
            key={post.id}
            body={post.body}
            commentCount={post.commentCount}
            id={post.id}
            title={post.title}
            user={post.username}
            votes={post.voteSum}
            post={post}
            getPost={getPosts} 
            userVote={post.userVote}/>
            
        })}
      </DisplayCards> : <Loading />}

      <Endbar />
    </MainContainer>
  )
}
