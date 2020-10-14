import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

// import custom components
import ContactForm from '../components/ContactForm';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

// define ContactForm component
function Contact() {
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Get in Touch</h1>
          </div>
        </Container>
      </Jumbotron>

      <div className="shadow p-md-4 pt-4 pb-4 mt-5 mb-5 bg-light">
        <Container className="flex-column d-flex p-3">
          <Row>
            <Col md={4} sm={12} className="d-flex flex-column">
              <h3>Contact Info</h3>
              <ul className="no-bullets">
                <li><span><i className="far fa-envelope"></i></span> vlane0593@gmail.com</li>
                <li><span><i className="fab fa-github"></i></span> vanessalane</li>
                <li><span><i className="fab fa-linkedin"></i></span> vanessa-lane</li>
              </ul>
            </Col>
            <Col md={8} sm={12} className="d-flex flex-column pt-5 pt-lg-0">
              <h3>Send me an email!</h3>
              <Card>
                <Card.Body>
                  <ContactForm />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact;