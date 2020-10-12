import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function About() {
  return (
    <>
      <Jumbotron className="bg-blue-grey-400 mb-0 shadow">
        <Container className="d-flex justify-content-space-between align-items-center">
          <div className="justify-content-center p-5">
            <Image
              src={require("../../assets/image/vanessalane_headshot_bw.jpg")}
              roundedCircle
              width="300vh"
              height="300vh"/>
          </div>
          <div className="justify-content-center p-5">
            <h1 className="color-white display-3"><strong>Hello, World!</strong></h1>
            <h2>I'm Vanessa Lane, a full-stack developer based in San Francisco, CA.</h2>
          </div>
        </Container>
      </Jumbotron>
      
      <div>
        <Container className="p-5 d-flex justify-content-around align-items-center">
          <LinkContainer to="/projects">
            <Button>Check out my projects</Button>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Button>Get in Touch</Button>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Button>View my Resume</Button>
          </LinkContainer>
        </Container>
      </div>

      <div className="shadow bg-light">
        <Container className="p-5">
          <h2>About Me</h2>
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