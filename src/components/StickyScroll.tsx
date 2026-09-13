import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../lib/use-reduced-motion';

export const StickyScroll = ({ content, contentClassName }: { content: { title: string; description: string; content?: React.ReactNode }[]; contentClassName?: string }) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const reducedMotion = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = content.length;

    useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-zinc-900"
            ref={ref}
            onScroll={(e) => {
                // Simple heuristic for active card
                const element = e.currentTarget;
                const scrollPosition = element.scrollTop;
                const cardHeight = element.scrollHeight / cardLength;
                const index = Math.round(scrollPosition / cardHeight);
                setActiveCard(Math.min(Math.max(index, 0), cardLength - 1));
            }}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={reducedMotion ? { duration: 0 } : undefined}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={reducedMotion ? { duration: 0 } : undefined}
                                className="text-kg text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                animate={{
                    background: activeCard % 2 === 0 ? "var(--slate-900)" : "var(--black)" // Placeholder logic
                }}
                className={cn("hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden", contentClassName)}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};
