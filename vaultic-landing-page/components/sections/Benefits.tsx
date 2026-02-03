"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    {
        title: "Self-Hosted or Cloud",
        description: "Complete control over your data. Deploy Vaultic on your own infrastructure using Docker, or trust our SOC2 compliant managed cloud.",
        points: ["One-line Docker deploy", "Full data sovereignty", "Automated backups"],
        image: "/placeholder-self-host.png", // In real app, use imported images or actual assets
        imagePos: "left",
    },
    {
        title: "CLI & Dev Environments",
        description: "Stop copying and pasting secrets. Inject environment variables directly into your build pipelines and local dev servers.",
        points: ["Works with .env files", "Shell integration", "CI/CD pipelines ready"],
        image: "/placeholder-cli.png",
        imagePos: "right",
    },
    {
        title: "Scales With Your Stack",
        description: "From a solo freelancer to an enterprise engineering org, Vaultic adapts to your team structure.",
        points: ["RBAC Permissions", "Audit Logs", "SAML SSO Support"],
        image: "/placeholder-scale.png",
        imagePos: "left",
    },
    {
        title: "Vendor Lockout-Free",
        description: "Your data belongs to you. We use an open vault format that ensures you can always export and migrate.",
        points: ["JSON/CSV Export", "Open Standard", "No proprietary encryption"],
        image: "/placeholder-lockout.png",
        imagePos: "right",
    },
];

export function Benefits() {
    return (
        <section className="py-24 overflow-hidden">
            <Container>
                <div className="space-y-32">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col gap-12 lg:gap-20 items-center ${benefit.imagePos === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
                                }`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-3xl font-heading font-bold text-white mb-6">{benefit.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {benefit.description}
                                </p>
                                <ul className="space-y-4">
                                    {benefit.points.map((point) => (
                                        <li key={point} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual */}
                            <div className="flex-1 w-full bg-white/5 rounded-2xl border border-white/10 aspect-video flex items-center justify-center relative overflow-hidden group">
                                {/* Placeholder visual */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                                <span className="text-gray-500 font-mono text-sm">[Visual: {benefit.title}]</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
