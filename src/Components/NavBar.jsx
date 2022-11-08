import React from 'react'

function NavBar() {
  return (
    <header>
        <a href="#" className='logo'>SaltaRanas</a>
        <ul className='nav'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Tournament</a></li>
            <li><a href="#">Contact</a></li>
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