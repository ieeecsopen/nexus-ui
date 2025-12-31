import React, { useMemo } from 'react';
import { cn } from '../lib/utils';

interface MasonryProps {
    columns?: number;
    gap?: number;
    children: React.ReactNode[];
    className?: string;
}

export const Masonry = ({ columns = 3, gap = 24, children, className }: MasonryProps) => {
    const columnWrapper: React.ReactNode[][] = useMemo(() => {
        const cols: React.ReactNode[][] = Array.from({ length: columns }, () => []);
        React.Children.forEach(children, (child, i) => {
            cols[i % columns].push(child);
        });
        return cols;
    }, [children, columns]);

    return (
        <div
            className={cn("flex", className)}
            style={{ gap: `${gap}px` }}
        >
            {columnWrapper.map((col, i) => (
                <div key={i} className="flex flex-col flex-1" style={{ gap: `${gap}px` }}>
                    {col}
                </div>
            ))}
        </div>
    );
};
