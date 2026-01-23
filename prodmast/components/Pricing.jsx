'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section className="py-24 bg-[#142F32] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                <div className="text-center mb-16">
                    <span className="text-accent-lime text-sm font-bold tracking-wider uppercase mb-2 block">Plans & Pricing</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Simple Pricing for Everyone</h2>
                    <p className="text-gray-400 text-center text-lg">Choose the plan that fits your manufacturing scale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {/* Starter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary-dark p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-colors"
                    >
                        <div className="mb-4">
                            <span className="text-gray-400 font-medium block mb-2">Starter</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$39</span>
                                <span className="text-gray-500 text-sm">/mo</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">Perfect for small workshops getting started with digitization.</p>
                        <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-semibold mb-8">Choose Starter</button>

                        <ul className="space-y-4 flex-1">
                            {['Up to 5 Machines', 'Real-time Monitoring', 'Basic Analytics', 'Email Support', 'Community Access'].map(feat => (
                                <li key={feat} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="bg-white/10 p-1 rounded-full mt-0.5"><Check size={10} /></span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-secondary-dark p-8 rounded-2xl border border-white/5 flex flex-col relative overflow-hidden ring-1 ring-accent-lime/50 shadow-[0_0_40px_-10px_rgba(227,255,204,0.1)]"
                    >
                        <div className="absolute top-0 right-0 bg-accent-lime text-secondary-dark text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-wider">MOST POPULAR</div>
                        <div className="mb-4">
                            <span className="text-accent-lime font-medium block mb-2">Enterprise</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">$99</span>
                                <span className="text-gray-500 text-sm">/mo</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">For growing manufacturers needing advanced control.</p>
                        <button className="w-full py-3 rounded-xl bg-accent-lime text-primary-dark font-bold hover:brightness-110 transition-colors mb-8">Choose Enterprise</button>

                        <ul className="space-y-4 flex-1">
                            {['Unlimited Machines', 'Predictive Maintenance', 'Advanced Analytics', '24/7 Priority Support', 'API Access', 'Custom Integrations'].map(feat => (
                                <li key={feat} className="flex items-start gap-3 text-white text-sm">
                                    <span className="bg-accent-lime text-primary-dark p-1 rounded-full mt-0.5"><Check size={10} /></span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Professional Wide Card (placed in grid or full width? Specs said "underneath". But grid layout is nice. 
               Let's put it underneath the grid as a separate full-width card) */}
                </div>

                {/* Professional Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 bg-secondary-dark p-8 md:p-12 rounded-2xl border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8"
                >
                    <div className="flex-1 text-center lg:text-left">
                        <span className="text-purple-400 font-bold tracking-wider uppercase text-xs mb-2 block">Professional</span>
                        <h3 className="text-2xl font-bold mb-3">Need a Custom Solution?</h3>
                        <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
                            For large-scale factories with over 100+ machines, we offer tailored solutions with on-premise deployment and dedicated engineering teams.
                        </p>
                    </div>
                    <div>
                        <button className="px-8 py-4 rounded-xl bg-white text-secondary-dark font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">Contact Sales</button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
