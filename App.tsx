import React, { useState, useEffect } from 'react';
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
import SearchModal from './components/SearchModal';
import DocumentationPage from './components/DocumentationPage';
import RoadmapPage from './components/RoadmapPage';
import CommunityPage from './components/CommunityPage';
import HelpCenterPage from './components/HelpCenterPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import LicensePage from './components/LicensePage';
import { StatsSection, TagsSection, CommunityGridSection } from './components/LandingSections';
import { FeaturesSection, CTASection } from './components/MoreSections';
import { ComponentItem, TemplateItem } from './types';
import { COMPONENT_ITEMS } from './constants';
import { ArrowRight } from 'lucide-react';

export type ViewType = 'home' | 'components' | 'templates' | 'showcase' | 'pricing' | 'about' | 'docs' | 'roadmap' | 'community' | 'help' | 'privacy' | 'terms' | 'license';

function App() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [isTemplateDemoMode, setIsTemplateDemoMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [view, setView] = useState<ViewType>('home');

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const handleNavigate = (page: ViewType) => {
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
      <Navbar onNavigate={handleNavigate} onOpenSearch={() => setIsSearchOpen(true)} currentView={view} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectComponent={handleSelectComponent}
        onSelectTemplate={handleSelectTemplate}
      />

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
          <React.Fragment>
            {view === 'home' && (
              <div className="animate-in fade-in duration-500">
                <Hero onOpenSearch={() => setIsSearchOpen(true)} onNavigate={handleNavigate} />
                <StatsSection />
                <TagsSection />
                <CommunityGridSection />

                {/* Features Section */}
                <FeaturesSection />

                {/* Decorative Separator */}
                <div className="max-w-7xl mx-auto px-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                </div>

                {/* Featured Components Section */}
                <div className="max-w-7xl mx-auto px-6 py-24">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">Featured Components</h2>
                      <p className="text-zinc-400 max-w-lg text-lg font-light">Hand-picked premium components to help you build modern interfaces in minutes.</p>
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

                {/* CTA Section */}
                <CTASection />
              </div>
            )}

            {view === 'components' && (
              <div className="pt-24 min-h-screen animate-in fade-in duration-500 slide-in-from-bottom-4">
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

            {view === 'docs' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <DocumentationPage />
              </div>
            )}

            {view === 'roadmap' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <RoadmapPage />
              </div>
            )}

            {view === 'community' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <CommunityPage />
              </div>
            )}

            {view === 'help' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <HelpCenterPage />
              </div>
            )}

            {view === 'privacy' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <PrivacyPolicyPage />
              </div>
            )}

            {view === 'terms' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <TermsOfServicePage />
              </div>
            )}

            {view === 'license' && (
              <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
                <LicensePage />
              </div>
            )}
          </React.Fragment>
        )}
      </main>

      {!isTemplateDemoMode && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;