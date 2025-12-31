import React, { useState } from 'react';
import { Book, Code, Zap, Package, Copy, Check, ChevronRight } from 'lucide-react';

const DocumentationPage: React.FC = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const sections = [
        { id: 'getting-started', label: 'Getting Started', icon: Zap },
        { id: 'installation', label: 'Installation', icon: Package },
        { id: 'usage', label: 'Usage', icon: Code },
        { id: 'components', label: 'Components', icon: Book },
    ];

    const codeExamples = [
        {
            title: 'Install via npm',
            code: 'npm install nexus-ui',
        },
        {
            title: 'Install via yarn',
            code: 'yarn add nexus-ui',
        },
        {
            title: 'Import component',
            code: `import { Button, Card, Modal } from 'nexus-ui';`,
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
                        <Book size={12} />
                        Documentation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get started with Nexus UI
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Learn how to install, configure, and use Nexus UI components in your React projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-1">
                        <nav className="sticky top-28 space-y-1">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group"
                                >
                                    <section.icon size={16} className="text-zinc-500 group-hover:text-indigo-400" />
                                    <span className="text-sm font-medium">{section.label}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3 space-y-16">
                        {/* Getting Started */}
                        <section id="getting-started">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Zap size={20} className="text-indigo-400" />
                                Getting Started
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    Nexus UI is a premium React component library built with Tailwind CSS and Framer Motion.
                                    It provides beautifully designed, accessible, and customizable components that you can
                                    copy and paste into your projects.
                                </p>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Quick Start</h3>
                                    <ol className="space-y-3 text-zinc-400">
                                        <li className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">1</span>
                                            <span>Install Nexus UI via npm or yarn</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">2</span>
                                            <span>Import the components you need</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">3</span>
                                            <span>Customize with your own styles and themes</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Installation */}
                        <section id="installation">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Package size={20} className="text-indigo-400" />
                                Installation
                            </h2>
                            <div className="space-y-4">
                                {codeExamples.slice(0, 2).map((example, index) => (
                                    <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                                            <span className="text-sm text-zinc-400">{example.title}</span>
                                            <button
                                                onClick={() => copyToClipboard(example.code, index)}
                                                className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                                            >
                                                {copiedIndex === index ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                        <pre className="p-4 text-sm text-zinc-300 overflow-x-auto">
                                            <code>{example.code}</code>
                                        </pre>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Usage */}
                        <section id="usage">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Code size={20} className="text-indigo-400" />
                                Usage
                            </h2>
                            <p className="text-zinc-400 mb-6">
                                Import and use components in your React application:
                            </p>
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                                    <span className="text-sm text-zinc-400">Basic Usage</span>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[2].code, 2)}
                                        className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                                    >
                                        {copiedIndex === 2 ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                    </button>
                                </div>
                                <pre className="p-4 text-sm text-zinc-300 overflow-x-auto">
                                    <code>{`import { Button, Card } from 'nexus-ui';

function App() {
  return (
    <Card className="p-6">
      <h2>Welcome to Nexus UI</h2>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  );
}`}</code>
                                </pre>
                            </div>
                        </section>

                        {/* Components Overview */}
                        <section id="components">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Book size={20} className="text-indigo-400" />
                                Components Overview
                            </h2>
                            <p className="text-zinc-400 mb-6">
                                Explore our collection of 50+ premium UI components:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: 'Buttons', count: 12 },
                                    { name: 'Cards', count: 8 },
                                    { name: 'Navigation', count: 6 },
                                    { name: 'Modals', count: 4 },
                                    { name: 'Forms', count: 10 },
                                    { name: 'Tables', count: 5 },
                                ].map((category) => (
                                    <div
                                        key={category.name}
                                        className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors cursor-pointer group"
                                    >
                                        <div>
                                            <h3 className="font-medium text-white">{category.name}</h3>
                                            <p className="text-sm text-zinc-500">{category.count} components</p>
                                        </div>
                                        <ChevronRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DocumentationPage;
