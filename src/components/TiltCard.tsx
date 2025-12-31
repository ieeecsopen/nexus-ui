import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

interface TiltCardProps {
    children?: React.ReactNode;
    className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div style={{ perspective: 2000 }} className={`w-full h-full flex items-center justify-center ${className}`}>
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
                className="w-full h-full"
            >
                {children || <div className="w-full h-full bg-zinc-900 rounded-xl" />}
            </motion.div>
        </div>
    );
};
