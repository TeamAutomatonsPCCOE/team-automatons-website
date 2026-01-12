'use client';

import React, { useRef, useEffect, useState } from 'react';

export function OurExperienceSection() {
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

    const IMAGES = [
        "/irc/IRC 25 Day1 [DoPy] 18.jpg",
        "/irc/IRC 25 Day1 [DoPy] 21.jpg",
        "/irc/IRC 25 Day1 [DoPy] 37.jpg",
        "/irc/IRC 25 Day1 [DoPy] 39.jpg",
        "/irc/IRC 25 Day1 [DoPy] 84.jpg",
        "/irc/IRC 25 Day2 [DoPy] 4.jpg",
        "/irc/image.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-32 px-4 md:px-8 bg-black overflow-hidden">
            <div
                ref={ref}
                className={`max-w-[1000px] mx-auto flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >

                {/* Section Header - First */}
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-16">
                    OUR EXPERIENCE
                </h2>

                {/* Image Container - Second */}
                <div className="relative w-full aspect-video rounded-[40px] overflow-hidden group mb-16 max-w-[800px]">
                    {/* Spinning Gradient Border - Always Visible */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Black Box */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden m-[4px]">
                        {IMAGES.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`Our Experience ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Centered Text Content - Third */}
                <div className="relative z-10 max-w-3xl">
                    <p className="text-xl text-gray-400 leading-loose font-light">
                        Team Automatons boldly entered the International Rover Challenge (IRC) 2025, ready to test our rover on tough terrain that resembled Martian conditions, with sandy dunes and rocky craters. We faced teams from around the world in this prestigious space robotics competition, where participants worked to build advanced machines capable of planetary tasks such as sample handling and obstacle navigation.
                        Our rover was engineered for durability and precision, featuring robust grippers, wheels capable of traversing sharp rocks, and intelligent onboard computing systems that enabled safe path planning and hazard avoidance.
                        <br />
                        <br />
                        Countless hours were spent in the lab refining sensors, tuning control systems for smooth motion, and integrating vision systems with mechanical components to achieve reliable autonomous operation.
                        Challenges were frequent—components failed, code malfunctioned, and systems required repeated calibration—but each setback strengthened our teamwork.
                        <br />
                        <br />
                        By collaborating across mechanical, electronics, and software domains, we learned the importance of resilience, coordination, and problem-solving under pressure. These experiences not only improved our technical capabilities but also reinforced our unity as a team.
                        With valuable insights gained in autonomous navigation and real-world testing, we now look ahead to IRC 2026 with renewed confidence. Equipped with experience and determination, Team Automatons is committed to returning with a more capable rover and a stronger competitive edge, aiming for the top position.
                        Watch our journey here: <a href="https://youtu.be/7J0k4ZvheAQ?si=NBAhqw9iMOgBI1e7" className="text-blue-500 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">IRC 2025 after movie</a>
                    </p>
                </div>

            </div>
        </section>
    );
}
