import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ChevronLeft, Layers, Command, MousePointer2, Star, Plus, Minus, X, MoreHorizontal, Layout, Search, ArrowRight } from 'lucide-react';
import { ComponentItem } from '../types';

interface PreviewProps {
    small?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                               Updated Previews                             */
/* -------------------------------------------------------------------------- */

export const TiltCardPreview: React.FC<PreviewProps> = ({ small }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div className={`w-full h-full flex items-center justify-center bg-zinc-950 perspective-[2000px] relative ${small ? 'h-full overflow-hidden' : 'min-h-[500px]'}`}>
            <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
            <div style={{ perspective: 2000 }}>
                <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.16}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: "grabbing" }}
                    className={`${small ? 'w-48 h-64' : 'w-72 h-96'} bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl cursor-grab`}
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg"></div>
                    <div>
                        <div className="h-2 w-20 bg-zinc-700 rounded mb-2"></div>
                        <div className="h-1.5 w-3/4 bg-zinc-800 rounded"></div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export const AnimatedGradientPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full overflow-hidden bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <motion.div
                className="absolute -inset-[50%] opacity-50 blur-[100px]"
                animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    background: 'conic-gradient(from 0deg, #4f46e5, #06b6d4, #4f46e5)',
                }}
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />
            <span className="relative z-10 text-white font-medium text-xl mix-blend-overlay">Gradient</span>
        </div>
    );
};

export const GlassyButtonPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full overflow-hidden' : 'min-h-[500px]'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent"></div>
            <button
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                   rounded-xl text-white font-medium hover:bg-white/20 
                   transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
                Glass Button <ArrowRight size={16} className="text-white/70" />
            </button>
        </div>
    );
};

export const TypewriterPreview: React.FC<PreviewProps> = ({ small }) => {
    const [text, setText] = useState('');
    const words = ['websites', 'apps', 'experiences'];
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 150);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="relative z-10 font-mono text-white text-center px-4">
                <span className={`${small ? 'text-lg' : 'text-2xl'} text-zinc-500`}>We build </span>
                <span className={`${small ? 'text-lg' : 'text-2xl'} font-medium text-white`}>{text}</span>
                <span className="animate-pulse border-r-2 border-indigo-500 ml-1 h-5 inline-block align-middle"></span>
            </div>
        </div>
    );
};

export const CommandPalettePreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className={`${small ? 'w-64' : 'w-80'} bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col`}>
                <div className="p-3 border-b border-white/5 flex items-center gap-2 bg-zinc-900/50">
                    <Search size={14} className="text-zinc-500" />
                    <span className="text-xs text-zinc-500">Search commands...</span>
                    <span className="ml-auto text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">⌘K</span>
                </div>
                <div className="p-2 space-y-1">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-indigo-600/20 text-indigo-200">
                        <Layout size={14} />
                        <span className="text-xs font-medium">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg text-zinc-400 hover:bg-white/5">
                        <Command size={14} />
                        <span className="text-xs">Settings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const BentoGridPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'} overflow-hidden`}>
            <div className={`grid grid-cols-4 gap-2 ${small ? 'w-56 h-36' : 'w-80 h-52'}`}>
                <div className="col-span-2 row-span-2 bg-zinc-800 border border-white/5 rounded-xl flex flex-col p-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-700 mb-auto"></div>
                    <div className="h-2 w-16 bg-zinc-700 rounded"></div>
                </div>
                <div className="col-span-2 bg-zinc-900 border border-white/5 rounded-xl"></div>
                <div className="bg-zinc-900 border border-white/5 rounded-xl"></div>
                <div className="bg-zinc-900 border border-white/5 rounded-xl"></div>
            </div>
        </div>
    );
};

export const GlowHoverPreview: React.FC<PreviewProps> = ({ small }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'} overflow-hidden`}
            onMouseMove={handleMouseMove}
        >
            <div
                ref={divRef}
                className={`relative ${small ? 'w-48 h-32' : 'w-80 h-48'} bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden group`}
            >
                <div
                    className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`
                    }}
                />
                <span className="text-sm font-medium text-zinc-400 z-10">Hover me</span>
            </div>
        </div>
    );
};

export const TextRevealPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="space-y-1 text-center font-medium text-white text-2xl">
                <motion.div initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}>Hello</motion.div>
                <motion.div initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}>World</motion.div>
            </div>
        </div>
    );
}

export const SparklesPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="relative group cursor-default">
                <span className={`${small ? 'text-2xl' : 'text-4xl'} font-medium text-white`}>Sparkles</span>
                {/* Simulated sparkles */}
                <motion.div animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }} className="absolute -top-2 -right-3 text-yellow-300"><Sparkles size={16} /></motion.div>
                <motion.div animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, times: [0, 0.5, 1] }} className="absolute -bottom-2 -left-3 text-yellow-300"><Sparkles size={12} /></motion.div>
                <motion.div animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 1.0, repeat: Infinity, times: [0, 0.5, 1] }} className="absolute top-1/2 -right-5 text-yellow-300"><Sparkles size={10} /></motion.div>
            </div>
        </div>
    );
}

export const ConfettiPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="relative">
                <button className="px-5 py-2 bg-white text-black font-medium rounded-full text-sm">
                    Celebrate
                </button>
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: ['#FFC107', '#2196F3', '#E91E63', '#4CAF50'][i % 4] }}
                        animate={{
                            x: Math.cos(i * 30 * (Math.PI / 180)) * 50,
                            y: Math.sin(i * 30 * (Math.PI / 180)) * 50,
                            scale: [0, 1, 0],
                            opacity: [1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "circOut", delay: Math.random() }}
                    />
                ))}
            </div>
        </div>
    );
}

export const ParallaxPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'} overflow-hidden`}>
            <div className="absolute inset-x-0 h-[200%] top-[-50%] flex flex-col gap-4 items-center justify-center opacity-30">
                <motion.div animate={{ y: [-20, 20] }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} className="w-32 h-20 bg-zinc-800 rounded-lg"></motion.div>
                <motion.div animate={{ y: [-40, 40] }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} className="w-48 h-28 bg-zinc-700 rounded-lg"></motion.div>
                <motion.div animate={{ y: [-15, 15] }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} className="w-32 h-20 bg-zinc-800 rounded-lg"></motion.div>
            </div>
            <div className="z-10 bg-zinc-950/50 px-3 py-1 rounded border border-white/10 text-xs text-white">Scroll</div>
        </div>
    );
}

export const MagneticButtonPreview: React.FC<PreviewProps> = ({ small }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <motion.button
                ref={ref}
                animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-[0_0_20px_rgba(79,70,229,0.5)]"
            >
                Magnetic
            </motion.button>
        </div>
    );
}

export const MovingBorderPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="relative p-[1px] overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite]" />
                <div className="relative px-6 py-2 bg-slate-950 rounded-full text-white text-sm font-medium backdrop-blur-3xl">
                    Moving Border
                </div>
            </div>
        </div>
    );
}

export const SpotlightCardPreview: React.FC<PreviewProps> = ({ small }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}
            onMouseMove={handleMouseMove}
        >
            <div
                ref={divRef}
                className="relative w-48 h-32 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden flex items-center justify-center group"
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 80%)`
                    }}
                />
                <span className="text-zinc-500 text-sm z-10">Spotlight</span>
            </div>
        </div>
    );
}

export const RatingStarsPreview: React.FC<PreviewProps> = ({ small }) => {
    const [rating, setRating] = useState(3);
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                    <Star
                        key={i}
                        size={small ? 20 : 24}
                        className={`cursor-pointer transition-colors ${i <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-zinc-700 hover:text-yellow-500'}`}
                        onClick={(e) => { e.stopPropagation(); setRating(i); }}
                    />
                ))}
            </div>
        </div>
    );
}

