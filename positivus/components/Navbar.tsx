'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-50">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path d="M18.0001 26.963C22.9507 26.963 26.9631 22.9506 26.9631 18C26.9631 13.0494 22.9507 9.03705 18.0001 9.03705C13.0495 9.03705 9.03711 13.0494 9.03711 18C9.03711 22.9506 13.0495 26.963 18.0001 26.963Z" fill="black" />
                    <path d="M29.1833 7.15179L18.7095 17.6256L22.9506 21.8667L33.4244 11.3929L29.1833 7.15179Z" fill="black" />
                </svg>
                <span className="text-2xl font-bold font-space-grotesk italic">Positivus</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg text-black hover:text-gray-600 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <button className="px-8 py-4 border border-zinc-900 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all text-lg min-w-[200px]">
                    Request a quote
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-10 lg:hidden border-t border-black/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl text-black hover:text-gray-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="px-8 py-4 border border-zinc-900 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all text-lg w-[80%]">
                        Request a quote
                    </button>
                </div>
            )}
        </nav>
    );
}
