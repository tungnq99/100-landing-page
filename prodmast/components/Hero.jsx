'use client';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] bg-page-bg flex items-center justify-center px-6 lg:px-20 overflow-hidden pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto w-full z-10">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full w-fit shadow-sm border border-gray-100"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                        <span className="text-sm font-bold text-secondary-dark tracking-wide uppercase text-[10px]">Manufacturing SaaS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold text-secondary-dark leading-[1.1] tracking-tight"
                    >
                        The Future of Manufacturing with <span className="text-primary-dark">Latest Technology</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-grey max-w-md leading-relaxed"
                    >
                        Revolutionize your production with AI-driven insights and real-time monitoring.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex gap-4"
                    >
                        <button className="bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 hover:shadow-lg group shadow-md">
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-2xl font-semibold text-secondary-dark bg-white border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
                            View Demo
                        </button>
                    </motion.div>
                </div>

                {/* Visual - Floating Bento Cards */}
                <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">
                    {/* Card 1: Stats */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-0 sm:left-10 bg-white p-6 rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col gap-3 w-64 z-20"
                    >
                        <div className="flex items-center justify-between">
                            <span className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Zap size={20} /></span>
                            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div>
                            <span className="text-muted-grey text-sm font-medium block mb-1">Total Production</span>
                            <span className="text-3xl font-bold text-secondary-dark">1,951+</span>
                        </div>
                    </motion.div>

                    {/* Card 2: Main Image (Pipe/Industrial) */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, y: [0, 15, 0] }}
                        transition={{
                            scale: { duration: 0.8 },
                            opacity: { duration: 0.8 },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                        className="absolute top-10 right-0 sm:right-10 w-72 h-96 bg-primary-dark rounded-2xl shadow-2xl overflow-hidden z-10"
                    >
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#142F32] to-[#2C5E63]"></div>
                            {/* Abstract Pipe Visual */}
                            <div className="absolute -right-10 top-20 w-40 h-full border-[20px] border-accent-lime/20 rounded-l-full"></div>
                            <div className="absolute -right-6 top-32 w-40 h-full border-[20px] border-accent-lime/40 rounded-l-full"></div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <span className="text-accent-lime font-bold text-lg block">Precision Pipes</span>
                                    <span className="text-white/60 text-xs">Automated Quality Check</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Reviews */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[20%] right-[15%] bg-secondary-dark p-5 rounded-2xl shadow-xl w-60 z-30 flex flex-col gap-3 border border-gray-700/50"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-secondary-dark"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-secondary-dark"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-secondary-dark"></div>
                            </div>
                            <div className="bg-accent-lime text-secondary-dark text-[10px] font-bold px-2 py-0.5 rounded-full">Top Rated</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1 text-accent-lime">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" className="stroke-none" />)}
                            </div>
                            <span className="text-gray-300 text-xs text-left">Trusted by 500+ manufacturers</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
