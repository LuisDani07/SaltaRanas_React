import React from 'react'
import NavBar from './Components/NavBar';
import './styles.css'
import Banner from './Components/Banner';
import About from './Components/About';
import Historia from './Components/Historia'
import Instrucciones from './Components/Intrucciones';
import Contacto from './Components/Contacto'

function App() {
  return (
        <>
          <NavBar/>
          <Banner/>
          <Historia/>
          <Instrucciones/>
          <About/>
          <Contacto/>
        </>
  )
}

export default App