import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import StatusBar from '../../Components/StatusBar/StatusBar'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { BodyPost, Container, DivComments, DivDislikes, DivDownBars, EnviadoPor, InputPost, MainContainer, NumberLikes, StyledButton, StyledCommentImage, StyledCounter, StyledDivider, StyledForm, TituloPost, VoteUncolored } from './Styled'
import Upvote from '../../Assets/Upvote.svg'
import Downvote from '../../Assets/Downvote.svg'
import CommentLogo from '../../Assets/Comment.svg'
import axios from 'axios'
import { baseURL } from '../../Constants/baseUrl'
import UpVoteColorido from '../../Assets/UpvoteColorido.svg'
import DownVoteColorido from '../../Assets/DownvoteColorido.svg'
import Divider from '../../Assets/DividerL.svg'

export default function Posts() {
  const { states, constants } = useContext(GlobalStateContext)
  const [post, setPost] = useState({})
  const [upvote, setUpvote] = useState(false)
  const [downvote, setDownvote] = useState(false)
  const [upVoteCount, setUpVoteCount] = useState()
  const [downVoteCount, setDownVoteCount] = useState()

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const postLocal = JSON.parse(localStorage.getItem('post'))
    postLocal && setPost(postLocal)


  }, [])

  //

  const handleUpVote = (number, id, setVote, voteName) => {
    if (upvote === true) {
      handleRemoveVote(post.id, setUpvote, upvote)
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
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //

  const handleDownVote = (number, id, setVote, voteName) => {
    if (downvote === true) {
      handleRemoveVote(post.id, setDownvote, downvote)
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
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const renderVotes = () => {
    if (post.voteSum && upvote === false && downvote === false) {
      return <NumberLikes>{post.voteSum}</NumberLikes>
    }
    else if (upvote === true) {
      return <NumberLikes>{upVoteCount}</NumberLikes>
    } else if (downvote === true) {
      return <NumberLikes>{downVoteCount}</NumberLikes>
    } if (post.voteSum === null) {
      return <NumberLikes>{post.voteSum}</NumberLikes>
    }
  }
  console.log(post.voteSum)

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
  return (
    <MainContainer>

      <StatusBar />
      <Header />

      <Container>

        <EnviadoPor>Enviado por: {post.username}</EnviadoPor>

        <TituloPost>{post.title}</TituloPost>
        <BodyPost>{post.body}</BodyPost>

        <DivDownBars>

          <DivDislikes>
            <VoteUncolored onClick={() => handleUpVote(1, post.id, setUpvote, upvote)} src={renderUpVoteColor()} />
            <NumberLikes>{post.voteSum}</NumberLikes>

            <VoteUncolored onClick={() => handleDownVote(-1, post.id, setDownvote, downvote, setDownVoteCount)} src={renderDownVoteColor()} />
          </DivDislikes>

          <DivComments>
            <StyledCommentImage src={CommentLogo} />
            <StyledCounter>{post.commentCount <= 0 ? "0" : post.commentCount}</StyledCounter>
          </DivComments>

        </DivDownBars>
      </Container>

      <StyledForm>
        <InputPost placeholder='Adicionar comentario' />
        <StyledButton>Responder</StyledButton>
        <StyledDivider src={Divider} />
      </StyledForm>

    </MainContainer>
  )
}
