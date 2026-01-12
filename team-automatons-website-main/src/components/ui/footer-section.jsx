'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

const footerLinks = [
    {
        label: 'Product',
        links: [
            { title: 'Home', href: '/' },
            { title: 'Robocon', href: '/robocon' },
            { title: 'IRC', href: '/irc' },
        ],
    },
    {
        label: 'Company',
        links: [
            { title: 'About Us', href: '/' },
            { title: 'Contact Us', href: '/contact' },
            { title: 'Sponsors', href: '/sponsors' },
        ],
    },
    {
        label: 'Social Links',
        links: [
            { title: 'Facebook', href: 'https://www.facebook.com/teamautomatons', icon: FacebookIcon },
            { title: 'Instagram', href: 'https://www.instagram.com/team_automatons/', icon: InstagramIcon },
            { title: 'Youtube', href: 'https://www.youtube.com/c/TeamAutomatonsPCCOE', icon: YoutubeIcon },
            { title: 'LinkedIn', href: 'https://www.linkedin.com/company/team-automatons/posts/?feedView=all', icon: LinkedinIcon },
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.purple.500/10%),transparent)] px-6 py-12 lg:py-16 md:rounded-t-3xl text-white">
            {/* Top glowing line */}
            <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur bg-purple-500/50" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-4">
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Team Automatons Logo"
                            className="h-10 w-auto filter invert brightness-0 invert"
                        />
                        <span className="text-xl font-bold">Team Automatons</span>
                    </div>
                    <p className="text-gray-400 mt-8 text-sm md:mt-0 max-w-xs">
                        Rising to the challenge raised by dreams.
                    </p>
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Team Automatons. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-sm font-semibold text-purple-300">{section.label}</h3>
                                <ul className="text-gray-400 mt-4 space-y-2 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                target={link.href.startsWith('http') ? "_blank" : undefined}
                                                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                                className="hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && <link.icon className="me-2 size-4 text-purple-400" />}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
};

function AnimatedContainer({ className, delay = 0.1, children }) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
