'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-primary-dark text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-primary-accent transition-colors">
                        D
                    </div>
                    <span className="font-bold text-xl text-primary-dark tracking-tight">Devnote</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                    {['Features', 'Pricing', 'Blog', 'About'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary-dark transition-colors relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-accent transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-text-main hover:text-primary-accent transition-colors">Log In</Link>
                    <Link href="/signup" className="bg-primary-accent text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary-accent/20 hover:shadow-primary-accent/40 hover:-translate-y-0.5 transition-all">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu (simplified) */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 p-6 shadow-lg"
                >
                    <div className="flex flex-col gap-4">
                        {['Features', 'Pricing', 'Blog', 'About'].map((item) => (
                            <Link key={item} href="#" className="text-text-main font-medium">{item}</Link>
                        ))}
                        <hr className="my-2" />
                        <Link href="/login" className="text-text-main font-medium">Log In</Link>
                        <Link href="/signup" className="text-primary-accent font-bold">Get Started</Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
