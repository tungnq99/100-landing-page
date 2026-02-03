"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { UserPlus, Key, RefreshCcw } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Create Account",
        description: "Sign up in seconds. Download our CLI tool or desktop app to get started immediately.",
        icon: UserPlus,
    },
    {
        number: "02",
        title: "Add Vault Items",
        description: "Import from existing managers or add new secrets via terminal or UI interface.",
        icon: Key,
    },
    {
        number: "03",
        title: "Sync & Manage",
        description: "Access your credentials securely across all dev environments and devices.",
        icon: RefreshCcw,
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">End-to-end security in 3 steps</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent dashed" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center z-10"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm group hover:border-primary/50 transition-colors duration-300">
                                <step.icon className="w-10 h-10 text-primary" />
                            </div>
                            <div className="text-sm font-bold text-primary mb-2 tracking-widest">{step.number}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
