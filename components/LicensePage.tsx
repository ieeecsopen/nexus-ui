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
        <div className="min-h-screen pt-24 pb-16 bg-black relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none select-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6">
                        <Scale size={12} />
                        License
                    </div>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Licensing Options
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Choose the license that works best for your project needs.
                    </p>
                </div>

                {/* License Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {licenses.map((license, index) => (
                        <div
                            key={index}
                            className={`relative bg-black/50 border rounded-2xl p-8 backdrop-blur-sm transition-all hover:scale-[1.02] ${license.popular
                                ? 'border-indigo-500/50 ring-1 ring-indigo-500/20 shadow-xl shadow-indigo-500/10'
                                : 'border-zinc-800 hover:border-zinc-700'
                                }`}
                        >
                            {license.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-medium text-white mb-2">{license.name}</h3>
                                <p className="text-sm text-zinc-500 mb-6">{license.description}</p>
                                <div className="text-5xl font-bold tracking-tight text-white mb-2">{license.price}</div>
                                {license.price !== 'Free' && (
                                    <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">one-time payment</div>
                                )}
                            </div>
                            <ul className="space-y-4 mb-8">
                                {license.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3">
                                        <div className={`p-1 rounded-full ${feature.included ? 'bg-indigo-500/10' : 'bg-zinc-800'}`}>
                                            {feature.included ? (
                                                <Check size={12} className="text-indigo-400" />
                                            ) : (
                                                <X size={12} className="text-zinc-600" />
                                            )}
                                        </div>
                                        <span className={`text-sm ${feature.included ? 'text-zinc-300' : 'text-zinc-500 line-through'}`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3.5 rounded-full font-medium transition-all transform active:scale-95 ${license.popular
                                    ? 'bg-white text-black hover:bg-zinc-200 shadow-lg hover:shadow-xl'
                                    : 'bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800'
                                    }`}
                            >
                                {license.price === 'Free' ? 'Get Started' : 'Purchase License'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* MIT License Full Text */}
                <div className="mb-20">
                    <h2 className="text-2xl font-medium tracking-tight text-white mb-8 text-center">MIT License (Open Source)</h2>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 overflow-hidden relative group">
                        <div className="absolute top-4 right-4 text-zinc-700 opacity-50 font-mono text-xs border border-zinc-800 rounded px-2 py-1">LICENSE.txt</div>
                        <pre className="text-sm text-zinc-400 whitespace-pre-wrap font-mono leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                            {`MIT License

Copyright (c) 2024 Nexus UI

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
                <div className="mb-20">
                    <h2 className="text-2xl font-medium tracking-tight text-white mb-8 text-center">License FAQ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                q: 'Can I use the free components in commercial projects?',
                                a: 'Yes! The MIT license allows you to use our open-source components in any project, including commercial ones. Just include the copyright notice.',
                            },
                            {
                                q: 'Do I need to purchase a license for each project?',
                                a: 'No, both licenses allow unlimited projects. The Pro license is a one-time purchase that covers all your current and future projects.',
                            },
                            {
                                q: 'Can I redistribute the Pro components?',
                                a: 'No, Pro components cannot be redistributed as part of a template, theme, or component library. They are for end-product use only.',
                            },
                            {
                                q: 'What happens if my license expires?',
                                a: 'The Pro license is perpetual with no expiration. You can continue using the components forever with one-time payment.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition-colors">
                                <h4 className="font-medium text-white mb-2">{item.q}</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 border border-indigo-500/10 rounded-2xl p-10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
                    <h3 className="text-xl font-medium text-white mb-2 relative z-10">Have licensing questions?</h3>
                    <p className="text-zinc-400 mb-8 relative z-10">
                        Contact us for enterprise licensing, volume discounts, or custom arrangements.
                    </p>
                    <button className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200">
                        Contact Sales <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LicensePage;
