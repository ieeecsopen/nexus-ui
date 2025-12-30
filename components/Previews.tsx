import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, Layers, Command, MousePointer2, Star, Plus, Minus, X, MoreHorizontal, Layout, Search } from 'lucide-react';
import { ComponentItem } from '../types';

interface PreviewProps {
    small?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                               Existing Previews                            */
/* -------------------------------------------------------------------------- */

export const TiltCardPreview: React.FC<PreviewProps> = ({ small }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateXValue = ((mouseY / (rect.height / 2)) * -15);
        const rotateYValue = ((mouseX / (rect.width / 2)) * 15);

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    return (
        <div
            className={`w-full h-full flex items-center justify-center bg-zinc-950 perspective-[1000px] relative overflow-hidden ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
        >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <motion.div
                ref={ref}
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`${small ? 'w-56 h-72 p-5' : 'w-80 h-[420px] p-8'} bg-zinc-900/90 backdrop-blur-xl rounded-[30px] border border-white/10 flex flex-col justify-between relative group cursor-default shadow-2xl`}
            >
                <div
                    className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.05) 40%, transparent 60%)'
                    }}
                />

                <div className="relative z-10" style={{ transform: 'translateZ(40px)' }}>
                    <div className={`${small ? 'w-10 h-10 mb-6' : 'w-14 h-14 mb-8'} rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-500 shadow-lg flex items-center justify-center`}>
                        <Sparkles className="text-white" size={small ? 18 : 24} />
                    </div>
                    <h3 className={`${small ? 'text-xl' : 'text-3xl'} font-bold text-white mb-2`}>Nexus</h3>
                </div>

                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex gap-2 mb-4">
                        <div className="h-1.5 w-12 bg-zinc-700 rounded-full"></div>
                        <div className="h-1.5 w-6 bg-zinc-800 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const AnimatedGradientPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full overflow-hidden bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <motion.div
                className="absolute -inset-[50%] opacity-40 blur-[120px]"
                animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.1, 0.9, 1.2, 0.8],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear", times: [0, 0.2, 0.5, 0.8, 1] }}
                style={{ background: 'conic-gradient(from 0deg, #4f46e5, #06b6d4, #0ea5e9, #4f46e5)' }}
            />
            <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-3xl" />
            <div className={`relative z-10 ${small ? 'p-6 max-w-[200px]' : 'p-10 max-w-sm'} bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl text-center`}>
                <Sparkles className="text-white mx-auto mb-2" size={small ? 24 : 32} />
            </div>
        </div>
    );
};

export const GlassyButtonPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full overflow-hidden bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} bg-[url('https://grainy-gradients.vercel.app/noise.svg')]`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]" />
            <div className={`relative z-10 flex flex-col ${small ? 'gap-3 scale-90' : 'gap-6'}`}>
                <motion.button className={`group relative px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-semibold shadow-2xl overflow-hidden`}>
                    <span className="relative z-10 flex items-center gap-2">Glass Button</span>
                </motion.button>
            </div>
        </div>
    );
};

export const TypewriterPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="relative z-10 flex items-center gap-1 font-mono text-white">
                <span className={`${small ? 'text-xl' : 'text-3xl'} font-bold`}>We build</span>
                <span className={`${small ? 'text-xl' : 'text-3xl'} font-bold text-indigo-400 border-r-4 border-indigo-500 pr-1 animate-pulse`}>AI</span>
            </div>
        </div>
    );
};

export const CommandPalettePreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden`}>
            <div className={`${small ? 'w-56' : 'w-80'} bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden`}>
                <div className="p-3 border-b border-white/5 flex items-center gap-2">
                    <Search size={14} className="text-zinc-500" />
                    <div className="h-3 w-20 bg-zinc-800 rounded animate-pulse"></div>
                </div>
                <div className="p-2 space-y-1">
                    {[1, 2].map(i => (
                        <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${i === 1 ? 'bg-white/5' : ''}`}>
                            <div className="w-3 h-3 rounded bg-zinc-800"></div>
                            <div className="h-2 w-24 bg-zinc-800 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const BentoGridPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden`}>
            <div className={`grid grid-cols-3 gap-2 ${small ? 'w-56 h-32' : 'w-80 h-48'}`}>
                <div className="col-span-2 row-span-2 bg-zinc-800/50 border border-white/5 rounded-xl"></div>
                <div className="bg-zinc-800/30 border border-white/5 rounded-xl"></div>
                <div className="bg-zinc-800/30 border border-white/5 rounded-xl"></div>
            </div>
        </div>
    );
};

