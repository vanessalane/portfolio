import React from 'react';

// import react-bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Resume() {
  return (
    <>
      <Jumbotron className="bg-blue-grey-400 p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-5">
            <h1 className="color-white display-3"><strong>Resume</strong></h1>
          </div>
        </Container>
      </Jumbotron>

      <div className="p-5 text-center">
        <Button
          href="https://drive.google.com/file/d/1qmccLqEyEsjv0kp6O7N79qJWtfALNGZi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
            Get the PDF
        </Button>
      </div>

      <div className="bg-light p-5 shadow">
        <Container className="p-3">
          <Row className="justify-content-center">
            <Col sm={12} md={6} lg={{span: 4, offset: 2}} className="d-flex flex-column">
              <h3>Frontend Tech</h3>
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
              <h3>Backend Tech</h3>
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
        </Container>
      </div>

    </>
  )
}

export default Resume;