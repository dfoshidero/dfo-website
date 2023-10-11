import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="app-container">
    
      <div className="main">
      <Navbar />
      </div>

      <div className="footer">
      <Footer />
      </div>

    </div>
  );
}

export default App;
