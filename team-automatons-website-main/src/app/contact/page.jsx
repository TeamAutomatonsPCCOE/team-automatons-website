'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/ui/navbar';
import { Footer } from '../../components/ui/footer-section';
import ProfileCard from '../../components/ui/ProfileCard';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('Sending...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Mock data for the cards as requested (2 then 3)
    const ROW_1 = [
        { name: 'Dr. Sanjay B. Matekar', title: 'Faculty Co-ordinator', handle: '', status: 'Offline', avatarUrl: '/contact/matekar sir.png', email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sanjay.matekar@pccoepune.org', linkedin: 'https://www.linkedin.com/in/sanjay-matekar-72253b149/' },
        { name: 'Dr. Varsha S. Bendre', title: 'Faculty Co-ordinator', handle: ' ', status: 'Offline', avatarUrl: '/contact/avatar_new.png', email: 'https://mail.google.com/mail/?view=cm&fs=1&to=varsha.bendre@pccoepune.org', linkedin: 'https://www.linkedin.com/in/dr-varsha-s-bendre-590b633b/' }
    ];

    const ROW_2 = [
        { name: 'Piyush Patil', title: 'Managing Director', handle: 'member.one', status: 'Offline', avatarUrl: '/team/2026/Piyush.webp', email: 'https://mail.google.com/mail/?view=cm&fs=1&to=piyushspatil225@gmail.com', linkedin: 'https://www.linkedin.com/in/piyush-patil-8630ab292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { name: 'Vardhan Khinvasara', title: 'Co-Managing Director ', handle: 'member.two', status: 'Offline', avatarUrl: '/team/2026/Vardhan.webp', email: 'https://mail.google.com/mail/?view=cm&fs=1&to=vardhansk18115@gmail.com', linkedin: 'https://www.linkedin.com/in/vardhan-santosh-khinvasara-9a79a8296/' },
        { name: 'Atharva Junghare', title: 'Co-Managing Director', handle: 'member.three', status: 'Offline', avatarUrl: '/team/2026/Atharva.webp', email: 'https://mail.google.com/mail/?view=cm&fs=1&to=%20atharva.junghare2005@gmail.com', linkedin: 'https://www.linkedin.com/in/atharva-junghare-681782278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' }
    ];

    // Specific props requested by the user
    const cardProps = {
        showUserInfo: true,
        enableMobileTilt: false,
        enableTilt: false,
        behindGlowColor: "hsla(211, 100%, 70%, 0.6)",
        innerGradient: "linear-gradient(145deg,hsla(211, 40%, 45%, 0.55) 0%,hsla(174, 60%, 70%, 0.27) 100%)"
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-purple-500/30">
            <Navbar />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] -z-10" />
            </div>

            <main className="flex-grow pt-32 pb-16 px-4 md:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-24 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                        Feel free to contact us
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>

                {/* Profile Cards Section */}
                {/* Increased vertical spacing to prevent overlap with the large cards */}
                <div className="max-w-7xl mx-auto mb-40 space-y-20">
                    {/* Row 1: 2 Cards */}
                    <div className="flex flex-wrap justify-center gap-24">
                        {ROW_1.map((person, idx) => (
                            // Reduced size to 260x380 and maintained flex centering
                            <div key={idx} className="w-[260px] h-[380px] flex justify-center">
                                <ProfileCard
                                    name={person.name}
                                    title={person.title}
                                    handle={person.handle}
                                    status={person.status}
                                    avatarUrl={person.avatarUrl}
                                    email={person.email}
                                    linkedin={person.linkedin}
                                    {...cardProps}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 3 Cards */}
                    <div className="flex flex-wrap justify-center gap-24">
                        {ROW_2.map((person, idx) => (
                            <div key={idx} className="w-[260px] h-[380px] flex justify-center">
                                <ProfileCard
                                    name={person.name}
                                    title={person.title}
                                    handle={person.handle}
                                    status={person.status}
                                    avatarUrl={person.avatarUrl}
                                    email={person.email}
                                    linkedin={person.linkedin}
                                    {...cardProps}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                {/* Contact Info & Form Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pt-10">

                    {/* Left Column: Info & Map */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-slate-300 hover:text-white transition-colors group">
                                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-purple-500/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                                        <p className="leading-relaxed">
                                            Innovation Centre, Sector No. 26, Nigdi, Pune, Maharashtra 411044
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-slate-300 hover:text-white transition-colors group">
                                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-purple-500/20 transition-colors">
                                        <Mail className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email Us</h3>
                                        <a href="mailto:automatons.robotics@gmail.com" className="hover:text-purple-300 transition-colors">
                                            automatons.robotics@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 text-slate-300 hover:text-white transition-colors group">
                                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-purple-500/20 transition-colors">
                                        <Phone className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Call Us</h3>
                                        <a href="tel:+918625934384" className="hover:text-purple-300 transition-colors">
                                            +91 8625934384
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map - Permanent Layout */}
                        <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] h-[300px] w-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273180556708!2d73.75940707595306!3d18.651728382467364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sInnovation%20Centre!5e0!3m2!1sen!2sin!4v1709623849500!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter contrast-[1.1] opacity-100"
                            ></iframe>
                        </div>
                    </div>


                    {/* Right Column: Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl">
                        <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-400/20"
                            >
                                {loading ? 'Sending Message...' : 'Send Message'}
                            </button>

                            {status && (
                                <div className={`p-4 rounded-xl text-center text-sm font-medium ${status.includes('success') ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                                    {status}
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
