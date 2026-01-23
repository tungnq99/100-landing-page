'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Regular',
        price: '10',
        features: ['100 AI Generations', 'Basic Analytics', 'Community Support'],
        highlight: false
    },
    {
        name: 'Pro',
        price: '15',
        features: ['Unlimited Generations', 'Advanced Analytics', 'Priority Support', 'Custom Models'],
        highlight: true // Mint Highlight
    },
    {
        name: 'Team',
        price: '120',
        features: ['Everything in Pro', 'Team Dashboard', 'SSO Integrated', 'Dedicated Account Manager'],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-primary-dark text-white relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary-accent font-bold tracking-wider uppercase text-sm mb-2 block">Pricing</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Simple Pricing, No Surprises</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-2xl relative ${plan.highlight
                                ? 'bg-white text-primary-dark'
                                : 'bg-white/5 border border-white/10 text-white'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Best Value
                                </div>
                            )}
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                {plan.highlight && <span className="w-2 h-2 rounded-full bg-primary-dark"></span>}
                                {!plan.highlight && <span className="w-2 h-2 rounded-full bg-primary-accent"></span>}
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className={`text-sm ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                                        <div className={`p-0.5 rounded-full ${plan.highlight ? 'bg-primary-accent/20 text-primary-dark' : 'bg-primary-accent text-white'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className={plan.highlight ? 'text-gray-600' : 'text-gray-300'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${plan.highlight
                                    ? 'bg-primary-dark text-white hover:bg-black shadow-xl'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
