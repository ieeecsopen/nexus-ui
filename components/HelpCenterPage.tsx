import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Mail, MessageCircle, Book, ExternalLink } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const HelpCenterPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState('');

    const faqs: FAQItem[] = [
        {
            category: 'Getting Started',
            question: 'How do I install Nexus Kit?',
            answer: 'You can install Nexus Kit via npm with `npm install nexus-kit` or via yarn with `yarn add nexus-kit`. After installation, import the components you need and start building!',
        },
        {
            category: 'Getting Started',
            question: 'What are the peer dependencies?',
            answer: 'Nexus Kit requires React 18+, Tailwind CSS 3+, and optionally Framer Motion for animations. Make sure these are installed in your project.',
        },
        {
            category: 'Components',
            question: 'Can I customize the component styles?',
            answer: 'Absolutely! All components are built with Tailwind CSS and accept className props for customization. You can also override default styles using Tailwind\'s utility classes.',
        },
        {
            category: 'Components',
            question: 'Are the components accessible?',
            answer: 'Yes, we follow WAI-ARIA guidelines and ensure all components are keyboard navigable and screen reader friendly. Accessibility is a core priority for Nexus Kit.',
        },
        {
            category: 'Licensing',
            question: 'Can I use Nexus Kit in commercial projects?',
            answer: 'Yes! Nexus Kit is available under the MIT license for the open-source version. Commercial licenses are available for premium components and templates.',
        },
        {
            category: 'Licensing',
            question: 'What\'s included in the Pro license?',
            answer: 'The Pro license includes access to all premium components, page templates, priority support, and early access to new features and updates.',
        },
        {
            category: 'Support',
            question: 'How do I report a bug?',
            answer: 'You can report bugs by opening an issue on our GitHub repository. Please include a detailed description, reproduction steps, and your environment details.',
        },
        {
            category: 'Support',
            question: 'Is there a Discord community?',
            answer: 'Yes! Join our Discord server to connect with other developers, get help, share your projects, and stay updated on the latest news.',
        },
    ];

    const filteredFaqs = faqs.filter(
        faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const supportChannels = [
        {
            title: 'Documentation',
            description: 'Comprehensive guides and API references',
            icon: Book,
            action: 'Browse Docs',
        },
        {
            title: 'Discord Community',
            description: 'Get help from the community',
            icon: MessageCircle,
            action: 'Join Discord',
        },
        {
            title: 'Email Support',
            description: 'For Pro license holders',
            icon: Mail,
            action: 'Contact Us',
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
                        <HelpCircle size={12} />
                        Help Center
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                        How can we help?
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions or reach out to our support team.
                    </p>
                </div>

                {/* Search */}
                <div className="relative max-w-xl mx-auto mb-16 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all shadow-xl"
                        />
                    </div>
                </div>

                {/* Support Channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {supportChannels.map((channel, index) => (
                        <div key={index} className="bg-black/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all group cursor-pointer backdrop-blur-sm">
                            <channel.icon size={24} className="text-indigo-400 mb-4" />
                            <h3 className="font-medium text-white mb-2">{channel.title}</h3>
                            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{channel.description}</p>
                            <span className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                                {channel.action}
                                <ExternalLink size={14} className="text-zinc-500 group-hover:text-indigo-400" />
                            </span>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-medium tracking-tight text-white mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-black/50 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm hover:border-zinc-700 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex-1 pr-4">
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2 block">{faq.category}</span>
                                        <span className="font-medium text-white text-lg">{faq.question}</span>
                                    </div>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center transition-all ${openIndex === index ? 'bg-zinc-800 rotate-180' : 'bg-transparent'}`}>
                                        <ChevronDown size={18} className="text-zinc-400" />
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12 text-zinc-500 bg-zinc-900/20 rounded-xl border border-zinc-800/50 border-dashed">
                            No results found for "{searchQuery}"
                        </div>
                    )}
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 border border-indigo-500/10 rounded-2xl p-10 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[center] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
                    <h3 className="text-2xl font-medium text-white mb-3 relative z-10">Still need help?</h3>
                    <p className="text-zinc-400 mb-8 relative z-10 z-10">
                        Our support team is here to assist you with any questions.
                    </p>
                    <button className="relative z-10 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-200">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpCenterPage;
