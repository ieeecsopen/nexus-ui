import * as React from "react"
import { cn } from "../lib/utils"

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ className, ratio = 1 / 1, style, ...props }, ref) => (
        <div
            ref={ref}
            style={{
                position: "relative",
                width: "100%",
                paddingBottom: `${100 / ratio}%`,
                ...style,
            }}
            className={cn(className)}
            {...props}
        >
            <div className="absolute inset-0 [&>img]:object-cover [&>img]:h-full [&>img]:w-full">
                {props.children}
            </div>
        </div>
    )
)
AspectRatio.displayName = "AspectRatio"
