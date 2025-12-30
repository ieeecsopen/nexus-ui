import React from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { SHOWCASE_ITEMS } from '../data/showcase';
import { motion } from 'framer-motion';

const ShowcasePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8">
                        <Layers size={12} />
                        <span>Made with Nexus</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        Built by the Community.
                    </h1>

                    <p className="text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
                        Explore stunning applications and websites crafted by developers using Nexus UI components.
                    </p>
                </div>

                {/* Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SHOWCASE_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-zinc-800 bg-black rounded-xl overflow-hidden hover:border-zinc-600 transition-colors"
                        >
                            {/* Image Container */}
                            <div className="aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-800 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                                    <a href={item.link} className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                        View Project <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-zinc-500 font-medium">by {item.author}</p>
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2 h-10">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/50 text-[10px] font-medium text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Submission CTA - Bento Style */}
                <div className="mt-32">
                    <div className="border border-zinc-800 bg-black/50 rounded-xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white tracking-tighter mb-4">Built something cool?</h2>
                            <p className="text-zinc-400 mb-8">
                                Submit your project to be featured in our showcase. We love seeing what you build with Nexus UI.
                            </p>
                            <button className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
                                Submit Project <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowcasePage;
