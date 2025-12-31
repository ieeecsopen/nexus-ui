import React, { useState } from 'react';
import { Search, ArrowUpRight, Command, Layout, Box, Sparkles, MoveRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden selection:bg-white/20 flex flex-col items-center justify-center pt-32 pb-20">

      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">



        <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-white mb-8 leading-[0.85]">
          Ship <br className="md:hidden" />
          <span className="md:whitespace-nowrap">faster. </span>
          <span className="text-zinc-600 block md:inline">Look better.</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
          A premium component library for the next generation of web applications.
          Meticulously crafted, accessible, and performant.
        </p>

        {/* Minimal Search Bar - Centered */}
        <div
          className={`w-full max-w-lg border-b transition-colors duration-300 mb-16 ${isSearchFocused ? 'border-white' : 'border-white/20'
            }`}
        >
          <div className="flex items-center gap-4 py-4">
            <Search
              className={`transition-colors duration-300 ${isSearchFocused ? 'text-white' : 'text-zinc-500'
                }`}
              size={24}
            />
            <input
              type="text"
              placeholder="Search components..."
              className="bg-transparent border-none text-xl w-full text-white placeholder-zinc-600 focus:outline-none font-light text-center md:text-left"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs text-zinc-500 font-mono">
              <Command size={10} />
              <span>K</span>
            </div>
          </div>
        </div>

        {/* Centered Bento Grid / Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

          {/* Card 1: Components Count */}
          <div className="bg-zinc-900/20 border border-white/10 p-8 hover:border-white/20 transition-all group cursor-pointer rounded-3xl flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 text-zinc-500 group-hover:text-white transition-colors">
              <Box size={32} />
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-1">500+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest">Components</div>
            </div>
          </div>

          {/* Card 2: Templates */}
          <div className="bg-zinc-900/20 border border-white/10 p-8 hover:bg-white hover:text-black transition-all group cursor-pointer rounded-3xl flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 text-zinc-500 group-hover:text-black transition-colors">
              <Layout size={32} />
            </div>
            <div>
              <div className="text-4xl font-light mb-1">20+</div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-600 uppercase tracking-widest">Templates</div>
            </div>
          </div>

          {/* Card 3: Open Source */}
          <div className="bg-zinc-900/20 border border-white/10 p-8 hover:border-white/20 transition-all group cursor-pointer rounded-3xl flex flex-col items-center text-center md:items-start md:text-left relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={20} className="-rotate-45" />
            </div>
            <div className="mb-4 text-zinc-500 group-hover:text-yellow-400 transition-colors">
              <Sparkles size={32} />
            </div>
            <div>
              <div className="text-xl font-light text-white mb-1">Open Source</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest">MIT License</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;