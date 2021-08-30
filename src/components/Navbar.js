import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <p className="Navbar-heading">arch & crown</p>
      <ul className="Navbar-links">
        <li className="Navbar-links-item">
          <Link className="Navbar-link" to="/">
            view properties
          </Link>
        </li>
        <li className="Navbar-links-item">
          <Link className="Navbar-link" to="/new">
            add a property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
