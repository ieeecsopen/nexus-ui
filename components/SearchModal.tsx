import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, Command, ArrowRight, File, Layout, X, CornerDownLeft } from 'lucide-react';
import { ComponentItem, TemplateItem } from '../types';
import { COMPONENT_ITEMS } from '../constants';
import { TEMPLATES } from '../data/templates';

type ViewType = 'home' | 'components' | 'templates' | 'showcase' | 'pricing' | 'about' | 'docs' | 'roadmap' | 'community' | 'help' | 'privacy' | 'terms' | 'license';

interface SearchResult {
    type: 'component' | 'template' | 'page';
    title: string;
    description?: string;
    id?: string;
    page?: ViewType;
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (page: ViewType) => void;
    onSelectComponent: (item: ComponentItem) => void;
    onSelectTemplate: (item: TemplateItem) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
    isOpen,
    onClose,
    onNavigate,
    onSelectComponent,
    onSelectTemplate,
}) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    const pages: SearchResult[] = [
        { type: 'page', title: 'Home', page: 'home' },
        { type: 'page', title: 'Components', description: 'Browse all UI components', page: 'components' },
        { type: 'page', title: 'Templates', description: 'Premium page templates', page: 'templates' },
        { type: 'page', title: 'Showcase', description: 'See what others built', page: 'showcase' },
        { type: 'page', title: 'Pricing', description: 'Plans and pricing', page: 'pricing' },
        { type: 'page', title: 'About', description: 'Learn about Nexus UI', page: 'about' },
        { type: 'page', title: 'Documentation', description: 'Getting started guide', page: 'docs' },
        { type: 'page', title: 'Roadmap', description: 'What\'s coming next', page: 'roadmap' },
        { type: 'page', title: 'Community', description: 'Join our community', page: 'community' },
        { type: 'page', title: 'Help Center', description: 'FAQ and support', page: 'help' },
        { type: 'page', title: 'Privacy Policy', page: 'privacy' },
        { type: 'page', title: 'Terms of Service', page: 'terms' },
        { type: 'page', title: 'License', description: 'Licensing options', page: 'license' },
    ];

    const results = useMemo(() => {
        if (!query.trim()) {
            // Show quick links when no query
            return pages.slice(0, 6);
        }

        const searchLower = query.toLowerCase();
        const matches: SearchResult[] = [];

        // Search components
        COMPONENT_ITEMS.forEach((item) => {
            if (
                item.title.toLowerCase().includes(searchLower) ||
                item.category.toLowerCase().includes(searchLower)
            ) {
                matches.push({
                    type: 'component',
                    title: item.title,
                    description: item.category,
                    id: item.id,
                });
            }
        });

        // Search templates
        TEMPLATES.forEach((item) => {
            if (
                item.title.toLowerCase().includes(searchLower) ||
                item.category.toLowerCase().includes(searchLower)
            ) {
                matches.push({
                    type: 'template',
                    title: item.title,
                    description: item.category,
                    id: item.id,
                });
            }
        });

        // Search pages
        pages.forEach((page) => {
            if (
                page.title.toLowerCase().includes(searchLower) ||
                page.description?.toLowerCase().includes(searchLower)
            ) {
                matches.push(page);
            }
        });

        return matches.slice(0, 10);
    }, [query]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        setQuery('');
        setSelectedIndex(0);
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter' && results[selectedIndex]) {
                e.preventDefault();
                handleSelect(results[selectedIndex]);
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, results, selectedIndex]);

    // Scroll selected item into view
    useEffect(() => {
        if (resultsRef.current) {
            const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [selectedIndex]);

    const handleSelect = (result: SearchResult) => {
        if (result.type === 'component') {
            const component = COMPONENT_ITEMS.find((c) => c.id === result.id);
            if (component) {
                onSelectComponent(component);
            }
        } else if (result.type === 'template') {
            const template = TEMPLATES.find((t) => t.id === result.id);
            if (template) {
                onSelectTemplate(template);
            }
        } else if (result.type === 'page' && result.page) {
            onNavigate(result.page);
        }
        onClose();
    };

    const getIcon = (type: SearchResult['type']) => {
        switch (type) {
            case 'component':
                return <Layout size={16} className="text-indigo-400" />;
            case 'template':
                return <File size={16} className="text-purple-400" />;
            case 'page':
                return <ArrowRight size={16} className="text-zinc-400" />;
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-x-4 top-[20%] z-50 mx-auto max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
                        <Search size={20} className="text-zinc-500" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search components, templates, pages..."
                            className="flex-1 bg-transparent text-white placeholder-zinc-500 focus:outline-none text-base"
                        />
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Results */}
                    <div ref={resultsRef} className="max-h-80 overflow-y-auto py-2">
                        {results.length === 0 ? (
                            <div className="px-4 py-8 text-center text-zinc-500">
                                No results found for "{query}"
                            </div>
                        ) : (
                            results.map((result, index) => (
                                <button
                                    key={`${result.type}-${result.id || result.title}`}
                                    onClick={() => handleSelect(result)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${index === selectedIndex
                                            ? 'bg-zinc-800'
                                            : 'hover:bg-zinc-800/50'
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                                        {getIcon(result.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-white font-medium truncate">{result.title}</div>
                                        {result.description && (
                                            <div className="text-sm text-zinc-500 truncate">{result.description}</div>
                                        )}
                                    </div>
                                    <div className="flex-shrink-0 text-xs text-zinc-600 capitalize">
                                        {result.type}
                                    </div>
                                </button>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-800 text-xs text-zinc-500">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">↑</kbd>
                                <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">↓</kbd>
                                to navigate
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 flex items-center">
                                    <CornerDownLeft size={10} />
                                </kbd>
                                to select
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">esc</kbd>
                            to close
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchModal;
