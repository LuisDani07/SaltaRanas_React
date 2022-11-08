import React from 'react'
import NavBar from './Components/NavBar';
import './styles.css'
import Banner from './Components/Banner';
import moduleName from './Components/About';
import About from './Components/About';

function App() {
  return (
        <>
          <NavBar/>
          <Banner/>
          <About/>
        </>
  )
}

export default App