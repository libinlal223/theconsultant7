import React, { useState, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Loader from './components/Loader';

// Code Splitting / Lazy Loading for performance
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
          <Suspense fallback={<div className="h-screen w-full bg-black"></div>}>
            <About />
            <Services />
            <Gallery />
            <Contact />
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default App
