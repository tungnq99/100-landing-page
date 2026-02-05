'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BikeShowcase() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Initial states
        gsap.set('#bike-container', { x: '-120vw', opacity: 0 });
        gsap.set('.bike-part', { x: 0, y: 0, rotation: 0, opacity: 1 });
        gsap.set('.feature-label', { opacity: 0, scale: 0.5 }); // Labels hidden initially

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: '+=400%',
                pin: true,
                scrub: 1,
                anticipatePin: 1
            }
        });

        // --- PHASE 1: ENTER & SPIN ---
        tl.to('#bike-container', { x: 0, opacity: 1, duration: 3, ease: 'power2.out' });
        tl.to(['#front-wheel', '#rear-wheel', '#crankset'], {
            rotation: 360 * 3,
            transformOrigin: '50% 50%',
            duration: 3,
            ease: 'power2.out'
        }, '<');

        tl.to({}, { duration: 0.5 });

        // --- PHASE 2: EXPLOSION ---
        tl.addLabel('explode');

        // Frame floats up
        tl.to('#bike-frame', {
            y: -50,
            rotation: -5,
            scale: 1,
            filter: 'drop-shadow(0 0 20px rgba(204,255,0,0.2))',
            duration: 2
        }, 'explode');

        // Wheels move out
        tl.to('#front-wheel', { x: 150, y: 20, rotation: 20, duration: 2 }, 'explode');
        tl.to('#rear-wheel', { x: -150, y: 20, rotation: -20, duration: 2 }, 'explode');

        // Handlebars slide up
        tl.to('#handlebars', { x: 20, y: -70, rotation: -10, duration: 2 }, 'explode');

        // Seat moves with frame
        tl.to('#seat-group', {
            x: -5,
            y: -90,
            rotation: -5,
            duration: 2
        }, 'explode');

        tl.to('#crankset', { y: 60, rotation: 180, duration: 2 }, 'explode');
        tl.to('#chain', { opacity: 0, duration: 0.5 }, 'explode');

        // Labels appear when exploded
        tl.to('.feature-label', { opacity: 1, scale: 1, stagger: 0.2, duration: 1 });

        // Pause
        tl.to({}, { duration: 2 });

        // --- PHASE 3: RE-ASSEMBLY ---
        tl.to('.feature-label', { opacity: 0, duration: 0.5 });
        tl.to('.bike-part', {
            x: 0, y: 0, rotation: 0, scale: 1, filter: 'none',
            duration: 1.5, ease: 'elastic.out(1, 0.75)'
        }, 'assemble');
        tl.to('#chain', { opacity: 1, duration: 0.5 }, 'assemble');

        // Final glow
        tl.to('#bike-container', {
            filter: 'drop-shadow(0 0 40px rgba(204, 255, 0, 0.5))',
            duration: 0.5, yoyo: true, repeat: 1
        });

    }, { scope: container });

    const techSpecs = [
        {
            position: 'top-[42%] left-[48%] -translate-x-1/2',
            line: 'rotate-[-120deg]',
            card: 'top-[-180px] left-[-200px] md:left-[-200px]',
            title: 'AERO FRAME',
            stats: [
                { label: 'MATERIAL', value: 'T1100G' },
                { label: 'WEIGHT', value: '780g' },
                { label: 'STIFFNESS', value: '145N/mm' }
            ]
        },
        {
            position: 'bottom-[30%] left-[25%]',
            line: 'rotate-[45deg]',
            card: 'top-[-20px] left-[40px] md:left-[60px]',
            title: 'PROPULSION',
            stats: [
                { label: 'WATTS SAVED', value: '12W' },
                { label: 'DRAG COEFF', value: '0.21Cd' },
                { label: 'HUB', value: 'Ceramic' }
            ]
        },
        {
            position: 'top-[28%] right-[28%]', // Moved RIGHT to hit Handlebars
            line: 'rotate-[45deg]',
            card: 'top-[-20px] left-[40px] md:left-[60px]',
            title: 'COCKPIT',
            stats: [
                { label: 'INTEGRATION', value: '100%' },
                { label: 'SHIFTING', value: 'Di2 Wireless' },
                { label: 'REACH', value: '80mm' }
            ]
        }
    ];

    return (
        <section id="the-machine" ref={container} className="relative w-full h-screen bg-[#0a0a0a] text-white overflow-hidden flex items-center justify-center">
            <div className="relative w-full max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center">

                <h2 className="absolute top-20 text-4xl md:text-6xl font-bold tracking-wider text-center z-10 text-white">
                    THE <span className="text-[#ccff00]">MACHINE</span>
                </h2>

                {/* Bike SVG Layer */}
                <div id="bike-container" className="relative w-full max-w-[900px] aspect-[1.8] opacity-0 will-change-transform z-10">
                    {/* ... Same SVG Code ... */}
                    <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl overflow-visible">
                        <defs>
                            <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#444" />
                                <stop offset="50%" stopColor="#222" />
                                <stop offset="100%" stopColor="#111" />
                            </linearGradient>
                        </defs>

                        {/* Rear Wheel */}
                        <g id="rear-wheel" className="bike-part origin-center">
                            <circle cx="200" cy="300" r="100" fill="none" stroke="#1a1a1a" strokeWidth="12" />
                            <circle cx="200" cy="300" r="90" fill="none" stroke="#ccff00" strokeWidth="2" opacity="0.9" />
                            <g stroke="#333" strokeWidth="1.5">
                                <line x1="200" y1="210" x2="200" y2="390" />
                                <line x1="110" y1="300" x2="290" y2="300" />
                                <line x1="136" y1="236" x2="264" y2="364" />
                                <line x1="136" y1="364" x2="264" y2="236" />
                            </g>
                            <circle cx="200" cy="300" r="6" fill="#ccc" />
                        </g>

                        {/* Front Wheel */}
                        <g id="front-wheel" className="bike-part origin-center">
                            <circle cx="600" cy="300" r="100" fill="none" stroke="#1a1a1a" strokeWidth="12" />
                            <circle cx="600" cy="300" r="90" fill="none" stroke="#ccff00" strokeWidth="2" opacity="0.9" />
                            <g stroke="#333" strokeWidth="1.5">
                                <line x1="600" y1="210" x2="600" y2="390" />
                                <line x1="510" y1="300" x2="690" y2="300" />
                                <line x1="536" y1="236" x2="664" y2="364" />
                                <line x1="536" y1="364" x2="664" y2="236" />
                            </g>
                            <circle cx="600" cy="300" r="6" fill="#ccc" />
                        </g>

                        {/* Crankset */}
                        <g id="crankset" className="bike-part origin-center">
                            <circle cx="380" cy="300" r="20" fill="none" stroke="#333" strokeWidth="4" />
                            <circle cx="380" cy="300" r="15" fill="#111" />
                            <path d="M380 300 L410 330" stroke="#555" strokeWidth="6" strokeLinecap="round" />
                        </g>

                        {/* Chain (Static) */}
                        <g id="chain" className="bike-part">
                            <path d="M200 300 L380 300" stroke="#222" strokeWidth="3" strokeDasharray="3,3" />
                        </g>

                        {/* Frame - Tubular Structure */}
                        <g id="bike-frame" className="bike-part">
                            <line x1="200" y1="300" x2="380" y2="300" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
                            <line x1="200" y1="300" x2="350" y2="150" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
                            <line x1="380" y1="300" x2="350" y2="150" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
                            <line x1="380" y1="300" x2="560" y2="150" stroke="#2a2a2a" strokeWidth="10" strokeLinecap="round" />
                            <line x1="350" y1="150" x2="560" y2="150" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
                            <line x1="560" y1="140" x2="560" y2="180" stroke="#333" strokeWidth="10" strokeLinecap="round" />
                            <path d="M560 180 L590 300" stroke="#111" strokeWidth="8" strokeLinecap="round" />
                            <text x="440" y="240" fill="#ccff00" fontSize="14" fontWeight="bold" transform="rotate(-20 440 240)" opacity="0.8">VELOCITY</text>
                        </g>

                        {/* Handlebars */}
                        <g id="handlebars" className="bike-part">
                            <path d="M560 140 L560 110 L600 110" fill="none" stroke="#ccc" strokeWidth="5" strokeLinecap="round" />
                            <path d="M600 110 C630 110 630 150 600 150" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round" />
                        </g>

                        {/* Seat Group */}
                        <g id="seat-group" className="bike-part">
                            <line x1="350" y1="150" x2="340" y2="110" stroke="#222" strokeWidth="6" />
                            <path d="M320 110 L360 110" stroke="#111" strokeWidth="8" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>

                {/* Tech Blueprint Interactive Labels */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    {techSpecs.map((spec, index) => (
                        <div key={index} className={`feature-label absolute ${spec.position} group pointer-events-auto`}>
                            {/* Hotspot */}
                            <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                                <div className="absolute w-full h-full rounded-full border border-[#ccff00] animate-[ping_2s_linear_infinite] opacity-50" />
                                <div className="absolute w-full h-full rounded-full border border-[#ccff00] opacity-20" />
                                <div className="w-2 h-2 bg-[#ccff00] rounded-full shadow-[0_0_10px_#ccff00]" />
                            </div>

                            {/* Connector Line */}
                            <div className={`absolute top-4 left-4 w-12 h-[1px] bg-[#ccff00]/40 origin-left ${spec.line} transition-all duration-300 group-hover:w-20 group-hover:bg-[#ccff00]`} />

                            {/* Tech Card */}
                            <div className={`absolute ${spec.card} w-48 md:w-56 backdrop-blur-md bg-black/80 border border-white/10 p-4 rounded-sm transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:border-[#ccff00]/50 shadow-2xl origin-left`}>
                                <h3 className="text-[#ccff00] text-xs font-mono font-bold tracking-[0.2em] mb-2 border-b border-[#ccff00]/20 pb-1">
                                    {spec.title}
                                </h3>
                                <div className="space-y-1.5">
                                    {spec.stats.map((s, i) => (
                                        <div key={i} className="flex justify-between items-center text-[10px] md:text-xs font-mono text-gray-400">
                                            <span className="tracking-wider">{s.label}</span>
                                            <span className="text-white font-bold">{s.value}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Decorative corner accents */}
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ccff00]" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ccff00]" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
