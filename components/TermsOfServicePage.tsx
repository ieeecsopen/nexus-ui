import React from 'react';
import { FileText, Calendar } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: `By accessing or using Nexus UI ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.

These Terms apply to all visitors, users, and others who access or use the Service. By using the Service, you represent that you are at least 18 years of age or have parental/guardian consent.`,
        },
        {
            title: '2. Description of Service',
            content: `Nexus UI provides a library of React UI components, templates, and related resources for web development. The Service includes:

• Access to open-source UI components
• Premium component packages (for paid users)
• Page templates and design resources
• Documentation and technical support
• Community features and updates

We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.`,
        },
        {
            title: '3. User Accounts',
            content: `To access certain features of the Service, you may be required to create an account. You agree to:

• Provide accurate and complete registration information
• Maintain the security of your account credentials
• Promptly update your information if it changes
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use

We reserve the right to suspend or terminate accounts that violate these Terms.`,
        },
        {
            title: '4. License and Usage Rights',
            content: `Open Source Components:
Our open-source components are provided under the MIT License. You may use, copy, modify, and distribute these components in accordance with the MIT License terms.

Premium Components:
Premium components are provided under our Commercial License. This license grants you:
• Usage in unlimited personal and commercial projects
• Modification rights for your own use
• No redistribution of source code allowed

All licenses are subject to full payment and compliance with these Terms.`,
        },
        {
            title: '5. Intellectual Property',
            content: `The Service and its original content, features, and functionality are owned by Nexus UI and are protected by international copyright, trademark, and other intellectual property laws.

You may not:
• Reproduce, distribute, or create derivative works without authorization
• Remove any copyright or proprietary notices
• Use our trademarks without written permission
• Reverse engineer any aspect of the Service`,
        },
        {
            title: '6. Payment Terms',
            content: `For paid features of the Service:

• All fees are quoted and payable in US Dollars
• Payments are non-refundable except as required by law
• You authorize us to charge your payment method for all fees
• Prices may change with 30 days' notice
• Failure to pay may result in suspension of access

We use third-party payment processors and do not store your payment information directly.`,
        },
        {
            title: '7. Prohibited Uses',
            content: `You agree not to use the Service:

• For any unlawful purpose or to violate any laws
• To harass, abuse, or harm another person
• To impersonate or attempt to impersonate others
• To interfere with or disrupt the Service
• To introduce viruses or malicious code
• To attempt unauthorized access to any part of the Service
• To scrape or collect data without permission
• To redistribute premium content without authorization`,
        },
        {
            title: '8. Disclaimer of Warranties',
            content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

We do not warrant that:
• The Service will be uninterrupted or error-free
• Defects will be corrected
• The Service is free of viruses or harmful components`,
        },
        {
            title: '9. Limitation of Liability',
            content: `IN NO EVENT SHALL NEXUS UI, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.

Our total liability for any claims under these Terms shall not exceed the amount you paid us in the twelve (12) months preceding the claim.`,
        },
        {
            title: '10. Indemnification',
            content: `You agree to defend, indemnify, and hold harmless Nexus UI and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:

• Your use of the Service
• Your violation of these Terms
• Your violation of any third-party rights
• Any content you submit or share through the Service`,
        },
        {
            title: '11. Governing Law',
            content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in San Francisco, California.`,
        },
        {
            title: '12. Changes to Terms',
            content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.

Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.`,
        },
        {
            title: '13. Contact Information',
            content: `If you have any questions about these Terms, please contact us:

Email: legal@nexusui.com
Address: 123 Tech Street, San Francisco, CA 94105

We aim to respond to all inquiries within 5 business days.`,
        },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 bg-black text-white selection:bg-white selection:text-black font-sans">

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-xs font-medium text-white uppercase tracking-wider">Legal</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8">
                        Terms of Service
                    </h1>
                    <div className="flex items-center gap-3 text-zinc-500 text-sm font-mono border-l border-zinc-800 pl-4">
                        <Calendar size={14} />
                        Last updated: December 31, 2024
                    </div>
                </div>

                {/* Introduction */}
                <div className="border border-white/10 rounded-3xl p-10 mb-20 bg-zinc-900/20">
                    <p className="text-zinc-300 leading-relaxed text-lg font-light">
                        Welcome to Nexus UI. These Terms of Service govern your use of our website, products,
                        and services. By using Nexus UI, you agree to these terms.
                    </p>
                </div>

                {/* TOC */}
                <div className="mb-20">
                    <h3 className="text-white font-medium mb-8 border-b border-white/10 pb-4 inline-block">Table of Contents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                        {sections.map((section, index) => (
                            <a
                                key={index}
                                href={`#section-${index + 1}`}
                                className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group"
                            >
                                <span className="text-xs font-mono text-zinc-700 group-hover:text-zinc-500">0{index + 1}</span>
                                {section.title.split('. ')[1]}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-16">
                    {sections.map((section, index) => (
                        <section key={index} id={`section-${index + 1}`} className="scroll-mt-32">
                            <h2 className="text-2xl font-light tracking-tight text-white mb-6 flex items-baseline gap-4">
                                <span className="text-sm font-mono text-zinc-600">0{index + 1}</span>
                                {section.title.split('. ')[1]}
                            </h2>
                            <div className="text-zinc-400 leading-relaxed whitespace-pre-line border-l border-white/5 pl-6 md:pl-12 font-light">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
