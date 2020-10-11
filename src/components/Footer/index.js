import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Footer() {
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
  return (
    <footer className="bg-light">
      <Container fluid>
      <Row className="text-center">
        <Col>
          <p>© 2020 Vanessa Lane</p>
        </Col>
        <Col>
          {contactLinks.map((contactLink) => {
            return (
              <OverlayTrigger
                key={`${contactLink.tooltip}_header`}
                placement="top"
                overlay={
                  <Tooltip>
                    {contactLink.tooltip}
                  </Tooltip>
                }
              >
              <a href={contactLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted">
                <span><i className={contactLink.classes}></i></span>
              </a>
            </OverlayTrigger>)
          })}
        </Col>
      </Row>
      </Container>
    </footer>
  )
}

export default Footer;