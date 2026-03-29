"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLenis } from "@studio-freight/react-lenis";
import { DotScreenShader } from "@/components/ui/dot-screen-shader";
import { GlassButton } from "@/components/ui/glass-button";

export default function Hero() {
    const lenis = useLenis();

    const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        lenis?.scrollTo(href);
    };

    return (
        <section className="bg-neutral-950 overflow-hidden relative">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <DotScreenShader />
            </div>
            <div className="relative z-10">
                <ContainerScroll
                    titleComponent={
                        <>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-5xl md:text-8xl font-heading font-bold text-neutral-200 tracking-tighter mb-6"
                            >
                                Frontend <br />
                                <span className="text-neutral-500">Developer</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-lg md:text-xl text-neutral-400 max-w-lg mx-auto mb-10"
                            >
                                3+ years building dashboards, trading platforms & data-rich web apps with React / Next.js.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="flex gap-4 justify-center mb-20"
                            >
                                <GlassButton
                                    onClick={(e) => handleScroll(e, "#work")}
                                    variant="primary"
                                    size="lg"
                                >
                                    View Work
                                </GlassButton>
                                <GlassButton
                                    onClick={(e) => handleScroll(e, "#contact")}
                                    variant="ghost"
                                    size="lg"
                                    className="bg-neutral-900/50 hover:bg-neutral-800/80"
                                >
                                    Contact Me
                                </GlassButton>
                            </motion.div>
                        </>
                    }
                >
                    <div className="flex items-center justify-center h-full w-full">
                        <img
                            src="/images/linear-demo.webp"
                            alt="Hero Project"
                            className="mx-auto rounded-2xl object-cover h-full w-full"
                        />
                    </div>
                </ContainerScroll>
            </div>
        </section >
    );
}
