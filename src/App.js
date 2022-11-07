import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Books from './components/Books';
import Categories from './components/Categories';

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
