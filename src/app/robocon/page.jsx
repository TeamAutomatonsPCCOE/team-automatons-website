"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';

const stages = [
    {
        title: "Stage 1: Solution ideas submission",
        description: "All teams are required to submit detailed technical documentation which includes the robot's designs and the justifications behind those design choices. The documentation is evaluated out of 100 points."
    },
    {
        title: "Stage 2: Proof of Concept submission",
        description: "Teams are evaluated based on videos showcasing robots performing the competition tasks according to the rulebook guidelines."
    },
    {
        title: "Stage 3: Finals",
        description: "Based on the Stage 1 and Stage 2 scores, top 50 teams are selected for the final one-on-one competition at the national host college."
    },
];

export default function RoboconPage() {
    return (
        <main className="min-h-screen bg-[#060010] text-white overflow-hidden selection:bg-purple-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#060010] z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 mb-4"
                    >
                        ABU ROBOCON
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        The Ultimate Playground for Engineering Excellence
                    </motion.p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-10 px-6 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 text-purple-300">What is Robocon?</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                ABU Robocon (Asia-Pacific Broadcasting Union Robot Contest) is an Asian-Oceanian college robot competition. Founded in 2002, it acts as a platform for engineering students to demonstrate their technical skills, innovation, and teamwork.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Each year, a unique theme is announced, presenting a complex challenge that requires teams to build autonomous and manual robots to complete specific tasks within a time limit.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                                <img
                                    src="/achievements/legacy-placeholder.jpg" // Placeholder for general Robocon image
                                    alt="Robocon Arena"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stages Section */}
            <section className="py-20 px-6 bg-purple-900/5 relative">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Road to Victory</h2>
                        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stages.map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-900/50 border border-purple-500/20 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-300 group"
                            >
                                <div className="text-5xl font-bold text-purple-900/50 group-hover:text-purple-500/20 mb-4 transition-colors">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {stage.title}
                                </h3>
                                <p className="text-gray-400">
                                    {stage.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Theme 2026 Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* Left: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="relative rounded-[40px] p-[2px] overflow-hidden group">
                                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#a855f7_50%,#000000_100%)]" />
                                <div className="relative rounded-[38px] overflow-hidden bg-black">
                                    <img
                                        src="/achievements/robocon-2026.jpg"
                                        alt="Robocon 2026 Kung Fu Quest"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 text-left"
                        >
                            <span className="text-purple-500 tracking-[0.3em] text-sm font-bold uppercase mb-2 block">
                                Theme 2026
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Kung Fu Quest
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                The theme for ABU Robocon 2026, hosted in Hong Kong, is "Kung Fu Quest," merging martial arts with robotics. Teams use two robots (manual R1 and autonomous R2) to assemble weapons, collect sacred Kung Fu Scrolls in the Meihua Forest, and play a strategic Tic-Tac-Toe game to become a "Kung Fu Master".
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                The competition emphasizes discipline, strategy, and teamwork, inspired by Kung Fu philosophy and training.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-mono">
                                    Hong Kong, China
                                </span>

                                <a
                                    href="https://youtu.be/HL3Va9hd-0o?si=-0HVNmztbxSeza2V"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-600/20 hover:border-red-500/50 transition-all group/video"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 group-hover/video:scale-110 transition-transform"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    Watch Theme Video
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
