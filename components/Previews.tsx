import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, Layers, Command, MousePointer2, Type } from 'lucide-react';
import { ComponentItem } from '../types';

interface PreviewProps {
  small?: boolean;
}

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
                {/* Glossy sheen effect */}
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
                   <p className="text-zinc-500 font-medium text-sm">Premium</p>
                </div>
                
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex gap-2 mb-4">
                        <div className="h-1.5 w-12 bg-zinc-700 rounded-full"></div>
                        <div className="h-1.5 w-6 bg-zinc-800 rounded-full"></div>
                    </div>
                    <div className={`${small ? 'p-3' : 'p-4'} rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm`}>
                        <div className="flex items-center justify-between text-xs text-zinc-400">
                            <span>Balance</span>
                            <span className="text-white font-mono">$24k</span>
                        </div>
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
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
          style={{
            background: 'conic-gradient(from 0deg, #4f46e5, #06b6d4, #0ea5e9, #4f46e5)',
          }}
        />
        <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-3xl" />
        
        <div className={`relative z-10 ${small ? 'p-6 max-w-[200px]' : 'p-10 max-w-sm'} bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl text-center`}>
            <div className={`${small ? 'w-10 h-10 mb-4' : 'w-16 h-16 mb-6'} mx-auto bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg`}>
                <Sparkles className="text-white" size={small ? 20 : 24} />
            </div>
            {!small && (
                <>
                    <h2 className="text-2xl font-bold text-white mb-2">Next Gen UI</h2>
                    <p className="text-zinc-400">Experience smooth, performant WebGL-powered gradients.</p>
                </>
            )}
        </div>
      </div>
    );
};

export const GlassyButtonPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} bg-[url('https://grainy-gradients.vercel.app/noise.svg')]`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        
        <div className={`relative z-10 flex flex-col ${small ? 'gap-3 scale-90' : 'gap-6'}`}>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative ${small ? 'px-6 py-3 text-sm' : 'px-8 py-4'} bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-semibold shadow-2xl overflow-hidden`}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2">
                    Start Building <ChevronLeft className="rotate-180" size={16} />
                </span>
            </motion.button>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${small ? 'px-6 py-3 text-sm' : 'px-8 py-4'} bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-2xl text-indigo-200 font-semibold shadow-2xl hover:bg-indigo-500/30 transition-colors`}
            >
                Secondary Action
            </motion.button>
        </div>
      </div>
    );
};

export const TypewriterPreview: React.FC<PreviewProps> = ({ small }) => {
  return (
    <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} border border-white/10`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 opacity-20`} />
        <div className="relative z-10 flex items-center gap-1 font-mono text-white">
            <span className={`${small ? 'text-2xl' : 'text-5xl'} font-bold`}>We build</span>
            <span className={`${small ? 'text-2xl' : 'text-5xl'} font-bold text-indigo-400 border-r-4 border-indigo-500 pr-1 animate-pulse`}>
                apps
            </span>
        </div>
    </div>
  );
};

export const CommandPalettePreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-20" />
            
            <div className={`${small ? 'w-64' : 'w-96'} bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden`}>
                <div className="p-3 border-b border-white/5 flex items-center gap-2">
                    <Command size={14} className="text-zinc-500" />
                    <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse"></div>
                </div>
                <div className="p-2 space-y-1">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${i === 1 ? 'bg-indigo-500/20' : ''}`}>
                            <div className="w-4 h-4 rounded bg-zinc-800"></div>
                            <div className="h-3 w-32 bg-zinc-800 rounded"></div>
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
             <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10" />
             <div className={`grid grid-cols-3 gap-3 ${small ? 'w-64 h-40' : 'w-96 h-64'}`}>
                 <div className="col-span-2 row-span-2 bg-zinc-800/50 border border-white/5 rounded-2xl animate-pulse"></div>
                 <div className="bg-zinc-800/30 border border-white/5 rounded-2xl"></div>
                 <div className="bg-zinc-800/30 border border-white/5 rounded-2xl"></div>
             </div>
        </div>
    );
};

export const GlowHoverPreview: React.FC<PreviewProps> = ({ small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} overflow-hidden group`}>
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
             <div className={`relative ${small ? 'w-48 h-32' : 'w-80 h-48'} bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden`}>
                <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <MousePointer2 className="text-white relative z-10 mix-blend-difference" size={32} />
                <div className="absolute w-24 h-24 bg-blue-500/30 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
             </div>
        </div>
    );
};

export const DefaultPreview: React.FC<{ item: ComponentItem; small?: boolean }> = ({ item, small }) => {
    return (
        <div className={`relative w-full h-full bg-zinc-950 flex items-center justify-center ${small ? 'min-h-[240px]' : 'min-h-[500px]'} border border-white/10`}>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.imageGradient} opacity-20`} />
            
            <div className="relative z-10 text-center p-4">
                <div className={`${small ? 'w-16 h-16' : 'w-24 h-24'} mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.imageGradient} flex items-center justify-center shadow-lg opacity-80 backdrop-blur-md border border-white/10`}>
                    {item.category === 'animation' && <Sparkles className="text-white" size={small ? 24 : 32} />}
                    {item.category === 'layout' && <Layers className="text-white" size={small ? 24 : 32} />}
                    {item.category === 'input' && <MousePointer2 className="text-white" size={small ? 24 : 32} />}
                    {item.category === 'navigation' && <Command className="text-white" size={small ? 24 : 32} />}
                </div>
                {!small && (
                    <>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-500">Interactive preview available soon.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export const ComponentPreview: React.FC<{ item: ComponentItem; small?: boolean }> = ({ item, small }) => {
  switch (item.title) {
    case 'Animated Gradients':
      return <AnimatedGradientPreview small={small} />;
    case 'Glassy Button':
      return <GlassyButtonPreview small={small} />;
    case '3D Card Tilt':
      return <TiltCardPreview small={small} />;
    case 'Typewriter Effect':
      return <TypewriterPreview small={small} />;
    case 'Command Palette':
        return <CommandPalettePreview small={small} />;
    case 'Bento Grid':
        return <BentoGridPreview small={small} />;
    case 'Glow Hover':
        return <GlowHoverPreview small={small} />;
    default:
      return <DefaultPreview item={item} small={small} />;
  }
};