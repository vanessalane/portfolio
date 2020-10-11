import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import custom components
import ContactIcons from '../ContactIcons'

function About() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} className="d-flex flex-column">
          <h2>Hello, World!</h2>
          <p>
            I'm Vanessa Lane, a full-stack developer based in San Francisco, CA.
          </p>
          <p>
            I started programming in my second job out of college, where, in the words of Al Sweigart, I wanted
            to <a href="https://automatetheboringstuff.com/" rel="noopener noreferrer" target="_blank">automate the boring stuff</a>.
            A friend encouraged me to start learning Python and there was no turning back. A new job,
            some CS classes, and a full-stack bootcamp later, I'm looking to transition into a full-time
            engineering role.
          </p>
          <p className="d-flex">
            <ContactIcons></ContactIcons>
          </p>
        </Col>
        <Col sm={12} md={6} className="justify-content-center">
          <Image
            src={require("../../assets/image/vanessalane_headshot_bw.jpg")}
            roundedCircle
            width="300vh"
            height="300vh"/>
        </Col>
      </Row>
    </Container>
  )
}

export default About;