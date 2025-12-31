import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
    viewportMargin?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    duration = 0.5,
    yOffset = 40,
    className = "",
    viewportMargin = "-50px",
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const FadeInStagger: React.FC<FadeInProps & { staggerDelay?: number }> = ({
    children,
    staggerDelay = 0.1,
    className = "",
    ...props
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export const FadeInItem: React.FC<FadeInProps> = ({
    children,
    yOffset = 20,
    ...props
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { opacity: 1, y: 0, transition: { ease: [0.21, 0.47, 0.32, 0.98], duration: 0.5 } }
            }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
