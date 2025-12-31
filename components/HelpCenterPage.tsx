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
            question: 'How do I install Nexus UI?',
            answer: 'You can install Nexus UI via npm with `npm install nexus-ui` or via yarn with `yarn add nexus-ui`. After installation, import the components you need and start building!',
        },
        {
            category: 'Getting Started',
            question: 'What are the peer dependencies?',
            answer: 'Nexus UI requires React 18+, Tailwind CSS 3+, and optionally Framer Motion for animations. Make sure these are installed in your project.',
        },
        {
            category: 'Components',
            question: 'Can I customize the component styles?',
            answer: 'Absolutely! All components are built with Tailwind CSS and accept className props for customization. You can also override default styles using Tailwind\'s utility classes.',
        },
        {
            category: 'Components',
            question: 'Are the components accessible?',
            answer: 'Yes, we follow WAI-ARIA guidelines and ensure all components are keyboard navigable and screen reader friendly. Accessibility is a core priority for Nexus UI.',
        },
        {
            category: 'Licensing',
            question: 'Can I use Nexus UI in commercial projects?',
            answer: 'Yes! Nexus UI is available under the MIT license for the open-source version. Commercial licenses are available for premium components and templates.',
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
        <div className="min-h-screen pt-24 pb-16 bg-black">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
                        <HelpCircle size={12} />
                        Help Center
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How can we help?
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Find answers to common questions or reach out to our support team.
                    </p>
                </div>

                {/* Search */}
                <div className="relative max-w-xl mx-auto mb-12">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                    />
                </div>

                {/* Support Channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {supportChannels.map((channel, index) => (
                        <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors group cursor-pointer">
                            <channel.icon size={24} className="text-indigo-400 mb-3" />
                            <h3 className="font-semibold text-white mb-1">{channel.title}</h3>
                            <p className="text-sm text-zinc-500 mb-3">{channel.description}</p>
                            <span className="text-sm text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                {channel.action}
                                <ExternalLink size={14} />
                            </span>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/50 transition-colors"
                                >
                                    <div>
                                        <span className="text-xs text-indigo-400 font-medium mb-1 block">{faq.category}</span>
                                        <span className="font-medium text-white">{faq.question}</span>
                                    </div>
                                    {openIndex === index ? (
                                        <ChevronUp size={20} className="text-zinc-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown size={20} className="text-zinc-400 flex-shrink-0" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-5 pb-5 text-zinc-400 border-t border-zinc-800 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12 text-zinc-500">
                            No results found for "{searchQuery}"
                        </div>
                    )}
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">Still need help?</h3>
                    <p className="text-zinc-400 mb-6">
                        Our support team is here to assist you with any questions.
                    </p>
                    <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpCenterPage;
