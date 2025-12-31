import React from 'react';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

interface RadioGroupContextValue {
    value?: string;
    onValueChange?: (value: string) => void;
    name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

export const RadioGroup = ({ value, onValueChange, className, children, name }: { value?: string, onValueChange?: (value: string) => void, className?: string, children?: React.ReactNode, name?: string }) => {
    return (
        <RadioGroupContext.Provider value={{ value, onValueChange, name }}>
            <div className={cn("grid gap-2", className)} role="radiogroup">
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }>(
    ({ className, value, ...props }, ref) => {
        const context = React.useContext(RadioGroupContext);
        const checked = context.value === value;

        return (
            <button
                ref={ref}
                role="radio"
                aria-checked={checked}
                onClick={() => context.onValueChange?.(value)}
                className={cn(
                    "aspect-square h-4 w-4 rounded-full border border-zinc-200 border-zinc-800 text-indigo-600 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                {...props}
            >
                <span className="flex items-center justify-center">
                    {checked && <div className="h-2.5 w-2.5 rounded-full bg-current" />}
                </span>
            </button>
        );
    }
);
RadioGroupItem.displayName = "RadioGroupItem";
