import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";

import { ModalProvider } from "./utils/modalContext"
import Modal from "./components/modal/Modal";

import Enter from "./content/entry/Enter";
import Home from "./home/Home";
import Experience from "./content/experience/Experience";
import Projects from "./content/projects/Projects";
import Portfolio from "./content/portfolio/Portfolio";
import Contact from "./content/contact/Contact";

import ScrollIndicator from './components/scrollIndicator/scrollIndicator'; // Adjust the path as needed

function App() {
  return (
    <div>
      <ScrollIndicator />


      <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Enter />} />
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
        <Modal />
      </ModalProvider>
    </div>
  );
}

export default App;
