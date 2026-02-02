import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'gallery', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Gallery', id: 'gallery' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <motion.div
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow-2xl shadow-black/50 flex items-center justify-between md:justify-center gap-6 relative overflow-hidden group">

                    {/* Glass Reflection Effect */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                    {/* Logo (Integrated Compact Version) */}
                    {/* Logo (Integrated Compact Version) */}
                    <div
                        className="flex items-center font-oswald text-lg font-bold tracking-widest uppercase cursor-pointer select-none"
                        onClick={() => scrollToSection('home')}
                    >
                        <span className="text-gold">A</span>
                        <span className={`text-white max-w-0 opacity-0 md:group-hover:max-w-xs md:group-hover:opacity-100 ${isMobileMenuOpen ? 'max-w-xs opacity-100' : ''} transition-all duration-700 ease-in-out whitespace-nowrap`}>NIL </span>
                        <span className="text-gold">K</span>
                        <span className={`text-white max-w-0 opacity-0 md:group-hover:max-w-xs md:group-hover:opacity-100 ${isMobileMenuOpen ? 'max-w-xs opacity-100' : ''} transition-all duration-700 ease-in-out whitespace-nowrap`}>UMAR</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className={`relative text-xs font-oswald font-medium uppercase tracking-widest transition-all duration-300 ${activeSection === link.id
                                        ? 'text-gold scale-110'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {/* Small dot for active state instead of full pill */}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeDot"
                                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="space-y-1.5 cursor-pointer">
                                <span className={`block w-6 h-0.5 bg-gold transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-4 h-0.5 bg-gold ml-auto transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-gold transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                    {/* CTA / Contact Button (Optional extra) */}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hidden md:flex w-10 h-10 rounded-full border border-[#25D366] items-center justify-center group hover:bg-[#25D366] transition-all duration-300 shadow-[0_0_10px_rgba(37,211,102,0.3)] bg-black/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors"
                        >
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.574 2.016.906 3.037.906h.001c3.181 0 5.767-2.586 5.767-5.766.001-3.185-2.587-5.767-5.769-5.767zm0-.818c3.678 0 6.669 2.992 6.669 6.669 0 3.678-2.991 6.668-6.669 6.668-1.127 0-2.222-.294-3.182-.853l-3.55 1.002.946-3.46c-.636-.201-1.336-1.515-1.336-2.589-.001-3.677 2.991-6.668 6.668-6.668zm3.339 9.387c-.156-.078-.926-.457-1.07-.51-.143-.052-.247-.078-.351.078-.104.156-.403.509-.494.613-.091.104-.182.117-.338.039-.156-.078-.658-.243-1.254-.774-.463-.413-.776-.922-.867-1.078-.091-.156-.01-.24.068-.318.071-.071.156-.182.234-.273.078-.091.104-.156.156-.26.052-.104.026-.195-.013-.273-.039-.071.156-.182.234-.273.078-.091.104-.156.156-.26.052-.104.026-.195-.013-.273-.039-.078-.351-.845-.481-1.158-.126-.303-.255-.262-.351-.266-.091-.004-.195-.004-.299-.004-.104 0-.273.039-.416.195-.143.156-.546.533-.546 1.3s.559 1.508.637 1.612c.078.104 1.099 1.678 2.663 2.353.372.161.663.257.892.33.379.121.725.104 1.001.063.303-.045.926-.378 1.056-.743.13-.365.13-.677.091-.743-.039-.065-.143-.104-.299-.182z" />
                        </svg>
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-1/2 transform -translate-x-1/2 w-[90%] bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-40 overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col py-4 px-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`w-full text-center py-4 text-sm font-oswald uppercase tracking-widest border-b border-white/5 last:border-none transition-colors ${activeSection === link.id ? 'text-gold' : 'text-gray-300'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
