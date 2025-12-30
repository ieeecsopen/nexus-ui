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
    <div className="relative pt-48 pb-20 bg-black flex flex-col items-center overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            v2.0 is now live
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9] font-walsheim">
            Build better,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">ship faster.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-xl mx-auto font-normal leading-relaxed">
            The ultimate collection of copy-paste components for your next React project.
          </p>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center p-2 transition-all group-hover:border-zinc-700">
              <Search className="ml-3 text-zinc-500" size={20} />
              {/* Typewriter Input */}
              <TypewriterInput />

              <div className="hidden md:flex gap-2 text-[10px] font-mono text-zinc-600 border-l border-zinc-800 pl-3">
                <span className="px-1.5 py-1 rounded bg-zinc-800">⌘</span>
                <span className="px-1.5 py-1 rounded bg-zinc-800">K</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;