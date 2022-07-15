import React from 'react'
import axios from 'axios'
import { BarContainer, SuperLikeButton, LikeButton, DislikeButton } from './Styled'
import Dislike from '../Assets/DislikeGroup.svg'
import SuperLike from '../Assets/SuperLikeGroup.svg'
import Like from '../Assets/LikeGroup.svg'
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'

export default function BottomBar(props) {

  const LikeOrDislike = (choice) => {
    const body = {
      id: `${props.id}`,
      choice: choice
    }

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/choose-person`,
        body,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        if (choice === true) {
          props.setLikeAnimation()
        } else if (choice === false) {
          props.setDislikeAnimation()
        }
        if (res.data.isMatch === true) {
          MatchAlert()
        }
        props.getNewPerson()

      })
      .catch((error) => {
        ApiErrorAlert()
        props.getNewPerson()
      })

  }

  const MatchAlert = () => {
    toast("It's a Match ❤️", {
      className: "match-toast",
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    })
  }

  const ApiErrorAlert = () => {
    toast.error("API's Error! 😔", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const ToastAlertSuperLike = () => {
    toast.info('It looks like you are not an AstroMatch subscriber. We will be enabling this functionality in a few light years! 🚀', {
      className: "superlike-toast",
      position: "bottom-center",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <BarContainer>
      <DislikeButton onClick={() => LikeOrDislike(false)} src={Dislike} alt='dislike button'></DislikeButton>
      <SuperLikeButton onClick={ToastAlertSuperLike} src={SuperLike} alt='superlike button'></SuperLikeButton>
      <LikeButton onClick={() => LikeOrDislike(true)} src={Like} alt='like button'></LikeButton>
    </BarContainer>
  )
}
