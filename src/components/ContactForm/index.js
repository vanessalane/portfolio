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
    <>
    <div className="bg-blue-grey-500 p-5">
      <Container className="text-center">
        <div className="p-5">
          <h1 className="color-white display-3">Get in Touch</h1>
        </div>
      </Container>
    </div>

      <div className="bg-white shadow-sm">
        <Container className="flex-column d-flex p-5 bg-white">
          <h2>Send me an email</h2>
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
              Submit
            </Button>
          </Form>
        </Container>
      </div>

      <div className="bg-amber-100 color-grey-500">
        <Container className="p-5 text-center">
          <Row>
            <Col>
                <span><i className="far fa-envelope fa-2x"></i></span>
            </Col>
            <Col>
                <span><i className="fab fa-github fa-2x"></i></span>
            </Col>
            <Col>
                <span><i className="fab fa-linkedin fa-2x"></i></span>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="mailto:vlane0593@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 h5 color-grey-500">
                  vlane0593@gmail.com
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/vanessalane"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 h5 color-grey-500">
                vanessalane
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/vanessa-lane/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 h5 color-grey-500">
                vanessa-lane
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContactForm;