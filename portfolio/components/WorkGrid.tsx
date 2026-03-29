"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export default function WorkGrid() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="work" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                {/* Sticky Header */}
                <div className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-24">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-mono text-blue-500 mb-4 uppercase tracking-widest"
                        >
                            Selected Work
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-heading font-bold text-neutral-200 mb-6"
                        >
                            Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-500 max-w-sm text-lg leading-relaxed"
                        >
                            A collection of projects I&apos;ve shipped — from trading systems to enterprise dashboards.
                        </motion.p>
                    </div>
                </div>

                {/* Project List */}
                <div className="lg:col-span-8 space-y-3">
                    {PROJECTS.map((project, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.07 }}
                                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                                    isOpen
                                        ? "border-neutral-700 bg-neutral-900"
                                        : "border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
                                }`}
                            >
                                {/* Header row — always visible */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-start justify-between gap-4 p-6 text-left group"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-xs font-mono text-blue-500">{project.date}</span>
                                            <span className="text-xs font-mono text-neutral-600">·</span>
                                            <span className="text-xs font-mono text-neutral-500 border border-neutral-700 px-2 py-0.5 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-neutral-200 group-hover:text-white transition-colors truncate">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Chevron */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex-shrink-0 mt-1 w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:border-neutral-500 group-hover:text-white transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </motion.div>
                                </button>

                                {/* Expandable body */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 space-y-5 border-t border-neutral-800 pt-5">
                                                {/* Description + position */}
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                        {project.position}
                                                    </span>
                                                </div>

                                                <p className="text-neutral-400 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>

                                                {/* Responsibilities */}
                                                {project.responsibilities && project.responsibilities.length > 0 && (
                                                    <ul className="space-y-2">
                                                        {project.responsibilities.map((r, i) => (
                                                            <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                                                                <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-blue-500" />
                                                                {r}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {/* Tech + Link row */}
                                                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="text-xs font-mono text-neutral-500 border border-neutral-700 px-2.5 py-1 rounded-lg bg-neutral-800/50"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {project.link !== "#" && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                                                        >
                                                            View Demo
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
