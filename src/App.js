import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import Header from './components/Header';

class App extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
