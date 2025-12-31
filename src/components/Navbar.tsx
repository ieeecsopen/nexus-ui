import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() as number;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-110%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "sticky top-4 inset-x-0 mx-auto max-w-2xl z-50 px-8 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg",
                className
            )}
        >
            <nav className="flex items-center justify-between">
                {children}
            </nav>
        </motion.header>
    );
};
