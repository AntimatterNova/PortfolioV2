import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar is-rounded has-background-main m-1" role="navigation" aria-label="main navigation">
        <div className="navbar-brand has-background-brand">
        </div>
        
        <div className={`navbar-menu has-background-accent ${menuOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <link
                  to="/About" 
                  className={`navbar-item ${currentPage === '/About' ? 'nav-link active' : 'nav-link'}`}
                >
                  About Me
                </link>
                <link
                  to="/Portfolio"
                  className={`navbar-item ${currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}`}
                >
                  Portfolio
                </link>
                <link
                  to="/Contact"
                  className={`navbar-item ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`}
                >
                  Contact
                </link>
                <link
                className={`navbar-item ${currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}`}
                >
                  Resume
                </link>
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

export default NavTabs;
