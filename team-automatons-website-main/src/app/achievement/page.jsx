"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';
import LaserFlow from '@/components/ui/LaserFlow';
import PastAchievements from '@/components/blocks/PastAchievements';

export default function AchievementPage() {
    const revealImgRef = useRef(null);

    return (
        <main className="min-h-screen bg-[#060010] flex flex-col overflow-hidden">
            <Navbar />

            {/* Laser Section - Starts after Navbar */}
            <div className="relative w-full flex-1 flex flex-col items-center justify-end mt-20" style={{ minHeight: '50vh' }}>
                <div className="absolute inset-0 w-full h-full">
                    <LaserFlow
                        timeScale={1.0} // Default
                        wispDensity={1.0}
                        wispSpeed={15.0}
                        wispIntensity={0.5}
                        flowSpeed={0.35}
                        flowStrength={0.25}
                        fogIntensity={0.45}
                        fogScale={0.2} // Reduced scale for "zoomed out" look
                        fogFallSpeed={0.6}
                        decay={1.1}
                        falloffStart={1.2}
                        horizontalSizing={0.4} // Reduced horizontal size
                        verticalSizing={2.0}
                        verticalBeamOffset={-0.45}
                        color="#cf9eff" // Lighter purple from settings swatch
                    />
                </div>

                {/* Achievement Text - Floating to the left of the laser */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-[5%] md:left-[10%] bottom-[10%] flex flex-col items-start"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[2px] w-12 bg-[#b026ff]"></div>
                        <span className="text-purple-300 tracking-widest text-sm uppercase">Achievement</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-2"
                        style={{ textShadow: '0 0 30px rgba(176, 38, 255, 0.6)' }}
                    >
                        AIR 2
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light">
                        in <span className="text-purple-400 font-semibold">Robocon 2024</span>
                    </p>
                </motion.div>
            </div>

            {/* Frame Section */}
            <div className="relative z-10 w-full px-4 md:px-8 pb-8 -mt-4 mb-20">
                {/* The Frame Container */}
                <div
                    className="w-full max-w-7xl mx-auto rounded-[30px] border-2 border-[#b026ff] bg-[#060010] relative overflow-hidden"
                    style={{
                        boxShadow: '0 -20px 50px -10px rgba(42, 6, 63, 0.4)', // Matching purple glow at top
                        borderTop: '2px solid #e0aaff', // Brighter top edge heat effect
                    }}
                >
                    {/* Dotted Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none z-10"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(176, 38, 255, 0.4) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    />

                    {/* Photo Content - Full Bleed */}
                    <div className="relative w-full">
                        <img
                            src="/achievements/robocon-team.jpg"
                            alt="Team Automatons"
                            className="w-full h-auto block"
                        />
                    </div>
                </div>
            </div>

            <PastAchievements />
            <Footer />
        </main>
    );
}
