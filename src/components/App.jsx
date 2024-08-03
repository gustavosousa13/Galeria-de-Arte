import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ArtGallery from './ArtGallery';
import Portfolio from './Portfolio';
import OriginalsShop from './OriginalsShop';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/art" element={<ArtGallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/originals-shop" element={<OriginalsShop />} />
      </Routes>
    </Router>
  );
};

export default App;
