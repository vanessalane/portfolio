import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { validateEmail } from '../../utils/helpers';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// define ContactForm component
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const { name, email, subject, message } = formState;
  const [formMessage, setFormMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
          setFormMessage('Your email is invalid.');
        } else {
          setFormMessage('');
        }
    } else {
      if (!e.target.value.length) {
        const name =  e.target.name;
        setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
      } else {
        setFormMessage('');
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function sendEmail(e) {
      e.preventDefault();
      
      emailjs.sendForm('gmail', 'template_y91kvra', '#contactForm', 'user_OY02r5T8KPqVR1frBk330')
      .then(function(response) {
        console.log(response.text);
        setFormMessage("Message sent!");
      }, function(error) {
        console.log(error.text);
        setFormMessage("Your message couldn't be sent. Please email Vanessa directly at vlane0593@gmail.com");
      });
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
          <Form onSubmit={sendEmail} className="mt-2" id="contactForm">
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
            
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control required name="message" as="textarea" rows="5" placeholder="Message" onBlur={handleChange} />
            </Form.Group>

            {formMessage && (
              <p>{formMessage}</p>
            )}

            <Button variant="primary" type="submit">Submit</Button>
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