// Importing files from Material-UI
import React from "react";
import "./Navbar.scss";
import "sass";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const TransparentAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

export default function TransparentNavbar() {
  return (
    <TransparentAppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <a className="navitem" href="about">
          About
        </a>
        <a className="navitem" href="experience">
          Experience
        </a>
        <a className="navitem" href="portfolio-s">
          Projects
        </a>
        <a className="navitem" href="portfolio-d">
          Portfolio
        </a>
      </Toolbar>
    </TransparentAppBar>
  );
}
