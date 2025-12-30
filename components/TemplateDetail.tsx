import React from 'react';
import { TemplateItem } from '../types';
import { ChevronLeft, Check, ExternalLink, Download, Layers, Shield, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  item: TemplateItem;
  onBack: () => void;
  onViewDemo: () => void;
}

const TemplateDetail: React.FC<Props> = ({ item, onBack, onViewDemo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      {/* Navigation */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
      >
        <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 bg-zinc-900">
          <ChevronLeft size={16} />
        </div>
        <span className="text-sm font-medium">Back to templates</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Left Column: Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-400 border border-zinc-800">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 font-walsheim leading-tight">
            {item.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-8">
            {item.description} This template is built with modern best practices, ensuring high performance, accessibility, and SEO optimization out of the box.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <span className="text-3xl font-medium text-white">{item.price}</span>
            <div className="h-8 w-px bg-zinc-800 mx-2"></div>
            <button
              onClick={onViewDemo}
              className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} /> Live Preview
            </button>
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-500/20">
              <Download size={18} /> Purchase Now
            </button>
          </div>

          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-white mb-6">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                  <div className="min-w-[20px] pt-0.5">
                    <Check size={16} className="text-emerald-500" />
                  </div>
                  {feature}
                </li>
              )) || (
                  <li className="text-zinc-500">No specific features listed.</li>
                )}
              {/* Add some generic features if list is short */}
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <div className="min-w-[20px] pt-0.5">
                  <Check size={16} className="text-emerald-500" />
                </div>
                Fully Responsive
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <div className="min-w-[20px] pt-0.5">
                  <Check size={16} className="text-emerald-500" />
                </div>
                Framer Motion Animations
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <div className="min-w-[20px] pt-0.5">
                  <Check size={16} className="text-emerald-500" />
                </div>
                Dark Mode Support
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Built With</h3>
            <div className="flex gap-4">
              {['React', 'Tailwind', 'Framer', 'TypeScript'].map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-sm font-medium text-zinc-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Preview Image */}
        <div className="relative">
          <div className="sticky top-32">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-[4/3] group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={onViewDemo}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:scale-105 transition-transform"
                >
                  View Live Demo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-zinc-900 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <Layers className="text-indigo-400" size={24} />
                <span className="text-sm font-medium text-white">12+ Pages</span>
                <span className="text-xs text-zinc-500">Included in package</span>
              </div>
              <div className="bg-zinc-900 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <Smartphone className="text-pink-400" size={24} />
                <span className="text-sm font-medium text-white">Responsive</span>
                <span className="text-xs text-zinc-500">Mobile ready</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default TemplateDetail;