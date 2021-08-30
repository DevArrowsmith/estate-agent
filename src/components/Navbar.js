import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <p className="Navbar-heading">arch & crown</p>
      <ul className="Navbar-links">
        <li className="Navbar-links-item">view properties</li>
        <li className="Navbar-links-item">add a property</li>
      </ul>
    </div>
  );
};

export default Navbar;
