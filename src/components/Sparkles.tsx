import React from 'react';
import { Sparkles as SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../lib/use-reduced-motion';

export const Sparkles = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    // The looping scale/opacity pulse is decorative movement; reduce-motion
    // users see the static sparkle icons instead.
    const reducedMotion = useReducedMotion();
    return(
        <span className={cn("relative inline-block", className)}>
            <motion.div
                animate={reducedMotion ? { scale: 1, opacity: 1 } : { scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
                className="absolute -top-2 -right-3 text-yellow-300 pointer-events-none"
            >
                <SparklesIcon size={16} />
            </motion.div>
            <motion.div
                animate={reducedMotion ? { scale: 1, opacity: 1 } : { scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.5 }}
                className="absolute -bottom-2 -left-3 text-yellow-300 pointer-events-none"
            >
                <SparklesIcon size={12} />
            </motion.div>
            <motion.div
                animate={reducedMotion ? { scale: 1, opacity: 1 } : { scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.8 }}
                className="absolute top-1/2 -right-5 text-yellow-300 pointer-events-none"
            >
                <SparklesIcon size={10} />
            </motion.div>
            <span className="relative z-0">{children}</span>
        </span>
    );
}
