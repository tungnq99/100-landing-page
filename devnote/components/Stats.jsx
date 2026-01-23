'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: '5x', label: 'Faster Coding' },
    { value: '1.2M', label: 'Lines Refactored' },
    { value: '98%', label: 'Accuracy Rate' },
    { value: '30%', label: 'Less Bugs' },
];

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="bg-primary-dark py-16 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
