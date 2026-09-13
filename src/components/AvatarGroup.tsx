import React from 'react';
import { cn } from '../lib/utils';
import { Avatar } from './Avatar';

export const AvatarGroup = ({ children, max = 3, className, ...rest }: { children: React.ReactNode[]; max?: number; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
    const total = React.Children.count(children);
    const visibleChildren = React.Children.toArray(children).slice(0, max);
    const remaining = total - max;

    return (
        <div {...rest} className={cn("flex -space-x-3 *:[ring-2] *:[ring-background]", className)}>
            {visibleChildren}
            {remaining > 0 && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 border-2 border-zinc-950 text-xs font-medium text-zinc-300">
                    +{remaining}
                </div>
            )}
        </div>
    );
};
