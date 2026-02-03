"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder logos for Trust Badges
const brands = ["Acme Corp", "TechFlow", "DevScale", "CyberGuard", "BitSafe"];

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
                />
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">#1 Password Manager for Developers</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                        Secure logins. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                            In a single click.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Vaultic offers CLI-first workflows, self-hosting options, and API access designed specifically for technical teams.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Button size="lg" className="w-full sm:w-auto text-lg h-14" icon>
                            Start 14 days free
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg h-14">
                            Book a Demo
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">Trusted by engineering teams at</p>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                            {brands.map((brand) => (
                                <span key={brand} className="text-xl font-bold font-heading text-white">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
