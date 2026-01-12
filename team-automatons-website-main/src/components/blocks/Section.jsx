'use client';

import React, { useState, useEffect } from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot'
import { Navbar } from '@/components/ui/navbar'

export function Section() {
    const [isLoaded, setIsLoaded] = useState(false);
    // Correct Whobee Robot Scene URL
    const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-950 text-white">

            {/* Navbar Overlay */}
            <Navbar />

            {/* Gradient Background Effect - Restored */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-0" />

            {/* Robot Background - Shifted Left */}
            <div className="absolute inset-y-0 left-0 w-full md:w-2/3 z-10 md:-ml-20 transition-transform duration-700">
                <InteractiveRobotSpline
                    scene={ROBOT_SCENE_URL}
                    className="w-full h-full"
                />
            </div>

            {/* Overlay Content - Right Aligned */}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-end px-8 md:px-20 pt-20">
                <div className="text-right max-w-2xl">
                    <h1
                        className={`
              text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-tighter
              drop-shadow-lg
              transition-all duration-1000 ease-out transform
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
                    >
                        Team Automatons
                    </h1>
                    <p
                        className={`
              mt-4 text-xl md:text-2xl text-gray-300
              drop-shadow-md
              transition-all duration-1000 delay-300 ease-out transform
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
                    >
                        Rising to the challenge raised by dreams.
                    </p>
                </div>
            </div>

        </div>
    );
}
