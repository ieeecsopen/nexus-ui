import React from 'react';
import { cn } from '../lib/utils';

export interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number[];
    onValueChange?: (value: number[]) => void;
    className?: string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
    ({ className, min = 0, max = 100, step = 1, value = [0], onValueChange, ...props }, ref) => {
        // Native range input wrapper for simplicity
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onValueChange?.([parseFloat(e.target.value)]);
        };

        return (
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value[0]}
                onChange={handleChange}
                className={cn(
                    "w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600",
                    className
                )}
                ref={ref}
                {...props as any}
            />
        );
    }
);
Slider.displayName = "Slider";
