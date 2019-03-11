import React from 'react';
import { Link } from 'react-router-dom'; //use for Link tag instead of a tag

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
      <Link to="/" className="navbar-brand">
        Footer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Current Weather
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Login form
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
