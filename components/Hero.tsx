import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const TypewriterInput = () => {
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
      className="w-full bg-transparent border-none py-2 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-0 text-base"
    />
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-black flex flex-col items-center overflow-hidden border-b border-white/[0.08]">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none select-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8 hover:border-zinc-700 transition-colors">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Nexus UI v2.0
          </div>

          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            Build your <br />
            component library.
          </h1>

          <p className="text-xl text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="h-11 px-8 rounded-md bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors w-full sm:w-auto">
              Get Started
            </button>
            <button className="h-11 px-8 rounded-md bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:bg-zinc-800 transition-colors w-full sm:w-auto">
              GitHub
            </button>
          </div>

          {/* Cmd+K Search Trigger */}
          <div className="max-w-md mx-auto relative group">
            <div className="relative bg-black border border-zinc-800 rounded-xl flex items-center p-3 transition-all group-hover:border-zinc-700 shadow-sm">
              <Search className="ml-2 text-zinc-500" size={18} />
              <div className="ml-3 flex-1 flex items-center">
                <TypewriterInput />
              </div>
              <div className="hidden md:flex gap-1 text-[10px] font-medium text-zinc-500 bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 items-center">
                <span className="text-xs">⌘</span> K
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;