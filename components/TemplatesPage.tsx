import React from 'react';
import { TEMPLATE_ITEMS } from '../data/templates';
import { TemplateItem } from '../types';
import TemplateCard from './TemplateCard';
import { Sparkles, Search } from 'lucide-react';

interface Props {
  onSelectTemplate: (item: TemplateItem) => void;
  onViewDemo: (item: TemplateItem) => void;
}

const TemplatesPage: React.FC<Props> = ({ onSelectTemplate, onViewDemo }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Gradients - Monochrome */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 pt-48 pb-20 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
             <Sparkles size={12} />
             <span>Premium Collection</span>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9] font-walsheim">
             Production-ready <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Templates.</span>
           </h1>
           
           <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-xl mx-auto font-normal leading-relaxed">
             Jumpstart your next project with our professionally designed templates. Built with React, Tailwind CSS, and Framer Motion.
           </p>

           {/* Search Input - Monochrome Glow */}
           <div className="max-w-xl mx-auto relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
             <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center p-2 transition-all group-hover:border-zinc-700">
               <Search className="ml-3 text-zinc-500" size={20} />
               <input 
                 type="text" 
                 placeholder="Search templates..."
                 className="w-full bg-transparent border-none py-2 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-0 text-base"
               />
             </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEMPLATE_ITEMS.map((item) => (
                <TemplateCard 
                    key={item.id} 
                    item={item} 
                    onViewDetails={() => onSelectTemplate(item)}
                    onViewDemo={() => onViewDemo(item)}
                />
            ))}
        </div>

        {/* CTA - Monochrome */}
        <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Need a custom design?</h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                    We offer custom design and development services for high-growth startups and enterprises.
                </p>
                <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                    Contact Sales
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TemplatesPage;