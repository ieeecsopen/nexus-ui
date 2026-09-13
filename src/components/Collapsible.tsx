import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "../lib/utils"
import { Button } from "./Button"

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    disabled?: boolean
    title?: string
    children: React.ReactNode
    className?: string
}

export const Collapsible = ({
    open,
    onOpenChange,
    disabled,
    title,
    children,
    className,
    ...rest
}: CollapsibleProps) => {
    const [isOpen, setIsOpen] = React.useState(open || false)

    React.useEffect(() => {
        if (open !== undefined) setIsOpen(open)
    }, [open])

    const toggle = () => {
        if (disabled) return
        const newState = !isOpen
        setIsOpen(newState)
        onOpenChange?.(newState)
    }

    return (
        <div {...rest} className={cn("w-[350px] space-y-2", className)}>
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold text-zinc-200">
                    {title}
                </h4>
                <Button variant="ghost" size="sm" className="w-9 p-0" onClick={toggle}>
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                </Button>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-2"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
