"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto bg-neutral-950">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                {/* Sticky Header Side */}
                <div className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-24">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-heading font-bold text-neutral-200 mb-4 md:mb-6"
                        >
                            Experience
                        </motion.h2>
                        <p className="text-neutral-500 max-w-sm text-lg">
                            A timeline of my professional journey and contributions to the digital landscape.
                        </p>
                    </div>
                </div>

                {/* Scrollable Content Side */}
                <div className="lg:col-span-8 space-y-12 md:space-y-20">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group"
                        >
                            <span className="text-sm font-mono text-blue-500 mb-2 block">
                                {exp.date}
                            </span>
                            <h3 className="text-xl md:text-3xl font-heading font-medium text-neutral-200 mb-2 group-hover:text-white transition-colors">
                                {exp.company}
                            </h3>
                            <p className="text-base md:text-xl text-neutral-400 mb-3">{exp.role}</p>
                            <p className="text-neutral-500 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
