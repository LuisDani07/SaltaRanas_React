import React from 'react'

// responsive navbar
function toggleMenu(){
  const toggleMenu=document.querySelector('.toggleMenu');
  const nav=document.querySelector('.nav');
  toggleMenu.classList.toggle('active');
  nav.classList.toggle('active');
}

function NavBar() {
  return (
    <header  >
        <a href="#" className='logo'><img src='/logo.PNG'></img></a>
        <ul className='nav'>
            <li><a href="#inicio1">Inicio</a></li>
            <li><a href="#historia1">Historia</a></li>
            <li><a href="#jugar1">Como jugar</a></li>
            <li><a href="#nosotros1">sobre nosotros</a></li>
            <li><a href="#contacto1">Contacto</a></li>
        </ul>
        <div className='action'>
            <div className="searchBx">
                <a href="#"><i className='bx bx-search-alt-2' ></i></a>
                <input type="text" placeholder='buscar juegos'/>
            </div>
        </div>
        <div className="toggleMenu" onClick={toggleMenu}></div>
    </header>
  )
}

export default NavBar