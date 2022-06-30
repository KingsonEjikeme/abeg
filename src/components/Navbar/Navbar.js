import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../../assets/abeigilogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Fade, Modal } from "@mui/material";
// import { HashLink as Link } from 'react-router-hash-link';
import {Link} from 'react-scroll'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeResponsiveNav =()=>{
    setMenuOpen(false);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-item"><Link to="#" spy={true} smooth={true} offset={50} duration={500}>Home</Link></div>
          <div className="navbar-item">About</div>
          <div className="navbar-item"><Link to="blog" spy={true} smooth={true} offset={50} duration={500}>Blog</Link></div>
        </div>

        <div className="navbar-center">
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" height="70px" width="90px" />
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-item">Volunteer</div>
          <div className="navbar-item"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></div>
          <div className="navbar-item"><Link to="donate" spy={true} smooth={true} offset={50} duration={500}>Donate</Link></div>
        </div>

        <div className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <CloseIcon fontSize="large" in={menuOpen} />
          ) : (
            <MenuIcon fontSize="large" in={menuOpen} />
          )}
        </div>
      </div>

      <Modal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <Fade in={menuOpen}>
          <Box className="menu-container">
            <div className="navbar-close-menu-icon">
              <div>
                <CloseIcon
                  fontSize="large"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="test"
                />
              </div>
            </div>
            <div className="navbar-menu-items">
              <div className="navbar-menu-item" onClick={closeResponsiveNav}>Home</div>
              <div className="navbar-menu-item" onClick={closeResponsiveNav}>About</div>
              <div className="navbar-menu-item" onClick={closeResponsiveNav}><Link to="blog" spy={true} smooth={true} offset={50} duration={500}>Blog</Link></div>
              <div className="navbar-menu-item" onClick={closeResponsiveNav}>Volunteer</div>
              <div className="navbar-menu-item" onClick={closeResponsiveNav}>Contact</div>
              <div className="navbar-menu-item" onClick={closeResponsiveNav}>Donate</div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Navbar;
