import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/icons/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <img src={logo} alt='Logo' className='navbar__logo-img' />
        </div>
        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          <li>
            <a className='navbar__link' href='#home' onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#about' onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#portfolio' onClick={() => setOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a className='navbar__link' href='#contact' onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`navbar__hamburger${open ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          <span className='navbar__hamburger-line'></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
