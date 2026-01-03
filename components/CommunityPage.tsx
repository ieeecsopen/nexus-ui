import React from 'react';
import { Users, Github, MessageCircle, Heart, Star, GitPullRequest, BookOpen, ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CommunityPage: React.FC = () => {
    const stats = [
        { label: 'GitHub Stars', value: '12.5k', icon: Star },
        { label: 'Contributors', value: '150+', icon: Users },
        { label: 'Discord Members', value: '5.2k', icon: MessageCircle },
        { label: 'Pull Requests', value: '800+', icon: GitPullRequest },
    ];

    const communityLinks = [
        {
            title: 'GitHub Discussions',
            description: 'Ask questions, share ideas, and connect with other developers.',
            link: 'https://github.com/nexus-kit/nexus-kit/discussions',
        },
        {
            title: 'Discord Server',
            description: 'Join our active community for real-time help and discussions.',
            link: 'https://discord.gg/nexusui',
        },
        {
            title: 'Contributing Guide',
            description: 'Learn how to contribute to Nexus Kit and help us grow.',
            link: 'https://github.com/nexus-kit/nexus-kit/blob/main/CONTRIBUTING.md',
        },
    ];

    const contributors = [
        { name: 'Alex Chen', role: 'Maintainer', contributions: 234 },
        { name: 'Sarah Miller', role: 'Core Team', contributions: 189 },
        { name: 'James Wilson', role: 'Contributor', contributions: 156 },
        { name: 'Emma Davis', role: 'Contributor', contributions: 143 },
        { name: 'Michael Brown', role: 'Contributor', contributions: 128 },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20">

            {/* Scroll Line */}
            <div className="fixed top-0 left-6 h-screen w-px bg-white/10 hidden md:block" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-16 pb-32 md:pl-24">

                {/* Header Section */}
                <div className="mb-40 pt-20">
                    <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-white mb-16 leading-[0.8] -ml-2">
                        Global <br />
                        <span className="text-zinc-600">Collective.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-white/10 pt-8">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            Join thousands of developers building the future of the web.
                            Open source, open minds.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/nexus-kit/nexus-kit" target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full flex items-center gap-2">
                                <Github size={18} /> GitHub
                            </a>
                            <a href="https://discord.gg/nexusui" target="_blank" rel="noreferrer" className="px-6 py-3 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all rounded-full flex items-center gap-2">
                                <MessageCircle size={18} /> Discord
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Section - Minimalist Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-b border-white/10 pb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="group">
                            <div className="text-5xl md:text-6xl font-light text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-sm text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                <stat.icon size={14} /> {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Two Column Layout: Links & Contributors */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                    {/* Left: Community Links */}
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl font-light mb-12">Discussions</h2>
                        <div className="space-y-8">
                            {communityLinks.map((link, i) => (
                                <a key={i} href={link.link} target="_blank" rel="noreferrer" className="group block border-t border-white/10 pt-8 hover:pl-8 transition-all duration-500">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-2xl text-white font-light group-hover:text-indigo-400 transition-colors">{link.title}</h3>
                                        <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <p className="text-zinc-500 font-light text-lg max-w-md group-hover:text-zinc-400 transition-colors">
                                        {link.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Top Contributors List */}
                    <div className="lg:col-span-5">
                        <div className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 backdrop-blur-sm">
                            <h2 className="text-2xl font-light mb-12 flex items-center gap-3">
                                <Heart className="text-pink-500" size={20} /> Top Contributors
                            </h2>
                            <div className="space-y-6">
                                {contributors.map((contributor, index) => (
                                    <div key={index} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-mono text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors">
                                                {contributor.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="text-white font-light group-hover:text-indigo-400 transition-colors">{contributor.name}</div>
                                                <div className="text-xs text-zinc-500 uppercase tracking-wider">{contributor.role}</div>
                                            </div>
                                        </div>
                                        <div className="text-zinc-600 font-mono text-xs group-hover:text-white transition-colors">
                                            {contributor.contributions} commits
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-zinc-500 text-sm mb-4">Want to see your name here?</p>
                                <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors">
                                    Start contributing <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Showcase Banner */}
                <div className="mt-40 relative group cursor-pointer overflow-hidden bg-white/5 h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="text-center relative z-10">
                        <h2 className="text-5xl md:text-7xl font-light text-zinc-700 group-hover:text-white transition-colors duration-500 mb-4">
                            Showcase
                        </h2>
                        <p className="text-zinc-500 uppercase tracking-[0.2em] group-hover:text-white/70 transition-colors duration-500">
                            Submit your project
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CommunityPage;
