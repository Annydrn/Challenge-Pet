import axios from "axios";

const instance =axios.create({
    baseURL:"http://localhost:3300/api",
    withCredentials: true //estas credenciales es para que las cookies se establescan aca en  el front
})

export default instance