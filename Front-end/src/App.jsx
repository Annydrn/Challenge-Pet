import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { AuthProvider } from "./context/AuthContext.jsx";
import Servicios from "./components/page/Servicios";
import SolicitudTareas from "./components/SolicitudTareas";
import ProfilePage from "./components/page/ProfilePage";
import Home from "./components/page/home";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/services"
              element={<Servicios/>}
            ></Route>
            <Route
              path="/service"
              element={<SolicitudTareas/>}
            ></Route>
            <Route
              path="/service/:id"
              element={<SolicitudTareas/>}
            ></Route>
            <Route
              path="/profile"
              element={<ProfilePage/>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
