import React from 'react';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <Image
                src={require("../assets/image/vanessalane_headshot_bw.jpg")}
                roundedCircle
                width="300vw"
                height="300vw"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                  hello, world!</h1>
                <p className="text-dark text-center text-md-left h3">
                  I'm Vanessa Lane, a full-stack developer based in San Francisco.
                </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3>About Me</h3>
          <p>
            I'm on the Research Program Management team at <a href="https://www.23andme.com/" target="_blank" rel="noopener noreferrer">23andMe</a>,
            where I coordinate web development work for research studies, run operations for our <a href="https://research.23andme.com/collaborate/" target="_blank" rel="noopener noreferrer">
            academic collaboration programs</a>, and streamline internal operations workflows.
          </p>
          <p>
            I started programming once I learned that I could <a href="https://automatetheboringstuff.com/" rel="noopener noreferrer" target="_blank">
            automate the boring stuff</a>. As soon as I learned Python, there was no turning back. A new job, some CS classes, and a full-stack bootcamp later,
            I'm looking to transition into a full-time engineering role.
          </p>
          <p>
            When I'm not in front of a screen, you might find me cooking, making pottery, or spending time with friends and family.
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;