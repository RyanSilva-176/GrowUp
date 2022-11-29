import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

import "./App.css"

function App() {
  return (
    <Router>
      <div className='root'>
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
