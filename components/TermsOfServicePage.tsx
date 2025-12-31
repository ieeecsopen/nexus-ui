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
        <div className="min-h-screen pt-24 pb-16 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
                        <FileText size={12} />
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <Calendar size={14} />
                        Last updated: December 31, 2024
                    </div>
                </div>

                {/* Introduction */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
                    <p className="text-zinc-400 leading-relaxed">
                        Welcome to Nexus UI. These Terms of Service govern your use of our website, products,
                        and services. By using Nexus UI, you agree to these terms. Please read them carefully
                        before using our Service.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
                    <h3 className="text-white font-semibold mb-4">Table of Contents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sections.map((section, index) => (
                            <a
                                key={index}
                                href={`#section-${index + 1}`}
                                className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <section key={index} id={`section-${index + 1}`} className="scroll-mt-24">
                            <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                            <div className="text-zinc-400 leading-relaxed whitespace-pre-line">
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
