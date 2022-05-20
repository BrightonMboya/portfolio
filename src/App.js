import React from 'react'
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
function App() {
  return (
  <React.Fragment>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
  </React.Fragment>
  );
}

export default App;
