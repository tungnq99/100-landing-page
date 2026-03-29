"use client"

import React, { useState, useEffect } from 'react';

export const ProfessionalConnect = () => {
    const [, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialPlatforms = [
        {
            name: 'LinkedIn',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            gradient: 'from-blue-600 to-blue-400',
            shadowColor: 'rgba(59, 130, 246, 0.5)',
            link: 'https://www.linkedin.com/in/tungnq99',
            description: 'Professional Network'
        },
        {
            name: 'GitHub',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            gradient: 'from-gray-700 to-gray-500',
            shadowColor: 'rgba(75, 85, 99, 0.5)',
            link: 'https://github.com/tungnq99',
            description: 'Code Repository'
        },
        {
            name: 'Telegram',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            ),
            gradient: 'from-sky-500 to-blue-500',
            shadowColor: 'rgba(14, 165, 233, 0.5)',
            link: '#',
            description: 'Direct Message'
        },
        {
            name: 'Instagram',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
            ),
            gradient: 'from-purple-600 via-pink-600 to-orange-500',
            shadowColor: 'rgba(219, 39, 119, 0.5)',
            link: 'https://www.instagram.com/nqt1610',
            description: 'Visual Stories'
        },
        {
            name: 'Zalo',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-400',
            shadowColor: 'rgba(6, 182, 212, 0.5)',
            link: 'https://zalo.me/0395686343',
            description: 'Chat on Zalo'
        },
        {
            name: 'Facebook',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            gradient: 'from-blue-700 to-blue-600',
            shadowColor: 'rgba(29, 78, 216, 0.5)',
            link: 'https://www.facebook.com/tung161099',
            description: 'Social Network'
        }
    ];

    return (
        <div id="contact" className="min-h-screen bg-neutral-950 overflow-hidden relative w-full">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Floating Orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
                {/* Header Section */}
                <div className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Connect & Collaborate
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
                        Frontend Developer with 3+ years building dashboard-heavy web apps — trading platforms, bot management tools, data visualization. Open to new opportunities and collaborations.
                    </p>
                </div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto w-full">
                    {socialPlatforms.map((platform, index) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            className={`group relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Card Container */}
                            <div className="relative bg-neutral-900/50 backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-white/5 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/10">
                                {/* Hover Gradient Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                ></div>

                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                                        filter: 'blur(40px)'
                                    }}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className={`mb-3 inline-flex p-2 md:p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                        {platform.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                                        {platform.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400">
                                        {platform.description}
                                    </p>

                                    {/* Arrow Icon */}
                                    <div className="mt-4 flex items-center text-gray-600 group-hover:text-white transition-all duration-300">
                                        <span className="text-sm font-medium group-hover:translate-x-0 transition-all duration-300">
                                            Connect
                                        </span>
                                        <svg
                                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Contact Info Bar */}
                <div className={`mt-12 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <a
                        href="mailto:tungnq99@gmail.com"
                        className="group flex items-center gap-4 bg-neutral-900/50 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/10 border border-blue-500/20">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-0.5">Email</p>
                            <p className="text-white font-medium group-hover:text-blue-300 transition-colors">tungnq99@gmail.com</p>
                        </div>
                    </a>

                    <a
                        href="https://zalo.me/0395686343"
                        className="group flex items-center gap-4 bg-neutral-900/50 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/20">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-emerald-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-0.5">Phone</p>
                            <p className="text-white font-medium group-hover:text-emerald-300 transition-colors">+84 395 686 343</p>
                        </div>
                    </a>
                </div>

            </div>

            {/* Mouse Follow Light */}
            <div
                className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-[100px] transition-all duration-200 ease-out"
                style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
                    left: `${mousePosition.x - 192}px`,
                    top: `${mousePosition.y - 192}px`,
                }}
            />
        </div>
    );
};
