'use client';

import React, { useRef, useEffect, useState } from 'react';

const missions = [
    {
        id: "ABEx",
        title: "ABEx",
        subtitle: "Astrobiology Expedition",
        description: "The rover acts as a Mobile Science Laboratory to collect samples and perform analysis to seek signs of life. Our approach involves precision drilling and onboard spectrographic analysis.",
        image: "/irc/lighthouse.jpg" // Dummy image
    },
    {
        id: "R&DO",
        title: "R&DO",
        subtitle: "Reconnaissance and Delivery Operation",
        description: "The rover reconnaissance an area to search, locate, pick up, and deliver objects to specific locations. We utilize advanced computer vision processing for autonomous object detection.",
        image: "/irc/lighthouse.jpg" // Dummy image
    },
    {
        id: "ID&MO",
        title: "ID&MO",
        subtitle: "Instrument Deployment and Maintenance Operation",
        description: "The rovers traverses a short distance to operate on a mock-up instrument panel to perform a set of precise operations. Our robotic arm features 6 degrees of freedom for maximum dexterity.",
        image: "/irc/lighthouse.jpg" // Dummy image
    },
    {
        id: "PIMA",
        title: "PIMA",
        subtitle: "Project Implementation and Management Assessment",
        description: "PIMA will have one-to-one interaction between the teams and the judges about their rover development. Our team emphasizes agile methodologies and robust documentation practices.",
        image: "/irc/lighthouse.jpg" // Dummy image
    }
];

const AnimatedBlock = ({ mission, index, isAlternate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row ${isAlternate ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center mb-32 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            {/* Image Side with Always Glowing Border */}
            <div className="w-full lg:w-1/2">
                <div className="relative p-[4px] rounded-[40px] overflow-hidden group w-full aspect-video">
                    {/* Spinning Gradient Border - Always Visible */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Black Box */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden">
                        <img
                            src={mission.image}
                            alt={mission.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 relative">
                {/* Decorative Side Line */}
                <div className={`absolute ${isAlternate ? 'right-0 lg:-right-8' : 'left-0 lg:-left-8'} top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 hidden lg:block`} />

                <div className="flex flex-col space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-[1px] w-8 bg-purple-500"></div>
                            <h2 className="text-purple-400 font-bold tracking-[0.2em] text-sm uppercase">{mission.id}</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {mission.subtitle}
                        </h3>
                    </div>

                    <div className="text-lg text-gray-400 leading-relaxed font-light">
                        <p>{mission.description}</p>
                    </div>

                    <div className="pt-4">
                        <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm inline-block">
                            {/* Placeholder for specific mission stats or icon */}
                            <p className="text-gray-300 text-sm flex items-center gap-2">
                                <span className="text-purple-400">✦</span>
                                Dummy content for {mission.title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function IRCApproachSection() {
    return (
        <section className="relative w-full py-16 px-4 md:px-8 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                        OUR APPROACH<br />TO MISSIONS
                    </h2>
                    <div className="h-1 w-32 bg-purple-600 rounded-full mx-auto"></div>
                </div>

                {/* Missions Loop */}
                {missions.map((mission, index) => (
                    <AnimatedBlock
                        key={mission.id}
                        mission={mission}
                        index={index}
                        isAlternate={index % 2 !== 0}
                    />
                ))}

            </div>
        </section>
    );
}
