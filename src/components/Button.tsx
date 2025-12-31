import React from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'ghost' | 'destructive' | 'outline' | 'glass';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    isLoading?: boolean;
}

// Button variants and sizes extracted for reuse
const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
    ghost: 'hover:bg-zinc-800/50 text-zinc-300 hover:text-white',
    destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
    outline: 'border border-zinc-700 bg-transparent hover:bg-zinc-800 text-zinc-100',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg',
};

const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
};

export const buttonVariants = ({ variant = 'default', size = 'default', className }: { variant?: keyof typeof variants, size?: keyof typeof sizes, className?: string } = {}) => {
    return cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
    );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonVariants({ variant: variant as any, size: size as any, className })}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
