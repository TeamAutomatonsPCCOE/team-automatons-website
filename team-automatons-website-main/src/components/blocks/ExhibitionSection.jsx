'use client';

import React, { useRef, useEffect, useState } from 'react';

const exhibitions = [
    {
        id: "Exhibition - 01",
        title: "Empowering Innovation at MSME Vendor Development Expo",
        subtitle: "Empowering Innovation at MSME Vendor Development Expo",
        description: "Proud to participate as an exhibitor in the MSME & IIF Vendor Development Programme cum Exhibition held at PCCOE Pune, a vibrant platform fostering industry–academia collaboration. The two-day event featured insightful sessions by DRDO experts, highlighting innovation, indigenous manufacturing, and opportunities for MSMEs and student innovators. As Team Automatons, we showcased our in-house developed solutions and gained valuable feedback from industry professionals. Grateful to our mentors and PCCOE for the opportunity to learn, connect, and grow at this prestigious expo.",
        images: ["/events/image.png", "/events/image copy.png", "/events/image copy 2.png", "/events/image copy 3.png"] // Placeholder slideshow
    },
    {
        id: "Exhibition - 02",
        title: "ROSCon India 2025: Exploring the Future of Robotics with ROS",
        subtitle: "ROSCon India 2025: Exploring the Future of Robotics with ROS",
        description: "Attending ROSCon India 2025 was an inspiring two-day journey into the evolving ROS and ROS 2 ecosystem, filled with deep technical insights and real-world applications. The conference brought together researchers, startups, industry leaders, and students, fostering meaningful discussions on robotics architecture, perception, scalability, and emerging middleware technologies. Live robot demonstrations and startup-focused sessions offered valuable exposure to innovation and investment perspectives in deep-tech robotics. Grateful for the learnings, connections, and inspiration to apply these insights in future robotics projects.",
        images: ["/events/image copy 4.png", "/events/image copy 5.png", "/events/image copy 6.png", "/events/image copy 7.png", "/events/image copy 8.png"]
    },
    {
        id: "Exhibition - 03",
        title: "Tech Summit",
        subtitle: "Collegiate Clubs Exhibition: Exploring Opportunities Beyond the Classroom",
        description: "An exhibition was organized by the collegiate clubs to introduce first-year students to the diverse technical, cultural, and professional clubs on campus. The event provided an excellent platform for FY students to explore club activities, ongoing projects, and opportunities for skill development. Interactive stalls and engaging demonstrations helped students gain clarity about their interests and avenues for involvement. Overall, the exhibition played a key role in encouraging participation, collaboration, and holistic growth from the very beginning of college life.",
        images: ["/events/image copy 9.png", "/events/image copy 10.png", "/events/image copy 11.png", "/events/image copy 12.png"]
    },
    {
        id: "Exhibition - 04",
        title: "MSME Defence Exhibition 2024: Showcasing Innovation & Indigenous Capability",
        subtitle: "MSME Defence Exhibition 2024: Showcasing Innovation & Indigenous Capability",
        description: "The MSME Defence Exhibition 2024 served as a dynamic platform highlighting innovation, indigenous manufacturing, and advanced technologies in the defence sector. The exhibition brought together MSMEs, industry experts, policymakers, and innovators to explore collaboration and vendor development opportunities. It offered valuable insights into defence requirements, emerging technologies, and the growing role of MSMEs in strengthening India’s self-reliant defence ecosystem.",
        images: ["/events/image copy 13.png", "/events/image copy 14.png"]
    },
    {
        id: "Exhibition - 05",
        title: "MSME Defence Exhibition 2024: Showcasing Innovation & Indigenous Capability",
        subtitle: "National Science Day: College-Level Science & Innovation Exhibition",
        description: "The National Science Day College Exhibition celebrated scientific curiosity, innovation, and research-driven thinking among students. The event provided a platform to showcase creative projects, experiments, and technological solutions across diverse domains of science and engineering. It encouraged knowledge sharing, interdisciplinary learning, and inspired students to explore the impact of science on society and national development.",
        images: ["/events/image copy 15.png"]
    }

];

const SlideshowBlock = ({ item, index, isAlternate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const ref = useRef(null);

    // Intersection Observer for Slide-up animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Slideshow Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % item.images.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(timer);
    }, [item.images.length]);

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row ${isAlternate ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center mb-32 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            {/* Image Side with Slideshow & Spinning Border */}
            <div className="w-full lg:w-1/2">
                <div className="relative p-[4px] rounded-[40px] overflow-hidden group w-full aspect-video">
                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Content */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden">
                        {item.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${item.title} ${idx}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImage ? 'opacity-90' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 relative">
                <div className="flex flex-col space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-[1px] w-8 bg-purple-500"></div>
                            <h2 className="text-purple-400 font-bold tracking-[0.2em] text-sm uppercase">{item.id}</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {item.subtitle}
                        </h3>
                    </div>
                    <div className="text-lg text-gray-400 leading-relaxed font-light">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function ExhibitionSection() {
    return (
        <section className="relative w-full pt-24 pb-0 px-4 md:px-8 z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 relative inline-block">
                        EXHIBITIONS
                        {/* Underline */}
                        <div className="absolute -bottom-4 left-0 w-full h-2 bg-purple-600 rounded-full"></div>
                    </h2>
                </div>
                {exhibitions.map((item, index) => (
                    <SlideshowBlock key={index} item={item} index={index} isAlternate={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}
