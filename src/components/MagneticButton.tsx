import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../lib/use-reduced-motion';
import { ButtonProps } from './Button';

interface MagneticButtonProps extends ButtonProps {
    springConfig?: { stiffness: number; damping: number; mass: number };
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
    ({ children, className, springConfig = { stiffness: 150, damping: 15, mass: 0.1 }, ...props }, ref) => {
        const localRef = useRef<HTMLButtonElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });
        // Magnetic pull is pointer-driven movement; reduce-motion users get a
        // plain stationary button.
        const reducedMotion = useReducedMotion();

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (reducedMotion) return;
            const { clientX, clientY } = e;
            const rect = localRef.current?.getBoundingClientRect();
            if (rect) {
                const x = clientX - (rect.left + rect.width / 2);
                const y = clientY - (rect.top + rect.height / 2);
                setPosition({ x, y });
            }
        };

        const reset = () => setPosition({ x: 0, y: 0 });

        return (
            <motion.button
                ref={localRef}
                animate={{ x: position.x, y: position.y }}
                onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                transition={{ type: "spring", ...springConfig }}
                className={cn(
                    "px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:bg-indigo-700 transition-colors",
                    className
                )}
                {...props as any}
            >
                {children}
            </motion.button>
        );
    }
);

MagneticButton.displayName = "MagneticButton";
