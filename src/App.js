import React from 'react';

// import components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-colors/dist/colors.css';
import './App.css';

function App(){
  return (
    <div className="App">
      <Header></Header>
      <main className="mt-4 mb-4">
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
