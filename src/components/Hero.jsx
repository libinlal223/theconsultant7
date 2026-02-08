import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import anilImage from '../assets/anil_kumar.webp';
import { useOptimizedAnimation } from '../hooks/useOptimizedAnimation';
import { usePerformanceTier } from '../utils/performance';

const Hero = () => {
    // Optimization: Only animate when in view
    const [containerRef, shouldAnimate] = useOptimizedAnimation({ margin: "100px" });
    const tier = usePerformanceTier(); // 'high' or 'low'

    // Smooth parallax effects (only if animating)
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const yImage = useTransform(scrollY, [0, 500], [0, -50]);
    const opacityImage = useTransform(scrollY, [0, 400], [1, 0]);

    // Marquee content
    const marqueeText = "THE CONSULTANT";

    // Reduce items for low performance devices
    const marqueeItems = tier === 'low' ? [1, 2] : [1, 2, 3, 4];

    // Animation configuration
    const marqueeTransition = {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
        // Pause animation when not in view or tab hidden
        repeatType: "loop"
    };

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end items-center"
        >
            {/* 1. Background Grid/Noise (Optional Texture) - Disable on low tier */}
            {tier === 'high' && (
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none mix-blend-overlay"></div>
            )}

            {/* 2. Marquee Layer (Behind Image) - Centered vertically */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full z-10 pointer-events-none">

                {/* Stacked Layers for Mobile (Visible on MD and smaller) */}
                <motion.div
                    className="flex whitespace-nowrap md:hidden absolute -top-[26vh] left-0 w-full"
                    style={{ y: shouldAnimate ? yText : 0 }}
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={shouldAnimate ? { x: ["0%", "-50%"] } : { x: "0%" }} // Pause
                        transition={marqueeTransition}
                    >
                        {marqueeItems.map((i) => (
                            <div key={i} className="flex relative items-center mr-40">
                                <span className="text-[20vw] font-anton text-gold opacity-[0.15] leading-none tracking-wide"
                                    style={{ willChange: 'transform' }}> {/* Hint to browser */}
                                    {marqueeText}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex whitespace-nowrap md:hidden absolute -top-[13vh] left-0 w-full"
                    style={{ y: shouldAnimate ? yText : 0 }}
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={shouldAnimate ? { x: ["0%", "-50%"] } : { x: "0%" }}
                        transition={marqueeTransition}
                    >
                        {marqueeItems.map((i) => (
                            <div key={i} className="flex relative items-center mr-40">
                                <span className="text-[20vw] font-anton text-gold opacity-[0.25] leading-none tracking-wide"
                                    style={{ willChange: 'transform' }}>
                                    {marqueeText}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Main Marquee Layer */}
                <motion.div
                    className="flex whitespace-nowrap"
                    style={{ y: shouldAnimate ? yText : 0 }}
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={shouldAnimate ? { x: ["0%", "-50%"] } : { x: "0%" }}
                        transition={marqueeTransition}
                    >
                        {marqueeItems.map((i) => (
                            <div key={i} className="flex relative items-center mr-40">
                                {/* Solid Gold Text with optimized responsive sizing */}
                                <span className="text-[20vw] md:text-[13vw] font-anton text-gold opacity-50 leading-none tracking-wide"
                                    style={{ willChange: 'transform' }}>
                                    {marqueeText}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* 3. Character Image Layer */}
            <motion.div
                className="relative z-50 h-[60vh] sm:h-[75vh] md:h-[90vh] w-full max-w-5xl flex items-end justify-center pointer-events-none mb-20 md:mb-0"
                style={{ y: shouldAnimate ? yImage : 0, opacity: shouldAnimate ? opacityImage : 1 }}
            >
                <motion.img
                    src={anilImage}
                    alt="Anil Kumar"
                    // Decode async for non-blocking main thread
                    decoding="async"
                    loading="eager" // Hero image should be eager
                    className="object-contain h-full w-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.1)] md:drop-shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                    initial={{ scale: 1.1, y: 100, filter: 'blur(10px)' }}
                    animate={{ scale: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Gradient Overlay to hide bottom edge of image if cut abruptly */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>
            </motion.div>

            {/* 4. Foreground Overlay Content */}
            <div className="absolute bottom-12 left-0 w-full z-30 px-8 flex justify-between items-end mix-blend-difference pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="hidden md:block"
                >
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col items-end"
                >
                    <motion.div
                        className="w-[1px] h-12 bg-gold"
                        animate={shouldAnimate ? { height: [0, 48, 0], y: [0, 0, 20] } : { height: 48 }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
