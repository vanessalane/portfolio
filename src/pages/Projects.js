import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import Project from '../components/Project';

// import images for apps
import movieExplorerImage from '../assets/image/movie_explorer.png';
import drinkAppImage from '../assets/image/drink_app.png';
import covidDatahubImage from '../assets/image/covid_datahub.png';
import budgetTrackerImage from '../assets/image/budget_tracker.png';
import weatherDashboardImage from '../assets/image/weather_dashboard.png';
import jsQuizImage from '../assets/image/js_quiz.png';

function Projects() {
  const projects = [
    {
      "title": "Movie Explorer",
      "description": "A MERN app for discovering and saving movies",
      "key": "movie-explorer",
      "imageSrc": movieExplorerImage,
      "repository": "https://github.com/vanessalane/movie-explorer",
      "deployed_app": "https://vanessalane-movieexplorer.herokuapp.com/"
    },
    {
      "title": "Drink App",
      "description": "A full-stack app for sharing cocktail recipes",
      "key": "drink-app",
      "imageSrc": drinkAppImage,
      "repository": "https://github.com/vanessalane/drink-app",
      "deployed_app": "https://drink-app-dev.herokuapp.com/"
    },
    {
      "title": "COVID-19 DataHub",
      "description": "A frontend app for International case stats and US testing centers",
      "key": "covid-datahub",
      "imageSrc": covidDatahubImage,
      "repository": "https://github.com/tedpedersen/group-project-uc-berkeley",
      "deployed_app": "https://cvdatahub.com/"
    },
    {
      "title": "Budget Tracker",
      "description": "A basic PWA for tracking a budget",
      "key": "budget-tracker",
      "imageSrc": budgetTrackerImage,
      "repository": "https://github.com/vanessalane/budget-tracker",
      "deployed_app": "https://desolate-shore-34466.herokuapp.com/"
    },
    {
      "title": "Weather Dashboard",
      "description": "A frontend vanilla JS app for checking the weather",
      "key": "weather-dashboard",
      "imageSrc": weatherDashboardImage,
      "repository": "https://github.com/vanessalane/weather-dashboard",
      "deployed_app": "https://vanessalane.github.io/weather-dashboard/"
    },
    {
      "title": "JS Code Quiz",
      "description": "A frontend vanilla JS Code Quiz to test your knowledge",
      "key": "js-quiz",
      "imageSrc": jsQuizImage,
      "repository": "https://github.com/vanessalane/code-quiz",
      "deployed_app": "https://vanessalane.github.io/code-quiz/"
    }
  ]
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Recent Projects</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3 ">
        <Row>
          {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Projects;