import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';

// Code Splitting / Lazy Loading for performance
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-gold selection:text-black">
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
  )
}

export default App
