"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden bg-neutral-950 flex flex-col items-center justify-center text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl mx-auto"
            >
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
                    Ready to tell <br />
                    <span className="text-neutral-500">your story?</span>
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-lg mx-auto">
                    Let's collaborate to build immersive digital experiences that leave a lasting impact.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-white text-black font-medium text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Start a Project
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path
                                d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            </motion.div>
        </section>
    );
}
