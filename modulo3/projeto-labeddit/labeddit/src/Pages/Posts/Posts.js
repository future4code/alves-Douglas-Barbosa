import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import StatusBar from '../../Components/StatusBar/StatusBar'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { BodyPost, Container, DisplayCards, DivComments, DivDislikes, DivDownBars, EnviadoPor, InputPost, MainContainer, NumberLikes, StyledButton, StyledCommentImage, StyledCounter, StyledDivider, StyledForm, TituloPost, VoteUncolored } from './Styled'
import Upvote from '../../Assets/Upvote.svg'
import Downvote from '../../Assets/Downvote.svg'
import CommentLogo from '../../Assets/Comment.svg'
import axios from 'axios'
import { baseURL } from '../../Constants/baseUrl'
import UpVoteColorido from '../../Assets/UpvoteColorido.svg'
import DownVoteColorido from '../../Assets/DownvoteColorido.svg'
import Divider from '../../Assets/DividerL.svg'
import useForm from '../../Hooks/useForm'
import CardComments from '../../Components/CardComments/CardComments'
import Endbar from '../../Components/EndBar/Endbar'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import useRequestData from '../../Hooks/useRequestData'
import Loading from '../../Components/Loading/Loading'

export default function Posts() {
  const { states, constants } = useContext(GlobalStateContext)
  const [upvote, setUpvote] = useState(false)
  const [downvote, setDownvote] = useState(false)
  const [postComments, setPostComments] = useState([])
  const [postDetail2, setPostDetail2] = useState([])
  const { form, onChange, cleanFields } = useForm({ body: "", })

  const params = useParams();
  const navigate = useNavigate();
  useProtectedPage()

  
  
  const postDetail = states.posts.filter(post => {
    return post.id === params.id;
  })

  //

  const filtraPost = () => {
    const postFiltrado = states.posts.filter(post => {
      return post.id === params.id
    })
    setPostDetail2(postFiltrado)
  }
  console.log(postDetail2)

  useEffect(() => {
    constants.getPosts();

  }, [])


  //

  function getPostComments() {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}/posts/${params.id}/comments`,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then(res => {
        setPostComments(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  useEffect(() => {
    getPostComments();
  }, [])


  //

  const handleUpVote = (number, id, setVote, voteName) => {
    if (upvote === true) {
      handleRemoveVote(postDetail[0].id, setUpvote, upvote)
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
          console.log(res)
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
        console.log(res)
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
      handleRemoveVote(postDetail[0].id, setDownvote, downvote)
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

  //

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

  //

  const createComment = (event) => {
    event.preventDefault()

    const token = localStorage.getItem('token')
    axios
      .post(`${baseURL}/posts/${params.id}/comments`, form,
        {
          headers:
          {
            Authorization: token
          }
        })
      .then((res) => {
        console.log(res)
        getPostComments()
        cleanFields()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <MainContainer darkMode={states.darkMode}>

      <StatusBar />
      <Header darkMode={states.darkMode}/>
      {postDetail && postDetail[0] ?
      <Container darkMode={states.darkMode}>

        <EnviadoPor>Enviado por: {postDetail[0] ? postDetail[0].username : <p>loading</p>}</EnviadoPor>

        <TituloPost>{postDetail[0] ? postDetail[0].title : <p>loading</p>}</TituloPost>
        <BodyPost>{postDetail[0] ?  postDetail[0].body : <p>loading</p>}</BodyPost>

        <DivDownBars>

          <DivDislikes darkMode={states.darkMode}>
            <VoteUncolored onClick={() => handleUpVote(1, postDetail && postDetail[0].id, setUpvote, upvote)} src={renderUpVoteColor()} />
            <NumberLikes>{postDetail[0] ? postDetail[0].voteSum : <p>loading</p>}</NumberLikes>

            <VoteUncolored onClick={() => handleDownVote(-1, postDetail && postDetail[0].id, setDownvote, downvote)} src={renderDownVoteColor()} />
          </DivDislikes>

          <DivComments darkMode={states.darkMode}>
            <StyledCommentImage src={CommentLogo} />
            <StyledCounter>{postDetail[0].commentCount == 0 ? "0" : postDetail && postDetail[0].commentCount}</StyledCounter>
          </DivComments>

        </DivDownBars>
      </Container> : <Loading />}

      <StyledForm onSubmit={createComment}>

        <InputPost darkMode={states.darkMode}
          type='text'
          placeholder='Adicionar comentario'
          name='body'
          value={form.body}
          onChange={onChange} />

        <StyledButton darkMode={states.darkMode} type='submit'>Responder</StyledButton>
        <StyledDivider src={Divider} />

      </StyledForm>
      {postComments && postComments ?
      <DisplayCards darkMode={states.darkMode}>

      {postComments.map((comment) => {
        return <CardComments 
        key={comment.id}
        id={comment.id}
        body={comment.body}
        postId={comment.postId}
        username={comment.username}
        votes={comment.voteSum}
        getPostComments={getPostComments}
        userVote={comment.userVote}
        darkMode={states.darkMode}
        />
      })} 

      </DisplayCards> : <Loading />}
      <Endbar />


    </MainContainer>
  )
}
