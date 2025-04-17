import { Link } from "react-router-dom";
import { useState } from "react";
import './styling/Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      {/* Brand Logo with Animation */}
      <Link to="/" className="navbar-brand d-flex align-items-center brand-text">
        <span className="brand-name">VORTEX</span>
        <span className="logo-animation"><img src="" alt="" /></span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link nav-item-animation">DESIGNS</Link>
          </li>
          <li className="nav-item">
            <Link to="/adddesign" className="nav-link nav-item-animation">ADD DESIGN</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link nav-item-animation">ABOUT US</Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/signin" className="btn btn-outline-primary btn-animation me-2">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-primary btn-animation">Sign Up</Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="btn btn-toggle-mode ms-2">
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;