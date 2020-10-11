import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Header() {
  const contactLinks = [
    {
      "tooltip": "Email",
      "url": "mailto:vlane0593@gmail.com",
      "classes": "far fa-envelope"
    },
    {
      "tooltip": "LinkedIn",
      "url": "https://www.linkedin.com/in/vanessa-lane/",
      "classes": "fab fa-linkedin"
    },
    {
      "tooltip": "GitHub",
      "url": "https://github.com/vanessalane",
      "classes": "fab fa-github"
    },
    {
      "tooltip": "Instagram",
      "url": "https://www.instagram.com/vl.pottery/",
      "classes": "fab fa-instagram"
    },
  ]

  return(
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Vanessa Lane</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav className="d-none d-lg-flex">
            {contactLinks.map((contactLink) => {
              return (<OverlayTrigger
                key={`${contactLink.tooltip}_footer`}
                placement="bottom"
                overlay={
                  <Tooltip>
                    {contactLink.tooltip}
                  </Tooltip>
                }
              >
                <Nav.Link
                  href={contactLink.url}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-muted">
                    <span><i className={contactLink.classes}></i></span>
                </Nav.Link>
              </OverlayTrigger>)
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron fluid>
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