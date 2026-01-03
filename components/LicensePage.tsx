import React from 'react';
import { Scale, Check, X, ArrowRight } from 'lucide-react';

const LicensePage: React.FC = () => {
    const licenses = [
        {
            name: 'Open Source (MIT)',
            description: 'Free for personal and commercial use',
            price: 'Free',
            features: [
                { text: 'Use in unlimited projects', included: true },
                { text: 'Modify source code', included: true },
                { text: 'Commercial use allowed', included: true },
                { text: 'Attribution required', included: true },
                { text: 'Premium components', included: false },
                { text: 'Page templates', included: false },
                { text: 'Priority support', included: false },
            ],
            popular: false,
        },
        {
            name: 'Pro License',
            description: 'For professionals and teams',
            price: '$149',
            popular: true,
            features: [
                { text: 'Use in unlimited projects', included: true },
                { text: 'Modify source code', included: true },
                { text: 'Commercial use allowed', included: true },
                { text: 'No attribution required', included: true },
                { text: 'Premium components', included: true },
                { text: 'Page templates', included: true },
                { text: 'Priority support', included: true },
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 bg-black text-white selection:bg-white selection:text-black font-sans">

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-xs font-medium text-white uppercase tracking-wider">License</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-8">
                        Licensing Options
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Choose the license that works best for your project needs.
                    </p>
                </div>

                {/* License Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {licenses.map((license, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-10 transition-all duration-500 flex flex-col ${license.popular
                                ? 'bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.1)]'
                                : 'bg-black border border-white/10 hover:border-white/30 text-white'
                                }`}
                        >
                            <div className="text-center mb-12">
                                <h3 className={`text-2xl font-light mb-2 ${license.popular ? 'text-black' : 'text-white'}`}>{license.name}</h3>
                                <p className={`text-sm mb-8 ${license.popular ? 'text-zinc-500' : 'text-zinc-500'}`}>{license.description}</p>
                                <div className={`text-6xl font-light mb-2 ${license.popular ? 'text-black' : 'text-white'}`}>{license.price}</div>
                                {license.price !== 'Free' && (
                                    <div className="text-xs font-medium uppercase tracking-widest opacity-60">one-time payment</div>
                                )}
                            </div>

                            <div className="flex-1 mb-12">
                                <ul className="space-y-4">
                                    {license.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-4">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included
                                                ? (license.popular ? 'bg-black text-white' : 'bg-white text-black')
                                                : 'bg-zinc-800 text-zinc-500'}`}>
                                                {feature.included ? <Check size={12} /> : <X size={12} />}
                                            </div>
                                            <span className={`text-sm ${feature.included
                                                ? (license.popular ? 'text-black font-medium' : 'text-zinc-300 font-light')
                                                : 'text-zinc-500 line-through'}`}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-5 rounded-full font-medium transition-all ${license.popular
                                    ? 'bg-black text-white hover:bg-zinc-800'
                                    : 'border border-white/20 hover:bg-white hover:text-black'
                                    }`}
                            >
                                {license.price === 'Free' ? 'Get Started' : 'Purchase License'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* MIT License Full Text */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light tracking-tight text-white mb-8 text-center">MIT License (Open Source)</h2>
                    <div className="border border-white/10 rounded-2xl p-8 overflow-hidden relative group bg-zinc-900/20 hover:border-white/20 transition-colors">
                        <div className="absolute top-4 right-4 text-zinc-500 font-mono text-xs border border-white/5 rounded px-2 py-1">LICENSE.txt</div>
                        <pre className="text-sm text-zinc-400 whitespace-pre-wrap font-mono leading-relaxed group-hover:text-zinc-300 transition-colors">
                            {`MIT License

Copyright (c) 2024 Nexus Kit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                        </pre>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-24 max-w-4xl mx-auto border-t border-white/10 pt-20">
                    <h2 className="text-3xl font-light tracking-tight text-white mb-12 text-center">License FAQ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                q: 'Can I use the free components in commercial projects?',
                                a: 'Yes! The MIT license allows you to use our open-source components in any project, including commercial ones.',
                            },
                            {
                                q: 'Do I need to purchase a license for each project?',
                                a: 'No, the Pro license is a one-time purchase that covers all your current and future projects.',
                            },
                            {
                                q: 'Can I redistribute the Pro components?',
                                a: 'No, Pro components cannot be redistributed as part of a template, theme, or component library.',
                            },
                            {
                                q: 'What happens if my license expires?',
                                a: 'The Pro license is perpetual. It never expires.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                                <h4 className="font-medium text-white mb-2">{item.q}</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed font-light">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LicensePage;
