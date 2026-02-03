"use client";

import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Vaultic just works. Zero setup headaches, CLI access, and I know my team's credentials are actually safe.",
        author: "Aiden Clarke",
        role: "Senior DevOps Engineer",
    },
    {
        quote: "Finally a password manager that understands how developers actually work. The API integration is a game changer.",
        author: "Sarah Jenko",
        role: "CTO @ TechFlow",
    },
    {
        quote: "We migrated from LastPass in a day. The open format import was flawless. Highly recommended.",
        author: "Marcus Chen",
        role: "Lead Typer",
    },
];

export function Testimonials() {
    return (
        <section className="py-24">
            <Container>
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Why developers trust Vaultic</h2>
                    <p className="text-gray-400">Loved by developers around the globe</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">"{t.quote}"</p>
                            <div>
                                <div className="text-white font-bold">{t.author}</div>
                                <div className="text-primary text-sm">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
