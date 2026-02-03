"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Shield, Zap, Terminal, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Zero-knowledge encryption",
        description: "Your data is encrypted locally before it leaves your device. We can't see it — no one can.",
        icon: Shield,
        className: "md:col-span-2 md:row-span-2", // Large Card
        gradient: "from-primary/20 to-transparent",
    },
    {
        title: "Instant Sync",
        description: "Real-time synchronization across all your devices and CLI sessions.",
        icon: Zap,
        className: "md:col-span-1 md:row-span-1", // Medium
        gradient: "from-blue-500/20 to-transparent",
    },
    {
        title: "CLI Integration",
        description: "Inject secrets directly into your environment variables with `vaultic run`.",
        icon: Terminal,
        className: "md:col-span-1 md:row-span-1", // Medium
        gradient: "from-purple-500/20 to-transparent",
    },
    {
        title: "Team Permissions",
        description: "Granular access control ensuring the right people have the right keys.",
        icon: Users,
        className: "md:col-span-2 md:row-span-1", // Wide Medium
        gradient: "from-orange-500/20 to-transparent",
    },
];

export function FeaturesGrid() {
    return (
        <section className="py-24 bg-black/50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Everything you need</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Packed with features that developers actually care about. No bloat, just power.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative p-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-primary/50",
                                feature.className
                            )}
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    feature.gradient
                                )}
                            />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="p-3 bg-white/10 w-fit rounded-xl mb-6 text-white group-hover:text-primary group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
