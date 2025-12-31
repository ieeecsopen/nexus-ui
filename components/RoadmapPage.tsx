import React from 'react';
import { Rocket, CheckCircle2, Clock, Circle, Calendar, Sparkles } from 'lucide-react';

interface RoadmapItem {
    title: string;
    description: string;
    status: 'completed' | 'in-progress' | 'planned';
    version?: string;
    date?: string;
}

const RoadmapPage: React.FC = () => {
    const roadmapItems: RoadmapItem[] = [
        {
            title: 'Core Component Library',
            description: 'Initial release with 30+ essential UI components including buttons, cards, modals, and forms.',
            status: 'completed',
            version: 'v1.0',
            date: 'Q3 2024',
        },
        {
            title: 'Animation System',
            description: 'Framer Motion integration with pre-built animation presets and custom hooks.',
            status: 'completed',
            version: 'v1.5',
            date: 'Q4 2024',
        },
        {
            title: 'Template Collection',
            description: 'Premium page templates for dashboards, landing pages, and e-commerce.',
            status: 'completed',
            version: 'v2.0',
            date: 'Q4 2024',
        },
        {
            title: 'Dark Mode System',
            description: 'Complete dark mode support with automatic detection and seamless transitions.',
            status: 'in-progress',
            version: 'v2.1',
            date: 'Q1 2025',
        },
        {
            title: 'Figma Design Kit',
            description: 'Complete Figma design system with all components and design tokens.',
            status: 'in-progress',
            version: 'v2.2',
            date: 'Q1 2025',
        },
        {
            title: 'CLI Tool',
            description: 'Command-line interface for quick component scaffolding and project setup.',
            status: 'planned',
            version: 'v2.5',
            date: 'Q2 2025',
        },
        {
            title: 'AI Component Generator',
            description: 'Generate custom components from natural language descriptions using AI.',
            status: 'planned',
            version: 'v3.0',
            date: 'Q3 2025',
        },
        {
            title: 'Vue & Svelte Ports',
            description: 'Expand Nexus UI to Vue.js and Svelte frameworks.',
            status: 'planned',
            version: 'v4.0',
            date: 'Q4 2025',
        },
    ];

    const getStatusIcon = (status: RoadmapItem['status']) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 size={20} className="text-green-400" />;
            case 'in-progress':
                return <Clock size={20} className="text-amber-400" />;
            case 'planned':
                return <Circle size={20} className="text-zinc-500" />;
        }
    };

    const getStatusBadge = (status: RoadmapItem['status']) => {
        const styles = {
            completed: 'bg-green-500/10 text-green-400 border-green-500/20',
            'in-progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            planned: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
        };
        const labels = {
            completed: 'Completed',
            'in-progress': 'In Progress',
            planned: 'Planned',
        };
        return (
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    return (
        <div className="min-h-screen pt-24 pb-16 bg-black">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
                        <Rocket size={12} />
                        Roadmap
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What's next for Nexus UI
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Follow our journey as we build the most comprehensive React UI library.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-16">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-1">
                            {roadmapItems.filter(i => i.status === 'completed').length}
                        </div>
                        <div className="text-sm text-zinc-500">Completed</div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-1">
                            {roadmapItems.filter(i => i.status === 'in-progress').length}
                        </div>
                        <div className="text-sm text-zinc-500">In Progress</div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-zinc-400 mb-1">
                            {roadmapItems.filter(i => i.status === 'planned').length}
                        </div>
                        <div className="text-sm text-zinc-500">Planned</div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-amber-500 to-zinc-700" />

                    <div className="space-y-6">
                        {roadmapItems.map((item, index) => (
                            <div key={index} className="relative flex gap-6">
                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                    {getStatusIcon(item.status)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                        {getStatusBadge(item.status)}
                                    </div>
                                    <p className="text-zinc-400 mb-4">{item.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                                        {item.version && (
                                            <span className="flex items-center gap-1.5">
                                                <Sparkles size={14} />
                                                {item.version}
                                            </span>
                                        )}
                                        {item.date && (
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {item.date}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-white mb-2">Have a feature request?</h3>
                        <p className="text-zinc-400 mb-6">
                            We'd love to hear your ideas! Submit a feature request on GitHub.
                        </p>
                        <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                            Submit Feature Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapPage;
