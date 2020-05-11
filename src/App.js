import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Service from './Components/Service';
import Footer from './Components/Footer';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="main-heading">
        <>
            <Navbar></Navbar>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Service></Service>
            <Contact></Contact>
            <Footer></Footer>
        </>
    </div>
  );
}

export default App;
