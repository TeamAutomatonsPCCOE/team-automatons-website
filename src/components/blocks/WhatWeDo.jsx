'use client';

import React, { useState, useEffect } from 'react';

const images = [
    '/gallery/img1.jpg',
    '/gallery/img2.png',
    '/gallery/img3.jpg',
    '/gallery/img4.jpg',
    '/gallery/img5.jpg',
];

export function WhatWeDo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = React.useRef(null);
    const carouselRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger only once
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
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!carouselRef.current) return;
            const rect = carouselRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            carouselRef.current.style.setProperty('--mouse-x', `${x}px`);
            carouselRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-20 px-8 bg-gray-950 overflow-hidden"
        >

            {/* Purple Background Theme Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className={`container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>

                {/* Left Side: Auto-Scrolling Carousel with Interactive Border */}
                <div
                    className="relative p-[2px] rounded-3xl overflow-hidden aspect-video w-full"
                >
                    {/* Glowing Border Background */}
                    <div
                        className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                            background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(147, 51, 234, 0.4), transparent 40%)`
                        }}
                    />

                    {/* Border Layer */}
                    <div
                        ref={carouselRef}
                        className="absolute inset-0 rounded-3xl z-0"
                        style={{
                            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 1), transparent 40%)`
                        }}
                    />

                    {/* Content Container (hiding the background behind it so only border shows) */}
                    <div className="relative z-10 w-full h-full rounded-[22px] overflow-hidden shadow-2xl bg-gray-900 flex justify-center items-center m-[1px]">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex justify-center items-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="max-w-full max-h-full object-contain p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Text Box */}
                <div className="relative bg-gray-900/40 backdrop-blur-md p-10 lg:p-16 rounded-3xl border border-white/10 shadow-xl">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        What We Do
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                        We are Team Automatons, the robotics research and development team of Pimpri Chinchwad College of Engineering, Pune, India. Our team is run by undergraduate students coming from different disciplines of Engineering. Our team participates in International Robotics Competition ABU ROBOCON and International Rover Challenge (IRC) annually, apart from this we conduct various workshops for students to help them explore the field of robotics.
                    </p>
                </div>

            </div>
        </section>
    );
}
