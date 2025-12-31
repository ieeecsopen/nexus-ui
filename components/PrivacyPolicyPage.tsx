import React from 'react';
import { Shield, Calendar } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
    const sections = [
        {
            title: 'Information We Collect',
            content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:

• Name and email address
• Payment information (processed securely through our payment providers)
• Usage data and preferences
• Communication history with our support team

We also automatically collect certain information when you use our services, including your IP address, browser type, and usage patterns.`,
        },
        {
            title: 'How We Use Your Information',
            content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments, questions, and requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and abuse`,
        },
        {
            title: 'Information Sharing',
            content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With service providers who assist in our operations
• To comply with legal obligations
• To protect our rights and the safety of our users
• With your consent or at your direction

Our service providers are bound by confidentiality obligations and are restricted from using your information for any purpose other than providing services to us.`,
        },
        {
            title: 'Data Security',
            content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments and audits
• Access controls and authentication mechanisms
• Employee training on data protection

However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
        },
        {
            title: 'Cookies and Tracking',
            content: `We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings.

Types of cookies we use:
• Essential cookies: Required for the website to function
• Analytics cookies: Help us understand how visitors use our site
• Preference cookies: Remember your settings and preferences`,
        },
        {
            title: 'Your Rights',
            content: `Depending on your location, you may have certain rights regarding your personal information, including:

• Access to your personal data
• Correction of inaccurate data
• Deletion of your data
• Data portability
• Objection to processing
• Withdrawal of consent

To exercise any of these rights, please contact us at privacy@nexusui.com.`,
        },
        {
            title: 'Children\'s Privacy',
            content: `Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.`,
        },
        {
            title: 'Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the new Privacy Policy.`,
        },
        {
            title: 'Contact Us',
            content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

Email: privacy@nexusui.com
Address: 123 Tech Street, San Francisco, CA 94105

We will respond to your inquiry within 30 days.`,
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
                        Privacy Policy
                    </h1>
                    <div className="flex items-center gap-3 text-zinc-500 text-sm font-mono border-l border-zinc-800 pl-4">
                        <Calendar size={14} />
                        Last updated: December 31, 2024
                    </div>
                </div>

                {/* Introduction */}
                <div className="border border-white/10 rounded-3xl p-10 mb-20 bg-zinc-900/20">
                    <p className="text-zinc-300 leading-relaxed text-lg font-light">
                        At Nexus UI, we take your privacy seriously. This Privacy Policy explains how we collect,
                        use, disclose, and safeguard your information when you use our website and services.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-16">
                    {sections.map((section, index) => (
                        <section key={index} className="scroll-mt-32" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
                            <h2 className="text-2xl font-light tracking-tight text-white mb-6 flex items-baseline gap-4">
                                <span className="text-sm font-mono text-zinc-600">0{index + 1}</span>
                                {section.title}
                            </h2>
                            <div className="text-zinc-400 leading-relaxed whitespace-pre-line pl-10 md:pl-12 font-light border-l border-white/5">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
