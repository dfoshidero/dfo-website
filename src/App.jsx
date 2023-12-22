import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";

import { ModalProvider } from "./utils/modalContext"
import Modal from "./components/modal/Modal";

import Enter from "./pages/enter/Enter";
import Home from "./home/Home";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
  return (
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
  );
}

export default App;
