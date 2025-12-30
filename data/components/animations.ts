import { ComponentItem } from '../../types';

export const animationComponents: ComponentItem[] = [
  {
    id: '1',
    title: 'Animated Gradients',
    description: 'Smooth, flowing background gradients using WebGL. Perfect for landing pages.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-blue-600 via-indigo-500 to-cyan-500',
    popular: true,
    gridSpan: 'lg:col-span-2 lg:row-span-2',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedGradient = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <motion.div
        className="absolute -inset-[50%] opacity-50 blur-[100px]"
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'conic-gradient(from 0deg, #4f46e5, #06b6d4, #4f46e5)',
        }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />
    </div>
  );
};`,
    componentProps: [
      { 
        name: 'colors', 
        type: 'string[]', 
        default: 'Theme Defaults', 
        description: 'Array of hex codes for the gradient.', 
        example: "colors={['#ff0000', '#00ff00']}" 
      },
      { 
        name: 'speed', 
        type: 'number', 
        default: '20', 
        description: 'Duration of one full rotation in seconds.', 
        example: 'speed={15}' 
      },
    ],
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<AnimatedGradient />`
      }
    ]
  },
  {
    id: '2',
    title: 'Typewriter Effect',
    description: 'Simulate typing text with customizable cursors.',
    category: 'animation',
    price: 'pro',
    imageGradient: 'from-zinc-800 to-zinc-900',
    installation: 'npm install @nexus/ui',
    fullCode: `import { Typewriter } from '@nexus/ui';

export default function Hero() {
  return (
    <h1 className="text-4xl font-bold">
      We build <Typewriter words={['websites', 'apps', 'experiences']} />
    </h1>
  );
}`,
    componentProps: [
      { name: 'words', type: 'string[]', default: '[]', description: 'Array of strings to cycle through.', example: "words={['Hello', 'World']}" },
      { name: 'delay', type: 'number', default: '3000', description: 'Delay between words in ms.', example: 'delay={2000}' },
    ]
  },
  {
    id: '4',
    title: 'Glow Hover',
    description: 'Interactive hover states that follow the cursor.',
    category: 'animation',
    price: 'pro',
    imageGradient: 'from-cyan-500 to-blue-600',
    popular: true,
    installation: 'npm install @nexus/ui',
    fullCode: `// Requires mouse position hook
<div className="group relative rounded-xl border border-white/10 bg-zinc-900 px-8 py-16">
  <div 
    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
    style={{
      background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)'
    }}
  />
  <h3 className="text-lg font-semibold text-white">Hover me</h3>
</div>`,
    componentProps: []
  },
  {
    id: '8',
    title: '3D Card Tilt',
    description: 'Physics-based tilt effect on hover.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-indigo-500 to-blue-600',
    popular: true,
    installation: 'npm install @nexus/ui',
    fullCode: `import { motion, useMotionValue, useTransform } from "framer-motion";

export const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        className="w-full h-full bg-zinc-900 rounded-xl"
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      />
    </div>
  );
};`,
    componentProps: []
  },
  {
    id: '9',
    title: 'Text Reveal',
    description: 'Reveal text characters as you scroll down the page.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-emerald-400 to-teal-600',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion, useScroll, useTransform } from 'framer-motion';

export const TextReveal = ({ text }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.p style={{ opacity }} className="text-4xl font-bold">
      {text}
    </motion.p>
  );
};`,
    componentProps: [
       { name: 'text', type: 'string', default: '', description: 'Text to reveal.', example: 'text="Scroll to reveal"' }
    ]
  },
  {
    id: '10',
    title: 'Sparkles',
    description: 'Add magical sparkle effects to any text or component.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-yellow-400 to-amber-600',
    installation: 'npm install @nexus/ui',
    fullCode: `const Sparkles = () => {
  // Implementation of random SVG star generation
  return (
    <span className="relative">
      <span className="absolute inset-0 z-10 block">
        {/* Sparkle SVGs mapped here */}
      </span>
      <span className="relative z-20">Magical Text</span>
    </span>
  );
}`,
    componentProps: []
  },
  {
    id: '11',
    title: 'Confetti Explosion',
    description: 'Trigger a confetti explosion on button click.',
    category: 'animation',
    price: 'free',
    imageGradient: 'from-red-500 via-yellow-500 to-green-500',
    installation: 'npm install canvas-confetti',
    fullCode: `import confetti from 'canvas-confetti';

export const CelebrationBtn = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return <button onClick={handleClick}>Celebrate!</button>;
};`,
    componentProps: []
  },
  {
    id: '12',
    title: 'Parallax Scroll',
    description: 'Smooth parallax scrolling effect for images and text.',
    category: 'animation',
    price: 'pro',
    imageGradient: 'from-indigo-400 to-blue-500',
    installation: 'npm install @nexus/ui framer-motion',
    fullCode: `import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxImage = ({ src }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return <motion.img style={{ y }} src={src} />;
};`,
    componentProps: []
  }
];