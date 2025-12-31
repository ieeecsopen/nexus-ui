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
        <div className="min-h-screen pt-32 pb-20 bg-black text-white selection:bg-white selection:text-black">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header - Stark & Clean */}
                <div className="mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-xs font-medium text-white uppercase tracking-wider">Documentation</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-8">
                        Get started.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                        Learn how to install, configure, and use Nexus UI components.
                        Built for speed and precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-3">
                        <nav className="sticky top-32 space-y-1">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-500 hover:text-white transition-colors group border border-transparent hover:border-white/10"
                                >
                                    <section.icon size={16} className="group-hover:text-white transition-colors" />
                                    <span className="text-sm font-medium tracking-wide">{section.label}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9 space-y-32">
                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-32">
                            <h2 className="text-3xl font-light tracking-tight text-white mb-8 border-b border-white/10 pb-4">
                                Getting Started
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg text-zinc-400 leading-relaxed mb-12 font-light">
                                    Nexus UI is a premium React component library built with Tailwind CSS.
                                    It provides beautifully designed, accessible, and customizable components that you can
                                    copy and paste into your projects.
                                </p>
                                <div className="border border-white/15 p-8 rounded-3xl">
                                    <h3 className="text-lg font-medium text-white mb-8">Quick Start</h3>
                                    <ol className="space-y-6">
                                        {[
                                            'Install Nexus UI via npm or yarn',
                                            'Import the components you need',
                                            'Customize with your own styles'
                                        ].map((step, i) => (
                                            <li key={i} className="flex items-center gap-6 group">
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-800 text-zinc-500 text-sm font-mono flex items-center justify-center group-hover:border-white group-hover:text-white transition-colors">
                                                    0{i + 1}
                                                </span>
                                                <span className="text-zinc-300 font-light text-lg group-hover:text-white transition-colors">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Installation */}
                        <section id="installation" className="scroll-mt-32">
                            <h2 className="text-3xl font-light tracking-tight text-white mb-8 border-b border-white/10 pb-4">
                                Installation
                            </h2>
                            <div className="space-y-6">
                                {codeExamples.slice(0, 2).map((example, index) => (
                                    <div key={index} className="group border border-white/10 rounded-xl overflow-hidden transition-all hover:border-white/30">
                                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/20">
                                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">{example.title}</span>
                                            <button
                                                onClick={() => copyToClipboard(example.code, index)}
                                                className="p-2 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                {copiedIndex === index ? <Check size={14} className="text-white" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                        <div className="p-6 overflow-x-auto bg-black">
                                            <code className="text-sm text-zinc-300 font-mono tracking-wide">{example.code}</code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Usage */}
                        <section id="usage" className="scroll-mt-32">
                            <h2 className="text-3xl font-light tracking-tight text-white mb-8 border-b border-white/10 pb-4">
                                Usage
                            </h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed font-light">
                                Import and use components in your React application. Components are designed to be composable.
                            </p>
                            <div className="group border border-white/10 rounded-xl overflow-hidden transition-all hover:border-white/30">
                                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/20">
                                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Basic Usage</span>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[2].code, 2)}
                                        className="p-2 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        {copiedIndex === 2 ? <Check size={14} className="text-white" /> : <Copy size={14} />}
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto bg-black">
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
                        <section id="components" className="scroll-mt-32">
                            <h2 className="text-3xl font-light tracking-tight text-white mb-8 border-b border-white/10 pb-4">
                                Components
                            </h2>
                            <p className="text-zinc-400 mb-12 leading-relaxed font-light">
                                Explore our collection of 50+ premium UI components.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        className="flex items-center justify-between p-8 border border-white/15 rounded-3xl cursor-pointer group bg-black hover:bg-white hover:text-black transition-all duration-500"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-black/10 group-hover:text-black transition-colors">
                                                <Layout size={20} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-light mb-1">{category.name}</h3>
                                                <p className="text-sm text-zinc-500 group-hover:text-zinc-500">{category.count} items</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={20} className="text-zinc-700 group-hover:text-black transition-colors" />
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
