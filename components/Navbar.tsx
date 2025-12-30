import React, { useState } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface Props {
  onNavigate: (view: 'home' | 'components' | 'templates' | 'showcase' | 'pricing' | 'about') => void;
}

const Navbar: React.FC<Props> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    if (label === 'Components') {
      onNavigate('components');
    } else if (label === 'Templates') {
      onNavigate('templates');
    } else if (label === 'Showcase') {
      onNavigate('showcase');
    } else if (label === 'Pricing') {
      onNavigate('pricing');
    } else if (label === 'About') {
      onNavigate('about');
    } else if (label === 'Home') {
      onNavigate('home');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Capsule Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50">
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 pl-4 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-105 transition-transform">
               <Command size={16} strokeWidth={3} />
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block">Nexus</span>
          </div>

          {/* Desktop Links - Pill Segment */}
          <div className="hidden md:flex items-center bg-black/50 rounded-full p-1 border border-white/5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  link.active 
                    ? 'bg-zinc-800 text-white shadow-sm border border-white/10' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-2">
            <button className="hidden sm:block text-zinc-400 hover:text-white px-4 text-sm font-medium transition-colors">
              Log in
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
              Get Access
            </button>
            <button 
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-32 px-6 backdrop-blur-sm animate-in fade-in">
           <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label)}
                className="text-2xl font-semibold text-zinc-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="w-full h-px bg-zinc-800 my-4"></div>
            <a href="#" className="text-xl text-zinc-400">Log in</a>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;