import React from 'react';
import Navbar from './components/Navbar';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-gold selection:text-black">
      <CursorTrail />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
