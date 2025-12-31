import React from 'react';
import {
    Check, Zap, Moon, Smartphone, Code, ArrowRight, Github, ArrowUpRight,
    PenTool, Users
} from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

/* -------------------------------------------------------------------------- */
/*                              Features Section                              */
/* -------------------------------------------------------------------------- */
export const FeaturesSection = () => {
    return (
        <div className="py-32 bg-black border-y border-white/5 relative">

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
                    <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter leading-[0.9]">
                        Uncompromising <br />
                        <span className="text-zinc-600">performance.</span>
                    </h2>
                    <div className="flex items-end">
                        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-md">
                            Engineered for speed and accessibility.
                            Every component is built to be copy-pasted, customized, and shipped.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[350px]">

                    {/* Feature 1: TypeScript (Large) */}
                    <div className="col-span-1 lg:col-span-2 relative h-full rounded-3xl p-[1px] group">
                        <GlowingEffect
                            blur={0}
                            borderWidth={1}
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div className="relative flex flex-col justify-between h-full w-full bg-black p-10 rounded-3xl border border-white/10 z-10 overflow-hidden hover:border-transparent transition-colors duration-500">
                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-light text-white mb-2">TypeScript First</h3>
                                    <p className="text-zinc-500 max-w-md">World-class autocompletion and type safety out of the box.</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center text-blue-500 rounded-2xl border border-blue-500/20">
                                    <Code size={24} />
                                </div>
                            </div>

                            {/* Code Mock */}
                            <div className="mt-8 font-mono text-sm text-zinc-400 bg-zinc-900/50 p-6 rounded-xl border border-white/5 relative z-10 group-hover:border-white/10 transition-colors">
                                <div className="flex gap-2 mb-2">
                                    <span className="text-purple-400">interface</span>
                                    <span className="text-yellow-200">ButtonProps</span>
                                    <span className="text-zinc-500">{`{`}</span>
                                </div>
                                <div className="pl-6 space-y-1">
                                    <div><span className="text-blue-300">variant</span>: <span className="text-green-300">'primary'</span> | <span className="text-green-300">'ghost'</span>;</div>
                                    <div><span className="text-blue-300">size</span>: <span className="text-green-300">'sm'</span> | <span className="text-green-300">'lg'</span>;</div>
                                </div>
                                <div className="text-zinc-500">{`}`}</div>
                            </div>

                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                        </div>
                    </div>

                    {/* Feature 2: Dark Mode */}
                    <div className="relative h-full rounded-3xl p-[1px] group">
                        <GlowingEffect
                            blur={0}
                            borderWidth={1}
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div className="relative flex flex-col items-center justify-center text-center h-full w-full bg-black p-10 rounded-3xl border border-white/10 z-10 hover:border-transparent transition-colors duration-500">
                            <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 text-white">
                                <Moon size={32} />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-2">Dark Mode</h3>
                            <p className="text-zinc-500">Automatic switching. Zero config.</p>
                        </div>
                    </div>

                    {/* Feature 3: Accessible */}
                    <div className="relative h-full rounded-3xl p-[1px] group">
                        <GlowingEffect
                            blur={0}
                            borderWidth={1}
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div className="relative flex flex-col items-center justify-center text-center h-full w-full bg-black p-10 rounded-3xl border border-white/10 z-10 hover:border-transparent transition-colors duration-500">
                            <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 text-emerald-400">
                                <Check size={32} />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-2">Accessible</h3>
                            <p className="text-zinc-500">WAI-ARIA compliant compliant. Always.</p>
                        </div>
                    </div>

                    {/* Feature 4: Responsive (Large) */}
                    <div className="col-span-1 lg:col-span-2 relative h-full rounded-3xl p-[1px] group">
                        <GlowingEffect
                            blur={0}
                            borderWidth={1}
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        <div className="relative flex flex-col justify-between h-full w-full bg-black p-10 rounded-3xl border border-white/10 z-10 overflow-hidden hover:border-transparent transition-colors duration-500">
                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-light text-white mb-2">Responsive</h3>
                                    <p className="text-zinc-500 max-w-md">Fluid layouts that adapt to any screen size instantly.</p>
                                </div>
                                <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center text-purple-500 rounded-2xl border border-purple-500/20">
                                    <Smartphone size={24} />
                                </div>
                            </div>

                            {/* Device Mock Animation */}
                            <div className="flex gap-4 mt-8 items-end justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                                <div className="w-12 h-20 bg-zinc-800 rounded-md border border-zinc-700" />
                                <div className="w-24 h-32 bg-zinc-800 rounded-md border border-zinc-700" />
                                <div className="w-48 h-40 bg-zinc-800 rounded-t-md border border-zinc-700 border-b-0" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


/* -------------------------------------------------------------------------- */
/*                                 CTA Section                                */
/* -------------------------------------------------------------------------- */
export const CTASection = () => {
    return (
        <div className="py-40 bg-black relative overflow-hidden">

            <div className="max-w-[1800px] mx-auto px-6 text-center relative z-10">
                <h2 className="text-8xl md:text-[10rem] font-light text-white tracking-tighter leading-[0.8] mb-12 mix-blend-difference">
                    Start <br />
                    <span className="text-zinc-700">Building.</span>
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
                    <button className="h-16 px-10 rounded-full bg-white text-black text-xl font-medium hover:bg-zinc-200 transition-colors flex items-center gap-3">
                        Get Started <ArrowRight size={20} />
                    </button>
                    <button className="h-16 px-10 rounded-full bg-transparent border border-white/20 text-white text-xl font-medium hover:bg-white/5 transition-colors flex items-center gap-3">
                        <Github size={20} /> Star on GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};
