import React from 'react';
import { cn } from '../lib/utils';

export const Kbd = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <kbd className={cn(
            "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400 opacity-100",
            className
        )}>
            {children}
        </kbd>
    );
};
