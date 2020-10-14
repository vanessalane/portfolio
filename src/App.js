import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import custom components
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
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
        <main>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
