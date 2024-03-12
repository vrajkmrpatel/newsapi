// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FetchData from './components/FetchData';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/health" element={<FetchData cat={"health"} />} />
          <Route exact path="/business" element={<FetchData cat={"business"} />} />
          <Route exact path="/technology" element={<FetchData cat={"technology"} />} />
          <Route exact path="/entertainment" element={<FetchData cat={"entertainment"} />} />
          <Route exact path="/sports" element={<FetchData cat={"sports"} />} />
          <Route exact path="/science" element={<FetchData cat={"science"} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
