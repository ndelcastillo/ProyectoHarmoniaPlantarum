import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidegt from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import './navBar.css';

function NavBar() {

  return (
    <Container>
      <Navbar fixed='top' bg="light" variant='light' expand="lg" className='p-4 mb-5'>
        <Container>
          <Navbar.Brand>
            <Link className='navBarLogo' to="/">HARMONIA PLANTARUM.</Link>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link me-2' to="/">Inicio</Link>
              <Link className='nav-link me-2' to="/">Quienes Somos</Link>
              <NavDropdown title="Productos" className='navBarItem me-2'>
                <Link className='dropdown-item' to="/categoria/plantas">Plantas</Link>
                <Link className='dropdown-item' to="/categoria/macetas">Macetas</Link>
                <Link className='dropdown-item' to="/categoria/huerta">Huerta</Link>
                <Link className='dropdown-item' to="/categoria/composteras">Composteras</Link>
                <Link className='dropdown-item' to="/categoria/terrarios">Terrarios</Link>
                <Link className='dropdown-item' to="/categoria/accesorios">Accesorios</Link>
                <NavDropdown.Divider />
                <Link className='dropdown-item' to="/categoria/todo">Todo</Link>
              </NavDropdown>
              <Link className='nav-link me-2' to="/contacto">Contacto</Link>
              <Link className='nav-link me-2' to="/">Sucursales</Link>
              <Link className='nav-link me-2' to="/">Faq</Link>
              <Link className='nav-link me-2' to="/cart">
                <CartWidegt className='navBarCartWidget'/>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar



