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
            color: 'from-zinc-600 to-zinc-800',
            link: 'https://github.com/nexus-ui/nexus-ui/discussions',
        },
        {
            title: 'Discord Server',
            description: 'Join our active community for real-time help and discussions.',
            icon: MessageCircle,
            color: 'from-indigo-600 to-indigo-800',
            link: 'https://discord.gg/nexusui',
        },
        {
            title: 'Contributing Guide',
            description: 'Learn how to contribute to Nexus UI and help us grow.',
            icon: Heart,
            color: 'from-pink-600 to-pink-800',
            link: 'https://github.com/nexus-ui/nexus-ui/blob/main/CONTRIBUTING.md',
        },
        {
            title: 'Documentation',
            description: 'Comprehensive guides and API references for all components.',
            icon: BookOpen,
            color: 'from-emerald-600 to-emerald-800',
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
        <div className="min-h-screen pt-24 pb-16 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
                        <Users size={12} />
                        Community
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Join our community
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Connect with thousands of developers building amazing things with Nexus UI.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-zinc-700 transition-colors">
                            <stat.icon size={24} className="mx-auto mb-3 text-indigo-400" />
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-zinc-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Community Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {communityLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            <div className="relative">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                                        <link.icon size={24} className="text-white" />
                                    </div>
                                    <ExternalLink size={16} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
                                <p className="text-zinc-400">{link.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Top Contributors */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Top Contributors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {contributors.map((contributor, index) => (
                            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center hover:border-zinc-700 transition-colors">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold mx-auto mb-3">
                                    {contributor.avatar}
                                </div>
                                <div className="font-medium text-white text-sm mb-1">{contributor.name}</div>
                                <div className="text-xs text-zinc-500">{contributor.contributions} contributions</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Showcase */}
                <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-3">Built something amazing?</h3>
                    <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                        Share your project with the community and get featured in our showcase.
                    </p>
                    <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        Submit Your Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
