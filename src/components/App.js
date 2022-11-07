import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Books from './Books';
import Categories from './Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
