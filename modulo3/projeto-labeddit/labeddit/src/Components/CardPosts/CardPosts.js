import React, { useContext } from 'react'
import { BodyPost, DivComments, DivDislikes, DivDownBars, EnviadoPor, MainContainer, NumberLikes, StyledCommentImage, StyledCounter, TituloPost, VoteUncolored } from './Styled'
import Upvote from '../../Assets/Upvote.svg'
import Downvote from '../../Assets/Downvote.svg'
import CommentLogo from '../../Assets/Comment.svg'
import axios from 'axios'
import { baseURL } from '../../Constants/baseUrl'
import { useState } from 'react'
import UpVoteColorido from '../../Assets/UpvoteColorido.svg'
import DownVoteColorido from '../../Assets/DownvoteColorido.svg'
import { goToPosts } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function CardPosts(props) {
  const [upvote, setUpvote] = useState(false)
  const [downvote, setDownvote] = useState(false)
  const [refresh, setRefresh] = useState()
  const { states, constants } = useContext(GlobalStateContext)


  const navigate = useNavigate()

   //

   const handleUpVote = (number, id, setVote, voteName) => {
    if (upvote === true) {
      handleRemoveVote(props.id, setUpvote, upvote)
      alert("Voto zerado! upvote")
    } else {
    const body = {
      direction: number
    }
    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}/posts/${id}/votes`, body,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then((res) => {
        setVote(!voteName)
        constants.getPosts()

      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  //

  const handleRemoveVote = (id, setVote, voteName) => {
    const token = localStorage.getItem('token')
    axios
      .delete(`${baseURL}/posts/${id}/votes`,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then((res) => {
        setVote(!voteName)
        constants.getPosts()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //

  const handleDownVote = (number, id, setVote, voteName) => {
    if (downvote === true) {
      handleRemoveVote(props.id, setDownvote, downvote)
      setVote(!voteName)
      constants.getPosts()
      alert("Voto zerado! downvote")
    } else {
    const body = {
      direction: number
    }
    const token = localStorage.getItem('token')
    axios
      .put(`${baseURL}/posts/${id}/votes`, body,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then((res) => {
        console.log(res)
        setVote(!voteName)
        constants.getPosts()
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  console.log('essa aqui', props.votes)

  const renderUpVoteColor = () => {
    if (upvote === true) {
      return UpVoteColorido
    } else if (upvote === false) {
      return Upvote
    } 
  } 

  
  const renderDownVoteColor = () => {
    if (downvote === true) {
      return DownVoteColorido
    } else if (downvote === false) {
      return Downvote
    } 
  } 

  const handleOnClick = (post, id) => {
    localStorage.setItem('post', JSON.stringify(post))
    goToPosts(navigate, id)
  }

  return (
    <MainContainer>

      <EnviadoPor>Enviado por: {props.user}</EnviadoPor>

      <TituloPost>{props.title}</TituloPost>
      <BodyPost>{props.body}</BodyPost>

      <DivDownBars>

        <DivDislikes>
          <VoteUncolored onClick={() => handleUpVote(1, props.id, setUpvote, upvote)} src={renderUpVoteColor()} />
          <NumberLikes>{props.votes }</NumberLikes>
          
          <VoteUncolored onClick={() => handleDownVote(-1, props.id, setDownvote, downvote)} src={renderDownVoteColor()} />
        </DivDislikes>

        <DivComments>
          <StyledCommentImage onClick={()=>handleOnClick(props.post, props.id)} src={CommentLogo} />
          <StyledCounter>{props.commentCount <= 0 ? "0" : props.commentCount}</StyledCounter>
        </DivComments>

      </DivDownBars>
    </MainContainer>
  )
}
