import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["STRATEGY", "VISION", "GROWTH", "SUCCESS", "THE CONSULTANT"];

const Loader = ({ finishLoading }) => {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Cycle words
        const wordInterval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 800);

        // Simulate progress bar (longer duration as requested ~4-5s)
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                // Random increments
                return prev + Math.floor(Math.random() * 5) + 1;
            });
        }, 150);

        // Cleanup
        return () => {
            clearInterval(wordInterval);
            clearInterval(progressInterval);
        };
    }, []);

    // Trigger finish when close to completion
    useEffect(() => {
        if (progress === 100) {
            // Small delay at 100% just to show it, then finish
            setTimeout(() => {
                finishLoading();
            }, 500);
        }
    }, [progress, finishLoading]);


    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white overflow-hidden cursor-wait"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Background Texture similar to Hero */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Changing Words */}
                <div className="h-12 overflow-hidden mb-8 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl md:text-6xl font-anton text-transparent text-stroke-gold tracking-widest uppercase text-center"
                        >
                            {words[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Counter Number */}
                <div className="text-8xl md:text-9xl font-oswald font-bold text-gold opacity-90">
                    {Math.min(100, progress)}%
                </div>

                {/* Progress Bar Line */}
                <div className="w-64 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gold"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            </div>

            {/* Decorative Corner 7s or Lines */}
            <div className="absolute bottom-10 right-10 flex gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse delay-150"></div>
            </div>
        </motion.div>
    );
};

export default Loader;
