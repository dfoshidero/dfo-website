import "./App.scss";
import sass from "sass";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" component={Main} />
      </Routes>
      <p className="footerMessage" >Website Build In Progress.</p>
    </BrowserRouter>
  );
}

export default App;
