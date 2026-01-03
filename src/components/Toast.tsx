import React, { useState, useEffect, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { X, CheckCircle, AlertTriangle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
    id: string;
    message: string;
    type?: ToastType;
    duration?: number;
}

interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Omit<Toast, 'id'>) => {
        const id = Math.random().toString(36).substring(7);
        const newToast = { ...toast, id };
        setToasts((prev) => [...prev, newToast]);
        if (toast.duration !== Infinity) {
            setTimeout(() => removeToast(id), toast.duration || 3000);
        }
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

const ToastItem: React.FC<{ toast: Toast; onRemove: (id: string) => void }> = ({ toast, onRemove }) => {
    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            layout
            className={cn(
                "pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950 p-4 shadow-lg text-sm text-zinc-100",
                "backdrop-blur-xl"
            )}
        >
            {icons[toast.type || 'info']}
            <div className="flex-1">{toast.message}</div>
            <button onClick={() => onRemove(toast.id)} className="text-zinc-500 hover:text-zinc-100">
                <X className="w-4 h-4" />
            </button>
        </motion.div>
    );
};

export const Toaster = () => null; // Placeholder if users want to drop it in (not needed with Provider usually, but good for structure)
