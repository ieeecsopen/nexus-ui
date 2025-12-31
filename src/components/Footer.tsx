import React from 'react';
import { cn } from '../lib/utils';

export const Footer = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <footer className={cn("border-t border-white/10 bg-zinc-950 py-12 px-6", className)}>
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
                {children}
            </div>
        </footer>
    );
};
