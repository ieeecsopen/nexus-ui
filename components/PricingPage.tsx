import React from 'react';
import { Check, X, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-white selection:text-black">

            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">Pricing</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.9]">
                        Simple, transparent <br /> <span className="text-zinc-600">pricing for everyone.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Start for free, upgrade when you need more power. No hidden fees.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">

                    {/* Free Tier */}
                    <div className="p-12 rounded-[40px] border border-white/10 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-500 bg-[#0A0A0A]">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-bold text-white tracking-tight">$0</span>
                            </div>
                            <p className="text-zinc-500 mt-4 font-medium">Perfect for side projects & learning.</p>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-5 mb-12">
                                {['Access to Free Components', 'Community Support', 'MIT License', 'Basic Documentation'].map((feature) => (
                                    <li key={feature} className="flex items-center gap-4 text-zinc-300 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                            <Check size={14} className="text-white" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-4 text-zinc-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                        <X size={14} className="text-zinc-700" />
                                    </div>
                                    <span className="text-sm">Premium Templates</span>
                                </li>
                                <li className="flex items-center gap-4 text-zinc-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                        <X size={14} className="text-zinc-700" />
                                    </div>
                                    <span className="text-sm">Figma Source Files</span>
                                </li>
                            </ul>
                        </div>

                        <button className="w-full py-5 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Tier - Inverted Main Card */}
                    <div className="p-12 rounded-[40px] border border-white/10 flex flex-col relative overflow-hidden group transition-all duration-500 bg-white text-black shadow-[0_0_100px_rgba(255,255,255,0.15)] transform md:-translate-y-8">
                        <div className="absolute top-8 right-8">
                            <div className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2 border border-zinc-800">
                                <Zap size={12} className="fill-current text-yellow-500" /> Best Value
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-zinc-600 mb-2">Lifetime Access</h3>
                            <div className="flex items-baseline gap-3">
                                <span className="text-6xl font-bold text-black tracking-tight">$129</span>
                                <span className="text-xl text-zinc-400 font-medium line-through decoration-zinc-300 decoration-2">$249</span>
                            </div>
                            <p className="text-zinc-600 mt-4 font-medium">Everything you need to ship professional apps.</p>
                        </div>

                        <div className="flex-1">
                            <ul className="space-y-5 mb-12">
                                {['Everything in Starter', 'All Premium Templates', 'Pro Components Library', 'Figma Source Files', 'Lifetime Updates', 'Priority Support'].map((feature) => (
                                    <li key={feature} className="flex items-center gap-4 text-black font-semibold">
                                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-5 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                            Get Lifetime Access <ArrowRight size={18} />
                        </button>
                        <p className="text-xs text-center text-zinc-500 mt-5 font-medium">One-time payment. VAT included.</p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto border-t border-white/10 pt-20">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center tracking-tight">Common Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is this a recurring subscription?", a: "No. You pay once and get lifetime access to all current and future components and templates." },
                            { q: "Can I use this for client projects?", a: "Yes! You can use Nexus Kit for unlimited personal and commercial projects, including those for clients." },
                            { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee if you're not satisfied with your purchase." },
                            { q: "What technologies are used?", a: "Nexus Kit is built with React, Tailwind CSS, and Framer Motion." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] hover:border-white/10 transition-colors group">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-zinc-500 group-hover:text-white transition-colors">
                                        <HelpCircle size={14} />
                                    </div>
                                    {item.q}
                                </h3>
                                <p className="text-zinc-400 pl-10 leading-relaxed font-medium text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enterprise CTA */}
                <div className="mt-32 p-12 md:p-24 rounded-[40px] border border-white/10 text-center bg-[#0A0A0A] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Building a large team?</h3>
                    <p className="text-zinc-400 mb-10 max-w-lg mx-auto font-medium text-lg relative z-10">
                        We offer special volume licensing for teams of 5+ developers.
                    </p>
                    <button className="px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white hover:text-black transition-colors relative z-10 backdrop-blur-sm">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PricingPage;