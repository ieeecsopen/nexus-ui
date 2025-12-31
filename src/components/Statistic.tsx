import React from 'react';
import { cn } from '../lib/utils';
import { CountUp } from './Typewriter'; // Assuming we can reuse Typewriter or make a new counter.
// Actually Typewriter is string based. I'll make a simple numeric counter here.
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export const Statistic = ({ label, value, prefix, suffix, className }: { label: string; value: number; prefix?: string; suffix?: string; className?: string }) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    React.useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    React.useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
            }
        });
    }, [springValue]);

    return (
        <div className={cn("flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/50 border border-white/5", className)}>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
                {prefix}<span ref={ref}>0</span>{suffix}
            </div>
            <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider mt-1">
                {label}
            </div>
        </div>
    );
};
