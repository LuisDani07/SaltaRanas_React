import React from 'react'
import NavBar from './Components/NavBar';
import './styles.css'
import Banner from './Components/Banner';
import About from './Components/About';
import Historia from './Components/Historia'
import Instrucciones from './Components/Intrucciones';
import Contacto from './Components/Contacto'
import firebase from 'firebase/compat/app';

function App() {
  const firebaseApp=firebase.apps[0];
  return (
        <>
        {
          JSON.stringify(firebaseApp)
        }
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