import React from 'react';
import { TemplateItem } from '../types';
import { ArrowLeft, ArrowUpRight, Check, Layers, Smartphone, Globe, Cpu, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  item: TemplateItem;
  onBack: () => void;
  onViewDemo: () => void;
}

const TemplateDetail: React.FC<Props> = ({ item, onBack, onViewDemo }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">

      {/* Scroll Progress / Decorative Line */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-white/5 z-50">
        <motion.div
          className="w-full bg-white origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-12 pb-24 relative z-10 pl-12 md:pl-24">

        {/* Navigation */}
        <button
          onClick={onBack}
          className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-colors uppercase tracking-widest text-xs mb-24"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Typography & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex gap-4 mb-8">
                {item.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full uppercase tracking-wider">
                    {0}{i + 1} — {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-6xl md:text-8xl font-light text-white mb-12 leading-[0.9] -ml-1">
                {item.title}
              </h1>

              <div className="flex items-baseline gap-8 mb-16 border-t border-white/10 pt-8">
                <div className="text-4xl font-light text-white">{item.price}</div>
                <div className="text-sm text-zinc-500 max-w-[200px]">
                  One-time payment. Lifetime access. Unlimited updates.
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-xl text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
                <p className="text-zinc-500 font-light max-w-md">
                  Engineered for performance and accessibility. This template provides a robust foundation for your next digital product.
                </p>
              </div>
            </div>

            <div className="mt-20 lg:mt-0 space-y-4">
              <button
                onClick={onViewDemo}
                className="w-full py-6 bg-white text-black text-lg font-light hover:bg-zinc-200 transition-colors flex items-center justify-between px-8 group rounded-sm"
              >
                <span>Live Preview</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="w-full py-6 bg-transparent border border-white/20 text-white text-lg font-light hover:bg-white/5 transition-colors flex items-center justify-between px-8 group rounded-sm">
                <span>Purchase License</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Secure Checkout</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="lg:col-span-7 space-y-24">

            {/* Main Image */}
            <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>

            {/* Minimal Specs Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 border-t border-white/10 pt-12">
              <div>
                <h3 className="text-sm text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2"><Cpu size={14} /> Stack</h3>
                <ul className="space-y-2">
                  <li className="text-white font-light text-lg">React 18</li>
                  <li className="text-white font-light text-lg">TypeScript</li>
                  <li className="text-white font-light text-lg">Tailwind CSS</li>
                  <li className="text-white font-light text-lg">Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2"><Layers size={14} /> Structure</h3>
                <ul className="space-y-2">
                  <li className="text-white font-light text-lg">Atomic Components</li>
                  <li className="text-white font-light text-lg">Global Theming</li>
                  <li className="text-white font-light text-lg">Responsive Layouts</li>
                </ul>
              </div>
              <div className="col-span-2">
                <h3 className="text-sm text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2"><Palette size={14} /> Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.features?.map((feature, i) => (
                    <div key={i} className="flex items-baseline gap-4 border-b border-white/5 pb-4">
                      <span className="text-xs text-zinc-600 font-mono">0{i + 1}</span>
                      <span className="text-white font-light">{feature}</span>
                    </div>
                  )) || (
                      <span className="text-zinc-500">Standard standard features included.</span>
                    )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TemplateDetail;