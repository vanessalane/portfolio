import React from 'react';

// import react-bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Resume() {
  return (
    <Container className="p-3">
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={{span: 4, offset: 2}} className="d-flex flex-column">
          <h3>Frontend</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap, Materialize, UIKit</li>
            <li>jQuery</li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={{span: 4, offset: 2}} className="d-flex flex-column">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>APIs</li>
            <li>REST</li>
            <li>MongoDB, Mongoose</li>
            <li>MySQL, Sequelize</li>
            <li>Express</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>Django</li>
          </ul>
        </Col>
      </Row>
      <div className="text-center p-5">
        <Button
          href="https://drive.google.com/file/d/1qmccLqEyEsjv0kp6O7N79qJWtfALNGZi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
            View Resume
        </Button>
      </div>
    </Container>
  )
}

export default Resume;