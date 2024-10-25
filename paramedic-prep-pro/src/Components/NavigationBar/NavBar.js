import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/Search';
import '../../Assets/styles/styles.css';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
        <h1><Link to='/'>Paramedic Prep-pro</Link></h1>
      </div>
      <div>
      <ul className='nav-links'>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/topics'>Explore</Link></li>
      </ul>
      </div>
      <button className='loginbutton' onClick={handleLogin}>Login</button>
    </nav>
    <Search />
    </>
  );
};

export default NavBar;