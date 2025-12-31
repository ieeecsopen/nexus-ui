import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
    title: string;
    description?: string;
}

export const StepWizard = ({ steps, currentStep, className }: { steps: Step[]; currentStep: number; className?: string }) => {
    return (
        <div className={cn("w-full py-4", className)}>
            <div className="relative flex items-center justify-between">
                {/* Connecting Lines */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-zinc-800 -z-10" />

                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;

                    return (
                        <div key={step.title} className="flex flex-col items-center gap-2 bg-zinc-950 px-2 min-w-[100px]">
                            <motion.div
                                initial={false}
                                animate={{
                                    backgroundColor: isActive || isCompleted ? "var(--indigo-600)" : "var(--zinc-900)",
                                    borderColor: isActive || isCompleted ? "var(--indigo-600)" : "var(--zinc-700)"
                                }}
                                className={cn(
                                    "h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 z-10",
                                    isActive ? "scale-110 shadow-[0_0_10px_rgba(79,70,229,0.5)]" : ""
                                )}
                            >
                                {isCompleted ? <Check className="h-4 w-4 text-white" /> : <span className={cn("text-zinc-500", (isActive || isCompleted) && "text-white")}>{index + 1}</span>}
                            </motion.div>
                            <div className="text-center">
                                <span className={cn("text-xs font-medium block", isActive ? "text-white" : "text-zinc-500")}>{step.title}</span>
                                {step.description && <span className="text-[10px] text-zinc-600 block">{step.description}</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
