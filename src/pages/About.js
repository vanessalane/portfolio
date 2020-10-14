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
      <Jumbotron fluid className="mb-0 shadow">
        <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <Image
                src={require("../assets/image/vanessalane_headshot_bw.jpg")}
                roundedCircle
                width="300vw"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">hello, world!</h1>
                <p className="text-dark text-center text-md-left h3">
                  I'm Vanessa Lane, a full-stack developer based in San Francisco.
                </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      
      <div className="shadow bg-light mt-5 mb-5">
        <Container className="p-5">
          <h3>About Me</h3>
          <p>
              I'm on the research program management team at <a href="https://www.23andme.com/" target="_blank" rel="noopener noreferrer">23andMe</a>,
              where I build study recruitment materials, run operations for our <a href="https://research.23andme.com/collaborate/" target="_blank" rel="noopener noreferrer">academic collaboration programs</a>,
              and improve internal workflows. I also have experience in education, healthcare consulting, and academic research.
          </p>
          <p>
            I started programming once I learned that I could <a href="https://automatetheboringstuff.com/" rel="noopener noreferrer" target="_blank">
            automate the boring stuff</a>. As soon as I learned Python, there was no turning back. A new job, some CS classes, and a full-stack bootcamp later,
            I'm looking to transition into a full-time engineering role.
          </p>
          <p>
            In my free time, I like to travel, cook, make pottery, and spend time with friends and family.
          </p>
        </Container>
      </div>
    </>
  )
}

export default About;