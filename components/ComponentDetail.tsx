import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { ChevronLeft, Check, Copy, ExternalLink, Zap, Layers, Play, Monitor, Code, Palette, Share2, Download, ArrowRight } from 'lucide-react';
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
                <h3 className="text-2xl font-bold text-white mb-6">About this Component</h3>
                <div className="prose prose-invert prose-lg text-zinc-400 leading-relaxed space-y-4">
                  <p>{item.detailedDescription || item.description}</p>
                </div>

                {item.features && (
                  <div className="mt-8">
                    <h4 className="text-lg text-zinc-400 font-medium mb-4">Features:</h4>
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 flex-shrink-0"></span>
                          <span>{feature.title}: {feature.description}</span>
                        </li>
                      ))}
                      {item.perfectFor && item.perfectFor.map((pf, idx) => (
                        <li key={`pf-${idx}`} className="flex items-start gap-3 text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 flex-shrink-0"></span>
                          <span>{pf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-zinc-500 leading-relaxed mt-8">
                  Perfect for landing pages, hero banners, portfolios, and interactive UI elements.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Action Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                {/* Quick Info */}
                <div className="mb-6">
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <button
                    onClick={handleCopyCode}
                    className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mb-3"
                  >
                    {isCopied ? <Check size={18} /> : <Copy size={18} />}
                    {isCopied ? 'Copied!' : 'Copy Component'}
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 border border-zinc-700">
                      <Share2 size={16} /> Share
                    </button>
                    <button className="flex-1 py-2.5 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2 border border-zinc-700">
                      <Code size={16} /> Source
                    </button>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Built With</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack?.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-black border border-zinc-800 text-xs text-zinc-300 font-medium">
                        {tech}
                      </span>
                    )) || (
                        <>
                          <span className="px-2.5 py-1 rounded-md bg-black border border-zinc-800 text-xs text-zinc-300 font-medium">React</span>
                          <span className="px-2.5 py-1 rounded-md bg-black border border-zinc-800 text-xs text-zinc-300 font-medium">Tailwind</span>
                        </>
                      )}
                  </div>
                </div>

                {/* Creator Info */}
                {item.creator && (
                  <div className="border-t border-zinc-800 pt-6 mt-6">
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Created By</h4>
                    <div className="flex items-center gap-3 group cursor-pointer">
                      <img
                        src={item.creator.avatar}
                        alt={item.creator.name}
                        className="w-10 h-10 rounded-full border border-zinc-800"
                      />
                      <div>
                        <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">{item.creator.name}</div>
                        <div className="text-xs text-zinc-500">{item.creator.role}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Meta Info */}
                <div className="border-t border-zinc-800 pt-6 mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">License</span>
                    <span className="text-zinc-300 font-medium">MIT</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Last Updated</span>
                    <span className="text-zinc-300 font-medium">{item.lastUpdated || 'November 2024'}</span>
                  </div>
                </div>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="text-sm font-bold text-white mb-4">Support</h4>
                <ul className="space-y-4">
                  <li>
                    <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group">
                      <Zap size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                      About Components
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group">
                      <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                      Refund Policy
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group">
                      <Share2 size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
                      Contact Creator
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group">
                      <span className="text-zinc-500 text-lg leading-none">⚐</span>
                      Report Component
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        {/* CTA Section */}
        {/* <div className="mt-32 mb-16 relative rounded-3xl overflow-hidden text-center py-20 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
          <div className="relative z-10 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Become a Framer Creator today</h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
              Sell products, make referrals, and build your earnings with the Nexus UI Creator component marketplace.
            </p>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Start Selling
            </button>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        </div> */}

        {/* SUGGESTED COMPONENTS SECTION */}
        <div className="mt-32 space-y-24 pb-24">
          {/* Section 1: More from Creator */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">More from {item.creator?.name || 'Nexus Team'}</h3>
              <button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                See All <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden relative mb-4 group-hover:border-zinc-700 transition-colors">
                    <div className={`absolute inset-0 bg-gradient-to-br ${i === 1 ? 'from-purple-900/50 to-blue-900/30' :
                        i === 2 ? 'from-emerald-900/50 to-teal-900/30' :
                          i === 3 ? 'from-orange-900/50 to-red-900/30' :
                            'from-pink-900/50 to-rose-900/30'
                      }`}></div>
                    {/* Mock UI Elements */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      {i % 2 === 0 ? (
                        <div className="grid grid-cols-2 gap-2 w-full opacity-50">
                          <div className="h-8 bg-zinc-700/50 rounded-md"></div>
                          <div className="h-8 bg-zinc-700/50 rounded-md"></div>
                          <div className="h-8 bg-zinc-700/50 rounded-md"></div>
                          <div className="h-8 bg-zinc-700/50 rounded-md"></div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-zinc-700/50 flex items-center justify-center">
                          <Zap size={24} className="text-white/20" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1 group-hover:text-indigo-400 transition-colors">
                      {i === 1 ? 'reCAPTCHA v2' : i === 2 ? 'DualTone Icons' : i === 3 ? 'File Types' : 'ProductViewer360'}
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      {i % 2 === 0 ? 'Vector Set · Free' : 'Component · $3'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: More Components */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">More Components</h3>
              <button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                See All <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[5, 6, 7, 8].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden relative mb-4 group-hover:border-zinc-700 transition-colors">
                    <div className={`absolute inset-0 bg-gradient-to-br ${i === 5 ? 'from-indigo-900/50 to-purple-900/30' :
                        i === 6 ? 'from-blue-900/50 to-cyan-900/30' :
                          i === 7 ? 'from-green-900/50 to-lime-900/30' :
                            'from-yellow-900/50 to-orange-900/30'
                      }`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-zinc-600 font-mono text-xs tracking-widest uppercase">Preview</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1 group-hover:text-indigo-400 transition-colors">
                      {i === 5 ? 'Scramble Text Cycle' : i === 6 ? 'Forex Rate Card' : i === 7 ? 'Live Stock Chart' : 'FormFieldsValidation'}
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      {i === 5 ? '$4' : i === 6 ? '$6' : i === 7 ? '$6' : '$10'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentDetail;