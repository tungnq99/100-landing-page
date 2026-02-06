'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function Navbar() {
    useGSAP(() => {
        // Nav entrance animation
        gsap.from('#navbar', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5
        });

        // Glass effect on scroll
        ScrollTrigger.create({
            start: 'top -50',
            onUpdate: (self) => {
                const nav = document.getElementById('navbar');
                if (self.direction === 1) { // Scrolling down
                    nav?.classList.add('bg-black/50', 'backdrop-blur-md', 'border-b', 'border-white/10');
                } else if (self.scroll() < 50) { // Top of page
                    nav?.classList.remove('bg-black/50', 'backdrop-blur-md', 'border-b', 'border-white/10');
                }
            }
        });

        // Logo hover effect
        const logoAnim = gsap.to('.logo-x', {
            rotation: 360,
            duration: 1,
            paused: true,
            ease: 'elastic.inOut(1, 0.5)'
        });

        document.querySelector('.logo-container')?.addEventListener('mouseenter', () => logoAnim.restart());

    }, []);

    const scrollToSection = (id: string, e: React.MouseEvent) => {
        e.preventDefault();

        // Use GSAP ScrollToPlugin for accurate scrolling with pinned sections
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: `#${id}`,
                offsetY: 80, // Offset for Navbar height so it doesn't cover content
                autoKill: false
            },
            ease: 'power3.inOut'
        });
    };

    return (
        <nav id="navbar" className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-colors duration-300">
            {/* Logo */}
            <a href="#top" className="logo-container flex items-center gap-2 group cursor-pointer" onClick={(e) => scrollToSection('top', e)}>
                <span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors">
                    VELOCITY
                </span>
                <span className="logo-x text-2xl font-bold text-[#ccff00] inline-block">
                    X
                </span>
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex gap-8 items-center">
                {['The Machine', 'Tech', 'Gallery', 'Specs'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        onClick={(e) => scrollToSection(item.toLowerCase().replace(' ', '-'), e)}
                        className="relative text-sm uppercase tracking-widest text-gray-400 hover:text-[#ccff00] transition-colors group overflow-hidden cursor-pointer"
                    >
                        {item}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ccff00] transform -translate-x-101 group-hover:translate-x-0 transition-transform duration-300" />
                    </a>
                ))}

                <button
                    className="px-6 py-2 rounded-full border border-[#ccff00] text-[#ccff00] text-sm uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all duration-300 font-bold cursor-pointer"
                    onClick={(e) => scrollToSection('specs', e)}
                >
                    Pre-order
                </button>
            </div>

            {/* Mobile Menu Icon (Placeholder) */}
            <div className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </nav>
    );
}
