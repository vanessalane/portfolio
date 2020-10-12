import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import custom components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Footer from './components/Footer';

import NoMatch from './pages/NoMatch';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-colors/dist/colors.css';
import './App.css';

function App(){
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="bg-blue-50">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={ContactForm} />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
