import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" component={Main} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
