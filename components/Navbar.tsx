import React, { useState } from 'react';
import { Menu, X, Command, Github } from 'lucide-react';
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-zinc-950/70 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50">

          {/* Logo Area */}
          <div
            className="flex items-center gap-3 cursor-pointer group mr-8"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-zinc-200 to-white rounded-full flex items-center justify-center text-black shadow-lg group-hover:scale-105 transition-transform">
              <Command size={14} strokeWidth={3} />
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block text-sm">Nexus UI</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${link.active
                    ? 'text-white bg-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
              <Github size={18} />
            </button>
            <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl pt-32 px-6 animate-in fade-in">
          <div className="flex flex-col gap-6 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.label)}
                className="text-2xl font-bold text-zinc-400 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;