import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import Navbar from './components/Navbar';
import FlightForm from './components/FlightForm';
import Carousel from './components/Carousel';

import "./App.css"

function App() {
  return (
    <div className='root'>
      <header>
        <Navbar />
      </header>
      <main>
        <FlightForm />
        {/*<Carousel /> */}
      </main>
    </div>
  )
}

export default App
