import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
    ({ className, pressed, onPressedChange, variant = 'default', size = 'default', ...props }, ref) => {
        const [isPressed, setIsPressed] = useState(pressed || false);

        const toggle = () => {
            const newValue = !isPressed;
            setIsPressed(newValue);
            onPressedChange?.(newValue);
        };

        React.useEffect(() => {
            if (pressed !== undefined) setIsPressed(pressed);
        }, [pressed]);

        return (
            <button
                ref={ref}
                type="button"
                aria-pressed={isPressed}
                onClick={toggle}
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    isPressed && "bg-zinc-800 text-zinc-100",
                    variant === 'outline' && "border border-zinc-800 bg-transparent hover:bg-zinc-800",
                    size === 'default' && "h-9 px-3",
                    size === 'sm' && "h-8 px-2",
                    size === 'lg' && "h-10 px-3",
                    className
                )}
                {...props}
            />
        );
    }
);
Toggle.displayName = "Toggle";
