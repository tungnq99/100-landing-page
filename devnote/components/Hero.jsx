'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
    const containerRef = useRef(null);

    // Basic scroll parallax
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 -z-10"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse"></span>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">v2.0 is now live</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-extrabold text-primary-dark tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
                >
                    Helping Your Daily with <br className="hidden md:block" />
                    <span className="relative inline-block">
                        AI Powered
                        <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-accent/30 -rotate-1 rounded-full -z-10"></span>
                    </span> Code Plugin
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Devnote writes, refactors, and documents your code 5x faster.
                    Compatible with VSCode, JetBrains, and more.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <button className="bg-primary-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary-accent/20 hover:shadow-primary-accent/40 hover:-translate-y-1 transition-all w-full sm:w-auto">
                        Get Started Free
                    </button>
                    <button className="bg-white text-primary-dark border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">▶</span> Watch Demo
                    </button>
                </motion.div>

                {/* Hero Image / Mockup Area */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Main Laptop Mockup (CSS only for now) */}
                    <div className="relative bg-[#1E1E1E] rounded-t-2xl border-[12px] border-gray-800 border-b-0 shadow-2xl aspect-[16/10] overflow-hidden group">
                        {/* Header bar */}
                        <div className="h-8 bg-[#2D2D2D] flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            <div className="ml-4 text-xs text-gray-400 font-mono">index.tsx — Devnote</div>
                        </div>
                        {/* Code Content */}
                        <div className="p-8 font-mono text-sm text-gray-300 text-left">
                            <div className="flex gap-4">
                                <div className="text-gray-600 select-none text-right w-6">1</div>
                                <div><span className="text-[#C792EA]">import</span> React <span className="text-[#C792EA]">from</span> <span className="text-[#C3E88D]">'react'</span>;</div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-gray-600 select-none text-right w-6">2</div>
                                <div><span className="text-[#C792EA]">export default function</span> <span className="text-[#82AAFF]">App</span>() {'{'}</div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-gray-600 select-none text-right w-6">3</div>
                                {/* AI Suggestion Highlight */}
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-primary-accent/10 border border-primary-accent/30 rounded flex items-center justify-end pr-2">
                                        <span className="text-[10px] text-primary-accent font-sans font-bold bg-primary-accent/10 px-1 rounded ml-2">Devnote AI</span>
                                    </div>
                                    <span className="text-gray-500">// AI: Generating optimized heavy component...</span>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <div className="text-gray-600 select-none text-right w-6">4</div>
                                <div className="text-[#F07178]">  return (</div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-gray-600 select-none text-right w-6">5</div>
                                <div className="pl-4 text-[#89DDFF]">&lt;div className="hero"&gt;</div>
                            </div>
                        </div>

                        {/* Floating UI Elements (Parallax) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">JD</div>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">John Doe</div>
                                    <div className="text-[10px] text-gray-500">Just optimizations</div>
                                </div>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full w-[80%] bg-primary-accent"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-10 bg-[#112D32] p-4 rounded-xl shadow-xl z-20 text-white"
                        >
                            <div className="text-xs font-bold text-primary-accent mb-1">✓ Optimization</div>
                            <div className="text-2xl font-bold">98%</div>
                            <div className="text-[10px] text-gray-400">Performance Score</div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
