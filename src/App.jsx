import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-gold selection:text-black">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div key="content">
          <CursorTrail />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </div>
      )}
    </div>
  )
}

export default App
