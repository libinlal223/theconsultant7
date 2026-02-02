import React from 'react';
import { motion } from 'framer-motion';
import g1 from '../assets/gallery_new_1.jpg';
import g2 from '../assets/gallery_new_2.jpg';
import g3 from '../assets/gallery_new_3.jpg';
import g4 from '../assets/gallery_new_4.jpg';
import g5 from '../assets/gallery_new_5.jpg';
import g7 from '../assets/gallery_new_7.jpg';
import g8 from '../assets/gallery_new_8.jpg';

const images = [g1, g2, g3, g4, g5, g7, g8];

const Gallery = () => {
    return (
        <section id="gallery" className="relative w-full pt-16 pb-0 md:py-24 bg-black border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
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
                        animate={{ x: ["0%", "-33.333%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {/* Repeat images twice to create seamless loop */}
                        {[...images, ...images, ...images].map((img, index) => {
                            // Assign different widths/aspect ratios based on index pattern
                            // Standardized Portrait Dimensions for better visibility of people
                            const currentClass = 'w-[280px] md:w-[350px]';

                            return (
                                <div key={index} className={`relative h-[400px] md:h-[480px] ${currentClass} flex-shrink-0 rounded-sm overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-500`}>
                                    <img
                                        src={img}
                                        alt={`Gallery Image ${index}`}
                                        className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gold Overlay */}
                                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

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
                                        className="md:hidden absolute bottom-4 right-4 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 text-white active:scale-95 transition-transform"
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
