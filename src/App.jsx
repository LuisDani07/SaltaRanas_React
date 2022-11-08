import React from 'react'
import NavBar from './Components/NavBar';
import './styles.css'
import Banner from './Components/Banner';
import moduleName from './Components/About';
import About from './Components/About';
import Historia from './Components/Historia'
import Instrucciones from './Components/Intrucciones';

function App() {
  return (
        <>
          <NavBar/>
          <Banner/>
          <About/>
          <Historia/>
          <Instrucciones/>
        </>
  )
}

export default App