'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
    {
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
    },
    {
        text: '"Positivus has transformed our digital strategy. Their expertise in SEO and PPC has yielded incredible ROI for our campaigns. A fantastic partner to work with."',
        name: 'Sarah Johnson',
        role: 'CEO at TechStart',
    },
    {
        text: '"The content creation team at Positivus is top-notch. They understand our brand voice perfectly and deliver engaging content that resonates with our audience."',
        name: 'Michael Brown',
        role: 'CMO at RetailGiant',
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="px-6 py-12 lg:py-20 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
                <h2 className="px-2 bg-lime-300 rounded-md text-4xl font-medium inline-block text-center lg:text-left">Testimonials</h2>
                <p className="max-w-xl text-lg text-black text-center lg:text-left">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>
            </div>

            {/* Carousel */}
            <div className="bg-dark rounded-[45px] p-8 lg:p-12 overflow-hidden text-white relative">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-10 min-h-[300px] justify-center"
                        >
                            <div className="relative p-6 lg:p-12 border border-green rounded-[45px] bg-dark decoration-clone">
                                <p className="text-lg md:text-xl leading-relaxed text-white">"{testimonials[currentIndex].text}"</p>
                                {/* Triangle pointer */}
                                <div className="absolute -bottom-[12.5px] left-10 md:left-14 w-6 h-6 border-r border-b border-green bg-dark rotate-45"></div>
                            </div>

                            <div className="pl-10 md:pl-14">
                                <h4 className="text-green text-xl font-medium">{testimonials[currentIndex].name}</h4>
                                <p className="text-white text-lg">{testimonials[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between md:justify-center gap-10 mt-10 md:mt-0 md:absolute md:bottom-12 md:right-12">
                    <button onClick={prev} className="text-white hover:text-green transition-colors">
                        <ArrowLeft size={32} />
                    </button>

                    <div className="flex gap-4">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`transition-all duration-300 transform ${idx === currentIndex ? 'text-green scale-125' : 'text-white'}`}
                            >
                                <Star size={16} fill="currentColor" />
                            </div>
                        ))}
                    </div>

                    <button onClick={next} className="text-white hover:text-green transition-colors">
                        <ArrowRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
