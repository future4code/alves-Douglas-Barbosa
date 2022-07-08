import React from 'react'
import { MainContainerReset, StyledText, ResetButtonImg } from './Styled'
import resetButton from '../Assets/ResetButton.svg'
import axios from 'axios'
import {  toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResetMatches(props) {
    
    const resetMatches = () => {
        const confirmBox = window.confirm(
            "You really want to reset your matches?"
        )
        if (confirmBox === true) {
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
    }}


  return (
    <MainContainerReset>
        <StyledText>Reset Matches</StyledText>
        <ResetButtonImg onClick={resetMatches} src={resetButton} alt='reset button'/>
    </MainContainerReset>
  )
}
