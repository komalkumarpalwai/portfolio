import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


import './index.css';

// ✅ Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Projects = lazy(() => import('../pages/Projects'));

const App = () => {
  return (
    <Router>
    
      <Header />
      <main>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
