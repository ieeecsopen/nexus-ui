import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const TextGlowHover = ({ text = "Glow", className = "", ...rest }: { text?: string; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            {...rest}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-default inline-block ${className}`}
        >
            <motion.span
                className="absolute inset-0 z-0 text-blue-500 blur-2xl opacity-50"
                animate={{ x: position.x * 1.5, y: position.y * 1.5 }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute inset-0 z-10 text-cyan-400 blur-md opacity-80"
                animate={{ x: position.x * 1.2, y: position.y * 1.2 }}
            >
                {text}
            </motion.span>
            <span className="relative z-20 text-white font-bold text-6xl md:text-9xl tracking-tighter mix-blend-overlay">
                {text}
            </span>
        </motion.div>
    );
};
