// Importing files from Material-UI
import React from "react";
import "./Navbar.scss";
import "sass";
import FloatingPage from '../floatingpages/FloatingPage';
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const TransparentAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const handleNavClick = (e) => {
  e.preventDefault();
  if (e.target.id === "about") {
    <FloatingPage 
      id = "about"
    />
  }
};

export default function TransparentNavbar() {
  return (
    <TransparentAppBar position="static" className="navbar">
      <Toolbar disableGutters className="toolbar">

        <button className="navitem" 
        id="about" 
        onClick={handleNavClick}>
          About
        </button>

        <button className="navitem" 
        id="experience" 
        onClick={handleNavClick}>
          Experience
        </button>

        <button className="navitem" 
        id="portfolio-projects" 
        onClick={handleNavClick}>
          Projects
        </button>

        <button className="navitem" 
        id="portfolio-design" 
        onClick={handleNavClick}>
          Portfolio
        </button>

      </Toolbar>
    </TransparentAppBar>
  );
}
