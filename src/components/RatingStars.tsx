import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
    max?: number;
    value: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    className?: string;
}

export const RatingStars = ({ max = 5, value, onChange, readOnly = false, className, ...rest }: RatingStarsProps) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    return (
        <div {...rest} className={cn("flex space-x-1", className)}>
            {Array.from({ length: max }).map((_, i) => {
                const rating = i + 1;
                const isAuthCore = rating <= (hoverValue ?? value);

                return (
                    <button
                        key={i}
                        type="button"
                        disabled={readOnly}
                        onClick={() => onChange?.(rating)}
                        onMouseEnter={() => !readOnly && setHoverValue(rating)}
                        onMouseLeave={() => !readOnly && setHoverValue(null)}
                        className={cn("focus:outline-none transition-transform hover:scale-110", readOnly && "cursor-default hover:scale-100")}
                    >
                        <Star
                            className={cn(
                                "w-5 h-5",
                                isAuthCore ? "fill-yellow-400 text-yellow-400" : "text-zinc-600 fill-transparent"
                            )}
                        />
                    </button>
                );
            })}
        </div>
    );
};
