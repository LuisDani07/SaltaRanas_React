import React from 'react'

function NavBar() {
  return (
    <header>
        <a href="#" className='logo'>SaltaRanas</a>
        <ul className='nav'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Juegos</a></li>
            <li><a href="#">Torneos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div className='action'>
            <div className="searchBx">
                <a href="#"><i className='bx bx-search-alt-2' ></i></a>
                <input type="text" placeholder='search games'/>
            </div>
        </div>
        <div className="toggleMenu"></div>
    </header>
  )
}

export default NavBar