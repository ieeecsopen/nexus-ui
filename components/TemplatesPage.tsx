
import React from 'react';
import { TEMPLATE_ITEMS } from '../data/templates';
import { TemplateItem } from '../types';
import { Search, ArrowUpRight, Zap, Box, Layers, Monitor, MoveRight } from 'lucide-react';

interface Props {
  onSelectTemplate: (item: TemplateItem) => void;
  onViewDemo: (item: TemplateItem) => void;
}

const CATEGORIES = [
  { name: 'Portfolios', icon: <Box size={20} />, color: 'bg-orange-500' },
  { name: 'Agencies', icon: <Layers size={20} />, color: 'bg-blue-500' },
  { name: 'SaaS', icon: <Zap size={20} />, color: 'bg-yellow-500' },
  { name: 'Landing Pages', icon: <Monitor size={20} />, color: 'bg-green-500' },
  { name: 'Ecommerce', icon: <Box size={20} />, color: 'bg-purple-500' },
];

const TemplatesPage: React.FC<Props> = ({ onSelectTemplate, onViewDemo }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">

        {/* HERO SECTION - Asymmetric & Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white mb-8 leading-[0.9]">
              Architect <br />
              <span className="text-zinc-500">your vision.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              A curated collection of interface kits designed for the modern web.
              Minimalist structure, maximalist impact.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            {/* Minimal Search */}
            <div className="border-b border-white/20 pb-4 group focus-within:border-white transition-colors">
              <div className="flex items-center gap-4">
                <Search className="text-zinc-500 group-focus-within:text-white transition-colors" size={24} />
                <input
                  type="text"
                  placeholder="Find your blueprint..."
                  className="bg-transparent border-none text-xl w-full text-white placeholder-zinc-600 focus:outline-none font-light"
                />
              </div>
            </div>

            {/* Quick Categories - Horizontal List */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {CATEGORIES.map((cat) => (
                <button key={cat.name} className="text-zinc-500 hover:text-white text-sm uppercase tracking-widest transition-colors">
                  {cat.name}
                </button>
              ))}
              <button className="text-zinc-500 hover:text-white text-sm uppercase tracking-widest transition-colors flex items-center gap-1">
                All <MoveRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* TEMPLATES DISPLAY - Editorial Grid */}
        <div className="space-y-40">

          {/* Featured / Large Item */}
          {TEMPLATE_ITEMS.slice(0, 1).map((item) => (
            <div key={item.id} className="group cursor-pointer" onClick={() => onSelectTemplate(item)}>
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-zinc-900 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                  <span className="text-white text-sm font-medium flex items-center gap-2">View Template <ArrowUpRight size={16} /></span>
                </div>
              </div>
              <div className="flex justify-between items-baseline border-t border-white/10 pt-6">
                <div>
                  <h2 className="text-4xl font-light text-white mb-2">{item.title}</h2>
                  <p className="text-zinc-500 max-w-xl">{item.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-light text-white">{item.price}</div>
                  <div className="text-sm text-zinc-600 uppercase tracking-widest">{item.tags[0]}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {TEMPLATE_ITEMS.slice(1).map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => onSelectTemplate(item)}>
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 mb-6 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-white group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                    <div className="flex gap-2">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-lg text-white font-light">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Minimal Footer CTA */}
        <div className="mt-40 border-t border-white/10 pt-20 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h3 className="text-5xl font-light text-white mb-6">Custom commission?</h3>
            <button className="text-xl text-zinc-400 hover:text-white border-b border-zinc-700 hover:border-white pb-1 transition-all">
              Get in touch
            </button>
          </div>
          <div className="mt-12 md:mt-0">
            <p className="text-zinc-600 max-w-xs text-sm">
              We collaborate with ambitious brands to build design systems that scale.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TemplatesPage;