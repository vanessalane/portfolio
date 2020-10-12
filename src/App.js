import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';

// import custom components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-colors/dist/colors.css';
import './App.css';

function App(){
  return (
    <div className="App">
      <Header></Header>
      <Container className="mt-4 mb-4">
        <About></About>
        <Projects></Projects>
        <ContactForm></ContactForm>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
