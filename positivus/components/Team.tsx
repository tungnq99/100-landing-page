'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
    {
        name: 'John Smith',
        role: 'CEO and Founder',
        description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        image: '/images/team/1.png',
    },
    {
        name: 'Jane Doe',
        role: 'Director of Operations',
        description: '7+ years of experience in project management and team leadership. Strong organizational skills',
        image: '/images/team/2.png',
    },
    {
        name: 'Michael Brown',
        role: 'Senior SEO Specialist',
        description: '5+ years of experience in SEO and content creation. Proficient in keyword research',
        image: '/images/team/3.png',
    },
    {
        name: 'Emily Johnson',
        role: 'PPC Manager',
        description: '3+ years of experience in paid search advertising. Skilled in campaign management',
        image: '/images/team/4.png',
    },
    {
        name: 'Brian Williams',
        role: 'Social Media Specialist',
        description: '4+ years of experience in social media marketing. Proficient in creating content',
        image: '/images/team/5.png',
    },
    {
        name: 'Sarah Kim',
        role: 'Content Creator',
        description: '2+ years of experience in writing and editing. Skilled in creating compelling content',
        image: '/images/team/6.png',
    },
];

export default function Team() {
    return (
        <section id="team" className="px-6 py-12 lg:py-20 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-12 lg:mb-20">
                <h2 className="px-2 bg-lime-300 rounded-md text-3xl md:text-4xl font-medium inline-block text-center lg:text-left">Team</h2>
                <p className="max-w-xl text-lg text-black text-center lg:text-left">
                    Meet the skilled and experienced team behind our successful digital marketing strategies
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, rotate: 3, transition: { type: "spring", stiffness: 300 } }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 lg:p-10 rounded-[45px] border border-dark shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] bg-white hover:bg-green transition-colors duration-300 group"
                    >
                        <div className="flex items-end justify-between mb-6 pb-6 border-b border-black">
                            <div className="flex gap-4 items-end">
                                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-3xl object-cover" />
                                <div className="flex flex-col">
                                    <h4 className="text-xl font-bold">{member.name}</h4>
                                    <p className="text-base text-gray-600">{member.role}</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-green group-hover:bg-dark group-hover:text-green transition-colors">
                                <Linkedin size={18} fill="currentColor" />
                            </div>
                        </div>
                        <p className="text-lg">{member.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <button className="px-12 py-5 bg-zinc-900 text-white rounded-2xl text-xl hover:bg-zinc-700 transition-all">
                    See all team
                </button>
            </div>
        </section>
    );
}
