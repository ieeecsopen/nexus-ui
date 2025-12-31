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
                return <CheckCircle2 size={18} className="text-green-400" />;
            case 'in-progress':
                return <Clock size={18} className="text-amber-400" />;
            case 'planned':
                return <Circle size={18} className="text-zinc-500" />;
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
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wider ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    return (
        <div className="min-h-screen pt-24 pb-16 bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6">
                        <Rocket size={12} />
                        Roadmap
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                        What's next for Nexus UI
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Follow our journey as we build the most comprehensive React UI library.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-black/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-sm">
                        <div className="text-4xl font-medium tracking-tighter text-green-400 mb-2">
                            {roadmapItems.filter(i => i.status === 'completed').length}
                        </div>
                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Completed</div>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-sm">
                        <div className="text-4xl font-medium tracking-tighter text-amber-400 mb-2">
                            {roadmapItems.filter(i => i.status === 'in-progress').length}
                        </div>
                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">In Progress</div>
                    </div>
                    <div className="bg-black/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-sm">
                        <div className="text-4xl font-medium tracking-tighter text-zinc-400 mb-2">
                            {roadmapItems.filter(i => i.status === 'planned').length}
                        </div>
                        <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Planned</div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[27px] top-4 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-amber-500/50 to-zinc-800" />

                    <div className="space-y-12">
                        {roadmapItems.map((item, index) => (
                            <div key={index} className="relative flex gap-8 group">
                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center shadow-xl group-hover:border-zinc-700 transition-colors">
                                    {getStatusIcon(item.status)}
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-black/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all backdrop-blur-sm">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                            <div className="flex items-center gap-3 text-xs text-zinc-500">
                                                {item.version && (
                                                    <span className="flex items-center gap-1.5 bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800">
                                                        <Sparkles size={12} />
                                                        {item.version}
                                                    </span>
                                                )}
                                                {item.date && (
                                                    <span className="flex items-center gap-1.5 bg-zinc-900/50 px-2 py-0.5 rounded border border-zinc-800">
                                                        <Calendar size={12} />
                                                        {item.date}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {getStatusBadge(item.status)}
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 border border-indigo-500/10 rounded-2xl p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
                        <h3 className="text-2xl font-medium text-white mb-3 relative z-10">Have a feature request?</h3>
                        <p className="text-zinc-400 mb-8 relative z-10">
                            We'd love to hear your ideas! Submit a feature request on GitHub.
                        </p>
                        <button className="relative z-10 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transform duration-200">
                            Submit Feature Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadmapPage;
