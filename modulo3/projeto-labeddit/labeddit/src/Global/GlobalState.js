import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'
import { baseURL } from '../Constants/baseUrl'

const GlobalState = (props) => {
    const [postDetail, setPostDetail] = useState()
    const [posts, setPosts] = useState([])

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
            console.log(res)
            setPosts(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    

    // 
      const states = {
        postDetail,
        setPostDetail,
        posts,
        setPosts
      }

      const constants = {
        getPosts
        
      }



    return (
        <GlobalStateContext.Provider value={{states, constants}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState