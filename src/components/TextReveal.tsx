import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

interface TextRevealProps {
    text: string;
    className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);

    return (
        <motion.p style={{ opacity }} className={cn("text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500", className)}>
            {text}
        </motion.p>
    );
};
