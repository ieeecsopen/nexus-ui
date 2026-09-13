import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export const HoverCard = ({ trigger, children, className, ...rest }: { trigger: React.ReactNode; children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...rest} className="group relative inline-block">
            {trigger}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto z-50">
                <div className={cn("bg-zinc-900 border border-white/10 rounded-xl p-4 shadow-xl w-64", className)}>
                    {children}
                </div>
            </div>
        </div>
    );
};
