import React, { Component } from 'react';

// import components
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-colors/dist/colors.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main className="mt-4 mb-4">
          <Projects></Projects>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
