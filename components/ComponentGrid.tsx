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
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12" id="components">

      <div className="flex flex-col lg:flex-row gap-16">

        {/* Sticky Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 space-y-8 custom-scrollbar">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-6 px-3">Components</h4>
              <ul className="space-y-1">
                {sidebarLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleCategorySelect(link.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group ${selectedCategory === (link.name === 'All Components' ? 'All' : link.name) ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                    >
                      <span>{link.name}</span>
                      <span className="text-[10px] text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">{link.count}</span>
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

        {/* Mobile Filter Button */}
        <div className="lg:hidden fixed bottom-6 right-6 z-[100]">
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium shadow-2xl hover:bg-zinc-200 transition-colors"
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        {isMobileFiltersOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in"
              onClick={() => setIsMobileFiltersOpen(false)}
            />

            {/* Drawer Content */}
            <div className="relative w-[300px] h-full bg-zinc-950 border-l border-white/10 p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-light text-white">Categories</h3>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-1">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleCategorySelect(link.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors flex items-center justify-between ${selectedCategory === (link.name === 'All Components' ? 'All' : link.name) ? 'bg-white text-black' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <span>{link.name}</span>
                    <span className={`text-[10px] ${selectedCategory === (link.name === 'All Components' ? 'All' : link.name) ? 'text-zinc-500' : 'text-zinc-600'}`}>{link.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Nexus UI Components</h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto lg:mx-0">
              Explore the whole collection of responsive, accessible components built with React and Tailwind ready to be used on your website or app.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="mt-20 flex justify-center">
            {filteredComponents.length > 12 && (
              <button className="px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all text-sm font-medium text-white shadow-xl">
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