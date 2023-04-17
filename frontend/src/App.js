import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact'; // Import the Contact component
import Features from './pages/Features'; // Import the Contact component
import Pricing from './pages/Pricing'; // Import the Contact component
import Home from './pages/Homepage'; // Import the Contact component
import Passport from './pages/Passport';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pages/Features" element={<Features />} />
          <Route path="/pages/Pricing" element={<Pricing />} />
          <Route path="/pages/Contact" element={<Contact />} /> {/* Define a route for Contact */}
          <Route path="/pages/Passport" element={<Passport />} /> {/* Define a route for Contact */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
