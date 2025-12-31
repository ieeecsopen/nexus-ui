import React from 'react';
import { cn } from '../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'pill' | 'dot';
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
    const variants = {
        default: 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700',
        secondary: 'border-transparent bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
        outline: 'text-zinc-100 border-zinc-700',
        destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700',
        pill: 'rounded-full border-transparent bg-indigo-600 text-white hover:bg-indigo-700',
        dot: 'w-3 h-3 p-0 rounded-full'
    };

    return (
        <div className={cn(
            "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            variants[variant],
            className
        )} {...props} />
    );
};
