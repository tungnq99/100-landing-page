"use client";

import { Container } from "@/components/ui/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What makes Vaultic different from 1Password or LastPass?",
        a: "Vaultic is designed specifically for developers. We prioritize CLI integration, API access, and self-hosting capabilities that traditional password managers treat as afterthoughts.",
    },
    {
        q: "Can I self-host Vaultic?",
        a: "Yes! We provide a Docker container that you can run on your own infrastructure. You keep full control of your data.",
    },
    {
        q: "How secure is my data?",
        a: "We use zero-knowledge encryption (AES-256) on the client side. We never see your master password or your vault data. Even if we are hacked, your data remains unreadable.",
    },
    {
        q: "Do you have a CLI tool?",
        a: "Yes, our CLI is a first-class citizen. You can access all your secrets, inject them into processes, and manage your vault entirely from the terminal.",
    },
    {
        q: "How does pricing work?",
        a: "We have a generous free tier for individuals. For teams, we charge per user with no hidden fees.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-colors hover:border-white/20"
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white">{faq.q}</span>
                                <span className="text-primary ml-4 shrink-0">
                                    {index === openIndex ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {index === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
