import { createContext, useState, useContext, useEffect} from 'react'
import { registerRequest, loginRequest } from '../api/auth.js';


export const AuthContext= createContext();
export const useAuth=() =>{
    const context= useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;

}

export const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [isAuthenticated, setIsAuthenticated]= useState(false);
const [errors, setErrors] = useState([])

const signup= async (user)=>{
    try {
        const res = await registerRequest(user);
        console.log(res.data);
        setUser(res.data);
        setIsAuthenticated(true);
    } catch (error) {
        console.log(error.response)
       setErrors(error.response.data)
    }
   };

const signin= async(user)=>{
  try {
    const res= await loginRequest(user)
    console.log(res)
  } catch (error) {
    console.log(error.response)
    setErrors(error.response.data)
  }

}

useEffect(() =>{
if (errors.length > 0){
    const timer= setTimeout(()=>{
        setErrors([])
    },2500)// contador le di 5 segundos para quitar la alerta de error
    return ()=>clearTimeout(timer)//el cleartimeout me limpiara el contador una vez pasado los 5 segundos para que se mas liviana la renderizacion
}
},[errors])

    return (
        <AuthContext.Provider value={{ signup, signin, user, isAuthenticated,errors}}>
      {children}
    </AuthContext.Provider>
    )
 };