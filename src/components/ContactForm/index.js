import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

// define ContactForm component
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  // adds error messages to the form
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

  // sends the email or surfaces an error on submission
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
      <Jumbotron className="bg-blue-grey-400 color-white p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="display-3"><strong>Get in Touch</strong></h1>
          </div>
        </Container>
      </Jumbotron>

      <div className="p-5 text-center">
      </div>

      <div className="shadow p-3 bg-light">
        <Container className="flex-column d-flex p-3">
          <Card>
            <Card.Body>
              <h3>Send me an email!</h3>
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

                <Button className="btn-yellow" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  )
}

export default ContactForm;