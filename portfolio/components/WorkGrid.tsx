"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { clsx } from "clsx";

export default function WorkGrid() {
    return (
        <section id="work" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-12"
            >
                Selected Work
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={clsx(
                            "group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800",
                            project.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
                            "aspect-[4/3] md:aspect-auto md:h-[400px]"
                        )}
                    >
                        {/* Image placeholder with hover scale */}
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                            {/* Ideally use Next.js Image here, using div background for prototype */}
                            <div
                                className="w-full h-full bg-cover bg-center opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-8">
                            <span className="text-xs font-mono text-neutral-400 mb-2 block border border-neutral-700 w-fit px-2 py-1 rounded-full bg-neutral-950/50 backdrop-blur-sm">
                                {project.category}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-heading font-medium text-white group-hover:text-glow transition-all duration-300">
                                {project.title}
                            </h3>
                        </div>

                        <a href={project.link} className="absolute inset-0 z-10" aria-label={`View ${project.title}`}>
                            <span className="sr-only">View Project</span>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
