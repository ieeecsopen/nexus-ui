import React from 'react';
import { COMPONENT_ITEMS } from '../constants';
import { ComponentItem } from '../types';
import ComponentCard from './ComponentCard';
import { LayoutGrid, Box, Layers, MousePointer, Type, Square } from 'lucide-react';

interface Props {
  onSelectComponent: (item: ComponentItem) => void;
}

const ComponentGrid: React.FC<Props> = ({ onSelectComponent }) => {
  // Group categories for sidebar (Mocking a cleaner list based on typical UI libs)
  const sidebarLinks = [
    { name: 'Accordions', count: 6 },
    { name: 'Alerts', count: 35 },
    { name: 'Avatars', count: 12 },
    { name: 'Badges', count: 12 },
    { name: 'Buttons', count: 132 },
    { name: 'Breadcrumbs', count: 6 },
    { name: 'Cards', count: 13 },
    { name: 'Checkboxes', count: 6 },
    { name: 'Dropdowns', count: 8 },
    { name: 'Footers', count: 12, new: true },
    { name: 'Input Groups', count: 18 },
    { name: 'Layouts', count: 4 },
    { name: 'Modals', count: 12 },
    { name: 'Navbars', count: 8, new: true },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12" id="components">

      <div className="flex flex-col lg:flex-row gap-16">

        {/* Sticky Sidebar - WindUI Style */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 space-y-8 custom-scrollbar">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-6 px-3">Components</h4>
              <ul className="space-y-1">
                {sidebarLinks.map((link) => (
                  <li key={link.name}>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors flex items-center justify-between group">
                      <span>{link.name}</span>
                      {link.new ? (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded uppercase">New</span>
                      ) : (
                        // <span className="text-[10px] text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">{link.count}</span>
                        null
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-400 mb-3">Can't find what you're looking for?</p>
              <button className="text-xs font-bold text-white flex items-center gap-1 hover:text-indigo-400 transition-colors">
                Request a Component <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Nexus UI Components</h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Explore the whole collection of responsive, accessible components built with React and Tailwind ready to be used on your website or app.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPONENT_ITEMS.map((item) => (
              <ComponentCard
                key={item.id}
                item={item}
                className=""
                onClick={() => onSelectComponent(item)}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-20 flex justify-center">
            <button className="px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all text-sm font-medium text-white shadow-xl">
              Load more components
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper for sidebar icon (not used currently but good for future)
// const ArrowRight = ({size}:{size:number}) => (
//    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
// );
import { ArrowRight } from 'lucide-react';

export default ComponentGrid;