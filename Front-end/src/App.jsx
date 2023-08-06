
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


function App() {

  return (
    <>   
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/services' element={<h1>pagina de servicios </h1>}></Route>
    <Route path='/add-service' element={<h1>añadir servicios </h1>}></Route>
    <Route path='/service/:id' element={<h1> actualizar servicio</h1>}></Route>
    <Route path='/profile' element={<h1>pagina perfil de usuario </h1>}></Route>

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
