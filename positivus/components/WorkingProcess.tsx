'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Consultation',
        content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        number: '02',
        title: 'Research and Strategy Development',
        content: 'We conduct thorough research to identify opportunities and develop a comprehensive strategy aligned with your goals.',
    },
    {
        number: '03',
        title: 'Implementation',
        content: 'Our team executes the strategy, implementing campaigns and optimizing your digital presence across selected channels.',
    },
    {
        number: '04',
        title: 'Monitoring and Optimization',
        content: 'We continuously monitor performance metrics and optimize campaigns to ensure maximum ROI and effectiveness.',
    },
    {
        number: '05',
        title: 'Reporting and Communication',
        content: 'Regular reports and open communication keep you informed about progress and results.',
    },
    {
        number: '06',
        title: 'Continual Improvement',
        content: 'We believe in ongoing improvement, refining strategies based on data and changing market trends.',
    },
];

export default function WorkingProcess() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="process" className="px-6 py-12 lg:py-20 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-12 lg:mb-20">
                <h2 className="px-2 bg-lime-300 rounded-md text-3xl md:text-4xl font-medium inline-block text-center lg:text-left">Our Working Process</h2>
                <p className="max-w-xl text-lg text-black text-center lg:text-left">
                    Step-by-Step Guide to Achieving Your Business Goals
                </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-6 lg:gap-8">
                {steps.map((step, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className={`rounded-[45px] border border-zinc-900 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] transition-colors duration-300 cursor-pointer overflow-hidden ${isOpen ? 'bg-lime-300' : 'bg-zinc-100'}`}
                        >
                            <div className="p-8 lg:p-12 flex items-center justify-between">
                                <div className="flex items-center gap-6 lg:gap-14">
                                    <span className="text-3xl lg:text-6xl font-medium">{step.number}</span>
                                    <span className="text-lg lg:text-3xl font-medium">{step.title}</span>
                                </div>
                                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-black flex items-center justify-center bg-zinc-100 shrink-0">
                                    {isOpen ? <Minus className="w-4 h-4 lg:w-6 lg:h-6" /> : <Plus className="w-4 h-4 lg:w-6 lg:h-6" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 lg:px-12 pb-12 pt-0">
                                            <div className="w-full h-[1px] bg-black mb-8 opacity-20"></div>
                                            <p className="text-lg">{step.content}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
