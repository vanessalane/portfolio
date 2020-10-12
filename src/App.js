import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';

// import custom components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Footer from './components/Footer';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-colors/dist/colors.css';
import './App.css';

function App(){
  return (
    <div className="App  bg-light">
      <Header></Header>
      <Container className="bg-white">
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <ContactForm></ContactForm>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
