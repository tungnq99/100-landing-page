"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ABOUT_CARDS = [
    {
        id: 1,
        label: "Who I am",
        title: "Frontend Developer",
        description:
            "3+ years of hands-on experience building dashboard-heavy web apps — trading platforms, bot management tools, data visualization. I know my stack well and pick things up quickly.",
        accent: "text-blue-400",
        border: "border-blue-500/20",
        bg: "from-blue-500/10 to-transparent",
    },
    {
        id: 2,
        label: "What I do",
        title: "Complex Forms & State",
        description:
            "Comfortable with complex forms, role-based UI (user / master / admin), schema-driven dynamic fields from JSON config, and REST API integration at scale.",
        accent: "text-emerald-400",
        border: "border-emerald-500/20",
        bg: "from-emerald-500/10 to-transparent",
    },
    {
        id: 3,
        label: "How I work",
        title: "Sole Dev Ownership",
        description:
            "Experienced as the sole FE developer across multiple projects — owning the entire frontend architecture from tech decisions to implementation, often without a designer.",
        accent: "text-violet-400",
        border: "border-violet-500/20",
        bg: "from-violet-500/10 to-transparent",
    },
    {
        id: 4,
        label: "My stack",
        title: "React / Next.js",
        description:
            "TypeScript · React · Next.js · Redux Toolkit · RTK Query · Zustand · React Hook Form · Zod · Tailwind CSS · Chart.js · Material UI · Ant Design",
        accent: "text-amber-400",
        border: "border-amber-500/20",
        bg: "from-amber-500/10 to-transparent",
    },
];

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

    return (
        <>
            {/* ── Desktop / large tablet: horizontal scroll ── */}
            <section
                id="about"
                ref={targetRef}
                className="relative h-[300vh] bg-neutral-950 hidden md:block"
            >
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-6 px-12 md:px-24">
                        {/* Intro panel */}
                        <div className="flex flex-col justify-center min-w-[340px] pr-12">
                            <span className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">
                                About Me
                            </span>
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                                Nguyen <br />
                                <span className="text-neutral-500">Quang Tung</span>
                            </h2>
                            <p className="text-neutral-400 text-base max-w-xs leading-relaxed">
                                Frontend Developer • Hanoi, Vietnam
                                <br />
                                <span className="text-neutral-600 text-sm font-mono">
                                    tungnq99@gmail.com
                                </span>
                            </p>
                            <div className="mt-6 flex gap-3">
                                <a
                                    href="https://github.com/tungnq99"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-mono text-neutral-400 border border-neutral-700 px-3 py-1.5 rounded-full hover:text-white hover:border-neutral-500 transition-colors"
                                >
                                    GitHub ↗
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tungnq99"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-mono text-neutral-400 border border-neutral-700 px-3 py-1.5 rounded-full hover:text-white hover:border-neutral-500 transition-colors"
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </div>

                        {/* Info cards */}
                        {ABOUT_CARDS.map((card) => (
                            <div
                                key={card.id}
                                className={`group relative h-[420px] w-[320px] md:w-[360px] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border ${card.border}`}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-b ${card.bg} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                                />
                                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                                    <span
                                        className={`text-xs font-mono uppercase tracking-widest mb-3 ${card.accent}`}
                                    >
                                        {card.label}
                                    </span>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Mobile: stacked vertical layout ── */}
            <section id="about-mobile" className="md:hidden py-16 px-4 bg-neutral-950">
                <div className="max-w-xl mx-auto">
                    <span className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4 block">
                        About Me
                    </span>
                    <h2 className="text-4xl font-heading font-bold text-white mb-2">
                        Nguyen Quang Tung
                    </h2>
                    <p className="text-neutral-500 text-sm font-mono mb-8">
                        Frontend Developer · Hanoi, Vietnam
                    </p>

                    <div className="space-y-4">
                        {ABOUT_CARDS.map((card, i) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`rounded-2xl bg-neutral-900 border ${card.border} p-6`}
                            >
                                <span className={`text-xs font-mono uppercase tracking-widest mb-2 block ${card.accent}`}>
                                    {card.label}
                                </span>
                                <h3 className="text-lg font-heading font-bold text-white mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                        <a
                            href="https://github.com/tungnq99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-neutral-400 border border-neutral-700 px-4 py-2 rounded-full hover:text-white transition-colors"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tungnq99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-neutral-400 border border-neutral-700 px-4 py-2 rounded-full hover:text-white transition-colors"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
