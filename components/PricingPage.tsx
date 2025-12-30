import React from 'react';
import { Check, X, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 pt-48 pb-20 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
             <ShieldCheck size={12} />
             <span>30-day money-back guarantee</span>
           </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight font-walsheim">
                Simple, transparent <br />
                <span className="text-zinc-500">pricing.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                One price, lifetime access. No subscriptions, no hidden fees. 
                Get access to all premium components and templates forever.
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
            
            {/* Free Tier */}
            <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/5 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="mb-8">
                    <h3 className="text-xl font-medium text-zinc-400 mb-2">Starter</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white">$0</span>
                    </div>
                    <p className="text-zinc-500 mt-4">Perfect for hobby projects and experiments.</p>
                </div>
                
                <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                        {['Access to Free Components', 'Community Support', 'MIT License', 'Basic Documentation'].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-zinc-300">
                                <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                                    <Check size={12} className="text-white" />
                                </div>
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                         <li className="flex items-center gap-3 text-zinc-600">
                                <div className="w-5 h-5 rounded-full bg-zinc-900/50 flex items-center justify-center flex-shrink-0 border border-white/5">
                                    <X size={12} className="text-zinc-700" />
                                </div>
                                <span className="text-sm">Premium Templates</span>
                        </li>
                        <li className="flex items-center gap-3 text-zinc-600">
                                <div className="w-5 h-5 rounded-full bg-zinc-900/50 flex items-center justify-center flex-shrink-0 border border-white/5">
                                    <X size={12} className="text-zinc-700" />
                                </div>
                                <span className="text-sm">Figma Source Files</span>
                        </li>
                    </ul>
                </div>

                <button className="w-full py-4 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-800 transition-colors">
                    Get Started Free
                </button>
            </div>

            {/* Pro Tier */}
            <div className="p-8 md:p-12 rounded-3xl bg-white text-black border border-white flex flex-col relative overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 p-4">
                    <div className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2">
                        <Zap size={12} className="fill-current" /> Best Value
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-medium text-zinc-500 mb-2">Lifetime Access</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-black">$129</span>
                        <span className="text-lg text-zinc-500 font-medium line-through ml-2">$249</span>
                    </div>
                    <p className="text-zinc-600 mt-4">Everything you need to ship professional apps faster.</p>
                </div>
                
                <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                        {['Everything in Starter', 'All Premium Templates', 'Pro Components Library', 'Figma Source Files', 'Lifetime Updates', 'Priority Support'].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-zinc-900 font-medium">
                                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                                    <Check size={12} />
                                </div>
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="w-full py-4 rounded-xl bg-black text-white font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                    Get Lifetime Access <ArrowRight size={18} />
                </button>
                <p className="text-xs text-center text-zinc-500 mt-4">One-time payment. VAT included.</p>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently asked questions</h2>
            <div className="space-y-8">
                {[
                    { q: "Is this a recurring subscription?", a: "No. You pay once and get lifetime access to all current and future components and templates." },
                    { q: "Can I use this for client projects?", a: "Yes! You can use Nexus UI for unlimited personal and commercial projects, including those for clients." },
                    { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee if you're not satisfied with your purchase. No questions asked." },
                    { q: "What technologies are used?", a: "Nexus UI is built with React, Tailwind CSS, and Framer Motion. It's compatible with Next.js, Vite, and other React frameworks." }
                ].map((item, i) => (
                    <div key={i} className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900/50 transition-colors">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                            <HelpCircle size={18} className="mt-1 text-zinc-500" />
                            {item.q}
                        </h3>
                        <p className="text-zinc-400 pl-7 leading-relaxed">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-32 p-12 rounded-3xl bg-zinc-900 border border-white/5 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need a team license?</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                We offer special pricing for teams of 5 or more developers. Contact us for a custom quote.
            </p>
            <button className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-colors">
                Contact Sales
            </button>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;