import  axios  from "axios";

const API = "http://localhost:3300/api";

export const registerRequest = user => axios.post(`${API}/signup`, user);
