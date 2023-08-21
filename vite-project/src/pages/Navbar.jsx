import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar() {
  const currentPage = useLocation().pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar is-rounded has-background-brand m-1" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="title has-text-white m-1">Darien Valet</h1>
        </div>
        
        <div className={`navbar-menu has-background-clear ${menuOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <a
                  href="/" 
                  className={`navbar-item has-background-main has-text-white has-main-shadow is-rounded ${currentPage === '/About' ? 'nav-link active' : 'nav-link'}`}
                >
                  About Me
                </a>
                <a
                  href="/portfolio"
                  className={`navbar-item has-background-main has-text-white has-main-shadow is-rounded ${currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}`}
                >
                  Portfolio
                </a>
                <a
                  href="/contact"
                  className={`navbar-item has-background-main has-text-white has-main-shadow is-rounded ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`}
                >
                  Contact
                </a>
            </div>
        </div>
        
        <div className={`navbar-burger has-text-white has-background-accent is-rounded ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  );
}

export default Navbar;
