'use client';

import { useState, useEffect, useRef } from 'react';

export default function SiteIntro({ enableAudio = false }) {
    const [show, setShow] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Check if user has seen the intro
        const hasSeen = localStorage.getItem('hasSeenIntro');

        // If not seen, show the video
        if (!hasSeen) {
            setShow(true);
        }
    }, []);

    const handleVideoEnd = () => {
        // Mark as seen so it doesn't play again
        localStorage.setItem('hasSeenIntro', 'true');

        // Fade out or hide immediately
        setShow(false);
    };

    // If we shouldn't show the video, return null (don't render anything)
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            <video
                ref={videoRef}
                src="https://res.cloudinary.com/dmaiwu7zn/video/upload/f_auto:video,q_auto/v1/team-automatons/intro-video"
                className="w-full h-full object-contain md:object-cover"
                autoPlay
                playsInline
                muted={!enableAudio} // Controlled by prop, default is muted (true) if enableAudio is false
                onEnded={handleVideoEnd}
            />

            {/* Skip Button */}
            <button
                onClick={handleVideoEnd}
                className="absolute top-8 right-8 text-white/70 hover:text-white border border-white/20 bg-black/20 hover:bg-black/40 backdrop-blur-md px-6 py-2 rounded-full text-sm transition-all duration-300 tracking-wider uppercase font-light"
            >
                Skip
            </button>
        </div>
    );
}
