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
        <div className="min-h-screen pt-24 pb-16 bg-black">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
                        <Scale size={12} />
                        License
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Licensing Options
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Choose the license that works best for your project needs.
                    </p>
                </div>

                {/* License Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {licenses.map((license, index) => (
                        <div
                            key={index}
                            className={`relative bg-zinc-900 border rounded-2xl p-6 ${license.popular
                                    ? 'border-indigo-500/50 ring-1 ring-indigo-500/20'
                                    : 'border-zinc-800'
                                }`}
                        >
                            {license.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{license.name}</h3>
                                <p className="text-sm text-zinc-500 mb-4">{license.description}</p>
                                <div className="text-4xl font-bold text-white">{license.price}</div>
                                {license.price !== 'Free' && (
                                    <div className="text-sm text-zinc-500">one-time payment</div>
                                )}
                            </div>
                            <ul className="space-y-3 mb-6">
                                {license.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <Check size={16} className="text-green-400 flex-shrink-0" />
                                        ) : (
                                            <X size={16} className="text-zinc-600 flex-shrink-0" />
                                        )}
                                        <span className={feature.included ? 'text-zinc-300' : 'text-zinc-600'}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-xl font-medium transition-colors ${license.popular
                                        ? 'bg-white text-black hover:bg-zinc-200'
                                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                                    }`}
                            >
                                {license.price === 'Free' ? 'Get Started' : 'Purchase License'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* MIT License Full Text */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">MIT License (Open Source)</h2>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <pre className="text-sm text-zinc-400 whitespace-pre-wrap font-mono leading-relaxed">
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
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">License FAQ</h2>
                    <div className="space-y-4">
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
                            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                                <h4 className="font-medium text-white mb-2">{item.q}</h4>
                                <p className="text-sm text-zinc-400">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">Have licensing questions?</h3>
                    <p className="text-zinc-400 mb-6">
                        Contact us for enterprise licensing, volume discounts, or custom arrangements.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        Contact Sales <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LicensePage;
