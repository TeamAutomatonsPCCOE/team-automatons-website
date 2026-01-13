'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
            <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
        </div>
    ),
});

import { useState } from 'react';

export function InteractiveRobotSpline({ scene, className }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`${className} relative`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950 z-10 transition-opacity duration-500">
                    <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                </div>
            )}
            <Spline
                scene={scene}
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
            />
            {/* Spline Badge Hider */}
            <div className="absolute bottom-2 right-4 w-36 h-12 bg-gray-950 z-50 pointer-events-none" />
        </div>
    );
}
