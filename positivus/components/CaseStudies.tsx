'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
    {
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
        link: '#',
    },
    {
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        link: '#',
    },
    {
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
        link: '#',
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="px-6 py-12 lg:py-20 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
                <h2 className="px-2 bg-lime-300 rounded-md text-4xl font-medium inline-block">Case Studies</h2>
                <p className="max-w-xl text-lg text-black text-center lg:text-left">
                    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                </p>
            </div>

            {/* Content Card */}
            <div className="bg-zinc-900 rounded-[45px] p-8 lg:p-16 overflow-x-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:divide-x lg:divide-white/20">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col gap-6 lg:px-8 min-w-[300px] first:pl-0 last:pr-0"
                        >
                            <p className="text-white text-lg leading-relaxed">{item.text}</p>
                            <a href={item.link} className="flex items-center gap-4 text-lime-300 hover:opacity-80 transition-opacity">
                                <span className="text-xl">Learn more</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
