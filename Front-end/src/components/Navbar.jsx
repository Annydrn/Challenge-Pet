import {Outlet,Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
   
     <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Pets Luna</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="#home">Inicio</Link>
            <Nav.Link href="#features"> Servicios</Nav.Link>
            <Nav.Link href="#pricing">Direccion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default ColorSchemesExample;