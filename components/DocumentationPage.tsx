import React, { useState } from 'react';
import { Book, Code, Zap, Package, Copy, Check, ChevronRight, Layout, Box, Layers, MousePointer, Shield } from 'lucide-react';

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
            code: 'npm install nexus-kit',
        },
        {
            title: 'Install via yarn',
            code: 'yarn add nexus-kit',
        },
        {
            title: 'Import component',
            code: `import { Button, Card, Modal } from 'nexus-kit';`,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">

            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Header */}
                <div className="mb-24 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">Documentation</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.9]">
                        Build faster with <br /> <span className="text-zinc-500">precision tools.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
                        Everything you need to build top-notch interfaces. Accessible, customizable, and open source.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-3 hidden lg:block">
                        <nav className="sticky top-32 space-y-2">
                            <h5 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 px-4">Contents</h5>
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all group"
                                >
                                    <section.icon size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    <span className="text-sm font-medium">{section.label}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-9 space-y-32">
                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
                                <Zap className="text-yellow-500" /> Getting Started
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                                    Nexus Kit is designed to be plug-and-play. We've handled the hard parts—accessibility, responsiveness, and dark mode—so you can focus on building unique experiences.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Install', desc: 'Add package to your project', icon: Package },
                                        { title: 'Import', desc: 'Use components anywhere', icon: Code },
                                        { title: 'Customize', desc: 'Style with Tailwind CSS', icon: Palette }
                                    ].map((step, i) => (
                                        <div key={i} className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#111] transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors mb-4">
                                                {/* @ts-ignore */}
                                                <step.icon size={20} />
                                            </div>
                                            <h3 className="text-white font-bold mb-2">{step.title}</h3>
                                            <p className="text-zinc-500 text-sm">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Installation */}
                        <section id="installation" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
                                <Package className="text-blue-500" /> Installation
                            </h2>
                            <div className="space-y-6">
                                {codeExamples.slice(0, 2).map((example, index) => (
                                    <div key={index} className="group border border-white/10 rounded-2xl overflow-hidden bg-[#050505]">
                                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                                <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                                <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                                <span className="ml-4 text-xs font-mono text-zinc-500">{example.title}</span>
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(example.code, index)}
                                                className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                {copiedIndex === index ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                        <div className="p-6 overflow-x-auto">
                                            <code className="text-sm text-zinc-300 font-mono tracking-wide flex items-center gap-2">
                                                <span className="text-pink-500">$</span> {example.code}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Usage */}
                        <section id="usage" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
                                <Code className="text-purple-500" /> Usage
                            </h2>
                            <p className="text-zinc-400 mb-8 leading-relaxed font-medium">
                                Components are designed to be composable and easy to override.
                            </p>
                            <div className="group border border-white/10 rounded-2xl overflow-hidden bg-[#050505]">
                                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                                    <span className="text-xs font-mono text-zinc-500">App.tsx</span>
                                    <button
                                        onClick={() => copyToClipboard(codeExamples[2].code, 2)}
                                        className="p-1.5 rounded-md text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        {copiedIndex === 2 ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                    </button>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="text-zinc-300 font-mono text-sm leading-relaxed">
                                        <code>{`import { Button, Card } from 'nexus-kit';

function App() {
  return (
    <Card className="p-6 bg-zinc-900 border-zinc-800">
      <h2 className="text-xl font-bold mb-4 text-white">Welcome</h2>
      <Button variant="primary" className="w-full">
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
                            <h2 className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center gap-3">
                                <Book className="text-orange-500" /> Components
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: 'Buttons', count: 12, icon: MousePointer },
                                    { name: 'Cards', count: 8, icon: Layout },
                                    { name: 'Inputs', count: 10, icon: Box },
                                    { name: 'Navigation', count: 6, icon: Layers },
                                    { name: 'Feedback', count: 4, icon: Zap },
                                    { name: 'Data Display', count: 5, icon: Shield },
                                ].map((category) => (
                                    <div
                                        key={category.name}
                                        className="p-6 border border-white/5 rounded-[24px] cursor-pointer group bg-[#0A0A0A] hover:bg-zinc-900 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-white/5"
                                    >
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                                                <category.icon size={22} />
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-zinc-500 group-hover:text-white transition-colors uppercase tracking-wider">
                                                {category.count}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{category.name}</h3>
                                            <p className="text-xs text-zinc-500 font-medium group-hover:text-zinc-400">Essential interactive elements.</p>
                                        </div>
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

// Start of Selection
function Palette(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    )
}

export default DocumentationPage;
