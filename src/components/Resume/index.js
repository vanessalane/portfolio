import React from 'react';

// import react-bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function Resume() {
  return (
    <>
      <Jumbotron className="bg-blue-grey-400 p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="color-white display-3"><strong>Resume</strong></h1>
          </div>
        </Container>
      </Jumbotron>

      <div className="bg-light p-4 mt-5 shadow">
        <Container>
          <CardDeck className="m-lg-4">
            <Card>
              <Card.Body>
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
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
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
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>

      <Container className="pt-3 text-center">
      <Button
          href="https://drive.google.com/file/d/1qmccLqEyEsjv0kp6O7N79qJWtfALNGZi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="m-3">
            Get the PDF
        </Button>
      </Container>
    </>
  )
}

export default Resume;