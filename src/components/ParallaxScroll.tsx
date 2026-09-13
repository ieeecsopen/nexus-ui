import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../lib/use-reduced-motion';

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
    const reducedMotion = useReducedMotion();
    // With reduce-motion the parallax offset IS the movement that can trigger
    // vestibular symptoms: render the settled layout instead.
    const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -offset]);

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div style={reducedMotion ? undefined : { y }}>
                {children}
            </motion.div>
        </div>
    );
};
