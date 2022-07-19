import React from 'react';
import './Style/Navbar.css';
import {Link} from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <div className='bottomNavbar'>
        <div>© 2022 Imgur, Inc</div>
        <div className='bottomContent'>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/term'>Term</Link>
        <Link className='link' to='/privacy'>Privacy</Link>
        <Link className='link' to='/rules'>Rules</Link>
        <Link className='link' to='/help'>Help</Link>
        <Link className='link' to='/emerald'>Emerald</Link>
        <Link className='link' to='/store'>Store</Link>
        <Link className='link' to='/advertise'>Advertise</Link>
        <Link className='link' to='/blog'>Blog</Link>
        <Link className='link' to='/wellness'>Wellness</Link>
        <Link className='link' to='/ccpa'>CCPA</Link>
        <Link className='link' to='/api'>API</Link>
        </div>
        <div>
        <Link className='link' to='/app'>Get The App</Link>
        </div>
       
    </div>
  )
}

export default BottomNavbar;