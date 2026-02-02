import React from 'react';
import { motion } from 'framer-motion';
import ParticleSeven from '../components/ParticleSeven';

const Contact = () => {
    return (
        <section id="contact" className="relative w-full min-h-[50vh] md:min-h-[80vh] bg-black flex items-center justify-center overflow-hidden px-6 pt-20 pb-10">

            {/* Background Gradient/Noise effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black pointer-events-none z-0" />

            {/* FULL PAGE PARTICLE CANVASES */}

            {/* Mobile Particle Canvas (Full Page) */}
            <div className="absolute inset-0 lg:hidden z-0 pointer-events-auto overflow-hidden">
                {/* 
                   shiftX: Positive moves right. 
                   shiftY: Positive moves down.
                   Mobile request: "move 2cm right" -> Increased shiftX.
                   Positioning "7" at bottom right.
                */}
                <ParticleSeven shiftX={120} shiftY={-60} fontSize={200} hoverRadius={200} enableScrollBehavior={true} />
            </div>

            {/* Desktop Particle Canvas (Full Page) */}
            <div className="absolute inset-0 hidden lg:block z-0 pointer-events-auto overflow-hidden">
                {/* Positioning "7" at right center */}
                <ParticleSeven shiftX={300} shiftY={0} fontSize={500} hoverRadius={350} enableScrollBehavior={true} />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 pointer-events-none">

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-8 pointer-events-auto"
                >
                    <div>
                        <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-anton text-white leading-[0.9] tracking-tight">
                            LET'S <br />
                            <span className="text-gold">CONNECT</span>
                        </h2>
                    </div>

                    <div className="space-y-2 relative z-10 max-w-[70%] lg:max-w-full">
                        <p className="text-gray-400 font-oswald uppercase tracking-widest text-sm">
                            For Inquiries
                        </p>
                        <a
                            href="https://wa.me/919656946829"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group whitespace-nowrap"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-xs md:text-base">Chat on WhatsApp</span>
                        </a>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <div className="inline-flex items-center gap-3 md:gap-4">
                            <a href="tel:+919656946829" className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300">
                                <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                            <div>
                                <div className="text-sm md:text-xl text-white font-oswald font-light tracking-wider">
                                    <a href="tel:+919656946829" className="hover:text-gold transition-colors">+91 96569 46829</a>
                                    <span className="text-gold mx-1">/</span>
                                    <a href="tel:+917994249207" className="hover:text-gold transition-colors">79942 49207</a>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex items-start gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300">
                                <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[8px] md:text-[9px] text-gray-500 font-oswald uppercase tracking-widest mb-0.5 md:mb-1">Our Office</p>
                                <div className="text-[10px] md:text-sm text-white font-oswald font-light tracking-wide leading-relaxed">
                                    <span className="text-gold font-medium block mb-1 text-xs md:text-base">SEVEN SEAS INTERNATIONAL</span>
                                    <span className="block text-white/80">Velliyedathu building, near Police station,</span>
                                    <span className="block text-white/80">Thottamon (689673) Ranny, Pathanamthitta</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-1">

                        <SocialButton href="https://www.instagram.com/the_consultant7?igsh=MTloMTRqeTIyYjduYw==" label="Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-1.121 1.838c-2.424 0-2.697.01-3.649.053-.96.044-1.481.198-1.826.332-.46.177-.788.388-1.132.732s-.555.672-.732 1.132c-.134.345-.288.866-.332 1.826-.043.952-.053 1.225-.053 3.649s.01 2.697.053 3.649c.044.96.198 1.481.332 1.826.177.46.388.788.732 1.132.344.344.572.555 1.032.732.345.134.866.288 1.826.332.952.043 1.225.053 3.649.053s2.697-.01 3.649-.053c.96-.044 1.481-.198 1.826-.332.46-.177.788-.388 1.132-.732s.555-.672.732-1.132c.134-.345.288-.866.332-1.826.043-.952.053-1.225.053-3.649s-.01-2.697-.053-3.649c-.044-.96-.198-1.481-.332-1.826-.177-.46-.388-.788-.732-1.132s-.572-.555-1.032-.732c-.345-.134-.866-.288-1.826-.332-.952-.043-1.225-.053-3.649-.053H11.194zm6.059 3.036a1.144 1.144 0 110 2.29 1.144 1.144 0 010-2.29zM12.194 6.883a5.31 5.31 0 110 10.62 5.31 5.31 0 010-10.62zm0 1.838a3.473 3.473 0 100 6.945 3.473 3.473 0 000-6.945z" clipRule="evenodd" />
                            </svg>
                        </SocialButton>
                        <SocialButton href="mailto:anilkumaras.99@gmail.com" label="Email">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                        </SocialButton>
                    </div>
                </motion.div>

                <div className="hidden lg:block">
                    {/* Placeholder for right side layout */}
                    <div className="relative w-full h-full flex justify-center items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-[-1] animate-pulse-slow pointer-events-none" />
                        <div className="absolute top-[20%] right-[-10%] w-32 h-32 bg-gold/10 blur-[50px] rounded-full z-[-1] pointer-events-none" />
                    </div>
                </div>

            </div>

            {/* Developer Credit Footer */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center z-20 pointer-events-auto">
                <a
                    href="https://www.instagram.com/intellex.web?igsh=MWJyM3JoeHMyem9zbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors duration-300 group"
                >
                    <span className="text-[10px] font-oswald uppercase tracking-widest">Meet the Developers</span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-1.121 1.838c-2.424 0-2.697.01-3.649.053-.96.044-1.481.198-1.826.332-.46.177-.788.388-1.132.732s-.555.672-.732 1.132c-.134.345-.288.866-.332 1.826-.043.952-.053 1.225-.053 3.649s.01 2.697.053 3.649c.044.96.198 1.481.332 1.826.177.46.388.788.732 1.132.344.344.572.555 1.032.732.345.134.866.288 1.826.332.952.043 1.225.053 3.649.053s2.697-.01 3.649-.053c.96-.044 1.481-.198 1.826-.332.46-.177.788-.388 1.132-.732s.555-.672.732-1.132c.134-.345.288-.866.332-1.826.043-.952.053-1.225.053-3.649s-.01-2.697-.053-3.649c-.044-.96-.198-1.481-.332-1.826-.177-.46-.388-.788-.732-1.132s-.572-.555-1.032-.732c-.345-.134-.866-.288-1.826-.332-.952-.043-1.225-.053-3.649-.053H11.194zm6.059 3.036a1.144 1.144 0 110 2.29 1.144 1.144 0 010-2.29zM12.194 6.883a5.31 5.31 0 110 10.62 5.31 5.31 0 010-10.62zm0 1.838a3.473 3.473 0 100 6.945 3.473 3.473 0 000-6.945z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

// Reusable Social Button Component
const SocialButton = ({ children, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-black hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
    >
        {children}
    </a>
);

export default Contact;
