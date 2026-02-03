"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ITEMS = [
    {
        id: 1,
        title: "Strategic Design",
        description: "Crafting visual systems that align with brand goals.",
        image: "https://placehold.co/600x800/171717/FFF?text=Design",
    },
    {
        id: 2,
        title: "Creative Development",
        description: "Bringing designs to life with robust, clean code.",
        image: "https://placehold.co/600x800/171717/FFF?text=Dev",
    },
    {
        id: 3,
        title: "Motion Directions",
        description: "Adding life and fluidity to static interfaces.",
        image: "https://placehold.co/600x800/171717/FFF?text=Motion",
    },
    {
        id: 4,
        title: "Immersive 3D",
        description: "Depth and dimensionality for modern web.",
        image: "https://placehold.co/600x800/171717/FFF?text=3D",
    },
];

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section id="our" ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 px-12 md:px-24">
                    <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] pr-12">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            Our <br /> <span className="text-neutral-500">Capabilities</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-sm">
                            We combine design and technology to create memorable digital
                            narratives. Scroll to explore what we do.
                        </p>
                    </div>

                    {ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[400px] w-[300px] md:h-[500px] md:w-[400px] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
