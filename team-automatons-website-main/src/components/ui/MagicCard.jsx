'use client';

import React from 'react';

const MagicCard = ({ children, className = '' }) => {
    return (
        <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
            {/* Spinning Gradient Border */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7e22ce_50%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Content Container */}
            <div className="relative h-full w-full bg-black rounded-[14px] m-[2px] overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default MagicCard;
