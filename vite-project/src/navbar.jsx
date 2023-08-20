import React, { useState } from 'react';
import './App.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar is-rounded has-background-main m-1" role="navigation" aria-label="main navigation">
        <div className="navbar-brand has-background-brand">
        </div>
        
        <div className={`navbar-menu has-background-accent ${menuOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <a className="navbar-item" href="#about">About Me</a>
                <a className="navbar-item" href="#portfolio">Portfolio</a>
                <a className="navbar-item" href="#contact">Contact</a>
                <a className="navbar-item" href="#resume">Resume</a>
            </div>
        </div>
        
        <div className={`navbar-burger ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  );
}

export default Navbar;
