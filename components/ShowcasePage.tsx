import React from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { SHOWCASE_ITEMS } from '../data/showcase';
import { motion } from 'framer-motion';

const ShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 pt-48 pb-20 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
             <Layers size={12} />
             <span>Made with Nexus</span>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9] font-walsheim">
             Built by the <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Community.</span>
           </h1>
           
           <p className="text-lg md:text-xl text-zinc-500 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
             Explore stunning applications and websites crafted by developers using Nexus UI components.
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
                    className="group flex flex-col bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all hover:translate-y-[-4px]"
                >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-50"></div>
                        
                        <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                             <a href={item.link} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shadow-lg">
                                <ExternalLink size={18} />
                             </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-xl font-bold text-white font-walsheim">{item.title}</h3>
                                <p className="text-xs text-zinc-500 font-medium mt-1">by {item.author}</p>
                            </div>
                        </div>
                        
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                            {item.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="px-2.5 py-1 rounded-md bg-zinc-950 border border-white/5 text-[10px] font-medium text-zinc-400 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Submission CTA */}
        <div className="mt-32 border-t border-white/10 pt-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-zinc-900 p-12 rounded-3xl border border-white/5">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Built something cool?</h2>
                    <p className="text-zinc-400 text-lg">
                        Submit your project to be featured in our showcase. We love seeing what you build with Nexus UI.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2">
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
