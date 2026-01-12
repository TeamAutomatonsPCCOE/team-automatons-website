
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const legacyData = [
    {
        year: "2025",
        type: "dual",
        items: [
            {
                title: "ROBOCON 2025",
                description: (
                    <>
                        The theme for ABU Robocon 2025 was "Robot Basketball," challenging teams to design and program robots to play basketball, focusing on shooting, dribbling, passing, and even dunking.
                        <br />
                        We secured AIR 9th in ROBOCON 2025.
                    </>
                ),
                image: "/achievements/image.png"
            },
            {
                title: "IRC 2025",
                videoLink: "https://youtu.be/7J0k4ZvheAQ?si=YA8VeOxtwdOJ9kxQ",
                description: (
                    <>
                        International Rover Challenge participation with Kartikeya.
                        <br />
                        We secured AIR 19th in IRC 2025.
                    </>
                ),
                image: "/achievements/IRC 25 Day1 [DoPy] 39.jpg"
            }
        ]
    },
    {
        year: "2024",
        type: "single",
        title: "ROBOCON 2024",
        videoLink: "https://youtu.be/DXIuxyKSqgY?si=1GdR49Y3JrqN_ng5",
        description: (
            <>
                The theme for the 2024 Asia-Pacific Broadcasting Union (ABU) Robocon was "Harvest Day", hosted by Vietnam which was inspired by rice cultivation on terraced fields.
                <br />
                We secured AIR 2 in ROBOCON 2024.
            </>
        ),
        image: "/achievements/2024_r2_cropped.jpg"
    },
    {
        year: "2023",
        type: "single",
        title: "ROBOCON 2023",
        videoLink: "https://youtu.be/mOXJfGUyQSk?si=7CLtjkp6j0DatDMs",
        description: (
            <>
                The competition is to cast flowers over Angkor Wat by the corporation of a rabbit robot and an elephant robot. The actual competition is "Ring Toss Game" using blue and red rings made of rubber hoses instead of flowers.
                <br />
                We secured AIR 13th in ROBOCON 2023.
            </>
        ),
        image: "/achievements/Robots_2023.jpeg"
    },
    {
        year: "2022",
        title: "ROBOCON 2022",
        videoLink: "https://youtu.be/o7pQHNqg1bE?si=rvksWLzVxY9O5jJG",
        description: (
            <>
                The 2022 competition featured an exhilarating game of Lagori, where robots from two teams—Red and Blue—competed against each other.
                <br />
                We secured AIR 3rd in ROBOCON 2022.
            </>
        ),
        image: "/achievements/lagoriwithrobo.jpg"
    },
    {
        year: "2021",
        title: "ROBOCON 2021",
        videoLink: "https://youtu.be/lFrL7hwMCz8?si=jquDCUgElr-VpdW_",
        description: (
            <>
                Throwing arrows into pots, a traditional etiquette and game in ancient China.
                <br />
                We secured AIR 4th in ROBOCON 2021.
            </>
        ),
        image: "/achievements/robocon_2021.jpg"
    },
    {
        year: "2020",
        title: "ROBOCON 2020",
        videoLink: "https://youtu.be/9Gwg4JXFjV0?si=39sJq7iZTieKZAZm",
        description: (
            <>
                ROBO RUGBY 7s, a game based on Fiji's national sport, where game field and zones were designed like a rugby ground.
                <br />
                We secured AIR 4th in ROBOCON 2020.
            </>
        ),
        image: "/achievements/2020.jpg"
    },
    {
        year: "2019",
        title: "ROBOCON 2019",
        videoLink: "https://youtu.be/tAvVfpZSpZo?si=hQZRMk7EgPwy-YrM",
        description: (
            <>
                The theme was "Sharing the knowledge". It is related to the Urtuu system of Mongolian tradition.
                <br />
                We secured AIR 12th in ROBOCON 2019.
            </>
        ),
        image: "/achievements/mr2_2019.jpg"
    },
    {
        year: "2018",
        title: "ROBOCON 2018",
        videoLink: "https://youtu.be/GAjVA2u-_1s?si=6ltKaU73Hyc1o-1Y",
        description: (
            <>
                The theme comes from a traditional game in ethnic region of Vietnam, namely ném còn (throwing shuttlecock).
                <br />
                We secured AIR 16th in ROBOCON 2018.
            </>
        ),
        image: "/achievements/2018.png"
    },
    {
        year: "2017",
        title: "ROBOCON 2017",
        videoLink: "https://youtu.be/boUMyBLQ_O0?si=ErIIq8-XF2oQ53uP",
        description: (
            <>
                The theme of ABU ASIA-PACIFIC ROBOCON 2017 was “Asobi”(play) which encouraged playful and original robot designs.
                <br />
                We secured AIR 16th in ROBOCON 2017.
            </>
        ),
        image: "/achievements/2017.png"
    },
    {
        year: "2016",
        title: "ROBOCON 2016",
        videoLink: "https://youtu.be/pZNNk8EN8DU?si=b0mpBSF_82uctJFt",
        description: (
            <>
                ABU Robocon 2016 was designed to create an awareness of efficient energy consumption and clean and renewable energy utilization.
                <br />
                We successfully achieved wireless charging in ROBOCON 2016.
            </>
        ),
        image: "/achievements/2016.png"
    },
    {
        year: "2015",
        title: "ROBOCON 2015",
        videoLink: "https://youtu.be/4TOIizkzpss?si=WB1qwJfGDltwWY_X",
        description: (
            <>
                The motive of this contest theme was inspired by the doubles game of badminton.
                <br />
                We secured AIR 21st in ROBOCON 2016.
            </>
        ),
        image: "/achievements/2015.png"
    }
];

const LegacyCard = ({ data }) => {
    return (
        <div className="relative group w-fit mx-auto rounded-2xl p-[2px] overflow-hidden">
            {/* Spinning Gradient Border */}
            <div className="absolute inset-[-50%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#b026ff_50%,#000000_100%)]" />

            {/* Inner Content Box */}
            <div className="relative bg-black rounded-2xl overflow-hidden h-full w-full">
                {/* Background Image - Natural Aspect Ratio constrained to viewport height */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-auto h-auto max-h-[60vh] max-w-full block transition-transform duration-700 group-hover:scale-105"
                />

                {/* Default overlay (gradient) to make text readable if always valid, but we want hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 pointer-events-none" />

                {/* Year Label - Always Visible */}
                <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-lg z-20">
                    {data.year || "LEGACY"}
                </div>

                {/* Hover Content Overlay */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                    <h3 className="text-2xl font-bold text-purple-300 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {data.videoLink ? (
                            <a
                                href={data.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-100 hover:underline transition-colors"
                            >
                                {data.title}
                            </a>
                        ) : (
                            data.title
                        )}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const PastAchievements = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#060010]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 md:px-32 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Our <span className="text-purple-500">Legacy</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A decade of excellence, innovation, and engineering marvels.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {legacyData.map((yearData, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="w-full"
                        >
                            {/* Year Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] flex-1 bg-purple-500/30"></div>
                                <h3 className="text-3xl font-bold text-white/50">{yearData.year}</h3>
                                <div className="h-[1px] flex-1 bg-purple-500/30"></div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {yearData.type === 'dual' ? (
                                    <>
                                        <LegacyCard data={{ ...yearData.items[0], year: yearData.year }} />
                                        <LegacyCard data={{ ...yearData.items[1], year: yearData.year }} />
                                    </>
                                ) : (
                                    <div className="md:col-span-2">
                                        <LegacyCard data={yearData} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastAchievements;
