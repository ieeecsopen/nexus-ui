import React from 'react';
import { Check, X, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-white selection:text-black">

            <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-20 relative z-10">

                {/* Header - Stark & Clean */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-xs font-medium text-white uppercase tracking-wider">Pricing</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-8">
                        One simple price.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Lifetime access. No subscriptions. No hidden fees.
                        Ship faster, forever.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">

                    {/* Free Tier */}
                    <div className="p-12 rounded-3xl border border-white/10 flex flex-col relative overflow-hidden group hover:border-white/30 transition-all duration-500 bg-black">
                        <div className="mb-8">
                            <h3 className="text-xl font-light text-zinc-400 mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-light text-white">$0</span>
                            </div>
                            <p className="text-zinc-500 mt-4 font-light">Perfect for hobby projects.</p>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-4 mb-12">
                                {['Access to Free Components', 'Community Support', 'MIT License', 'Basic Documentation'].map((feature) => (
                                    <li key={feature} className="flex items-center gap-4 text-zinc-300 font-light">
                                        <Check size={16} className="text-white" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-4 text-zinc-700 font-light">
                                    <X size={16} />
                                    <span className="text-sm">Premium Templates</span>
                                </li>
                                <li className="flex items-center gap-4 text-zinc-700 font-light">
                                    <X size={16} />
                                    <span className="text-sm">Figma Source Files</span>
                                </li>
                            </ul>
                        </div>

                        <button className="w-full py-5 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Tier - Inverted Main Card */}
                    <div className="p-12 rounded-3xl border border-white/10 flex flex-col relative overflow-hidden group transition-all duration-500 bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                        <div className="absolute top-8 right-8">
                            <div className="px-3 py-1 bg-black text-white text-xs font-medium uppercase tracking-wider rounded-full flex items-center gap-2">
                                <Zap size={12} className="fill-current" /> Best Value
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-light text-zinc-500 mb-2">Lifetime Access</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-light text-black">$129</span>
                                <span className="text-xl text-zinc-400 font-light line-through decoration-zinc-300">$249</span>
                            </div>
                            <p className="text-zinc-600 mt-4 font-light">Everything you need to ship professional apps.</p>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-4 mb-12">
                                {['Everything in Starter', 'All Premium Templates', 'Pro Components Library', 'Figma Source Files', 'Lifetime Updates', 'Priority Support'].map((feature) => (
                                    <li key={feature} className="flex items-center gap-4 text-black font-medium">
                                        <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                                            <Check size={10} />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-5 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                            Get Lifetime Access <ArrowRight size={18} />
                        </button>
                        <p className="text-xs text-center text-zinc-500 mt-4">One-time payment. VAT included.</p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto border-t border-white/10 pt-20">
                    <h2 className="text-3xl font-light text-white mb-12 text-center">Questions?</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is this a recurring subscription?", a: "No. You pay once and get lifetime access to all current and future components and templates." },
                            { q: "Can I use this for client projects?", a: "Yes! You can use Nexus UI for unlimited personal and commercial projects, including those for clients." },
                            { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee if you're not satisfied with your purchase." },
                            { q: "What technologies are used?", a: "Nexus UI is built with React, Tailwind CSS, and Framer Motion." }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-900/20 border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors">
                                <h3 className="text-lg font-medium text-white mb-2 flex items-start gap-3">
                                    <HelpCircle size={18} className="mt-1 text-zinc-500" />
                                    {item.q}
                                </h3>
                                <p className="text-zinc-400 pl-8 leading-relaxed font-light">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enterprise CTA */}
                <div className="mt-32 p-16 rounded-[3rem] border border-white/10 text-center bg-zinc-900/20">
                    <h3 className="text-3xl font-light text-white mb-6">Building a large team?</h3>
                    <p className="text-zinc-400 mb-10 max-w-lg mx-auto font-light text-lg">
                        We offer special volume licensing for teams of 5+ developers.
                    </p>
                    <button className="px-10 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-colors">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PricingPage;