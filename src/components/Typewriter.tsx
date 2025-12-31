import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    delay?: number;
    className?: string;
    textClassName?: string;
    cursorClassName?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
    words = [],
    delay = 3000,
    className = "",
    textClassName = "",
    cursorClassName = ""
}) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (words.length === 0) return;

        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 150);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, delay]);

    return (
        <div className={`relative inline-block ${className}`}>
            <span className={textClassName}>{text}</span>
            <span className={`animate-pulse border-r-2 border-indigo-500 ml-1 h-[1em] inline-block align-middle ${cursorClassName}`}></span>
        </div>
    );
};
