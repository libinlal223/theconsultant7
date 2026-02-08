import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import g1 from '../assets/gallery_new_1.webp';
import g2 from '../assets/gallery_new_2.webp';
import g3 from '../assets/gallery_new_3.webp';
import g4 from '../assets/gallery_new_4.webp';
import g5 from '../assets/gallery_new_5.webp';
import g7 from '../assets/gallery_new_7.webp';
import g8 from '../assets/gallery_new_8.webp';
import { useOptimizedAnimation } from '../hooks/useOptimizedAnimation';
import { usePerformanceTier } from '../utils/performance';

const images = [g1, g2, g3, g4, g5, g7, g8];

const Gallery = () => {
    // State to track the "active" image in the center of the viewport (mobile only)
    const [activeIndex, setActiveIndex] = useState(null);
    const imageRefs = useRef([]);

    // Performance Optimization
    const [containerRef, shouldAnimate, isInView] = useOptimizedAnimation({ margin: "100px" });
    const tier = usePerformanceTier();

    useEffect(() => {
        // Pause checking if not in view
        if (!isInView) return;

        const handleScrollCheck = () => {
            // Only run detailed check on mobile/tablet widths
            if (window.innerWidth >= 768) return;

            const centerX = window.innerWidth / 2;
            let closestIndex = -1;
            let minDistance = Infinity;

            imageRefs.current.forEach((img, idx) => {
                if (!img) return;
                const rect = img.getBoundingClientRect();

                // Optimization: Skip checking images clearly off-screen
                if (rect.right < 0 || rect.left > window.innerWidth) return;

                const imgCenter = rect.left + rect.width / 2;
                const dist = Math.abs(imgCenter - centerX);

                // Check if this image is the closest to the center
                if (dist < minDistance) {
                    minDistance = dist;
                    closestIndex = idx;
                }
            });

            // Set active if closest image is within a "focus zone" (e.g., 80px from center)
            if (minDistance < 80) {
                setActiveIndex(closestIndex);
            } else {
                setActiveIndex(null);
            }
        };

        // Run check frequently - limit rate on low tier devices
        const intervalDelay = tier === 'low' ? 200 : 100;
        const interval = setInterval(handleScrollCheck, intervalDelay);
        return () => clearInterval(interval);
    }, [isInView, tier]);

    const galleryList = [...images, ...images, ...images];

    // Reduce duplicate items for low performance (if list is very long), but here 3x7=21 is fine.
    // If we wanted to optimize specifically for mobile we could reduce it.

    return (
        <section
            id="gallery"
            ref={containerRef}
            className="relative w-full pt-16 pb-0 md:py-24 bg-black border-t border-white/5 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }} // Optimization: Only trigger entry animation once
                    className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-4"
                >
                    <span className="text-gold">G</span><span className="text-transparent text-stroke-gold opacity-80">ALLERY</span>
                </motion.h2>
            </div>

            {/* Moving Block of Images */}
            <div className="relative w-full overflow-hidden pt-6 pb-2 md:py-10">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div className="flex">
                    <motion.div
                        className="flex gap-6 flex-nowrap"
                        animate={shouldAnimate ? { x: ["0%", "-33.333%"] } : { x: "0%" }}
                        transition={{
                            repeat: Infinity,
                            duration: tier === 'low' ? 40 : 30, // Slower on low tier for less frame drops
                            ease: "linear"
                        }}
                        style={{ willChange: 'transform' }} // Optimization hint
                    >
                        {/* Repeat images twice to create seamless loop */}
                        {galleryList.map((img, index) => {
                            // Assign different widths/aspect ratios based on index pattern
                            // Standardized Portrait Dimensions for better visibility of people
                            const currentClass = 'w-[280px] md:w-[350px]';
                            const isActive = activeIndex === index;

                            // We can skip heavy hover effects on low tier or scrolling
                            const isLowTier = tier === 'low';

                            return (
                                <div
                                    key={index}
                                    ref={el => imageRefs.current[index] = el}
                                    className={`relative h-[400px] md:h-[480px] ${currentClass} flex-shrink-0 rounded-sm overflow-hidden border border-white/10 group
                                    ${isActive ? 'grayscale-0 scale-105 z-10 border-gold/40' : 'grayscale'} 
                                    md:grayscale md:hover:grayscale-0 
                                    transition-all duration-500`}
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery Image ${index}`}
                                        loading="lazy"
                                        decoding="async"
                                        className={`h-full w-full object-cover transition-transform duration-700
                                        ${isActive ? 'scale-110' : 'scale-100'} 
                                        ${!isLowTier && 'group-hover:scale-110'}`}
                                    />
                                    {/* Gold Overlay */}
                                    <div className={`absolute inset-0 bg-gold/10 transition-opacity duration-300 pointer-events-none
                                        ${isActive ? 'opacity-100' : 'opacity-0'}
                                        group-hover:opacity-100`}>
                                    </div>

                                    {/* Download Button */}
                                    {/* Desktop Download Button (Icon Only, Hover Trigger) */}
                                    <a
                                        href={img}
                                        download={`anil-kumar-gallery-${index}.png`}
                                        className="hidden md:flex absolute bottom-4 right-4 z-20 p-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold transform translate-y-4 group-hover:translate-y-0"
                                        title="Download Image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                        </svg>
                                    </a>

                                    {/* Mobile Download Button (Text + Icon, Always Visible) */}
                                    <a
                                        href={img}
                                        download={`anil-kumar-gallery-${index}.png`}
                                        className={`md:hidden absolute bottom-4 right-4 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 text-white active:scale-95 transition-transform
                                        ${isActive ? 'opacity-100' : 'opacity-70'}`}
                                    >
                                        <span className="text-[10px] uppercase font-bold tracking-widest">Download</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75V3" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                        </svg>
                                    </a>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
