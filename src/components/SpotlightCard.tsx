import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils';

export const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255,255,255,0.15)" }: { children: React.ReactNode; className?: string; spotlightColor?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-xl border border-white/10 bg-zinc-900 overflow-hidden",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
