"use client";

import React, { useRef, useState, useEffect } from "react";
import { Telescope, Target } from "lucide-react";

/**
 * VisionMission Component
 * Displays Vision and Mission statements in styled cards with hover spotlight effect.
 */
export const VisionMission = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    return (
        <section
            ref={sectionRef}
            className="py-20 px-6 bg-gray-950 relative overflow-hidden"
        >
            {/* Purple Background Theme Effects - Matching WhatWeDo */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className={`container mx-auto max-w-5xl space-y-8 relative z-10 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
                <VisionMissionCard
                    title="Vision"
                    icon={<Telescope className="w-12 h-12 text-yellow-500" />}
                    text="To become a team that builds robots with capabilities of solving problems of our society and thus creating a better tomorrow."
                    borderColor="border-blue-500/30"
                    glowColor="rgba(59, 130, 246, 0.2)"
                    iconPosition="left"
                />

                <VisionMissionCard
                    title="Mission"
                    icon={<Target className="w-12 h-12 text-red-500" />}
                    text="To make India a Global representative in the field of robotics by working relentlessly as a team and taking every effort that counts in making this aim come true."
                    borderColor="border-red-500/30"
                    glowColor="rgba(239, 68, 68, 0.2)"
                    iconPosition="right"
                />
            </div>
        </section>
    );
};

const VisionMissionCard = ({ title, icon, text, borderColor, glowColor, iconPosition }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full overflow-hidden rounded-xl border ${borderColor} bg-gray-900/40 p-10 md:p-14 transition-colors duration-300`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">

                {/* Icon (Left) */}
                {iconPosition === 'left' && (
                    <div className="flex-shrink-0 p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                        {icon}
                    </div>
                )}

                <div className="flex-grow text-center">
                    <h3 className={`text-3xl font-bold mb-4 ${title === 'Vision' ? 'text-blue-400' : 'text-blue-500'}`}>
                        {title}
                    </h3>
                    <div className={`w-full max-w-[200px] mx-auto h-px bg-gradient-to-r from-transparent ${title === 'Vision' ? 'via-blue-500/50' : 'via-blue-500/50'} to-transparent mb-6`} />
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                        {text}
                    </p>
                </div>

                {/* Icon (Right) */}
                {iconPosition === 'right' && (
                    <div className="flex-shrink-0 p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
};
