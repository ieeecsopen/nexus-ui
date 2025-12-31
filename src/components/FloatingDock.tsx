import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '../lib/utils';

export const FloatingDock = ({ items, className }: { items: { title: string; icon: React.ReactNode; href: string }[]; className?: string }) => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 w-fit items-end gap-4 rounded-2xl bg-zinc-900 px-4 pb-3 border border-white/10",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} title={item.title} icon={item.icon} href={item.href} key={item.title} />
            ))}
        </motion.div>
    );
};

const IconContainer: React.FC<{ mouseX: MotionValue<number>; title: string; icon: React.ReactNode; href: string }> = ({ mouseX, title, icon, href }) => {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val: number) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height }}
            className="aspect-square rounded-full bg-zinc-800 flex items-center justify-center relative group"
        >
            <div className="h-full w-full flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-200">
                {icon}
            </div>
            <span className="absolute -top-8 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                {title}
            </span>
        </motion.div>
    );
}