export const InfiniteScrollPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'} overflow-hidden`}>
            <div className="absolute inset-0 bg-transparent z-10 border-y-[32px] border-zinc-950"></div>
            <div className="flex flex-col gap-3 w-40 opacity-70">
                {[1, 2, 3, 1, 2, 3].map((i, idx) => (
                    <motion.div
                        key={idx}
                        animate={{ y: [-100, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="h-10 w-full bg-zinc-900 rounded border border-white/5 flex items-center px-3"
                    >
                        <div className="w-1/2 h-2 bg-zinc-800 rounded"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export const AccordionPreview: React.FC<PreviewProps> = ({ small }) => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => setIsOpen(p => !p), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className={`w-48 bg-zinc-900 border border-white/10 rounded-lg overflow-hidden transition-all duration-300`}>
                <div className="p-3 flex justify-between items-center bg-white/5">
                    <div className="h-2 w-16 bg-zinc-500 rounded"></div>
                    <ChevronLeft size={14} className={`text-zinc-500 transition-transform ${isOpen ? '-rotate-90' : ''}`} />
                </div>
                <motion.div
                    animate={{ height: isOpen ? 60 : 0 }}
                    className="overflow-hidden bg-black/20"
                >
                    <div className="p-3 space-y-2">
                        <div className="h-1.5 w-full bg-zinc-800 rounded"></div>
                        <div className="h-1.5 w-2/3 bg-zinc-800 rounded"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export const StickyScrollPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="flex gap-4 w-48 h-32 overflow-hidden bg-zinc-900/50 rounded-lg p-2 border border-white/5">
                <div className="w-8 shrink-0">
                    <div className="w-full h-8 bg-indigo-500 rounded mb-20"></div>
                </div>
                <div className="flex-1 space-y-2">
                    <motion.div animate={{ y: [-60, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="space-y-4">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-16 bg-zinc-800 rounded"></div>)}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export const ModalPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
            <motion.div
                animate={{ scale: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-40 bg-zinc-900 border border-white/10 rounded-xl p-4 shadow-2xl"
            >
                <div className="h-2 w-10 bg-zinc-600 rounded mb-3"></div>
                <div className="space-y-2 mb-4">
                    <div className="h-1.5 w-full bg-zinc-800 rounded"></div>
                    <div className="h-1.5 w-2/3 bg-zinc-800 rounded"></div>
                </div>
                <div className="flex justify-end gap-2">
                    <div className="h-3 w-8 bg-zinc-800 rounded"></div>
                    <div className="h-3 w-8 bg-white rounded"></div>
                </div>
            </motion.div>
        </div>
    );
}

export const AnimatedTabsPreview: React.FC<PreviewProps> = ({ small }) => {
    const [active, setActive] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setActive(p => (p + 1) % 2), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="bg-zinc-900 p-1 rounded-full flex relative border border-white/5">
                <motion.div
                    animate={{ x: active === 0 ? 0 : '100%' }}
                    className="absolute left-1 top-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white rounded-full mix-blend-difference z-10"
                />
                <div className="px-4 py-1.5 rounded-full text-xs text-zinc-400 font-medium">Monthly</div>
                <div className="px-4 py-1.5 rounded-full text-xs text-zinc-400 font-medium">Yearly</div>
            </div>
        </div>
    );
}

export const FloatingDockPreview: React.FC<PreviewProps> = ({ small }) => {
    const dockItems = [1, 2, 3, 4];
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'}`}>
            <div className="flex items-end gap-2 px-3 pb-2 pt-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                {dockItems.map(i => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.5, translateY: -10 }}
                        className="w-8 h-8 rounded-lg bg-gradient-to-t from-gray-700 to-gray-600 border-t border-white/20 shadow-lg cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
}

export const DefaultPreview: React.FC<{ item: ComponentItem; small?: boolean }> = ({ item, small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'h-full' : 'min-h-[500px]'} border border-white/10`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${item.imageGradient} opacity-10`} />
            <div className="relative z-10 text-center">
                <div className={`${small ? 'w-12 h-12' : 'w-16 h-16'} mx-auto mb-2 rounded-xl bg-gradient-to-br ${item.imageGradient} flex items-center justify-center shadow-lg`}>
                    <Layers className="text-white" size={20} />
                </div>
            </div>
        </div>
    );
};

export const ComponentPreview: React.FC<{ item: ComponentItem; small?: boolean }> = ({ item, small }) => {
    switch (item.title) {
        case 'Animated Gradients': return <AnimatedGradientPreview small={small} />;
        case 'Glassy Button': return <GlassyButtonPreview small={small} />;
        case '3D Card Tilt': return <TiltCardPreview small={small} />;
        case 'Typewriter Effect': return <TypewriterPreview small={small} />;
        case 'Command Palette': return <CommandPalettePreview small={small} />;
        case 'Bento Grid': return <BentoGridPreview small={small} />;
        case 'Glow Hover': return <GlowHoverPreview small={small} />;
        case 'Text Reveal': return <TextRevealPreview small={small} />;
        case 'Sparkles': return <SparklesPreview small={small} />;
        case 'Confetti Explosion': return <ConfettiPreview small={small} />;
        case 'Parallax Scroll': return <ParallaxPreview small={small} />;
        case 'Magnetic Button': return <MagneticButtonPreview small={small} />;
        case 'Moving Border': return <MovingBorderPreview small={small} />;
        case 'Spotlight Card': return <SpotlightCardPreview small={small} />;
        case 'Rating Stars': return <RatingStarsPreview small={small} />;
        case 'Infinite Scroll': return <InfiniteScrollPreview small={small} />;
        case 'Accordion': return <AccordionPreview small={small} />;
        case 'Sticky Scroll': return <StickyScrollPreview small={small} />;
        case 'Modal Dialog': return <ModalPreview small={small} />;
        case 'Animated Tabs': return <AnimatedTabsPreview small={small} />;
        case 'Floating Dock': return <FloatingDockPreview small={small} />;
        default: return <DefaultPreview item={item} small={small} />;
    }
};