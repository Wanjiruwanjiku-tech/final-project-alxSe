import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h1>Paramedic Prep-pro</h1>
      </div>
      <div>
      <ul className='nav-links'>
        <li><a href='/'>About Us</a></li>
        <li><a href='/'>Contact Us</a></li>
        <li><a href='/'>Explore</a></li>
      </ul>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search for a topic' />
        <button className='search-button'>🔍</button>
                        </div>
      <button className='loginbutton'>Login</button>
    </nav>
  );
};

export default NavBar;