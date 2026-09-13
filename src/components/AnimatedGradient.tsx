import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedGradient = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...rest} className={`relative w-full h-full overflow-hidden bg-black ${className ?? ''}`}>
            <motion.div
                className="absolute -inset-[50%] opacity-50 blur-[100px]"
                animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    background: 'conic-gradient(from 0deg, #4f46e5, #06b6d4, #4f46e5)',
                }}
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />
        </div>
    );
};
