'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
    const container = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial states
        gsap.set('.letter', { opacity: 0 }); // Removed y:50 for new enter anim
        gsap.set('.letter-x', { opacity: 0, scale: 0.5 });
        gsap.set([subtitleRef.current, scrollRef.current], { y: 20, opacity: 0 });
        gsap.set('.hero-bg', { scale: 1.1 });
        gsap.set('.hero-text-container', { x: '-120%' }); // Start off-screen left

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Background Reveal
        tl.to('.hero-bg', { opacity: 0.6, duration: 2, ease: 'power2.out' });

        // 1. DRIVE IN ANIMATION: Text rides in like a bike
        // Wheel spins fast during movement
        gsap.to('.hero-wheel', { rotation: 720, duration: 2, ease: 'power2.out' });

        // Container slides in
        tl.to('.hero-text-container', {
            x: '0%',
            duration: 1.5,
            ease: 'power4.out', // "Braking" feel effect
        }, '-=1.5');

        // 2. Letters pop up as it stops (impact)
        tl.to('.letter', {
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.5)'
        }, '-=0.5');

        // "X" bounce
        tl.to('.letter-x', {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
        }, '-=0.3');

        // Subtitle & Scroll
        tl.to([subtitleRef.current, scrollRef.current], {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2
        }, '-=0.5');

        // 3. CONTINUOUS ANIMATIONS

        // Wheel keeps spinning slowly (idling)
        gsap.to('.hero-wheel', {
            rotation: '+=360',
            duration: 10,
            repeat: -1,
            ease: 'linear',
            delay: 2 // Start after intro spin
        });

        // Text "bobs" like riding on suspension
        gsap.to('.hero-text-container', {
            y: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Pulse border
        gsap.to('.pulse-border', {
            boxShadow: '0 0 20px rgba(204, 255, 0, 0.5)',
            repeat: -1,
            yoyo: true,
            duration: 1.5
        });

        gsap.to('.scroll-dot', {
            y: 8,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut'
        });

        // Parallax
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;
            gsap.to('.hero-bg', { x, y, duration: 1, ease: 'power2.out' });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, { scope: container });

    const letters = 'VELOCITY'.split('');

    return (
        <section id="top" ref={container} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">

            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    src="/hero-bg.png"
                    alt="Hero Background"
                    className="hero-bg w-full h-full object-cover opacity-0 grayscale brightness-75 contrast-125 transition-transform will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-[#0a0a0a]/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
                <div className="mb-8 select-none drop-shadow-2xl hero-text-container will-change-transform">
                    <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 lg:gap-4 mb-2">
                        {letters.map((letter, i) => {
                            if (letter === 'O') {
                                return (
                                    <div key={i} className="relative w-10 h-10 md:w-20 md:h-20 lg:w-32 lg:h-32 inline-flex items-center justify-center mx-1 md:mx-4">
                                        <svg
                                            viewBox="0 0 100 100"
                                            className="hero-wheel w-full h-full text-white"
                                        >
                                            {/* Rim */}
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5" />
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="#ccff00" strokeWidth="2" strokeDasharray="3 3" />

                                            {/* Spokes */}
                                            <g stroke="currentColor" strokeWidth="2" opacity="0.8">
                                                <line x1="50" y1="10" x2="50" y2="90" />
                                                <line x1="10" y1="50" x2="90" y2="50" />
                                                <line x1="22" y1="22" x2="78" y2="78" />
                                                <line x1="22" y1="78" x2="78" y2="22" />
                                            </g>

                                            {/* Hub */}
                                            <circle cx="50" cy="50" r="5" fill="#ccff00" />
                                        </svg>
                                    </div>
                                );
                            }
                            return (
                                <span
                                    key={i}
                                    className="letter inline-block text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-none"
                                    style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                                >
                                    {letter}
                                </span>
                            );
                        })}

                        <span
                            className="letter-x inline-block text-5xl md:text-8xl lg:text-[10rem] font-bold leading-none ml-2 text-[#ccff00]"
                            style={{ textShadow: '0 0 30px rgba(204,255,0,0.4)' }}
                        >
                            X
                        </span>
                    </div>
                </div>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-2xl lg:text-4xl tracking-[0.2em] md:tracking-[0.5em] text-gray-300 font-light uppercase drop-shadow-md bg-black/30 backdrop-blur-sm py-2 px-6 rounded-full border border-white/5"
                >
                    Beyond Speed. Pure Performance.
                </p>
            </div>

            <div
                ref={scrollRef}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <div className="pulse-border w-8 h-12 border-2 border-[#ccff00] rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/20">
                    <div className="scroll-dot w-1.5 h-4 bg-[#ccff00] rounded-full" />
                </div>
            </div>
        </section>
    );
}
