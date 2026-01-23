'use client';
import { motion } from 'framer-motion';
import { Layers, Terminal, Box, GitBranch } from 'lucide-react';

const cards = [
    { title: 'Storage', icon: Layers },
    { title: 'Interpreter', icon: Terminal },
    { title: 'Resolver', icon: Box },
    { title: 'Coordinator', icon: GitBranch },
];

export default function Diagram() {
    return (
        <section className="flex flex-col items-center lg:items-start justify-center py-20 min-h-[500px] perspective-[2000px] w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24 bg-highlight-lime/20 text-text-jungle px-4 py-1.5 rounded-full font-bold text-sm tracking-wide uppercase border border-highlight-lime/30"
            >
                Execution Layer
            </motion.div>

            <div className="relative w-full max-w-5xl h-64 flex items-center justify-center preserve-3d">
                {cards.map((card, i) => {
                    // Calculate spread position centered
                    const spacing = 200;
                    const startX = -((cards.length - 1) * spacing) / 2;
                    const targetX = startX + (i * spacing);

                    return (
                        <motion.div
                            key={i}
                            initial={{ x: 0, y: i * -8, zIndex: cards.length - i, opacity: 0 }}
                            whileInView={{
                                x: targetX,
                                y: 0,
                                opacity: 1,
                                rotateX: 55, // Stronger isometric tilt
                                rotateZ: -45, // Classic isometric angle
                            }}
                            animate={{
                                y: [0, -15, 0], // Floating loop
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                // Spread transition
                                x: { duration: 0.5, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] },
                                opacity: { duration: 0.5, delay: i * 0.1 },
                                rotateX: { duration: 0.5, delay: i * 0.1 },
                                rotateZ: { duration: 0.5, delay: i * 0.1 },
                                // Floating transition (happens after spread)
                                y: {
                                    duration: 0.5, // Initial spread y:0
                                    ease: "easeOut",
                                    // Then the loop
                                    loop: Infinity,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.5 + i, // Offset timing for organic feel
                                    ease: "easeInOut"
                                }
                            }}
                            className="absolute w-36 h-36 bg-white border border-highlight-lime shadow-[10px_10px_0px_rgba(13,94,70,0.1)] rounded-xl flex flex-col items-center justify-center gap-2 transform-style-3d hover:shadow-[15px_15px_0px_rgb(201,244,127)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="transform rotate-45 rotate-x-[-55] flex flex-col items-center justify-center gap-3">
                                <card.icon className="text-primary-green w-10 h-10 stroke-[1.5px] group-hover:scale-110 transition-transform duration-300" />
                                {/* Text inside card for true isometric feeling */}
                                <span className="text-xs font-bold text-text-jungle tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{card.title}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Connection Line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-highlight-lime to-transparent mt-12"
            ></motion.div>

            {/* Labels underneath */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-4xl mt-12 text-center px-12">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + (i * 0.1) }}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="w-1 h-1 bg-primary-green rounded-full mb-2"></span>
                        <span className="text-sm font-semibold text-text-jungle tracking-tight">
                            {card.title}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
