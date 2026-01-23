'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Bug, Monitor } from 'lucide-react';

const features = [
    {
        id: 'generator',
        title: 'Code Generator',
        description: 'Generate boilerplate code, unit tests, and documentation with a single click. Context-aware and secure.',
        icon: Code2,
    },
    {
        id: 'monitor',
        title: 'Real-time Monitor',
        description: 'Track performance metrics and memory leaks as you type. Immediate feedback loop.',
        icon: Monitor,
    },
    {
        id: 'debug',
        title: 'AI Debug',
        description: 'Deep scan your codebase for potential bugs and vulnerabilities before deploying.',
        icon: Bug,
    },
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="features" className="py-24 bg-bg-light overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-primary-accent font-bold tracking-wider uppercase text-sm mb-2 block">Features</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">Introducing Devnote AI</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Content & Tabs */}
                    <div className="lg:col-span-4 flex flex-col justify-center gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeFeature === index
                                    ? 'bg-white shadow-xl border-transparent scale-105'
                                    : 'bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={`p-2 rounded-lg ${activeFeature === index ? 'bg-primary-accent text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        <feature.icon size={20} />
                                    </div>
                                    <h3 className={`text-xl font-bold ${activeFeature === index ? 'text-primary-dark' : 'text-gray-500'}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className={`text-sm leading-relaxed ${activeFeature === index ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 bg-primary-accent text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-primary-accent/20 w-fit"
                        >
                            Try live demo
                        </motion.button>
                    </div>

                    {/* Right: Dynamic Image Display */}
                    <div className="lg:col-span-8 relative perspective-[1000px]">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, y: 20, rotateY: 5 }}
                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full min-h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
                        >
                            {/* Simulated Dashboard UI */}
                            <div className="absolute top-0 w-full h-12 bg-gray-50 border-b border-gray-200 flex items-center px-6 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="ml-4 text-xs font-medium text-gray-400 bg-white px-3 py-1 rounded-md shadow-sm">
                                    {features[activeFeature].title} - Dashboard
                                </div>
                            </div>

                            <div className="p-8 pt-20 h-full bg-slate-50">
                                {/* Abstract Content based on feature */}
                                <div className="flex gap-6 h-full">
                                    <div className="w-64 bg-white h-full rounded-xl shadow-sm p-4 hidden md:block">
                                        <div className="h-4 w-24 bg-gray-100 rounded mb-6"></div>
                                        <div className="space-y-3">
                                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-8 w-full bg-gray-50 rounded"></div>)}
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white h-full rounded-xl shadow-sm p-6 relative overflow-hidden">
                                        {/* Content Animation */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-4"
                                        >
                                            <div className="flex justify-between items-center mb-8">
                                                <div className="h-8 w-48 bg-gray-100 rounded"></div>
                                                <div className="h-8 w-8 bg-primary-accent/20 rounded-full"></div>
                                            </div>
                                            <div className="h-32 w-full bg-primary-dark/5 rounded-xl border border-dashed border-primary-dark/10 flex items-center justify-center text-gray-400">
                                                Analytics Visualization
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-24 bg-blue-50 rounded-xl"></div>
                                                <div className="h-24 bg-green-50 rounded-xl"></div>
                                            </div>
                                        </motion.div>

                                        {/* Floating badge specific to feature */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3, type: "spring" }}
                                            className="absolute bottom-8 right-8 bg-black text-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold flex items-center gap-2"
                                        >
                                            {/* Render icon dynamically */
                                                (() => {
                                                    const Icon = features[activeFeature].icon;
                                                    return <Icon size={16} className="text-primary-accent" />;
                                                })()
                                            }
                                            {features[activeFeature].title} Active
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
