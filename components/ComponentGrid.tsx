import React from 'react';
import { COMPONENT_ITEMS } from '../constants';
import { ComponentItem } from '../types';
import ComponentCard from './ComponentCard';
import { LayoutGrid, Box, Layers, MousePointer, Type, Square, Filter, X, ArrowRight } from 'lucide-react';

interface Props {
  onSelectComponent: (item: ComponentItem) => void;
}

const ComponentGrid: React.FC<Props> = ({ onSelectComponent }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = React.useState(false);

  // Filter components
  const filteredComponents = React.useMemo(() => {
    if (selectedCategory === 'All') return COMPONENT_ITEMS;
    return COMPONENT_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Derived counts
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    COMPONENT_ITEMS.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const sidebarLinks = [
    { name: 'All Components', count: COMPONENT_ITEMS.length, id: 'All' },
    { name: 'Accordions', count: categoryCounts['Accordions'] || 0 },
    { name: 'Alerts', count: categoryCounts['Alerts'] || 0 },
    { name: 'Avatars', count: categoryCounts['Avatars'] || 0 },
    { name: 'Badges', count: categoryCounts['Badges'] || 0 },
    { name: 'Buttons', count: categoryCounts['Buttons'] || 0 },
    { name: 'Breadcrumbs', count: categoryCounts['Breadcrumbs'] || 0 },
    { name: 'Cards', count: categoryCounts['Cards'] || 0 },
    { name: 'Checkboxes', count: categoryCounts['Checkboxes'] || 0 },
    { name: 'Dropdowns', count: categoryCounts['Dropdowns'] || 0 },
    { name: 'Footers', count: categoryCounts['Footers'] || 0 },
    { name: 'Input Groups', count: categoryCounts['Input Groups'] || 0 },
    { name: 'Layouts', count: categoryCounts['Layouts'] || 0 },
    { name: 'Modals', count: categoryCounts['Modals'] || 0 },
    { name: 'Navbars', count: categoryCounts['Navbars'] || 0 },
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === 'All Components' ? 'All' : category);
    setIsMobileFiltersOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 bg-black min-h-screen text-white" id="components">

      <div className="flex flex-col lg:flex-row gap-16">

        {/* Sticky Sidebar (Desktop) - Minimalist Redesign */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 space-y-12 custom-scrollbar">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-8">Categories</h4>
              <ul className="space-y-4 border-l border-zinc-800 ml-1">
                {sidebarLinks.map((link) => {
                  const isActive = selectedCategory === (link.name === 'All Components' ? 'All' : link.name);
                  return (
                    <li key={link.name} className="relative pl-6">
                      {/* Active Indicator Line */}
                      {isActive && (
                        <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-white transition-all duration-300" />
                      )}
                      <button
                        onClick={() => handleCategorySelect(link.name)}
                        className={`w-full text-left text-sm transition-all duration-300 flex items-center justify-between group ${isActive
                            ? 'text-white font-medium'
                            : 'text-zinc-500 hover:text-white'
                          }`}
                      >
                        <span className="tracking-wide">{link.name}</span>
                        <span className={`text-[10px] tabular-nums transition-opacity duration-300 ${isActive ? 'text-zinc-400 opacity-100' : 'text-zinc-600 opacity-0 group-hover:opacity-100'}`}>
                          {link.count}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="p-6 rounded-none border border-white/10 bg-zinc-900/20 backdrop-blur-sm">
              <p className="text-sm font-light text-zinc-400 mb-4 leading-relaxed">Missing a component?</p>
              <button className="text-sm font-medium text-white flex items-center gap-2 hover:gap-3 transition-all">
                Request it <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Drawer - Matched Aesthetic */}
        {isMobileFiltersOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] flex justify-end">
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
            <div className="relative w-[320px] h-full bg-black border-l border-white/10 p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-light text-white tracking-tight">Categories</h3>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded-full transition-colors border border-transparent hover:border-white/10"
                >
                  <X size={24} strokeWidth={1} />
                </button>
              </div>

              <div className="space-y-4 border-l border-zinc-800 ml-1">
                {sidebarLinks.map((link) => {
                  const isActive = selectedCategory === (link.name === 'All Components' ? 'All' : link.name);
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleCategorySelect(link.name)}
                      className={`w-full text-left pl-6 py-1 relative text-lg font-light transition-colors flex items-center justify-between ${isActive ? 'text-white font-normal' : 'text-zinc-500'}`}
                    >
                      {isActive && (
                        <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-white" />
                      )}
                      <span>{link.name}</span>
                      <span className={`text-xs ${isActive ? 'text-zinc-500' : 'text-zinc-700'}`}>{link.count}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header - Editorial Style */}
          <div className="mb-24 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-[0.85]">
              Nexus UI <br />
              <span className="text-zinc-600">Components.</span>
            </h1>
            <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Meticulously crafted, accessible, and performant. <br className="hidden md:block" />
              Ready for your next ambitious project.
            </p>

            {/* Inline Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-zinc-900/50 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide"
            >
              <Filter size={18} />
              Filter Components
            </button>
          </div>

          {/* Grid - Clean Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredComponents.map((item) => (
              <ComponentCard
                key={item.id}
                item={item}
                className=""
                onClick={() => onSelectComponent(item)}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-32 flex justify-center">
            {filteredComponents.length > 12 && (
              <button className="px-10 py-5 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 text-sm font-medium tracking-widest uppercase">
                Load more components
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentGrid;