import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { ChevronLeft, Check, Copy, ExternalLink, Zap, Layers, Play, Monitor, Code, Palette, Share2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentPreview } from './Previews';

interface Props {
  item: ComponentItem;
  onBack: () => void;
}

const ComponentDetail: React.FC<Props> = ({ item, onBack }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    if (item.fullCode) {
      navigator.clipboard.writeText(item.fullCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pt-8">
          {/* LEFT COLUMN - Preview */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-zinc-800 bg-[#050505] overflow-hidden relative aspect-[4/3] group">
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === 'preview' ? 'bg-white text-black' : 'bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-white/10'}`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === 'code' ? 'bg-white text-black' : 'bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-white/10'}`}
                >
                  Code
                </button>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background Gradient Blob */}
                <div className={`absolute w-[500px] h-[500px] bg-gradient-to-tr ${item.imageGradient || 'from-zinc-800 to-zinc-900'} opacity-20 blur-[120px] rounded-full pointer-events-none`}></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                  {activeTab === 'preview' ? (
                    <div className="scale-100 transition-transform duration-500">
                      <ComponentPreview item={item} />
                    </div>
                  ) : (
                    <div className="w-full h-full overflow-auto custom-scrollbar bg-black/50 rounded-2xl border border-white/5 p-6 text-left backdrop-blur-sm">
                      <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                        <code>{item.fullCode}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Description (Moved below preview for mobile, or keep here for flow) */}
            <div className="mt-16 max-w-3xl space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">About this component</h3>
                <div className="prose prose-invert prose-lg text-zinc-400 leading-relaxed">
                  {item.detailedDescription || item.description}
                </div>
              </div>

              {item.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {item.features.map((feature, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium mb-6">
                <span>Marketplace</span>
                <span className="text-zinc-700">/</span>
                <span>Components</span>
              </div>

              {/* Title & Desc */}
              <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">{item.title}</h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                {item.description}
              </p>

              {/* Primary Action */}
              <button
                onClick={handleCopyCode}
                className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mb-12 shadow-xl shadow-white/5"
              >
                {isCopied ? 'Copied to Clipboard' : 'Copy Component'}
              </button>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-20 border-t border-zinc-900 pt-8">
                {/* Creator */}
                <div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
                  <img
                    src={item.creator?.avatar || 'https://github.com/shadcn.png'}
                    alt="Creator"
                    className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 group-hover:border-zinc-600 transition-colors"
                  />
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">{item.creator?.name || 'Nexus Team'}</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">Creator</div>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 border border-zinc-800">
                    <Layers size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">5mo ago</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">Updated</div>
                  </div>
                </div>

                {/* Installs */}
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 border border-zinc-800">
                    <Download size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">5.9K</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">Installs</div>
                  </div>
                </div>
              </div>

              {/* Promo Card */}
              <div className="bg-[#0A0A0A] border border-zinc-900 rounded-xl p-4 flex gap-4 items-center group cursor-pointer hover:border-zinc-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white border border-zinc-800">
                  <Zap size={20} className="text-white" fill="currentColor" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Make it with Nexus</div>
                  <div className="text-xs text-zinc-500">Build your own component with AI</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-16 relative rounded-3xl overflow-hidden text-center py-20 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
          <div className="relative z-10 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Become a Framer Creator today</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
              Sell products, make referrals, and build your earnings with the Nexus UI Creator component marketplace.
            </p>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Start Selling
            </button>
          </div>

          {/* Decorative Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default ComponentDetail;