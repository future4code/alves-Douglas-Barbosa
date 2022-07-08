import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../../Header/Header';
import Card from '../../Card/Card';
import { MainContainer } from './Styled'
import BottomBar from '../../BottomBar/BottomBar';
import HomeBottomHr from '../../HomeBottomHr/HomeBottomHr';
import { ToastContainer, toast } from 'react-toastify';


export default function Home(props) {
  const [person, setPerson] = useState([])
  const [likeOrDislike, setLikeOrDislike] = useState("normal")

  useEffect(() => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/person')
      .then((res) => setPerson(res.data.profile))
      .catch((err) => alert(err.response))
  }, []);

  const getNewPerson = () => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/person')
      .then((res) => {
        setPerson(res.data.profile)
        setLikeAnimationNormal()
      })
      .catch((err) => toast.error(err.response), {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }

  // Card Animation functions

  const setLikeAnimation = () => {
    setLikeOrDislike("like")

  }

  const setDislikeAnimation = () => {
    setLikeOrDislike("dislike")
  }

  const setLikeAnimationNormal = () => {
    setLikeOrDislike("normal")
  }

  //

  const resetMatchesNoCheck = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglashenrique/clear`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => {
        props.getMatches()

      })
      .catch((error) => {
        toast(error.data)
      })
  }

  return (
    <MainContainer>
      <Header
        page={props.page}
        setPageTo={props.setPageTo} />
      <Card
        id={person ? person.id : resetMatchesNoCheck()}
        name={person ? person.name : resetMatchesNoCheck()}
        age={person ? person.age : resetMatchesNoCheck()}
        bio={person ? person.bio : resetMatchesNoCheck()}
        photo={person ? person.photo : resetMatchesNoCheck()}
        likeOrDislike={likeOrDislike} />
      <BottomBar
        id={person ? person.id : resetMatchesNoCheck()}
        getNewPerson={getNewPerson}
        likeOrDislike={likeOrDislike}
        setLikeAnimation={setLikeAnimation}
        setDislikeAnimation={setDislikeAnimation}
        setLikeAnimationNormal={setLikeAnimationNormal} />
      <HomeBottomHr />
      <ToastContainer />
    </MainContainer>)
}
