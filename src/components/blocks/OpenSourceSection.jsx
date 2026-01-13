'use client';

import React from 'react';
import { Github, Star } from 'lucide-react';

export function OpenSourceSection() {
    return (
        <section className="w-full px-4 md:px-8 py-8 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl group">

                    {/* Background Glow Effects - Enhanced */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 md:p-10 relative z-10">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    Open Source Project
                                </h2>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
                                    We have made this project open source and available on GitHub.
                                    Feel free to contribute! Don't forget to star us on GitHub! ✨
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/TeamAutomatonsPCCOE/team-automatons-website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 border border-white/5"
                                >
                                    <Github className="w-5 h-5" />
                                    <span>View on GitHub</span>
                                </a>
                                <a
                                    href="https://github.com/TeamAutomatonsPCCOE/team-automatons-website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 border border-white/5"
                                >
                                    <span>Star</span>
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                </a>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="w-full lg:w-1/2 relative group/image">
                            {/* Image Backlight */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 rounded-xl blur-2xl opacity-40 group-hover/image:opacity-60 transition-opacity duration-500 transform rotate-3 scale-105" />

                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1 bg-gray-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                                <img
                                    src="/repo-screenshot.png"
                                    alt="GitHub Repository Preview"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
