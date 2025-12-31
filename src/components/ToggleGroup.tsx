import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Toggle } from './Toggle';

interface ToggleGroupProps {
    type?: 'single' | 'multiple';
    value?: string | string[];
    onValueChange?: (value: any) => void;
    children: React.ReactNode;
    className?: string;
}

export const ToggleGroup = ({ type = 'single', value, onValueChange, children, className }: ToggleGroupProps) => {
    // Simple implementation wrapper
    // Children MUST be Toggle components with a value prop (generic approach)
    // Actually, Radix does this via context. We'll do simple cloneElement for now.

    const handleToggle = (itemValue: string, pressed: boolean) => {
        if (type === 'single') {
            onValueChange?.(pressed ? itemValue : undefined);
        } else {
            const currentObj = Array.isArray(value) ? value : [];
            if (pressed) {
                onValueChange?.([...currentObj, itemValue]);
            } else {
                onValueChange?.(currentObj.filter((v: string) => v !== itemValue));
            }
        }
    };

    return (
        <div className={cn("flex items-center justify-center gap-1", className)}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    const itemValue = child.props.value;
                    const pressed = type === 'single' ? value === itemValue : (Array.isArray(value) && value.includes(itemValue));

                    return React.cloneElement(child as React.ReactElement<any>, {
                        pressed,
                        onPressedChange: (p: boolean) => handleToggle(itemValue, p)
                    });
                }
                return child;
            })}
        </div>
    );
};

export const ToggleGroupItem = ({ value, ...props }: React.ComponentProps<typeof Toggle> & { value: string }) => {
    return <Toggle {...props} />;
}
