import axios from 'axios'
import { baseURL } from '../Constants/baseUrl'
import { goToFeed } from '../Routes/Coordinator'

export function login(body, clear, navigate) {
    axios
    .post(`${baseURL}/users/login`, body)
    .then((res) => {
      clear()
      localStorage.setItem("token", res.data.token)
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err.response.data)

    })
}
