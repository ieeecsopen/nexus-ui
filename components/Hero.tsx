import React, { useState, useEffect } from 'react';
import { Search, Github, ArrowRight, Sparkles, Command } from 'lucide-react';
import { SOCIAL_LINKS, ViewType } from '../constants';
import { motion } from 'framer-motion';

interface Props {
  onOpenSearch?: () => void;
  onNavigate?: (page: ViewType) => void;
}

const TypewriterInput: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const placeholders = [
    "Search components...",
    "Search animations...",
    "Search templates...",
    "Search buttons...",
    "Search navbars..."
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = placeholders[currentIndex];

      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setCurrentPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % placeholders.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <input
      type="text"
      placeholder={currentPlaceholder}
      onClick={onClick}
      readOnly
      className="w-full bg-transparent border-none py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-0 text-lg cursor-pointer font-medium"
    />
  );
};

const Hero: React.FC<Props> = ({ onOpenSearch, onNavigate }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-black selection:bg-indigo-500/30">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Spotlight / Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none opacity-30"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md text-sm font-medium text-zinc-300 mb-8 hover:bg-zinc-900/80 hover:border-indigo-500/30 transition-all cursor-default shadow-lg shadow-indigo-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Nexus UI v2.0 is now live
          <ArrowRight size={14} className="ml-1 text-zinc-500" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-white relative z-20"
        >
          Build components <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-gradient-x bg-[length:200%_auto]">
            super fast.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Beautifully designed, accessible components. <br className="hidden md:block" />
          Copy and paste into your apps. Open Source.
        </motion.p>

        {/* Search Bar - Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto mb-16 relative z-30 group"
          onClick={onOpenSearch}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>
          <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center p-2 pl-4 transition-all group-hover:bg-zinc-900/90 group-hover:border-white/20 shadow-2xl">
            <Search className="text-zinc-400" size={24} />
            <div className="flex-1">
              <TypewriterInput onClick={onOpenSearch} />
            </div>
            <div className="hidden md:flex gap-2 items-center pr-3">
              <kbd className="hidden md:inline-flex h-6 items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-2 font-mono text-[10px] font-medium text-zinc-400 opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </motion.div>

        {/* Secondary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => onNavigate?.('components')}
            className="group h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Browse Components
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 rounded-full bg-black border border-zinc-800 text-zinc-300 font-semibold text-sm hover:text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all flex items-center gap-2"
          >
            <Github size={18} />
            Star on GitHub
          </a>
        </motion.div>

      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;