import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
      <footer class="bg-light">
      <Container>
          <Row className="justify-content-md-center text-center">
              <Col>
                  <a href="https://www.linkedin.com/in/vanessa-lane/" class="text-muted">LinkedIn</a>
              </Col>
              <Col>
                  <a href="https://github.com/vanessalane" class="text-muted">GitHub</a>
              </Col>
              <Col>
                  <a href="https://www.instagram.com/vl.pottery/" class="text-muted">Instagram</a>
              </Col>
          </Row>
      </Container>
      </footer>
  )
}

export default Footer;