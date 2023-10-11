import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import FloatingPage from "../floatingpages/FloatingPage";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const TransparentAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

export default function TransparentNavbar() {
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const floatingPageRef = useRef(null);

  const [animateType, setAnimateType] = useState("open");

  const openPage = (e) => {
    setAnimateType("open");
    const itemID = e.target.id;
    setIsPageOpen(true);
    setSelectedNavItem(itemID);
    e.stopPropagation(); // Prevent the click event from propagating
  };

  const closePage = () => {
    setAnimateType("closed");

    setTimeout(() => {
      setIsPageOpen(false);
    }, 500);
  };

  // Close the FloatingPage when a click occurs outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isPageOpen && floatingPageRef.current && !floatingPageRef.current.contains(e.target)) {
        closePage();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isPageOpen]);

  return (
    <div className={`body-container ${isPageOpen ? "open" : "closed"}`}>
      <TransparentAppBar position="static" className="navbar">
        {!isPageOpen && (
          <Toolbar disableGutters className="toolbar">
            <button className="navitem" id="about" onClick={openPage}>
              About
            </button>
            <button className="navitem" id="experience" onClick={openPage}>
              Experience
            </button>
            <button className="navitem" id="portfolio-projects" onClick={openPage}>
              Projects
            </button>
            <button className="navitem" id="portfolio-design" onClick={openPage}>
              Portfolio
            </button>
          </Toolbar>
        )}
        {isPageOpen && (
          <div ref={floatingPageRef}>
            <FloatingPage selectedItem={selectedNavItem} itemClass={`floating-page ${animateType}`} />
          </div>
        )}
      </TransparentAppBar>
    </div>
  );
}
