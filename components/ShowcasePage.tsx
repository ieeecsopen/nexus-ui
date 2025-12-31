import React from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { SHOWCASE_ITEMS } from '../data/showcase';
import { motion } from 'framer-motion';

const ShowcasePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">

            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-xs font-medium text-white uppercase tracking-wider">Showcase</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-8">
                        Made with Nexus.
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed font-light">
                        Explore stunning applications and websites crafted by the community.
                    </p>
                </div>

                {/* Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHOWCASE_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-white/10 bg-black rounded-3xl overflow-hidden hover:bg-white hover:text-black hover:border-transparent transition-all duration-500 cursor-default"
                        >
                            {/* Image Container */}
                            <div className="aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/5 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                                    <a href={item.link} className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105">
                                        View Project <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-light tracking-tight mb-1 group-hover:font-normal">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 font-medium group-hover:text-zinc-500">by {item.author}</p>
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-2 min-h-[2.5em] group-hover:text-zinc-600">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="px-2.5 py-1 rounded-md border border-white/10 bg-zinc-900/50 text-[10px] uppercase tracking-wider font-medium text-zinc-400 group-hover:bg-zinc-200 group-hover:text-black group-hover:border-transparent transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Submission CTA */}
                <div className="mt-32">
                    <div className="border border-white/10 bg-zinc-900/10 rounded-[3rem] p-16 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl font-light text-white tracking-tight mb-6">Built something cool?</h2>
                            <p className="text-zinc-400 mb-10 text-lg font-light">
                                Submit your project to be featured in our showcase. We love seeing what you build.
                            </p>
                            <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
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
