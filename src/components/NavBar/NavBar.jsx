import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidegt from '../CartWidget/CartWidget';
import './navBar.css';

function NavBar() {

  return (
    <Container>
      <Navbar fixed='top' bg="light" variant='light' expand="lg" className='p-4  mb-5'>
        <Container>
          <Navbar.Brand href="#home">Happy Plants</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Quienes Somos</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Plantas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Macetas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Composteras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Huerta</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Filotaxia
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Contacto</Nav.Link>
              <Nav.Link href="#home">Sucursales</Nav.Link>
              <Nav.Link href="#home">Faq</Nav.Link>
              <Nav.Link href="#home">
                <CartWidegt/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar



