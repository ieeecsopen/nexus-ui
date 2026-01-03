import React from 'react';
import { motion } from 'framer-motion';

export interface Testimonial {
    name: string;
    role?: string;
    image: string;
    text: string;
    date?: string;
    platform?: 'twitter' | 'other';
}

interface Props {
    className?: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Khan Muhammad Siam',
        role: '@siam_ui',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
        text: "Amazing work, love the custom made hero images",
        date: "Jun 04, 2024",
        platform: 'twitter'
    },
    {
        name: 'Red1',
        role: '@red1_design',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
        text: "Those hero section of every websites is modern and eye-catching 😍",
        date: "Jun 02, 2024",
        platform: 'twitter'
    },
    {
        name: 'TanjiM Islam',
        role: '@tanjim_dev',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop',
        text: "Looks great all trending design are here 🤯.. shado, green, card 🔥",
        date: "Apr 30, 2024",
        platform: 'twitter'
    },
    {
        name: 'Brian',
        role: '@brian_ux',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
        text: "Amazing resource! Thanks for sharing your work. The animations are really high quality.",
        date: "Apr 14, 2024",
        platform: 'twitter'
    },
    {
        name: 'Yahya',
        role: '@yahya_codes',
        image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop',
        text: "Um, I kinda like the subtle shadows in there. Makes everything feel smooth really",
        date: "May 05, 2024",
        platform: 'twitter'
    },
    {
        name: 'Igor Šalagin',
        role: '@igor_salagin',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        text: "Freakin' clean work man! Lovin' the colors, the details, the hero section too.",
        date: "May 20, 2024",
        platform: 'twitter'
    },
    {
        name: 'BIK Domains',
        role: '@bik_domains',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop',
        text: "oh Praha, your Waitlista just appeared in my life like an angel 🧚",
        date: "Apr 22, 2024",
        platform: 'twitter'
    },
    {
        name: 'Allan Smith',
        role: '@allan_smith',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop',
        text: "Your body of work so far is incredible, and Waitlista is my favorite so far.",
        date: "Apr 24, 2024",
        platform: 'twitter'
    }
];

const MarqueeRow = ({ items, direction = 'left', speed = 50 }: { items: Testimonial[], direction?: 'left' | 'right', speed?: number }) => {
    return (
        <div className="relative flex overflow-hidden w-full">
            <motion.div
                className="flex gap-6 py-4 flex-nowrap"
                animate={{
                    x: direction === 'left' ? [0, -1000] : [-1000, 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {[...items, ...items, ...items].map((t, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[400px] bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-zinc-500 text-xs font-medium">{t.date}</span>
                        </div>

                        <p className="text-zinc-300 text-sm leading-relaxed mb-6 min-h-[60px]">
                            {t.text}
                        </p>

                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                            <div className="flex items-center gap-3">
                                <img src={t.image} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <h4 className="text-white text-sm font-semibold">{t.name}</h4>
                                    {/* Optional handle/role if needed, keeping it minimal as per image */}
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center">
                                {/* SVG X Logo */}
                                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const TestimonialMarquee: React.FC<Props> = ({ className }) => {
    // Split testimonials into two groups
    const row1 = TESTIMONIALS.slice(0, 4);
    const row2 = TESTIMONIALS.slice(4, 8);

    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <div className="text-center mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">O</span>
                    </div>
                    <span className="text-lg font-bold">Oxygen</span>
                </div>
                <h2 className="text-5xl font-medium text-white mb-2">What People Say</h2>
            </div>

            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="space-y-6">
                    <MarqueeRow items={row1} direction="left" speed={40} />
                    <MarqueeRow items={row2} direction="right" speed={50} />
                </div>
            </div>
        </div>
    );
};

export default TestimonialMarquee;
