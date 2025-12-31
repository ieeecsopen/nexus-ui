import React from 'react';
import { cn } from '../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    containerClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, containerClassName, children, ...props }, ref) => {
        return (
            <div className={cn("relative w-full", containerClassName)}>
                <select
                    className={cn(
                        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none text-zinc-100",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <ChevronDown className="h-4 w-4" />
                </div>
            </div>
        );
    }
);
Select.displayName = "Select";
