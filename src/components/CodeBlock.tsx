import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Check, Copy } from 'lucide-react';

export const CodeBlock = ({ code, language = 'javascript', className, ...rest }: { code: string; language?: string } & React.HTMLAttributes<HTMLDivElement>) => {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div {...rest} className={cn("relative group rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden", className)}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-900 bg-zinc-900/50">
                <span className="text-xs text-zinc-500 font-mono">{language}</span>
                <button onClick={onCopy} className="text-zinc-500 hover:text-white transition-colors">
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-zinc-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};
