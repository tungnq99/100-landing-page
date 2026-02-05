'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const specs = [
    { label: 'Frame', value: 'T1100G Carbon' },
    { label: 'Fork', value: 'Advanced Composite' },
    { label: 'Groupset', value: 'Dura-Ace Di2' },
    { label: 'Wheels', value: 'Carbon Clincher' },
    { label: 'Weight', value: '6.8kg', highlight: true },
];

export default function Specs() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Explicit initial states
        gsap.set('.spec-row', { x: -30, opacity: 0 });
        gsap.set('.buy-card', { scale: 0.95, opacity: 0 });

        ScrollTrigger.batch('.spec-row', {
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power2.out',
                overwrite: true
            }),
            start: 'top 85%'
        });

        gsap.to('.buy-card', {
            scrollTrigger: {
                trigger: '.buy-card',
                start: 'top 80%',
            },
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.5)',
            overwrite: true
        });
    }, { scope: container });

    return (
        <section id="specs" ref={container} className="w-full py-24 bg-[#171717] px-6 overflow-hidden text-white">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: Specs Table */}
                    <div className="specs-content w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-wider text-white">
                            SPECIFICATIONS
                        </h2>

                        <div className="space-y-6">
                            {specs.map((s, i) => (
                                <div
                                    key={i}
                                    className="spec-row flex justify-between items-center border-b border-white/10 pb-4"
                                >
                                    <span className="text-gray-300 text-lg md:text-xl font-medium">{s.label}</span>
                                    <span
                                        className={`text-xl md:text-2xl font-bold ${s.highlight ? 'text-[#ccff00]' : 'text-white'}`}
                                    >
                                        {s.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Buy Card */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
                        <div className="buy-card rounded-2xl p-8 md:p-12 bg-[#0a0a0a] border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-50 text-[100px] leading-none pointer-events-none grayscale">🚴</div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 rounded bg-[#ccff00] text-black font-bold text-xs tracking-widest mb-6">
                                    LIMITED EDITION
                                </span>

                                <h3 className="text-3xl font-bold mb-2 text-white">VELOCITY X</h3>
                                <div className="text-5xl md:text-7xl font-bold text-[#ccff00] mb-8">$12,999</div>

                                <button
                                    className="w-full py-5 rounded-lg bg-[#ccff00] text-black text-xl font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(204,255,0,0.5)] cursor-pointer"
                                >
                                    Pre-order Now
                                </button>

                                <p className="text-center text-gray-500 text-sm mt-6">
                                    Estimate delivery: October 2026
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
