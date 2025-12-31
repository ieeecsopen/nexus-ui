import React from 'react';
import { Sparkles as SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Sparkles = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <span className={cn("relative inline-block", className)}>
            <motion.div
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
                className="absolute -top-2 -right-3 text-yellow-300 pointer-events-none"
            >
                <SparklesIcon size={16} />
            </motion.div>
            <motion.div
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.5 }}
                className="absolute -bottom-2 -left-3 text-yellow-300 pointer-events-none"
            >
                <SparklesIcon size={12} />
            </motion.div>
            <motion.div
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.8 }}
                className="absolute top-1/2 -right-5 text-yellow-300 pointer-events-none"
            >
                <SparklesIcon size={10} />
            </motion.div>
            <span className="relative z-0">{children}</span>
        </span>
    );
}
