import React from 'react';
import {
    Check, Zap, Moon, Smartphone, Shield, Globe,
    ArrowRight, Github
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                              Features Section                              */
/* -------------------------------------------------------------------------- */
export const FeaturesSection = () => {
    return (
        <div className="py-24 bg-black border-b border-white/[0.08]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                        Everything you need <br />
                        <span className="text-zinc-500">to build great interfaces.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        Designed to be copy-pasted into your apps. customization is easy and the code is yours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Feature 1: TypeScript */}
                    <div className="col-span-1 md:col-span-2 p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col justify-between group hover:border-zinc-700 transition-all min-h-[300px]">
                        <div>
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                                <Shield size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">TypeScript Ready</h3>
                            <p className="text-zinc-400">
                                Fully typed components. Catch errors early and get excellent autocomplete in your IDE.
                            </p>
                        </div>
                        <div className="mt-8 bg-black/50 rounded-lg p-4 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-hidden">
                            <div className="flex gap-2 mb-2">
                                <span className="text-blue-400">interface</span>
                                <span className="text-yellow-400">ButtonProps</span>
                                <span>{`{`}</span>
                            </div>
                            <div className="pl-4">
                                <div className="flex gap-2">
                                    <span>variant:</span>
                                    <span className="text-green-400">'primary'</span>
                                    <span>|</span>
                                    <span className="text-green-400">'secondary'</span>;
                                </div>
                                <div className="flex gap-2">
                                    <span>size:</span>
                                    <span className="text-green-400">'sm'</span>
                                    <span>|</span>
                                    <span className="text-green-400">'md'</span>
                                    <span>|</span>
                                    <span className="text-green-400">'lg'</span>;
                                </div>
                            </div>
                            <div>{`}`}</div>
                        </div>
                    </div>

                    {/* Feature 2: Dark Mode */}
                    <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col group hover:border-zinc-700 transition-all min-h-[300px]">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                            <Moon size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Dark Mode Info</h3>
                        <p className="text-zinc-400 mb-auto">
                            Automatic dark mode support via Tailwind CSS. Toggle it with one class.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="relative w-16 h-8 rounded-full bg-zinc-700 border border-zinc-600 flex items-center px-1">
                                <div className="w-6 h-6 rounded-full bg-white shadow-lg transform translate-x-8 transition-transform"></div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Accessible */}
                    <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col group hover:border-zinc-700 transition-all min-h-[300px]">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                            <Check size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Accessible</h3>
                        <p className="text-zinc-400">
                            Follows WAI-ARIA patterns. Keyboard navigation and screen reader support built-in.
                        </p>
                    </div>

                    {/* Feature 4: Responsive */}
                    <div className="col-span-1 md:col-span-2 p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col md:flex-row gap-8 group hover:border-zinc-700 transition-all min-h-[300px]">
                        <div className="flex-1">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                                <Smartphone size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Responsive Design</h3>
                            <p className="text-zinc-400">
                                Mobile-first architecture. Components look great on any device, from phones to dedicated desktops.
                            </p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-48 h-32 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl flex flex-col overflow-hidden">
                                <div className="h-4 bg-zinc-800 border-b border-zinc-700 flex items-center px-2 gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                </div>
                                <div className="p-3 space-y-2">
                                    <div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
                                    <div className="flex gap-2">
                                        <div className="h-16 w-1/3 bg-zinc-800 rounded"></div>
                                        <div className="h-16 w-2/3 bg-zinc-800 rounded"></div>
                                    </div>
                                </div>

                                {/* Floating Mobile Mock */}
                                <div className="absolute -bottom-4 -right-4 w-16 h-28 bg-black border border-zinc-700 rounded-lg shadow-xl p-1">
                                    <div className="h-full w-full bg-zinc-900 rounded flex flex-col p-1 gap-1">
                                        <div className="h-1 w-full bg-zinc-800 rounded-sm"></div>
                                        <div className="h-8 w-full bg-zinc-800 rounded-sm"></div>
                                    </div>
                                </div>
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
        <div className="py-32 bg-black relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
                    Build your next idea <br />
                    <span className="text-zinc-500">even faster.</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
                    Beautifully designed components that you can copy and paste into your apps. Open Source. MIT License.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="h-12 px-8 rounded-md bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        Get Started <ArrowRight size={18} />
                    </button>
                    <button className="h-12 px-8 rounded-md bg-zinc-900 border border-zinc-800 text-white font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2">
                        <Github size={18} /> Star on GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};
