import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    className?: string;
}

export const AccordionItem = ({ value, trigger, children, isOpen, onToggle, className, ...rest }: AccordionItemProps) => {
    return (
        <div {...rest} className={cn("border-b border-white/10", className)}>
            <button
                onClick={onToggle}
                className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-white"
            >
                {trigger}
                <ChevronDown
                    className={cn("h-4 w-4 shrink-0 transition-transform duration-200 text-zinc-400", isOpen && "rotate-180")}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden text-sm"
                    >
                        <div className="pb-4 pt-0 text-zinc-400">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    type?: 'single' | 'multiple';
    children: React.ReactNode;
    className?: string;
    defaultValue?: string | string[];
}

export const Accordion = ({ type = 'single', children, className, defaultValue }: AccordionProps) => {
    // Setup state for uncontrolled ease of use, though typical libraries use controlled components or context.
    // For simplicity, we'll assume the children use the AccordionItem directly or we use context.
    // To keep it simple and match the "fullCode" example somewhat, we'll implement a basic context provider version.

    const [openItems, setOpenItems] = React.useState<string[]>(
        Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
    );

    const handleToggle = (value: string) => {
        if (type === 'single') {
            setOpenItems(prev => prev.includes(value) ? [] : [value]);
        } else {
            setOpenItems(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
        }
    };

    return (
        <div className={cn("space-y-1", className)}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // This assumes children are AccordionItems. 
                    // In a real library like Radix, we'd use Context. 
                    // Here we cloneElement for simplicity as we build "Headless"-like UI.
                    return React.cloneElement(child as any, {
                        isOpen: openItems.includes((child.props as any).value),
                        onToggle: () => handleToggle((child.props as any).value)
                    });
                }
                return child;
            })}
        </div>
    );
};
