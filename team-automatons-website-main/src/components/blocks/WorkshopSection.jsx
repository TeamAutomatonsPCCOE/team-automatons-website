'use client';

import React, { useRef, useEffect, useState } from 'react';

const workshops = [
    {
        id: "Workshop - 01",
        title: "Robotics Workshop",
        subtitle: "Robotics Workshop",
        description: "A robotics workshop was organized at the rural school to introduce students to the basics of robotics, coding, and automation. Through hands-on activities, students learned to build and program simple robots, fostering creativity, problem-solving skills, and an interest in STEM education. ",
        image: "/events/team.jpg"
    },
    {
        id: "Workshop - 02",
        title: "Mentoring FTC Workshop",
        subtitle: "Mentoring FTC Workshop",
        description: "The Mentoring FTC Workshop provided hands-on experience with additive manufacturing and rapid prototyping. Participants learned about 3D modeling, printing processes, and material selection to transform designs into physical objects. The workshop encouraged creativity, innovation, and practical understanding of modern manufacturing technologies.",
        image: " "
    },
    {
        id: "Workshop - 03",
        title: "Matlabs Mathworks Workshop",
        subtitle: "MATLAB & Simulink Workshop",
        description: "Teaching the fundamentals of 3D modelling and topology optimization. Participants designed lightweight rover components using industry-standard software.",
        image: "/events/image copy 16.png"
    },
    {
        id: "Workshop - 04",
        title: "",
        subtitle: "BXE Arduino Workshop",
        description: "The BXE Arduino Workshop offered a practical introduction to embedded systems and microcontroller-based development. Participants gained hands-on experience with Arduino programming, circuit design, and real-time hardware interfacing. The workshop strengthened foundational concepts while encouraging innovation, problem-solving, and application-oriented learning.",
        image: "/events/image copy 17.png"
    },
    {
        id: "Workshop - 05",
        title: "MQuadruped Introduction Workshop",
        subtitle: "Quadruped Introduction Workshop",
        description: "The Quadruped Introduction Workshop provided an engaging overview of legged robotic systems and their real-world applications. Participants learned about quadruped robot mechanics, control concepts, and basic locomotion principles through interactive sessions. The workshop sparked interest in advanced robotics while building a strong foundation in modern robotic mobility systems.",
        image: "/events/image copy 18.png"
    },
    {
        id: "Workshop - 06",
        title: "Sensor Interfacing Workshop",
        subtitle: "Sensor Interfacing Workshop",
        description: "The Sensor Interfacing Workshop focused on understanding and implementing various sensors used in modern electronic and robotic systems. Participants gained hands-on experience in connecting, calibrating, and reading data from sensors using microcontrollers. The workshop enhanced practical knowledge of real-time data acquisition and its role in intelligent system design.",
        image: "/events/image copy 20.png"
    },
    {
        id: "Workshop - 07",
        title: "Pneumatic Systems Workshop: Fundamentals of Industrial Automation",
        subtitle: "Pneumatic Systems Workshop: Fundamentals of Industrial Automation",
        description: "The Pneumatic Systems Workshop introduced participants to the principles and applications of pneumatic technology in industrial automation. The session covered components, circuit design, and working mechanisms through practical demonstrations. It provided valuable insights into how pneumatic systems are used for efficient, safe, and reliable automation solutions.",
        image: "/events/image copy 21.png"
    },
    {
        id: "Workshop - 08",
        title: "Microcontroller Workshop",
        subtitle: "Microcontroller Workshop",
        description: "The Microcontroller Workshop offered a hands-on introduction to programming and interfacing microcontrollers for real-world applications. Participants explored core concepts such as digital I/O, communication protocols, and peripheral integration. The workshop strengthened embedded systems fundamentals while encouraging practical problem-solving and innovation.",
        image: "/events/image copy 22.png"
    },
    {
        id: "Workshop - 09",
        title: "Microcontroller Workshop",
        subtitle: "3D Printing Technology Workshop: Turning Ideas into Reality",
        description: "The 3D Printing Technology Workshop provided hands-on experience with additive manufacturing and rapid prototyping. Participants learned about 3D modeling, printing processes, and material selection to transform designs into physical objects. The workshop encouraged creativity, innovation, and practical understanding of modern manufacturing technologies.",
        image: "/events/image copy 23.png"
    }
];

const WorkshopBlock = ({ item, index, isAlternate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

    return (
        <div
            ref={ref}
            className={`flex flex-col lg:flex-row ${isAlternate ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center mb-32 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
                <div className="relative p-[4px] rounded-[40px] overflow-hidden group w-full aspect-video">
                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-100" />

                    {/* Inner Content */}
                    <div className="relative w-full h-full bg-black rounded-[36px] overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
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

export function WorkshopSection() {
    return (
        <section className="relative w-full pt-12 pb-24 px-4 md:px-8 z-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 relative inline-block">
                        WORKSHOPS
                        {/* Underline */}
                        <div className="absolute -bottom-4 left-0 w-full h-2 bg-purple-600 rounded-full"></div>
                    </h2>
                </div>
                {workshops.map((item, index) => (
                    <WorkshopBlock key={index} item={item} index={index} isAlternate={index % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}
