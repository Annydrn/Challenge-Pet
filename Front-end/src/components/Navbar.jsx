import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../context/AuthContext";

function NavbarPage() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="text-warning">
          App Pets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuthenticated ? (
              <>
                <li className="text-warning">Bienvenido {user.firstname}</li>
                <li>
                  <Nav.Link href="/service/:id">Solicitar Servicios</Nav.Link>
                </li>
                <li>
                  <Nav.Link
                  className="bg-warning text-light rounded"
                    href="/"
                    onClick={() => {
                      logout();
                    }}
                  >
                      Cerrar Sesión
                  </Nav.Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Nav.Link href="signup" >Registrate</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="login" className="bg-warning text-light rounded" >Inicar Sesión</Nav.Link>
                </li>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
