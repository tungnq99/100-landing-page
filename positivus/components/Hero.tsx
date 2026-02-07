'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="px-6 py-12 lg:py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-8 max-w-xl text-center lg:text-left items-center lg:items-start"
            >
                <h1 className="text-4xl md:text-5xl lg:text-[60px] font-medium leading-tight">
                    Navigating the <br /> digital landscape <br /> for success
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-black">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button className="px-9 py-5 bg-zinc-900 text-white rounded-2xl text-xl hover:bg-zinc-700 transition-all">
                    Book a consultation
                </button>
            </motion.div>

            {/* Right Content - Animated Composition */}
            <div className="relative w-full h-[350px] lg:w-[600px] lg:h-[500px] flex items-center justify-center select-none mt-10 lg:mt-0">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Rings Background (CSS) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[500px] lg:h-[500px] rounded-full border border-black opacity-30"
                        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] rounded-full border border-black opacity-30"
                        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        style={{ rotate: 45 }}
                    />

                    {/* Megaphone (Loa) - Central */}
                    <motion.img
                        src="/images/hero/loa.png"
                        alt="Megaphone"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] lg:w-[55%] h-[60%] lg:h-[55%] object-contain z-10 opacity-100"
                        animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Top Left: Black Dot (CSS) */}
                    <motion.div
                        className="absolute top-[18%] left-[12%] w-4 h-4 lg:w-6 lg:h-6 bg-black rounded-full"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Top Left: Green Dot (CSS) */}
                    <motion.div
                        className="absolute top-[25%] left-[20%] w-3 h-3 lg:w-4 lg:h-4 bg-lime-300 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Top Right: Heart (Inner) & Link (Outer) */}
                    <motion.img
                        src="/images/hero/heart.png"
                        alt="Heart"
                        className="absolute top-[5%] right-[22%] w-[12%] object-contain z-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.img
                        src="/images/hero/link.png"
                        alt="Link"
                        className="absolute top-[12%] right-[5%] w-[12%] object-contain z-20"
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    {/* Right Middle: Youtube/Play */}
                    <motion.img
                        src="/images/hero/ytb.png"
                        alt="Play"
                        className="absolute top-[40%] right-[10%] w-[12%] object-contain z-20"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />

                    {/* Bottom Right: Map & Green Dot */}
                    <motion.img
                        src="/images/hero/map.png"
                        alt="Map"
                        className="absolute bottom-[28%] right-[12%] w-[12%] object-contain z-20"
                        animate={{ y: [-10, 0, -10] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />
                    <motion.div
                        className="absolute bottom-[10%] right-[35%] w-2 h-2 lg:w-3 lg:h-3 bg-lime-300 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Bottom Left: Stars */}
                    <motion.img
                        src="/images/hero/start1.png"
                        alt="Star"
                        className="absolute bottom-[25%] left-[18%] w-[12%] object-contain z-0"
                        animate={{ rotate: [0, 180, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.img
                        src="/images/hero/start2.png"
                        alt="Star"
                        className="absolute bottom-[5%] left-[45%] w-[8%] object-contain z-0"
                        animate={{ scale: [0.8, 1, 0.8], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
