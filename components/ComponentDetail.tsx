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

  // Logic to find similar components
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
    <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">

      <div className="max-w-[1400px] mx-auto px-6 pt-12 pb-24 relative z-10">
        {/* Navigation */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to components
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">

          {/* LEFT COLUMN - Preview & Content */}
          <div className="lg:col-span-8 space-y-8">

            {/* Preview Section */}
            <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 relative group">
              {/* Controls - Refined */}
              <div className="flex items-center justify-between border-b border-white/5 bg-[#0A0A0A] px-4 py-3">
                <div className="flex items-center gap-2 bg-zinc-900/50 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'preview'
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'code'
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                  >
                    Code
                  </button>
                </div>

                {/* Tech Badges */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <span className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="w-full relative min-h-[500px] flex items-center justify-center bg-[#050505]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-12">
                  {activeTab === 'preview' ? (
                    <div className="w-full flex justify-center transform transition-all duration-500">
                      <ComponentPreview item={item} />
                    </div>
                  ) : (
                    <div className="w-full h-[500px] overflow-auto custom-scrollbar bg-black/50 border border-white/5 rounded-xl p-6 text-left">
                      <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                        <code>{item.fullCode}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-16 max-w-3xl space-y-12">
              <div>
                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">About this Component</h3>
                <div className="prose prose-invert prose-lg text-zinc-400 font-normal leading-loose">
                  <p>{item.detailedDescription || item.description}</p>
                </div>
              </div>

              {item.features && (
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-widest mb-6">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-zinc-400 group p-4 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors flex-shrink-0" />
                        <span className="leading-relaxed text-sm"><strong className="text-zinc-200 font-medium">{feature.title}</strong>: {feature.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">

              {/* Header Info */}
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#1A1A1A] border border-white/5 text-zinc-300 text-sm font-medium mb-6">
                  {item.category}
                </span>
                <h1 className="text-4xl font-medium text-white mb-2 tracking-tight">
                  {item.title}
                </h1>
                <p className="text-zinc-500 text-lg">
                  React Component
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleCopyCode}
                  className="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  {isCopied ? <Check size={18} /> : <Copy size={18} />}
                  {isCopied ? 'Copied!' : 'Copy Code'}
                </button>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 font-medium hover:text-white hover:bg-[#222] transition-colors flex items-center justify-center gap-2 text-sm">
                    <Github size={16} /> Source
                  </button>
                  <button className="flex-1 py-3 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 font-medium hover:text-white hover:bg-[#222] transition-colors flex items-center justify-center gap-2 text-sm">
                    <Share2 size={16} /> Share
                  </button>
                </div>
              </div>

              <div className="h-px bg-white/10 my-6" />

              {/* Tech Stack */}
              <div>
                <h4 className="text-white font-medium mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {(item.techStack || ['React', 'Tailwind', 'Framer Motion']).map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 text-zinc-400 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-zinc-500 text-sm mb-1">License</h4>
                  <p className="text-white font-medium">MIT</p>
                </div>
                <div>
                  <h4 className="text-zinc-500 text-sm mb-1">Updated</h4>
                  <p className="text-white font-medium">{item.lastUpdated || 'Dec 2024'}</p>
                </div>
              </div>

              {/* Creator */}
              {item.creator && (
                <div className="bg-[#111] p-4 rounded-2xl border border-white/5 flex items-center gap-4 mt-4">
                  <img src={item.creator.avatar} alt={item.creator.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-white text-sm font-medium">{item.creator.name}</p>
                    <p className="text-zinc-500 text-xs">{item.creator.role}</p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Similar Components Section */}
        {similarComponents.length > 0 && (
          <div className="mb-32">
            <h2 className="text-2xl font-medium text-white mb-12">More from {item.category}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarComponents.map((comp) => (
                <div
                  key={comp.id}
                  className="group cursor-pointer flex flex-col gap-4"
                  onClick={() => handleSelectSimilar(comp)}
                >
                  <div className="aspect-[4/3] w-full rounded-[24px] overflow-hidden relative bg-zinc-900/50 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                    {/* Abstract Preview */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="scale-75 opacity-50 group-hover:scale-90 group-hover:opacity-100 transition-all duration-500">
                        <ComponentPreview item={comp} small />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        View Component
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors">{comp.title}</h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 mt-1">{comp.description}</p>
                  </div>
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