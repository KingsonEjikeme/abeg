import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../../assets/abeigilogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Fade, Modal } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-item">Home</div>
          <div className="navbar-item">About</div>
          <div className="navbar-item"><Link to="#blog">Blog</Link></div>
        </div>

        <div className="navbar-center">
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" height="70px" width="90px" />
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-item">Volunteer</div>
          <div className="navbar-item">Contact</div>
          <div className="navbar-item">Donate</div>
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
              <div className="navbar-menu-item">Home</div>
              <div className="navbar-menu-item">About</div>
              <div className="navbar-menu-item"><Link to="#blog">Blog</Link></div>
              <div className="navbar-menu-item">Volunteer</div>
              <div className="navbar-menu-item">Contact</div>
              <div className="navbar-menu-item">Donate</div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Navbar;
