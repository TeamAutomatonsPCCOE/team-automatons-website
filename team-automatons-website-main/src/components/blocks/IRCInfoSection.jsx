'use client';

import React, { useState, useEffect, useRef } from 'react';

export function IRCInfoSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!borderRef.current) return;
            const rect = borderRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            borderRef.current.style.setProperty('--mouse-x', `${x}px`);
            borderRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-12 px-4 md:px-8 bg-black overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className={`max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

                {/* Left Side: Image with Interactive Border */}
                <div className="w-full">
                    <div
                        className="relative p-[4px] rounded-[40px] overflow-hidden group"
                    >
                        {/* Glowing Border Background */}
                        <div
                            className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(147, 51, 234, 0.4), transparent 40%)`
                            }}
                        />

                        {/* Border Layer */}
                        <div
                            ref={borderRef}
                            className="absolute inset-0 rounded-[40px] z-0"
                            style={{
                                background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 1), transparent 40%)`
                            }}
                        />

                        {/* Fallback border color when not hovered/moved specifically */}
                        <div className="absolute inset-0 rounded-[40px] bg-purple-900/30 -z-10" />

                        {/* Image Container */}
                        <div className="relative z-10 w-full rounded-[36px] overflow-hidden shadow-2xl bg-gray-900 m-[1px] flex items-center justify-center">
                            <img
                                src="/irc/lighthouse.jpg"
                                alt="Lighthouse at Udupi"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Content - Enhanced Style */}
                <div className="relative pl-0 lg:pl-8">
                    {/* Decorative Side Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 hidden lg:block" />

                    <div className="flex flex-col space-y-6 text-left relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-[1px] w-8 bg-purple-500"></div>
                                <h2 className="text-purple-400 font-bold tracking-[0.2em] text-sm uppercase">WELCOME TO IRC</h2>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 leading-tight drop-shadow-sm">
                                DISCOVER THE<br />INNOVATOR IN YOU
                            </h3>
                        </div>

                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                            <p>
                                <span className="text-white font-medium">SPROS IRC</span> is a space robotics engineering competition. It challenges university students to conceptualise, design, develop and operate an <span className="text-purple-300">astronaut-assistive next-generation space Rover</span> and perform specific missions in Mars simulated conditions.
                            </p>
                            <p>
                                The objective of the competition is to provide students with a real-world interdisciplinary engineering experience, combining <span className="text-gray-200">practical engineering skills</span> with soft skills, including business planning and project management.
                            </p>
                            <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
                                <p className="text-gray-300 text-sm">
                                    Commencing this year, teams will get the opportunity to perform autonomous operations in <span className="text-white font-semibold">Delivery Mission</span>.
                                </p>
                            </div>

                            <div className="pt-6">
                                <a
                                    href="https://roverchallenge.org/wp-content/uploads/2025/10/IRC-2026-Rulebook.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-sm tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-none border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                                >
                                    DOWNLOAD RULE BOOK
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="group">
                                <p className="text-purple-500 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-purple-400 transition-colors">Date</p>
                                <p className="text-2xl text-white font-light border-l-2 border-purple-500/30 pl-4 group-hover:border-purple-500 transition-all">
                                    Jan 28 - Feb 2<br /><span className="text-base text-gray-500 font-mono">2026</span>
                                </p>
                            </div>
                            <div className="group">
                                <p className="text-purple-500 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-purple-400 transition-colors">Venue</p>
                                <p className="text-xl text-white font-light border-l-2 border-purple-500/30 pl-4 group-hover:border-purple-500 transition-all">
                                    Udupi, Karnataka<br /><span className="text-base text-gray-500">India</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
