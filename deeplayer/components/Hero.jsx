'use client';
import { motion } from 'framer-motion';

const features = [
    { label: 'Fast Execution:', value: 'Scalable performance.' },
    { label: 'Flexible Architecture:', value: 'Seamless VM support.' },
    { label: 'Quick Deployment:', value: 'Go live in weeks.' },
    { label: 'Clear Pricing:', value: 'Fixed costs.' },
];

export default function Hero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Cubic bezier for snap
                    className="text-6xl lg:text-8xl font-semibold leading-[0.95] text-text-jungle tracking-tighter"
                >
                    Scalable Blockchain Design for New Chains
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className="text-xl text-gray-500 max-w-lg leading-relaxed font-normal"
                >
                    Built for high-throughput, predictable performance, and easy blockchain deployment.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    className="flex gap-4 mt-2"
                >
                    <button className="bg-primary-green text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#0A4B38] transition-colors active:scale-[0.98] shadow-lg shadow-primary-green/20">
                        Build Your Chain
                    </button>
                    <button className="bg-white border border-gray-200 text-text-jungle px-8 py-4 rounded-md font-medium text-lg hover:border-gray-400 transition-colors active:scale-[0.98]">
                        Read Whitepaper
                    </button>
                </motion.div>
            </div>

            {/* Right Content - Feature List */}
            <div className="flex flex-col gap-8 lg:pl-12">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">OUR FEATURES</span>
                {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 text-xl md:text-2xl group cursor-default">
                        <span className="font-medium text-gray-400 bg-white/50 px-3 py-1.5 border border-gray-100 rounded-sm shadow-sm text-base">{feature.label}</span>
                        <span className="relative font-semibold text-text-jungle px-1 pb-1">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.15,
                                    ease: [0.22, 1, 0.36, 1] // Custom spring-like easing 
                                }}
                                className="absolute inset-0 bg-highlight-lime -z-10 h-[85%] top-[10%] opacity-90 mix-blend-multiply"
                            ></motion.span>
                            {feature.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
