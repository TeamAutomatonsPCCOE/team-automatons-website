'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Robocon", href: "/robocon" },
        { label: "IRC", href: "/irc" },
        { label: "Achievement", href: "/achievement" },
        {
            label: "Activities",
            href: "/activities",
            dropdown: [
                { label: "Workshops & Exhibitions", href: "/activities/workshops" },
                { label: "Recruitment", href: "/activities/recruitment" }
            ]
        },
        { label: "Gallery", href: "/gallery" },
        { label: "Sponsors", href: "/sponsors" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Team", href: "/team" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">

                {/* Logo (Left Side) */}
                <div className="flex-shrink-0 mr-4">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="Team Automatons Logo"
                            className="h-10 md:h-12 w-auto filter invert brightness-0 invert"
                        />
                    </Link>
                </div>

                {/* DESKTOP Navigation (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-6 md:gap-8 overflow-visible">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">
                            {item.dropdown ? (
                                <>
                                    <button
                                        className="text-gray-300 group-hover:text-white group-hover:bg-white/10 px-3 py-1.5 rounded-full transition-all text-sm md:text-base font-medium whitespace-nowrap flex items-center gap-1"
                                    >
                                        {item.label}
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    </button>

                                    {/* Desktop Dropdown Menu */}
                                    <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all text-sm md:text-base font-medium whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* MOBILE Menu Button (Visible on Mobile) */}
                <button
                    className="md:hidden text-gray-300 hover:text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE Navigation Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-white/10 p-4 shadow-2xl animate-slide-down max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                                            className="w-full flex items-center justify-between text-left text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all text-base font-medium"
                                        >
                                            {item.label}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${isActivitiesOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Mobile Sub-menu */}
                                        {isActivitiesOpen && (
                                            <div className="pl-6 mt-1 space-y-1 border-l-2 border-white/10 ml-4">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                                        className="block text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all text-base font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
