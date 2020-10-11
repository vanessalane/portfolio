import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
