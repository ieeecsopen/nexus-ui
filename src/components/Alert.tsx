
import React from 'react';
import { cn } from '../lib/utils';
// intent to keep if needed later, but for now I'll comment it out or remove it to fix unused var error if strict. Or just remove it. I'll remove it.

const alertVariants = {
    default: "bg-zinc-800 text-zinc-100 border-zinc-700",
    destructive: "border-red-900/50 text-red-100 bg-red-900/10 dark:border-red-900 dark:text-red-900",
    success: "border-green-900/50 text-green-100 bg-green-900/10",
    warning: "border-yellow-900/50 text-yellow-100 bg-yellow-900/10",
    info: "border-blue-900/50 text-blue-100 bg-blue-900/10",
};

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof alertVariants;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant = "default", ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(
            "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
            alertVariants[variant],
            className
        )}
        {...props}
    />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
