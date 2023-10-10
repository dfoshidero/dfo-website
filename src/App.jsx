import "./App.scss";
import sass from "sass";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function handlePageChange(e) {
  if (e.target.id === "linkedin-link") {
    window.location.href="https://www.linkedin.com/in/favourdo/"
  }
  }


function App() {
  return (
    <div>

      <Navbar />
      <p className="footerMessage">Website Build In Progress.</p>

      <div className="links">
        <LinkedInIcon id="linkedin-link" onClick={handlePageChange}/>
      </div>
  

    </div>
  );
}

export default App;
