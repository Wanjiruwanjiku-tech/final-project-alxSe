import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/Search';

const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
        <h1>Paramedic Prep-pro</h1>
      </div>
      <div>
      <ul className='nav-links'>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/'>Explore</Link></li>
      </ul>
      </div>
      <button className='loginbutton'>Login</button>
    </nav>
    <Search />
    </>
  );
};

export default NavBar;