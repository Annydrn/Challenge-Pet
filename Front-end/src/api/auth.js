import  axios  from "./axios.js";


export const registerRequest = user => axios.post(`/signup`, user);
export const loginRequest = user => axios.post(`/login`, user);
export const verityTokenRequet = () => axios.get(`/verify`);


