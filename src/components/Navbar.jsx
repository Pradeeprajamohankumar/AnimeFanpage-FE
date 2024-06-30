import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Jujutsu Kaisen</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
