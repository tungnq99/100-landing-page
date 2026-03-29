"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

export default function Navbar() {
    const lenis = useLenis();

    const links = [
        { name: "Work", href: "#work" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        lenis?.scrollTo(href);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6 pointer-events-none"
        >
            <div className="pointer-events-auto">
                <Link href="/" className="font-heading font-bold text-lg md:text-xl tracking-tighter text-white mix-blend-difference">
                    TQ.
                </Link>
            </div>

            {/* Nav links — hidden on xs, visible from sm */}
            <div className="pointer-events-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-6 py-2.5 md:py-3 hidden sm:flex items-center gap-4 md:gap-6 shadow-lg shadow-black/20">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-xs md:text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile: only Contact button */}
            <div className="pointer-events-auto sm:hidden">
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e as React.MouseEvent<HTMLAnchorElement>, "#contact")}
                    className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                    Contact
                </a>
            </div>
        </motion.nav>
    );
}
