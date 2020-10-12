import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

// import bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import custom components
import ContactIcons from '../ContactIcons'

function Header() {
  return(
    <>
      <Navbar expand="lg" className="bg-white shadow-sm">
        <Navbar.Brand><span className="color-cyan-800"><strong>Vanessa Lane</strong></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <ContactIcons></ContactIcons>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron fluid className="bg-yellow-700 shadow-sm">
        <Container>
          <h1>Projects</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Header;