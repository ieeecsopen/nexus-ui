import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

interface ParallaxScrollProps {
    children?: React.ReactNode;
    className?: string;
    offset?: number;
}

export const ParallaxScroll = ({ children, className, offset = 50 }: ParallaxScrollProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};
