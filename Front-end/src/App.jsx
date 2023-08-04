
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Signup from './Signup'


function App() {

  return (
    <>   
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
