import React, { useState, useMemo } from 'react';
import { ComponentItem } from '../types';
import { COMPONENT_ITEMS } from '../constants';
import { ArrowLeft, Check, Copy, ExternalLink, Zap, Layers, Play, Monitor, Code, Palette, Share2, Download, ArrowRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentPreview } from './Previews';

interface Props {
  item: ComponentItem;
  onBack: () => void;
  onSelectComponent?: (item: ComponentItem) => void;
}

const ComponentDetail: React.FC<Props> = ({ item, onBack, onSelectComponent }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isCopied, setIsCopied] = useState(false);

  // Logic to find similar components (same category, excluding current)
  const similarComponents = useMemo(() => {
    return COMPONENT_ITEMS.filter(
      (c) => c.category === item.category && c.id !== item.id
    ).slice(0, 4);
  }, [item]);

  const handleCopyCode = () => {
    if (item.fullCode) {
      navigator.clipboard.writeText(item.fullCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleSelectSimilar = (component: ComponentItem) => {
    if (onSelectComponent) {
      onSelectComponent(component);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Navigation */}
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-zinc-500 hover:text-white mb-12 transition-all duration-300"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-wide">Back to components</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT COLUMN - Preview & Content */}
          <div className="lg:col-span-8">

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">{item.title}</h1>
              <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">{item.description}</p>
            </div>

            {/* Preview Section */}
            <div className="border border-white/10 bg-zinc-900/10 rounded-none relative overflow-hidden group">
              {/* Controls */}
              <div className="absolute top-0 right-0 z-20 flex border-b border-l border-white/10 bg-black/50 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all ${activeTab === 'preview' ? 'text-white bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
                >
                  Preview
                </button>
                <div className="w-px bg-white/10" />
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all ${activeTab === 'code' ? 'text-white bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
                >
                  Code
                </button>
              </div>

              {/* Canvas */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] relative flex items-center justify-center">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-16">
                  {activeTab === 'preview' ? (
                    <div className="transform transition-all duration-500">
                      <ComponentPreview item={item} />
                    </div>
                  ) : (
                    <div className="w-full h-full overflow-auto custom-scrollbar bg-black/80 border border-white/10 p-6 text-left backdrop-blur-md">
                      <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                        <code>{item.fullCode}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-20 max-w-3xl space-y-16">
              <div>
                <h3 className="text-2xl font-light text-white mb-8 tracking-tight">About this Component</h3>
                <div className="prose prose-invert prose-lg text-zinc-400 font-light leading-loose space-y-6">
                  <p>{item.detailedDescription || item.description}</p>
                </div>
              </div>

              {item.features && (
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-8">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-zinc-400 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors flex-shrink-0" />
                        <span className="leading-relaxed"><strong className="text-zinc-200 font-medium">{feature.title}</strong>: {feature.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleCopyCode}
                  className="w-full py-4 bg-white text-black font-medium border border-transparent hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 tracking-wide"
                >
                  {isCopied ? <Check size={18} /> : <Copy size={18} />}
                  {isCopied ? 'Copied to Clipboard' : 'Copy Code'}
                </button>

                <div className="flex gap-4">
                  <button className="flex-1 py-3 text-zinc-400 border border-white/10 hover:text-white hover:border-white transition-all flex items-center justify-center gap-2 text-sm">
                    <Github size={16} /> Source
                  </button>
                  <button className="flex-1 py-3 text-zinc-400 border border-white/10 hover:text-white hover:border-white transition-all flex items-center justify-center gap-2 text-sm">
                    <Share2 size={16} /> Share
                  </button>
                </div>
              </div>

              {/* Meta Data */}
              <div className="border-t border-white/10 pt-8 space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(item.techStack || ['React', 'Tailwind', 'Framer Motion']).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-900 border border-white/5 text-zinc-300 text-xs tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* License & Updates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">License</h4>
                    <p className="text-white text-sm">MIT License</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Updated</h4>
                    <p className="text-white text-sm">{item.lastUpdated || 'Dec 2024'}</p>
                  </div>
                </div>
              </div>

              {/* Creator */}
              {item.creator && (
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Creator</h4>
                  <div className="flex items-center gap-4">
                    <img src={item.creator.avatar} alt={item.creator.name} className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
                    <div>
                      <p className="text-white font-medium">{item.creator.name}</p>
                      <p className="text-xs text-zinc-500">{item.creator.role}</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Similar Components - Real Data */}
        {similarComponents.length > 0 && (
          <div className="mt-32 pt-24 border-t border-white/5">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-light text-white mb-2 tracking-tight">Similar Components</h2>
                <p className="text-zinc-500 font-light">Explore other components in the <span className="text-white">{item.category}</span> category</p>
              </div>
              {/* <button className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
                    View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarComponents.map((comp) => (
                <div
                  key={comp.id}
                  className="group cursor-pointer"
                  onClick={() => handleSelectSimilar(comp)}
                >
                  <div className="aspect-video bg-zinc-900/30 border border-white/5 group-hover:border-white/20 transition-all duration-500 relative flex items-center justify-center overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px]" />
                    {/* Tiny Preview Logic if simple enough, otherwise icon */}
                    <div className="scale-50 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      <ComponentPreview item={comp} small />
                    </div>
                    <span className="absolute bottom-3 right-3 text-zinc-600 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1 group-hover:text-zinc-300 transition-colors">{comp.title}</h4>
                  <p className="text-zinc-600 text-xs truncate">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ComponentDetail;