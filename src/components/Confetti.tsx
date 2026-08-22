import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../lib/use-reduced-motion';

export const Confetti = ({ active = false }: { active?: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Falling, spinning particles are exactly the motion reduce-motion users opt
    // out of: the celebration renders nothing rather than moving.
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (!active || reducedMotion || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        const particles: any[] = [];
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4'];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: -10,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 5 + 2,
                speedX: Math.random() * 2 - 1,
                speedY: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * 10 - 5
            };
        }

        function loop() {
            if (!ctx) return; // Strict null check
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (particles.length < 100) {
                particles.push(createParticle());
            }

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();

                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;

                if (p.y > canvas.height) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            animationId = requestAnimationFrame(loop);
        }

        loop();

        return () => cancelAnimationFrame(animationId);
    }, [active, reducedMotion]);

    if (!active) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        />
    );
};
