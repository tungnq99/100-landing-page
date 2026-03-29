"use client";

import { motion, type Variants, type Easing } from "framer-motion";

const SKILL_GROUPS = [
    {
        label: "Core",
        color: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400",
        dot: "bg-blue-500",
        skills: ["TypeScript", "JavaScript", "React", "Next.js", "HTML5", "CSS3"],
    },
    {
        label: "State & Data",
        color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400",
        dot: "bg-emerald-500",
        skills: ["Redux Toolkit", "RTK Query", "Zustand", "React Hook Form", "Zod"],
    },
    {
        label: "UI & Styling",
        color: "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
        dot: "bg-violet-500",
        skills: ["Tailwind CSS", "Material UI", "Ant Design", "Chart.js", "Framer Motion"],
    },
    {
        label: "Tooling",
        color: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400",
        dot: "bg-amber-500",
        skills: ["Git", "REST APIs", "Postman", "Figma", "AI Tools"],
    },
];

const easeOut: Easing = "easeOut";

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                {/* Sticky Header */}
                <div className="lg:col-span-4 relative">
                    <div className="lg:sticky lg:top-24">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-mono text-blue-500 mb-4 uppercase tracking-widest"
                        >
                            Tech Stack
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-heading font-bold text-neutral-200 mb-4 md:mb-6"
                        >
                            Skills
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-500 max-w-sm text-lg leading-relaxed"
                        >
                            Tools and technologies I use to build fast, scalable, and maintainable frontends.
                        </motion.p>

                        {/* XP Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="mt-8 inline-flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-2xl px-5 py-3"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm text-neutral-400 font-mono">3+ years experience</span>
                        </motion.div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="lg:col-span-8 space-y-10">
                    {SKILL_GROUPS.map((group, gi) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: gi * 0.1 }}
                        >
                            {/* Group label */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                                    {group.label}
                                </span>
                            </div>

                            {/* Skill pills */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2.5"
                            >
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        className={`
                                            inline-flex items-center gap-2 px-4 py-2 rounded-xl
                                            bg-gradient-to-br ${group.color}
                                            border text-sm font-medium
                                            transition-all duration-300 cursor-default
                                            hover:scale-105 hover:brightness-125
                                        `}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
