import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean | 'indeterminate';
    onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, checked, onCheckedChange, ...props }, ref) => {
    // We are building a styled checkbox. The actual input should be hidden but accessible.
    // However, for simplicity without strict Radix primitives, we'll make a custom visual 
    // that wraps a real checkbox or manages state if controlled.

    // Controlled wrapper around naive input for simplicity in this task.

    return (
        <label className={cn("peer h-4 w-4 shrink-0 rounded-sm border border-zinc-700 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-indigo-600 data-[state=checked]:text-white flex items-center justify-center cursor-pointer bg-zinc-900", className)}>
            <input
                type="checkbox"
                className="sr-only"
                ref={ref}
                checked={checked === 'indeterminate' ? false : checked}
                onChange={(e) => onCheckedChange?.(e.target.checked)}
                {...props}
            />
            {checked === true && <Check className="h-3 w-3 text-white" />}
            {checked === 'indeterminate' && <div className="h-0.5 w-2 bg-white" />}
        </label>
    )
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
