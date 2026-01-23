'use client';
import { motion } from 'framer-motion';

// Mock Logos (using simple colored divs with text for now, typically these would be SVGs)
const integrations = [
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'Java', color: 'bg-red-500' },
    { name: 'VS Code', color: 'bg-blue-600' },
    { name: 'GitLab', color: 'bg-orange-600' },
    { name: 'Docker', color: 'bg-blue-400' },
    { name: 'Redis', color: 'bg-red-600' },
    { name: 'AWS', color: 'bg-yellow-500' },
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'React', color: 'bg-cyan-400' },
    { name: 'C++', color: 'bg-blue-800' },
    { name: 'Azure', color: 'bg-blue-500' },
    { name: 'Figma', color: 'bg-purple-500' },
    { name: 'JS', color: 'bg-yellow-400' },
    { name: 'Node', color: 'bg-green-600' },
    { name: 'GitHub', color: 'bg-gray-800' },
    { name: 'Slack', color: 'bg-purple-600' },
];

export default function Integrations() {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 text-center">
                <span className="text-primary-accent font-bold tracking-wider uppercase text-sm mb-2 block">Integration</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-12">
                    Supported Language and Code Editor
                </h2>

                <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
                    {integrations.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center aspect-square cursor-pointer group"
                        >
                            {/* Placeholder Logo */}
                            <div className={`w-8 h-8 rounded-full ${item.color} group-hover:ring-4 ring-opacity-20 ring-primary-accent transition-all`}></div>
                            <span className="sr-only">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
