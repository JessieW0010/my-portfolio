import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
