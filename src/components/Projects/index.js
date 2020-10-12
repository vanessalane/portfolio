import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import images for apps
import drinkAppImage from '../../assets/image/drink_app/drink_app.png';
import covidDatahubImage from '../../assets/image/covid_datahub/covid_datahub.png';
import budgetTrackerImage from '../../assets/image/budget_tracker/budget_tracker.png';
import workdaySchedulerImage from '../../assets/image/workday_scheduler/workday_scheduler.png';
import weatherDashboardImage from '../../assets/image/weather_dashboard/weather_dashboard.png';
import jsQuizImage from '../../assets/image/js_quiz/js_quiz.png';

function Projects() {
  const projects = [
    {
      "title": "Drink App",
      "description": "A full-stack app for sharing cocktail recipes",
      "imageClass": "drink-app",
      "imageSrc": drinkAppImage,
      "repository": "https://github.com/vanessalane/drink-app",
      "deployed_app": "https://drink-app-dev.herokuapp.com/"
    },
    {
      "title": "COVID-19 DataHub",
      "description": "A frontend app for International case stats and US testing centers",
      "imageClass": "covid-datahub",
      "imageSrc": covidDatahubImage,
      "repository": "https://github.com/tedpedersen/group-project-uc-berkeley",
      "deployed_app": "https://cvdatahub.com/"
    },
    {
      "title": "Budget Tracker",
      "description": "A basic PWA for tracking a budget",
      "imageClass": "budget-tracker",
      "imageSrc": budgetTrackerImage,
      "repository": "https://github.com/vanessalane/budget-tracker",
      "deployed_app": "https://desolate-shore-34466.herokuapp.com/"
    },
    {
      "title": "Workday Scheduler",
      "description": "A frontend vanilla JS app for scheduling your workday",
      "imageClass": "workday-scheduler",
      "imageSrc": workdaySchedulerImage,
      "repository": "https://github.com/vanessalane/workday-scheduler",
      "deployed_app": "https://vanessalane.github.io/workday-scheduler/"
    },
    {
      "title": "Weather Dashboard",
      "description": "A frontend vanilla JS app for checking the weather",
      "imageClass": "weather-dashboard",
      "imageSrc": weatherDashboardImage,
      "repository": "https://github.com/vanessalane/weather-dashboard",
      "deployed_app": "https://vanessalane.github.io/weather-dashboard/"
    },
    {
      "title": "JS Code Quiz",
      "description": "A frontend vanilla JS Code Quiz to test your knowledge",
      "imageClass": "js-quiz",
      "imageSrc": jsQuizImage,
      "repository": "https://github.com/vanessalane/code-quiz",
      "deployed_app": "https://vanessalane.github.io/code-quiz/"
    }
  ]
  return (
    <>
    <Jumbotron className="bg-blue-grey-400 color-white p-5 mb-0 shadow">
      <Container className="text-center">
        <div className="p-5">
          <h1 className="display-3"><strong>Recent Projects</strong></h1>
        </div>
      </Container>
    </Jumbotron>

    <div className="p-5 text-center">
      <Button
        href="https://github.com/vanessalane"
        target="_blank"
        rel="noopener noreferrer">
          View all of my projects on GitHub
      </Button>
    </div>

    <div className="bg-light p-5 shadow">
      <Container>
        <Row>
        {projects.map((project) => {
          return (
            <Col s={12} md={6} key={project.title}>
              <Card className="mb-3 shadow">
                <Card.Img src={project.imageSrc} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <a href={project.deployed_app} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer"><span><i className="fab fa-github"></i></span></a>
                  </Card.Title>
                  <Card.Text>
                      {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )})}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Projects;