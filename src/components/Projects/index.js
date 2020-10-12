import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  const projects = [
    {
      "title": "Drink App",
      "description": "A full-stack app for sharing cocktail recipes",
      "image": "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
      "repository": "https://github.com/vanessalane/drink-app",
      "deployed_app": "https://drink-app-dev.herokuapp.com/"
    },
    {
      "title": "COVID-19 DataHub",
      "description": "A frontend app that surfaces international case count statistics and US testing centers",
      "image": "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
      "repository": "https://github.com/tedpedersen/group-project-uc-berkeley",
      "deployed_app": "https://cvdatahub.com/"
    },
    {
      "title": "Food Festival",
      "description": "A PWA for an imaginary food festival",
      "image": "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
      "repository": "https://github.com/vanessalane/food-festival",
      "deployed_app": "https://vanessalane.github.io/food-festival/"
    },
    {
      "title": "Budget Tracker",
      "description": "A basic PWA for tracking a budget",
      "image": "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
      "repository": "https://github.com/vanessalane/budget-tracker",
      "deployed_app": "https://desolate-shore-34466.herokuapp.com/"
    },
    {
      "title": "Weather Dashboard",
      "description": "Vanilla JS app for checking the weather",
      "image": "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
      "repository": "https://github.com/vanessalane/weather-dashboard",
      "deployed_app": "https://vanessalane.github.io/weather-dashboard/"
    },
    {
      "title": "JS Code Quiz",
      "description": "A Quick JS Code Quiz to test your knowledge",
      "image": "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
      "repository": "https://github.com/vanessalane/code-quiz",
      "deployed_app": "https://vanessalane.github.io/code-quiz/"
    }
  ]
  return (
    <Row>
      {projects.map((project) => {
        return (
          <Col s={12} md={6} key={project.title}>
            <Card className="mb-4">
              <Card.Img src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center d-flex justify-content-around">
                <a href={project.repository}>Repository</a>
                <a href={project.deployed_app}>Deployed app</a>
              </Card.Footer>
            </Card>
          </Col>
        )})}
    </Row>
  )
}

export default Projects;