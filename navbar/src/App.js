import React from 'react';
import Navbar from './component/Navbar.js'
import { BrowserRouter } from 'react-router-dom';
// import Home from './component/landing pages/Home'
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App;
