import React from 'react'
import './Navbar.css';
import nav_logo from '../../assets/New_logo.png';
import nav_profile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={nav_logo} alt="" className='nav_logo' />
        <img src={nav_profile} alt="" className='nav_profile' />
    </div>
  )
}

export default Navbar