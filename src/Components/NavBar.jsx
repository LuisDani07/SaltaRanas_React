import React from 'react'



function NavBar() {
  return (
    <header className='sticky'>
        <a href="#" className='logo'>SaltaRanas</a>
        <ul className='nav'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Historia</a></li>
            <li><a href="#">Como jugar</a></li>
            <li><a href="#">sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div className='action'>
            <div className="searchBx">
                <a href="#"><i className='bx bx-search-alt-2' ></i></a>
                <input type="text" placeholder='buscar juegos'/>
            </div>
        </div>
        <div className="toggleMenu"></div>
    </header>
  )
}

export default NavBar