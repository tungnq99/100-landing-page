'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 bg-bg-light relative">
            <div className="container mx-auto px-6">
                {/* Testimonials */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-primary-accent font-bold uppercase text-xs">Testimonials</span>
                        <h3 className="text-2xl font-bold text-primary-dark">Trusted by Experts</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { name: 'Alex T.', role: 'Frontend Lead', text: "Feels like cheating — in the best way possible. Devnote refactored my entire legacy codebase in minutes." },
                            { name: 'Sarah L.', role: 'Open Source Dev', text: "The best coding partner I never knew I needed. It actually understands context, unlike other tools." }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic relative">
                                <span className="text-6xl text-gray-100 absolute top-4 left-6 serif">"</span>
                                <p className="text-gray-600 mb-6 relative z-10">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                    <div className="text-sm">
                                        <div className="font-bold text-primary-dark">{t.name}</div>
                                        <div className="text-gray-400">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-primary-dark rounded-3xl p-12 text-center text-white relative overflow-hidden mb-24 max-w-5xl mx-auto">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/10 rounded-full blur-[80px]"></div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Code Smarter?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">Join thousands of developers who are shipping faster with Devnote.</p>
                    <div className="flex justify-center gap-4 relative z-10">
                        <button className="bg-primary-accent text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-accent/20 hover:scale-105 transition-transform">Get Started Free</button>
                        <button className="bg-white text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">View Pricing</button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary-dark text-white rounded flex items-center justify-center font-bold text-sm">D</div>
                        <span className="font-bold text-primary-dark">Devnote</span>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-primary-accent">Privacy</Link>
                        <Link href="#" className="hover:text-primary-accent">Terms</Link>
                        <Link href="#" className="hover:text-primary-accent">Twitter</Link>
                        <Link href="#" className="hover:text-primary-accent">GitHub</Link>
                    </div>
                    <div className="text-xs text-gray-400">
                        © 2026 Devnote Inc.
                    </div>
                </div>
            </div>
        </footer>
    );
}
