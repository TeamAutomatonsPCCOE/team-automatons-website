'use client';

import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';
import { ExhibitionSection } from '@/components/blocks/ExhibitionSection';
import { WorkshopSection } from '@/components/blocks/WorkshopSection';

export default function WorkshopPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden relative">

            {/* Crazy Gradient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Large animated blobs - Moving Background */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/40 rounded-full filter blur-[100px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-800/50 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-fuchsia-900/40 rounded-full filter blur-[120px] animate-blob animation-delay-4000" />

                {/* Mesh Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>

            <Navbar />

            <div className="pt-20 pb-20 relative z-10">
                {/* Intro / Header Area Removed */}

                <ExhibitionSection />

                <WorkshopSection />
            </div>

            <Footer />
        </div>
    );
}
