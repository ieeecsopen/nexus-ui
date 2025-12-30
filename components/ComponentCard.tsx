import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { Play, ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ComponentPreview } from './Previews';

interface Props {
  item: ComponentItem;
  className?: string;
  onClick?: () => void;
}

const ComponentCard: React.FC<Props> = ({ item, className = '', onClick }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const componentName = item.title.replace(/\s+/g, '');
    const snippet = `import { ${componentName} } from '@nexus/ui';\n\nexport default function Example() {\n  return <${componentName} />;\n}`;

    navigator.clipboard.writeText(snippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      className={`group relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden flex flex-col cursor-pointer ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      variants={{
        rest: { y: 0, borderColor: "rgba(255,255,255,0.05)" },
        hover: {
          y: -8,
          borderColor: "rgba(99, 102, 241, 0.3)", // indigo glow
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5), 0 0 20px -5px rgba(99, 102, 241, 0.15)",
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }
      }}
    >
      {/* Image / Preview Area */}
      <div className={`flex-1 min-h-[240px] w-full bg-zinc-950 relative overflow-hidden`}>

        {/* New Badge with Tooltip */}
        {item.isNew && (
          <div className="absolute top-4 left-4 z-30 group/new">
            <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-lg cursor-help">
              New
            </div>
            {/* Tooltip */}
            <div className="absolute top-full left-0 mt-2 opacity-0 group-hover/new:opacity-100 transition-all duration-200 transform translate-y-1 group-hover/new:translate-y-0 pointer-events-none">
              <div className="bg-zinc-950/90 backdrop-blur-md text-zinc-300 text-[10px] font-medium py-1.5 px-3 rounded-lg border border-white/10 shadow-xl whitespace-nowrap relative">
                <div className="absolute -top-1 left-3 w-2 h-2 bg-zinc-950/90 border-t border-l border-white/10 rotate-45"></div>
                Freshly added this week
              </div>
            </div>
          </div>
        )}

        {/* Component Preview Rendered Here */}
        <ComponentPreview item={item} small />

        {/* Action Overlay */}
        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-2 z-20"
          variants={{
            rest: { opacity: 0, y: 10, scale: 0.9 },
            hover: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.2, ease: "easeOut" }
            }
          }}
        >
          <button
            onClick={handleCopy}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-black/60 hover:scale-105 transition-all active:scale-95"
            title="Copy Code"
          >
            {isCopied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
          </button>
          <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95">
            <ArrowUpRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 relative bg-zinc-900 z-10 border-t border-white/5 group-hover:bg-zinc-900/80 transition-colors">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors font-walsheim">{item.title}</h3>
            <p className="text-sm text-zinc-500">{item.category}</p>
          </div>
          <div className="flex gap-2">
            {item.price === 'pro' && (
              <div className="relative group/pro">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-black bg-white text-black tracking-wide cursor-help block">PRO</span>
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover/pro:opacity-100 transition-all duration-200 transform translate-y-1 group-hover/pro:translate-y-0 pointer-events-none z-40">
                  <div className="bg-zinc-950/90 backdrop-blur-md text-zinc-300 text-[10px] font-medium py-1.5 px-3 rounded-lg border border-white/10 shadow-xl whitespace-nowrap relative">
                    <div className="absolute -bottom-1 right-3 w-2 h-2 bg-zinc-950/90 border-b border-r border-white/10 rotate-45"></div>
                    Included in Pro Plan
                  </div>
                </div>
              </div>
            )}
            {item.price === 'free' && (
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-zinc-800 text-zinc-400 border border-zinc-700">FREE</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentCard;