import React from 'react';
import './App.css';
import Navbar from "./Navbar.js"
import Header from "./Header.js"
import About from "./About.js"
import Works from "./Works.js"
import Projects from "./Projects.js"
import Milestones from './Milestones';
import Blackallax from "./blackallax.js"
import Contact from "./Contact.js"
import Footer from "./Footer.js"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Works />
      <br /><br /> 
      <Blackallax />
      <Projects />
      <br /><br />
      <Blackallax />
      <Milestones />
      <br /><br />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
