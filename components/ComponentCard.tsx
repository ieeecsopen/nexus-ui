import React from 'react';
import { ComponentItem } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ComponentPreview } from './Previews';

interface Props {
  item: ComponentItem;
  className?: string;
  onClick?: () => void;
}

const ComponentCard: React.FC<Props> = ({ item, className = '', onClick }) => {
  return (
    <motion.div
      className={`group bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:border-white/25 transition-colors duration-500 ${className}`}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5">
        <h3 className="text-lg font-light text-white tracking-tight group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-white/30 group-hover:text-white transition-all duration-500">
          <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      {/* Preview Area (Folder style) */}
      <div className="p-8 flex-1 flex items-center justify-center bg-zinc-900/20 relative min-h-[240px]">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px]" />

        {/* Actual Preview */}
        <div className="relative z-10 scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
          <ComponentPreview item={item} small />
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentCard;