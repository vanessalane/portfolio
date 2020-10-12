import React from 'react';

// import react-bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container className="p-3">
      <Row>
        <Col sm={12} md={6} className="justify-content-center mt-3 mb-sm-3">
          <Image
            src={require("../../assets/image/vanessalane_headshot_bw.jpg")}
            roundedCircle
            width="400vh"
            height="400vh"/>
        </Col>
        <Col sm={12} md={6} className="d-flex flex-column mt-3">
          <Row>
            <Col>
              <h2>Hello, World!</h2>
              <h1 className="color-cyan-800">I'm Vanessa Lane, a full-stack developer based in San Francisco, CA.</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              I'm on the research program management team at <a href="https://www.23andme.com/" target="_blank" rel="noopener noreferrer">23andMe</a>,
              where I build study recruitment materials, run operations for our <a href="https://research.23andme.com/collaborate/" target="_blank" rel="noopener noreferrer">academic collaboration programs</a>,
              and improve internal workflows. I also have experience in education, healthcare consulting, and academic research.
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              I started programming once I learned that I could <a href="https://automatetheboringstuff.com/" rel="noopener noreferrer" target="_blank">
              automate the boring stuff</a>. As soon as I learned Python, there was no turning back. A new job, some CS classes, and a full-stack bootcamp later,
              I'm looking to transition into a full-time engineering role.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default About;