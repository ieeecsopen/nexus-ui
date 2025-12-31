import React, { useState, useEffect } from 'react';
import { Search, Github, ArrowRight, Sparkles, Command, ArrowUpRight, Zap, Layers, Box } from 'lucide-react';
import { SOCIAL_LINKS, ViewType } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  onOpenSearch?: () => void;
  onNavigate?: (page: ViewType) => void;
}

const Hero: React.FC<Props> = ({ onOpenSearch, onNavigate }) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-20 bg-black selection:bg-indigo-500/30 overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column: Typography & Search */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 mb-12"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              v2.0 is now live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[7rem] font-light tracking-tighter text-white leading-[0.9] mb-12"
            >
              Ship faster.<br />
              <span className="text-zinc-500">Look better.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-zinc-400 font-light max-w-xl mb-16 leading-relaxed"
            >
              A premium collection of high-performance, accessible components.
              Copy, paste, and ship your next breakthrough.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <div
                onClick={onOpenSearch}
                className="group relative w-full max-w-md h-16 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center px-6 cursor-pointer transition-all duration-300"
              >
                <Search className="text-zinc-500 group-hover:text-white transition-colors mr-4" size={24} />
                <span className="text-zinc-500 text-lg font-light group-hover:text-zinc-300 transition-colors">Search anything...</span>
                <div className="ml-auto hidden md:flex items-center gap-2">
                  <kbd className="h-8 px-3 rounded-lg bg-black/40 border border-white/10 text-xs text-zinc-500 font-mono flex items-center justify-center">⌘K</kbd>
                </div>
              </div>

              <button
                onClick={() => onNavigate?.('components')}
                className="h-16 px-8 rounded-2xl bg-white text-black font-medium text-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 shrink-0"
              >
                Browse Library <ArrowRight size={20} />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Bento Grid of Glass Cards */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 auto-rows-[180px]">

              {/* Card 1: Components Count (Tall) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="row-span-2 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Box size={24} />
                </div>
                <div>
                  <div className="text-6xl font-light text-white mb-2 tracking-tighter">500+</div>
                  <div className="text-zinc-500 font-medium uppercase tracking-widest text-sm">Components</div>
                </div>
              </motion.div>

              {/* Card 2: Templates (Square) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={() => onNavigate?.('templates')}
                className="rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between cursor-pointer hover:bg-white/5 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/20">
                    <Layers size={20} />
                  </div>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-1">Templates</div>
                  <div className="text-zinc-500 text-sm">Full layouts ready to ship</div>
                </div>
              </motion.div>

              {/* Card 3: GitHub (Square) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between group hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 text-white flex items-center justify-center border border-white/10">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-1">Open Source</div>
                  <div className="text-zinc-500 text-sm">Join the revolution</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>

      {/* Decorative Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>

    </div>
  );
};

export default Hero;