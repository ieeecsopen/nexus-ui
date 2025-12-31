import React from 'react';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, startAdornment, ...props }, ref) => {
    return (
        <div className="relative w-full">
            {startAdornment && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                    {startAdornment}
                </div>
            )}
            <input
                type={type}
                className={cn(
                    "flex h-9 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 text-zinc-100",
                    startAdornment ? "pl-9" : "",
                    className
                )}
                ref={ref}
                {...props}
            />
        </div>
    );
});
Input.displayName = "Input";

export { Input };
