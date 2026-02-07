'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const companies = [
    { name: 'Amazon', src: '/images/company/amazon.png' },
    { name: 'Dribbble', src: '/images/company/dribble.png' },
    { name: 'HubSpot', src: '/images/company/hubspot.png' },
    { name: 'Notion', src: '/images/company/notion.png' },
    { name: 'Netflix', src: '/images/company/netflix.png' },
    { name: 'Zoom', src: '/images/company/zoom.png' },
];

export default function Companies() {
    return (
        <section className="px-6 py-10 max-w-7xl mx-auto overflow-hidden">
            <div className="flex overflow-hidden grayscale opacity-70">
                <motion.div
                    className="flex gap-8 md:gap-14 pr-8 md:pr-14 items-center flex-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...companies, ...companies].map((company, index) => (
                        <div key={index} className="relative h-8 md:h-12 w-28 md:w-36 shrink-0">
                            <Image
                                src={company.src}
                                alt={company.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
