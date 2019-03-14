import React from 'react';
import { Link } from 'react-router-dom'; //use for Link tag instead of a tag

const HeaderNavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Link to="/" className="navbar-brand">
          Weather
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
              <Link to="/forecast" className="nav-link">
                5 day forecast
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavBar;
