import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">About</div>
        <div className="navbar-item">Blog</div>
      </div>

      <div className="navbar-center">
        <div className="navbar-logo">hi</div>
      </div>

      <div className="navbar-right">
        <div className="navbar-item">Volunteer</div>
        <div className="navbar-item">Contact</div>
        <div className="navbar-item">Donate</div>
      </div>
    </div>
  );
};

export default Navbar;
