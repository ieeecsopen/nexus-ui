import React, { useState } from 'react';
import { Search, ArrowUpRight, Command, Layout, Box, Sparkles, MoveRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden selection:bg-white selection:text-black flex flex-col items-center justify-center pt-32 pb-20">

      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Version Badge - Solid, No Glow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-zinc-900/50 mb-8"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-white"></span>
          <span className="text-xs font-medium text-white uppercase tracking-wider">v2.0 Released</span>
        </motion.div>

        {/* Main Heading - Stark White */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-7xl md:text-9xl font-light tracking-tighter text-white mb-8 leading-[0.85]"
        >
          Ship <br className="md:hidden" />
          <span className="md:whitespace-nowrap">faster. </span>
          <span className="text-zinc-500 block md:inline transition-colors duration-500 hover:text-zinc-400">Look better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12"
        >
          A premium component library for the next generation of web applications.
          Meticulously crafted, accessible, and performant.
        </motion.p>

        {/* Search Bar - Solid Border Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`w-full max-w-lg border-b transition-colors duration-300 mb-24 ${isSearchFocused ? 'border-white' : 'border-white/20'
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
            <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs text-zinc-400 font-mono">
              <Command size={10} />
              <span>K</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Row - High Contrast Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >

          {/* Card 1: Components Count - Invert on Hover */}
          <div className="bg-black border border-white/15 p-8 group cursor-pointer rounded-3xl flex flex-col items-center text-center md:items-start md:text-left hover:bg-white hover:text-black transition-all duration-500">
            <div className="mb-4 text-zinc-500 group-hover:text-black transition-colors">
              <Box size={32} />
            </div>
            <div>
              <div className="text-4xl font-light mb-1">500+</div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-600 uppercase tracking-widest">Components</div>
            </div>
          </div>

          {/* Card 2: Templates - Invert on Hover */}
          <div className="bg-black border border-white/15 p-8 group cursor-pointer rounded-3xl flex flex-col items-center text-center md:items-start md:text-left hover:bg-white hover:text-black transition-all duration-500">
            <div className="mb-4 text-zinc-500 group-hover:text-black transition-colors">
              <Layout size={32} />
            </div>
            <div>
              <div className="text-4xl font-light mb-1">20+</div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-600 uppercase tracking-widest">Templates</div>
            </div>
          </div>

          {/* Card 3: Open Source - Invert on Hover */}
          <div className="bg-black border border-white/15 p-8 group cursor-pointer rounded-3xl flex flex-col items-center text-center md:items-start md:text-left hover:bg-white hover:text-black transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={20} className="-rotate-45" />
            </div>
            <div className="mb-4 text-zinc-500 group-hover:text-black transition-colors">
              <Sparkles size={32} />
            </div>
            <div>
              <div className="text-xl font-light mb-1">Open Source</div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-600 uppercase tracking-widest">MIT License</div>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Hero;