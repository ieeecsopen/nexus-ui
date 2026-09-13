import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export const Progress = ({ value = 0, max = 100, className, ...rest }: { value?: number; max?: number } & React.HTMLAttributes<HTMLDivElement>) => {
    const percentage = Math.min(Math.max(value || 0, 0), max) / max * 100;

    return (
        <div {...rest} className={cn("h-2 w-full bg-zinc-800 rounded-full overflow-hidden", className)}>
            <motion.div
                className="h-full bg-indigo-600"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
        </div>
    );
};
