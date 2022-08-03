import axios from "axios";
import { baseURL } from '../Constants/baseUrl'

export function Signup (body, clear) {
axios
.post(`${baseURL}/users/signup`, body)
.then((res) => {
    clear()

})
.catch((err) => {
    alert(err.response.data.message)
})
}