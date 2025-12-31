import React from 'react';
import { Users, Github, MessageCircle, Heart, Star, GitPullRequest, BookOpen, ExternalLink } from 'lucide-react';

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
            icon: Github,
            color: 'text-zinc-400 group-hover:text-white',
            link: 'https://github.com/nexus-ui/nexus-ui/discussions',
        },
        {
            title: 'Discord Server',
            description: 'Join our active community for real-time help and discussions.',
            icon: MessageCircle,
            color: 'text-indigo-400 group-hover:text-indigo-300',
            link: 'https://discord.gg/nexusui',
        },
        {
            title: 'Contributing Guide',
            description: 'Learn how to contribute to Nexus UI and help us grow.',
            icon: Heart,
            color: 'text-pink-400 group-hover:text-pink-300',
            link: 'https://github.com/nexus-ui/nexus-ui/blob/main/CONTRIBUTING.md',
        },
        {
            title: 'Documentation',
            description: 'Comprehensive guides and API references for all components.',
            icon: BookOpen,
            color: 'text-emerald-400 group-hover:text-emerald-300',
            link: '#docs',
        },
    ];

    const contributors = [
        { name: 'Alex Chen', avatar: 'AC', contributions: 234 },
        { name: 'Sarah Miller', avatar: 'SM', contributions: 189 },
        { name: 'James Wilson', avatar: 'JW', contributions: 156 },
        { name: 'Emma Davis', avatar: 'ED', contributions: 143 },
        { name: 'Michael Brown', avatar: 'MB', contributions: 128 },
        { name: 'Lisa Wang', avatar: 'LW', contributions: 112 },
        { name: 'David Kim', avatar: 'DK', contributions: 98 },
        { name: 'Anna Lee', avatar: 'AL', contributions: 87 },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6">
                        <Users size={12} />
                        Community
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                        Join our community
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Connect with thousands of developers building amazing things with Nexus UI.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-black/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-zinc-700 transition-colors backdrop-blur-sm group">
                            <div className="mx-auto mb-3 w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <stat.icon size={20} className="text-indigo-400" />
                            </div>
                            <div className="text-3xl font-medium tracking-tight text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Community Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {communityLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            target={link.link.startsWith('#') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-black/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                    <link.icon size={24} className={link.color} />
                                </div>
                                <ExternalLink size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-medium text-white mb-2">{link.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{link.description}</p>
                        </a>
                    ))}
                </div>

                {/* Top Contributors */}
                <div className="mb-20">
                    <h2 className="text-2xl font-medium tracking-tight text-white mb-8 text-center">Top Contributors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {contributors.map((contributor, index) => (
                            <div key={index} className="bg-black/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-600 hover:bg-zinc-900/50 transition-all backdrop-blur-sm group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center text-white font-bold mx-auto mb-4 group-hover:scale-105 transition-transform">
                                    {contributor.avatar}
                                </div>
                                <div className="font-medium text-white text-sm mb-1">{contributor.name}</div>
                                <div className="text-xs text-zinc-500">{contributor.contributions} contributions</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Showcase */}
                <div className="bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 border border-indigo-500/10 rounded-2xl p-10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
                    <h3 className="text-2xl font-medium text-white mb-3 relative z-10">Built something amazing?</h3>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto relative z-10">
                        Share your project with the community and get featured in our showcase.
                    </p>
                    <button className="relative z-10 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200">
                        Submit Your Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
