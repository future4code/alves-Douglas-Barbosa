import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'
import { baseURL } from '../Constants/baseUrl'

const GlobalState = (props) => {
  const [postDetail, setPostDetail] = useState({})
  const [posts, setPosts] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const darkModeOn = () => {
    setDarkMode(!darkMode)
  }
  
  //

  const getPosts = () => {
    const token = localStorage.getItem('token')
    axios
      .get(`${baseURL}/posts?page=1&size=999`,
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
        alert(err)
      })
  }


  //
  const states = {
    postDetail,
    setPostDetail,
    posts,
    setPosts,
    darkMode,
    setDarkMode
  }

  const constants = {
    getPosts,
    darkModeOn

  }



  return (
    <GlobalStateContext.Provider value={{ states, constants }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState