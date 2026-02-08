import React from 'react';
import { motion } from 'framer-motion';
import ancLogo from '../assets/anc_logo.webp';
import cgicLogo from '../assets/cgic_logo.webp';
import hrpmLogo from '../assets/hrpm_logo.webp';
import vedikeLogo from '../assets/vedike_logo.webp';


const Services = () => {

    return (
        <section id="services" className="relative w-full bg-black text-white border-t border-white/5">
            {/* Header Section */}
            <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-anton uppercase tracking-tight"
                    >
                        WHAT I DO
                    </motion.h2>
                </div>
            </div>

            {/* Static Content Section */}
            <div className="relative pb-24 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Company Description */}
                    <div className="space-y-8">
                        <h3 className="text-4xl md:text-5xl font-anton uppercase text-white text-center">
                            Meet <span className="text-gold">Seven Seas</span>
                        </h3>

                        <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg text-justify">
                            <p>
                                Seven Seas International is a trusted educational consultancy with over 7 years of excellence in guiding students toward higher education in India. Known for its professional and student-centric approach, the organization delivers high-quality academic counseling, admissions support, and scholarship assistance.
                            </p>
                            <p>
                                The consultancy also organizes impactful education fairs and counseling events, connecting students with institutions and opportunities worldwide. Through ethical practices, personalized guidance, and consistent results, Seven Seas International continues to be a respected name in the education consultancy sector.
                            </p>
                        </div>

                        {/* Award Block moved to Left */}
                        <div className="p-6 bg-gold/10 border border-gold/30 rounded-lg text-center mb-6">
                            <h4 className="text-gold font-oswald uppercase tracking-widest text-lg mb-2">Excellence Received</h4>
                            <p className="text-white font-light text-sm">Award for Best Educational Consultancy in Kerala (2024-25)</p>
                        </div>

                        <a
                            href="https://www.instagram.com/seven.seas_international?igsh=Ym1rcW5uYnFrN3Nh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-oswald uppercase tracking-widest text-sm block mx-auto w-fit text-center"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Right: Affiliations */}
                    <div className="relative">
                        <h3 className="text-4xl md:text-5xl font-anton uppercase text-white mb-8 text-center">
                            <span className="text-transparent text-stroke-gold opacity-50">My</span> Affiliations
                        </h3>

                        {/* Scrollable Content Container */}
                        <div className="h-[500px] overflow-y-auto pr-4 space-y-8 custom-scrollbar border-l border-white/10 pl-6">

                            {/* Section: Affiliations - Leadership Positions */}
                            <div>
                                <h4 className="text-gold font-oswald text-sm uppercase tracking-widest mb-3">Affiliations</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm flex items-center justify-between">
                                        <span>PATHANAMTHITTA DISTRICT PRESIDENT OF ANC</span>
                                        <img src={ancLogo} alt="ANC Logo" className="h-10 w-10 object-contain rounded-full" />
                                    </div>
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm flex items-center justify-between">
                                        <span>NATIONAL MEMBER OF CGIC</span>
                                        <img src={cgicLogo} alt="CGIC Logo" className="h-10 w-10 object-contain rounded-full" />
                                    </div>
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm flex items-center justify-between">
                                        <span>ACTIVE MEMBER OF HRPM</span>
                                        <img src={hrpmLogo} alt="HRPM Logo" className="h-10 w-10 object-contain rounded-full" />
                                    </div>
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm flex items-center justify-between">
                                        <span>MEMBER OF KARNATAKA RAKSHANA VEDIKE</span>
                                        <img src={vedikeLogo} alt="Karnataka Rakshana Vedike Logo" className="h-10 w-10 object-contain rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Admission Officer */}
                            <div>
                                <h4 className="text-gold font-oswald text-sm uppercase tracking-widest mb-3">Admission Officer</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm">
                                        SHRI MARUTHI Group of Institutions, Bangalore, Karnataka
                                    </div>
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm">
                                        BETHEL Medical Mission Hospital Edu Group, Bangalore, Karnataka
                                    </div>
                                </div>
                            </div>

                            {/* Section: Admission Counselor */}
                            <div>
                                <h4 className="text-gold font-oswald text-sm uppercase tracking-widest mb-3">Admission Counselor</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm">
                                        HARSHA Institutions, Bangalore, Karnataka
                                    </div>
                                </div>
                            </div>

                            {/* Section: Admission Coordinator */}
                            <div>
                                <h4 className="text-gold font-oswald text-sm uppercase tracking-widest mb-3">Admission Coordinator</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        "SAPTHAGIRI Institute of Medical Science And Research Centre, Bangalore",
                                        "SRI SIDHARTHA Institute of Medical Science And Research Centre, Nelamangala",
                                        "SRI SIDHARTHA Institute of Medical Science And Research Centre, Tumkur",
                                        "SRI DEVI Institute of Medical Science And Research Hospital, Tumkur",
                                        "SRI RAGHAVENDRA Group of Institutions, Bangalore",
                                        "AKASH Group of Institutions, Bangalore",
                                        "SRINIVAS UNIVERSITY, Mangalore",
                                        "ROSY ROYAL Institutions, Bangalore",
                                        "KVC College of Nursing, Mysuru",
                                        "HINDUSTAN College of Pharmacy, Kerala",
                                        "S-VYASA (Deemed-To-Be-University), Bangalore",
                                        "SPURTHY Group of Institutions, Bangalore",
                                        "B G I (Bangalore group of Institutions), Bangalore",
                                        "1ST.BENEDICTINE ACADEMY, Bangalore",
                                        "AKSHAY & ANIRUDH College of Nursing, Tumkur",
                                        "MOUNT CARMEL College of Nursing, Bangalore",
                                        "THE CAPITOL Group of Institutions, Bangalore",
                                        "SRI VINAYAKA Group of Institutions, Bangalore",
                                        "S E A (South East Asian Education Trust) (R), Bangalore",
                                        "CHRISTIAN Group of Institutions, Bangalore",
                                        "UNITED INTERNATIONAL Group of Institutions, Bangalore",
                                        "MARWADI UNIVERSITY, Rajkot, Gujarat",
                                        "G R Medical College (Karavali Group of Colleges), Mangalore"
                                    ].map((inst, i) => (
                                        <div key={i} className="p-3 bg-white/5 border border-white/10 rounded hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 text-gray-400 font-light text-sm">
                                            {inst}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
