import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComponentGrid from './components/ComponentGrid';
import ComponentDetail from './components/ComponentDetail';
import ComponentCard from './components/ComponentCard';
import TemplatesPage from './components/TemplatesPage';
import TemplateDetail from './components/TemplateDetail';
import TemplateDemo from './components/TemplateDemo';
import ShowcasePage from './components/ShowcasePage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import { StatsSection, TagsSection, CommunityGridSection } from './components/LandingSections';
import { ComponentItem, TemplateItem } from './types';
import { COMPONENT_ITEMS } from './constants';
import { ArrowRight } from 'lucide-react';

function App() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [isTemplateDemoMode, setIsTemplateDemoMode] = useState(false);
  
  const [view, setView] = useState<'home' | 'components' | 'templates' | 'showcase' | 'pricing' | 'about'>('home');

  const handleSelectComponent = (item: ComponentItem) => {
    setSelectedComponent(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedComponent(null);
    setSelectedTemplate(null);
    setIsTemplateDemoMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'components' | 'templates' | 'showcase' | 'pricing' | 'about') => {
    setView(page);
    setSelectedComponent(null);
    setSelectedTemplate(null);
    setIsTemplateDemoMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTemplate = (item: TemplateItem) => {
    setSelectedTemplate(item);
    setIsTemplateDemoMode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewTemplateDemo = (item: TemplateItem) => {
    setSelectedTemplate(item);
    setIsTemplateDemoMode(true);
  };

  // If in demo mode, render just the demo component (on top of everything)
  if (isTemplateDemoMode && selectedTemplate) {
    return <TemplateDemo item={selectedTemplate} onClose={() => setIsTemplateDemoMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        
        {/* VIEW: COMPONENT DETAIL */}
        {selectedComponent && (
          <ComponentDetail 
            item={selectedComponent} 
            onBack={handleBack} 
          />
        )}

        {/* VIEW: TEMPLATE DETAIL */}
        {!selectedComponent && selectedTemplate && (
          <TemplateDetail 
            item={selectedTemplate} 
            onBack={handleBack} 
            onViewDemo={() => setIsTemplateDemoMode(true)}
          />
        )}

        {/* VIEW: LISTINGS */}
        {!selectedComponent && !selectedTemplate && (
          <React.Fragment> {/* Replaced motion.div with Fragment to avoid huge diff, using AnimatePresence in internal components might be cleaner but trying to stick to request */}
              {view === 'home' && (
                <div className="animate-in fade-in duration-500">
                  <Hero />
                  <StatsSection />
                  <TagsSection />
                  <CommunityGridSection />
                  {/* Decorative Separator */}
                  <div className="max-w-7xl mx-auto px-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                  </div>
                  
                  {/* Featured Components Section */}
                  <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                      <div>
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Components</h2>
                         <p className="text-zinc-400 max-w-lg">Hand-picked premium components to help you build modern interfaces in minutes.</p>
                      </div>
                      <button 
                        onClick={() => handleNavigate('components')}
                        className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                      >
                        View all components <ArrowRight size={16} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {COMPONENT_ITEMS.slice(0, 6).map((item) => (
                            <ComponentCard 
                               key={item.id} 
                               item={item} 
                               onClick={() => handleSelectComponent(item)}
                            />
                        ))}
                    </div>

                    {/* Mobile View All Button */}
                    <div className="mt-12 flex md:hidden justify-center">
                      <button 
                         onClick={() => handleNavigate('components')}
                         className="w-full py-4 rounded-xl border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 transition-all text-sm font-medium flex items-center justify-center gap-2"
                      >
                          View all components <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Call to Action Section */}
                  <div className="py-32 relative overflow-hidden">
                     <div className="absolute inset-0 bg-indigo-950/20"></div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
                     
                     <div className="max-w-4xl mx-auto px-6 relative text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to ship faster?</h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                           Join thousands of developers building the future of the web with Nexus UI. Start free and upgrade as you grow.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                           <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                              Get Started for Free
                           </button>
                           <button className="px-8 py-3 rounded-full bg-black border border-zinc-800 text-white font-semibold hover:bg-zinc-900 transition-colors w-full sm:w-auto">
                              View Documentation
                           </button>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {view === 'components' && (
                <div className="pt-24 min-h-screen animate-in fade-in duration-500 slide-in-from-bottom-4">
                   <div className="max-w-[1400px] mx-auto px-6 mb-8">
                      <h1 className="text-4xl font-bold text-white mb-4">All Components</h1>
                      <p className="text-zinc-400">Browse our complete collection of UI elements.</p>
                   </div>
                   <ComponentGrid onSelectComponent={handleSelectComponent} />
                </div>
              )}

              {view === 'templates' && (
                <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                  <TemplatesPage 
                    onSelectTemplate={handleSelectTemplate}
                    onViewDemo={handleViewTemplateDemo}
                  />
                </div>
              )}

              {view === 'showcase' && (
                <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                  <ShowcasePage />
                </div>
              )}

              {view === 'pricing' && (
                <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                  <PricingPage />
                </div>
              )}

              {view === 'about' && (
                <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                  <AboutPage />
                </div>
              )}
          </React.Fragment>
        )}
      </main>
      
      {!isTemplateDemoMode && <Footer />}
    </div>
  );
}

export default App;