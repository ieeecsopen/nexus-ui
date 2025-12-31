import React from 'react';
import { Rocket, CheckCircle2, Circle, Clock, Sparkles, ArrowRight } from 'lucide-react';

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
                return <CheckCircle2 size={20} className="text-white" />;
            case 'in-progress':
                return <Clock size={20} className="text-zinc-400" />;
            case 'planned':
                return <Circle size={20} className="text-zinc-600" />;
        }
    };

    const getStatusText = (status: RoadmapItem['status']) => {
        switch (status) {
            case 'completed': return 'Completed';
            case 'in-progress': return 'In Progress';
            case 'planned': return 'Planned';
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-black text-white selection:bg-white selection:text-black font-sans">

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-xs font-medium text-white uppercase tracking-wider">Roadmap</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-8">
                        The future.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Follow our journey as we build the most comprehensive React UI library.
                        Transparent and community-driven.
                    </p>
                </div>

                {/* Simplified Stats */}
                <div className="grid grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden mb-32 max-w-3xl mx-auto">
                    {['completed', 'in-progress', 'planned'].map((status) => (
                        <div key={status} className="bg-black p-6 flex flex-col items-center justify-center group hover:bg-zinc-900 transition-colors">
                            <div className="text-4xl font-light tracking-tighter text-white mb-1 group-hover:scale-110 transition-transform">
                                {roadmapItems.filter(i => i.status === status).length}
                            </div>
                            <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                                {status.replace('-', ' ')}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[23px] top-6 bottom-6 w-px bg-zinc-900" />

                    <div className="space-y-12">
                        {roadmapItems.map((item, index) => (
                            <div key={index} className="relative pl-16 group">
                                {/* Dot on timeline */}
                                <div className={`absolute left-0 top-6 w-12 h-12 rounded-full border flex items-center justify-center transition-colors z-10 bg-black ${item.status === 'completed' ? 'border-white text-white' :
                                        item.status === 'in-progress' ? 'border-zinc-700 text-zinc-400' : 'border-zinc-800 text-zinc-600'
                                    }`}>
                                    {getStatusIcon(item.status)}
                                </div>

                                {/* Content Card */}
                                <div className="p-8 border border-white/10 rounded-3xl bg-black hover:bg-white hover:text-black transition-all duration-300 group-hover:border-transparent">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-light">{item.title}</h3>
                                                {item.status === 'in-progress' && (
                                                    <span className="px-2 py-0.5 rounded-full border border-current text-[10px] uppercase tracking-wider opacity-60">
                                                        Active
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-4 text-sm opacity-60 font-mono">
                                                <span className="flex items-center gap-2">
                                                    <Sparkles size={12} />
                                                    {item.version || 'TBD'}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-current" />
                                                <span>{item.date || 'TBD'}</span>
                                            </div>
                                        </div>

                                        <div className="px-3 py-1 rounded-full border border-current text-xs font-medium uppercase tracking-wider opacity-50 whitespace-nowrap">
                                            {getStatusText(item.status)}
                                        </div>
                                    </div>

                                    <p className="text-lg opacity-70 font-light leading-relaxed max-w-2xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 text-center md:text-left border border-white/10 p-12 rounded-[3rem] bg-zinc-900/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-3xl font-light text-white mb-2">Have a feature request?</h3>
                        <p className="text-zinc-400 font-light text-lg">
                            We'd love to hear your ideas. Help shape the future of Nexus UI.
                        </p>
                    </div>

                    <button className="flex-shrink-0 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        Submit Request <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoadmapPage;
