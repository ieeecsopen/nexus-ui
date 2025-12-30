import React, { useState } from 'react';
import { COMPONENT_ITEMS } from '../constants';
import { ComponentItem } from '../types';
import ComponentCard from './ComponentCard';
import { SlidersHorizontal, ChevronDown, Check, X } from 'lucide-react';

interface Props {
  onSelectComponent: (item: ComponentItem) => void;
}

const ComponentGrid: React.FC<Props> = ({ onSelectComponent }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-20 pt-8" id="components">
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden animate-in fade-in"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        {/* Sticky Sidebar */}
        <aside className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-zinc-950 border-r border-white/10 p-6 shadow-2xl transition-transform duration-300 ease-in-out
            lg:static lg:w-64 lg:bg-transparent lg:border-none lg:p-0 lg:shadow-none lg:translate-x-0 lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)]
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="space-y-8 h-full overflow-y-auto lg:h-auto lg:overflow-visible pr-2 custom-scrollbar">
             {/* Header */}
             <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-white font-semibold flex items-center gap-2">
                   <SlidersHorizontal size={16} /> Filters
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 cursor-pointer hover:text-white">Reset</span>
                  <button 
                    className="lg:hidden text-zinc-400 hover:text-white p-1"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    <X size={20} />
                  </button>
                </div>
             </div>

             {/* Discover */}
             <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Discover</h4>
                <ul className="space-y-1">
                   <li><a href="#" className="block py-2 px-3 bg-zinc-900 rounded-lg text-white text-sm font-medium">All Components</a></li>
                   <li><a href="#" className="block py-2 px-3 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg text-sm transition-colors">New Arrivals</a></li>
                   <li><a href="#" className="block py-2 px-3 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg text-sm transition-colors">Popular</a></li>
                </ul>
             </div>

             {/* Categories */}
             <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Categories</h4>
                <div className="space-y-2">
                   {['Animation', 'Layout', 'Input', 'Navigation', 'Feedback'].map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                         <div className="w-4 h-4 rounded border border-zinc-700 bg-black flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                            {/* Checkbox state would go here */}
                         </div>
                         <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{cat}</span>
                      </label>
                   ))}
                </div>
             </div>

             {/* Price */}
             <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Pricing</h4>
                <div className="flex gap-2">
                   <button className="flex-1 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium border border-zinc-800 hover:border-zinc-600 transition-colors">Free</button>
                   <button className="flex-1 py-2 rounded-lg bg-transparent text-zinc-400 text-xs font-medium border border-zinc-800 hover:border-zinc-600 hover:text-white transition-colors">Pro</button>
                </div>
             </div>
          </div>
        </aside>

        {/* Bento Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-4">
                <button 
                   className="lg:hidden flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                   onClick={() => setIsFilterOpen(true)}
                >
                  <SlidersHorizontal size={16} /> Filters
                </button>
                <div className="text-sm text-zinc-500">Showing <span className="text-white font-medium">24</span> results</div>
             </div>
             
             <button className="flex items-center gap-2 text-sm text-white font-medium hover:text-indigo-400 transition-colors">
                Sort by: Recommended <ChevronDown size={14} />
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {COMPONENT_ITEMS.map((item) => (
              <ComponentCard 
                key={item.id} 
                item={item} 
                className={item.gridSpan || ''}
                onClick={() => onSelectComponent(item)}
              />
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <button className="w-full md:w-auto px-8 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white hover:bg-zinc-900 transition-all text-sm font-medium">
                Load more components
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentGrid;