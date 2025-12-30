import React from 'react';
import { TemplateItem } from '../types';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';

interface Props {
    item: TemplateItem;
    onViewDetails: () => void;
    onViewDemo: () => void;
}

const TemplateCard: React.FC<Props> = ({ item, onViewDetails, onViewDemo }) => {
    return (
        <div
            className="group flex flex-col bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors cursor-pointer"
            onClick={onViewDetails}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-md ${item.price === 'Free'
                            ? 'bg-zinc-800/90 text-white border border-zinc-700'
                            : 'bg-white text-black'
                        }`}>
                        {item.price}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-medium text-white mb-2 font-walsheim group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                </div>

                {/* Features / Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3">
                    <button
                        onClick={(e) => { e.stopPropagation(); onViewDemo(); }}
                        className="flex-1 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 z-20 relative"
                    >
                        View Demo <ExternalLink size={14} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
                        className="flex-1 py-2.5 rounded-xl bg-zinc-800 text-white text-sm font-semibold border border-zinc-700 hover:bg-zinc-700 transition-colors z-20 relative"
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;