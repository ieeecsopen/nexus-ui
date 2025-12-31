import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface AnimatedTabsProps {
    tabs: string[];
    defaultTab?: string;
    onChange?: (tab: string) => void;
    className?: string;
}

export const AnimatedTabs = ({ tabs, defaultTab, onChange, className }: AnimatedTabsProps) => {
    const [active, setActive] = useState(defaultTab || tabs[0]);

    const handleTabClick = (tab: string) => {
        setActive(tab);
        if (onChange) onChange(tab);
    };

    return (
        <div className={cn("flex space-x-1 rounded-full bg-zinc-900/50 p-1 w-fit border border-white/5", className)}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className="relative px-3 py-1.5 text-sm font-medium text-white outline-none transition px-4"
                >
                    {active === tab && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white rounded-full mix-blend-difference"
                            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                        />
                    )}
                    <span className="relative z-10 mix-blend-exclusion">{tab}</span>
                </button>
            ))}
        </div>
    );
};
