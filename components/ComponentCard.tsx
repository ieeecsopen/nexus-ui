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
      className={`group bg-[#09090b] hover:bg-[#111113] border border-white/5 rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ${className}`}
      onClick={onClick}
      whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
    >
      {/* Header */}
      <div className="p-5 flex items-center justify-between border-b border-white/5">
        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <ArrowRight
          size={16}
          className="text-zinc-600 group-hover:text-zinc-300 transition-colors transform group-hover:translate-x-1"
        />
      </div>

      {/* Preview Area (Folder style) */}
      <div className="p-6 flex-1 flex items-center justify-center bg-[#050505] relative min-h-[220px]">
        {/* Background Accent Gradient */}
        {/* Background Accent Gradient Removed as per user request */}

        {/* Actual Preview */}
        <div className="relative z-10 scale-90 group-hover:scale-100 transition-transform duration-300">
          <ComponentPreview item={item} small />
        </div>
      </div>

      {/* Footer Info (Optional - variations count mock) */}
      {/* <div className="px-5 py-3 border-t border-white/5 bg-zinc-900/50">
         <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-medium">3 Variations</span>
      </div> */}
    </motion.div>
  );
};

export default ComponentCard;