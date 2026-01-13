'use client';

import dynamic from 'next/dynamic';
import { getCloudinaryUrl } from '@/lib/cloudinary';

// Disable SSR for components that may touch window/document
const PixelCard = dynamic(() => import('../../components/ui/PixelCard'), { ssr: false });
const Navbar = dynamic(() => import('../../components/ui/navbar').then(mod => mod.Navbar), { ssr: false });
const Footer = dynamic(() => import('../../components/ui/footer-section').then(mod => mod.Footer), { ssr: false });


const SPONSORS = {
    title: [
        // { name: '3deology', logo: '/sponsors/3deology.png' },
        { name: 'PCCOE ', logo: 'logos/pccoe-logo-new-removebg-preview.png', href: "https://www.pccoepune.com/" }
    ],
    platinum: [
        { name: '3deology', logo: '/logos/3deology.png', href: "https://www.3deology.co.in/" },
        { name: 'MAHLE', logo: '/logos/image copy 6.png', href: "https://mahle.com/" },
        { name: 'Solidworks', logo: '/logos/image copy 2.png', href: "https://www.solidworks.com/" },
        { name: 'Altium', logo: '/logos/download-removebg-preview copy.png', href: "https://altium.com/" },
        { name: 'TechnoWings', logo: '/logos/image copy 9.png', href: "https://technowingsind.com/" },
        { name: 'Odrive', logo: '/logos/image copy 4.png', href: "https://odriverobotics.com/" },
        { name: 'Slamtec', logo: '/logos/header-logo-removebg-preview.png', href: "https://www.slamtec.com/en?gad_source=1&gad_campaignid=22761052052&gclid=CjwKCAiAjojLBhAlEiwAcjhrDu-3GhE6CfJO7UHLjn3WiTVN9Xs7dnYXhkFhsIRMCwAY4wXTbIwoCRoCcygQAvD_BwE" },
    ],
    gold: [
        { name: 'Arihant ', logo: 'logos/arihant-removebg-preview.png', href: "https://www.google.com/maps/place/Arihant+Electrical+Services,+Mahindra+Gate+2,+Maharashtra+410501/data=!4m2!3m1!1s0x3bc2b71f8aa53579:0x2ae99224ae170c37?utm_source=mstt_1&entry=gps&lucs=47068609&g_ep=CAESCTExLjgzLjMwMRgAINeCAyoINDcwNjg2MDlCAklO" },
        { name: 'YOJAK', logo: '/logos/image copy 5.png', href: "https://yojak.org/" },
        { name: 'CYTRON', logo: '/logos/image copy 7.png', href: "https://www.cytron.io/" },
        { name: 'SEQURE', logo: '/logos/image copy 8.png', href: "https://sequremall.com/" },
        { name: 'Ploymaker', logo: 'logos/ploymaker.png', href: "https://polymaker.com/" },

    ],
    silver: [
        { name: 'Ashok Laser', logo: '/logos/ashok laser.jpg', href: "https://ashoklaser.com/" },
        { name: 'Baker', logo: '/logos/baker.png', href: "https://bakergauges.com/" },
        { name: 'Tulesh industries', logo: '/logos/himanshu industries.png', href: "https://maps.app.goo.gl/fajtt3vJf8Siwttb8" },
        { name: 'pranita industries', logo: '/logos/pranita industries.png', href: "https://maps.app.goo.gl/M28mNYkEC5WHgn5S8" },
        { name: 'SK Tooling', logo: '/logos/image copy 11.png', href: "https://maps.app.goo.gl/aVtCzpCbYfgwKoHh9" },
        { name: 'MOLEX', logo: '/logos/copy image 13.png', href: "https://www.molex.com/en-us/home" },
        { name: 'Only Screws', logo: '/logos/image copy 12.png', href: "https://www.onlyscrews.in/" },
        { name: 'Microlaser', logo: '/logos/microlaser.PNG', href: "https://microlaser.com" },
        { name: 'Sourcepoint', logo: 'logos/image copy 15.png', href: 'https://www.sourcepointindia.com/' },
    ],
    bronze: [
        { name: 'Santosh Engineering Work', logo: 'logos/image copy.png', href: "https://maps.app.goo.gl/QpUiN9akvKrxq7po6" },
        { name: 'Fabxotic', logo: '/logos/image copy 10.png', href: "https://www.fabxotic.com/" },

        { name: 'Dhanashree Lathe ', logo: '/logos/dhan-removebg-preview.png', href: "https://maps.app.goo.gl/LdXgyBqwPoz2zK2r9" },
        { name: 'VR Coatings', logo: 'logos/image copy 14.png', href: 'https://www.vrcoatings.net/' },
        { name: 'Tech Star', logo: 'logos/tech-removebg-preview.png', href: 'https://maps.app.goo.gl/ToVJDgKjR2dfNbdM7' },


    ]
};

const TIER_CONFIG = {
    title: { label: 'Title Sponsors', variant: 'title', color: 'text-purple-400' },
    platinum: { label: 'Platinum Sponsors', variant: 'platinum', color: 'text-slate-100' },
    gold: { label: 'Gold Sponsors', variant: 'gold', color: 'text-amber-400' },
    silver: { label: 'Silver Sponsors', variant: 'silver', color: 'text-slate-300' },
    bronze: { label: 'Bronze Sponsors', variant: 'bronze', color: 'text-orange-400' }
};

export default function SponsorsPage() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-white relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10" />

            <main className="flex-grow py-24 px-4 md:px-8 mt-20">
                <div className="max-w-7xl mx-auto space-y-28">
                    {Object.entries(SPONSORS).map(([tier, sponsors]) => (
                        <div key={tier} className="flex flex-col items-center animate-fade-in-up">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-12 tracking-wide capitalize ${TIER_CONFIG[tier].color} drop-shadow-lg`}>
                                {TIER_CONFIG[tier].label}
                            </h2>
                            <div className="flex flex-wrap justify-center gap-10">
                                {sponsors.map((sponsor, idx) => (
                                    <div
                                        key={idx}
                                        className="block transition-transform duration-300"
                                    >
                                        <PixelCard variant={TIER_CONFIG[tier].variant}>
                                            <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
                                                <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-xl">
                                                    <a
                                                        href={sponsor.href || '#'}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center max-w-full max-h-full transition-transform duration-300 ${sponsor.href ? 'cursor-pointer hover:scale-105' : 'cursor-default pointer-events-none'}`}
                                                    >
                                                        <img
                                                            src={getCloudinaryUrl(sponsor.logo)}
                                                            alt={sponsor.name}
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </PixelCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
