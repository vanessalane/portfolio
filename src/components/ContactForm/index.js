import React, { useState } from 'react';

// import react-bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import utils
import sendEmail from '../../utils/sendEmail';

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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control required name="name" placeholder="Name" onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control required name="email" type="email" placeholder="Email"  onBlur={handleChange} />
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
  )
}

export default ContactForm;