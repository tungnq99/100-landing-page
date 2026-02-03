"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

export default function Navbar() {
    const lenis = useLenis();

    const links = [
        { name: "Work", href: "#work" },
        { name: "Our", href: "#our" },
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
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
        >
            <div className="pointer-events-auto">
                <Link href="/" className="font-heading font-bold text-xl tracking-tighter text-white mix-blend-difference">
                    IMRSV.
                </Link>
            </div>

            <div className="pointer-events-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-lg shadow-black/20">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
