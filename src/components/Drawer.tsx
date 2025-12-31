import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { X } from 'lucide-react';

interface DrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    className?: string;
}

export const Drawer = ({ open, onOpenChange, children, direction = 'right', className }: DrawerProps) => {
    // Simple Drawer using Sheet logic but generic direction
    const variants = {
        left: { x: '-100%', y: 0 },
        right: { x: '100%', y: 0 },
        top: { x: 0, y: '-100%' },
        bottom: { x: 0, y: '100%' },
        center: { x: 0, y: 0 }, // For drawer open state
    };

    const isHorizontal = direction === 'left' || direction === 'right';

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={variants[direction]}
                        animate={{ x: 0, y: 0 }}
                        exit={variants[direction]}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className={cn(
                            "fixed z-50 bg-zinc-950 border-zinc-800 p-6 shadow-xl transition ease-in-out duration-300",
                            direction === 'right' && "right-0 top-0 h-full w-3/4 max-w-sm border-l",
                            direction === 'left' && "left-0 top-0 h-full w-3/4 max-w-sm border-r",
                            direction === 'bottom' && "bottom-0 left-0 w-full h-[500px] border-t rounded-t-xl",
                            direction === 'top' && "top-0 left-0 w-full h-[400px] border-b rounded-b-xl",
                            className
                        )}
                    >
                        <div className="absolute right-4 top-4">
                            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
