import React from 'react';
import { TEMPLATE_ITEMS } from '../data/templates';
import { TemplateItem } from '../types';
import TemplateCard from './TemplateCard';
import { Search, ChevronDown, Filter, LayoutGrid, Zap, PenTool, Globe, ShoppingBag } from 'lucide-react';

interface Props {
  onSelectTemplate: (item: TemplateItem) => void;
  onViewDemo: (item: TemplateItem) => void;
}

const CATEGORIES = [
  {
    name: 'Business',
    count: '2.9K',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    color: 'from-zinc-800 to-zinc-900'
  },
  {
    name: 'Creative',
    count: '1.6K',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop',
    color: 'from-lime-400 to-lime-600' // Matches the 'Lucas Miller' yellow/lime vibe
  },
  {
    name: 'Community',
    count: '208',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Style',
    count: '2.1K',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Free',
    count: '1.3K',
    image: 'https://images.unsplash.com/photo-1499750310159-5254f3615481?q=80&w=2535&auto=format&fit=crop',
    color: 'from-rose-400 to-orange-400'
  }
];

const TemplatesPage: React.FC<Props> = ({ onSelectTemplate, onViewDemo }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">

      <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-24 relative z-10">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Website templates for designers,<br />businesses, and personal use
          </h1>
          <p className="text-zinc-400 text-lg mb-10">
            Build a beautiful site with templates<br />for portfolios, businesses, and more.
          </p>

          {/* Search Bar - Centered & Pill Shaped */}
          <div className="max-w-md mx-auto relative group">
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-full flex items-center px-4 py-2.5 transition-all group-hover:border-zinc-700">
              <Search className="text-zinc-500 mr-3" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-none text-white placeholder-zinc-500 focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Categories</h2>
            <button className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              See All <span className="text-lg leading-none">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="group cursor-pointer">
                {/* Main Card Image */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2 relative border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-20 mix-blend-overlay z-10`} />
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Mock "sub-thumbnails" at bottom */}
                  <div className="absolute bottom-2 left-2 right-2 flex gap-2 z-20">
                    <div className="h-10 w-16 bg-black/40 backdrop-blur-md rounded-md border border-white/10 overflow-hidden">
                      <div className="w-full h-full bg-white/10"></div>
                    </div>
                    <div className="h-10 w-16 bg-black/40 backdrop-blur-md rounded-md border border-white/10 overflow-hidden">
                      <div className="w-full h-full bg-white/10"></div>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                  <p className="text-xs text-zinc-500">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 sticky top-20 bg-black/80 backdrop-blur-xl py-4 z-40 border-b border-white/5 md:border-none">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {['Pricing', 'Styles', 'Features'].map((filter) => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors whitespace-nowrap">
                {filter} <ChevronDown size={14} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <div className="flex bg-zinc-900 rounded-full p-1 border border-zinc-800">
              <button className="px-4 py-1.5 rounded-full bg-zinc-800 text-white text-xs font-medium shadow-sm">Popular</button>
              <button className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white text-xs font-medium">Last Week</button>
            </div>
          </div>
        </div>

        {/* Templates Grid - Using TemplateCard but maybe need adjustments to match exact style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {TEMPLATE_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 relative mb-3 group-hover:border-zinc-700 transition-colors">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay Button (Optional, mimics the 'preview' feel) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    onClick={() => onSelectTemplate(item)}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-bold text-white leading-tight mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-xs text-zinc-500">{item.price === 'Free' ? 'Free' : 'Pro'}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate items to fill grid for demo */}
          {TEMPLATE_ITEMS.map((item) => (
            <div key={`${item.id}-dup`} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 relative mb-3 group-hover:border-zinc-700 transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button
                    onClick={() => onSelectTemplate(item)}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-bold text-white leading-tight mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-xs text-zinc-500">Business</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TemplatesPage;