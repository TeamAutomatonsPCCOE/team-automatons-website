import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

// Fallback SVGs
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

import { getCloudinaryUrl } from '@/lib/cloudinary';

export function TeamProfileCard({ name, role, companyRole, photo, email, linkedin }) {
    const optimizedPhoto = getCloudinaryUrl(photo);
    return (
        <div className="relative w-full p-4"> {/* Padding to accommodate the electric noise which extends outside */}
            <div className="relative w-full h-full rounded-2xl p-[2px] overflow-hidden group shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                {/* Spinning Gradient Border */}
                <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#b026ff_50%,#000000_100%)]" />

                <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">

                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                        <img
                            src={optimizedPhoto || "/team/member.jpg"}
                            alt={name}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Social Links Pop-up (Overlay on image bottom) */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                            {email && (
                                <a
                                    href={email.startsWith('http') ? email : `mailto:${email}`}
                                    {...(email.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="p-3 rounded-full bg-purple-600 text-white shadow-[0_0_15px_purple] hover:scale-110 transition-transform"
                                >
                                    <MailIcon />
                                </a>
                            )}
                            {linkedin && (
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-[#0077b5] text-white shadow-[0_0_15px_#0077b5] hover:scale-110 transition-transform"
                                >
                                    <LinkedinIcon />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-4 text-center border-t border-purple-500/20 bg-black/80 backdrop-blur-md relative z-20">
                        <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-wider">{name}</h3>
                        <p className="text-xs text-purple-400/80 font-mono mt-1">{role}</p>
                        {companyRole && <p className="text-[10px] text-gray-400 font-mono mt-1 italic">{companyRole}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
