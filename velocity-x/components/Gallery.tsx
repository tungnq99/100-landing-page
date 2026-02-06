'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const images = [
    { url: 'moutain.jpeg', label: 'Mountain Trails' },
    { url: 'citynight.jpeg', label: 'City Nights' },
    { url: 'openroad.jpeg', label: 'Open Roads' },
    { url: 'dawn.jpeg', label: 'Dawn Rides' },
    { url: 'urbanspeed.jpeg', label: 'Urban Speed' }
];

export default function Gallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Force reset for safety
        gsap.set(trackRef.current, { x: 0 });

        const totalWidth = trackRef.current!.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.to(trackRef.current, {
            x: () => -(totalWidth - viewportWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: `+=${totalWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });
    }, { scope: sectionRef });

    return (
        <section id="gallery" ref={sectionRef} className="relative w-full h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center">
            <div className="absolute top-10 left-0 w-full text-center z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-white drop-shadow-lg">
                    BUILT FOR <span className="text-[#ccff00]">EVERY TERRAIN</span>
                </h2>
            </div>

            <div
                ref={trackRef}
                className="flex gap-10 px-[10vw] items-center h-[60vh] w-max"
            >
                {images.map((item, i) => (
                    <div
                        key={i}
                        className="group relative w-[80vw] md:w-[60vw] lg:w-[40vw] h-full rounded-3xl overflow-hidden bg-[#171717] flex items-center justify-center shrink-0 border border-white/5 transition-transform duration-500 hover:scale-[1.02]"
                    >
                        {/* Replaced Emoji with Image */}
                        <div className="absolute inset-0">
                            <img
                                src={item.url}
                                alt={item.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider drop-shadow-md">
                                {item.label}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                Scroll horizontally
            </div>
        </section>
    );
}
