'use client';

import React from 'react';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../lib/use-reduced-motion';

export interface MovingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    duration?: number;
    containerClassName?: string;
    borderClassName?: string;
    children?: React.ReactNode;
}

export const MovingBorder = ({ children, duration = 2000, className, containerClassName, borderClassName, ...otherProps }: MovingBorderProps) => {
    // The rotating gradient is continuous movement; reduce-motion freezes it in
    // place while the border itself stays visible.
    const reducedMotion = useReducedMotion();
    return(
        <div className={cn("bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ", containerClassName)} {...otherProps}>
            <div className="absolute inset-0" >
                <div className={cn("absolute aspect-square bg-[radial-gradient(var(--sky-500)_0%,transparent_100%)] to-transparent h-full w-full object-cover animate-spin-slow", borderClassName)}
                    style={{ animationDuration: reducedMotion ? '0s' : `${duration}ms`, animationPlayState: reducedMotion ? 'paused' : undefined }}
                />
            </div>
            <div className={cn("relative bg-slate-900 border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased", className)}>
                {children}
            </div>
        </div>
    );
};
