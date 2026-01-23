'use client';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Settings, Truck, Users, Database, ArrowUpRight } from 'lucide-react';

const services = [
    { title: 'Real-time Monitoring', icon: Activity, desc: 'Track production lines in real-time with millisecond latency sensors.' },
    { title: 'Predictive Maintenance', icon: Settings, desc: 'AI prevents downtime before it happens by analyzing machine health.' },
    { title: 'Quality Control', icon: BarChart3, desc: 'Automated defect detection using computer vision systems.' },
    { title: 'Supply Chain', icon: Truck, desc: 'Optimize logistics and inventory with predictive forecasting.' },
    { title: 'Workforce', icon: Users, desc: 'Manage shifts and efficiency with smart wearable integration.' },
    { title: 'Data Analytics', icon: Database, desc: 'Deep insights for better decisions driven by big data.' },
];

export default function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-primary-dark text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-lime text-sm font-bold tracking-wider uppercase mb-2 block"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold leading-tight"
                        >
                            Intelligent Solutions<br />for Modern Factories
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-sm text-lg"
                    >
                        We provide end-to-end solutions to digitize and optimize your manufacturing operations to 100%.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group bg-[#1E3B3E] border border-white/5 p-8 rounded-2xl hover:bg-[#25464A] transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-8 right-8 text-white/20 group-hover:text-accent-lime transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight size={24} />
                            </div>

                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-lime mb-6 group-hover:bg-accent-lime group-hover:text-primary-dark transition-all duration-300">
                                <service.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
