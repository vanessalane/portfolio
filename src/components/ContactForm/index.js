import React, { useState } from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import utils
import sendEmail from '../../utils/email';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', body: '' });
  const { name, email, subject, body } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (!e.target.value.length) {
      const name =  e.target.name;
      setErrorMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
    } else {
        setErrorMessage('');
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
      e.preventDefault();
      sendEmail(name, email, subject, body);
  }

  return (
    <Container className="p-3">
      <Row>
        <Col md={5} lg={3} className="flex-column d-flex p-3">
          <h2>Contact</h2>
            <a
              href="https://github.com/vanessalane"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              <span><i className="fab fa-github"></i> vanessalane</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vanessa-lane/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              <span><i className="fab fa-linkedin"></i> vanessa-lane</span>
            </a>
            <a
              href="mailto:vlane0593@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              <span><i className="far fa-envelope"></i> vlane0593@gmail.com</span>
            </a>
        </Col>
        <Col md={7} lg={9} className="d-flex flex-column p-3">
          <h2>Send an email</h2>
          <Form onSubmit={handleSubmit} className="mt-2">
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control required name="name" placeholder="Jane Doe" onBlur={handleChange} />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Your Email</Form.Label>
              <Form.Control required name="email" type="email" placeholder="jdoe@gmail.com"  onBlur={handleChange} />
            </Form.Group>
          
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control required name="subject" placeholder="Subject" onBlur={handleChange} />
            </Form.Group>
            
            <Form.Group controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control required name="body" as="textarea" rows="5" placeholder="Body" onBlur={handleChange} />
            </Form.Group>

            {errorMessage && (
              <p className="error-text ">{errorMessage}</p>
            )}

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactForm;