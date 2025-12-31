import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';

export const Carousel = ({ items, className }: { items: React.ReactNode[]; className?: string }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let nextIndex = index + newDirection;
        if (nextIndex < 0) nextIndex = items.length - 1;
        if (nextIndex >= items.length) nextIndex = 0;
        setIndex(nextIndex);
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.5,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.5,
            };
        },
    };

    return (
        <div className={cn("relative h-64 w-full flex items-center justify-center overflow-hidden", className)}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full flex items-center justify-center p-4"
                >
                    {items[index]}
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
                <Button variant="glass" size="icon" className="pointer-events-auto rounded-full" onClick={() => paginate(-1)}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="glass" size="icon" className="pointer-events-auto rounded-full" onClick={() => paginate(1)}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {items.map((_, i) => (
                    <div
                        key={i}
                        className={cn("h-1.5 w-1.5 rounded-full bg-white/50 transition-colors", i === index && "bg-white w-3")}
                    />
                ))}
            </div>
        </div>
    );
};
