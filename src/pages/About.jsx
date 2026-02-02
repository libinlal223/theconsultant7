import React from 'react';
import { motion } from 'framer-motion';
import anilImage from '../assets/profile_new.jpg';


const About = () => {


    return (
        <section id="about" className="relative w-full py-24 md:py-32 px-6 bg-black flex justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1 top-0 lg:sticky lg:top-32"
                >
                    <div className="relative rounded-sm overflow-hidden border border-white/10 group max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src={anilImage}
                            alt="Anil Kumar A S - Educational Consultant"
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                        />

                        {/* Overlay Card on Image */}
                        <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 max-w-xs hidden md:block">
                            <p className="text-white font-oswald text-lg uppercase tracking-wider">Anil Kumar A S</p>
                            <p className="text-gray-300 text-sm font-light mt-1">Lead Consultant & Mentor</p>
                        </div>
                    </div>
                    {/* Mobile Only Signature */}
                    <div className="pt-6 flex lg:hidden items-center gap-4 justify-start">
                        <div className="h-10 w-1 bg-gold"></div>
                        <p className="text-white font-oswald text-lg uppercase tracking-widest">
                            "Your Future, Strategically Designed."
                        </p>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 flex flex-col space-y-10"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-gold/70"></div>
                            <h4 className="text-gold font-oswald tracking-[0.3em] text-xs uppercase">Educational Consultant</h4>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-anton text-white leading-[1.1]">
                            WHO AM I ?
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed pl-2">
                        <p>
                            Education has the power to shape individuals, institutions, and societies—and this belief has guided my journey as the Founder and Managing Director of Seven Seas International with eight years of industry experience.
                        </p>
                        <p>
                            My approach centers on thoughtful leadership, collaboration, and practical execution, ensuring that every initiative contributes to meaningful, long-term improvement in learning. Over the years, I have personally overseen and supported 1,000+ successful student admissions, helping learners make informed academic and career decisions.
                        </p>
                    </div>



                    {/* Signature / Call to Action line */}
                    <div className="pt-4 hidden lg:flex items-center gap-4">
                        <div className="h-10 w-1 bg-gold"></div>
                        <p className="text-white font-oswald text-lg uppercase tracking-widest">
                            "Your Future, Strategically Designed."
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
