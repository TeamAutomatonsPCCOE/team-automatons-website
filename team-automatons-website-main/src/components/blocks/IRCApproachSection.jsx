'use client';

import React, { useRef, useEffect, useState } from 'react';

const missions = [
    {
        id: "ABEx",
        title: "ABEx",
        subtitle: "Astrobiology Expedition",
        description: "The Astrobiology Expedition transformed our rover into a mobile science laboratory operating in a simulated Martian terrain. Our objective was to identify scientifically promising sites and analyze their potential to support microbial life. The rover performed terrain exploration, panoramic imaging, and close-up documentation to justify sample site selection. Using onboard instruments, we measured parameters such as subsurface temperature, humidity, pH, and atmospheric conditions. Our rover successfully collected a subsurface soil sample from beyond 10 cm depth and sealed it in a contamination-free cache. All scientific analysis was performed autonomously on the rover, replicating real Mars mission constraints. The mission concluded with a detailed science report explaining our findings and their relevance to Martian habitability. This task tested our scientific thinking, data interpretation, and precision engineering under strict time limits.",
        image: "irc/image.png" // Dummy image
    },
    {
        id: "R&DO",
        title: "R&DO",
        subtitle: "Reconnaissance and Delivery Operation",
        description: "The Reconnaissance and Autonomous Delivery Operation challenged our rover’s navigation, perception, and autonomy capabilities. In the reconnaissance phase, the rover explored a wide terrain, identified scattered objects, and logged their GPS coordinates with visual confirmation. Strategic path planning was crucial to maximize coverage within limited time. During the autonomous delivery phase, the rover picked up selected objects and delivered them to designated locations using GPS-based navigation. Full autonomy during delivery demanded accurate localization, obstacle handling, and stable control logic. Our robotic arm and storage mechanism played a key role in reliable object handling. This mission emphasized real-world challenges faced in extraterrestrial logistics and supply operations. Successfully completing it demonstrated our rover’s readiness for long-range, semi-autonomous missions.",
        image: "/irc/Rado.webp" // Dummy image
    },
    {
        id: "ID&MO",
        title: "ID&MO",
        subtitle: "Instrument Deployment and Maintenance Operation",
        description: "The IDMO task focused on precision manipulation and fine motor control using a robotic arm. Our rover performed complex maintenance actions such as opening panels, operating switches, turning knobs, and inserting connectors. Each operation demanded high positional accuracy and stable vision feedback from onboard cameras. In the deployment phase, the rover transported instrument caches and placed them in predefined orientations at designated locations. After deployment, the rover identified and relayed coded information displayed on the instruments to the base station team. This task closely simulated astronaut-assistive robotic operations on Mars. It tested not only mechanical design but also control algorithms and operator coordination. IDMO truly highlighted the importance of dexterity and reliability in space robotics.",
        image: "/irc/lighthouse.jpg" // Dummy image
    },
    {
        id: "PIMA",
        title: "PIMA",
        subtitle: "Project Implementation and Management Assessment",
        description: "The Project Implementation and Management Assessment evaluated our team beyond just the rover’s performance. We presented the complete lifecycle of our project, from ideation and design to manufacturing, testing, and iteration. Judges assessed our system engineering approach, task distribution, failure handling, and timeline management. We discussed challenges faced during development and how we adapted our strategies to overcome them. The session also allowed us to showcase technical trade-offs and design evolution. PIMA reflected our ability to work as a cohesive engineering team under real-world constraints. It validated not just what we built, but how responsibly and efficiently we built it. This assessment strengthened our understanding of large-scale engineering project execution.",
        image: "/irc/IRC 25 Day1 [DoPy] 84.jpg"
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
                                {mission.title}
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
