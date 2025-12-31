import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

export const InfiniteScroll = ({
    fetchData,
    renderItem,
    className,
    loader = <Loader2 className="animate-spin" />
}: {
    fetchData: () => Promise<any[]>;
    renderItem: (item: any, index: number) => React.ReactNode;
    className?: string;
    loader?: React.ReactNode;
}) => {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observerTarget = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMore();
                }
            },
            { threshold: 1.0 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [hasMore, loading]);

    const loadMore = async () => {
        setLoading(true);
        try {
            const newItems = await fetchData();
            if (newItems.length === 0) setHasMore(false);
            setItems(prev => [...prev, ...newItems]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item, index) => renderItem(item, index))}
            <div ref={observerTarget} className="flex justify-center p-4">
                {loading && hasMore && <div className="text-zinc-500">{loader}</div>}
                {!hasMore && <div className="text-zinc-600 text-sm">No more items</div>}
            </div>
        </div>
    );
};
