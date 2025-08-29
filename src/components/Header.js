import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/organic-store-logo5.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Organic Store" className="logo" />
        <ul className="nav desktop-nav">
          <li><a href='#product'>Everything</a></li>
          <li><a href='#trending'>Groceries</a></li>
          <li><a href='#review'>Juice</a></li>
        </ul>
      </div>

      <ul className="nav right desktop-nav">
        <li>About</li>
        <li>Contact</li>
        <li>👤</li>
        <li>🛒</li>
      </ul>


      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="nav mobile-nav">
            <li><a href='#product'>Everything</a></li>
            <li><a href='#trending'>Groceries</a></li>
            <li><a href='review'>Juice</a></li>
            <li>About</li>
            <li>Contact</li>
            <li>👤</li>
            <li>🛒</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;


