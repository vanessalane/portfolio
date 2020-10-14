import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

// import custom components
import ContactForm from '../components/ContactForm';

// define ContactForm component
function Contact() {
  return (
    <>
      <Jumbotron className="bg-blue-grey-400 color-white p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="display-3"><strong>Get in Touch</strong></h1>
          </div>
        </Container>
      </Jumbotron>

      <ContactForm />
    </>
  )
}

export default Contact;