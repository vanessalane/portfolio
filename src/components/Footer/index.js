import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-light">
      <Container fluid>
      <Row className="text-center">
        <Col>
          <a href="https://www.linkedin.com/in/vanessa-lane/" className="text-muted"><span><i className="fab fa-linkedin fa-2x"></i></span></a>
          <a href="https://github.com/vanessalane" className="text-muted"><span><i className="fab fa-github fa-2x"></i></span></a>
          <a href="https://www.instagram.com/vl.pottery/" className="text-muted"><span><i className="fab fa-instagram fa-2x"></i></span></a>
        </Col>
      </Row>
      </Container>
    </footer>
  )
}

export default Footer;