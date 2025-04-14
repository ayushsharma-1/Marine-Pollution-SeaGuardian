import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <img src="/png-jpg/logo/SeaGuardian Logo.png" alt="SeaGuardian Logo" />
      </Link>
      
      <nav className={`header-nav ${menuOpen ? 'header-nav-active' : ''}`}>
        <ul className="header-menu">
          <li><a href="/about-us">About Us</a></li>
          <li><Link to="/our-program">Our Program</Link></li>
          <li><Link to="/the-latest">The Latest</Link></li>
          <li><Link to="/analyze-img">Analyze Image</Link></li>
        </ul>
        <div className="header-buttons">
          <Link to="/donate">
            <button className="header-btn header-donate">Donate</button>
          </Link>
          <Link to="/login">
            <button className="header-btn header-login">Login</button>
          </Link>
        </div>
      </nav>

      <div className="header-hamburger" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
    </header>
  );
}

export default Header;