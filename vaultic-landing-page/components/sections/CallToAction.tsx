"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <Container className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                    Get secure logins. <br /> Instantly.
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                    No fees. No setup. Vaultic protects your vault from the first click.
                </p>
                <Button size="lg" className="h-16 px-10 text-xl shadow-[0_0_40px_rgba(107,237,185,0.4)] hover:shadow-[0_0_60px_rgba(107,237,185,0.6)]">
                    Start 14 days free
                </Button>
            </Container>
        </section>
    );
}
