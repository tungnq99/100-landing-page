'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const services = [
    {
        title: ['Search engine', 'optimization'],
        bgColor: 'bg-zinc-100',
        titleBg: 'bg-lime-300',
        textColor: 'text-black',
        arrowBg: 'bg-zinc-900',
        arrowColor: 'text-lime-300',
        image: '/images/service/tokyo-magnifier-web-search-with-elements 2.png',
    },
    {
        title: ['Pay-per-click', 'advertising'],
        bgColor: 'bg-lime-300',
        titleBg: 'bg-white',
        textColor: 'text-black',
        arrowBg: 'bg-zinc-900',
        arrowColor: 'text-lime-300',
        image: '/images/service/tokyo-selecting-a-value-in-the-browser-window 1.png',
    },
    {
        title: ['Social Media', 'Marketing'],
        bgColor: 'bg-zinc-900',
        titleBg: 'bg-white',
        textColor: 'text-white',
        arrowBg: 'bg-white',
        arrowColor: 'text-black',
        image: '/images/service/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png',
    },
    {
        title: ['Email', 'Marketing'],
        bgColor: 'bg-zinc-100',
        titleBg: 'bg-lime-300',
        textColor: 'text-black',
        arrowBg: 'bg-zinc-900',
        arrowColor: 'text-lime-300',
        image: '/images/service/tokyo-sending-messages-from-one-place-to-another 1.png',
    },
    {
        title: ['Content', 'Creation'],
        bgColor: 'bg-lime-300',
        titleBg: 'bg-white',
        textColor: 'text-black',
        arrowBg: 'bg-zinc-900',
        arrowColor: 'text-lime-300',
        image: '/images/service/tokyo-many-browser-windows-with-different-information 1.png',
    },
    {
        title: ['Analytics and', 'Tracking'],
        bgColor: 'bg-zinc-900',
        titleBg: 'bg-lime-300',
        textColor: 'text-white',
        arrowBg: 'bg-white',
        arrowColor: 'text-black',
        image: '/images/service/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png',
    },
];

export default function Services() {
    return (
        <section id="services" className="px-6 py-12 lg:py-20 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-12 lg:mb-20">
                <h2 className="px-2 bg-lime-300 rounded-md text-3xl md:text-4xl font-medium inline-block">Services</h2>
                <p className="max-w-xl text-lg text-black text-center lg:text-left">
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`p-8 lg:p-12 rounded-[45px] border border-zinc-900 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] flex justify-between items-center gap-4 overflow-hidden ${service.bgColor}`}
                    >
                        <div className="flex flex-col justify-between h-full gap-8 lg:gap-20">
                            <div className="flex flex-col items-start">
                                {service.title.map((line, i) => (
                                    <span key={i} className={`px-1.5 rounded-md text-3xl font-medium ${service.titleBg} text-black`}>
                                        {line}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 cursor-pointer group">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.arrowBg} transition-transform group-hover:rotate-45`}>
                                    <ArrowUpRight className={service.textColor === 'text-white' ? 'text-black' : 'text-lime-300'} />
                                </div>
                                <span className={`text-xl hidden lg:block ${service.textColor}`}>Learn more</span>
                            </div>
                        </div>

                        <div className="relative w-[150px] h-[120px] lg:w-[210px] lg:h-[170px] shrink-0">
                            <img src={service.image} alt={service.title.join(' ')} className="object-contain w-full h-full" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
