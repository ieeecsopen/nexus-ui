import React from 'react';
import { TemplateItem } from '../types';
import { ArrowLeft, ArrowUpRight, Check, Layers, Smartphone, Globe, Cpu, Palette, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { TEMPLATE_ITEMS } from '../data/templates';

interface Props {
  item: TemplateItem;
  onBack: () => void;
  onViewDemo: () => void;
  onSelectTemplate: (item: TemplateItem) => void;
}

const TemplateDetail: React.FC<Props> = ({ item, onBack, onViewDemo, onSelectTemplate }) => {
  // Get recommended items (excluding current)
  const recommended = TEMPLATE_ITEMS.filter(t => t.id !== item.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">

      <div className="max-w-[1400px] mx-auto px-6 pt-12 pb-24 relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Left Column: Visuals (Scrolling) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Desktop Preview */}
            <div className="bg-[#111] rounded-3xl p-8 border border-white/5 overflow-hidden relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
              <img
                src={item.image}
                alt="Desktop View"
                className="w-full h-auto rounded-lg shadow-2xl relative z-10"
              />
            </div>

            {/* Mobile Preview */}
            <div className="bg-[#111] rounded-3xl p-12 border border-white/5 overflow-hidden relative flex justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-[#111]/0 to-[#111]/0" />
              <div className="relative z-10 w-[300px] border-[8px] border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl bg-black">
                <img
                  src={item.image}
                  alt="Mobile View"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Features / Components Preview */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-[#111] rounded-3xl p-8 border border-white/5 h-64 flex items-end">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-zinc-500 font-medium">Unique Components</div>
                </div>
              </div>
              <div className="bg-[#111] rounded-3xl p-8 border border-white/5 h-64 flex items-end">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-zinc-500 font-medium">Responsive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">

              {/* Price Tag */}
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#1A1A1A] border border-white/5 text-zinc-300 text-sm font-bold mb-6">
                  {item.price === 'Free' ? '$0.00' : item.price}
                </span>

                <h1 className="text-4xl font-medium text-white mb-2 tracking-tight">
                  {item.title}
                </h1>
                <p className="text-zinc-500 text-lg">
                  Company Landing Page
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={onViewDemo}
                  className="w-full py-4 rounded-full bg-[#1A1A1A] border border-white/5 text-white font-medium hover:bg-[#222] transition-colors flex items-center justify-center gap-2 group"
                >
                  Live Preview <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                </button>
                <button className="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                  Buy Now - {item.price === 'Free' ? '$0.00' : item.price}
                </button>
              </div>

              <div className="h-px bg-white/10 my-8" />

              {/* Use Case */}
              <div>
                <h3 className="text-white font-medium mb-4">Use Case</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 text-sm font-medium hover:border-white/10 cursor-default transition-colors">
                      {tag}
                    </span>
                  ))}
                  <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 text-sm font-medium">
                    Agency
                  </span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-white font-medium mb-4">Features</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 text-sm font-medium">
                    13 Sections
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 text-sm font-medium">
                    21 Components
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 text-sm font-medium">
                    SEO & Page Speed Optimized
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* RECOMMENDED SECTION */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold text-white mb-12">Recommended Templates for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommended.map((item, index) => {
              // Mock badges matching recommendation
              let badgeText = null;
              let badgeColor = '';
              if (index === 0) { badgeText = 'New'; badgeColor = 'bg-green-500/20 text-green-400 border-green-500/20'; }
              if (index === 1) { badgeText = 'Best'; badgeColor = 'bg-blue-500/20 text-blue-400 border-blue-500/20'; }

              return (
                <div key={item.id} className="group cursor-pointer flex flex-col gap-4" onClick={() => onSelectTemplate(item)}>
                  <div className="aspect-[4/5] w-full rounded-[32px] overflow-hidden relative bg-zinc-900/50 border border-white/5 outline outline-1 outline-transparent group-hover:outline-white/10 transition-all duration-500">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                      <button onClick={(e) => { e.stopPropagation(); onSelectTemplate(item); }} className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-transform hover:scale-105">View Details</button>
                      <button onClick={(e) => { e.stopPropagation(); onViewDemo(item); }} className="p-2.5 rounded-full bg-black/50 text-white border border-white/20 hover:bg-black/70 transition-transform hover:scale-105 backdrop-blur-md">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 px-1">
                    <div className="flex justify-between items-start mb-1.5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-[22px] font-bold text-white tracking-tight">{item.title}</h3>
                        {badgeText && (
                          <span className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${badgeColor}`}>{badgeText}</span>
                        )}
                      </div>
                      <span className="text-base font-medium text-white bg-[#1A1A1A] border border-white/5 px-4 py-1.5 rounded-full">{item.price}</span>
                    </div>
                    <p className="text-zinc-500 text-base font-medium">{item.tags[0]} Landing Page</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="relative rounded-[40px] overflow-hidden bg-zinc-900/50 border border-white/5 min-h-[400px] flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

          <div className="relative z-10 p-12 md:p-24 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium mb-8 backdrop-blur-sm">
              Custom Project
            </span>
            <h2 className="text-5xl md:text-6xl font-medium text-white mb-6">Build Your Website from Scratch</h2>
            <p className="text-xl text-zinc-400 font-medium mb-10 max-w-xl">
              Create a unique and tailored website with our expert team from the ground up.
            </p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 group">
              Check Our Agency <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TemplateDetail;