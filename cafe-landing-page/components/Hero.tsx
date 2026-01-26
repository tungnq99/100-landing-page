"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero_bg from "@/public/hero_bg.png";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hero_bg}
                    alt="Không gian quán cafe vintage cổ điển"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" /> {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-transparent to-transparent opacity-80" /> {/* Bottom fade */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center text-center">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="mb-6 font-display text-5xl font-bold text-[#F5F1E8] drop-shadow-lg md:text-7xl lg:text-8xl">
                            Hương Vị <span className="text-[#C84B31] italic">Nguyên Bản</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mb-10 max-w-2xl font-body text-xl text-[#EADBC8] md:text-2xl"
                    >
                        Nơi thời gian lắng đọng trong từng giọt cà phê, đánh thức vị giác của người sành điệu.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#C84B31] px-8 py-4 text-lg font-bold text-[#F5F1E8] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#A03520] hover:shadow-[#C84B31]/40 focus:outline-none focus:ring-2 focus:ring-[#C84B31] focus:ring-offset-2 hover:cursor-pointer active:scale-95">
                            <span className="relative z-10">Thưởng Thức Ngay</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#A03520] to-[#C84B31] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
