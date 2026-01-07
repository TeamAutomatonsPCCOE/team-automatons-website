'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';
import { IRCInfoSection } from '@/components/blocks/IRCInfoSection';
import { IRCApproachSection } from '@/components/blocks/IRCApproachSection';
import { OurExperienceSection } from '@/components/blocks/OurExperienceSection';

// Dynamically import ModelViewer with SSR disabled
const ModelViewer = dynamic(() => import('@/components/ui/ModelViewer'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D Engine...</div>
});

export default function IRCPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-purple-500/30">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-4 md:px-8 relative z-10 flex flex-col items-center justify-center">

                {/* 
                    Main Content Container - Refactored based on user feedback 
                    - Model viewer covers the full width/height of this container (z-0)
                    - Text is overlaid on top (z-10) using pointer-events-none to allow clicks to pass through to the model
                */}
                {/* 
                    Main Content Container - Refactored based on user feedback 
                    - Added Rolling Purple Border Effect
                    - Model shifted to left
                */}
                <div className="relative w-full max-w-[1400px] h-[80vh] min-h-[600px] rounded-[40px] p-[2px] overflow-hidden group">

                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-[-250%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)]" />

                    {/* Inner Black Box */}
                    <div className="relative w-full h-full bg-black rounded-[38px] overflow-hidden shadow-2xl">

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />

                        {/* text content - Absolute Positioned on the Left */}
                        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 z-20 pointer-events-none">
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                Traversing the<br />Red Planet.
                            </h1>
                            <p className="mt-6 text-xl text-gray-400 max-w-md leading-relaxed">
                                Presenting <span className="text-purple-400 font-semibold">Kartikeya 2.0</span>. Engineereed for extreme terrain and autonomous exploration.
                            </p>
                        </div>

                        {/* Full Width 3D Model Layer */}
                        <div className="absolute inset-0 z-10">
                            <ModelViewer
                                url="/irc/rover.glb"
                                width="100%"
                                height="100%"

                                // Position Shift
                                modelXOffset={0.3} // Shifted right

                                // Rotation
                                autoRotate={false}
                                autoRotateSpeed={0.2} // Very slow speed
                                enableManualRotation={true}
                                enableHoverRotation={true} // Disable hover to prevent jumpiness
                                enableMouseParallax={true} // Disable parallax for stability
                                enableManualZoom={false} // Disable zoom to fix scroll hijacking

                                // Camera / Zoom
                                autoFrame={false}
                                defaultZoom={1.0} // Slightly adjusted for the new model
                                minZoomDistance={0.1}
                                maxZoomDistance={10}

                                // Lighting & Env
                                environmentPreset="city"
                                ambientIntensity={0.8}
                                fadeIn={true}
                            />
                        </div>

                    </div>
                </div>

            </main>

            {/* IRC Info Section */}
            <IRCInfoSection />

            {/* IRC Approach Section */}
            <IRCApproachSection />

            {/* Our Experience Section */}
            <OurExperienceSection />

            <Footer />

        </div>
    );
}
