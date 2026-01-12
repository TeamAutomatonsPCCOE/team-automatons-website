'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';
import ElectricBorder from '@/components/ui/ElectricBorder';

export default function RecruitmentPage() {

    const textBoxRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!textBoxRef.current) return;
            const rect = textBoxRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            textBoxRef.current.style.setProperty('--mouse-x', `${x}px`);
            textBoxRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const steps = [
        {
            title: "Round 1",
            subtitle: "Aptitude Test",
            description: "Aptitude Test consist of logical reasoning and the basic technical ability based on 10th and 12th knowledge.",
            color: "#d780ff"
        },
        {
            title: "Round 2",
            subtitle: "Technical + HR Interview",
            description: "The interview consist of knowing the ability of student and his/her interest in Robotics. In this interview the behaviour and the thinking process of a student is also determined.",
            color: "#5227FF"
        },
        {
            title: "Final Step",
            subtitle: "Confirmation of Selection",
            description: "Confirmation after the two rounds of recruitment process will be shared to your personal contact number.",
            color: "#4ade80" // Greenish for success
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] -z-10" />
            </div>

            <main className="flex-grow pt-32 pb-20 px-4 md:px-8 relative z-10 flex flex-col items-center">

                {/* Section 1: Joining the Team */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="max-w-4xl w-full text-center space-y-12 mb-24"
                >
                    {/* Title Animation: Bottom to Top */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-2"
                    >
                        Joining the Team
                    </motion.h1>

                    {/* Rectangular Box Description */}
                    {/* Rectangular Box Description with Interactive Border */}
                    <div
                        ref={textBoxRef}
                        className="relative w-full max-w-4xl mx-auto p-[3px] rounded-3xl overflow-hidden bg-transparent group"
                    >
                        {/* Glowing Border Background */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.4), transparent 40%)`
                            }}
                        />

                        {/* Border Layer */}
                        <div
                            className="absolute inset-0 rounded-3xl z-0 transition-opacity duration-500"
                            style={{
                                background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 1), transparent 40%)`
                            }}
                        />

                        {/* Content Container */}
                        <div className="relative z-10 w-full h-full rounded-[21px] bg-slate-900/80 backdrop-blur-md p-8 md:p-12 shadow-2xl overflow-hidden border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed relative z-10 text-justify md:text-center">
                                Our team constantly needs adequate members to keep the research and development work going at a constant pace. Joining the team helps individuals become a better person with time, gain practical knowledge, explore the newest technology, and enjoy this journey as we make robots for a better tomorrow.
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* Section 2: Recruitment Process */}
                <div className="max-w-7xl w-full space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recruitment Process</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4"
                    >
                        {steps.map((step, idx) => (
                            <motion.div key={idx} variants={variants}>
                                <div className="h-full">
                                    <ElectricBorder
                                        color={step.color}
                                        speed={1}
                                        chaos={0.15}
                                        borderRadius={24}
                                        className="h-full bg-slate-900/50 backdrop-blur-sm rounded-3xl"
                                        style={{ height: '100%', minHeight: '300px' }}
                                    >
                                        <div className="p-8 h-full flex flex-col justify-center items-center text-center space-y-4">
                                            <h3 className="text-lg font-semibold text-white/60 tracking-wider uppercase">{step.title}</h3>
                                            <h4 className="text-2xl md:text-3xl font-bold text-white">{step.subtitle}</h4>
                                            <p className="text-slate-400">{step.description}</p>
                                        </div>
                                    </ElectricBorder>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
