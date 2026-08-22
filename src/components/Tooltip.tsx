import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Tooltip = ({ text, children, className, ...rest }: { text: string; children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            {...rest}
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "absolute left-1/2 -translate-x-1/2 -top-10 z-50 px-2.5 py-1.5 rounded-md bg-zinc-900 border border-white/10 text-xs text-white shadow-xl whitespace-nowrap",
                            className
                        )}
                    >
                        {text}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-2 rotate-45 bg-zinc-900 border-r border-b border-white/10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
