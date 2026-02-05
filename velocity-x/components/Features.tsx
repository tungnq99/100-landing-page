'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const features = [
    { icon: '⚙️', title: 'Shimano Dura-Ace', highlight: 'Di2', desc: 'Electronic shifting precision' },
    { icon: '💎', title: 'CeramicSpeed', highlight: 'Bearings', desc: 'Reduced friction engineering' },
    { icon: '🎯', title: 'Integrated', highlight: 'Cockpit', desc: 'Seamless aero integration' },
    { icon: null, title: '6.8', highlight: 'kg', desc: 'Total System Weight', isStat: true }
];

export default function Features() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Explicitly set initial state to avoid FOUC or "dim" issues
        gsap.set('.feature-card', { opacity: 0, y: 50 });

        ScrollTrigger.batch('.feature-card', {
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out',
                    overwrite: true
                });
            },
            once: true
        });
    }, { scope: container });

    return (
        <section id="tech" ref={container} className="w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-widest text-white">
                    CORE <span className="text-[#ccff00]">TECH</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="feature-card group relative p-8 md:p-12 rounded-xl flex flex-col justify-center overflow-hidden bg-[#171717] border border-white/5"
                        >
                            {/* Force explicit colors */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: 'radial-gradient(circle at center, rgba(204, 255, 0, 0.1), transparent 70%)' }}
                            />

                            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                                {f.isStat ? (
                                    <div className="text-center">
                                        <div className="text-7xl md:text-9xl font-bold text-[#ccff00] mb-2 leading-none">
                                            {f.title}<span className="text-4xl md:text-6xl ml-2 text-white">{f.highlight}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-5xl md:text-6xl mb-6">{f.icon}</div>
                                )}

                                <h3 className={`text-2xl md:text-3xl font-bold mb-3 text-white ${f.isStat ? 'text-center' : ''}`}>
                                    {f.title} <span className="text-[#ccff00]">{f.highlight}</span>
                                </h3>
                                <p className={`text-gray-400 text-lg md:text-xl font-medium ${f.isStat ? 'text-center uppercase tracking-widest' : ''}`}>
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
