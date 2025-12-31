import React, { useState } from 'react';
import { Book, Code, Zap, Package, Copy, Check, ChevronRight, Layout } from 'lucide-react';

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
        <div className="min-h-screen pt-24 pb-16 bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6">
                        <Book size={12} />
                        Documentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                        Get started with Nexus UI
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Learn how to install, configure, and use Nexus UI components in your React projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-1">
                        <nav className="sticky top-28 space-y-2 border-l border-zinc-800 lg:border-l-0 lg:border-r pl-6 lg:pl-0 lg:pr-6">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all group"
                                >
                                    <section.icon size={16} className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                                    <span className="text-sm font-medium">{section.label}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3 space-y-20">
                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
                                    <Zap size={18} />
                                </span>
                                Getting Started
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                    Nexus UI is a premium React component library built with Tailwind CSS and Framer Motion.
                                    It provides beautifully designed, accessible, and customizable components that you can
                                    copy and paste into your projects.
                                </p>
                                <div className="bg-black/50 border border-zinc-800 rounded-xl p-8 backdrop-blur-sm">
                                    <h3 className="text-lg font-medium text-white mb-6">Quick Start Checklist</h3>
                                    <ol className="space-y-4">
                                        {[
                                            'Install Nexus UI via npm or yarn',
                                            'Import the components you need',
                                            'Customize with your own styles and themes'
                                        ].map((step, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold flex items-center justify-center border border-indigo-500/20">
                                                    {i + 1}
                                                </span>
                                                <span className="text-zinc-300">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Installation */}
                        <section id="installation" className="scroll-mt-28">
                            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
                                    <Package size={18} />
                                </span>
                                Installation
                            </h2>
                            <div className="space-y-6">
                                {codeExamples.slice(0, 2).map((example, index) => (
                                    <div key={index} className="group bg-black/50 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:border-zinc-700">
                                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
                                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{example.title}</span>
                                            <button
                                                onClick={() => copyToClipboard(example.code, index)}
                                                className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                {copiedIndex === index ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                        <div className="p-4 overflow-x-auto">
                                            <code className="text-sm text-zinc-300 font-mono">{example.code}</code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Usage */}
                        <section id="usage" className="scroll-mt-28">
                            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
                                    <Code size={18} />
                                </span>
                                Usage
                            </h2>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Import and use components in your React application. Components are designed to be composable and easy to integrate.
                            </p>
                            <div className="group bg-black/50 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:border-zinc-700">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
                                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Basic Usage</span>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[2].code, 2)}
                                        className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        {copiedIndex === 2 ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                    </button>
                                </div>
                                <div className="p-4 overflow-x-auto">
                                    <pre className="text-zinc-300 font-mono text-sm leading-relaxed">
                                        <code>{`import { Button, Card } from 'nexus-ui';

function App() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Welcome to Nexus UI</h2>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  );
}`}</code>
                                    </pre>
                                </div>
                            </div>
                        </section>

                        {/* Components Overview */}
                        <section id="components" className="scroll-mt-28">
                            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
                                    <Book size={18} />
                                </span>
                                Components Overview
                            </h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                Explore our collection of 50+ premium UI components categorized for easy access.
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
                                        className="flex items-center justify-between p-5 bg-black/50 border border-zinc-800 rounded-xl hover:border-zinc-600 hover:bg-zinc-900/50 transition-all cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                                                <Layout size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">{category.name}</h3>
                                                <p className="text-xs text-zinc-500">{category.count} components</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-zinc-700 group-hover:text-white transition-colors" />
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
