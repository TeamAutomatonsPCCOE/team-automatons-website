'use client';

import React, { useRef, useEffect } from 'react';

// Years in ascending order (2012 -> 2026) as requested
const years = Array.from({ length: 2026 - 2012 + 1 }, (_, i) => 2012 + i);

export function TeamTimeline({ selectedYear, onYearSelect }) {
    const scrollContainerRef = useRef(null);

    // Auto-scroll to selected year
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeEl = scrollContainerRef.current.querySelector('[data-active="true"]');
            if (activeEl) {
                const container = scrollContainerRef.current;
                const scrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    }, [selectedYear]);

    return (
        <div className="relative w-full border-b border-purple-500/20 bg-black/80 backdrop-blur-xl sticky top-20 z-40 overflow-hidden">

            {/* Electric Noise Filter for the line */}
            <svg className="hidden">
                <filter id="electric-turbulence">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
            </svg>

            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

            {/* Electric Background Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 opacity-50 pointer-events-none">
                {/* This creates the jagged lightning effect spanning the whole width visually behind items */}
                <div className="w-full h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse"
                    style={{ filter: "url(#electric-turbulence)" }}
                />
            </div>

            <div
                ref={scrollContainerRef}
                className="flex items-center overflow-x-auto no-scrollbar py-24 px-4 md:px-0 scroll-smooth gap-12 md:gap-24 max-w-7xl mx-auto relative z-20"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Spacer for centering start */}
                <div className="w-[10vw] flex-shrink-0" />

                {years.map((year, index) => {
                    const isActive = selectedYear === year;
                    // Alternating position effect (Up/Down) for "both sides" feel
                    const isEven = index % 2 === 0;

                    return (
                        <button
                            key={year}
                            onClick={() => onYearSelect(year)}
                            data-active={isActive}
                            className={`group relative flex flex-col items-center flex-shrink-0 transition-all duration-500 focus:outline-none ${isActive ? 'scale-125 z-30' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}
                        >
                            {/* Year Text - Alternating Top/Bottom */}
                            <span className={`absolute ${isEven ? '-top-12' : '-bottom-12'} text-xl md:text-2xl font-bold tracking-widest font-mono transition-all duration-300 ${isActive ? 'text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'text-gray-500'}`}>
                                {year}
                            </span>

                            {/* The Node */}
                            <div className={`relative w-6 h-6 rotate-45 transition-all duration-300 ${isActive ? 'bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)] scale-110' : 'bg-black border-2 border-purple-500/50 group-hover:border-purple-400'}`}>
                                {/* Inner glow dot */}
                                {isActive && <div className="absolute inset-0 bg-white animate-ping opacity-75" />}
                            </div>

                            {/* Vertical Connection Line to Text */}
                            <div className={`absolute left-1/2 w-[1px] bg-purple-500/30 transition-all duration-500 ${isEven ? 'bottom-[100%] h-6' : 'top-[100%] h-6'} ${isActive ? 'bg-purple-400 shadow-[0_0_10px_purple]' : ''}`} />

                        </button>
                    );
                })}

                {/* Spacer for centering end */}
                <div className="w-[10vw] flex-shrink-0" />
            </div>
        </div>
    );
}
