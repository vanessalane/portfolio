import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Vanessa Lane</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;