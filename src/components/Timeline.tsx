import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface TimelineItemProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    date?: React.ReactNode;
    icon?: React.ReactNode;
}

export const Timeline = ({ items, className }: { items: TimelineItemProps[], className?: string }) => {
    return (
        <div className={cn("relative border-l border-zinc-800 ml-3 space-y-10", className)}>
            {items.map((item, index) => (
                <TimelineItem key={index} {...item} />
            ))}
        </div>
    );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, date, icon }) => {
    return (
        <div className="relative pl-8 md:pl-12">
            <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 ring-4 ring-zinc-900 border border-zinc-700">
                {icon ? <span className="h-2 w-2">{icon}</span> : <div className="h-2 w-2 rounded-full bg-zinc-500" />}
            </span>
            <div className="flex flex-col gap-1">
                {date && <span className="text-xs text-zinc-500 font-mono mb-1">{date}</span>}
                <h3 className="text-base font-semibold text-zinc-100 leading-none">{title}</h3>
                {description && <div className="text-sm text-zinc-400 mt-2">{description}</div>}
            </div>
        </div>
    );
};
