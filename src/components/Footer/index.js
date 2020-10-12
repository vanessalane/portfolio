import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import ContactIcons from '../ContactIcons'

function Footer() {
  return (
    <footer className="bg-white color-grey-700">
      <Container fluid>
        <Row className="text-left">
          <Col>
            <p>© 2020 Vanessa Lane</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <ContactIcons></ContactIcons>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;