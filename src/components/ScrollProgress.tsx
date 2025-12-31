import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { cn } from '../lib/utils';

export const ScrollProgress = ({ className }: { className?: string }) => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className={cn("fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50", className)}
            style={{ scaleX: scrollYProgress }}
        />
    );
};
