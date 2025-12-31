import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: 'left' | 'right';
    className?: string;
}

export const Sheet = ({ isOpen, onClose, children, side = 'right', className }: SheetProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: side === 'right' ? '100%' : '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: side === 'right' ? '100%' : '-100%' }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className={cn(
                            "fixed z-50 h-full w-3/4 max-w-sm bg-zinc-950 border-zinc-800 shadow-xl p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300",
                            side === 'right' ? "right-0 top-0 border-l" : "left-0 top-0 border-r",
                            className
                        )}
                    >
                        <button onClick={onClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                            <X className="h-4 w-4 text-zinc-400" />
                            <span className="sr-only">Close</span>
                        </button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
