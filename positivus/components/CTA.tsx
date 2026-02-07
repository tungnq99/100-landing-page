'use client';

import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-100 rounded-[45px] p-12 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
            >
                <div className="flex flex-col items-start gap-6 max-w-lg z-10">
                    <h3 className="text-3xl font-medium">Let’s make things happen</h3>
                    <p className="text-lg text-black">
                        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </p>
                    <button className="px-9 py-5 bg-zinc-900 text-white rounded-2xl text-xl hover:bg-zinc-700 transition-all">
                        Get your free proposal
                    </button>
                </div>

                {/* Decorative illustration */}
                <div className="relative w-[300px] h-[300px] hidden md:block">
                    {/* Abstract shapes representing the illustration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                        <img src="/images/cta.png" alt="Illustration" className="object-contain" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
