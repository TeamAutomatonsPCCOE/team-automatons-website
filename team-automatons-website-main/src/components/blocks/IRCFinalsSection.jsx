'use client';

import React from 'react';
import MagicCard from '@/components/ui/MagicCard';
import { Microscope, Search, Wrench, Flag } from 'lucide-react';

const missions = [
    {
        title: "ABEx",
        subtitle: "Astrobiology Expedition",
        description: "The rover acts as a Mobile Science Laboratory to collect samples and perform analysis to seek signs of life.",
        icon: <Microscope className="w-8 h-8 text-orange-300" />
    },
    {
        title: "R&DO",
        subtitle: "Reconnaissance and Delivery Operation",
        description: "The rover reconnaissance an area to search, locate, pick up, and deliver objects to specific locations.",
        icon: <Search className="w-8 h-8 text-orange-300" />
    },
    {
        title: "ID&MO",
        subtitle: "Instrument Deployment and Maintenance Operation",
        description: "The rovers traverses a short distance to operate on a mock-up instrument panel to perform a set of precise operations.",
        icon: <Wrench className="w-8 h-8 text-orange-300" />
    },
    {
        title: "PIMA",
        subtitle: "Project Implementation and Management Assessment",
        description: "PIMA will have one-to-one interaction between the teams and the judges about their rover development.",
        icon: <Flag className="w-8 h-8 text-orange-300" />
    }
];

export function IRCFinalsSection() {
    return (
        <section className="relative w-full py-48 px-6 md:px-12 bg-black overflow-hidden">
            {/* Subtle background element for depth */}
            <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">

                {/* Left Side: Header & Text */}
                <div className="lg:col-span-5 flex flex-col space-y-12 sticky top-32">
                    <div>
                        <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
                            IRC<br />FINALS
                        </h2>
                        <div className="h-2 w-24 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-400 text-xl leading-loose font-light max-w-lg">
                        The IRC 2026 Finals will be performed within a specially designed <span className="text-white font-medium">20,000 square meter</span> simulated landscape called Sproscape. It will be the world's largest arena of its kind.
                    </p>

                    <div className="pt-6">
                        <a
                            href="https://roverchallenge.org/wp-content/uploads/2025/10/IRC-2026-Rulebook.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.2em] hover:bg-gray-200 transition-all duration-300 rounded-none border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105"
                        >
                            DOWNLOAD RULE BOOK
                        </a>
                    </div>
                </div>

                {/* Right Side: Grid of Cards */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {missions.map((mission, index) => (
                        <MagicCard key={index} className="min-h-[280px]">
                            <div className="flex flex-col h-full p-8 md:p-10 space-y-6 bg-black">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-3xl font-bold text-white">{mission.title}</h3>
                                    <div className="p-3 bg-white/5 rounded-full border border-white/10 text-purple-400">
                                        {mission.icon}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{mission.subtitle}</p>
                                    <p className="text-base text-gray-400 leading-relaxed font-light">
                                        {mission.description}
                                    </p>
                                </div>
                            </div>
                        </MagicCard>
                    ))}
                </div>

            </div>
        </section>
    );
}
