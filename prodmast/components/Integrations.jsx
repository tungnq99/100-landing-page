'use client';
import { motion } from 'framer-motion';
import { Zap, Slack, Github, Figma, Trello, Mail, Database } from 'lucide-react';

const logos = [
    { icon: Slack, color: '#E01E5A' },
    { icon: Github, color: '#333333' },
    { icon: Figma, color: '#F24E1E' },
    { icon: Trello, color: '#0079BF' },
    { icon: Mail, color: '#EA4335' },
    { icon: Database, color: '#0061e8' },
];

export default function Integrations() {
    return (
        <section className="py-24 bg-page-bg overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                {/* Left Content */}
                <div className="order-2 lg:order-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl lg:text-5xl font-bold text-secondary-dark mb-6 leading-tight"
                    >
                        Seamless Integrations<br />with your Workflow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-grey text-lg mb-8 max-w-md leading-relaxed"
                    >
                        Connect Prodmast with your favorite tools. We support over 50+ integrations to ensure your data flows smoothly across platforms.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-dark font-bold border-b-2 border-primary-dark hover:text-opacity-80 transition-opacity pb-1"
                    >
                        View All Integrations
                    </motion.button>
                </div>

                {/* Right Orbit Animation */}
                <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
                    {/* Background Blob */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-80 h-80 bg-[#E3FFCC] opacity-60 blur-3xl rounded-full"></div>
                    </div>

                    {/* Central Logo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="relative z-20 bg-white p-6 rounded-2xl shadow-xl w-24 h-24 flex items-center justify-center border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center">
                            <span className="text-accent-lime font-bold text-xl">P</span>
                        </div>
                    </motion.div>

                    {/* Orbit Ring (Visual) */}
                    <div className="absolute w-[350px] h-[350px] border border-gray-200 rounded-full z-0 opacity-50"></div>

                    {/* Orbiting Container */}
                    <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                        {/* Items positioned on the circle */}
                        {logos.map((logo, i) => {
                            const angle = (i * 360) / logos.length;
                            const radius = 175; // Half of 350px ring + padding
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center justify-center w-14 h-14"
                                    style={{
                                        left: `calc(50% + ${radius * Math.cos(angle * Math.PI / 180)}px - 28px)`, // x = r * cos(theta)
                                        top: `calc(50% + ${radius * Math.sin(angle * Math.PI / 180)}px - 28px)`,  // y = r * sin(theta)
                                    }}
                                    animate={{ rotate: -360 }} // Counter rotate to keep icon upright
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                >
                                    <logo.icon size={24} color={logo.color} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