export const GlowHoverPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden group`}>
            <div className={`relative ${small ? 'w-48 h-32' : 'w-80 h-48'} bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden`}>
                <div className="absolute w-24 h-24 bg-blue-500/30 blur-2xl rounded-full pointer-events-none translate-x-10 translate-y-10"></div>
                <MousePointer2 className="text-white relative z-10" size={24} />
            </div>
        </div>
    );
};

/* -------------------------------------------------------------------------- */
/*                                New Previews                                */
/* -------------------------------------------------------------------------- */

export const TextRevealPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="space-y-2 text-center">
                <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    className={`${small ? 'text-2xl' : 'text-4xl'} font-bold text-white`}
                >
                    Reveal.
                </motion.div>
            </div>
        </div>
    );
}

export const SparklesPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="relative">
                <span className={`${small ? 'text-2xl' : 'text-4xl'} font-bold text-white relative z-10`}>Magic</span>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 text-yellow-400"
                >
                    <Sparkles size={20} />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -180, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute -bottom-2 -left-4 text-yellow-400"
                >
                    <Sparkles size={16} />
                </motion.div>
            </div>
        </div>
    );
}

export const ConfettiPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-sm shadow-lg transform active:scale-95 transition-transform">
                Pop!
            </button>
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'][i] }}
                        animate={{
                            x: Math.cos(i * 60 * (Math.PI / 180)) * 60,
                            y: Math.sin(i * 60 * (Math.PI / 180)) * 60,
                            opacity: [1, 0]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                ))}
            </div>
        </div>
    );
}

export const ParallaxPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden`}>
            <div className="space-y-4 opacity-50">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-20 bg-zinc-800 rounded-lg mx-auto"></motion.div>
                <motion.div animate={{ y: [0, -40, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-40 h-24 bg-zinc-700 rounded-lg mx-auto"></motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-32 h-20 bg-zinc-800 rounded-lg mx-auto"></motion.div>
            </div>
        </div>
    );
}

export const MagneticButtonPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="relative group">
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button className="relative px-6 py-2 bg-white text-black font-bold rounded-full transform group-hover:-translate-y-1 transition-transform">
                    Hover
                </button>
            </div>
        </div>
    );
}

export const MovingBorderPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="relative p-[1px] overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-[200%] animate-[spin_3s_linear_infinite]" />
                <div className="relative px-6 py-2 bg-zinc-950 rounded-full text-white text-sm font-medium">
                    Border
                </div>
            </div>
        </div>
    );
}

export const SpotlightCardPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="w-48 h-32 bg-zinc-900 border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <span className="text-zinc-500 text-sm">Spotlight</span>
            </div>
        </div>
    );
}

export const RatingStarsPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="flex gap-1">
                {[1, 2, 3].map(i => <Star key={i} size={small ? 20 : 24} className="fill-yellow-500 text-yellow-500" />)}
                <Star size={small ? 20 : 24} className="text-zinc-700" />
                <Star size={small ? 20 : 24} className="text-zinc-700" />
            </div>
        </div>
    );
}

export const InfiniteScrollPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden`}>
            <div className="flex flex-col gap-2 opacity-50 w-32">
                {[1, 2, 3, 1, 2, 3].map((i, idx) => (
                    <motion.div
                        key={idx}
                        animate={{ y: [-100, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="h-12 w-full bg-zinc-800 rounded-lg border border-white/5"
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-10"></div>
        </div>
    );
}

export const AccordionPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="w-48 space-y-2">
                <div className="bg-zinc-900 border border-white/10 rounded-lg p-3">
                    <div className="h-2 w-20 bg-zinc-700 rounded mb-2"></div>
                    <div className="h-1 w-full bg-zinc-800 rounded"></div>
                    <div className="h-1 w-2/3 bg-zinc-800 rounded mt-1"></div>
                </div>
                <div className="bg-zinc-900 border border-white/10 rounded-lg p-3 flex justify-between items-center opacity-50">
                    <div className="h-2 w-20 bg-zinc-700 rounded"></div>
                    <Plus size={12} className="text-zinc-500" />
                </div>
            </div>
        </div>
    );
}

export const StickyScrollPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="flex gap-4 w-48 h-32">
                <div className="w-1/3 h-full pt-4">
                    <div className="w-full h-8 bg-indigo-500 rounded mb-2 sticky top-0"></div>
                </div>
                <div className="w-2/3 h-full space-y-4 overflow-hidden mask-linear-fade">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-16 bg-zinc-800 rounded"></div>)}
                </div>
            </div>
        </div>
    );
}

export const ModalPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            <div className="relative w-40 bg-zinc-900 border border-white/10 rounded-xl p-4 shadow-2xl transform scale-90">
                <div className="flex justify-between items-center mb-3">
                    <div className="h-2 w-12 bg-zinc-700 rounded"></div>
                    <X size={10} className="text-zinc-600" />
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-zinc-800 rounded"></div>
                    <div className="h-1.5 w-2/3 bg-zinc-800 rounded"></div>
                </div>
                <div className="mt-3 flex justify-end gap-2">
                    <div className="h-4 w-10 bg-zinc-800 rounded"></div>
                    <div className="h-4 w-10 bg-white rounded"></div>
                </div>
            </div>
        </div>
    );
}

export const AnimatedTabsPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="bg-zinc-900/50 p-1 rounded-full flex gap-1 border border-white/5">
                <div className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] text-white">Item</div>
                <div className="px-3 py-1 rounded-full text-[10px] text-zinc-500">Item</div>
            </div>
        </div>
    );
}

export const FloatingDockPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'}`}>
            <div className="flex items-end gap-2 px-3 pb-2 pt-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/5">
                <div className="w-6 h-6 bg-red-500 rounded-lg"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-lg mb-2"></div>
                <div className="w-6 h-6 bg-green-500 rounded-lg"></div>
            </div>
        </div>
    );
}

export const DefaultPreview: React.FC<{ item: ComponentItem; small?: boolean }> = ({ item, small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} border border-white/10`}>
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
        // New mappings
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