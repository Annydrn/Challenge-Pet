import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { AuthProvider } from "./context/AuthContext.jsx";
import Servicios from "./components/page/Servicios";
import SolicitudTareas from "./components/SolicitudTareas";
import ProfilePage from "./components/page/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import { ServiceProvider } from "./context/ServiceContext";

function App() {
  return (
    <>
      <AuthProvider>
      <ServiceProvider>
      <BrowserRouter>
          <Routes>
            {/* RUTAS PUBLICAS DE LIBRE ACCESO */}
            <Route path="/" element={<h1> home</h1>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>

            {/* RUTAS PRIVADAS SOLO PARA USUARIOS REGISTRADOS */}

      <Route element={<ProtectedRoute/>}>
      
      <Route path="/services" element={<Servicios />}></Route>
            <Route path="/service" element={<SolicitudTareas />}></Route>
            <Route path="/service/:id" element={<SolicitudTareas />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
      </Route>

          </Routes>
        </BrowserRouter>
      </ServiceProvider>
      </AuthProvider>
    </>
  );
}

export default App;
